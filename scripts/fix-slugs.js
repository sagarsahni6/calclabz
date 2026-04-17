/**
 * fix-slugs.js — Rename compound slugs to hyphenated form for better SEO tokenization.
 * Keeps internal DB keys unchanged. Only updates:
 *   1. calculator-registry.json slug field
 *   2. Renames HTML files
 *   3. Outputs redirect rules for vercel.json
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

// Map: internal id → new hyphenated slug (without -calculator suffix)
const SLUG_RENAMES = {
  carloan:           'car-loan',
  compoundinterest:  'compound-interest',
  simpleinterest:    'simple-interest',
  incometax:         'income-tax',
  capitalgains:      'capital-gains',
  creditcard:        'credit-card',
  taxregime:         'tax-regime',
  stepupsip:         'step-up-sip',
  savingsgoal:       'savings-goal',
  goldinvestment:    'gold-investment',
  dividendyield:     'dividend-yield',
  stockreturn:       'stock-return',
  loaneligibility:   'loan-eligibility',
  advancetax:        'advance-tax',
  balancetransfer:   'balance-transfer',
  loanaffordability: 'loan-affordability',
  bodyfat:           'body-fat',
  bloodpressure:     'blood-pressure',
  proteinintake:     'protein-intake',
  smokingcost:       'smoking-cost',
  childheight:       'child-height',
  diabetesrisk:      'diabetes-risk',
  caloriedeficit:    'calorie-deficit',
  inhandsalary:      'in-hand-salary',
  ctcbreakup:        'ctc-breakup',
  retirementcorpus:  'retirement-corpus',
  taxsaving:         'tax-saving',
  solarpanel:        'solar-panel',
  constructioncost:  'construction-cost',
  homerenovation:    'home-renovation',
  stampdutycalc:     'stamp-duty',
};

// === 1. Update registry ===
const regPath = path.join(ROOT, 'scripts', 'calculator-registry.json');
const registry = JSON.parse(fs.readFileSync(regPath, 'utf8'));
let updated = 0;

registry.forEach(function(entry) {
  if (SLUG_RENAMES[entry.id]) {
    var oldSlug = entry.slug;
    var newSlug = SLUG_RENAMES[entry.id] + '-calculator';
    entry.slug = newSlug;
    console.log('  ✓ Registry: ' + oldSlug + '  →  ' + newSlug);
    updated++;
  }
});

fs.writeFileSync(regPath, JSON.stringify(registry, null, 2) + '\n', 'utf8');
console.log('\n  Updated ' + updated + ' entries in calculator-registry.json\n');

// === 2. Rename HTML files ===
var renamed = 0, redirects = [];

Object.keys(SLUG_RENAMES).forEach(function(id) {
  var oldSlug = id + '-calculator';
  var newSlug = SLUG_RENAMES[id] + '-calculator';
  var oldFile = path.join(ROOT, oldSlug + '.html');
  var newFile = path.join(ROOT, newSlug + '.html');

  if (fs.existsSync(oldFile)) {
    // Read file, update canonical URL and any self-references
    var html = fs.readFileSync(oldFile, 'utf8');
    html = html.replace(new RegExp(oldSlug, 'g'), newSlug);
    fs.writeFileSync(newFile, html, 'utf8');
    fs.unlinkSync(oldFile);
    console.log('  ✓ Renamed: ' + oldSlug + '.html  →  ' + newSlug + '.html');
    renamed++;
  } else {
    console.log('  ⚠ Not found: ' + oldSlug + '.html (will be generated on rebuild)');
  }

  // Collect redirect rules
  redirects.push({
    source: '/' + oldSlug,
    destination: '/' + newSlug,
    statusCode: 301
  });
});

console.log('\n  Renamed ' + renamed + ' HTML files\n');

// === 3. Update vercel.json redirects ===
var vercelPath = path.join(ROOT, 'vercel.json');
if (fs.existsSync(vercelPath)) {
  var vercel = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
  if (!vercel.redirects) vercel.redirects = [];

  // Remove any existing redirects for these slugs
  var newSlugs = new Set(redirects.map(r => r.source));
  vercel.redirects = vercel.redirects.filter(r => !newSlugs.has(r.source));

  // Add new redirects
  vercel.redirects = vercel.redirects.concat(redirects);
  fs.writeFileSync(vercelPath, JSON.stringify(vercel, null, 2) + '\n', 'utf8');
  console.log('  ✓ Added ' + redirects.length + ' 301 redirects to vercel.json');
}

// === 4. Update serve.json redirects ===
var servePath = path.join(ROOT, 'serve.json');
if (fs.existsSync(servePath)) {
  var serve = JSON.parse(fs.readFileSync(servePath, 'utf8'));
  if (!serve.redirects) serve.redirects = [];

  var existingSources = new Set(serve.redirects.map(r => r.source));
  redirects.forEach(function(r) {
    if (!existingSources.has(r.source)) {
      serve.redirects.push(r);
    }
  });
  fs.writeFileSync(servePath, JSON.stringify(serve, null, 2) + '\n', 'utf8');
  console.log('  ✓ Updated serve.json with redirects');
}

// === 5. Output _slugRedirects for app.js ===
console.log('\n  === Add these to _slugRedirects in app.js ===\n');
Object.keys(SLUG_RENAMES).forEach(function(id) {
  var oldSlug = id + '-calculator';
  var newSlug = SLUG_RENAMES[id] + '-calculator';
  console.log("    '" + oldSlug + "': '" + id + "',");
});

console.log('\n  === Add these as NEW slug mappings in app.js ===\n');
Object.keys(SLUG_RENAMES).forEach(function(id) {
  var newSlug = SLUG_RENAMES[id] + '-calculator';
  console.log("    '" + newSlug + "': '" + id + "',");
});

console.log('\n✅ Done! Next steps:');
console.log('  1. Update _slugRedirects in app.js (paste the mappings above)');
console.log('  2. Run: node scripts/generate-prerender.js (if needed to rebuild with new slugs)');
