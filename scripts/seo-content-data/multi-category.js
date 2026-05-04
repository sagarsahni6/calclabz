// Education, Math, Engineering, Construction, Everyday, Science, DateTime, Unit content
'use strict';
module.exports = {
  // === EDUCATION ===
  cgpa: {
    why: 'CGPA to percentage conversion is essential for Indian students applying to universities abroad, jobs, or higher education. Different universities use different scales (10-point, 4-point, 7-point), and conversion formulas vary. The most common Indian formula multiplies CGPA by 9.5 (CBSE standard), but many universities like VTU, Anna University, and Mumbai University have their own multipliers.',
    feats: ['CGPA to percentage for multiple university scales','4.0 GPA to Indian percentage conversion','University-specific conversion formulas','Reverse calculation (percentage to CGPA)','Grade point average calculator','Semester-wise CGPA tracking'],
    tips: ['CBSE formula: Percentage = CGPA × 9.5 is an approximation — actual may vary.','For US university applications, convert to 4.0 scale: divide Indian CGPA by 2.5 approximately.','WES evaluation for Canada uses its own conversion — don\'t self-convert.','Many IITs use 10-point scale where 10 CGPA = 100%.','Keep all marksheets safe — original documents needed for WES/IQAS evaluation.'],
    who: 'Students applying abroad, job seekers converting grades for resumes, university admission offices, and WES evaluation applicants.',
    formula: 'CBSE: Percentage = CGPA × 9.5. VTU: Percentage = (CGPA – 0.75) × 10. Mumbai University: varies by stream. Generic: Percentage = (CGPA / Max CGPA) × 100.',
    example: 'CGPA 8.5 on 10-point scale (CBSE): Percentage = 8.5 × 9.5 = 80.75%. On 4.0 scale: approximately 8.5 / 2.5 = 3.4 GPA.',
    tbl: '<table><thead><tr><th>CGPA (10)</th><th>CBSE %</th><th>Approx 4.0 GPA</th><th>Classification</th></tr></thead><tbody><tr><td>9.5-10.0</td><td>90.25-95%</td><td>3.8-4.0</td><td>Outstanding</td></tr><tr><td>8.5-9.4</td><td>80.75-89.3%</td><td>3.4-3.7</td><td>Excellent</td></tr><tr><td>7.5-8.4</td><td>71.25-79.8%</td><td>3.0-3.3</td><td>Very Good</td></tr><tr><td>6.5-7.4</td><td>61.75-70.3%</td><td>2.6-2.9</td><td>Good</td></tr><tr><td>5.0-6.4</td><td>47.5-60.8%</td><td>2.0-2.5</td><td>Average</td></tr></tbody></table>',
    tblCap: 'CGPA to percentage and GPA conversion table'
  },
  percentage: {
    why: 'Percentage calculations are used daily — from exam scores and discounts to tax rates and growth metrics. In Indian competitive exams like JEE, NEET, and UPSC, understanding percentile vs percentage is crucial. A 95 percentile in JEE means you scored better than 95% of candidates, which may correspond to only 45-50% marks depending on difficulty.',
    feats: ['Calculate percentage of any number','Percentage increase and decrease','Percentage difference between two values','Mark to percentage converter','Discount and sale price calculator','Percentage to fraction/decimal conversion'],
    tips: ['Percentage change formula: [(New – Old) / Old] × 100.','For successive discounts: don\'t add them. 20% + 10% = 28% total discount, not 30%.','In competitive exams, percentile rank ≠ percentage marks.','Profit percentage is always calculated on cost price, not selling price.','CAGR is more meaningful than simple average percentage growth.'],
    who: 'Students calculating exam scores, shoppers calculating discounts, business analysts, and anyone working with data.',
    formula: 'Percentage = (Part / Whole) × 100. Percentage Change = [(New – Old) / Old] × 100. Value after % change = Value × (1 ± %/100).',
    example: 'Scored 432 out of 500: (432/500) × 100 = 86.4%. Price dropped from ₹2,000 to ₹1,600: change = [(1600–2000)/2000] × 100 = -20%.',
    tbl: '<table><thead><tr><th>Calculation</th><th>Formula</th><th>Example</th><th>Result</th></tr></thead><tbody><tr><td>What is 15% of 800</td><td>800 × 0.15</td><td>800 × 0.15</td><td>120</td></tr><tr><td>200 is what % of 500</td><td>(200/500) × 100</td><td>0.4 × 100</td><td>40%</td></tr><tr><td>% change 50 to 75</td><td>[(75-50)/50] × 100</td><td>25/50 × 100</td><td>50%</td></tr></tbody></table>',
    tblCap: 'Common percentage calculation examples'
  },
  attendance: {
    why: 'Most Indian colleges require 75% minimum attendance for exam eligibility. Missing even a few extra classes can jeopardize your entire semester. This calculator tells you exactly how many classes you can skip or must attend to maintain the required percentage. Some universities like Delhi University require 67%, while engineering colleges typically mandate 75%.',
    feats: ['Current attendance percentage','Classes you can still skip','Classes needed to reach target','Daily attendance tracker','Subject-wise breakdown','Holiday and leave adjustment'],
    tips: ['Track attendance weekly — it\'s harder to recover later in the semester.','If you\'re at 70%, you need to attend ~20 consecutive classes to reach 75% (depends on total).','Medical leaves with certificate are often excluded from attendance calculation.','Some colleges count lab sessions differently from lectures.','Proxy attendance is risky and can lead to semester detention.'],
    who: 'College students tracking attendance, academic coordinators, and parents monitoring student performance.',
    formula: 'Attendance % = (Classes Attended / Total Classes) × 100. Classes to reach target: N = (Target% × Total – Attended × 100) / (100 – Target%).',
    example: 'Attended 60 out of 90 classes: 60/90 × 100 = 66.7%. Need 75%: Classes needed without missing any more = (75×90 – 60×100) / (100–75) = (6750–6000)/25 = 30 more classes.',
    tbl: '<table><thead><tr><th>Attended</th><th>Total</th><th>Current %</th><th>Classes to reach 75%</th></tr></thead><tbody><tr><td>40</td><td>60</td><td>66.7%</td><td>20 consecutive</td></tr><tr><td>50</td><td>70</td><td>71.4%</td><td>10 consecutive</td></tr><tr><td>60</td><td>80</td><td>75.0%</td><td>Already at 75%</td></tr><tr><td>55</td><td>80</td><td>68.8%</td><td>20 consecutive</td></tr></tbody></table>',
    tblCap: 'Attendance recovery scenarios'
  },

  // === MATH ===
  quadratic: {
    why: 'Quadratic equations (ax² + bx + c = 0) appear everywhere — from physics projectile motion to business break-even analysis. The discriminant (b² – 4ac) determines whether solutions are real, equal, or complex. This calculator provides step-by-step solutions using the quadratic formula, completing the square, and graphical representation.',
    feats: ['Solve any quadratic equation instantly','Step-by-step solution method','Discriminant analysis (real/complex roots)','Graphical representation with vertex','Sum and product of roots','Nature of roots classification'],
    tips: ['If discriminant > 0: two distinct real roots. = 0: one repeated root. < 0: complex conjugate roots.','Sum of roots = -b/a. Product of roots = c/a. Use this to verify your answers.','For physics problems, negative roots often represent "before the event started."','Factor when possible — it\'s faster than the formula for simple equations.','The vertex form a(x-h)² + k reveals the maximum/minimum directly.'],
    who: 'Students studying algebra, JEE/NEET aspirants, physics students solving kinematics, and engineers.',
    formula: 'x = [-b ± √(b² – 4ac)] / 2a. Discriminant D = b² – 4ac. Vertex: h = -b/2a, k = f(h).',
    example: '2x² + 5x – 3 = 0. D = 25 + 24 = 49. x = (-5 ± 7) / 4. x₁ = 2/4 = 0.5, x₂ = -12/4 = -3. Verify: sum = -5/2 ✓, product = -3/2 ✓.',
    tbl: '<table><thead><tr><th>Equation</th><th>Discriminant</th><th>Nature</th><th>Roots</th></tr></thead><tbody><tr><td>x² – 5x + 6 = 0</td><td>1</td><td>Two real</td><td>x = 2, 3</td></tr><tr><td>x² – 4x + 4 = 0</td><td>0</td><td>Repeated</td><td>x = 2</td></tr><tr><td>x² + x + 1 = 0</td><td>-3</td><td>Complex</td><td>x = (-1 ± i√3)/2</td></tr></tbody></table>',
    tblCap: 'Quadratic equation examples by discriminant type'
  },

  // === EVERYDAY ===
  discount: {
    why: 'E-commerce sales in India (₹7+ lakh crore in 2025) make discount calculation essential for smart shopping. Understanding the difference between flat discounts, successive discounts, and buy-one-get-one is key. A "50% + 20% off" deal is NOT 70% off — it\'s actually 60% off. This calculator reveals the real savings.',
    feats: ['Calculate discounted price and savings','Successive discount calculator','Compare discount offers','Original price from discounted price','Percentage savings calculator','Tax-inclusive discount calculation'],
    tips: ['Successive discounts: 30% + 20% = 1 – (0.7 × 0.8) = 44% total, not 50%.','BOGO (Buy 1 Get 1) is effectively a 50% discount on 2 items.','Always check the MRP — some sellers inflate MRP before showing "discounts."','Compare price per unit/gram for packaged goods — bigger isn\'t always cheaper.','Festival sales often have the best genuine discounts — track price history.'],
    who: 'Online shoppers, retail store customers, business owners setting prices, and deal-hunters.',
    formula: 'Discount Amount = Original Price × (Discount% / 100). Sale Price = Original – Discount. Successive: Final = Original × (1 – d1/100) × (1 – d2/100).',
    example: 'MRP ₹2,000 with 30% + 10% off: After 30%: ₹2,000 × 0.7 = ₹1,400. After 10%: ₹1,400 × 0.9 = ₹1,260. Effective discount: 37%, not 40%.',
    tbl: '<table><thead><tr><th>MRP</th><th>Discount</th><th>Sale Price</th><th>You Save</th></tr></thead><tbody><tr><td>₹1,000</td><td>20%</td><td>₹800</td><td>₹200</td></tr><tr><td>₹2,500</td><td>30% + 10%</td><td>₹1,575</td><td>₹925 (37%)</td></tr><tr><td>₹5,000</td><td>50%</td><td>₹2,500</td><td>₹2,500</td></tr><tr><td>₹10,000</td><td>40% + 20%</td><td>₹4,800</td><td>₹5,200 (52%)</td></tr></tbody></table>',
    tblCap: 'Discount calculation examples'
  },
  electricity: {
    why: 'Indian electricity tariffs are complex — they use telescopic slab rates where per-unit cost increases with consumption. Delhi charges ₹3/unit for first 200 units but ₹8/unit above 400 units. Understanding your slab helps optimize usage. The average Indian household uses 250-400 units/month, spending ₹1,500-₹4,000.',
    feats: ['State-wise tariff slab calculation','Unit consumption to bill converter','Appliance-wise power consumption','Solar panel savings estimator','Time-of-use billing support','Historical bill comparison'],
    tips: ['Run AC at 24-26°C — every degree lower increases consumption by 6%.','LED bulbs use 75% less power than incandescent — switching saves ₹1,000-2,000/year.','Star-rated appliances save 20-45% power — always choose 4-5 star.','Time your heavy appliances (washing machine, dishwasher) during off-peak hours.','Solar panels with net metering can reduce bills by 80-100%.'],
    who: 'Homeowners managing bills, tenants verifying charges, solar panel buyers, and energy-conscious consumers.',
    formula: 'Bill = Sum of (Units in each slab × slab rate) + Fixed charges + Taxes. Units = Wattage × Hours / 1000.',
    example: 'Delhi, 350 units: First 200 at ₹3 = ₹600. Next 150 at ₹4.50 = ₹675. Fixed charge: ₹125. Surcharge 8%: ₹112. Total ≈ ₹1,512.',
    tbl: '<table><thead><tr><th>Units</th><th>Delhi Rate</th><th>Mumbai Rate</th><th>Bangalore Rate</th></tr></thead><tbody><tr><td>0-100</td><td>₹3.00</td><td>₹3.59</td><td>₹4.15</td></tr><tr><td>101-200</td><td>₹3.00</td><td>₹5.89</td><td>₹5.65</td></tr><tr><td>201-400</td><td>₹4.50</td><td>₹8.39</td><td>₹7.10</td></tr><tr><td>401+</td><td>₹8.00</td><td>₹10.49</td><td>₹8.50</td></tr></tbody></table>',
    tblCap: 'Domestic electricity tariff comparison (2026, indicative)'
  },
  fuel: {
    why: 'With petrol at ₹100+ and diesel at ₹90+ in most Indian cities, fuel costs are a major monthly expense. A daily 30 km commute costs ₹3,000-5,000/month depending on vehicle mileage. This calculator helps compare fuel costs across vehicles, plan road trip budgets, and evaluate whether CNG/electric conversion is worthwhile.',
    feats: ['Trip fuel cost estimation','Vehicle mileage-based calculation','Petrol vs diesel vs CNG comparison','EV vs petrol cost comparison','Monthly commute budget','City-wise fuel price updates'],
    tips: ['Maintain tire pressure — under-inflated tires reduce mileage by 5-10%.','AC reduces mileage by 10-20% — use it judiciously in city driving.','Highway driving at 60-80 km/h gives the best mileage — 100+ km/h drops it significantly.','CNG costs about 40% less than petrol per km — conversion pays for itself in 1-2 years.','EV running cost is ₹1-1.5/km vs ₹5-7/km for petrol — massive long-term savings.'],
    who: 'Daily commuters budgeting fuel, road trip planners, fleet managers, and car buyers comparing running costs.',
    formula: 'Fuel needed = Distance / Mileage. Cost = Fuel needed × Price per liter. Cost per km = Price / Mileage.',
    example: 'Trip 500 km, car mileage 15 km/l, petrol ₹103/l: Fuel = 500/15 = 33.3 liters. Cost = 33.3 × 103 = ₹3,433. Cost/km = ₹6.87.',
    tbl: '<table><thead><tr><th>Vehicle Type</th><th>Mileage</th><th>Fuel Price</th><th>Cost/km</th><th>Monthly (30km/day)</th></tr></thead><tbody><tr><td>Petrol Hatchback</td><td>18 km/l</td><td>₹103</td><td>₹5.72</td><td>₹5,148</td></tr><tr><td>Diesel SUV</td><td>14 km/l</td><td>₹90</td><td>₹6.43</td><td>₹5,787</td></tr><tr><td>CNG Car</td><td>28 km/kg</td><td>₹76</td><td>₹2.71</td><td>₹2,439</td></tr><tr><td>Electric Car</td><td>7 km/kWh</td><td>₹8</td><td>₹1.14</td><td>₹1,026</td></tr></tbody></table>',
    tblCap: 'Running cost comparison by fuel type (2026 prices)'
  },

  // === ENGINEERING ===
  ohm: {
    why: 'Ohm\'s Law is the most fundamental relationship in electrical engineering: V = I × R. Whether you\'re designing circuits, troubleshooting electrical systems, or sizing components, this calculator provides instant results for voltage, current, resistance, and power calculations. It handles series and parallel circuits too.',
    feats: ['Calculate V, I, R, P from any two known values','Series and parallel resistance calculator','Power dissipation in watts','Wire gauge recommendation','Circuit diagram visualization','Unit conversion (mA, kΩ, MW)'],
    tips: ['Power = V²/R = I²R = V×I — use whichever form has your known values.','For parallel resistors: 1/R_total = 1/R₁ + 1/R₂ + ... A common shortcut for 2: R₁×R₂/(R₁+R₂).','LED always needs a current-limiting resistor: R = (V_supply – V_LED) / I_LED.','Wire resistance increases with length and decreases with cross-section area.','High current applications need thicker wires — consult AWG/SWG tables.'],
    who: 'Electronics hobbyists, electrical engineering students, electricians, and IoT/Arduino project builders.',
    formula: 'V = I × R. P = V × I = I²R = V²/R. Series: R_total = R₁ + R₂. Parallel: 1/R_total = 1/R₁ + 1/R₂.',
    example: '12V battery, 100Ω resistor: I = 12/100 = 0.12A (120mA). P = 12 × 0.12 = 1.44W. For LED (2V drop, 20mA): R = (12-2)/0.02 = 500Ω.',
    tbl: '<table><thead><tr><th>V (Volts)</th><th>R (Ohms)</th><th>I (Amps)</th><th>P (Watts)</th></tr></thead><tbody><tr><td>5</td><td>100</td><td>0.05</td><td>0.25</td></tr><tr><td>12</td><td>50</td><td>0.24</td><td>2.88</td></tr><tr><td>230</td><td>1000</td><td>0.23</td><td>52.9</td></tr><tr><td>230</td><td>23</td><td>10</td><td>2300</td></tr></tbody></table>',
    tblCap: 'Ohm\'s Law calculation examples'
  },

  // === CONSTRUCTION ===
  constructioncost: {
    why: 'Construction costs in India vary massively — from ₹1,200/sqft in tier-3 cities to ₹4,000+/sqft in metros. A 1,500 sqft house costs ₹25-60 lakh depending on location, quality, and specifications. Understanding the breakup (structure 40-45%, finishing 25-30%, electrical/plumbing 10-15%, interiors 15-20%) helps avoid cost overruns.',
    feats: ['Total construction cost estimation','Room-wise and floor-wise breakdown','Material quantity calculator','Labor cost estimation','City-wise cost adjustment','Budget vs premium specification comparison'],
    tips: ['Keep 15-20% contingency budget — construction always has unexpected costs.','Buy steel and cement when prices are low (usually monsoon season).','Avoid major design changes after foundation — changes cost 3-5x more mid-construction.','Get at least 3 contractor quotes and verify their previous work.','RCC frame structure costs 10-15% more than load-bearing but allows future modifications.'],
    who: 'Home builders planning construction, contractors estimating projects, architects preparing budgets, and real estate investors.',
    formula: 'Total Cost = Built-up Area (sqft) × Rate per sqft. Rate varies by: city (1200-4000), specification (basic/standard/premium), floors, and terrain.',
    example: '1,500 sqft house in Bangalore, standard specification: Rate ₹2,200/sqft. Construction = ₹33,00,000. Add 15% for compound, parking: ₹37,95,000. Interiors: ₹5,00,000. Total ≈ ₹43 lakh.',
    tbl: '<table><thead><tr><th>City Tier</th><th>Basic (₹/sqft)</th><th>Standard</th><th>Premium</th></tr></thead><tbody><tr><td>Tier 1 (Mumbai, Delhi)</td><td>₹2,500</td><td>₹3,500</td><td>₹5,000+</td></tr><tr><td>Tier 2 (Pune, Jaipur)</td><td>₹1,800</td><td>₹2,500</td><td>₹3,500</td></tr><tr><td>Tier 3 (Indore, Lucknow)</td><td>₹1,200</td><td>₹1,800</td><td>₹2,500</td></tr><tr><td>Rural</td><td>₹900</td><td>₹1,300</td><td>₹1,800</td></tr></tbody></table>',
    tblCap: 'Construction cost per sqft by city tier (2026)'
  }
};
