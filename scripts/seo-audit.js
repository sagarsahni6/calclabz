#!/usr/bin/env node
/**
 * Phase 7.1 — SEO Audit Health Check Script
 * Validates all SEO requirements across all calculator pages.
 * Run: node scripts/seo-audit.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const issues = [];
const stats = { total: 0, pass: 0, warn: 0, fail: 0 };

function check(file, test, msg) {
  stats.total++;
  if (test) { stats.pass++; }
  else { issues.push({ file, msg }); stats.fail++; }
}

// Get all calculator files
const calcFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('-calculator.html'));
console.log(`\n🔍 SEO Audit — Scanning ${calcFiles.length} calculator pages\n`);

const titles = {};
const descriptions = {};
const h1s = {};

calcFiles.forEach(fn => {
  const fp = path.join(ROOT, fn);
  const html = fs.readFileSync(fp, 'utf8');

  // 1. Has unique <title>
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const title = titleMatch ? titleMatch[1] : '';
  check(fn, title.length > 0, 'Missing <title> tag');
  check(fn, title.length >= 30, `Title too short (${title.length} chars): "${title}"`);
  if (titles[title]) { check(fn, false, `Duplicate title with ${titles[title]}`); }
  titles[title] = fn;

  // 2. Has unique meta description
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
  const desc = descMatch ? descMatch[1] : '';
  check(fn, desc.length > 0, 'Missing meta description');
  check(fn, desc.length >= 50, `Description too short (${desc.length} chars)`);
  if (descriptions[desc]) { check(fn, false, `Duplicate description with ${descriptions[desc]}`); }
  descriptions[desc] = fn;

  // 3. Has unique <h1>
  const h1Match = html.match(/<h1>([^<]+)<\/h1>/);
  const h1 = h1Match ? h1Match[1] : '';
  check(fn, h1.length > 0, 'Missing <h1> tag');
  if (h1s[h1]) { check(fn, false, `Duplicate H1 with ${h1s[h1]}`); }
  h1s[h1] = fn;

  // 4. Has canonical URL
  check(fn, html.includes('rel="canonical"'), 'Missing canonical URL');

  // 5. Has WebApplication schema
  check(fn, html.includes('"WebApplication"'), 'Missing WebApplication schema');

  // 6. Has FAQPage schema
  check(fn, html.includes('"FAQPage"'), 'Missing FAQPage schema');

  // 7. Has breadcrumb
  check(fn, html.includes('seo-breadcrumb'), 'Missing breadcrumb navigation');

  // 8. Has author byline
  check(fn, html.includes('seo-author-byline'), 'Missing author byline');

  // 9. Has enriched content sections
  check(fn, html.includes('seo-section'), 'Missing enriched content sections');

  // 10. Has robots meta
  check(fn, html.includes('name="robots"'), 'Missing robots meta tag');

  // 11. Has og:title
  check(fn, html.includes('og:title'), 'Missing Open Graph title');

  // 12. Has og:description
  check(fn, html.includes('og:description'), 'Missing Open Graph description');

  // 13. Has structured breadcrumb schema
  check(fn, html.includes('"BreadcrumbList"'), 'Missing BreadcrumbList schema');

  // 14. Has related calculators
  check(fn, html.includes('seo-related-grid'), 'Missing related calculators grid');

  // 15. Has noscript fallback
  check(fn, html.includes('<noscript>'), 'Missing noscript fallback');

  // 16. No broken internal links to /unknown-calculators
  check(fn, !html.includes('/unknown-calculators'), 'Contains broken /unknown-calculators link');

  // 17. Has footer
  check(fn, html.includes('class="footer"'), 'Missing footer');
});

// ── RESULTS ──
console.log('━'.repeat(60));
console.log(`\n📊 SEO AUDIT RESULTS`);
console.log(`   Total checks:  ${stats.total}`);
console.log(`   ✅ Passed:     ${stats.pass}`);
console.log(`   ❌ Failed:     ${stats.fail}`);
console.log(`   Score:         ${((stats.pass / stats.total) * 100).toFixed(1)}%\n`);

if (issues.length > 0) {
  console.log('━'.repeat(60));
  console.log(`\n❌ ISSUES FOUND (${issues.length}):\n`);

  // Group by issue type
  const byMsg = {};
  issues.forEach(i => {
    if (!byMsg[i.msg]) byMsg[i.msg] = [];
    byMsg[i.msg].push(i.file);
  });

  Object.keys(byMsg).forEach(msg => {
    const files = byMsg[msg];
    console.log(`  ⚠️  ${msg}`);
    if (files.length <= 3) {
      files.forEach(f => console.log(`      → ${f}`));
    } else {
      console.log(`      → ${files.length} files affected`);
      files.slice(0, 3).forEach(f => console.log(`      → ${f}`));
      console.log(`      → ... and ${files.length - 3} more`);
    }
    console.log('');
  });
} else {
  console.log('🎉 ALL CHECKS PASSED! No issues found.\n');
}

// ── SITEMAP SYNC CHECK ──
console.log('━'.repeat(60));
console.log('\n📋 SITEMAP SYNC CHECK:\n');
const sitemapPath = path.join(ROOT, 'sitemap-calculators.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  let inSitemap = 0, notInSitemap = 0;
  calcFiles.forEach(fn => {
    const slug = fn.replace('.html', '');
    if (sitemap.includes(slug)) { inSitemap++; }
    else { notInSitemap++; console.log(`   Missing from sitemap: ${slug}`); }
  });
  console.log(`   In sitemap: ${inSitemap} | Missing: ${notInSitemap}`);
} else {
  console.log('   ⚠️  sitemap-calculators.xml not found!');
}
