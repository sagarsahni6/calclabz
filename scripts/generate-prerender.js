#!/usr/bin/env node
/**
 * Calc Labz — Pre-render Build Script (SEO-enhanced)
 * ====================================================
 * Generates pre-rendered HTML files for top 20 calculators AND category pages.
 * Each file has:
 *   - Unique <title>, <meta description>, og:*, canonical, JSON-LD schemas
 *   - REAL body HTML: H1, intro, how-to steps, formula, FAQ, related calcs,
 *     trust/YMYL disclaimers, breadcrumb nav — all crawlable without JS
 *   - Correct hreflang (removed from inner pages, only on homepage)
 *   - SEO CSS injected into critical inline styles
 *
 * Usage:  node scripts/generate-prerender.js
 * Output: /emi-calculator.html, /finance-calculators.html, ... (root of project)
 */

'use strict';

var fs   = require('fs');
var path = require('path');

// ── CONFIG ──────────────────────────────────────────────────────────────────
var BASE_URL = 'https://calclabz.com';
var ROOT     = path.resolve(__dirname, '..');
var TEMPLATE = path.join(ROOT, 'index.html');
var TODAY    = new Date().toISOString().split('T')[0];

// ── SEO CSS ─────────────────────────────────────────────────────────────────
var SEO_CSS = '\n/* SEO Pre-rendered Content */\n' +
'.seo-breadcrumb{padding:8px 0;font-size:.82rem;color:var(--txt2)}\n' +
'.seo-breadcrumb a{color:var(--p);text-decoration:none}\n' +
'.seo-breadcrumb a:hover{text-decoration:underline}\n' +
'#seo-content h1{font-size:1.8rem;font-weight:800;margin:16px 0 8px;color:var(--txt)}\n' +
'#seo-content h2{font-size:1.2rem;font-weight:700;margin:24px 0 8px;color:var(--txt)}\n' +
'#seo-content h3{font-size:1rem;font-weight:600;margin:16px 0 6px;color:var(--txt)}\n' +
'.seo-intro{font-size:.95rem;color:var(--txt1);line-height:1.7;margin-bottom:20px}\n' +
'.seo-section{margin-bottom:24px;padding:16px;background:var(--bg1);border:1px solid var(--brd);border-radius:var(--rmd)}\n' +
'.seo-section p,.seo-section li{font-size:.9rem;color:var(--txt1);line-height:1.7}\n' +
'.seo-section ol,.seo-section ul{padding-left:20px;margin:8px 0}\n' +
'.seo-section li{margin:4px 0}\n' +
'.seo-faq{margin-bottom:24px}\n' +
'.seo-faq details{background:var(--bg1);border:1px solid var(--brd);border-radius:var(--rsm);margin:8px 0;overflow:hidden}\n' +
'.seo-faq summary{padding:12px 16px;font-weight:600;cursor:pointer;font-size:.9rem;color:var(--txt)}\n' +
'.seo-faq details[open] summary{border-bottom:1px solid var(--brd)}\n' +
'.seo-faq details p{padding:8px 16px 12px;font-size:.88rem;color:var(--txt1);line-height:1.7}\n' +
'.seo-related-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:12px}\n' +
'.seo-related-grid a{display:block;padding:10px 14px;background:var(--bg1);border:1px solid var(--brd);border-radius:var(--rsm);font-size:.85rem;color:var(--p);text-decoration:none;transition:var(--transition)}\n' +
'.seo-related-grid a:hover{background:var(--bg2);border-color:var(--p)}\n' +
'.seo-trust{margin:24px 0;padding:16px;background:var(--bg2);border-radius:var(--rsm);border-left:3px solid var(--p)}\n' +
'.seo-trust p{font-size:.82rem;color:var(--txt2);line-height:1.6;margin:4px 0}\n' +
'.seo-trust strong{color:var(--txt1)}\n' +
'.seo-calc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;margin-top:16px}\n' +
'.seo-calc-card{display:block;padding:16px;background:var(--bg1);border:1px solid var(--brd);border-radius:var(--rmd);text-decoration:none;transition:var(--transition)}\n' +
'.seo-calc-card:hover{border-color:var(--p);background:var(--bg2)}\n' +
'.seo-calc-card strong{display:block;color:var(--txt);font-size:.95rem;margin-bottom:4px}\n' +
'.seo-calc-card span{font-size:.82rem;color:var(--txt2);display:block}\n' +
'@media(max-width:600px){.seo-related-grid{grid-template-columns:1fr}}\n' +
'.seo-article{margin-bottom:24px}\n' +
'.seo-article-meta{display:flex;gap:8px;font-size:.82rem;color:var(--txt2);margin-bottom:20px;flex-wrap:wrap}\n' +
'.seo-article h2{font-size:1.15rem;font-weight:700;margin:24px 0 8px;color:var(--txt)}\n' +
'.seo-article p{font-size:.92rem;color:var(--txt1);line-height:1.75;margin:8px 0}\n' +
'.seo-article ul,.seo-article ol{padding-left:20px;margin:8px 0}\n' +
'.seo-article li{font-size:.9rem;color:var(--txt1);line-height:1.7;margin:4px 0}\n' +
'.seo-article strong{color:var(--txt)}\n' +
'.seo-article-cta{margin:24px 0;padding:16px;background:linear-gradient(135deg,rgba(99,102,241,.12),rgba(129,140,248,.08));border:1px solid rgba(99,102,241,.2);border-radius:var(--rmd);text-align:center}\n' +
'.seo-article-cta a{display:inline-block;padding:10px 24px;background:var(--p);color:#fff;border-radius:var(--rsm);font-size:.9rem;font-weight:600;text-decoration:none;transition:var(--transition)}\n' +
'.seo-article-cta a:hover{background:var(--p2)}\n';

