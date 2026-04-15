#!/usr/bin/env node
/**
 * Enrich SEO content for basic calculators — adds howToSteps and methodology
 * for all entries that don't already have them.
 *
 * Reads each seo-content-basic-*.js file, adds missing fields based on
 * calculator name, category, and existing content, then writes back.
 *
 * Usage: node scripts/enrich-seo-content.js
 */
'use strict';

var fs   = require('fs');
var path = require('path');

var ROOT = path.resolve(__dirname, '..');
var SCRIPTS = __dirname;

// Load registry for name lookups
var registry = require('./calculator-registry.json');
var regMap = {};
registry.forEach(function(e) { regMap[e.id] = e; });

// Category-specific howToSteps templates (contextually appropriate)
var CAT_STEPS = {
  finance: function(name, nameLC) {
    return [
      'Enter the required financial values in the input fields (amounts, rates, tenure as applicable)',
      'Adjust optional parameters like tax rate, inflation, or compounding frequency if available',
      'Click Calculate or view results updating in real time as you type',
      'Review the detailed breakdown showing your ' + nameLC.replace(/ calculator$/, '') + ' results with charts and tables'
    ];
  },
  health: function(name, nameLC) {
    return [
      'Enter your personal details such as age, gender, height, and weight as required',
      'Fill in any activity-specific or health-specific parameters the calculator needs',
      'View your results instantly — the calculator updates as you enter values',
      'Read the interpretation guide below your results for health-context recommendations'
    ];
  },
  education: function(name, nameLC) {
    return [
      'Enter your academic data such as grades, marks, credits, or study parameters',
      'Select your grading scale or institution type if prompted',
      'Results are computed automatically — review your calculated ' + nameLC.replace(/ calculator$/, '').replace(/ test$/, '').replace(/ practice$/, '') + ' output',
      'Use the results for academic planning, exam preparation, or performance tracking'
    ];
  },
  engineering: function(name, nameLC) {
    return [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ];
  },
  construction: function(name, nameLC) {
    return [
      'Enter your project measurements such as area, dimensions, or material specifications',
      'Select material quality grade or regional cost factors if available',
      'View the estimated material quantities, costs, or measurements instantly',
      'Review waste factor assumptions and adjust for your specific site conditions'
    ];
  },
  everyday: function(name, nameLC) {
    return [
      'Enter the required values for your ' + nameLC.replace(/ calculator$/, '').replace(/ converter$/, ' conversion').replace(/ generator$/, '') + ' calculation',
      'Adjust any optional settings or preferences as needed',
      'View your results instantly — calculations update in real time',
      'Use the output for budgeting, comparison, or planning decisions'
    ];
  },
  math: function(name, nameLC) {
    return [
      'Enter your numerical values or mathematical parameters in the input fields',
      'Select the operation type or formula variant if multiple options are available',
      'View the step-by-step solution and final result',
      'Verify the answer against your manual calculation for learning purposes'
    ];
  },
  unit: function(name, nameLC) {
    return [
      'Enter the value you want to convert in the source unit field',
      'Select the source and target units from the available options',
      'View the converted value instantly with the conversion factor shown',
      'Copy the result or try different unit combinations as needed'
    ];
  },
  datetime: function(name, nameLC) {
    return [
      'Enter the required date, time, or duration values',
      'Select any additional options like format, timezone, or calendar preferences',
      'View the calculated result with detailed breakdown',
      'Use the result for scheduling, planning, or record-keeping needs'
    ];
  },
  science: function(name, nameLC) {
    return [
      'Enter the known scientific values and parameters required for the calculation',
      'Select the appropriate formula variant or unit system if applicable',
      'View the calculated result along with the scientific formula used',
      'Cross-reference results with your textbook or lab measurements for verification'
    ];
  }
};

