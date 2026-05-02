#!/usr/bin/env node
/**
 * Calc Labz — SEO Content Enrichment Script
 * Reads each *-calculator.html and injects richer pre-rendered content.
 * Usage: node scripts/enrich-seo-content.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

// ── RICH CONTENT FOR TOP CALCULATORS ───────────────────────────
const RICH = {
  emi: {
    why: 'Understanding your EMI before taking a loan is one of the most important financial decisions you can make. In India, the average home loan tenure spans 15\u201320 years, meaning a small difference in interest rate can translate to lakhs of rupees in savings or additional cost. For example, on a \u20B950 lakh home loan, the difference between 8.5% and 9.0% interest over 20 years is approximately \u20B93.2 lakhs in total interest. This calculator helps you make informed decisions by showing not just the monthly EMI, but the complete cost breakdown including total interest paid, principal-to-interest ratio, and a month-by-month amortization schedule. Whether you are comparing offers from SBI, HDFC, ICICI, or any other lender, running the numbers here first can save you from costly mistakes.',
    feats: ['Instant EMI calculation for any loan amount, rate, and tenure','Complete amortization schedule showing principal vs interest split each month','Visual pie chart of total principal vs total interest','Supports home loans, car loans, personal loans, and education loans','Compare scenarios by adjusting rate or tenure instantly','Works offline \u2014 your data never leaves your device'],
    tips: ['Always negotiate your interest rate \u2014 even 0.25% lower saves significant money over 20 years.','Consider making one extra EMI payment per year as prepayment \u2014 this alone can reduce a 20-year loan to ~16 years.','Keep your total EMI-to-income ratio below 40% to maintain financial flexibility.','Check if your lender charges prepayment penalties \u2014 floating rate loans in India cannot charge prepayment fees per RBI rules.','Review your loan statement annually to track how much principal vs interest you are paying.'],
    who: 'First-time home buyers comparing loan offers, car buyers estimating monthly costs, financial planners advising clients on debt management, and anyone considering a personal loan for major expenses.',
    tbl: '<table><thead><tr><th>Loan Amount</th><th>Rate</th><th>Tenure</th><th>Monthly EMI</th><th>Total Interest</th></tr></thead><tbody><tr><td>\u20B925,00,000</td><td>8.5%</td><td>20 yrs</td><td>\u20B921,696</td><td>\u20B927,06,920</td></tr><tr><td>\u20B950,00,000</td><td>8.5%</td><td>20 yrs</td><td>\u20B943,391</td><td>\u20B954,13,840</td></tr><tr><td>\u20B975,00,000</td><td>9.0%</td><td>15 yrs</td><td>\u20B976,071</td><td>\u20B961,92,822</td></tr><tr><td>\u20B910,00,000</td><td>11.0%</td><td>5 yrs</td><td>\u20B921,742</td><td>\u20B93,04,520</td></tr></tbody></table>',
    tblCap: 'EMI comparison across common Indian loan scenarios (2026 rates)'
  },
  sip: {
    why: 'Systematic Investment Plans (SIPs) have transformed how Indians invest in mutual funds. With over 8.5 crore SIP accounts active in India, monthly SIP contributions have crossed \u20B920,000 crore. The power of SIP lies in rupee-cost averaging \u2014 you automatically buy more units when markets are low and fewer when markets are high, smoothing out volatility over time. A \u20B910,000 monthly SIP in a diversified equity fund returning 12% annually would grow to approximately \u20B91 crore in 20 years, with your total investment being just \u20B924 lakhs. That means compounding generates \u20B976 lakhs \u2014 more than 3x your actual investment.',
    feats: ['Calculate future value of any monthly SIP amount','See total invested vs wealth gained breakdown','Visual growth chart showing compounding acceleration','Step-up SIP support for increasing investments annually','Reverse calculation \u2014 find SIP needed for a target corpus','Compare different return rate scenarios side by side'],
    tips: ['Start your SIP as early as possible \u2014 starting at age 25 vs 35 can mean 3x more wealth at retirement.','Use step-up SIP: increasing your SIP by 10% each year dramatically accelerates wealth creation.','Never stop your SIP during market crashes \u2014 that is when you buy the most units at the lowest prices.','Choose direct plans over regular plans to save 0.5\u20131% in expense ratio.','Set up auto-debit to ensure consistency \u2014 the biggest SIP mistake is irregular investing.'],
    who: 'Young professionals starting their investment journey, parents saving for education, retirement planners building a corpus, and anyone looking to build wealth systematically.',
    tbl: '<table><thead><tr><th>Monthly SIP</th><th>Duration</th><th>Return</th><th>Invested</th><th>Estimated Value</th></tr></thead><tbody><tr><td>\u20B95,000</td><td>10 yrs</td><td>12%</td><td>\u20B96,00,000</td><td>\u20B911,61,695</td></tr><tr><td>\u20B910,000</td><td>15 yrs</td><td>12%</td><td>\u20B918,00,000</td><td>\u20B950,45,760</td></tr><tr><td>\u20B910,000</td><td>20 yrs</td><td>12%</td><td>\u20B924,00,000</td><td>\u20B999,91,479</td></tr><tr><td>\u20B925,000</td><td>25 yrs</td><td>12%</td><td>\u20B975,00,000</td><td>\u20B94,69,78,365</td></tr></tbody></table>',
    tblCap: 'SIP wealth creation at 12% average annual return'
  },
  bmi: {
    why: 'Body Mass Index remains the most widely used screening tool for weight-related health risks worldwide. For Indians and South Asians, standard WHO BMI cutoffs can be misleading. Research published in The Lancet shows that South Asians develop type 2 diabetes and cardiovascular disease at significantly lower BMI levels compared to Caucasians. This is why the Asian BMI classification uses lower thresholds: overweight starts at 23 (not 25) and obesity at 25 (not 30). This calculator includes both WHO and Asian-specific classifications, making it particularly relevant for Indian users.',
    feats: ['Instant BMI calculation with WHO and Asian classifications','Color-coded health risk categories','Ideal weight range recommendation based on your height','Personalized health interpretation based on your result','Works completely offline \u2014 no data transmitted anywhere','Healthy weight range in both kg and pounds'],
    tips: ['BMI is a screening tool, not diagnostic \u2014 combine it with waist circumference for a complete picture.','For Indians, use the Asian BMI scale as it accounts for higher metabolic risk at lower weights.','A 5\u201310% weight reduction can significantly reduce cardiovascular risk if overweight.','Measure weight at the same time each day for consistency.','Athletes should use body fat percentage instead of BMI as muscle weighs more than fat.'],
    who: 'Health-conscious individuals, doctors during initial assessments, fitness enthusiasts tracking progress, and insurance companies for risk evaluation.',
    tbl: '<table><thead><tr><th>Category</th><th>WHO Range</th><th>Asian Range</th><th>Risk</th></tr></thead><tbody><tr><td>Underweight</td><td>&lt; 18.5</td><td>&lt; 18.5</td><td>Nutritional deficiency</td></tr><tr><td>Normal</td><td>18.5 \u2013 24.9</td><td>18.5 \u2013 22.9</td><td>Low</td></tr><tr><td>Overweight</td><td>25.0 \u2013 29.9</td><td>23.0 \u2013 24.9</td><td>Moderate</td></tr><tr><td>Obese I</td><td>30.0 \u2013 34.9</td><td>25.0 \u2013 29.9</td><td>High</td></tr><tr><td>Obese II</td><td>35.0+</td><td>30.0+</td><td>Very high</td></tr></tbody></table>',
    tblCap: 'BMI classification: WHO vs Asian cutoffs'
  },
  gst: {
    why: 'Goods and Services Tax, implemented in India on July 1, 2017, replaced 17 different indirect taxes. With over 1.4 crore GST-registered businesses and monthly collections exceeding \u20B91.5 lakh crore, GST impacts virtually every transaction in India. Whether you are a small business owner, a consumer verifying charges, or an accountant reconciling Input Tax Credits, understanding GST calculation is essential. The four-slab structure (5%, 12%, 18%, 28%) applies differently to goods and services.',
    feats: ['Calculate GST at any rate (5%, 12%, 18%, 28%, or custom)','Automatic CGST + SGST split for intra-state transactions','IGST mode for inter-state calculations','Reverse GST calculation from inclusive amount','Supports both goods and services','No login or signup required'],
    tips: ['Verify the applicable GST rate for your product \u2014 the schedule is updated quarterly by the GST Council.','Ensure your GSTIN is valid before claiming Input Tax Credit.','For e-commerce sellers, TCS of 1% is deducted by the platform.','Keep purchase invoices for at least 6 years for ITC claims and audits.','Use HSN/SAC codes for correct rate classification.'],
    who: 'Small business owners, chartered accountants, consumers verifying charges, freelancers, and e-commerce sellers managing multi-state compliance.',
    tbl: '<table><thead><tr><th>Slab</th><th>Common Items</th><th>On \u20B910,000</th><th>Total</th></tr></thead><tbody><tr><td>5%</td><td>Packaged food, economy hotels</td><td>\u20B9500</td><td>\u20B910,500</td></tr><tr><td>12%</td><td>Butter, mobile phones</td><td>\u20B91,200</td><td>\u20B911,200</td></tr><tr><td>18%</td><td>Most services, electronics</td><td>\u20B91,800</td><td>\u20B911,800</td></tr><tr><td>28%</td><td>Luxury cars, tobacco</td><td>\u20B92,800</td><td>\u20B912,800</td></tr></tbody></table>',
    tblCap: 'GST slabs with calculation examples'
  },
  incometax: {
    why: 'With the new tax regime as the default from FY 2023-24 and enhanced rebate limit of \u20B912 lakh under the new regime for FY 2025-26, understanding your income tax liability has never been more important. Over 7 crore returns were filed in AY 2024-25, yet many taxpayers overpay because they do not optimize their regime choice. The old regime offers deductions under 80C (\u20B91.5L), 80D (\u20B975K), 24B (\u20B92L), and NPS 80CCD(1B) (\u20B950K). The new regime offers lower rates but no deductions. This calculator compares both side-by-side.',
    feats: ['Compare Old vs New tax regime side-by-side','Updated for FY 2025-26 with latest slab rates','Section 80C, 80D, 80CCD, 24B deduction support','4% Health and Education Cess included','Surcharge calculation for high incomes','Monthly and annual tax breakdowns'],
    tips: ['If total deductions exceed \u20B93.75 lakh, the old regime is likely better.','New regime rebate means zero tax up to \u20B912 lakh income.','Maximize NPS for extra \u20B950K deduction under 80CCD(1B).','File ITR before July 31 to avoid late fees.','Keep Form 16 and receipts organized for claiming deductions.'],
    who: 'Salaried professionals, freelancers planning advance tax, CAs advising clients, HR departments, and retirees with pension income.',
    tbl: '<table><thead><tr><th>Slab</th><th>Old Regime</th><th>New Regime FY 25-26</th></tr></thead><tbody><tr><td>Up to \u20B93L</td><td>Nil</td><td>Nil</td></tr><tr><td>\u20B93L\u20137L</td><td>5% (above \u20B92.5L)</td><td>5%</td></tr><tr><td>\u20B97L\u201310L</td><td>20% (above \u20B95L)</td><td>10%</td></tr><tr><td>\u20B910L\u201312L</td><td>30%</td><td>15%</td></tr><tr><td>\u20B912L\u201315L</td><td>30%</td><td>20%</td></tr><tr><td>Above \u20B915L</td><td>30%</td><td>30%</td></tr></tbody></table>',
    tblCap: 'Income tax slab comparison FY 2025-26'
  }
};

// ── GENERIC TEMPLATES ──────────────────────────────────────────
const WHY_TPL = [
  (n) => `Getting accurate ${n} results matters because small errors can lead to significant real-world consequences. Whether you are making financial decisions, health assessments, or engineering calculations, precision is key. This free online ${n} provides instant, reliable results using industry-standard formulas. Unlike manual calculations, our tool eliminates human error and gives comprehensive breakdowns. Every calculation runs entirely in your browser \u2014 your data is never stored or transmitted, ensuring complete privacy.`,
  (n) => `This ${n} goes beyond simple number crunching \u2014 it provides context, interpretation, and actionable insights for every result. Designed for both beginners who need guidance and professionals who need speed, it uses validated formulas and presents results in an easy-to-understand format. It works completely offline as a PWA, meaning you can access it anytime, anywhere. All calculations happen on your device, ensuring your data stays private and secure.`,
  (n) => `Making informed decisions requires accurate data, and that is exactly what this ${n} delivers. Built with industry-standard formulas and regularly updated to reflect the latest rates and standards, this tool saves you time and eliminates guesswork. Whether you are a student learning concepts, a professional needing quick verification, or someone making important decisions, this calculator provides the precision you need with the simplicity you want.`
];

const TIPS_POOL = [
  'Double-check your input units \u2014 using the wrong unit is the most common calculation mistake.',
  'Bookmark this calculator for quick access \u2014 it works offline as a PWA.',
  'Use the Compare feature to evaluate different scenarios side by side.',
  'Save your results as a PDF for record-keeping or sharing.',
  'Try the related calculators below for comprehensive analysis.',
  'Click "How is this calculated?" to see the exact formula used.',
  'All calculations run locally on your device \u2014 your data is never sent anywhere.'
];

const WHO_TPL = [
  (n) => `Students and educators, professionals needing quick verification, individuals making personal decisions, and advisors recommending solutions to clients.`,
  (n) => `Anyone needing quick, accurate results \u2014 from students studying fundamentals to seasoned professionals verifying their work and everyday users making informed decisions.`
];

const H_WHY = ['Why This Calculator Matters','Why You Need This Calculator','Why Use This Calculator?','Why This Tool Is Essential'];
const H_FEAT = ['Key Features','What You Get','Calculator Features','What This Tool Offers'];
const H_TIPS = ['Pro Tips & Expert Insights','Expert Tips','Tips for Better Results','Practical Advice'];
const H_WHO = ['Who Should Use This?','Who Benefits From This?','Who Is This For?','Ideal Users'];
const H_TBL = ['Quick Reference Data','Reference Table','At a Glance','Quick Reference'];

function pick(arr, seed) { return arr[Math.abs(seed) % arr.length]; }
function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0; return Math.abs(h); }

function makeNoscript(name) {
  return `\n      <noscript><div style="padding:24px;margin:20px 0;background:#18181b;border:1px solid rgba(255,255,255,.08);border-radius:16px;text-align:center"><p style="font-size:1rem;color:#f4f4f5;margin-bottom:8px"><strong>\u2699\uFE0F JavaScript Required</strong></p><p style="font-size:.9rem;color:#a1a1aa;line-height:1.7">This interactive ${name} requires JavaScript to function. Please enable JavaScript in your browser. The formulas, reference tables, and educational content below are still available.</p></div></noscript>`;
}

function makeByline() {
  return `\n      <div class="seo-author-byline" style="display:flex;align-items:center;gap:12px;padding:14px 16px;background:var(--bg1);border:1px solid var(--brd);border-radius:12px;margin:16px 0"><div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#818cf8);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:.9rem;flex-shrink:0">SS</div><div><div style="font-size:.88rem;font-weight:600;color:var(--txt)">Reviewed by <a href="/author" style="color:var(--p)">Sagar Sahni</a></div><div style="font-size:.78rem;color:var(--txt2)">Founder &amp; Lead Developer, Calc Labz \u00B7 Last verified May 2026</div></div></div>`;
}

function buildSections(slug, name) {
  const s = hash(slug);
  const key = slug.replace('-calculator', '');
  const r = RICH[key];
  let h = '';

  h += makeByline();

  // Why section
  h += `\n      <section class="seo-section">\n        <h2>${pick(H_WHY, s)}</h2>\n        <p>${r ? r.why : pick(WHY_TPL, s)(name)}</p>\n      </section>`;

  // Features
  const feats = r ? r.feats : [`Instant ${name.replace(' Calculator','')} calculation with accurate formulas`,'Visual result breakdown with charts','Works offline as a Progressive Web App','Completely free \u2014 no signup or data collection','Mobile-friendly responsive design','Save and share results easily'];
  h += `\n      <section class="seo-section">\n        <h2>${pick(H_FEAT, s+1)}</h2>\n        <ul>${feats.map(f=>`\n          <li>${f}</li>`).join('')}\n        </ul>\n      </section>`;

  // Table
  if (r && r.tbl) {
    h += `\n      <section class="seo-section">\n        <h2>${pick(H_TBL, s+2)}</h2>\n        <p style="font-size:.85rem;color:var(--txt2);margin-bottom:8px"><em>${r.tblCap}</em></p>\n        ${r.tbl}\n      </section>`;
  }

  // Tips
  const tips = r ? r.tips : TIPS_POOL.slice(0, 5);
  h += `\n      <section class="seo-section">\n        <h2>${pick(H_TIPS, s+3)}</h2>\n        <ul>${tips.map(t=>`\n          <li>\uD83D\uDCA1 ${t}</li>`).join('')}\n        </ul>\n      </section>`;

  // Who uses
  h += `\n      <section class="seo-section">\n        <h2>${pick(H_WHO, s+4)}</h2>\n        <p>${r ? r.who : pick(WHO_TPL, s)(name)}</p>\n      </section>`;

  return h;
}

// ── PROCESS EACH FILE ──────────────────────────────────────────
function processFile(fp) {
  let html = fs.readFileSync(fp, 'utf-8');
  const fn = path.basename(fp);
  const slug = fn.replace('.html', '');
  const m = html.match(/<h1>([^<]+)<\/h1>/);
  const name = m ? m[1] : slug.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());

  if (html.includes('seo-author-byline')) {
    console.log('  skip ' + fn);
    return false;
  }

  // Add noscript
  const tag = '<div id="seo-content">';
  if (html.includes(tag)) html = html.replace(tag, tag + makeNoscript(name));

  // Insert enriched sections before trust div
  const trust = '<div class="seo-trust">';
  if (html.includes(trust)) html = html.replace(trust, buildSections(slug, name) + '\n      ' + trust);

  // Link author name
  html = html.replace(
    '<strong>Maintained by:</strong> Sagar Sahni, Calc Labz',
    '<strong>Maintained by:</strong> <a href="/author">Sagar Sahni</a>, Calc Labz'
  );

  fs.writeFileSync(fp, html, 'utf-8');
  console.log('  done ' + fn);
  return true;
}

// ── RUN ────────────────────────────────────────────────────────
console.log('\nCalc Labz SEO Enrichment\n');
const files = fs.readdirSync(ROOT).filter(f => f.endsWith('-calculator.html')).map(f => path.join(ROOT, f));
console.log('Found ' + files.length + ' calculator pages\n');
let ok = 0, skip = 0;
for (const f of files) { if (processFile(f)) ok++; else skip++; }
console.log('\nDone! Enriched: ' + ok + ' | Skipped: ' + skip + '\n');
