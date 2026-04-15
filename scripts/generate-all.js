#!/usr/bin/env node
/**
 * Calc Labz — Unified Build Script
 * ====================================
 * Single source of truth: generates all derived config files from
 * the calculator-registry.json + generate-prerender.js.
 *
 * Generates:
 *   1. Pre-rendered HTML files (calculator + category + blog pages)
 *   2. sitemap.xml (deduplicated, with category + blog pages)
 *   3. serve.json rewrites (ALL calculators, categories, blog, 404 catch-all)
 *   4. vercel.json rewrites (ALL calculators, categories, blog, 404 catch-all)
 *
 * Usage:  node scripts/generate-all.js
 */

'use strict';

var fs   = require('fs');
var path = require('path');

var ROOT         = path.resolve(__dirname, '..');
var REGISTRY     = require('./calculator-registry.json');
var SERVE_PATH   = path.join(ROOT, 'serve.json');
var VERCEL_PATH  = path.join(ROOT, 'vercel.json');
var SITEMAP_PATH = path.join(ROOT, 'sitemap.xml');
var TODAY = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// ── STAGGERED DATES ────────────────────────────────────────────────────────
// Spread calculator lastmod dates across Jan-Apr 2026 based on priority
// so Google doesn't see all pages as mass-generated on the same day.
var CAT_BASE_DATES = {
  finance: '2026-01-10', health: '2026-01-18', math: '2026-01-25',
  everyday: '2026-02-02', education: '2026-02-10', engineering: '2026-02-18',
  construction: '2026-02-25', unit: '2026-03-05', datetime: '2026-03-12',
  science: '2026-03-20', unknown: '2026-03-28'
};

function getStaggeredDate(entry, indexInCat) {
  var base = CAT_BASE_DATES[entry.cat] || '2026-03-28';
  var d = new Date(base);
  // Spread entries within category: each gets +2-3 days from base
  d.setDate(d.getDate() + (indexInCat * 2));
  // But cap at TODAY (don't set future dates)
  var now = new Date();
  if (d > now) d = now;
  return d.toISOString().split('T')[0];
}

// Build per-category index for staggered dates
var catIndexMap = {};
REGISTRY.forEach(function(c) {
  if (!catIndexMap[c.cat]) catIndexMap[c.cat] = 0;
  c._catIndex = catIndexMap[c.cat]++;
});

// Import prerender module — this runs pre-rendering as side effect
var prerender = require('./generate-prerender.js');
var CATEGORIES = prerender.CATEGORIES || [];

// Import trust page generator — generates about, privacy, terms, contact, disclaimer, editorial-policy
var trustPages = require('./generate-trust-pages.js');

// ── 1. GENERATE SITEMAP INDEX + CHILD SITEMAPS ─────────────────────────────

function urlsetOpen() {
  return '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n' +
    '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n' +
    '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n' +
    '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n\n';
}

function addUrl(loc, lastmod, changefreq, priority) {
  return '  <url><loc>' + loc + '</loc><lastmod>' + lastmod + '</lastmod><changefreq>' + changefreq + '</changefreq><priority>' + priority + '</priority></url>\n';
}