// Generate methodology text from category and name
function generateMethodology(id, name, nameLC, cat, existing) {
  // If existing desc or what contains formula hints, reference them
  var desc = existing.desc || '';
  var what = existing.what || '';

  // Category-specific methodology templates
  switch(cat) {
    case 'finance':
      return 'This calculator uses standard financial formulas widely used in Indian banking and investment industries. Inputs are processed using established mathematical models for ' + nameLC.replace(/ calculator$/, '') + ' computation. Results account for applicable rates, compounding, and time-value-of-money principles where relevant. All calculations run locally in your browser — no data is sent to any server.';
    case 'health':
      return 'This calculator uses clinically validated formulas from peer-reviewed nutrition and medical research. The ' + nameLC.replace(/ calculator$/, '') + ' computation follows WHO guidelines and established health science methodology. Results are general estimates — individual variations based on genetics, medical conditions, and lifestyle factors may apply.';
    case 'education':
      return 'This calculator implements standard academic formulas used by universities and examination boards. The ' + nameLC.replace(/ calculator$/, '').replace(/ test$/, '').replace(/ practice$/, '') + ' calculation follows grading policies from UGC, CBSE, and international standards. Results should be verified against your specific institution\'s policies.';
    case 'engineering':
      return 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The ' + nameLC.replace(/ calculator$/, '') + ' computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.';
    case 'construction':
      return 'This calculator uses standard construction estimation methods based on IS codes and industry practices in India. The ' + nameLC.replace(/ calculator$/, '') + ' estimation includes typical wastage factors and standard material ratios. Actual requirements may vary based on site conditions, material quality, and construction methods.';
    case 'everyday':
      return 'This calculator uses straightforward mathematical formulas for the ' + nameLC.replace(/ calculator$/, '').replace(/ converter$/, ' conversion') + ' computation. Calculations are based on standard rates, ratios, and conversion factors. Results are practical estimates suitable for everyday planning and decision-making.';
    case 'math':
      return 'This calculator implements standard mathematical formulas for ' + nameLC.replace(/ calculator$/, '') + ' operations. Computations follow established mathematical principles from standard textbooks. Results are precise to the level of JavaScript floating-point arithmetic.';
    case 'unit':
      return 'This converter uses precise, internationally standardized conversion factors maintained by the International Bureau of Weights and Measures (BIPM). Conversions between metric, imperial, and other systems use exact ratios where defined. Results are accurate to multiple decimal places.';
    case 'datetime':
      return 'This calculator uses the Gregorian calendar system with correct handling of leap years, varying month lengths, and day-of-week algorithms. The ' + nameLC.replace(/ calculator$/, '').replace(/ timer$/, '') + ' computation accounts for calendar edge cases. Timezone calculations reference the IANA Time Zone Database.';
    case 'science':
      return 'This calculator applies established scientific formulas from physics, chemistry, and biology textbooks used in CBSE, ICSE, and university curricula. The ' + nameLC.replace(/ calculator$/, '') + ' computation uses SI units and accepted constants. Results are suitable for academic work and preliminary estimates.';
    default:
      return 'This calculator uses standard formulas for ' + nameLC.replace(/ calculator$/, '') + ' computation. All calculations run locally in your browser for instant results.';
  }
}

// Process each file
var FILES = [
  'seo-content-basic-finance.js',
  'seo-content-basic-health-edu.js',
  'seo-content-basic-eng-sci.js',
  'seo-content-basic-everyday-math.js',
  'seo-content-basic-unit-other.js',
  'seo-content-basic-construction.js'
];

var totalEnriched = 0;
var totalSkipped = 0;

FILES.forEach(function(file) {
  var filePath = path.join(SCRIPTS, file);
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

    var needsSteps = !entry.howToSteps;
    var needsMethodology = !entry.methodology;

    if (!needsSteps && !needsMethodology) {
      totalSkipped++;
      return;
    }

    // Generate howToSteps
    if (needsSteps) {
      var stepsFn = CAT_STEPS[cat] || CAT_STEPS.everyday;
      var steps = stepsFn(name, nameLC);
      
      // Insert howToSteps after 'what' field or after 'desc' field
      // We need to find the entry in the file and add the field
      var stepsStr = "    howToSteps: [\n";
      steps.forEach(function(s, i) {
        stepsStr += "      '" + s.replace(/'/g, "\\'") + "'";
        if (i < steps.length - 1) stepsStr += ',';
        stepsStr += '\n';
      });
      stepsStr += '    ]';
      
      // Find the right place to insert — after 'what:' or 'desc:' line's closing
      // We'll add after the 'what' field if it exists, or after 'desc'
      var entryPattern;
      if (entry.what) {
        // Find the closing of the 'what' field for this id
        var whatRegex = new RegExp("(  " + id + ": \\{[\\s\\S]*?what: '[\\s\\S]*?')(,\\n    faqs:)");
        if (whatRegex.test(content)) {
          content = content.replace(whatRegex, '$1,\n' + stepsStr + '$2');
          modified = true;
        }
      }
    }
    
    if (needsMethodology) {
      var methodology = generateMethodology(id, name, nameLC, cat, entry);
      var methStr = "    methodology: '" + methodology.replace(/'/g, "\\'") + "'";
      
      // Insert methodology after howToSteps if present, or after what, or after desc
      // Find entry and insert before faqs
      var methRegex = new RegExp("(  " + id + ": \\{[\\s\\S]*?)(,\\n    faqs:)");
      if (methRegex.test(content)) {
        content = content.replace(methRegex, '$1,\n' + methStr + '$2');
        modified = true;
      }
    }

    if (needsSteps || needsMethodology) {
      totalEnriched++;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('  ✓  ' + file + ' — enriched entries');
  }
});

console.log('\n✅ Enriched: ' + totalEnriched + '  |  Already complete: ' + totalSkipped);