// ── CALCULATORS — Pre-render config ─────────────────────────────────────────
var CALCULATORS = [
  // ── FINANCE ───────────────────────────────────────────────────────────────
  {
    id: 'emi', slug: 'emi-calculator', cat: 'Finance',
    title: 'EMI Calculator: Monthly Loan EMI, Interest &amp; Amortization | Calc Labz',
    desc: 'Calculate home loan, car loan &amp; personal loan EMI instantly. Get monthly EMI, total interest paid, and full amortization schedule. Free, no signup, updated for 2026.',
    whatItDoes: 'The EMI (Equated Monthly Installment) Calculator helps you determine your fixed monthly payment on a loan. It breaks down every payment into principal and interest components and generates a complete amortization schedule showing how your loan balance decreases over time.',
    howCalculated: 'EMI is calculated using the standard reducing balance formula: <strong>EMI = P &times; r &times; (1+r)<sup>n</sup> / ((1+r)<sup>n</sup> &minus; 1)</strong>, where P = loan principal, r = monthly interest rate (annual rate &divide; 12 &divide; 100), and n = total number of monthly installments.',
    workedExample: 'For a &lrm;&#8377;50,00,000 home loan at 8.5% annual interest for 20 years (240 months): Monthly rate r = 0.00708. EMI = &#8377;43,391 per month. Total amount paid = &#8377;1,04,13,840. Total interest = &#8377;54,13,840 &mdash; more than the principal itself.',
    useCases: ['Home loan EMI planning before applying', 'Car loan monthly budget comparison', 'Personal loan affordability assessment', 'Loan prepayment benefit analysis', 'Comparing offers from different banks'],
    howTo: {
      name: 'How to Calculate Loan EMI',
      steps: [
        'Enter the loan principal amount (e.g. &#8377;50,00,000 for a home loan)',
        'Enter the annual interest rate offered by your bank (e.g. 8.5%)',
        'Enter the loan tenure in months (e.g. 240 for a 20-year home loan)',
        'Click Calculate to instantly see your monthly EMI, total interest paid, and the full amortization schedule'
      ]
    },
    faqs: [
      { q: 'What is EMI?', a: 'EMI (Equated Monthly Installment) is a fixed payment made by a borrower to a lender each month. It consists of principal and interest components calculated using: EMI = P &times; r &times; (1+r)^n / ((1+r)^n - 1).' },
      { q: 'How does prepayment reduce total interest?', a: 'Prepaying reduces the outstanding principal, causing less interest to accrue. Even a 5% annual prepayment can save 15&ndash;20% of total interest and shorten the loan by years.' },
      { q: 'What is a good EMI-to-income ratio?', a: 'Financial experts recommend keeping total EMI obligations below 40% of monthly income. Banks typically approve loans where EMI is up to 50% of income.' }
    ]
  },
  {
    id: 'sip', slug: 'sip-calculator', cat: 'Finance',
    title: 'SIP Calculator: Mutual Fund Returns &amp; Future Value | Calc Labz',
    desc: 'Calculate SIP returns, wealth gained, and future value of your mutual fund investments. See the power of compounding with our free SIP calculator &mdash; updated for 2026.',
    whatItDoes: 'The SIP (Systematic Investment Plan) Calculator estimates the future value of regular monthly investments in mutual funds. It shows your total invested amount, wealth gained through compounding, and projected corpus at maturity.',
    howCalculated: 'SIP future value is calculated using: <strong>FV = P &times; [(1+r)<sup>n</sup> &minus; 1] / r &times; (1+r)</strong>, where P = monthly SIP amount, r = expected monthly return rate (annual return &divide; 12 &divide; 100), and n = total number of months.',
    workedExample: 'Investing &#8377;5,000/month for 20 years at 12% expected annual returns: Total investment = &#8377;12,00,000. Future value = &#8377;49,95,740. Wealth gained = &#8377;37,95,740 &mdash; nearly 4x your investment through compounding.',
    useCases: ['Mutual fund investment planning', 'Retirement corpus building', 'Goal-based investing (education, house)', 'Comparing SIP vs lumpsum returns'],
    howTo: {
      name: 'How to Calculate SIP Returns',
      steps: [
        'Enter your monthly SIP investment amount (e.g. &#8377;5,000)',
        'Enter the expected annual return rate (e.g. 12% for equity mutual funds)',
        'Enter the investment duration in years (e.g. 10 or 20 years)',
        'Click Calculate to see total corpus, wealth gained, and a year-wise growth chart'
      ]
    },
    faqs: [
      { q: 'What is SIP?', a: 'SIP (Systematic Investment Plan) lets you invest a fixed amount monthly in mutual funds. It leverages rupee-cost averaging &mdash; buying more units when prices fall, fewer when high.' },
      { q: 'How much can &#8377;5,000/month grow in 20 years?', a: 'At 12% annual returns, &#8377;5,000/month for 20 years becomes approximately &#8377;49.5 lakhs. Your &#8377;12 lakh investment grows nearly 4x through compounding.' },
      { q: 'Is SIP better than a lumpsum investment?', a: 'SIP outperforms lumpsum during volatile markets via rupee-cost averaging. Lumpsum can outperform in consistently rising markets. SIP is safer for most investors.' }
    ]
  },
  {
    id: 'gst', slug: 'gst-calculator', cat: 'Finance',
    title: 'GST Calculator: CGST, SGST &amp; IGST Breakdown | Calc Labz',
    desc: 'Calculate GST amount with CGST, SGST, and IGST breakdown for any rate (5%, 12%, 18%, 28%). Add or remove GST from any price. Free, instant, no signup required.',
    whatItDoes: 'The GST (Goods &amp; Services Tax) Calculator helps you compute the exact GST amount and total price for any product or service in India. It supports all four slab rates and shows the CGST/SGST/IGST breakdown for invoicing.',
    howCalculated: '<strong>GST Amount = Net Price &times; GST Rate / 100</strong>. For GST-inclusive prices: Net Price = GST-inclusive Price &times; 100 / (100 + GST Rate). CGST and SGST are each half of the total GST for intra-state transactions.',
    workedExample: 'For a product worth &#8377;1,000 at 18% GST: GST Amount = &#8377;180 (CGST &#8377;90 + SGST &#8377;90 for intra-state). Total price = &#8377;1,180. For inter-state: IGST = &#8377;180.',
    useCases: ['Invoice generation for businesses', 'Price calculation with GST', 'GST return filing preparation', 'Reverse GST calculation from inclusive price'],
    howTo: {
      name: 'How to Calculate GST',
      steps: [
        'Enter the net price (amount before GST)',
        'Select the applicable GST rate (5%, 12%, 18%, or 28%)',
        'Click Calculate to see GST amount, CGST, SGST, IGST, and total price'
      ]
    },
    faqs: [
      { q: 'What are the GST slab rates in India?', a: 'India has 4 main GST slabs: 5% (essential goods), 12% (standard goods), 18% (most services &amp; goods), and 28% (luxury goods). Some items are exempt (0%).' },
      { q: 'What is the difference between CGST, SGST, and IGST?', a: 'CGST goes to the Central Government, SGST to the State Government &mdash; both apply on intra-state sales. IGST applies on inter-state sales and goes to the Centre.' },
      { q: 'How do I calculate GST inclusive price?', a: 'GST inclusive price = Net price &times; (1 + GST rate/100). For &#8377;1,000 at 18%: total = &#8377;1,000 &times; 1.18 = &#8377;1,180. The reverse calculator extracts GST from an inclusive price.' }
    ]
  },
  {
    id: 'bmi', slug: 'bmi-calculator', cat: 'Health',
    title: 'BMI Calculator: Check Body Mass Index &amp; Healthy Weight | Calc Labz',
    desc: 'Calculate your BMI (Body Mass Index) instantly. Know if you are underweight, normal, overweight, or obese. Includes Asian BMI scale. Free, no signup required.',
    whatItDoes: 'The BMI (Body Mass Index) Calculator measures your body weight relative to your height to assess whether you are in a healthy weight range. It provides both WHO and Asian-specific BMI classifications.',
    howCalculated: '<strong>BMI = Weight (kg) / Height&sup2; (m&sup2;)</strong>. WHO classification: Underweight &lt; 18.5, Normal 18.5&ndash;24.9, Overweight 25&ndash;29.9, Obese &ge; 30. Asian classification uses lower thresholds: Normal 18.5&ndash;22.9, Overweight 23&ndash;24.9, Obese &ge; 25.',
    workedExample: 'For weight 70 kg and height 170 cm (1.70 m): BMI = 70 / (1.70)&sup2; = 70 / 2.89 = 24.2. This is Normal weight by WHO standard but Overweight by Asian standard.',
    useCases: ['Health status assessment', 'Weight management planning', 'Fitness goal setting', 'Medical screening reference'],
    howTo: {
      name: 'How to Calculate BMI',
      steps: [
        'Enter your weight in kilograms (e.g. 70 kg)',
        'Enter your height in centimetres (e.g. 170 cm)',
        'Click Calculate to see your BMI value, health category, and personalised interpretation'
      ]
    },
    faqs: [
      { q: 'What is a healthy BMI range?', a: 'A BMI of 18.5&ndash;24.9 is considered normal weight. For Asian populations, some experts suggest 18.5&ndash;22.9 due to higher metabolic risk at lower BMIs.' },
      { q: 'Is BMI accurate for everyone?', a: 'BMI has limitations &mdash; it does not distinguish between muscle and fat. Athletes may show "overweight" BMI despite low body fat. It is less accurate for children, the elderly, and pregnant women.' },
      { q: 'How can I improve my BMI?', a: 'For overweight: reduce caloric intake by ~500 cal/day and exercise 150 min/week. For underweight: increase intake with nutrient-dense foods and add strength training.' }
    ]
  },
  {
    id: 'taxregime', slug: 'taxregime-calculator', cat: 'Finance',
    title: 'Old vs New Tax Regime Calculator FY 2025-26 | Calc Labz',
    desc: 'Compare Old vs New income tax regime for FY 2025-26. Find out which regime saves you more tax with deductions like 80C, HRA, NPS. Free, instant calculator.',
    whatItDoes: 'The Old vs New Tax Regime Calculator compares your tax liability under both Indian income tax regimes side by side, helping you choose the one that saves you more tax based on your actual deductions.',
    howCalculated: 'The calculator applies old regime tax slabs (with all eligible deductions like 80C, HRA, 80D, NPS) and new regime slabs (with limited deductions but lower rates), then shows tax payable under each and recommends the better option.',
    workedExample: 'Income &#8377;15,00,000 with &#8377;3,50,000 in deductions (80C + HRA + NPS): Old regime tax &asymp; &#8377;1,87,200. New regime tax &asymp; &#8377;1,56,000. New regime saves &#8377;31,200 in this case.',
    useCases: ['Annual tax regime selection', 'Evaluating deduction benefits', 'Salary restructuring decisions', 'Financial planning for FY 2025-26'],
    howTo: {
      name: 'How to Compare Old vs New Tax Regime',
      steps: [
        'Enter your annual gross income',
        'Enter your total deductions under old regime (80C, HRA, NPS, home loan, etc.)',
        'Click Calculate to instantly see tax payable under both regimes and the recommended choice'
      ]
    },
    faqs: [
      { q: 'Which tax regime is better for me?', a: 'New regime is better if your total deductions are below &#8377;2.5&ndash;3 lakh. Old regime is better with deductions above &#8377;3.75 lakh (for 30% tax bracket). Our calculator shows exact breakeven.' },
      { q: 'Can I switch between old and new regime every year?', a: 'Salaried employees can switch every year. Business owners can switch only once from old to new regime and cannot revert.' }
    ]
  },
  {
    id: 'incometax', slug: 'incometax-calculator', cat: 'Finance',
    title: 'Income Tax Calculator FY 2025-26: Slab-wise Tax Breakdown | Calc Labz',
    desc: 'Calculate income tax for FY 2025-26 under old and new tax regime. Includes 80C, 80D, HRA, standard deduction. Free income tax calculator for salaried and business income.',
    whatItDoes: 'The Income Tax Calculator computes your total tax liability for FY 2025-26 under both old and new tax regimes. It factors in all major deductions and shows a slab-wise breakdown of your tax.',
    howCalculated: 'Tax is calculated by applying progressive slab rates to your taxable income (gross income minus eligible deductions). A 4% Health &amp; Education Cess is added to the computed tax. Surcharge applies for income above &#8377;50 lakhs.',
    workedExample: 'For annual income &#8377;12,00,000 under new regime: Up to &#8377;3L = &#8377;0, &#8377;3&ndash;7L = &#8377;20,000 (5%), &#8377;7&ndash;10L = &#8377;30,000 (10%), &#8377;10&ndash;12L = &#8377;30,000 (15%). Total tax = &#8377;80,000 + 4% cess = &#8377;83,200.',
    useCases: ['Annual tax liability estimation', 'Salary restructuring for tax efficiency', '80C investment planning', 'Advance tax calculation'],
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
      { q: 'What is the income tax slab for FY 2025-26?', a: 'New regime slabs: 0&ndash;&#8377;3L (nil), &#8377;3&ndash;7L (5%), &#8377;7&ndash;10L (10%), &#8377;10&ndash;12L (15%), &#8377;12&ndash;15L (20%), above &#8377;15L (30%). 4% health &amp; education cess applies.' },
      { q: 'What deductions can I claim under the old regime?', a: '80C (&#8377;1.5L), 80D (medical insurance &#8377;25K&ndash;75K), HRA, standard deduction (&#8377;50K), home loan interest (&#8377;2L), NPS (&#8377;50K), and more.' }
    ]
  },
  {
    id: 'ppf', slug: 'ppf-calculator', cat: 'Finance',
    title: 'PPF Calculator: Maturity Amount &amp; Tax-Free Returns | Calc Labz',
    desc: 'Calculate PPF maturity amount, total interest earned, and year-wise balance for your Public Provident Fund account. Free PPF calculator with 15-year projection.',
    whatItDoes: 'The PPF (Public Provident Fund) Calculator projects your maturity amount, total interest earned, and year-wise account balance. PPF offers guaranteed, tax-free returns backed by the Government of India.',
    howCalculated: 'PPF uses annual compounding: <strong>Maturity = Yearly deposit &times; [((1+r)<sup>n</sup> &minus; 1) / r]</strong>, where r = annual interest rate (currently 7.1%) and n = number of years (minimum 15).',
    workedExample: 'Annual deposit &#8377;1,50,000 for 15 years at 7.1%: Total deposits = &#8377;22,50,000. Interest earned = &#8377;18,18,209. Maturity amount = &#8377;40,68,209 &mdash; completely tax-free.',
    useCases: ['Long-term tax-free savings planning', 'Section 80C deduction optimization', 'Retirement corpus building', 'Comparing PPF with FD and ELSS returns'],
    howTo: {
      name: 'How to Calculate PPF Maturity',
      steps: [
        'Enter your annual PPF contribution (maximum &#8377;1,50,000)',
        'The current PPF interest rate (7.1%) is pre-filled &mdash; adjust if changed',
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
    id: 'fd', slug: 'fd-calculator', cat: 'Finance',
    title: 'FD Calculator: Fixed Deposit Maturity &amp; Interest | Calc Labz',
    desc: 'Calculate Fixed Deposit maturity amount, total interest, and returns for any compounding frequency. Compare FD rates across banks. Free FD calculator &mdash; no signup.',
    whatItDoes: 'The FD (Fixed Deposit) Calculator computes the maturity amount and total interest earned on your fixed deposit based on principal, interest rate, tenure, and compounding frequency.',
    howCalculated: '<strong>FD Maturity = P &times; (1 + r/n)<sup>(n&times;t)</sup></strong>, where P = principal, r = annual interest rate, n = compounding frequency per year (4 for quarterly, the Indian bank standard), t = tenure in years.',
    workedExample: '&#8377;5,00,000 FD at 7.0% for 5 years (quarterly compounding): Maturity = &#8377;5,00,000 &times; (1 + 0.07/4)^20 = &#8377;7,07,161. Interest earned = &#8377;2,07,161.',
    useCases: ['Comparing FD rates across banks', 'Tax planning for FD interest (TDS)', 'Senior citizen FD rate comparison', 'Emergency fund investment planning'],
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
      { q: 'How is FD interest calculated?', a: 'FD maturity = P &times; (1 + r/n)^(n&times;t), where P = principal, r = annual rate, n = compounding frequency per year, t = tenure in years. Most Indian banks compound quarterly.' },
      { q: 'Is FD interest taxable?', a: 'Yes, FD interest is fully taxable as "Income from Other Sources" at your applicable tax slab. TDS of 10% is deducted if interest exceeds &#8377;40,000/year (&#8377;50,000 for senior citizens).' }
    ]
  },
  {
    id: 'rd', slug: 'rd-calculator', cat: 'Finance',
    title: 'RD Calculator: Recurring Deposit Maturity &amp; Interest | Calc Labz',
    desc: 'Calculate Recurring Deposit maturity amount and total interest earned for monthly deposits. Free RD calculator for all Indian banks. No signup required.',
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
      { q: 'How is RD maturity calculated?', a: 'RD uses compound interest calculated quarterly: M = R &times; [(1+r)^n &ndash; 1] / (1 &ndash; (1+r)^(-1/3)), where R = monthly deposit, r = quarterly rate, n = number of quarters.' },
      { q: 'What is the difference between FD and RD?', a: 'FD requires a lump sum deposit once, while RD requires fixed monthly deposits over the tenure. RD is ideal for building a savings habit with regular income.' }
    ]
  },
  {
    id: 'compoundinterest', slug: 'compoundinterest-calculator', cat: 'Finance',
    title: 'Compound Interest Calculator: CI with Multiple Frequencies | Calc Labz',
    desc: 'Calculate compound interest with daily, monthly, quarterly, or annual compounding. See how money grows over time with the power of compounding. Free, instant calculator.',
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
    id: 'simpleinterest', slug: 'simpleinterest-calculator', cat: 'Finance',
    title: 'Simple Interest Calculator: SI Formula &amp; Total Amount | Calc Labz',
    desc: 'Calculate simple interest, total amount payable, and monthly interest for any loan or investment. Free simple interest calculator &mdash; instant results, no signup.',
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
      { q: 'What is the simple interest formula?', a: 'SI = P &times; R &times; T / 100, where P = principal, R = annual rate percentage, T = time in years. Total Amount = P + SI.' },
      { q: 'When is simple interest used?', a: 'Simple interest is used for short-term loans, car loans (sometimes), personal loans, and some savings accounts. Most bank products use compound interest.' }
    ]
  },
  {
    id: 'percentage', slug: 'percentage-calculator', cat: 'Math',
    title: 'Percentage Calculator: Calculate %, Increase &amp; Decrease | Calc Labz',
    desc: 'Calculate percentages easily: what is X% of Y, percentage increase/decrease, percentage difference, and reverse percentage. Free online percentage calculator.',
    howTo: {
      name: 'How to Calculate Percentage',
      steps: [
        'Enter the base value',
        'Enter the percentage to apply',
        'Click Calculate to see the result and reverse calculations'
      ]
    },
    faqs: [
      { q: 'How do I calculate X% of a number?', a: 'X% of N = (X/100) &times; N. For example, 15% of 500 = (15/100) &times; 500 = 75.' },
      { q: 'How do I calculate percentage increase?', a: 'Percentage increase = ((New &ndash; Old) / Old) &times; 100. If price goes from &#8377;100 to &#8377;120, increase = ((120&ndash;100)/100) &times; 100 = 20%.' }
    ]
  },
  {
    id: 'cagr', slug: 'cagr-calculator', cat: 'Finance',
    title: 'CAGR Calculator: Compound Annual Growth Rate | Calc Labz',
    desc: 'Calculate CAGR (Compound Annual Growth Rate) for investments, revenues, and portfolios. Compare investment performance with annualised returns. Free CAGR calculator.',
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
      { q: 'What is CAGR formula?', a: 'CAGR = (Ending Value / Beginning Value)^(1/n) &ndash; 1, where n = number of years. It represents the constant annual growth rate that would produce the same result.' },
      { q: 'Is a high CAGR always good?', a: 'Higher CAGR generally indicates better performance, but context matters. Compare CAGR against benchmark indices (Nifty 50 ~12-15% historical CAGR) and risk taken.' }
    ]
  },
  {
    id: 'inflation', slug: 'inflation-calculator', cat: 'Finance',
    title: 'Inflation Calculator: Purchasing Power &amp; Future Value | Calc Labz',
    desc: 'Calculate the impact of inflation on purchasing power. Find future value of today\'s money or past value of an amount. Free inflation &amp; purchasing power calculator.',
    howTo: {
      name: 'How to Calculate Inflation Impact',
      steps: [
        'Enter the current amount (e.g. &#8377;10,00,000)',
        'Enter the annual inflation rate (India average ~6%)',
        'Enter the number of years',
        'Click Calculate to see future purchasing power and how much you need to maintain the same value'
      ]
    },
    faqs: [
      { q: 'What is the average inflation rate in India?', a: 'India\'s average CPI inflation has been 5&ndash;7% over the past decade. RBI\'s target is 4% (with a +/-2% band). Use 6% as a conservative planning assumption.' },
      { q: 'How does inflation affect savings?', a: 'If your savings earn less than the inflation rate, your real purchasing power decreases. &#8377;1,00,000 today at 6% inflation is worth only &#8377;55,839 in 10 years.' }
    ]
  },
  {
    id: 'mortgage', slug: 'mortgage-calculator', cat: 'Finance',
    title: 'Mortgage Calculator: Home Loan EMI &amp; Amortization | Calc Labz',
    desc: 'Calculate home loan mortgage EMI, total interest, and amortization schedule. Compare loan offers from different banks. Free mortgage calculator for India.',
    whatItDoes: 'The Mortgage/Home Loan Calculator helps you estimate your monthly EMI, total interest payable over the loan tenure, and provides a full amortization schedule. It also helps compare offers from different banks.',
    howCalculated: 'Home loan EMI uses the standard reducing balance formula: <strong>EMI = P &times; r &times; (1+r)<sup>n</sup> / ((1+r)<sup>n</sup> &minus; 1)</strong>. The amortization schedule shows how each monthly payment splits between principal repayment and interest.',
    workedExample: 'Home loan &#8377;75,00,000 at 8.75% for 25 years (300 months): Monthly EMI = &#8377;62,282. Total interest = &#8377;1,11,84,600. Total amount paid = &#8377;1,86,84,600. Interest exceeds the principal by &#8377;36,84,600.',
    useCases: ['Home buying budget planning', 'Comparing bank home loan offers', 'Prepayment benefit analysis', 'Tax benefit calculation under Section 24b &amp; 80C'],
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
      { q: 'What are the tax benefits on home loans?', a: 'Under the old regime: deduction up to &#8377;2 lakh on interest (Section 24b) and &#8377;1.5 lakh on principal (Section 80C). No deduction under the new tax regime.' }
    ]
  },
  // ── HEALTH ────────────────────────────────────────────────────────────────
  {
    id: 'bmr', slug: 'bmr-calculator', cat: 'Health',
    title: 'BMR Calculator: Basal Metabolic Rate &amp; Daily Calories | Calc Labz',
    desc: 'Calculate your Basal Metabolic Rate (BMR) using Mifflin-St Jeor formula. Find the minimum calories your body needs at rest. Free BMR calculator with TDEE breakdown.',
    whatItDoes: 'The BMR (Basal Metabolic Rate) Calculator estimates the minimum number of calories your body needs at complete rest to maintain vital functions like breathing, circulation, and cell repair. BMR accounts for 60&ndash;75% of total daily energy expenditure.',
    howCalculated: 'Using the Mifflin-St Jeor formula (most accurate for adults): <strong>Men: BMR = (10 &times; weight kg) + (6.25 &times; height cm) &minus; (5 &times; age) + 5</strong>. <strong>Women: BMR = (10 &times; weight kg) + (6.25 &times; height cm) &minus; (5 &times; age) &minus; 161</strong>.',
    workedExample: 'For a 30-year-old male, 75 kg, 175 cm: BMR = (10 &times; 75) + (6.25 &times; 175) &minus; (5 &times; 30) + 5 = 750 + 1093.75 &minus; 150 + 5 = 1,699 calories/day at rest.',
    useCases: ['Setting calorie targets for weight loss', 'Understanding your base metabolism', 'Nutrition and meal planning', 'Fitness program design'],
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
      { q: 'How is BMR calculated?', a: 'Mifflin-St Jeor formula: For men: BMR = (10 &times; weight kg) + (6.25 &times; height cm) &ndash; (5 &times; age) + 5. For women: BMR = (10 &times; weight kg) + (6.25 &times; height cm) &ndash; (5 &times; age) &ndash; 161.' }
    ]
  },
  {
    id: 'tdee', slug: 'tdee-calculator', cat: 'Health',
    title: 'TDEE Calculator: Total Daily Energy Expenditure | Calc Labz',
    desc: 'Calculate your TDEE (Total Daily Energy Expenditure) based on activity level. Find exact daily calories needed to maintain, lose, or gain weight. Free TDEE calculator.',
    whatItDoes: 'The TDEE (Total Daily Energy Expenditure) Calculator estimates the total number of calories you burn daily by combining your basal metabolism (BMR) with your physical activity level. Eating at TDEE maintains weight; below it causes weight loss.',
    howCalculated: '<strong>TDEE = BMR &times; Activity Multiplier</strong>. Multipliers: Sedentary (little/no exercise) = 1.2, Lightly active (1&ndash;3 days/week) = 1.375, Moderately active (3&ndash;5 days/week) = 1.55, Very active (6&ndash;7 days/week) = 1.725.',
    workedExample: 'BMR of 1,700 calories for a moderately active person: TDEE = 1,700 &times; 1.55 = 2,635 calories/day. To lose weight: eat ~2,135 cal/day (500-calorie deficit for ~0.5 kg/week loss).',
    useCases: ['Weight loss calorie targets', 'Weight gain and bulking meal plans', 'Athletic performance nutrition', 'Understanding daily energy needs'],
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
    id: 'age', slug: 'age-calculator', cat: 'Health',
    title: 'Age Calculator: Exact Age in Years, Months &amp; Days | Calc Labz',
    desc: 'Calculate your exact age in years, months, days, hours, and minutes from your date of birth. Find days until your next birthday. Free age calculator &mdash; instant results.',
    whatItDoes: 'The Age Calculator determines your exact age in years, months, days, hours, and minutes from your date of birth. It also shows your next birthday countdown and the day of the week you were born.',
    howCalculated: 'Age is calculated by computing the calendar difference between today\'s date and your birth date. It correctly handles varying month lengths (28&ndash;31 days) and leap years (February 29).',
    workedExample: 'Born on 15 March 1995, calculated on 9 April 2026: Age = 31 years, 0 months, 25 days. Total days lived: approximately 11,348 days.',
    useCases: ['Exact age verification for documents', 'Birthday countdown', 'Age eligibility checking (voting, insurance)', 'Days lived milestone tracking'],
    howTo: {
      name: 'How to Calculate Exact Age',
      steps: [
        'Enter your date of birth (DD/MM/YYYY)',
        'Click Calculate to see your exact age in years, months, days, hours, and minutes',
        'Also see the countdown to your next birthday and your birth weekday'
      ]
    },
    faqs: [
      { q: 'What is my exact age today?', a: 'Enter your date of birth in the calculator above to get your exact age in years, months, days, hours, and even minutes &mdash; calculated as of right now.' },
      { q: 'How do I calculate age in days?', a: 'Age in days = (Today\'s date &ndash; Birth date) in days. Our calculator shows this automatically along with age in years, months, weeks, hours, and minutes.' }
    ]
  },
  // ── EDUCATION ─────────────────────────────────────────────────────────────
  {
    id: 'cgpa', slug: 'cgpa-calculator', cat: 'Education',
    title: 'CGPA Calculator: CGPA to Percentage Converter | Calc Labz',
    desc: 'Calculate CGPA from marks, convert CGPA to percentage for any university scale (10-point, 4-point). Free CGPA calculator and GPA converter &mdash; updated 2026.',
    whatItDoes: 'The CGPA (Cumulative Grade Point Average) Calculator helps students calculate their CGPA from individual subject grades and convert it to percentage using their university\'s grading scale (10-point or 4-point).',
    howCalculated: '<strong>CGPA = &Sigma;(Grade Points &times; Credit Hours) / &Sigma;(Credit Hours)</strong>. Percentage conversion varies by university. Most Indian universities: Percentage = CGPA &times; 9.5. Some use CGPA &times; 10.',
    workedExample: 'With grades: Subject A (8.0 GP, 4 credits), Subject B (7.0 GP, 3 credits), Subject C (9.0 GP, 3 credits): CGPA = (32 + 21 + 27) / 10 = 8.0. Percentage = 8.0 &times; 9.5 = 76%.',
    useCases: ['Academic performance tracking', 'University admission eligibility', 'Job application percentage requirements', 'Transcript percentage conversion'],
    howTo: {
      name: 'How to Calculate CGPA',
      steps: [
        'Enter grades or marks for each subject',
        'Enter credit hours for each subject (if applicable)',
        'Click Calculate to see your CGPA, percentage equivalent, and letter grade'
      ]
    },
    faqs: [
      { q: 'How do I convert CGPA to percentage?', a: 'For most Indian universities: Percentage = CGPA &times; 9.5. For a CGPA of 8.0: 8.0 &times; 9.5 = 76%. Different universities may use different multipliers &mdash; check your institution\'s formula.' },
      { q: 'What is the difference between CGPA and GPA?', a: 'CGPA (Cumulative Grade Point Average) is the average over all semesters. GPA (Grade Point Average) is for a single semester. CGPA on a 10-point scale, GPA usually on a 4-point scale.' }
    ]
  },
  // ── FINANCE (Salary) ──────────────────────────────────────────────────────
  {
    id: 'inhandsalary', slug: 'inhandsalary-calculator', cat: 'Finance',
    title: 'In-Hand Salary Calculator: Take Home Pay from CTC | Calc Labz',
    desc: 'Calculate your monthly in-hand (take-home) salary from CTC. Includes PF, professional tax, income tax TDS, and HRA deductions. Free salary calculator for India 2026.',
    howTo: {
      name: 'How to Calculate In-Hand Salary from CTC',
      steps: [
        'Enter your annual CTC (Cost to Company)',
        'Enter your basic salary percentage (typically 40&ndash;50% of CTC)',
        'Enter HRA percentage and other allowances',
        'Click Calculate to see monthly in-hand salary, all deductions (PF, PT, TDS), and CTC breakup'
      ]
    },
    faqs: [
      { q: 'What is the difference between CTC and in-hand salary?', a: 'CTC (Cost to Company) is total employer cost including employer PF, gratuity, and benefits. In-hand salary (take-home) is CTC minus employee PF (12%), income tax TDS, and professional tax.' },
      { q: 'How much of CTC do I actually receive in hand?', a: 'Typically 65&ndash;80% of CTC is received as in-hand salary. The rest goes to PF contributions, income tax TDS, professional tax, and employer-paid benefits that are part of CTC.' }
    ]
  }
];

