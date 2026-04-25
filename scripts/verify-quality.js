#!/usr/bin/env node
/**
 * Verify SEO content quality across all calculator pages
 * Checks: word count, uniqueness, structured data, and content presence
 */
'use strict';
var fs = require('fs');
var path = require('path');

var ROOT = path.resolve(__dirname, '..');
var registry = require('./calculator-registry.json');

var results = { ok: 0, low: [], missing: [], noSchema: [] };
var allTexts = {};

registry.forEach(function(e) {
  var f = path.join(ROOT, e.slug + '.html');
  if (!fs.existsSync(f)) {
    results.missing.push(e.slug);
    return;
  }

  var html = fs.readFileSync(f, 'utf8');

  // Check for seo-content div
  var seoMatch = html.match(/<div id="seo-content">([\s\S]*?)<\/div>\s*<\/div>/);
  if (!seoMatch) {
    results.low.push({ slug: e.slug, words: 0, issue: 'no seo-content div' });
    return;
  }

  // Strip HTML tags and count words
  var text = seoMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  var words = text.split(' ').length;

  if (words < 200) {
    results.low.push({ slug: e.slug, words: words });
  } else {
    results.ok++;
  }

  // Check for FAQ schema
  if (html.indexOf('jsonld-faq') === -1 && html.indexOf('FAQPage') === -1) {
    results.noSchema.push(e.slug);
  }

  // Check for breadcrumb schema
  if (html.indexOf('jsonld-breadcrumb') === -1 && html.indexOf('BreadcrumbList') === -1) {
    results.noSchema.push(e.slug + ' (no breadcrumb)');
  }

  // Uniqueness: store first 200 chars of text for comparison
  var sig = text.substring(0, 300);
  if (allTexts[sig]) {
    console.log('  ⚠ DUPLICATE CONTENT: ' + e.slug + ' === ' + allTexts[sig]);
  } else {
    allTexts[sig] = e.slug;
  }
});

console.log('\n═══ SEO Content Quality Report ═══\n');
console.log('Total calculators in registry: ' + registry.length);
console.log('Pages with 200+ words (OK):    ' + results.ok);
console.log('Pages with <200 words:         ' + results.low.length);
console.log('Missing HTML files:            ' + results.missing.length);
console.log('Missing schema markup:         ' + results.noSchema.length);
console.log('Unique content signatures:     ' + Object.keys(allTexts).length);

if (results.low.length) {
  console.log('\n--- Low Word Count Pages ---');
  results.low.forEach(function(l) {
    console.log('  ' + l.slug + ': ' + l.words + ' words' + (l.issue ? ' (' + l.issue + ')' : ''));
  });
}

if (results.missing.length > 0 && results.missing.length <= 20) {
  console.log('\n--- Missing Pages ---');
  results.missing.forEach(function(m) {
    console.log('  ' + m);
  });
}

if (results.noSchema.length > 0 && results.noSchema.length <= 10) {
  console.log('\n--- Missing Schema ---');
  results.noSchema.forEach(function(s) {
    console.log('  ' + s);
  });
}

console.log('\n✅ Quality check complete.\n');
