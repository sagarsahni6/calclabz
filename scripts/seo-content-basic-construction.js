// Unique SEO content for construction, datetime (extras), and education (extras) calculators
'use strict';
module.exports = {
  // ── CONSTRUCTION (16 calcs) ───────────────────────────────────────
  stampdutycalc: {
    desc: 'Calculate stamp duty and registration charges for property purchase across all Indian states. Know exact government fees before buying.',
    what: 'This stamp duty calculator estimates the stamp duty and registration charges you will pay when buying property in any Indian state. Rates vary significantly by state (3–10%), property type, gender of buyer, and whether you are a first-time homebuyer.',
    howToSteps: [
      'Enter your Property Value, State, Buyer Gender in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your stamp duty results with a detailed breakdown',
      'Use the material estimates for planning and budgeting — always add a waste margin and confirm with your contractor'
    ],
    methodology: 'This calculator uses the formula: Total = Stamp Duty + Registration Fee | Stamp Duty = Property Value × Rate%. Where Rates vary by state (4-7%) and gender ; Registration usually 1% (capped at ₹30K). Women buyers get reduced stamp duty in some states. Rates shown are indicative. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What is stamp duty and why do I pay it?', a: 'Stamp duty is a state government tax on property transactions. It legally validates the sale deed. Rates: Maharashtra (6%), Karnataka (5%), Delhi (4–6%), UP (7%). Women buyers often get 1–2% discount. Payment is mandatory before registration.' },
      { q: 'How can I reduce stamp duty costs?', a: 'Register in a woman\'s name (saves 1–2% in most states). First-time buyer rebates in some states. Joint registration with spouse can help. Some states offer reduced rates for flats under certain values. Check state-specific exemptions.' }
    ]
  },
  constructioncost: {
    desc: 'Estimate total house construction cost in India. Calculate material, labor, and finishing costs per square foot by city and quality level.',
    what: 'This construction cost estimator provides a detailed cost breakdown for building a residential property in India. Covers structural work, finishing, plumbing, electrical, painting, and contingency based on location, construction quality, and floor count.',
    howToSteps: [
      'Enter your Built-up Area, Number of Floors, City Tier / Quality, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your construction cost results with a detailed breakdown',
      'Use the material estimates for planning and budgeting — always add a waste margin and confirm with your contractor'
    ],
    methodology: 'This calculator uses the formula: Total = Area × Floors × Cost/sqft × Finish Multiplier × City Multiplier + 10% Misc. Where Base cost varies by city ; Finish: Basic(0.85×), Standard(1×), Premium(1.25×), Luxury(1.6×). Construction cost per sqft varies significantly by city tier and finishing quality. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What is the current construction cost per sq ft in India 2025?', a: 'Economy: ₹1,200–1,500/sqft. Standard: ₹1,800–2,500. Premium: ₹2,500–4,000. Luxury: ₹4,000–7,000+. Metro cities are 15–25% higher than tier-2 cities. Does not include land cost.' },
      { q: 'What is the typical cost split in construction?', a: 'Structure (foundation, RCC, walls): 40–45%. Finishing (tiles, painting, doors, windows): 25–30%. Plumbing and sanitary: 8–10%. Electrical: 8–10%. Architect and approvals: 5–7%. Contingency: 10%.' }
    ]
  },
  homerenovation: {
    desc: 'Calculate home renovation costs room by room. Budget for kitchen, bathroom, flooring, painting, and modular furniture makeovers.',
    what: 'This home renovation calculator estimates costs for remodeling specific rooms or the entire house. Covers kitchen renovation, bathroom upgrade, flooring replacement, repainting, modular wardrobe installation, and false ceiling work with quality tiers.',
    howToSteps: [
      'Enter your Total Area, Renovation Scope, Material Quality, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your home renovation results with a detailed breakdown',
      'Use the material estimates for planning and budgeting — always add a waste margin and confirm with your contractor'
    ],
    methodology: 'This calculator uses the formula: Total = Area × Σ(Component Rates) × Quality Multiplier × City Multiplier. Where Quality: Economy(0.6×), Standard(1×), Premium(1.6×), Luxury(2.5×). Get at least 3 contractor quotes. Keep 15-20% buffer for unexpected costs. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How much does kitchen renovation cost in India?', a: 'Basic modular kitchen: ₹1–2.5L. Mid-range: ₹2.5–5L. Premium (imported hardware, stone countertops): ₹5–12L. Costs include cabinets, countertop, backsplash, sink, and hardware. Appliances are extra.' },
      { q: 'What is the cheapest way to refresh a home?', a: 'Repainting (₹15–25/sqft) gives the highest visual impact per rupee. Adding false ceiling with LED lights (₹100–200/sqft) transforms rooms. Replacing old tiles with vinyl flooring (₹40–80/sqft) is cheaper than re-tiling.' }
    ]
  },
  concrete: {
    desc: 'Calculate concrete volume in cubic meters and bags of cement needed. Supports slabs, columns, beams, and footings with mix ratio.',
    what: 'This concrete calculator determines the volume of concrete needed for your structure and the quantities of cement, sand, and aggregate based on your chosen mix ratio (M15, M20, M25). Shows exact number of 50kg cement bags required.',
    howToSteps: [
      'Enter your Length, Width, Thickness/Depth, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your concrete results with a detailed breakdown',
      'Use the material estimates for planning and budgeting — always add a waste margin and confirm with your contractor'
    ],
    methodology: 'This calculator uses the formula: Volume = L × W × D | Dry Volume = Wet × 1.54. Where Mix ratios — M15: 1:2:4 ; M20: 1:1.5:3 ; M25: 1:1:2 ; Cement bag = 50 kg. Dry volume is 54% more than wet due to air voids. Cement bags = (Dry Vol × Cement Ratio / Sum) × 1440 / 50. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How do I calculate concrete volume?', a: 'Volume = Length × Width × Thickness (all in meters). A 10×12 feet slab, 5 inches thick: 3.048 × 3.657 × 0.127 = 1.415 cubic meters. Add 5–10% for wastage. For circular columns: π × r² × height.' },
      { q: 'How many bags of cement per cubic meter of M20 concrete?', a: 'M20 (1:1.5:3 ratio): approximately 8 bags (400 kg) cement, 0.42 m³ sand, 0.83 m³ aggregate per cubic meter of concrete. This is the most common grade for residential construction.' }
    ]
  },
  bricks: {
    desc: 'Calculate number of bricks needed for a wall. Factor in wall dimensions, thickness, mortar joints, and opening deductions.',
    what: 'This brick calculator estimates the total number of bricks required for your wall or structure based on wall area, brick size (standard Indian: 9×4.5×3 inches), mortar thickness, and deductions for doors and windows.',
    howToSteps: [
      'Enter your Wall Length, Wall Height, Wall Thickness, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your bricks results with a detailed breakdown',
      'Use the material estimates for planning and budgeting — always add a waste margin and confirm with your contractor'
    ],
    methodology: 'This calculator uses the formula: Bricks = (Wall Volume / Brick Volume) × 1.05. Where Wall Volume = L × H × Thickness ; 5% added for wastage/breakage. Mortar volume = Wall volume − Total brick volume. Standard brick: 230×115×76mm. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How many bricks per square foot of wall?', a: 'Standard brick wall (9" thick): ~13.5 bricks per sqft. Half-brick wall (4.5" thick): ~7 bricks per sqft. This includes ~10mm mortar joints. Add 5–10% for breakage and cutting waste.' },
      { q: 'What is the standard brick size in India?', a: 'Standard modular brick: 190×90×90mm (with mortar: 200×100×100mm). Traditional bricks: 230×115×75mm. Table moulded bricks are more consistent than hand-moulded. Always check brick quality — first-class bricks should ring when struck.' }
    ]
  },
  paint: {
    desc: 'Calculate paint quantity needed for walls and ceilings. Estimate gallons or liters based on room dimensions, coats, and paint coverage.',
    what: 'This paint calculator determines how much paint you need based on room dimensions, number of coats, surface type, and paint coverage rate. Deducts area for doors and windows automatically and recommends primer quantity.',
    howToSteps: [
      'Enter your Room Length, Room Width, Room Height, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your paint results with a detailed breakdown',
      'Use the material estimates for planning and budgeting — always add a waste margin and confirm with your contractor'
    ],
    methodology: 'This calculator uses the formula: Paint (L) = (Wall Area − Deductions) × Coats / Coverage. Where Wall Area = 2(L+W) × H ; Door ≈ 1.89 m² ; Window ≈ 1.2 m² ; Coverage ≈ 12 m²/L. Always subtract doors and windows. Two coats is standard, primer is one additional coat. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How much area does 1 liter of paint cover?', a: 'Interior emulsion: 100–130 sqft per liter (single coat). Primer: 80–100 sqft/liter. Exterior paint: 50–70 sqft/liter (textured surfaces absorb more). Two coats require double the paint. Always buy 10% extra for touch-ups.' },
      { q: 'How many coats of paint do I need?', a: 'New walls: 1 coat primer + 2 coats paint minimum. Repainting (same color): 2 coats may suffice. Color change (light to dark or vice versa): 2–3 coats paint. Exterior walls: 1 primer + 2–3 coats weather-resistant paint.' }
    ]
  },
  flooring: {
    desc: 'Calculate flooring materials needed — tiles, marble, wood, or vinyl. Estimate boxes/sqft required including cutting waste percentage.',
    what: 'This flooring calculator determines the number of tiles, planks, or square meters of material needed for your room. Accounts for standard cutting waste (10–15%), pattern layout adjustments, and includes grout/adhesive quantity estimation.',
    howToSteps: [
      'Enter your Room Length, Room Width, Tile Length, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your flooring results with a detailed breakdown',
      'Use the material estimates for planning and budgeting — always add a waste margin and confirm with your contractor'
    ],
    methodology: 'This calculator uses the formula: Tiles = (Room Area / Tile Area) × 1.10. Where Room Area = L × W ; Tile Area = TileL × TileW (convert mm to m) ; 10% wastage. 10% extra for cutting waste, breakage, and pattern matching. Buy all from same batch for color consistency. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How many tiles do I need for a room?', a: 'Room area (sqft) / Tile area (sqft) × 1.10 (10% waste). A 12×15 ft room with 2×2 ft tiles: 180/4 × 1.10 = 49.5 → buy 50 tiles. Diagonal patterns waste 15–20%, irregular rooms even more.' },
      { q: 'Which flooring is most cost-effective in India?', a: 'Ceramic tiles: ₹25–60/sqft (most popular, durable). Vitrified tiles: ₹40–120/sqft (low maintenance). Vinyl: ₹40–80/sqft (easy DIY install). Marble: ₹80–300/sqft. Hardwood: ₹200–500/sqft. For most homes, vitrified tiles offer the best value.' }
    ]
  },
  steel: {
    desc: 'Calculate steel reinforcement quantity for RCC construction. Estimate rebar weight in kg from diameter, length, and number of bars.',
    what: 'This steel calculator computes the total weight of TMT reinforcement bars needed for slabs, beams, columns, and footings. Enter bar diameter, length, and spacing to get weight in kg and number of bars with BBS-style output.',
    howToSteps: [
      'Enter your Bar Diameter, Total Bar Length, Number of Bars in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your steel results with a detailed breakdown',
      'Use the material estimates for planning and budgeting — always add a waste margin and confirm with your contractor'
    ],
    methodology: 'This calculator uses the formula: Weight per meter = D² / 162 (kg/m). Where D = Bar diameter (mm) ; Total = Weight/m × Length × Count. D²/162 is the standard formula for steel bar weight. Derived from steel density of 7850 kg/m³. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How to calculate steel weight from diameter?', a: 'Weight (kg/m) = D² / 162 (where D = diameter in mm). 8mm bar: 0.395 kg/m. 10mm: 0.617 kg/m. 12mm: 0.889 kg/m. 16mm: 1.58 kg/m. 20mm: 2.47 kg/m. Multiply by length for total.' },
      { q: 'How much steel is needed per cubic meter of concrete?', a: 'Residential slabs: 80–100 kg/m³. Beams: 150–200 kg/m³. Columns: 180–250 kg/m³. Foundation: 100–150 kg/m³. Overall in a typical house: 90–120 kg/m³ average. This translates to roughly 4–5 kg per sqft of built-up area.' }
    ]
  },
  roofing: {
    desc: 'Calculate roofing material quantity — sheets, tiles, or shingles. Factor in roof pitch, overlap, and ridge cap requirements.',
    what: 'This roofing calculator estimates the number of roofing sheets, tiles, or shingles needed based on your roof area, pitch angle, and material type. Accounts for side and end overlaps, ridge cap coverage, and wastage.',
    howToSteps: [
      'Enter your Roof Length, Roof Width (one side), Roof Pitch, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your roofing results with a detailed breakdown',
      'Use the material estimates for planning and budgeting — always add a waste margin and confirm with your contractor'
    ],
    methodology: 'This calculator uses the formula: Actual Area = Plan Area × 2 × Slope Factor | Slope = 1/cos(pitch). Where Sheets = Area / Sheet Coverage × 1.10 ; Ridge caps = Length / 1.8m. Roof slope increases actual surface area. 10% extra for overlaps and wastage. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How do I calculate roof area from floor area?', a: 'For flat roofs: roof area ≈ floor area. For pitched roofs: multiply floor area by a pitch factor. 15° pitch: ×1.04. 30° pitch: ×1.15. 45° pitch: ×1.41. Add 10% for overhangs and waste.' },
      { q: 'Which roofing material is best for Indian climate?', a: 'Concrete/clay tiles: durable, good insulation, traditional. GI metal sheets: affordable, quick install. Polycarbonate: lets light through. For hot climates, clay tiles stay 8–10°C cooler than metal sheets.' }
    ]
  },
  landarea: {
    desc: 'Calculate land area in square feet, meters, acres, hectares, bigha, gunta, and other Indian land measurement units from plot dimensions.',
    what: 'This land area calculator computes plot area from dimensions and converts between all common Indian land units: square feet, square meters, acres, hectares, bigha, gunta, marla, kanal, cent, and ground. Handles irregular plots with multiple dimension inputs.',
    howToSteps: [
      'Enter your Area Value, From Unit in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your land area results with a detailed breakdown',
      'Use the material estimates for planning and budgeting — always add a waste margin and confirm with your contractor'
    ],
    methodology: 'This calculator uses the formula: Convert to m² first, then to target unit. Where 1 Acre = 4046.86 m² ; 1 Hectare = 10000 m² ; 1 Bigha (UP) = 2529.3 m². Land area units vary by region in India. Always verify local definitions for Bigha, Gunta, etc. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How do I convert bigha to square feet?', a: 'It varies by state. UP: 1 bigha = 27,000 sqft. Rajasthan (pucca bigha): 27,225 sqft. Bihar: 1 bigha = 27,220 sqft. Gujarat: different measure. Always confirm the local standard before property transactions.' },
      { q: 'How do I calculate area of an irregular plot?', a: 'Divide the plot into triangles and rectangles, calculate each area separately, and sum them. For triangles, use Heron\'s formula if you know all three sides. Alternatively, find the area using coordinates of corner points.' }
    ]
  },
  solarpanel: {
    desc: 'Calculate solar panel system size and cost for your home. Estimate savings, payback period, and government subsidy eligibility in India.',
    what: 'This solar panel calculator determines the optimal system size (kW) for your home based on monthly electricity consumption, roof area, and sunlight hours. Shows installation cost, government subsidy under PM Surya Ghar, monthly savings, and payback period.',
    howToSteps: [
      'Enter your Current Monthly Electricity Bill, Solar System Size, Installation Cost, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your solar panel results with a detailed breakdown',
      'Use the material estimates for planning and budgeting — always add a waste margin and confirm with your contractor'
    ],
    methodology: 'This calculator uses the formula: Monthly Generation = System kW × 4.5 sun-hours × 30 days. Where Payback = Cost / Annual Savings ; CO₂ saved = Units × 0.82 kg/kWh. India averages 4-5 peak sun hours/day. Solar panels typically last 25 years with ~0.5%/yr degradation. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What size solar system do I need for my home?', a: 'Divide monthly units consumed by 120 (avg units per kW per month in India). For 300 units/month: 300/120 = 2.5 kW system. Round up to 3 kW. Requires ~180 sqft shadow-free roof area (60 sqft per kW for modern panels).' },
      { q: 'What is the PM Surya Ghar subsidy?', a: 'Central subsidy (2025): ₹30,000/kW for first 2 kW, ₹18,000/kW for 2–3 kW capacity. Maximum ₹78,000 for 3 kW. A 3 kW system costing ₹1.8–2L gets ₹78K subsidy, reducing cost to ~₹1.1–1.2L. Apply through the national portal.' }
    ]
  },
  concretemix: {
    desc: 'Calculate cement, sand, and aggregate proportions for different concrete mix grades — M10, M15, M20, M25, M30 — by volume and weight.',
    what: 'This concrete mix design calculator determines the exact quantities of cement, sand (fine aggregate), and coarse aggregate for standard concrete grades. Shows both volumetric ratios and weight proportions per cubic meter of finished concrete.',
    howToSteps: [
      'Enter your Concrete Volume Needed, Mix Ratio / Grade, Custom Cement Part, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your concrete mix results with a detailed breakdown',
      'Use the material estimates for planning and budgeting — always add a waste margin and confirm with your contractor'
    ],
    methodology: 'This calculator estimates concrete mix requirements using standard construction industry formulas and IS code guidelines. Estimates include typical wastage factors and standard material ratios. Actual quantities depend on site conditions, material quality, and construction methods.',
    faqs: [
      { q: 'What concrete grade should I use?', a: 'M10: lean concrete, PCC flooring. M15: general foundations. M20: residential slabs, beams, columns (most common). M25: commercial structures, load-bearing elements. M30+: high-rise buildings, bridges.' },
      { q: 'What does M20 mean?', a: 'M = Mix, 20 = minimum compressive strength in MPa (N/mm²) after 28 days of curing. M20 has a 1:1.5:3 ratio (cement:sand:aggregate by volume). It can withstand 20 N/mm² compression — suitable for 90% of residential construction.' }
    ]
  },
  materialwaste: {
    desc: 'Calculate construction material waste percentages and order extra quantities. Reduce over-ordering costs and under-ordering delays.',
    what: 'This material waste calculator estimates the additional quantity you should order for each construction material to account for breakage, cutting waste, spills, and handling losses. Helps optimize procurement to minimize both waste and shortages.',
    howToSteps: [
      'Enter your Material Type, Surface Area, Tile Size (for tiles only), and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your material waste results with a detailed breakdown',
      'Use the material estimates for planning and budgeting — always add a waste margin and confirm with your contractor'
    ],
    methodology: 'This calculator estimates material waste requirements using standard construction industry formulas and IS code guidelines. Estimates include typical wastage factors and standard material ratios. Actual quantities depend on site conditions, material quality, and construction methods.',
    faqs: [
      { q: 'What is the typical waste percentage for construction materials?', a: 'Cement: 3–5% (storage loss). Bricks: 5–8% (breakage). Steel: 3–5% (cutting). Tiles: 8–12% (cutting, breakage). Wood: 10–15% (cutting). Paint: 5–10% (spills). Sand/aggregate: 5–10% (handling loss).' },
      { q: 'How can I reduce construction waste?', a: 'Accurate measurement before cutting, proper storage (cement protected from moisture), using modular dimensions (multiples of brick/tile sizes), buying from reliable suppliers (fewer defective pieces), and training workers on efficient cutting techniques.' }
    ]
  },
  rainwater: {
    desc: 'Calculate rainwater harvesting potential for your roof. Estimate annual water collection in liters based on roof area and local rainfall.',
    what: 'This rainwater harvesting calculator estimates how much water you can collect annually from your roof based on catchment area, local average rainfall, and runoff coefficient. Also sizes the storage tank and recharge pit needed for your setup.',
    howToSteps: [
      'Enter your Catchment / Roof Area, Annual Rainfall, Runoff Coefficient, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your rainwater harvesting results with a detailed breakdown',
      'Use the material estimates for planning and budgeting — always add a waste margin and confirm with your contractor'
    ],
    methodology: 'This calculator estimates rainwater harvesting requirements using standard construction industry formulas and IS code guidelines. Estimates include typical wastage factors and standard material ratios. Actual quantities depend on site conditions, material quality, and construction methods.',
    faqs: [
      { q: 'How much rainwater can I collect?', a: 'Annual collection (liters) = Roof Area (m²) × Annual Rainfall (mm) × 0.8 (runoff coefficient). A 100 m² roof in Bangalore (970 mm rainfall): 100 × 970 × 0.8 = 77,600 liters per year — nearly 5 months of water for a family of 4.' },
      { q: 'Is rainwater harvesting mandatory in India?', a: 'Yes, in many states and cities. Tamil Nadu mandates it for all buildings. Bangalore requires it for plots >2,400 sqft. Delhi for plots >100 sqm. Penalties for non-compliance include water supply disconnection in some cities.' }
    ]
  },
  earthwork: {
    desc: 'Calculate earthwork excavation volume for foundations, trenches, and leveling. Estimate soil quantity in cubic meters with swell factor.',
    what: 'This earthwork calculator computes the volume of soil to be excavated or filled for foundations, trenches, and site leveling. Applies swell factors (soil expands when dug) and shrinkage factors (compacted fill) for accurate truck-load estimation.',
    howToSteps: [
      'Enter your Length, Width, Depth, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your earthwork results with a detailed breakdown',
      'Use the material estimates for planning and budgeting — always add a waste margin and confirm with your contractor'
    ],
    methodology: 'This calculator uses the formula: Bank Volume = L × W × D | Loose Volume = Bank × (1 + Swell%/100). Where Swell factor: soil expands 20-30% when excavated ; Weight ≈ Vol × 1800 kg/m³. Loose volume determines truck loads needed. Soil expands when dug up (swell factor). All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What is the swell factor for excavated soil?', a: 'Swell factor accounts for soil expanding when loosened: Clay: 25–30% swell. Dry sand: 10–15%. Wet clay: 30–40%. Gravel: 12–18%. One cubic meter of in-situ clay becomes 1.25–1.3 m³ when excavated.' },
      { q: 'How many trucks to remove excavated soil?', a: 'Standard tipper truck: 5–6 m³ capacity. Divide total excavated volume (with swell) by truck capacity. For 50 m³ excavation of clay (30% swell): 50 × 1.3 = 65 m³ ÷ 5.5 = 12 truck loads.' }
    ]
  },
  plasterwork: {
    desc: 'Calculate plaster quantity (cement and sand) needed for walls and ceilings. Based on surface area, plaster thickness, and mix ratio.',
    what: 'This plaster calculator estimates the cement and sand quantities needed for plastering walls and ceilings. Supports standard plaster mixes (1:3 for outer walls, 1:4 for inner walls, 1:6 for ceilings) and variable thickness (12mm, 15mm, 20mm).',
    howToSteps: [
      'Enter your Wall Length, Wall Height, Plaster Thickness, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your plasterwork results with a detailed breakdown',
      'Use the material estimates for planning and budgeting — always add a waste margin and confirm with your contractor'
    ],
    methodology: 'This calculator uses the formula: Mortar Volume = Area × Thickness/1000 × 1.35. Where Dry volume factor = 1.35 ; Mix ratios: 1:3 (rich), 1:4 (standard), 1:6 (lean). 35% extra for dry volume conversion. Cement bags = (Dry Vol × C ratio / Sum) × 1440 / 50. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How much cement is needed for plastering 100 sqft?', a: 'For 12mm thick plaster with 1:4 mix: approximately 0.5 bags cement and 1.75 cft sand per 100 sqft (9.3 m²). For 20mm thick outer wall plaster (1:3 mix): roughly 1 bag cement per 100 sqft.' },
      { q: 'What plaster thickness is standard?', a: 'Internal walls: 12–15mm (1:4 or 1:6 mix). External walls: 15–20mm (1:3 or 1:4 mix). Ceiling: 6–12mm (1:3 mix). RCC surfaces: 6mm. Thicker plaster increases strength but also weight and cost.' }
    ]
  },

  // ── EXTRA DATETIME & EDUCATION ────────────────────────────────────
  dateiff: {
    desc: 'Find the exact difference between two dates in years, months, weeks, and days. Includes business days and countdown features.',
    what: 'This date difference calculator computes the precise duration between any two dates in multiple formats: total days, weeks, months, years, and business days (excluding weekends). Useful for age verification, project timelines, and legal duration calculations.',
    howToSteps: [
      'Enter your Start Date, End Date in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your date difference results with a detailed breakdown',
      'Use the result for scheduling, planning, or record-keeping — verify legal deadlines against official sources'
    ],
    methodology: 'This calculator handles date difference using the Gregorian calendar with correct treatment of leap years, varying month lengths, and day-of-week algorithms. Timezone calculations reference the IANA Time Zone Database where applicable.',
    faqs: [
      { q: 'How is the month difference counted?', a: 'Complete calendar months are counted between dates. From January 15 to March 20: 2 months and 5 days. Partial months at boundaries are expressed in days.' },
      { q: 'What about leap years in date calculations?', a: 'All date calculations correctly account for leap years (February 29). The difference between Feb 28, 2024 and March 1, 2024 is 2 days (leap year) vs 1 day in non-leap years.' }
    ]
  },
  workingdays: {
    desc: 'Count working days between two dates excluding weekends. Add Indian public holidays to get accurate business day counts.',
    what: 'This working days calculator counts only business days (Monday–Friday) between two dates, excluding weekends. Optionally exclude Indian public holidays for precise project scheduling and delivery date estimation.',
    howToSteps: [
      'Enter your Start Date, End Date, Public Holidays to Exclude in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your working days results with a detailed breakdown',
      'Use the result for scheduling, planning, or record-keeping — verify legal deadlines against official sources'
    ],
    methodology: 'This calculator uses the formula: Working Days = Calendar Days − Weekends − Holidays. Where Weekends = Saturdays + Sundays ; Net = Working Days − Public Holidays. Standard work year ≈ 260 days (52 weeks × 5 days). Useful for project planning. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How many working days are in a month?', a: 'Typically 20–23 working days per month (excluding weekends). Monthly average: 22 days. In months with public holidays, actual working days may drop to 18–20. Annual total: approximately 250–260 days.' },
      { q: 'How do I calculate a delivery date from working days?', a: 'Add working days to the start date, skipping weekends. "10 working days from Monday" = the Monday two weeks later (10 weekdays). Our calculator handles this automatically including holiday skipping.' }
    ]
  },
  timeconv: {
    desc: 'Convert between hours, minutes, seconds, and decimal time formats. Perfect for timesheet calculations and payroll processing.',
    what: 'This time converter translates between standard time format (HH:MM:SS), decimal hours, decimal minutes, and total seconds. Essential for converting clock-based time entries into spreadsheet-compatible decimal format for billing and payroll.',
    howToSteps: [
      'Enter your Value, From in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your time results with a detailed breakdown',
      'Use the result for scheduling, planning, or record-keeping — verify legal deadlines against official sources'
    ],
    methodology: 'This calculator handles time using the Gregorian calendar with correct treatment of leap years, varying month lengths, and day-of-week algorithms. Timezone calculations reference the IANA Time Zone Database where applicable.',
    faqs: [
      { q: 'How do I convert time to decimal format?', a: 'Divide minutes by 60 and add to hours. 3 hours 45 minutes = 3 + (45/60) = 3.75 decimal hours. For seconds: 2h 30m 15s = 2 + 30/60 + 15/3600 = 2.5042 decimal hours.' },
      { q: 'Why use decimal time?', a: 'Decimal time makes calculations simple. 8.5 hours × ₹500/hour = ₹4,250. With HH:MM format, 8:30 × ₹500 requires conversion first. Payroll, billing, and project management systems prefer decimal hours.' }
    ]
  },
  countdown: {
    desc: 'Create countdown timers for any event or deadline. Shows days, hours, minutes until your target date with visual progress.',
    what: 'This countdown calculator shows the precise remaining time until any future date — in days, hours, minutes, and seconds. Perfect for tracking exam dates, project deadlines, birthdays, holidays, and product launches with a live updating display.',
    howToSteps: [
      'Enter your Event Date & Time in the input fields provided',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your countdown timer results with a detailed breakdown',
      'Use the result for scheduling, planning, or record-keeping — verify legal deadlines against official sources'
    ],
    methodology: 'This calculator handles countdown timer using the Gregorian calendar with correct treatment of leap years, varying month lengths, and day-of-week algorithms. Timezone calculations reference the IANA Time Zone Database where applicable.',
    faqs: [
      { q: 'How do I count days until an event?', a: 'Enter the event date and the calculator shows the exact number of days remaining from today. It accounts for varying month lengths and leap years automatically.' },
      { q: 'Can I count down to a specific time?', a: 'Yes, set both the date and time for precision countdowns. Useful for product launches, exam start times, or events in different time zones.' }
    ]
  },
  eduloan: {
    desc: 'Calculate education loan EMI, total interest, and repayment schedule. Compare interest rates and moratorium period impact for student loans.',
    what: 'This education loan calculator computes your monthly EMI, total interest payable, and generates an amortization schedule. Factors in the moratorium period (course duration + 6–12 months) during which interest accrues but repayment has not started.',
    howToSteps: [
      'Enter your Loan Amount, Interest Rate, Moratorium Period (course duration), and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your education loan results with a detailed breakdown',
      'Use the result for academic planning — verify institution-specific grading policies before relying on the output'
    ],
    methodology: 'This calculator uses the formula: EMI = (P + Accrued Interest) × r × (1+r)ⁿ / ((1+r)ⁿ − 1). Where Accrued = Principal × r × Moratorium Months ; Repayment starts after course. Interest accrues during moratorium (course duration) and adds to principal. Section 80E deduction available. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'What is the interest rate for education loans in India?', a: 'PSU banks: 8.5–11% (SBI starts at 8.5%). Private banks: 9.5–13%. NBFCs: 11–14%. Collateral-based loans get 0.5–1% lower rates. Interest subsidy available under Vidyalakshmi scheme for EWS families.' },
      { q: 'How does the moratorium period affect total cost?', a: 'During moratorium (study period + 6–12 months), interest accumulates on the principal. A ₹20L loan at 9% has ₹1.8L annual interest accrual. After a 4-year course: ₹7.2L interest adds to principal, making actual repayment on ₹27.2L. Paying interest during studies saves lakhs.' }
    ]
  },
  examneeded: {
    desc: 'Calculate the marks needed in your final exam to reach a target grade. Enter current scores and find the minimum exam score required.',
    what: 'This exam score calculator tells you exactly what marks you need in your upcoming exam to achieve your target percentage or grade. Enter your scores from assignments, mid-terms, and internals, and see the minimum final exam score required.',
    howToSteps: [
      'Enter your Marks Scored So Far, Max Marks So Far, Final Exam Max Marks, and other required values in the input fields',
      'Results are computed instantly as you enter or modify values — no need to click a button',
      'Review the computed output showing your exam score results with a detailed breakdown',
      'Use the result for academic planning — verify institution-specific grading policies before relying on the output'
    ],
    methodology: 'This calculator uses the formula: Needed = (Target% × Total Max / 100) − Marks Scored So Far. Where Current % = Scored/Max × 100 ; Feasible if Needed ≤ Final Max Marks. Checks if your target percentage is mathematically achievable with remaining exam marks. All calculations run entirely in your browser — no data is transmitted to any server.',
    faqs: [
      { q: 'How do I calculate minimum marks needed?', a: 'Required = (Target Total − Marks Already Earned) / Remaining Weightage. If you need 75% overall (75/100), have 40/60 from internals, and the final is worth 40: need (75−40) = 35 out of 40 (87.5% on the final).' },
      { q: 'What if the required score is more than 100%?', a: 'If the calculator shows you need more than 100% on the remaining assessments, your target grade is mathematically impossible with current scores. You will need to adjust your target or explore extra credit options if available.' }
    ]
  }
};