function generateSitemap() {
  var BASE = 'https://calclabz.com';
  var totalUrls = 0;

  // ── sitemap-core.xml: Homepage, static pages, category pages ──
  var core = urlsetOpen();
  core += '  <!-- HOMEPAGE -->\n';
  core += addUrl(BASE + '/', TODAY, 'weekly', '1.0');
  core += '\n  <!-- STATIC PAGES -->\n';
  ['about', 'contact', 'privacy', 'terms', 'disclaimer', 'editorial-policy'].forEach(function(page) {
    var pri = (page === 'about' || page === 'contact') ? '0.5' : '0.4';
    core += addUrl(BASE + '/' + page, '2026-03-01', 'monthly', pri);
  });
  core += '\n  <!-- BLOG LISTING -->\n';
  core += addUrl(BASE + '/blog', TODAY, 'weekly', '0.7');
  core += '\n  <!-- CATEGORY PAGES (' + CATEGORIES.length + ') -->\n';
  CATEGORIES.forEach(function(cat) {
    core += addUrl(BASE + '/' + cat.slug, '2026-02-15', 'weekly', '0.8');
  });
  core += '\n</urlset>\n';
  var coreCount = 1 + 6 + 1 + CATEGORIES.length;
  totalUrls += coreCount;
  fs.writeFileSync(path.join(ROOT, 'sitemap-core.xml'), core, 'utf8');
  console.log('  ✓  sitemap-core.xml — ' + coreCount + ' URLs');

  // ── sitemap-calculators.xml: All calculators with staggered dates ──
  var calcs = urlsetOpen();
  var catOrder = ['math', 'finance', 'health', 'everyday', 'unit', 'datetime', 'engineering', 'construction', 'education', 'science'];
  var catNames = {
    math: 'MATH', finance: 'FINANCE', health: 'HEALTH',
    everyday: 'EVERYDAY / LIFESTYLE', unit: 'UNIT CONVERSION',
    datetime: 'TIME & DATE', engineering: 'SCIENCE / ENGINEERING',
    construction: 'CONSTRUCTION', education: 'EDUCATION', science: 'SCIENCE'
  };
  var calcCount = 0;

  catOrder.forEach(function(cat) {
    var entries = REGISTRY.filter(function(c) { return c.cat === cat; });
    if (!entries.length) return;
    calcs += '  <!-- CALCULATORS — ' + (catNames[cat] || cat.toUpperCase()) + ' (' + entries.length + ') -->\n';
    entries.forEach(function(c) {
      var dateStr = getStaggeredDate(c, c._catIndex);
      calcs += addUrl(BASE + '/' + c.slug, dateStr, 'monthly', c.priority || '0.6');
      calcCount++;
    });
    calcs += '\n';
  });

  // Unknown category calcs
  var unknownEntries = REGISTRY.filter(function(c) {
    return catOrder.indexOf(c.cat) === -1;
  });
  if (unknownEntries.length) {
    calcs += '  <!-- CALCULATORS — OTHER (' + unknownEntries.length + ') -->\n';
    unknownEntries.forEach(function(c) {
      var dateStr = getStaggeredDate(c, c._catIndex);
      calcs += addUrl(BASE + '/' + c.slug, dateStr, 'monthly', c.priority || '0.5');
      calcCount++;
    });
    calcs += '\n';
  }
  calcs += '</urlset>\n';
  totalUrls += calcCount;
  fs.writeFileSync(path.join(ROOT, 'sitemap-calculators.xml'), calcs, 'utf8');
  console.log('  ✓  sitemap-calculators.xml — ' + calcCount + ' URLs');

  // ── sitemap-blog.xml: All blog posts ──
  var blogXml = urlsetOpen();
  var blogCount = 0;
  try {
    var vm = require('vm');
    var blogSrc = fs.readFileSync(path.join(ROOT, 'assets', 'js', 'blog-posts.js'), 'utf8');
    var sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(blogSrc, sandbox);
    var blogPosts = sandbox.BLOG_POSTS || [];
    if (blogPosts.length) {
      blogPosts.forEach(function(post) {
        var dateStr = TODAY;
        if (post.date) {
          var months = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
                         Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
          var parts = post.date.split(' ');
          dateStr = (parts[1] || '2026') + '-' + (months[parts[0]] || '01') + '-01';
        }
        blogXml += addUrl(BASE + '/blog/' + post.slug, dateStr, 'monthly', '0.7');
        blogCount++;
      });
    }
  } catch (e) { /* ignore */ }
  blogXml += '\n</urlset>\n';
  totalUrls += blogCount;
  fs.writeFileSync(path.join(ROOT, 'sitemap-blog.xml'), blogXml, 'utf8');
  console.log('  ✓  sitemap-blog.xml — ' + blogCount + ' URLs');

  // ── sitemap.xml (sitemap index) ──
  var idx = '<?xml version="1.0" encoding="UTF-8"?>\n';
  idx += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  idx += '  <sitemap><loc>' + BASE + '/sitemap-core.xml</loc><lastmod>' + TODAY + '</lastmod></sitemap>\n';
  idx += '  <sitemap><loc>' + BASE + '/sitemap-calculators.xml</loc><lastmod>' + TODAY + '</lastmod></sitemap>\n';
  idx += '  <sitemap><loc>' + BASE + '/sitemap-blog.xml</loc><lastmod>' + TODAY + '</lastmod></sitemap>\n';
  idx += '</sitemapindex>\n';
  fs.writeFileSync(SITEMAP_PATH, idx, 'utf8');
  console.log('  ✓  sitemap.xml (index) — 3 child sitemaps, ' + totalUrls + ' total URLs');

  return totalUrls;
}

