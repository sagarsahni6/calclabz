#!/usr/bin/env node
/**
 * Phase 7.2 — Update Sitemap Dates
 * Updates lastmod dates in sitemap-calculators.xml to today.
 * Run: node scripts/update-sitemap-dates.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const today = new Date().toISOString().split('T')[0]; // 2026-05-04

['sitemap-calculators.xml', 'sitemap-blog.xml', 'sitemap-core.xml'].forEach(fn => {
  const fp = path.join(ROOT, fn);
  if (!fs.existsSync(fp)) { console.log(`  skip ${fn} (not found)`); return; }
  let xml = fs.readFileSync(fp, 'utf8');
  const before = (xml.match(/<lastmod>/g) || []).length;
  xml = xml.replace(/<lastmod>[^<]+<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
  fs.writeFileSync(fp, xml, 'utf8');
  console.log(`  ✅ ${fn}: updated ${before} lastmod entries to ${today}`);
});

console.log('\n📊 All sitemaps updated with fresh dates!');
