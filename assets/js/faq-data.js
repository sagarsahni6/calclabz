/* ═══════════════════════════════════════════════════
   Calc Labz — faq-data.js
   Rich FAQ data and blog category config.
   Separated from app.js for maintainability.
   ═══════════════════════════════════════════════════ */
'use strict';
var RICH_FAQS = {
    emi: [
        {q:'What is EMI and how is it calculated?',a:'EMI (Equated Monthly Installment) is a fixed payment made by a borrower to a lender each month. It is calculated using: EMI = P × r × (1+r)^n / ((1+r)^n - 1), where P = principal, r = monthly rate, n = tenure in months.'},
        {q:'How does prepayment reduce my total interest?',a:'Prepaying even a small amount each year reduces the outstanding principal, which means less interest accrues. A 5% annual prepayment can save 15-20% of total interest and shorten the loan by several years.'},
        {q:'Fixed vs floating interest rate — which is better?',a:'Fixed rates give predictable EMIs but are usually 1-2% higher. Floating rates change with market conditions and are ideal when rates are expected to fall. Most experts recommend floating for long tenures.'},
        {q:'Can I reduce my EMI amount?',a:'Yes — you can increase tenure (lower EMI but more interest), negotiate a lower rate, make prepayments to reduce principal, or opt for a step-down EMI plan.'},
        {q:'What is the ideal EMI-to-income ratio?',a:'Financial experts recommend keeping your total EMI obligations below 40% of your monthly income. Banks typically approve loans where EMI is 45-50% of income.'},
        {q:'Is this EMI calculator accurate?',a:'Yes, it uses the standard reducing-balance formula used by all Indian banks and NBFCs. Results match those from SBI, HDFC, ICICI calculators.'}
    ],
    sip: [
        {q:'What is SIP and how does it work?',a:'SIP (Systematic Investment Plan) lets you invest a fixed amount in mutual funds monthly. It leverages rupee-cost averaging — buying more units when prices are low, fewer when high — reducing risk over time.'},
        {q:'How much can ₹5,000/month grow in 20 years?',a:'At 12% annual returns, ₹5,000/month for 20 years becomes approximately ₹49.5 lakhs. Your total investment of ₹12 lakhs grows nearly 4x through compounding.'},
        {q:'SIP vs lumpsum — which gives better returns?',a:'Historically, SIP outperforms lumpsum during volatile markets due to rupee-cost averaging. Lumpsum can outperform in consistently rising markets. SIP is safer for most investors.'},
        {q:'What is the power of compounding in SIP?',a:'Compounding means you earn returns on your returns. In a 20-year SIP, ~70% of your final corpus comes from compounding gains, not your actual investment.'},
        {q:'Can I stop or modify my SIP?',a:'Yes, most mutual funds allow you to pause, increase, decrease, or stop your SIP anytime with no penalty. You can also set up a step-up SIP that increases automatically each year.'},
        {q:'Is SIP risk-free?',a:'No investment is risk-free. However, SIP reduces risk through diversification and rupee-cost averaging. Equity SIPs held for 7+ years have historically never given negative returns in India.'}
    ],
    gst: [
        {q:'What is GST and how many types are there?',a:'GST (Goods and Services Tax) has 4 components: CGST (Central), SGST (State), IGST (Integrated for inter-state), and Cess. Common rates are 5%, 12%, 18%, and 28%.'},
        {q:'How is GST calculated on a product?',a:'GST Amount = Net Price × GST Rate / 100. For a ₹1,000 item at 18% GST: GST = ₹180, total = ₹1,180. For intra-state sales, it splits equally into CGST (₹90) and SGST (₹90).'},
        {q:'What is the difference between CGST, SGST and IGST?',a:'CGST goes to the Central Government, SGST to the State Government — both apply on intra-state sales. IGST applies on inter-state sales and goes to the Central Government.'},
        {q:'Can I claim GST input tax credit?',a:'Yes, registered businesses can claim ITC on purchases against their output GST liability, effectively paying tax only on value addition.'},
        {q:'Is this GST calculator accurate for all items?',a:'Yes, this calculator accurately computes GST at any rate. However, some items have special rates or exemptions — always verify the applicable rate for your specific item.'}
    ],
    bmi: [
        {q:'What is BMI and what does it measure?',a:'BMI (Body Mass Index) = weight (kg) / height² (m²). It estimates body fat based on height and weight. BMI categories: Underweight (<18.5), Normal (18.5-24.9), Overweight (25-29.9), Obese (30+).'},
        {q:'Is BMI accurate for everyone?',a:'BMI has limitations — it doesn\'t distinguish between muscle and fat. Athletes may show "overweight" BMI despite low body fat. It\'s less accurate for children, elderly, and pregnant women.'},
        {q:'What is a healthy BMI range?',a:'A BMI of 18.5 to 24.9 is considered normal. For Asian populations, some experts suggest a stricter range of 18.5 to 22.9 due to higher metabolic risk at lower BMIs.'},
        {q:'How can I improve my BMI?',a:'For overweight: reduce caloric intake by 500 cal/day, exercise 150 min/week, increase protein and fiber. For underweight: increase caloric intake with nutrient-dense foods, strength training, and adequate sleep.'},
        {q:'BMI vs body fat percentage — what\'s better?',a:'Body fat percentage is more accurate but harder to measure. BMI is a quick screening tool. For comprehensive health assessment, combine BMI with waist circumference and body fat measurements.'}
    ],
    tip: [
        {q:'How much should I tip?',a:'Standard tipping: 15-20% for good service in restaurants, 10% for takeout, 15-20% for delivery, 20%+ for exceptional service. In India, 10% is common.'},
        {q:'Should I tip on the pre-tax or post-tax amount?',a:'Traditionally, you tip on the pre-tax (subtotal) amount. However, tipping on the total (post-tax) is also common and simpler to calculate.'},
        {q:'How do I split a bill with tip?',a:'This calculator automatically divides the total (bill + tip) evenly among the number of people you specify, making group dining math effortless.'}
    ]
};

var BLOG_CAT_COLORS = {'Finance':'#6366f1','Tax':'#f59e0b','Health':'#10b981','Math':'#8b5cf6','Education':'#06b6d4','Lifestyle':'#f0544f'};
var BLOG_CAT_ICONS = {'Finance':'fa-chart-line','Tax':'fa-landmark','Health':'fa-heart-pulse','Math':'fa-calculator','Education':'fa-graduation-cap','Lifestyle':'fa-sun'};