// ── CATEGORY META ───────────────────────────────────────────────────────────
var CATEGORIES = [
  {
    id: 'finance', slug: 'finance-calculators',
    name: 'Finance Calculators',
    title: 'Finance Calculators: EMI, SIP, Tax, FD &amp; 50+ Free Tools | Calc Labz',
    desc: 'Free online finance calculators for EMI, SIP, GST, income tax, PPF, FD, mortgage, and 50+ more. Instant results for loan planning, investment returns, and tax savings. No signup required.'
  },
  {
    id: 'health', slug: 'health-calculators',
    name: 'Health &amp; Fitness Calculators',
    title: 'Health Calculators: BMI, BMR, TDEE, Calories &amp; More | Calc Labz',
    desc: 'Free online health calculators for BMI, BMR, TDEE, calorie needs, body fat, ideal weight, and more. Track your fitness goals with instant, accurate results.'
  },
  {
    id: 'math', slug: 'math-calculators',
    name: 'Math Calculators',
    title: 'Math Calculators: Percentage, Statistics, Algebra &amp; More | Calc Labz',
    desc: 'Free online math calculators for percentage, average, ratio, quadratic equations, statistics, and more. Solve math problems instantly with step-by-step results.'
  },
  {
    id: 'everyday', slug: 'everyday-calculators',
    name: 'Everyday &amp; Lifestyle Calculators',
    title: 'Everyday Calculators: Tip, Discount, Fuel &amp; Budget Tools | Calc Labz',
    desc: 'Free everyday calculators for tip, discount, fuel cost, mileage, electric bill, and more. Handy tools for daily life decisions &mdash; instant results, no signup.'
  },
  {
    id: 'education', slug: 'education-calculators',
    name: 'Education Calculators',
    title: 'Education Calculators: CGPA, GPA, Grade &amp; Study Tools | Calc Labz',
    desc: 'Free education calculators for CGPA, GPA conversion, grade calculation, study hours, and more. Essential tools for students &mdash; instant results.'
  },
  {
    id: 'engineering', slug: 'engineering-calculators',
    name: 'Engineering &amp; Science Calculators',
    title: 'Engineering Calculators: Ohm\'s Law, Resistor, Power &amp; More | Calc Labz',
    desc: 'Free engineering calculators for Ohm\'s law, resistor values, power, beam load, pipe flow, and more. Essential tools for engineers &mdash; instant, accurate results.'
  },
  {
    id: 'construction', slug: 'construction-calculators',
    name: 'Construction Calculators',
    title: 'Construction Calculators: Concrete, Bricks, Paint &amp; More | Calc Labz',
    desc: 'Free construction calculators for concrete, bricks, paint, flooring, steel, and roofing estimation. Plan your building project with accurate material calculations.'
  },
  {
    id: 'unit', slug: 'unit-calculators',
    name: 'Unit Conversion Calculators',
    title: 'Unit Conversion Calculators: Length, Weight, Temperature | Calc Labz',
    desc: 'Free unit conversion calculators for length, weight, temperature, area, speed, volume, and more. Convert between metric, imperial, and other measurement systems instantly.'
  },
  {
    id: 'datetime', slug: 'datetime-calculators',
    name: 'Date &amp; Time Calculators',
    title: 'Date &amp; Time Calculators: Date Difference, Working Days | Calc Labz',
    desc: 'Free date and time calculators for date difference, working days, time conversion, countdown timers, and timezone conversion. Plan schedules with accuracy.'
  },
  {
    id: 'science', slug: 'science-calculators',
    name: 'Science Calculators',
    title: 'Science Calculators: Physics, Chemistry &amp; Lab Tools | Calc Labz',
    desc: 'Free science calculators for Newton\'s laws, density, wavelength, half-life, pH, and thermodynamics. Essential lab and homework tools for students and researchers.'
  }
];

