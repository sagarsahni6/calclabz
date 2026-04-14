// Unique SEO content for basic finance calculators (not in top50)
'use strict';
module.exports = {
  salaryhike: {
    desc: 'Calculate your salary hike percentage and new CTC after appraisal. Compare old vs new salary, see monthly take-home impact instantly.',
    what: 'This salary hike calculator computes your percentage increase after an appraisal, showing how your CTC changes and what it means for your monthly take-home pay after taxes and deductions.',
    faqs: [
      { q: 'How is salary hike percentage calculated?', a: 'Salary hike % = ((New Salary − Old Salary) / Old Salary) × 100. For example, a jump from ₹5L to ₹6L is a 20% hike.' },
      { q: 'What is a good salary hike in India?', a: 'Industry average is 8–12% for annual increments. Switching companies often yields 25–50%. High performers in IT may see 15–25% retention hikes.' },
      { q: 'Does this account for inflation?', a: 'The calculator shows the nominal hike. To find your real raise, subtract the current CPI inflation rate (~5–6% in India) from the hike percentage.' }
    ]
  },
  pregst: {
    desc: 'Reverse-calculate the pre-GST price from a GST-inclusive amount. Supports 5%, 12%, 18%, and 28% GST slabs with CGST/SGST split.',
    what: 'This pre-GST calculator extracts the base price from a GST-inclusive amount. Enter the total price and GST rate to instantly see the original price before tax, plus the CGST and SGST components.',
    faqs: [
      { q: 'How do I find the pre-GST price from an inclusive amount?', a: 'Pre-GST Price = GST-Inclusive Price / (1 + GST Rate/100). For ₹1,180 at 18% GST: ₹1,180 / 1.18 = ₹1,000 base price.' },
      { q: 'What GST rate applies to my product?', a: 'GST has four slabs: 5% (essentials), 12% (processed food, phones), 18% (most services, electronics), and 28% (luxury goods, cars). Check the HSN code for your product.' }
    ]
  },
  roi: {
    desc: 'Calculate return on investment (ROI) for any investment. Enter cost and revenue to see percentage return, annualized ROI, and profit amount.',
    what: 'This ROI calculator measures the profitability of your investments by comparing the gain relative to the cost. Works for stocks, real estate, business projects, or any investment where you want to measure returns.',
    faqs: [
      { q: 'What is a good ROI?', a: 'It depends on the asset class. Stock market averages 12–15% annually (India). FDs offer 6–8%. Real estate varies by city. Compare your ROI against inflation (5–6%) to ensure real returns.' },
      { q: 'What is the difference between ROI and CAGR?', a: 'ROI gives total return over the entire period. CAGR (Compound Annual Growth Rate) normalizes it to a yearly rate, making it easier to compare investments of different durations.' },
      { q: 'Does ROI account for taxes?', a: 'This calculator shows pre-tax ROI. For post-tax returns, subtract applicable LTCG (12.5%) or STCG (20%) taxes from the gain before calculating.' }
    ]
  },
  prepayment: {
    desc: 'Calculate how much interest you save by prepaying your loan. Compare loan tenure reduction vs EMI reduction with lump-sum prepayment.',
    what: 'This loan prepayment calculator shows the exact interest savings when you make a lump-sum principal prepayment. Compare two strategies: reducing your EMI amount vs shortening your loan tenure to see which saves more.',
    faqs: [
      { q: 'Is it better to reduce EMI or tenure when prepaying?', a: 'Reducing tenure almost always saves more interest in the long run. Reducing EMI gives more monthly cash flow. If you can afford the same EMI, always choose tenure reduction.' },
      { q: 'Are there prepayment penalties on home loans?', a: 'RBI prohibits prepayment penalties on floating-rate home loans. Fixed-rate loans may have 2–3% charges. Personal loans typically charge 2–5% foreclosure fees.' },
      { q: 'When is the best time to prepay a loan?', a: 'Prepay early in the loan tenure when interest component is highest. After the halfway point, most of your EMI goes toward principal and prepayment saves less interest.' }
    ]
  },
  savingsgoal: {
    desc: 'Calculate the monthly savings needed to reach your financial goal. Factor in time horizon, expected returns, and existing savings.',
    what: 'This savings goal calculator tells you exactly how much to save each month to reach a target corpus by a specific date. Accounts for compound returns on your savings and adjusts for any amount you have already saved.',
    faqs: [
      { q: 'How much should I save from my salary?', a: 'The 50-30-20 rule suggests saving 20% of take-home pay. Those targeting early retirement aim for 40–60%. The right amount depends on your goals and timeline.' },
      { q: 'What return rate should I assume?', a: 'Conservative: 6–7% (FD/debt funds). Moderate: 10–12% (balanced funds). Aggressive: 13–15% (equity). Always use post-tax, inflation-adjusted returns for long-term goals.' }
    ]
  },
  goalsip: {
    desc: 'Calculate the SIP amount needed to reach a target corpus. Factors in step-up SIP, expected returns, and investment timeline.',
    what: 'This goal-based SIP calculator works backwards from your financial target to tell you the monthly SIP needed. Supports annual step-up (increasing SIP by a percentage each year) to match salary growth.',
    faqs: [
      { q: 'How does step-up SIP help reach goals faster?', a: 'A 10% annual step-up on a ₹10,000 SIP for 20 years at 12% returns generates ₹2.3 Cr vs ₹1.0 Cr without step-up — more than double the corpus with manageable increases.' },
      { q: 'Which mutual fund category should I use for goal-based SIP?', a: 'Short-term goals (<3 years): liquid/ultra-short funds. Medium (3–7 years): hybrid/balanced. Long-term (7+ years): equity large-cap or index funds.' }
    ]
  },
  taxsaving: {
    desc: 'Plan your tax-saving investments under Section 80C, 80D, 80CCD, and other deductions. See exact tax saved across old and new regimes.',
    what: 'This tax saving calculator helps you plan deductions under Sections 80C (₹1.5L), 80D (health insurance), 80CCD(1B) (NPS), and others. Shows exact tax saved and compares old vs new regime to recommend the better option for your income level.',
    faqs: [
      { q: 'What are the best tax-saving investments under 80C?', a: 'ELSS (3-year lock-in, market returns), PPF (15 years, tax-free), NPS 80CCD(1B) (extra ₹50K deduction). EPF contribution is auto-deducted. Life insurance premiums also qualify.' },
      { q: 'Should I choose old or new tax regime?', a: 'New regime benefits those with fewer deductions (typically income <₹10L). If you fully utilize 80C + HRA + 80D + home loan, the old regime usually saves more above ₹12L income.' }
    ]
  },
  advancetax: {
    desc: 'Calculate advance tax liability and due dates for each quarter. Know if you need to pay advance tax based on your total tax liability.',
    what: 'This advance tax calculator determines if your total tax liability exceeds ₹10,000 (the threshold for mandatory advance tax) and calculates the quarterly installment amounts due on June 15, September 15, December 15, and March 15.',
    faqs: [
      { q: 'Who needs to pay advance tax?', a: 'Anyone with annual tax liability over ₹10,000 after TDS. Salaried individuals usually don\'t need to if TDS covers everything. Freelancers, business owners, and those with capital gains often must pay.' },
      { q: 'What happens if I miss an advance tax deadline?', a: 'Interest under Section 234C is charged at 1% per month on the shortfall. If advance tax paid is less than 90% of assessed tax, interest under 234B also applies at 1% per month.' }
    ]
  },
  ctcbreakup: {
    desc: 'Break down your CTC into take-home salary, basic pay, HRA, PF, gratuity, and other components. Understand your actual monthly in-hand salary.',
    what: 'This CTC breakup calculator deconstructs your Cost to Company into its components: basic pay (typically 40–50% of CTC), HRA, employer PF contribution, gratuity, and special allowances. Shows the gap between CTC and actual in-hand salary.',
    faqs: [
      { q: 'Why is in-hand salary much less than CTC?', a: 'CTC includes employer PF (12%), gratuity (4.81%), insurance, and other benefits you don\'t receive as cash. Typically, in-hand salary is 65–75% of CTC after all deductions.' },
      { q: 'How is basic pay determined from CTC?', a: 'Companies set basic pay at 40–50% of CTC. Higher basic means more PF contribution (retirement savings) but more tax. Lower basic reduces PF but increases tax-free allowances like HRA.' }
    ]
  },
  fire: {
    desc: 'Calculate your FIRE (Financial Independence, Retire Early) number. Know how much corpus you need and years to reach financial freedom.',
    what: 'This FIRE calculator determines the investment corpus needed to sustain your lifestyle without employment income. Uses the 4% safe withdrawal rule adjusted for Indian inflation to calculate your FIRE number and estimates years to reach it based on current savings rate.',
    faqs: [
      { q: 'What is the FIRE number for India?', a: 'Your FIRE number = Annual Expenses × 25 (using the 4% rule). For monthly expenses of ₹1L, you need ₹3 Cr. Adjust upward for healthcare costs and inflation in India.' },
      { q: 'Is the 4% rule safe for India?', a: 'The 4% rule was developed for US markets. For India, many planners recommend a 3–3.5% withdrawal rate due to higher inflation (5–6%) and currency risk. This means needing 28–33× annual expenses.' }
    ]
  },
  debtavalanche: {
    desc: 'Create a debt payoff plan using the avalanche method. Pay off highest-interest debt first to minimize total interest paid.',
    what: 'This debt avalanche calculator prioritizes your debts by interest rate (highest first) and creates a month-by-month payoff schedule. Shows total interest saved compared to minimum payments and the debt snowball method.',
    faqs: [
      { q: 'What is the difference between debt avalanche and snowball?', a: 'Avalanche targets highest-interest debt first (saves the most money). Snowball targets smallest balance first (gives faster emotional wins). Mathematically, avalanche always saves more interest.' },
      { q: 'How much extra should I pay toward debt?', a: 'Even ₹2,000–5,000 extra per month can cut years off repayment. Put every bonus, tax refund, and surplus toward the highest-rate debt for maximum savings.' }
    ]
  },
  emergencyfund: {
    desc: 'Calculate how large your emergency fund should be based on monthly expenses, dependents, and job stability. Get a saving timeline.',
    what: 'This emergency fund calculator recommends the right fund size based on your monthly expenses, number of dependents, income stability, and insurance coverage. Also calculates how long it will take to build the fund at your current savings rate.',
    faqs: [
      { q: 'How many months of expenses should an emergency fund cover?', a: 'Single with stable job: 3–4 months. Family with one income: 6–8 months. Self-employed or freelancer: 9–12 months. During economic uncertainty, aim higher.' },
      { q: 'Where should I keep my emergency fund?', a: 'Keep it in liquid, instantly accessible instruments: savings account (3–4%), liquid mutual funds (5–6%), or sweep FDs. Never invest emergency funds in equity or long lock-in products.' }
    ]
  },
  rentvsbuy: {
    desc: 'Compare renting vs buying a home with total cost analysis. Factors in EMI, maintenance, tax benefits, rent inflation, and investment returns.',
    what: 'This rent vs buy calculator performs a comprehensive cost comparison over your chosen time horizon. Accounts for home loan EMI, registration and stamp duty, maintenance, property appreciation, rent inflation, and the opportunity cost of the down payment if invested.',
    faqs: [
      { q: 'When does buying become better than renting in India?', a: 'Generally, buying wins if you plan to stay 7+ years, property appreciation exceeds 5% annually, and the price-to-rent ratio is below 20. In metros like Mumbai (ratio 30+), renting is often cheaper.' },
      { q: 'What costs are included that people forget?', a: 'Stamp duty (5–7%), registration (1%), interior fit-out, maintenance (₹2–5/sqft/month), property tax, insurance, and opportunity cost of the down payment are often overlooked. These add 15–25% to the purchase price.' }
    ]
  },
  carleasevsbuy: {
    desc: 'Compare leasing vs buying a car in India. Analyze total cost including EMI, depreciation, maintenance, insurance, and resale value.',
    what: 'This car lease vs buy calculator compares the total cost of vehicle ownership versus leasing over 3–5 years. Includes loan EMI, insurance, depreciation, maintenance, and resale value to determine the cheaper option for your usage pattern.',
    faqs: [
      { q: 'Is leasing a car cheaper than buying in India?', a: 'Leasing can be cheaper for business use (tax deductible) and if you change cars every 3–4 years. For personal use over 5+ years, buying is usually more economical after the loan is paid off.' },
      { q: 'What is the typical car depreciation rate in India?', a: 'New cars depreciate ~15–20% in the first year, ~10–15% in years 2–3, and ~8–10% annually after that. A ₹10L car is worth roughly ₹5L after 5 years.' }
    ]
  },
  homedownpayment: {
    desc: 'Calculate the ideal down payment for your home purchase. See how different down payment amounts affect EMI, interest paid, and loan eligibility.',
    what: 'This home down payment calculator helps you determine how much to save for a house purchase. Shows how increasing the down payment reduces your EMI, total interest, and improves loan approval chances. Includes a savings timeline based on your monthly contributions.',
    faqs: [
      { q: 'What is the minimum down payment for a home loan in India?', a: 'RBI mandates a minimum of 10–25% depending on loan amount. Up to ₹30L: 10%. ₹30–75L: 20%. Above ₹75L: 25%. Most banks prefer 20% or more.' },
      { q: 'Should I pay more than the minimum down payment?', a: 'Yes, if possible. A larger down payment means a lower EMI, less total interest (potentially lakhs saved), better interest rates, and easier loan approval. Aim for 25–30% if you can.' }
    ]
  },
  loancompare: {
    desc: 'Compare multiple loans side by side — EMI, total interest, and total cost. Find the best loan offer by comparing rates, tenure, and fees.',
    what: 'This loan comparison calculator lets you compare up to 4 different loan offers simultaneously. Enter the loan amount, interest rate, tenure, and processing fees for each to see which offer costs the least overall.',
    faqs: [
      { q: 'What should I compare besides interest rate?', a: 'Processing fee (0.5–2%), prepayment charges, lock-in period, insurance requirements, and whether the rate is fixed or floating. A lower rate with high fees may cost more overall.' },
      { q: 'Is a longer tenure always bad?', a: 'Longer tenure means lower EMI but much more total interest. A 20-year loan costs 40–60% more in interest than a 10-year loan. Choose the shortest tenure you can comfortably afford.' }
    ]
  },
  refinance: {
    desc: 'Calculate potential savings from refinancing your loan. Compare current vs new rate with break-even analysis including switching costs.',
    what: 'This loan refinancing calculator determines if switching to a lower-interest loan saves money after accounting for processing fees, legal charges, and other switching costs. Shows the break-even month and total lifetime savings.',
    faqs: [
      { q: 'When should I refinance my home loan?', a: 'Consider refinancing when current rates are 0.5%+ lower than your existing rate, remaining tenure is 10+ years, and switching costs are recovered within 18–24 months.' },
      { q: 'What are the costs of home loan balance transfer?', a: 'Processing fee (0.5–1%), property valuation (₹5K–15K), legal verification, stamp duty on new agreement, and CERSAI registration. Total: typically ₹15K–50K depending on loan amount.' }
    ]
  },
  creditutil: {
    desc: 'Calculate your credit utilization ratio and understand its impact on CIBIL score. Know the ideal usage percentage for each credit card.',
    what: 'This credit utilization calculator computes your credit usage ratio across all cards — the percentage of available credit you are using. This is the second most important factor in your CIBIL score after payment history.',
    faqs: [
      { q: 'What credit utilization ratio is ideal for CIBIL score?', a: 'Keep it below 30%, ideally under 10%. Using more than 30% signals credit hunger to bureaus and can drop your score by 20–50 points even if you pay in full every month.' },
      { q: 'Does closing a credit card hurt my score?', a: 'Yes — it reduces your total available credit, instantly increasing your utilization ratio. Keep old cards open with minimal usage instead of closing them.' }
    ]
  },
  insuranceneed: {
    desc: 'Calculate how much life insurance cover you actually need based on income, debts, dependents, and future goals like education and retirement.',
    what: 'This insurance need calculator uses the Human Life Value (HLV) method to determine your ideal life cover. Factors in your income replacement needs, outstanding debts, children\'s education costs, and spouse\'s retirement corpus minus existing assets.',
    faqs: [
      { q: 'How much life insurance do I need?', a: 'A common rule is 10–15× your annual income. Our calculator refines this based on your specific obligations. A 30-year-old earning ₹15L with a home loan typically needs ₹1.5–2 Cr cover.' },
      { q: 'Should I buy term insurance or endowment?', a: 'Term insurance provides the highest cover at the lowest cost (₹500–700/month for ₹1 Cr at age 30). Endowment plans mix insurance with poor returns. IRDAI data shows term insurance is optimal for pure protection.' }
    ]
  },
  npvirr: {
    desc: 'Calculate Net Present Value (NPV) and Internal Rate of Return (IRR) for business projects. Evaluate investment viability with cash flow analysis.',
    what: 'This NPV/IRR calculator evaluates project profitability by discounting future cash flows to present value. Enter your initial investment and expected annual cash flows to determine if the project creates value (positive NPV) and its effective return rate (IRR).',
    faqs: [
      { q: 'What NPV should I accept a project at?', a: 'Accept projects with NPV > 0, which means the project returns more than your required rate. Higher NPV means more value created. Always compare NPV across competing projects.' },
      { q: 'What is a good IRR?', a: 'IRR should exceed your cost of capital (hurdle rate). For Indian businesses, a good IRR is typically 15–25%. Compare IRR with bank FD rates (7%) and equity returns (12–15%) as benchmarks.' }
    ]
  },
  bondyield: {
    desc: 'Calculate bond yield to maturity (YTM), current yield, and price. Analyze government and corporate bonds for fixed-income investment decisions.',
    what: 'This bond yield calculator computes the yield to maturity for a bond given its face value, coupon rate, current market price, and remaining maturity. Also shows current yield and helps compare bonds with different characteristics.',
    faqs: [
      { q: 'What is yield to maturity vs current yield?', a: 'Current yield = Annual Coupon / Market Price (ignores capital gain/loss). YTM accounts for coupon payments plus the gain/loss from buying below/above face value, annualized — it is the true return measure.' },
      { q: 'Are government bonds safe in India?', a: 'G-secs carry sovereign guarantee making them virtually default-risk free. However, they carry interest rate risk — bond prices fall when rates rise. RBI Retail Direct allows individual investors to buy G-secs directly.' }
    ]
  },
  optionprofit: {
    desc: 'Calculate options trading profit/loss for calls and puts. See breakeven price, max profit, max loss, and payoff diagram at expiry.',
    what: 'This options profit calculator determines your potential profit or loss from buying/selling call and put options. Enter the strike price, premium, lot size, and expected price at expiry to view the payoff analysis.',
    faqs: [
      { q: 'How is options profit calculated?', a: 'Call buyer profit = (Spot Price − Strike Price − Premium) × Lot Size (when spot > strike). Put buyer profit = (Strike Price − Spot Price − Premium) × Lot Size (when spot < strike).' },
      { q: 'What is the lot size for Nifty and Bank Nifty options?', a: 'Nifty: 25 units per lot. Bank Nifty: 15 units per lot. Lot sizes are set by NSE and are periodically revised based on the underlying value.' }
    ]
  },
  forexpip: {
    desc: 'Calculate forex pip value in INR or any currency. Determine profit/loss per pip movement for different lot sizes and currency pairs.',
    what: 'This forex pip calculator computes the monetary value of each pip movement for your chosen currency pair and position size. Helps forex traders calculate exact risk exposure and position sizing for any lot size.',
    faqs: [
      { q: 'What is a pip in forex?', a: 'A pip is the smallest standard price movement in a currency pair. For most pairs like EUR/USD, one pip = 0.0001. For JPY pairs, one pip = 0.01. In USD/INR, one pip = 0.0025.' },
      { q: 'How do I calculate pip value for USD/INR?', a: 'For USD/INR with a standard lot (1,000 units): Pip Value = Lot Size × Pip Size = 1,000 × 0.0025 = ₹2.50 per pip. Ten pips = ₹25 profit or loss.' }
    ]
  },
  portfoliorebalance: {
    desc: 'Rebalance your investment portfolio to target allocation. See exactly how much to buy or sell in each asset class to restore balance.',
    what: 'This portfolio rebalancing calculator compares your current asset allocation to your target and generates specific buy/sell recommendations. Enter your holdings across equity, debt, gold, and other assets to see what adjustments are needed.',
    faqs: [
      { q: 'How often should I rebalance my portfolio?', a: 'Rebalance annually or when any asset class drifts more than 5% from target allocation. Annual rebalancing in January or April (after tax harvesting) is common. More frequent rebalancing increases costs without proportional benefit.' },
      { q: 'Does rebalancing improve returns?', a: 'Rebalancing primarily manages risk, not returns. However, it enforces the discipline of selling high (overweight assets) and buying low (underweight assets), which can marginally improve risk-adjusted returns over long periods.' }
    ]
  },
  assetallocation: {
    desc: 'Get a recommended asset allocation based on your age, risk tolerance, and investment goal. See suggested equity-debt-gold split.',
    what: 'This asset allocation calculator recommends an investment mix across equity, debt, gold, and cash based on your age, risk appetite, and financial goals. Follows established frameworks like the 100-minus-age rule with adjustments for Indian investors.',
    faqs: [
      { q: 'What is the 100-minus-age rule?', a: 'It suggests keeping (100 − your age)% in equity. A 30-year-old should have 70% equity, 30% debt. Modern variants use 110 or 120 minus age since lifespans are longer. This is a starting point, not a rigid rule.' },
      { q: 'Should Indian investors include gold?', a: 'Many advisors recommend 5–15% in gold for portfolio diversification. Gold acts as a hedge against currency depreciation and inflation. Sovereign Gold Bonds (SGBs) are the most tax-efficient way to own gold in India.' }
    ]
  },
  montecarlo: {
    desc: 'Run Monte Carlo simulations on your investment portfolio. See the probability of reaching your goal under thousands of market scenarios.',
    what: 'This Monte Carlo simulator runs thousands of randomized market return scenarios on your portfolio to estimate the probability of reaching your financial goal. Unlike single-point estimates, it shows the range of possible outcomes and your success rate.',
    faqs: [
      { q: 'What is a Monte Carlo simulation in investing?', a: 'It generates thousands of random return sequences based on historical market data to simulate possible portfolio outcomes. If 85% of scenarios hit your goal, you have an 85% probability of success.' },
      { q: 'What success probability should I aim for?', a: 'Financial planners recommend 80–90% success rate. Below 70% suggests saving more or adjusting goals. Above 95% might mean you are being too conservative and could afford more risk or spending.' }
    ]
  },
  inflationgoal: {
    desc: 'Calculate inflation-adjusted future cost of any financial goal. See what today\'s expense will actually cost in 5, 10, or 20 years.',
    what: 'This inflation-adjusted goal calculator shows the real future cost of your financial goals like education, wedding, or retirement. Enter today\'s cost and see what you will actually need after years of inflation erode purchasing power.',
    faqs: [
      { q: 'What inflation rate should I use for India?', a: 'General inflation: 5–6% (CPI average). Education inflation: 10–12% (much higher). Medical inflation: 12–15%. Real estate: varies by city (3–8%). Use category-specific rates for accurate planning.' },
      { q: 'How much will ₹1 lakh be worth in 20 years?', a: 'At 6% inflation, ₹1L today will have the purchasing power of only ₹31,180 in 20 years. You will need ₹3.2L to buy what ₹1L buys today. This is why investing must beat inflation.' }
    ]
  },
  businessloan: {
    desc: 'Calculate business loan EMI, eligibility, and total cost. Compare MSME loan options across banks with processing fee analysis.',
    what: 'This business loan calculator estimates your EMI, total interest payable, and likely loan amount eligibility based on your business turnover and profitability. Includes MSME/MUDRA loan category suggestions and processing fee comparison.',
    faqs: [
      { q: 'What is the typical interest rate for business loans in India?', a: 'MUDRA Shishu (up to ₹50K): 10–12%. MUDRA Kishor (up to ₹5L): 11–14%. MSME collateral-free (up to ₹1Cr): 12–16%. Secured term loans: 10–14%. Rates depend on business vintage and turnover.' },
      { q: 'What documents do I need for a business loan?', a: 'GST registration, ITR for 2–3 years, bank statements (12 months), business vintage proof, KYC documents, business plan (for new businesses), and audited financials for larger loans.' }
    ]
  },
  gstinvoice: {
    desc: 'Generate GST-compliant invoices with CGST, SGST, and IGST breakup. Supports multiple line items, HSN codes, and different GST rates.',
    what: 'This GST invoice generator creates tax-compliant invoices with proper GSTIN display, HSN/SAC codes, tax breakdown (CGST+SGST for intra-state, IGST for inter-state), and auto-calculated totals. Includes all fields mandated by GST law.',
    faqs: [
      { q: 'When should I use CGST+SGST vs IGST?', a: 'CGST+SGST applies for sales within the same state (e.g., Delhi to Delhi). IGST applies for inter-state sales (e.g., Delhi to Mumbai) and exports. The total tax rate is the same, only the split differs.' },
      { q: 'Is HSN code mandatory on GST invoices?', a: 'Yes for turnover above ₹5 Cr (6-digit HSN required). For ₹1.5–5 Cr turnover, 4-digit HSN is needed. Below ₹1.5 Cr, HSN code is optional but recommended for compliance.' }
    ]
  },
  esoptax: {
    desc: 'Calculate tax on ESOPs at exercise and sale. Understand perquisite tax, capital gains tax, and optimal timing for exercising stock options.',
    what: 'This ESOP tax calculator computes taxes at two stages: perquisite tax when you exercise options (FMV minus exercise price, taxed as salary) and capital gains tax when you sell shares. Helps plan the most tax-efficient exercise and sale strategy.',
    faqs: [
      { q: 'How are ESOPs taxed in India?', a: 'Two taxation events: (1) At exercise: (FMV − Exercise Price) is taxed as salary income at your slab rate. (2) At sale: (Sale Price − FMV on exercise date) is taxed as capital gains — STCG at 20% or LTCG at 12.5%.' },
      { q: 'When should I exercise my ESOPs?', a: 'Exercise when you believe the company valuation will grow further, and ideally in a year when your salary income is lower to minimize the slab rate impact. For listed companies, exercise and sell after 12+ months for LTCG benefit.' }
    ]
  },
  freelancetax: {
    desc: 'Calculate income tax for freelancers and self-employed professionals in India. Includes presumptive taxation (44ADA) and ITR filing guidance.',
    what: 'This freelancer tax calculator estimates your tax liability under both regular and presumptive taxation schemes (Section 44ADA/44AD). Shows advance tax schedule, GST liability threshold, and recommended ITR form based on your freelance income.',
    faqs: [
      { q: 'What is Section 44ADA for freelancers?', a: 'Section 44ADA allows professionals (doctors, lawyers, engineers, freelancers) earning up to ₹75L to declare 50% of gross receipts as profit and pay tax only on that. No need to maintain detailed books of accounts.' },
      { q: 'Do freelancers need to register for GST?', a: 'GST registration is mandatory if annual turnover exceeds ₹20L (₹10L for special category states). If providing services to foreign clients (exports), you can register voluntarily and claim refunds on input credit.' }
    ]
  },
  tcsremittance: {
    desc: 'Calculate TCS on foreign remittances under LRS. Know the tax collected at source for overseas education, travel, and investments.',
    what: 'This TCS remittance calculator computes the Tax Collected at Source when you send money abroad under the Liberalised Remittance Scheme. Different TCS rates apply for education, medical, travel, and investments based on amount and purpose.',
    faqs: [
      { q: 'What are the TCS rates on foreign remittance?', a: 'Education (from approved loan): 0.5% above ₹7L. Education (self-funded): 5% above ₹7L. Overseas tour packages: 5% (20% above ₹7L). Investment/other: 20% above ₹7L. These apply per financial year.' },
      { q: 'Can I get TCS refund?', a: 'Yes. TCS is adjustable against your total tax liability when filing ITR. If your total income is below the taxable threshold, or TCS exceeds tax due, you will receive a refund after assessment.' }
    ]
  },
  sec80c: {
    desc: 'Plan your Section 80C investments to maximize ₹1.5 lakh deduction. Compare ELSS, PPF, NPS, and other eligible instruments.',
    what: 'This Section 80C planner helps you allocate the ₹1.5 lakh deduction limit across eligible investments — EPF, PPF, ELSS, NSC, life insurance, SSY, home loan principal, and tuition fees. Shows tax saved at your slab rate and compares returns across options.',
    faqs: [
      { q: 'What is the best investment under Section 80C?', a: 'ELSS mutual funds win on returns (12–15%) with the shortest lock-in (3 years). PPF offers guaranteed tax-free returns (7.1%) with a 15-year lock-in. EPF auto-deduction uses up part of the ₹1.5L limit for salaried individuals.' },
      { q: 'Does Section 80C benefit exist under new tax regime?', a: 'No. The new tax regime does not allow Section 80C deductions. If your total deductions exceed ₹3.75L (including 80C, HRA, 80D, home loan), the old regime likely saves more tax.' }
    ]
  },
  hravshomeloan: {
    desc: 'Compare tax benefits of HRA exemption vs home loan deductions. Find out if you can claim both simultaneously under Indian tax law.',
    what: 'This HRA vs home loan tax calculator compares the tax benefit from HRA exemption (Section 10) versus home loan interest (Section 24b) and principal (Section 80C) deductions. Also clarifies the rules for claiming both when you own a house but live in rented accommodation in a different city.',
    faqs: [
      { q: 'Can I claim both HRA and home loan tax benefits?', a: 'Yes, if the home is in a different city from where you work and rent. You must actually pay rent and have a bona fide reason (job location) for not living in your own property. Keep rental receipts and agreements.' },
      { q: 'Which gives more tax benefit — HRA or home loan?', a: 'For metro employees paying high rent, HRA can save ₹1–2L in tax annually. Home loan Section 24b allows ₹2L interest deduction plus ₹1.5L principal under 80C. In many cases, claiming both is the optimal strategy.' }
    ]
  },
  leaveencash: {
    desc: 'Calculate leave encashment amount and tax exemption for government and private sector employees. Covers retirement and resignation scenarios.',
    what: 'This leave encashment calculator computes the taxable and exempt portions of your leave encashment payout. Tax treatment differs for government (fully exempt) and private sector employees (exempt up to ₹25L under Section 10(10AA)) at retirement.',
    faqs: [
      { q: 'How is leave encashment taxed?', a: 'Government employees: fully exempt. Private sector at retirement: exempt up to ₹25L (least of 4 conditions under Section 10(10AA)). At resignation/during service: fully taxable as salary.' },
      { q: 'What are the 4 conditions for leave encashment exemption?', a: 'The exempt amount is the least of: (1) ₹25 lakhs, (2) 10 months average salary, (3) cash equivalent of leave balance (max 30 days per year of service), (4) actual leave encashment received.' }
    ]
  },
  breakeven: {
    desc: 'Calculate break-even point in units and revenue. Know how many sales you need to cover fixed and variable costs for your business.',
    what: 'This break-even calculator determines the exact number of units (or revenue) your business needs to sell to cover all costs — both fixed (rent, salaries) and variable (materials, commissions). Helps with pricing decisions and profit planning.',
    faqs: [
      { q: 'How is break-even point calculated?', a: 'Break-even Units = Fixed Costs / (Selling Price − Variable Cost per Unit). For example, with ₹5L fixed costs, ₹500 selling price, and ₹300 variable cost: 5,00,000 / 200 = 2,500 units needed.' },
      { q: 'How can I lower my break-even point?', a: 'Three ways: (1) Increase selling price (careful not to lose demand), (2) Reduce variable costs (negotiate with suppliers), (3) Reduce fixed costs (downsize office, move to co-working). Even small changes compound.' }
    ]
  },
  networth: {
    desc: 'Calculate your personal net worth by listing all assets and liabilities. Track your financial health over time with a comprehensive balance sheet.',
    what: 'This net worth calculator sums all your assets (savings, investments, property, gold, EPF) and subtracts all liabilities (loans, credit card debt) to show your true financial position. Track this annually to measure financial progress.',
    faqs: [
      { q: 'What is a good net worth by age in India?', a: 'A rough benchmark: net worth = (Age × Annual Income) / 10. By 30 with ₹10L income, target ₹30L. By 40 with ₹20L: ₹80L. These vary widely by city, lifestyle, and career stage.' },
      { q: 'Should I include my primary home in net worth?', a: 'Include it for total net worth, but also calculate "investable net worth" excluding your primary residence. Your home provides shelter, not liquidity. Investable net worth better reflects financial independence.' }
    ]
  },
  dividendyield: {
    desc: 'Calculate dividend yield and annual income from stocks. Compare stocks by dividend payout and see effective post-tax yield.',
    what: 'This dividend yield calculator determines the annual dividend return as a percentage of the stock\'s current price. Helps income investors compare dividend-paying stocks and estimate portfolio income after accounting for the dividend tax.',
    faqs: [
      { q: 'How is dividend yield calculated?', a: 'Dividend Yield = (Annual Dividend per Share / Current Market Price) × 100. A stock at ₹100 paying ₹5 annual dividend has 5% yield. Yield changes daily as stock price fluctuates.' },
      { q: 'How are dividends taxed in India?', a: 'Dividends are taxed at your income tax slab rate since April 2020. For high-income individuals (30%+ slab), the effective yield drops significantly. There is also 10% TDS on dividends exceeding ₹5,000 per year.' }
    ]
  },
  goldinvestment: {
    desc: 'Compare gold investment options in India — physical gold, Gold ETF, Sovereign Gold Bonds, and digital gold. Calculate returns and costs.',
    what: 'This gold investment calculator compares returns across different gold investing modes: physical gold (with making charges and storage), Gold ETFs (with expense ratio), Sovereign Gold Bonds (with 2.5% annual interest), and digital gold. Shows the most cost-effective option for your investment amount.',
    faqs: [
      { q: 'Which is the best way to invest in gold in India?', a: 'Sovereign Gold Bonds (SGBs) are the most advantageous: 2.5% annual interest + gold price appreciation + zero capital gains tax if held until maturity (8 years). No storage risk. Available on RBI Retail Direct.' },
      { q: 'Are gold returns tax-free?', a: 'Only SGBs held to maturity are fully tax-free. Gold ETFs/physical gold: LTCG at 12.5% after 2 years, STCG at slab rate. Digital gold taxation is treated like physical gold.' }
    ]
  },
  profitloss: {
    desc: 'Calculate trading profit or loss on stocks with brokerage, STT, stamp duty, and all charges. See actual net profit after all costs.',
    what: 'This stock profit/loss calculator shows your actual realized profit after deducting all trading charges: brokerage, STT (Securities Transaction Tax), exchange transaction charges, GST, SEBI turnover fee, and stamp duty. Covers both delivery and intraday trades.',
    faqs: [
      { q: 'What charges are deducted from stock trading?', a: 'Brokerage (₹20 or 0.03%), STT (0.1% delivery), exchange charges (0.00345%), SEBI fee (₹10/Cr), GST (18% on brokerage), stamp duty (0.015%). Total charges are typically 0.15–0.3% per trade.' },
      { q: 'How are stock trading profits taxed?', a: 'STCG (held < 12 months): taxed at 20%. LTCG (held > 12 months): taxed at 12.5% on gains exceeding ₹1.25L per year. Intraday profits are taxed as business income at your slab rate.' }
    ]
  },
  stockreturn: {
    desc: 'Calculate total stock return including dividends and price appreciation. See CAGR, absolute return, and dividend reinvestment impact.',
    what: 'This stock return calculator computes your total return from buying a stock at a given price and selling at another, including dividends received during the holding period. Shows absolute return, CAGR, and the impact of reinvesting dividends.',
    faqs: [
      { q: 'What is total return vs price return?', a: 'Price return only considers stock price change. Total return includes dividends reinvested. For dividend-heavy stocks like ITC or Coal India, total return can be 3–5% higher per year than price return alone.' },
      { q: 'How do I calculate CAGR for stock returns?', a: 'CAGR = ((Final Value / Initial Value) ^ (1/years) − 1) × 100. A stock growing from ₹100 to ₹200 in 5 years has CAGR = (2^0.2 − 1) × 100 = 14.87%.' }
    ]
  },
  mutualfundreturns: {
    desc: 'Calculate mutual fund returns with CAGR, XIRR, and absolute return. Compare lump-sum vs SIP returns across different time periods.',
    what: 'This mutual fund returns calculator measures performance using standard metrics: absolute return for short periods, CAGR for lump-sum investments, and XIRR for SIP investments with irregular cash flows. Helps compare funds across different time horizons.',
    faqs: [
      { q: 'Should I use CAGR or XIRR for SIP returns?', a: 'Use XIRR for SIP returns — it correctly accounts for multiple investments at different times. CAGR is only appropriate for lump-sum investments. SIP XIRR is always different from the fund\'s headline CAGR.' },
      { q: 'What is a good CAGR for mutual funds in India?', a: 'Large-cap: 10–14% CAGR over 5+ years. Mid-cap: 12–18%. Small-cap: 14–22% (with higher volatility). Compare any fund\'s CAGR against its benchmark index and category average.' }
    ]
  },
  xirr: {
    desc: 'Calculate XIRR for SIP or irregular investments. Get the true annualized return when investment amounts and dates vary.',
    what: 'This XIRR calculator computes the Internal Rate of Return for cash flows occurring at irregular dates — essential for measuring actual SIP returns. Enter each SIP installment date and amount along with the current value to get your true annualized return.',
    faqs: [
      { q: 'Why is XIRR different from CAGR for SIPs?', a: 'CAGR assumes a single investment on day one. SIP invests monthly, so earlier installments compound longer while recent ones barely compound. XIRR weights each cash flow by its actual time in the market, giving the true return.' },
      { q: 'How do I interpret XIRR?', a: 'XIRR is your effective annual return. 15% XIRR means each rupee earned 15% per year on average, adjusted for when it was invested. Compare XIRR with the fund category average and benchmark index returns.' }
    ]
  },
  balancetransfer: {
    desc: 'Calculate savings from home loan balance transfer to a lower interest rate. Includes processing fees and break-even analysis.',
    what: 'This home loan balance transfer calculator compares your remaining EMI cost at the current rate with a new lender\'s lower rate. Shows total interest saved, net benefit after transfer costs, and the month when savings exceed switching fees.',
    faqs: [
      { q: 'What is home loan balance transfer?', a: 'Balance transfer moves your outstanding home loan to another lender offering a lower interest rate. The new bank pays off the old loan, and you pay reduced EMIs to the new bank. It is essentially refinancing.' },
      { q: 'When does balance transfer not make sense?', a: 'When remaining tenure is less than 5 years (savings are marginal), interest rate difference is less than 0.3%, or switching costs exceed the interest savings. Our calculator shows the exact break-even point.' }
    ]
  },
  scss: {
    desc: 'Calculate SCSS maturity amount and quarterly interest income. Senior Citizen Savings Scheme interest rates, limits, and tax benefits.',
    what: 'This SCSS calculator computes the quarterly interest income and total returns from the Senior Citizen Savings Scheme. SCSS offers one of the highest government-backed interest rates (8.2%) for citizens aged 60+ with up to ₹30L maximum investment.',
    faqs: [
      { q: 'What is the current SCSS interest rate?', a: 'SCSS interest rate is 8.2% per annum (as of FY 2025-26), paid quarterly. It is revised quarterly by the government. Interest is credited on April 1, July 1, October 1, and January 1.' },
      { q: 'Is SCSS interest taxable?', a: 'Yes, SCSS interest is fully taxable at your slab rate. TDS is deducted if annual interest exceeds ₹50,000 (enhanced limit for senior citizens). You can submit Form 15H to avoid TDS if total income is below taxable threshold.' }
    ]
  },
  elssreturns: {
    desc: 'Calculate ELSS mutual fund returns with tax savings factored in. Compare ELSS effective returns vs PPF, FD, and other 80C instruments.',
    what: 'This ELSS returns calculator shows both the investment return and the tax benefit you earn. ELSS has the shortest lock-in (3 years) among 80C instruments with potential for equity market returns, making the effective return significantly higher than headline CAGR.',
    faqs: [
      { q: 'What is the effective return of ELSS?', a: 'If an ELSS fund returns 12% CAGR and you are in the 30% tax bracket, the tax saving of ₹46,800 (on ₹1.5L investment) boosts the effective first-year return to nearly 43%. Over 3 years, the effective CAGR is significantly higher.' },
      { q: 'ELSS vs PPF — which is better?', a: 'ELSS: higher potential returns (12–15%), 3-year lock-in, but not guaranteed. PPF: guaranteed 7.1%, 15-year lock-in, fully tax-free at maturity. Best approach: use both to diversify within your 80C allocation.' }
    ]
  },
  nsccalculator: {
    desc: 'Calculate NSC maturity value and yearly interest accrual. National Savings Certificate returns, tax benefits, and compounding schedule.',
    what: 'This NSC calculator computes the maturity value of National Savings Certificates. NSC is a post-office savings instrument with a 5-year tenure where interest compounds annually but is paid only at maturity. Interest accrued qualifies as reinvestment under 80C.',
    faqs: [
      { q: 'Is NSC still a good investment?', a: 'NSC offers 7.7% guaranteed return with Section 80C benefit. However, interest is taxable at maturity. For most investors, PPF (7.1% tax-free) or ELSS (12%+ with tax benefit) are better options unless you need a guaranteed, medium-term instrument.' },
      { q: 'How does NSC interest and tax benefit work?', a: 'Interest accrued each year (but not paid) is eligible for 80C deduction as deemed reinvestment — effectively getting a tax deduction for years 1–4. In year 5, the interest is fully taxable as income.' }
    ]
  },
  apycalculator: {
    desc: 'Calculate Atal Pension Yojana monthly contribution and pension amount. Compare pension tiers from ₹1,000 to ₹5,000 per month.',
    what: 'This APY calculator shows the monthly contribution needed based on your age and desired pension amount (₹1,000 to ₹5,000/month). Atal Pension Yojana is a government pension scheme for unorganized sector workers aged 18–40, with guaranteed lifetime pension from age 60.',
    faqs: [
      { q: 'How much pension will I get from APY?', a: 'APY offers fixed pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 per month after age 60. The contribution depends on your joining age — an 18-year-old pays ₹42/month for ₹1,000 pension; a 35-year-old pays ₹181/month.' },
      { q: 'Can salaried employees join APY?', a: 'Yes, any Indian citizen aged 18–40 can join. However, income tax payees were made ineligible from October 2022 onward. Existing enrollments before that date continue normally.' }
    ]
  },
  brokerage: {
    desc: 'Calculate stock brokerage charges, STT, and all regulatory fees for NSE/BSE trades. Compare costs across discount and full-service brokers.',
    what: 'This brokerage calculator itemizes every cost incurred in a stock market trade: brokerage commission, Securities Transaction Tax, exchange charges, SEBI fees, GST, and stamp duty. Compare flat-fee discount brokers vs percentage-based traditional brokers.',
    faqs: [
      { q: 'What is the cheapest brokerage in India?', a: 'Discount brokers like Zerodha, Groww charge ₹0 for delivery trades and ₹20 per intraday order. Full-service brokers charge 0.3–0.5% per trade. For investors doing buy-and-hold, free delivery brokerage saves significantly.' },
      { q: 'What charges cannot be avoided when trading?', a: 'STT (0.1% buy+sell for delivery), exchange transaction charges, SEBI turnover fee, GST (18% on brokerage + exchange charges), and stamp duty are mandatory regardless of your broker.' }
    ]
  },
  salarycomparison: {
    desc: 'Compare two salary offers after tax, PF, HRA, and all deductions. See which CTC gives a higher actual in-hand salary.',
    what: 'This salary comparison calculator analyzes two job offers side by side, breaking down CTC into actual take-home pay. Accounts for PF contribution, HRA tax exemption, professional tax, income tax slab, and other standard deductions to reveal the true in-hand difference.',
    faqs: [
      { q: 'Why does a higher CTC sometimes give less in-hand?', a: 'Companies with higher basic pay (60% of CTC) deduct more PF (12% of basic), reducing take-home. A ₹15L CTC with 60% basic gives less in-hand than ₹14L CTC with 40% basic in many cases.' },
      { q: 'What factors beyond salary should I compare?', a: 'Consider ESOPs (potential upside), gratuity vesting (5 years), health insurance coverage (₹5L vs ₹10L), work-from-home policy (saves commute costs), and location (metro cost of living varies 20–40%).' }
    ]
  }
};
