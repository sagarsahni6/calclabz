// Finance calculators content — Part 2
'use strict';
module.exports = {
  roi: {
    why: 'Return on Investment is the universal metric for evaluating investment performance. Whether comparing mutual funds, real estate, or business ventures, ROI tells you how much you earned relative to what you invested. In India, with options ranging from 4% savings accounts to 15%+ equity returns, understanding ROI helps make optimal allocation decisions.',
    feats: ['Calculate ROI percentage for any investment','Annualized ROI for different holding periods','Compare multiple investments side by side','Factor in costs, fees, and taxes','Visual comparison chart','Inflation-adjusted real returns'],
    tips: ['Always calculate annualized ROI when comparing investments of different durations.','Factor in all costs — brokerage, exit loads, and taxes reduce actual returns.','Real ROI = Nominal ROI – Inflation rate.','Past ROI does not guarantee future returns, especially for equity.','Compare ROI after tax — FD interest is fully taxable while LTCG on equity has ₹1.25L exemption.'],
    who: 'Investors comparing instruments, business owners evaluating projects, startup founders pitching to investors, and financial advisors.',
    formula: 'ROI = [(Final Value – Initial Investment) / Initial Investment] × 100. Annualized ROI = [(1 + ROI/100)^(1/years) – 1] × 100.',
    example: 'Invested ₹2,00,000 in a mutual fund, now worth ₹3,50,000 after 4 years. ROI = [(3,50,000 – 2,00,000) / 2,00,000] × 100 = 75%. Annualized = [(1.75)^(1/4) – 1] × 100 = 15.02% CAGR.',
    tbl: '<table><thead><tr><th>Investment</th><th>Invested</th><th>Current Value</th><th>Duration</th><th>ROI</th><th>Annualized</th></tr></thead><tbody><tr><td>Equity MF</td><td>₹5L</td><td>₹12L</td><td>5 yrs</td><td>140%</td><td>19.1%</td></tr><tr><td>FD</td><td>₹5L</td><td>₹7.1L</td><td>5 yrs</td><td>42%</td><td>7.3%</td></tr><tr><td>Gold</td><td>₹5L</td><td>₹8.5L</td><td>5 yrs</td><td>70%</td><td>11.2%</td></tr><tr><td>Real Estate</td><td>₹50L</td><td>₹72L</td><td>5 yrs</td><td>44%</td><td>7.6%</td></tr></tbody></table>',
    tblCap: 'ROI comparison across Indian investment options (illustrative)'
  },
  rd: {
    why: 'Recurring Deposits are India\'s simplest savings tool — deposit a fixed amount monthly and earn guaranteed interest. With over ₹15 lakh crore in RDs across banks and post offices, they are ideal for building disciplined savings habits. Post office RD rates (6.7%) currently beat most bank RDs, and the 5-year post office RD qualifies for 80C deduction.',
    feats: ['Calculate RD maturity for any monthly deposit and tenure','Bank vs Post Office rate comparison','Quarterly compounding calculation','TDS impact on returns','Compare with SIP returns','Pre-mature withdrawal penalty calculator'],
    tips: ['Post office 5-year RD qualifies for Section 80C deduction.','Banks compound RD interest quarterly — this boosts returns slightly.','Set up auto-debit to avoid missed installments (which attract penalties).','Senior citizens get 0.5% higher rate at most banks.','Compare RD vs SIP — SIP typically gives higher long-term returns but with risk.'],
    who: 'First-time savers building discipline, conservative investors, parents saving for children, and anyone building an emergency fund.',
    formula: 'RD uses quarterly compounding: Maturity = Monthly Deposit × [(1+r/4)^(4×t) – 1] / [1 – (1+r/4)^(-1/3)], where r = annual rate, t = years.',
    example: 'Monthly deposit ₹10,000 for 5 years at 7%: Total deposited = ₹6,00,000. Maturity value ≈ ₹7,25,653. Interest earned = ₹1,25,653.',
    tbl: '<table><thead><tr><th>Monthly Deposit</th><th>Rate</th><th>Tenure</th><th>Deposited</th><th>Maturity</th></tr></thead><tbody><tr><td>₹5,000</td><td>7.0%</td><td>3 yrs</td><td>₹1,80,000</td><td>₹2,00,573</td></tr><tr><td>₹10,000</td><td>7.0%</td><td>5 yrs</td><td>₹6,00,000</td><td>₹7,25,653</td></tr><tr><td>₹25,000</td><td>6.7%</td><td>5 yrs</td><td>₹15,00,000</td><td>₹17,88,042</td></tr></tbody></table>',
    tblCap: 'Recurring deposit maturity values'
  },
  carloan: {
    why: 'India\'s auto loan market exceeds ₹5 lakh crore, with interest rates ranging from 7.5% for new cars to 14%+ for used vehicles. Car dealers often quote "flat rate" interest (e.g., 7%) which sounds low but translates to a much higher effective rate (~13%) on reducing balance. Understanding the true cost of your car loan prevents overpaying by lakhs.',
    feats: ['EMI calculation for new and used car loans','Flat rate to reducing balance rate converter','Down payment optimization','Loan tenure comparison','Total cost of ownership estimate','Prepayment benefit calculator'],
    tips: ['Never judge a car loan by flat rate — always calculate the reducing balance effective rate.','20% down payment is optimal — lower means higher EMI, higher means idle capital.','3-year tenure is ideal — 5-year loans cost 40-50% more in total interest.','Pre-approved loans from your bank often have better rates than dealer financing.','Zero-processing-fee offers during festivals can save ₹5,000-15,000.'],
    who: 'Car buyers comparing financing options, used car purchasers, and anyone evaluating lease vs buy decisions.',
    formula: 'Same EMI formula. For flat to reducing conversion: Reducing Rate ≈ Flat Rate × 1.8 to 1.9 (approximation). Exact: solve for r in EMI = P×r×(1+r)^n / [(1+r)^n – 1].',
    example: 'Car price ₹12 lakh, 20% down = ₹2.4L, loan = ₹9.6L at 8.5% for 5 years. EMI = ₹19,676. Total payment = ₹11,80,560. Interest = ₹2,20,560. At dealer flat rate 7%: same EMI but effective rate is ~13%.',
    tbl: '<table><thead><tr><th>Car Price</th><th>Down Payment</th><th>Loan</th><th>Rate</th><th>3-yr EMI</th><th>5-yr EMI</th></tr></thead><tbody><tr><td>₹8L</td><td>₹1.6L</td><td>₹6.4L</td><td>8.5%</td><td>₹20,172</td><td>₹13,117</td></tr><tr><td>₹12L</td><td>₹2.4L</td><td>₹9.6L</td><td>8.5%</td><td>₹30,258</td><td>₹19,676</td></tr><tr><td>₹20L</td><td>₹4L</td><td>₹16L</td><td>9.0%</td><td>₹50,861</td><td>₹33,193</td></tr></tbody></table>',
    tblCap: 'Car loan EMI comparison by price segment'
  },
  inflation: {
    why: 'India\'s average CPI inflation has been 5-6% over the past decade. This means ₹1 lakh today will have the purchasing power of just ₹55,000 in 10 years and ₹30,000 in 20 years. Any investment returning less than inflation is actually losing money in real terms. This calculator helps you understand how inflation erodes wealth and plan investments that beat it.',
    feats: ['Calculate future cost of any item with inflation','Find how much your money will be worth in the future','Real vs nominal returns comparison','Historical India CPI inflation data','Inflation-adjusted retirement planning','Cost of living increase estimator'],
    tips: ['Your investments must beat inflation to grow real wealth — target 3-4% above CPI.','Education inflation in India runs at 10-12%, much higher than CPI.','Healthcare inflation runs at 14-15% — factor this into retirement planning.','Gold has historically matched inflation but rarely beaten it significantly.','Equity has been the only asset class consistently beating inflation over 10+ year periods.'],
    who: 'Retirement planners, parents estimating future education costs, investors evaluating real returns, and financial advisors.',
    formula: 'Future Value = Present Value × (1 + inflation_rate/100)^years. Present Value = Future Value / (1 + inflation_rate/100)^years. Real Return = [(1 + nominal) / (1 + inflation)] – 1.',
    example: 'College fee today: ₹10 lakh. At 10% education inflation, in 15 years: 10,00,000 × (1.10)^15 = ₹41,77,248. You need to save ₹41.8 lakh for the same education.',
    tbl: '<table><thead><tr><th>Today\'s Cost</th><th>Inflation</th><th>After 10 Years</th><th>After 20 Years</th></tr></thead><tbody><tr><td>₹1,00,000</td><td>6%</td><td>₹1,79,085</td><td>₹3,20,714</td></tr><tr><td>₹10,00,000</td><td>6%</td><td>₹17,90,848</td><td>₹32,07,135</td></tr><tr><td>₹10,00,000</td><td>10% (education)</td><td>₹25,93,742</td><td>₹67,27,500</td></tr><tr><td>₹5,00,000</td><td>14% (medical)</td><td>₹18,56,346</td><td>₹68,89,459</td></tr></tbody></table>',
    tblCap: 'Inflation impact on costs over time'
  },
  cagr: {
    why: 'CAGR (Compound Annual Growth Rate) is the gold standard for measuring investment performance over time. Unlike absolute returns, CAGR smooths out year-to-year volatility and gives you the true annualized growth rate. India\'s Nifty 50 has delivered approximately 12-13% CAGR over the past 20 years, while gold has returned about 10-11% CAGR.',
    feats: ['Calculate CAGR from initial and final values','Reverse CAGR — project future value from growth rate','Compare CAGR across multiple investments','Visual growth trajectory chart','Adjust for inflation to get real CAGR','Historical benchmark comparison'],
    tips: ['CAGR is more meaningful than average returns — a 50% gain followed by 50% loss gives -25% total, not 0%.','Compare CAGR only for same time periods — 3-year and 10-year CAGR are not comparable.','Index fund CAGR is the benchmark — your investment should beat it to justify active management.','CAGR ignores intermediate cash flows — use XIRR for SIP investments.','Add 2-3% to your target CAGR to account for inflation erosion.'],
    who: 'Mutual fund investors evaluating fund performance, stock traders measuring portfolio growth, business analysts, and financial planners.',
    formula: 'CAGR = [(Final Value / Initial Value)^(1/n) – 1] × 100, where n = number of years.',
    example: 'Invested ₹5,00,000 in 2021, worth ₹8,50,000 in 2026 (5 years). CAGR = [(8,50,000/5,00,000)^(1/5) – 1] × 100 = [(1.70)^0.2 – 1] × 100 = 11.2%.',
    tbl: '<table><thead><tr><th>Asset</th><th>2016 Value</th><th>2026 Value</th><th>10-yr CAGR</th></tr></thead><tbody><tr><td>Nifty 50</td><td>₹7,985</td><td>₹22,500</td><td>10.9%</td></tr><tr><td>Gold (10g)</td><td>₹29,000</td><td>₹72,000</td><td>9.5%</td></tr><tr><td>PPF</td><td>Fixed</td><td>Fixed</td><td>7.1%</td></tr><tr><td>FD (SBI)</td><td>Fixed</td><td>Fixed</td><td>6.5%</td></tr></tbody></table>',
    tblCap: 'CAGR comparison of Indian asset classes (2016-2026, approximate)'
  },
  swp: {
    why: 'Systematic Withdrawal Plan is the reverse of SIP — you withdraw a fixed amount monthly from your mutual fund corpus. With India\'s retirement landscape shifting from pension-based to corpus-based, SWP has become essential for creating regular income. A ₹1 crore corpus in a balanced fund at 10% can sustain ₹65,000/month withdrawal for 25+ years.',
    feats: ['Calculate sustainable monthly withdrawal amount','Corpus depletion timeline projection','Compare different withdrawal rates','Visual corpus balance chart over time','Tax-efficient withdrawal planning','Inflation-adjusted withdrawal support'],
    tips: ['Keep withdrawal rate below 6-7% annually to sustain corpus for 25+ years.','SWP from equity funds after 1 year gets LTCG treatment (10% above ₹1.25L).','Maintain 1-2 years of expenses in liquid funds as buffer during market downturns.','Increase withdrawal by 5-6% annually to match inflation.','Hybrid/balanced funds are ideal for SWP — less volatile than pure equity.'],
    who: 'Retirees creating monthly income, early retirees (FIRE), NRIs managing India investments remotely, and anyone with a lumpsum seeking regular income.',
    formula: 'Corpus after n months = [Corpus × (1+r)^n] – [W × ((1+r)^n – 1)/r], where r = monthly return rate, W = monthly withdrawal. Sustainable withdrawal = Corpus × r / [1 – (1+r)^(-n)].',
    example: 'Corpus ₹1,00,00,000, monthly withdrawal ₹65,000, expected return 10%. Monthly rate = 0.833%. After 20 years: corpus remaining ≈ ₹38 lakh. After 30 years: corpus depleted at year 27.',
    tbl: '<table><thead><tr><th>Corpus</th><th>Monthly Withdrawal</th><th>Return</th><th>Lasts</th></tr></thead><tbody><tr><td>₹50L</td><td>₹30,000</td><td>10%</td><td>28 years</td></tr><tr><td>₹1Cr</td><td>₹50,000</td><td>10%</td><td>35+ years</td></tr><tr><td>₹1Cr</td><td>₹75,000</td><td>10%</td><td>22 years</td></tr><tr><td>₹2Cr</td><td>₹1,00,000</td><td>8%</td><td>40+ years</td></tr></tbody></table>',
    tblCap: 'SWP sustainability at different withdrawal levels'
  },
  lumpsum: {
    why: 'Lumpsum investing means putting a large amount at once into mutual funds or other instruments, as opposed to SIP. Historical data shows that lumpsum beats SIP about 60-65% of the time in equity markets over 10+ year periods, because markets trend upward and money invested earlier has more time to compound. However, timing risk is higher.',
    feats: ['Calculate future value of lumpsum investment','Compare lumpsum vs SIP returns for same total amount','Risk-adjusted return analysis','Entry timing impact simulator','Tax implications calculator','Visual wealth growth chart'],
    tips: ['If markets have corrected 15-20%, lumpsum tends to outperform SIP.','For amounts above ₹5 lakh, consider Systematic Transfer Plan (STP) to reduce timing risk.','Lumpsum in debt funds is usually better than lumpsum in equity for short term (<3 years).','ELSS lumpsum in March gives immediate 80C benefit — but ideally spread across the year.','Compare 5-year and 10-year rolling returns before choosing lumpsum vs SIP.'],
    who: 'Recipients of bonuses, inheritances, or maturity proceeds looking to invest, NRIs repatriating funds, and experienced investors timing market entry.',
    formula: 'Future Value = P × (1 + r/100)^n, where P = Lumpsum amount, r = Expected annual return, n = Investment period in years.',
    example: 'Lumpsum ₹10,00,000 in equity fund at 12% for 15 years: FV = 10,00,000 × (1.12)^15 = ₹54,73,566. Same ₹10L via SIP (₹5,556/month for 15 years) at 12% = ₹50,45,760.',
    tbl: '<table><thead><tr><th>Amount</th><th>Return</th><th>5 Years</th><th>10 Years</th><th>15 Years</th><th>20 Years</th></tr></thead><tbody><tr><td>₹5L</td><td>10%</td><td>₹8.05L</td><td>₹12.97L</td><td>₹20.89L</td><td>₹33.64L</td></tr><tr><td>₹10L</td><td>12%</td><td>₹17.62L</td><td>₹31.06L</td><td>₹54.74L</td><td>₹96.46L</td></tr><tr><td>₹25L</td><td>12%</td><td>₹44.06L</td><td>₹77.65L</td><td>₹1.37Cr</td><td>₹2.41Cr</td></tr></tbody></table>',
    tblCap: 'Lumpsum growth projection at different return rates'
  },
  nps: {
    why: 'National Pension System offers an additional ₹50,000 tax deduction under 80CCD(1B) over and above the ₹1.5L under 80C. With average equity returns of 10-12% in NPS Tier I, it is one of the most tax-efficient retirement tools. The catch: 60% of corpus can be withdrawn tax-free at 60, but 40% must be used to buy an annuity.',
    feats: ['Calculate NPS maturity corpus','Tax savings under 80CCD(1B) and 80CCD(2)','Equity vs debt allocation optimizer','Annuity income estimation','Corporate NPS employer contribution benefits','Compare NPS vs PPF vs ELSS'],
    tips: ['Maximize the extra ₹50K under 80CCD(1B) — it saves ₹15,600 at 30% bracket.','Active choice with 75% equity allocation (under 35) maximizes long-term returns.','Corporate NPS: employer contribution up to 10% of basic is tax-free.','At retirement, withdraw 60% lump sum (tax-free) and buy annuity with 40%.','Auto choice reduces equity exposure as you age — safer but lower returns.'],
    who: 'Salaried employees seeking additional tax deduction, self-employed building retirement corpus, government employees, and anyone maximizing retirement savings.',
    formula: 'NPS Corpus = Monthly Contribution × [(1+r)^n – 1]/r × (1+r), where r = monthly return rate, n = months until retirement. Annuity Income = 40% of Corpus × Annuity Rate.',
    example: 'Monthly ₹5,000 from age 30 to 60 (30 years) at 10% equity return: Corpus = ₹1,13,02,394. 60% withdrawal = ₹67.8L (tax-free). 40% annuity (₹45.2L at 6%) = ₹22,609/month pension.',
    tbl: '<table><thead><tr><th>Monthly</th><th>Start Age</th><th>Return</th><th>Corpus at 60</th><th>Annual Tax Saved</th></tr></thead><tbody><tr><td>₹5,000</td><td>25</td><td>10%</td><td>₹1.90Cr</td><td>₹18,720</td></tr><tr><td>₹5,000</td><td>30</td><td>10%</td><td>₹1.13Cr</td><td>₹18,720</td></tr><tr><td>₹5,000</td><td>35</td><td>10%</td><td>₹66.4L</td><td>₹18,720</td></tr><tr><td>₹10,000</td><td>30</td><td>10%</td><td>₹2.26Cr</td><td>₹37,440</td></tr></tbody></table>',
    tblCap: 'NPS corpus projection at 10% return'
  },
  gratuity: {
    why: 'Gratuity is a statutory benefit payable to employees who complete 5+ years of continuous service. Under the Payment of Gratuity Act, 1972, the maximum limit is ₹25 lakh (increased from ₹20L in 2024). For government employees, there is no upper limit. Gratuity is exempt from income tax up to ₹25 lakh for private sector employees.',
    feats: ['Calculate gratuity for private and government employees','Factor in last drawn salary and years of service','Tax exemption calculation','Compare Act-covered vs non-covered employees','Include DA in basic salary calculation','Partial year rounding rules'],
    tips: ['Service of 4 years and 240 days counts as 5 years for gratuity eligibility.','Gratuity formula uses 15 days salary per year — but divides by 26 (working days), not 30.','Government employees use a different formula: salary × years × 15/26 with no cap.','Gratuity received is tax-exempt up to ₹25 lakh for non-government employees.','Include Dearness Allowance in basic salary for gratuity calculation.'],
    who: 'Employees planning resignation or retirement, HR managers calculating separation benefits, and finance teams budgeting for gratuity provisions.',
    formula: 'Gratuity = (Basic + DA) × 15/26 × Years of Service. For non-Act employees: (Basic + DA) × 15/30 × Years. Maximum: ₹25,00,000 for private sector.',
    example: 'Basic + DA = ₹80,000/month, Service = 12 years. Gratuity = 80,000 × 15/26 × 12 = ₹5,53,846. Tax-exempt: full amount (under ₹25L limit).',
    tbl: '<table><thead><tr><th>Basic + DA</th><th>Years</th><th>Gratuity</th><th>Tax Status</th></tr></thead><tbody><tr><td>₹40,000</td><td>5</td><td>₹1,15,385</td><td>Exempt</td></tr><tr><td>₹60,000</td><td>10</td><td>₹3,46,154</td><td>Exempt</td></tr><tr><td>₹80,000</td><td>15</td><td>₹6,92,308</td><td>Exempt</td></tr><tr><td>₹1,50,000</td><td>20</td><td>₹17,30,769</td><td>Exempt</td></tr></tbody></table>',
    tblCap: 'Gratuity amounts by salary and service years'
  }
};
