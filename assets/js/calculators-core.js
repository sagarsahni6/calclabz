/* ═══════════════════════════════════════════════════
   Calc Labz — calculators-core.js
   CORE FILE: Calculator stubs (metadata only, no calc logic)
   Size: ~40 KB (was 333 KB monolithic)
   
   calc() functions are null here; they are lazy-loaded from
   per-category files when user first opens a calculator.
   ═══════════════════════════════════════════════════ */

/* Calc Labz Calculator Database */
'use strict';
var BLOG_POSTS = [
    {id:'emi-guide',slug:'emi-calculator-guide-india-2026',cat:'Finance',title:'How to Calculate EMI in India 2026',desc:'Complete guide to home loan, car loan and personal loan EMI calculation with examples.',calc:'emi',date:'Jan 2026',readTime:'5 min'},
    {id:'sip-guide',slug:'sip-calculator-mutual-fund-investment-2026',cat:'Finance',title:'SIP Calculator: Grow \u20b95,000/month to \u20b91 Crore',desc:'See how a simple SIP in mutual funds can build massive wealth over 20 years.',calc:'sip',date:'Jan 2026',readTime:'6 min'},
    {id:'gst-guide',slug:'gst-calculator-cgst-sgst-igst-guide-2026',cat:'Tax',title:'GST Calculator: CGST, SGST & IGST Explained 2026',desc:'Understand how GST is calculated, what CGST/SGST/IGST mean, and common GST rates.',calc:'gst',date:'Jan 2026',readTime:'4 min'},
    {id:'bmi-guide',slug:'bmi-calculator-chart-india-2026',cat:'Health',title:'BMI Chart India 2026: Are You in Healthy Range?',desc:'BMI ranges for Indian adults, limitations of BMI, and how to improve your health score.',calc:'bmi',date:'Jan 2026',readTime:'5 min'},
    {id:'tax-guide',slug:'old-vs-new-tax-regime-comparison-fy-2025-26',cat:'Tax',title:'Old vs New Tax Regime: Which Saves More in FY 2025-26?',desc:'Side-by-side comparison of old and new tax regimes for salaried employees in India.',calc:'taxregime',date:'Apr 2026',readTime:'7 min'},
    {id:'cgpa-guide',slug:'cgpa-to-percentage-converter-formula-2026',cat:'Education',title:'CGPA to Percentage Converter + Formula 2026',desc:'How to convert CGPA to percentage for VTU, Mumbai, CBSE and other Indian universities.',calc:'cgpa',date:'Jan 2026',readTime:'3 min'},
    {id:'fd-guide',slug:'fixed-deposit-calculator-best-fd-rates-2026',cat:'Finance',title:'Fixed Deposit Calculator: Best FD Rates & Maturity 2026',desc:'Compare FD interest rates, calculate maturity amount, and learn about tax on FD interest.',calc:'fd',date:'Feb 2026',readTime:'5 min'},
    {id:'ppf-guide',slug:'ppf-calculator-tax-free-returns-maturity-2026',cat:'Finance',title:'PPF Calculator: Tax-Free Returns & 15-Year Maturity 2026',desc:'Complete guide to Public Provident Fund \u2014 interest rate, lock-in, tax benefits and maturity.',calc:'ppf',date:'Feb 2026',readTime:'6 min'},
    {id:'compound-guide',slug:'compound-interest-calculator-rule-of-72',cat:'Finance',title:'Compound Interest: The 8th Wonder of the World',desc:'Understand how compound interest works, daily vs monthly compounding, and the Rule of 72.',calc:'compoundinterest',date:'Mar 2026',readTime:'7 min'},
    {id:'mortgage-guide',slug:'home-loan-emi-calculator-eligibility-tax-benefits-2026',cat:'Finance',title:'Home Loan EMI Guide: Eligibility & Tax Benefits 2026',desc:'Everything about home loan EMI, eligibility criteria, tax deductions under 80C and 24(b).',calc:'mortgage',date:'Mar 2026',readTime:'8 min'},
    {id:'inflation-guide',slug:'inflation-calculator-india-purchasing-power-2026',cat:'Finance',title:'Inflation Calculator: How Inflation Erodes Your Money',desc:'Learn how 6% inflation makes \u20b91 lakh worth only \u20b955,839 in 10 years and how to beat it.',calc:'inflation',date:'Apr 2026',readTime:'5 min'},
    {id:'roi-guide',slug:'roi-cagr-calculator-investment-returns-2026',cat:'Finance',title:'ROI & CAGR Calculator: Measure Investment Returns',desc:'How to calculate ROI, CAGR, and absolute returns on stocks, mutual funds and real estate.',calc:'roi',date:'Apr 2026',readTime:'5 min'},
    {id:'tdee-guide',slug:'tdee-calculator-daily-calorie-needs-2026',cat:'Health',title:'TDEE Calculator: How Many Calories Do You Really Need?',desc:'Calculate Total Daily Energy Expenditure based on activity level for weight loss or gain.',calc:'tdee',date:'Feb 2026',readTime:'6 min'},
    {id:'bmr-guide',slug:'bmr-calculator-basal-metabolic-rate-2026',cat:'Health',title:'BMR Calculator: Understanding Your Resting Metabolism',desc:'What is Basal Metabolic Rate, how is it calculated, and why it matters for weight management.',calc:'bmr',date:'Feb 2026',readTime:'5 min'},
    {id:'sleep-guide',slug:'sleep-calculator-optimal-bedtime-cycles-2026',cat:'Health',title:'Sleep Calculator: Optimal Bedtime & Wake-Up Times',desc:'Based on 90-minute sleep cycles, find the best bedtime to wake up refreshed and energized.',calc:'sleep',date:'Mar 2026',readTime:'4 min'},
    {id:'water-guide',slug:'water-intake-calculator-daily-hydration-guide-2026',cat:'Health',title:'Water Intake Calculator: Daily Hydration Guide 2026',desc:'How much water you should drink based on weight, activity level and health conditions.',calc:'water',date:'Mar 2026',readTime:'4 min'},
    {id:'calorie-guide',slug:'calories-burned-calculator-exercise-fat-loss-2026',cat:'Health',title:'Calories Burned Calculator: Exercise & Fat Loss Guide',desc:'MET-based calorie burn estimates for walking, running, cycling, swimming, HIIT and more.',calc:'calories',date:'Apr 2026',readTime:'5 min'},
    {id:'macro-guide',slug:'macro-calculator-protein-carbs-fat-2026',cat:'Health',title:'Macro Calculator: Protein, Carbs & Fat for Your Goals',desc:'Optimal macro ratios for weight loss, maintenance, and muscle gain with daily gram targets.',calc:'macros',date:'Apr 2026',readTime:'5 min'},
    {id:'percentage-guide',slug:'percentage-calculator-tricks-formulas-examples',cat:'Math',title:'Percentage Calculator: Tricks, Formulas & Examples',desc:'Master percentage calculations \u2014 increase, decrease, difference, and reverse percentages.',calc:'percentage',date:'Jan 2026',readTime:'4 min'},
    {id:'age-guide',slug:'age-calculator-exact-years-months-days-2026',cat:'Lifestyle',title:'Age Calculator: Exact Age in Years, Months & Days',desc:'Calculate your precise age, days lived, weeks count, and countdown to your next birthday.',calc:'age',date:'Mar 2026',readTime:'3 min'},
];