// ── HELPERS ──────────────────────────────────────────────────────────────────

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildHowToSchema(calc) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: calc.howTo.name,
    description: calc.desc.replace(/&amp;/g, '&').replace(/&mdash;/g, '—').replace(/&ndash;/g, '–').replace(/&#8377;/g, '₹').replace(/<[^>]+>/g, ''),
    step: calc.howTo.steps.map(function(text) {
      return { '@type': 'HowToStep', text: text.replace(/&#8377;/g, '₹').replace(/&mdash;/g, '—').replace(/&ndash;/g, '–').replace(/<[^>]+>/g, '') };
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
        name: f.q.replace(/&#8377;/g, '₹').replace(/&amp;/g, '&').replace(/&ndash;/g, '–'),
        acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/&#8377;/g, '₹').replace(/&amp;/g, '&').replace(/&ndash;/g, '–').replace(/&mdash;/g, '—').replace(/<[^>]+>/g, '') }
      };
    })
  };
}

function buildBreadcrumbSchema(calc) {
  var pageUrl = BASE_URL + '/' + calc.slug;
  var catSlug = calc.cat.toLowerCase() + '-calculators';
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: calc.cat + ' Calculators', item: BASE_URL + '/' + catSlug },
      { '@type': 'ListItem', position: 3, name: calc.title.split(':')[0].split(' —')[0], item: pageUrl }
    ]
  };
}

