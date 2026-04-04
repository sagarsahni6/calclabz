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
    // ── MATH ──────────────────────────────────────
    percentage: {
        name:"Percentage Calculator", desc:"X% of a number, percentage change & more",
        icon:"fa-percent", cat:"math",
        inputs:[
            {id:"val",label:"Value",default:200},
            {id:"pct",label:"Percentage",default:25,suffix:"%"}
        ],
        calc(v){
            const res = v.val * v.pct / 100;
            const pctOf = (v.pct / v.val) * 100;
            return {
                main:{label:"Result (X% of Y)",value:res.toFixed(2)},
                secondary:[
                    {label:"% of total",value:pctOf.toFixed(3)+"%"},
                    {label:"Remaining",value:(v.val - res).toFixed(2)},
                    {label:"Increase by "+v.pct+"%",value:(v.val*(1+v.pct/100)).toFixed(2)}
                ]
            };
        },
        tips:["To find what % A is of B: (A/B)×100","% change = (New−Old)/Old × 100"]
    },
    ratio: {
        name:"Ratio Calculator", desc:"Simplify ratios and find proportional values",
        icon:"fa-equals", cat:"math",
        inputs:[
            {id:"a",label:"First Value (A)",default:12},
            {id:"b",label:"Second Value (B)",default:18}
        ],
        calc(v){
            const gcd = (x,y) => y===0?x:gcd(y,x%y);
            const g = gcd(Math.abs(v.a),Math.abs(v.b));
            return {
                main:{label:"Simplified Ratio",value:`${v.a/g} : ${v.b/g}`},
                secondary:[
                    {label:"A / B",value:(v.a/v.b).toFixed(4)},
                    {label:"B / A",value:(v.b/v.a).toFixed(4)},
                    {label:"A as % of total",value:((v.a/(v.a+v.b))*100).toFixed(2)+"%"}
                ]
            };
        }
    },
    squareroot: {
        name:"Square Root Calculator", desc:"Square root, cube root & nth root",
        icon:"fa-square-root-variable", cat:"math",
        inputs:[
            {id:"n",label:"Number",default:144},
            {id:"root",label:"Root (nth)",default:2}
        ],
        calc(v){
            const res = Math.pow(v.n, 1/v.root);
            return {
                main:{label:`${v.root}th Root of ${v.n}`,value:res.toFixed(6)},
                secondary:[
                    {label:"Square Root (√)",value:Math.sqrt(v.n).toFixed(6)},
                    {label:"Cube Root (∛)",value:Math.cbrt(v.n).toFixed(6)},
                    {label:"n² (squared)",value:(v.n*v.n).toLocaleString()}
                ]
            };
        }
    },
    logarithm: {
        name:"Logarithm Calculator", desc:"Natural log, log base 10 and custom base",
        icon:"fa-wave-square", cat:"math",
        inputs:[
            {id:"n",label:"Number",default:100},
            {id:"base",label:"Log Base",default:10}
        ],
        calc(v){
            return {
                main:{label:`log₍${v.base}₎(${v.n})`,value:(Math.log(v.n)/Math.log(v.base)).toFixed(8)},
                secondary:[
                    {label:"Natural Log ln(n)",value:Math.log(v.n).toFixed(8)},
                    {label:"Log₁₀(n)",value:Math.log10(v.n).toFixed(8)},
                    {label:"Log₂(n)",value:Math.log2(v.n).toFixed(8)}
                ]
            };
        }
    },
    factorial: {
        name:"Factorial Calculator", desc:"n! Factorial, permutations & combinations",
        icon:"fa-exclamation", cat:"math",
        inputs:[
            {id:"n",label:"n (max 20)",default:10},
            {id:"r",label:"r (for nPr, nCr)",default:3}
        ],
        calc(v){
            const fact = n => n<=1?1:n*fact(n-1);
            const n=Math.min(20,Math.floor(v.n)), r=Math.min(n,Math.floor(v.r));
            const nf=fact(n), rf=fact(r), nmrf=fact(n-r);
            return {
                main:{label:`${n}! Factorial`,value:nf.toLocaleString()},
                secondary:[
                    {label:`P(${n},${r}) Permutations`,value:(nf/nmrf).toLocaleString()},
                    {label:`C(${n},${r}) Combinations`,value:(nf/(rf*nmrf)).toLocaleString()}
                ]
            };
        }
    },
    quadratic: {
        name:"Quadratic Equation", desc:"Solve ax² + bx + c = 0",
        icon:"fa-superscript", cat:"math",
        inputs:[
            {id:"a",label:"a (coefficient of x²)",default:1},
            {id:"b",label:"b (coefficient of x)",default:-5},
            {id:"c",label:"c (constant)",default:6}
        ],
        calc(v){
            const d = v.b*v.b - 4*v.a*v.c;
            if(d<0) return {main:{label:"Discriminant",value:"No real roots (D<0)"},secondary:[{label:"D",value:d.toFixed(4)}]};
            const x1 = (-v.b+Math.sqrt(d))/(2*v.a);
            const x2 = (-v.b-Math.sqrt(d))/(2*v.a);
            return {
                main:{label:"Root x₁",value:x1.toFixed(6)},
                secondary:[
                    {label:"Root x₂",value:x2.toFixed(6)},
                    {label:"Discriminant D",value:d.toFixed(4)},
                    {label:"Vertex x",value:(-v.b/(2*v.a)).toFixed(4)}
                ]
            };
        }
    },
    prime: {
        name:"Prime Number Checker", desc:"Check if a number is prime & find factors",
        icon:"fa-hashtag", cat:"math",
        inputs:[{id:"n",label:"Number to Check",default:97}],
        calc(v){
            const n=Math.floor(v.n);
            const isPrime = n => {if(n<2)return false;for(let i=2;i<=Math.sqrt(n);i++)if(n%i===0)return false;return true;};
            const factors = [];
            for(let i=1;i<=n;i++) if(n%i===0) factors.push(i);
            return {
                main:{label:"Is Prime?",value:isPrime(n)?"✓ YES — Prime":"✗ NO — Not Prime"},
                secondary:[
                    {label:"Factors",value:factors.join(', ')},
                    {label:"Factor Count",value:factors.length},
                    {label:"Next Prime",value:(()=>{let x=n+1;while(!isPrime(x))x++;return x;})()}
                ]
            };
        }
    },
    numbersystem: {
        name:"Number Base Converter", desc:"Binary, Octal, Decimal, Hex conversions",
        icon:"fa-code", cat:"math",
        inputs:[
            {id:"dec",label:"Decimal Number",default:255},
            {id:"customBase",label:"Custom Base (2–36)",default:16}
        ],
        calc(v){
            const d=Math.floor(Math.abs(v.dec)), base=Math.min(36,Math.max(2,Math.floor(v.customBase)));
            return {
                main:{label:"Binary (Base 2)",value:d.toString(2)},
                secondary:[
                    {label:"Octal (Base 8)",value:d.toString(8)},
                    {label:"Hexadecimal (Base 16)",value:d.toString(16).toUpperCase()},
                    {label:`Base ${base}`,value:d.toString(base).toUpperCase()}
                ]
            };
        }
    },
    average: {
        name:"Average / Mean Calculator", desc:"Mean, median, mode, range, variance",
        icon:"fa-chart-simple", cat:"math",
        inputs:[{id:"nums",label:"Numbers (comma-separated)",default:"4,8,15,16,23,42",type:"text"}],
        calc(v){
            const arr = String(v.nums).split(',').map(Number).filter(n=>!isNaN(n));
            if(!arr.length) return {main:{label:"Error",value:"Enter numbers"}};
            arr.sort((a,b)=>a-b);
            const mean = arr.reduce((s,x)=>s+x,0)/arr.length;
            const med = arr.length%2===0?(arr[arr.length/2-1]+arr[arr.length/2])/2:arr[Math.floor(arr.length/2)];
            const variance = arr.reduce((s,x)=>s+(x-mean)**2,0)/arr.length;
            return {
                main:{label:"Mean (Average)",value:mean.toFixed(4)},
                secondary:[
                    {label:"Median",value:med},
                    {label:"Range",value:arr[arr.length-1]-arr[0]},
                    {label:"Std Deviation",value:Math.sqrt(variance).toFixed(4)},
                    {label:"Count",value:arr.length}
                ]
            };
        }
    },

    // ── FINANCE ───────────────────────────────────
    emi: {
        name:"Loan EMI Calculator", desc:"Monthly EMI, total interest & payment breakdown",
        icon:"fa-building-columns", cat:"finance", badge:"Popular",
        inputs:[
            {id:"principal",label:"Loan Amount",default:1000000,prefix:"₹"},
            {id:"rate",label:"Interest Rate",default:8.5,suffix:"% p.a."},
            {id:"tenure",label:"Tenure (months)",default:60}
        ],
        calc(v){
            const P=v.principal,r=v.rate/12/100,n=v.tenure;
            const emi=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
            const total=emi*n, interest=total-P;
            return {
                main:{label:"Monthly EMI",value:"₹"+Math.round(emi).toLocaleString()},
                secondary:[
                    {label:"Total Interest",value:"₹"+Math.round(interest).toLocaleString()},
                    {label:"Total Payment",value:"₹"+Math.round(total).toLocaleString()},
                    {label:"Interest %",value:((interest/P)*100).toFixed(1)+"%"}
                ],
                chart:{a:Math.round(P),b:Math.round(interest),lA:"Principal",lB:"Interest",
                    timeline:(function(){
                        var labels=[],invested=[],intPaid=[],bal=[];
                        var years=Math.ceil(n/12);
                        var balance=P,totPrin=0,totInt=0;
                        for(var yr=1;yr<=years;yr++){
                            var monthsThisYear=Math.min(12,n-(yr-1)*12);
                            for(var mo=0;mo<monthsThisYear;mo++){
                                var intMo=balance*r;
                                var prinMo=emi-intMo;
                                balance-=prinMo; totPrin+=prinMo; totInt+=intMo;
                            }
                            labels.push('Yr '+yr);
                            invested.push(Math.round(totPrin));
                            intPaid.push(Math.round(totInt));
                            bal.push(Math.max(0,Math.round(balance)));
                        }
                        return {labels:labels,datasets:[
                            {label:'Principal Paid',data:invested,fill:false},
                            {label:'Interest Paid',data:intPaid,fill:false},
                            {label:'Balance',data:bal,fill:true}
                        ]};
                    })()
                }
            };
        },
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
        calc(v){
            const P=v.monthly,r=v.return/12/100,n=v.years*12;
            const FV=P*((Math.pow(1+r,n)-1)/r)*(1+r);
            const invested=P*n, returns=FV-invested;
            return {
                main:{label:"Future Value",value:"₹"+Math.round(FV).toLocaleString()},
                secondary:[
                    {label:"Total Invested",value:"₹"+invested.toLocaleString()},
                    {label:"Expected Returns",value:"₹"+Math.round(returns).toLocaleString(),pos:true},
                    {label:"Return %",value:((returns/invested)*100).toFixed(1)+"%",pos:true}
                ],
                chart:{a:Math.round(invested),b:Math.round(returns),lA:"Invested",lB:"Returns",
                    timeline:(function(){
                        var labels=[],invArr=[],corpusArr=[];
                        for(var yr=1;yr<=v.years;yr++){
                            var months=yr*12;
                            var fv=P*((Math.pow(1+r,months)-1)/r)*(1+r);
                            labels.push('Yr '+yr);
                            invArr.push(Math.round(P*months));
                            corpusArr.push(Math.round(fv));
                        }
                        return {labels:labels,datasets:[
                            {label:'Amount Invested',data:invArr,fill:false},
                            {label:'Corpus Value',data:corpusArr,fill:true}
                        ]};
                    })()
                }
            };
        }
    },
    gst: {
        name:"GST Calculator", desc:"Add GST to net price — CGST, SGST & IGST split",
        icon:"fa-file-invoice", cat:"finance", badge:"Popular",
        inputs:[
            {id:"net",label:"Net Amount (Pre-GST)",default:1000,prefix:"₹"},
            {id:"rate",label:"GST Rate",type:"select",options:["3%","5%","12%","18%","28%"]}
        ],
        calc(v){
            const rate=parseFloat(v.rate), gst=v.net*rate/100, gross=v.net+gst;
            return {
                main:{label:"Gross Amount (with GST)",value:"₹"+gross.toFixed(2)},
                secondary:[
                    {label:"Net Amount (Pre-GST)",value:"₹"+v.net.toFixed(2)},
                    {label:"Total GST",value:"₹"+gst.toFixed(2)},
                    {label:"CGST ("+rate/2+"%)",value:"₹"+(gst/2).toFixed(2)},
                    {label:"SGST ("+rate/2+"%)",value:"₹"+(gst/2).toFixed(2)},
                    {label:"IGST ("+rate+"%)",value:"₹"+gst.toFixed(2)}
                ],
                chart:{labels:['Net Amount','CGST','SGST'],data:[v.net,gst/2,gst/2]}
            };
        },
        tips:["CGST + SGST = for intra-state transactions","IGST = for inter-state transactions"]
    },
    pregst: {
        name:"Pre-GST / Reverse GST", desc:"Extract original price from GST-inclusive MRP",
        icon:"fa-file-invoice-dollar", cat:"finance",
        inputs:[
            {id:"gross",label:"GST-Inclusive Amount (MRP)",default:1180,prefix:"₹"},
            {id:"rate",label:"GST Rate",type:"select",options:["3%","5%","12%","18%","28%"]}
        ],
        calc(v){
            const rate=parseFloat(v.rate);
            const net=v.gross*100/(100+rate);
            const gst=v.gross-net;
            return {
                main:{label:"Pre-GST / Net Price",value:"₹"+net.toFixed(2)},
                secondary:[
                    {label:"GST-Inclusive Price (given)",value:"₹"+v.gross.toFixed(2)},
                    {label:"GST Amount Included",value:"₹"+gst.toFixed(2)},
                    {label:"CGST ("+rate/2+"%)",value:"₹"+(gst/2).toFixed(2)},
                    {label:"SGST ("+rate/2+"%)",value:"₹"+(gst/2).toFixed(2)},
                    {label:"IGST ("+rate+"%)",value:"₹"+gst.toFixed(2)}
                ]
            };
        },
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
        calc(v){
            const nMap={Annually:1,"Semi-annually":2,Quarterly:4,Monthly:12,Daily:365};
            const n=nMap[v.compound]||1, P=v.principal, r=v.rate/100, t=v.time;
            const amount=P*Math.pow(1+r/n,n*t), ci=amount-P;
            return {
                main:{label:"Compound Interest",value:"₹"+ci.toFixed(2)},
                secondary:[
                    {label:"Total Amount",value:"₹"+amount.toFixed(2)},
                    {label:"Doubling Time",value:(Math.log(2)/Math.log(1+r/n)/n).toFixed(2)+" years"},
                    {label:"Growth",value:((amount/P-1)*100).toFixed(2)+"%",pos:true}
                ]
            };
        }
    },
    simpleinterest: {
        name:"Simple Interest", desc:"SI = PRT/100",
        icon:"fa-coins", cat:"finance",
        inputs:[
            {id:"principal",label:"Principal",default:100000,prefix:"₹"},
            {id:"rate",label:"Rate",default:6,suffix:"%"},
            {id:"time",label:"Time",default:2,suffix:"years"}
        ],
        calc(v){
            const si=(v.principal*v.rate*v.time)/100, total=v.principal+si;
            return {
                main:{label:"Simple Interest",value:"₹"+si.toFixed(2)},
                secondary:[
                    {label:"Total Amount",value:"₹"+total.toFixed(2)},
                    {label:"Effective Rate",value:v.rate+"%"},
                    {label:"Monthly Interest",value:"₹"+(si/(v.time*12)).toFixed(2)}
                ]
            };
        }
    },
    incomeTax: {
        name:"Income Tax Calculator", desc:"New regime FY 2025-26 (India)",
        icon:"fa-landmark", cat:"finance",
        inputs:[
            {id:"income",label:"Annual Income",default:1200000,prefix:"₹"},
            {id:"regime",label:"Tax Regime",type:"select",options:["New Regime","Old Regime"]},
            {id:"age",label:"Age Group",type:"select",options:["Below 60","60-80 years","Above 80"]}
        ],
        calc(v){
            const income=v.income;
            let tax=0;
            if(v.regime==="New Regime"){
                const slabs=[[400000,0],[400000,0.05],[400000,0.10],[400000,0.15],[400000,0.20],[400000,0.25],[Infinity,0.30]];
                let taxable=Math.max(0,income-75000); // standard deduction ₹75K
                let rem=taxable;
                for(const [lim,rate] of slabs){
                    if(rem<=0) break;
                    const chunk=Math.min(rem,lim);
                    tax+=chunk*rate; rem-=chunk;
                }
                if(taxable<=1200000) tax=0; // Section 87A rebate (Budget 2026)
            } else {
                const exempt=v.age==="Below 60"?250000:v.age==="60-80 years"?300000:500000;
                const taxable=Math.max(0,income-50000-exempt);
                let rem=taxable;
                const slabs=[[250000,0.05],[500000,0.20],[Infinity,0.30]];
                for(const [lim,rate] of slabs){
                    if(rem<=0) break;
                    const chunk=Math.min(rem,lim);
                    tax+=chunk*rate; rem-=chunk;
                }
            }
            const cess=Math.round(tax*0.04);
            const total=Math.round(tax)+cess;
            return {
                main:{label:"Total Tax Payable",value:"₹"+total.toLocaleString()},
                secondary:[
                    {label:"Base Tax",value:"₹"+Math.round(tax).toLocaleString()},
                    {label:"Health & Education Cess",value:"₹"+cess.toLocaleString()},
                    {label:"Effective Rate",value:(total/income*100).toFixed(2)+"%"},
                    {label:"Monthly Tax",value:"₹"+Math.round(total/12).toLocaleString()}
                ]
            };
        }
    },
    roi: {
        name:"ROI Calculator", desc:"Return on Investment & CAGR",
        icon:"fa-arrow-trend-up", cat:"finance",
        inputs:[
            {id:"initial",label:"Initial Investment",default:50000,prefix:"₹"},
            {id:"final",label:"Current Value",default:75000,prefix:"₹"},
            {id:"years",label:"Period",default:2,suffix:"years"}
        ],
        calc(v){
            const gain=v.final-v.initial;
            const roi=(gain/v.initial)*100;
            const cagr=(Math.pow(v.final/v.initial,1/v.years)-1)*100;
            return {
                main:{label:"Net Gain",value:"₹"+gain.toFixed(2)},
                secondary:[
                    {label:"ROI",value:roi.toFixed(2)+"%",pos:gain>0},
                    {label:"CAGR",value:cagr.toFixed(2)+"%",pos:gain>0},
                    {label:"Multiplier",value:(v.final/v.initial).toFixed(2)+"×"}
                ]
            };
        }
    },
    ppf: {
        name:"PPF Calculator", desc:"Public Provident Fund maturity",
        icon:"fa-piggy-bank", cat:"finance",
        inputs:[
            {id:"contribution",label:"Monthly Contribution",default:5000,prefix:"₹"},
            {id:"years",label:"Period",default:15,suffix:"years"},
            {id:"rate",label:"Rate",default:7.1,suffix:"%"}
        ],
        calc(v){
            const P=v.contribution,r=v.rate/100/12,n=v.years*12;
            const total=P*((Math.pow(1+r,n)-1)/r);
            const invested=P*n, interest=total-invested;
            return {
                main:{label:"Maturity Amount",value:"₹"+Math.round(total).toLocaleString()},
                secondary:[
                    {label:"Total Invested",value:"₹"+invested.toLocaleString()},
                    {label:"Interest Earned",value:"₹"+Math.round(interest).toLocaleString(),pos:true},
                    {label:"Effective Yield",value:(interest/invested*100).toFixed(2)+"%"}
                ]
            };
        }
    },
    fd: {
        name:"Fixed Deposit Calculator", desc:"FD maturity with quarterly compounding",
        icon:"fa-vault", cat:"finance",
        inputs:[
            {id:"principal",label:"Principal",default:100000,prefix:"₹"},
            {id:"rate",label:"Rate",default:6.5,suffix:"%"},
            {id:"years",label:"Period",default:5,suffix:"years"}
        ],
        calc(v){
            const P=v.principal,r=v.rate/100/4,n=v.years*4;
            const amount=P*Math.pow(1+r,n), interest=amount-P;
            return {
                main:{label:"Maturity Amount",value:"₹"+Math.round(amount).toLocaleString()},
                secondary:[
                    {label:"Total Interest",value:"₹"+Math.round(interest).toLocaleString()},
                    {label:"Principal",value:"₹"+P.toLocaleString()},
                    {label:"Monthly Income",value:"₹"+Math.round(interest/(v.years*12)).toLocaleString()}
                ]
            };
        }
    },
    mortgage: {
        name:"Mortgage Calculator", desc:"Home loan monthly payment & amortization",
        icon:"fa-house", cat:"finance",
        inputs:[
            {id:"amount",label:"Loan Amount",default:2500000,prefix:"₹"},
            {id:"rate",label:"Interest Rate",default:8.5,suffix:"%"},
            {id:"term",label:"Term",default:20,suffix:"years"}
        ],
        calc(v){
            const P=v.amount,r=v.rate/12/100,n=v.term*12;
            const pmt=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
            const total=pmt*n, interest=total-P;
            return {
                main:{label:"Monthly Payment",value:"₹"+Math.round(pmt).toLocaleString()},
                secondary:[
                    {label:"Total Interest",value:"₹"+Math.round(interest).toLocaleString()},
                    {label:"Total Payment",value:"₹"+Math.round(total).toLocaleString()},
                    {label:"Interest Ratio",value:((interest/total)*100).toFixed(1)+"%"}
                ]
            };
        }
    },
    carloan: {
        name:"Car Loan EMI", desc:"Vehicle loan monthly instalment",
        icon:"fa-car", cat:"finance",
        inputs:[
            {id:"amount",label:"Loan Amount",default:800000,prefix:"₹"},
            {id:"rate",label:"Rate",default:9,suffix:"%"},
            {id:"tenure",label:"Tenure",default:5,suffix:"years"}
        ],
        calc(v){
            const P=v.amount,r=v.rate/12/100,n=v.tenure*12;
            const emi=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
            const total=emi*n, interest=total-P;
            return {
                main:{label:"Monthly EMI",value:"₹"+Math.round(emi).toLocaleString()},
                secondary:[
                    {label:"Total Interest",value:"₹"+Math.round(interest).toLocaleString()},
                    {label:"Total Payment",value:"₹"+Math.round(total).toLocaleString()}
                ]
            };
        }
    },
    breakeven: {
        name:"Break-Even Calculator", desc:"Units & revenue needed to break even",
        icon:"fa-scale-balanced", cat:"finance",
        inputs:[
            {id:"fixed",label:"Fixed Costs",default:100000,prefix:"₹"},
            {id:"price",label:"Selling Price/Unit",default:500,prefix:"₹"},
            {id:"variable",label:"Variable Cost/Unit",default:300,prefix:"₹"}
        ],
        calc(v){
            const contrib=v.price-v.variable;
            if(contrib<=0) return {main:{label:"Error",value:"Price must exceed variable cost"}};
            const units=v.fixed/contrib;
            const revenue=units*v.price;
            return {
                main:{label:"Break-Even Units",value:Math.ceil(units).toLocaleString()},
                secondary:[
                    {label:"Break-Even Revenue",value:"₹"+Math.round(revenue).toLocaleString()},
                    {label:"Contribution Margin",value:"₹"+contrib.toFixed(2)},
                    {label:"Margin Ratio",value:((contrib/v.price)*100).toFixed(1)+"%"}
                ]
            };
        }
    },
    inflation: {
        name:"Inflation Calculator", desc:"Future value with inflation erosion",
        icon:"fa-fire-flame-curved", cat:"finance",
        inputs:[
            {id:"amount",label:"Current Amount",default:100000,prefix:"₹"},
            {id:"rate",label:"Inflation Rate",default:6,suffix:"%"},
            {id:"years",label:"Years",default:10}
        ],
        calc(v){
            const future=v.amount*Math.pow(1+v.rate/100,v.years);
            const pv=v.amount/Math.pow(1+v.rate/100,v.years);
            return {
                main:{label:"Future Cost (same value)",value:"₹"+Math.round(future).toLocaleString()},
                secondary:[
                    {label:"Purchasing Power Today",value:"₹"+Math.round(pv).toLocaleString()},
                    {label:"Value Eroded",value:"₹"+Math.round(future-v.amount).toLocaleString()},
                    {label:"Erosion %",value:((1-1/Math.pow(1+v.rate/100,v.years))*100).toFixed(1)+"%"}
                ]
            };
        }
    },

    // ── HEALTH ────────────────────────────────────
    bmi: {
        name:"BMI Calculator", desc:"Body Mass Index with category & ideal weight",
        icon:"fa-weight-scale", cat:"health", badge:"Popular",
        inputs:[
            {id:"weight",label:"Weight",default:70,suffix:"kg"},
            {id:"height",label:"Height",default:170,suffix:"cm"}
        ],
        calc(v){
            const h=v.height/100, bmi=v.weight/(h*h);
            const cat=bmi<18.5?"Underweight":bmi<25?"Normal ✓":bmi<30?"Overweight":"Obese";
            const ideal=22*h*h;
            return {
                main:{label:"Your BMI",value:bmi.toFixed(1)},
                secondary:[
                    {label:"Category",value:cat},
                    {label:"Ideal Weight",value:ideal.toFixed(1)+" kg"},
                    {label:"Healthy Range",value:"18.5 – 24.9"},
                    {label:"Weight to Ideal",value:(v.weight-ideal>0?"+":"")+( v.weight-ideal).toFixed(1)+" kg"}
                ]
            };
        },
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
        calc(v){
            const bmr=v.gender==="Male"?10*v.weight+6.25*v.height-5*v.age+5:10*v.weight+6.25*v.height-5*v.age-161;
            return {
                main:{label:"BMR",value:Math.round(bmr)+" kcal/day"},
                secondary:[
                    {label:"Sedentary (×1.2)",value:Math.round(bmr*1.2)+" kcal"},
                    {label:"Light Activity (×1.375)",value:Math.round(bmr*1.375)+" kcal"},
                    {label:"Moderate (×1.55)",value:Math.round(bmr*1.55)+" kcal"},
                    {label:"Very Active (×1.725)",value:Math.round(bmr*1.725)+" kcal"}
                ]
            };
        }
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
        calc(v){
            let bmr=v.gender==="Male"?88.362+13.397*v.weight+4.799*v.height-5.677*v.age:447.593+9.247*v.weight+3.098*v.height-4.330*v.age;
            const mult=[1.2,1.375,1.55,1.725,1.9];
            const idx=["Sedentary","Light","Moderate","Active","Very Active"].indexOf(v.activity);
            const tdee=Math.round(bmr*mult[idx]);
            return {
                main:{label:"TDEE",value:tdee+" kcal/day"},
                secondary:[
                    {label:"Weight Loss (−500 kcal)",value:(tdee-500)+" kcal"},
                    {label:"Maintenance",value:tdee+" kcal"},
                    {label:"Weight Gain (+500 kcal)",value:(tdee+500)+" kcal"},
                    {label:"BMR",value:Math.round(bmr)+" kcal"}
                ]
            };
        }
    },
    water: {
        name:"Water Intake Calculator", desc:"Daily hydration requirement",
        icon:"fa-droplet", cat:"health",
        inputs:[
            {id:"weight",label:"Weight",default:70,suffix:"kg"},
            {id:"activity",label:"Activity",type:"select",options:["Sedentary","Moderate","Active","Very Active"]}
        ],
        calc(v){
            const mult={Sedentary:30,Moderate:35,Active:40,"Very Active":45};
            const ml=Math.round(v.weight*mult[v.activity]);
            return {
                main:{label:"Daily Water",value:ml+" ml"},
                secondary:[
                    {label:"In Litres",value:(ml/1000).toFixed(1)+" L"},
                    {label:"Glasses (250ml)",value:Math.ceil(ml/250)+" glasses"},
                    {label:"Bottles (1L)",value:Math.ceil(ml/1000)+" bottles"}
                ]
            };
        }
    },
    heartrate: {
        name:"Heart Rate Zones", desc:"Target heart rate for every fitness zone",
        icon:"fa-heart-pulse", cat:"health",
        inputs:[
            {id:"age",label:"Age",default:30,suffix:"years"},
            {id:"resting",label:"Resting HR",default:65,suffix:"bpm"}
        ],
        calc(v){
            const max=220-v.age, res=max-v.resting;
            const z=(lo,hi)=>`${Math.round(v.resting+res*lo)}–${Math.round(v.resting+res*hi)} bpm`;
            return {
                main:{label:"Max Heart Rate",value:max+" bpm"},
                secondary:[
                    {label:"Zone 1 — Recovery (50–60%)",value:z(0.5,0.6)},
                    {label:"Zone 2 — Fat Burn (60–70%)",value:z(0.6,0.7)},
                    {label:"Zone 3 — Aerobic (70–80%)",value:z(0.7,0.8)},
                    {label:"Zone 4 — Threshold (80–90%)",value:z(0.8,0.9)},
                    {label:"Zone 5 — VO₂ Max (90–100%)",value:z(0.9,1.0)}
                ]
            };
        }
    },
    age: {
        name:"Age Calculator", desc:"Exact age in years, months, days & more",
        icon:"fa-birthday-cake", cat:"health",
        inputs:[{id:"dob",label:"Date of Birth",type:"date"}],
        calc(v){
            if(!v.dob) return {main:{label:"Error",value:"Select a date"}};
            const dob=new Date(v.dob), today=new Date();
            let y=today.getFullYear()-dob.getFullYear(), m=today.getMonth()-dob.getMonth(), d=today.getDate()-dob.getDate();
            if(d<0){m--;d+=new Date(today.getFullYear(),today.getMonth(),0).getDate();}
            if(m<0){y--;m+=12;}
            const days=Math.floor((today-dob)/86400000);
            const next=new Date(today.getFullYear(),dob.getMonth(),dob.getDate());
            if(next<today) next.setFullYear(today.getFullYear()+1);
            const daysToB=Math.ceil((next-today)/86400000);
            return {
                main:{label:"Your Age",value:`${y}y ${m}m ${d}d`},
                secondary:[
                    {label:"Total Days",value:days.toLocaleString()},
                    {label:"Total Weeks",value:Math.floor(days/7).toLocaleString()},
                    {label:"Total Months",value:(y*12+m)},
                    {label:"Birthday in",value:daysToB+" days"}
                ]
            };
        }
    },
    calories: {
        name:"Calories Burned Calculator", desc:"Calories burned during exercise",
        icon:"fa-person-running", cat:"health",
        inputs:[
            {id:"weight",label:"Weight",default:70,suffix:"kg"},
            {id:"duration",label:"Duration",default:30,suffix:"min"},
            {id:"activity",label:"Activity",type:"select",options:["Walking","Jogging","Running","Cycling","Swimming","HIIT","Yoga","Weight Training"]}
        ],
        calc(v){
            const mets={Walking:3.5,Jogging:7,Running:10,Cycling:8,Swimming:7,HIIT:12,Yoga:3,"Weight Training":5};
            const met=mets[v.activity]||5;
            const burned=Math.round((met*3.5*v.weight/200)*v.duration);
            return {
                main:{label:"Calories Burned",value:burned+" kcal"},
                secondary:[
                    {label:"Per Minute",value:(burned/v.duration).toFixed(1)+" kcal/min"},
                    {label:"Fat Burned",value:(burned/7700*1000).toFixed(1)+" g"},
                    {label:"MET Value",value:met}
                ]
            };
        }
    },
    sleep: {
        name:"Sleep Calculator", desc:"Optimal bedtimes based on sleep cycles",
        icon:"fa-moon", cat:"health",
        inputs:[{id:"wake",label:"Wake-Up Time",type:"time",default:"07:00"}],
        calc(v){
            if(!v.wake) return {main:{label:"Error",value:"Enter wake time"}};
            const [h,m]=v.wake.split(':').map(Number);
            const wm=h*60+m;
            const cycles=[6,5,4];
            const times=cycles.map(n=>{let sm=wm-n*90-14;if(sm<0)sm+=1440;return `${String(Math.floor(sm/60)%24).padStart(2,'0')}:${String(sm%60).padStart(2,'0')}`;});
            return {
                main:{label:"Best Bedtime (6 cycles / 9h)",value:times[0]},
                secondary:[
                    {label:"7.5h (5 cycles)",value:times[1]},
                    {label:"6h (4 cycles)",value:times[2]},
                    {label:"Fall-asleep buffer",value:"~14 minutes"}
                ]
            };
        }
    },
    macros: {
        name:"Macro Calculator", desc:"Daily protein, carbs & fat targets",
        icon:"fa-chart-pie", cat:"health",
        inputs:[
            {id:"calories",label:"Daily Calories",default:2000,suffix:"kcal"},
            {id:"goal",label:"Goal",type:"select",options:["Weight Loss","Maintenance","Muscle Gain"]}
        ],
        calc(v){
            const splits={"Weight Loss":[0.35,0.35,0.30],"Maintenance":[0.30,0.45,0.25],"Muscle Gain":[0.30,0.40,0.30]};
            const [p,c,f]=splits[v.goal];
            return {
                main:{label:"Protein",value:Math.round(v.calories*p/4)+"g"},
                secondary:[
                    {label:"Carbohydrates",value:Math.round(v.calories*c/4)+"g"},
                    {label:"Fat",value:Math.round(v.calories*f/9)+"g"},
                    {label:"Protein (kcal)",value:Math.round(v.calories*p)+" kcal"}
                ]
            };
        }
    },
    pregnancy: {
        name:"Pregnancy Due Date", desc:"EDD and trimester tracker",
        icon:"fa-baby", cat:"health",
        inputs:[{id:"lmp",label:"First Day of Last Period",type:"date"}],
        calc(v){
            if(!v.lmp) return {main:{label:"Error",value:"Select date"}};
            const lmp=new Date(v.lmp), due=new Date(lmp.getTime()+280*86400000), today=new Date();
            const weeks=Math.min(40,Math.max(0,Math.floor((today-lmp)/(7*86400000))));
            const daysLeft=Math.max(0,Math.ceil((due-today)/86400000));
            const tri=weeks<13?"1st Trimester":weeks<27?"2nd Trimester":"3rd Trimester";
            return {
                main:{label:"Expected Due Date",value:due.toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'})},
                secondary:[
                    {label:"Weeks Pregnant",value:weeks+" weeks"},
                    {label:"Trimester",value:tri},
                    {label:"Days Remaining",value:daysLeft+" days"},
                    {label:"Conception Date",value:new Date(lmp.getTime()+14*86400000).toLocaleDateString('en-IN')}
                ]
            };
        }
    },

    // ── UNIT CONVERTERS ───────────────────────────
    length: {
        name:"Length Converter", desc:"cm, m, km, inch, ft, mile, yard",
        icon:"fa-ruler", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:1},
            {id:"from",label:"From",type:"select",options:["Meters","Kilometers","Centimeters","Millimeters","Miles","Feet","Inches","Yards"]}
        ],
        calc(v){
            const toM={Meters:1,Kilometers:1000,Centimeters:0.01,Millimeters:0.001,Miles:1609.344,Feet:0.3048,Inches:0.0254,Yards:0.9144};
            const m=v.val*toM[v.from];
            return {
                main:{label:"Meters",value:m.toFixed(6)},
                secondary:Object.entries(toM).filter(([k])=>k!==v.from&&k!=='Meters').map(([k,f])=>({label:k,value:(m/f).toFixed(4)}))
            };
        }
    },
    weight: {
        name:"Weight Converter", desc:"kg, g, lb, oz, stone, tonne",
        icon:"fa-weight-hanging", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:1},
            {id:"from",label:"From",type:"select",options:["Kilograms","Grams","Milligrams","Pounds","Ounces","Stone","Tonnes"]}
        ],
        calc(v){
            const toKg={Kilograms:1,Grams:0.001,Milligrams:0.000001,Pounds:0.453592,Ounces:0.0283495,Stone:6.35029,Tonnes:1000};
            const kg=v.val*toKg[v.from];
            return {
                main:{label:"Kilograms",value:kg.toFixed(6)},
                secondary:Object.entries(toKg).filter(([k])=>k!==v.from&&k!=='Kilograms').map(([k,f])=>({label:k,value:(kg/f).toFixed(4)}))
            };
        }
    },
    temperature: {
        name:"Temperature Converter", desc:"°C, °F, K, Rankine",
        icon:"fa-temperature-half", cat:"unit",
        inputs:[
            {id:"val",label:"Temperature",default:100},
            {id:"from",label:"From",type:"select",options:["Celsius","Fahrenheit","Kelvin","Rankine"]}
        ],
        calc(v){
            let c;
            switch(v.from){case"Celsius":c=v.val;break;case"Fahrenheit":c=(v.val-32)*5/9;break;case"Kelvin":c=v.val-273.15;break;case"Rankine":c=(v.val-491.67)*5/9;}
            return {
                main:{label:"Celsius",value:c.toFixed(4)+"°C"},
                secondary:[
                    {label:"Fahrenheit",value:(c*9/5+32).toFixed(4)+"°F"},
                    {label:"Kelvin",value:(c+273.15).toFixed(4)+" K"},
                    {label:"Rankine",value:((c+273.15)*9/5).toFixed(4)+" R"}
                ]
            };
        }
    },
    area: {
        name:"Area Converter", desc:"m², km², acres, hectares, sq ft",
        icon:"fa-vector-square", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:1},
            {id:"from",label:"From",type:"select",options:["Square Meters","Square Kilometers","Square Feet","Square Inches","Acres","Hectares"]}
        ],
        calc(v){
            const toSqM={"Square Meters":1,"Square Kilometers":1e6,"Square Feet":0.092903,"Square Inches":0.00064516,"Acres":4046.86,"Hectares":10000};
            const sqm=v.val*toSqM[v.from];
            return {
                main:{label:"Square Meters",value:sqm.toFixed(4)+" m²"},
                secondary:Object.entries(toSqM).filter(([k])=>k!==v.from&&k!=='Square Meters').map(([k,f])=>({label:k,value:(sqm/f).toFixed(4)}))
            };
        }
    },
    speed: {
        name:"Speed Converter", desc:"km/h, mph, m/s, knots",
        icon:"fa-gauge-high", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:100},
            {id:"from",label:"From",type:"select",options:["km/h","mph","m/s","Knots","Mach"]}
        ],
        calc(v){
            const toMs={"km/h":1/3.6,"mph":0.44704,"m/s":1,"Knots":0.514444,"Mach":343};
            const ms=v.val*toMs[v.from];
            return {
                main:{label:"m/s",value:ms.toFixed(4)+" m/s"},
                secondary:Object.entries(toMs).filter(([k])=>k!==v.from&&k!=='m/s').map(([k,f])=>({label:k,value:(ms/f).toFixed(4)}))
            };
        }
    },
    currency: {
        name:"Currency Converter (INR Base)", desc:"Approximate conversions (not live)",
        icon:"fa-indian-rupee-sign", cat:"unit",
        inputs:[
            {id:"amount",label:"Amount",default:1000},
            {id:"from",label:"From",type:"select",options:["INR","USD","EUR","GBP","JPY","AED","SGD","AUD","CAD"]}
        ],
        calc(v){
            const toInr={INR:1,USD:83.5,EUR:90,GBP:105,JPY:0.55,AED:22.7,SGD:62,AUD:54,CAD:61};
            const inr=v.amount*toInr[v.from];
            return {
                main:{label:"Indian Rupees",value:"₹"+inr.toFixed(2)},
                secondary:Object.entries(toInr).filter(([k])=>k!==v.from&&k!=='INR').map(([k,f])=>({label:k,value:(inr/f).toFixed(4)}))
            };
        },
        tips:["Rates are approximate — use a live feed for transactions"]
    },
    volume: {
        name:"Volume Converter", desc:"Liters, gallons, ml, cubic units",
        icon:"fa-flask", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:1},
            {id:"from",label:"From",type:"select",options:["Liters","Milliliters","Gallons (US)","Gallons (UK)","Cubic Meters","Fluid Ounces","Cups","Pints"]}
        ],
        calc(v){
            const toL={Liters:1,Milliliters:0.001,"Gallons (US)":3.78541,"Gallons (UK)":4.54609,"Cubic Meters":1000,"Fluid Ounces":0.0295735,Cups:0.236588,Pints:0.473176};
            const l=v.val*toL[v.from];
            return {
                main:{label:"Liters",value:l.toFixed(6)+" L"},
                secondary:Object.entries(toL).filter(([k])=>k!==v.from&&k!=='Liters').map(([k,f])=>({label:k,value:(l/f).toFixed(4)}))
            };
        }
    },
    data: {
        name:"Data Storage Converter", desc:"Bits, bytes, KB, MB, GB, TB",
        icon:"fa-hard-drive", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:1},
            {id:"from",label:"From",type:"select",options:["Bits","Bytes","Kilobytes","Megabytes","Gigabytes","Terabytes","Petabytes"]}
        ],
        calc(v){
            const toBit={Bits:1,Bytes:8,Kilobytes:8192,Megabytes:8388608,Gigabytes:8589934592,Terabytes:8796093022208,Petabytes:8796093022208*1024};
            const bits=v.val*toBit[v.from];
            return {
                main:{label:"Bytes",value:(bits/8).toLocaleString()},
                secondary:Object.entries(toBit).filter(([k])=>k!==v.from&&k!=='Bytes').map(([k,f])=>({label:k,value:(bits/f).toFixed(6)}))
            };
        }
    },

    // ── DATE & TIME ───────────────────────────────
    dateiff: {
        name:"Date Difference", desc:"Days, weeks, months between two dates",
        icon:"fa-calendar-days", cat:"datetime",
        inputs:[
            {id:"d1",label:"Start Date",type:"date"},
            {id:"d2",label:"End Date",type:"date"}
        ],
        calc(v){
            if(!v.d1||!v.d2) return {main:{label:"Error",value:"Select both dates"}};
            const a=new Date(v.d1), b=new Date(v.d2);
            const diff=Math.abs(b-a), days=Math.floor(diff/86400000);
            let y=0,m=0,d=0;
            let lo=new Date(Math.min(a,b)), hi=new Date(Math.max(a,b));
            y=hi.getFullYear()-lo.getFullYear(); m=hi.getMonth()-lo.getMonth(); d=hi.getDate()-lo.getDate();
            if(d<0){m--;d+=new Date(hi.getFullYear(),hi.getMonth(),0).getDate();}
            if(m<0){y--;m+=12;}
            return {
                main:{label:"Total Days",value:days.toLocaleString()},
                secondary:[
                    {label:"Weeks",value:Math.floor(days/7)+" weeks, "+days%7+" days"},
                    {label:"Years/Months/Days",value:`${y}y ${m}m ${d}d`},
                    {label:"Business Days (approx)",value:Math.round(days*5/7).toLocaleString()},
                    {label:"Hours",value:(days*24).toLocaleString()}
                ]
            };
        }
    },
    timeconv: {
        name:"Time Unit Converter", desc:"Seconds, minutes, hours, days, weeks",
        icon:"fa-clock", cat:"datetime",
        inputs:[
            {id:"val",label:"Value",default:3600},
            {id:"from",label:"From",type:"select",options:["Seconds","Minutes","Hours","Days","Weeks","Months","Years"]}
        ],
        calc(v){
            const toS={Seconds:1,Minutes:60,Hours:3600,Days:86400,Weeks:604800,Months:2629800,Years:31557600};
            const s=v.val*toS[v.from];
            return {
                main:{label:"Seconds",value:s.toLocaleString()},
                secondary:Object.entries(toS).filter(([k])=>k!==v.from&&k!=='Seconds').map(([k,f])=>({label:k,value:(s/f).toFixed(4)}))
            };
        }
    },
    countdown: {
        name:"Event Countdown", desc:"Days, hours, minutes until your event",
        icon:"fa-hourglass-half", cat:"datetime",
        inputs:[{id:"event",label:"Event Date & Time",type:"datetime-local"}],
        calc(v){
            if(!v.event) return {main:{label:"Error",value:"Select event date"}};
            const ev=new Date(v.event), now=new Date();
            const diff=ev-now;
            if(diff<0) return {main:{label:"Past Event",value:"Event already occurred"}};
            const d=Math.floor(diff/86400000), h=Math.floor((diff%86400000)/3600000), m=Math.floor((diff%3600000)/60000), s=Math.floor((diff%60000)/1000);
            return {
                main:{label:"Days Remaining",value:d.toLocaleString()},
                secondary:[
                    {label:"Hours Remaining",value:(d*24+h).toLocaleString()},
                    {label:"Minutes Remaining",value:((d*24+h)*60+m).toLocaleString()},
                    {label:"Exact",value:`${d}d ${h}h ${m}m ${s}s`}
                ]
            };
        }
    },
    timezone: {
        name:"Time Zone Converter", desc:"Convert time across global time zones",
        icon:"fa-globe", cat:"datetime",
        inputs:[
            {id:"time",label:"Your Local Time",type:"time",default:"12:00"},
            {id:"offset",label:"Target UTC Offset",default:0,suffix:"hrs"}
        ],
        calc(v){
            const [h,m]=v.time.split(':').map(Number);
            const localOff=-(new Date().getTimezoneOffset())/60;
            const diff=v.offset-localOff;
            let th=(h+diff+24)%24, tm=m;
            const fmt=`${String(Math.floor(th)).padStart(2,'0')}:${String(tm).padStart(2,'0')}`;
            return {
                main:{label:"Target Time (UTC"+v.offset+")",value:fmt},
                secondary:[
                    {label:"Your UTC Offset",value:"UTC"+(localOff>=0?"+":"")+localOff},
                    {label:"Time Difference",value:(diff>=0?"+":"")+diff+" hours"},
                    {label:"UTC Time",value:`${String((h-localOff+24)%24).padStart(2,'0')}:${String(m).padStart(2,'0')}`}
                ]
            };
        }
    },

    // ── ENGINEERING ────────────────────────────────
    ohmslaw: {
        name:"Ohm's Law Calculator", desc:"V=IR — solve for any variable",
        icon:"fa-bolt-lightning", cat:"engineering",
        inputs:[
            {id:"v",label:"Voltage (V) — 0 to solve",default:12,suffix:"V"},
            {id:"i",label:"Current (I) — 0 to solve",default:2,suffix:"A"},
            {id:"r",label:"Resistance (R) — 0 to solve",default:0,suffix:"Ω"}
        ],
        calc(v){
            let V=v.v, I=v.i, R=v.r;
            const zeros=[!V,!I,!R].filter(Boolean).length;
            if(zeros!==1) return {main:{label:"Tip",value:"Set exactly one value to 0 to solve for it"}};
            if(!V) V=I*R;
            else if(!I) I=V/R;
            else R=V/I;
            const P=V*I;
            return {
                main:{label:"Solved",value:`V=${V.toFixed(3)}V  I=${I.toFixed(3)}A  R=${R.toFixed(3)}Ω`},
                secondary:[
                    {label:"Power (P=VI)",value:P.toFixed(3)+" W"},
                    {label:"Energy (1hr)",value:(P/1000).toFixed(4)+" kWh"},
                    {label:"Resistance",value:R.toFixed(4)+" Ω"}
                ]
            };
        }
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
        calc(v){
            const vals={Black:0,Brown:1,Red:2,Orange:3,Yellow:4,Green:5,Blue:6,Violet:7,Grey:8,White:9};
            const mults={"×1":1,"×10":10,"×100":100,"×1K":1000,"×10K":10000,"×100K":100000,"×1M":1000000,"×0.1":0.1,"×0.01":0.01};
            const res=(vals[v.b1]*10+vals[v.b2])*mults[v.mult];
            const tolPct=parseFloat(v.tol.replace(/.*±(\d+\.?\d*)%.*/,"$1"));
            const fmt=res>=1000000?`${(res/1000000).toFixed(2)}MΩ`:res>=1000?`${(res/1000).toFixed(2)}kΩ`:`${res}Ω`;
            return {
                main:{label:"Resistance",value:fmt},
                secondary:[
                    {label:"Tolerance",value:"±"+tolPct+"%"},
                    {label:"Min Value",value:((res*(1-tolPct/100))).toFixed(2)+" Ω"},
                    {label:"Max Value",value:((res*(1+tolPct/100))).toFixed(2)+" Ω"}
                ]
            };
        }
    },
    power: {
        name:"Power Calculator", desc:"Electrical power, current, voltage",
        icon:"fa-plug-circle-bolt", cat:"engineering",
        inputs:[
            {id:"power",label:"Power",default:1000,suffix:"W"},
            {id:"voltage",label:"Voltage",default:230,suffix:"V"}
        ],
        calc(v){
            const I=v.power/v.voltage, R=v.voltage/I;
            return {
                main:{label:"Current (A)",value:I.toFixed(4)+" A"},
                secondary:[
                    {label:"Resistance",value:R.toFixed(2)+" Ω"},
                    {label:"kWh per day (8hr)",value:(v.power*8/1000).toFixed(3)+" kWh"},
                    {label:"Monthly cost (₹8/unit)",value:"₹"+(v.power*8/1000*30*8).toFixed(2)},
                    {label:"Annual cost",value:"₹"+(v.power*8/1000*365*8).toFixed(2)}
                ]
            };
        }
    },
    pythagorean: {
        name:"Pythagorean Theorem", desc:"Find hypotenuse or missing side",
        icon:"fa-triangle-exclamation", cat:"engineering",
        inputs:[
            {id:"a",label:"Side A (0 to solve)",default:3},
            {id:"b",label:"Side B (0 to solve)",default:4},
            {id:"c",label:"Hypotenuse C (0 to solve)",default:0}
        ],
        calc(v){
            let {a,b,c}=v;
            if(!c) c=Math.sqrt(a*a+b*b);
            else if(!b) b=Math.sqrt(c*c-a*a);
            else if(!a) a=Math.sqrt(c*c-b*b);
            const area=0.5*a*b, perimeter=a+b+c;
            return {
                main:{label:"Hypotenuse C",value:c.toFixed(6)},
                secondary:[
                    {label:"Side A",value:a.toFixed(6)},
                    {label:"Side B",value:b.toFixed(6)},
                    {label:"Triangle Area",value:area.toFixed(4)},
                    {label:"Perimeter",value:perimeter.toFixed(4)}
                ]
            };
        }
    },

    // ── EVERYDAY ──────────────────────────────────
    tip: {
        name:"Tip Calculator", desc:"Split bill with tip among friends",
        icon:"fa-hand-holding-dollar", cat:"everyday", badge:"Popular",
        inputs:[
            {id:"bill",label:"Total Bill",default:1200,prefix:"₹"},
            {id:"tip",label:"Tip %",default:15,suffix:"%"},
            {id:"people",label:"Number of People",default:4}
        ],
        calc(v){
            const tipAmt=v.bill*v.tip/100, total=v.bill+tipAmt;
            const perPerson=total/v.people;
            return {
                main:{label:"Per Person",value:"₹"+perPerson.toFixed(2)},
                secondary:[
                    {label:"Tip Amount",value:"₹"+tipAmt.toFixed(2)},
                    {label:"Total Bill + Tip",value:"₹"+total.toFixed(2)},
                    {label:"Bill per Person (no tip)",value:"₹"+(v.bill/v.people).toFixed(2)}
                ]
            };
        }
    },
    discount: {
        name:"Discount Calculator", desc:"Sale price, savings & discount %",
        icon:"fa-tag", cat:"everyday",
        inputs:[
            {id:"original",label:"Original Price",default:2000,prefix:"₹"},
            {id:"discount",label:"Discount",default:30,suffix:"%"}
        ],
        calc(v){
            const saved=v.original*v.discount/100, final=v.original-saved;
            return {
                main:{label:"Final Price",value:"₹"+final.toFixed(2)},
                secondary:[
                    {label:"You Save",value:"₹"+saved.toFixed(2)},
                    {label:"Discount %",value:v.discount+"%"},
                    {label:"Price after extra 10%",value:"₹"+(final*0.9).toFixed(2)}
                ]
            };
        }
    },
    fuel: {
        name:"Fuel Cost Calculator", desc:"Trip cost, mileage & efficiency",
        icon:"fa-gas-pump", cat:"everyday",
        inputs:[
            {id:"distance",label:"Distance",default:100,suffix:"km"},
            {id:"efficiency",label:"Fuel Efficiency",default:15,suffix:"km/L"},
            {id:"price",label:"Fuel Price",default:103,prefix:"₹",suffix:"/L"}
        ],
        calc(v){
            const litres=v.distance/v.efficiency, cost=litres*v.price;
            return {
                main:{label:"Trip Cost",value:"₹"+cost.toFixed(2)},
                secondary:[
                    {label:"Fuel Required",value:litres.toFixed(2)+" L"},
                    {label:"Cost per km",value:"₹"+(cost/v.distance).toFixed(2)},
                    {label:"Monthly (2000km)",value:"₹"+((2000/v.efficiency)*v.price).toFixed(2)}
                ]
            };
        }
    },
    salary: {
        name:"Salary Calculator", desc:"Monthly, weekly & daily from CTC",
        icon:"fa-money-bill-wave", cat:"everyday",
        inputs:[
            {id:"ctc",label:"Annual CTC",default:1200000,prefix:"₹"},
            {id:"pf",label:"PF Deduction",default:21600,prefix:"₹"},
            {id:"tax",label:"Estimated Annual Tax",default:80000,prefix:"₹"}
        ],
        calc(v){
            const net=v.ctc-v.pf-v.tax;
            return {
                main:{label:"Monthly In-Hand",value:"₹"+Math.round(net/12).toLocaleString()},
                secondary:[
                    {label:"Annual In-Hand",value:"₹"+net.toLocaleString()},
                    {label:"Weekly",value:"₹"+Math.round(net/52).toLocaleString()},
                    {label:"Daily (22 working days)",value:"₹"+Math.round(net/12/22).toLocaleString()},
                    {label:"Hourly",value:"₹"+Math.round(net/12/22/8).toLocaleString()}
                ]
            };
        }
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
        calc(v){
            const eligible=(v.income*0.5)-v.obligations;
            const r=v.rate/12/100, n=v.tenure;
            const loan=eligible*(Math.pow(1+r,n)-1)/(r*Math.pow(1+r,n));
            return {
                main:{label:"Max Eligible EMI",value:"₹"+eligible.toLocaleString()},
                secondary:[
                    {label:"Max Loan Amount",value:"₹"+Math.round(loan).toLocaleString()},
                    {label:"FOIR Used",value:"50%"},
                    {label:"Available after EMI",value:"₹"+(v.income-eligible).toLocaleString()}
                ]
            };
        }
    },
    grade: {
        name:"Grade / GPA Calculator", desc:"Percentage to grade & GPA conversion",
        icon:"fa-graduation-cap", cat:"everyday",
        inputs:[{id:"pct",label:"Percentage",default:78,suffix:"%"}],
        calc(v){
            const p=v.pct;
            const grade=p>=90?"A+":p>=80?"A":p>=70?"B+":p>=60?"B":p>=50?"C":p>=40?"D":"F";
            const gpa=p>=90?10:p>=80?9:p>=70?8:p>=60?7:p>=50?6:p>=40?5:0;
            const us=p>=93?4.0:p>=90?3.7:p>=87?3.3:p>=83?3.0:p>=80?2.7:p>=77?2.3:p>=73?2.0:p>=70?1.7:p>=67?1.3:p>=63?1.0:p>=60?0.7:0.0;
            return {
                main:{label:"Grade",value:grade},
                secondary:[
                    {label:"GPA (10 scale)",value:gpa.toFixed(1)},
                    {label:"GPA (4.0 US scale)",value:us.toFixed(1)},
                    {label:"Class",value:p>=60?"Passing":"Failing"}
                ]
            };
        }
    },
    electricbill: {
        name:"Electricity Bill Estimator", desc:"Monthly electricity cost by appliance",
        icon:"fa-lightbulb", cat:"everyday",
        inputs:[
            {id:"watts",label:"Appliance Wattage",default:1500,suffix:"W"},
            {id:"hours",label:"Daily Usage",default:5,suffix:"hrs"},
            {id:"rate",label:"Rate per Unit",default:7,prefix:"₹",suffix:"/kWh"}
        ],
        calc(v){
            const daily=v.watts*v.hours/1000, monthly=daily*30, cost=monthly*v.rate;
            return {
                main:{label:"Monthly Cost",value:"₹"+cost.toFixed(2)},
                secondary:[
                    {label:"Daily Consumption",value:daily.toFixed(3)+" kWh"},
                    {label:"Monthly Consumption",value:monthly.toFixed(2)+" kWh"},
                    {label:"Annual Cost",value:"₹"+(cost*12).toFixed(2)},
                    {label:"Annual Units",value:(daily*365).toFixed(1)+" kWh"}
                ]
            };
        }
    },

    // ── MORE FINANCE ──────────────────────────────
    swp: {
        name:"SWP Calculator", desc:"Systematic Withdrawal Plan — monthly income from corpus",
        icon:"fa-money-bill-transfer", cat:"finance",
        inputs:[
            {id:"corpus",label:"Total Corpus",default:5000000,prefix:"₹"},
            {id:"withdrawal",label:"Monthly Withdrawal",default:25000,prefix:"₹"},
            {id:"return",label:"Expected Return",default:8,suffix:"% p.a."}
        ],
        calc(v){
            const r=v.return/12/100, P=v.corpus, W=v.withdrawal;
            const months=r>0?Math.log(W/(W-P*r))/Math.log(1+r):P/W;
            const years=Math.floor(months/12), remMonths=Math.floor(months%12);
            const totalWithdrawn=W*months;
            return {
                main:{label:"Corpus Lasts",value:`${years}y ${remMonths}m`},
                secondary:[
                    {label:"Total Withdrawn",value:"₹"+Math.round(totalWithdrawn).toLocaleString()},
                    {label:"Monthly Income",value:"₹"+W.toLocaleString()},
                    {label:"Months",value:Math.floor(months)+" months"}
                ]
            };
        }
    },
    lumpsum: {
        name:"Lumpsum Investment", desc:"One-time investment future value with returns",
        icon:"fa-sack-dollar", cat:"finance",
        inputs:[
            {id:"amount",label:"Investment Amount",default:100000,prefix:"₹"},
            {id:"return",label:"Expected Return",default:12,suffix:"% p.a."},
            {id:"years",label:"Period",default:10,suffix:"years"}
        ],
        calc(v){
            const fv=v.amount*Math.pow(1+v.return/100,v.years);
            const gain=fv-v.amount;
            return {
                main:{label:"Future Value",value:"₹"+Math.round(fv).toLocaleString()},
                secondary:[
                    {label:"Total Gain",value:"₹"+Math.round(gain).toLocaleString(),pos:true},
                    {label:"Return %",value:((gain/v.amount)*100).toFixed(1)+"%",pos:true},
                    {label:"Doubling Time (72 rule)",value:(72/v.return).toFixed(1)+" years"}
                ],
                chart:{a:Math.round(v.amount),b:Math.round(gain),lA:"Principal",lB:"Returns"}
            };
        }
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
        calc(v){
            const years=v.retireAge-v.currentAge;
            if(years<=0) return {main:{label:"Error",value:"Retirement age must exceed current age"}};
            const r=v.return/12/100, n=years*12;
            const corpus=v.monthly*((Math.pow(1+r,n)-1)/r)*(1+r);
            const annuityCorpus=corpus*0.4, monthlyPension=annuityCorpus*0.06/12;
            return {
                main:{label:"Estimated Corpus",value:"₹"+Math.round(corpus).toLocaleString()},
                secondary:[
                    {label:"Lumpsum (60%)",value:"₹"+Math.round(corpus*0.6).toLocaleString()},
                    {label:"Annuity (40%)",value:"₹"+Math.round(annuityCorpus).toLocaleString()},
                    {label:"Est. Monthly Pension",value:"₹"+Math.round(monthlyPension).toLocaleString()},
                    {label:"Total Invested",value:"₹"+(v.monthly*n).toLocaleString()}
                ]
            };
        }
    },
    gratuity: {
        name:"Gratuity Calculator", desc:"Employee gratuity as per Indian law",
        icon:"fa-handshake", cat:"finance",
        inputs:[
            {id:"salary",label:"Last Drawn Basic Salary",default:50000,prefix:"₹"},
            {id:"years",label:"Years of Service",default:10}
        ],
        calc(v){
            if(v.years<5) return {main:{label:"Not Eligible",value:"Minimum 5 years required"}};
            const gratuity=(v.salary*15*v.years)/26;
            const taxFree=Math.min(gratuity,2000000);
            return {
                main:{label:"Gratuity Amount",value:"₹"+Math.round(gratuity).toLocaleString()},
                secondary:[
                    {label:"Tax-Free Limit",value:"₹20,00,000"},
                    {label:"Taxable Amount",value:"₹"+Math.max(0,Math.round(gratuity-2000000)).toLocaleString()},
                    {label:"Formula",value:"(Salary×15×Years)/26"}
                ]
            };
        }
    },
    hra: {
        name:"HRA Exemption Calculator", desc:"House Rent Allowance tax exemption",
        icon:"fa-house-circle-check", cat:"finance",
        inputs:[
            {id:"basic",label:"Basic Salary (monthly)",default:40000,prefix:"₹"},
            {id:"hra",label:"HRA Received (monthly)",default:20000,prefix:"₹"},
            {id:"rent",label:"Rent Paid (monthly)",default:18000,prefix:"₹"},
            {id:"metro",label:"City",type:"select",options:["Metro City","Non-Metro City"]}
        ],
        calc(v){
            const pct=v.metro==="Metro City"?0.5:0.4;
            const exc1=v.hra;
            const exc2=v.basic*pct;
            const exc3=Math.max(0,v.rent-v.basic*0.1);
            const exemption=Math.min(exc1,exc2,exc3);
            const taxable=v.hra-exemption;
            return {
                main:{label:"HRA Exemption",value:"₹"+Math.round(exemption).toLocaleString()},
                secondary:[
                    {label:"Taxable HRA",value:"₹"+Math.round(taxable).toLocaleString()},
                    {label:"Annual Exemption",value:"₹"+Math.round(exemption*12).toLocaleString()},
                    {label:"Annual Taxable HRA",value:"₹"+Math.round(taxable*12).toLocaleString()}
                ]
            };
        }
    },
    cagr: {
        name:"CAGR Calculator", desc:"Compound Annual Growth Rate between two values",
        icon:"fa-chart-gantt", cat:"finance",
        inputs:[
            {id:"begin",label:"Beginning Value",default:50000,prefix:"₹"},
            {id:"end",label:"Ending Value",default:150000,prefix:"₹"},
            {id:"years",label:"Number of Years",default:5}
        ],
        calc(v){
            const cagr=(Math.pow(v.end/v.begin,1/v.years)-1)*100;
            const absoluteReturn=((v.end-v.begin)/v.begin)*100;
            return {
                main:{label:"CAGR",value:cagr.toFixed(2)+"%"},
                secondary:[
                    {label:"Absolute Return",value:absoluteReturn.toFixed(2)+"%"},
                    {label:"Net Gain",value:"₹"+(v.end-v.begin).toLocaleString()},
                    {label:"Value after 10Y at same CAGR",value:"₹"+Math.round(v.begin*Math.pow(1+cagr/100,10)).toLocaleString()}
                ]
            };
        }
    },
    creditcard: {
        name:"Credit Card Payoff", desc:"Time & interest to pay off credit card debt",
        icon:"fa-credit-card", cat:"finance",
        inputs:[
            {id:"balance",label:"Outstanding Balance",default:50000,prefix:"₹"},
            {id:"rate",label:"Annual Interest Rate",default:36,suffix:"%"},
            {id:"payment",label:"Monthly Payment",default:5000,prefix:"₹"}
        ],
        calc(v){
            const r=v.rate/12/100;
            if(v.payment<=v.balance*r) return {main:{label:"Warning",value:"Payment too low — debt will grow!"}};
            const months=Math.log(v.payment/(v.payment-v.balance*r))/Math.log(1+r);
            const totalPaid=v.payment*months, interest=totalPaid-v.balance;
            return {
                main:{label:"Payoff Time",value:`${Math.floor(months/12)}y ${Math.ceil(months%12)}m`},
                secondary:[
                    {label:"Total Interest Paid",value:"₹"+Math.round(interest).toLocaleString()},
                    {label:"Total Paid",value:"₹"+Math.round(totalPaid).toLocaleString()},
                    {label:"Min Payment (interest only)",value:"₹"+Math.round(v.balance*r).toLocaleString()}
                ]
            };
        }
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
        calc(v){
            const assets=v.cash+v.investments+v.property+v.other;
            const netWorth=assets-v.loans;
            return {
                main:{label:"Net Worth",value:"₹"+netWorth.toLocaleString()},
                secondary:[
                    {label:"Total Assets",value:"₹"+assets.toLocaleString()},
                    {label:"Total Liabilities",value:"₹"+v.loans.toLocaleString()},
                    {label:"Debt-to-Asset Ratio",value:((v.loans/assets)*100).toFixed(1)+"%"},
                    {label:"Status",value:netWorth>=0?"✓ Positive":"⚠ Negative"}
                ]
            };
        }
    },

    // ── MORE HEALTH ───────────────────────────────
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
        calc(v){
            let bf;
            if(v.gender==="Male"){
                bf=495/(1.0324-0.19077*Math.log10(v.waist-v.neck)+0.15456*Math.log10(v.height))-450;
            } else {
                bf=495/(1.29579-0.35004*Math.log10(v.waist+v.hip-v.neck)+0.22100*Math.log10(v.height))-450;
            }
            bf=Math.max(0,bf);
            const cat=v.gender==="Male"?
                (bf<6?"Essential":bf<14?"Athletic":bf<18?"Fitness":bf<25?"Acceptable":"Obese"):
                (bf<14?"Essential":bf<21?"Athletic":bf<25?"Fitness":bf<32?"Acceptable":"Obese");
            return {
                main:{label:"Body Fat %",value:bf.toFixed(1)+"%"},
                secondary:[
                    {label:"Category",value:cat},
                    {label:"Fat Mass",value:(v.height*v.height*0.0001*22*(bf/100)).toFixed(1)+" kg (est)"},
                    {label:"Healthy Range (M)",value:"14–18%"},
                    {label:"Healthy Range (F)",value:"21–25%"}
                ]
            };
        }
    },
    idealweight: {
        name:"Ideal Weight Calculator", desc:"Multiple formula ideal body weight",
        icon:"fa-weight-hanging", cat:"health",
        inputs:[
            {id:"height",label:"Height",default:170,suffix:"cm"},
            {id:"gender",label:"Gender",type:"select",options:["Male","Female"]}
        ],
        calc(v){
            const hIn=(v.height-152.4)/2.54;
            const miller=v.gender==="Male"?56.2+1.41*hIn:53.1+1.36*hIn;
            const hamwi=v.gender==="Male"?48+2.7*hIn:45.5+2.2*hIn;
            const robinson=v.gender==="Male"?52+1.9*hIn:49+1.7*hIn;
            const bmi22=(22*(v.height/100)**2);
            return {
                main:{label:"Devine Formula",value:hamwi.toFixed(1)+" kg"},
                secondary:[
                    {label:"Miller Formula",value:miller.toFixed(1)+" kg"},
                    {label:"Robinson Formula",value:robinson.toFixed(1)+" kg"},
                    {label:"BMI=22 Target",value:bmi22.toFixed(1)+" kg"}
                ]
            };
        }
    },
    ovulation: {
        name:"Ovulation Calculator", desc:"Fertile window & ovulation date",
        icon:"fa-calendar-heart", cat:"health",
        inputs:[
            {id:"lmp",label:"Last Period Start Date",type:"date"},
            {id:"cycle",label:"Cycle Length",default:28,suffix:"days"}
        ],
        calc(v){
            if(!v.lmp) return {main:{label:"Error",value:"Select date"}};
            const lmp=new Date(v.lmp);
            const ovulation=new Date(lmp.getTime()+(v.cycle-14)*86400000);
            const fertileStart=new Date(ovulation.getTime()-5*86400000);
            const fertileEnd=new Date(ovulation.getTime()+1*86400000);
            const nextPeriod=new Date(lmp.getTime()+v.cycle*86400000);
            const fmt=d=>d.toLocaleDateString('en-IN',{day:'numeric',month:'short'});
            return {
                main:{label:"Ovulation Date",value:fmt(ovulation)},
                secondary:[
                    {label:"Fertile Window",value:fmt(fertileStart)+" – "+fmt(fertileEnd)},
                    {label:"Next Period",value:fmt(nextPeriod)},
                    {label:"Cycle Length",value:v.cycle+" days"}
                ]
            };
        }
    },
    bloodpressure: {
        name:"Blood Pressure Checker", desc:"Classify your blood pressure reading",
        icon:"fa-heart-circle-check", cat:"health",
        inputs:[
            {id:"systolic",label:"Systolic (upper)",default:120,suffix:"mmHg"},
            {id:"diastolic",label:"Diastolic (lower)",default:80,suffix:"mmHg"}
        ],
        calc(v){
            const s=v.systolic, d=v.diastolic;
            let cat,color;
            if(s<90||d<60){cat="Low (Hypotension)";}
            else if(s<120&&d<80){cat="Normal ✓";}
            else if(s<130&&d<80){cat="Elevated";}
            else if(s<140||d<90){cat="High Stage 1";}
            else if(s<180||d<120){cat="High Stage 2";}
            else{cat="Hypertensive Crisis — Seek Help!";}
            const pp=s-d, map=Math.round(d+(pp/3));
            return {
                main:{label:"Classification",value:cat},
                secondary:[
                    {label:"Pulse Pressure",value:pp+" mmHg"},
                    {label:"Mean Arterial Pressure",value:map+" mmHg"},
                    {label:"Normal Range",value:"<120 / <80 mmHg"}
                ]
            };
        }
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
        calc(v){
            const r=v.gender==="Male"?0.68:0.55;
            const bac=(v.drinks*14*0.806)/(v.weight*1000*r)*100;
            const current=Math.max(0,bac-0.015*v.hours);
            const soberIn=current>0?current/0.015:0;
            const effect=current<0.02?"Sober":current<0.05?"Mild Impairment":current<0.08?"Moderate Impairment":"Significant Impairment — Do Not Drive";
            return {
                main:{label:"Est. BAC",value:current.toFixed(3)+"%"},
                secondary:[
                    {label:"Effect",value:effect},
                    {label:"Sober in",value:soberIn>0?soberIn.toFixed(1)+" hrs":"Already sober"},
                    {label:"Legal limit (India)",value:"0.03%"}
                ]
            };
        }
    },

    // ── MORE MATH ────────────────────────────────
    statistics: {
        name:"Statistics Calculator", desc:"Variance, std dev, skewness from a dataset",
        icon:"fa-chart-column", cat:"math",
        inputs:[{id:"data",label:"Numbers (comma-separated)",default:"10,20,30,40,50,60,70",type:"text"}],
        calc(v){
            const arr=String(v.data).split(',').map(Number).filter(n=>!isNaN(n));
            if(arr.length<2) return {main:{label:"Error",value:"Enter at least 2 numbers"}};
            const n=arr.length;
            const mean=arr.reduce((s,x)=>s+x,0)/n;
            const popVar=arr.reduce((s,x)=>s+(x-mean)**2,0)/n;
            const sampleVar=arr.reduce((s,x)=>s+(x-mean)**2,0)/(n-1);
            const popSD=Math.sqrt(popVar);
            const sampleSD=Math.sqrt(sampleVar);
            const sorted=[...arr].sort((a,b)=>a-b);
            const median=n%2===0?(sorted[n/2-1]+sorted[n/2])/2:sorted[Math.floor(n/2)];
            const skew=popSD>0?arr.reduce((s,x)=>s+((x-mean)/popSD)**3,0)/n:0;
            const cv=mean!==0?(popSD/Math.abs(mean))*100:0;
            const q1=sorted[Math.floor(n*0.25)], q3=sorted[Math.floor(n*0.75)];
            return {
                main:{label:"Mean",value:mean.toFixed(4)},
                secondary:[
                    {label:"Median",value:median.toFixed(4)},
                    {label:"Population Std Dev (σ)",value:popSD.toFixed(4)},
                    {label:"Sample Std Dev (s)",value:sampleSD.toFixed(4)},
                    {label:"Variance (σ²)",value:popVar.toFixed(4)},
                    {label:"Min / Max",value:`${sorted[0]} / ${sorted[n-1]}`},
                    {label:"Skewness",value:skew.toFixed(4)},
                    {label:"CV (Coeff. of Variation)",value:cv.toFixed(2)+"%"},
                    {label:"Q1 / Q3 (IQR)",value:`${q1} / ${q3}`},
                    {label:"Sum",value:arr.reduce((s,x)=>s+x,0).toFixed(2)},
                    {label:"Count",value:n}
                ]
            };
        }
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
        calc(v){
            const det=v.a*v.d-v.b*v.c;
            const trace=v.a+v.d;
            const inv=det!==0?`[${(v.d/det).toFixed(3)}, ${(-v.b/det).toFixed(3)}; ${(-v.c/det).toFixed(3)}, ${(v.a/det).toFixed(3)}]`:"No inverse (det=0)";
            return {
                main:{label:"Determinant",value:det.toFixed(4)},
                secondary:[
                    {label:"Trace",value:trace.toFixed(4)},
                    {label:"Rank",value:det!==0?"2":"1 or 0"},
                    {label:"Inverse",value:inv}
                ]
            };
        }
    },
    combinations: {
        name:"Probability Calculator", desc:"nCr, nPr, and event probability",
        icon:"fa-dice", cat:"math",
        inputs:[
            {id:"n",label:"Total outcomes (n)",default:52},
            {id:"r",label:"Choose (r)",default:5},
            {id:"favorable",label:"Favorable outcomes",default:4}
        ],
        calc(v){
            const n=Math.floor(v.n),r=Math.min(Math.floor(v.r),n);
            const calcNCr=(n,r)=>{if(r>n-r)r=n-r;let res=1;for(let i=0;i<r;i++)res=res*(n-i)/(i+1);return Math.round(res);};
            const calcNPr=(n,r)=>{let res=1;for(let i=n;i>n-r;i--)res*=i;return res;};
            const nCr=calcNCr(n,r);
            const nPr=calcNPr(n,r);
            const prob=v.favorable/nCr;
            return {
                main:{label:`C(${n},${r}) Combinations`,value:nCr.toLocaleString()},
                secondary:[
                    {label:`P(${n},${r}) Permutations`,value:nPr.toLocaleString()},
                    {label:"Probability",value:(prob*100).toFixed(4)+"%"},
                    {label:"Odds",value:`1 in ${Math.round(1/prob).toLocaleString()}`}
                ]
            };
        }
    },

    // ── SCIENCE ──────────────────────────────────
    speed_dist: {
        name:"Speed / Distance / Time", desc:"Solve any leg of the SDT triangle",
        icon:"fa-person-running", cat:"science",
        inputs:[
            {id:"speed",label:"Speed (0 to solve)",default:60,suffix:"km/h"},
            {id:"distance",label:"Distance (0 to solve)",default:0,suffix:"km"},
            {id:"time",label:"Time (0 to solve)",default:2,suffix:"hrs"}
        ],
        calc(v){
            let {speed,distance,time}=v;
            const zeros=[!speed,!distance,!time].filter(Boolean).length;
            if(zeros!==1) return {main:{label:"Tip",value:"Set exactly one value to 0 to solve"}};
            if(!speed) speed=distance/time;
            else if(!distance) distance=speed*time;
            else time=distance/speed;
            const h=Math.floor(time), m=Math.round((time-h)*60);
            return {
                main:{label:"Result",value:`Speed=${speed.toFixed(2)} km/h  Dist=${distance.toFixed(2)} km  Time=${h}h ${m}m`},
                secondary:[
                    {label:"Speed",value:speed.toFixed(3)+" km/h"},
                    {label:"Distance",value:distance.toFixed(3)+" km"},
                    {label:"Time",value:`${h}h ${m}m`},
                    {label:"Speed in m/s",value:(speed/3.6).toFixed(3)+" m/s"}
                ]
            };
        }
    },
    newtons: {
        name:"Newton's Laws (F=ma)", desc:"Force, mass, acceleration & energy",
        icon:"fa-apple-whole", cat:"science",
        inputs:[
            {id:"mass",label:"Mass",default:10,suffix:"kg"},
            {id:"acceleration",label:"Acceleration",default:9.8,suffix:"m/s²"},
            {id:"velocity",label:"Velocity",default:5,suffix:"m/s"}
        ],
        calc(v){
            const F=v.mass*v.acceleration;
            const ke=0.5*v.mass*v.velocity**2;
            const momentum=v.mass*v.velocity;
            const weight=v.mass*9.81;
            return {
                main:{label:"Force (F=ma)",value:F.toFixed(4)+" N"},
                secondary:[
                    {label:"Kinetic Energy",value:ke.toFixed(4)+" J"},
                    {label:"Momentum (p=mv)",value:momentum.toFixed(4)+" kg·m/s"},
                    {label:"Weight on Earth",value:weight.toFixed(2)+" N"},
                    {label:"Weight on Moon",value:(v.mass*1.62).toFixed(2)+" N"}
                ]
            };
        }
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
        calc(v){
            const rs=v.r1+v.r2+v.r3;
            const rp=1/(1/v.r1+1/v.r2+1/v.r3);
            const Is=v.voltage/rs, Ip=v.voltage/rp;
            return {
                main:{label:"Series Resistance",value:rs.toFixed(3)+" Ω"},
                secondary:[
                    {label:"Parallel Resistance",value:rp.toFixed(3)+" Ω"},
                    {label:"Series Current",value:Is.toFixed(4)+" A"},
                    {label:"Parallel Current",value:Ip.toFixed(4)+" A"},
                    {label:"Power (Series)",value:(v.voltage*Is).toFixed(3)+" W"},
                    {label:"Power (Parallel)",value:(v.voltage*Ip).toFixed(3)+" W"}
                ]
            };
        }
    },
    density: {
        name:"Density Calculator", desc:"Density, mass, volume — solve any",
        icon:"fa-cube", cat:"science",
        inputs:[
            {id:"mass",label:"Mass (0 to solve)",default:500,suffix:"g"},
            {id:"volume",label:"Volume (0 to solve)",default:250,suffix:"cm³"},
            {id:"density",label:"Density (0 to solve)",default:0,suffix:"g/cm³"}
        ],
        calc(v){
            let {mass,volume,density}=v;
            if(!density) density=mass/volume;
            else if(!volume) volume=mass/density;
            else mass=density*volume;
            return {
                main:{label:"Density",value:density.toFixed(4)+" g/cm³"},
                secondary:[
                    {label:"Mass",value:mass.toFixed(4)+" g"},
                    {label:"Volume",value:volume.toFixed(4)+" cm³"},
                    {label:"kg/m³",value:(density*1000).toFixed(2)},
                    {label:"Floats in water?",value:density<1?"Yes (ρ<1)":"No (ρ≥1)"}
                ]
            };
        }
    },
    chemMolar: {
        name:"Molar Mass Calculator", desc:"Concentration, moles & molarity",
        icon:"fa-flask-vial", cat:"science",
        inputs:[
            {id:"moles",label:"Moles (mol)",default:2,suffix:"mol"},
            {id:"molarMass",label:"Molar Mass",default:18,suffix:"g/mol"},
            {id:"volume",label:"Solution Volume",default:500,suffix:"mL"}
        ],
        calc(v){
            const mass=v.moles*v.molarMass;
            const molarity=v.moles/(v.volume/1000);
            return {
                main:{label:"Mass of Solute",value:mass.toFixed(4)+" g"},
                secondary:[
                    {label:"Molarity (M)",value:molarity.toFixed(4)+" mol/L"},
                    {label:"Millimoles",value:(v.moles*1000).toFixed(2)+" mmol"},
                    {label:"Molecules",value:(v.moles*6.022e23).toExponential(3)}
                ]
            };
        }
    },
    wavelength: {
        name:"Wave Properties Calculator", desc:"Wavelength, frequency, wave speed",
        icon:"fa-wave-square", cat:"science",
        inputs:[
            {id:"speed",label:"Wave Speed",default:343,suffix:"m/s"},
            {id:"frequency",label:"Frequency",default:440,suffix:"Hz"}
        ],
        calc(v){
            const lambda=v.speed/v.frequency;
            const period=1/v.frequency;
            const angFreq=2*Math.PI*v.frequency;
            return {
                main:{label:"Wavelength (λ)",value:lambda.toFixed(6)+" m"},
                secondary:[
                    {label:"Period (T)",value:period.toFixed(6)+" s"},
                    {label:"Angular Frequency (ω)",value:angFreq.toFixed(4)+" rad/s"},
                    {label:"Energy (E=hf)",value:(6.626e-34*v.frequency).toExponential(3)+" J"}
                ]
            };
        }
    },
    gravitational: {
        name:"Gravitational Force", desc:"Newton's law of universal gravitation",
        icon:"fa-earth-americas", cat:"science",
        inputs:[
            {id:"m1",label:"Mass 1",default:5.972e24,suffix:"kg"},
            {id:"m2",label:"Mass 2",default:7.342e22,suffix:"kg"},
            {id:"r",label:"Distance",default:3.844e8,suffix:"m"}
        ],
        calc(v){
            const G=6.674e-11;
            const F=G*v.m1*v.m2/(v.r**2);
            const g1=G*v.m1/(v.r**2);
            return {
                main:{label:"Gravitational Force",value:F.toExponential(4)+" N"},
                secondary:[
                    {label:"G constant",value:"6.674×10⁻¹¹ N·m²/kg²"},
                    {label:"Field strength at r",value:g1.toExponential(4)+" m/s²"},
                    {label:"Escape velocity",value:Math.sqrt(2*G*v.m1/v.r).toFixed(2)+" m/s"}
                ]
            };
        }
    },
    halflife: {
        name:"Radioactive Decay / Half-Life", desc:"Remaining quantity after radioactive decay",
        icon:"fa-radiation", cat:"science",
        inputs:[
            {id:"initial",label:"Initial Quantity",default:1000,suffix:"g"},
            {id:"halflife",label:"Half-Life",default:5730,suffix:"years"},
            {id:"time",label:"Elapsed Time",default:11460,suffix:"years"}
        ],
        calc(v){
            const remaining=v.initial*Math.pow(0.5,v.time/v.halflife);
            const decayed=v.initial-remaining;
            const halfLives=v.time/v.halflife;
            const activityRatio=Math.pow(0.5,halfLives);
            return {
                main:{label:"Remaining Quantity",value:remaining.toFixed(4)+" g"},
                secondary:[
                    {label:"Decayed",value:decayed.toFixed(4)+" g"},
                    {label:"Half-Lives Elapsed",value:halfLives.toFixed(2)},
                    {label:"Fraction Remaining",value:(activityRatio*100).toFixed(4)+"%"}
                ]
            };
        }
    },

    // ── CONSTRUCTION ─────────────────────────────
    concrete: {
        name:"Concrete Calculator", desc:"Cement, sand, aggregate for slabs & columns",
        icon:"fa-building", cat:"construction",
        inputs:[
            {id:"length",label:"Length",default:6,suffix:"m"},
            {id:"width",label:"Width",default:4,suffix:"m"},
            {id:"depth",label:"Thickness/Depth",default:0.15,suffix:"m"},
            {id:"mix",label:"Mix Ratio",type:"select",options:["M15 (1:2:4)","M20 (1:1.5:3)","M25 (1:1:2)"]}
        ],
        calc(v){
            const vol=v.length*v.width*v.depth;
            const dryVol=vol*1.54;
            const ratios={"M15 (1:2:4)":[1,2,4],"M20 (1:1.5:3)":[1,1.5,3],"M25 (1:1:2)":[1,1,2]};
            const [c,s,a]=ratios[v.mix];
            const total=c+s+a;
            const cement=Math.ceil((dryVol*c/total)*1440/50);
            const sand=(dryVol*s/total).toFixed(3);
            const aggregate=(dryVol*a/total).toFixed(3);
            return {
                main:{label:"Total Volume",value:vol.toFixed(3)+" m³"},
                secondary:[
                    {label:"Cement Bags (50kg)",value:cement+" bags"},
                    {label:"Sand",value:sand+" m³"},
                    {label:"Aggregate",value:aggregate+" m³"},
                    {label:"Dry Mix Volume",value:dryVol.toFixed(3)+" m³"}
                ]
            };
        }
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
        calc(v){
            const tMap={"Half Brick (115mm)":0.115,"One Brick (230mm)":0.230,"1.5 Brick (345mm)":0.345};
            const t=tMap[v.thickness];
            const wallVol=v.length*v.height*t;
            const brickVol=(v.brickL/1000)*(v.brickH/1000)*t;
            const bricks=Math.ceil(wallVol/brickVol*1.05);
            const mortarVol=(wallVol-bricks*brickVol).toFixed(4);
            const area=v.length*v.height;
            return {
                main:{label:"Bricks Required",value:bricks.toLocaleString()},
                secondary:[
                    {label:"Wall Area",value:area.toFixed(2)+" m²"},
                    {label:"Wall Volume",value:wallVol.toFixed(3)+" m³"},
                    {label:"Mortar (est)",value:Math.max(0,mortarVol)+" m³"},
                    {label:"Includes 5% wastage",value:"✓"}
                ]
            };
        }
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
        calc(v){
            const wallArea=2*(v.length+v.width)*v.height;
            const deductions=v.doors*1.89+v.windows*1.2;
            const paintArea=(wallArea-deductions)*v.coats;
            const coverage=12; // sq m per litre
            const litres=paintArea/coverage;
            const primerLitres=((wallArea-deductions)/coverage).toFixed(2);
            return {
                main:{label:"Paint Required",value:litres.toFixed(2)+" L"},
                secondary:[
                    {label:"Paintable Area",value:(wallArea-deductions).toFixed(2)+" m²"},
                    {label:"Primer Required",value:primerLitres+" L"},
                    {label:"4L Tins Needed",value:Math.ceil(litres/4)+" tins"},
                    {label:"Ceiling Area",value:(v.length*v.width).toFixed(2)+" m²"}
                ]
            };
        }
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
        calc(v){
            const roomArea=v.roomL*v.roomW;
            const tileArea=(v.tileL/1000)*(v.tileW/1000);
            const tilesNeeded=Math.ceil(roomArea/tileArea*1.1);
            const boxes=Math.ceil(tilesNeeded/v.boxQty);
            const wasteTiles=Math.ceil(tilesNeeded-roomArea/tileArea);
            return {
                main:{label:"Tiles Required",value:tilesNeeded.toLocaleString()},
                secondary:[
                    {label:"Room Area",value:roomArea.toFixed(2)+" m²"},
                    {label:"Boxes Needed",value:boxes},
                    {label:"Wastage Tiles (10%)",value:wasteTiles},
                    {label:"Tile Area",value:(tileArea*10000).toFixed(0)+" cm²"}
                ]
            };
        }
    },
    steel: {
        name:"Steel / Rebar Calculator", desc:"Weight of steel bars for reinforcement",
        icon:"fa-bars-progress", cat:"construction",
        inputs:[
            {id:"dia",label:"Bar Diameter",default:12,suffix:"mm"},
            {id:"length",label:"Total Bar Length",default:100,suffix:"m"},
            {id:"count",label:"Number of Bars",default:10}
        ],
        calc(v){
            const weightPerM=(v.dia**2)/162;
            const totalWeight=weightPerM*v.length*v.count;
            return {
                main:{label:"Total Steel Weight",value:totalWeight.toFixed(2)+" kg"},
                secondary:[
                    {label:"Weight per Meter",value:weightPerM.toFixed(3)+" kg/m"},
                    {label:"Per Bar Weight",value:(weightPerM*v.length).toFixed(3)+" kg"},
                    {label:"Total Length",value:(v.length*v.count).toLocaleString()+" m"},
                    {label:"Formula",value:"D²/162 kg/m"}
                ]
            };
        }
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
        calc(v){
            const slope=1/Math.cos(v.pitch*Math.PI/180);
            const actualArea=v.length*v.width*2*slope;
            const sheets=Math.ceil(actualArea/v.sheetArea*1.1);
            const ridgeCaps=Math.ceil(v.length/1.8);
            return {
                main:{label:"Roof Area",value:actualArea.toFixed(2)+" m²"},
                secondary:[
                    {label:"Sheets Required",value:sheets},
                    {label:"Ridge Caps",value:ridgeCaps},
                    {label:"Slope Factor",value:slope.toFixed(3)},
                    {label:"Flat Area",value:(v.length*v.width*2).toFixed(2)+" m²"}
                ]
            };
        }
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
        calc(v){
            const bankVol=v.length*v.width*v.depth;
            const loosVol=bankVol*(1+v.swell/100);
            const weight=bankVol*1800;
            return {
                main:{label:"Excavation Volume",value:bankVol.toFixed(3)+" m³"},
                secondary:[
                    {label:"Loose (Truck) Volume",value:loosVol.toFixed(3)+" m³"},
                    {label:"Est. Soil Weight",value:(weight/1000).toFixed(2)+" tonnes"},
                    {label:"Truck Loads (6m³)",value:Math.ceil(loosVol/6)+" trucks"}
                ]
            };
        }
    },

    // ── MORE EVERYDAY ─────────────────────────────
    loanaffordability: {
        name:"Loan Affordability", desc:"Max home price based on income & down payment",
        icon:"fa-house-flag", cat:"everyday",
        inputs:[
            {id:"income",label:"Gross Monthly Income",default:100000,prefix:"₹"},
            {id:"down",label:"Down Payment Available",default:500000,prefix:"₹"},
            {id:"rate",label:"Interest Rate",default:8.5,suffix:"%"},
            {id:"term",label:"Loan Term",default:20,suffix:"years"}
        ],
        calc(v){
            const maxEMI=v.income*0.40;
            const r=v.rate/12/100, n=v.term*12;
            const maxLoan=maxEMI*(Math.pow(1+r,n)-1)/(r*Math.pow(1+r,n));
            const maxPrice=maxLoan+v.down;
            return {
                main:{label:"Max Home Price",value:"₹"+Math.round(maxPrice).toLocaleString()},
                secondary:[
                    {label:"Max Loan",value:"₹"+Math.round(maxLoan).toLocaleString()},
                    {label:"Max EMI (40% income)",value:"₹"+Math.round(maxEMI).toLocaleString()},
                    {label:"Down Payment",value:"₹"+v.down.toLocaleString()},
                    {label:"Down %",value:((v.down/maxPrice)*100).toFixed(1)+"%"}
                ]
            };
        }
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
        calc(v){
            const pCal=v.protein*4, cCal=v.carbs*4, fCal=v.fat*9, total=pCal+cCal+fCal;
            return {
                main:{label:"Total Calories",value:Math.round(total)+" kcal"},
                secondary:[
                    {label:"From Protein",value:pCal+" kcal ("+((pCal/total)*100).toFixed(0)+"%)"},
                    {label:"From Carbs",value:cCal+" kcal ("+((cCal/total)*100).toFixed(0)+"%)"},
                    {label:"From Fat",value:fCal+" kcal ("+((fCal/total)*100).toFixed(0)+"%)"},
                    {label:"Net Carbs",value:(v.carbs-v.fiber).toFixed(1)+"g"}
                ]
            };
        }
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
        calc(v){
            const maxDrop=v.voltage*v.drop/100;
            const resistivity=0.0175; // copper Ω·mm²/m
            const area=(2*resistivity*v.length*v.current)/maxDrop;
            const stdSizes=[1,1.5,2.5,4,6,10,16,25,35,50];
            const recommended=stdSizes.find(s=>s>=area)||stdSizes[stdSizes.length-1];
            const actualDrop=(2*resistivity*v.length*v.current/recommended).toFixed(2);
            return {
                main:{label:"Recommended Wire",value:recommended+" mm²"},
                secondary:[
                    {label:"Minimum Area Needed",value:area.toFixed(3)+" mm²"},
                    {label:"Actual Voltage Drop",value:actualDrop+" V"},
                    {label:"Drop %",value:((actualDrop/v.voltage)*100).toFixed(2)+"%"},
                    {label:"Max Temp Rating",value:"70°C (PVC)"}
                ]
            };
        }
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
        calc(v){
            const mp=(v.width*v.height/1e6).toFixed(2);
            const bppMap={"8-bit":8,"16-bit":16,"24-bit":24,"32-bit":32};
            const bits=bppMap[v.bpp];
            const fileMB=(v.width*v.height*bits/8/1024/1024).toFixed(2);
            const printW=(v.width/v.dpi*2.54).toFixed(2);
            const printH=(v.height/v.dpi*2.54).toFixed(2);
            const ar=v.width/v.height;
            const arStr=Math.abs(ar-16/9)<0.01?"16:9":Math.abs(ar-4/3)<0.01?"4:3":Math.abs(ar-1)<0.01?"1:1":`${v.width}:${v.height}`;
            return {
                main:{label:"Megapixels",value:mp+" MP"},
                secondary:[
                    {label:"Raw File Size",value:fileMB+" MB"},
                    {label:"Print Size",value:`${printW}×${printH} cm at ${v.dpi} DPI`},
                    {label:"Aspect Ratio",value:arStr},
                    {label:"Total Pixels",value:(v.width*v.height).toLocaleString()}
                ]
            };
        }
    },
    typing_speed: {
        name:"Reading / Typing Time", desc:"Time to read or type a given word count",
        icon:"fa-keyboard", cat:"everyday",
        inputs:[
            {id:"words",label:"Word Count",default:1000},
            {id:"wpm",label:"Your WPM",default:200,suffix:"wpm"},
            {id:"typingWpm",label:"Typing WPM",default:40,suffix:"wpm"}
        ],
        calc(v){
            const readSec=v.words/v.wpm*60;
            const typeSec=v.words/v.typingWpm*60;
            const fmt=s=>{const m=Math.floor(s/60);const sec=Math.round(s%60);return m>0?`${m}m ${sec}s`:`${sec}s`;};
            return {
                main:{label:"Reading Time",value:fmt(readSec)},
                secondary:[
                    {label:"Typing Time",value:fmt(typeSec)},
                    {label:"Pages (250 words/page)",value:(v.words/250).toFixed(1)+" pages"},
                    {label:"Speak Aloud (130 wpm)",value:fmt(v.words/130*60)},
                    {label:"Tweet Threads (280 ch)",value:Math.ceil(v.words*5.5/280)+" tweets"}
                ]
            };
        }
    },

    // ══════════════════════════════════════════════
    // ── NEW MISSING CALCULATORS ───────────────────
    // ══════════════════════════════════════════════

    // ── FINANCE ──────────────────────────────────
    tds: {
        name:"TDS Calculator", desc:"Tax Deducted at Source on salary & payments",
        icon:"fa-percent", cat:"finance",
        inputs:[
            {id:"amount",label:"Payment Amount",default:100000,prefix:"₹"},
            {id:"type",label:"Payment Type",type:"select",options:["Salary","Interest (194A)","Commission (194H)","Rent (194I)","Professional (194J)","Contractor (194C)"]},
        ],
        calc(v){
            const rates={"Salary":10,"Interest (194A)":10,"Commission (194H)":5,"Rent (194I)":10,"Professional (194J)":10,"Contractor (194C)":1};
            const rate=rates[v.type]||10;
            const tds=v.amount*rate/100;
            const net=v.amount-tds;
            return {
                main:{label:"TDS Amount",value:"₹"+tds.toFixed(2)},
                secondary:[
                    {label:"Net Amount (after TDS)",value:"₹"+net.toFixed(2)},
                    {label:"TDS Rate",value:rate+"%"},
                    {label:"Gross Amount",value:"₹"+v.amount.toFixed(2)},
                    {label:"Section",value:v.type.includes("(")?v.type.match(/\(([^)]+)\)/)[1]:"192B"}
                ]
            };
        },
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
        calc(v){
            const empContrib=v.basic*0.12, empRContrib=v.basic*0.0367;
            const monthlyTotal=empContrib+empRContrib;
            const r=v.rate/100/12, n=v.years*12;
            const corpus=monthlyTotal*((Math.pow(1+r,n)-1)/r)*(1+r);
            const invested=monthlyTotal*n;
            return {
                main:{label:"EPF Corpus",value:"₹"+Math.round(corpus).toLocaleString()},
                secondary:[
                    {label:"Employee (12%)",value:"₹"+empContrib.toFixed(0)+"/mo"},
                    {label:"Employer (3.67%)",value:"₹"+empRContrib.toFixed(0)+"/mo"},
                    {label:"Total Monthly",value:"₹"+monthlyTotal.toFixed(0)},
                    {label:"Total Invested",value:"₹"+Math.round(invested).toLocaleString()},
                    {label:"Interest Earned",value:"₹"+Math.round(corpus-invested).toLocaleString()}
                ]
            };
        }
    },
    profitloss: {
        name:"Profit & Loss Calculator", desc:"Profit, loss, margin and markup percentage",
        icon:"fa-arrow-trend-up", cat:"finance",
        inputs:[
            {id:"cost",label:"Cost Price",default:500,prefix:"₹"},
            {id:"sell",label:"Selling Price",default:750,prefix:"₹"}
        ],
        calc(v){
            const pl=v.sell-v.cost;
            const plPct=(pl/v.cost)*100;
            const margin=(pl/v.sell)*100;
            const markup=(pl/v.cost)*100;
            return {
                main:{label:pl>=0?"Profit":"Loss",value:"₹"+Math.abs(pl).toFixed(2)},
                secondary:[
                    {label:pl>=0?"Profit %":"Loss %",value:Math.abs(plPct).toFixed(2)+"%",pos:pl>=0,neg:pl<0},
                    {label:"Profit Margin",value:margin.toFixed(2)+"%"},
                    {label:"Markup %",value:markup.toFixed(2)+"%"},
                    {label:"To break even",value:"₹"+v.cost.toFixed(2)}
                ]
            };
        }
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
        calc(v){
            const invested=v.buyPrice*v.qty+v.brokerage;
            const proceeds=v.sellPrice*v.qty-v.brokerage;
            const pl=proceeds-invested;
            const stts=(v.buyPrice+v.sellPrice)*v.qty*0.001;
            const netPl=pl-stts;
            const roi=(netPl/invested)*100;
            return {
                main:{label:netPl>=0?"Net Profit":"Net Loss",value:"₹"+Math.abs(netPl).toFixed(2)},
                secondary:[
                    {label:"Invested",value:"₹"+invested.toFixed(2)},
                    {label:"Gross Profit",value:"₹"+pl.toFixed(2),pos:pl>=0,neg:pl<0},
                    {label:"STTS (0.1%)",value:"₹"+stts.toFixed(2)},
                    {label:"ROI",value:roi.toFixed(2)+"%",pos:roi>=0}
                ]
            };
        }
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
        calc(v){
            const invested=v.buyNav*v.units;
            const current=v.sellNav*v.units;
            const gain=current-invested;
            const absReturn=(gain/invested)*100;
            const cagr=(Math.pow(v.sellNav/v.buyNav,1/v.years)-1)*100;
            return {
                main:{label:"Current Value",value:"₹"+Math.round(current).toLocaleString()},
                secondary:[
                    {label:"Invested Amount",value:"₹"+Math.round(invested).toLocaleString()},
                    {label:"Gain",value:"₹"+Math.round(gain).toLocaleString(),pos:gain>=0},
                    {label:"Absolute Return",value:absReturn.toFixed(2)+"%",pos:gain>=0},
                    {label:"CAGR",value:cagr.toFixed(2)+"%",pos:gain>=0}
                ]
            };
        }
    },

    // ── HEALTH ───────────────────────────────────
    waistHip: {
        name:"Waist-to-Hip Ratio", desc:"Cardiovascular risk indicator",
        icon:"fa-ruler-horizontal", cat:"health",
        inputs:[
            {id:"waist",label:"Waist Circumference",default:80,suffix:"cm"},
            {id:"hip",label:"Hip Circumference",default:96,suffix:"cm"},
            {id:"gender",label:"Gender",type:"select",options:["Male","Female"]}
        ],
        calc(v){
            const ratio=(v.waist/v.hip);
            const low=v.gender==="Male"?0.90:0.80;
            const mod=v.gender==="Male"?0.95:0.85;
            const risk=ratio<=low?"Low Risk":ratio<=mod?"Moderate Risk":"High Risk";
            return {
                main:{label:"Waist-to-Hip Ratio",value:ratio.toFixed(3)},
                secondary:[
                    {label:"Risk Category",value:risk},
                    {label:"Low Risk Threshold",value:"≤ "+low},
                    {label:"High Risk Threshold",value:"> "+mod}
                ]
            };
        }
    },
    ibw: {
        name:"IBW — Ideal Body Weight", desc:"Target weight by height using clinical formulas",
        icon:"fa-user-check", cat:"health",
        inputs:[
            {id:"height",label:"Height",default:170,suffix:"cm"},
            {id:"gender",label:"Gender",type:"select",options:["Male","Female"]},
            {id:"frame",label:"Frame Size",type:"select",options:["Small","Medium","Large"]}
        ],
        calc(v){
            const hIn=(v.height-152.4)/2.54;
            const frameAdj={Small:-10,Medium:0,Large:10};
            const adj=frameAdj[v.frame];
            const devine=v.gender==="Male"?50+2.3*hIn:45.5+2.2*hIn;
            const adjusted=devine+devine*adj/100;
            const rangeLow=(adjusted*0.9).toFixed(1), rangeHigh=(adjusted*1.1).toFixed(1);
            return {
                main:{label:"Ideal Weight (Devine)",value:adjusted.toFixed(1)+" kg"},
                secondary:[
                    {label:"Healthy Range",value:rangeLow+" – "+rangeHigh+" kg"},
                    {label:"BMI 22 Target",value:(22*(v.height/100)**2).toFixed(1)+" kg"},
                    {label:"Frame Adjustment",value:(adj>=0?"+":"")+adj+"%"}
                ]
            };
        }
    },
    vitamins: {
        name:"Vitamin D Deficiency Check", desc:"Estimated Vitamin D level & supplementation",
        icon:"fa-sun", cat:"health",
        inputs:[
            {id:"sunExposure",label:"Daily Sun Exposure",type:"select",options:["None (<5 min)","Low (5-15 min)","Moderate (15-30 min)","Good (30+ min)"]},
            {id:"skinTone",label:"Skin Tone",type:"select",options:["Very Fair","Fair","Medium","Dark","Very Dark"]},
            {id:"age",label:"Age",default:35,suffix:"years"}
        ],
        calc(v){
            const sunBase={"None (<5 min)":0,"Low (5-15 min)":10,"Moderate (15-30 min)":25,"Good (30+ min)":40};
            const skinMult={"Very Fair":1.5,"Fair":1.2,"Medium":1.0,"Dark":0.7,"Very Dark":0.5};
            const ageMult=v.age>70?0.5:v.age>50?0.75:1.0;
            const score=sunBase[v.sunExposure]*skinMult[v.skinTone]*ageMult;
            const level=score<10?"Deficient (<20 ng/mL)":score<25?"Insufficient (20-30 ng/mL)":"Likely Sufficient (>30 ng/mL)";
            const supp=score<10?"4000 IU/day":score<25?"2000 IU/day":"Maintain 1000 IU/day";
            return {
                main:{label:"Estimated Status",value:level},
                secondary:[
                    {label:"Suggested Supplement",value:supp},
                    {label:"Optimal Range",value:"40-60 ng/mL"},
                    {label:"Note",value:"Get a blood test for accuracy"}
                ]
            };
        }
    },
    lungCapacity: {
        name:"Lung Capacity (FVC) Estimator", desc:"Forced Vital Capacity prediction",
        icon:"fa-lungs", cat:"health",
        inputs:[
            {id:"height",label:"Height",default:170,suffix:"cm"},
            {id:"age",label:"Age",default:35,suffix:"years"},
            {id:"gender",label:"Gender",type:"select",options:["Male","Female"]}
        ],
        calc(v){
            const h=v.height/100;
            const fvc=v.gender==="Male"?(0.057*v.height-0.022*v.age-4.241):(0.041*v.height-0.018*v.age-2.690);
            const fev1=fvc*(v.age<40?0.85:0.78);
            return {
                main:{label:"Predicted FVC",value:fvc.toFixed(2)+" L"},
                secondary:[
                    {label:"Predicted FEV1",value:fev1.toFixed(2)+" L"},
                    {label:"FEV1/FVC Ratio",value:((fev1/fvc)*100).toFixed(1)+"%"},
                    {label:"Normal Range (FVC)",value:v.gender==="Male"?"4.0-6.0 L":"3.0-4.5 L"}
                ]
            };
        }
    },

    // ── MATH ─────────────────────────────────────
    lcmgcd: {
        name:"LCM & GCD Calculator", desc:"Least Common Multiple & Greatest Common Divisor",
        icon:"fa-divide", cat:"math",
        inputs:[
            {id:"a",label:"First Number",default:12},
            {id:"b",label:"Second Number",default:18},
            {id:"c",label:"Third Number (optional, 0 to skip)",default:0}
        ],
        calc(v){
            const gcd=(x,y)=>y===0?Math.abs(x):gcd(y,x%y);
            const lcm=(x,y)=>Math.abs(x*y)/gcd(x,y);
            const a=Math.floor(v.a), b=Math.floor(v.b), c=Math.floor(v.c);
            let g=gcd(a,b), l=lcm(a,b);
            if(c>0){g=gcd(g,c);l=lcm(l,c);}
            return {
                main:{label:"LCM",value:l.toLocaleString()},
                secondary:[
                    {label:"GCD / HCF",value:g.toLocaleString()},
                    {label:"LCM × GCD",value:(l*g).toLocaleString()},
                    {label:"Verification (a×b)",value:(a*b).toLocaleString()}
                ]
            };
        }
    },
    romanNumeral: {
        name:"Roman Numeral Converter", desc:"Convert between Arabic and Roman numerals",
        icon:"fa-i-cursor", cat:"math",
        inputs:[{id:"num",label:"Arabic Number (1–3999)",default:2024}],
        calc(v){
            const n=Math.min(3999,Math.max(1,Math.floor(v.num)));
            const vals=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
            const syms=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
            let rem=n, roman="";
            for(let i=0;i<vals.length;i++){while(rem>=vals[i]){roman+=syms[i];rem-=vals[i];}}
            return {
                main:{label:"Roman Numeral",value:roman},
                secondary:[
                    {label:"Arabic",value:n.toLocaleString()},
                    {label:"Binary",value:n.toString(2)},
                    {label:"Hex",value:n.toString(16).toUpperCase()}
                ]
            };
        }
    },
    triangleArea: {
        name:"Triangle Calculator", desc:"Area, perimeter, angles — all triangle types",
        icon:"fa-draw-polygon", cat:"math",
        inputs:[
            {id:"a",label:"Side A",default:3},
            {id:"b",label:"Side B",default:4},
            {id:"c",label:"Side C",default:5}
        ],
        calc(v){
            const {a,b,c}=v;
            if(a+b<=c||b+c<=a||a+c<=b) return {main:{label:"Error",value:"Not a valid triangle"}};
            const s=(a+b+c)/2;
            const area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
            const A=Math.acos((b**2+c**2-a**2)/(2*b*c))*180/Math.PI;
            const B=Math.acos((a**2+c**2-b**2)/(2*a*c))*180/Math.PI;
            const C=180-A-B;
            const type=a===b&&b===c?"Equilateral":(a===b||b===c||a===c)?"Isosceles":"Scalene";
            return {
                main:{label:"Area",value:area.toFixed(4)+" sq units"},
                secondary:[
                    {label:"Perimeter",value:(a+b+c).toFixed(4)},
                    {label:"Angle A",value:A.toFixed(2)+"°"},
                    {label:"Angle B",value:B.toFixed(2)+"°"},
                    {label:"Angle C",value:C.toFixed(2)+"°"},
                    {label:"Type",value:type}
                ]
            };
        }
    },

    // ── DATE & TIME ───────────────────────────────
    workingdays: {
        name:"Working Days Calculator", desc:"Business days between dates (excl. weekends)",
        icon:"fa-calendar-check", cat:"datetime",
        inputs:[
            {id:"d1",label:"Start Date",type:"date"},
            {id:"d2",label:"End Date",type:"date"},
            {id:"holidays",label:"Public Holidays to Exclude",default:0}
        ],
        calc(v){
            if(!v.d1||!v.d2) return {main:{label:"Error",value:"Select both dates"}};
            let a=new Date(v.d1), b=new Date(v.d2);
            if(a>b)[a,b]=[b,a];
            let workDays=0;
            const cur=new Date(a);
            while(cur<=b){
                const day=cur.getDay();
                if(day!==0&&day!==6) workDays++;
                cur.setDate(cur.getDate()+1);
            }
            const net=Math.max(0,workDays-v.holidays);
            const totalDays=Math.floor((b-a)/86400000)+1;
            return {
                main:{label:"Working Days",value:net.toLocaleString()},
                secondary:[
                    {label:"Total Calendar Days",value:totalDays},
                    {label:"Weekend Days",value:totalDays-workDays},
                    {label:"After Holidays",value:net},
                    {label:"Weeks",value:(net/5).toFixed(1)}
                ]
            };
        }
    },
    ageNextBday: {
        name:"Next Birthday Calculator", desc:"Days until next birthday & age you'll turn",
        icon:"fa-cake-candles", cat:"datetime",
        inputs:[{id:"dob",label:"Date of Birth",type:"date"}],
        calc(v){
            if(!v.dob) return {main:{label:"Error",value:"Select your birthday"}};
            const dob=new Date(v.dob), today=new Date();
            let nextBday=new Date(today.getFullYear(),dob.getMonth(),dob.getDate());
            if(nextBday<today) nextBday.setFullYear(today.getFullYear()+1);
            const days=Math.ceil((nextBday-today)/86400000);
            const ageNext=nextBday.getFullYear()-dob.getFullYear();
            const dayOfWeek=nextBday.toLocaleDateString('en-IN',{weekday:'long'});
            return {
                main:{label:"Days Until Birthday",value:days===0?"🎉 Today!":days+" days"},
                secondary:[
                    {label:"Birthday Date",value:nextBday.toLocaleDateString('en-IN',{day:'numeric',month:'long'})},
                    {label:"Day of Week",value:dayOfWeek},
                    {label:"Age You'll Turn",value:ageNext+" years"},
                    {label:"Born On",value:new Date(v.dob).toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}
                ]
            };
        }
    },

    // ── UNIT CONVERTERS ───────────────────────────
    pressure: {
        name:"Pressure Converter", desc:"Pa, bar, psi, atm, mmHg, kPa",
        icon:"fa-compress", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:1},
            {id:"from",label:"From",type:"select",options:["Pascal","Kilopascal","Bar","PSI","Atmosphere","mmHg","Torr"]}
        ],
        calc(v){
            const toPa={Pascal:1,Kilopascal:1000,Bar:100000,PSI:6894.76,Atmosphere:101325,mmHg:133.322,Torr:133.322};
            const pa=v.val*toPa[v.from];
            return {
                main:{label:"Pascal",value:pa.toFixed(4)+" Pa"},
                secondary:Object.entries(toPa).filter(([k])=>k!==v.from&&k!=='Pascal').map(([k,f])=>({label:k,value:(pa/f).toFixed(6)}))
            };
        }
    },
    energy: {
        name:"Energy Converter", desc:"Joules, kWh, calories, BTU, eV",
        icon:"fa-bolt", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:1},
            {id:"from",label:"From",type:"select",options:["Joules","Kilojoules","Watt-hours","kWh","Calories","Kilocalories","BTU","Electronvolt"]}
        ],
        calc(v){
            const toJ={Joules:1,Kilojoules:1000,"Watt-hours":3600,kWh:3600000,Calories:4.184,Kilocalories:4184,BTU:1055.06,Electronvolt:1.602e-19};
            const j=v.val*toJ[v.from];
            return {
                main:{label:"Joules",value:j.toExponential(4)+" J"},
                secondary:Object.entries(toJ).filter(([k])=>k!==v.from&&k!=='Joules').map(([k,f])=>({label:k,value:(j/f).toExponential(4)}))
            };
        }
    },
    angle: {
        name:"Angle Converter", desc:"Degrees, radians, gradians, turns",
        icon:"fa-drafting-compass", cat:"unit",
        inputs:[
            {id:"val",label:"Value",default:180},
            {id:"from",label:"From",type:"select",options:["Degrees","Radians","Gradians","Turns","Arcminutes","Arcseconds"]}
        ],
        calc(v){
            const toDeg={Degrees:1,Radians:180/Math.PI,Gradians:0.9,Turns:360,Arcminutes:1/60,Arcseconds:1/3600};
            const deg=v.val*toDeg[v.from];
            return {
                main:{label:"Degrees",value:deg.toFixed(6)+"°"},
                secondary:Object.entries(toDeg).filter(([k])=>k!==v.from&&k!=='Degrees').map(([k,f])=>({label:k,value:(deg/f).toFixed(6)}))
            };
        }
    },

    // ── SCIENCE ──────────────────────────────────
    ph: {
        name:"pH Calculator", desc:"Acid/base strength from H⁺ ion concentration",
        icon:"fa-flask", cat:"science",
        inputs:[
            {id:"conc",label:"H⁺ Concentration (mol/L)",default:1e-7,suffix:"mol/L"},
            {id:"temp",label:"Temperature",default:25,suffix:"°C"}
        ],
        calc(v){
            const ph=-Math.log10(v.conc);
            const poh=14-ph;
            const type=ph<7?"Acid":ph===7?"Neutral":"Base";
            const tempCorr=v.temp!==25?` (at ${v.temp}°C)`:""
            return {
                main:{label:"pH"+tempCorr,value:ph.toFixed(4)},
                secondary:[
                    {label:"pOH",value:poh.toFixed(4)},
                    {label:"OH⁻ Concentration",value:Math.pow(10,-poh).toExponential(4)+" mol/L"},
                    {label:"Type",value:type},
                    {label:"pH Scale",value:"0 (acid) ← 7 (neutral) → 14 (base)"}
                ]
            };
        }
    },
    kinematicCalc: {
        name:"Kinematics Calculator", desc:"SUVAT equations — solve for any variable",
        icon:"fa-satellite", cat:"science",
        inputs:[
            {id:"u",label:"Initial Velocity (u)",default:0,suffix:"m/s"},
            {id:"a",label:"Acceleration (a)",default:9.8,suffix:"m/s²"},
            {id:"t",label:"Time (t)",default:5,suffix:"s"}
        ],
        calc(v){
            const v_=v.u+v.a*v.t;
            const s=v.u*v.t+0.5*v.a*v.t**2;
            const v2=v.u**2+2*v.a*s;
            return {
                main:{label:"Final Velocity (v)",value:v_.toFixed(4)+" m/s"},
                secondary:[
                    {label:"Distance (s)",value:s.toFixed(4)+" m"},
                    {label:"v² = u² + 2as",value:v2.toFixed(4)},
                    {label:"KE at v (1kg)",value:(0.5*v_**2).toFixed(4)+" J"},
                    {label:"Avg Velocity",value:((v.u+v_)/2).toFixed(4)+" m/s"}
                ]
            };
        }
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
        calc(v){
            const p2Boyle=v.p1*v.v1/v.v2;
            const v2Charles=v.v1*v.t2/v.t1;
            const p2Gay=v.p1*v.t2/v.t1;
            const n=(v.p1*v.v1)/(0.0821*v.t1);
            const combinedP2=v.p1*v.v1*v.t2/(v.v2*v.t1);
            return {
                main:{label:"Moles of Gas (n)",value:n.toFixed(4)+" mol"},
                secondary:[
                    {label:"Boyle's P₂ (V₂="+v.v2+"L, const T)",value:p2Boyle.toFixed(4)+" atm"},
                    {label:"Charles V₂ (T₂="+v.t2+"K, const P)",value:v2Charles.toFixed(4)+" L"},
                    {label:"Gay-Lussac P₂ (const V)",value:p2Gay.toFixed(4)+" atm"},
                    {label:"Combined Law P₂",value:combinedP2.toFixed(4)+" atm"},
                    {label:"PV = nRT check",value:(n*0.0821*v.t1).toFixed(4)+" L·atm"}
                ]
            };
        }
    },

    // ── CONSTRUCTION ─────────────────────────────
    plasterwork: {
        name:"Plaster Calculator", desc:"Cement & sand for wall plastering",
        icon:"fa-layer-group", cat:"construction",
        inputs:[
            {id:"length",label:"Wall Length",default:10,suffix:"m"},
            {id:"height",label:"Wall Height",default:3,suffix:"m"},
            {id:"thickness",label:"Plaster Thickness",default:12,suffix:"mm"},
            {id:"ratio",label:"Mix Ratio",type:"select",options:["1:3 (rich)","1:4 (standard)","1:6 (lean)"]}
        ],
        calc(v){
            const area=v.length*v.height;
            const vol=area*v.thickness/1000*1.35;
            const ratioMap={"1:3 (rich)":[1,3],"1:4 (standard)":[1,4],"1:6 (lean)":[1,6]};
            const [c,s]=ratioMap[v.ratio];
            const cVol=vol*c/(c+s), sVol=vol*s/(c+s);
            const bags=Math.ceil(cVol*1440/50);
            return {
                main:{label:"Plastering Area",value:area.toFixed(2)+" m²"},
                secondary:[
                    {label:"Cement Bags (50kg)",value:bags},
                    {label:"Sand Required",value:sVol.toFixed(3)+" m³"},
                    {label:"Dry Mortar Volume",value:vol.toFixed(3)+" m³"},
                    {label:"Water (approx)",value:Math.round(bags*25)+" litres"}
                ]
            };
        }
    },
    waterTank: {
        name:"Water Tank / Reservoir Size", desc:"Capacity for household or building use",
        icon:"fa-water", cat:"construction",
        inputs:[
            {id:"people",label:"Number of Residents",default:4},
            {id:"days",label:"Storage Days Required",default:2},
            {id:"perHead",label:"Liters per Person/Day",default:135}
        ],
        calc(v){
            const total=v.people*v.days*v.perHead;
            const cu_m=total/1000;
            const l=Math.cbrt(cu_m).toFixed(2);
            return {
                main:{label:"Tank Capacity Needed",value:total.toLocaleString()+" L"},
                secondary:[
                    {label:"In Cubic Meters",value:cu_m.toFixed(3)+" m³"},
                    {label:"Cube Side (if cubic)",value:l+" m"},
                    {label:"Daily Requirement",value:(v.people*v.perHead).toLocaleString()+" L/day"},
                    {label:"Standard Tank Size",value:total<=500?"500L":total<=1000?"1000L":total<=2000?"2000L":"Custom"}
                ]
            };
        }
    },

    // ── EVERYDAY ─────────────────────────────────
    emi_extra: {
        name:"Extra EMI Prepayment Benefit", desc:"Interest saved by paying extra EMI",
        icon:"fa-piggy-bank", cat:"everyday",
        inputs:[
            {id:"outstanding",label:"Outstanding Principal",default:2000000,prefix:"₹"},
            {id:"rate",label:"Interest Rate",default:8.5,suffix:"%"},
            {id:"remaining",label:"Remaining Tenure",default:180,suffix:"months"},
            {id:"extra",label:"Extra Monthly Payment",default:5000,prefix:"₹"}
        ],
        calc(v){
            const r=v.rate/12/100;
            const emi=v.outstanding*r*Math.pow(1+r,v.remaining)/(Math.pow(1+r,v.remaining)-1);
            const normalInterest=emi*v.remaining-v.outstanding;
            // New tenure with extra payment
            const newEmi=emi+v.extra;
            const newMonths=Math.log(newEmi/(newEmi-v.outstanding*r))/Math.log(1+r);
            const newInterest=newEmi*newMonths-v.outstanding;
            const saved=normalInterest-newInterest;
            const monthsSaved=v.remaining-newMonths;
            return {
                main:{label:"Interest Saved",value:"₹"+Math.round(saved).toLocaleString()},
                secondary:[
                    {label:"Months Saved",value:Math.round(monthsSaved)+" months"},
                    {label:"New Tenure",value:Math.round(newMonths)+" months"},
                    {label:"Current EMI",value:"₹"+Math.round(emi).toLocaleString()},
                    {label:"New EMI (with extra)",value:"₹"+Math.round(newEmi).toLocaleString()}
                ]
            };
        }
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
        calc(v){
            const futureValue=v.propValue*Math.pow(1+v.appreciation/100,v.years);
            const capitalGain=futureValue-v.propValue;
            const totalEmi=v.emi*v.years*12;
            const totalRent=v.rent*v.years*12;
            const netCostBuy=totalEmi-capitalGain;
            const diff=totalRent-netCostBuy;
            return {
                main:{label:"Better Option",value:diff>0?"Buying":"Renting"},
                secondary:[
                    {label:"Future Property Value",value:"₹"+Math.round(futureValue).toLocaleString()},
                    {label:"Capital Gain",value:"₹"+Math.round(capitalGain).toLocaleString()},
                    {label:"Total EMI Paid",value:"₹"+totalEmi.toLocaleString()},
                    {label:"Total Rent Paid",value:"₹"+totalRent.toLocaleString()},
                    {label:"Net Cost of Buying",value:"₹"+Math.round(netCostBuy).toLocaleString()}
                ]
            };
        }
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
        calc(v){
            const unitA=v.price1/v.qty1, unitB=v.price2/v.qty2;
            const better=unitA<unitB?"Item A":"Item B";
            const saving=Math.abs(unitA-unitB);
            return {
                main:{label:"Better Value",value:better},
                secondary:[
                    {label:"Item A — per unit",value:"₹"+(unitA).toFixed(4)},
                    {label:"Item B — per unit",value:"₹"+(unitB).toFixed(4)},
                    {label:"Saving per unit",value:"₹"+saving.toFixed(4)},
                    {label:"Item A cheaper by",value:unitA<unitB?((1-unitA/unitB)*100).toFixed(1)+"%":"—"},
                    {label:"Item B cheaper by",value:unitB<unitA?((1-unitB/unitA)*100).toFixed(1)+"%":"—"}
                ]
            };
        }
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
        calc(v){
            const petrolAnnual=(v.kmPerYear/v.petrolMileage)*v.petrolPrice;
            const chargesPerYear=v.kmPerYear/v.evRange;
            const evAnnual=chargesPerYear*v.chargeCost;
            const saving=petrolAnnual-evAnnual;
            const breakEvenDiff=300000; // avg EV premium
            const paybackYears=breakEvenDiff/Math.max(1,saving);
            return {
                main:{label:"Annual Saving (EV)",value:"₹"+Math.round(saving).toLocaleString()},
                secondary:[
                    {label:"Petrol Annual Cost",value:"₹"+Math.round(petrolAnnual).toLocaleString()},
                    {label:"EV Annual Cost",value:"₹"+Math.round(evAnnual).toLocaleString()},
                    {label:"Payback Period (est ₹3L premium)",value:paybackYears.toFixed(1)+" years"},
                    {label:"CO₂ Saved (approx)",value:Math.round((v.kmPerYear/v.petrolMileage)*2.31)+" kg/yr"}
                ]
            };
        }
    },
    laundry: {
        name:"Clothes / Fabric Care Size", desc:"Size conversion for clothing across regions",
        icon:"fa-shirt", cat:"everyday",
        inputs:[
            {id:"chest",label:"Chest Circumference",default:96,suffix:"cm"},
            {id:"waist",label:"Waist Circumference",default:80,suffix:"cm"},
            {id:"height",label:"Height",default:170,suffix:"cm"}
        ],
        calc(v){
            const c=v.chest, w=v.waist;
            const us=c<=86?"XS":c<=91?"S":c<=96?"M":c<=101?"L":c<=106?"XL":"XXL";
            const eu=c<=86?"44":c<=91?"46":c<=96?"48":c<=101?"50":c<=106?"52":"54";
            const uk=c<=86?"34":c<=91?"36":c<=96?"38":c<=101?"40":c<=106?"42":"44";
            const shoeEu=Math.round(v.height*0.16+1);
            return {
                main:{label:"Size (US/International)",value:us},
                secondary:[
                    {label:"EU Size",value:eu},
                    {label:"UK Size",value:uk},
                    {label:"Estimated Shoe (EU)",value:shoeEu},
                    {label:"Chest",value:c+" cm / "+(c/2.54).toFixed(1)+'"'}
                ]
            };
        }
    },

    // ══════════════════════════════════════════════
    // ── NEW FINANCE CALCULATORS ───────────────────
    // ══════════════════════════════════════════════

    hra: {
        name:"HRA Exemption Calculator", desc:"House Rent Allowance tax exemption — Section 10(13A)",
        icon:"fa-house-chimney", cat:"finance", badge:"Popular",
        inputs:[
            {id:"basic",label:"Basic Salary",default:50000,prefix:"₹",suffix:"/mo"},
            {id:"hra",label:"HRA Received",default:20000,prefix:"₹",suffix:"/mo"},
            {id:"rent",label:"Actual Rent Paid",default:18000,prefix:"₹",suffix:"/mo"},
            {id:"metro",label:"Metro City?",type:"select",options:["Yes (Mumbai/Delhi/Kolkata/Chennai)","No (Other cities)"]}
        ],
        calc(v){
            const isMetro = v.metro.startsWith("Yes");
            const annBasic = v.basic*12, annHra = v.hra*12, annRent = v.rent*12;
            const rule1 = annHra;
            const rule2 = annRent - 0.1*annBasic;
            const rule3 = isMetro ? 0.5*annBasic : 0.4*annBasic;
            const exempt = Math.max(0, Math.min(rule1, rule2, rule3));
            const taxable = annHra - exempt;
            return {
                main:{label:"HRA Exemption (Annual)",value:"₹"+Math.round(exempt).toLocaleString()},
                secondary:[
                    {label:"Taxable HRA",value:"₹"+Math.round(taxable).toLocaleString()},
                    {label:"Rule 1 — Actual HRA",value:"₹"+Math.round(rule1).toLocaleString()},
                    {label:"Rule 2 — Rent minus 10% Basic",value:"₹"+Math.max(0,Math.round(rule2)).toLocaleString()},
                    {label:"Rule 3 — "+(isMetro?"50":"40")+"% of Basic",value:"₹"+Math.round(rule3).toLocaleString()},
                    {label:"Exemption = Minimum of 3 rules",value:"₹"+Math.round(exempt).toLocaleString()}
                ],
                tips:["Exemption is the MINIMUM of all 3 rules","Keep rent receipts for amounts above ₹1L/year","Metro cities: Mumbai, Delhi, Kolkata, Chennai"]
            };
        }
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
        calc(v){
            const std = 50000;
            // Old regime
            const oldDeductions = Math.min(v.sec80c,150000)+Math.min(v.nps,50000)+v.med+Math.min(v.hloan,200000)+v.hra_ex+std;
            const oldTaxable = Math.max(0, v.income - oldDeductions);
            function oldTax(ti){
                if(ti<=250000) return 0;
                if(ti<=500000) return (ti-250000)*0.05;
                if(ti<=1000000) return 12500+(ti-500000)*0.20;
                return 112500+(ti-1000000)*0.30;
            }
            const oldT = oldTax(oldTaxable)*1.04; // 4% cess
            // New regime FY25-26 (Budget 2026)
            const newTaxable = Math.max(0, v.income - 75000); // std deduction 75K
            function newTax(ti){
                if(ti<=400000) return 0;
                if(ti<=800000) return (ti-400000)*0.05;
                if(ti<=1200000) return 20000+(ti-800000)*0.10;
                if(ti<=1600000) return 60000+(ti-1200000)*0.15;
                if(ti<=2000000) return 120000+(ti-1600000)*0.20;
                if(ti<=2400000) return 200000+(ti-2000000)*0.25;
                return 300000+(ti-2400000)*0.30;
            }
            let newT = newTax(newTaxable); if(newTaxable<=1200000) newT=0; newT=newT*1.04;
            const saving = oldT - newT;
            return {
                main:{label:"Better Regime",value:saving>0?"New Regime saves ₹"+Math.round(saving).toLocaleString():saving<0?"Old Regime saves ₹"+Math.round(-saving).toLocaleString():"Both equal"},
                secondary:[
                    {label:"Old Regime Tax",value:"₹"+Math.round(oldT).toLocaleString()},
                    {label:"Old Taxable Income",value:"₹"+Math.round(oldTaxable).toLocaleString()},
                    {label:"Old Deductions",value:"₹"+Math.round(oldDeductions).toLocaleString()},
                    {label:"New Regime Tax",value:"₹"+Math.round(newT).toLocaleString()},
                    {label:"New Taxable Income",value:"₹"+Math.round(newTaxable).toLocaleString()},
                    {label:"Tax Saving",value:"₹"+Math.round(Math.abs(saving)).toLocaleString(),pos:saving>0}
                ]
            };
        }
    },

    cagr: {
        name:"CAGR Calculator", desc:"Compound Annual Growth Rate — investments, revenue, portfolio",
        icon:"fa-chart-line", cat:"finance", badge:"Popular",
        inputs:[
            {id:"begin",label:"Initial Value",default:100000,prefix:"₹"},
            {id:"end",label:"Final Value",default:250000,prefix:"₹"},
            {id:"yrs",label:"Number of Years",default:5,suffix:"years"}
        ],
        calc(v){
            const cagr = (Math.pow(v.end/v.begin, 1/v.yrs)-1)*100;
            const absGain = v.end - v.begin;
            const totalRet = ((v.end/v.begin)-1)*100;
            return {
                main:{label:"CAGR",value:cagr.toFixed(2)+"%"},
                secondary:[
                    {label:"Absolute Gain",value:"₹"+absGain.toLocaleString(),pos:true},
                    {label:"Total Return",value:totalRet.toFixed(2)+"%",pos:true},
                    {label:"Initial Value",value:"₹"+v.begin.toLocaleString()},
                    {label:"Final Value",value:"₹"+v.end.toLocaleString()},
                    {label:"Growth Multiplier",value:(v.end/v.begin).toFixed(2)+"×"}
                ]
            };
        },
        tips:["CAGR smooths year-on-year volatility","Use it to compare different investments fairly"]
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
        calc(v){
            const gain = v.sellPrice - v.buyPrice;
            const isEquity = v.assetType.startsWith("Equity");
            const isLT = isEquity ? v.holdMonths >= 12 : v.holdMonths >= 24;
            let taxRate, taxLabel, tax;
            if(isEquity){
                if(isLT){ taxRate=12.5; taxLabel="LTCG (Equity >12 mo)"; tax=Math.max(0,gain-125000)*0.125; }
                else { taxRate=20; taxLabel="STCG (Equity <12 mo)"; tax=Math.max(0,gain)*0.20; }
            } else {
                if(isLT){ taxRate=12.5; taxLabel="LTCG (no indexation)"; tax=Math.max(0,gain)*0.125; }
                else { taxLabel="STCG (added to income)"; taxRate=30; tax=Math.max(0,gain)*0.30; }
            }
            return {
                main:{label:taxLabel+" Tax",value:"₹"+Math.round(tax).toLocaleString()},
                secondary:[
                    {label:"Capital Gain",value:"₹"+gain.toLocaleString(),pos:gain>0,neg:gain<0},
                    {label:"Tax Rate",value:taxRate+"%"},
                    {label:"Post-Tax Profit",value:"₹"+Math.round(gain-tax).toLocaleString(),pos:true},
                    {label:"Effective Return",value:((v.sellPrice-v.buyPrice-tax)/v.buyPrice*100).toFixed(2)+"%"}
                ]
            };
        }
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
        calc(v){
            const r=v.rate/12/100;
            function totalInterest(P,n){ const emi=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1); return emi*n-P; }
            const intBefore = totalInterest(v.outstanding, v.rem);
            const newP = Math.max(0, v.outstanding - v.lump);
            const intAfter = totalInterest(newP, v.rem);
            const saved = intBefore - intAfter;
            // New tenure calculation
            const emi = v.outstanding*r*Math.pow(1+r,v.rem)/(Math.pow(1+r,v.rem)-1);
            const newN = Math.log(emi/(emi-newP*r))/Math.log(1+r);
            const monthsSaved = v.rem - Math.ceil(newN);
            return {
                main:{label:"Interest Saved",value:"₹"+Math.round(saved).toLocaleString(),pos:true},
                secondary:[
                    {label:"Months Saved",value:monthsSaved+" months ("+Math.floor(monthsSaved/12)+"y "+monthsSaved%12+"m)"},
                    {label:"New Outstanding",value:"₹"+Math.round(newP).toLocaleString()},
                    {label:"Interest Without Prepayment",value:"₹"+Math.round(intBefore).toLocaleString()},
                    {label:"Interest After Prepayment",value:"₹"+Math.round(intAfter).toLocaleString()}
                ]
            };
        }
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
        calc(v){
            const monthlyRate = v.apr/12/100;
            const minPayment = v.balance*v.minPct/100 + v.extra;
            let bal = v.balance, months = 0, totalInt = 0;
            while(bal > 0 && months < 600){
                const int = bal*monthlyRate;
                totalInt += int;
                const pay = Math.min(bal+int, minPayment);
                bal = bal + int - pay;
                months++;
                if(bal < 0) bal = 0;
            }
            return {
                main:{label:"Total Interest Paid",value:"₹"+Math.round(totalInt).toLocaleString()},
                secondary:[
                    {label:"Months to Pay Off",value:months+(months<600?" months":"+ (very long)")},
                    {label:"Total Amount Paid",value:"₹"+Math.round(v.balance+totalInt).toLocaleString()},
                    {label:"Monthly Payment",value:"₹"+Math.round(minPayment).toLocaleString()},
                    {label:"Interest Rate (monthly)",value:(v.apr/12).toFixed(2)+"%"}
                ]
            };
        },
        tips:["Always pay more than the minimum","Even ₹500 extra saves thousands in interest"]
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
        calc(v){
            let totalInvested=0, fv=0;
            const monthlyRate = v.ret/12/100;
            let monthlySIP = v.monthly;
            for(let y=0; y<v.years; y++){
                for(let m=0; m<12; m++){
                    fv = (fv + monthlySIP) * (1+monthlyRate);
                    totalInvested += monthlySIP;
                }
                monthlySIP *= (1 + v.stepup/100);
            }
            const gains = fv - totalInvested;
            return {
                main:{label:"Future Value",value:"₹"+Math.round(fv).toLocaleString()},
                secondary:[
                    {label:"Total Invested",value:"₹"+Math.round(totalInvested).toLocaleString()},
                    {label:"Wealth Gained",value:"₹"+Math.round(gains).toLocaleString(),pos:true},
                    {label:"Final Monthly SIP",value:"₹"+Math.round(monthlySIP).toLocaleString()},
                    {label:"Return Multiple",value:(fv/totalInvested).toFixed(2)+"×"}
                ],
                chart:{a:Math.round(totalInvested),b:Math.round(gains),lA:"Invested",lB:"Gains"}
            };
        }
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
        calc(v){
            const r = v.ret/12/100, n = v.years*12;
            const futureCurrentSavings = v.current * Math.pow(1+r, n);
            const remaining = Math.max(0, v.goal - futureCurrentSavings);
            const monthly = remaining > 0 ? remaining*r/(Math.pow(1+r,n)-1) : 0;
            return {
                main:{label:"Monthly Savings Needed",value:"₹"+Math.round(monthly).toLocaleString()},
                secondary:[
                    {label:"Target Amount",value:"₹"+v.goal.toLocaleString()},
                    {label:"Future Value of Current Savings",value:"₹"+Math.round(futureCurrentSavings).toLocaleString()},
                    {label:"Gap to Fill via SIP",value:"₹"+Math.round(remaining).toLocaleString()},
                    {label:"Total New Investment",value:"₹"+Math.round(monthly*n).toLocaleString()},
                    {label:"Years to Goal",value:v.years+" years"}
                ]
            };
        }
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
        calc(v){
            const yield_ = (v.dividend/v.price)*100;
            const annualIncome = v.dividend * v.shares;
            const payout = (v.dividend/v.eps)*100;
            return {
                main:{label:"Dividend Yield",value:yield_.toFixed(2)+"%"},
                secondary:[
                    {label:"Annual Dividend Income",value:"₹"+annualIncome.toLocaleString()},
                    {label:"Monthly Income",value:"₹"+(annualIncome/12).toFixed(0)},
                    {label:"Payout Ratio",value:payout.toFixed(1)+"%"},
                    {label:"Shares Held",value:v.shares.toLocaleString()},
                    {label:"Investment Value",value:"₹"+(v.price*v.shares).toLocaleString()}
                ]
            };
        }
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
        calc(v){
            const buyTotal = (v.buyRate/10)*v.grams*(1+v.making/100);
            const currentVal = (v.currentRate/10)*v.grams;
            const profit = currentVal - buyTotal;
            const returns = (profit/buyTotal)*100;
            return {
                main:{label:"Current Gold Value",value:"₹"+Math.round(currentVal).toLocaleString()},
                secondary:[
                    {label:"Total Buy Cost (incl. making)",value:"₹"+Math.round(buyTotal).toLocaleString()},
                    {label:"Profit / Loss",value:"₹"+Math.round(profit).toLocaleString(),pos:profit>0,neg:profit<0},
                    {label:"Return",value:returns.toFixed(2)+"%",pos:returns>0},
                    {label:"Gold Rate (per gram)",value:"₹"+(v.currentRate/10).toFixed(0)}
                ]
            };
        }
    },

    // ══════════════════════════════════════════════
    // ── NEW HEALTH CALCULATORS ────────────────────
    // ══════════════════════════════════════════════

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
        calc(v){
            let bf;
            if(v.gender==="Male"){
                bf = 495/(1.0324 - 0.19077*Math.log10(v.waist_bf-v.neck_bf) + 0.15456*Math.log10(v.height_bf)) - 450;
            } else {
                bf = 495/(1.29579 - 0.35004*Math.log10(v.waist_bf+v.hip_bf-v.neck_bf) + 0.22100*Math.log10(v.height_bf)) - 450;
            }
            bf = Math.max(3, Math.min(60, bf));
            const cat = v.gender==="Male"
                ? (bf<6?"Essential Fat":bf<14?"Athletes":bf<18?"Fitness":bf<25?"Average":"Obese")
                : (bf<14?"Essential Fat":bf<21?"Athletes":bf<25?"Fitness":bf<32?"Average":"Obese");
            const leanMass = 70*(1-bf/100); // approx at 70kg
            return {
                main:{label:"Estimated Body Fat",value:bf.toFixed(1)+"%"},
                secondary:[
                    {label:"Category",value:cat},
                    {label:"Healthy Range (Male)",value:"10–20%"},
                    {label:"Healthy Range (Female)",value:"18–28%"},
                    {label:"Fat Mass (est. at 70kg)",value:(70*bf/100).toFixed(1)+" kg"},
                    {label:"Lean Mass (est. at 70kg)",value:leanMass.toFixed(1)+" kg"}
                ]
            };
        }
    },

    bloodpressure: {
        name:"Blood Pressure Classifier", desc:"Classify your BP reading and understand the risk level",
        icon:"fa-heart-pulse", cat:"health",
        inputs:[
            {id:"systolic",label:"Systolic Pressure (upper)",default:120,suffix:"mmHg"},
            {id:"diastolic",label:"Diastolic Pressure (lower)",default:80,suffix:"mmHg"},
            {id:"age_bp",label:"Your Age",default:35,suffix:"years"}
        ],
        calc(v){
            const s=v.systolic, d=v.diastolic;
            let cat, risk, advice;
            if(s<90||d<60){cat="Low (Hypotension)";risk="Low–Moderate";advice="Consult a doctor if dizzy or fatigued";}
            else if(s<120&&d<80){cat="Normal";risk="Low";advice="Maintain healthy lifestyle";}
            else if(s<130&&d<80){cat="Elevated";risk="Moderate";advice="Diet, exercise, reduce sodium";}
            else if(s<140||d<90){cat="Hypertension Stage 1";risk="Moderate–High";advice="Lifestyle change + possible medication";}
            else if(s<180||d<120){cat="Hypertension Stage 2";risk="High";advice="See a doctor promptly";}
            else{cat="Hypertensive Crisis";risk="Very High";advice="Seek emergency care immediately";}
            const pp = s - d;
            const map = Math.round(d + pp/3);
            return {
                main:{label:"BP Classification",value:cat},
                secondary:[
                    {label:"Risk Level",value:risk},
                    {label:"Advice",value:advice},
                    {label:"Pulse Pressure",value:pp+" mmHg"},
                    {label:"Mean Arterial Pressure (MAP)",value:map+" mmHg"},
                    {label:"Normal MAP range",value:"70–100 mmHg"}
                ]
            };
        }
    },

    proteinintake: {
        name:"Protein Intake Calculator", desc:"Daily protein requirement based on weight, activity and goal",
        icon:"fa-dumbbell", cat:"health",
        inputs:[
            {id:"weight_p",label:"Body Weight",default:70,suffix:"kg"},
            {id:"activity_p",label:"Activity Level",type:"select",options:["Sedentary","Lightly Active","Moderately Active","Very Active","Athlete"]},
            {id:"goal_p",label:"Goal",type:"select",options:["Maintain Weight","Lose Fat","Build Muscle","Maximum Muscle"]}
        ],
        calc(v){
            const actMult = {Sedentary:0.8,"Lightly Active":1.0,"Moderately Active":1.2,"Very Active":1.5,Athlete:1.8};
            const goalMult = {"Maintain Weight":1.0,"Lose Fat":1.2,"Build Muscle":1.6,"Maximum Muscle":2.0};
            const base = v.weight_p * (actMult[v.activity_p]||1.0) * (goalMult[v.goal_p]||1.0);
            const minP = v.weight_p * 0.8, maxP = v.weight_p * 2.2;
            return {
                main:{label:"Daily Protein Target",value:Math.round(base)+"g"},
                secondary:[
                    {label:"Per Meal (3 meals)",value:Math.round(base/3)+"g"},
                    {label:"Per Meal (4 meals)",value:Math.round(base/4)+"g"},
                    {label:"Minimum (sedentary RDA)",value:Math.round(minP)+"g"},
                    {label:"Maximum (advanced training)",value:Math.round(maxP)+"g"},
                    {label:"Calories from Protein",value:Math.round(base*4)+" kcal"}
                ]
            };
        }
    },

    smokingcost: {
        name:"Smoking Cost Calculator", desc:"Money wasted on cigarettes and health risk assessment",
        icon:"fa-ban-smoking", cat:"health",
        inputs:[
            {id:"cigsPerDay",label:"Cigarettes Per Day",default:10},
            {id:"packPrice",label:"Price per Pack (20 cigs)",default:250,prefix:"₹"},
            {id:"yearsSmoked",label:"Years Smoking",default:5,suffix:"years"}
        ],
        calc(v){
            const dailyCost = (v.cigsPerDay/20)*v.packPrice;
            const monthlyCost = dailyCost*30;
            const yearlyCost = dailyCost*365;
            const totalSpent = yearlyCost * v.yearsSmoked;
            const investedAt12 = totalSpent * Math.pow(1.12, v.yearsSmoked);
            return {
                main:{label:"Annual Smoking Cost",value:"₹"+Math.round(yearlyCost).toLocaleString()},
                secondary:[
                    {label:"Daily Cost",value:"₹"+Math.round(dailyCost).toFixed(0)},
                    {label:"Monthly Cost",value:"₹"+Math.round(monthlyCost).toLocaleString()},
                    {label:"Total Spent in "+v.yearsSmoked+" years",value:"₹"+Math.round(totalSpent).toLocaleString()},
                    {label:"If invested @12% instead",value:"₹"+Math.round(investedAt12).toLocaleString()},
                    {label:"Cigarettes in "+v.yearsSmoked+" years",value:Math.round(v.cigsPerDay*365*v.yearsSmoked).toLocaleString()}
                ]
            };
        },
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
        calc(v){
            const midParent = (v.fatherH + v.motherH)/2;
            const predicted = v.childGender==="Boy" ? midParent + 6.5 : midParent - 6.5;
            const low = predicted - 8.5, high = predicted + 8.5;
            return {
                main:{label:"Predicted Adult Height",value:predicted.toFixed(1)+" cm ("+Math.round(predicted/2.54*10/10)+"'"+Math.round(predicted/2.54%12)+'"'},
                secondary:[
                    {label:"Height Range (±8.5cm)",value:low.toFixed(1)+" – "+high.toFixed(1)+" cm"},
                    {label:"Mid-Parent Height",value:midParent.toFixed(1)+" cm"},
                    {label:"Father",value:v.fatherH+" cm"},
                    {label:"Mother",value:v.motherH+" cm"},
                    {label:"Note",value:"Genetics accounts for ~80% of adult height"}
                ]
            };
        }
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
        calc(v){
            let score = 0;
            if(v.age_d>=40&&v.age_d<50) score+=1; else if(v.age_d>=50&&v.age_d<60) score+=2; else if(v.age_d>=60) score+=3;
            if(v.bmi_d>=25&&v.bmi_d<30) score+=1; else if(v.bmi_d>=30&&v.bmi_d<35) score+=2; else if(v.bmi_d>=35) score+=3;
            if(v.waist_d>=94) score+=1; if(v.waist_d>=102) score+=1;
            if(v.familyHist==="Parent or Sibling") score+=2; else if(v.familyHist==="Both Parents") score+=4;
            if(v.physActive==="No") score+=2;
            const risk = score<=3?"Low":score<=8?"Moderate":score<=12?"High":"Very High";
            const prob = score<=3?"<1%":score<=8?"1–5%":score<=12?"5–15%":">15%";
            return {
                main:{label:"Diabetes Risk Level",value:risk},
                secondary:[
                    {label:"Risk Score",value:score+"/22"},
                    {label:"Estimated 10-year Risk",value:prob},
                    {label:"Recommended Action",value:risk==="Low"?"Annual check-up":risk==="Moderate"?"Lifestyle changes + HbA1c test":"See a doctor for full assessment"}
                ]
            };
        }
    },

    sleepdebt: {
        name:"Sleep Debt Calculator", desc:"Cumulative sleep deficit and recovery plan",
        icon:"fa-moon", cat:"health",
        inputs:[
            {id:"needed",label:"Hours Needed per Night",default:8,suffix:"hrs"},
            {id:"actual",label:"Average Hours You Sleep",default:6.5,suffix:"hrs"},
            {id:"days",label:"Days of Deficit",default:7,suffix:"days"}
        ],
        calc(v){
            const nightly = v.needed - v.actual;
            const total = nightly * v.days;
            const recoveryDays = Math.ceil(total / 2); // can recover ~2hrs/night max
            return {
                main:{label:"Sleep Debt",value:total.toFixed(1)+" hours"},
                secondary:[
                    {label:"Nightly Deficit",value:nightly.toFixed(1)+" hrs/night"},
                    {label:"Recovery Plan",value:recoveryDays+" nights of +2hr sleep"},
                    {label:"Ideal Bedtime (for 6AM wake)",value:"10:00 PM"},
                    {label:"Productivity Impact",value:total>14?"Severe":total>7?"Moderate":"Mild"},
                    {label:"Health Risk",value:total>20?"High":total>10?"Moderate":"Low"}
                ]
            };
        }
    },

    ovulation: {
        name:"Ovulation & Fertile Window", desc:"Estimate peak fertile days based on cycle length",
        icon:"fa-calendar-heart", cat:"health",
        inputs:[
            {id:"lastPeriod",label:"First Day of Last Period",type:"date"},
            {id:"cycleLen",label:"Cycle Length",default:28,suffix:"days"},
            {id:"luteal",label:"Luteal Phase Length",default:14,suffix:"days"}
        ],
        calc(v){
            if(!v.lastPeriod) return {main:{label:"Error",value:"Enter last period date"}};
            const lp = new Date(v.lastPeriod);
            const ovDay = new Date(lp); ovDay.setDate(lp.getDate() + v.cycleLen - v.luteal);
            const fertStart = new Date(ovDay); fertStart.setDate(ovDay.getDate()-5);
            const fertEnd = new Date(ovDay); fertEnd.setDate(ovDay.getDate()+1);
            const nextPeriod = new Date(lp); nextPeriod.setDate(lp.getDate()+v.cycleLen);
            const fmt = d => d.toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});
            return {
                main:{label:"Ovulation Day (est.)",value:fmt(ovDay)},
                secondary:[
                    {label:"Fertile Window",value:fmt(fertStart)+" to "+fmt(fertEnd)},
                    {label:"Next Period (est.)",value:fmt(nextPeriod)},
                    {label:"Cycle Day of Ovulation",value:(v.cycleLen-v.luteal)},
                    {label:"Days Until Ovulation",value:Math.ceil((ovDay-new Date())/86400000)+" days"}
                ]
            };
        }
    },

    anemia: {
        name:"Anemia Risk Checker", desc:"Hemoglobin level interpretation and severity classification",
        icon:"fa-syringe", cat:"health",
        inputs:[
            {id:"hb",label:"Hemoglobin Level",default:12,suffix:"g/dL"},
            {id:"gender_a",label:"Gender",type:"select",options:["Male","Female","Pregnant Woman","Child (6-12 yr)"]}
        ],
        calc(v){
            const thresholds = {Male:13,Female:12,"Pregnant Woman":11,"Child (6-12 yr)":11.5};
            const normal = thresholds[v.gender_a]||12;
            const diff = v.hb - normal;
            let severity, advice;
            if(v.hb >= normal){severity="Normal";advice="Hemoglobin is within healthy range";}
            else if(v.hb >= normal-1){severity="Mild Anemia";advice="Increase iron-rich foods (spinach, lentils, meat)";}
            else if(v.hb >= normal-3){severity="Moderate Anemia";advice="See a doctor. Iron supplements likely needed";}
            else{severity="Severe Anemia";advice="Urgent medical attention required";}
            return {
                main:{label:"Anemia Status",value:severity},
                secondary:[
                    {label:"Your Hemoglobin",value:v.hb+" g/dL"},
                    {label:"Normal for "+v.gender_a,value:normal+" g/dL"},
                    {label:"Gap",value:diff.toFixed(1)+" g/dL"},
                    {label:"Advice",value:advice}
                ]
            };
        }
    },

    // ══════════════════════════════════════════════
    // ── NEW MATH CALCULATORS ──────────────────────
    // ══════════════════════════════════════════════

    scientific: {
        name:"Scientific Calculator", desc:"Trigonometry, logarithms, powers and more",
        icon:"fa-calculator", cat:"math",
        inputs:[
            {id:"expr",label:"Value / Angle",default:45,type:"text"},
            {id:"unit",label:"Angle Unit",type:"select",options:["Degrees","Radians"]}
        ],
        calc(v){
            const x = parseFloat(v.expr)||0;
            const rad = v.unit==="Degrees" ? x*Math.PI/180 : x;
            return {
                main:{label:"sin("+x+(v.unit==="Degrees"?"°":"rad")+")",value:Math.sin(rad).toFixed(8)},
                secondary:[
                    {label:"cos",value:Math.cos(rad).toFixed(8)},
                    {label:"tan",value:Math.abs(Math.cos(rad))<1e-10?"undefined":Math.tan(rad).toFixed(8)},
                    {label:"√x",value:x>=0?Math.sqrt(x).toFixed(8):"undefined"},
                    {label:"x²",value:(x*x).toFixed(4)},
                    {label:"x³",value:(x*x*x).toFixed(4)},
                    {label:"ln(x)",value:x>0?Math.log(x).toFixed(8):"undefined"},
                    {label:"log₁₀(x)",value:x>0?Math.log10(x).toFixed(8):"undefined"},
                    {label:"eˣ",value:Math.exp(x).toExponential(6)}
                ]
            };
        }
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
        calc(v){
            if(!v.d1||!v.d2) return {main:{label:"Error",value:"Denominator cannot be 0"}};
            const gcd = (a,b) => b===0?a:gcd(b,a%b);
            let rn, rd;
            if(v.op.startsWith("Add")){rn=v.n1*v.d2+v.n2*v.d1;rd=v.d1*v.d2;}
            else if(v.op.startsWith("Sub")){rn=v.n1*v.d2-v.n2*v.d1;rd=v.d1*v.d2;}
            else if(v.op.startsWith("Mul")){rn=v.n1*v.n2;rd=v.d1*v.d2;}
            else{rn=v.n1*v.d2;rd=v.d1*v.n2;}
            const g=gcd(Math.abs(rn),Math.abs(rd));
            const sn=rn/g, sd=rd/g;
            return {
                main:{label:"Result",value:(sd===1?sn:sn+"/"+sd)+" = "+(rn/rd).toFixed(6)},
                secondary:[
                    {label:"Simplified",value:sn+"/"+sd},
                    {label:"Decimal",value:(rn/rd).toFixed(8)},
                    {label:"Mixed Number",value:Math.abs(sn)>Math.abs(sd)?Math.floor(sn/sd)+" "+Math.abs(sn%sd)+"/"+sd:sn+"/"+sd},
                    {label:"Expression",value:v.n1+"/"+v.d1+" "+v.op.split(" ")[1]+" "+v.n2+"/"+v.d2}
                ]
            };
        }
    },

    stddev: {
        name:"Standard Deviation Calculator", desc:"Mean, variance, standard deviation from raw data",
        icon:"fa-chart-bar", cat:"math",
        inputs:[{id:"data",label:"Enter Numbers (comma separated)",default:"10,20,30,40,50",type:"text"}],
        calc(v){
            const arr=String(v.data).split(',').map(Number).filter(n=>!isNaN(n)&&String(n).trim()!=='');
            if(arr.length<2) return {main:{label:"Error",value:"Enter at least 2 numbers"}};
            const n=arr.length, mean=arr.reduce((s,x)=>s+x,0)/n;
            const variance=arr.reduce((s,x)=>s+(x-mean)**2,0)/n;
            const popSD=Math.sqrt(variance);
            const sampleVar=arr.reduce((s,x)=>s+(x-mean)**2,0)/(n-1);
            const sampleSD=Math.sqrt(sampleVar);
            arr.sort((a,b)=>a-b);
            return {
                main:{label:"Population Std Dev (σ)",value:popSD.toFixed(6)},
                secondary:[
                    {label:"Sample Std Dev (s)",value:sampleSD.toFixed(6)},
                    {label:"Mean (μ)",value:mean.toFixed(6)},
                    {label:"Variance (σ²)",value:variance.toFixed(6)},
                    {label:"Min",value:arr[0]},
                    {label:"Max",value:arr[arr.length-1]},
                    {label:"Range",value:arr[arr.length-1]-arr[0]},
                    {label:"Count (n)",value:n}
                ]
            };
        }
    },

    lineareq: {
        name:"Linear Equation Solver", desc:"Solve ax + b = c for any single variable",
        icon:"fa-equals", cat:"math",
        inputs:[
            {id:"a_eq",label:"Coefficient a (of x)",default:3},
            {id:"b_eq",label:"Constant b",default:7},
            {id:"c_eq",label:"Right-hand side c",default:22}
        ],
        calc(v){
            // ax + b = c → x = (c-b)/a
            if(v.a_eq===0) return {main:{label:"Error",value:v.b_eq===v.c_eq?"Infinite solutions":"No solution"}};
            const x=(v.c_eq-v.b_eq)/v.a_eq;
            return {
                main:{label:"x",value:x.toFixed(8)},
                secondary:[
                    {label:"Equation",value:v.a_eq+"x + "+v.b_eq+" = "+v.c_eq},
                    {label:"Step 1: Subtract b",value:v.a_eq+"x = "+(v.c_eq-v.b_eq)},
                    {label:"Step 2: Divide by a",value:"x = "+(v.c_eq-v.b_eq)+"/"+v.a_eq},
                    {label:"Verification",value:v.a_eq+"×"+x.toFixed(4)+" + "+v.b_eq+" = "+(v.a_eq*x+v.b_eq).toFixed(4)}
                ]
            };
        }
    },

    circleCalc: {
        name:"Circle & Sphere Calculator", desc:"Area, circumference, arc length, sphere volume",
        icon:"fa-circle", cat:"math",
        inputs:[
            {id:"radius",label:"Radius",default:7,suffix:"units"},
            {id:"angle",label:"Arc Angle",default:90,suffix:"°"}
        ],
        calc(v){
            const r=v.radius, a=v.angle;
            return {
                main:{label:"Circle Area",value:(Math.PI*r*r).toFixed(4)+" sq units"},
                secondary:[
                    {label:"Circumference (2πr)",value:(2*Math.PI*r).toFixed(4)+" units"},
                    {label:"Diameter",value:(2*r)+" units"},
                    {label:"Arc Length ("+a+"°)",value:(2*Math.PI*r*a/360).toFixed(4)+" units"},
                    {label:"Sector Area ("+a+"°)",value:(Math.PI*r*r*a/360).toFixed(4)+" sq units"},
                    {label:"Sphere Volume (4/3πr³)",value:((4/3)*Math.PI*r*r*r).toFixed(4)+" cu units"},
                    {label:"Sphere Surface Area (4πr²)",value:(4*Math.PI*r*r).toFixed(4)+" sq units"}
                ]
            };
        }
    },

    determinant: {
        name:"Matrix Determinant (3×3)", desc:"Calculate determinant of a 3×3 matrix",
        icon:"fa-table-cells", cat:"math",
        inputs:[
            {id:"a11",label:"Row 1, Col 1",default:1},{id:"a12",label:"Row 1, Col 2",default:2},{id:"a13",label:"Row 1, Col 3",default:3},
            {id:"a21",label:"Row 2, Col 1",default:4},{id:"a22",label:"Row 2, Col 2",default:5},{id:"a23",label:"Row 2, Col 3",default:6},
            {id:"a31",label:"Row 3, Col 1",default:7},{id:"a32",label:"Row 3, Col 2",default:8},{id:"a33",label:"Row 3, Col 3",default:0}
        ],
        calc(v){
            const det = v.a11*(v.a22*v.a33-v.a23*v.a32)
                       -v.a12*(v.a21*v.a33-v.a23*v.a31)
                       +v.a13*(v.a21*v.a32-v.a22*v.a31);
            const trace = v.a11+v.a22+v.a33;
            return {
                main:{label:"Determinant",value:det.toFixed(6)},
                secondary:[
                    {label:"Trace (sum of diagonal)",value:trace},
                    {label:"Is Invertible?",value:det!==0?"Yes (det ≠ 0)":"No (det = 0, singular)"},
                    {label:"Minor M₁₁",value:(v.a22*v.a33-v.a23*v.a32).toFixed(4)},
                    {label:"Minor M₁₂",value:(v.a21*v.a33-v.a23*v.a31).toFixed(4)},
                    {label:"Matrix",value:"["+v.a11+","+v.a12+","+v.a13+"] ["+v.a21+","+v.a22+","+v.a23+"] ["+v.a31+","+v.a32+","+v.a33+"]"}
                ]
            };
        }
    },

    // ══════════════════════════════════════════════
    // ── NEW EVERYDAY CALCULATORS ──────────────────
    // ══════════════════════════════════════════════

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
        calc(v){
            const assets = v.cash+v.stocks+v.property+v.gold_nw+v.pf;
            const liabilities = v.homeloan+v.carloan+v.cc;
            const netWorth = assets - liabilities;
            const ratio = assets>0?(liabilities/assets*100):0;
            return {
                main:{label:"Net Worth",value:"₹"+netWorth.toLocaleString(),pos:netWorth>0,neg:netWorth<0},
                secondary:[
                    {label:"Total Assets",value:"₹"+assets.toLocaleString()},
                    {label:"Total Liabilities",value:"₹"+liabilities.toLocaleString()},
                    {label:"Debt-to-Asset Ratio",value:ratio.toFixed(1)+"%"},
                    {label:"Financial Health",value:ratio<30?"Strong":ratio<50?"Moderate":ratio<80?"Weak":"Over-leveraged"},
                    {label:"Liquid Assets",value:"₹"+(v.cash+v.stocks).toLocaleString()}
                ]
            };
        }
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
        calc(v){
            const multiplier = v.city_tier.includes("1")?1.5:v.city_tier.includes("2")?1.0:0.7;
            const catering = v.catering_pp*v.guests*v.func;
            const venue = 100000*multiplier*v.func;
            const decor = 150000*multiplier;
            const photography = 80000*multiplier;
            const clothes = 100000*multiplier;
            const misc = (catering+venue+decor+photography+clothes)*0.15;
            const total = catering+venue+decor+photography+clothes+misc;
            return {
                main:{label:"Estimated Total Budget",value:"₹"+Math.round(total).toLocaleString()},
                secondary:[
                    {label:"Catering ("+v.guests+" guests × "+v.func+" functions)",value:"₹"+Math.round(catering).toLocaleString()},
                    {label:"Venue & Decoration",value:"₹"+Math.round(venue+decor).toLocaleString()},
                    {label:"Photography & Video",value:"₹"+Math.round(photography).toLocaleString()},
                    {label:"Clothes & Jewelry (est.)",value:"₹"+Math.round(clothes).toLocaleString()},
                    {label:"Miscellaneous (15%)",value:"₹"+Math.round(misc).toLocaleString()}
                ]
            };
        }
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
        calc(v){
            const available = v.salary_r - v.expenses_r - v.emi_r - v.savings_r;
            const maxRent = Math.round(available*0.9); // 90% of available for rent
            const rentPct = (maxRent/v.salary_r*100);
            return {
                main:{label:"Max Affordable Rent",value:"₹"+Math.max(0,maxRent).toLocaleString()},
                secondary:[
                    {label:"Rent as % of Income",value:rentPct.toFixed(1)+"%"},
                    {label:"Recommended Limit (30%)",value:"₹"+(v.salary_r*0.3).toLocaleString()},
                    {label:"Surplus After Rent",value:"₹"+Math.max(0,available-maxRent).toLocaleString()},
                    {label:"Status",value:rentPct<=30?"✅ Comfortable":rentPct<=40?"⚠️ Manageable":"❌ Stretched"}
                ]
            };
        }
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
        calc(v){
            const grossNeeded = (v.annualIncome + v.expenses_fl) / (1-v.tax_fl/100);
            const dailyRate = grossNeeded/v.workDays;
            const hourlyRate = dailyRate/v.hoursPerDay;
            const monthly = grossNeeded/12;
            return {
                main:{label:"Hourly Rate",value:"₹"+Math.round(hourlyRate).toLocaleString()},
                secondary:[
                    {label:"Daily Rate",value:"₹"+Math.round(dailyRate).toLocaleString()},
                    {label:"Monthly Billing Target",value:"₹"+Math.round(monthly).toLocaleString()},
                    {label:"Annual Gross Needed",value:"₹"+Math.round(grossNeeded).toLocaleString()},
                    {label:"Tax Provision",value:"₹"+Math.round(grossNeeded*v.tax_fl/100).toLocaleString()},
                    {label:"Break-even Day Rate",value:"₹"+Math.round(v.expenses_fl/v.workDays).toLocaleString()}
                ]
            };
        }
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
        calc(v){
            const carCO2 = (v.carKm/v.carFuel)*2.31; // kg CO2 per litre petrol
            const flightCO2 = v.flights*255; // avg 255kg per short flight
            const elecCO2 = v.elecUnits*12*0.82; // India grid: 0.82 kg/kWh
            const dietCO2 = v.meatMeals*52*3.3; // 3.3kg CO2 per meat meal
            const total = carCO2+flightCO2+elecCO2+dietCO2;
            const globalAvg = 4000, indiaAvg = 1900;
            return {
                main:{label:"Annual Carbon Footprint",value:(total/1000).toFixed(2)+" tonnes CO₂"},
                secondary:[
                    {label:"Car Emissions",value:(carCO2/1000).toFixed(2)+" t CO₂"},
                    {label:"Flights",value:(flightCO2/1000).toFixed(2)+" t CO₂"},
                    {label:"Electricity",value:(elecCO2/1000).toFixed(2)+" t CO₂"},
                    {label:"Diet",value:(dietCO2/1000).toFixed(2)+" t CO₂"},
                    {label:"vs India Average (1.9t)",value:total>indiaAvg?"+"+(((total-indiaAvg)/indiaAvg)*100).toFixed(0)+"%":"Below average ✅"}
                ]
            };
        }
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
        calc(v){
            const P=v.carPrice-v.downpay, r=v.carRate/12/100, n=v.carTenure;
            const emi=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
            const annEmi=emi*12;
            const annFuel=(v.kmYear/v.mileage)*v.fuelPrice;
            const depreciation=v.carPrice*0.15; // ~15% first year
            const totalAnnual=annEmi+annFuel+v.insurance+v.maintenance+depreciation;
            const perKm=totalAnnual/v.kmYear;
            return {
                main:{label:"Annual Ownership Cost",value:"₹"+Math.round(totalAnnual).toLocaleString()},
                secondary:[
                    {label:"Monthly EMI",value:"₹"+Math.round(emi).toLocaleString()},
                    {label:"Annual Fuel Cost",value:"₹"+Math.round(annFuel).toLocaleString()},
                    {label:"Insurance + Maintenance",value:"₹"+(v.insurance+v.maintenance).toLocaleString()},
                    {label:"Depreciation (Year 1 ~15%)",value:"₹"+Math.round(depreciation).toLocaleString()},
                    {label:"Cost per km",value:"₹"+perKm.toFixed(1)}
                ]
            };
        }
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
        calc(v){
            const tip=v.billAmt*v.tipPct/100;
            const total=v.billAmt+tip+v.extra;
            const perPerson=total/v.people;
            return {
                main:{label:"Per Person",value:"₹"+perPerson.toFixed(2)},
                secondary:[
                    {label:"Bill Amount",value:"₹"+v.billAmt.toFixed(2)},
                    {label:"Tip Amount ("+v.tipPct+"%)",value:"₹"+tip.toFixed(2)},
                    {label:"Extra Charges",value:"₹"+v.extra.toFixed(2)},
                    {label:"Grand Total",value:"₹"+total.toFixed(2)},
                    {label:"Tip per Person",value:"₹"+(tip/v.people).toFixed(2)}
                ]
            };
        }
    },

    petage: {
        name:"Dog & Cat Age in Human Years", desc:"Convert your pet's age to human equivalent years",
        icon:"fa-paw", cat:"everyday",
        inputs:[
            {id:"petAge",label:"Pet's Age",default:5,suffix:"years"},
            {id:"petType",label:"Pet Type",type:"select",options:["Small Dog (<10kg)","Medium Dog (10-25kg)","Large Dog (>25kg)","Cat"]},
            {id:"petWeight",label:"Dog Weight (for dogs)",default:15,suffix:"kg"}
        ],
        calc(v){
            let humanAge;
            if(v.petType.startsWith("Cat")){
                if(v.petAge<=1) humanAge=15;
                else if(v.petAge<=2) humanAge=24;
                else humanAge=24+(v.petAge-2)*4;
            } else if(v.petType.includes("Small")){
                humanAge=v.petAge*15-v.petAge*(v.petAge-1)*0.5;
            } else if(v.petType.includes("Large")){
                humanAge=v.petAge*13;
            } else {
                humanAge=v.petAge*14;
            }
            humanAge=Math.round(humanAge);
            const lifeExpect=v.petType.includes("Small")?16:v.petType.includes("Large")?10:v.petType.includes("Cat")?15:13;
            const pctLife=Math.round(v.petAge/lifeExpect*100);
            return {
                main:{label:"Human Age Equivalent",value:humanAge+" human years"},
                secondary:[
                    {label:"Pet Age",value:v.petAge+" years"},
                    {label:"Life Stage",value:pctLife<20?"Puppy/Kitten":pctLife<50?"Young Adult":pctLife<75?"Mature Adult":"Senior"},
                    {label:"% of Life Lived",value:pctLife+"%"},
                    {label:"Expected Lifespan",value:"~"+lifeExpect+" years"}
                ]
            };
        }
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
        calc(v){
            const ppd=v.dest.includes("Budget")?2000:v.dest.includes("Mid")?5000:v.dest.includes("Luxury")?12000:15000;
            const dailyCost=ppd*v.people_t;
            const stay=dailyCost*v.days;
            const buffer=stay*0.15;
            const total=stay+v.flights_t+buffer;
            return {
                main:{label:"Estimated Total Budget",value:"₹"+Math.round(total).toLocaleString()},
                secondary:[
                    {label:"Daily Cost ("+v.people_t+" people)",value:"₹"+dailyCost.toLocaleString()},
                    {label:"Accommodation + Food ("+v.days+"d)",value:"₹"+stay.toLocaleString()},
                    {label:"Flights",value:"₹"+v.flights_t.toLocaleString()},
                    {label:"Buffer (15%)",value:"₹"+Math.round(buffer).toLocaleString()},
                    {label:"Per Person Total",value:"₹"+Math.round(total/v.people_t).toLocaleString()}
                ]
            };
        }
    },

    // ══════════════════════════════════════════════
    // ── EDUCATION CALCULATORS ─────────────────────
    // ══════════════════════════════════════════════

    cgpa: {
        name:"CGPA to Percentage", desc:"Convert CGPA to percentage (various university scales)",
        icon:"fa-graduation-cap", cat:"education", badge:"Popular",
        inputs:[
            {id:"cgpa",label:"Your CGPA",default:8.5,suffix:"/10"},
            {id:"scale",label:"CGPA Scale",type:"select",options:["10-point (×9.5 — CBSE/VTU)","10-point (×10 — Mumbai Univ)","10-point (×9.25 — Amity)","4-point (US GPA)"]},
            {id:"maxCgpa",label:"Maximum CGPA in Your Batch",default:9.8,suffix:"/10"}
        ],
        calc(v){
            let pct;
            if(v.scale.includes("×9.5")) pct=v.cgpa*9.5;
            else if(v.scale.includes("×10")) pct=v.cgpa*10;
            else if(v.scale.includes("×9.25")) pct=v.cgpa*9.25;
            else pct=(v.cgpa/4)*100; // US scale approx
            const grade=pct>=90?"O (Outstanding)":pct>=75?"A+ (Excellent)":pct>=60?"A (Good)":pct>=50?"B (Average)":pct>=40?"C (Pass)":"F (Fail)";
            const relative=(v.cgpa/v.maxCgpa*100).toFixed(1);
            return {
                main:{label:"Percentage",value:pct.toFixed(2)+"%"},
                secondary:[
                    {label:"Grade",value:grade},
                    {label:"Percentile (relative to topper)",value:relative+"%"},
                    {label:"Division",value:pct>=60?"First Division":pct>=50?"Second Division":"Third Division"},
                    {label:"Your CGPA",value:v.cgpa+"/10"},
                    {label:"Scale Used",value:v.scale.split(" ")[0]}
                ]
            };
        }
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
        calc(v){
            const totalMax = v.totalSoFar + v.finalMax;
            const neededTotal = totalMax * v.targetPct/100;
            const neededFinal = neededTotal - v.currentMarks;
            const currentPct = (v.currentMarks/v.totalSoFar*100);
            const feasible = neededFinal <= v.finalMax;
            return {
                main:{label:"Score Needed in Finals",value:feasible?Math.ceil(neededFinal)+"/"+v.finalMax:"Not Feasible ❌"},
                secondary:[
                    {label:"Current Percentage",value:currentPct.toFixed(2)+"%"},
                    {label:"Marks Needed",value:Math.ceil(neededFinal)+" out of "+v.finalMax},
                    {label:"Min % in Finals",value:((neededFinal/v.finalMax)*100).toFixed(1)+"%"},
                    {label:"Target Overall",value:v.targetPct+"%"},
                    {label:"Status",value:feasible?"✅ Achievable":"❌ Impossible — lower your target"}
                ]
            };
        }
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
        calc(v){
            const r=v.eduRate/12/100;
            // Interest accrues during moratorium (simple interest)
            const accruedInterest = v.loanAmt*r*v.moratorium;
            const principalAtRepay = v.loanAmt + accruedInterest;
            const emi=principalAtRepay*r*Math.pow(1+r,v.repayTenure)/(Math.pow(1+r,v.repayTenure)-1);
            const totalPaid=emi*v.repayTenure;
            const totalInterest=totalPaid-v.loanAmt;
            return {
                main:{label:"Monthly EMI After Course",value:"₹"+Math.round(emi).toLocaleString()},
                secondary:[
                    {label:"Interest During Moratorium",value:"₹"+Math.round(accruedInterest).toLocaleString()},
                    {label:"Principal at Repayment Start",value:"₹"+Math.round(principalAtRepay).toLocaleString()},
                    {label:"Total Interest Paid",value:"₹"+Math.round(totalInterest).toLocaleString()},
                    {label:"Total Amount Paid",value:"₹"+Math.round(totalPaid).toLocaleString()},
                    {label:"Total Duration",value:(v.moratorium+v.repayTenure)+" months"}
                ]
            };
        }
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
        calc(v){
            const totalHours = v.daysLeft * v.hoursPerDay;
            const effectiveHours = totalHours / (1+v.revisions*0.3);
            const perSubject = effectiveHours / v.subjects;
            const revisionHours = totalHours - effectiveHours;
            return {
                main:{label:"Hours per Subject",value:perSubject.toFixed(1)+" hrs"},
                secondary:[
                    {label:"Total Study Hours",value:totalHours.toFixed(0)+" hrs"},
                    {label:"Study Hours (new content)",value:effectiveHours.toFixed(0)+" hrs"},
                    {label:"Revision Hours",value:revisionHours.toFixed(0)+" hrs"},
                    {label:"Hours per Day",value:v.hoursPerDay+" hrs"},
                    {label:"Days Remaining",value:v.daysLeft+" days"},
                    {label:"Tip",value:v.hoursPerDay>8?"⚠️ Consider reducing to avoid burnout":"✅ Manageable schedule"}
                ]
            };
        }
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
        calc(v){
            const r=v.loanRate_s/12/100,n=v.tenure_s;
            function emiCalc(P){return P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);}
            const loanWithout = v.totalFee;
            const loanWith = Math.max(0, v.totalFee - v.scholarAmt);
            const emiWithout=emiCalc(loanWithout), emiWith=emiCalc(loanWith);
            const totalWithout=emiWithout*n, totalWith=emiWith*n;
            const interestSaved=totalWithout-totalWith-(v.scholarAmt); // net saving beyond face value
            return {
                main:{label:"Monthly EMI Saved",value:"₹"+Math.round(emiWithout-emiWith).toLocaleString()},
                secondary:[
                    {label:"EMI Without Scholarship",value:"₹"+Math.round(emiWithout).toLocaleString()},
                    {label:"EMI With Scholarship",value:"₹"+Math.round(emiWith).toLocaleString()},
                    {label:"Total Interest Saved",value:"₹"+Math.round(totalWithout-totalWith).toLocaleString()},
                    {label:"Scholarship Value (face)",value:"₹"+v.scholarAmt.toLocaleString()},
                    {label:"True Scholarship Value",value:"₹"+Math.round(totalWithout-totalWith).toLocaleString()+" (incl. interest)"}
                ]
            };
        }
    },

    // ══════════════════════════════════════════════
    // ── CONSTRUCTION / REAL ESTATE ────────────────
    // ══════════════════════════════════════════════

    landarea: {
        name:"Plot & Land Area Converter", desc:"Convert between Indian and international area units",
        icon:"fa-map", cat:"construction", badge:"Popular",
        inputs:[
            {id:"areaVal",label:"Area Value",default:1,suffix:"unit"},
            {id:"fromUnit",label:"From Unit",type:"select",options:["Square Meter","Square Feet","Square Yard","Acre","Hectare","Bigha (UP/Bihar)","Bigha (Rajasthan)","Cent","Gunta","Marla","Kanal"]}
        ],
        calc(v){
            const toSqM={
                "Square Meter":1,"Square Feet":0.0929,"Square Yard":0.836,"Acre":4046.86,
                "Hectare":10000,"Bigha (UP/Bihar)":2529.3,"Bigha (Rajasthan)":1618.74,
                "Cent":40.47,"Gunta":101.17,"Marla":25.29,"Kanal":505.86
            };
            const sqm = v.areaVal * (toSqM[v.fromUnit]||1);
            return {
                main:{label:"Square Meters",value:sqm.toFixed(4)+" m²"},
                secondary:[
                    {label:"Square Feet",value:(sqm/0.0929).toFixed(2)+" sq ft"},
                    {label:"Square Yards",value:(sqm/0.836).toFixed(2)+" sq yd"},
                    {label:"Acre",value:(sqm/4046.86).toFixed(6)+" acres"},
                    {label:"Hectare",value:(sqm/10000).toFixed(6)+" ha"},
                    {label:"Bigha (UP/Bihar)",value:(sqm/2529.3).toFixed(4)},
                    {label:"Cent",value:(sqm/40.47).toFixed(4)},
                    {label:"Gunta",value:(sqm/101.17).toFixed(4)}
                ]
            };
        }
    },

    stampdutycalc: {
        name:"Stamp Duty & Registration Calculator", desc:"Property registration cost based on value and state",
        icon:"fa-stamp", cat:"construction",
        inputs:[
            {id:"propVal",label:"Property Value",default:5000000,prefix:"₹"},
            {id:"state",label:"State",type:"select",options:["Maharashtra","Karnataka","Delhi","Tamil Nadu","UP/Bihar","Gujarat","Rajasthan"]},
            {id:"gender",label:"Buyer Gender",type:"select",options:["Male","Female","Joint (Male+Female)"]}
        ],
        calc(v){
            const rates={
                Maharashtra:{Male:6,Female:5,Joint:5.5},
                Karnataka:{Male:5,Female:5,Joint:5},
                Delhi:{Male:6,Female:4,Joint:5},
                "Tamil Nadu":{Male:7,Female:7,Joint:7},
                "UP/Bihar":{Male:7,Female:6,Joint:6.5},
                Gujarat:{Male:4.9,Female:4.9,Joint:4.9},
                Rajasthan:{Male:6,Female:5,Joint:5.5}
            };
            const gKey = v.gender.startsWith("Joint") ? "Joint" : v.gender;
            const r = (rates[v.state]||{Male:5,Female:5,Joint:5})[gKey] || 5;
            const stamp = v.propVal * r/100;
            const reg = Math.min(v.propVal*0.01, 30000); // usually 1% capped at 30K
            const total = stamp + reg;
            return {
                main:{label:"Total Registration Cost",value:"₹"+Math.round(total).toLocaleString()},
                secondary:[
                    {label:"Stamp Duty ("+r+"%)",value:"₹"+Math.round(stamp).toLocaleString()},
                    {label:"Registration Fee (1%)",value:"₹"+Math.round(reg).toLocaleString()},
                    {label:"Property Value",value:"₹"+v.propVal.toLocaleString()},
                    {label:"State",value:v.state},
                    {label:"Total as % of Property",value:((total/v.propVal)*100).toFixed(2)+"%"}
                ]
            };
        }
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
        calc(v){
            const baseCost=v.tier.includes("2500")?2500:v.tier.includes("1800")?1800:v.tier.includes("1400")?1400:v.tier.includes("1100")?1100:800;
            const finishMult={Basic:0.85,Standard:1.0,Premium:1.25,Luxury:1.6}[v.finishLevel]||1.0;
            const costPerSqft=baseCost*finishMult;
            const base=costPerSqft*v.area_c*v.floors;
            const misc=base*0.10; // approx 10% misc
            const total=base+misc;
            return {
                main:{label:"Estimated Construction Cost",value:"₹"+Math.round(total).toLocaleString()},
                secondary:[
                    {label:"Cost per Sq Ft",value:"₹"+Math.round(costPerSqft).toLocaleString()},
                    {label:"Base Construction",value:"₹"+Math.round(base).toLocaleString()},
                    {label:"Miscellaneous (10%)",value:"₹"+Math.round(misc).toLocaleString()},
                    {label:"Total Area",value:(v.area_c*v.floors).toLocaleString()+" sq ft"},
                    {label:"Per Floor Cost",value:"₹"+Math.round(base/v.floors).toLocaleString()}
                ]
            };
        }
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
        calc(v){
            const dailyGen = v.systemKw * 4.5; // avg 4.5 sun hours in India
            const monthlyGen = dailyGen * 30;
            const monthlySaving = Math.min(monthlyGen * v.tariff, v.monthlyBill);
            const annualSaving = monthlySaving * 12;
            const payback = v.systemCost / annualSaving;
            const lifetime25 = annualSaving * 25 - v.systemCost;
            const co2Saved = monthlyGen * 12 * 0.82 / 1000; // tonnes/year
            return {
                main:{label:"Annual Savings",value:"₹"+Math.round(annualSaving).toLocaleString()},
                secondary:[
                    {label:"Monthly Generation",value:Math.round(monthlyGen)+" units"},
                    {label:"Monthly Bill Savings",value:"₹"+Math.round(monthlySaving).toLocaleString()},
                    {label:"Payback Period",value:payback.toFixed(1)+" years"},
                    {label:"25-Year Net Savings",value:"₹"+Math.round(lifetime25).toLocaleString()},
                    {label:"CO₂ Saved per Year",value:co2Saved.toFixed(2)+" tonnes"}
                ]
            };
        }
    },

    // ── NEW: FINANCE ──────────────────────────────────────────────────────────

    rd: {
        name:"RD Calculator", desc:"Recurring Deposit maturity value and interest earned",
        icon:"fa-piggy-bank", cat:"finance", badge:"Popular",
        inputs:[
            {id:"monthly_rd",label:"Monthly Deposit",default:5000,prefix:"₹"},
            {id:"rate_rd",label:"Interest Rate",default:6.5,suffix:"% p.a."},
            {id:"tenure_rd",label:"Tenure",default:24,suffix:"months"}
        ],
        calc(v){
            const r=v.rate_rd/4/100, n=v.tenure_rd/3;
            const M = v.monthly_rd*((Math.pow(1+r,n)-1)/r)*(1+r);
            const invested = v.monthly_rd*v.tenure_rd;
            const interest = M - invested;
            return {
                main:{label:"Maturity Amount",value:"₹"+Math.round(M).toLocaleString('en-IN')},
                secondary:[
                    {label:"Total Deposited",value:"₹"+invested.toLocaleString('en-IN')},
                    {label:"Interest Earned",value:"₹"+Math.round(interest).toLocaleString('en-IN'),pos:true},
                    {label:"Effective Return",value:((interest/invested)*100).toFixed(2)+"%",pos:true}
                ],
                chart:{a:Math.round(invested),b:Math.round(interest),lA:"Deposited",lB:"Interest"}
            };
        },
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
        calc(v){
            const years = v.months_x/12;
            const xirr = (Math.pow(v.currentVal/v.invested, 1/years)-1)*100;
            const absgain = v.currentVal - v.invested;
            const doubleYrs = (72/xirr).toFixed(1);
            return {
                main:{label:"XIRR (Annualised Return)",value:xirr.toFixed(2)+"%"},
                secondary:[
                    {label:"Absolute Gain",value:"₹"+Math.round(absgain).toLocaleString('en-IN'),pos:absgain>0,neg:absgain<0},
                    {label:"Total Return",value:((absgain/v.invested)*100).toFixed(2)+"%",pos:absgain>0},
                    {label:"Rule of 72 — Doubles in",value:xirr>0?doubleYrs+" years":"N/A"},
                    {label:"Duration",value:v.months_x+" months ("+years.toFixed(1)+" years)"}
                ]
            };
        },
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
        calc(v){
            const maxEMI = (v.income_le - v.existing_emi) * 0.5;
            const r = v.rate_le/12/100, n = v.tenure_le;
            const maxLoan = maxEMI * (Math.pow(1+r,n)-1) / (r*Math.pow(1+r,n));
            const foir = ((v.existing_emi+maxEMI)/v.income_le*100).toFixed(1);
            return {
                main:{label:"Maximum Loan Eligibility",value:"₹"+Math.round(maxLoan).toLocaleString('en-IN')},
                secondary:[
                    {label:"Max Affordable EMI",value:"₹"+Math.round(maxEMI).toLocaleString('en-IN')},
                    {label:"FOIR (Fixed Obligation Ratio)",value:foir+"%"},
                    {label:"Banks prefer FOIR below",value:"50%"},
                    {label:"Tenure",value:v.tenure_le+" months"}
                ]
            };
        },
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
        calc(v){
            const P = v.outstanding_bt, n = v.remaining_bt;
            function totalInt(rate){ const r=rate/12/100; const emi=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1); return emi*n-P; }
            const intOld = totalInt(v.currentRate);
            const intNew = totalInt(v.newRate);
            const saved = intOld - intNew - v.processingFee;
            const breakEven = saved > 0 ? Math.ceil(v.processingFee / ((intOld-intNew)/n)) : 0;
            return {
                main:{label:"Net Interest Saved",value:"₹"+Math.round(saved).toLocaleString('en-IN'),pos:saved>0},
                secondary:[
                    {label:"Interest at Current Rate",value:"₹"+Math.round(intOld).toLocaleString('en-IN')},
                    {label:"Interest at New Rate",value:"₹"+Math.round(intNew).toLocaleString('en-IN')},
                    {label:"Processing Fee",value:"₹"+v.processingFee.toLocaleString('en-IN')},
                    {label:"Break-Even in",value:saved>0?breakEven+" months":"Not beneficial"},
                    {label:"Verdict",value:saved>0?"✅ Transfer beneficial":"❌ Not worth transferring"}
                ]
            };
        }
    },

    ssy: {
        name:"Sukanya Samriddhi Yojana (SSY)", desc:"SSY maturity amount for girl child savings scheme",
        icon:"fa-child", cat:"finance",
        inputs:[
            {id:"annual_ssy",label:"Annual Deposit",default:50000,prefix:"₹"},
            {id:"girlAge",label:"Girl Child's Current Age",default:5,suffix:"years"},
            {id:"rate_ssy",label:"Interest Rate",default:8.2,suffix:"% p.a."}
        ],
        calc(v){
            const depositYears = 15, maturityAge = 21;
            const totalYears = maturityAge - v.girlAge;
            const r = v.rate_ssy/100;
            let balance = 0;
            for(let y=1; y<=depositYears; y++) balance = (balance + v.annual_ssy) * (1+r);
            for(let y=depositYears+1; y<=totalYears; y++) balance = balance * (1+r);
            const invested = v.annual_ssy * depositYears;
            return {
                main:{label:"Maturity Amount (at age 21)",value:"₹"+Math.round(balance).toLocaleString('en-IN')},
                secondary:[
                    {label:"Total Invested (15 years)",value:"₹"+invested.toLocaleString('en-IN')},
                    {label:"Interest Earned",value:"₹"+Math.round(balance-invested).toLocaleString('en-IN'),pos:true},
                    {label:"Years to Maturity",value:totalYears+" years"},
                    {label:"Tax Benefit",value:"80C deduction + tax-free maturity (EEE)"}
                ]
            };
        },
        tips:["Maximum annual deposit: ₹1.5 lakh","Account matures when girl turns 21 or on marriage after 18"]
    },

    scss: {
        name:"SCSS Calculator", desc:"Senior Citizens Savings Scheme quarterly interest and maturity",
        icon:"fa-user-tie", cat:"finance",
        inputs:[
            {id:"principal_scss",label:"Deposit Amount (max ₹30L)",default:1000000,prefix:"₹"},
            {id:"rate_scss",label:"Interest Rate",default:8.2,suffix:"% p.a."}
        ],
        calc(v){
            const P = Math.min(v.principal_scss, 3000000);
            const quarterly = P * v.rate_scss/4/100;
            const annual = P * v.rate_scss/100;
            const maturity5yr = P; // principal returned at maturity
            const totalInterest = annual * 5;
            return {
                main:{label:"Quarterly Interest",value:"₹"+Math.round(quarterly).toLocaleString('en-IN')},
                secondary:[
                    {label:"Annual Interest",value:"₹"+Math.round(annual).toLocaleString('en-IN')},
                    {label:"Total Interest (5 years)",value:"₹"+Math.round(totalInterest).toLocaleString('en-IN'),pos:true},
                    {label:"Principal at Maturity",value:"₹"+P.toLocaleString('en-IN')},
                    {label:"Effective Yield",value:v.rate_scss+"% p.a."},
                    {label:"TDS applicable above",value:"₹50,000 interest/year"}
                ]
            };
        },
        tips:["Eligible for those aged 60+ (55+ for VRS retirees)","Deposits qualify for 80C deduction up to ₹1.5L"]
    },

    // ── NEW: HEALTH ───────────────────────────────────────────────────────────

    bsa: {
        name:"Body Surface Area Calculator", desc:"BSA using Mosteller & DuBois formulas (used in drug dosing)",
        icon:"fa-person-dots-from-line", cat:"health",
        inputs:[
            {id:"weight_bsa",label:"Weight",default:70,suffix:"kg"},
            {id:"height_bsa",label:"Height",default:170,suffix:"cm"}
        ],
        calc(v){
            const mosteller = Math.sqrt(v.weight_bsa * v.height_bsa / 3600);
            const dubois = 0.007184 * Math.pow(v.weight_bsa, 0.425) * Math.pow(v.height_bsa, 0.725);
            const haycock = 0.024265 * Math.pow(v.weight_bsa, 0.5378) * Math.pow(v.height_bsa, 0.3964);
            return {
                main:{label:"BSA (Mosteller)",value:mosteller.toFixed(3)+" m²"},
                secondary:[
                    {label:"BSA (DuBois & DuBois)",value:dubois.toFixed(3)+" m²"},
                    {label:"BSA (Haycock)",value:haycock.toFixed(3)+" m²"},
                    {label:"Average BSA",value:((mosteller+dubois+haycock)/3).toFixed(3)+" m²"},
                    {label:"Normal adult range",value:"1.6–2.0 m²"}
                ]
            };
        },
        tips:["BSA is used to calculate chemotherapy dosing","Average adult BSA is 1.73 m²"]
    },

    // ── NEW: MATH ─────────────────────────────────────────────────────────────

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
        calc(v){
            const {a1,b1,a2,b2} = v;
            let ra, rb;
            if(v.op_c.startsWith("Add"))      { ra=a1+a2; rb=b1+b2; }
            else if(v.op_c.startsWith("Sub")) { ra=a1-a2; rb=b1-b2; }
            else if(v.op_c.startsWith("Mul")) { ra=a1*a2-b1*b2; rb=a1*b2+b1*a2; }
            else { const d=a2*a2+b2*b2; if(!d) return {main:{label:"Error",value:"Division by zero"}}; ra=(a1*a2+b1*b2)/d; rb=(b1*a2-a1*b2)/d; }
            const mag1 = Math.sqrt(a1*a1+b1*b1), mag2 = Math.sqrt(a2*a2+b2*b2);
            const magR = Math.sqrt(ra*ra+rb*rb);
            const fmt = (a,b) => a.toFixed(4)+(b>=0?"+":"")+b.toFixed(4)+"i";
            return {
                main:{label:"Result",value:fmt(ra,rb)},
                secondary:[
                    {label:"Real Part",value:ra.toFixed(6)},
                    {label:"Imaginary Part",value:rb.toFixed(6)+"i"},
                    {label:"Magnitude |z|",value:magR.toFixed(6)},
                    {label:"Argument (θ)",value:(Math.atan2(rb,ra)*180/Math.PI).toFixed(4)+"°"},
                    {label:"|z₁|",value:mag1.toFixed(4)},
                    {label:"|z₂|",value:mag2.toFixed(4)}
                ]
            };
        }
    },

    // ── NEW: ENGINEERING ──────────────────────────────────────────────────────

    ledresistor: {
        name:"LED Resistor Calculator", desc:"Calculate resistor value to safely drive an LED",
        icon:"fa-lightbulb", cat:"engineering",
        inputs:[
            {id:"vsupply",label:"Supply Voltage",default:5,suffix:"V"},
            {id:"vled",label:"LED Forward Voltage",default:2.0,suffix:"V"},
            {id:"iled",label:"LED Forward Current",default:20,suffix:"mA"}
        ],
        calc(v){
            const vr = v.vsupply - v.vled;
            const r = vr / (v.iled/1000);
            const power = vr * (v.iled/1000);
            const e12 = [10,12,15,18,22,27,33,39,47,56,68,82];
            let e12r = e12[0];
            for(const val of e12) { if(val*10 >= r || val*100 >= r) { e12r = val*(r>82?100:10); break; } }
            return {
                main:{label:"Required Resistor",value:r.toFixed(1)+" Ω"},
                secondary:[
                    {label:"Nearest E12 Value",value:e12r+" Ω"},
                    {label:"Voltage Drop across R",value:vr.toFixed(2)+" V"},
                    {label:"Power Dissipated",value:(power*1000).toFixed(1)+" mW"},
                    {label:"Use resistor rated",value:power>0.125?"0.5W minimum":"0.25W or higher"}
                ]
            };
        },
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
        calc(v){
            const vout = v.vin_vd * v.r2_vd / (v.r1_vd + v.r2_vd);
            const current = v.vin_vd / (v.r1_vd + v.r2_vd) * 1000;
            const ratio = v.r2_vd/(v.r1_vd+v.r2_vd);
            return {
                main:{label:"Output Voltage (Vout)",value:vout.toFixed(4)+" V"},
                secondary:[
                    {label:"Division Ratio",value:(ratio*100).toFixed(2)+"%"},
                    {label:"Current through divider",value:current.toFixed(3)+" mA"},
                    {label:"Power dissipated (R1)",value:(v.vin_vd*v.vin_vd/v.r1_vd*1000).toFixed(2)+" mW"},
                    {label:"Power dissipated (R2)",value:(vout*vout/v.r2_vd*1000).toFixed(2)+" mW"}
                ]
            };
        }
    },

    batterylife: {
        name:"Battery Life Calculator", desc:"Estimate how long a battery will last for a device",
        icon:"fa-battery-half", cat:"engineering",
        inputs:[
            {id:"capacity_mah",label:"Battery Capacity",default:3000,suffix:"mAh"},
            {id:"current_draw",label:"Device Current Draw",default:150,suffix:"mA"},
            {id:"efficiency",label:"Circuit Efficiency",default:85,suffix:"%"}
        ],
        calc(v){
            const hours = (v.capacity_mah * v.efficiency/100) / v.current_draw;
            const days  = hours/24;
            const energyJ = v.capacity_mah * 3.7 * 3.6; // assuming 3.7V LiPo
            return {
                main:{label:"Estimated Battery Life",value:hours.toFixed(1)+" hours"},
                secondary:[
                    {label:"In days",value:days.toFixed(2)+" days"},
                    {label:"Usable Capacity",value:Math.round(v.capacity_mah*v.efficiency/100)+" mAh"},
                    {label:"Energy Content (3.7V LiPo)",value:(energyJ/1000).toFixed(2)+" kJ / "+(v.capacity_mah*3.7/1000).toFixed(2)+" Wh"},
                    {label:"At 50% efficiency",value:(v.capacity_mah*0.5/v.current_draw).toFixed(1)+" hours"}
                ]
            };
        }
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
        calc(v){
            const I = v.current_pcb, dT = v.temp_rise;
            const isExt = v.layer.startsWith("External");
            // IPC-2221 formula
            const k = isExt ? 0.048 : 0.024;
            const b = isExt ? 0.44 : 0.44;
            const c = isExt ? 0.725 : 0.725;
            const area = Math.pow(I/(k*Math.pow(dT,b)), 1/c); // mils²
            const thickness_mils = v.thickness_pcb * 1.378; // oz to mils
            const width_mils = area / thickness_mils;
            const width_mm = width_mils * 0.0254;
            return {
                main:{label:"Minimum Trace Width",value:width_mm.toFixed(3)+" mm"},
                secondary:[
                    {label:"Width in mils",value:width_mils.toFixed(1)+" mils"},
                    {label:"Cross-section area",value:area.toFixed(1)+" mils²"},
                    {label:"Layer type",value:v.layer},
                    {label:"Add 50% safety margin",value:(width_mm*1.5).toFixed(3)+" mm"}
                ]
            };
        },
        tips:["Always add a safety margin of 50%","Use thicker copper (2oz) for high-current traces"]
    },

    decibel: {
        name:"Decibel (dB) Calculator", desc:"Convert between dB and power/voltage ratios",
        icon:"fa-volume-high", cat:"engineering",
        inputs:[
            {id:"db_val",label:"Decibel Value",default:20,suffix:"dB"},
            {id:"reference",label:"Reference Type",type:"select",options:["Power ratio (dBW/dBm)","Voltage ratio (dBV)"]}
        ],
        calc(v){
            const isPower = v.reference.startsWith("Power");
            const ratio = isPower ? Math.pow(10, v.db_val/10) : Math.pow(10, v.db_val/20);
            const reverse_p = 10*Math.log10(ratio);
            const reverse_v = 20*Math.log10(ratio);
            const spl_context = v.db_val + " dB SPL";
            const perception = v.db_val<20?"Very quiet (whisper)":v.db_val<50?"Quiet (library)":v.db_val<70?"Moderate (conversation)":v.db_val<90?"Loud (traffic)":v.db_val<110?"Very loud (concert)":"Dangerous level";
            return {
                main:{label:isPower?"Power Ratio":"Voltage Ratio",value:ratio.toFixed(4)+"×"},
                secondary:[
                    {label:"dB (power formula)",value:reverse_p.toFixed(4)+" dB"},
                    {label:"dB (voltage formula)",value:reverse_v.toFixed(4)+" dB"},
                    {label:"Inverse ratio (1/x)",value:(1/ratio).toFixed(6)},
                    {label:"SPL perception",value:perception}
                ]
            };
        },
        tips:["+3dB ≈ double the power","+6dB ≈ double the voltage/sound pressure","0 dBm = 1 milliwatt reference"]
    },

    antennalen: {
        name:"Antenna Length Calculator", desc:"Dipole, quarter-wave and Yagi antenna lengths",
        icon:"fa-tower-broadcast", cat:"engineering",
        inputs:[
            {id:"freq_mhz",label:"Frequency",default:433,suffix:"MHz"},
            {id:"vel_factor",label:"Velocity Factor",default:0.95,suffix:"(0.66–1.0)"}
        ],
        calc(v){
            const c = 299792458;
            const lambda = (c / (v.freq_mhz * 1e6)) * v.vel_factor;
            const half  = lambda/2*100;
            const quarter = lambda/4*100;
            const fiveEighths = lambda*5/8*100;
            return {
                main:{label:"Half-wave Dipole",value:half.toFixed(1)+" cm"},
                secondary:[
                    {label:"Quarter-wave Monopole",value:quarter.toFixed(1)+" cm"},
                    {label:"5/8 Wave (gain antenna)",value:fiveEighths.toFixed(1)+" cm"},
                    {label:"Full wavelength (λ)",value:(lambda*100).toFixed(1)+" cm"},
                    {label:"Frequency",value:v.freq_mhz+" MHz"},
                    {label:"Common use",value:v.freq_mhz<30?"HF/Shortwave":v.freq_mhz<300?"VHF (FM/TV)":v.freq_mhz<3000?"UHF (WiFi/Cellular)":"Microwave"}
                ]
            };
        }
    },

    torque: {
        name:"Torque Calculator", desc:"Torque, force, arm length and angular conversions",
        icon:"fa-rotate", cat:"engineering",
        inputs:[
            {id:"force_t",label:"Force",default:100,suffix:"N"},
            {id:"arm_t",label:"Moment Arm Length",default:0.5,suffix:"m"},
            {id:"angle_t",label:"Angle between F and arm",default:90,suffix:"°"}
        ],
        calc(v){
            const tau = v.force_t * v.arm_t * Math.sin(v.angle_t*Math.PI/180);
            return {
                main:{label:"Torque (τ)",value:tau.toFixed(4)+" N·m"},
                secondary:[
                    {label:"In kgf·cm",value:(tau*10.197).toFixed(2)+" kgf·cm"},
                    {label:"In lbf·ft",value:(tau*0.7376).toFixed(4)+" lbf·ft"},
                    {label:"In lbf·in",value:(tau*8.8507).toFixed(3)+" lbf·in"},
                    {label:"Power at 100 RPM",value:(tau*100*2*Math.PI/60).toFixed(2)+" W"},
                    {label:"Formula",value:"τ = F × r × sin(θ)"}
                ]
            };
        }
    },

    // ── NEW: EVERYDAY ─────────────────────────────────────────────────────────

    mileage: {
        name:"Mileage & Fuel Efficiency", desc:"km/L, L/100km, MPG — convert and compare fuel economy",
        icon:"fa-gauge-high", cat:"everyday",
        inputs:[
            {id:"distance_mi",label:"Distance Traveled",default:500,suffix:"km"},
            {id:"fuel_used",label:"Fuel Used",default:40,suffix:"litres"}
        ],
        calc(v){
            const kmpl = v.distance_mi / v.fuel_used;
            const l100km = 100 / kmpl;
            const mpg_uk = kmpl * 2.8248;
            const mpg_us = kmpl * 2.3521;
            return {
                main:{label:"Mileage",value:kmpl.toFixed(2)+" km/L"},
                secondary:[
                    {label:"Litres per 100 km",value:l100km.toFixed(2)+" L/100km"},
                    {label:"MPG (UK Imperial)",value:mpg_uk.toFixed(2)+" mpg"},
                    {label:"MPG (US)",value:mpg_us.toFixed(2)+" mpg"},
                    {label:"Cost per km (at ₹103/L)",value:"₹"+(103/kmpl).toFixed(2)},
                    {label:"Rating",value:kmpl>20?"🟢 Excellent":kmpl>15?"🟡 Good":kmpl>10?"🟠 Average":"🔴 Poor"}
                ]
            };
        }
    },

    cooking: {
        name:"Cooking Measurement Converter", desc:"Convert cups, tbsp, tsp, ml, grams for common ingredients",
        icon:"fa-kitchen-set", cat:"everyday",
        inputs:[
            {id:"cook_val",label:"Amount",default:1},
            {id:"cook_from",label:"From Unit",type:"select",options:["Cup","Tablespoon (tbsp)","Teaspoon (tsp)","Milliliter (ml)","Fluid Ounce (fl oz)","Liter","Pint"]},
            {id:"cook_ingr",label:"Ingredient (for grams)",type:"select",options:["Water","All-Purpose Flour","Sugar (white)","Butter","Rice","Salt","Honey","Milk"]}
        ],
        calc(v){
            const toMl = {"Cup":240,"Tablespoon (tbsp)":14.787,"Teaspoon (tsp)":4.929,"Milliliter (ml)":1,"Fluid Ounce (fl oz)":29.574,"Liter":1000,"Pint":473.176};
            const densities = {"Water":1.0,"All-Purpose Flour":0.53,"Sugar (white)":0.845,"Butter":0.911,"Rice":0.75,"Salt":1.217,"Honey":1.42,"Milk":1.03};
            const ml = v.cook_val * (toMl[v.cook_from]||1);
            const grams = ml * (densities[v.cook_ingr]||1);
            return {
                main:{label:"Milliliters",value:ml.toFixed(1)+" ml"},
                secondary:[
                    {label:"Grams ("+v.cook_ingr+")",value:grams.toFixed(1)+" g"},
                    {label:"Cups",value:(ml/240).toFixed(3)+" cups"},
                    {label:"Tablespoons",value:(ml/14.787).toFixed(2)+" tbsp"},
                    {label:"Teaspoons",value:(ml/4.929).toFixed(1)+" tsp"},
                    {label:"Fluid Ounces",value:(ml/29.574).toFixed(2)+" fl oz"}
                ]
            };
        }
    },

    shoesize: {
        name:"Shoe Size Converter", desc:"Convert shoe sizes between US, UK, EU, India and CM",
        icon:"fa-shoe-prints", cat:"everyday",
        inputs:[
            {id:"shoe_val",label:"Size Value",default:9},
            {id:"shoe_from",label:"From System",type:"select",options:["US Men","US Women","UK","EU","India (IN)","CM (foot length)"]}
        ],
        calc(v){
            // Convert everything to US Men as base
            let usMen = v.shoe_val;
            if(v.shoe_from==="US Women")      usMen = v.shoe_val - 1.5;
            else if(v.shoe_from==="UK")        usMen = v.shoe_val + 0.5;
            else if(v.shoe_from==="EU")        usMen = (v.shoe_val - 33) / 1.5;
            else if(v.shoe_from==="India (IN)")usMen = v.shoe_val - 0.5;
            else if(v.shoe_from==="CM (foot length)") usMen = (v.shoe_val - 22.5) / 0.838;
            return {
                main:{label:"US Men's",value:usMen.toFixed(1)},
                secondary:[
                    {label:"US Women's",value:(usMen+1.5).toFixed(1)},
                    {label:"UK",value:(usMen-0.5).toFixed(1)},
                    {label:"EU",value:(usMen*1.5+33).toFixed(0)},
                    {label:"India (IN)",value:(usMen+0.5).toFixed(1)},
                    {label:"Foot Length (cm)",value:(usMen*0.838+22.5).toFixed(1)+" cm"},
                    {label:"Foot Length (inches)",value:((usMen*0.838+22.5)/2.54).toFixed(1)+'"'}
                ]
            };
        }
    },

    stopwatch: {
        name:"Stopwatch & Timer", desc:"Online stopwatch with lap times and countdown",
        icon:"fa-stopwatch", cat:"everyday",
        inputs:[
            {id:"countdown_min",label:"Countdown (minutes, 0 = stopwatch)",default:0,suffix:"min"},
            {id:"lap_interval",label:"Lap interval",default:0,suffix:"seconds (0=manual)"}
        ],
        calc(v){
            const totalSecs = v.countdown_min * 60;
            const hrs = Math.floor(totalSecs/3600), mins = Math.floor((totalSecs%3600)/60), secs = totalSecs%60;
            return {
                main:{label:v.countdown_min>0?"Countdown Duration":"Stopwatch Mode",value:v.countdown_min>0?(hrs?""+hrs+"h "+mins+"m "+secs+"s":mins+"m "+secs+"s"):"Use the live stopwatch widget"},
                secondary:[
                    {label:"Total seconds",value:totalSecs+" s"},
                    {label:"Tip",value:"Open AI chat and type 'start stopwatch' for a live timer"},
                    {label:"Lap interval",value:v.lap_interval>0?v.lap_interval+"s intervals":"Manual laps"}
                ]
            };
        }
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
        calc(v){
            const count = Math.min(20, Math.max(1, Math.floor(v.rng_count)));
            let results = [];
            if(v.rng_type==="Coin Flip"){
                for(let i=0;i<count;i++) results.push(Math.random()<0.5?"Heads":"Tails");
            } else if(v.rng_type==="Dice (d6)"){
                for(let i=0;i<count;i++) results.push(Math.floor(Math.random()*6)+1);
            } else if(v.rng_type==="Shuffle 1–N"){
                const arr=[]; for(let i=1;i<=Math.min(count,20);i++) arr.push(i);
                for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; }
                results = arr;
            } else if(v.rng_type==="Decimals (2dp)"){
                for(let i=0;i<count;i++) results.push((v.rng_min+Math.random()*(v.rng_max-v.rng_min)).toFixed(2));
            } else {
                for(let i=0;i<count;i++) results.push(Math.floor(v.rng_min+Math.random()*(v.rng_max-v.rng_min+1)));
            }
            return {
                main:{label:"Random Numbers",value:results.join(", ")},
                secondary:[
                    {label:"Count",value:count},
                    {label:"Range",value:v.rng_min+" – "+v.rng_max},
                    {label:"Type",value:v.rng_type},
                    {label:"Min result",value:results.reduce((a,b)=>+a<+b?a:b,results[0])},
                    {label:"Max result",value:results.reduce((a,b)=>+a>+b?a:b,results[0])}
                ]
            };
        }
    },

    // ── NEW: SCIENCE ──────────────────────────────────────────────────────────

    acceleration: {
        name:"Acceleration Calculator", desc:"Linear acceleration, deceleration and stopping distance",
        icon:"fa-gauge-simple-high", cat:"science",
        inputs:[
            {id:"v1_acc",label:"Initial Velocity (u)",default:0,suffix:"m/s"},
            {id:"v2_acc",label:"Final Velocity (v)",default:30,suffix:"m/s"},
            {id:"time_acc",label:"Time taken (t)",default:10,suffix:"s"}
        ],
        calc(v){
            const a = (v.v2_acc - v.v1_acc) / v.time_acc;
            const s = v.v1_acc*v.time_acc + 0.5*a*v.time_acc*v.time_acc;
            const kph_u = v.v1_acc*3.6, kph_v = v.v2_acc*3.6;
            const gForce = a / 9.81;
            return {
                main:{label:"Acceleration (a)",value:a.toFixed(4)+" m/s²"},
                secondary:[
                    {label:"Distance covered",value:s.toFixed(2)+" m"},
                    {label:"G-force",value:Math.abs(gForce).toFixed(3)+" g "+(a<0?"(deceleration)":"")},
                    {label:"Initial speed",value:kph_u.toFixed(1)+" km/h"},
                    {label:"Final speed",value:kph_v.toFixed(1)+" km/h"},
                    {label:"Formula",value:"a = (v − u) / t"}
                ]
            };
        }
    },

    // ── NEW: ADVANCE TAX CALCULATOR ──────────────────────────────────────────
    advancetax: {
        name:"Advance Tax Calculator", desc:"Quarterly advance tax installment schedule for FY 2025-26",
        icon:"fa-calendar-check", cat:"finance",
        inputs:[
            {id:"income",label:"Total Annual Income",default:1500000,prefix:"₹"},
            {id:"tds",label:"TDS Already Deducted",default:80000,prefix:"₹"},
            {id:"regime",label:"Tax Regime",type:"select",options:["New Regime","Old Regime"]},
            {id:"sec80c",label:"80C Deductions (Old only)",default:150000,prefix:"₹"}
        ],
        calc(v){
            let taxable = v.income;
            let tax = 0;
            if(v.regime==="New Regime"){
                taxable = Math.max(0, v.income - 75000);
                const slabs=[[400000,0],[400000,0.05],[400000,0.10],[400000,0.15],[400000,0.20],[400000,0.25],[Infinity,0.30]];
                let rem=taxable;
                for(const [lim,rate] of slabs){ if(rem<=0)break; const ch=Math.min(rem,lim); tax+=ch*rate; rem-=ch; }
                if(taxable<=1200000) tax=0;
            } else {
                taxable = Math.max(0, v.income - 50000 - 250000 - Math.min(v.sec80c,150000));
                const slabs=[[250000,0.05],[500000,0.20],[Infinity,0.30]];
                let rem=taxable;
                for(const [lim,rate] of slabs){ if(rem<=0)break; const ch=Math.min(rem,lim); tax+=ch*rate; rem-=ch; }
            }
            const cess = tax * 0.04;
            const totalTax = Math.round(tax + cess);
            const net = Math.max(0, totalTax - v.tds);
            const q1 = Math.round(net * 0.15);
            const q2 = Math.round(net * 0.45) - q1;
            const q3 = Math.round(net * 0.75) - q1 - q2;
            const q4 = net - q1 - q2 - q3;
            return {
                main:{label:"Net Advance Tax Payable",value:"₹"+net.toLocaleString()},
                secondary:[
                    {label:"Total Tax (incl. cess)",value:"₹"+totalTax.toLocaleString()},
                    {label:"Less: TDS",value:"₹"+v.tds.toLocaleString()},
                    {label:"Q1 (Jun 15) — 15%",value:"₹"+q1.toLocaleString()},
                    {label:"Q2 (Sep 15) — 45%",value:"₹"+(q1+q2).toLocaleString()+" (pay ₹"+q2.toLocaleString()+")"},
                    {label:"Q3 (Dec 15) — 75%",value:"₹"+(q1+q2+q3).toLocaleString()+" (pay ₹"+q3.toLocaleString()+")"},
                    {label:"Q4 (Mar 15) — 100%",value:"₹"+net.toLocaleString()+" (pay ₹"+q4.toLocaleString()+")"}
                ],
                chart:{labels:["Q1 (Jun)","Q2 (Sep)","Q3 (Dec)","Q4 (Mar)"],data:[q1,q2,q3,q4]}
            };
        },
        tips:["Advance tax applies if total tax liability exceeds ₹10,000","Salaried employees with only salary income usually don't need advance tax — TDS covers it","Interest u/s 234C applies for late/short payment"]
    },

    // ── NEW: IN-HAND SALARY CALCULATOR ───────────────────────────────────────
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
        calc(v){
            const basic = v.ctc * v.basic_pct / 100;
            const hra = basic * v.hra_pct / 100;
            const pf_emp = basic * v.pf_pct / 100;
            const pf_er = basic * Math.min(v.pf_pct, 12) / 100;
            const special = v.ctc - basic - hra - pf_er;
            const totalDed = pf_emp + v.ptax + v.other_ded;
            const inhand = v.ctc - totalDed - pf_er;
            return {
                main:{label:"Monthly In-Hand Salary",value:"₹"+Math.round(inhand).toLocaleString()},
                secondary:[
                    {label:"Basic Salary",value:"₹"+Math.round(basic).toLocaleString()},
                    {label:"HRA",value:"₹"+Math.round(hra).toLocaleString()},
                    {label:"PF (Employee)",value:"₹"+Math.round(pf_emp).toLocaleString()},
                    {label:"PF (Employer)",value:"₹"+Math.round(pf_er).toLocaleString()},
                    {label:"Professional Tax",value:"₹"+v.ptax.toLocaleString()},
                    {label:"Special Allowance",value:"₹"+Math.round(Math.max(0,special)).toLocaleString()},
                    {label:"Annual In-Hand",value:"₹"+Math.round(inhand*12).toLocaleString(),pos:true}
                ],
                chart:{labels:["In-Hand","PF (Emp)","PF (Er)","PT","Other Ded"],data:[Math.round(inhand),Math.round(pf_emp),Math.round(pf_er),v.ptax,v.other_ded]}
            };
        },
        tips:["Basic salary is typically 40-50% of CTC","Higher basic = more PF savings but lower take-home","Professional tax varies by state (₹150-₹300/month)"]
    },

    // ── NEW: CTC TO IN-HAND BREAKDOWN ────────────────────────────────────────
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
        calc(v){
            const ctc = v.annual_ctc;
            const basic = ctc * v.basic_pct / 100;
            const hra = basic * v.hra_pct / 100;
            const bonus = ctc * v.bonus_pct / 100;
            const gratAmt = v.gratuity_inc==="Yes" ? Math.round(basic * 15 / 26 / 12) * 12 : 0;
            const pfEr = Math.min(basic, 15000*12) * 0.12;
            const pfEmp = pfEr;
            const ins = v.insurance;
            const grossMonthly = (ctc - bonus - gratAmt - pfEr - ins) / 12;
            const monthlyPF = pfEmp / 12;
            const ptax = 200;
            const inhand = grossMonthly - monthlyPF - ptax;
            return {
                main:{label:"Monthly In-Hand (est.)",value:"₹"+Math.round(inhand).toLocaleString()},
                secondary:[
                    {label:"Annual CTC",value:"₹"+Math.round(ctc).toLocaleString()},
                    {label:"Monthly Basic",value:"₹"+Math.round(basic/12).toLocaleString()},
                    {label:"Monthly HRA",value:"₹"+Math.round(hra/12).toLocaleString()},
                    {label:"Annual Bonus/Variable",value:"₹"+Math.round(bonus).toLocaleString()},
                    {label:"Employer PF (annual)",value:"₹"+Math.round(pfEr).toLocaleString()},
                    {label:"Gratuity (annual)",value:"₹"+Math.round(gratAmt).toLocaleString()},
                    {label:"Medical Insurance",value:"₹"+ins.toLocaleString()},
                    {label:"Annual In-Hand (approx.)",value:"₹"+Math.round(inhand*12).toLocaleString(),pos:true}
                ],
                chart:{labels:["In-Hand","PF (Emp+Er)","Bonus","Gratuity","Insurance","Tax/PT"],
                    data:[Math.round(inhand*12),Math.round(pfEr+pfEmp),Math.round(bonus),Math.round(gratAmt),ins,ptax*12]}
            };
        },
        tips:["CTC includes employer PF, gratuity, insurance — these don't come to your bank","Actual in-hand depends on income tax slab — this is a pre-tax estimate","Bonus/variable is typically paid quarterly or annually"]
    },

    // ── NEW: SALARY COMPARISON ───────────────────────────────────────────────
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
        calc(v){
            const oldFixed = v.old_ctc * (1 - v.old_bonus/100) - v.old_pf;
            const newFixed = v.new_ctc * (1 - v.new_bonus/100) - v.new_pf;
            const oldMonthly = Math.round(oldFixed / 12);
            const newMonthly = Math.round(newFixed / 12);
            const hike = ((v.new_ctc - v.old_ctc) / v.old_ctc * 100);
            const fixedHike = ((newFixed - oldFixed) / oldFixed * 100);
            return {
                main:{label:"CTC Hike",value:hike.toFixed(1)+"%"},
                secondary:[
                    {label:"Old CTC",value:"₹"+v.old_ctc.toLocaleString()},
                    {label:"New CTC",value:"₹"+v.new_ctc.toLocaleString()},
                    {label:"Old Monthly (fixed)",value:"₹"+oldMonthly.toLocaleString()},
                    {label:"New Monthly (fixed)",value:"₹"+newMonthly.toLocaleString()},
                    {label:"Fixed Pay Hike",value:fixedHike.toFixed(1)+"%",pos:fixedHike>0},
                    {label:"Monthly Increase",value:"₹"+(newMonthly-oldMonthly).toLocaleString(),pos:newMonthly>oldMonthly},
                    {label:"Relocation/Joining Bonus",value:"₹"+v.relocation.toLocaleString()}
                ],
                chart:{labels:["Old Fixed","Old Bonus","Old PF","New Fixed","New Bonus","New PF"],
                    data:[Math.round(oldFixed),Math.round(v.old_ctc*v.old_bonus/100),v.old_pf,Math.round(newFixed),Math.round(v.new_ctc*v.new_bonus/100),v.new_pf]}
            };
        },
        tips:["Don't just compare CTC — compare fixed monthly pay","Higher variable/bonus % means less guaranteed pay","Factor in commute cost, work-life balance, and growth"]
    },

    // ── NEW: GOAL-BASED SIP CALCULATOR ───────────────────────────────────────
    goalsip: {
        name:"Goal-Based SIP Calculator", desc:"Monthly SIP needed to reach your financial goal",
        icon:"fa-bullseye", cat:"finance",
        inputs:[
            {id:"goal",label:"Target Amount",default:5000000,prefix:"₹"},
            {id:"years",label:"Time Horizon",default:10,suffix:"years"},
            {id:"rate",label:"Expected Return",default:12,suffix:"% p.a."},
            {id:"existing",label:"Existing Corpus",default:0,prefix:"₹"}
        ],
        calc(v){
            const r = v.rate / 12 / 100;
            const n = v.years * 12;
            const existingFV = v.existing * Math.pow(1+r, n);
            const remaining = Math.max(0, v.goal - existingFV);
            const sip = remaining > 0 ? remaining * r / ((Math.pow(1+r,n)-1)*(1+r)) : 0;
            const totalInvested = Math.round(sip) * n + v.existing;
            const returns = v.goal - totalInvested;
            return {
                main:{label:"Monthly SIP Required",value:"₹"+Math.round(sip).toLocaleString()},
                secondary:[
                    {label:"Target Goal",value:"₹"+v.goal.toLocaleString()},
                    {label:"Existing Corpus FV",value:"₹"+Math.round(existingFV).toLocaleString()},
                    {label:"Remaining to Fund",value:"₹"+Math.round(remaining).toLocaleString()},
                    {label:"Total Investment",value:"₹"+Math.round(totalInvested).toLocaleString()},
                    {label:"Expected Returns",value:"₹"+Math.round(returns).toLocaleString(),pos:true},
                    {label:"Daily SIP Equivalent",value:"₹"+Math.round(sip/30).toLocaleString()+"/day"}
                ],
                chart:{a:Math.round(totalInvested),b:Math.round(Math.max(0,returns)),lA:"Invested",lB:"Returns",
                    timeline:(function(){
                        var labels=[],invArr=[],corpusArr=[];
                        for(var yr=1;yr<=v.years;yr++){
                            var months=yr*12;
                            var fv=Math.round(sip)*((Math.pow(1+r,months)-1)/r)*(1+r)+v.existing*Math.pow(1+r,months);
                            labels.push('Yr '+yr);
                            invArr.push(Math.round(Math.round(sip)*months+v.existing));
                            corpusArr.push(Math.round(fv));
                        }
                        return {labels:labels,datasets:[
                            {label:'Amount Invested',data:invArr,fill:false},
                            {label:'Corpus Value',data:corpusArr,fill:true}
                        ]};
                    })()
                }
            };
        },
        tips:["Start early — a 10-year SIP needs 3x less than a 5-year SIP for the same goal","Step-up SIP by 10% annually to beat inflation","Common goals: child education, home down payment, retirement"]
    },

    // ── NEW: ELSS TAX SAVER RETURNS ──────────────────────────────────────────
    elssreturns: {
        name:"ELSS Tax Saver Returns", desc:"ELSS mutual fund returns with 80C tax savings",
        icon:"fa-leaf", cat:"finance",
        inputs:[
            {id:"monthly",label:"Monthly SIP",default:12500,prefix:"₹"},
            {id:"years",label:"Investment Period",default:10,suffix:"years"},
            {id:"rate",label:"Expected ELSS Return",default:14,suffix:"% p.a."},
            {id:"taxslab",label:"Tax Slab",type:"select",options:["30% (>24L)","25% (20-24L)","20% (16-20L)","15% (12-16L)","10% (8-12L)","5% (4-8L)"]}
        ],
        calc(v){
            const r = v.rate / 12 / 100;
            const n = v.years * 12;
            const fv = v.monthly * ((Math.pow(1+r,n)-1)/r) * (1+r);
            const invested = v.monthly * n;
            const returns = fv - invested;
            const annualInvest = Math.min(v.monthly * 12, 150000);
            const slabRate = parseFloat(v.taxslab) / 100;
            const annualTaxSaved = Math.round(annualInvest * slabRate);
            const totalTaxSaved = annualTaxSaved * v.years;
            const ltcg = Math.max(0, returns - 125000);
            const ltcgTax = Math.round(ltcg * 0.125);
            return {
                main:{label:"Maturity Value",value:"₹"+Math.round(fv).toLocaleString()},
                secondary:[
                    {label:"Total Invested",value:"₹"+invested.toLocaleString()},
                    {label:"Expected Returns",value:"₹"+Math.round(returns).toLocaleString(),pos:true},
                    {label:"Annual Tax Saved (80C)",value:"₹"+annualTaxSaved.toLocaleString(),pos:true},
                    {label:"Total Tax Saved",value:"₹"+totalTaxSaved.toLocaleString(),pos:true},
                    {label:"LTCG Tax (12.5% above ₹1.25L)",value:"₹"+ltcgTax.toLocaleString()},
                    {label:"Effective Return (with tax benefit)",value:((fv+totalTaxSaved-invested)/invested*100).toFixed(1)+"%",pos:true},
                    {label:"Lock-in Period",value:"3 years (shortest in 80C)"}
                ],
                chart:{labels:["Invested","Returns","Tax Saved"],data:[invested,Math.round(returns),totalTaxSaved]}
            };
        },
        tips:["ELSS has the shortest lock-in (3 years) among 80C instruments","Max ₹1.5 lakh/year deduction under Section 80C","LTCG above ₹1.25 lakh taxed at 12.5% (FY 2025-26)"]
    },

    // ── NEW: NSC CALCULATOR ──────────────────────────────────────────────────
    nsccalculator: {
        name:"NSC Calculator", desc:"National Savings Certificate maturity & tax benefit",
        icon:"fa-stamp", cat:"finance",
        inputs:[
            {id:"amount",label:"Investment Amount",default:100000,prefix:"₹"},
            {id:"rate",label:"NSC Interest Rate",default:7.7,suffix:"% p.a."},
            {id:"tenure",label:"Tenure",default:5,suffix:"years"},
            {id:"taxslab",label:"Tax Slab",type:"select",options:["30%","20%","10%","5%","0%"]}
        ],
        calc(v){
            const maturity = v.amount * Math.pow(1 + v.rate/100, v.tenure);
            const interest = maturity - v.amount;
            const taxBenefit80C = Math.min(v.amount, 150000) * parseFloat(v.taxslab)/100;
            // NSC interest is re-invested and qualifies for 80C (years 1 to n-1)
            let reinvestedInterest = 0;
            for(let i=1;i<v.tenure;i++){
                reinvestedInterest += v.amount * Math.pow(1+v.rate/100,i) - v.amount * Math.pow(1+v.rate/100,i-1);
            }
            const reinvestTaxBenefit = Math.round(reinvestedInterest * parseFloat(v.taxslab)/100);
            return {
                main:{label:"Maturity Amount",value:"₹"+Math.round(maturity).toLocaleString()},
                secondary:[
                    {label:"Total Interest",value:"₹"+Math.round(interest).toLocaleString(),pos:true},
                    {label:"Investment",value:"₹"+v.amount.toLocaleString()},
                    {label:"Tax Saved (80C on principal)",value:"₹"+Math.round(taxBenefit80C).toLocaleString(),pos:true},
                    {label:"Tax Saved (reinvested interest)",value:"₹"+reinvestTaxBenefit.toLocaleString(),pos:true},
                    {label:"Effective Return (post-tax benefit)",value:((interest+taxBenefit80C)/v.amount*100).toFixed(1)+"%",pos:true},
                    {label:"Tenure",value:v.tenure+" years (fixed)"}
                ],
                chart:{a:v.amount,b:Math.round(interest),lA:"Principal",lB:"Interest"}
            };
        },
        tips:["NSC qualifies for Section 80C deduction","Interest is compounded annually but paid at maturity","Accrued interest (except last year) also qualifies for 80C"]
    },

    // ── NEW: APY CALCULATOR ──────────────────────────────────────────────────
    apycalculator: {
        name:"APY Calculator", desc:"Atal Pension Yojana — monthly contribution & pension estimate",
        icon:"fa-umbrella", cat:"finance",
        inputs:[
            {id:"age",label:"Current Age",default:25,suffix:"years"},
            {id:"pension",label:"Desired Monthly Pension",type:"select",options:["₹1,000","₹2,000","₹3,000","₹4,000","₹5,000"]}
        ],
        calc(v){
            const pensionAmt = parseInt(v.pension.replace(/[₹,]/g,''));
            const yearsToContribute = 60 - v.age;
            // Approximate APY contribution table
            const table = {
                1000:{18:42,20:50,25:76,30:116,35:181,40:291},
                2000:{18:84,20:100,25:151,30:231,35:362,40:582},
                3000:{18:126,20:150,25:226,30:347,35:543,40:873},
                4000:{18:168,20:198,25:301,30:462,35:722,40:1164},
                5000:{18:210,20:248,25:376,30:577,35:902,40:1454}
            };
            const ages = [18,20,25,30,35,40];
            let contribution = 0;
            const t = table[pensionAmt];
            if(t){
                // Find closest age bracket
                let closest = 18;
                for(const a of ages){ if(v.age >= a) closest = a; }
                contribution = t[closest] || t[40] || 0;
            }
            const totalContrib = contribution * 12 * yearsToContribute;
            const corpusMultiplier = {1000:1.7,2000:3.4,3000:5.1,4000:6.8,5000:8.5};
            const corpus = (corpusMultiplier[pensionAmt]||1.7) * 100000;
            return {
                main:{label:"Monthly Contribution",value:"₹"+contribution.toLocaleString()},
                secondary:[
                    {label:"Desired Pension",value:"₹"+pensionAmt.toLocaleString()+"/month"},
                    {label:"Years of Contribution",value:yearsToContribute+" years"},
                    {label:"Total Contribution",value:"₹"+totalContrib.toLocaleString()},
                    {label:"Corpus at 60",value:"₹"+corpus.toLocaleString()},
                    {label:"Pension Starts at",value:"Age 60"},
                    {label:"Spouse gets pension",value:"Yes, after subscriber"},
                    {label:"Nominee gets corpus",value:"₹"+corpus.toLocaleString()}
                ]
            };
        },
        tips:["Join between age 18-40, pension starts at 60","Government co-contributes 50% for first 5 years (if not income tax payer)","Tax deduction under Section 80CCD(1B) up to ₹50,000"]
    },

    // ── NEW: STOCK BROKERAGE & TAX CALCULATOR ────────────────────────────────
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
        calc(v){
            const buyVal = v.buy_price * v.qty;
            const sellVal = v.sell_price * v.qty;
            const turnover = buyVal + sellVal;
            let brokerage = 0;
            if(v.broker_type==="Discount (₹20 flat)") brokerage = Math.min(20, buyVal*0.0003) + Math.min(20, sellVal*0.0003);
            else if(v.broker_type==="Traditional (0.5%)") brokerage = turnover * 0.005;
            else brokerage = v.trade_type==="Delivery (CNC)" ? 0 : Math.min(20, buyVal*0.0003)+Math.min(20, sellVal*0.0003);

            let stt = 0;
            if(v.trade_type==="Delivery (CNC)") stt = buyVal * 0.001 + sellVal * 0.001;
            else if(v.trade_type==="Intraday (MIS)") stt = sellVal * 0.00025;
            else if(v.trade_type==="F&O (Futures)") stt = sellVal * 0.0002;
            else stt = sellVal * 0.001;

            const exchangeTxn = turnover * 0.0000345;
            const gst = (brokerage + exchangeTxn) * 0.18;
            const sebi = turnover * 0.000001;
            const stamp = buyVal * 0.00015;
            const totalCharges = brokerage + stt + exchangeTxn + gst + sebi + stamp;
            const profit = sellVal - buyVal;
            const netProfit = profit - totalCharges;
            return {
                main:{label:"Net Profit/Loss",value:"₹"+netProfit.toFixed(2)},
                secondary:[
                    {label:"Gross Profit",value:"₹"+profit.toFixed(2),pos:profit>0},
                    {label:"Total Charges",value:"₹"+totalCharges.toFixed(2)},
                    {label:"Brokerage",value:"₹"+brokerage.toFixed(2)},
                    {label:"STT",value:"₹"+stt.toFixed(2)},
                    {label:"Exchange Txn Charges",value:"₹"+exchangeTxn.toFixed(2)},
                    {label:"GST (18%)",value:"₹"+gst.toFixed(2)},
                    {label:"SEBI Charges",value:"₹"+sebi.toFixed(2)},
                    {label:"Stamp Duty",value:"₹"+stamp.toFixed(2)},
                    {label:"Break-Even Sell Price",value:"₹"+((buyVal+totalCharges)/v.qty).toFixed(2)}
                ],
                chart:{labels:["Brokerage","STT","Exchange","GST","SEBI","Stamp"],data:[brokerage,stt,exchangeTxn,gst,sebi,stamp]}
            };
        },
        tips:["Delivery trades have highest STT (0.1% both sides)","Discount brokers charge flat ₹20 or ₹0 for delivery","F&O options: STT only on sell side at 0.0625%"]
    },

    // ── NEW: TAX SAVING INVESTMENTS OPTIMIZER ────────────────────────────────
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
        calc(v){
            const sec80c = Math.min(150000, v.epf + v.ppf + v.elss + v.lic);
            const sec80ccd = Math.min(50000, v.nps80ccd);
            const sec80d = Math.min(75000, v.med80d);
            const sec24b = Math.min(200000, v.hloan);
            const totalDeductions = sec80c + sec80ccd + sec80d + sec24b;
            const slabRate = parseFloat(v.taxslab) / 100;
            const taxSaved = Math.round(totalDeductions * slabRate);
            const remaining80c = Math.max(0, 150000 - v.epf - v.ppf - v.elss - v.lic);
            const remaining80ccd = Math.max(0, 50000 - v.nps80ccd);
            return {
                main:{label:"Total Tax Saved",value:"₹"+taxSaved.toLocaleString()},
                secondary:[
                    {label:"80C Used / Limit",value:"₹"+sec80c.toLocaleString()+" / ₹1,50,000"},
                    {label:"80CCD(1B) — NPS",value:"₹"+sec80ccd.toLocaleString()+" / ₹50,000"},
                    {label:"80D — Medical",value:"₹"+sec80d.toLocaleString()+" / ₹75,000"},
                    {label:"24B — Home Loan Interest",value:"₹"+sec24b.toLocaleString()+" / ₹2,00,000"},
                    {label:"Total Deductions",value:"₹"+totalDeductions.toLocaleString()},
                    {label:"Remaining 80C room",value:"₹"+remaining80c.toLocaleString()},
                    {label:"Remaining NPS room",value:"₹"+remaining80ccd.toLocaleString()},
                    {label:"Effective Tax Rate Reduction",value:(totalDeductions/v.income*100).toFixed(1)+"%"}
                ],
                chart:{labels:["80C","80CCD(1B)","80D","24B"],data:[sec80c,sec80ccd,sec80d,sec24b]}
            };
        },
        tips:["Fill 80C first (EPF+PPF+ELSS), then NPS for extra ₹50K","ELSS gives best returns among 80C options (equity exposure)","Only applicable under Old Tax Regime"]
    },

    // ── NEW: RETIREMENT CORPUS CALCULATOR ────────────────────────────────────
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
        calc(v){
            const yearsToRetire = v.retire_age - v.age;
            const yearsInRetirement = v.life_exp - v.retire_age;
            const futureMonthly = v.monthly_exp * Math.pow(1 + v.inflation/100, yearsToRetire);
            const futureAnnual = futureMonthly * 12;
            // Corpus needed at retirement (present value of annuity)
            const realReturn = ((1 + v.return_post/100) / (1 + v.inflation/100)) - 1;
            let corpus;
            if(realReturn <= 0){
                corpus = futureAnnual * yearsInRetirement;
            } else {
                corpus = futureAnnual * (1 - Math.pow(1+realReturn, -yearsInRetirement)) / realReturn;
            }
            // Existing savings future value
            const existingFV = v.existing * Math.pow(1 + v.return_pre/100, yearsToRetire);
            const remaining = Math.max(0, corpus - existingFV);
            // Monthly SIP needed
            const r = v.return_pre / 12 / 100;
            const n = yearsToRetire * 12;
            const sip = remaining > 0 && r > 0 ? remaining * r / ((Math.pow(1+r,n)-1)*(1+r)) : 0;
            return {
                main:{label:"Retirement Corpus Needed",value:"₹"+Math.round(corpus).toLocaleString()},
                secondary:[
                    {label:"Monthly Expenses at Retirement",value:"₹"+Math.round(futureMonthly).toLocaleString()},
                    {label:"Years to Retirement",value:yearsToRetire+" years"},
                    {label:"Retirement Duration",value:yearsInRetirement+" years"},
                    {label:"Existing Savings FV",value:"₹"+Math.round(existingFV).toLocaleString()},
                    {label:"Gap to Fill",value:"₹"+Math.round(remaining).toLocaleString()},
                    {label:"Monthly SIP Required",value:"₹"+Math.round(sip).toLocaleString()},
                    {label:"Daily SIP Equivalent",value:"₹"+Math.round(sip/30).toLocaleString()+"/day"}
                ],
                chart:{labels:["Existing FV","SIP Corpus","Gap(if any)"],
                    data:[Math.round(existingFV),Math.round(Math.max(0,remaining)),0],
                    timeline:(function(){
                        var labels=[],savArr=[],targetArr=[];
                        for(var yr=1;yr<=yearsToRetire;yr++){
                            var months=yr*12;
                            var sipFV=Math.round(sip)*((Math.pow(1+r,months)-1)/r)*(1+r);
                            var existFV=v.existing*Math.pow(1+v.return_pre/100,yr);
                            labels.push('Age '+(v.age+yr));
                            savArr.push(Math.round(sipFV+existFV));
                            targetArr.push(Math.round(corpus));
                        }
                        return {labels:labels,datasets:[
                            {label:'Your Savings',data:savArr,fill:true},
                            {label:'Target Corpus',data:targetArr,fill:false}
                        ]};
                    })()
                }
            };
        },
        tips:["Rule of thumb: you need 25-30x your annual expenses","Start early — SIP at 25 needs 1/4th of SIP at 35 for same corpus","Post-retirement, shift to debt funds for safety"]
    },

    // ── NEW: CHOLESTEROL RATIO CALCULATOR ────────────────────────────────────
    cholesterolratio: {
        name:"Cholesterol Ratio Calculator", desc:"Total/HDL ratio, LDL/HDL ratio & cardiovascular risk",
        icon:"fa-heart-circle-check", cat:"health",
        inputs:[
            {id:"total",label:"Total Cholesterol",default:200,suffix:"mg/dL"},
            {id:"hdl",label:"HDL (Good Cholesterol)",default:55,suffix:"mg/dL"},
            {id:"ldl",label:"LDL (Bad Cholesterol)",default:120,suffix:"mg/dL"},
            {id:"triglycerides",label:"Triglycerides",default:150,suffix:"mg/dL"}
        ],
        calc(v){
            const totalHdl = v.total / v.hdl;
            const ldlHdl = v.ldl / v.hdl;
            const nonHdl = v.total - v.hdl;
            const vldl = v.triglycerides / 5;
            const riskTotal = totalHdl < 3.5 ? "Low Risk ✓" : totalHdl < 5 ? "Moderate Risk ⚠" : "High Risk ❌";
            const riskLdl = ldlHdl < 2.5 ? "Low Risk ✓" : ldlHdl < 3.5 ? "Moderate Risk ⚠" : "High Risk ❌";
            const trigStatus = v.triglycerides < 150 ? "Normal ✓" : v.triglycerides < 200 ? "Borderline ⚠" : "High ❌";
            return {
                main:{label:"Total/HDL Ratio",value:totalHdl.toFixed(2)+" — "+riskTotal},
                secondary:[
                    {label:"LDL/HDL Ratio",value:ldlHdl.toFixed(2)+" — "+riskLdl},
                    {label:"Non-HDL Cholesterol",value:nonHdl+" mg/dL"+(nonHdl<130?" ✓":" ⚠")},
                    {label:"VLDL (estimated)",value:vldl.toFixed(0)+" mg/dL"},
                    {label:"Triglycerides Status",value:trigStatus},
                    {label:"Healthy Total/HDL",value:"< 3.5 (ideal < 3.0)"},
                    {label:"Healthy LDL/HDL",value:"< 2.5"},
                    {label:"Target LDL",value:"< 100 mg/dL (optimal)"}
                ],
                chart:{labels:["HDL (Good)","LDL (Bad)","VLDL","Other"],
                    data:[v.hdl,v.ldl,vldl,Math.max(0,v.total-v.hdl-v.ldl-vldl)]}
            };
        },
        tips:["Total/HDL ratio is the most important heart risk marker","Increase HDL with exercise, omega-3 fats, and nuts","LDL < 100 mg/dL is optimal; < 70 for high-risk patients"]
    },

    // ── NEW: CALORIE DEFICIT / WEIGHT LOSS CALCULATOR ────────────────────────
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
        calc(v){
            // BMR using Mifflin-St Jeor
            const bmr = v.gender==="Male" ? 10*v.weight+6.25*v.height-5*v.age+5 : 10*v.weight+6.25*v.height-5*v.age-161;
            const actMult = {"Sedentary":1.2,"Lightly Active":1.375,"Moderately Active":1.55,"Very Active":1.725};
            const tdee = Math.round(bmr * (actMult[v.activity]||1.2));
            const lossRate = parseFloat(v.rate);
            const deficitPerDay = Math.round(lossRate * 7700 / 7);
            const targetCalories = Math.max(1200, tdee - deficitPerDay);
            const actualDeficit = tdee - targetCalories;
            const weightToLose = v.weight - v.goal_weight;
            const weeksNeeded = Math.ceil(weightToLose / lossRate);
            const daysNeeded = weeksNeeded * 7;
            const goalDate = new Date(Date.now() + daysNeeded * 86400000);
            return {
                main:{label:"Daily Calorie Target",value:targetCalories+" kcal"},
                secondary:[
                    {label:"Your TDEE (maintenance)",value:tdee+" kcal/day"},
                    {label:"Daily Deficit",value:actualDeficit+" kcal"},
                    {label:"Weight to Lose",value:weightToLose.toFixed(1)+" kg"},
                    {label:"Time to Goal",value:weeksNeeded+" weeks ("+Math.round(weeksNeeded/4.3)+" months)"},
                    {label:"Goal Date (estimated)",value:goalDate.toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})},
                    {label:"BMR",value:Math.round(bmr)+" kcal"},
                    {label:"Min Safe Calories",value:v.gender==="Male"?"1,500 kcal":"1,200 kcal"}
                ],
                chart:{labels:["Target Intake","Deficit"],data:[targetCalories,actualDeficit],
                    timeline:(function(){
                        var labels=[],wArr=[];
                        var w=v.weight;
                        for(var wk=0;wk<=Math.min(weeksNeeded,52);wk+=Math.max(1,Math.floor(weeksNeeded/12))){
                            labels.push('Wk '+wk);
                            wArr.push(Math.round((v.weight-lossRate*wk)*10)/10);
                        }
                        return {labels:labels,datasets:[
                            {label:'Weight (kg)',data:wArr,fill:true}
                        ]};
                    })()
                }
            };
        },
        tips:["Never go below 1200 kcal (women) or 1500 kcal (men)","0.5 kg/week is sustainable and preserves muscle","Combine diet with strength training for best results"]
    },

    // ── NEW: EV VS PETROL/DIESEL SAVINGS ─────────────────────────────────────
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
        calc(v){
            const totalKm = v.daily_km * 365 * v.years;
            const petrolCost = totalKm / v.mileage * v.petrol_rate;
            const evEnergyCost = totalKm / v.ev_efficiency * v.elec_rate;
            const fuelSaving = petrolCost - evEnergyCost;
            const petrolMaintenance = 8000 * v.years;
            const evMaintenance = 3000 * v.years;
            const maintSaving = petrolMaintenance - evMaintenance;
            const totalPetrolCost = v.petrol_price + petrolCost + petrolMaintenance;
            const totalEVCost = v.ev_price + evEnergyCost + evMaintenance;
            const netSaving = totalPetrolCost - totalEVCost;
            const breakEvenKm = (v.ev_price - v.petrol_price) / ((v.petrol_rate/v.mileage) - (v.elec_rate/v.ev_efficiency));
            const breakEvenYears = breakEvenKm / (v.daily_km * 365);
            return {
                main:{label:"8-Year Net Savings (EV)",value:"₹"+Math.round(netSaving).toLocaleString()+(netSaving>0?" ✓":" ❌")},
                secondary:[
                    {label:"Total Petrol/Diesel Cost",value:"₹"+Math.round(petrolCost).toLocaleString()},
                    {label:"Total EV Charging Cost",value:"₹"+Math.round(evEnergyCost).toLocaleString()},
                    {label:"Fuel Savings",value:"₹"+Math.round(fuelSaving).toLocaleString(),pos:true},
                    {label:"Maintenance Savings",value:"₹"+Math.round(maintSaving).toLocaleString(),pos:true},
                    {label:"Total Petrol Ownership",value:"₹"+Math.round(totalPetrolCost).toLocaleString()},
                    {label:"Total EV Ownership",value:"₹"+Math.round(totalEVCost).toLocaleString()},
                    {label:"Break-Even Distance",value:Math.round(breakEvenKm).toLocaleString()+" km"},
                    {label:"Break-Even Time",value:breakEvenYears.toFixed(1)+" years"}
                ],
                chart:{labels:["EV Purchase","EV Running","EV Maint","Petrol Purchase","Petrol Fuel","Petrol Maint"],
                    data:[v.ev_price,Math.round(evEnergyCost),evMaintenance,v.petrol_price,Math.round(petrolCost),petrolMaintenance],
                    timeline:(function(){
                        var labels=[],evArr=[],petrolArr=[];
                        for(var yr=1;yr<=v.years;yr++){
                            var km=v.daily_km*365*yr;
                            labels.push('Yr '+yr);
                            evArr.push(Math.round(v.ev_price+km/v.ev_efficiency*v.elec_rate+3000*yr));
                            petrolArr.push(Math.round(v.petrol_price+km/v.mileage*v.petrol_rate+8000*yr));
                        }
                        return {labels:labels,datasets:[
                            {label:'EV Total Cost',data:evArr,fill:false},
                            {label:'Petrol Total Cost',data:petrolArr,fill:false}
                        ]};
                    })()
                }
            };
        },
        tips:["EV running cost is ₹1-1.5/km vs ₹7-8/km for petrol","Home charging is 50% cheaper than public charging","EV maintenance is 60% lower — no oil changes, fewer parts"]
    },

    // ── NEW: HOME RENOVATION COST ESTIMATOR ──────────────────────────────────
    homerenovation: {
        name:"Home Renovation Cost Estimator", desc:"Room-wise renovation budget with material costs",
        icon:"fa-paint-roller", cat:"construction",
        inputs:[
            {id:"area",label:"Total Area",default:1000,suffix:"sq ft"},
            {id:"scope",label:"Renovation Scope",type:"select",options:["Full Renovation","Kitchen Only","Bathroom Only","Painting Only","Flooring Only"]},
            {id:"quality",label:"Material Quality",type:"select",options:["Economy","Standard","Premium","Luxury"]},
            {id:"city",label:"City Tier",type:"select",options:["Metro (Delhi/Mumbai)","Tier-1 (Pune/Hyd)","Tier-2","Tier-3"]}
        ],
        calc(v){
            const qualityMult = {"Economy":0.6,"Standard":1.0,"Premium":1.6,"Luxury":2.5};
            const cityMult = {"Metro (Delhi/Mumbai)":1.2,"Tier-1 (Pune/Hyd)":1.0,"Tier-2":0.8,"Tier-3":0.65};
            const qm = qualityMult[v.quality]||1;
            const cm = cityMult[v.city]||1;
            let base = {};
            if(v.scope==="Full Renovation"){
                base = {painting:45,flooring:120,electrical:80,plumbing:60,kitchen:350,bathroom:250,carpentry:200,false_ceiling:100,misc:50};
            } else if(v.scope==="Kitchen Only"){
                base = {kitchen_cabinets:400,countertop:150,tiles:80,plumbing:60,electrical:40,chimney_sink:80,misc:30};
            } else if(v.scope==="Bathroom Only"){
                base = {tiles:120,fixtures:150,plumbing:80,waterproofing:50,vanity:60,misc:25};
            } else if(v.scope==="Painting Only"){
                base = {painting:40,primer:10,putty:15,labour:20,misc:5};
            } else {
                base = {flooring_material:100,labour:40,leveling:20,skirting:15,misc:10};
            }
            const items = Object.entries(base).map(([k,rate])=>{
                const cost = Math.round(v.area * rate * qm * cm);
                return {label:k.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase()),value:"₹"+cost.toLocaleString()};
            });
            const totalCost = Object.values(base).reduce((s,r)=>s+r,0)*v.area*qm*cm;
            return {
                main:{label:"Estimated Total Cost",value:"₹"+Math.round(totalCost).toLocaleString()},
                secondary:[
                    ...items,
                    {label:"Cost per sq ft",value:"₹"+Math.round(totalCost/v.area).toLocaleString()},
                    {label:"Timeline (est.)",value:v.scope==="Full Renovation"?"45-60 days":v.scope==="Painting Only"?"7-10 days":"15-25 days"}
                ],
                chart:{labels:Object.keys(base).map(k=>k.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase())),
                    data:Object.values(base).map(r=>Math.round(v.area*r*qm*cm))}
            };
        },
        tips:["Get 3 contractor quotes minimum","Keep 15-20% buffer for unexpected costs","Plumbing and electrical should be done before tiling"]
    }
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