var BLOG_CONTENT = {
    'emi-guide':  {title:'How to Calculate EMI in India 2026',meta:{date:'Jan 2026',readTime:'5 min',author:'Calc Labz Team'},body:'<h2>What is EMI?</h2><p>EMI stands for Equated Monthly Instalment \u2014 the fixed monthly amount you pay your bank to repay a loan. Every EMI has two components: principal repayment and interest.</p><h2>The EMI Formula</h2><p>EMI = P \xd7 r \xd7 (1+r)\u207f / ((1+r)\u207f - 1)</p><ul><li><strong>P</strong> = Principal loan amount</li><li><strong>r</strong> = Monthly rate = Annual rate \xf7 12 \xf7 100</li><li><strong>n</strong> = Tenure in months</li></ul><h2>Example Calculation</h2><p>For a \u20b930 lakh home loan at 8.5% for 20 years: <strong>EMI = \u20b926,035/month</strong>. Total interest paid over the tenure: \u20b932.48 lakh.</p><h2>Types of Loans in India</h2><ul><li><strong>Home Loan</strong> \u2014 8.5\u201310% p.a., up to 30 years</li><li><strong>Car Loan</strong> \u2014 9\u201312% p.a., 1\u20137 years</li><li><strong>Personal Loan</strong> \u2014 10\u201318% p.a., 1\u20135 years</li><li><strong>Education Loan</strong> \u2014 8\u201312% p.a., moratorium + 5\u201315 years</li></ul><h2>Tips to Reduce EMI</h2><ul><li>Make a larger down payment</li><li>Choose longer tenure (reduces EMI, increases total interest)</li><li>Negotiate a lower rate or refinance when rates drop</li><li>Make periodic prepayments \u2014 even \u20b910K/year helps significantly</li><li>Consider balance transfer to a bank offering lower rate</li></ul>',cta:{text:'Calculate your EMI now',calc:'emi',cat:'finance'}},
    'sip-guide':  {title:'SIP Calculator: Grow \u20b95,000/month to \u20b91 Crore',meta:{date:'Jan 2026',readTime:'6 min',author:'Calc Labz Team'},body:'<h2>What is SIP?</h2><p>A Systematic Investment Plan lets you invest a fixed amount every month in mutual funds, using rupee cost averaging to reduce market timing risk.</p><h2>Power of Compounding</h2><p>Investing \u20b95,000/month at 12% CAGR for 25 years gives <strong>\u20b994.9 lakhs</strong> from just \u20b915 lakhs invested!</p><h2>Step-Up SIP Strategy</h2><p>Increasing SIP by 10% annually: starting at \u20b95,000/month for 20 years gives <strong>\u20b91.01 crore</strong> vs \u20b949.9 lakhs for flat SIP.</p><h2>SIP vs Lumpsum</h2><p>SIP reduces risk through rupee-cost averaging. In volatile markets, SIP outperforms lumpsum. For most retail investors, SIP is the safer choice.</p><h2>Best Fund Types for SIP</h2><ul><li><strong>Index funds</strong> \u2014 low cost, market returns</li><li><strong>Large-cap</strong> \u2014 stability with moderate growth</li><li><strong>ELSS</strong> \u2014 SIP + tax saving under 80C</li><li><strong>Small-cap</strong> \u2014 high risk, high reward for 10+ year horizon</li></ul><h2>Tax on SIP Returns</h2><p>Equity STCG (before 1 year) taxed at 15%. LTCG above \u20b91.25 lakh taxed at 12.5%. Debt fund gains taxed at slab rate.</p>',cta:{text:'Try the SIP calculator',calc:'sip',cat:'finance'}},
    'gst-guide':  {title:'GST Calculator: CGST, SGST & IGST Explained 2026',meta:{date:'Jan 2026',readTime:'4 min',author:'Calc Labz Team'},body:'<h2>GST Rate Slabs</h2><p>India uses: 0% (essentials), 3% (gold), 5% (basic), 12% (processed food), 18% (most services), 28% (luxury).</p><h2>CGST vs SGST vs IGST</h2><p>Intra-state: CGST + SGST = total GST rate (split equally). Inter-state: IGST at full rate.</p><h2>Example: 18% GST on \u20b91,000</h2><ul><li>Intra-state: CGST \u20b990 + SGST \u20b990 = \u20b9180</li><li>Inter-state: IGST = \u20b9180</li><li>Total invoice: \u20b91,180</li></ul><h2>Reverse GST Calculation</h2><p>Pre-GST = Price \xd7 100 / (100 + GST%). Example: \u20b91,180 at 18% = \u20b91,000 base price.</p><h2>Input Tax Credit</h2><p>Registered businesses can claim ITC on purchases against output GST liability, avoiding cascading taxes.</p><h2>GST Registration Threshold</h2><p>Mandatory if annual turnover exceeds \u20b940 lakhs (goods) or \u20b920 lakhs (services). Also required for inter-state sales and e-commerce.</p>',cta:{text:'Calculate GST now',calc:'gst',cat:'finance'}},
    'bmi-guide':  {title:'BMI Chart India 2026: Are You in the Healthy Range?',meta:{date:'Jan 2026',readTime:'5 min',author:'Calc Labz Team'},body:'<h2>BMI for Indians</h2><ul><li>Below 18.5 \u2014 Underweight</li><li>18.5\u201322.9 \u2014 Normal</li><li>23\u201327.4 \u2014 Overweight</li><li>27.5+ \u2014 Obese</li></ul><h2>How BMI is Calculated</h2><p>BMI = Weight (kg) \xf7 Height\xb2 (m\xb2). For 70 kg at 170 cm: 70/(1.70)\xb2 = 24.2</p><h2>Limitations</h2><p>BMI does not distinguish muscle from fat. Use waist-to-hip ratio alongside BMI for accuracy.</p><h2>Health Risks by Category</h2><ul><li><strong>Underweight:</strong> Nutrient deficiency, weakened immunity</li><li><strong>Overweight/Obese:</strong> Diabetes, heart disease, hypertension</li></ul><h2>Healthy Goals</h2><p>Aim for BMI 18.5\u201322.9. Even a 5\u201310% weight reduction significantly improves health markers.</p>',cta:{text:'Check your BMI now',calc:'bmi',cat:'health'}},
    'tax-guide':  {title:'Old vs New Tax Regime: Which Saves More in FY 2025-26?',meta:{date:'Apr 2026',readTime:'7 min',author:'Calc Labz Team'},body:'<h2>Key Difference</h2><p>Old Regime: high rates + many deductions (80C, HRA, home loan). New Regime (FY 2025-26): lower rates with 7 slabs, only \u20b975K standard deduction.</p><h2>New Regime Slabs (Budget 2026)</h2><ul><li>Up to \u20b94L \u2014 0%</li><li>\u20b94L\u2013\u20b98L \u2014 5%</li><li>\u20b98L\u2013\u20b912L \u2014 10%</li><li>\u20b912L\u2013\u20b916L \u2014 15%</li><li>\u20b916L\u2013\u20b920L \u2014 20%</li><li>\u20b920L\u2013\u20b924L \u2014 25%</li><li>Above \u20b924L \u2014 30%</li></ul><h2>Section 87A Rebate</h2><p>No tax if taxable income \u2264 \u20b912 lakh (effective: ~\u20b912.75L gross with standard deduction).</p><h2>Who benefits from Old Regime?</h2><p>If total deductions exceed \u20b94.25 lakhs, Old Regime usually saves more.</p>',cta:{text:'Compare your tax now',calc:'taxregime',cat:'finance'}},
    'cgpa-guide': {title:'CGPA to Percentage Converter + Formula 2026',meta:{date:'Jan 2026',readTime:'3 min',author:'Calc Labz Team'},body:'<h2>CBSE / VTU Formula</h2><p>Percentage = CGPA \xd7 9.5 (most widely used in India).</p><h2>Mumbai University</h2><p>Percentage = CGPA \xd7 10. Always confirm with your registrar.</p><h2>Grades</h2><ul><li>9.0\u201310.0 \u2192 O (Outstanding)</li><li>8.0\u20138.9 \u2192 A+</li><li>7.0\u20137.9 \u2192 A</li><li>6.0\u20136.9 \u2192 B+</li><li>5.0\u20135.9 \u2192 B/C</li></ul><h2>Job Applications</h2><p>Always state the formula used, e.g. "8.5 CGPA (\xd79.5 = 80.75%)".</p>',cta:{text:'Convert your CGPA now',calc:'cgpa',cat:'education'}},
    'fd-guide': {title:'Fixed Deposit Calculator: Best FD Rates & Maturity 2026',meta:{date:'Feb 2026',readTime:'5 min',author:'Calc Labz Team'},body:'<h2>What is a Fixed Deposit?</h2><p>A Fixed Deposit (FD) is a financial instrument where you deposit a lump-sum amount for a fixed tenure at a predetermined interest rate. FDs are offered by banks, NBFCs, and post offices across India.</p><h2>FD Interest Rates 2026</h2><ul><li><strong>SBI</strong> \u2014 6.5\u20137.1% (general), 7.0\u20137.6% (senior citizens)</li><li><strong>HDFC Bank</strong> \u2014 6.6\u20137.25%</li><li><strong>ICICI Bank</strong> \u2014 6.5\u20137.2%</li><li><strong>Post Office TD</strong> \u2014 6.9\u20137.5%</li></ul><h2>How FD Interest is Calculated</h2><p>Most banks use quarterly compounding: A = P(1 + r/4)^(4t). For \u20b91 lakh at 7% for 5 years, maturity = \u20b91,41,478.</p><h2>Tax on FD Interest</h2><p>FD interest is taxable at your income tax slab rate. TDS of 10% is deducted if annual interest exceeds \u20b940,000 (\u20b950,000 for senior citizens). Submit Form 15G/15H to avoid TDS if total income is below taxable limit.</p><h2>FD vs Other Investments</h2><ul><li><strong>FD vs PPF:</strong> PPF offers tax-free returns but has 15-year lock-in</li><li><strong>FD vs Debt Funds:</strong> Debt funds offer better tax efficiency for 3+ year horizon</li><li><strong>FD vs SIP:</strong> SIP gives higher returns (12%+) but with market risk</li></ul>',cta:{text:'Calculate FD maturity',calc:'fd',cat:'finance'}},
    'ppf-guide': {title:'PPF Calculator: Tax-Free Returns & 15-Year Maturity',meta:{date:'Feb 2026',readTime:'6 min',author:'Calc Labz Team'},body:'<h2>What is PPF?</h2><p>Public Provident Fund is a government-backed long-term savings scheme offering guaranteed, tax-free returns. It falls under the EEE (Exempt-Exempt-Exempt) category \u2014 investment, interest, and maturity are all tax-free.</p><h2>PPF Interest Rate 2026</h2><p>Current rate: <strong>7.1% p.a.</strong> (compounded annually). Revised quarterly by the government. Historically ranged from 7\u20138.8%.</p><h2>PPF Rules & Limits</h2><ul><li><strong>Minimum deposit:</strong> \u20b9500/year</li><li><strong>Maximum deposit:</strong> \u20b91.5 lakh/year</li><li><strong>Lock-in:</strong> 15 years (partial withdrawal from 7th year)</li><li><strong>Extension:</strong> 5-year blocks after maturity</li></ul><h2>Tax Benefits of PPF</h2><p>Yearly deposits up to \u20b91.5 lakh qualify for Section 80C deduction. Interest earned and maturity amount are completely tax-free. PPF is one of the safest EEE instruments available.</p><h2>PPF Maturity Calculation Example</h2><p>Investing \u20b912,500/month (\u20b91.5L/year) for 15 years at 7.1%: Total invested = \u20b922.5 lakh, Interest = \u20b918.18 lakh, Maturity = <strong>\u20b940.68 lakh</strong> (completely tax-free).</p><h2>PPF vs NPS vs ELSS</h2><ul><li><strong>PPF:</strong> Guaranteed returns, EEE, 15-year lock-in</li><li><strong>NPS:</strong> Market-linked, partial tax on withdrawal, retirement focus</li><li><strong>ELSS:</strong> Equity returns, 3-year lock-in, LTCG taxable above \u20b91.25L</li></ul>',cta:{text:'Calculate PPF maturity',calc:'ppf',cat:'finance'}},
    'compound-guide': {title:'Compound Interest: The 8th Wonder of the World',meta:{date:'Mar 2026',readTime:'7 min',author:'Calc Labz Team'},body:'<h2>What is Compound Interest?</h2><p>Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. Albert Einstein reportedly called it the "eighth wonder of the world" \u2014 and for good reason.</p><h2>Simple vs Compound Interest</h2><p>Simple interest: Interest only on principal. Compound interest: Interest on principal + accumulated interest. Over 20 years at 10%, \u20b91 lakh grows to \u20b93L (simple) vs <strong>\u20b96.73L</strong> (compound).</p><h2>The Rule of 72</h2><p>Divide 72 by the interest rate to find how many years it takes to double your money. At 8%: 72/8 = 9 years. At 12%: 72/12 = 6 years. At 15%: 72/15 = 4.8 years.</p><h2>Compounding Frequency Matters</h2><ul><li><strong>Annually:</strong> Interest added once a year</li><li><strong>Semi-annually:</strong> Twice a year (slightly better)</li><li><strong>Quarterly:</strong> Four times a year (banks use this for FDs)</li><li><strong>Monthly:</strong> 12 times (credit cards use this against you!)</li><li><strong>Daily:</strong> 365 times (savings accounts, liquid funds)</li></ul><h2>Real-World Examples</h2><p>\u20b910,000/month SIP at 12% for 30 years: Invested = \u20b936L, Corpus = <strong>\u20b93.53 crore</strong>. That is the power of compounding \u2014 97% of your corpus comes from compound growth, not your deposits!</p><h2>How to Maximise Compounding</h2><ul><li>Start investing as early as possible</li><li>Be consistent \u2014 don\'t break the chain</li><li>Reinvest dividends and interest</li><li>Choose higher compounding frequency when possible</li></ul>',cta:{text:'Calculate compound interest',calc:'compoundinterest',cat:'finance'}},
    'mortgage-guide': {title:'Home Loan EMI Guide: Eligibility & Tax Benefits 2026',meta:{date:'Mar 2026',readTime:'8 min',author:'Calc Labz Team'},body:'<h2>Home Loan Basics</h2><p>A home loan (mortgage) lets you purchase a property by paying monthly EMIs. Banks finance 75\u201390% of property value. Tenure ranges from 5 to 30 years.</p><h2>Eligibility Criteria</h2><ul><li><strong>Age:</strong> 21\u201360 years (salaried), 25\u201365 (self-employed)</li><li><strong>Income:</strong> EMI should not exceed 40\u201350% of net monthly income</li><li><strong>CIBIL Score:</strong> 750+ for best rates</li><li><strong>Employment:</strong> Minimum 2\u20133 years work experience</li></ul><h2>Home Loan Interest Rates 2026</h2><ul><li><strong>SBI:</strong> 8.50\u20139.65% p.a.</li><li><strong>HDFC:</strong> 8.75\u20139.40%</li><li><strong>ICICI:</strong> 8.75\u20139.50%</li><li><strong>Bajaj:</strong> 8.25\u20139.80%</li></ul><h2>Tax Benefits on Home Loan</h2><ul><li><strong>Section 24(b):</strong> Interest deduction up to \u20b92 lakh/year (self-occupied)</li><li><strong>Section 80C:</strong> Principal repayment up to \u20b91.5 lakh/year</li><li><strong>Section 80EEA:</strong> Additional \u20b91.5L interest for affordable housing (if applicable)</li></ul><h2>Prepayment Strategies</h2><p>Even small prepayments drastically reduce total interest. Prepaying \u20b91 lakh/year on a \u20b950L, 20-year loan at 8.5% saves \u20b918+ lakh in interest and closes the loan 6\u20137 years early.</p>',cta:{text:'Calculate home loan EMI',calc:'mortgage',cat:'finance'}},
    'inflation-guide': {title:'Inflation Calculator: How Inflation Erodes Your Money',meta:{date:'Apr 2026',readTime:'5 min',author:'Calc Labz Team'},body:'<h2>What is Inflation?</h2><p>Inflation is the rate at which prices of goods and services increase over time, reducing the purchasing power of money. India\'s average inflation has been 5\u20137% over the past decade.</p><h2>How Inflation Erodes Savings</h2><p>At 6% inflation, \u20b91 lakh today will buy only \u20b955,839 worth of goods in 10 years. In 20 years, it drops to \u20b931,180. Your money doesn\'t grow \u2014 it shrinks if returns don\'t beat inflation.</p><h2>Real vs Nominal Returns</h2><p>If your FD gives 7% and inflation is 6%, your <strong>real return is only ~1%</strong>. Real Return \u2248 Nominal Return \u2013 Inflation. This is why equity (12%+ nominal) is essential for long-term goals.</p><h2>How to Beat Inflation</h2><ul><li><strong>Equity mutual funds:</strong> 12\u201315% CAGR historically</li><li><strong>Real estate:</strong> 8\u201310% appreciation in tier-1 cities</li><li><strong>Gold:</strong> 10\u201312% over long periods</li><li><strong>PPF/EPF:</strong> 7\u20138% (barely beats inflation but safe)</li></ul><h2>Inflation Impact on Life Goals</h2><p>Child\'s education costing \u20b920L today will cost \u20b964L in 20 years (at 6% inflation). Your retirement corpus needs to be 3\u20134x what you think. Always plan with inflation-adjusted numbers.</p>',cta:{text:'Calculate inflation impact',calc:'inflation',cat:'finance'}},
    'roi-guide': {title:'ROI & CAGR Calculator: Measure Investment Returns',meta:{date:'Apr 2026',readTime:'5 min',author:'Calc Labz Team'},body:'<h2>What is ROI?</h2><p>Return on Investment = (Gain \u2013 Cost) / Cost \xd7 100. Simple ROI tells you the total percentage gain but doesn\'t account for time. A 50% return over 1 year is far better than 50% over 10 years.</p><h2>What is CAGR?</h2><p>Compound Annual Growth Rate normalises returns to a yearly rate: CAGR = (End Value/Start Value)^(1/years) \u2013 1. This lets you fairly compare investments of different durations.</p><h2>CAGR Benchmarks India</h2><ul><li><strong>Nifty 50:</strong> ~12% CAGR (20-year average)</li><li><strong>Gold:</strong> ~10% CAGR</li><li><strong>Real Estate:</strong> ~8\u201310% CAGR</li><li><strong>FD:</strong> ~6.5\u20137% CAGR</li><li><strong>Savings Account:</strong> ~3.5\u20134%</li></ul><h2>Absolute vs Annualised Returns</h2><p>Absolute return: total gain percentage. Annualised (CAGR): yearly equivalent. For investments held over 1 year, always compare CAGR, not absolute returns.</p><h2>Common ROI Mistakes</h2><ul><li>Ignoring inflation (real ROI = nominal ROI \u2013 inflation)</li><li>Not accounting for taxes and fees</li><li>Comparing different time periods without annualising</li><li>Overlooking reinvestment of dividends</li></ul>',cta:{text:'Calculate your ROI',calc:'roi',cat:'finance'}},
    'tdee-guide': {title:'TDEE Calculator: How Many Calories Do You Really Need?',meta:{date:'Feb 2026',readTime:'6 min',author:'Calc Labz Team'},body:'<h2>What is TDEE?</h2><p>Total Daily Energy Expenditure is the total number of calories your body burns in a day, including basal metabolism, physical activity, and the thermic effect of food.</p><h2>TDEE = BMR \xd7 Activity Multiplier</h2><ul><li><strong>Sedentary</strong> (desk job, no exercise): BMR \xd7 1.2</li><li><strong>Lightly Active</strong> (1\u20133 days/week): BMR \xd7 1.375</li><li><strong>Moderately Active</strong> (3\u20135 days/week): BMR \xd7 1.55</li><li><strong>Very Active</strong> (6\u20137 days/week): BMR \xd7 1.725</li><li><strong>Extremely Active</strong> (athlete/physical job): BMR \xd7 1.9</li></ul><h2>TDEE for Weight Loss</h2><p>To lose weight, eat 500 kcal below your TDEE for ~0.5 kg/week loss. A 1000 kcal deficit gives ~1 kg/week but is aggressive. Never go below BMR.</p><h2>TDEE for Muscle Gain</h2><p>To gain lean muscle, eat 300\u2013500 kcal above your TDEE (caloric surplus) while strength training 3\u20134 times per week. Ensure adequate protein (1.6\u20132.2g/kg body weight).</p><h2>Why TDEE Changes</h2><p>Your TDEE isn\'t fixed. It changes with age (decreases ~2% per decade), body composition (more muscle = higher TDEE), and activity levels. Recalculate every 4\u20136 weeks during a cut or bulk.</p>',cta:{text:'Calculate your TDEE',calc:'tdee',cat:'health'}},
    'bmr-guide': {title:'BMR Calculator: Understanding Your Resting Metabolism',meta:{date:'Feb 2026',readTime:'5 min',author:'Calc Labz Team'},body:'<h2>What is BMR?</h2><p>Basal Metabolic Rate is the number of calories your body needs at complete rest to maintain basic life functions \u2014 breathing, circulation, cell production. BMR accounts for 60\u201375% of total daily calories burned.</p><h2>Mifflin-St Jeor Formula</h2><ul><li><strong>Men:</strong> BMR = 10 \xd7 weight(kg) + 6.25 \xd7 height(cm) \u2013 5 \xd7 age \u2013 161 + 166</li><li><strong>Women:</strong> BMR = 10 \xd7 weight(kg) + 6.25 \xd7 height(cm) \u2013 5 \xd7 age \u2013 161</li></ul><p>A 30-year-old male, 75 kg, 175 cm has a BMR of approximately 1,680 kcal/day.</p><h2>Factors Affecting BMR</h2><ul><li><strong>Muscle mass:</strong> More muscle = higher BMR (muscle burns 3x more calories than fat at rest)</li><li><strong>Age:</strong> BMR decreases ~2% per decade after 20</li><li><strong>Gender:</strong> Males typically have 5\u201310% higher BMR</li><li><strong>Thyroid function:</strong> Hypothyroidism lowers BMR</li><li><strong>Temperature:</strong> Cold environments slightly increase BMR</li></ul><h2>BMR vs TDEE</h2><p>BMR = calories at rest. TDEE = BMR + exercise + daily activity + food digestion. Never eat below your BMR as it can slow metabolism and cause nutrient deficiency.</p><h2>How to Boost Your BMR</h2><ul><li>Build lean muscle through resistance training</li><li>Stay hydrated \u2014 dehydration lowers metabolic rate</li><li>Get 7\u20139 hours of quality sleep</li><li>Eat adequate protein (thermic effect of protein is highest)</li></ul>',cta:{text:'Calculate your BMR',calc:'bmr',cat:'health'}},
    'sleep-guide': {title:'Sleep Calculator: Optimal Bedtime & Wake-Up Times',meta:{date:'Mar 2026',readTime:'4 min',author:'Calc Labz Team'},body:'<h2>Sleep Cycles Explained</h2><p>Each sleep cycle lasts approximately 90 minutes and includes: light sleep (N1, N2), deep sleep (N3/SWS), and REM sleep. Waking up mid-cycle causes grogginess; waking at cycle end feels refreshing.</p><h2>The 90-Minute Rule</h2><p>Plan sleep in multiples of 90 minutes. For a 7:00 AM wake-up, ideal bedtimes are 11:30 PM (5 cycles), 10:00 PM (6 cycles), or 1:00 AM (4 cycles). Add ~14 minutes to fall asleep.</p><h2>Recommended Sleep Duration</h2><ul><li><strong>Adults (18\u201364):</strong> 7\u20139 hours (4\u20136 cycles)</li><li><strong>Teens (14\u201317):</strong> 8\u201310 hours</li><li><strong>Children (6\u201313):</strong> 9\u201311 hours</li><li><strong>Seniors (65+):</strong> 7\u20138 hours</li></ul><h2>Sleep Hygiene Tips</h2><ul><li>Keep a consistent sleep schedule (even on weekends)</li><li>Avoid screens 1 hour before bed (blue light blocks melatonin)</li><li>Keep bedroom cool (18\u201322\xb0C), dark, and quiet</li><li>Avoid caffeine after 2 PM and heavy meals before bed</li><li>Exercise regularly but not within 3 hours of bedtime</li></ul><h2>Signs of Poor Sleep</h2><p>Daytime drowsiness, difficulty concentrating, irritability, weakened immunity, and weight gain are all signs you may not be getting enough quality sleep. Track your cycles for optimal rest.</p>',cta:{text:'Find your ideal bedtime',calc:'sleep',cat:'health'}},
    'water-guide': {title:'Water Intake Calculator: Daily Hydration Guide 2026',meta:{date:'Mar 2026',readTime:'4 min',author:'Calc Labz Team'},body:'<h2>How Much Water Do You Need?</h2><p>The general formula: 30\u201340 ml per kg of body weight. A 70 kg adult needs 2.1\u20132.8 litres daily. Active individuals and those in hot climates need more.</p><h2>Factors That Increase Water Needs</h2><ul><li><strong>Exercise:</strong> Add 500\u20131000 ml per hour of activity</li><li><strong>Hot weather:</strong> Add 500+ ml on hot/humid days</li><li><strong>Altitude:</strong> Higher altitude increases water loss</li><li><strong>Pregnancy/breastfeeding:</strong> Add 300\u2013700 ml daily</li><li><strong>Illness:</strong> Fever, diarrhea, vomiting increase fluid needs</li></ul><h2>Signs of Dehydration</h2><ul><li>Dark yellow urine (aim for pale straw colour)</li><li>Headaches and dizziness</li><li>Dry mouth and skin</li><li>Fatigue and difficulty concentrating</li><li>Reduced urine output</li></ul><h2>Best Times to Drink Water</h2><p>Morning (kickstarts metabolism), 30 min before meals (aids digestion), before/during/after exercise, and when feeling hungry (thirst is often mistaken for hunger).</p><h2>Water Intake Myths Debunked</h2><p>The "8 glasses a day" rule has no scientific origin \u2014 individual needs vary. Coffee and tea do count toward hydration (the diuretic effect is minimal). Overhydration (hyponatremia) is rare but possible in extreme endurance activities.</p>',cta:{text:'Calculate your water intake',calc:'water',cat:'health'}},
    'calorie-guide': {title:'Calories Burned Calculator: Exercise & Fat Loss Guide',meta:{date:'Apr 2026',readTime:'5 min',author:'Calc Labz Team'},body:'<h2>How Calorie Burn is Calculated</h2><p>Calories burned = MET \xd7 3.5 \xd7 body weight (kg) / 200 \xd7 duration (minutes). MET (Metabolic Equivalent of Task) represents exercise intensity relative to rest.</p><h2>MET Values for Common Activities</h2><ul><li><strong>Walking (5 km/h):</strong> 3.5 MET</li><li><strong>Jogging:</strong> 7 MET</li><li><strong>Running (10 km/h):</strong> 10 MET</li><li><strong>Cycling (moderate):</strong> 8 MET</li><li><strong>Swimming:</strong> 7 MET</li><li><strong>HIIT:</strong> 12 MET</li><li><strong>Yoga:</strong> 3 MET</li><li><strong>Weight Training:</strong> 5 MET</li></ul><h2>Exercise for Fat Loss</h2><p>1 kg of body fat = ~7,700 calories. To lose 0.5 kg/week, you need a daily deficit of ~550 calories through diet and exercise combined. Aim for a mix of cardio and strength training.</p><h2>HIIT vs Steady-State Cardio</h2><p>HIIT burns more calories per minute and has an "afterburn" effect (EPOC) \u2014 your body continues burning calories for 24\u201348 hours post-workout. But steady-state is easier on joints and sustainable long-term.</p><h2>NEAT: The Hidden Calorie Burner</h2><p>Non-Exercise Activity Thermogenesis (walking, fidgeting, standing) can account for 200\u2013900 kcal/day. Taking 10,000 steps daily burns ~400\u2013500 extra calories. Small movements add up significantly.</p>',cta:{text:'Calculate calories burned',calc:'calories',cat:'health'}},
    'macro-guide': {title:'Macro Calculator: Protein, Carbs & Fat for Your Goals',meta:{date:'Apr 2026',readTime:'5 min',author:'Calc Labz Team'},body:'<h2>What are Macronutrients?</h2><p>Macros are the three main nutrients your body needs in large amounts: <strong>Protein</strong> (4 kcal/g), <strong>Carbohydrates</strong> (4 kcal/g), and <strong>Fat</strong> (9 kcal/g). Getting the right ratio is key to achieving your fitness goals.</p><h2>Optimal Macro Ratios by Goal</h2><ul><li><strong>Weight Loss:</strong> 35% protein, 35% carbs, 30% fat</li><li><strong>Maintenance:</strong> 30% protein, 45% carbs, 25% fat</li><li><strong>Muscle Gain:</strong> 30% protein, 40% carbs, 30% fat</li></ul><h2>Protein: The Building Block</h2><p>Aim for 1.6\u20132.2g per kg body weight for muscle building. Best sources: chicken breast, eggs, paneer, dal, whey protein, Greek yogurt. Protein has the highest thermic effect \u2014 25\u201330% of protein calories are burned during digestion.</p><h2>Carbs: Your Energy Source</h2><p>Not all carbs are equal. Prioritise complex carbs (oats, brown rice, sweet potato, whole wheat) over simple sugars. Time carbs around workouts for energy and recovery.</p><h2>Healthy Fats</h2><p>Essential for hormone production and vitamin absorption. Good sources: nuts, seeds, avocado, olive oil, ghee, fatty fish. Avoid trans fats found in processed foods.</p><h2>Indian Diet Macro Tips</h2><p>Typical Indian diet is carb-heavy (60\u201370%). Add protein at every meal: dal, paneer, eggs, chicken, yogurt. Use protein supplements if needed. Don\'t fear ghee and coconut oil \u2014 they\'re healthy fats in moderation.</p>',cta:{text:'Calculate your macros',calc:'macros',cat:'health'}},
    'percentage-guide': {title:'Percentage Calculator: Tricks, Formulas & Examples',meta:{date:'Jan 2026',readTime:'4 min',author:'Calc Labz Team'},body:'<h2>What is Percentage?</h2><p>Percentage means "per hundred." It expresses a number as a fraction of 100. Formula: Percentage = (Part / Whole) \xd7 100. Example: 25 out of 200 = (25/200) \xd7 100 = 12.5%</p><h2>Common Percentage Formulas</h2><ul><li><strong>X% of Y:</strong> Y \xd7 X / 100</li><li><strong>Percentage Change:</strong> (New \u2013 Old) / Old \xd7 100</li><li><strong>Percentage Increase:</strong> Value \xd7 (1 + X/100)</li><li><strong>Percentage Decrease:</strong> Value \xd7 (1 \u2013 X/100)</li><li><strong>Reverse Percentage:</strong> Final / (1 + X/100)</li></ul><h2>Quick Mental Math Tricks</h2><ul><li>10% of anything: move decimal point left once</li><li>5% = half of 10%</li><li>15% = 10% + 5%</li><li>20% = 10% \xd7 2, or divide by 5</li><li>25% = divide by 4</li></ul><h2>Percentage in Daily Life</h2><p>Discounts (30% off \u20b92,000 = \u20b91,400), tax calculations (18% GST), exam scores (85/100 = 85%), interest rates (FD at 7%), salary hikes (10% raise), and more. Understanding percentages is essential for financial literacy.</p><h2>Common Mistakes to Avoid</h2><ul><li>Confusing percentage points with percentages (8% to 10% is a 2 percentage point increase, but 25% increase)</li><li>Successive percentages don\'t simply add (10% + 10% \u2260 20%; it\'s 21%)</li><li>Percentage decrease then same increase doesn\'t return to original</li></ul>',cta:{text:'Calculate percentages',calc:'percentage',cat:'math'}},
    'age-guide': {title:'Age Calculator: Exact Age in Years, Months & Days',meta:{date:'Mar 2026',readTime:'3 min',author:'Calc Labz Team'},body:'<h2>How Exact Age is Calculated</h2><p>Age calculation considers year, month, and day differences from your date of birth to today. It accounts for varying month lengths and leap years for precision.</p><h2>Why Exact Age Matters</h2><ul><li><strong>Government Documents:</strong> Passport, Aadhaar, voter ID require exact DOB</li><li><strong>School Admission:</strong> Age cutoff dates vary by state and board</li><li><strong>Job Applications:</strong> Upper age limits for government exams (UPSC, SSC, Banking)</li><li><strong>Insurance & Retirement:</strong> Premium calculations depend on exact age</li><li><strong>Legal:</strong> Voting age (18), driving age (18), drinking age (21/25 by state)</li></ul><h2>Leap Year Handling</h2><p>Born on Feb 29? Your age calculator should handle this correctly. In non-leap years, Feb 29 birthdays are typically counted as Mar 1 for age purposes.</p><h2>Fun Age Facts</h2><ul><li>You\'ve lived through ~365.25 days per year (accounting for leap years)</li><li>10,000 days old \u2248 27 years, 4 months</li><li>1 billion seconds old \u2248 31 years, 8 months</li><li>Your heart has beaten ~2.5 billion times by age 70</li></ul><h2>Birthday Countdown</h2><p>Our age calculator also shows exactly how many days until your next birthday. Plan that party in advance!</p>',cta:{text:'Calculate your exact age',calc:'age',cat:'health'}}
};