// ── 2. UPDATE SERVE.JSON REWRITES ──────────────────────────────────────────

function updateServeRewrites() {
  var serve = JSON.parse(fs.readFileSync(SERVE_PATH, 'utf8'));

  // Enable clean URLs so /emi-calculator auto-resolves to /emi-calculator.html
  serve.cleanUrls = true;

  // Static page rewrites — point to actual HTML files with pre-rendered content
  var staticRewrites = [
    { source: '/about',             destination: '/about.html' },
    { source: '/contact',           destination: '/contact.html' },
    { source: '/privacy',           destination: '/privacy.html' },
    { source: '/terms',             destination: '/terms.html' },
    { source: '/disclaimer',        destination: '/disclaimer.html' },
    { source: '/editorial-policy',  destination: '/editorial-policy.html' }
  ];

  // ALL calculator rewrites (every registry entry gets a rewrite)
  var calcRewrites = REGISTRY.map(function(c) {
    return { source: '/' + c.slug, destination: '/' + c.slug + '.html' };
  });

  // Category page rewrites
  var categoryRewrites = CATEGORIES.map(function(cat) {
    return { source: '/' + cat.slug, destination: '/' + cat.slug + '.html' };
  });

  // Blog post rewrites to static HTML (MUST come before blog catch-all)
  var blogRewrites = [];
  try {
    var vm = require('vm');
    var blogSrc = fs.readFileSync(path.join(ROOT, 'assets', 'js', 'blog-posts.js'), 'utf8');
    var sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(blogSrc, sandbox);
    (sandbox.BLOG_POSTS || []).forEach(function(post) {
      blogRewrites.push({
        source: '/blog/' + post.slug,
        destination: '/blog/' + post.slug + '.html'
      });
    });
  } catch (e) { /* ignore */ }

  // Note: cleanUrls:true handles .html resolution automatically.
  // Only add specific SPA routes — no broad catch-alls that override cleanUrls.
  var spaRoutes = [
    { source: '/blog', destination: '/blog.html' }
  ];

  serve.rewrites = staticRewrites
    .concat(calcRewrites)
    .concat(categoryRewrites)
    .concat(blogRewrites)
    .concat(spaRoutes);

  fs.writeFileSync(SERVE_PATH, JSON.stringify(serve, null, 2) + '\n', 'utf8');
  console.log('  ✓  serve.json — ' + calcRewrites.length + ' calculators + ' + categoryRewrites.length + ' categories + ' + blogRewrites.length + ' blog + 404');
}

// ── 3. UPDATE VERCEL.JSON REWRITES ─────────────────────────────────────────

