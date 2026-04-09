#!/usr/bin/env node
/**
 * Generates calculator-registry.json from current codebase data:
 *  - sitemap.xml (all calculator slugs + priorities)
 *  - generate-prerender.js CALCULATORS array (top-20 metadata)
 *  - calculators-core.js DB keys (category mapping)
 *
 * Run once: node scripts/build-registry.js
 * Then delete this file — calculator-registry.json becomes the source of truth.
 */

'use strict';

const fs   = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

// 1. Parse sitemap.xml for all calculator URLs
const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
const calcUrlRegex = /<loc>https:\/\/calclabz\.com\/([\w-]+-calculator)<\/loc>[\s\S]*?<priority>([\d.]+)<\/priority>/g;
const sitemapEntries = [];
let m;
while ((m = calcUrlRegex.exec(sitemap)) !== null) {
  sitemapEntries.push({ slug: m[1], priority: m[2] });
}

// Also get non-calculator entries (like ratio, squareroot etc)
const allUrlRegex = /<loc>https:\/\/calclabz\.com\/([\w-]+)<\/loc>[\s\S]*?<priority>([\d.]+)<\/priority>/g;
const allEntries = [];
while ((m = allUrlRegex.exec(sitemap)) !== null) {
  if (m[1] !== '' && !m[1].startsWith('blog/') && m[1] !== 'about' && m[1] !== 'privacy' && m[1] !== 'terms') {
    allEntries.push({ slug: m[1], priority: m[2] });
  }
}

// 2. Parse generate-prerender.js for rich metadata (top-20)
const prerenderSrc = fs.readFileSync(path.join(ROOT, 'scripts', 'generate-prerender.js'), 'utf8');
const calcBlockMatch = prerenderSrc.match(/const CALCULATORS = \[([\s\S]*?)\n\];/);
let prerendered = [];
if (calcBlockMatch) {
  // Use a simpler extraction: find all id/slug/cat/title/desc fields
  const entries = calcBlockMatch[1].split(/\n  \{/);
  entries.forEach(function(block) {
    const idM = block.match(/id:\s*'([^']+)'/);
    const slugM = block.match(/slug:\s*'([^']+)'/);
    const catM = block.match(/cat:\s*'([^']+)'/);
    const titleM = block.match(/title:\s*'([^']+)'/);
    const descM = block.match(/desc:\s*'([^']+)'/);
    if (idM && slugM) {
      prerendered.push({
        id: idM[1],
        slug: slugM[1],
        cat: catM ? catM[1].toLowerCase() : 'unknown',
        title: titleM ? titleM[1] : '',
        desc: descM ? descM[1] : '',
      });
    }
  });
}
const prerenderMap = {};
prerendered.forEach(function(p) { prerenderMap[p.slug] = p; });

// 3. Parse ALL calculator JS files for DB key → category mapping
const jsDir = path.join(ROOT, 'assets', 'js');
const jsFiles = fs.readdirSync(jsDir).filter(function(f) { return f.startsWith('calculators') && f.endsWith('.js'); });
const dbMap = {};

jsFiles.forEach(function(f) {
  const src = fs.readFileSync(path.join(jsDir, f), 'utf8');
  // Match DB entries like:  calcId: { name:"...", ... cat:"...",
  // Handles multi-line: key starts at indent, name and cat on same or following lines
  const regex = /(?:^|\n)\s{0,8}(\w+):\s*\{[^}]*?name:\s*"([^"]*)"[^}]*?cat:\s*"([^"]*)"/g;
  let match;
  while ((match = regex.exec(src)) !== null) {
    if (!dbMap[match[1]]) {
      dbMap[match[1]] = { name: match[2], cat: match[3] };
    }
  }
});


// 4. Parse blog posts from blog-posts.js
const blogSrc = fs.readFileSync(path.join(ROOT, 'assets', 'js', 'blog-posts.js'), 'utf8');
const blogSlugRegex = /slug:'([^']+)'.*?calc:'([^']+)'/g;
const blogMap = {};
while ((m = blogSlugRegex.exec(blogSrc)) !== null) {
  blogMap[m[2]] = m[1]; // calc id → blog slug
}

// 5. Build registry
const registry = allEntries.map(function(entry) {
  const slug = entry.slug;
  const pr = prerenderMap[slug];
  const id = slug.replace(/-calculator$/, '');
  const dbEntry = dbMap[id];

  const result = {
    id: pr ? pr.id : id,
    slug: slug,
    cat: pr ? pr.cat : (dbEntry ? dbEntry.cat : 'unknown'),
    priority: entry.priority,
  };

  if (pr) {
    result.prerender = true;
    result.title = pr.title;
    result.desc = pr.desc;
  }

  if (blogMap[result.id]) {
    result.blogSlug = blogMap[result.id];
  }

  return result;
});

// Sort by category then priority (descending)
registry.sort(function(a, b) {
  if (a.cat !== b.cat) return a.cat.localeCompare(b.cat);
  return parseFloat(b.priority) - parseFloat(a.priority);
});

// Write
const outPath = path.join(__dirname, 'calculator-registry.json');
fs.writeFileSync(outPath, JSON.stringify(registry, null, 2) + '\n', 'utf8');

console.log('\n✅ Generated calculator-registry.json');
console.log('   Total entries:  ' + registry.length);
console.log('   Pre-rendered:   ' + registry.filter(function(r) { return r.prerender; }).length);
console.log('   With blog:      ' + registry.filter(function(r) { return r.blogSlug; }).length);
console.log('   Categories:     ' + [...new Set(registry.map(function(r) { return r.cat; }))].join(', '));
console.log('');