// ═══════════════════════════════════════════════════
// CALCULATOR DATABASE
// ═══════════════════════════════════════════════════

const DB = {
percentage: {
        name:"Percentage Calculator", desc:"X% of a number, percentage change & more",
        icon:"fa-percent", cat:"math",
        inputs:[
            {id:"val",label:"Value",default:200},
            {id:"pct",label:"Percentage",default:25,suffix:"%"}
        ],
        calc: null,  // lazy-loaded
        tips:["To find what % A is of B: (A/B)×100","% change = (New−Old)/Old × 100"]
    },

ratio: {
        name:"Ratio Calculator", desc:"Simplify ratios and find proportional values",
        icon:"fa-equals", cat:"math",
        inputs:[
            {id:"a",label:"First Value (A)",default:12},
            {id:"b",label:"Second Value (B)",default:18}
        ],
        calc: null  // lazy-loaded
    },

squareroot: {
        name:"Square Root Calculator", desc:"Square root, cube root & nth root",
        icon:"fa-square-root-variable", cat:"math",
        inputs:[
            {id:"n",label:"Number",default:144},
            {id:"root",label:"Root (nth)",default:2}
        ],
        calc: null  // lazy-loaded
    },

logarithm: {
        name:"Logarithm Calculator", desc:"Natural log, log base 10 and custom base",
        icon:"fa-wave-square", cat:"math",
        inputs:[
            {id:"n",label:"Number",default:100},
            {id:"base",label:"Log Base",default:10}
        ],
        calc: null  // lazy-loaded
    },

factorial: {
        name:"Factorial Calculator", desc:"n! Factorial, permutations & combinations",
        icon:"fa-exclamation", cat:"math",
        inputs:[
            {id:"n",label:"n (max 20)",default:10},
            {id:"r",label:"r (for nPr, nCr)",default:3}
        ],
        calc: null  // lazy-loaded
    },

quadratic: {
        name:"Quadratic Equation", desc:"Solve ax² + bx + c = 0",
        icon:"fa-superscript", cat:"math",
        inputs:[
            {id:"a",label:"a (coefficient of x²)",default:1},
            {id:"b",label:"b (coefficient of x)",default:-5},
            {id:"c",label:"c (constant)",default:6}
        ],
        calc: null  // lazy-loaded
    },

prime: {
        name:"Prime Number Checker", desc:"Check if a number is prime & find factors",
        icon:"fa-hashtag", cat:"math",
        inputs:[{id:"n",label:"Number to Check",default:97}],
        calc: null  // lazy-loaded
    },

numbersystem: {
        name:"Number Base Converter", desc:"Binary, Octal, Decimal, Hex conversions",
        icon:"fa-code", cat:"math",
        inputs:[
            {id:"dec",label:"Decimal Number",default:255},
            {id:"customBase",label:"Custom Base (2–36)",default:16}
        ],
        calc: null  // lazy-loaded
    },

average: {
        name:"Average / Mean Calculator", desc:"Mean, median, mode, range, variance",
        icon:"fa-chart-simple", cat:"math",
        inputs:[{id:"nums",label:"Numbers (comma-separated)",default:"4,8,15,16,23,42",type:"text"}],
        calc: null  // lazy-loaded
    },

statistics: {
        name:"Statistics Calculator", desc:"Variance, std dev, skewness from a dataset",
        icon:"fa-chart-column", cat:"math",
        inputs:[{id:"data",label:"Numbers (comma-separated)",default:"10,20,30,40,50,60,70",type:"text"}],
        calc: null  // lazy-loaded
    },

matrix2x2: {
        name:"2×2 Matrix Calculator", desc:"Determinant, inverse, trace of a 2×2 matrix",
        icon:"fa-table-cells", cat:"math",
        inputs:[
            {id:"a",label:"a (row1,col1)",default:1},
            {id:"b",label:"b (row1,col2)",default:2},
            {id:"c",label:"c (row2,col1)",default:3},
            {id:"d",label:"d (row2,col2)",default:4}
        ],
        calc: null  // lazy-loaded
    },

combinations: {
        name:"Probability Calculator", desc:"nCr, nPr, and event probability",
        icon:"fa-dice", cat:"math",
        inputs:[
            {id:"n",label:"Total outcomes (n)",default:52},
            {id:"r",label:"Choose (r)",default:5},
            {id:"favorable",label:"Favorable outcomes",default:4}
        ],
        calc: null  // lazy-loaded
    },

lcmgcd: {
        name:"LCM & GCD Calculator", desc:"Least Common Multiple & Greatest Common Divisor",
        icon:"fa-divide", cat:"math",
        inputs:[
            {id:"a",label:"First Number",default:12},
            {id:"b",label:"Second Number",default:18},
            {id:"c",label:"Third Number (optional, 0 to skip)",default:0}
        ],
        calc: null  // lazy-loaded
    },

romanNumeral: {
        name:"Roman Numeral Converter", desc:"Convert between Arabic and Roman numerals",
        icon:"fa-i-cursor", cat:"math",
        inputs:[{id:"num",label:"Arabic Number (1–3999)",default:2024}],
        calc: null  // lazy-loaded
    },

triangleArea: {
        name:"Triangle Calculator", desc:"Area, perimeter, angles — all triangle types",
        icon:"fa-draw-polygon", cat:"math",
        inputs:[
            {id:"a",label:"Side A",default:3},
            {id:"b",label:"Side B",default:4},
            {id:"c",label:"Side C",default:5}
        ],
        calc: null  // lazy-loaded
    },

scientific: {
        name:"Scientific Calculator", desc:"Trigonometry, logarithms, powers and more",
        icon:"fa-calculator", cat:"math",
        inputs:[
            {id:"expr",label:"Value / Angle",default:45,type:"text"},
            {id:"unit",label:"Angle Unit",type:"select",options:["Degrees","Radians"]}
        ],
        calc: null  // lazy-loaded
    },

fraction: {
        name:"Fraction Calculator", desc:"Add, subtract, multiply and divide fractions with simplification",
        icon:"fa-divide", cat:"math",
        inputs:[
            {id:"n1",label:"Numerator 1",default:3},
            {id:"d1",label:"Denominator 1",default:4},
            {id:"op",label:"Operation",type:"select",options:["Add (+)","Subtract (−)","Multiply (×)","Divide (÷)"]},
            {id:"n2",label:"Numerator 2",default:2},
            {id:"d2",label:"Denominator 2",default:5}
        ],
        calc: null  // lazy-loaded
    },

stddev: {
        name:"Standard Deviation Calculator", desc:"Mean, variance, standard deviation from raw data",
        icon:"fa-chart-bar", cat:"math",
        inputs:[{id:"data",label:"Enter Numbers (comma separated)",default:"10,20,30,40,50",type:"text"}],
        calc: null  // lazy-loaded
    },

lineareq: {
        name:"Linear Equation Solver", desc:"Solve ax + b = c for any single variable",
        icon:"fa-equals", cat:"math",
        inputs:[
            {id:"a_eq",label:"Coefficient a (of x)",default:3},
            {id:"b_eq",label:"Constant b",default:7},
            {id:"c_eq",label:"Right-hand side c",default:22}
        ],
        calc: null  // lazy-loaded
    },

circleCalc: {
        name:"Circle & Sphere Calculator", desc:"Area, circumference, arc length, sphere volume",
        icon:"fa-circle", cat:"math",
        inputs:[
            {id:"radius",label:"Radius",default:7,suffix:"units"},
            {id:"angle",label:"Arc Angle",default:90,suffix:"°"}
        ],
        calc: null  // lazy-loaded
    },

determinant: {
        name:"Matrix Determinant (3×3)", desc:"Calculate determinant of a 3×3 matrix",
        icon:"fa-table-cells", cat:"math",
        inputs:[
            {id:"a11",label:"Row 1, Col 1",default:1},{id:"a12",label:"Row 1, Col 2",default:2},{id:"a13",label:"Row 1, Col 3",default:3},
            {id:"a21",label:"Row 2, Col 1",default:4},{id:"a22",label:"Row 2, Col 2",default:5},{id:"a23",label:"Row 2, Col 3",default:6},
            {id:"a31",label:"Row 3, Col 1",default:7},{id:"a32",label:"Row 3, Col 2",default:8},{id:"a33",label:"Row 3, Col 3",default:0}
        ],
        calc: null  // lazy-loaded
    },

complexnum: {
        name:"Complex Number Calculator", desc:"Add, subtract, multiply, divide complex numbers (a + bi)",
        icon:"fa-infinity", cat:"math",
        inputs:[
            {id:"a1",label:"Real part (a₁)",default:3},
            {id:"b1",label:"Imaginary part (b₁)",default:4},
            {id:"op_c",label:"Operation",type:"select",options:["Add (+)","Subtract (−)","Multiply (×)","Divide (÷)"]},
            {id:"a2",label:"Real part (a₂)",default:1},
            {id:"b2",label:"Imaginary part (b₂)",default:2}
        ],
        calc: null  // lazy-loaded
    },

emi: {
        name:"Loan EMI Calculator", desc:"Monthly EMI, total interest & payment breakdown",
        icon:"fa-building-columns", cat:"finance", badge:"Popular",
        inputs:[
            {id:"principal",label:"Loan Amount",default:1000000,prefix:"₹"},
            {id:"rate",label:"Interest Rate",default:8.5,suffix:"% p.a."},
            {id:"tenure",label:"Tenure (months)",default:60}
        ],
        calc: null,  // lazy-loaded
        tips:["Lower tenure = less interest","Prepayment reduces principal directly"]
    },

sip: {
        name:"SIP Calculator", desc:"Systematic Investment Plan future value",
        icon:"fa-seedling", cat:"finance", badge:"Popular",
        inputs:[
            {id:"monthly",label:"Monthly Investment",default:5000,prefix:"₹"},
            {id:"return",label:"Expected Return",default:12,suffix:"% p.a."},
            {id:"years",label:"Period",default:10,suffix:"years"}
        ],
        calc: null  // lazy-loaded
    },

gst: {
        name:"GST Calculator", desc:"Add GST to net price — CGST, SGST & IGST split",
        icon:"fa-file-invoice", cat:"finance", badge:"Popular",
        inputs:[
            {id:"net",label:"Net Amount (Pre-GST)",default:1000,prefix:"₹"},
            {id:"rate",label:"GST Rate",type:"select",options:["3%","5%","12%","18%","28%"]}
        ],
        calc: null,  // lazy-loaded
        tips:["CGST + SGST = for intra-state transactions","IGST = for inter-state transactions"]
    },

pregst: {
        name:"Pre-GST / Reverse GST", desc:"Extract original price from GST-inclusive MRP",
        icon:"fa-file-invoice-dollar", cat:"finance",
        inputs:[
            {id:"gross",label:"GST-Inclusive Amount (MRP)",default:1180,prefix:"₹"},
            {id:"rate",label:"GST Rate",type:"select",options:["3%","5%","12%","18%","28%"]}
        ],
        calc: null,  // lazy-loaded
        tips:[
            "Formula: Pre-GST = Price x 100 / (100 + GST%)",
            "Use when you know the MRP and want the base price",
            "Also called reverse GST or GST extraction"
        ]
    },

compoundinterest: {
        name:"Compound Interest", desc:"A = P(1 + r/n)^nt with full breakdown",
        icon:"fa-chart-line", cat:"finance",
        inputs:[
            {id:"principal",label:"Principal",default:100000,prefix:"₹"},
            {id:"rate",label:"Interest Rate",default:8,suffix:"%"},
            {id:"time",label:"Time Period",default:5,suffix:"years"},
            {id:"compound",label:"Compounding",type:"select",options:["Annually","Semi-annually","Quarterly","Monthly","Daily"]}
        ],
        calc: null  // lazy-loaded
    },

simpleinterest: {
        name:"Simple Interest", desc:"SI = PRT/100",
        icon:"fa-coins", cat:"finance",
        inputs:[
            {id:"principal",label:"Principal",default:100000,prefix:"₹"},
            {id:"rate",label:"Rate",default:6,suffix:"%"},
            {id:"time",label:"Time",default:2,suffix:"years"}
        ],
        calc: null  // lazy-loaded
    },

incomeTax: {
        name:"Income Tax Calculator", desc:"New regime FY 2025-26 (India)",
        icon:"fa-landmark", cat:"finance",
        inputs:[
            {id:"income",label:"Annual Income",default:1200000,prefix:"₹"},
            {id:"regime",label:"Tax Regime",type:"select",options:["New Regime","Old Regime"]},
            {id:"age",label:"Age Group",type:"select",options:["Below 60","60-80 years","Above 80"]}
        ],
        calc: null  // lazy-loaded
    },

roi: {
        name:"ROI Calculator", desc:"Return on Investment & CAGR",
        icon:"fa-arrow-trend-up", cat:"finance",
        inputs:[
            {id:"initial",label:"Initial Investment",default:50000,prefix:"₹"},
            {id:"final",label:"Current Value",default:75000,prefix:"₹"},
            {id:"years",label:"Period",default:2,suffix:"years"}
        ],
        calc: null  // lazy-loaded
    },

ppf: {
        name:"PPF Calculator", desc:"Public Provident Fund maturity",
        icon:"fa-piggy-bank", cat:"finance",
        inputs:[
            {id:"contribution",label:"Monthly Contribution",default:5000,prefix:"₹"},
            {id:"years",label:"Period",default:15,suffix:"years"},
            {id:"rate",label:"Rate",default:7.1,suffix:"%"}
        ],
        calc: null  // lazy-loaded
    },

fd: {
        name:"Fixed Deposit Calculator", desc:"FD maturity with quarterly compounding",
        icon:"fa-vault", cat:"finance",
        inputs:[
            {id:"principal",label:"Principal",default:100000,prefix:"₹"},
            {id:"rate",label:"Rate",default:6.5,suffix:"%"},
            {id:"years",label:"Period",default:5,suffix:"years"}
        ],
        calc: null  // lazy-loaded
    },

mortgage: {
        name:"Mortgage Calculator", desc:"Home loan monthly payment & amortization",
        icon:"fa-house", cat:"finance",
        inputs:[
            {id:"amount",label:"Loan Amount",default:2500000,prefix:"₹"},
            {id:"rate",label:"Interest Rate",default:8.5,suffix:"%"},
            {id:"term",label:"Term",default:20,suffix:"years"}
        ],
        calc: null  // lazy-loaded
    },

carloan: {
        name:"Car Loan EMI", desc:"Vehicle loan monthly instalment",
        icon:"fa-car", cat:"finance",
        inputs:[
            {id:"amount",label:"Loan Amount",default:800000,prefix:"₹"},
            {id:"rate",label:"Rate",default:9,suffix:"%"},
            {id:"tenure",label:"Tenure",default:5,suffix:"years"}
        ],
        calc: null  // lazy-loaded
    },

breakeven: {
        name:"Break-Even Calculator", desc:"Units & revenue needed to break even",
        icon:"fa-scale-balanced", cat:"finance",
        inputs:[
            {id:"fixed",label:"Fixed Costs",default:100000,prefix:"₹"},
            {id:"price",label:"Selling Price/Unit",default:500,prefix:"₹"},
            {id:"variable",label:"Variable Cost/Unit",default:300,prefix:"₹"}
        ],
        calc: null  // lazy-loaded
    },

inflation: {
        name:"Inflation Calculator", desc:"Future value with inflation erosion",
        icon:"fa-fire-flame-curved", cat:"finance",
        inputs:[
            {id:"amount",label:"Current Amount",default:100000,prefix:"₹"},
            {id:"rate",label:"Inflation Rate",default:6,suffix:"%"},
            {id:"years",label:"Years",default:10}
        ],
        calc: null  // lazy-loaded
    },

swp: {
        name:"SWP Calculator", desc:"Systematic Withdrawal Plan — monthly income from corpus",
        icon:"fa-money-bill-transfer", cat:"finance",
        inputs:[
            {id:"corpus",label:"Total Corpus",default:5000000,prefix:"₹"},
            {id:"withdrawal",label:"Monthly Withdrawal",default:25000,prefix:"₹"},
            {id:"return",label:"Expected Return",default:8,suffix:"% p.a."}
        ],
        calc: null  // lazy-loaded
    },

lumpsum: {
        name:"Lumpsum Investment", desc:"One-time investment future value with returns",
        icon:"fa-sack-dollar", cat:"finance",
        inputs:[
            {id:"amount",label:"Investment Amount",default:100000,prefix:"₹"},
            {id:"return",label:"Expected Return",default:12,suffix:"% p.a."},
            {id:"years",label:"Period",default:10,suffix:"years"}
        ],
        calc: null  // lazy-loaded
    },

nps: {
        name:"NPS Calculator", desc:"National Pension Scheme corpus & pension estimate",
        icon:"fa-user-shield", cat:"finance",
        inputs:[
            {id:"monthly",label:"Monthly Contribution",default:5000,prefix:"₹"},
            {id:"currentAge",label:"Current Age",default:30,suffix:"years"},
            {id:"retireAge",label:"Retirement Age",default:60,suffix:"years"},
            {id:"return",label:"Expected Return",default:10,suffix:"% p.a."}
        ],
        calc: null  // lazy-loaded
    },

gratuity: {
        name:"Gratuity Calculator", desc:"Employee gratuity as per Indian law",
        icon:"fa-handshake", cat:"finance",
        inputs:[
            {id:"salary",label:"Last Drawn Basic Salary",default:50000,prefix:"₹"},
            {id:"years",label:"Years of Service",default:10}
        ],
        calc: null  // lazy-loaded
    },

hra: {
        name:"HRA Exemption Calculator", desc:"House Rent Allowance tax exemption — Section 10(13A)",
        icon:"fa-house-chimney", cat:"finance", badge:"Popular",
        inputs:[
            {id:"basic",label:"Basic Salary",default:50000,prefix:"₹",suffix:"/mo"},
            {id:"hra",label:"HRA Received",default:20000,prefix:"₹",suffix:"/mo"},
            {id:"rent",label:"Actual Rent Paid",default:18000,prefix:"₹",suffix:"/mo"},
            {id:"metro",label:"Metro City?",type:"select",options:["Yes (Mumbai/Delhi/Kolkata/Chennai)","No (Other cities)"]}
        ],
        calc: null  // lazy-loaded
    },

cagr: {
        name:"CAGR Calculator", desc:"Compound Annual Growth Rate — investments, revenue, portfolio",
        icon:"fa-chart-line", cat:"finance", badge:"Popular",
        inputs:[
            {id:"begin",label:"Initial Value",default:100000,prefix:"₹"},
            {id:"end",label:"Final Value",default:250000,prefix:"₹"},
            {id:"yrs",label:"Number of Years",default:5,suffix:"years"}
        ],
        calc: null,  // lazy-loaded
        tips:["CAGR smooths year-on-year volatility","Use it to compare different investments fairly"]
    },

creditcard: {
        name:"Credit Card Interest Calculator", desc:"True cost of minimum payments and revolving credit",
        icon:"fa-credit-card", cat:"finance",
        inputs:[
            {id:"balance",label:"Outstanding Balance",default:50000,prefix:"₹"},
            {id:"apr",label:"Annual Interest Rate",default:36,suffix:"% p.a."},
            {id:"minPct",label:"Minimum Payment %",default:5,suffix:"%"},
            {id:"extra",label:"Extra Monthly Payment",default:0,prefix:"₹"}
        ],
        calc: null,  // lazy-loaded
        tips:["Always pay more than the minimum","Even ₹500 extra saves thousands in interest"]
    },

networth: {
        name:"Net Worth Calculator", desc:"Total assets minus liabilities",
        icon:"fa-scale-unbalanced-flip", cat:"finance",
        inputs:[
            {id:"cash",label:"Cash & Savings",default:200000,prefix:"₹"},
            {id:"investments",label:"Investments & Stocks",default:500000,prefix:"₹"},
            {id:"property",label:"Real Estate Value",default:3000000,prefix:"₹"},
            {id:"loans",label:"Total Loans & Debt",default:1500000,prefix:"₹"},
            {id:"other",label:"Other Assets",default:100000,prefix:"₹"}
        ],
        calc: null  // lazy-loaded
    },

tds: {
        name:"TDS Calculator", desc:"Tax Deducted at Source on salary & payments",
        icon:"fa-percent", cat:"finance",
        inputs:[
            {id:"amount",label:"Payment Amount",default:100000,prefix:"₹"},
            {id:"type",label:"Payment Type",type:"select",options:["Salary","Interest (194A)","Commission (194H)","Rent (194I)","Professional (194J)","Contractor (194C)"]},
        ],
        calc: null,  // lazy-loaded
        tips:["PAN not furnished → TDS at 20%","TDS is deposited by 7th of the following month"]
    },

epf: {
        name:"EPF / PF Calculator", desc:"Employee & Employer PF contribution & corpus",
        icon:"fa-briefcase", cat:"finance",
        inputs:[
            {id:"basic",label:"Basic Salary",default:30000,prefix:"₹"},
            {id:"years",label:"Years of Service",default:20},
            {id:"rate",label:"EPF Interest Rate",default:8.25,suffix:"%"}
        ],
        calc: null  // lazy-loaded
    },

profitloss: {
        name:"Profit & Loss Calculator", desc:"Profit, loss, margin and markup percentage",
        icon:"fa-arrow-trend-up", cat:"finance",
        inputs:[
            {id:"cost",label:"Cost Price",default:500,prefix:"₹"},
            {id:"sell",label:"Selling Price",default:750,prefix:"₹"}
        ],
        calc: null  // lazy-loaded
    },

stockreturn: {
        name:"Stock Return Calculator", desc:"Shares P&L with brokerage & taxes (India)",
        icon:"fa-chart-line", cat:"finance",
        inputs:[
            {id:"buyPrice",label:"Buy Price per Share",default:500,prefix:"₹"},
            {id:"sellPrice",label:"Sell Price per Share",default:650,prefix:"₹"},
            {id:"qty",label:"Quantity of Shares",default:100},
            {id:"brokerage",label:"Brokerage per Trade",default:20,prefix:"₹"}
        ],
        calc: null  // lazy-loaded
    },

mutualfundreturns: {
        name:"Mutual Fund Returns (XIRR)", desc:"Estimate fund return from NAV change",
        icon:"fa-arrow-up-right-dots", cat:"finance",
        inputs:[
            {id:"buyNav",label:"Buy NAV",default:50,prefix:"₹"},
            {id:"sellNav",label:"Current NAV",default:90,prefix:"₹"},
            {id:"units",label:"Units Held",default:1000},
            {id:"years",label:"Holding Period",default:5,suffix:"years"}
        ],
        calc: null  // lazy-loaded
    },

taxregime: {
        name:"Old vs New Tax Regime", desc:"Compare tax liability under both regimes for FY 2025-26",
        icon:"fa-scale-balanced", cat:"finance", badge:"New",
        inputs:[
            {id:"income",label:"Gross Annual Income",default:1000000,prefix:"₹"},
            {id:"hra_ex",label:"HRA Exemption",default:120000,prefix:"₹"},
            {id:"sec80c",label:"80C Investments (max ₹1.5L)",default:150000,prefix:"₹"},
            {id:"nps",label:"NPS (80CCD(1B), max ₹50K)",default:50000,prefix:"₹"},
            {id:"med",label:"Medical Insurance 80D",default:25000,prefix:"₹"},
            {id:"hloan",label:"Home Loan Interest (24B)",default:200000,prefix:"₹"}
        ],
        calc: null  // lazy-loaded
    },

capitalgains: {
        name:"Capital Gains Tax Calculator", desc:"STCG & LTCG on stocks, mutual funds, property (India)",
        icon:"fa-hand-holding-dollar", cat:"finance",
        inputs:[
            {id:"buyPrice",label:"Purchase Price",default:100000,prefix:"₹"},
            {id:"sellPrice",label:"Selling Price",default:180000,prefix:"₹"},
            {id:"holdMonths",label:"Holding Period",default:18,suffix:"months"},
            {id:"assetType",label:"Asset Type",type:"select",options:["Equity/Mutual Fund","Property/Debt/Gold"]}
        ],
        calc: null  // lazy-loaded
    },

prepayment: {
        name:"Home Loan Prepayment Savings", desc:"Interest saved and tenure reduced by lump-sum prepayment",
        icon:"fa-house-circle-check", cat:"finance",
        inputs:[
            {id:"outstanding",label:"Outstanding Principal",default:3000000,prefix:"₹"},
            {id:"rate",label:"Interest Rate",default:8.5,suffix:"% p.a."},
            {id:"rem",label:"Remaining Tenure",default:240,suffix:"months"},
            {id:"lump",label:"Prepayment Amount",default:500000,prefix:"₹"}
        ],
        calc: null  // lazy-loaded
    },

stepupsip: {
        name:"Step-Up SIP Calculator", desc:"SIP with annual increment — see accelerated wealth creation",
        icon:"fa-stairs", cat:"finance",
        inputs:[
            {id:"monthly",label:"Initial Monthly SIP",default:5000,prefix:"₹"},
            {id:"stepup",label:"Annual Step-Up %",default:10,suffix:"% p.a."},
            {id:"ret",label:"Expected Return",default:12,suffix:"% p.a."},
            {id:"years",label:"Investment Period",default:15,suffix:"years"}
        ],
        calc: null  // lazy-loaded
    },

savingsgoal: {
        name:"Savings Goal Planner", desc:"How much to save monthly to reach your target amount",
        icon:"fa-bullseye", cat:"finance",
        inputs:[
            {id:"goal",label:"Target Amount",default:1000000,prefix:"₹"},
            {id:"current",label:"Current Savings",default:50000,prefix:"₹"},
            {id:"ret",label:"Expected Return",default:8,suffix:"% p.a."},
            {id:"years",label:"Time to Goal",default:5,suffix:"years"}
        ],
        calc: null  // lazy-loaded
    },

dividendyield: {
        name:"Dividend Yield Calculator", desc:"Annual dividend yield, payout ratio and income from shares",
        icon:"fa-coins", cat:"finance",
        inputs:[
            {id:"price",label:"Stock Price",default:500,prefix:"₹"},
            {id:"dividend",label:"Annual Dividend per Share",default:15,prefix:"₹"},
            {id:"shares",label:"Number of Shares",default:100},
            {id:"eps",label:"EPS (for payout ratio)",default:40,prefix:"₹"}
        ],
        calc: null  // lazy-loaded
    },

goldinvestment: {
        name:"Gold Investment Calculator", desc:"Gold purchase value, returns and SIP in gold",
        icon:"fa-trophy", cat:"finance",
        inputs:[
            {id:"grams",label:"Gold Quantity",default:10,suffix:"grams"},
            {id:"buyRate",label:"Buy Price per 10g",default:85000,prefix:"₹"},
            {id:"currentRate",label:"Current Price per 10g",default:95000,prefix:"₹"},
            {id:"making",label:"Making Charges",default:5,suffix:"%"}
        ],
        calc: null  // lazy-loaded
    },

rd: {
        name:"RD Calculator", desc:"Recurring Deposit maturity value and interest earned",
        icon:"fa-piggy-bank", cat:"finance", badge:"Popular",
        inputs:[
            {id:"monthly_rd",label:"Monthly Deposit",default:5000,prefix:"₹"},
            {id:"rate_rd",label:"Interest Rate",default:6.5,suffix:"% p.a."},
            {id:"tenure_rd",label:"Tenure",default:24,suffix:"months"}
        ],
        calc: null,  // lazy-loaded
        tips:["RD interest is compounded quarterly in India","Tax is deducted at source if interest exceeds ₹40,000/year"]
    },

xirr: {
        name:"XIRR Calculator", desc:"Extended IRR for irregular cash flows — SIPs, lump sums",
        icon:"fa-chart-line", cat:"finance",
        inputs:[
            {id:"invested",label:"Total Amount Invested",default:120000,prefix:"₹"},
            {id:"currentVal",label:"Current Portfolio Value",default:185000,prefix:"₹"},
            {id:"months_x",label:"Investment Duration",default:36,suffix:"months"}
        ],
        calc: null,  // lazy-loaded
        tips:["XIRR >12% is considered good for equity mutual funds","Compare XIRR, not absolute returns, across different investments"]
    },

loaneligibility: {
        name:"Loan Eligibility Calculator", desc:"Maximum loan amount based on your income and obligations",
        icon:"fa-hand-holding-dollar", cat:"finance",
        inputs:[
            {id:"income_le",label:"Monthly Net Income",default:80000,prefix:"₹"},
            {id:"existing_emi",label:"Existing Monthly EMIs",default:10000,prefix:"₹"},
            {id:"rate_le",label:"Expected Interest Rate",default:8.5,suffix:"% p.a."},
            {id:"tenure_le",label:"Loan Tenure",default:240,suffix:"months"}
        ],
        calc: null,  // lazy-loaded
        tips:["Most banks cap total EMIs at 50-60% of net income","Higher credit score can get you a higher eligible amount"]
    },

balancetransfer: {
        name:"Home Loan Balance Transfer", desc:"Interest saved by transferring your loan to a lower rate",
        icon:"fa-right-left", cat:"finance",
        inputs:[
            {id:"outstanding_bt",label:"Outstanding Principal",default:3000000,prefix:"₹"},
            {id:"currentRate",label:"Current Interest Rate",default:9.5,suffix:"% p.a."},
            {id:"newRate",label:"New Bank Rate",default:8.5,suffix:"% p.a."},
            {id:"remaining_bt",label:"Remaining Tenure",default:180,suffix:"months"},
            {id:"processingFee",label:"Processing Fee",default:15000,prefix:"₹"}
        ],
        calc: null  // lazy-loaded
    },

ssy: {
        name:"Sukanya Samriddhi Yojana (SSY)", desc:"SSY maturity amount for girl child savings scheme",
        icon:"fa-child", cat:"finance",
        inputs:[
            {id:"annual_ssy",label:"Annual Deposit",default:50000,prefix:"₹"},
            {id:"girlAge",label:"Girl Child's Current Age",default:5,suffix:"years"},
            {id:"rate_ssy",label:"Interest Rate",default:8.2,suffix:"% p.a."}
        ],
        calc: null,  // lazy-loaded
        tips:["Maximum annual deposit: ₹1.5 lakh","Account matures when girl turns 21 or on marriage after 18"]
    },

scss: {
        name:"SCSS Calculator", desc:"Senior Citizens Savings Scheme quarterly interest and maturity",
        icon:"fa-user-tie", cat:"finance",
        inputs:[
            {id:"principal_scss",label:"Deposit Amount (max ₹30L)",default:1000000,prefix:"₹"},
            {id:"rate_scss",label:"Interest Rate",default:8.2,suffix:"% p.a."}
        ],
        calc: null,  // lazy-loaded
        tips:["Eligible for those aged 60+ (55+ for VRS retirees)","Deposits qualify for 80C deduction up to ₹1.5L"]
    },

advancetax: {
        name:"Advance Tax Calculator", desc:"Quarterly advance tax installment schedule for FY 2025-26",
        icon:"fa-calendar-check", cat:"finance",
        inputs:[
            {id:"income",label:"Total Annual Income",default:1500000,prefix:"₹"},
            {id:"tds",label:"TDS Already Deducted",default:80000,prefix:"₹"},
            {id:"regime",label:"Tax Regime",type:"select",options:["New Regime","Old Regime"]},
            {id:"sec80c",label:"80C Deductions (Old only)",default:150000,prefix:"₹"}
        ],
        calc: null,  // lazy-loaded
        tips:["Advance tax applies if total tax liability exceeds ₹10,000","Salaried employees with only salary income usually don't need advance tax — TDS covers it","Interest u/s 234C applies for late/short payment"]
    },

inhandsalary: {
        name:"In-Hand Salary Calculator", desc:"Take-home pay after PF, tax & deductions",
        icon:"fa-hand-holding-dollar", cat:"finance", badge:"Popular",
        inputs:[
            {id:"ctc",label:"Monthly CTC / Gross",default:100000,prefix:"₹"},
            {id:"basic_pct",label:"Basic Salary %",default:40,suffix:"%"},
            {id:"hra_pct",label:"HRA %",default:50,suffix:"% of Basic"},
            {id:"pf_pct",label:"PF Contribution %",default:12,suffix:"% of Basic"},
            {id:"ptax",label:"Professional Tax",default:200,prefix:"₹"},
            {id:"other_ded",label:"Other Deductions",default:0,prefix:"₹"}
        ],
        calc: null,  // lazy-loaded
        tips:["Basic salary is typically 40-50% of CTC","Higher basic = more PF savings but lower take-home","Professional tax varies by state (₹150-₹300/month)"]
    },

ctcbreakup: {
        name:"CTC to In-Hand Breakdown", desc:"Full CTC structure with all components decoded",
        icon:"fa-receipt", cat:"finance",
        inputs:[
            {id:"annual_ctc",label:"Annual CTC",default:1200000,prefix:"₹"},
            {id:"basic_pct",label:"Basic %",default:40,suffix:"% of CTC"},
            {id:"hra_pct",label:"HRA %",default:50,suffix:"% of Basic"},
            {id:"bonus_pct",label:"Variable/Bonus %",default:10,suffix:"% of CTC"},
            {id:"gratuity_inc",label:"Gratuity included?",type:"select",options:["Yes","No"]},
            {id:"insurance",label:"Medical Insurance (Employer)",default:5000,prefix:"₹",suffix:"/yr"}
        ],
        calc: null,  // lazy-loaded
        tips:["CTC includes employer PF, gratuity, insurance — these don't come to your bank","Actual in-hand depends on income tax slab — this is a pre-tax estimate","Bonus/variable is typically paid quarterly or annually"]
    },

salarycomparison: {
        name:"Salary Comparison", desc:"Compare old vs new job offer — CTC, in-hand & growth",
        icon:"fa-code-compare", cat:"finance",
        inputs:[
            {id:"old_ctc",label:"Current CTC (Annual)",default:1000000,prefix:"₹"},
            {id:"new_ctc",label:"New Offer CTC (Annual)",default:1400000,prefix:"₹"},
            {id:"old_bonus",label:"Current Bonus %",default:10,suffix:"%"},
            {id:"new_bonus",label:"New Bonus %",default:15,suffix:"%"},
            {id:"old_pf",label:"Current PF (Employer Annual)",default:21600,prefix:"₹"},
            {id:"new_pf",label:"New PF (Employer Annual)",default:21600,prefix:"₹"},
            {id:"relocation",label:"Relocation/Joining Bonus",default:0,prefix:"₹"}
        ],
        calc: null,  // lazy-loaded
        tips:["Don't just compare CTC — compare fixed monthly pay","Higher variable/bonus % means less guaranteed pay","Factor in commute cost, work-life balance, and growth"]
    },

goalsip: {
        name:"Goal-Based SIP Calculator", desc:"Monthly SIP needed to reach your financial goal",
        icon:"fa-bullseye", cat:"finance",
        inputs:[
            {id:"goal",label:"Target Amount",default:5000000,prefix:"₹"},
            {id:"years",label:"Time Horizon",default:10,suffix:"years"},
            {id:"rate",label:"Expected Return",default:12,suffix:"% p.a."},
            {id:"existing",label:"Existing Corpus",default:0,prefix:"₹"}
        ],
        calc: null,  // lazy-loaded
        tips:["Start early — a 10-year SIP needs 3x less than a 5-year SIP for the same goal","Step-up SIP by 10% annually to beat inflation","Common goals: child education, home down payment, retirement"]
    },

elssreturns: {
        name:"ELSS Tax Saver Returns", desc:"ELSS mutual fund returns with 80C tax savings",
        icon:"fa-leaf", cat:"finance",
        inputs:[
            {id:"monthly",label:"Monthly SIP",default:12500,prefix:"₹"},
            {id:"years",label:"Investment Period",default:10,suffix:"years"},
            {id:"rate",label:"Expected ELSS Return",default:14,suffix:"% p.a."},
            {id:"taxslab",label:"Tax Slab",type:"select",options:["30% (>24L)","25% (20-24L)","20% (16-20L)","15% (12-16L)","10% (8-12L)","5% (4-8L)"]}
        ],
        calc: null,  // lazy-loaded
        tips:["ELSS has the shortest lock-in (3 years) among 80C instruments","Max ₹1.5 lakh/year deduction under Section 80C","LTCG above ₹1.25 lakh taxed at 12.5% (FY 2025-26)"]
    },

nsccalculator: {
        name:"NSC Calculator", desc:"National Savings Certificate maturity & tax benefit",
        icon:"fa-stamp", cat:"finance",
        inputs:[
            {id:"amount",label:"Investment Amount",default:100000,prefix:"₹"},
            {id:"rate",label:"NSC Interest Rate",default:7.7,suffix:"% p.a."},
            {id:"tenure",label:"Tenure",default:5,suffix:"years"},
            {id:"taxslab",label:"Tax Slab",type:"select",options:["30%","20%","10%","5%","0%"]}
        ],
        calc: null,  // lazy-loaded
        tips:["NSC qualifies for Section 80C deduction","Interest is compounded annually but paid at maturity","Accrued interest (except last year) also qualifies for 80C"]
    },

apycalculator: {
        name:"APY Calculator", desc:"Atal Pension Yojana — monthly contribution & pension estimate",
        icon:"fa-umbrella", cat:"finance",
        inputs:[
            {id:"age",label:"Current Age",default:25,suffix:"years"},
            {id:"pension",label:"Desired Monthly Pension",type:"select",options:["₹1,000","₹2,000","₹3,000","₹4,000","₹5,000"]}
        ],
        calc: null,  // lazy-loaded
        tips:["Join between age 18-40, pension starts at 60","Government co-contributes 50% for first 5 years (if not income tax payer)","Tax deduction under Section 80CCD(1B) up to ₹50,000"]
    },

brokerage: {
        name:"Stock Brokerage & Tax Calculator", desc:"Total trading cost — brokerage, STT, GST & stamp duty",
        icon:"fa-chart-candlestick", cat:"finance",
        inputs:[
            {id:"buy_price",label:"Buy Price",default:500,prefix:"₹"},
            {id:"sell_price",label:"Sell Price",default:550,prefix:"₹"},
            {id:"qty",label:"Quantity",default:100},
            {id:"broker_type",label:"Broker Type",type:"select",options:["Discount (₹20 flat)","Traditional (0.5%)","Discount (₹0 delivery)"]},
            {id:"trade_type",label:"Trade Type",type:"select",options:["Delivery (CNC)","Intraday (MIS)","F&O (Futures)","F&O (Options)"]}
        ],
        calc: null,  // lazy-loaded
        tips:["Delivery trades have highest STT (0.1% both sides)","Discount brokers charge flat ₹20 or ₹0 for delivery","F&O options: STT only on sell side at 0.0625%"]
    },

taxsaving: {
        name:"Tax Saving Optimizer", desc:"Optimize ₹1.5L deduction across 80C, 80D, 80CCD",
        icon:"fa-piggy-bank", cat:"finance",
        inputs:[
            {id:"income",label:"Taxable Income",default:1500000,prefix:"₹"},
            {id:"epf",label:"EPF (Employee)",default:21600,prefix:"₹"},
            {id:"ppf",label:"PPF",default:0,prefix:"₹"},
            {id:"elss",label:"ELSS Mutual Funds",default:50000,prefix:"₹"},
            {id:"lic",label:"LIC / Insurance Premium",default:25000,prefix:"₹"},
            {id:"nps80ccd",label:"NPS 80CCD(1B)",default:50000,prefix:"₹"},
            {id:"med80d",label:"Medical Insurance 80D",default:25000,prefix:"₹"},
            {id:"hloan",label:"Home Loan Interest (24B)",default:0,prefix:"₹"},
            {id:"taxslab",label:"Tax Slab",type:"select",options:["30%","20%","10%","5%"]}
        ],
        calc: null,  // lazy-loaded
        tips:["Fill 80C first (EPF+PPF+ELSS), then NPS for extra ₹50K","ELSS gives best returns among 80C options (equity exposure)","Only applicable under Old Tax Regime"]
    },

retirementcorpus: {
        name:"Retirement Corpus Calculator", desc:"How much you need to retire comfortably",
        icon:"fa-person-cane", cat:"finance",
        inputs:[
            {id:"age",label:"Current Age",default:30,suffix:"years"},
            {id:"retire_age",label:"Retirement Age",default:60,suffix:"years"},
            {id:"life_exp",label:"Life Expectancy",default:85,suffix:"years"},
            {id:"monthly_exp",label:"Current Monthly Expenses",default:50000,prefix:"₹"},
            {id:"inflation",label:"Inflation Rate",default:6,suffix:"%"},
            {id:"return_pre",label:"Pre-Retirement Return",default:12,suffix:"%"},
            {id:"return_post",label:"Post-Retirement Return",default:7,suffix:"%"},
            {id:"existing",label:"Current Savings",default:500000,prefix:"₹"}
        ],
        calc: null,  // lazy-loaded
        tips:["Rule of thumb: you need 25-30x your annual expenses","Start early — SIP at 25 needs 1/4th of SIP at 35 for same corpus","Post-retirement, shift to debt funds for safety"]
    },

salaryhike: {
        name:"Salary Hike Calculator", desc:"New salary after hike — monthly increase, annual gain & real value",
        icon:"fa-arrow-trend-up", cat:"finance", badge:"Popular",
        inputs:[
            {id:"currentSalary",label:"Current Monthly Salary",default:50000,prefix:"₹"},
            {id:"hikePercent",label:"Hike Percentage",default:15,suffix:"%"},
            {id:"currentCTC",label:"Current Annual CTC",default:600000,prefix:"₹"},
            {id:"inflation",label:"Inflation Rate",default:6,suffix:"%"}
        ],
        calc: null,  // lazy-loaded
        tips:["A hike below inflation (6–7%) means your real salary declined","Negotiate on CTC, not just percentage — base matters","Even ₹5,000/month extra, if invested in SIP, grows to ₹50L in 20 years"]
    },

bmi: {
        name:"BMI Calculator", desc:"Body Mass Index with category & ideal weight",
        icon:"fa-weight-scale", cat:"health", badge:"Popular",
        inputs:[
            {id:"weight",label:"Weight",default:70,suffix:"kg"},
            {id:"height",label:"Height",default:170,suffix:"cm"}
        ],
        calc: null,  // lazy-loaded
        tips:["BMI 18.5–24.9 is considered healthy","BMI doesn't account for muscle mass"]
    },

bmr: {
        name:"BMR Calculator", desc:"Basal Metabolic Rate (Mifflin-St Jeor)",
        icon:"fa-fire", cat:"health",
        inputs:[
            {id:"weight",label:"Weight",default:70,suffix:"kg"},
            {id:"height",label:"Height",default:170,suffix:"cm"},
            {id:"age",label:"Age",default:30,suffix:"years"},
            {id:"gender",label:"Gender",type:"select",options:["Male","Female"]}
        ],
        calc: null  // lazy-loaded
    },

tdee: {
        name:"TDEE Calculator", desc:"Total Daily Energy Expenditure",
        icon:"fa-bolt", cat:"health",
        inputs:[
            {id:"weight",label:"Weight",default:70,suffix:"kg"},
            {id:"height",label:"Height",default:170,suffix:"cm"},
            {id:"age",label:"Age",default:30,suffix:"years"},
            {id:"gender",label:"Gender",type:"select",options:["Male","Female"]},
            {id:"activity",label:"Activity",type:"select",options:["Sedentary","Light","Moderate","Active","Very Active"]}
        ],
        calc: null  // lazy-loaded
    },

water: {
        name:"Water Intake Calculator", desc:"Daily hydration requirement",
        icon:"fa-droplet", cat:"health",
        inputs:[
            {id:"weight",label:"Weight",default:70,suffix:"kg"},
            {id:"activity",label:"Activity",type:"select",options:["Sedentary","Moderate","Active","Very Active"]}
        ],
        calc: null  // lazy-loaded
    },

heartrate: {
        name:"Heart Rate Zones", desc:"Target heart rate for every fitness zone",
        icon:"fa-heart-pulse", cat:"health",
        inputs:[
            {id:"age",label:"Age",default:30,suffix:"years"},
            {id:"resting",label:"Resting HR",default:65,suffix:"bpm"}
        ],
        calc: null  // lazy-loaded
    },

age: {
        name:"Age Calculator", desc:"Exact age in years, months, days & more",
        icon:"fa-birthday-cake", cat:"health",
        inputs:[{id:"dob",label:"Date of Birth",type:"date"}],
        calc: null  // lazy-loaded
    },

calories: {
        name:"Calories Burned Calculator", desc:"Calories burned during exercise",
        icon:"fa-person-running", cat:"health",
        inputs:[
            {id:"weight",label:"Weight",default:70,suffix:"kg"},
            {id:"duration",label:"Duration",default:30,suffix:"min"},
            {id:"activity",label:"Activity",type:"select",options:["Walking","Jogging","Running","Cycling","Swimming","HIIT","Yoga","Weight Training"]}
        ],
        calc: null  // lazy-loaded
    },

sleep: {
        name:"Sleep Calculator", desc:"Optimal bedtimes based on sleep cycles",
        icon:"fa-moon", cat:"health",
        inputs:[{id:"wake",label:"Wake-Up Time",type:"time",default:"07:00"}],
        calc: null  // lazy-loaded
    },

macros: {
        name:"Macro Calculator", desc:"Daily protein, carbs & fat targets",
        icon:"fa-chart-pie", cat:"health",
        inputs:[
            {id:"calories",label:"Daily Calories",default:2000,suffix:"kcal"},
            {id:"goal",label:"Goal",type:"select",options:["Weight Loss","Maintenance","Muscle Gain"]}
        ],
        calc: null  // lazy-loaded
    },

pregnancy: {
        name:"Pregnancy Due Date", desc:"EDD and trimester tracker",
        icon:"fa-baby", cat:"health",
        inputs:[{id:"lmp",label:"First Day of Last Period",type:"date"}],
        calc: null  // lazy-loaded
    },

bodyFat: {
        name:"Body Fat % Calculator", desc:"US Navy method body fat estimation",
        icon:"fa-person", cat:"health",
        inputs:[
            {id:"gender",label:"Gender",type:"select",options:["Male","Female"]},
            {id:"height",label:"Height",default:170,suffix:"cm"},
            {id:"waist",label:"Waist Circumference",default:85,suffix:"cm"},
            {id:"neck",label:"Neck Circumference",default:38,suffix:"cm"},
            {id:"hip",label:"Hip (women only)",default:95,suffix:"cm"}
        ],
        calc: null  // lazy-loaded
    },

idealweight: {
        name:"Ideal Weight Calculator", desc:"Multiple formula ideal body weight",
        icon:"fa-weight-hanging", cat:"health",
        inputs:[
            {id:"height",label:"Height",default:170,suffix:"cm"},
            {id:"gender",label:"Gender",type:"select",options:["Male","Female"]}
        ],
        calc: null  // lazy-loaded
    },

ovulation: {
        name:"Ovulation & Fertile Window", desc:"Estimate peak fertile days based on cycle length",
        icon:"fa-calendar-heart", cat:"health",
        inputs:[
            {id:"lastPeriod",label:"First Day of Last Period",type:"date"},
            {id:"cycleLen",label:"Cycle Length",default:28,suffix:"days"},
            {id:"luteal",label:"Luteal Phase Length",default:14,suffix:"days"}
        ],
        calc: null  // lazy-loaded
    },

bloodpressure: {
        name:"Blood Pressure Classifier", desc:"Classify your BP reading and understand the risk level",
        icon:"fa-heart-pulse", cat:"health",
        inputs:[
            {id:"systolic",label:"Systolic Pressure (upper)",default:120,suffix:"mmHg"},
            {id:"diastolic",label:"Diastolic Pressure (lower)",default:80,suffix:"mmHg"},
            {id:"age_bp",label:"Your Age",default:35,suffix:"years"}
        ],
        calc: null  // lazy-loaded
    },

alcohol: {
        name:"BAC Calculator", desc:"Blood Alcohol Content estimator",
        icon:"fa-wine-glass", cat:"health",
        inputs:[
            {id:"drinks",label:"Standard Drinks Consumed",default:3},
            {id:"weight",label:"Body Weight",default:70,suffix:"kg"},
            {id:"gender",label:"Gender",type:"select",options:["Male","Female"]},
            {id:"hours",label:"Hours Since Drinking",default:1,suffix:"hrs"}
        ],
        calc: null  // lazy-loaded
    },

waistHip: {
        name:"Waist-to-Hip Ratio", desc:"Cardiovascular risk indicator",
        icon:"fa-ruler-horizontal", cat:"health",
        inputs:[
            {id:"waist",label:"Waist Circumference",default:80,suffix:"cm"},
            {id:"hip",label:"Hip Circumference",default:96,suffix:"cm"},
            {id:"gender",label:"Gender",type:"select",options:["Male","Female"]}
        ],
        calc: null  // lazy-loaded
    },

ibw: {
        name:"IBW — Ideal Body Weight", desc:"Target weight by height using clinical formulas",
        icon:"fa-user-check", cat:"health",
        inputs:[
            {id:"height",label:"Height",default:170,suffix:"cm"},
            {id:"gender",label:"Gender",type:"select",options:["Male","Female"]},
            {id:"frame",label:"Frame Size",type:"select",options:["Small","Medium","Large"]}
        ],
        calc: null  // lazy-loaded
    },

vitamins: {
        name:"Vitamin D Deficiency Check", desc:"Estimated Vitamin D level & supplementation",
        icon:"fa-sun", cat:"health",
        inputs:[
            {id:"sunExposure",label:"Daily Sun Exposure",type:"select",options:["None (<5 min)","Low (5-15 min)","Moderate (15-30 min)","Good (30+ min)"]},
            {id:"skinTone",label:"Skin Tone",type:"select",options:["Very Fair","Fair","Medium","Dark","Very Dark"]},
            {id:"age",label:"Age",default:35,suffix:"years"}
        ],
        calc: null  // lazy-loaded
    },

lungCapacity: {
        name:"Lung Capacity (FVC) Estimator", desc:"Forced Vital Capacity prediction",
        icon:"fa-lungs", cat:"health",
        inputs:[
            {id:"height",label:"Height",default:170,suffix:"cm"},
            {id:"age",label:"Age",default:35,suffix:"years"},
            {id:"gender",label:"Gender",type:"select",options:["Male","Female"]}
        ],
        calc: null  // lazy-loaded
    },

bodyfat: {
        name:"Body Fat % Calculator (Navy Method)", desc:"Estimate body fat percentage using measurements",
        icon:"fa-person", cat:"health", badge:"Popular",
        inputs:[
            {id:"gender",label:"Gender",type:"select",options:["Male","Female"]},
            {id:"height_bf",label:"Height",default:175,suffix:"cm"},
            {id:"waist_bf",label:"Waist Circumference",default:85,suffix:"cm"},
            {id:"neck_bf",label:"Neck Circumference",default:38,suffix:"cm"},
            {id:"hip_bf",label:"Hip Circumference (women only)",default:95,suffix:"cm"}
        ],
        calc: null  // lazy-loaded
    },

proteinintake: {
        name:"Protein Intake Calculator", desc:"Daily protein requirement based on weight, activity and goal",
        icon:"fa-dumbbell", cat:"health",
        inputs:[
            {id:"weight_p",label:"Body Weight",default:70,suffix:"kg"},
            {id:"activity_p",label:"Activity Level",type:"select",options:["Sedentary","Lightly Active","Moderately Active","Very Active","Athlete"]},
            {id:"goal_p",label:"Goal",type:"select",options:["Maintain Weight","Lose Fat","Build Muscle","Maximum Muscle"]}
        ],
        calc: null  // lazy-loaded
    },

smokingcost: {
        name:"Smoking Cost Calculator", desc:"Money wasted on cigarettes and health risk assessment",
        icon:"fa-ban-smoking", cat:"health",
        inputs:[
            {id:"cigsPerDay",label:"Cigarettes Per Day",default:10},
            {id:"packPrice",label:"Price per Pack (20 cigs)",default:250,prefix:"₹"},
            {id:"yearsSmoked",label:"Years Smoking",default:5,suffix:"years"}
        ],
        calc: null,  // lazy-loaded
        tips:["Each cigarette reduces life by ~11 minutes","Quitting saves lungs AND lakhs of rupees"]
    },

childheight: {
        name:"Child Adult Height Predictor", desc:"Predict child's adult height from parents' heights",
        icon:"fa-child-reaching", cat:"health",
        inputs:[
            {id:"fatherH",label:"Father's Height",default:175,suffix:"cm"},
            {id:"motherH",label:"Mother's Height",default:162,suffix:"cm"},
            {id:"childGender",label:"Child's Gender",type:"select",options:["Boy","Girl"]}
        ],
        calc: null  // lazy-loaded
    },

diabetesrisk: {
        name:"Diabetes Risk Score", desc:"ADA-based type 2 diabetes risk assessment",
        icon:"fa-droplet", cat:"health",
        inputs:[
            {id:"age_d",label:"Age",default:40,suffix:"years"},
            {id:"bmi_d",label:"BMI",default:26,suffix:"kg/m²"},
            {id:"waist_d",label:"Waist Circumference",default:88,suffix:"cm"},
            {id:"familyHist",label:"Family History of Diabetes",type:"select",options:["No","Parent or Sibling","Both Parents"]},
            {id:"physActive",label:"Physically Active (30 min/day)?",type:"select",options:["Yes","No"]}
        ],
        calc: null  // lazy-loaded
    },

sleepdebt: {
        name:"Sleep Debt Calculator", desc:"Cumulative sleep deficit and recovery plan",
        icon:"fa-moon", cat:"health",
        inputs:[
            {id:"needed",label:"Hours Needed per Night",default:8,suffix:"hrs"},
            {id:"actual",label:"Average Hours You Sleep",default:6.5,suffix:"hrs"},
            {id:"days",label:"Days of Deficit",default:7,suffix:"days"}
        ],
        calc: null  // lazy-loaded
    },

anemia: {
        name:"Anemia Risk Checker", desc:"Hemoglobin level interpretation and severity classification",
        icon:"fa-syringe", cat:"health",
        inputs:[
            {id:"hb",label:"Hemoglobin Level",default:12,suffix:"g/dL"},
            {id:"gender_a",label:"Gender",type:"select",options:["Male","Female","Pregnant Woman","Child (6-12 yr)"]}
        ],
        calc: null  // lazy-loaded
    },

bsa: {
        name:"Body Surface Area Calculator", desc:"BSA using Mosteller & DuBois formulas (used in drug dosing)",
        icon:"fa-person-dots-from-line", cat:"health",
        inputs:[
            {id:"weight_bsa",label:"Weight",default:70,suffix:"kg"},
            {id:"height_bsa",label:"Height",default:170,suffix:"cm"}
        ],
        calc: null,  // lazy-loaded
        tips:["BSA is used to calculate chemotherapy dosing","Average adult BSA is 1.73 m²"]
    },

cholesterolratio: {
        name:"Cholesterol Ratio Calculator", desc:"Total/HDL ratio, LDL/HDL ratio & cardiovascular risk",
        icon:"fa-heart-circle-check", cat:"health",
        inputs:[
            {id:"total",label:"Total Cholesterol",default:200,suffix:"mg/dL"},
            {id:"hdl",label:"HDL (Good Cholesterol)",default:55,suffix:"mg/dL"},
            {id:"ldl",label:"LDL (Bad Cholesterol)",default:120,suffix:"mg/dL"},
            {id:"triglycerides",label:"Triglycerides",default:150,suffix:"mg/dL"}
        ],
        calc: null,  // lazy-loaded
        tips:["Total/HDL ratio is the most important heart risk marker","Increase HDL with exercise, omega-3 fats, and nuts","LDL < 100 mg/dL is optimal; < 70 for high-risk patients"]
    },

caloriedeficit: {
        name:"Calorie Deficit Calculator", desc:"Daily calories & timeline to reach your goal weight",
        icon:"fa-weight-scale", cat:"health",
        inputs:[
            {id:"weight",label:"Current Weight",default:85,suffix:"kg"},
            {id:"goal_weight",label:"Goal Weight",default:72,suffix:"kg"},
            {id:"height",label:"Height",default:175,suffix:"cm"},
            {id:"age",label:"Age",default:30,suffix:"years"},
            {id:"gender",label:"Gender",type:"select",options:["Male","Female"]},
            {id:"activity",label:"Activity Level",type:"select",options:["Sedentary","Lightly Active","Moderately Active","Very Active"]},
            {id:"rate",label:"Weight Loss Rate",type:"select",options:["0.25 kg/week (safe)","0.5 kg/week (moderate)","0.75 kg/week (aggressive)","1 kg/week (max)"]}
        ],
        calc: null,  // lazy-loaded
        tips:["Never go below 1200 kcal (women) or 1500 kcal (men)","0.5 kg/week is sustainable and preserves muscle","Combine diet with strength training for best results"]
    },

length: {
        name:"Length Converter", desc:"cm, m, km, inch, ft, mile, yard",
        icon:"fa-ruler", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:1},
            {id:"from",label:"From",type:"select",options:["Meters","Kilometers","Centimeters","Millimeters","Miles","Feet","Inches","Yards"]}
        ],
        calc: null  // lazy-loaded
    },

