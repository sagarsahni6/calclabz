// Health & Fitness calculators content
'use strict';
module.exports = {
  bmi: {
    why: 'BMI remains the most widely used screening tool for weight-related health risks. For Indians and South Asians, standard WHO cutoffs can be misleading. Research shows South Asians develop type 2 diabetes and cardiovascular disease at lower BMI levels. Asian BMI classification uses lower thresholds: overweight at 23 (not 25) and obesity at 25 (not 30).',
    feats: ['Instant BMI with WHO and Asian classifications','Color-coded health risk categories','Ideal weight range based on height','Personalized health interpretation','Works offline — no data transmitted','Healthy range in kg and pounds'],
    tips: ['For Indians, use the Asian BMI scale — it accounts for higher metabolic risk at lower weights.','Combine BMI with waist circumference for a complete picture.','A 5–10% weight reduction significantly reduces cardiovascular risk if overweight.','Athletes should use body fat percentage instead — muscle weighs more than fat.','Measure weight at the same time each day for consistency.'],
    who: 'Health-conscious individuals, doctors during assessments, fitness enthusiasts, and insurance companies for risk evaluation.',
    formula: 'BMI = Weight (kg) / [Height (m)]². Classification: <18.5 Underweight, 18.5-22.9 Normal (Asian), 23-24.9 Overweight (Asian), ≥25 Obese (Asian).',
    example: 'Weight 75 kg, Height 170 cm (1.70 m): BMI = 75 / (1.70)² = 75 / 2.89 = 25.95. WHO: Overweight. Asian: Obese Class I. Ideal weight for 170 cm: 53.5-66.2 kg (Asian scale).',
    tbl: '<table><thead><tr><th>Category</th><th>WHO Range</th><th>Asian Range</th><th>Risk</th></tr></thead><tbody><tr><td>Underweight</td><td>&lt; 18.5</td><td>&lt; 18.5</td><td>Nutritional deficiency</td></tr><tr><td>Normal</td><td>18.5 – 24.9</td><td>18.5 – 22.9</td><td>Low</td></tr><tr><td>Overweight</td><td>25.0 – 29.9</td><td>23.0 – 24.9</td><td>Moderate</td></tr><tr><td>Obese I</td><td>30.0 – 34.9</td><td>25.0 – 29.9</td><td>High</td></tr><tr><td>Obese II</td><td>35.0+</td><td>30.0+</td><td>Very high</td></tr></tbody></table>',
    tblCap: 'BMI classification: WHO vs Asian cutoffs'
  },
  bmr: {
    why: 'Basal Metabolic Rate is the minimum calories your body burns at rest — just to keep you alive (breathing, circulation, cell production). BMR accounts for 60-75% of daily calorie expenditure. Knowing your BMR is the foundation for any weight management plan. The Mifflin-St Jeor equation (1990) is considered the most accurate for Indians.',
    feats: ['BMR using Mifflin-St Jeor and Harris-Benedict equations','Activity-level adjusted TDEE','Macronutrient breakdown for goals','Compare equations side by side','Age and gender-specific calculations','Calorie targets for weight loss/gain'],
    tips: ['BMR decreases about 2% per decade after age 20 — adjust your intake as you age.','Muscle mass increases BMR — strength training helps maintain metabolism.','Crash diets below BMR cause metabolic adaptation, making future weight loss harder.','Never eat below BMR for extended periods — it damages metabolism.','Protein has a higher thermic effect (20-30%) than carbs (5-10%) or fat (0-3%).'],
    who: 'Anyone starting a weight management plan, fitness coaches designing meal plans, nutritionists, and athletes optimizing performance.',
    formula: 'Mifflin-St Jeor: Men: BMR = 10×weight(kg) + 6.25×height(cm) – 5×age – 5. Women: BMR = 10×weight(kg) + 6.25×height(cm) – 5×age – 161.',
    example: 'Male, 30 years, 75 kg, 175 cm: BMR = 10(75) + 6.25(175) – 5(30) – 5 = 750 + 1093.75 – 150 – 5 = 1,688.75 calories/day. With moderate activity (×1.55): TDEE = 2,618 cal/day.',
    tbl: '<table><thead><tr><th>Age</th><th>Gender</th><th>Weight</th><th>Height</th><th>BMR</th><th>TDEE (Moderate)</th></tr></thead><tbody><tr><td>25</td><td>Male</td><td>70 kg</td><td>175 cm</td><td>1,699</td><td>2,634</td></tr><tr><td>25</td><td>Female</td><td>58 kg</td><td>163 cm</td><td>1,367</td><td>2,119</td></tr><tr><td>35</td><td>Male</td><td>80 kg</td><td>178 cm</td><td>1,738</td><td>2,694</td></tr><tr><td>35</td><td>Female</td><td>65 kg</td><td>165 cm</td><td>1,396</td><td>2,164</td></tr></tbody></table>',
    tblCap: 'BMR and TDEE examples by age and gender'
  },
  tdee: {
    why: 'Total Daily Energy Expenditure is the total calories you burn in a day including all activities. TDEE = BMR + exercise + NEAT (fidgeting, walking) + thermic effect of food. Understanding TDEE is crucial: eat below it to lose weight, above it to gain. Most Indians overestimate their activity level — office workers are "sedentary" even if they walk 30 minutes daily.',
    feats: ['TDEE calculation based on 5 activity levels','Calorie targets for weight loss, maintenance, and gain','Macronutrient split recommendations','Weekly calorie budget planner','Exercise calorie offset calculator','Deficit/surplus tracking'],
    tips: ['Most desk workers should select "Sedentary" — walking to work doesn\'t make you "Moderate."','A 500 calorie daily deficit leads to ~0.5 kg weight loss per week.','Track your weight for 2 weeks eating at calculated TDEE — adjust if weight changes.','NEAT (non-exercise activity) can account for 200-900 calories daily — stay active throughout the day.','Recalculate TDEE every 5 kg of weight change.'],
    who: 'Anyone on a fitness journey, bodybuilders in cutting/bulking phases, nutritionists creating meal plans, and health-conscious individuals.',
    formula: 'TDEE = BMR × Activity Factor. Sedentary: ×1.2, Light: ×1.375, Moderate: ×1.55, Active: ×1.725, Very Active: ×1.9.',
    example: 'BMR = 1,700 cal. Moderate activity (gym 3-5 days): TDEE = 1,700 × 1.55 = 2,635 cal. For 0.5 kg/week loss: 2,635 – 500 = 2,135 cal target.',
    tbl: '<table><thead><tr><th>Activity Level</th><th>Description</th><th>Multiplier</th><th>TDEE (BMR 1700)</th></tr></thead><tbody><tr><td>Sedentary</td><td>Desk job, no exercise</td><td>1.2</td><td>2,040</td></tr><tr><td>Light</td><td>Light exercise 1-3 days</td><td>1.375</td><td>2,338</td></tr><tr><td>Moderate</td><td>Moderate exercise 3-5 days</td><td>1.55</td><td>2,635</td></tr><tr><td>Active</td><td>Hard exercise 6-7 days</td><td>1.725</td><td>2,933</td></tr><tr><td>Very Active</td><td>Athlete/physical job</td><td>1.9</td><td>3,230</td></tr></tbody></table>',
    tblCap: 'Activity multipliers for TDEE calculation'
  },
  water: {
    why: 'Dehydration affects 75% of Indians according to health surveys, yet most people don\'t know how much water they actually need. The old "8 glasses a day" rule is a myth — water needs depend on weight, activity, climate, and diet. In India\'s hot climate, requirements are 20-30% higher than temperate regions. Proper hydration improves energy, cognition, digestion, and kidney function.',
    feats: ['Personalized water intake based on weight and activity','Climate and humidity adjustment','Exercise water loss compensation','Track daily intake with visual progress','Reminder schedule generator','Account for water from food sources'],
    tips: ['Base intake: 35 ml per kg body weight (e.g., 70 kg = 2.45 liters).','Add 500-700 ml per hour of exercise.','In Indian summers (35°C+), add 25-30% to base intake.','Urine color is the best indicator — pale yellow means adequate hydration.','Coffee and tea count toward intake — the diuretic effect is mild and offset.'],
    who: 'Health-conscious individuals, athletes and gym-goers, people in hot climates, and anyone managing kidney health.',
    formula: 'Base intake = Weight (kg) × 35 ml. Adjustments: +500 ml per 30 min exercise, +25% for hot climate (>30°C), +15% for high altitude.',
    example: '70 kg person, moderate exercise, Indian summer: Base = 70 × 35 = 2,450 ml. Exercise: +500 ml. Heat: +25% of base = +612 ml. Total ≈ 3.5 liters/day.',
    tbl: '<table><thead><tr><th>Weight</th><th>Sedentary</th><th>Active</th><th>Hot Climate Active</th></tr></thead><tbody><tr><td>50 kg</td><td>1.75 L</td><td>2.25 L</td><td>2.8 L</td></tr><tr><td>65 kg</td><td>2.28 L</td><td>2.78 L</td><td>3.5 L</td></tr><tr><td>80 kg</td><td>2.80 L</td><td>3.30 L</td><td>4.1 L</td></tr><tr><td>95 kg</td><td>3.33 L</td><td>3.83 L</td><td>4.8 L</td></tr></tbody></table>',
    tblCap: 'Daily water intake recommendations'
  },
  heartrate: {
    why: 'Heart rate training zones are the most effective way to optimize cardiovascular exercise. Whether you\'re burning fat, building endurance, or improving VO2 max, each zone targets different physiological adaptations. Using the Karvonen formula (which factors in resting heart rate) gives more personalized zones than the simple 220-age method.',
    feats: ['5 heart rate training zones with descriptions','Karvonen method using resting heart rate','Maximum heart rate estimation','Fat burning vs cardio zone comparison','Custom zone creation for specific sports','Recovery heart rate tracking'],
    tips: ['Fat burning zone (60-70% max HR) burns the highest percentage of fat calories — but total calorie burn is lower.','For weight loss, the cardio zone (70-80%) is actually more effective due to higher total calorie burn.','Measure resting heart rate first thing in the morning before getting out of bed.','Lower resting heart rate generally indicates better cardiovascular fitness.','If you can\'t talk during exercise, you\'re above the anaerobic threshold (80%+ zone).'],
    who: 'Runners optimizing training, gym-goers maximizing workouts, cardiac rehab patients, and fitness coaches designing programs.',
    formula: 'Max HR = 220 – Age. Karvonen: Target HR = [(Max HR – Resting HR) × %intensity] + Resting HR. Zones: 50-60% Recovery, 60-70% Fat Burn, 70-80% Cardio, 80-90% Anaerobic, 90-100% VO2 Max.',
    example: 'Age 30, Resting HR 65. Max HR = 190. Fat burn zone (60-70%): Lower = (190-65)×0.6 + 65 = 140 bpm. Upper = (190-65)×0.7 + 65 = 153 bpm.',
    tbl: '<table><thead><tr><th>Zone</th><th>%Max HR</th><th>Purpose</th><th>Age 30 (beats/min)</th></tr></thead><tbody><tr><td>Recovery</td><td>50-60%</td><td>Warm-up, cool-down</td><td>95-114</td></tr><tr><td>Fat Burn</td><td>60-70%</td><td>Fat metabolism</td><td>114-133</td></tr><tr><td>Cardio</td><td>70-80%</td><td>Aerobic fitness</td><td>133-152</td></tr><tr><td>Anaerobic</td><td>80-90%</td><td>Speed, power</td><td>152-171</td></tr><tr><td>VO2 Max</td><td>90-100%</td><td>Maximum effort</td><td>171-190</td></tr></tbody></table>',
    tblCap: 'Heart rate training zones for age 30'
  },
  age: {
    why: 'Knowing your exact age in years, months, and days is required for numerous applications: insurance premiums, visa applications, government scheme eligibility (PPF maturity, NPS withdrawal at 60), and competitive exam age limits. In India, many government exams have strict age cutoffs calculated to the exact day.',
    feats: ['Exact age in years, months, and days','Age in total days, hours, and minutes','Next birthday countdown','Age on any specific date','Multiple date-of-birth comparison','Zodiac sign and birth day details'],
    tips: ['For government exams, age is usually calculated as of a specific cutoff date — enter that date, not today.','UPSC age limit: 21-32 years (General), with relaxation for OBC (3 years), SC/ST (5 years).','Insurance premiums increase significantly after ages 35, 45, and 55.','NPS withdrawal becomes available at age 60 — plan your retirement date accordingly.','Some banks have maximum age limits for home loan eligibility (usually 60-65 at loan maturity).'],
    who: 'Students checking exam eligibility, insurance applicants, visa applicants needing exact age, and HR departments verifying employee ages.',
    formula: 'Age = Current Date – Date of Birth. Years = floor difference. Months = remaining months after full years. Days = remaining days after full months.',
    example: 'DOB: 15 March 1995, Current: 4 May 2026. Age = 31 years, 1 month, 19 days. Total = 11,373 days. Next birthday: 15 March 2027 (315 days away).',
    tbl: '<table><thead><tr><th>Application</th><th>Age Requirement</th><th>Calculated As Of</th></tr></thead><tbody><tr><td>UPSC (General)</td><td>21-32 years</td><td>1st Aug of exam year</td></tr><tr><td>SSC CGL</td><td>18-32 years</td><td>1st Jan of exam year</td></tr><tr><td>NPS Withdrawal</td><td>60 years</td><td>Date of birth</td></tr><tr><td>PPF Maturity</td><td>15 years from opening</td><td>Account opening date</td></tr></tbody></table>',
    tblCap: 'Common age requirements in India'
  },
  calories: {
    why: 'Understanding calories burned during different activities helps create effective fitness plans. A 70 kg person burns approximately 300-400 calories in 30 minutes of running, 200-250 calories in 30 minutes of cycling, and 150-200 calories walking briskly. MET (Metabolic Equivalent of Task) values standardize calorie burn across activities and body weights.',
    feats: ['Calories burned for 100+ activities','Personalized by body weight','Duration-adjustable calculations','Compare activities side by side','Heart rate-based estimation','Weekly calorie burn summary'],
    tips: ['Walking 10,000 steps burns approximately 400-500 calories depending on weight.','High-intensity intervals (HIIT) burn more total calories due to afterburn effect (EPOC).','Strength training burns fewer calories during exercise but increases BMR long-term.','Swimming burns 25-50% more than running due to water resistance and thermoregulation.','Don\'t rely on gym machine calorie displays — they overestimate by 15-20%.'],
    who: 'Fitness enthusiasts tracking workouts, weight loss planners, runners preparing for marathons, and health apps users wanting accurate data.',
    formula: 'Calories = MET × Weight (kg) × Duration (hours). MET values: Walking 3.5, Running 8-12, Cycling 6-10, Swimming 7-10, Yoga 3.',
    example: '70 kg person running (MET 9.8) for 45 minutes: Calories = 9.8 × 70 × 0.75 = 514.5 calories burned.',
    tbl: '<table><thead><tr><th>Activity</th><th>MET</th><th>Cal/30min (60kg)</th><th>Cal/30min (80kg)</th></tr></thead><tbody><tr><td>Walking (5 km/h)</td><td>3.5</td><td>105</td><td>140</td></tr><tr><td>Running (8 km/h)</td><td>8.3</td><td>249</td><td>332</td></tr><tr><td>Cycling (moderate)</td><td>6.8</td><td>204</td><td>272</td></tr><tr><td>Swimming (moderate)</td><td>7.0</td><td>210</td><td>280</td></tr><tr><td>Yoga</td><td>3.0</td><td>90</td><td>120</td></tr></tbody></table>',
    tblCap: 'Calories burned by activity and body weight'
  },
  sleep: {
    why: 'India ranks among the most sleep-deprived nations, with average sleep of 6.5 hours against the recommended 7-9 hours. Sleep cycles last approximately 90 minutes, and waking up mid-cycle causes grogginess. This calculator finds optimal bedtimes and wake times aligned to complete cycles, so you wake up refreshed.',
    feats: ['Optimal bedtime for desired wake-up time','Wake-up time for any bedtime','Sleep cycle visualization','Sleep debt calculator','Nap duration optimizer','Sleep quality tips based on schedule'],
    tips: ['Complete sleep cycles: aim for 5-6 cycles (7.5-9 hours) per night.','It takes 14 minutes on average to fall asleep — factor this into bedtime.','Avoid screens 30 minutes before bed — blue light suppresses melatonin.','Keep bedroom temperature at 18-22°C for optimal sleep quality.','Power naps should be 20 or 90 minutes — anything in between causes grogginess.'],
    who: 'Anyone wanting better sleep quality, shift workers planning rest, students optimizing study schedules, and health-conscious individuals.',
    formula: 'Optimal bedtime = Wake time – (Cycles × 90 min) – 14 min (fall asleep time). Cycles: 4 = 6h, 5 = 7.5h, 6 = 9h.',
    example: 'Wake at 6:30 AM. 6 cycles: 6:30 – 9h – 14min = 9:16 PM. 5 cycles: 6:30 – 7.5h – 14min = 10:46 PM.',
    tbl: '<table><thead><tr><th>Wake Time</th><th>4 Cycles (6h)</th><th>5 Cycles (7.5h)</th><th>6 Cycles (9h)</th></tr></thead><tbody><tr><td>5:30 AM</td><td>11:16 PM</td><td>9:46 PM</td><td>8:16 PM</td></tr><tr><td>6:00 AM</td><td>11:46 PM</td><td>10:16 PM</td><td>8:46 PM</td></tr><tr><td>6:30 AM</td><td>12:16 AM</td><td>10:46 PM</td><td>9:16 PM</td></tr><tr><td>7:00 AM</td><td>12:46 AM</td><td>11:16 PM</td><td>9:46 PM</td></tr></tbody></table>',
    tblCap: 'Optimal bedtimes by wake-up time'
  },
  macros: {
    why: 'Macronutrient balance is as important as total calories. The typical Indian diet is 60-70% carbohydrates, but for weight loss or muscle building, adjusting the protein-carb-fat ratio is essential. Most Indians are severely protein-deficient, averaging just 0.6 g/kg against the recommended 0.8-1.2 g/kg (higher for active individuals).',
    feats: ['Custom macro split for any goal','Protein, carbs, and fat in grams','Goal-based presets (weight loss, muscle gain, maintenance)','Indian food database integration','Meal timing suggestions','Vegetarian protein recommendations'],
    tips: ['For muscle gain: aim for 1.6-2.2 g protein per kg body weight.','Indian vegetarians: combine dal + rice, paneer, soy, and whey to meet protein needs.','Don\'t go below 0.3 g/kg fat — hormones need dietary fat to function.','50-55% carbs is fine for most Indians — rice and roti are not the enemy, excess is.','Distribute protein evenly across meals (25-30g per meal) for optimal absorption.'],
    who: 'Fitness enthusiasts, bodybuilders, weight loss seekers, nutritionists, and anyone wanting a balanced diet.',
    formula: 'Protein calories = grams × 4. Carb calories = grams × 4. Fat calories = grams × 9. Total = Protein cal + Carb cal + Fat cal = TDEE target.',
    example: 'TDEE 2,400 cal, Goal: muscle gain (40% carb, 30% protein, 30% fat). Carbs = 960 cal = 240g. Protein = 720 cal = 180g. Fat = 720 cal = 80g.',
    tbl: '<table><thead><tr><th>Goal</th><th>Protein</th><th>Carbs</th><th>Fat</th></tr></thead><tbody><tr><td>Weight Loss</td><td>35-40%</td><td>30-35%</td><td>25-30%</td></tr><tr><td>Maintenance</td><td>25-30%</td><td>45-55%</td><td>20-30%</td></tr><tr><td>Muscle Gain</td><td>30-35%</td><td>40-45%</td><td>20-25%</td></tr><tr><td>Keto</td><td>25-30%</td><td>5-10%</td><td>60-70%</td></tr></tbody></table>',
    tblCap: 'Macronutrient split by fitness goal'
  },
  pregnancy: {
    why: 'Knowing your expected due date helps plan prenatal care, maternity leave, and delivery preparations. The standard Naegele\'s rule adds 280 days (40 weeks) to the first day of the last menstrual period (LMP). Only about 5% of babies arrive on the exact due date — the normal range is 37-42 weeks.',
    feats: ['Due date from LMP or conception date','Current trimester and week identification','Key milestone dates (ultrasound, glucose test)','Weight gain tracker by trimester','Baby size comparison by week','Maternity leave planning'],
    tips: ['First ultrasound (6-8 weeks) gives the most accurate due date — more reliable than LMP.','Normal pregnancy: 37-42 weeks. Pre-term: <37 weeks. Post-term: >42 weeks.','Take 400 mcg folic acid daily from conception through first trimester.','Indian government provides 26 weeks maternity leave under the 2017 amendment.','Schedule glucose tolerance test between weeks 24-28.'],
    who: 'Expecting parents, gynecologists, midwives, and HR departments planning maternity leave.',
    formula: 'EDD (Naegele\'s Rule) = LMP + 280 days. Alternative: LMP + 7 days – 3 months + 1 year. From conception: + 266 days.',
    example: 'LMP: 15 January 2026. EDD = 15 Jan + 280 days = 22 October 2026. Week 12 ultrasound: ~8 April 2026. Glucose test: ~8 July 2026.',
    tbl: '<table><thead><tr><th>Milestone</th><th>Week</th><th>What Happens</th></tr></thead><tbody><tr><td>First Ultrasound</td><td>6-8</td><td>Heartbeat confirmation</td></tr><tr><td>NT Scan</td><td>11-14</td><td>Chromosomal screening</td></tr><tr><td>Anomaly Scan</td><td>18-22</td><td>Detailed anatomy check</td></tr><tr><td>Glucose Test</td><td>24-28</td><td>Gestational diabetes screening</td></tr><tr><td>Full Term</td><td>37-42</td><td>Baby is ready for delivery</td></tr></tbody></table>',
    tblCap: 'Key pregnancy milestones by week'
  }
};