function updateVercelRewrites() {
  var vercel = JSON.parse(fs.readFileSync(VERCEL_PATH, 'utf8'));

  // Keep existing redirects intact
  var existingRedirects = vercel.redirects || [];

  // Add old slug redirects for renamed calculators
  var slugRedirects = [
    { source: '/nsccalculator-calculator', destination: '/nsc-calculator', statusCode: 301 },
    { source: '/apycalculator-calculator', destination: '/apy-calculator', statusCode: 301 }
  ];
  // Merge with existing redirects (avoid duplicates)
  var existingSources = {};
  existingRedirects.forEach(function(r) { existingSources[r.source] = true; });
  slugRedirects.forEach(function(r) {
    if (!existingSources[r.source]) existingRedirects.push(r);
  });

  var existingHeaders = vercel.headers || [];

  // Build new rewrites
  var rewrites = [];

  // Static pages — real HTML files with pre-rendered content
  rewrites.push({ source: '/about', destination: '/about.html' });
  rewrites.push({ source: '/contact', destination: '/contact.html' });
  rewrites.push({ source: '/privacy', destination: '/privacy.html' });
  rewrites.push({ source: '/terms', destination: '/terms.html' });
  rewrites.push({ source: '/disclaimer', destination: '/disclaimer.html' });
  rewrites.push({ source: '/editorial-policy', destination: '/editorial-policy.html' });

  // ALL calculator rewrites
  REGISTRY.forEach(function(c) {
    rewrites.push({ source: '/' + c.slug, destination: '/' + c.slug + '.html' });
  });

  // Category page rewrites
  CATEGORIES.forEach(function(cat) {
    rewrites.push({ source: '/' + cat.slug, destination: '/' + cat.slug + '.html' });
  });

  // Blog post rewrites
  try {
    var vm = require('vm');
    var blogSrc = fs.readFileSync(path.join(ROOT, 'assets', 'js', 'blog-posts.js'), 'utf8');
    var sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(blogSrc, sandbox);
    (sandbox.BLOG_POSTS || []).forEach(function(post) {
      rewrites.push({
        source: '/blog/' + post.slug,
        destination: '/blog/' + post.slug + '.html'
      });
    });
  } catch (e) { /* ignore */ }

  // Blog listing page
  rewrites.push({ source: '/blog', destination: '/blog.html' });

  // Blog catch-all for non-pre-rendered blog routes
  rewrites.push({ source: '/blog/:path*', destination: '/index.html' });

  // 404 catch-all (must be last)
  rewrites.push({
    source: '/((?!assets|manifest\\.json|robots\\.txt|sitemap\\.xml|sw\\.js|og-image\\.png|icon-192\\.png|icon-512\\.png|calclabz-logo\\.png).*)',
    destination: '/404.html'
  });

  vercel.redirects = existingRedirects;
  vercel.rewrites = rewrites;
  vercel.headers = existingHeaders;

  fs.writeFileSync(VERCEL_PATH, JSON.stringify(vercel, null, 2) + '\n', 'utf8');
  console.log('  ✓  vercel.json — ' + (rewrites.length - 2) + ' rewrites + blog catch-all + 404 catch-all');
}

// ── 4. VALIDATE ────────────────────────────────────────────────────────────

function validate() {
  // Check that all pre-rendered HTML files exist
  var missing = [];
  REGISTRY.forEach(function(c) {
    var file = path.join(ROOT, c.slug + '.html');
    if (!fs.existsSync(file)) missing.push(c.slug);
  });

  if (missing.length) {
    console.warn('\n⚠️  Missing HTML files for ' + missing.length + ' calculators:');
    missing.slice(0, 10).forEach(function(s) { console.warn('   ' + s); });
    if (missing.length > 10) console.warn('   ... and ' + (missing.length - 10) + ' more');
  } else {
    console.log('  ✓  All ' + REGISTRY.length + ' calculator HTML files exist');
  }

  // Check category pages
  var missingCats = [];
  CATEGORIES.forEach(function(cat) {
    var file = path.join(ROOT, cat.slug + '.html');
    if (!fs.existsSync(file)) missingCats.push(cat.slug);
  });

  if (missingCats.length) {
    console.warn('\n⚠️  Missing category HTML files:');
    missingCats.forEach(function(s) { console.warn('   ' + s); });
  } else {
    console.log('  ✓  All ' + CATEGORIES.length + ' category HTML files exist');
  }

  // Check blog directory
  var blogDir = path.join(ROOT, 'blog');
  if (fs.existsSync(blogDir)) {
    var blogFiles = fs.readdirSync(blogDir).filter(function(f) { return f.endsWith('.html'); });
    console.log('  ✓  ' + blogFiles.length + ' blog HTML files exist');
  }

  // Check 404
  if (fs.existsSync(path.join(ROOT, '404.html'))) {
    console.log('  ✓  404.html exists');
  } else {
    console.warn('  ⚠  404.html is missing!');
  }
}

// ── MAIN ────────────────────────────────────────────────────────────────────

console.log('\n🔧 Calc Labz — Unified Build\n');

var count = generateSitemap();
updateServeRewrites();
updateVercelRewrites();
// Pre-render already ran via require('./generate-prerender.js')
validate();

console.log('\n✅ Build complete. ' + count + ' URLs in sitemap.\n');