weight: {
        name:"Weight Converter", desc:"kg, g, lb, oz, stone, tonne",
        icon:"fa-weight-hanging", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:1},
            {id:"from",label:"From",type:"select",options:["Kilograms","Grams","Milligrams","Pounds","Ounces","Stone","Tonnes"]}
        ],
        calc: null  // lazy-loaded
    },

temperature: {
        name:"Temperature Converter", desc:"°C, °F, K, Rankine",
        icon:"fa-temperature-half", cat:"unit",
        inputs:[
            {id:"val",label:"Temperature",default:100},
            {id:"from",label:"From",type:"select",options:["Celsius","Fahrenheit","Kelvin","Rankine"]}
        ],
        calc: null  // lazy-loaded
    },

area: {
        name:"Area Converter", desc:"m², km², acres, hectares, sq ft",
        icon:"fa-vector-square", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:1},
            {id:"from",label:"From",type:"select",options:["Square Meters","Square Kilometers","Square Feet","Square Inches","Acres","Hectares"]}
        ],
        calc: null  // lazy-loaded
    },

speed: {
        name:"Speed Converter", desc:"km/h, mph, m/s, knots",
        icon:"fa-gauge-high", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:100},
            {id:"from",label:"From",type:"select",options:["km/h","mph","m/s","Knots","Mach"]}
        ],
        calc: null  // lazy-loaded
    },

