// ═══════════════════════════════════════════════════
// Calc Labz — Formula Definitions for ALL Calculators
// Used by the "How is this calculated?" accordion
// ═══════════════════════════════════════════════════

const CALC_FORMULAS = {

// ── FINANCE ──────────────────────────────────────
emi: {
    formula: "EMI = P × r × (1+r)ⁿ / ((1+r)ⁿ − 1)",
    variables: "P = Principal loan amount | r = Monthly interest rate (annual/12/100) | n = Total months",
    explanation: "Equated Monthly Installment formula. Distributes principal + interest evenly across the loan tenure."
},
sip: {
    formula: "FV = P × ((1+r)ⁿ − 1) / r × (1+r)",
    variables: "P = Monthly SIP amount | r = Monthly return rate | n = Total months",
    explanation: "Future Value of annuity-due formula. The extra (1+r) is because SIP is paid at the start of each month."
},
fd: {
    formula: "M = P × (1 + r/n)^(n×t)",
    variables: "P = Principal | r = Annual rate | n = Compounding frequency | t = Years",
    explanation: "Compound interest formula for fixed deposits. Indian banks typically compound quarterly."
},
ppf: {
    formula: "FV = P × ((1+r)ⁿ − 1) / r × (1+r)",
    variables: "P = Annual deposit | r = Annual interest rate | n = Number of years (15)",
    explanation: "Future value of annuity-due (deposits at beginning of year). PPF compounds annually with a 15-year lock-in under Section 80C. The extra (1+r) factor accounts for beginning-of-period deposits."
},
gst: {
    formula: "GST = Base Price × Rate/100 | Total = Base + GST",
    variables: "Base Price = Pre-tax amount | Rate = GST slab (5%, 12%, 18%, 28%)",
    explanation: "GST is split equally as CGST + SGST for intra-state, or charged as IGST for inter-state transactions."
},
incometax: {
    formula: "Tax = Σ (Slab × Rate) + 4% Cess",
    variables: "Slab rates vary by regime | Cess = 4% Health & Education cess on total tax",
    explanation: "Progressive tax slabs — each income bracket is taxed at its own rate. Rebate u/s 87A applies for income ≤ ₹12L (new regime)."
},
swp: {
    formula: "Remaining = Corpus × (1+r)ⁿ − W × ((1+r)ⁿ − 1) / r",
    variables: "Corpus = Initial investment | r = Monthly return | W = Monthly withdrawal | n = Months",
    explanation: "Systematic Withdrawal Plan depletes corpus over time while it continues to earn returns."
},
tds: {
    formula: "TDS = Payment Amount × TDS Rate / 100",
    variables: "TDS Rate = Rate based on section (194A, 194H, 194I, etc.)",
    explanation: "Tax Deducted at Source — payer deducts tax before making payment and deposits with government."
},
epf: {
    formula: "Corpus = Monthly × ((1+r)ⁿ − 1) / r × (1+r)",
    variables: "Employee = 12% of Basic | Employer (EPF) = 3.67% of Basic | r = Monthly rate | n = Months",
    explanation: "Employee and employer both contribute. Employer's 8.33% goes to EPS (pension), 3.67% to EPF."
},
profitloss: {
    formula: "Profit = Sell Price − Cost Price | Margin = Profit / Sell × 100",
    variables: "Markup % = (Profit/Cost) × 100 | Margin % = (Profit/Sell) × 100",
    explanation: "Markup is based on cost price, margin is based on selling price. They give different percentages."
},
stockreturn: {
    formula: "Net P&L = (Sell × Qty − Brokerage) − (Buy × Qty + Brokerage) − STT",
    variables: "STT = Securities Transaction Tax (0.1% both sides) | Brokerage = per trade fee",
    explanation: "Total return after accounting for brokerage on both legs and STT on turnover."
},
mutualfundreturns: {
    formula: "CAGR = (Current NAV / Buy NAV)^(1/years) − 1",
    variables: "NAV = Net Asset Value | Units = Number of fund units held",
    explanation: "CAGR smooths out volatility to show annualized return over the holding period."
},
hra: {
    formula: "HRA Exemption = min(Actual HRA, Rent−10%Basic, 50%/40% Basic)",
    variables: "50% for metro cities (Mumbai/Delhi/Kolkata/Chennai) | 40% for non-metro",
    explanation: "Exemption under Section 10(13A) is the minimum of three rules. Taxable HRA = Total HRA − Exemption."
},
taxregime: {
    formula: "Old Tax = Slabs on (Income − Deductions) | New Tax = Slabs on (Income − 75K)",
    variables: "Old: 5/20/30% slabs with 80C,80D,24B deductions | New: 5-30% graduated slabs, no deductions",
    explanation: "Compare both regimes to find which saves more tax. New regime has lower rates but no deductions."
},
cagr: {
    formula: "CAGR = (End Value / Begin Value)^(1/n) − 1",
    variables: "End Value = Final amount | Begin Value = Initial amount | n = Years",
    explanation: "Compound Annual Growth Rate — smooths year-on-year volatility for fair comparison."
},
capitalgains: {
    formula: "Tax = Gain × Tax Rate (STCG: 20% equity / slab for others; LTCG: 12.5%)",
    variables: "LTCG threshold: 12 months (equity), 24 months (property/debt) | Exemption: ₹1.25L on equity LTCG",
    explanation: "Capital gains tax depends on asset type and holding period. Equity LTCG above ₹1.25L taxed at 12.5%."
},
prepayment: {
    formula: "Interest Saved = Total Interest (before) − Total Interest (after prepayment)",
    variables: "New Principal = Outstanding − Lump Sum | EMI remains same, tenure reduces",
    explanation: "Lump-sum prepayment reduces principal, saving significant interest over remaining tenure."
},
creditcard: {
    formula: "Monthly Interest = Balance × APR / 12 / 100",
    variables: "APR = Annual Percentage Rate | Min Payment = usually 5% of balance",
    explanation: "Revolving credit compounds monthly. Paying only minimum leads to years of interest payments."
},
stepupsip: {
    formula: "FV = Σ [SIP_y × ((1+r)^(12) − 1) / r × (1+r)^(remaining months)]",
    variables: "SIP_y = SIP in year y (increases by step-up %) | r = Monthly return rate",
    explanation: "Each year's SIP amount increases by the step-up percentage, accelerating wealth creation."
},
savingsgoal: {
    formula: "Monthly = (Goal − Current×(1+r)ⁿ) × r / ((1+r)ⁿ − 1)",
    variables: "Goal = Target amount | Current = Existing savings | r = Monthly rate | n = Months",
    explanation: "Calculates the monthly savings needed after accounting for growth of existing savings."
},
dividendyield: {
    formula: "Yield = (Annual Dividend / Stock Price) × 100",
    variables: "Payout Ratio = Dividend / EPS × 100 | Annual Income = Dividend × Shares",
    explanation: "Dividend yield shows annual return from dividends alone, independent of capital gains."
},
goldinvestment: {
    formula: "Buy Cost = (Rate/10g) × Grams × (1 + Making%/100)",
    variables: "Current Value = (Current Rate/10g) × Grams | Profit = Current − Buy Cost",
    explanation: "Making charges add to the purchase cost and reduce effective returns on gold jewelry."
},
rd: {
    formula: "M = P × ((1+r)ⁿ − 1) / r × (1+r)",
    variables: "P = Monthly deposit | r = Quarterly rate (annual/4/100) | n = Quarters (months/3)",
    explanation: "RD interest is compounded quarterly in India. Each installment earns interest for remaining tenure."
},
xirr: {
    formula: "XIRR = (Current Value / Invested)^(12/months) − 1",
    variables: "Invested = Total amount put in | Current = Portfolio value today | months = Duration",
    explanation: "XIRR annualizes returns for irregular cash flows. Better than absolute return for comparison."
},
loaneligibility: {
    formula: "Max Loan = Max EMI × ((1+r)ⁿ − 1) / (r × (1+r)ⁿ)",
    variables: "Max EMI = (Income − Existing EMIs) × 50% | FOIR = Fixed Obligation to Income Ratio",
    explanation: "Banks cap total EMIs at 50-60% of net income. Higher credit score improves eligibility."
},
balancetransfer: {
    formula: "Savings = Interest(Old Rate) − Interest(New Rate) − Processing Fee",
    variables: "Break-even = Processing Fee / Monthly Interest Difference",
    explanation: "Transfer is beneficial only if net interest savings exceed the processing fee charged."
},
ssy: {
    formula: "Maturity = Deposit × (1+r)^15 (compounded annually, 15yr deposit + growth till 21)",
    variables: "r = SSY interest rate | Deposit for 15 years, matures when girl turns 21",
    explanation: "Sukanya Samriddhi is EEE — exempt on investment (80C), interest, and maturity."
},
scss: {
    formula: "Quarterly Interest = Principal × Rate / 4 / 100",
    variables: "Principal = max ₹30L | Tenure = 5 years | Interest paid quarterly",
    explanation: "SCSS pays quarterly interest (not compounded). Principal returned at maturity after 5 years."
},
advancetax: {
    formula: "Advance Tax = Total Tax − TDS | Paid in 4 installments (15%, 45%, 75%, 100%)",
    variables: "Q1: Jun 15 (15%) | Q2: Sep 15 (45%) | Q3: Dec 15 (75%) | Q4: Mar 15 (100%)",
    explanation: "Required if total tax liability exceeds ₹10,000. Interest u/s 234C for late payment."
},
inhandsalary: {
    formula: "In-Hand = CTC − PF(Employee) − PF(Employer) − Professional Tax − Other Deductions",
    variables: "Basic = CTC × Basic% | PF = Basic × 12% | HRA = Basic × HRA%",
    explanation: "CTC includes employer PF and gratuity which don't come to your bank account."
},
ctcbreakup: {
    formula: "Monthly In-Hand = (CTC − Bonus − Gratuity − PF_Er − Insurance) / 12 − PF_Emp − PT",
    variables: "Gratuity = Basic × 15/26 | PF_Er = min(Basic, 15000×12) × 12%",
    explanation: "CTC includes all employer costs. Actual in-hand is significantly lower after all deductions."
},
salarycomparison: {
    formula: "CTC Hike % = (New CTC − Old CTC) / Old CTC × 100",
    variables: "Fixed Pay = CTC × (1 − Bonus%) − PF | Monthly = Fixed / 12",
    explanation: "Compare fixed monthly pay, not just CTC. Higher variable means less guaranteed salary."
},
goalsip: {
    formula: "SIP = (Goal − Existing×(1+r)ⁿ) × r / ((1+r)ⁿ−1) / (1+r)",
    variables: "Goal = Target amount | r = Monthly return | n = months | Existing = Current corpus",
    explanation: "Calculates exact monthly SIP needed, accounting for existing investments growing over time."
},
elssreturns: {
    formula: "FV = SIP × ((1+r)ⁿ − 1) / r × (1+r) | Tax Saved = min(Investment, 1.5L) × Slab%",
    variables: "LTCG Tax = (Gains − 1.25L) × 12.5% | Lock-in = 3 years",
    explanation: "ELSS gives dual benefit — equity market returns plus Section 80C tax deduction."
},
nsc: {
    formula: "Maturity = Principal × (1 + r)^n",
    variables: "r = NSC annual rate | n = 5 years | Interest compounded annually, paid at maturity",
    explanation: "NSC interest is reinvested and also qualifies for 80C deduction (except last year)."
},
apy: {
    formula: "Contribution based on age and desired pension (government-fixed table)",
    variables: "Pension options: ₹1K–₹5K/month | Entry age: 18–40 | Pension starts at 60",
    explanation: "APY guarantees fixed monthly pension after 60. Spouse inherits pension, nominee gets corpus."
},
brokerage: {
    formula: "Net P&L = (Sell − Buy) × Qty − Brokerage − STT − Exchange − GST − SEBI − Stamp",
    variables: "STT varies by trade type | GST = 18% on (Brokerage + Exchange charges)",
    explanation: "Multiple charges eat into trading profits. Break-even price includes all transaction costs."
},
taxsaving: {
    formula: "Tax Saved = (80C + 80CCD + 80D + 24B) × Tax Slab Rate",
    variables: "80C max ₹1.5L | 80CCD(1B) max ₹50K | 80D max ₹75K | 24B max ₹2L",
    explanation: "Optimize deductions to minimize tax. Fill 80C first, then NPS for extra ₹50K deduction."
},
retirementcorpus: {
    formula: "Corpus = Future Annual Expense × (1 − (1+real_r)^−years) / real_r",
    variables: "real_r = (1+return)/(1+inflation) − 1 | Future Expense = Current × (1+inflation)^years",
    explanation: "Accounts for inflation eroding purchasing power. Rule of thumb: need 25-30× annual expenses."
},
loanaffordability: {
    formula: "Max Loan = Max EMI × ((1+r)ⁿ − 1) / (r × (1+r)ⁿ) | Max Price = Loan + Down Payment",
    variables: "Max EMI = 40% of gross monthly income | r = monthly rate | n = tenure months",
    explanation: "Banks typically allow EMI up to 40% of gross income. Down payment adds to buying capacity."
},

// ── HEALTH ───────────────────────────────────────
bmi: {
    formula: "BMI = Weight (kg) / Height² (m²)",
    variables: "Weight in kilograms | Height in meters | Normal range: 18.5–24.9",
    explanation: "Body Mass Index is a screening tool. It doesn't distinguish between muscle and fat mass."
},
bmr: {
    formula: "BMR (Mifflin) = 10×W + 6.25×H − 5×A + S (S = +5 male, −161 female)",
    variables: "W = Weight (kg) | H = Height (cm) | A = Age (years) | TDEE = BMR × Activity multiplier",
    explanation: "Basal Metabolic Rate — calories your body burns at complete rest. TDEE includes daily activity."
},
waisthip: {
    formula: "WHR = Waist Circumference / Hip Circumference",
    variables: "Low risk: ≤0.90 (male), ≤0.80 (female) | High risk: >0.95 (male), >0.85 (female)",
    explanation: "Waist-to-hip ratio is a better predictor of cardiovascular risk than BMI alone."
},
ibw: {
    formula: "IBW (Devine) = 50 + 2.3 × (height_inches − 60) [Male] | 45.5 + 2.2 × (height_inches − 60) [Female]",
    variables: "Frame adjustment: Small −10%, Medium 0%, Large +10% | Healthy range: ±10%",
    explanation: "Ideal Body Weight varies by formula. Devine formula is most widely used in clinical practice."
},
vitamins: {
    formula: "Score = Sun Exposure Base × Skin Tone Multiplier × Age Multiplier",
    variables: "Optimal Vitamin D: 40–60 ng/mL | Deficient: <20 ng/mL | Insufficient: 20–30 ng/mL",
    explanation: "Estimation only. Darker skin produces less vitamin D. Blood test (25-OH) is the gold standard."
},
lungcapacity: {
    formula: "FVC (Male) = 0.057×H − 0.022×A − 4.241 | FVC (Female) = 0.041×H − 0.018×A − 2.690",
    variables: "H = Height (cm) | A = Age (years) | FEV1/FVC > 70% is normal",
    explanation: "Forced Vital Capacity prediction. Actual spirometry test is needed for diagnosis."
},
bodyfat: {
    formula: "BF% (Male) = 495 / (1.0324 − 0.19077×log(W−N) + 0.15456×log(H)) − 450",
    variables: "W = Waist (cm) | N = Neck (cm) | H = Height (cm) | Hip added for females",
    explanation: "US Navy method using body measurements. DEXA scan gives most accurate body fat reading."
},
bloodpressure: {
    formula: "MAP = Diastolic + (Systolic − Diastolic) / 3 | Pulse Pressure = Systolic − Diastolic",
    variables: "Normal: <120/80 | Elevated: 120-129/<80 | Stage 1: 130-139/80-89 | Stage 2: ≥140/≥90",
    explanation: "Mean Arterial Pressure (MAP) of 70–100 mmHg is needed for adequate organ perfusion."
},
proteinintake: {
    formula: "Daily Protein = Weight × Activity Multiplier × Goal Multiplier",
    variables: "Sedentary: 0.8g/kg | Active: 1.2g/kg | Muscle building: 1.6–2.0g/kg",
    explanation: "RDA minimum is 0.8g/kg. Athletes and those building muscle need significantly more."
},
smokingcost: {
    formula: "Annual Cost = (Cigarettes/Day ÷ 20) × Pack Price × 365",
    variables: "Total Spent = Annual Cost × Years | If Invested = Total × (1.12)^years",
    explanation: "Shows financial impact of smoking. Each cigarette also reduces lifespan by ~11 minutes."
},
childheight: {
    formula: "Height (Boy) = (Father + Mother) / 2 + 6.5 cm | (Girl) = (Father + Mother) / 2 − 6.5 cm",
    variables: "Mid-parent height = average of parents | Range = ±8.5 cm",
    explanation: "Khamis-Roche method. Genetics accounts for ~80% of adult height; nutrition affects the rest."
},
diabetesrisk: {
    formula: "Risk Score = Age points + BMI points + Waist points + Family points + Activity points",
    variables: "Score 0–3: Low | 4–8: Moderate | 9–12: High | 13+: Very High",
    explanation: "ADA-based screening score. Not a diagnosis — HbA1c blood test is needed for confirmation."
},
sleepdebt: {
    formula: "Sleep Debt = (Hours Needed − Hours Slept) × Days",
    variables: "Recovery: max ~2 extra hrs/night | Severe debt (>14 hrs) impacts cognition significantly",
    explanation: "Chronic sleep debt accumulates and cannot be fully repaid in a single night."
},
ovulation: {
    formula: "Ovulation Day = Last Period Date + Cycle Length − Luteal Phase",
    variables: "Fertile window: Ovulation Day −5 to +1 | Luteal phase: typically 14 days",
    explanation: "Estimation based on average cycle. Actual ovulation can vary. LH test strips are more accurate."
},
anemia: {
    formula: "Status based on Hemoglobin vs. threshold for age/gender group",
    variables: "Normal: Male ≥13, Female ≥12, Pregnant ≥11, Child ≥11.5 g/dL",
    explanation: "Hemoglobin below threshold indicates anemia. Severity: mild (−1), moderate (−3), severe (>−3)."
},
bsa: {
    formula: "BSA (Mosteller) = √(Weight × Height / 3600)",
    variables: "DuBois: 0.007184 × W^0.425 × H^0.725 | Normal adult: 1.6–2.0 m²",
    explanation: "Body Surface Area is used for drug dosing (especially chemotherapy) and burn assessment."
},
cholesterolratio: {
    formula: "Total/HDL Ratio = Total Cholesterol / HDL | LDL/HDL = LDL / HDL",
    variables: "Ideal Total/HDL: <3.5 | Ideal LDL/HDL: <2.5 | VLDL = Triglycerides / 5",
    explanation: "Ratios are better risk predictors than individual numbers. High HDL is protective."
},
caloriedeficit: {
    formula: "BMR = 10×W + 6.25×H − 5×A + S | TDEE = BMR × Activity | Deficit = TDEE − Target",
    variables: "1 kg fat ≈ 7,700 kcal | Safe loss: 0.5 kg/week = 550 kcal/day deficit",
    explanation: "Mifflin-St Jeor equation for BMR. Never go below 1200 kcal (women) or 1500 kcal (men)."
},

// ── MATH ─────────────────────────────────────────
percentage: {
    formula: "Result = (Value × Percentage) / 100",
    variables: "Value = Base number | Percentage = Rate to calculate",
    explanation: "Percentage means 'per hundred'. Used for discounts, tax, tips, and growth calculations."
},
ageCalc: {
    formula: "Age = Current Date − Date of Birth",
    variables: "Years, months, days computed from calendar difference",
    explanation: "Calculates exact age accounting for varying month lengths and leap years."
},
quadratic: {
    formula: "x = (−b ± √(b² − 4ac)) / 2a",
    variables: "a = coefficient of x² | b = coefficient of x | c = constant | Δ = b²−4ac (discriminant)",
    explanation: "Quadratic formula solves ax²+bx+c=0. Discriminant determines: 2 real, 1 repeated, or complex roots."
},
compound_interest: {
    formula: "A = P × (1 + r/n)^(n×t)",
    variables: "P = Principal | r = Annual rate | n = Compounds per year | t = Years",
    explanation: "Compound interest earns interest on interest. More frequent compounding yields slightly more."
},
statistics: {
    formula: "Mean = Σx/n | Variance = Σ(x−μ)²/n | Std Dev = √Variance",
    variables: "μ = Population mean | σ = Standard deviation | CV = σ/μ × 100",
    explanation: "Standard deviation measures data spread. 68% of data falls within ±1σ of mean (normal distribution)."
},
matrix2x2: {
    formula: "det(A) = ad − bc | Inverse = (1/det) × [d, −b; −c, a]",
    variables: "Matrix [[a,b],[c,d]] | Trace = a + d | Rank = 2 if det≠0",
    explanation: "Determinant tells if matrix is invertible. Zero determinant means singular (no inverse)."
},
combinations: {
    formula: "C(n,r) = n! / (r! × (n−r)!) | P(n,r) = n! / (n−r)!",
    variables: "n = Total items | r = Items chosen | Probability = Favorable / Total outcomes",
    explanation: "Combinations ignore order (choosing), permutations consider order (arranging)."
},
lcmgcd: {
    formula: "GCD = Euclidean algorithm | LCM = |a×b| / GCD(a,b)",
    variables: "GCD = Greatest Common Divisor (HCF) | LCM = Least Common Multiple",
    explanation: "GCD is largest number dividing both. LCM is smallest number divisible by both. LCM × GCD = a × b."
},
romanNumeral: {
    formula: "Subtractive notation: IV=4, IX=9, XL=40, XC=90, CD=400, CM=900",
    variables: "I=1 | V=5 | X=10 | L=50 | C=100 | D=500 | M=1000",
    explanation: "Roman numerals use subtractive principle — smaller value before larger means subtraction."
},
triangleArea: {
    formula: "Area = √(s(s−a)(s−b)(s−c)) where s = (a+b+c)/2",
    variables: "a, b, c = Side lengths | s = Semi-perimeter | Angles via cosine rule",
    explanation: "Heron's formula calculates area from three sides. Triangle inequality: sum of any two sides > third."
},
scientific: {
    formula: "sin, cos, tan, √x, x², ln(x), log₁₀(x), eˣ",
    variables: "Angle can be in degrees or radians | 180° = π radians",
    explanation: "Trigonometric and logarithmic functions. Convert degrees to radians: multiply by π/180."
},
fraction: {
    formula: "a/b + c/d = (ad + bc) / bd | a/b × c/d = ac / bd",
    variables: "Simplify by dividing numerator and denominator by their GCD",
    explanation: "For addition/subtraction, find common denominator. For multiplication, multiply straight across."
},
stddev: {
    formula: "σ = √(Σ(xᵢ − μ)² / N) | s = √(Σ(xᵢ − x̄)² / (N−1))",
    variables: "σ = Population std dev | s = Sample std dev | μ = Mean | N = Count",
    explanation: "Population divides by N, sample divides by N−1 (Bessel's correction for unbiased estimate)."
},
lineareq: {
    formula: "ax + b = c → x = (c − b) / a",
    variables: "a = Coefficient of x | b = Constant | c = Right-hand side",
    explanation: "Isolate x by subtracting b from both sides, then dividing by a. No solution if a=0 and b≠c."
},
circleCalc: {
    formula: "Area = πr² | Circumference = 2πr | Sphere Volume = (4/3)πr³",
    variables: "r = Radius | Arc Length = 2πr × θ/360 | Sector Area = πr² × θ/360",
    explanation: "π ≈ 3.14159. All circle and sphere formulas derive from the radius."
},
determinant: {
    formula: "det = a₁₁(a₂₂a₃₃−a₂₃a₃₂) − a₁₂(a₂₁a₃₃−a₂₃a₃₁) + a₁₃(a₂₁a₃₂−a₂₂a₃₁)",
    variables: "Cofactor expansion along first row | Trace = a₁₁ + a₂₂ + a₃₃",
    explanation: "3×3 determinant by cofactor expansion. Matrix is invertible only if determinant ≠ 0."
},
complexnum: {
    formula: "(a+bi) × (c+di) = (ac−bd) + (ad+bc)i | |z| = √(a²+b²)",
    variables: "a,b = Real and imaginary parts | |z| = Magnitude | θ = Argument = atan2(b,a)",
    explanation: "Complex number operations follow FOIL with i²=−1. Division uses conjugate multiplication."
},

// ── SCIENCE ──────────────────────────────────────
speed_dist: {
    formula: "Speed = Distance / Time | Distance = Speed × Time | Time = Distance / Speed",
    variables: "Speed in km/h or m/s | 1 km/h = 1/3.6 m/s",
    explanation: "Set one value to 0 to solve for it. The SDT triangle helps visualize relationships."
},
newtons: {
    formula: "F = m × a | KE = ½mv² | p = m × v",
    variables: "F = Force (N) | m = Mass (kg) | a = Acceleration (m/s²) | v = Velocity (m/s)",
    explanation: "Newton's Second Law. Weight = mass × gravity. Momentum is conserved in collisions."
},
ohm_advanced: {
    formula: "Series: R_total = R₁+R₂+R₃ | Parallel: 1/R_total = 1/R₁+1/R₂+1/R₃",
    variables: "I = V/R (Ohm's Law) | P = V×I = I²R = V²/R (Power)",
    explanation: "Series adds resistance, parallel reduces it. Power dissipation determines component ratings."
},
density: {
    formula: "ρ = m / V | m = ρ × V | V = m / ρ",
    variables: "ρ = Density (g/cm³ or kg/m³) | m = Mass | V = Volume | Water ρ = 1 g/cm³",
    explanation: "Objects with density < 1 g/cm³ float in water. Convert: 1 g/cm³ = 1000 kg/m³."
},
chemMolar: {
    formula: "Mass = Moles × Molar Mass | Molarity = Moles / Volume(L)",
    variables: "1 mole = 6.022 × 10²³ particles (Avogadro's number) | Molar mass in g/mol",
    explanation: "Molarity (M) is moles per liter of solution. Key for stoichiometry and dilution calculations."
},
wavelength: {
    formula: "λ = v / f | T = 1 / f | E = h × f",
    variables: "λ = Wavelength | v = Wave speed | f = Frequency | T = Period | h = Planck's constant",
    explanation: "Wave speed = wavelength × frequency. For light in vacuum, v = 3×10⁸ m/s. For sound at 20°C, v ≈ 343 m/s."
},
gravitational: {
    formula: "F = G × m₁ × m₂ / r²",
    variables: "G = 6.674×10⁻¹¹ N·m²/kg² | m₁,m₂ = Masses | r = Distance between centers",
    explanation: "Newton's law of universal gravitation. Escape velocity = √(2GM/r)."
},
halflife: {
    formula: "N(t) = N₀ × (½)^(t/t½)",
    variables: "N₀ = Initial quantity | t = Elapsed time | t½ = Half-life period",
    explanation: "After each half-life, exactly half the radioactive atoms remain. Carbon-14 t½ = 5,730 years."
},
ph: {
    formula: "pH = −log₁₀[H⁺] | pOH = 14 − pH",
    variables: "[H⁺] = Hydrogen ion concentration (mol/L) | pH 7 = Neutral",
    explanation: "pH scale: 0–14. Each unit = 10× change in H⁺ concentration. pH < 7 = acid, > 7 = base."
},
kinematicCalc: {
    formula: "v = u + at | s = ut + ½at² | v² = u² + 2as",
    variables: "u = Initial velocity | v = Final velocity | a = Acceleration | t = Time | s = Distance",
    explanation: "SUVAT equations for constant acceleration. Used for projectile motion and free fall."
},
thermodynamics: {
    formula: "PV = nRT | Boyle: P₁V₁ = P₂V₂ | Charles: V₁/T₁ = V₂/T₂",
    variables: "P = Pressure | V = Volume | n = Moles | R = 0.0821 L·atm/mol·K | T = Temperature (K)",
    explanation: "Ideal gas law relates pressure, volume, temperature and amount. R is the universal gas constant."
},
acceleration: {
    formula: "a = (v − u) / t | s = ut + ½at²",
    variables: "a = Acceleration (m/s²) | G-force = a / 9.81 | 1g = 9.81 m/s²",
    explanation: "Negative acceleration = deceleration. G-force measures acceleration relative to gravity."
},

// ── CONSTRUCTION ─────────────────────────────────
concrete: {
    formula: "Volume = L × W × D | Dry Volume = Wet × 1.54",
    variables: "Mix ratios — M15: 1:2:4 | M20: 1:1.5:3 | M25: 1:1:2 | Cement bag = 50 kg",
    explanation: "Dry volume is 54% more than wet due to air voids. Cement bags = (Dry Vol × Cement Ratio / Sum) × 1440 / 50."
},
bricks: {
    formula: "Bricks = (Wall Volume / Brick Volume) × 1.05",
    variables: "Wall Volume = L × H × Thickness | 5% added for wastage/breakage",
    explanation: "Mortar volume = Wall volume − Total brick volume. Standard brick: 230×115×76mm."
},
paint: {
    formula: "Paint (L) = (Wall Area − Deductions) × Coats / Coverage",
    variables: "Wall Area = 2(L+W) × H | Door ≈ 1.89 m² | Window ≈ 1.2 m² | Coverage ≈ 12 m²/L",
    explanation: "Always subtract doors and windows. Two coats is standard, primer is one additional coat."
},
flooring: {
    formula: "Tiles = (Room Area / Tile Area) × 1.10",
    variables: "Room Area = L × W | Tile Area = TileL × TileW (convert mm to m) | 10% wastage",
    explanation: "10% extra for cutting waste, breakage, and pattern matching. Buy all from same batch for color consistency."
},
steel: {
    formula: "Weight per meter = D² / 162 (kg/m)",
    variables: "D = Bar diameter (mm) | Total = Weight/m × Length × Count",
    explanation: "D²/162 is the standard formula for steel bar weight. Derived from steel density of 7850 kg/m³."
},
roofing: {
    formula: "Actual Area = Plan Area × 2 × Slope Factor | Slope = 1/cos(pitch)",
    variables: "Sheets = Area / Sheet Coverage × 1.10 | Ridge caps = Length / 1.8m",
    explanation: "Roof slope increases actual surface area. 10% extra for overlaps and wastage."
},
earthwork: {
    formula: "Bank Volume = L × W × D | Loose Volume = Bank × (1 + Swell%/100)",
    variables: "Swell factor: soil expands 20-30% when excavated | Weight ≈ Vol × 1800 kg/m³",
    explanation: "Loose volume determines truck loads needed. Soil expands when dug up (swell factor)."
},
plasterwork: {
    formula: "Mortar Volume = Area × Thickness/1000 × 1.35",
    variables: "Dry volume factor = 1.35 | Mix ratios: 1:3 (rich), 1:4 (standard), 1:6 (lean)",
    explanation: "35% extra for dry volume conversion. Cement bags = (Dry Vol × C ratio / Sum) × 1440 / 50."
},
waterTank: {
    formula: "Capacity = People × Days × Litres/Person/Day",
    variables: "Per capita: 135 L/day (Indian standard) | Volume in m³ = Litres / 1000",
    explanation: "Standard water requirement is 135 lpcd (litres per capita per day) as per IS 1172."
},
landarea: {
    formula: "Convert to m² first, then to target unit",
    variables: "1 Acre = 4046.86 m² | 1 Hectare = 10000 m² | 1 Bigha (UP) = 2529.3 m²",
    explanation: "Land area units vary by region in India. Always verify local definitions for Bigha, Gunta, etc."
},
stampdutycalc: {
    formula: "Total = Stamp Duty + Registration Fee | Stamp Duty = Property Value × Rate%",
    variables: "Rates vary by state (4-7%) and gender | Registration usually 1% (capped at ₹30K)",
    explanation: "Women buyers get reduced stamp duty in some states. Rates shown are indicative."
},
constructioncost: {
    formula: "Total = Area × Floors × Cost/sqft × Finish Multiplier × City Multiplier + 10% Misc",
    variables: "Base cost varies by city | Finish: Basic(0.85×), Standard(1×), Premium(1.25×), Luxury(1.6×)",
    explanation: "Construction cost per sqft varies significantly by city tier and finishing quality."
},
solarpanel: {
    formula: "Monthly Generation = System kW × 4.5 sun-hours × 30 days",
    variables: "Payback = Cost / Annual Savings | CO₂ saved = Units × 0.82 kg/kWh",
    explanation: "India averages 4-5 peak sun hours/day. Solar panels typically last 25 years with ~0.5%/yr degradation."
},
homerenovation: {
    formula: "Total = Area × Σ(Component Rates) × Quality Multiplier × City Multiplier",
    variables: "Quality: Economy(0.6×), Standard(1×), Premium(1.6×), Luxury(2.5×)",
    explanation: "Get at least 3 contractor quotes. Keep 15-20% buffer for unexpected costs."
},

// ── EVERYDAY ─────────────────────────────────────
caloriesfood: {
    formula: "Total = Protein×4 + Carbs×4 + Fat×9",
    variables: "Protein = 4 kcal/g | Carbs = 4 kcal/g | Fat = 9 kcal/g | Net Carbs = Carbs − Fiber",
    explanation: "Fat has more than double the calories per gram compared to protein and carbs."
},
wiresize: {
    formula: "Area = (2 × ρ × L × I) / Max Drop",
    variables: "ρ = 0.0175 Ω·mm²/m (copper) | L = One-way length | I = Current | Max Drop = V × Drop%",
    explanation: "Wire size must handle current without excessive voltage drop. Standard sizes: 1, 1.5, 2.5, 4, 6, 10 mm²."
},
pixelresolution: {
    formula: "Megapixels = (Width × Height) / 1,000,000 | File Size = W × H × BPP / 8 / 1024²",
    variables: "BPP = Bits per pixel (8/16/24/32) | Print size = Pixels / DPI × 2.54 cm",
    explanation: "DPI (dots per inch) determines print quality. 300 DPI is standard for photo printing."
},
typing_speed: {
    formula: "Reading Time = Words / WPM × 60 seconds",
    variables: "Average reading: 200-250 WPM | Average typing: 40 WPM | Speaking: 130 WPM",
    explanation: "WPM (Words Per Minute) varies by medium. Speaking is slower than reading."
},
emi_extra: {
    formula: "Interest Saved = Normal Total Interest − New Total Interest",
    variables: "New tenure = log(EMI/(EMI−P×r)) / log(1+r) where P = reduced principal",
    explanation: "Extra monthly payment reduces principal faster, shortening tenure and total interest paid."
},
investVsRent: {
    formula: "Future Value = Property × (1 + Appreciation%)^Years | Net Buy Cost = Total EMI − Capital Gain",
    variables: "Better option = Compare Total Rent vs Net Cost of Buying",
    explanation: "Factor in opportunity cost — rent savings could be invested elsewhere for returns."
},
unitPrice: {
    formula: "Unit Price = Total Price / Quantity",
    variables: "Better value = Lower unit price | Saving = |UnitA − UnitB|",
    explanation: "Compare cost per unit (gram, ml, piece) to find the better deal regardless of pack size."
},
petrolParity: {
    formula: "Petrol Annual = (km/year ÷ Mileage) × Fuel Price | EV Annual = (km/year ÷ Range) × Charge Cost",
    variables: "CO₂ per litre petrol ≈ 2.31 kg | EV premium payback = Premium ÷ Annual Saving",
    explanation: "EV running cost is typically 1/5th of petrol. Payback period depends on daily usage."
},
laundry: {
    formula: "Size mapping based on chest circumference ranges",
    variables: "US: XS/S/M/L/XL/XXL | EU: 44-54 | UK: 34-44",
    explanation: "Sizes vary between brands and regions. Always check the specific brand's size chart."
},
networth: {
    formula: "Net Worth = Total Assets − Total Liabilities",
    variables: "Assets = Cash + Investments + Property + Gold + PF | Liabilities = Loans + CC Dues",
    explanation: "Debt-to-asset ratio below 30% indicates strong financial health."
},
weddingbudget: {
    formula: "Total = Catering + Venue + Decor + Photography + Clothes + 15% Misc",
    variables: "City multiplier: Metro(1.5×), Tier-2(1.0×), Tier-3(0.7×)",
    explanation: "Catering is typically the largest expense (40-50% of total budget)."
},
rentafford: {
    formula: "Max Rent = (Salary − Expenses − EMIs − Savings) × 90%",
    variables: "Recommended: Rent ≤ 30% of income | Stretch limit: 40%",
    explanation: "Financial advisors recommend spending no more than 30% of take-home on rent."
},
freelancerate: {
    formula: "Hourly Rate = (Annual Income + Expenses) / (1 − Tax%) / Billable Days / Hours per Day",
    variables: "Billable days ≈ 220/year | Account for taxes, expenses, and non-billable time",
    explanation: "Gross income must cover desired income, business expenses, and taxes."
},
carbonfootprint: {
    formula: "Total CO₂ = Car + Flights + Electricity + Diet emissions",
    variables: "Car: km/mileage × 2.31 kg/L | Flight: ~255 kg/short flight | Grid: 0.82 kg/kWh (India)",
    explanation: "India average carbon footprint is 1.9 tonnes/year, global average is 4 tonnes."
},
cartco: {
    formula: "Annual Cost = EMI×12 + Fuel + Insurance + Maintenance + Depreciation",
    variables: "Depreciation ≈ 15% in Year 1 | Cost/km = Annual Cost / Annual km",
    explanation: "True cost of car ownership is much higher than just EMI. Factor in all running costs."
},
tipsplit: {
    formula: "Per Person = (Bill + Tip + Extra) / Number of People",
    variables: "Tip = Bill × Tip% / 100 | Standard tip in India: 5-10%",
    explanation: "Split the total (bill + tip + any extra charges) equally among all diners."
},
petage: {
    formula: "Dog: varies by size | Cat: 15 (yr1) + 9 (yr2) + 4/yr after",
    variables: "Small dog life: ~16 yrs | Medium: ~13 yrs | Large: ~10 yrs | Cat: ~15 yrs",
    explanation: "Larger dogs age faster. The old '7 years per human year' rule is inaccurate."
},
travelbudget: {
    formula: "Total = Daily Cost × People × Days + Flights + 15% Buffer",
    variables: "Budget: ₹2K/day | Mid-range: ₹5K/day | Luxury: ₹12K/day | International: ₹15K/day",
    explanation: "Always add a 15% buffer for unexpected expenses, tips, and activities."
},
mileage: {
    formula: "km/L = Distance / Fuel Used | L/100km = 100 / (km/L)",
    variables: "MPG (UK) = km/L × 2.825 | Cost/km = Fuel Price / Mileage",
    explanation: "Fill-to-fill method: fill tank, drive, refill and note litres. Most accurate mileage measurement."
},
cooking: {
    formula: "ml = Amount × Conversion Factor | Grams = ml × Density",
    variables: "1 Cup = 240 ml | 1 tbsp = 14.8 ml | 1 tsp = 4.9 ml",
    explanation: "Weight (grams) varies by ingredient density. Flour is lighter than sugar per cup."
},
shoesize: {
    formula: "EU = US_Men × 1.5 + 33 | UK = US_Men − 0.5",
    variables: "US Women = US Men + 1.5 | Foot length (cm) ≈ US × 0.838 + 22.5",
    explanation: "Shoe sizes vary between brands. Always measure foot length in cm for most accurate conversion."
},
stopwatch: {
    formula: "Time = Hours × 3600 + Minutes × 60 + Seconds",
    variables: "Countdown mode: counts down from set time | Stopwatch mode: counts up",
    explanation: "Simple time calculation and conversion between hours, minutes, and seconds."
},
randomnum: {
    formula: "Random = min + Math.random() × (max − min + 1)",
    variables: "Integers: floor the result | Dice: random(1-6) | Coin: random < 0.5",
    explanation: "Uses pseudo-random number generation. Sufficient for most non-cryptographic purposes."
},
evpetrolsavings: {
    formula: "Total Cost = Purchase + Running Cost + Maintenance × Years",
    variables: "EV: ₹1-1.5/km | Petrol: ₹7-8/km | EV maintenance 60% lower",
    explanation: "EV has higher upfront cost but much lower running and maintenance costs over time."
},

// ── UNIT CONVERTERS ──────────────────────────────
temperature: {
    formula: "°F = °C × 9/5 + 32 | K = °C + 273.15",
    variables: "°C = Celsius | °F = Fahrenheit | K = Kelvin | 0°C = 32°F = 273.15K",
    explanation: "Kelvin is the SI unit. Absolute zero = 0K = −273.15°C. No negative Kelvin values exist."
},
length: {
    formula: "Convert to meters, then to target unit",
    variables: "1 km = 1000 m | 1 mile = 1609.34 m | 1 inch = 0.0254 m | 1 foot = 0.3048 m",
    explanation: "Convert through a base unit (meters) for accuracy between any two units."
},
weight: {
    formula: "Convert to kilograms, then to target unit",
    variables: "1 kg = 1000 g = 2.205 lb | 1 lb = 453.6 g | 1 oz = 28.35 g | 1 tonne = 1000 kg",
    explanation: "Mass (kg) is constant everywhere; weight varies with gravity."
},
data_storage: {
    formula: "Convert to bytes, then to target unit",
    variables: "1 KB = 1024 B | 1 MB = 1024 KB | 1 GB = 1024 MB | 1 TB = 1024 GB",
    explanation: "Binary units use powers of 1024. Marketing often uses 1000 (SI), making drives appear larger."
},
pressure: {
    formula: "Convert to Pascals, then to target unit",
    variables: "1 atm = 101325 Pa | 1 bar = 100000 Pa | 1 PSI = 6894.76 Pa",
    explanation: "Pascal is the SI unit of pressure. 1 atm = standard atmospheric pressure at sea level."
},
energy: {
    formula: "Convert to Joules, then to target unit",
    variables: "1 kWh = 3,600,000 J | 1 cal = 4.184 J | 1 BTU = 1055.06 J",
    explanation: "Joule is the SI unit of energy. 1 kWh is what your electricity meter measures."
},
angle: {
    formula: "Radians = Degrees × π/180 | Gradians = Degrees × 10/9",
    variables: "Full circle = 360° = 2π rad = 400 grad = 1 turn",
    explanation: "Radians are natural for calculus and physics. One radian ≈ 57.3°."
},

// ── DATE & TIME ──────────────────────────────────
timezone: {
    formula: "Target Time = Source Time ± UTC Offset Difference",
    variables: "IST = UTC+5:30 | EST = UTC−5 | PST = UTC−8 | GMT = UTC+0",
    explanation: "UTC (Coordinated Universal Time) is the reference. Add/subtract offsets to convert."
},
dateCalc: {
    formula: "Difference = |Date2 − Date1| in days, then convert to years/months/weeks",
    variables: "Leap year: divisible by 4, except centuries unless divisible by 400",
    explanation: "Accounts for varying month lengths (28-31 days) and leap years."
},
workingdays: {
    formula: "Working Days = Calendar Days − Weekends − Holidays",
    variables: "Weekends = Saturdays + Sundays | Net = Working Days − Public Holidays",
    explanation: "Standard work year ≈ 260 days (52 weeks × 5 days). Useful for project planning."
},
agenextbday: {
    formula: "Days Until = Next Birthday Date − Today",
    variables: "Next Birthday = This year or next year (whichever is in the future)",
    explanation: "Calculates exact days remaining and the day of the week your birthday falls on."
},

// ── ENGINEERING ───────────────────────────────────
ledresistor: {
    formula: "R = (V_supply − V_LED) / I_LED",
    variables: "V_LED: Red≈1.8V, Green≈2.2V, Blue/White≈3.2V | I_LED: typically 20mA",
    explanation: "Ohm's law applied to LED circuits. Always use a resistor to limit current through LEDs."
},
voltdivider: {
    formula: "V_out = V_in × R₂ / (R₁ + R₂)",
    variables: "R₁ = Top resistor | R₂ = Bottom resistor | I = V_in / (R₁+R₂)",
    explanation: "Voltage divider reduces voltage proportionally. Output depends on ratio, not absolute values."
},
batterylife: {
    formula: "Hours = (Capacity_mAh × Efficiency%) / Current_draw_mA",
    variables: "LiPo nominal voltage = 3.7V | Energy = Capacity × Voltage",
    explanation: "Actual battery life is always less than theoretical due to efficiency losses and aging."
},
pcbtrace: {
    formula: "Area = (I / (k × ΔT^0.44))^(1/0.725) mils²",
    variables: "k = 0.048 (external) or 0.024 (internal) | Width = Area / Thickness",
    explanation: "IPC-2221 standard. Always add 50% safety margin. Use thicker copper for high-current traces."
},
decibel: {
    formula: "dB (power) = 10 × log₁₀(P₂/P₁) | dB (voltage) = 20 × log₁₀(V₂/V₁)",
    variables: "+3dB ≈ 2× power | +6dB ≈ 2× voltage | 0 dBm = 1 milliwatt",
    explanation: "Decibels are logarithmic ratios. Used for sound, signal power, and gain measurement."
},
antennalen: {
    formula: "λ = c / f | Half-wave dipole = λ/2 | Quarter-wave = λ/4",
    variables: "c = 299,792,458 m/s | f = Frequency (Hz) | Velocity factor = 0.66–1.0",
    explanation: "Antenna length is fraction of wavelength. Velocity factor accounts for wire vs free-space speed."
},
torque: {
    formula: "τ = F × r × sin(θ)",
    variables: "τ = Torque (N·m) | F = Force (N) | r = Moment arm (m) | θ = Angle",
    explanation: "Maximum torque when force is perpendicular (θ=90°). Power = τ × angular velocity."
},

// ── EDUCATION ────────────────────────────────────
cgpa: {
    formula: "Percentage = CGPA × Multiplier (9.5 for CBSE/VTU, 10 for Mumbai Univ)",
    variables: "US 4.0 GPA: A=4, B=3, C=2, D=1 | Indian 10-point scale",
    explanation: "CGPA-to-percentage conversion varies by university. Check your institution's specific formula."
},
examneeded: {
    formula: "Needed = (Target% × Total Max / 100) − Marks Scored So Far",
    variables: "Current % = Scored/Max × 100 | Feasible if Needed ≤ Final Max Marks",
    explanation: "Checks if your target percentage is mathematically achievable with remaining exam marks."
},
eduloan: {
    formula: "EMI = (P + Accrued Interest) × r × (1+r)ⁿ / ((1+r)ⁿ − 1)",
    variables: "Accrued = Principal × r × Moratorium Months | Repayment starts after course",
    explanation: "Interest accrues during moratorium (course duration) and adds to principal. Section 80E deduction available."
},
studyhours: {
    formula: "Per Subject = Total Hours / (1 + Revisions × 0.3) / Subjects",
    variables: "Total = Days × Hours/Day | Revisions take ~30% of initial study time each",
    explanation: "Budget time for revisions — each revision pass takes about 30% of the initial study time."
},
scholarship: {
    formula: "EMI Saved = EMI(Full Fee) − EMI(Fee − Scholarship)",
    variables: "True value includes interest savings, not just face value of scholarship",
    explanation: "A scholarship saves more than its face value because it reduces principal on which interest accrues."
}
};
