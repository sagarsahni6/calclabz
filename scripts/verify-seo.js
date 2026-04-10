#!/usr/bin/env node
/**
 * verify-seo.js — SEO Content Verification for Top 50 Calculators
 * Validates that all pre-rendered HTML files contain required SEO sections.
 */
'use strict';
var fs = require('fs');
var path = require('path');
var PASS = '\x1b[32m✓\x1b[0m';
var FAIL = '\x1b[31m✗\x1b[0m';
var passed = 0, failed = 0;

function check(name, condition) {
  if (condition) { console.log('  ' + PASS + ' ' + name); passed++; }
  else { console.log('  ' + FAIL + ' ' + name); failed++; }
}

// ── 1. Module Integrity ─────────────────────────────────────────────
console.log('\n📦 SEO Content Module');
var CALCS = require('./seo-content-top50');
check('Module loads successfully', Array.isArray(CALCS));
check('Contains exactly 50 calculators', CALCS.length === 50);

var fields = ['title','desc','whatItDoes','howCalculated','workedExample','commonMistakes','useCases','howTo','faqs'];
var allFieldsOk = true;
CALCS.forEach(function(c) {
  fields.forEach(function(f) {
    if (!c[f] || (Array.isArray(c[f]) && c[f].length === 0)) allFieldsOk = false;
  });
});
check('All 50 have all 9 content fields populated', allFieldsOk);

// ── 2. Content Quality ──────────────────────────────────────────────
console.log('\n📝 Content Quality Checks');
var qualityOk = true;
CALCS.forEach(function(c) {
  if (c.commonMistakes.length < 3) { qualityOk = false; console.log('  ' + FAIL + ' ' + c.id + ': only ' + c.commonMistakes.length + ' mistakes (need 3+)'); }
  if (c.faqs.length < 2) { qualityOk = false; console.log('  ' + FAIL + ' ' + c.id + ': only ' + c.faqs.length + ' FAQs (need 2+)'); }
  if (c.howTo.steps.length < 2) { qualityOk = false; console.log('  ' + FAIL + ' ' + c.id + ': only ' + c.howTo.steps.length + ' howTo steps (need 2+)'); }
  if (c.useCases.length < 3) { qualityOk = false; console.log('  ' + FAIL + ' ' + c.id + ': only ' + c.useCases.length + ' use cases (need 3+)'); }
  if (c.workedExample.length < 50) { qualityOk = false; console.log('  ' + FAIL + ' ' + c.id + ': worked example too short'); }
});
if (qualityOk) { check('All 50 pass minimum content thresholds', true); }
else { failed++; }

// ── 3. HTML File Verification ───────────────────────────────────────
console.log('\n🔍 Generated HTML Verification');
var htmlOk = 0, htmlFail = 0;
CALCS.forEach(function(c) {
  var file = path.join(__dirname, '..', c.slug + '.html');
  if (!fs.existsSync(file)) { console.log('  ' + FAIL + ' ' + c.slug + '.html NOT FOUND'); htmlFail++; return; }
  var html = fs.readFileSync(file, 'utf8');
  var hasPeers = CALCS.filter(function(other) { return other.cat === c.cat && other.id !== c.id; }).length > 0;
  var sections = [
    ['seo-content div', 'id="seo-content"'],
    ['What is section', 'What is '],
    ['How-To section', c.howTo.name],
    ['Worked Example', 'Worked Example'],
    ['Common Mistakes', 'Common Mistakes to Avoid'],
    ['FAQ section', 'Frequently Asked Questions'],
    ['JSON-LD HowTo', 'jsonld-howto'],
    ['JSON-LD FAQ', 'jsonld-faq'],
    ['JSON-LD Breadcrumb', 'jsonld-breadcrumb'],
    ['Trust section', 'seo-trust']
  ];
  // Only check Related Calculators if this calc has same-category peers
  if (hasPeers) sections.push(['Related Calculators', 'Related Calculators']);
  var missing = [];
  sections.forEach(function(s) { if (html.indexOf(s[1]) === -1) missing.push(s[0]); });
  if (missing.length === 0) { htmlOk++; }
  else { htmlFail++; console.log('  ' + FAIL + ' ' + c.slug + '.html missing: ' + missing.join(', ')); }
});
check('All 50 HTML files have all SEO sections', htmlOk === 50 && htmlFail === 0);
console.log('    (' + htmlOk + '/50 passed, ' + htmlFail + ' failed)');

// ── 4. No Duplicate Sections ────────────────────────────────────────
console.log('\n🚫 Duplication Check');
var dupOk = true;
CALCS.forEach(function(c) {
  var file = path.join(__dirname, '..', c.slug + '.html');
  if (!fs.existsSync(file)) return;
  var html = fs.readFileSync(file, 'utf8');
  var faqCount = (html.match(/Frequently Asked Questions/g) || []).length;
  var relCount = (html.match(/Related Calculators/g) || []).length;
  if (faqCount > 1) { dupOk = false; console.log('  ' + FAIL + ' ' + c.slug + ': DUPLICATE FAQ (' + faqCount + ')'); }
  if (relCount > 1) { dupOk = false; console.log('  ' + FAIL + ' ' + c.slug + ': DUPLICATE Related (' + relCount + ')'); }
});
check('No duplicate FAQ or Related sections in any page', dupOk);

// ── 5. YMYL Trust Signals ───────────────────────────────────────────
console.log('\n🛡️  YMYL Trust Signal Check');
var financeFile = path.join(__dirname, '..', 'emi-calculator.html');
var healthFile = path.join(__dirname, '..', 'bmi-calculator.html');
var otherFile = path.join(__dirname, '..', 'discount-calculator.html');
check('Finance pages have financial advisor disclaimer', fs.readFileSync(financeFile, 'utf8').indexOf('financial advisor') !== -1);
check('Health pages have medical disclaimer', fs.readFileSync(healthFile, 'utf8').indexOf('Medical disclaimer') !== -1);
check('General pages have informational note', fs.readFileSync(otherFile, 'utf8').indexOf('informational purposes') !== -1);

// ── 6. JSON-LD Validity ────────────────────────────────────────────
console.log('\n📊 JSON-LD Schema Validity');
var jsonOk = true;
['emi','gratuity','bmi','sleep','ppf','pregnancy','creditcard','grade'].forEach(function(id) {
  var file = path.join(__dirname, '..', id + '-calculator.html');
  var html = fs.readFileSync(file, 'utf8');
  var re = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  var match, count = 0;
  while ((match = re.exec(html)) !== null) {
    count++;
    try { JSON.parse(match[1]); }
    catch(e) { jsonOk = false; console.log('  ' + FAIL + ' Invalid JSON-LD in ' + id + ': ' + e.message); }
  }
  if (count < 4) { jsonOk = false; console.log('  ' + FAIL + ' ' + id + ': only ' + count + ' schemas (need 4)'); }
});
check('All sampled pages have 4 valid JSON-LD schemas', jsonOk);

// ── Summary ─────────────────────────────────────────────────────────
console.log('\n' + '═'.repeat(50));
console.log('Results: ' + passed + ' passed, ' + failed + ' failed, ' + (passed+failed) + ' total');
console.log('═'.repeat(50));
process.exit(failed > 0 ? 1 : 0);
