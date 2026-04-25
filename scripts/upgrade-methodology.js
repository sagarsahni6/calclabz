#!/usr/bin/env node
/**
 * Force-upgrade methodology fields using formula data from formulas.js
 * Only upgrades entries where formula data is available.
 * 
 * Usage: node scripts/upgrade-methodology.js
 */
'use strict';

var fs   = require('fs');
var path = require('path');
var vm   = require('vm');

var ROOT = path.resolve(__dirname, '..');

// Load formulas
var FORMULAS = {};
var formulaSrc = fs.readFileSync(path.join(ROOT, 'assets', 'js', 'formulas.js'), 'utf8');
var formulaSandbox = {};
vm.runInNewContext(formulaSrc + '\nthis.__F = CALC_FORMULAS;', formulaSandbox);
FORMULAS = formulaSandbox.__F || {};
console.log('Loaded ' + Object.keys(FORMULAS).length + ' formulas\n');

// Load registry
var registry = require('./calculator-registry.json');
var regMap = {};
registry.forEach(function(e) { regMap[e.id] = e; });

// Files to process
var FILES = [
  'seo-content-basic-finance.js',
  'seo-content-basic-health-edu.js',
  'seo-content-basic-eng-sci.js',
  'seo-content-basic-everyday-math.js',
  'seo-content-basic-unit-other.js',
  'seo-content-basic-construction.js'
];

var stats = { upgraded: 0, noFormula: 0 };

FILES.forEach(function(file) {
  var filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;

  var content = fs.readFileSync(filePath, 'utf8');
  var mod = require('./' + file);
  var ids = Object.keys(mod);
  var modified = false;

  ids.forEach(function(id) {
    var formula = FORMULAS[id];
    if (!formula) {
      stats.noFormula++;
      return;
    }

    // Build unique methodology from formula
    var parts = [];
    parts.push('This calculator uses the formula: ' + formula.formula + '.');
    if (formula.variables) {
      parts.push('Where ' + formula.variables.replace(/\|/g, ';') + '.');
    }
    parts.push(formula.explanation);
    parts.push('All calculations run entirely in your browser — no data is transmitted to any server.');
    var newMeth = parts.join(' ');

    // Escape for single-quoted JS string
    var escaped = newMeth.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

    // Find and replace the methodology line for this id
    // Strategy: find the entry block by id, then find the methodology line within it
    var lines = content.split('\n');
    var inEntry = false;
    var braceDepth = 0;

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      
      // Detect entry start: "  id: {"
      if (line.match(new RegExp('^  ' + id + ': \\{'))) {
        inEntry = true;
        braceDepth = 1;
        continue;
      }

      if (inEntry) {
        // Count braces
        for (var j = 0; j < line.length; j++) {
          if (line[j] === '{') braceDepth++;
          if (line[j] === '}') braceDepth--;
        }

        // Find methodology line within this entry
        if (line.indexOf("    methodology: '") === 0 && braceDepth >= 1) {
          lines[i] = "    methodology: '" + escaped + "',";
          modified = true;
          stats.upgraded++;
          break; // Move to next id
        }

        // Exit entry
        if (braceDepth <= 0) {
          inEntry = false;
        }
      }
    }

    content = lines.join('\n');
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('  ✓  ' + file + ' — upgraded methodology entries');
  } else {
    console.log('  ·  ' + file + ' — no formula matches');
  }
});

console.log('\n═══ Methodology Upgrade Summary ═══');
console.log('  Upgraded with formula:  ' + stats.upgraded);
console.log('  No formula available:   ' + stats.noFormula);
console.log('\n✅ Done.\n');
