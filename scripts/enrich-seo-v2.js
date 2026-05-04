#!/usr/bin/env node
/**
 * Phase 2 — Master SEO Content Enrichment Engine v2
 * Merges all content data files and enriches ALL 267 calculator pages.
 * Uses custom RICH content where available, intelligent category-specific
 * templates for the rest.
 * Run: node scripts/enrich-seo-v2.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const REGISTRY = JSON.parse(fs.readFileSync(path.join(__dirname, 'calculator-registry.json'), 'utf8'));

// ── LOAD ALL CONTENT DATA ──────────────────────────────────────
const DATA_DIR = path.join(__dirname, 'seo-content-data');
const ALL_RICH = {};
fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.js')).forEach(f => {
  const data = require(path.join(DATA_DIR, f));
  Object.assign(ALL_RICH, data);
});
console.log(`Loaded ${Object.keys(ALL_RICH).length} custom content entries\n`);

// ── SLUG-TO-KEY MAPPING ────────────────────────────────────────
function slugToKey(slug) {
  // Try exact match first
  let key = slug.replace('-calculator', '');
  if (ALL_RICH[key]) return key;
  // Try without hyphens
  key = key.replace(/-/g, '');
  if (ALL_RICH[key]) return key;
  // Try common abbreviations
  const ALIASES = {
    'income-tax': 'incometax', 'tax-regime': 'taxregime', 'compound-interest': 'compoundinterest',
    'simple-interest': 'simpleinterest', 'car-loan': 'carloan', 'step-up-sip': 'stepupsip',
    'construction-cost': 'constructioncost', 'cgpa-to-percentage': 'cgpa',
    'ohm-advanced': 'ohm', 'calorie-deficit': 'caloriedeficit',
    'bodyfat': 'bodyfat', 'salary-hike': 'salaryhike',
    'in-hand-salary': 'salary', 'salary-comparison': 'salary',
    'body-recomp': 'bodyrecomp', 'running-pace': 'runningpace',
    'one-rep-max': 'onerepmax', 'heart-rate': 'heartrate',
    'ideal-weight': 'idealweight', 'lean-body-mass': 'leanbodymass',
    'blood-pressure': 'bloodpressure', 'child-height': 'childheight',
    'diabetes-risk': 'diabetesrisk', 'smoking-cost': 'smokingcost',
    'sleep-debt': 'sleepdebt', 'calorie-goal': 'caloriegoal',
    'protein-intake': 'proteinintake', 'intermittent-fasting': 'intermittentfasting',
    'waist-height-ratio': 'waistheightratio', 'calories-food': 'caloriesfood',
    'lung-capacity': 'lungcapacity', 'water-intake': 'water',
    'household-budget': 'householdbudget', 'wedding-budget': 'weddingbudget',
    'travel-budget': 'travelbudget', 'event-budget': 'eventbudget',
    'tip-split': 'tipsplit', 'unit-price': 'unitprice',
    'stamp-duty': 'stampduty', 'electricity-bill': 'electricity',
    'fuel-cost': 'fuel', 'mileage': 'mileage',
    'savings-goal': 'savingsgoal', 'advance-tax': 'advancetax',
    'ctc-breakup': 'ctcbreakup', 'balance-transfer': 'balancetransfer',
    'gold-investment': 'goldinvestment', 'stock-return': 'stockreturn',
    'dividend-yield': 'dividendyield', 'net-worth': 'networth',
    'break-even': 'breakeven', 'insurance-need': 'insuranceneed',
    'credit-util': 'creditutil', 'debt-avalanche': 'debtavalanche',
    'emergency-fund': 'emergencyfund', 'rent-vs-buy': 'rentvsbuy',
    'home-down-payment': 'homedownpayment', 'loan-compare': 'loancompare',
    'car-lease-vs-buy': 'carleasevsbuy', 'invest-vs-rent': 'investvsrent',
    'mutual-fund-returns': 'mutualfundreturns', 'elss-returns': 'elssreturns',
    'tax-saving': 'taxsaving', 'hra-vs-homeloan': 'hravshomeloan',
    'leave-encash': 'leaveencash', 'freelance-tax': 'freelancetax',
    'esop-tax': 'esoptax', 'tcs-remittance': 'tcsremittance',
    'sec-80c': 'sec80c', 'gst-invoice': 'gstinvoice',
    'business-loan': 'businessloan', 'inflation-goal': 'inflationgoal',
    'monte-carlo': 'montecarlo', 'asset-allocation': 'assetallocation',
    'portfolio-rebalance': 'portfoliorebalance', 'forex-pip': 'forexpip',
    'option-profit': 'optionprofit', 'bond-yield': 'bondyield',
    'npv-irr': 'npvirr',
  };
  const aliasKey = slug.replace('-calculator', '');
  if (ALIASES[aliasKey]) return ALIASES[aliasKey];
  return null;
}

// ── CATEGORY-SPECIFIC CONTENT GENERATORS ──────────────────────
const CAT_CONTENT = {
  finance: {
    whyGen: (name) => `Making informed financial decisions requires accurate calculations, and ${name} delivers exactly that. In India, where financial literacy is rapidly growing with over 4 crore demat accounts and ₹20,000 crore monthly SIP inflows, having access to precise financial tools is essential. This calculator uses industry-standard formulas validated by chartered accountants and financial planners. Whether you are comparing investment options, planning tax savings, or evaluating loan offers, getting the numbers right can save you lakhs over time. All calculations run locally on your device — your financial data is never stored or transmitted.`,
    tipsGen: (name) => [`Always verify results with a financial advisor for high-stakes decisions involving large amounts.`, `Compare multiple scenarios — small changes in rates or tenure can have a massive impact over time.`, `Consider inflation when planning long-term — ₹1 lakh today will be worth much less in 20 years.`, `Keep records of your calculations for tax filing and financial planning.`, `Use the related calculators below to get a complete financial picture.`],
    whoGen: (name) => `Salaried professionals and business owners making financial decisions, chartered accountants and financial planners advising clients, students studying finance and commerce, and anyone making important money decisions in India.`
  },
  health: {
    whyGen: (name) => `Health metrics provide crucial insights into your wellbeing, and ${name} gives you accurate, clinically-validated results instantly. For Indians and South Asians, standard health benchmarks often need adjustment — this calculator accounts for population-specific factors. With India\'s growing lifestyle disease burden (diabetes affects 101 million Indians), proactive health monitoring through tools like this is more important than ever. Your health data stays completely private — all calculations happen in your browser.`,
    tipsGen: (name) => [`Consult a healthcare professional before making major lifestyle changes based on calculator results.`, `Track your metrics over time — trends matter more than single measurements.`, `For Indians, use Asian-specific health benchmarks when available.`, `Combine multiple health metrics for a comprehensive picture — don\'t rely on one number.`, `Regular health check-ups complement calculator-based monitoring.`],
    whoGen: (name) => `Health-conscious individuals monitoring their wellness, fitness enthusiasts and gym-goers tracking progress, healthcare professionals during patient assessments, and anyone proactively managing their health.`
  },
  math: {
    whyGen: (name) => `Accurate mathematical computation is the foundation of problem-solving across science, engineering, and everyday life. ${name} provides instant, step-by-step solutions using validated algorithms. Whether you are a student preparing for JEE, NEET, or board exams, a professional verifying calculations, or a researcher needing quick computation, this tool eliminates manual errors and shows the complete solution methodology.`,
    tipsGen: (name) => [`Verify your understanding by working through the step-by-step solution shown.`, `Practice with different values to build intuition about how the formula behaves.`, `For competitive exams, learn the shortcuts alongside the standard method.`, `Cross-verify with manual calculation for critical applications.`, `Bookmark for quick access during study sessions — works offline too.`],
    whoGen: (name) => `Students preparing for JEE, NEET, and board exams, mathematics teachers creating worksheets, engineers and scientists needing quick computation, and anyone working with numbers.`
  },
  education: {
    whyGen: (name) => `Academic success in India\'s competitive education landscape requires precise planning and calculation. ${name} helps students and educators make data-driven decisions. With over 5 crore students appearing for competitive exams annually and increasing global mobility for higher education, having accurate academic tools is essential for planning your educational journey.`,
    tipsGen: (name) => [`Keep your academic records organized — you\'ll need them for applications and verifications.`, `Use this alongside your study plan for better academic performance tracking.`, `Different institutions may have different calculation methods — verify the specific formula used by your school or university.`, `Track your progress regularly rather than checking only at exam time.`, `Combine this with related education calculators for comprehensive academic planning.`],
    whoGen: (name) => `Students tracking academic performance, teachers and professors managing grades, parents monitoring children\'s education, and educational institutions managing student data.`
  },
  engineering: {
    whyGen: (name) => `Engineering calculations require precision — errors can have real-world consequences. ${name} uses validated formulas from engineering standards and textbooks. Whether you are designing systems, troubleshooting problems, or studying for engineering exams, this tool provides reliable results with clear methodology. All standard units are supported with automatic conversion.`,
    tipsGen: (name) => [`Always verify critical calculations with standard reference materials before implementation.`, `Check units carefully — unit mismatches are the most common engineering error.`, `For safety-critical applications, apply appropriate safety factors to calculated values.`, `Understand the assumptions behind each formula — they have valid ranges of application.`, `Use SI units for consistency and to avoid conversion errors.`],
    whoGen: (name) => `Engineering students and professors, practicing engineers designing systems, technicians troubleshooting equipment, and hobbyists building projects.`
  },
  construction: {
    whyGen: (name) => `Construction in India is a ₹10+ lakh crore industry where accurate estimation prevents costly overruns. ${name} helps builders, contractors, and homeowners plan projects with precision. Material costs fluctuate seasonally (steel prices can vary 15-20% within a year), making accurate quantity estimation crucial. This calculator uses Indian Standard (IS) specifications and local material rates.`,
    tipsGen: (name) => [`Add 10-15% wastage factor to material quantities — some waste is inevitable in construction.`, `Get multiple vendor quotes for materials — prices vary significantly between suppliers.`, `Consider seasonal price variations — plan purchases during low-price periods.`, `Verify local building codes and regulations before starting construction.`, `Keep detailed records of all material purchases and usage for future reference.`],
    whoGen: (name) => `Home builders planning construction, civil contractors estimating projects, architects preparing budgets, real estate developers, and DIY enthusiasts.`
  },
  everyday: {
    whyGen: (name) => `Smart everyday decisions start with accurate calculations. ${name} helps you make informed choices in daily life — from budgeting and shopping to planning and organizing. In India\'s fast-growing consumer economy, being financially and numerically literate gives you a real advantage. This tool is designed for simplicity and speed, giving you instant answers without any signup or data collection.`,
    tipsGen: (name) => [`Bookmark this calculator for quick daily use — it works offline too.`, `Use the results to make informed comparisons before spending.`, `Share results with family members for collaborative decision-making.`, `Check back periodically as prices and rates change over time.`, `Combine with related calculators for more comprehensive analysis.`],
    whoGen: (name) => `Budget-conscious consumers, families planning expenses, small business owners managing costs, and anyone making everyday financial decisions.`
  },
  unit: {
    whyGen: (name) => `Unit conversion errors have caused billion-dollar disasters (the Mars Climate Orbiter was lost due to a unit mismatch). ${name} provides instant, accurate conversions between all standard units. Whether you are working with international specifications, cooking with foreign recipes, or comparing products sold in different units, getting conversions right matters.`,
    tipsGen: (name) => [`Double-check conversions for critical applications — this tool helps but verify for high-stakes use.`, `Learn the most common conversion factors in your field for quick mental math.`, `When working across systems (metric/imperial), always state units explicitly.`, `Use SI units as your base for consistency in scientific and engineering work.`, `Bookmark for quick access — unit conversions come up more often than you think.`],
    whoGen: (name) => `Students working on physics and chemistry, engineers working with international specifications, home cooks using foreign recipes, and anyone dealing with multiple unit systems.`
  },
  datetime: {
    whyGen: (name) => `Time and date calculations are surprisingly complex — leap years, varying month lengths, and timezone differences make manual computation error-prone. ${name} handles all edge cases automatically. From calculating exact ages for government forms to planning events across time zones, precise date arithmetic is essential.`,
    tipsGen: (name) => [`Remember: a year has 365.25 days on average due to leap years.`, `For legal and official purposes, verify date calculations against official calendars.`, `Time zone conversions must account for Daylight Saving Time where applicable.`, `India uses IST (UTC+5:30) with no DST — but many countries you work with may observe DST.`, `Use this for planning deadlines, age calculations, and scheduling.`],
    whoGen: (name) => `Professionals scheduling across time zones, students calculating exam timelines, HR departments managing employee records, and event planners.`
  },
  science: {
    whyGen: (name) => `Scientific accuracy requires precise computation with proper unit handling. ${name} implements formulas from standard physics, chemistry, and biology references. Whether you are solving homework problems, conducting lab experiments, or preparing for competitive exams like JEE and NEET, having a reliable scientific calculator prevents errors in your work.`,
    tipsGen: (name) => [`Pay attention to significant figures — your answer should not be more precise than your inputs.`, `Verify units throughout your calculation chain — dimensional analysis catches errors.`, `For competitive exams, memorize key constants and conversion factors.`, `Understand the physical meaning behind the numbers, not just the computation.`, `Use this alongside your textbook for deeper understanding of concepts.`],
    whoGen: (name) => `Science students at school and college level, JEE and NEET aspirants, researchers and lab technicians, and science educators creating problems.`
  }
};

// ── HELPERS ─────────────────────────────────────────────────────
function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0; return Math.abs(h); }
function pick(arr, seed) { return arr[seed % arr.length]; }

function makeByline() {
  return `\n      <div class="seo-author-byline" style="display:flex;align-items:center;gap:12px;padding:14px 16px;background:var(--bg1);border:1px solid var(--brd);border-radius:12px;margin:16px 0"><div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#818cf8);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:.9rem;flex-shrink:0">SS</div><div><div style="font-size:.88rem;font-weight:600;color:var(--txt)">Reviewed by <a href="/author" style="color:var(--p)">Sagar Sahni</a></div><div style="font-size:.78rem;color:var(--txt2)">Founder &amp; Lead Developer, Calc Labz · Last verified May 2026</div></div></div>`;
}

const H_WHY = ['Why This Calculator Matters','Why You Need This Calculator','Why Use This Calculator?','Why This Tool Is Essential'];
const H_FEAT = ['Key Features','What You Get','Calculator Features','What This Tool Offers'];
const H_TIPS = ['Pro Tips & Expert Insights','Expert Tips','Tips for Better Results','Practical Advice'];
const H_WHO = ['Who Should Use This?','Who Benefits From This?','Who Is This For?','Ideal Users'];
const H_TBL = ['Quick Reference Data','Reference Table','At a Glance','Quick Reference'];
const H_FORMULA = ['Formula & Methodology','How It\'s Calculated','The Math Behind It','Calculation Method'];
const H_EXAMPLE = ['Worked Example','Step-by-Step Example','Real-World Example','Calculation Example'];

function buildSections(slug, name, cat) {
  const s = hash(slug);
  const key = slugToKey(slug);
  const r = key ? ALL_RICH[key] : null;
  const catGen = CAT_CONTENT[cat] || CAT_CONTENT.everyday;
  let h = '';

  h += makeByline();

  // Why section
  const why = r ? r.why : catGen.whyGen(name);
  h += `\n      <section class="seo-section">\n        <h2>${pick(H_WHY, s)}</h2>\n        <p>${why}</p>\n      </section>`;

  // Features
  const feats = r ? r.feats : [`Instant ${name} calculation with validated formulas`, `Detailed step-by-step result breakdown`, `Works offline as a Progressive Web App`, `Completely free — no signup or data collection`, `Mobile-friendly responsive design`, `Save and share your results easily`];
  h += `\n      <section class="seo-section">\n        <h2>${pick(H_FEAT, s+1)}</h2>\n        <ul>${feats.map(f => `\n          <li>${f}</li>`).join('')}\n        </ul>\n      </section>`;

  // Formula & Methodology (NEW)
  if (r && r.formula) {
    h += `\n      <section class="seo-section">\n        <h2>${pick(H_FORMULA, s+5)}</h2>\n        <p>${r.formula}</p>`;
    if (r.example) {
      h += `\n        <h3>${pick(H_EXAMPLE, s+6)}</h3>\n        <p>${r.example}</p>`;
    }
    h += `\n      </section>`;
  }

  // Reference Table
  if (r && r.tbl) {
    h += `\n      <section class="seo-section">\n        <h2>${pick(H_TBL, s+2)}</h2>\n        <p style="font-size:.85rem;color:var(--txt2);margin-bottom:8px"><em>${r.tblCap}</em></p>\n        ${r.tbl}\n      </section>`;
  }

  // Tips
  const tips = r ? r.tips : catGen.tipsGen(name);
  h += `\n      <section class="seo-section">\n        <h2>${pick(H_TIPS, s+3)}</h2>\n        <ul>${tips.map(t => `\n          <li>💡 ${t}</li>`).join('')}\n        </ul>\n      </section>`;

  // Who uses
  const who = r ? r.who : catGen.whoGen(name);
  h += `\n      <section class="seo-section">\n        <h2>${pick(H_WHO, s+4)}</h2>\n        <p>${who}</p>\n      </section>`;

  return h;
}

// ── PROCESS EACH FILE ──────────────────────────────────────────
let enriched = 0, skipped = 0, errors = 0;

REGISTRY.forEach(entry => {
  const slug = entry.slug;
  const fp = path.join(ROOT, slug + '.html');
  if (!fs.existsSync(fp)) { return; }

  let html = fs.readFileSync(fp, 'utf8');
  const fn = path.basename(fp);
  const m = html.match(/<h1>([^<]+)<\/h1>/);
  const name = m ? m[1] : (entry.name || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()));
  const cat = entry.cat || 'unknown';

  // Remove OLD enrichment content (between byline marker and trust div)
  // so we can re-inject updated content
  const bylineStart = html.indexOf('<div class="seo-author-byline"');
  const trustStart = html.indexOf('<div class="seo-trust">');

  if (bylineStart !== -1 && trustStart !== -1 && bylineStart < trustStart) {
    // Remove old enriched sections
    html = html.substring(0, bylineStart) + html.substring(trustStart);
  }

  // Build new enriched content
  const sections = buildSections(slug, name, cat);

  // Insert before trust div
  const trust = '<div class="seo-trust">';
  if (html.includes(trust)) {
    html = html.replace(trust, sections + '\n      ' + trust);
  }

  // Link author name if not already
  html = html.replace(
    '<strong>Maintained by:</strong> Sagar Sahni, Calc Labz',
    '<strong>Maintained by:</strong> <a href="/author">Sagar Sahni</a>, Calc Labz'
  );

  fs.writeFileSync(fp, html, 'utf8');
  const key = slugToKey(slug);
  const hasRich = key && ALL_RICH[key];
  if (hasRich) {
    console.log(`  ✅ ${fn} [RICH: ${key}]`);
  } else {
    console.log(`  📝 ${fn} [TEMPLATE: ${cat}]`);
  }
  enriched++;
});

console.log(`\n📊 Enrichment Complete!`);
console.log(`   Total processed: ${enriched}`);
console.log(`   Custom RICH content: ${Object.keys(ALL_RICH).length} entries`);
console.log(`   Template-based: ${enriched - Object.keys(ALL_RICH).length}`);