function buildSoftwareSchema(calc) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: calc.title.split(':')[0].split(' —')[0],
    description: calc.desc.replace(/&amp;/g, '&').replace(/&mdash;/g, '—').replace(/&#8377;/g, '₹').replace(/<[^>]+>/g, ''),
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

// ── BODY HTML BUILDERS ──────────────────────────────────────────────────────

function getRelatedCalcs(calc) {
  return CALCULATORS.filter(function(c) {
    return c.cat === calc.cat && c.id !== calc.id;
  }).slice(0, 6);
}

function buildTrustSection(calc) {
  var html = '<div class="seo-trust">\n';
  if (calc.cat === 'Finance') {
    html += '  <p><strong>Disclaimer:</strong> This calculator provides estimates for informational purposes only. Actual amounts may vary based on bank policies, processing fees, and other factors. Consult a qualified financial advisor before making financial decisions.</p>\n';
    if (calc.howCalculated) {
      html += '  <p><strong>Methodology:</strong> Formula based on standard financial calculation methods widely used in the banking industry.</p>\n';
    }
  } else if (calc.cat === 'Health') {
    html += '  <p><strong>Medical disclaimer:</strong> This calculator provides general estimates and is not a substitute for professional medical advice, diagnosis, or treatment. Results may vary based on individual factors. Consult a healthcare professional for personalized guidance.</p>\n';
    if (calc.howCalculated) {
      html += '  <p><strong>Methodology:</strong> Based on clinically validated formulas used in nutrition and medical research.</p>\n';
    }
  } else {
    html += '  <p><strong>Note:</strong> This calculator provides estimates for informational purposes only. For professional advice, consult a qualified expert in the relevant field.</p>\n';
  }
  html += '  <p><strong>Last updated:</strong> April 2026</p>\n';
  html += '</div>\n';
  return html;
}

function buildBodyHTML(calc) {
  var shortName = calc.title.split(':')[0].split(' —')[0];
  var catSlug = calc.cat.toLowerCase() + '-calculators';
  var catName = calc.cat + ' Calculators';

  var html = '\n    <!-- SEO Pre-rendered Content — visible to crawlers; JS app hydrates over this -->\n';
  html += '    <div id="seo-content">\n';

  // Breadcrumb
  html += '      <nav class="seo-breadcrumb" aria-label="Breadcrumb">\n';
  html += '        <a href="/">Home</a> &rsaquo; ';
  html += '<a href="/' + catSlug + '">' + catName + '</a> &rsaquo; ';
  html += '<span>' + shortName + '</span>\n';
  html += '      </nav>\n\n';

  // H1
  html += '      <h1>' + shortName + '</h1>\n';

  // Intro
  html += '      <p class="seo-intro">' + calc.desc + '</p>\n\n';

  // What it does (enriched calcs only)
  if (calc.whatItDoes) {
    html += '      <section class="seo-section">\n';
    html += '        <h2>What is ' + shortName + '?</h2>\n';
    html += '        <p>' + calc.whatItDoes + '</p>\n';
    html += '      </section>\n\n';
  }

  // How to use (from howTo steps)
  if (calc.howTo) {
    html += '      <section class="seo-section">\n';
    html += '        <h2>' + calc.howTo.name + '</h2>\n';
    html += '        <ol>\n';
    calc.howTo.steps.forEach(function(step) {
      html += '          <li>' + step + '</li>\n';
    });
    html += '        </ol>\n';
    html += '      </section>\n\n';
  }

  // Formula / How it's calculated (enriched calcs only)
  if (calc.howCalculated) {
    html += '      <section class="seo-section">\n';
    html += '        <h2>How ' + shortName + ' is Calculated</h2>\n';
    html += '        <p>' + calc.howCalculated + '</p>\n';
    if (calc.workedExample) {
      html += '        <h3>Worked Example</h3>\n';
      html += '        <p>' + calc.workedExample + '</p>\n';
    }
    html += '      </section>\n\n';
  }

  // Use cases (enriched calcs only)
  if (calc.useCases && calc.useCases.length) {
    html += '      <section class="seo-section">\n';
    html += '        <h2>Common Use Cases</h2>\n';
    html += '        <ul>\n';
    calc.useCases.forEach(function(uc) {
      html += '          <li>' + uc + '</li>\n';
    });
    html += '        </ul>\n';
    html += '      </section>\n\n';
  }

  // FAQ section
  if (calc.faqs && calc.faqs.length) {
    html += '      <section class="seo-faq">\n';
    html += '        <h2>Frequently Asked Questions</h2>\n';
    calc.faqs.forEach(function(faq) {
      html += '        <details>\n';
      html += '          <summary>' + faq.q + '</summary>\n';
      html += '          <p>' + faq.a + '</p>\n';
      html += '        </details>\n';
    });
    html += '      </section>\n\n';
  }

  // Related calculators
  var related = getRelatedCalcs(calc);
  if (related.length) {
    html += '      <section class="seo-section">\n';
    html += '        <h2>Related Calculators</h2>\n';
    html += '        <div class="seo-related-grid">\n';
    related.forEach(function(r) {
      var rName = r.title.split(':')[0].split(' —')[0].split('|')[0].trim();
      html += '          <a href="/' + r.slug + '">' + rName + '</a>\n';
    });
    html += '        </div>\n';
    html += '      </section>\n\n';
  }

  // Trust section
  html += '      ' + buildTrustSection(calc).replace(/\n/g, '\n      ').trim() + '\n';

  html += '    </div>\n';

  return html;
}

function buildCategoryBodyHTML(cat, calcs) {
  var html = '\n    <!-- SEO Pre-rendered Content — visible to crawlers; JS app hydrates over this -->\n';
  html += '    <div id="seo-content">\n';

  // Breadcrumb
  html += '      <nav class="seo-breadcrumb" aria-label="Breadcrumb">\n';
  html += '        <a href="/">Home</a> &rsaquo; <span>' + cat.name + '</span>\n';
  html += '      </nav>\n\n';

  // H1
  html += '      <h1>' + cat.name + '</h1>\n';

  // Intro
  html += '      <p class="seo-intro">' + cat.desc + '</p>\n\n';

  // Calculator grid
  html += '      <div class="seo-calc-grid">\n';
  calcs.forEach(function(c) {
    var name = c.title ? c.title.split(':')[0].split(' —')[0].split('|')[0].trim() : formatSlugToName(c.slug);
    var cDesc = c.desc || 'Free online ' + name.toLowerCase() + '. Instant results, no signup.';
    if (cDesc.length > 120) cDesc = cDesc.substring(0, 117) + '...';
    html += '        <a href="/' + c.slug + '" class="seo-calc-card">\n';
    html += '          <strong>' + name + '</strong>\n';
    html += '          <span>' + cDesc + '</span>\n';
    html += '        </a>\n';
  });
  html += '      </div>\n';

  html += '    </div>\n';

  return html;
}

function formatSlugToName(slug) {
  return slug.replace(/-calculator$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, function(c) { return c.toUpperCase(); }) + ' Calculator';
}

// ── GENERATOR: Calculator Pages ─────────────────────────────────────────────

function generate() {
  var template = fs.readFileSync(TEMPLATE, 'utf8');

  CALCULATORS.forEach(function(calc) {
    var pageUrl = BASE_URL + '/' + calc.slug;
    var html    = template;

    // 1. Replace <title>
    html = html.replace(
      /<title>.*?<\/title>/,
      '<title>' + calc.title + '</title>'
    );

    // 2. Replace meta description
    html = html.replace(
      /<meta name="description" content="[^"]*">/,
      '<meta name="description" content="' + calc.desc.replace(/"/g, '&quot;') + '">'
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
      '<meta property="og:description" content="' + calc.desc.replace(/"/g, '&quot;') + '">'
    );

    // 7. Replace twitter:title
    html = html.replace(
      /<meta name="twitter:title" content="[^"]*">/,
      '<meta name="twitter:title" content="' + calc.title + '">'
    );

    // 8. Replace twitter:description
    html = html.replace(
      /<meta name="twitter:description" content="[^"]*">/,
      '<meta name="twitter:description" content="' + calc.desc.replace(/"/g, '&quot;') + '">'
    );

    // 9. Remove incorrect hreflang (inner pages should not have hreflang pointing to homepage)
    html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*">\r?\n/g, '');

    // 10. Inject per-calc JSON-LD schemas just before </head>
    var schemas = [
      jsonLdTag('jsonld-howto',       buildHowToSchema(calc)),
      jsonLdTag('jsonld-faq',         buildFAQSchema(calc)),
      jsonLdTag('jsonld-breadcrumb',  buildBreadcrumbSchema(calc)),
      jsonLdTag('jsonld-calc',        buildSoftwareSchema(calc))
    ].join('\n');

    // Remove existing jsonld-main and jsonld-website blocks in template
    html = html.replace(
      /<!-- ═══ JSON-LD: SoftwareApplication[\s\S]*?<\/script>\s*\n/,
      ''
    );
    html = html.replace(
      /<!-- ═══ JSON-LD: WebSite[\s\S]*?<\/script>\s*\n/,
      ''
    );
    html = html.replace('</head>', schemas + '\n</head>');

    // 11. og:type
    html = html.replace(
      /<meta property="og:type" content="[^"]*">/,
      '<meta property="og:type" content="website">'
    );

    // 12. Inject SEO CSS before </style>
    html = html.replace('    </style>', SEO_CSS + '    </style>');

    // 13. Replace body placeholder with real SEO content
    var bodyHtml = buildBodyHTML(calc);
    html = html.replace(
      /<!-- Content injected by JS -->[\s\S]*?<p>Loading Calc Labz\.\.\.<\/p>\s*<\/div>/,
      bodyHtml
    );

    // Write output file
    var outFile = path.join(ROOT, calc.slug + '.html');
    fs.writeFileSync(outFile, html, 'utf8');
    console.log('  ✓  ' + calc.slug + '.html  (with body content)');
  });

  console.log('  Generated ' + CALCULATORS.length + ' calculator pages.\n');
}