currency: {
        name:"Currency Converter (INR Base)", desc:"Approximate conversions (not live)",
        icon:"fa-indian-rupee-sign", cat:"unit",
        inputs:[
            {id:"amount",label:"Amount",default:1000},
            {id:"from",label:"From",type:"select",options:["INR","USD","EUR","GBP","JPY","AED","SGD","AUD","CAD"]}
        ],
        calc: null,  // lazy-loaded
        tips:["Rates are approximate — use a live feed for transactions"]
    },

volume: {
        name:"Volume Converter", desc:"Liters, gallons, ml, cubic units",
        icon:"fa-flask", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:1},
            {id:"from",label:"From",type:"select",options:["Liters","Milliliters","Gallons (US)","Gallons (UK)","Cubic Meters","Fluid Ounces","Cups","Pints"]}
        ],
        calc: null  // lazy-loaded
    },

data: {
        name:"Data Storage Converter", desc:"Bits, bytes, KB, MB, GB, TB",
        icon:"fa-hard-drive", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:1},
            {id:"from",label:"From",type:"select",options:["Bits","Bytes","Kilobytes","Megabytes","Gigabytes","Terabytes","Petabytes"]}
        ],
        calc: null  // lazy-loaded
    },

pressure: {
        name:"Pressure Converter", desc:"Pa, bar, psi, atm, mmHg, kPa",
        icon:"fa-compress", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:1},
            {id:"from",label:"From",type:"select",options:["Pascal","Kilopascal","Bar","PSI","Atmosphere","mmHg","Torr"]}
        ],
        calc: null  // lazy-loaded
    },

