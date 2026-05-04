// Finance calculators content — Part 3 (salary, tax, investment tools)
'use strict';
module.exports = {
  salary: {
    why: 'In India, CTC (Cost to Company) and in-hand salary can differ by 25-40%. Understanding the breakup — basic (40-50% of CTC), HRA (40-50% of basic), PF (12% of basic), professional tax, and income tax — is crucial during salary negotiations. A ₹15 LPA CTC typically yields ₹95,000-₹1,05,000 monthly in-hand depending on tax regime choice.',
    feats: ['CTC to in-hand salary conversion','Complete salary breakup with all components','PF, professional tax, and TDS calculation','Old vs New tax regime comparison','Monthly and annual views','Bonus and variable pay inclusion'],
    tips: ['Negotiate basic salary carefully — higher basic means higher PF and gratuity but also higher tax.','HRA exemption can save ₹50,000-₹2,00,000 in tax for metro tenants.','Opt for NPS under CTC if available — employer contribution up to 10% is tax-free.','Standard deduction of ₹75,000 applies automatically in new regime.','Special allowances above ₹1,600/month are fully taxable — minimize them in your structure.'],
    who: 'Job seekers evaluating offers, HR professionals structuring salaries, employees planning taxes, and freelancers setting rates.',
    formula: 'In-hand = CTC – Employer PF (12% of basic) – Employer ESI – Gratuity provision – TDS – Professional Tax. Basic typically = 40-50% of CTC.',
    example: 'CTC ₹15,00,000. Basic = ₹6,00,000 (40%). HRA = ₹3,00,000. Special = ₹2,52,000. Employer PF = ₹72,000. Gratuity = ₹28,846. Gross monthly = ₹99,286. After PF (₹6,000) + PT (₹200) + TDS (₹8,383) = ₹84,703 in-hand.',
    tbl: '<table><thead><tr><th>CTC</th><th>Basic (40%)</th><th>Employer PF</th><th>In-Hand (approx)</th></tr></thead><tbody><tr><td>₹6 LPA</td><td>₹2.4L</td><td>₹28,800</td><td>₹42,000</td></tr><tr><td>₹10 LPA</td><td>₹4L</td><td>₹48,000</td><td>₹68,000</td></tr><tr><td>₹15 LPA</td><td>₹6L</td><td>₹72,000</td><td>₹95,000</td></tr><tr><td>₹25 LPA</td><td>₹10L</td><td>₹1,20,000</td><td>₹1,45,000</td></tr></tbody></table>',
    tblCap: 'CTC to in-hand salary estimates (new tax regime)'
  },
  hra: {
    why: 'HRA exemption is one of the biggest tax-saving tools for salaried tenants in India. The exemption is the minimum of: actual HRA received, 50% of basic (metro) or 40% (non-metro), or rent paid minus 10% of basic. In metros like Mumbai and Bangalore, this can save ₹1-2 lakh in taxes annually.',
    feats: ['HRA exemption calculation under Section 10(13A)','Metro vs non-metro automatic detection','Monthly and annual breakdown','Tax savings visualization','Rent receipt generator','Landlord PAN requirement alert (rent > ₹1L/year)'],
    tips: ['If rent exceeds ₹1,00,000/year, landlord PAN is mandatory — get it during lease signing.','Paying rent to parents is a valid tax strategy — parents must declare rental income.','HRA exemption is NOT available in the new tax regime — factor this in regime comparison.','Keep 12 months of rent receipts and bank transfer proof for assessment.','Hostel fees or hotel stays do not qualify for HRA exemption.'],
    who: 'Salaried tenants in India, HR professionals calculating tax deductions, CAs advising clients, and employees choosing between tax regimes.',
    formula: 'HRA Exemption = Minimum of: (1) Actual HRA received, (2) 50% of Basic for metro / 40% for non-metro, (3) Rent paid – 10% of Basic.',
    example: 'Basic ₹50,000/month, HRA ₹25,000/month, Rent ₹20,000/month (Mumbai). (1) ₹25,000 (2) ₹25,000 (50% of basic) (3) ₹20,000 – ₹5,000 = ₹15,000. Exemption = ₹15,000/month = ₹1,80,000/year. Tax saved at 30%: ₹56,160.',
    tbl: '<table><thead><tr><th>Basic</th><th>HRA</th><th>Rent</th><th>City</th><th>Exemption</th><th>Tax Saved (30%)</th></tr></thead><tbody><tr><td>₹40K</td><td>₹20K</td><td>₹15K</td><td>Metro</td><td>₹11K</td><td>₹41,184</td></tr><tr><td>₹50K</td><td>₹25K</td><td>₹22K</td><td>Metro</td><td>₹17K</td><td>₹63,648</td></tr><tr><td>₹60K</td><td>₹30K</td><td>₹18K</td><td>Non-metro</td><td>₹12K</td><td>₹44,928</td></tr></tbody></table>',
    tblCap: 'HRA exemption examples (monthly figures)'
  },
  epf: {
    why: 'Employee Provident Fund is India\'s largest retirement savings scheme with over 28 crore members. Both employee and employer contribute 12% of basic salary. The current EPF interest rate is 8.25% (FY 2024-25), tax-free up to certain limits. EPF enjoys EEE status but contributions above ₹2.5 lakh/year are taxed on interest from FY 2021-22.',
    feats: ['EPF balance projection at retirement','Employee and employer contribution breakdown','Interest calculation at current 8.25% rate','PF withdrawal and transfer rules','VPF (Voluntary PF) impact analysis','Pension (EPS) calculation'],
    tips: ['Don\'t withdraw PF when changing jobs — transfer it to maintain compound growth.','EPF interest above ₹2.5L annual contribution is now taxable — plan VPF accordingly.','EPS pension requires minimum 10 years of service.','You can withdraw 90% of PF for home purchase after 5 years of service.','Interest rate is declared annually — check EPFO website for latest rates.'],
    who: 'Salaried employees tracking retirement savings, HR departments managing PF, employees planning job changes, and retirees calculating pension.',
    formula: 'Monthly PF = 12% of Basic by employee + 12% by employer (8.33% to EPS + 3.67% to EPF). Interest compounded annually at 8.25%.',
    example: 'Basic ₹50,000/month. Employee PF = ₹6,000. Employer PF (EPF) = ₹1,833. Employer EPS = ₹4,167. Monthly EPF growth = ₹7,833. After 25 years at 8.25%: ₹87,45,000 approx.',
    tbl: '<table><thead><tr><th>Basic Salary</th><th>Monthly Employee PF</th><th>Monthly Employer EPF</th><th>Corpus in 25 Years</th></tr></thead><tbody><tr><td>₹25,000</td><td>₹3,000</td><td>₹917</td><td>₹43.7L</td></tr><tr><td>₹40,000</td><td>₹4,800</td><td>₹1,467</td><td>₹69.9L</td></tr><tr><td>₹60,000</td><td>₹7,200</td><td>₹2,200</td><td>₹1.05Cr</td></tr><tr><td>₹80,000</td><td>₹9,600</td><td>₹2,933</td><td>₹1.40Cr</td></tr></tbody></table>',
    tblCap: 'EPF corpus projection at 8.25% (no salary growth assumed)'
  },
  tds: {
    why: 'Tax Deducted at Source applies to salaries, bank interest, rent, professional fees, and many other payments. Understanding TDS rates prevents both over-deduction (blocking your cash flow) and under-deduction (leading to penalties). For FY 2025-26, the threshold for TDS on bank FD interest is ₹40,000 (₹50,000 for seniors).',
    feats: ['TDS calculation for all major sections','Section-wise rate lookup','Form 15G/15H eligibility check','TDS refund estimator','Quarterly TDS certificate verification','Advance tax vs TDS comparison'],
    tips: ['Submit Form 15G (below 60) or 15H (seniors) if income is below taxable limit to avoid TDS.','TDS on rent (194-IB): tenant must deduct 5% if annual rent exceeds ₹50,000/month.','TDS on professional fees (194J): 10% for professionals, 2% for technical services.','Check Form 26AS on income tax portal to verify all TDS credits before filing ITR.','TDS credit can be claimed even if employer/deductor deposited it late.'],
    who: 'Employers deducting TDS, employees verifying deductions, freelancers managing TDS certificates, and CAs filing TDS returns.',
    formula: 'TDS = Payment × Applicable Rate. Rates vary: Salary (as per slab), FD Interest (10%), Rent (5-10%), Professional Fees (10%), Commission (5%).',
    example: 'FD interest ₹60,000/year (non-senior). TDS threshold = ₹40,000. Taxable interest = ₹60,000. TDS at 10% = ₹6,000. If no PAN: TDS at 20% = ₹12,000.',
    tbl: '<table><thead><tr><th>Section</th><th>Payment Type</th><th>Rate</th><th>Threshold</th></tr></thead><tbody><tr><td>192</td><td>Salary</td><td>Slab rate</td><td>Basic exemption</td></tr><tr><td>194A</td><td>FD Interest</td><td>10%</td><td>₹40,000 (₹50K seniors)</td></tr><tr><td>194-IB</td><td>Rent (individual)</td><td>5%</td><td>₹50,000/month</td></tr><tr><td>194J</td><td>Professional fees</td><td>10%</td><td>₹30,000/year</td></tr><tr><td>194C</td><td>Contractor</td><td>1-2%</td><td>₹30,000 single / ₹1L annual</td></tr></tbody></table>',
    tblCap: 'Major TDS sections and rates (FY 2025-26)'
  },
  professionaltax: {
    why: 'Professional Tax is a state-level tax deducted from salary, capped at ₹2,500 per year by the Constitution. It varies by state — Maharashtra charges ₹2,500/year for salaries above ₹10,000, Karnataka charges ₹2,400, while some states like Rajasthan don\'t levy it at all. PT is deductible under Section 16(iii) of the Income Tax Act.',
    feats: ['State-wise professional tax calculation','Monthly deduction breakdown','Annual tax summary','Income slab-based rates per state','Tax deduction eligibility check','Comparison across states'],
    tips: ['Professional tax is deductible from income tax — claim it under Section 16(iii).','Maximum PT is ₹2,500/year as per Constitutional amendment.','Self-employed must register and pay PT themselves — it\'s not just for salaried people.','PT payment deadline varies by state — usually monthly or half-yearly.','Some states exempt women, disabled persons, or senior citizens from PT.'],
    who: 'Salaried employees in PT-applicable states, self-employed professionals, HR managers, and payroll software developers.',
    formula: 'PT = State-specific slab rate based on monthly gross salary. Deducted monthly by employer.',
    example: 'Salary ₹50,000/month in Maharashtra: PT = ₹200/month (₹2,400/year). In Karnataka: ₹200/month (₹2,400/year). In Gujarat: ₹200/month above ₹12,000 salary.',
    tbl: '<table><thead><tr><th>State</th><th>Max Annual PT</th><th>Salary Threshold</th></tr></thead><tbody><tr><td>Maharashtra</td><td>₹2,500</td><td>₹7,500/month</td></tr><tr><td>Karnataka</td><td>₹2,400</td><td>₹15,000/month</td></tr><tr><td>West Bengal</td><td>₹2,500</td><td>₹10,000/month</td></tr><tr><td>Gujarat</td><td>₹2,500</td><td>₹12,000/month</td></tr><tr><td>Tamil Nadu</td><td>₹2,500</td><td>₹21,000/half-year</td></tr></tbody></table>',
    tblCap: 'State-wise professional tax rates (2026)'
  },
  ssy: {
    why: 'Sukanya Samriddhi Yojana is a government-backed savings scheme for the girl child, offering 8.2% interest (highest among small savings schemes). Open it for a daughter under 10 years, contribute for 15 years, and the account matures when she turns 21. Maximum ₹1.5 lakh/year qualifies for Section 80C. Interest and maturity are completely tax-free.',
    feats: ['Maturity amount calculator','Year-by-year balance projection','Partial withdrawal rules (50% after 18 for education)','Tax savings under 80C','Compare with PPF and FD returns','Multiple daughter accounts support'],
    tips: ['Open the account as early as possible — contributions for 15 years, but interest accrues for 21 years.','Minimum annual deposit is just ₹250 — but maximize to ₹1.5L for best returns.','Partial withdrawal of 50% allowed after girl turns 18 for higher education.','Account can be closed early for marriage after girl turns 18.','SSY rate is reviewed quarterly by the government — currently 8.2%.'],
    who: 'Parents of girl children, grandparents planning gifts, and financial planners recommending tax-saving instruments.',
    formula: 'SSY uses annual compounding at 8.2%. Balance(n) = Previous Balance × (1 + 0.082) + Current Year Deposit. Contributions for 15 years, maturity at 21 years from opening.',
    example: 'Deposit ₹1,50,000/year for 15 years at 8.2%. Total deposited = ₹22,50,000. Maturity at year 21 ≈ ₹73,23,000. Interest earned = ₹50,73,000 (fully tax-free).',
    tbl: '<table><thead><tr><th>Annual Deposit</th><th>Total Invested (15y)</th><th>Maturity (21y)</th><th>Interest Earned</th></tr></thead><tbody><tr><td>₹12,000</td><td>₹1,80,000</td><td>₹5,86,226</td><td>₹4,06,226</td></tr><tr><td>₹50,000</td><td>₹7,50,000</td><td>₹24,41,086</td><td>₹16,91,086</td></tr><tr><td>₹1,00,000</td><td>₹15,00,000</td><td>₹48,82,172</td><td>₹33,82,172</td></tr><tr><td>₹1,50,000</td><td>₹22,50,000</td><td>₹73,23,258</td><td>₹50,73,258</td></tr></tbody></table>',
    tblCap: 'SSY maturity values at 8.2% interest rate'
  },
  retirement: {
    why: 'India lacks a universal pension system, making personal retirement planning essential. With average life expectancy at 72 and rising, planning for 25-30 years post-retirement is necessary. The rule of thumb: you need 25× your annual expenses as a retirement corpus. For ₹50,000/month expenses today with 6% inflation, you need approximately ₹5.7 crore to retire at 60.',
    feats: ['Required retirement corpus calculation','Monthly SIP needed to reach target','Inflation-adjusted expense projection','Social security and pension offset','Retirement readiness score','Monte Carlo simulation for confidence'],
    tips: ['Start with the 25× rule: multiply annual expenses by 25 for target corpus.','Factor in healthcare inflation at 14-15% — it\'s the biggest retirement expense.','EPF + PPF + NPS should form your retirement backbone — add equity for growth.','Plan for spouse\'s retirement too — women statistically live 3-5 years longer.','Review and increase retirement savings every year by at least inflation rate.'],
    who: 'Working professionals planning retirement, early retirees (FIRE movement), financial advisors, and anyone over 30 without a pension.',
    formula: 'Required Corpus = Annual Expenses × (1 + inflation)^years_to_retire × 25. Monthly SIP needed = Target / [((1+r)^n – 1)/r × (1+r)].',
    example: 'Current expenses ₹50,000/month, age 30, retire at 60. Annual expense at 60 (6% inflation): ₹50K × 12 × (1.06)^30 = ₹34.5L/year. Corpus needed = ₹34.5L × 25 = ₹8.6 crore. Monthly SIP at 12% for 30 years needed: ₹24,500.',
    tbl: '<table><thead><tr><th>Current Monthly Expense</th><th>Retire at 60</th><th>Corpus Needed</th><th>SIP from Age 30</th></tr></thead><tbody><tr><td>₹30,000</td><td>30 years</td><td>₹5.2 Cr</td><td>₹14,700</td></tr><tr><td>₹50,000</td><td>30 years</td><td>₹8.6 Cr</td><td>₹24,500</td></tr><tr><td>₹75,000</td><td>30 years</td><td>₹12.9 Cr</td><td>₹36,700</td></tr><tr><td>₹1,00,000</td><td>25 years</td><td>₹12.9 Cr</td><td>₹67,300</td></tr></tbody></table>',
    tblCap: 'Retirement corpus and SIP requirements (6% inflation, 12% return)'
  },
  fire: {
    why: 'The FIRE (Financial Independence, Retire Early) movement has gained significant traction in India, especially among IT professionals. The core principle: save 50-70% of income, invest aggressively, and build a corpus of 25-30× annual expenses. With India\'s lower cost of living compared to the West, FIRE is achievable at ₹3-5 crore for many Indians.',
    feats: ['FIRE number calculator (25× annual expenses)','Years to FIRE based on savings rate','Coast FIRE and Barista FIRE variants','Safe withdrawal rate analysis','Lean vs Fat FIRE comparison','India-specific cost adjustments'],
    tips: ['The 4% rule: withdraw 4% of corpus annually for expenses — corpus should last 30+ years.','In India, 3.5% withdrawal rate is safer due to higher inflation.','Savings rate matters more than investment returns for reaching FIRE.','At 50% savings rate, you can retire in ~17 years; at 70%, in ~8.5 years.','Don\'t forget health insurance — the biggest risk in early retirement is medical expenses.'],
    who: 'High-income professionals aiming for early retirement, startup founders after exits, NRIs planning India retirement, and anyone pursuing financial independence.',
    formula: 'FIRE Number = Annual Expenses × 25 (for 4% withdrawal) or × 28.6 (for 3.5%). Years to FIRE = ln[(FI × r + Annual Savings) / Annual Savings] / ln(1 + r).',
    example: 'Monthly expenses ₹60,000 (₹7.2L/year). FIRE number = ₹7.2L × 25 = ₹1.80 Cr. Saving ₹1L/month at 12% returns: reach FIRE in ~10 years.',
    tbl: '<table><thead><tr><th>Savings Rate</th><th>Annual Income ₹20L</th><th>Years to FIRE</th></tr></thead><tbody><tr><td>30%</td><td>Saving ₹6L/year</td><td>28 years</td></tr><tr><td>50%</td><td>Saving ₹10L/year</td><td>17 years</td></tr><tr><td>60%</td><td>Saving ₹12L/year</td><td>12.5 years</td></tr><tr><td>70%</td><td>Saving ₹14L/year</td><td>8.5 years</td></tr></tbody></table>',
    tblCap: 'Years to FIRE by savings rate (12% returns assumed)'
  }
};