// ── GENERATOR: Category Pages ───────────────────────────────────────────────

function generateCategories() {
  var template = fs.readFileSync(TEMPLATE, 'utf8');
  var registry;
  try {
    registry = require('./calculator-registry.json');
  } catch (e) {
    console.warn('  ⚠  calculator-registry.json not found, skipping category pages.');
    return;
  }

  CATEGORIES.forEach(function(cat) {
    // Find all calculators in this category from registry
    var calcs = registry.filter(function(c) { return c.cat === cat.id; });
    if (!calcs.length) return;

    // Sort by priority descending
    calcs.sort(function(a, b) { return parseFloat(b.priority || '0.5') - parseFloat(a.priority || '0.5'); });

    var pageUrl = BASE_URL + '/' + cat.slug;
    var html = template;

    // Replace <title>
    html = html.replace(/<title>.*?<\/title>/, '<title>' + cat.title + '</title>');

    // Replace meta description
    html = html.replace(
      /<meta name="description" content="[^"]*">/,
      '<meta name="description" content="' + cat.desc.replace(/"/g, '&quot;') + '">'
    );

    // Replace canonical
    html = html.replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="' + pageUrl + '">');

    // Replace og tags
    html = html.replace(/<meta property="og:url" content="[^"]*">/, '<meta property="og:url" content="' + pageUrl + '">');
    html = html.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="' + cat.title + '">');
    html = html.replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="' + cat.desc.replace(/"/g, '&quot;') + '">');
    html = html.replace(/<meta name="twitter:title" content="[^"]*">/, '<meta name="twitter:title" content="' + cat.title + '">');
    html = html.replace(/<meta name="twitter:description" content="[^"]*">/, '<meta name="twitter:description" content="' + cat.desc.replace(/"/g, '&quot;') + '">');

    // Remove incorrect hreflang
    html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*">\r?\n/g, '');

    // Remove homepage JSON-LD, inject category breadcrumb
    html = html.replace(/<!-- ═══ JSON-LD: SoftwareApplication[\s\S]*?<\/script>\s*\n/, '');
    html = html.replace(/<!-- ═══ JSON-LD: WebSite[\s\S]*?<\/script>\s*\n/, '');

    var catBreadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: cat.name.replace(/&amp;/g, '&'), item: pageUrl }
      ]
    };
    html = html.replace('</head>', jsonLdTag('jsonld-breadcrumb', catBreadcrumb) + '\n</head>');

    // Inject SEO CSS
    html = html.replace('    </style>', SEO_CSS + '    </style>');

    // Replace body content
    var bodyHtml = buildCategoryBodyHTML(cat, calcs);
    html = html.replace(
      /<!-- Content injected by JS -->[\s\S]*?<p>Loading Calc Labz\.\.\.<\/p>\s*<\/div>/,
      bodyHtml
    );

    // Write output file
    var outFile = path.join(ROOT, cat.slug + '.html');
    fs.writeFileSync(outFile, html, 'utf8');
    console.log('  ✓  ' + cat.slug + '.html  (' + calcs.length + ' calculators)');
  });

  console.log('  Generated ' + CATEGORIES.length + ' category pages.\n');
}

