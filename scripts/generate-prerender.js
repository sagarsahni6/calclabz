#!/usr/bin/env node
/**
 * Calc Labz — Pre-render Build Script
 * ====================================
 * Generates head-only pre-rendered HTML files for top 20 calculators.
 * Each file has unique <title>, <meta description>, og:*, canonical, and
 * inline JSON-LD schemas baked into static HTML so Googlebot reads real
 * metadata on first response — without waiting for JavaScript.
 *
 * Usage:  node scripts/generate-prerender.js
 * Output: /emi-calculator.html, /sip-calculator.html, ... (root of project)
 *
 * After running this script:
 *  - Commit the generated .html files
 *  - vercel.json rewrites route each clean URL to its pre-rendered file
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ── CONFIG ──────────────────────────────────────────────────────────────────
const BASE_URL = 'https://calclabz.com';
const ROOT     = path.resolve(__dirname, '..');   // project root
const TEMPLATE = path.join(ROOT, 'index.html');

// Top-20 calculator pre-render config.
// Each entry drives the unique <head> metadata for one static HTML file.
const CALCULATORS = [
  // ── FINANCE ───────────────────────────────────────────────────────────────
  {
    id:     'emi',
    slug:   'emi-calculator',
    cat:    'Finance',
    title:  'EMI Calculator — Free Loan EMI Calculator India 2026 | Calc Labz',
    desc:   'Calculate home loan, car loan & personal loan EMI instantly. Get monthly EMI, total interest paid, and full amortization schedule. Free, no signup, updated for 2026.',
    howTo: {
      name: 'How to Calculate Loan EMI',
      steps: [
        'Enter the loan principal amount (e.g. ₹50,00,000 for a home loan)',
        'Enter the annual interest rate offered by your bank (e.g. 8.5%)',
        'Enter the loan tenure in months (e.g. 240 for a 20-year home loan)',
        'Click Calculate to instantly see your monthly EMI, total interest paid, and the full amortization schedule'
      ]
    },
    faqs: [
      { q: 'What is EMI?', a: 'EMI (Equated Monthly Installment) is a fixed payment made by a borrower to a lender each month. It consists of principal and interest components calculated using: EMI = P × r × (1+r)^n / ((1+r)^n - 1).' },
      { q: 'How does prepayment reduce total interest?', a: 'Prepaying reduces the outstanding principal, causing less interest to accrue. Even a 5% annual prepayment can save 15–20% of total interest and shorten the loan by years.' },
      { q: 'What is a good EMI-to-income ratio?', a: 'Financial experts recommend keeping total EMI obligations below 40% of monthly income. Banks typically approve loans where EMI is up to 50% of income.' }
    ]
  },
  {
    id:     'sip',
    slug:   'sip-calculator',
    cat:    'Finance',
    title:  'SIP Calculator — Free SIP Returns Calculator India 2026 | Calc Labz',
    desc:   'Calculate SIP returns, wealth gained, and future value of your mutual fund investments. See the power of compounding with our free SIP calculator — updated for 2026.',
    howTo: {
      name: 'How to Calculate SIP Returns',
      steps: [
        'Enter your monthly SIP investment amount (e.g. ₹5,000)',
        'Enter the expected annual return rate (e.g. 12% for equity mutual funds)',
        'Enter the investment duration in years (e.g. 10 or 20 years)',
        'Click Calculate to see total corpus, wealth gained, and a year-wise growth chart'
      ]
    },
    faqs: [
      { q: 'What is SIP?', a: 'SIP (Systematic Investment Plan) lets you invest a fixed amount monthly in mutual funds. It leverages rupee-cost averaging — buying more units when prices fall, fewer when high.' },
      { q: 'How much can ₹5,000/month grow in 20 years?', a: 'At 12% annual returns, ₹5,000/month for 20 years becomes approximately ₹49.5 lakhs. Your ₹12 lakh investment grows nearly 4x through compounding.' },
      { q: 'Is SIP better than a lumpsum investment?', a: 'SIP outperforms lumpsum during volatile markets via rupee-cost averaging. Lumpsum can outperform in consistently rising markets. SIP is safer for most investors.' }
    ]
  },
  {
    id:     'gst',
    slug:   'gst-calculator',
    cat:    'Finance',
    title:  'GST Calculator — Free Online GST Calculator India 2026 | Calc Labz',
    desc:   'Calculate GST amount with CGST, SGST, and IGST breakdown for any rate (5%, 12%, 18%, 28%). Add or remove GST from any price. Free, instant, no signup required.',
    howTo: {
      name: 'How to Calculate GST',
      steps: [
        'Enter the net price (amount before GST)',
        'Select the applicable GST rate (5%, 12%, 18%, or 28%)',
        'Click Calculate to see GST amount, CGST, SGST, IGST, and total price'
      ]
    },
    faqs: [
      { q: 'What are the GST slab rates in India?', a: 'India has 4 main GST slabs: 5% (essential goods), 12% (standard goods), 18% (most services & goods), and 28% (luxury goods). Some items are exempt (0%).' },
      { q: 'What is the difference between CGST, SGST, and IGST?', a: 'CGST goes to the Central Government, SGST to the State Government — both apply on intra-state sales. IGST applies on inter-state sales and goes to the Centre.' },
      { q: 'How do I calculate GST inclusive price?', a: 'GST inclusive price = Net price × (1 + GST rate/100). For ₹1,000 at 18%: total = ₹1,000 × 1.18 = ₹1,180. The reverse calculator extracts GST from an inclusive price.' }
    ]
  },
  {
    id:     'bmi',
    slug:   'bmi-calculator',
    cat:    'Health',
    title:  'BMI Calculator — Free Body Mass Index Calculator India | Calc Labz',
    desc:   'Calculate your BMI (Body Mass Index) instantly. Know if you are underweight, normal, overweight, or obese. Includes Asian BMI scale. Free, no signup required.',
    howTo: {
      name: 'How to Calculate BMI',
      steps: [
        'Enter your weight in kilograms (e.g. 70 kg)',
        'Enter your height in centimetres (e.g. 170 cm)',
        'Click Calculate to see your BMI value, health category, and personalised interpretation'
      ]
    },
    faqs: [
      { q: 'What is a healthy BMI range?', a: 'A BMI of 18.5–24.9 is considered normal weight. For Asian populations, some experts suggest 18.5–22.9 due to higher metabolic risk at lower BMIs.' },
      { q: 'Is BMI accurate for everyone?', a: 'BMI has limitations — it does not distinguish between muscle and fat. Athletes may show "overweight" BMI despite low body fat. It is less accurate for children, the elderly, and pregnant women.' },
      { q: 'How can I improve my BMI?', a: 'For overweight: reduce caloric intake by ~500 cal/day and exercise 150 min/week. For underweight: increase intake with nutrient-dense foods and add strength training.' }
    ]
  },
  {
    id:     'taxregime',
    slug:   'taxregime-calculator',
    cat:    'Finance',
    title:  'Old vs New Tax Regime Calculator FY 2025-26 | Calc Labz',
    desc:   'Compare Old vs New income tax regime for FY 2025-26. Find out which regime saves you more tax with deductions like 80C, HRA, NPS. Free, instant calculator.',
    howTo: {
      name: 'How to Compare Old vs New Tax Regime',
      steps: [
        'Enter your annual gross income',
        'Enter your total deductions under old regime (80C, HRA, NPS, home loan, etc.)',
        'Click Calculate to instantly see tax payable under both regimes and the recommended choice'
      ]
    },
    faqs: [
      { q: 'Which tax regime is better for me?', a: 'New regime is better if your total deductions are below ₹2.5–3 lakh. Old regime is better with deductions above ₹3.75 lakh (for 30% tax bracket). Our calculator shows exact breakeven.' },
      { q: 'Can I switch between old and new regime every year?', a: 'Salaried employees can switch every year. Business owners can switch only once from old to new regime and cannot revert.' }
    ]
  },
  {
    id:     'incometax',
    slug:   'incometax-calculator',
    cat:    'Finance',
    title:  'Income Tax Calculator FY 2025-26 — Free Online Tax Calculator | Calc Labz',
    desc:   'Calculate income tax for FY 2025-26 under old and new tax regime. Includes 80C, 80D, HRA, standard deduction. Free income tax calculator for salaried and business income.',
    howTo: {
      name: 'How to Calculate Income Tax',
      steps: [
        'Enter your annual gross income from salary or business',
        'Select your age group (below 60 / senior citizen / super senior citizen)',
        'Enter deductions (80C investments, HRA, NPS, medical insurance premium)',
        'Click Calculate to see taxable income, tax slab-wise breakdown, and total tax payable including cess'
      ]
    },
    faqs: [
      { q: 'What is the income tax slab for FY 2025-26?', a: 'New regime slabs: 0–₹3L (nil), ₹3–7L (5%), ₹7–10L (10%), ₹10–12L (15%), ₹12–15L (20%), above ₹15L (30%). 4% health & education cess applies.' },
      { q: 'What deductions can I claim under the old regime?', a: '80C (₹1.5L), 80D (medical insurance ₹25K–75K), HRA, standard deduction (₹50K), home loan interest (₹2L), NPS (₹50K), and more.' }
    ]
  },
  {
    id:     'ppf',
    slug:   'ppf-calculator',
    cat:    'Finance',
    title:  'PPF Calculator — Public Provident Fund Maturity Calculator 2026 | Calc Labz',
    desc:   'Calculate PPF maturity amount, total interest earned, and year-wise balance for your Public Provident Fund account. Free PPF calculator with 15-year projection.',
    howTo: {
      name: 'How to Calculate PPF Maturity',
      steps: [
        'Enter your annual PPF contribution (maximum ₹1,50,000)',
        'The current PPF interest rate (7.1%) is pre-filled — adjust if changed',
        'Enter the number of years (minimum 15, extendable in 5-year blocks)',
        'Click Calculate to see total maturity amount, interest earned, and year-wise balance table'
      ]
    },
    faqs: [
      { q: 'What is the current PPF interest rate?', a: 'The PPF interest rate for Q1 FY 2025-26 is 7.1% per annum, compounded annually. It is reviewed quarterly by the government.' },
      { q: 'Is PPF tax-free?', a: 'Yes, PPF enjoys EEE (Exempt-Exempt-Exempt) tax status: contributions qualify for 80C deduction, interest is tax-free, and maturity amount is completely tax-free.' }
    ]
  },
  {
    id:     'fd',
    slug:   'fd-calculator',
    cat:    'Finance',
    title:  'FD Calculator — Fixed Deposit Maturity Calculator India 2026 | Calc Labz',
    desc:   'Calculate Fixed Deposit maturity amount, total interest, and returns for any compounding frequency. Compare FD rates across banks. Free FD calculator — no signup.',
    howTo: {
      name: 'How to Calculate Fixed Deposit Returns',
      steps: [
        'Enter the principal amount you wish to invest',
        'Enter the FD interest rate offered by your bank',
        'Select compounding frequency (quarterly for most Indian banks)',
        'Enter the tenure in years',
        'Click Calculate to see maturity amount, interest earned, and effective annual yield'
      ]
    },
    faqs: [
      { q: 'How is FD interest calculated?', a: 'FD maturity = P × (1 + r/n)^(n×t), where P = principal, r = annual rate, n = compounding frequency per year, t = tenure in years. Most Indian banks compound quarterly.' },
      { q: 'Is FD interest taxable?', a: 'Yes, FD interest is fully taxable as "Income from Other Sources" at your applicable tax slab. TDS of 10% is deducted if interest exceeds ₹40,000/year (₹50,000 for senior citizens).' }
    ]
  },
  {
    id:     'rd',
    slug:   'rd-calculator',
    cat:    'Finance',
    title:  'RD Calculator — Recurring Deposit Maturity Calculator India | Calc Labz',
    desc:   'Calculate Recurring Deposit maturity amount and total interest earned for monthly deposits. Free RD calculator for all Indian banks. No signup required.',
    howTo: {
      name: 'How to Calculate Recurring Deposit Returns',
      steps: [
        'Enter your monthly deposit amount',
        'Enter the RD interest rate offered by your bank',
        'Enter the tenure in months',
        'Click Calculate to see total maturity amount and interest earned'
      ]
    },
    faqs: [
      { q: 'How is RD maturity calculated?', a: 'RD uses compound interest calculated quarterly: M = R × [(1+r)^n – 1] / (1 – (1+r)^(-1/3)), where R = monthly deposit, r = quarterly rate, n = number of quarters.' },
      { q: 'What is the difference between FD and RD?', a: 'FD requires a lump sum deposit once, while RD requires fixed monthly deposits over the tenure. RD is ideal for building a savings habit with regular income.' }
    ]
  },
  {
    id:     'compoundinterest',
    slug:   'compoundinterest-calculator',
    cat:    'Finance',
    title:  'Compound Interest Calculator — Free Online CI Calculator | Calc Labz',
    desc:   'Calculate compound interest with daily, monthly, quarterly, or annual compounding. See how money grows over time with the power of compounding. Free, instant calculator.',
    howTo: {
      name: 'How to Calculate Compound Interest',
      steps: [
        'Enter the principal amount',
        'Enter the annual interest rate',
        'Select the compounding frequency (monthly, quarterly, annually)',
        'Enter the time period in years',
        'Click Calculate to see final amount, total compound interest, and growth chart'
      ]
    },
    faqs: [
      { q: 'What is the compound interest formula?', a: 'A = P(1 + r/n)^(nt), where A = final amount, P = principal, r = annual rate (decimal), n = compounding frequency per year, t = time in years.' },
      { q: 'What is the Rule of 72?', a: 'Divide 72 by your annual return rate to estimate how many years it takes to double your money. At 8% returns, money doubles in 72/8 = 9 years.' }
    ]
  },
  {
    id:     'simpleinterest',
    slug:   'simpleinterest-calculator',
    cat:    'Finance',
    title:  'Simple Interest Calculator — Free SI Calculator Online | Calc Labz',
    desc:   'Calculate simple interest, total amount payable, and monthly interest for any loan or investment. Free simple interest calculator — instant results, no signup.',
    howTo: {
      name: 'How to Calculate Simple Interest',
      steps: [
        'Enter the principal amount',
        'Enter the annual interest rate',
        'Enter the time period in years',
        'Click Calculate to see simple interest and total amount'
      ]
    },
    faqs: [
      { q: 'What is the simple interest formula?', a: 'SI = P × R × T / 100, where P = principal, R = annual rate percentage, T = time in years. Total Amount = P + SI.' },
      { q: 'When is simple interest used?', a: 'Simple interest is used for short-term loans, car loans (sometimes), personal loans, and some savings accounts. Most bank products use compound interest.' }
    ]
  },
  {
    id:     'percentage',
    slug:   'percentage-calculator',
    cat:    'Math',
    title:  'Percentage Calculator — Free Online % Calculator | Calc Labz',
    desc:   'Calculate percentages easily: what is X% of Y, percentage increase/decrease, percentage difference, and reverse percentage. Free online percentage calculator.',
    howTo: {
      name: 'How to Calculate Percentage',
      steps: [
        'Enter the base value',
        'Enter the percentage to apply',
        'Click Calculate to see the result and reverse calculations'
      ]
    },
    faqs: [
      { q: 'How do I calculate X% of a number?', a: 'X% of N = (X/100) × N. For example, 15% of 500 = (15/100) × 500 = 75.' },
      { q: 'How do I calculate percentage increase?', a: 'Percentage increase = ((New – Old) / Old) × 100. If price goes from ₹100 to ₹120, increase = ((120–100)/100) × 100 = 20%.' }
    ]
  },
  {
    id:     'cagr',
    slug:   'cagr-calculator',
    cat:    'Finance',
    title:  'CAGR Calculator — Compound Annual Growth Rate Calculator | Calc Labz',
    desc:   'Calculate CAGR (Compound Annual Growth Rate) for investments, revenues, and portfolios. Compare investment performance with annualised returns. Free CAGR calculator.',
    howTo: {
      name: 'How to Calculate CAGR',
      steps: [
        'Enter the beginning value of your investment',
        'Enter the ending value after the investment period',
        'Enter the number of years',
        'Click Calculate to see the CAGR percentage and equivalent fixed return'
      ]
    },
    faqs: [
      { q: 'What is CAGR formula?', a: 'CAGR = (Ending Value / Beginning Value)^(1/n) – 1, where n = number of years. It represents the constant annual growth rate that would produce the same result.' },
      { q: 'Is a high CAGR always good?', a: 'Higher CAGR generally indicates better performance, but context matters. Compare CAGR against benchmark indices (Nifty 50 ~12-15% historical CAGR) and risk taken.' }
    ]
  },
  {
    id:     'inflation',
    slug:   'inflation-calculator',
    cat:    'Finance',
    title:  'Inflation Calculator — Purchasing Power Calculator India | Calc Labz',
    desc:   'Calculate the impact of inflation on purchasing power. Find future value of today\'s money or past value of an amount. Free inflation & purchasing power calculator.',
    howTo: {
      name: 'How to Calculate Inflation Impact',
      steps: [
        'Enter the current amount (e.g. ₹10,00,000)',
        'Enter the annual inflation rate (India average ~6%)',
        'Enter the number of years',
        'Click Calculate to see future purchasing power and how much you need to maintain the same value'
      ]
    },
    faqs: [
      { q: 'What is the average inflation rate in India?', a: 'India\'s average CPI inflation has been 5–7% over the past decade. RBI\'s target is 4% (with a +/-2% band). Use 6% as a conservative planning assumption.' },
      { q: 'How does inflation affect savings?', a: 'If your savings earn less than the inflation rate, your real purchasing power decreases. ₹1,00,000 today at 6% inflation is worth only ₹55,839 in 10 years.' }
    ]
  },
  {
    id:     'mortgage',
    slug:   'mortgage-calculator',
    cat:    'Finance',
    title:  'Mortgage Calculator — Home Loan EMI Calculator India | Calc Labz',
    desc:   'Calculate home loan mortgage EMI, total interest, and amortization schedule. Compare loan offers from different banks. Free mortgage calculator for India.',
    howTo: {
      name: 'How to Calculate Mortgage/Home Loan EMI',
      steps: [
        'Enter your home loan amount (principal)',
        'Enter the annual interest rate (check your bank\'s current home loan rate)',
        'Enter the loan tenure in years (up to 30 years)',
        'Click Calculate to see monthly EMI, total interest, and amortization table'
      ]
    },
    faqs: [
      { q: 'What is the home loan interest rate in India in 2026?', a: 'Home loan rates in India range from 8.40% to 9.50% per annum as of 2026, depending on the lender, loan amount, credit score, and loan-to-value ratio.' },
      { q: 'What are the tax benefits on home loans?', a: 'Under the old regime: deduction up to ₹2 lakh on interest (Section 24b) and ₹1.5 lakh on principal (Section 80C). No deduction under the new tax regime.' }
    ]
  },
  // ── HEALTH ────────────────────────────────────────────────────────────────
  {
    id:     'bmr',
    slug:   'bmr-calculator',
    cat:    'Health',
    title:  'BMR Calculator — Basal Metabolic Rate Calculator | Calc Labz',
    desc:   'Calculate your Basal Metabolic Rate (BMR) using Mifflin-St Jeor formula. Find the minimum calories your body needs at rest. Free BMR calculator with TDEE breakdown.',
    howTo: {
      name: 'How to Calculate Basal Metabolic Rate (BMR)',
      steps: [
        'Enter your age in years',
        'Select your gender',
        'Enter your weight in kilograms',
        'Enter your height in centimetres',
        'Click Calculate to see your BMR and daily calorie needs at different activity levels'
      ]
    },
    faqs: [
      { q: 'What is BMR?', a: 'BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest to maintain vital functions (breathing, circulation, cell repair). It accounts for 60-75% of total daily energy expenditure.' },
      { q: 'How is BMR calculated?', a: 'Mifflin-St Jeor formula: For men: BMR = (10 × weight kg) + (6.25 × height cm) – (5 × age) + 5. For women: BMR = (10 × weight kg) + (6.25 × height cm) – (5 × age) – 161.' }
    ]
  },
  {
    id:     'tdee',
    slug:   'tdee-calculator',
    cat:    'Health',
    title:  'TDEE Calculator — Total Daily Energy Expenditure Calculator | Calc Labz',
    desc:   'Calculate your TDEE (Total Daily Energy Expenditure) based on activity level. Find exact daily calories needed to maintain, lose, or gain weight. Free TDEE calculator.',
    howTo: {
      name: 'How to Calculate TDEE',
      steps: [
        'Enter your age, gender, weight, and height',
        'Select your activity level (sedentary / lightly active / moderately active / very active)',
        'Click Calculate to see your TDEE (maintenance calories), and calorie targets for weight loss and gain'
      ]
    },
    faqs: [
      { q: 'What is TDEE?', a: 'TDEE (Total Daily Energy Expenditure) is the total calories you burn per day, combining BMR (resting metabolism) with activity level. Eating at TDEE maintains weight; below = weight loss; above = weight gain.' },
      { q: 'How much of a calorie deficit should I create to lose weight?', a: 'A deficit of 500 cal/day leads to ~0.5 kg/week weight loss. A 750 cal deficit = ~0.75 kg/week. Do not go below BMR or below 1200 cal/day without medical supervision.' }
    ]
  },
  {
    id:     'age',
    slug:   'age-calculator',
    cat:    'Health',
    title:  'Age Calculator — Exact Age in Years, Months & Days | Calc Labz',
    desc:   'Calculate your exact age in years, months, days, hours, and minutes from your date of birth. Find days until your next birthday. Free age calculator — instant results.',
    howTo: {
      name: 'How to Calculate Exact Age',
      steps: [
        'Enter your date of birth (DD/MM/YYYY)',
        'Click Calculate to see your exact age in years, months, days, hours, and minutes',
        'Also see the countdown to your next birthday and your birth weekday'
      ]
    },
    faqs: [
      { q: 'What is my exact age today?', a: 'Enter your date of birth in the calculator above to get your exact age in years, months, days, hours, and even minutes — calculated as of right now.' },
      { q: 'How do I calculate age in days?', a: 'Age in days = (Today\'s date – Birth date) in days. Our calculator shows this automatically along with age in years, months, weeks, hours, and minutes.' }
    ]
  },
  // ── EDUCATION ─────────────────────────────────────────────────────────────
  {
    id:     'cgpa',
    slug:   'cgpa-calculator',
    cat:    'Education',
    title:  'CGPA Calculator — CGPA to Percentage Converter | Calc Labz',
    desc:   'Calculate CGPA from marks, convert CGPA to percentage for any university scale (10-point, 4-point). Free CGPA calculator and GPA converter — updated 2026.',
    howTo: {
      name: 'How to Calculate CGPA',
      steps: [
        'Enter grades or marks for each subject',
        'Enter credit hours for each subject (if applicable)',
        'Click Calculate to see your CGPA, percentage equivalent, and letter grade'
      ]
    },
    faqs: [
      { q: 'How do I convert CGPA to percentage?', a: 'For most Indian universities: Percentage = CGPA × 9.5. For a CGPA of 8.0: 8.0 × 9.5 = 76%. Different universities may use different multipliers — check your institution\'s formula.' },
      { q: 'What is the difference between CGPA and GPA?', a: 'CGPA (Cumulative Grade Point Average) is the average over all semesters. GPA (Grade Point Average) is for a single semester. CGPA on a 10-point scale, GPA usually on a 4-point scale.' }
    ]
  },
  // ── FINANCE (Salary) ──────────────────────────────────────────────────────
  {
    id:     'inhandsalary',
    slug:   'inhandsalary-calculator',
    cat:    'Finance',
    title:  'In-Hand Salary Calculator — Take Home Salary Calculator India | Calc Labz',
    desc:   'Calculate your monthly in-hand (take-home) salary from CTC. Includes PF, professional tax, income tax TDS, and HRA deductions. Free salary calculator for India 2026.',
    howTo: {
      name: 'How to Calculate In-Hand Salary from CTC',
      steps: [
        'Enter your annual CTC (Cost to Company)',
        'Enter your basic salary percentage (typically 40–50% of CTC)',
        'Enter HRA percentage and other allowances',
        'Click Calculate to see monthly in-hand salary, all deductions (PF, PT, TDS), and CTC breakup'
      ]
    },
    faqs: [
      { q: 'What is the difference between CTC and in-hand salary?', a: 'CTC (Cost to Company) is total employer cost including employer PF, gratuity, and benefits. In-hand salary (take-home) is CTC minus employee PF (12%), income tax TDS, and professional tax.' },
      { q: 'How much of CTC do I actually receive in hand?', a: 'Typically 65–80% of CTC is received as in-hand salary. The rest goes to PF contributions, income tax TDS, professional tax, and employer-paid benefits that are part of CTC.' }
    ]
  }
];

// ── HELPERS ──────────────────────────────────────────────────────────────────
function buildHowToSchema(calc) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: calc.howTo.name,
    description: calc.desc,
    step: calc.howTo.steps.map(function(text) {
      return { '@type': 'HowToStep', text: text };
    })
  };
}

function buildFAQSchema(calc) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: calc.faqs.map(function(f) {
      return {
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      };
    })
  };
}

function buildBreadcrumbSchema(calc) {
  var pageUrl = BASE_URL + '/' + calc.slug;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: calc.cat + ' Calculators', item: BASE_URL + '/' + calc.cat.toLowerCase() + '-calculators' },
      { '@type': 'ListItem', position: 3, name: calc.title.split(' —')[0], item: pageUrl }
    ]
  };
}

function buildSoftwareSchema(calc) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: calc.title.split(' —')[0],
    description: calc.desc,
    applicationCategory: 'UtilitiesApplication',
    applicationSubCategory: 'Calculator',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock' }
  };
}

function jsonLdTag(id, schema) {
  return '<script type="application/ld+json" id="' + id + '">\n' +
    JSON.stringify(schema, null, 2) +
    '\n</script>';
}

// ── GENERATOR ────────────────────────────────────────────────────────────────
function generate() {
  var template = fs.readFileSync(TEMPLATE, 'utf8');

  CALCULATORS.forEach(function(calc) {
    var pageUrl  = BASE_URL + '/' + calc.slug;
    var html     = template;

    // 1. Replace <title>
    html = html.replace(
      /<title>.*?<\/title>/,
      '<title>' + calc.title + '</title>'
    );

    // 2. Replace meta description
    html = html.replace(
      /<meta name="description" content="[^"]*">/,
      '<meta name="description" content="' + calc.desc + '">'
    );

    // 3. Replace canonical
    html = html.replace(
      /<link rel="canonical" href="[^"]*">/,
      '<link rel="canonical" href="' + pageUrl + '">'
    );

    // 4. Replace og:url
    html = html.replace(
      /<meta property="og:url" content="[^"]*">/,
      '<meta property="og:url" content="' + pageUrl + '">'
    );

    // 5. Replace og:title
    html = html.replace(
      /<meta property="og:title" content="[^"]*">/,
      '<meta property="og:title" content="' + calc.title + '">'
    );

    // 6. Replace og:description
    html = html.replace(
      /<meta property="og:description" content="[^"]*">/,
      '<meta property="og:description" content="' + calc.desc + '">'
    );

    // 7. Replace twitter:title
    html = html.replace(
      /<meta name="twitter:title" content="[^"]*">/,
      '<meta name="twitter:title" content="' + calc.title + '">'
    );

    // 8. Replace twitter:description
    html = html.replace(
      /<meta name="twitter:description" content="[^"]*">/,
      '<meta name="twitter:description" content="' + calc.desc + '">'
    );

    // 9. Inject per-calc JSON-LD schemas just before </head>
    var schemas = [
      jsonLdTag('jsonld-howto',       buildHowToSchema(calc)),
      jsonLdTag('jsonld-faq',         buildFAQSchema(calc)),
      jsonLdTag('jsonld-breadcrumb',  buildBreadcrumbSchema(calc)),
      jsonLdTag('jsonld-calc',        buildSoftwareSchema(calc))
    ].join('\n');

    // Replace existing jsonld-main and jsonld-website blocks in template,
    // and inject our richer per-page schemas instead
    html = html.replace(
      /<!-- ═══ JSON-LD: SoftwareApplication[\s\S]*?<\/script>\s*\n/,
      ''
    );
    html = html.replace(
      /<!-- ═══ JSON-LD: WebSite[\s\S]*?<\/script>\s*\n/,
      ''
    );
    html = html.replace('</head>', schemas + '\n</head>');

    // 10. Add og:type = webapp for calculator pages
    html = html.replace(
      /<meta property="og:type" content="[^"]*">/,
      '<meta property="og:type" content="website">'
    );

    // Write output file
    var outFile = path.join(ROOT, calc.slug + '.html');
    fs.writeFileSync(outFile, html, 'utf8');
    console.log('  ✓  ' + calc.slug + '.html');
  });

  console.log('\n✅ Generated ' + CALCULATORS.length + ' pre-rendered HTML files in project root.');
  console.log('   Remember to update vercel.json rewrites if you run this again.\n');
}

generate();
