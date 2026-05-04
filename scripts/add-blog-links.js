#!/usr/bin/env node
/**
 * Phase 3.1 — Add Blog Article Links to Calculator Pages
 * For every calculator that has a matching blog post, adds a prominent
 * "Read our complete guide" CTA card.
 * Run: node scripts/add-blog-links.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'blog');

// Map calculator slugs to blog post directories
const blogDirs = fs.readdirSync(BLOG_DIR).filter(f => {
  const fp = path.join(BLOG_DIR, f);
  return fs.statSync(fp).isDirectory();
});

// Build slug → blog mapping
const CALC_TO_BLOG = {};
const BLOG_TITLES = {};

// Extract blog title from index.html
blogDirs.forEach(dir => {
  const indexPath = path.join(BLOG_DIR, dir, 'index.html');
  if (!fs.existsSync(indexPath)) return;
  const html = fs.readFileSync(indexPath, 'utf8');
  const titleMatch = html.match(/<h1[^>]*>([^<]+)<\/h1>/);
  const title = titleMatch ? titleMatch[1].trim() : dir.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  BLOG_TITLES[dir] = title;
});

// Map known calculator slugs to blog slugs
const SLUG_MAP = {
  'emi': 'emi-calculator-guide-india-2026',
  'sip': 'sip-calculator-mutual-fund-investment-2026',
  'gst': 'gst-calculator-cgst-sgst-igst-guide-2026',
  'bmi': 'bmi-calculator-chart-india-2026',
  'income-tax': 'income-tax-calculator-fy-2025-26-slabs',
  'tax-regime': 'old-vs-new-tax-regime-comparison-fy-2025-26',
  'cgpa-to-percentage': 'cgpa-to-percentage-converter-formula-2026',
  'fd': 'fixed-deposit-calculator-best-fd-rates-2026',
  'ppf': 'ppf-calculator-tax-free-returns-maturity-2026',
  'compound-interest': 'compound-interest-calculator-rule-of-72',
  'mortgage': 'home-loan-emi-calculator-eligibility-tax-benefits-2026',
  'inflation': 'inflation-calculator-india-purchasing-power-2026',
  'roi': 'roi-cagr-calculator-investment-returns-2026',
  'tdee': 'tdee-calculator-daily-calorie-needs-2026',
  'bmr': 'bmr-calculator-basal-metabolic-rate-2026',
  'sleep': 'sleep-calculator-optimal-bedtime-cycles-2026',
  'water': 'water-intake-calculator-daily-hydration-guide-2026',
  'calories': 'calories-burned-calculator-exercise-fat-loss-2026',
  'macros': 'macro-calculator-protein-carbs-fat-2026',
  'percentage': 'percentage-calculator-tricks-formulas-examples',
  'age': 'age-calculator-exact-years-months-days-2026',
  'salary': 'in-hand-salary-ctc-take-home-india',
  'hra': 'hra-exemption-calculation-rules-india',
  'gratuity': 'gratuity-calculation-formula-eligibility',
  'tds': 'tds-rates-sections-calculate-refund',
  'professionaltax': 'professional-tax-state-wise-rates-india',
  'epf': 'epf-calculator-interest-rate-withdrawal-rules',
  'nps': 'nps-calculator-returns-tax-benefits-india',
  'retirement': 'retirement-calculator-corpus-needed-india',
  'fire': 'fire-calculator-early-retirement-india',
  'ssy': 'sukanya-samriddhi-yojana-calculator-benefits',
  'rd': 'recurring-deposit-calculator-monthly-savings',
  'cagr': 'cagr-calculator-investment-growth-rate',
  'swp': 'swp-calculator-systematic-withdrawal-plan',
  'lumpsum': 'lumpsum-investment-calculator-vs-sip',
  'step-up-sip': 'step-up-sip-calculator-annual-increase',
  'carloan': 'car-loan-emi-calculator-interest-rates',
  'discount': 'discount-calculator-sale-price-savings',
  'electricity': 'electricity-bill-calculator-units-tariff',
  'fuel': 'fuel-cost-calculator-trip-petrol-diesel',
  'mileage': 'mileage-calculator-kmpl-fuel-efficiency',
  'body-fat': 'body-fat-calculator-percentage-measurement',
  'idealweight': 'ideal-weight-calculator-bmi-height-chart',
  'calorie-deficit': 'calorie-deficit-calculator-weight-loss-plan',
  'pregnancy': 'pregnancy-due-date-calculator-week-by-week',
  'ovulation': 'ovulation-calculator-fertile-window-tracking',
  'heartrate': 'heart-rate-zones-calculator-training-guide',
  'onerepmax': 'one-rep-max-calculator-strength-training',
  'runningpace': 'running-pace-calculator-km-mile-splits',
  'sleepdebt': 'sleep-debt-calculator-recovery-strategy',
  'smoking-cost': 'smoking-cost-calculator-savings-health',
  'attendance': 'attendance-calculator-percentage-requirements',
  'gpa': 'gpa-calculator-cgpa-conversion-formula',
  'grade': 'grade-calculator-final-exam-score-needed',
  'advance-tax': 'advance-tax-due-dates-calculation-penalty',
  'capital-gains': 'capital-gains-tax-stcg-ltcg-calculation',
  'salaryhike': 'salary-hike-percentage-calculation-tips',
  'ctc-breakup': 'ctc-breakup-salary-structure-explained',
  'freelancetax': 'freelancer-tax-guide-itr-filing-india',
  'esoptax': 'esop-taxation-india-exercise-sale-tax',
  'leaveencash': 'leave-encashment-tax-rules-exemption',
  'gstinvoice': 'gst-invoice-generator-format-rules',
  'prepayment': 'loan-prepayment-calculator-save-interest',
  'homedownpayment': 'home-loan-down-payment-how-much-needed',
  'balance-transfer': 'home-loan-balance-transfer-when-switch',
  'businessloan': 'business-loan-calculator-eligibility-rates',
  'loancompare': 'loan-comparison-calculator-best-deal',
  'rentvsbuy': 'rent-vs-buy-calculator-home-decision',
  'carleasevsbuy': 'car-lease-vs-buy-calculator-comparison',
  'creditutil': 'credit-utilization-calculator-cibil-score',
  'debtavalanche': 'debt-avalanche-calculator-fastest-payoff',
  'insuranceneed': 'insurance-need-calculator-life-cover-amount',
  'networth': 'net-worth-calculator-track-financial-health',
  'tcsremittance': 'tcs-remittance-foreign-transfer-tax-india',
  'hravshomeloan': 'hra-vs-home-loan-tax-benefit-comparison',
  'breakeven': 'break-even-calculator-business-profitability',
  'sec80c': 'section-80c-deductions-complete-list',
  'tax-saving': 'tax-saving-investment-planner-80c-80d-nps',
  'brokerage': 'brokerage-calculator-trading-costs-charges',
  'npvirr': 'npv-irr-calculator-project-profitability',
  'dividend-yield': 'dividend-yield-calculator-stock-income',
  'gold-investment': 'gold-investment-calculator-returns-comparison',
  'stock-return': 'stock-returns-calculator-profit-loss',
  'mutualfundreturns': 'mutual-fund-returns-calculator-cagr-xirr',
  'xirr': 'xirr-calculator-sip-irregular-investments',
  'goalsip': 'goal-based-sip-calculator-target-corpus',
  'assetallocation': 'asset-allocation-calculator-portfolio-strategy',
  'emergencyfund': 'emergency-fund-calculator-how-much-save',
  'scss': 'scss-calculator-senior-citizen-savings-scheme',
  'nsc': 'nsc-calculator-interest-rate-tax-benefits',
  'savings-goal': 'savings-goal-calculator-monthly-target',
  'apy': 'atal-pension-yojana-calculator-benefits',
  'elssreturns': 'elss-vs-ppf-vs-fd-tax-saving-comparison',
  'stamp-duty': 'stamp-duty-calculator-property-registration',
  'householdbudget': 'household-budget-calculator-50-30-20-rule',
  'weddingbudget': 'wedding-budget-calculator-planning-india',
  'travelbudget': 'travel-budget-calculator-trip-expenses',
  'constructioncost': 'construction-cost-calculator-building-india',
  'solar': 'solar-panel-calculator-roi-savings-payback',
  'protein-intake': 'protein-calculator-daily-intake-muscle-building',
  'blood-pressure': 'blood-pressure-chart-normal-ranges-meaning',
  'vo2max': 'vo2-max-calculator-aerobic-fitness-level',
  'diabetes-risk': 'diabetes-risk-calculator-type-2-assessment',
  'child-height': 'child-height-predictor-adult-estimate',
  'leanbodymass': 'lean-body-mass-calculator-muscle-mass',
  'bodyrecomp': 'body-recomposition-calculator-muscle-fat',
  'studyhours': 'study-hours-calculator-exam-preparation',
  'percentile': 'percentile-calculator-rank-score-analysis',
  'pomodoro': 'pomodoro-timer-technique-productivity',
  'loan-eligibility': 'loan-eligibility-income-cibil-criteria',
  'tip': 'tip-calculator-guide-how-much-to-tip',
  'inflationgoal': 'inflation-adjusted-returns-calculator-real-returns',
  'creditcard': 'credit-card-payoff-calculator-minimum-payment-trap',
  'rent-yield': 'rent-affordability-calculator-budget-rule',
  'freelancerate': 'freelance-rate-calculator-hourly-pricing',
};

let linked = 0;

// Process all calculator pages
const calcFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('-calculator.html'));

calcFiles.forEach(fn => {
  const slug = fn.replace('.html', '');
  const key = slug.replace('-calculator', '');
  const blogSlug = SLUG_MAP[key];

  if (!blogSlug) return;

  // Verify blog exists
  const blogDir = path.join(BLOG_DIR, blogSlug);
  if (!fs.existsSync(blogDir)) return;

  const fp = path.join(ROOT, fn);
  let html = fs.readFileSync(fp, 'utf8');

  // Skip if already has blog link
  if (html.includes('seo-blog-cta')) return;

  const title = BLOG_TITLES[blogSlug] || blogSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const ctaHtml = `\n      <div class="seo-blog-cta" style="margin:20px 0;padding:20px;background:linear-gradient(135deg,rgba(99,102,241,.12),rgba(129,140,248,.08));border:1px solid rgba(99,102,241,.2);border-radius:16px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
          <i class="fas fa-book-open" style="color:var(--p);font-size:1.1rem"></i>
          <h3 style="font-size:1rem;font-weight:700;color:var(--txt);margin:0">📚 Complete Guide Available</h3>
        </div>
        <p style="font-size:.9rem;color:var(--txt1);line-height:1.7;margin-bottom:12px">Want to learn more? Read our comprehensive guide with detailed explanations, real-world examples, expert analysis, and actionable tips.</p>
        <a href="/blog/${blogSlug}" style="display:inline-flex;align-items:center;gap:8px;padding:10px 20px;background:var(--p);color:#fff;border-radius:12px;font-size:.88rem;font-weight:600;text-decoration:none;transition:all .3s">Read: ${title.substring(0, 60)}${title.length > 60 ? '…' : ''} <i class="fas fa-arrow-right" style="font-size:.75rem"></i></a>
      </div>`;

  // Insert before the trust div
  const trust = '<div class="seo-trust">';
  if (html.includes(trust)) {
    html = html.replace(trust, ctaHtml + '\n      ' + trust);
    fs.writeFileSync(fp, html, 'utf8');
    linked++;
    console.log(`  ✅ ${fn} → /blog/${blogSlug}`);
  }
});

console.log(`\n📊 Blog Cross-Links: Added ${linked} calculator → blog links`);