energy: {
        name:"Energy Converter", desc:"Joules, kWh, calories, BTU, eV",
        icon:"fa-bolt", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:1},
            {id:"from",label:"From",type:"select",options:["Joules","Kilojoules","Watt-hours","kWh","Calories","Kilocalories","BTU","Electronvolt"]}
        ],
        calc: null  // lazy-loaded
    },

angle: {
        name:"Angle Converter", desc:"Degrees, radians, gradians, turns",
        icon:"fa-drafting-compass", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:180},
            {id:"from",label:"From",type:"select",options:["Degrees","Radians","Gradians","Turns","Arcminutes","Arcseconds"]}
        ],
        calc: null  // lazy-loaded
    },

dateiff: {
        name:"Date Difference", desc:"Days, weeks, months between two dates",
        icon:"fa-calendar-days", cat:"datetime",
        inputs:[
            {id:"d1",label:"Start Date",type:"date"},
            {id:"d2",label:"End Date",type:"date"}
        ],
        calc: null  // lazy-loaded
    },

timeconv: {
        name:"Time Unit Converter", desc:"Seconds, minutes, hours, days, weeks",
        icon:"fa-clock", cat:"datetime",
        inputs:[
            {id:"val",label:"Value",default:3600},
            {id:"from",label:"From",type:"select",options:["Seconds","Minutes","Hours","Days","Weeks","Months","Years"]}
        ],
        calc: null  // lazy-loaded
    },

countdown: {
        name:"Event Countdown", desc:"Days, hours, minutes until your event",
        icon:"fa-hourglass-half", cat:"datetime",
        inputs:[{id:"event",label:"Event Date & Time",type:"datetime-local"}],
        calc: null  // lazy-loaded
    },

timezone: {
        name:"Time Zone Converter", desc:"Convert time across global time zones",
        icon:"fa-globe", cat:"datetime",
        inputs:[
            {id:"time",label:"Your Local Time",type:"time",default:"12:00"},
            {id:"offset",label:"Target UTC Offset",default:0,suffix:"hrs"}
        ],
        calc: null  // lazy-loaded
    },

workingdays: {
        name:"Working Days Calculator", desc:"Business days between dates (excl. weekends)",
        icon:"fa-calendar-check", cat:"datetime",
        inputs:[
            {id:"d1",label:"Start Date",type:"date"},
            {id:"d2",label:"End Date",type:"date"},
            {id:"holidays",label:"Public Holidays to Exclude",default:0}
        ],
        calc: null  // lazy-loaded
    },

ageNextBday: {
        name:"Next Birthday Calculator", desc:"Days until next birthday & age you'll turn",
        icon:"fa-cake-candles", cat:"datetime",
        inputs:[{id:"dob",label:"Date of Birth",type:"date"}],
        calc: null  // lazy-loaded
    },

ohmslaw: {
        name:"Ohm's Law Calculator", desc:"V=IR — solve for any variable",
        icon:"fa-bolt-lightning", cat:"engineering",
        inputs:[
            {id:"v",label:"Voltage (V) — 0 to solve",default:12,suffix:"V"},
            {id:"i",label:"Current (I) — 0 to solve",default:2,suffix:"A"},
            {id:"r",label:"Resistance (R) — 0 to solve",default:0,suffix:"Ω"}
        ],
        calc: null  // lazy-loaded
    },

resistor: {
        name:"Resistor Color Code", desc:"Decode 4-band resistor colors",
        icon:"fa-microchip", cat:"engineering",
        inputs:[
            {id:"b1",label:"Band 1",type:"select",options:["Black","Brown","Red","Orange","Yellow","Green","Blue","Violet","Grey","White"]},
            {id:"b2",label:"Band 2",type:"select",options:["Black","Brown","Red","Orange","Yellow","Green","Blue","Violet","Grey","White"]},
            {id:"mult",label:"Multiplier",type:"select",options:["×1","×10","×100","×1K","×10K","×100K","×1M","×0.1","×0.01"]},
            {id:"tol",label:"Tolerance",type:"select",options:["±1% (Brown)","±2% (Red)","±0.5% (Green)","±5% (Gold)","±10% (Silver)"]}
        ],
        calc: null  // lazy-loaded
    },

power: {
        name:"Power Calculator", desc:"Electrical power, current, voltage",
        icon:"fa-plug-circle-bolt", cat:"engineering",
        inputs:[
            {id:"power",label:"Power",default:1000,suffix:"W"},
            {id:"voltage",label:"Voltage",default:230,suffix:"V"}
        ],
        calc: null  // lazy-loaded
    },

pythagorean: {
        name:"Pythagorean Theorem", desc:"Find hypotenuse or missing side",
        icon:"fa-triangle-exclamation", cat:"engineering",
        inputs:[
            {id:"a",label:"Side A (0 to solve)",default:3},
            {id:"b",label:"Side B (0 to solve)",default:4},
            {id:"c",label:"Hypotenuse C (0 to solve)",default:0}
        ],
        calc: null  // lazy-loaded
    },

ledresistor: {
        name:"LED Resistor Calculator", desc:"Calculate resistor value to safely drive an LED",
        icon:"fa-lightbulb", cat:"engineering",
        inputs:[
            {id:"vsupply",label:"Supply Voltage",default:5,suffix:"V"},
            {id:"vled",label:"LED Forward Voltage",default:2.0,suffix:"V"},
            {id:"iled",label:"LED Forward Current",default:20,suffix:"mA"}
        ],
        calc: null,  // lazy-loaded
        tips:["Common LED Vf: Red=1.8V, Green=2.2V, Blue/White=3.2V","Always add 20–30% headroom to power rating"]
    },

voltdivider: {
        name:"Voltage Divider Calculator", desc:"Output voltage and current from a resistor voltage divider",
        icon:"fa-bolt-lightning", cat:"engineering",
        inputs:[
            {id:"vin_vd",label:"Input Voltage (Vin)",default:12,suffix:"V"},
            {id:"r1_vd",label:"R1 (top resistor)",default:10000,suffix:"Ω"},
            {id:"r2_vd",label:"R2 (bottom resistor)",default:5600,suffix:"Ω"}
        ],
        calc: null  // lazy-loaded
    },

batterylife: {
        name:"Battery Life Calculator", desc:"Estimate how long a battery will last for a device",
        icon:"fa-battery-half", cat:"engineering",
        inputs:[
            {id:"capacity_mah",label:"Battery Capacity",default:3000,suffix:"mAh"},
            {id:"current_draw",label:"Device Current Draw",default:150,suffix:"mA"},
            {id:"efficiency",label:"Circuit Efficiency",default:85,suffix:"%"}
        ],
        calc: null  // lazy-loaded
    },

pcbtrace: {
        name:"PCB Trace Width Calculator", desc:"Minimum trace width for a given current (IPC-2221)",
        icon:"fa-microchip", cat:"engineering",
        inputs:[
            {id:"current_pcb",label:"Maximum Current",default:1,suffix:"A"},
            {id:"temp_rise",label:"Allowable Temp Rise",default:10,suffix:"°C"},
            {id:"thickness_pcb",label:"Copper Thickness",default:1,suffix:"oz (35µm)"},
            {id:"layer",label:"Layer",type:"select",options:["External (top/bottom)","Internal"]}
        ],
        calc: null,  // lazy-loaded
        tips:["Always add a safety margin of 50%","Use thicker copper (2oz) for high-current traces"]
    },

decibel: {
        name:"Decibel (dB) Calculator", desc:"Convert between dB and power/voltage ratios",
        icon:"fa-volume-high", cat:"engineering",
        inputs:[
            {id:"db_val",label:"Decibel Value",default:20,suffix:"dB"},
            {id:"reference",label:"Reference Type",type:"select",options:["Power ratio (dBW/dBm)","Voltage ratio (dBV)"]}
        ],
        calc: null,  // lazy-loaded
        tips:["+3dB ≈ double the power","+6dB ≈ double the voltage/sound pressure","0 dBm = 1 milliwatt reference"]
    },

antennalen: {
        name:"Antenna Length Calculator", desc:"Dipole, quarter-wave and Yagi antenna lengths",
        icon:"fa-tower-broadcast", cat:"engineering",
        inputs:[
            {id:"freq_mhz",label:"Frequency",default:433,suffix:"MHz"},
            {id:"vel_factor",label:"Velocity Factor",default:0.95,suffix:"(0.66–1.0)"}
        ],
        calc: null  // lazy-loaded
    },

torque: {
        name:"Torque Calculator", desc:"Torque, force, arm length and angular conversions",
        icon:"fa-rotate", cat:"engineering",
        inputs:[
            {id:"force_t",label:"Force",default:100,suffix:"N"},
            {id:"arm_t",label:"Moment Arm Length",default:0.5,suffix:"m"},
            {id:"angle_t",label:"Angle between F and arm",default:90,suffix:"°"}
        ],
        calc: null  // lazy-loaded
    },

tip: {
        name:"Tip Calculator", desc:"Split bill with tip among friends",
        icon:"fa-hand-holding-dollar", cat:"everyday", badge:"Popular",
        inputs:[
            {id:"bill",label:"Total Bill",default:1200,prefix:"₹"},
            {id:"tip",label:"Tip %",default:15,suffix:"%"},
            {id:"people",label:"Number of People",default:4}
        ],
        calc: null  // lazy-loaded
    },

discount: {
        name:"Discount Calculator", desc:"Sale price, savings & discount %",
        icon:"fa-tag", cat:"everyday",
        inputs:[
            {id:"original",label:"Original Price",default:2000,prefix:"₹"},
            {id:"discount",label:"Discount",default:30,suffix:"%"}
        ],
        calc: null  // lazy-loaded
    },