// ── GENERATOR: All Registry Calculators (basic pages) ───────────────────────

var CAT_DISPLAY = {
  finance: 'Finance', health: 'Health', math: 'Math',
  everyday: 'Everyday', unit: 'Unit Conversion', datetime: 'Date &amp; Time',
  engineering: 'Engineering', construction: 'Construction',
  education: 'Education', science: 'Science'
};

function generateAllRegistryCalcs() {
  var template = fs.readFileSync(TEMPLATE, 'utf8');
  var registry;
  try {
    registry = require('./calculator-registry.json');
  } catch (e) {
    console.warn('  ⚠  calculator-registry.json not found, skipping.');
    return 0;
  }

  // Build a set of already-generated slugs (from the rich CALCULATORS array)
  var alreadyGenerated = {};
  CALCULATORS.forEach(function(c) { alreadyGenerated[c.slug] = true; });

  var count = 0;
  registry.forEach(function(entry) {
    if (alreadyGenerated[entry.slug]) return; // Skip — already has rich page

    var catDisplay = CAT_DISPLAY[entry.cat] || 'Tools';
    var catSlug = entry.cat + '-calculators';
    var shortName = formatSlugToName(entry.slug);
    var pageUrl = BASE_URL + '/' + entry.slug;
    var pageTitle = shortName + ' — Free Online Calculator | Calc Labz';
    var pageDesc = 'Free online ' + shortName.toLowerCase() + '. Calculate instantly with accurate results. No signup required — Calc Labz.';

    var html = template;

    // Head metadata
    html = html.replace(/<title>.*?<\/title>/, '<title>' + pageTitle + '</title>');
    html = html.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="' + pageDesc + '">');
    html = html.replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="' + pageUrl + '">');
    html = html.replace(/<meta property="og:url" content="[^"]*">/, '<meta property="og:url" content="' + pageUrl + '">');
    html = html.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="' + pageTitle + '">');
    html = html.replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="' + pageDesc + '">');
    html = html.replace(/<meta name="twitter:title" content="[^"]*">/, '<meta name="twitter:title" content="' + pageTitle + '">');
    html = html.replace(/<meta name="twitter:description" content="[^"]*">/, '<meta name="twitter:description" content="' + pageDesc + '">');

    // Remove hreflang
    html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*">\r?\n/g, '');

    // Remove homepage JSON-LD, inject breadcrumb
    html = html.replace(/<!-- ═══ JSON-LD: SoftwareApplication[\s\S]*?<\/script>\s*\n/, '');
    html = html.replace(/<!-- ═══ JSON-LD: WebSite[\s\S]*?<\/script>\s*\n/, '');

    var bc = {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: catDisplay + ' Calculators', item: BASE_URL + '/' + catSlug },
        { '@type': 'ListItem', position: 3, name: shortName, item: pageUrl }
      ]
    };
    html = html.replace('</head>', jsonLdTag('jsonld-breadcrumb', bc) + '\n</head>');

    // Inject SEO CSS
    html = html.replace('    </style>', SEO_CSS + '    </style>');

    // Build basic body content
    var body = '\n    <!-- SEO Pre-rendered Content -->\n';
    body += '    <div id="seo-content">\n';
    body += '      <nav class="seo-breadcrumb" aria-label="Breadcrumb">\n';
    body += '        <a href="/">Home</a> &rsaquo; ';
    body += '<a href="/' + catSlug + '">' + catDisplay + ' Calculators</a> &rsaquo; ';
    body += '<span>' + shortName + '</span>\n';
    body += '      </nav>\n\n';
    body += '      <h1>' + shortName + '</h1>\n';
    body += '      <p class="seo-intro">' + pageDesc + '</p>\n\n';

    // Trust section
    if (entry.cat === 'finance') {
      body += '      <div class="seo-trust">\n';
      body += '        <p><strong>Disclaimer:</strong> This calculator provides estimates for informational purposes only. Consult a qualified financial advisor before making financial decisions.</p>\n';
      body += '        <p><strong>Last updated:</strong> April 2026</p>\n';
      body += '      </div>\n';
    } else if (entry.cat === 'health') {
      body += '      <div class="seo-trust">\n';
      body += '        <p><strong>Medical disclaimer:</strong> This calculator provides general estimates and is not a substitute for professional medical advice. Consult a healthcare professional for personalized guidance.</p>\n';
      body += '        <p><strong>Last updated:</strong> April 2026</p>\n';
      body += '      </div>\n';
    } else {
      body += '      <div class="seo-trust">\n';
      body += '        <p><strong>Note:</strong> This calculator provides estimates for informational purposes only.</p>\n';
      body += '        <p><strong>Last updated:</strong> April 2026</p>\n';
      body += '      </div>\n';
    }

    body += '    </div>\n';

    // Replace body placeholder
    html = html.replace(
      /<!-- Content injected by JS -->[\s\S]*?<p>Loading Calc Labz\.\.\.<\/p>\s*<\/div>/,
      body
    );

    var outFile = path.join(ROOT, entry.slug + '.html');
    fs.writeFileSync(outFile, html, 'utf8');
    count++;
  });

  console.log('  ✓  Generated ' + count + ' additional calculator pages (basic).\n');
  return count;
}

