#!/usr/bin/env node
/**
 * Fix broken breadcrumbs and structured data in calculator HTML files 
 * that have "unknown" category. Maps each to its correct category.
 * 
 * Run: node scripts/fix-unknown-breadcrumbs.js
 */
'use strict';
var fs = require('fs');
var path = require('path');

// Map each "unknown" calculator ID to its correct category
var CATEGORY_FIX = {
  investvsrent:       { cat: 'finance',      label: 'Finance Calculators',      url: '/finance-calculators' },
  professionaltax:    { cat: 'finance',      label: 'Finance Calculators',      url: '/finance-calculators' },
  trianglearea:       { cat: 'math',         label: 'Math Calculators',         url: '/math-calculators' },
  waisthip:           { cat: 'health',       label: 'Health Calculators',       url: '/health-calculators' },
  'calories-food':    { cat: 'health',       label: 'Health Calculators',       url: '/health-calculators' },
  lungcapacity:       { cat: 'health',       label: 'Health Calculators',       url: '/health-calculators' },
  unitprice:          { cat: 'everyday',     label: 'Everyday Calculators',     url: '/everyday-calculators' },
  petrolparity:       { cat: 'everyday',     label: 'Everyday Calculators',     url: '/everyday-calculators' },
  agenextbday:        { cat: 'datetime',     label: 'Date & Time Calculators',  url: '/datetime-calculators' },
  'speed-dist':       { cat: 'science',      label: 'Science Calculators',      url: '/science-calculators' },
  construction:       { cat: 'construction', label: 'Construction Calculators', url: '/construction-calculators' },
  romannumeral:       { cat: 'math',         label: 'Math Calculators',         url: '/math-calculators' },
  circlecalc:         { cat: 'math',         label: 'Math Calculators',         url: '/math-calculators' },
  'typing-speed':     { cat: 'education',    label: 'Education Calculators',    url: '/education-calculators' },
  'ohm-advanced':     { cat: 'engineering',  label: 'Engineering Calculators',  url: '/engineering-calculators' },
  chemmolar:          { cat: 'science',      label: 'Science Calculators',      url: '/science-calculators' },
  kinematiccalc:      { cat: 'science',      label: 'Science Calculators',      url: '/science-calculators' },
  watertank:          { cat: 'construction', label: 'Construction Calculators', url: '/construction-calculators' },
  proftax:            { cat: 'finance',      label: 'Finance Calculators',      url: '/finance-calculators' }
};

// Load registry and get slug -> id mapping
var REGISTRY_PATH = path.join(__dirname, 'calculator-registry.json');
var registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));

var fixedFiles = 0;
var fixedRegistry = 0;

async function run() {
  // Fix HTML files
  const promises = registry.map(async function(entry) {
    if (entry.cat !== 'unknown') return;

    var fix = CATEGORY_FIX[entry.id];
    if (!fix) {
      console.log('⚠️  No mapping for unknown calc: ' + entry.id);
      return;
    }

    // Fix registry entry
    entry.cat = fix.cat;
    fixedRegistry++;

    // Fix the HTML file
    var htmlFile = path.join(__dirname, '..', entry.slug + '.html');
    try {
      await fs.promises.access(htmlFile);
    } catch (err) {
      console.log('⚠️  HTML file not found: ' + entry.slug + '.html');
      return;
    }

    var html = await fs.promises.readFile(htmlFile, 'utf8');
    var modified = false;

    // Fix breadcrumb text: "Tools Calculators" -> correct category label
    // In HTML breadcrumb
    if (html.includes('/unknown-calculators')) {
      html = html.replace(/\/unknown-calculators/g, fix.url);
      html = html.replace(/Tools Calculators/g, fix.label);
      modified = true;
    }

    if (modified) {
      await fs.promises.writeFile(htmlFile, html, 'utf8');
      fixedFiles++;
      console.log('✅ Fixed: ' + entry.slug + '.html → ' + fix.label);
    }
  });

  await Promise.all(promises);

  // Save registry
  await fs.promises.writeFile(REGISTRY_PATH, JSON.stringify(registry, null, 2) + '\n', 'utf8');

  console.log('\n📊 Summary:');
  console.log('   Registry entries fixed: ' + fixedRegistry);
  console.log('   HTML files fixed: ' + fixedFiles);
}

run().catch(err => {
  console.error('Error running fix-unknown-breadcrumbs:', err);
  process.exit(1);
});