fuel: {
        name:"Fuel Cost Calculator", desc:"Trip cost, mileage & efficiency",
        icon:"fa-gas-pump", cat:"everyday",
        inputs:[
            {id:"distance",label:"Distance",default:100,suffix:"km"},
            {id:"efficiency",label:"Fuel Efficiency",default:15,suffix:"km/L"},
            {id:"price",label:"Fuel Price",default:103,prefix:"₹",suffix:"/L"}
        ],
        calc: null  // lazy-loaded
    },

salary: {
        name:"Salary Calculator", desc:"Monthly, weekly & daily from CTC",
        icon:"fa-money-bill-wave", cat:"everyday",
        inputs:[
            {id:"ctc",label:"Annual CTC",default:1200000,prefix:"₹"},
            {id:"pf",label:"PF Deduction",default:21600,prefix:"₹"},
            {id:"tax",label:"Estimated Annual Tax",default:80000,prefix:"₹"}
        ],
        calc: null  // lazy-loaded
    },

emi2: {
        name:"EMI Eligibility", desc:"Max loan you can get based on income",
        icon:"fa-circle-check", cat:"everyday",
        inputs:[
            {id:"income",label:"Monthly Income",default:80000,prefix:"₹"},
            {id:"obligations",label:"Existing EMIs",default:5000,prefix:"₹"},
            {id:"rate",label:"Interest Rate",default:9,suffix:"%"},
            {id:"tenure",label:"Tenure",default:240,suffix:"months"}
        ],
        calc: null  // lazy-loaded
    },

grade: {
        name:"Grade / GPA Calculator", desc:"Percentage to grade & GPA conversion",
        icon:"fa-graduation-cap", cat:"everyday",
        inputs:[{id:"pct",label:"Percentage",default:78,suffix:"%"}],
        calc: null  // lazy-loaded
    },

electricbill: {
        name:"Electricity Bill Estimator", desc:"Monthly electricity cost by appliance",
        icon:"fa-lightbulb", cat:"everyday",
        inputs:[
            {id:"watts",label:"Appliance Wattage",default:1500,suffix:"W"},
            {id:"hours",label:"Daily Usage",default:5,suffix:"hrs"},
            {id:"rate",label:"Rate per Unit",default:7,prefix:"₹",suffix:"/kWh"}
        ],
        calc: null  // lazy-loaded
    },

loanaffordability: {
        name:"Loan Affordability", desc:"Max home price based on income & down payment",
        icon:"fa-house-flag", cat:"everyday",
        inputs:[
            {id:"income",label:"Gross Monthly Income",default:100000,prefix:"₹"},
            {id:"down",label:"Down Payment Available",default:500000,prefix:"₹"},
            {id:"rate",label:"Interest Rate",default:8.5,suffix:"%"},
            {id:"term",label:"Loan Term",default:20,suffix:"years"}
        ],
        calc: null  // lazy-loaded
    },

calories_food: {
        name:"Food Calorie Tracker", desc:"Calories from protein, carbs & fat intake",
        icon:"fa-utensils", cat:"everyday",
        inputs:[
            {id:"protein",label:"Protein",default:50,suffix:"g"},
            {id:"carbs",label:"Carbohydrates",default:200,suffix:"g"},
            {id:"fat",label:"Fat",default:65,suffix:"g"},
            {id:"fiber",label:"Dietary Fiber",default:25,suffix:"g"}
        ],
        calc: null  // lazy-loaded
    },

wiresize: {
        name:"Wire / Cable Size Calculator", desc:"Recommended wire gauge for current load",
        icon:"fa-plug", cat:"everyday",
        inputs:[
            {id:"current",label:"Current Load",default:15,suffix:"A"},
            {id:"length",label:"Cable Run (one-way)",default:20,suffix:"m"},
            {id:"voltage",label:"System Voltage",default:230,suffix:"V"},
            {id:"drop",label:"Acceptable Voltage Drop",default:3,suffix:"%"}
        ],
        calc: null  // lazy-loaded
    },

pixelresolution: {
        name:"Image / Pixel Size Calculator", desc:"Megapixels, file size & print dimensions",
        icon:"fa-image", cat:"everyday",
        inputs:[
            {id:"width",label:"Width",default:4000,suffix:"px"},
            {id:"height",label:"Height",default:3000,suffix:"px"},
            {id:"bpp",label:"Bit Depth",type:"select",options:["8-bit","16-bit","24-bit","32-bit"]},
            {id:"dpi",label:"Print DPI",default:300}
        ],
        calc: null  // lazy-loaded
    },

typing_speed: {
        name:"Reading / Typing Time", desc:"Time to read or type a given word count",
        icon:"fa-keyboard", cat:"everyday",
        inputs:[
            {id:"words",label:"Word Count",default:1000},
            {id:"wpm",label:"Your WPM",default:200,suffix:"wpm"},
            {id:"typingWpm",label:"Typing WPM",default:40,suffix:"wpm"}
        ],
        calc: null  // lazy-loaded
    },

emi_extra: {
        name:"Extra EMI Prepayment Benefit", desc:"Interest saved by paying extra EMI",
        icon:"fa-piggy-bank", cat:"everyday",
        inputs:[
            {id:"outstanding",label:"Outstanding Principal",default:2000000,prefix:"₹"},
            {id:"rate",label:"Interest Rate",default:8.5,suffix:"%"},
            {id:"remaining",label:"Remaining Tenure",default:180,suffix:"months"},
            {id:"extra",label:"Extra Monthly Payment",default:5000,prefix:"₹"}
        ],
        calc: null  // lazy-loaded
    },

investVsRent: {
        name:"Rent vs Buy Calculator", desc:"Is buying or renting more financially sensible?",
        icon:"fa-house-circle-xmark", cat:"everyday",
        inputs:[
            {id:"propValue",label:"Property Value",default:5000000,prefix:"₹"},
            {id:"rent",label:"Monthly Rent",default:20000,prefix:"₹"},
            {id:"emi",label:"Estimated Monthly EMI",default:40000,prefix:"₹"},
            {id:"years",label:"Holding Period",default:10,suffix:"years"},
            {id:"appreciation",label:"Property Appreciation",default:6,suffix:"% p.a."}
        ],
        calc: null  // lazy-loaded
    },

unitPrice: {
        name:"Unit Price / Value Comparator", desc:"Which pack offers the best value per unit?",
        icon:"fa-scale-balanced", cat:"everyday",
        inputs:[
            {id:"price1",label:"Price of Item A",default:99,prefix:"₹"},
            {id:"qty1",label:"Quantity of Item A",default:500,suffix:"g"},
            {id:"price2",label:"Price of Item B",default:175,prefix:"₹"},
            {id:"qty2",label:"Quantity of Item B",default:1000,suffix:"g"}
        ],
        calc: null  // lazy-loaded
    },

petrolParity: {
        name:"Petrol vs EV Cost Calculator", desc:"Annual running cost — ICE vs Electric vehicle",
        icon:"fa-car-battery", cat:"everyday",
        inputs:[
            {id:"kmPerYear",label:"Annual Distance",default:15000,suffix:"km"},
            {id:"petrolMileage",label:"Petrol Mileage",default:15,suffix:"km/L"},
            {id:"petrolPrice",label:"Petrol Price",default:105,prefix:"₹",suffix:"/L"},
            {id:"evRange",label:"EV Range",default:400,suffix:"km/charge"},
            {id:"chargeCost",label:"Cost per Full Charge",default:250,prefix:"₹"}
        ],
        calc: null  // lazy-loaded
    },

laundry: {
        name:"Clothes / Fabric Care Size", desc:"Size conversion for clothing across regions",
        icon:"fa-shirt", cat:"everyday",
        inputs:[
            {id:"chest",label:"Chest Circumference",default:96,suffix:"cm"},
            {id:"waist",label:"Waist Circumference",default:80,suffix:"cm"},
            {id:"height",label:"Height",default:170,suffix:"cm"}
        ],
        calc: null  // lazy-loaded
    },

networth: {
        name:"Net Worth Calculator", desc:"Total assets minus liabilities — your real financial picture",
        icon:"fa-wallet", cat:"everyday", badge:"Popular",
        inputs:[
            {id:"cash",label:"Cash & Bank Balance",default:200000,prefix:"₹"},
            {id:"stocks",label:"Stocks & Mutual Funds",default:500000,prefix:"₹"},
            {id:"property",label:"Property Value",default:5000000,prefix:"₹"},
            {id:"gold_nw",label:"Gold & Jewellery",default:300000,prefix:"₹"},
            {id:"pf",label:"PF / NPS Balance",default:400000,prefix:"₹"},
            {id:"homeloan",label:"Home Loan Outstanding",default:2000000,prefix:"₹"},
            {id:"carloan",label:"Car / Personal Loans",default:300000,prefix:"₹"},
            {id:"cc",label:"Credit Card Dues",default:50000,prefix:"₹"}
        ],
        calc: null  // lazy-loaded
    },

weddingbudget: {
        name:"Wedding Budget Planner", desc:"Estimate total wedding cost based on guest count and city tier",
        icon:"fa-ring", cat:"everyday",
        inputs:[
            {id:"guests",label:"Number of Guests",default:300},
            {id:"city_tier",label:"City Tier",type:"select",options:["Tier 1 (Metro)","Tier 2","Tier 3 / Town"]},
            {id:"func",label:"Number of Functions",default:3},
            {id:"catering_pp",label:"Catering Cost per Person",default:1500,prefix:"₹"}
        ],
        calc: null  // lazy-loaded
    },

rentafford: {
        name:"House Rent Affordability", desc:"Maximum rent you can afford based on income and expenses",
        icon:"fa-house-user", cat:"everyday",
        inputs:[
            {id:"salary_r",label:"Monthly Take-Home Salary",default:80000,prefix:"₹"},
            {id:"expenses_r",label:"Monthly Fixed Expenses",default:20000,prefix:"₹"},
            {id:"emi_r",label:"Existing EMIs",default:10000,prefix:"₹"},
            {id:"savings_r",label:"Target Monthly Savings",default:15000,prefix:"₹"}
        ],
        calc: null  // lazy-loaded
    },

freelancerate: {
        name:"Freelancer Rate Calculator", desc:"Ideal hourly and daily rate based on desired annual income",
        icon:"fa-laptop-code", cat:"everyday",
        inputs:[
            {id:"annualIncome",label:"Desired Annual Income",default:1200000,prefix:"₹"},
            {id:"workDays",label:"Billable Days per Year",default:220,suffix:"days"},
            {id:"hoursPerDay",label:"Billable Hours per Day",default:6,suffix:"hrs"},
            {id:"expenses_fl",label:"Annual Business Expenses",default:120000,prefix:"₹"},
            {id:"tax_fl",label:"Tax Rate",default:30,suffix:"%"}
        ],
        calc: null  // lazy-loaded
    },

carbonfootprint: {
        name:"Carbon Footprint Calculator", desc:"Estimate your annual CO₂ emissions from daily activities",
        icon:"fa-leaf", cat:"everyday",
        inputs:[
            {id:"carKm",label:"Car Travel per Year",default:10000,suffix:"km"},
            {id:"carFuel",label:"Car Fuel Efficiency",default:15,suffix:"km/L"},
            {id:"flights",label:"Short Flights per Year (<3hrs)",default:2,suffix:"flights"},
            {id:"elecUnits",label:"Monthly Electricity",default:300,suffix:"kWh"},
            {id:"meatMeals",label:"Meat Meals per Week",default:5,suffix:"meals"}
        ],
        calc: null  // lazy-loaded
    },

cartco: {
        name:"Car Total Cost of Ownership", desc:"True annual cost of owning a car including all expenses",
        icon:"fa-car", cat:"everyday",
        inputs:[
            {id:"carPrice",label:"Car Price",default:1200000,prefix:"₹"},
            {id:"downpay",label:"Down Payment",default:200000,prefix:"₹"},
            {id:"carRate",label:"Car Loan Rate",default:9,suffix:"%"},
            {id:"carTenure",label:"Loan Tenure",default:60,suffix:"months"},
            {id:"kmYear",label:"Annual Distance",default:15000,suffix:"km"},
            {id:"mileage",label:"Fuel Mileage",default:15,suffix:"km/L"},
            {id:"fuelPrice",label:"Fuel Price",default:103,prefix:"₹",suffix:"/L"},
            {id:"insurance",label:"Annual Insurance",default:35000,prefix:"₹"},
            {id:"maintenance",label:"Annual Maintenance",default:20000,prefix:"₹"}
        ],
        calc: null  // lazy-loaded
    },

tipsplit: {
        name:"Bill Split & Tip Calculator", desc:"Split group bill with custom tip per person",
        icon:"fa-receipt", cat:"everyday",
        inputs:[
            {id:"billAmt",label:"Total Bill Amount",default:2400,prefix:"₹"},
            {id:"tipPct",label:"Tip Percentage",default:10,suffix:"%"},
            {id:"people",label:"Number of People",default:4},
            {id:"extra",label:"Extra Charges (taxes etc.)",default:0,prefix:"₹"}
        ],
        calc: null  // lazy-loaded
    },

petage: {
        name:"Dog & Cat Age in Human Years", desc:"Convert your pet's age to human equivalent years",
        icon:"fa-paw", cat:"everyday",
        inputs:[
            {id:"petAge",label:"Pet's Age",default:5,suffix:"years"},
            {id:"petType",label:"Pet Type",type:"select",options:["Small Dog (<10kg)","Medium Dog (10-25kg)","Large Dog (>25kg)","Cat"]},
            {id:"petWeight",label:"Dog Weight (for dogs)",default:15,suffix:"kg"}
        ],
        calc: null  // lazy-loaded
    },

travelbudget: {
        name:"Travel Budget Estimator", desc:"Estimate total trip cost based on destination and days",
        icon:"fa-plane-departure", cat:"everyday",
        inputs:[
            {id:"days",label:"Trip Duration",default:7,suffix:"days"},
            {id:"people_t",label:"Number of Travelers",default:2},
            {id:"dest",label:"Destination Type",type:"select",options:["Budget (₹2K/day)","Mid-range (₹5K/day)","Luxury (₹12K/day)","International (₹15K/day)"]},
            {id:"flights_t",label:"Flight Cost (total)",default:15000,prefix:"₹"}
        ],
        calc: null  // lazy-loaded
    },

mileage: {
        name:"Mileage & Fuel Efficiency", desc:"km/L, L/100km, MPG — convert and compare fuel economy",
        icon:"fa-gauge-high", cat:"everyday",
        inputs:[
            {id:"distance_mi",label:"Distance Traveled",default:500,suffix:"km"},
            {id:"fuel_used",label:"Fuel Used",default:40,suffix:"litres"}
        ],
        calc: null  // lazy-loaded
    },

cooking: {
        name:"Cooking Measurement Converter", desc:"Convert cups, tbsp, tsp, ml, grams for common ingredients",
        icon:"fa-kitchen-set", cat:"everyday",
        inputs:[
            {id:"cook_val",label:"Amount",default:1},
            {id:"cook_from",label:"From Unit",type:"select",options:["Cup","Tablespoon (tbsp)","Teaspoon (tsp)","Milliliter (ml)","Fluid Ounce (fl oz)","Liter","Pint"]},
            {id:"cook_ingr",label:"Ingredient (for grams)",type:"select",options:["Water","All-Purpose Flour","Sugar (white)","Butter","Rice","Salt","Honey","Milk"]}
        ],
        calc: null  // lazy-loaded
    },

shoesize: {
        name:"Shoe Size Converter", desc:"Convert shoe sizes between US, UK, EU, India and CM",
        icon:"fa-shoe-prints", cat:"everyday",
        inputs:[
            {id:"shoe_val",label:"Size Value",default:9},
            {id:"shoe_from",label:"From System",type:"select",options:["US Men","US Women","UK","EU","India (IN)","CM (foot length)"]}
        ],
        calc: null  // lazy-loaded
    },

stopwatch: {
        name:"Stopwatch & Timer", desc:"Online stopwatch with lap times and countdown",
        icon:"fa-stopwatch", cat:"everyday",
        inputs:[
            {id:"countdown_min",label:"Countdown (minutes, 0 = stopwatch)",default:0,suffix:"min"},
            {id:"lap_interval",label:"Lap interval",default:0,suffix:"seconds (0=manual)"}
        ],
        calc: null  // lazy-loaded
    },

randomnum: {
        name:"Random Number Generator", desc:"Generate random integers, decimals, dice rolls and lists",
        icon:"fa-dice", cat:"everyday",
        inputs:[
            {id:"rng_min",label:"Minimum",default:1},
            {id:"rng_max",label:"Maximum",default:100},
            {id:"rng_count",label:"How many numbers",default:5},
            {id:"rng_type",label:"Type",type:"select",options:["Integers","Decimals (2dp)","Dice (d6)","Coin Flip","Shuffle 1–N"]}
        ],
        calc: null  // lazy-loaded
    },

evpetrolsavings: {
        name:"EV vs Petrol/Diesel Savings", desc:"Compare total cost of ownership — EV vs ICE vehicle",
        icon:"fa-charging-station", cat:"everyday",
        inputs:[
            {id:"ev_price",label:"EV Price (on-road)",default:1500000,prefix:"₹"},
            {id:"petrol_price",label:"Petrol/Diesel Car Price",default:1000000,prefix:"₹"},
            {id:"daily_km",label:"Daily Driving",default:40,suffix:"km"},
            {id:"petrol_rate",label:"Fuel Price",default:105,prefix:"₹",suffix:"/litre"},
            {id:"mileage",label:"Petrol Car Mileage",default:15,suffix:"km/l"},
            {id:"ev_efficiency",label:"EV Efficiency",default:8,suffix:"km/kWh"},
            {id:"elec_rate",label:"Electricity Rate",default:8,prefix:"₹",suffix:"/kWh"},
            {id:"years",label:"Ownership Period",default:8,suffix:"years"}
        ],
        calc: null,  // lazy-loaded
        tips:["EV running cost is ₹1-1.5/km vs ₹7-8/km for petrol","Home charging is 50% cheaper than public charging","EV maintenance is 60% lower — no oil changes, fewer parts"]
    },

speed_dist: {
        name:"Speed / Distance / Time", desc:"Solve any leg of the SDT triangle",
        icon:"fa-person-running", cat:"science",
        inputs:[
            {id:"speed",label:"Speed (0 to solve)",default:60,suffix:"km/h"},
            {id:"distance",label:"Distance (0 to solve)",default:0,suffix:"km"},
            {id:"time",label:"Time (0 to solve)",default:2,suffix:"hrs"}
        ],
        calc: null  // lazy-loaded
    },