// ── GENERATOR: Blog Pages ───────────────────────────────────────────────────

function generateBlogPages() {
  var template = fs.readFileSync(TEMPLATE, 'utf8');
  var vm = require('vm');
  var blogSrc;
  try {
    blogSrc = fs.readFileSync(path.join(ROOT, 'assets', 'js', 'blog-posts.js'), 'utf8');
  } catch (e) {
    console.warn('  ⚠  blog-posts.js not found, skipping blog generation.');
    return;
  }

  var sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(blogSrc, sandbox);

  var BLOG_POSTS = sandbox.BLOG_POSTS || [];
  var BLOG_CONTENT = sandbox.BLOG_CONTENT || {};

  if (!BLOG_POSTS.length) {
    console.warn('  ⚠  No blog posts found.');
    return;
  }

  // Create blog directory if needed
  var blogDir = path.join(ROOT, 'blog');
  if (!fs.existsSync(blogDir)) fs.mkdirSync(blogDir);

  BLOG_POSTS.forEach(function(post) {
    var content = BLOG_CONTENT[post.id];
    if (!content) return; // No article body for this post

    var pageUrl = BASE_URL + '/blog/' + post.slug;
    var pageTitle = post.title + ' | Calc Labz';
    var pageDesc = post.desc;
    var html = template;

    // Head metadata
    html = html.replace(/<title>.*?<\/title>/, '<title>' + pageTitle + '</title>');
    html = html.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="' + pageDesc.replace(/"/g, '&quot;') + '">');
    html = html.replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="' + pageUrl + '">');
    html = html.replace(/<meta property="og:url" content="[^"]*">/, '<meta property="og:url" content="' + pageUrl + '">');
    html = html.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="' + pageTitle + '">');
    html = html.replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="' + pageDesc.replace(/"/g, '&quot;') + '">');
    html = html.replace(/<meta name="twitter:title" content="[^"]*">/, '<meta name="twitter:title" content="' + pageTitle + '">');
    html = html.replace(/<meta name="twitter:description" content="[^"]*">/, '<meta name="twitter:description" content="' + pageDesc.replace(/"/g, '&quot;') + '">');
    html = html.replace(/<meta property="og:type" content="[^"]*">/, '<meta property="og:type" content="article">');

    // Remove hreflang
    html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*">\r?\n/g, '');

    // Remove homepage JSON-LD, inject article + breadcrumb schema
    html = html.replace(/<!-- ═══ JSON-LD: SoftwareApplication[\s\S]*?<\/script>\s*\n/, '');
    html = html.replace(/<!-- ═══ JSON-LD: WebSite[\s\S]*?<\/script>\s*\n/, '');

    var articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.desc,
      author: { '@type': 'Organization', name: 'Calc Labz Team' },
      publisher: { '@type': 'Organization', name: 'Calc Labz', url: BASE_URL },
      datePublished: post.date ? '2026-' + monthToNum(post.date) + '-01' : TODAY,
      dateModified: TODAY,
      mainEntityOfPage: pageUrl
    };

    var blogBreadcrumb = {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: 'Guides & Blog', item: BASE_URL + '/blog' },
        { '@type': 'ListItem', position: 3, name: post.title, item: pageUrl }
      ]
    };

    html = html.replace('</head>',
      jsonLdTag('jsonld-article', articleSchema) + '\n' +
      jsonLdTag('jsonld-breadcrumb', blogBreadcrumb) + '\n</head>'
    );

    // Inject SEO CSS
    html = html.replace('    </style>', SEO_CSS + '    </style>');

    // Build blog article body
    var body = '\n    <!-- SEO Pre-rendered Blog Article -->\n';
    body += '    <div id="seo-content">\n';
    body += '      <nav class="seo-breadcrumb" aria-label="Breadcrumb">\n';
    body += '        <a href="/">Home</a> &rsaquo; ';
    body += '<a href="/blog">Guides &amp; Blog</a> &rsaquo; ';
    body += '<span>' + post.title + '</span>\n';
    body += '      </nav>\n\n';
    body += '      <article class="seo-article">\n';
    body += '        <h1>' + post.title + '</h1>\n';
    body += '        <div class="seo-article-meta">\n';
    body += '          <span>' + (content.meta.date || post.date) + '</span>';
    body += ' · <span>' + (content.meta.readTime || post.readTime) + ' read</span>';
    body += ' · <span>By ' + (content.meta.author || 'Calc Labz Team') + '</span>\n';
    body += '        </div>\n\n';
    body += '        ' + content.body + '\n\n';

    // CTA
    if (content.cta) {
      body += '        <div class="seo-article-cta">\n';
      body += '          <a href="/' + content.cta.calc + '-calculator">' + content.cta.text + ' &rarr;</a>\n';
      body += '        </div>\n';
    }

    body += '      </article>\n\n';

    // Trust section
    body += '      <div class="seo-trust">\n';
    body += '        <p><strong>Note:</strong> This article is for informational purposes only. For professional advice, consult a qualified expert.</p>\n';
    body += '        <p><strong>Last updated:</strong> ' + (content.meta.date || 'April 2026') + '</p>\n';
    body += '      </div>\n';

    body += '    </div>\n';

    // Replace body placeholder
    html = html.replace(
      /<!-- Content injected by JS -->[\s\S]*?<p>Loading Calc Labz\.\.\.<\/p>\s*<\/div>/,
      body
    );

    var outFile = path.join(blogDir, post.slug + '.html');
    fs.writeFileSync(outFile, html, 'utf8');
    console.log('  ✓  blog/' + post.slug + '.html');
  });

  console.log('  Generated ' + Object.keys(BLOG_CONTENT).length + ' blog pages.\n');
}

function monthToNum(dateStr) {
  var months = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
                 Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
  var parts = dateStr.split(' ');
  return months[parts[0]] || '01';
}

// ── EXPORTS / MAIN ──────────────────────────────────────────────────────────
module.exports = {
  generate: generate,
  generateCategories: generateCategories,
  generateAllRegistryCalcs: generateAllRegistryCalcs,
  generateBlogPages: generateBlogPages,
  CALCULATORS: CALCULATORS,
  CATEGORIES: CATEGORIES
};

console.log('\n📄 Pre-rendering top calculator pages (rich content)...\n');
generate();

console.log('📄 Pre-rendering remaining calculator pages (basic)...\n');
generateAllRegistryCalcs();

console.log('📂 Pre-rendering category pages...\n');
generateCategories();

console.log('📝 Pre-rendering blog pages...\n');
generateBlogPages();

console.log('✅ Pre-render complete.\n');
