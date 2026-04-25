#!/usr/bin/env node
/**
 * Upgrade Basic SEO Content — Replace Generic Templates with Unique Content
 * =========================================================================
 * Reads formulas.js and calculators-core.js to replace generic howToSteps 
 * and methodology with specific, unique content for each calculator.
 * 
 * This is the key fix for AdSense "Low Value Content" rejections.
 * 
 * Usage: node scripts/upgrade-basic-seo.js
 */
'use strict';

var fs   = require('fs');
var path = require('path');
var vm   = require('vm');

var ROOT = path.resolve(__dirname, '..');

// ── Load formulas.js ────────────────────────────────────────────────────────
var FORMULAS = {};
try {
  var formulaSrc = fs.readFileSync(path.join(ROOT, 'assets', 'js', 'formulas.js'), 'utf8');
  var formulaSandbox = {};
  vm.runInNewContext(formulaSrc + '\nthis.__FORMULAS = CALC_FORMULAS;', formulaSandbox);
  FORMULAS = formulaSandbox.__FORMULAS || {};
} catch (e) {
  console.error('ERROR: Could not load formulas.js:', e.message);
  process.exit(1);
}

// ── Load calculators-core.js ────────────────────────────────────────────────
var CORE_DB = {};
try {
  var coreSrc = fs.readFileSync(path.join(ROOT, 'assets', 'js', 'calculators-core.js'), 'utf8');
  var coreSandbox = {};
  vm.runInNewContext(coreSrc + '\nthis.__DB = DB;', coreSandbox);
  CORE_DB = coreSandbox.__DB || {};
} catch (e) {
  console.error('ERROR: Could not load calculators-core.js:', e.message);
  process.exit(1);
}

// ── Load registry ───────────────────────────────────────────────────────────
var registry = require('./calculator-registry.json');
var regMap = {};
registry.forEach(function(e) { regMap[e.id] = e; });

// ── Generic patterns to detect (if howToSteps matches these, it's template) ─
var GENERIC_STEP_PATTERNS = [
  'Enter the required financial values',
  'Enter the required engineering parameters',
  'Enter your personal details such as age',
  'Enter your academic data such as grades',
  'Enter your project measurements',
  'Enter the required values for your',
  'Enter your numerical values or mathematical',
  'Enter the value you want to convert',
  'Enter the required date, time',
  'Enter the known scientific values',
  'Adjust optional parameters like tax rate',
  'Adjust any optional settings',
  'Click Calculate or view results updating',
  'View your results instantly',
  'Results are computed automatically',
  'View the calculated result with the formula',
  'View the converted value instantly',
  'View the step-by-step solution',
  'View your results instantly — the calculator updates'
];

var GENERIC_METHODOLOGY_PATTERNS = [
  'Inputs are processed using established mathematical models for',
  'This calculator uses standard financial formulas widely used in Indian banking',
  'This calculator uses clinically validated formulas from peer-reviewed',
  'This calculator implements standard academic formulas',
  'This calculator applies standard engineering formulas',
  'This calculator uses standard construction estimation methods',
  'This calculator uses straightforward mathematical formulas',
  'This converter uses precise, internationally standardized conversion',
  'This calculator uses the Gregorian calendar system',
  'This calculator applies established scientific formulas'
];

function isGenericSteps(steps) {
  if (!steps || !steps.length) return true;
  var joined = steps.join(' ');
  for (var i = 0; i < GENERIC_STEP_PATTERNS.length; i++) {
    if (joined.indexOf(GENERIC_STEP_PATTERNS[i]) !== -1) return true;
  }
  return false;
}

function isGenericMethodology(meth) {
  if (!meth) return true;
  for (var i = 0; i < GENERIC_METHODOLOGY_PATTERNS.length; i++) {
    if (meth.indexOf(GENERIC_METHODOLOGY_PATTERNS[i]) !== -1) return true;
  }
  return false;
}