newtons: {
        name:"Newton's Laws (F=ma)", desc:"Force, mass, acceleration & energy",
        icon:"fa-apple-whole", cat:"science",
        inputs:[
            {id:"mass",label:"Mass",default:10,suffix:"kg"},
            {id:"acceleration",label:"Acceleration",default:9.8,suffix:"m/s²"},
            {id:"velocity",label:"Velocity",default:5,suffix:"m/s"}
        ],
        calc: null  // lazy-loaded
    },

ohm_advanced: {
        name:"Circuit Power Calculator", desc:"Series & parallel resistance + power",
        icon:"fa-circle-nodes", cat:"science",
        inputs:[
            {id:"r1",label:"Resistance R1",default:100,suffix:"Ω"},
            {id:"r2",label:"Resistance R2",default:200,suffix:"Ω"},
            {id:"r3",label:"Resistance R3",default:300,suffix:"Ω"},
            {id:"voltage",label:"Supply Voltage",default:12,suffix:"V"}
        ],
        calc: null  // lazy-loaded
    },

density: {
        name:"Density Calculator", desc:"Density, mass, volume — solve any",
        icon:"fa-cube", cat:"science",
        inputs:[
            {id:"mass",label:"Mass (0 to solve)",default:500,suffix:"g"},
            {id:"volume",label:"Volume (0 to solve)",default:250,suffix:"cm³"},
            {id:"density",label:"Density (0 to solve)",default:0,suffix:"g/cm³"}
        ],
        calc: null  // lazy-loaded
    },

chemMolar: {
        name:"Molar Mass Calculator", desc:"Concentration, moles & molarity",
        icon:"fa-flask-vial", cat:"science",
        inputs:[
            {id:"moles",label:"Moles (mol)",default:2,suffix:"mol"},
            {id:"molarMass",label:"Molar Mass",default:18,suffix:"g/mol"},
            {id:"volume",label:"Solution Volume",default:500,suffix:"mL"}
        ],
        calc: null  // lazy-loaded
    },

wavelength: {
        name:"Wave Properties Calculator", desc:"Wavelength, frequency, wave speed",
        icon:"fa-wave-square", cat:"science",
        inputs:[
            {id:"speed",label:"Wave Speed",default:343,suffix:"m/s"},
            {id:"frequency",label:"Frequency",default:440,suffix:"Hz"}
        ],
        calc: null  // lazy-loaded
    },

gravitational: {
        name:"Gravitational Force", desc:"Newton's law of universal gravitation",
        icon:"fa-earth-americas", cat:"science",
        inputs:[
            {id:"m1",label:"Mass 1",default:5.972e24,suffix:"kg"},
            {id:"m2",label:"Mass 2",default:7.342e22,suffix:"kg"},
            {id:"r",label:"Distance",default:3.844e8,suffix:"m"}
        ],
        calc: null  // lazy-loaded
    },

halflife: {
        name:"Radioactive Decay / Half-Life", desc:"Remaining quantity after radioactive decay",
        icon:"fa-radiation", cat:"science",
        inputs:[
            {id:"initial",label:"Initial Quantity",default:1000,suffix:"g"},
            {id:"halflife",label:"Half-Life",default:5730,suffix:"years"},
            {id:"time",label:"Elapsed Time",default:11460,suffix:"years"}
        ],
        calc: null  // lazy-loaded
    },

ph: {
        name:"pH Calculator", desc:"Acid/base strength from H⁺ ion concentration",
        icon:"fa-flask", cat:"science",
        inputs:[
            {id:"conc",label:"H⁺ Concentration (mol/L)",default:1e-7,suffix:"mol/L"},
            {id:"temp",label:"Temperature",default:25,suffix:"°C"}
        ],
        calc: null  // lazy-loaded
    },

kinematicCalc: {
        name:"Kinematics Calculator", desc:"SUVAT equations — solve for any variable",
        icon:"fa-satellite", cat:"science",
        inputs:[
            {id:"u",label:"Initial Velocity (u)",default:0,suffix:"m/s"},
            {id:"a",label:"Acceleration (a)",default:9.8,suffix:"m/s²"},
            {id:"t",label:"Time (t)",default:5,suffix:"s"}
        ],
        calc: null  // lazy-loaded
    },

thermodynamics: {
        name:"Gas Laws Calculator", desc:"Ideal gas law, Boyle's, Charles's law",
        icon:"fa-temperature-arrow-up", cat:"science",
        inputs:[
            {id:"p1",label:"Initial Pressure P₁",default:1,suffix:"atm"},
            {id:"v1",label:"Initial Volume V₁",default:10,suffix:"L"},
            {id:"t1",label:"Initial Temp T₁",default:300,suffix:"K"},
            {id:"v2",label:"Final Volume V₂ (Boyle's)",default:5,suffix:"L"},
            {id:"t2",label:"Final Temp T₂",default:600,suffix:"K"}
        ],
        calc: null  // lazy-loaded
    },

acceleration: {
        name:"Acceleration Calculator", desc:"Linear acceleration, deceleration and stopping distance",
        icon:"fa-gauge-simple-high", cat:"science",
        inputs:[
            {id:"v1_acc",label:"Initial Velocity (u)",default:0,suffix:"m/s"},
            {id:"v2_acc",label:"Final Velocity (v)",default:30,suffix:"m/s"},
            {id:"time_acc",label:"Time taken (t)",default:10,suffix:"s"}
        ],
        calc: null  // lazy-loaded
    },

concrete: {
        name:"Concrete Calculator", desc:"Cement, sand, aggregate for slabs & columns",
        icon:"fa-building", cat:"construction",
        inputs:[
            {id:"length",label:"Length",default:6,suffix:"m"},
            {id:"width",label:"Width",default:4,suffix:"m"},
            {id:"depth",label:"Thickness/Depth",default:0.15,suffix:"m"},
            {id:"mix",label:"Mix Ratio",type:"select",options:["M15 (1:2:4)","M20 (1:1.5:3)","M25 (1:1:2)"]}
        ],
        calc: null  // lazy-loaded
    },

bricks: {
        name:"Brick & Mortar Calculator", desc:"Number of bricks and mortar needed for a wall",
        icon:"fa-border-all", cat:"construction",
        inputs:[
            {id:"length",label:"Wall Length",default:10,suffix:"m"},
            {id:"height",label:"Wall Height",default:3,suffix:"m"},
            {id:"thickness",label:"Wall Thickness",type:"select",options:["Half Brick (115mm)","One Brick (230mm)","1.5 Brick (345mm)"]},
            {id:"brickL",label:"Brick Length",default:230,suffix:"mm"},
            {id:"brickH",label:"Brick Height",default:76,suffix:"mm"}
        ],
        calc: null  // lazy-loaded
    },

paint: {
        name:"Paint Calculator", desc:"Litres of paint needed for walls & ceiling",
        icon:"fa-paint-roller", cat:"construction",
        inputs:[
            {id:"length",label:"Room Length",default:5,suffix:"m"},
            {id:"width",label:"Room Width",default:4,suffix:"m"},
            {id:"height",label:"Room Height",default:3,suffix:"m"},
            {id:"doors",label:"Number of Doors",default:1},
            {id:"windows",label:"Number of Windows",default:2},
            {id:"coats",label:"Coats of Paint",default:2}
        ],
        calc: null  // lazy-loaded
    },

flooring: {
        name:"Flooring / Tiles Calculator", desc:"Number of tiles & boxes for any room",
        icon:"fa-grip", cat:"construction",
        inputs:[
            {id:"roomL",label:"Room Length",default:5,suffix:"m"},
            {id:"roomW",label:"Room Width",default:4,suffix:"m"},
            {id:"tileL",label:"Tile Length",default:600,suffix:"mm"},
            {id:"tileW",label:"Tile Width",default:600,suffix:"mm"},
            {id:"boxQty",label:"Tiles per Box",default:4}
        ],
        calc: null  // lazy-loaded
    },

steel: {
        name:"Steel / Rebar Calculator", desc:"Weight of steel bars for reinforcement",
        icon:"fa-bars-progress", cat:"construction",
        inputs:[
            {id:"dia",label:"Bar Diameter",default:12,suffix:"mm"},
            {id:"length",label:"Total Bar Length",default:100,suffix:"m"},
            {id:"count",label:"Number of Bars",default:10}
        ],
        calc: null  // lazy-loaded
    },

roofing: {
        name:"Roofing Material Calculator", desc:"Sheets, underlayment & ridge caps needed",
        icon:"fa-house-chimney", cat:"construction",
        inputs:[
            {id:"length",label:"Roof Length",default:10,suffix:"m"},
            {id:"width",label:"Roof Width (one side)",default:5,suffix:"m"},
            {id:"pitch",label:"Roof Pitch",default:30,suffix:"°"},
            {id:"sheetArea",label:"Sheet Coverage",default:2.7,suffix:"m²/sheet"}
        ],
        calc: null  // lazy-loaded
    },

earthwork: {
        name:"Earthwork / Excavation", desc:"Volume of soil for trenches & pits",
        icon:"fa-tractor", cat:"construction",
        inputs:[
            {id:"length",label:"Length",default:10,suffix:"m"},
            {id:"width",label:"Width",default:3,suffix:"m"},
            {id:"depth",label:"Depth",default:1.5,suffix:"m"},
            {id:"swell",label:"Soil Swell Factor",default:25,suffix:"%"}
        ],
        calc: null  // lazy-loaded
    },

plasterwork: {
        name:"Plaster Calculator", desc:"Cement & sand for wall plastering",
        icon:"fa-layer-group", cat:"construction",
        inputs:[
            {id:"length",label:"Wall Length",default:10,suffix:"m"},
            {id:"height",label:"Wall Height",default:3,suffix:"m"},
            {id:"thickness",label:"Plaster Thickness",default:12,suffix:"mm"},
            {id:"ratio",label:"Mix Ratio",type:"select",options:["1:3 (rich)","1:4 (standard)","1:6 (lean)"]}
        ],
        calc: null  // lazy-loaded
    },

waterTank: {
        name:"Water Tank / Reservoir Size", desc:"Capacity for household or building use",
        icon:"fa-water", cat:"construction",
        inputs:[
            {id:"people",label:"Number of Residents",default:4},
            {id:"days",label:"Storage Days Required",default:2},
            {id:"perHead",label:"Liters per Person/Day",default:135}
        ],
        calc: null  // lazy-loaded
    },

landarea: {
        name:"Plot & Land Area Converter", desc:"Convert between Indian and international area units",
        icon:"fa-map", cat:"construction", badge:"Popular",
        inputs:[
            {id:"areaVal",label:"Area Value",default:1,suffix:"unit"},
            {id:"fromUnit",label:"From Unit",type:"select",options:["Square Meter","Square Feet","Square Yard","Acre","Hectare","Bigha (UP/Bihar)","Bigha (Rajasthan)","Cent","Gunta","Marla","Kanal"]}
        ],
        calc: null  // lazy-loaded
    },

stampdutycalc: {
        name:"Stamp Duty & Registration Calculator", desc:"Property registration cost based on value and state",
        icon:"fa-stamp", cat:"construction",
        inputs:[
            {id:"propVal",label:"Property Value",default:5000000,prefix:"₹"},
            {id:"state",label:"State",type:"select",options:["Maharashtra","Karnataka","Delhi","Tamil Nadu","UP/Bihar","Gujarat","Rajasthan"]},
            {id:"gender",label:"Buyer Gender",type:"select",options:["Male","Female","Joint (Male+Female)"]}
        ],
        calc: null  // lazy-loaded
    },

constructioncost: {
        name:"Home Construction Cost", desc:"Estimate construction cost per sq ft by city tier",
        icon:"fa-building", cat:"construction",
        inputs:[
            {id:"area_c",label:"Built-up Area",default:1500,suffix:"sq ft"},
            {id:"floors",label:"Number of Floors",default:1},
            {id:"tier",label:"City Tier / Quality",type:"select",options:["Tier 1 Metro (Premium ₹2500/sqft)","Tier 1 Metro (Standard ₹1800/sqft)","Tier 2 City (₹1400/sqft)","Tier 3 Town (₹1100/sqft)","Village (₹800/sqft)"]},
            {id:"finishLevel",label:"Finishing Level",type:"select",options:["Basic","Standard","Premium","Luxury"]}
        ],
        calc: null  // lazy-loaded
    },

solarpanel: {
        name:"Solar Panel Savings Calculator", desc:"Rooftop solar ROI, payback period and lifetime savings",
        icon:"fa-solar-panel", cat:"construction",
        inputs:[
            {id:"monthlyBill",label:"Current Monthly Electricity Bill",default:3000,prefix:"₹"},
            {id:"systemKw",label:"Solar System Size",default:3,suffix:"kW"},
            {id:"systemCost",label:"Installation Cost",default:150000,prefix:"₹"},
            {id:"tariff",label:"Electricity Tariff",default:8,prefix:"₹",suffix:"/unit"}
        ],
        calc: null  // lazy-loaded
    },

homerenovation: {
        name:"Home Renovation Cost Estimator", desc:"Room-wise renovation budget with material costs",
        icon:"fa-paint-roller", cat:"construction",
        inputs:[
            {id:"area",label:"Total Area",default:1000,suffix:"sq ft"},
            {id:"scope",label:"Renovation Scope",type:"select",options:["Full Renovation","Kitchen Only","Bathroom Only","Painting Only","Flooring Only"]},
            {id:"quality",label:"Material Quality",type:"select",options:["Economy","Standard","Premium","Luxury"]},
            {id:"city",label:"City Tier",type:"select",options:["Metro (Delhi/Mumbai)","Tier-1 (Pune/Hyd)","Tier-2","Tier-3"]}
        ],
        calc: null,  // lazy-loaded
        tips:["Get 3 contractor quotes minimum","Keep 15-20% buffer for unexpected costs","Plumbing and electrical should be done before tiling"]
    },

cgpa: {
        name:"CGPA to Percentage", desc:"Convert CGPA to percentage (various university scales)",
        icon:"fa-graduation-cap", cat:"education", badge:"Popular",
        inputs:[
            {id:"cgpa",label:"Your CGPA",default:8.5,suffix:"/10"},
            {id:"scale",label:"CGPA Scale",type:"select",options:["10-point (×9.5 — CBSE/VTU)","10-point (×10 — Mumbai Univ)","10-point (×9.25 — Amity)","4-point (US GPA)"]},
            {id:"maxCgpa",label:"Maximum CGPA in Your Batch",default:9.8,suffix:"/10"}
        ],
        calc: null  // lazy-loaded
    },

examneeded: {
        name:"Exam Score Needed", desc:"What score you need in finals to achieve your target percentage",
        icon:"fa-file-pen", cat:"education",
        inputs:[
            {id:"currentMarks",label:"Marks Scored So Far",default:340,suffix:"marks"},
            {id:"totalSoFar",label:"Max Marks So Far",default:400,suffix:"marks"},
            {id:"finalMax",label:"Final Exam Max Marks",default:100,suffix:"marks"},
            {id:"targetPct",label:"Target Overall Percentage",default:75,suffix:"%"}
        ],
        calc: null  // lazy-loaded
    },

eduloan: {
        name:"Education Loan EMI", desc:"Student loan EMI with moratorium period",
        icon:"fa-book-open", cat:"education",
        inputs:[
            {id:"loanAmt",label:"Loan Amount",default:500000,prefix:"₹"},
            {id:"eduRate",label:"Interest Rate",default:10.5,suffix:"% p.a."},
            {id:"moratorium",label:"Moratorium Period (course duration)",default:24,suffix:"months"},
            {id:"repayTenure",label:"Repayment Tenure After Course",default:60,suffix:"months"}
        ],
        calc: null  // lazy-loaded
    },

studyhours: {
        name:"Study Hours Planner", desc:"Plan study hours per subject to cover syllabus before exam",
        icon:"fa-clock", cat:"education",
        inputs:[
            {id:"subjects",label:"Number of Subjects",default:5},
            {id:"daysLeft",label:"Days Until Exam",default:30,suffix:"days"},
            {id:"hoursPerDay",label:"Available Study Hours/Day",default:6,suffix:"hrs"},
            {id:"revisions",label:"Number of Revisions Planned",default:2}
        ],
        calc: null  // lazy-loaded
    },

scholarship: {
        name:"Scholarship Savings Calculator", desc:"How much a scholarship reduces your total education loan burden",
        icon:"fa-medal", cat:"education",
        inputs:[
            {id:"totalFee",label:"Total Course Fee",default:2000000,prefix:"₹"},
            {id:"scholarAmt",label:"Scholarship Amount",default:400000,prefix:"₹"},
            {id:"loanRate_s",label:"Loan Interest Rate",default:10.5,suffix:"% p.a."},
            {id:"tenure_s",label:"Loan Repayment Tenure",default:60,suffix:"months"}
        ],
        calc: null  // lazy-loaded
    },

};


// ─── CATEGORIES ─────────────────────────────────────────────────────────────
const CATS = {
    math:         { name:"Mathematics",     icon:"fa-square-root-variable", color:"linear-gradient(135deg,#5b5ef4,#7b7ef8)" },
    finance:      { name:"Finance",         icon:"fa-indian-rupee-sign",    color:"linear-gradient(135deg,#00c9a7,#00a08a)" },
    health:       { name:"Health",          icon:"fa-heart-pulse",          color:"linear-gradient(135deg,#f0544f,#d43c37)" },
    unit:         { name:"Unit Converters", icon:"fa-arrows-left-right",    color:"linear-gradient(135deg,#f5a623,#e09000)" },
    datetime:     { name:"Date & Time",     icon:"fa-calendar-days",        color:"linear-gradient(135deg,#a855f7,#7c3aed)" },
    engineering:  { name:"Engineering",     icon:"fa-microchip",            color:"linear-gradient(135deg,#06b6d4,#0891b2)" },
    science:      { name:"Science",         icon:"fa-atom",                 color:"linear-gradient(135deg,#ec4899,#be185d)" },
    construction: { name:"Construction",    icon:"fa-helmet-safety",        color:"linear-gradient(135deg,#f97316,#c2410c)" },
    everyday:     { name:"Everyday",        icon:"fa-hand-holding-heart",   color:"linear-gradient(135deg,#84cc16,#65a30d)" },
    education:    { name:"Education",       icon:"fa-graduation-cap",       color:"linear-gradient(135deg,#f59e0b,#d97706)" }
};

// Build category → calc list
const CAT_LIST = {};
Object.keys(CATS).forEach(c => CAT_LIST[c] = []);
Object.entries(DB).forEach(([id,calc]) => { if(CAT_LIST[calc.cat]) CAT_LIST[calc.cat].push(id); });
