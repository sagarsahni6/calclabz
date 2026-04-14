// Unique SEO content for basic unit conversion and unknown-category calculators
'use strict';
module.exports = {
  // ── UNIT CONVERTERS (11 calcs) ────────────────────────────────────
  length: {
    desc: 'Convert between meters, feet, inches, cm, km, miles, yards, and nautical miles. Instant bidirectional length conversion with formula.',
    what: 'This length converter instantly translates between metric and imperial length units: millimeters, centimeters, meters, kilometers, inches, feet, yards, miles, and nautical miles. Enter a value in any unit to see all equivalent values simultaneously.',
    faqs: [
      { q: 'How do I convert feet to meters?', a: '1 foot = 0.3048 meters. Multiply feet by 0.3048. 5\'10" (5.833 ft) = 1.778 m. Quick approximation: divide feet by 3.3. For cm to feet: divide cm by 30.48.' },
      { q: 'What is the difference between a mile and a nautical mile?', a: 'A statute mile = 1.609 km (5,280 feet). A nautical mile = 1.852 km — based on one minute of latitude. Nautical miles are used in aviation and maritime navigation because they relate directly to Earth\'s coordinates.' }
    ]
  },
  weight: {
    desc: 'Convert between kg, pounds, ounces, grams, stones, and tonnes. Instant weight and mass unit conversion with common reference comparisons.',
    what: 'This weight converter translates between kilograms, grams, milligrams, pounds, ounces, stones, metric tonnes, and US/UK tons. Provides both exact and approximate conversions with everyday object references for intuitive understanding.',
    faqs: [
      { q: 'How do I convert kg to pounds?', a: '1 kg = 2.20462 pounds. Multiply kg by 2.205. Quick trick: double the kg and add 10%. 70 kg = 140 + 14 = 154 lbs (exact: 154.32 lbs).' },
      { q: 'What is the difference between mass and weight?', a: 'Mass (kg) is the amount of matter — constant everywhere. Weight (Newtons) is the gravitational force on mass — varies by location. In everyday language, we use "weight" for both, but scientifically, a scale measures weight and calculates mass.' }
    ]
  },
  temperature: {
    desc: 'Convert between Celsius, Fahrenheit, Kelvin, and Rankine. Includes body temperature, cooking, and weather reference points.',
    what: 'This temperature converter translates between Celsius (°C), Fahrenheit (°F), Kelvin (K), and Rankine (°R). Includes a reference chart for common temperatures — body temperature, boiling/freezing water, oven settings, and weather benchmarks.',
    faqs: [
      { q: 'How do I convert Celsius to Fahrenheit?', a: '°F = (°C × 9/5) + 32. Quick method: double Celsius, subtract 10%, add 32. 37°C body temp: 37 × 2 = 74, − 7 = 67, + 32 = 99°F (exact: 98.6°F). For rough estimates: 0°C=32°F, 10°C=50°F, 20°C=68°F, 30°C=86°F, 40°C=104°F.' },
      { q: 'What is absolute zero?', a: '0 Kelvin = −273.15°C = −459.67°F. It is the theoretical lowest possible temperature where all molecular motion stops. It has never been reached in a lab, though scientists have gotten within billionths of a degree.' }
    ]
  },
  currency: {
    desc: 'Convert between world currencies with live exchange rates. Supports INR, USD, EUR, GBP, AED, and 100+ global currencies.',
    what: 'This currency converter uses real-time exchange rates to convert between Indian Rupee (INR) and 100+ world currencies. Shows the mid-market rate, historical trend, and the amount in words for financial documentation.',
    faqs: [
      { q: 'Where do exchange rates come from?', a: 'Exchange rates are determined by forex markets based on supply/demand, interest rate differentials, inflation, and geopolitical factors. Banks add a 1.5–3% markup to the mid-market rate. Wire transfer services like Wise offer closer-to-market rates.' },
      { q: 'What is the RBI reference rate?', a: 'RBI publishes daily reference rates for USD, EUR, GBP, and JPY against INR. It is a benchmark, not a mandatory rate. Actual forex rates fluctuate throughout the day based on market trading. Check FBIL (Financial Benchmarks India) for official rates.' }
    ]
  },
  area: {
    desc: 'Convert between square meters, square feet, acres, hectares, bigha, and gunta. Essential for Indian real estate and land measurement.',
    what: 'This area converter translates between international and Indian land measurement units: square meters, square feet, acres, hectares, cents, bigha, gunta, kanal, and marla. Essential for property transactions where different regions use different units.',
    faqs: [
      { q: 'How do I convert square feet to square meters?', a: '1 sq ft = 0.0929 sq m. Divide sq ft by 10.764. A 1,000 sq ft apartment = 92.9 sq m. Reverse: multiply sq m by 10.764.' },
      { q: 'What is 1 acre in square feet?', a: '1 acre = 43,560 sq ft = 4,047 sq m = 0.4047 hectares. 1 hectare = 2.471 acres. In Indian units, 1 acre ≈ 1.62 bigha (UP) but varies by state. Always confirm regional bigha conversion.' }
    ]
  },
  speed: {
    desc: 'Convert between km/h, mph, m/s, knots, and Mach number. Includes wind speed scales and speed reference comparisons.',
    what: 'This speed converter translates between kilometers per hour, miles per hour, meters per second, feet per second, knots, and Mach number. Includes the Beaufort wind scale and speed references from walking pace to the speed of light.',
    faqs: [
      { q: 'How do I convert km/h to mph?', a: 'Divide km/h by 1.609 (or multiply by 0.621). 100 km/h = 62.1 mph. 120 km/h highway speed = 74.6 mph. Quick trick: divide by 1.6 — close enough for estimation.' },
      { q: 'What is Mach number?', a: 'Mach 1 = speed of sound = 343 m/s = 1,235 km/h at sea level. Mach 2 = twice the speed of sound. Commercial jets fly at Mach 0.8–0.85 (900–940 km/h). Concorde flew at Mach 2.04.' }
    ]
  },
  volume: {
    desc: 'Convert between liters, gallons, cubic meters, cups, and milliliters. Covers US, UK, and metric volume systems.',
    what: 'This volume converter translates between liters, milliliters, US gallons, UK gallons, US fluid ounces, cubic meters, cubic centimeters, cups, tablespoons, and teaspoons. Distinguishes between US and Imperial measurements which differ significantly.',
    faqs: [
      { q: 'What is the difference between US and UK gallons?', a: 'US gallon = 3.785 liters. UK (Imperial) gallon = 4.546 liters — 20% larger. This matters for fuel economy: 30 mpg (US) = 36 mpg (UK). Always specify which gallon system you are using.' },
      { q: 'How many liters in common containers?', a: 'Water bottle: 0.5–1L. Kitchen bucket: 10–15L. Car fuel tank: 35–60L. Bathtub: 150–300L. 1 cubic meter: 1,000L. Overhead water tank: 500–2,000L.' }
    ]
  },
  data: {
    desc: 'Convert between bytes, KB, MB, GB, TB, and PB. Understand binary (KiB, MiB) vs decimal (KB, MB) data measurement.',
    what: 'This data size converter translates between bits, bytes, kilobytes, megabytes, gigabytes, terabytes, and petabytes. Clarifies the important difference between binary (1 KB = 1,024 bytes) and decimal (1 kB = 1,000 bytes) conventions.',
    faqs: [
      { q: 'Why does my 256 GB drive show only 238 GB?', a: 'Manufacturers use decimal (1 GB = 1,000,000,000 bytes) but your OS uses binary (1 GiB = 1,073,741,824 bytes). 256,000,000,000 ÷ 1,073,741,824 = 238.4 GiB. You are not missing any storage — it is just different counting.' },
      { q: 'How much data do common activities use?', a: 'WhatsApp text: 1–5 KB. Photo: 2–5 MB. Song (MP3): 3–10 MB. HD movie stream: 3–5 GB. 4K movie: 15–25 GB. One hour Zoom: 1–2.5 GB. 5G plan of 1.5 GB/day ≈ 45 GB/month.' }
    ]
  },
  pressure: {
    desc: 'Convert between Pascal, bar, PSI, atm, mmHg, and torr. Covers tire pressure, blood pressure, and industrial applications.',
    what: 'This pressure converter translates between Pascal (Pa), kiloPascal (kPa), bar, millibar, PSI, atmosphere (atm), mmHg (torr), and inches of water column. Includes reference pressures for common applications like tire inflation and weather.',
    faqs: [
      { q: 'What units is tire pressure measured in?', a: 'India and most countries: PSI (pounds per square inch) or bar. Car tires: 30–35 PSI (2.0–2.4 bar). Bike tires: 40–65 PSI. Check your car door sticker for the recommended pressure.' },
      { q: 'What is 1 atmosphere?', a: '1 atm = 101,325 Pa = 1.01325 bar = 14.696 PSI = 760 mmHg. It is the average air pressure at sea level. Weather reports use hectoPascals (hPa) or millibars (same value). Standard atmosphere is used as a reference in science.' }
    ]
  },
  energy: {
    desc: 'Convert between joules, calories, kWh, BTU, and electron volts. Covers food energy, electricity, and physics energy units.',
    what: 'This energy converter translates between joules, kilojoules, calories, kilocalories (food Calories), kilowatt-hours (electricity), BTU, and electron volts. Bridges the gap between physics, nutrition, and everyday electricity measurements.',
    faqs: [
      { q: 'What is the difference between a calorie and a Calorie?', a: 'Lowercase calorie (cal): energy to heat 1g water by 1°C. Uppercase Calorie (Cal or kcal): 1,000 cal — this is what food labels use. A "300 Calorie" meal is actually 300,000 calories (300 kcal).' },
      { q: 'How do I relate kWh to everyday use?', a: '1 kWh = running a 1,000W appliance for 1 hour. Examples: 1 kWh ≈ 4 hours of ceiling fan, 1 hour of iron, 30 minutes of AC, 10 hours of LED bulb. At ₹7/kWh, each unit costs ₹7.' }
    ]
  },
  angle: {
    desc: 'Convert between degrees, radians, gradians, and turns. Essential for trigonometry, navigation, and engineering calculations.',
    what: 'This angle converter translates between degrees, radians, gradians (gon), turns (revolutions), minutes of arc, and seconds of arc. Shows the relationship between these systems and common angle values used in geometry and trigonometry.',
    faqs: [
      { q: 'How do I convert degrees to radians?', a: 'Radians = Degrees × π/180. 90° = π/2 rad. 180° = π rad. 360° = 2π rad. 45° = π/4 rad. Quick reference: 1 radian ≈ 57.3°. Calculus and physics typically use radians.' },
      { q: 'What are gradians used for?', a: 'Gradians divide a right angle into 100 grads (vs 90 degrees). A full circle = 400 grad. Used in some European surveying instruments. 1 grad = 0.9 degrees. Most scientific and engineering work uses degrees or radians.' }
    ]
  },

  // ── UNKNOWN CATEGORY (17 calcs) ───────────────────────────────────
  investvsrent: {
    desc: 'Should you invest your down payment or use it to buy a home? Compare wealth accumulation of renting plus investing vs buying property.',
    what: 'This invest vs rent calculator compares two paths: (1) using a lump sum as a home down payment and paying EMI, or (2) renting and investing the same lump sum plus the EMI-vs-rent difference in mutual funds. Shows which builds more wealth over 10–30 years.',
    faqs: [
      { q: 'When does investing beat buying?', a: 'If investment returns (12–15% in equity) significantly exceed property appreciation (5–8% in most Indian cities minus maintenance), renting + investing wins. In expensive cities (Mumbai, Bangalore), renting often makes more financial sense, especially for under-40 professionals.' },
      { q: 'What costs of ownership are people missing?', a: 'Beyond EMI: registration/stamp duty (5–8%), maintenance (₹3–5/sqft/month), property tax, interior (₹5–20L), insurance, and opportunity cost of the down payment. These add 20–30% to the effective home cost over 20 years.' }
    ]
  },
  trianglearea: {
    desc: 'Calculate triangle area using base-height, three sides (Heron\'s), or two sides with angle. Includes perimeter and all angle calculations.',
    what: 'This triangle area calculator supports multiple methods: base × height / 2, Heron\'s formula (from three sides), two sides with included angle, and coordinate geometry method. Also calculates perimeter, all angles, and classifies the triangle type.',
    faqs: [
      { q: 'What is Heron\'s formula?', a: 'Area = √(s(s−a)(s−b)(s−c)), where s = (a+b+c)/2 (semi-perimeter). For a triangle with sides 3, 4, 5: s = 6, Area = √(6×3×2×1) = √36 = 6 sq units. Works for any triangle where you know all three sides.' },
      { q: 'How do I find the area of a triangle from coordinates?', a: 'Area = ½|x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|. For vertices (1,1), (4,1), (1,5): Area = ½|1(1−5) + 4(5−1) + 1(1−1)| = ½|−4+16+0| = 6 sq units.' }
    ]
  },
  waisthip: {
    desc: 'Calculate your waist-to-hip ratio (WHR) and assess abdominal obesity risk. A key indicator for cardiovascular and metabolic disease risk.',
    what: 'This waist-to-hip ratio calculator divides your waist circumference by hip circumference to assess body fat distribution. WHR is a stronger predictor of cardiovascular disease than BMI alone because it specifically measures dangerous visceral (abdominal) fat.',
    faqs: [
      { q: 'What is a healthy waist-to-hip ratio?', a: 'WHO guidelines — Men: below 0.90 (low risk), 0.90–1.0 (moderate), above 1.0 (high risk). Women: below 0.80 (low), 0.80–0.85 (moderate), above 0.85 (high risk). Indian thresholds are even stricter due to higher visceral fat tendency.' },
      { q: 'How do I measure waist and hip correctly?', a: 'Waist: measure at the narrowest point (usually just above the navel, at the level of the belly button) while standing, breathing normally. Hips: measure at the widest point of the buttocks. Use a flexible tape measure, keep it level and snug but not tight.' }
    ]
  },
  'calories-food': {
    desc: 'Look up calories in common Indian foods and dishes. Find protein, carbs, fat, and fiber content for dal, roti, rice, and more.',
    what: 'This food calorie calculator provides nutritional information for 200+ common Indian foods and dishes: calories, protein, carbohydrates, fat, and fiber per serving. Covers home-cooked meals, restaurant portions, street food, and packaged snacks.',
    faqs: [
      { q: 'How many calories are in common Indian meals?', a: '1 roti (30g atta): 72 cal. 1 cup cooked rice: 200 cal. 1 cup dal: 180–220 cal. 1 samosa: 260 cal. 1 plate rajma chawal: 450–550 cal. 1 dosa with chutney: 170 cal. Butter chicken (1 serving): 400–500 cal.' },
      { q: 'How many calories should I eat per day?', a: 'Sedentary women: 1,600–1,800 cal. Active women: 2,000–2,200. Sedentary men: 2,000–2,200. Active men: 2,400–2,800. For weight loss, reduce by 500 cal/day for ~0.5 kg/week loss.' }
    ]
  },
  lungcapacity: {
    desc: 'Estimate your lung capacity based on age, height, gender, and smoking status. Compare against normal predicted values for your demographics.',
    what: 'This lung capacity calculator estimates your predicted vital capacity, total lung capacity, and FEV1 (forced expiratory volume) based on demographic factors. Compares your actual spirometry results against predicted normals to assess respiratory health.',
    faqs: [
      { q: 'What is normal lung capacity?', a: 'Average adult total lung capacity: 4–6 liters (men), 3.5–5 liters (women). Vital capacity (max exhale after max inhale): 3–5 L. FEV1 (air exhaled in 1 second): 3–4 L. Athletes may have 20–30% above average.' },
      { q: 'Does smoking reduce lung capacity?', a: 'Yes. Smoking accelerates the natural decline of FEV1 from 25–30 mL/year to 60–90 mL/year. A 20-year smoker may lose 30–40% of lung capacity. Quitting slows decline back to near-normal rates but does not fully restore lost capacity.' }
    ]
  },
  unitprice: {
    desc: 'Calculate unit price to compare product value. Find the price per kg, liter, piece, or unit between different package sizes.',
    what: 'This unit price calculator helps you compare the value of products sold in different sizes or quantities. Enter the price and quantity for two or more options to instantly see which offers the best deal on a per-unit basis.',
    faqs: [
      { q: 'How do I calculate unit price?', a: 'Unit Price = Total Price / Quantity. A 500g pack for ₹120: ₹120/500 = ₹0.24 per gram or ₹240 per kg. Compare with a 1 kg pack at ₹200 = ₹0.20 per gram. The 1 kg pack is 17% cheaper per unit.' },
      { q: 'Is the bigger pack always a better deal?', a: 'Usually but not always. Check during sales — sometimes smaller packs with discounts beat bulk pricing. Also factor in shelf life for perishables: buying 2 kg of paneer at ₹350/kg vs 500g at ₹400/kg is not a deal if half spoils before you use it.' }
    ]
  },
  petrolparity: {
    desc: 'Compare petrol and diesel prices across Indian states. Calculate per-km fuel cost for your vehicle and find the cheapest fuel option.',
    what: 'This petrol price parity calculator compares fuel costs across Indian states/cities and calculates your per-kilometer fuel expenditure based on your vehicle\'s mileage. Helps decide between petrol, diesel, CNG, and electric options.',
    faqs: [
      { q: 'Why do petrol prices differ between Indian states?', a: 'State VAT varies from 15–40% on base price. Cess and surcharges differ. Rajasthan and Madhya Pradesh have the highest VAT (30–35%). Andaman and some NE states have the lowest. Base price + excise duty is set centrally.' },
      { q: 'Petrol vs diesel — which car is cheaper to run?', a: 'Diesel is ₹8–10/L cheaper and gives 25–40% better mileage. However, diesel cars cost ₹1–2L more upfront. Breakeven: if you drive >15,000 km/year, diesel saves money over 5 years. Below that, petrol is more economical.' }
    ]
  },
  agenextbday: {
    desc: 'Calculate your exact age in years, months, and days. See the countdown to your next birthday with day of the week.',
    what: 'This age calculator shows your precise age in years, months, and days from your date of birth. Includes a countdown showing days, hours, and minutes until your next birthday, what day of the week it falls on, and your birth day trivia.',
    faqs: [
      { q: 'How is exact age calculated?', a: 'Subtract the birth date from today, accounting for varying month lengths and leap years. Born March 15, 1995 on April 14, 2026: 31 years, 0 months, 30 days — not simply 2026−1995 = 31 years.' },
      { q: 'What day was I born on?', a: 'Enter your birthdate and the calculator tells you the day of the week. Fun fact: more babies are born on Tuesdays and Wednesdays (planned C-sections and inductions), fewer on weekends.' }
    ]
  },
  'speed-dist': {
    desc: 'Calculate speed, distance, or time from any two known values. Solve distance = speed × time problems with unit conversion.',
    what: 'This speed-distance-time calculator solves the fundamental equation d = s × t for any unknown. Enter two values (speed and time, speed and distance, or distance and time) and instantly get the third with multiple unit options.',
    faqs: [
      { q: 'How do I calculate distance from speed and time?', a: 'Distance = Speed × Time. At 60 km/h for 2.5 hours: 60 × 2.5 = 150 km. Keep units consistent — if speed is in km/h, time must be in hours (not minutes). 30 minutes = 0.5 hours.' },
      { q: 'How do I find average speed for a trip?', a: 'Average Speed = Total Distance / Total Time. A 300 km trip taking 5 hours (including stops): 300/5 = 60 km/h average. If you drive 150 km at 80 km/h and 150 km at 60 km/h, average is NOT 70 — it is 68.6 km/h (harmonic mean).' }
    ]
  },
  construction: {
    desc: 'Estimate construction costs per square foot for residential buildings in India. Factor in floors, finish level, location, and material quality.',
    what: 'This construction cost estimator calculates the approximate cost per square foot for building a house in India based on the type of construction, finish level (basic, standard, premium, luxury), number of floors, and city tier.',
    faqs: [
      { q: 'What is the construction cost per sq ft in India?', a: 'Basic construction: ₹1,200–1,500/sqft. Standard: ₹1,500–2,200. Premium: ₹2,200–3,500. Luxury: ₹3,500–6,000+. These are structure + finishing costs. Does not include land cost, which varies enormously by location.' },
      { q: 'What is the cost breakdown for building a house?', a: 'Structure (foundation, RCC, brickwork): 40–45%. Finishing (flooring, painting, doors): 25–30%. Plumbing and electrical: 10–12%. Miscellaneous (architect fees, approvals): 8–10%. Always keep a 10–15% contingency buffer.' }
    ]
  },
  romannumeral: {
    desc: 'Convert between Roman numerals and Arabic numbers. Supports values from 1 to 3,999 (I to MMMCMXCIX) with validation.',
    what: 'This Roman numeral converter translates between standard Arabic numbers (1–3,999) and Roman numerals. Validates input format, shows the breakdown of additive and subtractive notation, and provides the conversion steps.',
    faqs: [
      { q: 'What are the basic Roman numeral symbols?', a: 'I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000. Smaller value before larger means subtract: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900.' },
      { q: 'Why do clocks use IIII instead of IV?', a: 'Clock makers traditionally use IIII instead of IV for aesthetic balance — it visually mirrors the VIII on the opposite side. This convention dates back to the 14th century. Both IIII and IV are considered correct.' }
    ]
  },
  circlecalc: {
    desc: 'Calculate circle area, circumference, diameter, and radius from any one known value. Includes sector area and arc length formulas.',
    what: 'This circle calculator computes all properties from any single known value: enter radius, diameter, circumference, or area to instantly find the rest. Also calculates sector area and arc length for any central angle.',
    faqs: [
      { q: 'What are the circle formulas?', a: 'Circumference = 2πr = πd. Area = πr². Diameter = 2r. Given any one value, all others can be derived. For r = 7: C = 43.98, A = 153.94. These formulas appear in everything from pipe sizing to satellite orbits.' },
      { q: 'How do I calculate the area of a sector?', a: 'Sector Area = (θ/360) × πr² for degrees, or ½r²θ for radians. A 90° sector (quarter circle) with r = 10: (90/360) × π × 100 = 25π = 78.54 sq units. Arc Length = (θ/360) × 2πr.' }
    ]
  },
  'typing-speed': {
    desc: 'Measure your typing speed with timed tests. Track WPM, accuracy, and common errors across multiple test difficulty levels.',
    what: 'This typing speed test measures your words per minute (WPM) and accuracy with customizable test durations (1, 2, or 5 minutes). Uses English passages of varying difficulty to assess your real-world typing performance.',
    faqs: [
      { q: 'What typing speed do employers expect?', a: 'Data entry: 45–75 WPM with 98%+ accuracy. Transcription: 60–80 WPM. Legal/medical: 70–90 WPM. General office: 40–50 WPM. Government typing tests (SSC): 35 WPM English, 30 WPM Hindi.' },
      { q: 'How is WPM calculated?', a: 'Gross WPM = (Total characters typed / 5) / Minutes. Net WPM = Gross WPM − (Errors / Minutes). The "5 characters" standard comes from the average English word length including spaces.' }
    ]
  },
  'ohm-advanced': {
    desc: 'Advanced Ohm\'s Law calculator with series and parallel resistance, AC impedance, and power factor correction for complex circuits.',
    what: 'This advanced Ohm\'s Law calculator goes beyond V=IR to handle series/parallel resistance combinations, AC circuit impedance with capacitive and inductive reactance, and power factor correction calculations for industrial electrical systems.',
    faqs: [
      { q: 'How do I calculate total resistance in parallel?', a: '1/R_total = 1/R₁ + 1/R₂ + 1/R₃. For 100Ω and 200Ω in parallel: 1/R = 1/100 + 1/200 = 3/200 → R = 66.67Ω. Parallel resistance is always less than the smallest individual resistor.' },
      { q: 'What is impedance in AC circuits?', a: 'Impedance (Z) = √(R² + (XL − XC)²) where XL = 2πfL (inductive) and XC = 1/(2πfC) (capacitive). At resonance (XL = XC), impedance equals pure resistance and current is maximum.' }
    ]
  },
  chemmolar: {
    desc: 'Calculate molar mass, moles, and mass for chemical compounds. Enter a chemical formula to get molecular weight and composition breakdown.',
    what: 'This molar mass calculator computes the molecular weight of any chemical compound from its formula. Enter formulas like H₂O, NaCl, C₆H₁₂O₆ to get molar mass (g/mol), element composition percentages, and conversions between mass, moles, and molecules.',
    faqs: [
      { q: 'How do I calculate moles from grams?', a: 'Moles = Mass (g) / Molar Mass (g/mol). For 36g of water (H₂O, molar mass 18 g/mol): 36/18 = 2 moles. One mole contains 6.022 × 10²³ molecules (Avogadro\'s number).' },
      { q: 'What is the molar mass of common compounds?', a: 'Water (H₂O): 18.015 g/mol. Table salt (NaCl): 58.44. Glucose (C₆H₁₂O₆): 180.16. Carbon dioxide (CO₂): 44.01. Ethanol (C₂H₅OH): 46.07. Sulfuric acid (H₂SO₄): 98.08.' }
    ]
  },
  kinematiccalc: {
    desc: 'Solve kinematics equations for projectile motion and linear motion. Find velocity, displacement, acceleration, and time of flight.',
    what: 'This kinematics calculator solves the four standard equations of motion for uniformly accelerated linear motion and projectile motion. Enter known values to find unknown quantities: displacement, initial velocity, final velocity, acceleration, and time.',
    faqs: [
      { q: 'What are the four kinematic equations?', a: 'v = u + at. s = ut + ½at². v² = u² + 2as. s = ½(u+v)t. Where u = initial velocity, v = final velocity, a = acceleration, t = time, s = displacement. These assume constant acceleration.' },
      { q: 'How do I solve projectile motion problems?', a: 'Separate into horizontal (constant velocity: x = v₀cos(θ)×t) and vertical (accelerated: y = v₀sin(θ)×t − ½gt²). Range = v₀²sin(2θ)/g. Max height = v₀²sin²(θ)/2g. Time of flight = 2v₀sin(θ)/g.' }
    ]
  },
  watertank: {
    desc: 'Calculate water tank capacity in liters from dimensions. Find the right tank size based on family size and daily water consumption.',
    what: 'This water tank calculator computes the volume of cylindrical, rectangular, and square tanks from physical dimensions. Also recommends the right tank size based on number of family members, daily water consumption, and water supply frequency.',
    faqs: [
      { q: 'What size water tank does my family need?', a: 'Average daily water consumption: 135 liters per person (Indian standard). Family of 4: 540 L/day. If water supply comes every alternate day, minimum tank: 1,000–1,200 liters. For daily supply: 500–750 liters is sufficient.' },
      { q: 'How do I calculate tank volume?', a: 'Rectangular: Length × Width × Height (all in meters) × 1,000 = liters. Cylindrical: π × radius² × height × 1,000 = liters. A cylindrical tank of 1m radius × 1.5m height: 3.14 × 1 × 1.5 × 1000 = 4,712 liters.' }
    ]
  }
};