// ── Build unique howToSteps from actual calculator inputs ────────────────────
function buildUniqueSteps(id, name, nameLC, cat, coreEntry, formula) {
  var steps = [];
  var topic = nameLC.replace(/ calculator$/, '').replace(/ converter$/, '').replace(/ generator$/, '').replace(/ estimator$/, '');
  
  // Step 1: specific input guidance from core DB
  if (coreEntry && coreEntry.inputs && coreEntry.inputs.length) {
    var inputNames = coreEntry.inputs.map(function(inp) {
      return inp.label || inp.placeholder || inp.id || 'value';
    });
    if (inputNames.length <= 3) {
      steps.push('Enter your ' + inputNames.join(', ') + ' in the input fields provided');
    } else {
      steps.push('Enter your ' + inputNames.slice(0, 3).join(', ') + ', and other required values in the input fields');
    }
  } else {
    // Fallback with domain-specific language
    switch(cat) {
      case 'finance':
        steps.push('Enter the specific financial inputs for your ' + topic + ' calculation (such as amounts, rates, and tenure)');
        break;
      case 'health':
        steps.push('Enter your personal health data required for the ' + topic + ' assessment (measurements, age, and relevant parameters)');
        break;
      case 'math':
        steps.push('Enter the numerical values or expressions you need to calculate for ' + topic);
        break;
      case 'science':
        steps.push('Enter the known physical quantities needed for the ' + topic + ' computation');
        break;
      case 'construction':
        steps.push('Enter your project dimensions and material specifications for the ' + topic + ' estimation');
        break;
      case 'engineering':
        steps.push('Enter the engineering parameters specific to your ' + topic + ' calculation');
        break;
      case 'unit':
        steps.push('Enter the value you want to convert and select the source and target units for ' + topic);
        break;
      case 'datetime':
        steps.push('Enter the dates, times, or durations relevant to your ' + topic + ' calculation');
        break;
      case 'education':
        steps.push('Enter your academic data (grades, credits, marks) for the ' + topic + ' computation');
        break;
      default:
        steps.push('Enter the specific values required for your ' + topic + ' calculation');
    }
  }

  // Step 2: formula-aware guidance
  if (formula && formula.formula) {
    steps.push('The calculator applies the formula: ' + formula.formula.replace(/'/g, "\\'") + ' — results update automatically as you type');
  } else {
    steps.push('Results are computed instantly as you enter or modify values — no need to click a button');
  }

  // Step 3: interpret results
  if (formula && formula.explanation) {
    var shortExpl = formula.explanation.split('.')[0] + '.';
    steps.push('Review your results in the output section — ' + shortExpl.charAt(0).toLowerCase() + shortExpl.slice(1));
  } else {
    steps.push('Review the computed output showing your ' + topic + ' results with a detailed breakdown');
  }

  // Step 4: action step (domain-specific)
  switch(cat) {
    case 'finance':
      steps.push('Use the results to compare financial scenarios, plan budgets, or verify lender and investment calculations');
      break;
    case 'health':
      steps.push('Discuss the results with a healthcare professional for personalised guidance — this tool provides estimates, not diagnoses');
      break;
    case 'math':
      steps.push('Cross-check the output with your manual working to reinforce the underlying concept');
      break;
    case 'science':
      steps.push('Verify the result against your textbook or lab data and note the units used in the output');
      break;
    case 'construction':
      steps.push('Use the material estimates for planning and budgeting — always add a waste margin and confirm with your contractor');
      break;
    case 'engineering':
      steps.push('Use the output for preliminary design checks — critical applications require verification by a licensed professional');
      break;
    case 'unit':
      steps.push('Copy the converted value or try additional unit combinations — the conversion factor is shown for reference');
      break;
    case 'datetime':
      steps.push('Use the result for scheduling, planning, or record-keeping — verify legal deadlines against official sources');
      break;
    case 'education':
      steps.push('Use the result for academic planning — verify institution-specific grading policies before relying on the output');
      break;
    default:
      steps.push('Apply the result to your planning or decision-making, and revisit when your inputs change');
  }

  return steps;
}

// ── Build unique methodology from formula data ──────────────────────────────
function buildUniqueMethodology(id, name, nameLC, cat, formula) {
  var topic = nameLC.replace(/ calculator$/, '').replace(/ converter$/, '').replace(/ generator$/, '').replace(/ estimator$/, '');
  
  if (formula) {
    var parts = [];
    
    // Formula statement
    parts.push('This calculator uses the formula: ' + formula.formula.replace(/'/g, "\\'") + '.');
    
    // Variables explanation
    if (formula.variables) {
      parts.push('Where ' + formula.variables.replace(/\|/g, ';').replace(/'/g, "\\'") + '.');
    }
    
    // Domain explanation
    parts.push(formula.explanation.replace(/'/g, "\\'"));
    
    // Privacy note
    parts.push('All calculations run entirely in your browser — no data is transmitted to any server.');
    
    return parts.join(' ');
  }
  
  // No formula data — generate category-specific but still unique methodology
  switch(cat) {
    case 'finance':
      return 'This calculator applies standard ' + topic + ' formulas used across Indian banking and financial planning. Inputs are validated and processed using established mathematical models. Results include applicable rates and compounding where relevant. All processing happens locally in your browser — no financial data leaves your device.';
    case 'health':
      return 'This calculator implements published clinical formulas for ' + topic + ' estimation, drawn from peer-reviewed nutrition and medical research. Results are general estimates — individual factors including genetics, medical history, and lifestyle can cause significant variation. Consult a healthcare professional before making health decisions based on these outputs.';
    case 'math':
      return 'This calculator solves ' + topic + ' problems using standard mathematical formulas from academic textbooks. Computations follow established principles and return results precise to JavaScript floating-point arithmetic. Use the output to verify manual work or speed up repetitive calculations.';
    case 'science':
      return 'This calculator applies standard ' + topic + ' formulas from physics, chemistry, and biology curricula (CBSE, ICSE, university-level). Values use SI units and accepted scientific constants. Results are suitable for academic work and preliminary estimates.';
    case 'construction':
      return 'This calculator estimates ' + topic + ' requirements using standard construction industry formulas and IS code guidelines. Estimates include typical wastage factors and standard material ratios. Actual quantities depend on site conditions, material quality, and construction methods.';
    case 'engineering':
      return 'This calculator computes ' + topic + ' values using standard engineering reference formulas (IS/IEEE/ASME). Results are preliminary estimates suitable for coursework and early-stage design checks. All critical applications must be verified by a licensed professional engineer.';
    case 'unit':
      return 'This converter uses precise, internationally standardised conversion factors for ' + topic + ' maintained by the International Bureau of Weights and Measures (BIPM). Results are accurate to multiple decimal places and suitable for most practical applications.';
    case 'datetime':
      return 'This calculator handles ' + topic + ' using the Gregorian calendar with correct treatment of leap years, varying month lengths, and day-of-week algorithms. Timezone calculations reference the IANA Time Zone Database where applicable.';
    case 'education':
      return 'This calculator implements standard ' + topic + ' formulas used by universities and examination boards (UGC, CBSE, international). Results should be verified against the specific grading or assessment policy of your institution.';
    default:
      return 'This calculator computes ' + topic + ' values using standard formulas. Inputs are validated and processed entirely in your browser for instant, private results.';
  }
}

// ── Process each SEO content file ───────────────────────────────────────────
var FILES = [
  'seo-content-basic-finance.js',
  'seo-content-basic-health-edu.js',
  'seo-content-basic-eng-sci.js',
  'seo-content-basic-everyday-math.js',
  'seo-content-basic-unit-other.js',
  'seo-content-basic-construction.js'
];

var stats = { upgraded: 0, alreadyUnique: 0, noFormula: 0, errors: 0 };

FILES.forEach(function(file) {
  var filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.warn('  ⚠  ' + file + ' not found, skipping.');
    return;
  }

  var content = fs.readFileSync(filePath, 'utf8');
  var mod = require('./' + file);
  var ids = Object.keys(mod);
  var modified = false;

  ids.forEach(function(id) {
    var entry = mod[id];
    var regEntry = regMap[id];
    var name = (regEntry && regEntry.name) || id;
    var nameLC = name.toLowerCase();
    var cat = (regEntry && regEntry.cat) || 'everyday';
    var formula = FORMULAS[id] || null;
    var coreEntry = CORE_DB[id] || null;

    var needsSteps = isGenericSteps(entry.howToSteps);
    var needsMeth = isGenericMethodology(entry.methodology);

    if (!needsSteps && !needsMeth) {
      stats.alreadyUnique++;
      return;
    }

    if (!formula) stats.noFormula++;

    // Build unique content
    var newSteps = needsSteps ? buildUniqueSteps(id, name, nameLC, cat, coreEntry, formula) : null;
    var newMeth = needsMeth ? buildUniqueMethodology(id, name, nameLC, cat, formula) : null;

    // Replace howToSteps in file content
    if (newSteps) {
      // Find the howToSteps array for this entry and replace it
      var stepsRegex = new RegExp(
        "(  " + id + ": \\{[\\s\\S]*?)howToSteps: \\[[^\\]]*\\]",
        ""
      );
      if (stepsRegex.test(content)) {
        var stepsStr = "howToSteps: [\n";
        newSteps.forEach(function(s, i) {
          stepsStr += "      '" + s.replace(/'/g, "\\'") + "'";
          if (i < newSteps.length - 1) stepsStr += ',';
          stepsStr += '\n';
        });
        stepsStr += '    ]';
        content = content.replace(stepsRegex, '$1' + stepsStr);
        modified = true;
      }
    }

    // Replace methodology in file content
    if (newMeth) {
      var methRegex = new RegExp(
        "(  " + id + ": \\{[\\s\\S]*?)methodology: '[^']*(?:\\\\'[^']*)*'",
        ""
      );
      if (methRegex.test(content)) {
        var methStr = "methodology: '" + newMeth.replace(/'/g, "\\'") + "'";
        content = content.replace(methRegex, '$1' + methStr);
        modified = true;
      }
    }

    if (needsSteps || needsMeth) {
      stats.upgraded++;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('  ✓  ' + file + ' — upgraded entries');
  } else {
    console.log('  ·  ' + file + ' — no changes needed');
  }
});

console.log('\n═══ Upgrade Summary ═══');
console.log('  Upgraded:       ' + stats.upgraded);
console.log('  Already unique: ' + stats.alreadyUnique);
console.log('  No formula:     ' + stats.noFormula + ' (used category-specific fallback)');
if (stats.errors) console.log('  Errors:         ' + stats.errors);
console.log('\n✅ Done. Run "node scripts/generate-prerender.js" to regenerate HTML pages.\n');
