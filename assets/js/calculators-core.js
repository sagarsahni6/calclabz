/* ═══════════════════════════════════════════════════
   Calc Labz — calculators-core.js
   CORE FILE: Calculator stubs (metadata only, no calc logic)
   Size: ~40 KB (was 333 KB monolithic)
   
   calc() functions are null here; they are lazy-loaded from
   per-category files when user first opens a calculator.
   ═══════════════════════════════════════════════════ */

/* Calc Labz Calculator Database */
'use strict';

// Blog data moved to blog-posts.js

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
        name:"Gratuity Calculator", desc:"Employee gratuity & leave encashment as per Indian law",
        icon:"fa-handshake", cat:"finance",
        inputs:[
            {id:"salary",label:"Last Drawn Basic Salary",default:50000,prefix:"₹"},
            {id:"years",label:"Years of Service",default:10},
            {id:"leaveBalance",label:"Leave Balance (for encashment)",default:30,suffix:"days"}
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

pomodoro: {
    name:"Pomodoro Study Planner", desc:"Plan focused study sessions with work/break intervals",
    icon:"fa-stopwatch", cat:"education", badge:"New",
    inputs:[
        {id:"studyHours",label:"Total Study Time Available",default:4,suffix:"hours"},
        {id:"focusLen",label:"Focus Block Length",default:25,suffix:"min"},
        {id:"shortBreak",label:"Short Break",default:5,suffix:"min"},
        {id:"longBreak",label:"Long Break (after 4 blocks)",default:15,suffix:"min"}
    ],
    calc: null,
    tips:["Classic pomodoro: 25min focus + 5min break","After 4 pomodoros, take a 15-30 min break","Remove ALL distractions during focus blocks"]
},

gpaconverter: {
    name:"GPA / CGPA Converter", desc:"Convert GPA between US, Indian, UK and German scales",
    icon:"fa-right-left", cat:"education", badge:"New",
    inputs:[
        {id:"gpaValue",label:"Your GPA / CGPA",default:8.5},
        {id:"fromScale_gpa",label:"Source Scale",type:"select",options:["US 4.0","India 10.0","UK %","Germany 1-5","Percentage"]}
    ],
    calc: null,
    tips:["India 10.0 CGPA × 9.5 ≈ Percentage","US 4.0 GPA: 3.7+ is excellent","Conversions are approximate — universities may use their own formulas"]
},

readingtime: {
    name:"Reading Time Calculator", desc:"Estimate time to finish a book based on your reading speed",
    icon:"fa-book-open-reader", cat:"education",
    inputs:[
        {id:"totalPages",label:"Total Pages",default:350},
        {id:"pagesRead",label:"Pages Already Read",default:50},
        {id:"wordsPerPage",label:"Words per Page (avg)",default:250},
        {id:"readingSpeed",label:"Reading Speed",type:"select",options:["Slow Reader (150 wpm)","Average (200 wpm)","Fast Reader (300 wpm)","Speed Reader (450 wpm)"]},
        {id:"pagesPerDay",label:"Pages You Read per Day",default:30}
    ],
    calc: null,
    tips:["Average reading speed is 200-250 WPM","Fiction typically has ~250 words/page","Textbooks: expect 150-200 words/page with slower reading"]
},

typingtest: {
    name:"Typing Speed Analyzer", desc:"Calculate net WPM, accuracy and skill level from test results",
    icon:"fa-keyboard", cat:"education",
    inputs:[
        {id:"grossWPM",label:"Gross Words per Minute",default:55},
        {id:"errors",label:"Total Errors",default:3},
        {id:"testDuration",label:"Test Duration",default:1,suffix:"min"}
    ],
    calc: null,
    tips:["40 WPM is minimum for office jobs","60+ WPM is considered proficient","Focus on accuracy first — speed follows"]
},

spellingbee: {
    name:"Spelling Bee Score Tracker", desc:"Track spelling accuracy, speed and skill level",
    icon:"fa-spell-check", cat:"education",
    inputs:[
        {id:"correct_sb",label:"Words Spelled Correctly",default:18},
        {id:"totalWords_sb",label:"Total Words Attempted",default:20},
        {id:"totalTime_sb",label:"Total Time Taken",default:60,suffix:"seconds"}
    ],
    calc: null,
    tips:["Practice with commonly misspelled words","Break words into syllables for better accuracy","Speed comes with practice — focus on accuracy first"]
},

// ══════════════════════════════════════════════════════
// NEW CALCULATORS — Finance
// ══════════════════════════════════════════════════════

fire: {
    name:"FIRE Calculator", desc:"Financial Independence, Retire Early — years to freedom",
    icon:"fa-fire", cat:"finance", badge:"New",
    inputs:[
        {id:"annualExpense",label:"Annual Living Expenses",default:600000,prefix:"₹"},
        {id:"currentSavings",label:"Current Portfolio Value",default:500000,prefix:"₹"},
        {id:"annualSaving",label:"Annual Savings",default:400000,prefix:"₹"},
        {id:"returnRate",label:"Expected Return",default:8,suffix:"% p.a."},
        {id:"withdrawalRate",label:"Safe Withdrawal Rate",default:4,suffix:"%"}
    ],
    calc: null,
    tips:["FIRE Number = Annual Expenses ÷ Withdrawal Rate","The 4% rule is based on the Trinity Study","Coast FIRE = stop saving once portfolio compounds to your target"]
},

debtavalanche: {
    name:"Debt Snowball vs Avalanche", desc:"Compare payoff strategies — save interest or win quick",
    icon:"fa-money-bill-wave", cat:"finance", badge:"New",
    inputs:[
        {id:"debt1bal",label:"Debt 1 Balance",default:50000,prefix:"₹"},
        {id:"debt1rate",label:"Debt 1 Rate",default:18,suffix:"%"},
        {id:"debt1min",label:"Debt 1 Min Payment",default:2000,prefix:"₹"},
        {id:"debt2bal",label:"Debt 2 Balance",default:200000,prefix:"₹"},
        {id:"debt2rate",label:"Debt 2 Rate",default:12,suffix:"%"},
        {id:"debt2min",label:"Debt 2 Min Payment",default:5000,prefix:"₹"},
        {id:"debt3bal",label:"Debt 3 Balance (0=skip)",default:0,prefix:"₹"},
        {id:"debt3rate",label:"Debt 3 Rate",default:9,suffix:"%"},
        {id:"debt3min",label:"Debt 3 Min Payment",default:0,prefix:"₹"},
        {id:"extraPay",label:"Extra Monthly Payment",default:3000,prefix:"₹"}
    ],
    calc: null,
    tips:["Avalanche = pay highest-rate first (saves most interest)","Snowball = pay smallest-balance first (quick wins for motivation)"]
},

emergencyfund: {
    name:"Emergency Fund Calculator", desc:"How much you need in your rainy-day fund",
    icon:"fa-shield-halved", cat:"finance", badge:"New",
    inputs:[
        {id:"monthlyExpense",label:"Monthly Living Expenses",default:40000,prefix:"₹"},
        {id:"monthsCover",label:"Months of Cover",default:6,suffix:"months"},
        {id:"currentFund",label:"Current Emergency Fund",default:50000,prefix:"₹"},
        {id:"monthlySave",label:"Monthly Saving Toward Fund",default:10000,prefix:"₹"},
        {id:"dependents",label:"Number of Dependents",default:2}
    ],
    calc: null,
    tips:["Single earner families need 6-9 months cover","Keep emergency fund in liquid/savings — not equity","Adjust upward for freelancers and contract workers"]
},

rentvsbuy: {
    name:"Rent vs Buy Home Calculator", desc:"Should you rent or buy? Total cost comparison over time",
    icon:"fa-house-chimney", cat:"finance", badge:"New",
    inputs:[
        {id:"homePrice",label:"Home Purchase Price",default:5000000,prefix:"₹"},
        {id:"downPayment",label:"Down Payment",default:1000000,prefix:"₹"},
        {id:"loanRate",label:"Home Loan Rate",default:8.5,suffix:"%"},
        {id:"loanTenure",label:"Loan Tenure",default:20,suffix:"years"},
        {id:"monthlyRent",label:"Current Monthly Rent",default:15000,prefix:"₹"},
        {id:"rentIncrease",label:"Annual Rent Increase",default:5,suffix:"%"},
        {id:"propertyAppreciation",label:"Property Appreciation",default:5,suffix:"% p.a."},
        {id:"maintenance",label:"Annual Maintenance",default:12000,prefix:"₹"}
    ],
    calc: null,
    tips:["Consider stamp duty and registration (5-8% of price)","Rent-to-EMI ratio below 0.5 favors renting","Factor in opportunity cost of the down payment"]
},

carleasevsbuy: {
    name:"Car Lease vs Buy Calculator", desc:"Total cost of leasing vs buying a vehicle",
    icon:"fa-car-side", cat:"finance",
    inputs:[
        {id:"carPrice",label:"Car On-Road Price",default:1000000,prefix:"₹"},
        {id:"downPay",label:"Down Payment (if buying)",default:200000,prefix:"₹"},
        {id:"loanRateCar",label:"Car Loan Rate",default:9,suffix:"%"},
        {id:"loanYears",label:"Loan Tenure",default:5,suffix:"years"},
        {id:"monthlyLease",label:"Monthly Lease Payment",default:18000,prefix:"₹"},
        {id:"leaseYears",label:"Lease Period",default:3,suffix:"years"},
        {id:"resalePercent",label:"Resale Value After Loan Period",default:40,suffix:"%"},
        {id:"annualInsurance",label:"Annual Insurance (if buying)",default:15000,prefix:"₹"}
    ],
    calc: null
},

homedownpayment: {
    name:"Home Down Payment Planner", desc:"Monthly savings needed to reach your down payment goal",
    icon:"fa-piggy-bank", cat:"finance",
    inputs:[
        {id:"targetHome",label:"Target Home Price",default:5000000,prefix:"₹"},
        {id:"downPct",label:"Down Payment %",default:20,suffix:"%"},
        {id:"currentSaved",label:"Currently Saved",default:100000,prefix:"₹"},
        {id:"timelineYears",label:"Target Timeline",default:3,suffix:"years"},
        {id:"savingsReturn",label:"Savings Return Rate",default:6,suffix:"% p.a."}
    ],
    calc: null
},

loancompare: {
    name:"Loan Comparison Calculator", desc:"Compare up to 3 loan offers side-by-side",
    icon:"fa-code-compare", cat:"finance",
    inputs:[
        {id:"amount_lc",label:"Loan Amount",default:2000000,prefix:"₹"},
        {id:"rate1",label:"Bank 1 Rate",default:8.5,suffix:"%"},
        {id:"tenure1",label:"Bank 1 Tenure",default:240,suffix:"months"},
        {id:"fee1",label:"Bank 1 Processing Fee",default:10000,prefix:"₹"},
        {id:"rate2",label:"Bank 2 Rate",default:9.0,suffix:"%"},
        {id:"tenure2",label:"Bank 2 Tenure",default:240,suffix:"months"},
        {id:"fee2",label:"Bank 2 Processing Fee",default:5000,prefix:"₹"},
        {id:"rate3",label:"Bank 3 Rate",default:8.75,suffix:"%"},
        {id:"tenure3",label:"Bank 3 Tenure",default:180,suffix:"months"},
        {id:"fee3",label:"Bank 3 Processing Fee",default:15000,prefix:"₹"}
    ],
    calc: null
},

refinance: {
    name:"Refinance Savings Calculator", desc:"Should you refinance? Compare old vs new loan terms",
    icon:"fa-rotate", cat:"finance",
    inputs:[
        {id:"outstandingBal",label:"Outstanding Balance",default:2500000,prefix:"₹"},
        {id:"currentRate_r",label:"Current Interest Rate",default:10,suffix:"%"},
        {id:"remainingMonths",label:"Remaining Months",default:180,suffix:"months"},
        {id:"newRate_r",label:"New Offered Rate",default:8.5,suffix:"%"},
        {id:"newTenure_r",label:"New Tenure",default:180,suffix:"months"},
        {id:"closingCost",label:"Refinance Costs (fees + charges)",default:25000,prefix:"₹"}
    ],
    calc: null
},

creditutil: {
    name:"Credit Utilization Calculator", desc:"Credit score impact of your card usage",
    icon:"fa-gauge-high", cat:"finance",
    inputs:[
        {id:"card1Limit",label:"Card 1 Credit Limit",default:200000,prefix:"₹"},
        {id:"card1Used",label:"Card 1 Current Balance",default:40000,prefix:"₹"},
        {id:"card2Limit",label:"Card 2 Limit (0=skip)",default:100000,prefix:"₹"},
        {id:"card2Used",label:"Card 2 Current Balance",default:10000,prefix:"₹"},
        {id:"card3Limit",label:"Card 3 Limit (0=skip)",default:0,prefix:"₹"},
        {id:"card3Used",label:"Card 3 Current Balance",default:0,prefix:"₹"}
    ],
    calc: null,
    tips:["Keep utilization below 30% for good credit score","Below 10% is considered excellent","High utilization even if paid on time hurts your score"]
},

insuranceneed: {
    name:"Insurance Need Calculator", desc:"How much life insurance cover do you actually need?",
    icon:"fa-umbrella", cat:"finance", badge:"New",
    inputs:[
        {id:"annualIncome_i",label:"Annual Income",default:1000000,prefix:"₹"},
        {id:"yearsToReplace",label:"Income Years to Replace",default:15,suffix:"years"},
        {id:"outstandingLoans",label:"Outstanding Loans",default:2000000,prefix:"₹"},
        {id:"childrenExpense",label:"Children Education Fund",default:1000000,prefix:"₹"},
        {id:"existingCover",label:"Existing Life Cover",default:500000,prefix:"₹"},
        {id:"existingSavings_i",label:"Existing Savings & Investments",default:300000,prefix:"₹"},
        {id:"inflationAdj",label:"Inflation",default:6,suffix:"%"}
    ],
    calc: null,
    tips:["Thumb rule: 10-15× your annual income","Term insurance is cheapest for pure life cover","Review coverage every 3-5 years"]
},

npvirr: {
    name:"NPV / IRR Calculator", desc:"Net Present Value and Internal Rate of Return for projects",
    icon:"fa-chart-gantt", cat:"finance",
    inputs:[
        {id:"initialInvest",label:"Initial Investment",default:500000,prefix:"₹"},
        {id:"cf1",label:"Year 1 Cash Flow",default:100000,prefix:"₹"},
        {id:"cf2",label:"Year 2 Cash Flow",default:150000,prefix:"₹"},
        {id:"cf3",label:"Year 3 Cash Flow",default:200000,prefix:"₹"},
        {id:"cf4",label:"Year 4 Cash Flow",default:200000,prefix:"₹"},
        {id:"cf5",label:"Year 5 Cash Flow",default:250000,prefix:"₹"},
        {id:"discountRate",label:"Discount Rate / WACC",default:10,suffix:"%"}
    ],
    calc: null,
    tips:["NPV > 0 means the project creates value","IRR > discount rate means the project is worthwhile","Use WACC as the discount rate for business decisions"]
},

bondyield: {
    name:"Bond Yield / YTM Calculator", desc:"Yield to maturity, current yield, and holding return",
    icon:"fa-file-invoice-dollar", cat:"finance",
    inputs:[
        {id:"faceValue",label:"Face Value (Par)",default:1000,prefix:"₹"},
        {id:"couponRate",label:"Coupon Rate",default:7.5,suffix:"%"},
        {id:"marketPrice",label:"Market Price",default:950,prefix:"₹"},
        {id:"yearsToMaturity",label:"Years to Maturity",default:10,suffix:"years"},
        {id:"frequency",label:"Coupon Frequency",type:"select",options:["Annual","Semi-Annual","Quarterly"]}
    ],
    calc: null,
    tips:["YTM > coupon rate when bond trades at discount","Current yield = annual coupon ÷ market price","Sovereign bonds (G-Secs) are considered risk-free in India"]
},

optionprofit: {
    name:"Option Profit Calculator", desc:"Call & put option P&L with break-even and max loss",
    icon:"fa-arrow-up-right-dots", cat:"finance",
    inputs:[
        {id:"optType",label:"Option Type",type:"select",options:["Buy Call","Buy Put","Sell Call","Sell Put"]},
        {id:"spotPrice",label:"Current Spot Price",default:20000,prefix:"₹"},
        {id:"strikePrice",label:"Strike Price",default:20500,prefix:"₹"},
        {id:"premium",label:"Premium Paid/Received",default:200,prefix:"₹"},
        {id:"lotSize",label:"Lot Size",default:50,suffix:"shares"},
        {id:"exitPrice",label:"Exit Spot Price",default:21000,prefix:"₹"}
    ],
    calc: null,
    tips:["Max loss for option buyer = premium paid","Option sellers have unlimited risk potential","Break-even = Strike ± Premium (call +, put -)"]
},

forexpip: {
    name:"Forex Pip / Lot Size Calculator", desc:"Calculate pip value and position size for forex trading",
    icon:"fa-money-bill-trend-up", cat:"finance",
    inputs:[
        {id:"pair",label:"Currency Pair",type:"select",options:["USD/INR","EUR/USD","GBP/USD","USD/JPY","EUR/INR"]},
        {id:"accountBal",label:"Account Balance",default:100000,prefix:"₹"},
        {id:"riskPct",label:"Risk per Trade",default:2,suffix:"%"},
        {id:"stopLossPips",label:"Stop Loss Distance",default:50,suffix:"pips"},
        {id:"pipValue_override",label:"Pip Value Override (0=auto)",default:0,prefix:"₹"}
    ],
    calc: null
},

portfoliorebalance: {
    name:"Portfolio Rebalancing Calculator", desc:"How much to buy/sell to match your target allocation",
    icon:"fa-scale-balanced", cat:"finance",
    inputs:[
        {id:"totalPortfolio",label:"Total Portfolio Value",default:1000000,prefix:"₹"},
        {id:"equityCurrent",label:"Current Equity %",default:70,suffix:"%"},
        {id:"debtCurrent",label:"Current Debt %",default:20,suffix:"%"},
        {id:"goldCurrent",label:"Current Gold %",default:10,suffix:"%"},
        {id:"equityTarget",label:"Target Equity %",default:60,suffix:"%"},
        {id:"debtTarget",label:"Target Debt %",default:30,suffix:"%"},
        {id:"goldTarget",label:"Target Gold %",default:10,suffix:"%"}
    ],
    calc: null,
    tips:["Rebalance annually or when asset drifts >5% from target","Rebalancing enforces 'buy low, sell high'","Tax implications: rebalancing may trigger capital gains"]
},

assetallocation: {
    name:"Asset Allocation Calculator", desc:"Suggested allocation based on age, risk profile and goals",
    icon:"fa-chart-pie", cat:"finance",
    inputs:[
        {id:"ageAlloc",label:"Your Age",default:30,suffix:"years"},
        {id:"riskProfile",label:"Risk Profile",type:"select",options:["Conservative","Moderate","Aggressive","Very Aggressive"]},
        {id:"targetCorpus",label:"Target Corpus",default:10000000,prefix:"₹"},
        {id:"horizon",label:"Investment Horizon",default:20,suffix:"years"},
        {id:"monthlyInvest_aa",label:"Monthly Investment",default:20000,prefix:"₹"}
    ],
    calc: null,
    tips:["Classic rule: Equity % = 100 – Age","Aggressive investors can go 80%+ equity for long horizons","Always diversify across asset classes and geographies"]
},

montecarlo: {
    name:"Monte Carlo Retirement Simulator", desc:"Probability of your retirement plan succeeding",
    icon:"fa-dice-d20", cat:"finance", badge:"New",
    inputs:[
        {id:"corpus_mc",label:"Retirement Corpus",default:10000000,prefix:"₹"},
        {id:"annualWithdrawal_mc",label:"Annual Withdrawal",default:500000,prefix:"₹"},
        {id:"yearsRetirement",label:"Years in Retirement",default:30,suffix:"years"},
        {id:"avgReturn_mc",label:"Expected Avg Return",default:8,suffix:"%"},
        {id:"stdDev_mc",label:"Return Std Deviation",default:15,suffix:"%"},
        {id:"simulations",label:"Simulations",type:"select",options:["1000","5000","10000"]}
    ],
    calc: null,
    tips:["90%+ success rate is generally considered safe","Sequence-of-returns risk matters most in early retirement","Consider reducing withdrawals in down markets"]
},

inflationgoal: {
    name:"Inflation-Adjusted Goal Planner", desc:"Future cost of your goal adjusted for inflation + SIP needed",
    icon:"fa-bullseye", cat:"finance",
    inputs:[
        {id:"goalAmount_ig",label:"Goal Amount (today's value)",default:2000000,prefix:"₹"},
        {id:"yearsToGoal",label:"Years to Goal",default:10,suffix:"years"},
        {id:"inflationRate_ig",label:"Expected Inflation",default:6,suffix:"%"},
        {id:"returnRate_ig",label:"Investment Return",default:12,suffix:"% p.a."},
        {id:"currentSavings_ig",label:"Already Saved",default:100000,prefix:"₹"}
    ],
    calc: null,
    tips:["Education inflation in India is 10-12% p.a.","Medical inflation is 8-10% p.a.","Always plan goals in inflation-adjusted terms"]
},

businessloan: {
    name:"Business Loan EMI + DSCR", desc:"Business loan EMI and Debt Service Coverage Ratio",
    icon:"fa-briefcase", cat:"finance",
    inputs:[
        {id:"loanAmt_bl",label:"Loan Amount",default:2000000,prefix:"₹"},
        {id:"rate_bl",label:"Interest Rate",default:12,suffix:"% p.a."},
        {id:"tenure_bl",label:"Tenure",default:60,suffix:"months"},
        {id:"annualRevenue",label:"Annual Business Revenue",default:5000000,prefix:"₹"},
        {id:"operatingExpenses",label:"Annual Operating Expenses",default:3500000,prefix:"₹"},
        {id:"otherDebt",label:"Other Annual Debt Payments",default:0,prefix:"₹"}
    ],
    calc: null,
    tips:["DSCR > 1.25 is generally required by lenders","DSCR = Net Operating Income / Total Debt Service","Include all existing EMIs in total debt service"]
},

gstinvoice: {
    name:"GST Invoice + Profit Margin", desc:"Generate invoice breakdown with profit margin analysis",
    icon:"fa-file-invoice", cat:"finance",
    inputs:[
        {id:"costPrice_gi",label:"Cost / Purchase Price",default:500,prefix:"₹"},
        {id:"sellingPrice_gi",label:"Selling Price (excl. GST)",default:800,prefix:"₹"},
        {id:"gstRate_gi",label:"GST Rate",type:"select",options:["0%","3%","5%","12%","18%","28%"]},
        {id:"quantity_gi",label:"Quantity",default:10},
        {id:"discount_gi",label:"Discount",default:0,suffix:"%"},
        {id:"supplyType",label:"Supply Type",type:"select",options:["Intra-State (CGST+SGST)","Inter-State (IGST)"]}
    ],
    calc: null,
    tips:["GST is applicable on selling price after discount","For intra-state: GST split equally into CGST + SGST","Invoice must show HSN/SAC code for GST compliance"]
},

esoptax: {
    name:"ESOP Tax Calculator", desc:"Tax on ESOP exercise and sale — perquisite vs capital gains",
    icon:"fa-chart-line", cat:"finance", badge:"New",
    inputs:[
        {id:"grantPrice",label:"Grant / Exercise Price",default:100,prefix:"₹"},
        {id:"fmvOnExercise",label:"FMV on Exercise Date",default:500,prefix:"₹"},
        {id:"salePrice_esop",label:"Sale Price",default:800,prefix:"₹"},
        {id:"sharesQty",label:"Number of Shares",default:1000},
        {id:"holdingMonths",label:"Holding Period After Exercise",default:18,suffix:"months"},
        {id:"taxSlab",label:"Income Tax Slab",type:"select",options:["30% (>15L)","20% (10-15L)","10% (5-10L)","5% (2.5-5L)"]}
    ],
    calc: null,
    tips:["Perquisite tax is on (FMV - Exercise Price) at your slab rate","Capital gains tax is on (Sale Price - FMV) at LTCG/STCG rates","Listed equity LTCG >₹1.25L taxed at 12.5%"]
},

freelancetax: {
    name:"Freelance Tax + GST Calculator", desc:"Estimated income tax and GST for freelancers / consultants",
    icon:"fa-laptop-code", cat:"finance",
    inputs:[
        {id:"annualRevenue_ft",label:"Annual Gross Revenue",default:1500000,prefix:"₹"},
        {id:"expenses_ft",label:"Business Expenses",default:300000,prefix:"₹"},
        {id:"sec80c_ft",label:"80C Investments",default:150000,prefix:"₹"},
        {id:"healthInsurance_ft",label:"Health Insurance (80D)",default:25000,prefix:"₹"},
        {id:"regime_ft",label:"Tax Regime",type:"select",options:["New Regime","Old Regime (44ADA presumptive)"]},
        {id:"gstRegistered",label:"GST Registered?",type:"select",options:["Yes (charge 18% GST)","No (below ₹20L threshold)"]}
    ],
    calc: null,
    tips:["44ADA: 50% of gross receipts deemed profit (for professionals)","GST registration mandatory above ₹20L turnover","Keep receipts for all business expenses"]
},

tcsremittance: {
    name:"TCS on Foreign Remittance", desc:"Tax Collected at Source on LRS payments abroad",
    icon:"fa-plane-departure", cat:"finance",
    inputs:[
        {id:"remittanceAmt",label:"Remittance Amount",default:1000000,prefix:"₹"},
        {id:"purpose",label:"Purpose",type:"select",options:["Foreign Education (loan)","Foreign Education (self)","Medical Treatment","Tour Package","Other (general LRS)"]},
        {id:"totalLRS",label:"Total LRS Used This FY",default:0,prefix:"₹"}
    ],
    calc: null,
    tips:["TCS on LRS above ₹7L: 20% (general), 5% (education/medical)","Education funded by loan: 0.5% TCS above ₹7L","TCS is adjustable against your income tax liability"]
},

sec80c: {
    name:"Section 80C Optimizer", desc:"Maximize your ₹1.5L tax deduction across 80C instruments",
    icon:"fa-shield-halved", cat:"finance",
    inputs:[
        {id:"epf80c",label:"EPF (Employee PF)",default:21600,prefix:"₹"},
        {id:"ppf80c",label:"PPF",default:50000,prefix:"₹"},
        {id:"elss80c",label:"ELSS Mutual Funds",default:0,prefix:"₹"},
        {id:"lifeInsurance80c",label:"Life Insurance Premium",default:20000,prefix:"₹"},
        {id:"nsc80c",label:"NSC",default:0,prefix:"₹"},
        {id:"tuitionFees80c",label:"Children Tuition Fees",default:0,prefix:"₹"},
        {id:"homeLoanPrincipal80c",label:"Home Loan Principal",default:0,prefix:"₹"},
        {id:"taxSlab80c",label:"Tax Slab",type:"select",options:["30%","25%","20%","15%","10%","5%"]}
    ],
    calc: null,
    tips:["Max 80C deduction is ₹1,50,000","EPF contribution is automatically eligible under 80C","ELSS has shortest lock-in (3 years) among all 80C options"]
},

hravshomeloan: {
    name:"HRA vs Home Loan Benefit", desc:"Compare tax benefits of HRA exemption vs home loan deductions",
    icon:"fa-house-lock", cat:"finance",
    inputs:[
        {id:"basic_hvh",label:"Monthly Basic Salary",default:60000,prefix:"₹"},
        {id:"hra_hvh",label:"Monthly HRA Received",default:24000,prefix:"₹"},
        {id:"rent_hvh",label:"Monthly Rent Paid",default:20000,prefix:"₹"},
        {id:"metro_hvh",label:"Metro City?",type:"select",options:["Yes","No"]},
        {id:"homeLoanInt",label:"Annual Home Loan Interest",default:300000,prefix:"₹"},
        {id:"homeLoanPrin",label:"Annual Home Loan Principal",default:100000,prefix:"₹"},
        {id:"slab_hvh",label:"Tax Slab",type:"select",options:["30%","20%","10%","5%"]}
    ],
    calc: null,
    tips:["Home loan interest: up to ₹2L deduction under Sec 24(b)","Home loan principal: up to ₹1.5L under Sec 80C","Both HRA and home loan benefits can be claimed simultaneously under certain conditions"]
},

proftax: {
    name:"Professional Tax by State", desc:"Monthly professional tax deduction based on your state",
    icon:"fa-map-location-dot", cat:"finance",
    inputs:[
        {id:"grossSalary_pt",label:"Monthly Gross Salary",default:50000,prefix:"₹"},
        {id:"state_pt",label:"State",type:"select",options:["Maharashtra","Karnataka","West Bengal","Andhra Pradesh","Telangana","Tamil Nadu","Gujarat","Madhya Pradesh","Kerala","Bihar","Odisha","Assam","Jharkhand","Meghalaya","Tripura","Other (no PT)"]}
    ],
    calc: null,
    tips:["Max professional tax is ₹2,500 per year (capped by Constitution)","PT is deductible from taxable income under Income Tax Act","Some states have slab-based PT, others charge flat rate"]
},

leaveencash: {
    name:"Leave Encashment Calculator", desc:"Tax-exempt leave encashment on retirement or resignation",
    icon:"fa-calendar-check", cat:"finance",
    inputs:[
        {id:"basicSalary_le",label:"Last Drawn Basic Salary",default:50000,prefix:"₹",suffix:"/mo"},
        {id:"leaveBalance",label:"Leave Balance",default:180,suffix:"days"},
        {id:"yearsOfService_le",label:"Years of Service",default:15},
        {id:"govtEmployee",label:"Government Employee?",type:"select",options:["No (Private Sector)","Yes (Government)"]}
    ],
    calc: null,
    tips:["Govt employees: entire leave encashment is tax-free","Private: exempt up to ₹25 lakh (from FY 2023-24)","Tax-free amount = minimum of 4 calculated limits"]
},

// ══════════════════════════════════════════════════════
// NEW CALCULATORS — Health / Fitness
// ══════════════════════════════════════════════════════

onerepmax: {
    name:"One Rep Max (1RM) Calculator", desc:"Estimate your max lift from sub-maximal reps",
    icon:"fa-dumbbell", cat:"health", badge:"New",
    inputs:[
        {id:"weightLifted",label:"Weight Lifted",default:80,suffix:"kg"},
        {id:"repsPerformed",label:"Reps Performed",default:5},
        {id:"exercise",label:"Exercise Type",type:"select",options:["Squat","Bench Press","Deadlift","Overhead Press","Barbell Row"]}
    ],
    calc: null,
    tips:["Epley formula: 1RM = Weight × (1 + Reps/30)","Most accurate for 1-10 reps","Never test true 1RM without a spotter"]
},

runningpace: {
    name:"Running Pace / Race Predictor", desc:"Pace calculator and race time predictions (5K to Marathon)",
    icon:"fa-person-running", cat:"health", badge:"New",
    inputs:[
        {id:"distanceKm",label:"Distance Run",default:5,suffix:"km"},
        {id:"timeMin",label:"Time Taken",default:25,suffix:"minutes"},
        {id:"targetDist",label:"Predict Race Time For",type:"select",options:["5K","10K","Half Marathon (21.1K)","Marathon (42.2K)","Custom"]},
        {id:"customDistKm",label:"Custom Distance (km)",default:15,suffix:"km"}
    ],
    calc: null,
    tips:["Riegel formula: T₂ = T₁ × (D₂/D₁)^1.06","Negative splits (faster second half) = ideal race strategy","Marathon pace is typically 10-15% slower than half marathon pace"]
},

bodyrecomp: {
    name:"Body Recomposition Planner", desc:"Simultaneous fat loss and muscle gain — calories + macros",
    icon:"fa-person-arrow-up-from-line", cat:"health",
    inputs:[
        {id:"weight_br",label:"Current Weight",default:80,suffix:"kg"},
        {id:"bodyfat_br",label:"Current Body Fat",default:22,suffix:"%"},
        {id:"targetBf",label:"Target Body Fat",default:15,suffix:"%"},
        {id:"activity_br",label:"Activity Level",type:"select",options:["Sedentary","Light Exercise (1-3 days)","Moderate (3-5 days)","Heavy (6-7 days)","Athlete (2× daily)"]},
        {id:"timeframe_br",label:"Timeline",default:16,suffix:"weeks"}
    ],
    calc: null,
    tips:["Eat at slight deficit (10-15% below TDEE)","Protein: 2-2.5g per kg body weight","Train with progressive overload for muscle stimulus"]
},

vo2max: {
    name:"VO2 Max Estimator", desc:"Estimate cardiovascular fitness from run/walk data",
    icon:"fa-lungs", cat:"health",
    inputs:[
        {id:"method_vo2",label:"Test Method",type:"select",options:["Cooper 12-min Run","1.5 Mile Run","Resting HR Method"]},
        {id:"distanceCovered",label:"Distance Covered (Cooper/1.5mi)",default:2400,suffix:"meters"},
        {id:"runTime15",label:"1.5 Mile Time (minutes, if using)",default:12,suffix:"min"},
        {id:"restingHR",label:"Resting Heart Rate",default:65,suffix:"bpm"},
        {id:"age_vo2",label:"Age",default:30,suffix:"years"}
    ],
    calc: null,
    tips:["VO2max 40-50: Good fitness, 50-60: Excellent","Elite marathoners have VO2max of 70-85 ml/kg/min","Improve VO2max with interval training (HIIT)"]
},

leanbodymass: {
    name:"Lean Body Mass Calculator", desc:"Calculate fat-free mass using multiple formulas",
    icon:"fa-weight-scale", cat:"health",
    inputs:[
        {id:"weight_lbm",label:"Body Weight",default:75,suffix:"kg"},
        {id:"height_lbm",label:"Height",default:175,suffix:"cm"},
        {id:"gender_lbm",label:"Gender",type:"select",options:["Male","Female"]},
        {id:"bodyfat_lbm",label:"Body Fat % (if known, 0=estimate)",default:0,suffix:"%"}
    ],
    calc: null,
    tips:["LBM includes muscle, bone, organs, water — everything except fat","Boer formula is most accurate for general population","FFMI > 25 is near the natural limit for men"]
},

caloriegoal: {
    name:"Calorie Intake by Goal Timeline", desc:"Daily calories needed to hit your target weight by a date",
    icon:"fa-utensils", cat:"health",
    inputs:[
        {id:"currentWeight_cg",label:"Current Weight",default:85,suffix:"kg"},
        {id:"targetWeight_cg",label:"Target Weight",default:75,suffix:"kg"},
        {id:"weeks_cg",label:"Timeline",default:16,suffix:"weeks"},
        {id:"height_cg",label:"Height",default:175,suffix:"cm"},
        {id:"age_cg",label:"Age",default:30,suffix:"years"},
        {id:"gender_cg",label:"Gender",type:"select",options:["Male","Female"]},
        {id:"activity_cg",label:"Activity Level",type:"select",options:["Sedentary (desk job)","Light (1-3×/week)","Moderate (3-5×/week)","Active (6-7×/week)","Very Active (2×/day)"]}
    ],
    calc: null,
    tips:["Safe weight loss: 0.5-1 kg per week","Never go below 1200 cal (women) or 1500 cal (men)","1 kg fat ≈ 7700 calories deficit needed"]
},

electrolyte: {
    name:"Water + Electrolyte Calculator", desc:"Daily water and electrolyte needs based on activity and climate",
    icon:"fa-glass-water-droplet", cat:"health",
    inputs:[
        {id:"weight_el",label:"Body Weight",default:70,suffix:"kg"},
        {id:"exerciseMin",label:"Daily Exercise Duration",default:60,suffix:"minutes"},
        {id:"climate",label:"Climate",type:"select",options:["Temperate (20-25°C)","Hot & Humid (30°C+)","Cold (below 15°C)","High Altitude"]},
        {id:"caffeine",label:"Daily Caffeine Intake",type:"select",options:["None","1-2 cups","3-4 cups","5+ cups"]},
        {id:"sweatRate",label:"Sweat Rate",type:"select",options:["Low (light sweater)","Moderate","Heavy"]}
    ],
    calc: null,
    tips:["Baseline: ~35 ml per kg body weight","Add 500-1000 ml per hour of exercise","Electrolytes (sodium, potassium, magnesium) matter as much as volume"]
},

// ══════════════════════════════════════════════════════
// NEW CALCULATORS — Education
// ══════════════════════════════════════════════════════

attendance: {
    name:"Attendance Percentage Calculator", desc:"Track attendance and calculate classes needed for 75%",
    icon:"fa-clipboard-check", cat:"education", badge:"New",
    inputs:[
        {id:"totalClasses",label:"Total Classes Held",default:120},
        {id:"attended",label:"Classes Attended",default:90},
        {id:"targetPct_att",label:"Target Attendance %",default:75,suffix:"%"},
        {id:"remainingClasses",label:"Remaining Classes This Semester",default:30}
    ],
    calc: null,
    tips:["Most colleges require ≥75% attendance","Medical certificates can add compensatory attendance","Track weekly to avoid last-minute panic"]
},

gpaplanner: {
    name:"Semester GPA Planner", desc:"Plan your target grades to achieve desired CGPA",
    icon:"fa-chart-simple", cat:"education",
    inputs:[
        {id:"currentCGPA",label:"Current CGPA",default:7.5,suffix:"/10"},
        {id:"completedCredits",label:"Credits Completed",default:80},
        {id:"semCredits",label:"This Semester Credits",default:24},
        {id:"targetCGPA",label:"Target CGPA",default:8.0,suffix:"/10"},
        {id:"scale_gpa",label:"GPA Scale",type:"select",options:["10-point (Indian)","4-point (US)"]}
    ],
    calc: null,
    tips:["SGPA needed = (Target×Total - Current×Completed) ÷ Semester Credits","Focus on high-credit courses for maximum impact","Lab courses often have easier grading"]
},

percentile: {
    name:"Percentile Calculator", desc:"Find percentile rank from score and total candidates",
    icon:"fa-ranking-star", cat:"education",
    inputs:[
        {id:"yourScore",label:"Your Score / Marks",default:180},
        {id:"totalCandidates",label:"Total Candidates",default:100000},
        {id:"yourRank",label:"Your Rank (if known, 0=auto)",default:5000},
        {id:"maxScore_pctl",label:"Maximum Score",default:300}
    ],
    calc: null,
    tips:["Percentile = (Candidates Below You / Total) × 100","JEE: 99 percentile = top 1%","Percentile ≠ Percentage — they measure different things"]
},

cutoffpredictor: {
    name:"Cutoff Predictor", desc:"Predict exam cutoff based on difficulty and past trends",
    icon:"fa-crystal-ball", cat:"education",
    inputs:[
        {id:"yourScore_cp",label:"Your Expected Score",default:150},
        {id:"maxScore_cp",label:"Maximum Score",default:300},
        {id:"lastYearCutoff",label:"Last Year Cutoff",default:140},
        {id:"difficulty",label:"Paper Difficulty vs Last Year",type:"select",options:["Easier","Same Level","Harder","Much Harder"]},
        {id:"totalSeats",label:"Total Seats Available",default:5000},
        {id:"totalApplicants",label:"Total Applicants",default:200000}
    ],
    calc: null,
    tips:["Harder paper = lower cutoff typically","Category-wise cutoffs vary significantly","Check official answer keys before predicting"]
},

revisionplanner: {
    name:"Revision Planner", desc:"Create a timetable dividing subjects across available days",
    icon:"fa-calendar-days", cat:"education",
    inputs:[
        {id:"subjects_rp",label:"Number of Subjects",default:6},
        {id:"daysAvailable",label:"Days Until Exam",default:21,suffix:"days"},
        {id:"hoursPerDay_rp",label:"Study Hours per Day",default:8,suffix:"hrs"},
        {id:"revisionRounds",label:"Revision Rounds Needed",default:2},
        {id:"difficultyMix",label:"Subject Difficulty Mix",type:"select",options:["All Equal","2 Hard + Rest Normal","3 Hard + Rest Easy","Mixed Difficulty"]}
    ],
    calc: null,
    tips:["Spaced repetition beats cramming","Give 2× time to difficult subjects","Schedule breaks: 50 min study, 10 min break"]
},

// ══════════════════════════════════════════════════════
// NEW CALCULATORS — Engineering
// ══════════════════════════════════════════════════════

inverterbattery: {
    name:"Inverter / Battery Backup Calculator", desc:"Inverter VA rating and battery capacity for your load",
    icon:"fa-car-battery", cat:"engineering", badge:"New",
    inputs:[
        {id:"loadWatts",label:"Total Load (appliances)",default:500,suffix:"Watts"},
        {id:"backupHours",label:"Backup Hours Needed",default:4,suffix:"hours"},
        {id:"batteryVoltage",label:"Battery Voltage",type:"select",options:["12V (single battery)","24V (2 batteries)","48V (4 batteries)"]},
        {id:"batteryAh",label:"Battery Capacity",default:150,suffix:"Ah"},
        {id:"dod",label:"Depth of Discharge",default:50,suffix:"%"}
    ],
    calc: null,
    tips:["Inverter VA = Load Watts ÷ 0.8 (power factor)","Never discharge lead-acid below 50%","Lithium batteries can go to 80-90% DOD"]
},

acbtu: {
    name:"AC Load / BTU Calculator", desc:"Air conditioner tonnage needed for your room size",
    icon:"fa-snowflake", cat:"engineering",
    inputs:[
        {id:"roomLength",label:"Room Length",default:15,suffix:"feet"},
        {id:"roomWidth",label:"Room Width",default:12,suffix:"feet"},
        {id:"ceilingHeight",label:"Ceiling Height",default:10,suffix:"feet"},
        {id:"floorLevel",label:"Floor / Exposure",type:"select",options:["Ground Floor","Middle Floor","Top Floor (direct sun)"]},
        {id:"occupants",label:"Number of Occupants",default:2},
        {id:"windowArea",label:"Window Facing",type:"select",options:["North (least sun)","East/West","South (most sun)","Multiple large windows"]}
    ],
    calc: null,
    tips:["1 ton = 12,000 BTU/hr","Thumb rule: ~600 sq ft per ton for well-insulated rooms","Top-floor rooms need 10-15% more capacity"]
},

beamload: {
    name:"Beam Load / Deflection Calculator", desc:"Simply supported beam — max bending moment and deflection",
    icon:"fa-ruler-combined", cat:"engineering",
    inputs:[
        {id:"span",label:"Beam Span (Length)",default:5,suffix:"meters"},
        {id:"loadType_beam",label:"Load Type",type:"select",options:["Uniform Distributed Load (UDL)","Point Load at Center","Point Load at Custom Position"]},
        {id:"totalLoad",label:"Total Load",default:10000,suffix:"N (or N/m for UDL)"},
        {id:"loadPosition",label:"Load Position (for point load)",default:2.5,suffix:"m from left"},
        {id:"eModulus",label:"Modulus of Elasticity (E)",default:200,suffix:"GPa"},
        {id:"momentOfInertia",label:"Moment of Inertia (I)",default:1000,suffix:"cm⁴"}
    ],
    calc: null,
    tips:["UDL: Max BM = wL²/8 at center","Point load: Max BM = PL/4 at center","Max deflection = 5wL⁴/384EI (UDL)"]
},

pipeflow: {
    name:"Pipe Flow / Pressure Drop", desc:"Flow rate, velocity and friction loss in pipes",
    icon:"fa-faucet-drip", cat:"engineering",
    inputs:[
        {id:"pipeD",label:"Pipe Inner Diameter",default:50,suffix:"mm"},
        {id:"pipeLength",label:"Pipe Length",default:100,suffix:"meters"},
        {id:"flowRate_pf",label:"Flow Rate",default:5,suffix:"liters/min"},
        {id:"fluid",label:"Fluid Type",type:"select",options:["Water (20°C)","Water (60°C)","Oil (light)","Air"]},
        {id:"pipeMaterial",label:"Pipe Material",type:"select",options:["PVC (smooth)","Copper","Steel (new)","GI Pipe (old)","HDPE"]}
    ],
    calc: null,
    tips:["Velocity > 2.5 m/s can cause noise in residential pipes","Darcy-Weisbach: ΔP = f × (L/D) × (ρv²/2)","Add 20-30% for fittings and bends"]
},

threephase: {
    name:"3-Phase Electrical Calculator", desc:"Power, current and voltage for 3-phase electrical systems",
    icon:"fa-bolt", cat:"engineering",
    inputs:[
        {id:"voltage3p",label:"Line Voltage",default:415,suffix:"V"},
        {id:"current3p",label:"Line Current",default:20,suffix:"A"},
        {id:"powerFactor3p",label:"Power Factor",default:0.85},
        {id:"calcMode_3p",label:"Calculate",type:"select",options:["Power from V & I","Current from V & Power","Voltage from I & Power"]},
        {id:"powerKw_3p",label:"Power (if calculating V or I)",default:10,suffix:"kW"}
    ],
    calc: null,
    tips:["P = √3 × V × I × cos(φ) for 3-phase","Line Voltage = √3 × Phase Voltage","Star connection: V_line = √3 × V_phase"]
},

transformercalc: {
    name:"Transformer Calculator", desc:"Turns ratio, voltage and current for transformer design",
    icon:"fa-right-left", cat:"engineering",
    inputs:[
        {id:"primaryV",label:"Primary Voltage",default:230,suffix:"V"},
        {id:"secondaryV",label:"Secondary Voltage",default:12,suffix:"V"},
        {id:"powerRating_t",label:"Power Rating",default:100,suffix:"VA"},
        {id:"frequency_t",label:"Frequency",type:"select",options:["50 Hz (India/UK)","60 Hz (US)"]},
        {id:"efficiency_t",label:"Efficiency",default:95,suffix:"%"}
    ],
    calc: null,
    tips:["Turns ratio = V_primary / V_secondary","I = Power / Voltage","Core size increases with power rating"]
},

heatexchanger: {
    name:"Heat Exchanger Calculator", desc:"LMTD, heat transfer rate and required area",
    icon:"fa-temperature-half", cat:"engineering",
    inputs:[
        {id:"massFlow",label:"Mass Flow Rate",default:2,suffix:"kg/s"},
        {id:"cpFluid",label:"Specific Heat (Cp)",default:4.18,suffix:"kJ/kg·°C"},
        {id:"hotInlet",label:"Hot Inlet Temp",default:90,suffix:"°C"},
        {id:"hotOutlet",label:"Hot Outlet Temp",default:50,suffix:"°C"},
        {id:"coldInlet",label:"Cold Inlet Temp",default:20,suffix:"°C"},
        {id:"coldOutlet",label:"Cold Outlet Temp",default:60,suffix:"°C"},
        {id:"overallU",label:"Overall Heat Transfer Coeff (U)",default:500,suffix:"W/m²·K"},
        {id:"effectiveness",label:"Effectiveness",default:80,suffix:"%"}
    ],
    calc: null,
    tips:["Counter-flow has higher LMTD than parallel flow","LMTD = (ΔT1 − ΔT2) / ln(ΔT1/ΔT2)","Higher U value = more compact heat exchanger"]
},

fluidflow: {
    name:"Fluid Flow Calculator", desc:"Reynolds number, velocity and pressure drop in pipes",
    icon:"fa-water", cat:"engineering",
    inputs:[
        {id:"pipeDia",label:"Pipe Inner Diameter",default:50,suffix:"mm"},
        {id:"pipeLength",label:"Pipe Length",default:100,suffix:"m"},
        {id:"flowRate",label:"Flow Rate",default:5,suffix:"L/min"},
        {id:"density",label:"Fluid Density",default:998,suffix:"kg/m³"},
        {id:"viscosity",label:"Dynamic Viscosity",default:0.001,suffix:"Pa·s"}
    ],
    calc: null,
    tips:["Re < 2300 = Laminar, Re > 4000 = Turbulent","Turbulent flow has higher pressure drop","Use Moody chart for accurate friction factor"]
},

springforce: {
    name:"Spring Force Calculator", desc:"Hooke's law — force, energy and frequency of springs",
    icon:"fa-compress", cat:"engineering",
    inputs:[
        {id:"springConstant",label:"Spring Constant (k)",default:500,suffix:"N/m"},
        {id:"displacement",label:"Displacement (x)",default:20,suffix:"mm"},
        {id:"mass_spring",label:"Attached Mass",default:1,suffix:"kg"}
    ],
    calc: null,
    tips:["F = kx (Hooke's Law)","PE = ½kx² (elastic potential energy)","Natural freq = (1/2π)√(k/m)"]
},

gearratio: {
    name:"Gear Ratio Calculator", desc:"Speed, torque and power through gear trains",
    icon:"fa-gears", cat:"engineering",
    inputs:[
        {id:"drivingTeeth",label:"Driving Gear Teeth",default:20},
        {id:"drivenTeeth",label:"Driven Gear Teeth",default:60},
        {id:"inputRPM",label:"Input RPM",default:1500,suffix:"RPM"},
        {id:"inputTorque",label:"Input Torque",default:10,suffix:"N·m"},
        {id:"gearEfficiency",label:"Gear Efficiency",default:95,suffix:"%"}
    ],
    calc: null,
    tips:["Gear ratio = Driven teeth / Driving teeth","Torque increases as speed decreases","Each gear stage typically loses 2-5% efficiency"]
},

// ══════════════════════════════════════════════════════
// NEW CALCULATORS — Construction
// ══════════════════════════════════════════════════════

concretemix: {
    name:"Concrete Mix Design Calculator", desc:"Cement, sand, aggregate and water quantities per mix ratio",
    icon:"fa-cubes-stacked", cat:"construction",
    inputs:[
        {id:"volume_cm",label:"Concrete Volume Needed",default:1,suffix:"m³"},
        {id:"mixRatio",label:"Mix Ratio / Grade",type:"select",options:["M10 (1:3:6)","M15 (1:2:4)","M20 (1:1.5:3)","M25 (1:1:2)","M30 (Design Mix)","Custom"]},
        {id:"customCement",label:"Custom Cement Part",default:1},
        {id:"customSand",label:"Custom Sand Part",default:1.5},
        {id:"customAggregate",label:"Custom Aggregate Part",default:3},
        {id:"wastage_cm",label:"Wastage %",default:5,suffix:"%"}
    ],
    calc: null,
    tips:["M20 is most common for residential construction","Water-cement ratio: 0.45-0.55 for structural work","1 bag cement (50kg) = 0.035 m³"]
},

materialwaste: {
    name:"Material Wastage Calculator", desc:"Tile, paint, flooring material with wastage factor",
    icon:"fa-recycle", cat:"construction",
    inputs:[
        {id:"material_mw",label:"Material Type",type:"select",options:["Tiles (floor/wall)","Paint (interior)","Paint (exterior)","Laminate Flooring","Wallpaper","Carpet"]},
        {id:"area_mw",label:"Surface Area",default:100,suffix:"sq ft"},
        {id:"materialSize",label:"Tile Size (for tiles only)",type:"select",options:["2×2 ft","1×2 ft","1×1 ft","Custom"]},
        {id:"coats",label:"Number of Coats (for paint)",default:2},
        {id:"wastage_mw",label:"Wastage %",default:10,suffix:"%"}
    ],
    calc: null,
    tips:["Tiles: 5-10% wastage for straight lay, 15% for diagonal","Paint: 1 litre covers ~100 sq ft per coat","Order 10% extra to ensure color consistency"]
},

rainwater: {
    name:"Rainwater Harvesting Calculator", desc:"Potential rainwater collection and tank size for your roof",
    icon:"fa-cloud-rain", cat:"construction",
    inputs:[
        {id:"roofArea_rw",label:"Catchment / Roof Area",default:1000,suffix:"sq ft"},
        {id:"annualRainfall",label:"Annual Rainfall",default:800,suffix:"mm"},
        {id:"runoffCoeff",label:"Runoff Coefficient",type:"select",options:["0.9 (concrete/metal roof)","0.8 (tiled roof)","0.6 (ground/gravel)","Custom"]},
        {id:"customCoeff",label:"Custom Coefficient (if selected)",default:0.85},
        {id:"dailyDemand_rw",label:"Daily Water Demand",default:500,suffix:"liters"}
    ],
    calc: null,
    tips:["1mm rainfall on 1 sq.m = 1 litre collected","Rooftop harvesting can meet 30-50% of household needs","First-flush diverter improves water quality"]
},

// ══════════════════════════════════════════════════════
// NEW CALCULATORS — Everyday / Business
// ══════════════════════════════════════════════════════

ecomprofit: {
    name:"E-commerce Profit Calculator", desc:"True profit per order with all hidden costs included",
    icon:"fa-cart-shopping", cat:"everyday", badge:"New",
    inputs:[
        {id:"sellingPrice_ec",label:"Selling Price",default:999,prefix:"₹"},
        {id:"productCost_ec",label:"Product / Manufacturing Cost",default:350,prefix:"₹"},
        {id:"shippingCost",label:"Shipping Cost",default:60,prefix:"₹"},
        {id:"platformFee",label:"Platform Fee",default:15,suffix:"%"},
        {id:"gstRate_ec",label:"GST Rate",type:"select",options:["5%","12%","18%","28%"]},
        {id:"returnRate_ec",label:"Return/RTO Rate",default:10,suffix:"%"},
        {id:"adSpend",label:"Ad Spend per Order",default:50,prefix:"₹"},
        {id:"packagingCost",label:"Packaging Cost",default:15,prefix:"₹"}
    ],
    calc: null,
    tips:["Include return/RTO costs — they eat 10-30% of margins","Platform fees vary: Amazon 15-30%, Flipkart 10-25%","True margin after all costs is often 10-20%"]
},

restaurantcost: {
    name:"Restaurant Food Cost Calculator", desc:"Menu pricing based on food cost percentage target",
    icon:"fa-utensils", cat:"everyday",
    inputs:[
        {id:"ingredientCost",label:"Ingredient / Raw Cost",default:120,prefix:"₹"},
        {id:"targetFoodCost",label:"Target Food Cost %",default:30,suffix:"%"},
        {id:"portionSize",label:"Portion Size",default:1,suffix:"servings"},
        {id:"wastageFood",label:"Prep Wastage %",default:10,suffix:"%"},
        {id:"gstFood",label:"GST on Food",type:"select",options:["5% (non-AC restaurant)","18% (AC / fine dining)","0% (cloud kitchen < ₹7.5L)"]}
    ],
    calc: null,
    tips:["Food cost should be 28-32% of selling price","Beverage margins are highest (70-80%)","Menu engineering: price high-margin items prominently"]
},

subscriptionpricing: {
    name:"Subscription Pricing Calculator", desc:"MRR, ARR, churn impact and LTV calculations",
    icon:"fa-repeat", cat:"everyday",
    inputs:[
        {id:"monthlyPrice",label:"Monthly Subscription Price",default:499,prefix:"₹"},
        {id:"subscribers",label:"Current Subscribers",default:500},
        {id:"monthlyChurn",label:"Monthly Churn Rate",default:5,suffix:"%"},
        {id:"monthlyNewSub",label:"New Subscribers per Month",default:50},
        {id:"acquisitionCost",label:"Customer Acquisition Cost",default:200,prefix:"₹"},
        {id:"annualDiscountPct",label:"Annual Plan Discount",default:20,suffix:"%"}
    ],
    calc: null,
    tips:["LTV should be >3× CAC for viable business","Annual plans reduce churn significantly","Net revenue retention >100% = growth without new customers"]
},

uniteconomics: {
    name:"Unit Economics Calculator", desc:"LTV, CAC, payback period and contribution margin per unit",
    icon:"fa-chart-bar", cat:"everyday",
    inputs:[
        {id:"revenuePerUnit",label:"Revenue per Unit / Order",default:500,prefix:"₹"},
        {id:"cogsPerUnit",label:"COGS per Unit",default:200,prefix:"₹"},
        {id:"opexPerUnit",label:"Operating Cost per Unit",default:100,prefix:"₹"},
        {id:"cac_ue",label:"Customer Acquisition Cost",default:300,prefix:"₹"},
        {id:"avgOrders",label:"Avg Orders per Customer Lifetime",default:8},
        {id:"avgLifetimeMonths",label:"Avg Customer Lifetime",default:12,suffix:"months"}
    ],
    calc: null,
    tips:["Contribution margin = Revenue - COGS - Variable costs","Payback period = CAC / monthly contribution","Aim for LTV:CAC ratio of 3:1 or higher"]
},

eventbudget: {
    name:"Event Budget Calculator", desc:"Complete event cost breakdown by category",
    icon:"fa-calendar-day", cat:"everyday",
    inputs:[
        {id:"guests",label:"Number of Guests",default:100},
        {id:"venueCost",label:"Venue Cost",default:50000,prefix:"₹"},
        {id:"cateringPerHead",label:"Catering per Head",default:800,prefix:"₹"},
        {id:"decorCost",label:"Decoration Cost",default:25000,prefix:"₹"},
        {id:"entertainment",label:"Entertainment / DJ",default:15000,prefix:"₹"},
        {id:"photography_ev",label:"Photography / Video",default:20000,prefix:"₹"},
        {id:"miscPct_ev",label:"Miscellaneous Buffer",default:15,suffix:"%"}
    ],
    calc: null,
    tips:["Catering is typically 40-50% of total event cost","Book venue and caterer first — they fill up earliest","15-20% buffer for unexpected costs"]
},

householdbudget: {
    name:"Household Budget Planner", desc:"50/30/20 rule and category-wise monthly budget breakdown",
    icon:"fa-house-user", cat:"everyday",
    inputs:[
        {id:"monthlyIncome_hb",label:"Monthly Take-Home Income",default:60000,prefix:"₹"},
        {id:"rentEmi",label:"Rent / EMI",default:15000,prefix:"₹"},
        {id:"groceries",label:"Groceries & Household",default:8000,prefix:"₹"},
        {id:"utilities_hb",label:"Utilities (electric, water, wifi)",default:3000,prefix:"₹"},
        {id:"transport_hb",label:"Transport / Fuel",default:3000,prefix:"₹"},
        {id:"insurance_hb",label:"Insurance Premiums",default:2000,prefix:"₹"},
        {id:"lifestyle_hb",label:"Lifestyle / Dining / Entertainment",default:5000,prefix:"₹"},
        {id:"savingsTarget_hb",label:"Savings Target",default:20,suffix:"%"}
    ],
    calc: null,
    tips:["50/30/20 rule: 50% needs, 30% wants, 20% savings","Automate savings on salary day","Track spending weekly to catch overruns early"]
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
