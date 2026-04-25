// Unique SEO content for basic everyday and math calculators
'use strict';
module.exports = {
  // ── EVERYDAY (22 calcs) ───────────────────────────────────────────
  freelancerate: {
    desc: 'Calculate your ideal freelance hourly rate based on target income, working hours, taxes, and business expenses. Stop undercharging.',
    what: 'This freelance rate calculator works backwards from your desired annual income to determine what you should charge per hour or per project. Accounts for taxes, health insurance, equipment costs, unpaid time (marketing, admin), and vacation days.',
    howToSteps: [
      'Enter your Desired Annual Income, Billable Days per Year, Billable Hours per Day, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your freelance rate results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator uses the formula: Hourly Rate = (Annual Income + Expenses) / (1 − Tax%) / Billable Days / Hours per Day. Where Billable days ≈ 220/year ; Account for taxes, expenses, and non-billable time. Gross income must cover desired income, business expenses, and taxes. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How do I calculate my freelance hourly rate?', a: 'Target annual income + Business expenses + Taxes + Benefits = Total needed. Divide by billable hours (typically 1,000–1,400/year, not 2,080). If you need ₹15L/year with 1,200 billable hours: ₹1,250/hour minimum.' },
      { q: 'Why are billable hours less than total working hours?', a: 'Only 60–70% of your time is billable. The rest goes to finding clients, invoicing, admin, learning, marketing, and communication. A 40-hour week typically yields 25–30 billable hours.' }
    ]
  },
  tipsplit: {
    desc: 'Split a restaurant bill with tip among any number of people. Calculate per-person share with customizable tip percentage.',
    what: 'This tip and bill splitter calculates the total amount including tip and divides it evenly or unevenly among diners. Supports custom tip percentages, rounding options, and handles the case where some people had more expensive items.',
    howToSteps: [
      'Enter your Total Bill Amount, Tip Percentage, Number of People, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your tip split results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator uses the formula: Per Person = (Bill + Tip + Extra) / Number of People. Where Tip = Bill × Tip% / 100 ; Standard tip in India: 5-10%. Split the total (bill + tip + any extra charges) equally among all diners. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What is the standard tip percentage in India?', a: 'Tipping is not mandatory in India but appreciated: 5–10% at casual restaurants, 10–15% at fine dining. Check if a service charge (typically 10%) is already added to the bill. You can decline the service charge under consumer law.' },
      { q: 'Should I tip on the pre-tax or post-tax amount?', a: 'Etiquette says tip on the pre-tax (pre-GST) subtotal. A ₹1,000 bill with 5% GST = ₹1,050. A 10% tip should be ₹100 (on ₹1,000), not ₹105. In practice, most people tip on the total.' }
    ]
  },
  evpetrolsavings: {
    desc: 'Calculate how much you save by switching from a petrol/diesel car to an electric vehicle. Compare annual fuel vs charging costs and breakeven.',
    what: 'This EV savings calculator compares the running cost of an electric vehicle versus a petrol or diesel car based on your daily commute, fuel prices, and electricity tariff. Shows monthly savings, annual savings, and when the EV price premium pays for itself.',
    howToSteps: [
      'Enter your EV Price (on-road), Petrol/Diesel Car Price, Daily Driving, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your ev vs petrol savings results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator uses the formula: Total Cost = Purchase + Running Cost + Maintenance × Years. Where EV: ₹1-1.5/km ; Petrol: ₹7-8/km ; EV maintenance 60% lower. EV has higher upfront cost but much lower running and maintenance costs over time. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How much cheaper is an EV to run than petrol?', a: 'An EV costs ₹1.0–1.5 per km to charge at home (₹8/kWh tariff). A petrol car costs ₹5–8 per km (₹100/L, 12–20 km/L). That is 70–80% cheaper. A 40km daily commute saves ₹5,000–7,000 per month on fuel.' },
      { q: 'When does the EV premium break even?', a: 'If the EV costs ₹5L more than the petrol variant and saves ₹6,000/month, breakeven is ~7 years. Factor in lower maintenance (no oil changes, fewer brake pad replacements, no clutch) and it drops to 5–6 years.' }
    ]
  },
  weddingbudget: {
    desc: 'Plan your Indian wedding budget across all categories — venue, catering, decoration, photography, clothing, and miscellaneous expenses.',
    what: 'This wedding budget planner breaks down your total budget across standard Indian wedding categories with recommended allocation percentages. Covers venue, food and catering, décor and flowers, photography/videography, bridal and groom attire, jewelry, invitations, and entertainment.',
    howToSteps: [
      'Enter your Number of Guests, City Tier, Number of Functions, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your wedding budget results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator uses the formula: Total = Catering + Venue + Decor + Photography + Clothes + 15% Misc. Where City multiplier: Metro(1.5×), Tier-2(1.0×), Tier-3(0.7×). Catering is typically the largest expense (40-50% of total budget). All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What is the average wedding cost in India?', a: 'Metro cities: ₹15–50L for a mid-range wedding (200–500 guests). Tier-2 cities: ₹8–20L. Budget weddings: ₹3–8L. Luxury weddings: ₹50L–5Cr+. Venue and catering alone consume 40–50% of the total budget.' },
      { q: 'How should I allocate my wedding budget?', a: 'Venue + catering: 40–50%. Décor: 10–15%. Photography/video: 8–12%. Clothing + jewelry: 10–15%. Music/entertainment: 5–8%. Invitations: 2–3%. Miscellaneous/buffer: 10–15%. Always keep a 10% contingency.' }
    ]
  },
  rentafford: {
    desc: 'Calculate how much rent you can afford based on your monthly income. Apply the 30% rule and factor in utilities and other obligations.',
    what: 'This rent affordability calculator determines the maximum rent you should pay based on your take-home salary, existing EMIs, and essential expenses. Follows the widely recommended guideline of spending no more than 30% of gross income on housing.',
    howToSteps: [
      'Enter your Monthly Take-Home Salary, Monthly Fixed Expenses, Existing EMIs, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your rent affordability results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator uses the formula: Max Rent = (Salary − Expenses − EMIs − Savings) × 90%. Where Recommended: Rent ≤ 30% of income ; Stretch limit: 40%. Financial advisors recommend spending no more than 30% of take-home on rent. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What percentage of salary should go to rent?', a: 'The 30% rule: rent should not exceed 30% of gross monthly income. In expensive metros like Mumbai or Bangalore, many stretch to 40%. For financial health, keep housing + utilities under 35% of take-home pay.' },
      { q: 'How do I calculate affordable rent from my salary?', a: 'Monthly take-home × 0.30 = max rent. With ₹60,000 in-hand: affordable rent is ₹18,000. If you have ₹10,000 in EMIs, reduce to ₹14,000–15,000. Factor in utilities (₹2,000–5,000) and maintenance charges.' }
    ]
  },
  travelbudget: {
    desc: 'Plan your trip budget with cost estimates for flights, hotels, food, local transport, activities, and shopping. Get a daily and total trip cost.',
    what: 'This travel budget calculator estimates total trip costs by breaking down expenses across flights, accommodation, meals, local transport, sightseeing, activities, and shopping. Provides daily budget and total cost with domestic and international destination presets.',
    howToSteps: [
      'Enter your Trip Duration, Number of Travelers, Destination Type, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your travel budget results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator uses the formula: Total = Daily Cost × People × Days + Flights + 15% Buffer. Where Budget: ₹2K/day ; Mid-range: ₹5K/day ; Luxury: ₹12K/day ; International: ₹15K/day. Always add a 15% buffer for unexpected expenses, tips, and activities. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How much should I budget per day for travel in India?', a: 'Budget travel: ₹1,500–2,500/day (hostels, street food, public transport). Mid-range: ₹4,000–8,000/day (3-star hotels, restaurants, private transport). Luxury: ₹15,000+/day. Goa and Rajasthan are pricier than Northeast or Himachal.' },
      { q: 'What is the average cost of an international trip from India?', a: 'Southeast Asia (Thailand, Bali): ₹50K–80K/person for 7 days. Europe: ₹1.5L–3L for 10 days. Dubai: ₹60K–1.2L for 5 days. These include flights, stay, food, and activities at mid-range comfort.' }
    ]
  },
  carbonfootprint: {
    desc: 'Calculate your annual carbon footprint from transport, electricity, diet, and shopping. See how your emissions compare to the global average.',
    what: 'This carbon footprint calculator estimates your annual CO₂ emissions across four categories: transportation (car, flights), home energy (electricity, cooking gas), food (meat vs plant-based), and consumption (shopping, waste). Compares your footprint to Indian and global averages.',
    howToSteps: [
      'Enter your Car Travel per Year, Car Fuel Efficiency, Short Flights per Year (<3hrs), and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your carbon footprint results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator uses the formula: Total CO₂ = Car + Flights + Electricity + Diet emissions. Where Car: km/mileage × 2.31 kg/L ; Flight: ~255 kg/short flight ; Grid: 0.82 kg/kWh (India). India average carbon footprint is 1.9 tonnes/year, global average is 4 tonnes. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What is the average Indian\'s carbon footprint?', a: 'India average: 1.9 tonnes CO₂/year per capita (vs global average 4.7 tonnes). However, urban middle-class Indians with cars and AC typically emit 5–10 tonnes. A single round-trip flight to Europe adds 2–3 tonnes.' },
      { q: 'What reduces carbon footprint the most?', a: 'Biggest impact: (1) Fly less (one transatlantic flight = 2.5 tonnes), (2) Reduce car use or go electric (saves 1–3 tonnes/year), (3) Eat less meat (saves 0.5–1.5 tonnes), (4) Switch to renewable energy.' }
    ]
  },
  ecomprofit: {
    desc: 'Calculate e-commerce product profit margins after marketplace fees, shipping, packaging, GST, and returns. Supports Amazon, Flipkart, and Meesho.',
    what: 'This e-commerce profit calculator shows your actual profit per order after deducting all marketplace charges: platform commission, closing fees, shipping, packaging, GST, payment gateway fees, and estimated return costs. Helps set profitable pricing.',
    howToSteps: [
      'Enter your Selling Price, Product / Manufacturing Cost, Shipping Cost, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your e-commerce profit results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator computes e-commerce profit values using standard formulas. Inputs are validated and processed entirely in your browser for instant, private results.',
    faqs: [
      { q: 'What fees does Amazon India charge sellers?', a: 'Referral fee: 5–15% (varies by category). Closing fee: ₹4–57 per unit based on price. FBA fulfillment: ₹29–600+ based on weight/size. GST on all fees. Total Amazon deductions are typically 30–40% of selling price.' },
      { q: 'What is a good profit margin for e-commerce?', a: 'After all marketplace deductions, target 15–25% net margin. Below 10% is risky due to return rates (5–20% in fashion). Factor in ₹20–60 packaging cost per order and 2–8% return shipping absorption.' }
    ]
  },
  restaurantcost: {
    desc: 'Calculate food cost percentage and menu pricing for restaurant dishes. Determine the ideal selling price based on ingredient costs.',
    what: 'This restaurant cost calculator computes the food cost percentage for each menu item and recommends an optimal selling price. Helps restaurant owners maintain healthy margins by tracking ingredient costs against revenue per dish.',
    howToSteps: [
      'Enter your Ingredient / Raw Cost, Target Food Cost %, Portion Size, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your restaurant cost results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator computes restaurant cost values using standard formulas. Inputs are validated and processed entirely in your browser for instant, private results.',
    faqs: [
      { q: 'What is an ideal food cost percentage?', a: 'Industry standard: 28–35% of menu price should be ingredient cost. Fine dining can go to 40% (higher ticket size). QSRs target 25–30%. A dish costing ₹80 in ingredients should be priced at ₹230–285.' },
      { q: 'How do I calculate food cost percentage?', a: 'Food Cost % = (Total Ingredient Cost / Selling Price) × 100. If a biryani costs ₹120 in ingredients and sells at ₹399: (120/399) × 100 = 30%. Factor in waste (5–10%) for perishable ingredients.' }
    ]
  },
  subscriptionpricing: {
    desc: 'Calculate SaaS subscription pricing tiers. Model monthly vs annual pricing, churn impact, and customer lifetime value (CLV).',
    what: 'This subscription pricing calculator helps SaaS and membership businesses model pricing tiers, annual discount strategies, monthly recurring revenue (MRR), and customer lifetime value based on churn rate and average revenue per user.',
    howToSteps: [
      'Enter your Monthly Subscription Price, Current Subscribers, Monthly Churn Rate, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your subscription pricing results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator computes subscription pricing values using standard formulas. Inputs are validated and processed entirely in your browser for instant, private results.',
    faqs: [
      { q: 'What annual discount should I offer?', a: 'Standard: 15–20% discount for annual billing (equivalent to "2 months free"). This locks in customers and reduces churn. Example: ₹999/month or ₹9,999/year (16% discount). Some offer 30–40% off for annual.' },
      { q: 'How does churn affect lifetime value?', a: 'Customer Lifetime = 1/Monthly Churn Rate. At 5% monthly churn: average customer stays 20 months. CLV = 20 × ₹999 = ₹19,980. Reducing churn from 5% to 3% increases CLV by 67% to ₹33,300.' }
    ]
  },
  uniteconomics: {
    desc: 'Calculate unit economics — customer acquisition cost (CAC), lifetime value (LTV), and LTV:CAC ratio for your business or startup.',
    what: 'This unit economics calculator computes CAC (Customer Acquisition Cost), LTV (Lifetime Value), and the critical LTV:CAC ratio that determines if your business model is sustainable. Includes payback period and contribution margin analysis.',
    howToSteps: [
      'Enter your Revenue per Unit / Order, COGS per Unit, Operating Cost per Unit, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your unit economics results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator computes unit economics values using standard formulas. Inputs are validated and processed entirely in your browser for instant, private results.',
    faqs: [
      { q: 'What is a healthy LTV:CAC ratio?', a: 'LTV:CAC ≥ 3:1 is the gold standard — you earn ₹3 for every ₹1 spent acquiring a customer. Below 1:1 means you lose money per customer. Between 1–3 needs optimization. Above 5:1 suggests underinvestment in growth.' },
      { q: 'How do I calculate CAC?', a: 'CAC = Total Sales & Marketing Spend / Number of New Customers. If you spent ₹5L on ads and sales team last month and acquired 100 customers: CAC = ₹5,000. Include salaries, ad spend, tools, and commissions.' }
    ]
  },
  eventbudget: {
    desc: 'Plan your event budget with vendor cost breakdown — venue, food, entertainment, A/V, decoration, staffing, and contingency allocation.',
    what: 'This event budget planner allocates your total budget across standard event categories: venue rental, catering, audio-visual, decoration, entertainment, marketing, staffing, and transportation. Works for corporate events, conferences, and social gatherings.',
    howToSteps: [
      'Enter your Number of Guests, Venue Cost, Catering per Head, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your event budget results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator computes event budget values using standard formulas. Inputs are validated and processed entirely in your browser for instant, private results.',
    faqs: [
      { q: 'How much should I budget for a corporate event?', a: 'Per attendee: ₹2,000–5,000 for half-day seminars. ₹5,000–15,000 for full-day conferences with meals. ₹15,000–50,000 for gala dinners or awards nights. Venue and catering consume 50–60% of the total budget.' },
      { q: 'What is the recommended contingency for events?', a: 'Always allocate 10–15% contingency. Last-minute changes (extra guests, weather issues, equipment failure) are near-certain in events. For outdoor events, increase contingency to 20% for weather-related backup plans.' }
    ]
  },
  householdbudget: {
    desc: 'Create a monthly household budget using the 50/30/20 rule. Allocate income across needs, wants, and savings for financial health.',
    what: 'This household budget calculator distributes your monthly income using the 50/30/20 framework: 50% for needs (housing, food, utilities), 30% for wants (dining out, entertainment), and 20% for savings and debt repayment. Customizable for Indian household expenses.',
    howToSteps: [
      'Enter your Monthly Take-Home Income, Rent / EMI, Groceries & Household, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your household budget results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator computes household budget values using standard formulas. Inputs are validated and processed entirely in your browser for instant, private results.',
    faqs: [
      { q: 'What is the 50/30/20 budget rule?', a: '50% Needs: rent, groceries, utilities, insurance, EMIs. 30% Wants: entertainment, dining, shopping, subscriptions. 20% Savings: investments, emergency fund, extra debt payments. Adjust based on income — higher earners can save 30–40%.' },
      { q: 'What is the average monthly household expense in India?', a: 'Metro cities: ₹40,000–80,000 (family of 4). Tier-2 cities: ₹25,000–50,000. This includes rent, groceries (₹8,000–15,000), utilities (₹3,000–6,000), transport, education, and healthcare.' }
    ]
  },
  laundry: {
    desc: 'Calculate laundry load size, detergent amount, and water usage. Estimate washing machine running cost per load.',
    what: 'This laundry calculator estimates the optimal detergent quantity, water usage, and electricity cost per wash based on your washing machine capacity, load size, and water hardness. Helps optimize washing efficiency and reduce costs.',
    howToSteps: [
      'Enter your Chest Circumference, Waist Circumference, Height in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your laundry results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator uses the formula: Size mapping based on chest circumference ranges. Where US: XS/S/M/L/XL/XXL ; EU: 44-54 ; UK: 34-44. Sizes vary between brands and regions. Always check the specific brand\'s size chart. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How much detergent should I use per wash?', a: 'Standard load (3–4 kg): 1–2 tablespoons powder/liquid. HE machines: half that amount. More is not better — excess detergent leaves residue on clothes, causes musty odor, and damages the machine over time.' },
      { q: 'What is the cost per washing machine load?', a: 'A typical front-loader uses 0.5–1 kWh electricity (₹4–8) and 40–60 liters water (₹2–4). Adding detergent (₹5–10) gives total cost of ₹11–22 per load. Top-loaders use 2–3× more water.' }
    ]
  },
  cooking: {
    desc: 'Scale recipe ingredients up or down by servings. Convert cooking measurements between cups, tablespoons, grams, and milliliters.',
    what: 'This cooking calculator scales recipe ingredients proportionally when changing serving sizes and converts between common Indian and international cooking measurements: cups, tablespoons, teaspoons, grams, milliliters, and ounces.',
    howToSteps: [
      'Enter your Amount, From Unit, Ingredient (for grams) in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your cooking measurement results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator uses the formula: ml = Amount × Conversion Factor | Grams = ml × Density. Where 1 Cup = 240 ml ; 1 tbsp = 14.8 ml ; 1 tsp = 4.9 ml. Weight (grams) varies by ingredient density. Flour is lighter than sugar per cup. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How do I convert cups to grams for Indian cooking?', a: 'It depends on the ingredient. 1 cup flour (maida): 120g. 1 cup rice: 195g. 1 cup sugar: 200g. 1 cup dahi (yogurt): 245g. 1 cup oil/ghee: 215g. Weight is more accurate than volume for baking.' },
      { q: 'How do I scale a recipe from 4 to 6 servings?', a: 'Multiply each ingredient by (6/4) = 1.5. If the recipe needs 2 cups rice for 4 people: 2 × 1.5 = 3 cups for 6 people. Spices often need less scaling — use 1.25× instead of 1.5× for chili and salt.' }
    ]
  },
  shoesize: {
    desc: 'Convert shoe sizes between Indian, US, UK, and EU systems. Find your size across brands with a foot length measurement chart.',
    what: 'This shoe size converter translates between Indian, US, UK, and European shoe sizing systems for men, women, and children. Enter your foot length in cm to find the correct size across all systems, reducing the guesswork of online shoe shopping.',
    howToSteps: [
      'Enter your Size Value, From System in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your shoe size results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator uses the formula: EU = US_Men × 1.5 + 33 | UK = US_Men − 0.5. Where US Women = US Men + 1.5 ; Foot length (cm) ≈ US × 0.838 + 22.5. Shoe sizes vary between brands. Always measure foot length in cm for most accurate conversion. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How do Indian shoe sizes compare to US and UK?', a: 'Indian sizes match UK sizes (both are in the UK system). US sizes are 1 size larger. So Indian/UK 8 = US 9. EU uses a completely different scale: UK 8 ≈ EU 42.' },
      { q: 'How do I measure my foot size at home?', a: 'Stand on paper, trace your foot, and measure the longest distance (heel to big toe) in cm. Add 0.5–1 cm for toe room. Measure both feet — they are often different sizes. Use the larger foot for sizing.' }
    ]
  },
  petage: {
    desc: 'Convert your pet\'s age to human years. Updated formula for dogs (by breed size), cats, and other common pets.',
    what: 'This pet age calculator converts your dog or cat\'s age to equivalent human years using the latest veterinary science — not the old 7× rule. Accounts for breed size (small, medium, large dogs age differently) and species-specific aging curves.',
    howToSteps: [
      'Enter your Pet\'s Age, Pet Type, Dog Weight (for dogs) in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your pet age results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator uses the formula: Dog: varies by size | Cat: 15 (yr1) + 9 (yr2) + 4/yr after. Where Small dog life: ~16 yrs ; Medium: ~13 yrs ; Large: ~10 yrs ; Cat: ~15 yrs. Larger dogs age faster. The old \'7 years per human year\' rule is inaccurate. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'Is 1 dog year really 7 human years?', a: 'No — that is outdated. Dogs age faster initially: 1 dog year ≈ 15 human years. Year 2: +9 years. Year 3+: +4–5 years each. A 5-year-old dog is roughly 36 human years, not 35. Large breeds age faster than small breeds.' },
      { q: 'How long do dogs and cats live on average?', a: 'Small dogs (Pomeranian): 12–16 years. Medium dogs (Labrador): 10–13 years. Large dogs (German Shepherd): 9–11 years. Giant breeds (Great Dane): 7–10 years. Cats: 12–18 years. Indian pariah dogs: 13–17 years.' }
    ]
  },
  stopwatch: {
    desc: 'Online stopwatch with lap timing, split times, and countdown timer. Millisecond precision for sports training and time tracking.',
    what: 'This digital stopwatch provides millisecond-accurate timing with lap split recording, countdown mode, and a visual timer. Ideal for sports training, cooking, presentations, and any activity requiring precise time measurement.',
    howToSteps: [
      'Enter your Countdown (minutes, 0 = stopwatch), Lap interval in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your stopwatch results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator uses the formula: Time = Hours × 3600 + Minutes × 60 + Seconds. Where Countdown mode: counts down from set time ; Stopwatch mode: counts up. Simple time calculation and conversion between hours, minutes, and seconds. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What is the difference between lap time and split time?', a: 'Split time is the total elapsed time from start. Lap time is the duration of each individual segment. Example: After three 400m laps with splits of 1:02, 2:08, 3:20 — lap times are 1:02, 1:06, and 1:12.' },
      { q: 'How accurate is an online stopwatch?', a: 'Browser-based stopwatches are accurate to ~10–15 milliseconds (limited by JavaScript timing). For casual use, this is more than sufficient. Professional sports timing uses dedicated hardware accurate to 1 millisecond.' }
    ]
  },
  randomnum: {
    desc: 'Generate random numbers within a custom range. Supports integers, decimals, no-repeat mode, and bulk generation for lotteries and sampling.',
    what: 'This random number generator produces unbiased random numbers within your specified range. Supports single or bulk generation, integer-only or decimal, no-repeat (unique) mode for drawings and sampling, and even/odd filtering.',
    howToSteps: [
      'Enter your Minimum, Maximum, How many numbers, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your random number results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator uses the formula: Random = min + Math.random() × (max − min + 1). Where Integers: floor the result ; Dice: random(1-6) ; Coin: random < 0.5. Uses pseudo-random number generation. Sufficient for most non-cryptographic purposes. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'Are these truly random numbers?', a: 'Browsers use crypto-grade pseudorandom number generators (CSPRNG) which are statistically indistinguishable from true randomness for all practical purposes including lotteries, sampling, and games. They are not predictable.' },
      { q: 'How can I use this for a lottery or giveaway?', a: 'Set the range (e.g., 1–500 for 500 participants), enable "no repeat" mode, and generate the required number of winners. Each number has an equal probability of being selected.' }
    ]
  },
  cartco: {
    desc: 'Calculate Cartesian coordinates distance, midpoint, and slope between two points. Convert between Cartesian and polar coordinates.',
    what: 'This Cartesian coordinate calculator computes the distance, midpoint, and slope between two points on a 2D plane. Also converts between Cartesian (x,y) and polar (r,θ) coordinate systems with step-by-step formulas shown.',
    howToSteps: [
      'Enter your Car Price, Down Payment, Car Loan Rate, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your shopping cart results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator uses the formula: Annual Cost = EMI×12 + Fuel + Insurance + Maintenance + Depreciation. Where Depreciation ≈ 15% in Year 1 ; Cost/km = Annual Cost / Annual km. True cost of car ownership is much higher than just EMI. Factor in all running costs. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How do I find the distance between two points?', a: 'Distance = √((x₂−x₁)² + (y₂−y₁)²). Between points (3,4) and (7,1): √((7−3)² + (1−4)²) = √(16+9) = √25 = 5 units. This is the Euclidean distance formula derived from the Pythagorean theorem.' },
      { q: 'What is the midpoint formula?', a: 'Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2). Between (2,8) and (6,4): midpoint = (4,6). The midpoint divides the line segment into two equal halves.' }
    ]
  },
  wiresize: {
    desc: 'Calculate the correct wire gauge (AWG/SWG) for your electrical load. Prevent overheating with proper wire sizing based on current and distance.',
    what: 'This wire size calculator determines the correct wire gauge for your electrical installation based on current load, cable run length, acceptable voltage drop, and insulation type. Supports AWG (American), SWG (British/Indian), and metric sizing.',
    howToSteps: [
      'Enter your Current Load, Cable Run (one-way), System Voltage, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your wire size results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator uses the formula: Area = (2 × ρ × L × I) / Max Drop. Where ρ = 0.0175 Ω·mm²/m (copper) ; L = One-way length ; I = Current ; Max Drop = V × Drop%. Wire size must handle current without excessive voltage drop. Standard sizes: 1, 1.5, 2.5, 4, 6, 10 mm². All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What wire size do I need for a 15A circuit?', a: 'For 15A at standard distances: 1.5 sq mm (16 AWG) copper for up to 15m run. For longer runs (30m+), use 2.5 sq mm (14 AWG) to keep voltage drop under 3%. Always size up if in doubt.' },
      { q: 'What is voltage drop and why does it matter?', a: 'Voltage drop is the loss of voltage through the wire due to resistance. Keep it under 3% for branch circuits and 5% total. Excessive drop causes dim lights, slow motors, and wasted energy as heat in the wire. Longer runs need thicker wire.' }
    ]
  },
  pixelresolution: {
    desc: 'Calculate pixel density (PPI), total megapixels, and display aspect ratio. Compare screen resolutions across devices and monitors.',
    what: 'This pixel resolution calculator computes pixels per inch (PPI), total megapixels, and aspect ratio from screen dimensions and resolution. Compare display sharpness between phones, tablets, monitors, and TVs to make informed purchase decisions.',
    howToSteps: [
      'Enter your Width, Height, Bit Depth, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your pixel resolution results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator uses the formula: Megapixels = (Width × Height) / 1,000,000 | File Size = W × H × BPP / 8 / 1024². Where BPP = Bits per pixel (8/16/24/32) ; Print size = Pixels / DPI × 2.54 cm. DPI (dots per inch) determines print quality. 300 DPI is standard for photo printing. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What PPI is considered good for a display?', a: 'Phones (held at 30cm): 300+ PPI (Apple Retina standard). Monitors (60cm): 100–150 PPI. TVs (3m): 40–80 PPI. Above 300 PPI, the human eye cannot distinguish individual pixels at normal viewing distance.' },
      { q: 'What is the difference between 1080p and 4K?', a: '1080p (Full HD): 1920×1080 = 2.07 megapixels. 4K (UHD): 3840×2160 = 8.29 megapixels — exactly 4× more pixels. On a 27" monitor, 4K has 163 PPI vs 82 PPI for 1080p, making text and images noticeably sharper.' }
    ]
  },

  // ── MATH (18 calcs) ───────────────────────────────────────────────
  average: {
    desc: 'Calculate mean, median, mode, and weighted average of any set of numbers. Supports up to 100 values with step-by-step solution.',
    what: 'This average calculator computes arithmetic mean, median, mode, geometric mean, harmonic mean, and weighted average for your data set. Shows step-by-step working and identifies which type of average is most appropriate for your data.',
    howToSteps: [
      'Enter your Numbers (comma-separated) in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your average results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator implements standard mathematical formulas for average operations. Computations follow established mathematical principles from standard textbooks. Results are precise to the level of JavaScript floating-point arithmetic.',
    faqs: [
      { q: 'What is the difference between mean, median, and mode?', a: 'Mean: sum of all values divided by count (affected by outliers). Median: middle value when sorted (robust to outliers). Mode: most frequent value. For salary data, median is better because a few high earners skew the mean upward.' },
      { q: 'When should I use weighted average?', a: 'When data points have different importance. CGPA is a weighted average — a 4-credit course counts more than a 2-credit course. Stock portfolio returns are weighted by investment amount in each stock.' }
    ]
  },
  ratio: {
    desc: 'Simplify ratios, find equivalent ratios, and solve proportion problems. Scale ratios up or down while maintaining the relationship.',
    what: 'This ratio calculator simplifies ratios to their lowest terms, finds equivalent ratios, and solves missing-value proportion problems (if a:b = c:x, find x). Supports 2-part and 3-part ratios with decimal and fraction inputs.',
    howToSteps: [
      'Enter your First Value (A), Second Value (B) in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your ratio results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator implements standard mathematical formulas for ratio operations. Computations follow established mathematical principles from standard textbooks. Results are precise to the level of JavaScript floating-point arithmetic.',
    faqs: [
      { q: 'How do I simplify a ratio?', a: 'Divide both parts by their greatest common divisor (GCD). Ratio 24:36 → GCD is 12 → simplified to 2:3. For three-part ratios like 12:18:24, GCD is 6, giving 2:3:4.' },
      { q: 'How do I solve a proportion?', a: 'Cross multiply. If 3:5 = x:20, then 3 × 20 = 5 × x → 60 = 5x → x = 12. This works for recipe scaling, map distances, and any proportional relationship.' }
    ]
  },
  squareroot: {
    desc: 'Calculate square root, cube root, and nth root of any number. Shows perfect square check and simplified radical form.',
    what: 'This root calculator computes the square root, cube root, or any nth root of a number with high precision. Shows whether the number is a perfect square, provides the simplified radical form (e.g., √72 = 6√2), and handles negative numbers with complex results.',
    howToSteps: [
      'Enter your Number, Root (nth) in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your square root results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator implements standard mathematical formulas for square root operations. Computations follow established mathematical principles from standard textbooks. Results are precise to the level of JavaScript floating-point arithmetic.',
    faqs: [
      { q: 'How do I simplify a square root?', a: 'Factor out perfect squares. √72 = √(36 × 2) = 6√2. √200 = √(100 × 2) = 10√2. Find the largest perfect square factor, take its root out, and leave the remainder under the radical.' },
      { q: 'What are perfect squares up to 400?', a: '1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400. Memorizing these helps with mental math and quickly simplifying radicals.' }
    ]
  },
  logarithm: {
    desc: 'Calculate logarithms in any base — common (log₁₀), natural (ln), and custom bases. Includes antilog and change-of-base conversions.',
    what: 'This logarithm calculator computes log values for any base (log₁₀, ln, log₂, or custom). Also calculates antilogarithms (inverse), applies the change-of-base formula, and shows the relationship between logarithms and exponents.',
    howToSteps: [
      'Enter your Number, Log Base in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your logarithm results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator implements standard mathematical formulas for logarithm operations. Computations follow established mathematical principles from standard textbooks. Results are precise to the level of JavaScript floating-point arithmetic.',
    faqs: [
      { q: 'What is a logarithm in simple terms?', a: 'A logarithm answers: "What power do I raise the base to, to get this number?" log₁₀(1000) = 3 because 10³ = 1000. ln(e²) = 2 because e² = e². It is the inverse of exponentiation.' },
      { q: 'What is the difference between log and ln?', a: 'log (common logarithm) uses base 10 — used in engineering and pH calculations. ln (natural logarithm) uses base e (2.71828) — used in calculus, compound interest, and growth models. log₂ is used in computer science.' }
    ]
  },
  factorial: {
    desc: 'Calculate factorial (n!), double factorial (n!!), and subfactorial (!n) for any positive integer. Includes permutation and combination formulas.',
    what: 'This factorial calculator computes n! for any non-negative integer (up to very large values), along with double factorial, subfactorial (derangements), and the Gamma function for non-integers. Shows the step-by-step multiplication chain.',
    howToSteps: [
      'Enter your n (max 20), r (for nPr, nCr) in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your factorial results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator implements standard mathematical formulas for factorial operations. Computations follow established mathematical principles from standard textbooks. Results are precise to the level of JavaScript floating-point arithmetic.',
    faqs: [
      { q: 'What is factorial used for?', a: 'Factorials count arrangements (permutations). 5! = 120 means 5 items can be arranged in 120 different ways. Used in probability, combinations (nCr = n!/r!(n-r)!), Taylor series, and statistical distributions.' },
      { q: 'How fast do factorials grow?', a: 'Extremely fast. 10! = 3,628,800. 15! = 1.3 trillion. 20! = 2.4 × 10¹⁸. 52! (deck of cards arrangements) = 8 × 10⁶⁷ — more than the estimated atoms in the observable universe.' }
    ]
  },
  quadratic: {
    desc: 'Solve quadratic equations (ax² + bx + c = 0) using the quadratic formula. Shows discriminant, roots (real or complex), and vertex form.',
    what: 'This quadratic equation solver finds both roots using the quadratic formula x = (−b ± √(b²−4ac)) / 2a. Determines if roots are real and distinct, real and equal, or complex conjugates based on the discriminant. Also provides vertex form and axis of symmetry.',
    howToSteps: [
      'Enter your a (coefficient of x²), b (coefficient of x), c (constant) in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your quadratic equation solver results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator uses the formula: x = (−b ± √(b² − 4ac)) / 2a. Where a = coefficient of x² ; b = coefficient of x ; c = constant ; Δ = b²−4ac (discriminant). Quadratic formula solves ax²+bx+c=0. Discriminant determines: 2 real, 1 repeated, or complex roots. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What does the discriminant tell us?', a: 'D = b² − 4ac. If D > 0: two distinct real roots. D = 0: one repeated real root (vertex touches x-axis). D < 0: two complex conjugate roots (parabola does not cross x-axis).' },
      { q: 'How do I find the vertex of a parabola?', a: 'Vertex x-coordinate: x = −b/(2a). Substitute back to find y. For y = 2x² − 8x + 3: vertex x = 8/4 = 2, y = 2(4) − 16 + 3 = −5. Vertex: (2, −5). This is the minimum point when a > 0.' }
    ]
  },
  prime: {
    desc: 'Check if a number is prime, find prime factorization, and list prime numbers in any range. Includes divisibility rules and primality tests.',
    what: 'This prime number calculator checks primality, computes the complete prime factorization of any number, and lists all primes within a specified range. Uses efficient algorithms for fast checking even for large numbers.',
    howToSteps: [
      'Enter your Number to Check in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your prime number checker results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator implements standard mathematical formulas for prime number checker operations. Computations follow established mathematical principles from standard textbooks. Results are precise to the level of JavaScript floating-point arithmetic.',
    faqs: [
      { q: 'How do I check if a number is prime quickly?', a: 'Divide by all primes up to √n. If none divide evenly, it is prime. For 97: √97 ≈ 9.8, so check 2, 3, 5, 7. None divide 97 evenly → it is prime. Numbers ending in 0, 2, 4, 5, 6, 8 are never prime (except 2 and 5).' },
      { q: 'What is prime factorization used for?', a: 'Finding GCD and LCM, simplifying fractions, cryptography (RSA encryption relies on large prime factorization being computationally hard), and solving number theory problems.' }
    ]
  },
  numbersystem: {
    desc: 'Convert numbers between binary, octal, decimal, and hexadecimal systems. Perform arithmetic in any base with step-by-step conversion.',
    what: 'This number system converter translates between binary (base-2), octal (base-8), decimal (base-10), and hexadecimal (base-16). Shows the step-by-step conversion process using repeated division and positional notation methods.',
    howToSteps: [
      'Enter your Decimal Number, Custom Base (2–36) in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your number system results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator implements standard mathematical formulas for number system converter operations. Computations follow established mathematical principles from standard textbooks. Results are precise to the level of JavaScript floating-point arithmetic.',
    faqs: [
      { q: 'Why do computers use binary?', a: 'Computers use electronic switches that are either ON (1) or OFF (0). Binary maps perfectly to this two-state system. Everything — text, images, video — is ultimately stored as sequences of 0s and 1s.' },
      { q: 'How do I convert decimal to binary?', a: 'Repeatedly divide by 2, record remainders bottom-to-top. 25 ÷ 2 = 12 R1, 12 ÷ 2 = 6 R0, 6 ÷ 2 = 3 R0, 3 ÷ 2 = 1 R1, 1 ÷ 2 = 0 R1. Reading remainders: 11001₂ = 25₁₀.' }
    ]
  },
  statistics: {
    desc: 'Calculate comprehensive statistics — mean, variance, standard deviation, quartiles, IQR, skewness, and kurtosis for any data set.',
    what: 'This statistics calculator provides a full descriptive analysis of your data: measures of central tendency (mean, median, mode), spread (range, variance, standard deviation, IQR), and shape (skewness, kurtosis). Enter raw data or frequency distributions.',
    howToSteps: [
      'Enter your Numbers (comma-separated) in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your statistics results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator uses the formula: Mean = Σx/n | Variance = Σ(x−μ)²/n | Std Dev = √Variance. Where μ = Population mean ; σ = Standard deviation ; CV = σ/μ × 100. Standard deviation measures data spread. 68% of data falls within ±1σ of mean (normal distribution). All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What is the difference between population and sample standard deviation?', a: 'Population SD divides by N; sample SD divides by N−1 (Bessel\'s correction). Use population when you have the complete data set. Use sample (N−1) when your data is a subset — this gives an unbiased estimate.' },
      { q: 'What do quartiles and IQR tell us?', a: 'Q1 (25th percentile), Q2 (median), Q3 (75th percentile) divide data into four equal parts. IQR = Q3 − Q1 measures the middle 50% spread. Values beyond Q1−1.5×IQR or Q3+1.5×IQR are potential outliers.' }
    ]
  },
  lcmgcd: {
    desc: 'Calculate LCM and GCD (HCF) of two or more numbers. Shows prime factorization method and Euclidean algorithm with step-by-step solution.',
    what: 'This LCM and GCD calculator finds the Least Common Multiple and Greatest Common Divisor of up to 10 numbers simultaneously. Shows the solution using both prime factorization and the Euclidean algorithm with detailed steps.',
    howToSteps: [
      'Enter your First Number, Second Number, Third Number (optional, 0 to skip) in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your lcm & gcd results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator uses the formula: GCD = Euclidean algorithm | LCM = |a×b| / GCD(a,b). Where GCD = Greatest Common Divisor (HCF) ; LCM = Least Common Multiple. GCD is largest number dividing both. LCM is smallest number divisible by both. LCM × GCD = a × b. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What is the relationship between LCM and GCD?', a: 'For two numbers a and b: LCM × GCD = a × b. If GCD(12, 18) = 6, then LCM = (12 × 18) / 6 = 36. This relationship provides a quick way to find LCM once you know GCD.' },
      { q: 'When do I use LCM vs GCD in real life?', a: 'LCM: finding common event timing (two buses with different intervals), adding fractions with different denominators. GCD: simplifying fractions, dividing items into equal groups, tiling a floor with whole tiles.' }
    ]
  },
  fraction: {
    desc: 'Add, subtract, multiply, and divide fractions. Simplify, convert to mixed numbers, and compare fractions with step-by-step working.',
    what: 'This fraction calculator performs all four arithmetic operations on fractions and mixed numbers, automatically simplifying results to lowest terms. Shows step-by-step working including finding common denominators and cross-multiplication.',
    howToSteps: [
      'Enter your Numerator 1, Denominator 1, Operation, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your fraction results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator uses the formula: a/b + c/d = (ad + bc) / bd | a/b × c/d = ac / bd. Where Simplify by dividing numerator and denominator by their GCD. For addition/subtraction, find common denominator. For multiplication, multiply straight across. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How do I add fractions with different denominators?', a: 'Find the LCM of denominators, convert both fractions, then add numerators. 2/3 + 3/4: LCM(3,4) = 12. Convert: 8/12 + 9/12 = 17/12 = 1 5/12.' },
      { q: 'How do I convert a fraction to a decimal?', a: 'Divide numerator by denominator. 3/8 = 0.375. Some fractions give repeating decimals: 1/3 = 0.333..., 1/7 = 0.142857142857... Only fractions with denominators having only 2 and 5 as prime factors give terminating decimals.' }
    ]
  },
  scientific: {
    desc: 'Full-featured scientific calculator with trigonometry, logarithms, exponentials, factorials, memory functions, and constant library.',
    what: 'This online scientific calculator provides all functions of a physical scientific calculator: trigonometric and inverse trig functions, logarithms (common and natural), exponents, roots, factorial, permutations, combinations, and mathematical constants (π, e, φ).',
    howToSteps: [
      'Enter your Value / Angle, Angle Unit in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your scientific results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator uses the formula: sin, cos, tan, √x, x², ln(x), log₁₀(x), eˣ. Where Angle can be in degrees or radians ; 180° = π radians. Trigonometric and logarithmic functions. Convert degrees to radians: multiply by π/180. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How do I switch between degrees and radians?', a: 'The calculator defaults to degrees (most common for everyday use). Switch to radians for calculus problems where angles are naturally expressed in radians. π radians = 180°. sin(90°) = sin(π/2 rad) = 1.' },
      { q: 'What is the order of operations?', a: 'PEMDAS/BODMAS: Parentheses/Brackets first, then Exponents/Orders, then Multiplication/Division (left to right), then Addition/Subtraction (left to right). 2 + 3 × 4 = 14, not 20.' }
    ]
  },
  matrix2x2: {
    desc: 'Perform 2x2 matrix operations — addition, multiplication, determinant, inverse, transpose, and eigenvalues with step-by-step solutions.',
    what: 'This 2×2 matrix calculator performs all standard operations: addition, subtraction, scalar multiplication, matrix multiplication, determinant, inverse, transpose, and eigenvalue calculation. Each operation shows the step-by-step mathematical working.',
    howToSteps: [
      'Enter your a (row1,col1), b (row1,col2), c (row2,col1), and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your 2×2 matrix results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator uses the formula: det(A) = ad − bc | Inverse = (1/det) × [d, −b; −c, a]. Where Matrix [[a,b],[c,d]] ; Trace = a + d ; Rank = 2 if det≠0. Determinant tells if matrix is invertible. Zero determinant means singular (no inverse). All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How do I find the inverse of a 2x2 matrix?', a: 'For matrix [[a,b],[c,d]]: Inverse = (1/det) × [[d,−b],[−c,a]], where det = ad−bc. Example: [[2,1],[5,3]]: det = 1. Inverse = [[3,−1],[−5,2]]. The matrix must have det ≠ 0 to be invertible.' },
      { q: 'What are eigenvalues used for?', a: 'Eigenvalues reveal how a matrix transforms space — used in Google PageRank, principal component analysis (PCA), quantum mechanics, vibration analysis, and stability analysis of systems.' }
    ]
  },
  combinations: {
    desc: 'Calculate permutations (nPr) and combinations (nCr) with step-by-step factorial computation. Includes repetition variants.',
    what: 'This combinations and permutations calculator computes nCr (order does not matter) and nPr (order matters) with and without repetition allowed. Shows the complete factorial expansion and simplification for each calculation.',
    howToSteps: [
      'Enter your Total outcomes (n), Choose (r), Favorable outcomes in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your combinations & permutations results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator uses the formula: C(n,r) = n! / (r! × (n−r)!) | P(n,r) = n! / (n−r)!. Where n = Total items ; r = Items chosen ; Probability = Favorable / Total outcomes. Combinations ignore order (choosing), permutations consider order (arranging). All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'When do I use combinations vs permutations?', a: 'Combinations (nCr): choosing a committee of 3 from 10 people — order does not matter. Permutations (nPr): selecting President, VP, and Secretary from 10 — order matters. nCr is always ≤ nPr.' },
      { q: 'What is nCr in simple terms?', a: 'nCr = n! / (r! × (n−r)!). It counts the number of ways to choose r items from n items. 10C3 = 10!/(3!×7!) = 120 ways to choose 3 from 10. Also written as "10 choose 3" or C(10,3).' }
    ]
  },
  stddev: {
    desc: 'Calculate standard deviation, variance, and coefficient of variation for a data set. Supports both population and sample formulas.',
    what: 'This standard deviation calculator computes both population (σ) and sample (s) standard deviation, variance, coefficient of variation, and standard error. Enter raw data points or paste from a spreadsheet for instant statistical analysis.',
    howToSteps: [
      'Enter your Enter Numbers (comma separated) in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your standard deviation results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator uses the formula: σ = √(Σ(xᵢ − μ)² / N) | s = √(Σ(xᵢ − x̄)² / (N−1)). Where σ = Population std dev ; s = Sample std dev ; μ = Mean ; N = Count. Population divides by N, sample divides by N−1 (Bessel\'s correction for unbiased estimate). All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What does standard deviation actually mean?', a: 'It measures how spread out data is from the mean. Low SD (data clustered tightly around the mean) vs high SD (data widely scattered). In a normal distribution, 68% of values fall within ±1 SD, 95% within ±2 SD.' },
      { q: 'When should I use population vs sample standard deviation?', a: 'Use population SD (÷N) when you have ALL the data (e.g., grades of every student in your class). Use sample SD (÷(N−1)) when your data is a subset of a larger population (e.g., surveying 100 out of 10,000 customers).' }
    ]
  },
  lineareq: {
    desc: 'Solve systems of 2 or 3 linear equations using substitution, elimination, and matrix methods. Step-by-step solution with graphical representation.',
    what: 'This linear equation solver finds the solution to systems of 2×2 and 3×3 linear equations using multiple methods: substitution, Gaussian elimination, and Cramer\'s rule (determinants). Classifies the system as consistent, inconsistent, or dependent.',
    howToSteps: [
      'Enter your Coefficient a (of x), Constant b, Right-hand side c in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your linear equation solver results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator uses the formula: ax + b = c → x = (c − b) / a. Where a = Coefficient of x ; b = Constant ; c = Right-hand side. Isolate x by subtracting b from both sides, then dividing by a. No solution if a=0 and b≠c. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What does it mean when a system has no solution?', a: 'The equations represent parallel lines (2D) or parallel planes (3D) that never intersect. Example: x + y = 5 and x + y = 8 have no solution — adding the same two numbers cannot equal both 5 and 8.' },
      { q: 'What is Cramer\'s rule?', a: 'For ax + by = e, cx + dy = f: x = (ed − bf)/(ad − bc), y = (af − ce)/(ad − bc). It uses determinants to solve directly without row operations. Works when the denominator determinant ≠ 0.' }
    ]
  },
  determinant: {
    desc: 'Calculate the determinant of 2×2, 3×3, and 4×4 matrices. Includes cofactor expansion method with step-by-step solution.',
    what: 'This determinant calculator computes the determinant of square matrices (2×2, 3×3, 4×4) using cofactor expansion (Laplace expansion) and row reduction methods. The determinant tells you if a matrix is invertible and the volume scaling factor of the transformation.',
    howToSteps: [
      'Enter your Row 1, Col 1, Row 1, Col 2, Row 1, Col 3, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your matrix determinant results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator uses the formula: det = a₁₁(a₂₂a₃₃−a₂₃a₃₂) − a₁₂(a₂₁a₃₃−a₂₃a₃₁) + a₁₃(a₂₁a₃₂−a₂₂a₃₁). Where Cofactor expansion along first row ; Trace = a₁₁ + a₂₂ + a₃₃. 3×3 determinant by cofactor expansion. Matrix is invertible only if determinant ≠ 0. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What does a determinant of zero mean?', a: 'A zero determinant (singular matrix) means the matrix has no inverse, the system of equations has either no solution or infinite solutions, and the linear transformation collapses dimensions (maps area to a line or point).' },
      { q: 'How do I calculate a 3×3 determinant?', a: 'Use Sarrus\' rule or cofactor expansion. Expand along the first row: det = a₁₁(a₂₂a₃₃ − a₂₃a₃₂) − a₁₂(a₂₁a₃₃ − a₂₃a₃₁) + a₁₃(a₂₁a₃₂ − a₂₂a₃₁).' }
    ]
  },
  complexnum: {
    desc: 'Perform arithmetic on complex numbers — add, subtract, multiply, divide. Convert between rectangular (a+bi) and polar (r∠θ) forms.',
    what: 'This complex number calculator handles all operations on a+bi form numbers: addition, subtraction, multiplication, division, modulus (absolute value), conjugate, and conversion between rectangular and polar forms.',
    howToSteps: [
      'Enter your Real part (a₁), Imaginary part (b₁), Operation, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your complex number results with a detailed breakdown',
      'Cross-check the output with your manual working to reinforce the underlying concept'
    ],
    methodology: 'This calculator uses the formula: (a+bi) × (c+di) = (ac−bd) + (ad+bc)i | |z| = √(a²+b²). Where a,b = Real and imaginary parts ; ;z; = Magnitude ; θ = Argument = atan2(b,a). Complex number operations follow FOIL with i²=−1. Division uses conjugate multiplication. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What are complex numbers used for in real life?', a: 'AC circuit analysis (impedance = R + jX), signal processing (Fourier transforms), quantum mechanics (wave functions), control systems, and fluid dynamics. The "imaginary" part has very real applications.' },
      { q: 'How do I multiply complex numbers?', a: '(a+bi)(c+di) = (ac−bd) + (ad+bc)i. Use FOIL and remember i² = −1. Example: (3+2i)(1+4i) = 3+12i+2i+8i² = 3+14i−8 = −5+14i.' }
    ]
  },
  dataUsage: {
    desc: 'Calculate your monthly mobile data usage based on streaming, social media, browsing, and app activity. Find the right data plan for your needs.',
    what: 'This mobile data usage calculator estimates your monthly data consumption based on daily activities — video streaming (YouTube, Netflix), social media (Instagram, WhatsApp), music streaming, video calls, browsing, and email. Helps you choose the right Jio, Airtel, or Vi data plan.',
    howToSteps: [
      'Enter your YouTube (hours/day), YouTube Quality, Instagram / Reels (min/day), and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your mobile data usage results with a detailed breakdown',
      'Apply the result to your planning or decision-making, and revisit when your inputs change'
    ],
    methodology: 'This calculator computes mobile data usage values using standard formulas. Inputs are validated and processed entirely in your browser for instant, private results.',
    faqs: [
      { q: 'How much data does YouTube use per hour?', a: '480p: 500 MB/hour. 720p (HD): 1 GB/hour. 1080p (Full HD): 1.5–2 GB/hour. 4K: 7 GB/hour. Instagram Reels and YouTube Shorts use 700 MB–1.2 GB per hour of scrolling. Enabling data saver mode reduces usage by 50–70%.' },
      { q: 'How much data does the average Indian use monthly?', a: 'India averages 19–22 GB per user per month (2024) — the highest in the world. Heavy users (daily streaming) need 2–3 GB/day (60–90 GB/month). Light users (WhatsApp, browsing) need 1–1.5 GB/day. Most Jio/Airtel plans offer 1.5–2 GB/day.' }
    ]
  }
};
