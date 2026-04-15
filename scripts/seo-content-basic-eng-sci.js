// Unique SEO content for basic engineering, construction, and science calculators
'use strict';
module.exports = {
  // ── ENGINEERING (21 calcs) ────────────────────────────────────────
  pythagorean: {
    desc: 'Calculate the missing side of a right triangle using the Pythagorean theorem. Find hypotenuse, base, or height with step-by-step solution.',
    what: 'This Pythagorean theorem calculator finds the unknown side of a right triangle given two known sides. Enter any two values (a, b, or hypotenuse c) and get the third side with a detailed step-by-step solution using a² + b² = c².',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The pythagorean theorem computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'When do engineers use the Pythagorean theorem?', a: 'In construction (finding roof rafter length, diagonal bracing), surveying (measuring inaccessible distances), electrical engineering (impedance in AC circuits), and navigation (distance calculation from coordinates).' },
      { q: 'What are common Pythagorean triples?', a: '3-4-5, 5-12-13, 8-15-17, 7-24-25. These integer solutions are used in construction for quick right-angle verification. A 3-4-5 check with a tape measure confirms a wall is perfectly square.' }
    ]
  },
  ohmslaw: {
    desc: 'Calculate voltage, current, resistance, or power using Ohm\'s Law. Enter any two electrical values to find the other two instantly.',
    what: 'This Ohm\'s Law calculator applies V = IR and P = IV to find any two unknown electrical quantities from two known values. Covers voltage (V), current (I), resistance (Ω), and power (W) with the interactive Ohm\'s Law wheel.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The ohm\'s law computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'How does Ohm\'s Law work?', a: 'V = I × R (Voltage = Current × Resistance). If you know any two, you can find the third. Power adds: P = V × I. Example: A 12V battery with 4Ω resistance draws 3A current and dissipates 36W.' },
      { q: 'Does Ohm\'s Law apply to AC circuits?', a: 'Ohm\'s Law applies to AC circuits using impedance (Z) instead of resistance (R): V = I × Z. Impedance includes resistance plus reactance from capacitors and inductors.' }
    ]
  },
  resistor: {
    desc: 'Decode resistor color bands to find resistance value. Supports 4-band, 5-band, and 6-band resistors with tolerance and temperature coefficient.',
    what: 'This resistor color code calculator decodes the colored bands on through-hole resistors to determine their resistance value, tolerance, and temperature coefficient. Works with 4-band, 5-band, and 6-band resistors with a visual color picker.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The resistor computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'How do I read resistor color bands?', a: 'For a 4-band resistor: Band 1 (tens digit) + Band 2 (units digit) × Band 3 (multiplier), Band 4 (tolerance). Brown-Black-Red-Gold = 10 × 100 = 1kΩ ±5%. Start reading from the end with bands closest together.' },
      { q: 'What does the gold and silver band mean?', a: 'As the tolerance band (last): Gold = ±5%, Silver = ±10%, Brown = ±1%, Red = ±2%. As a multiplier (3rd band): Gold = ×0.1, Silver = ×0.01 (for sub-ohm resistors).' }
    ]
  },
  power: {
    desc: 'Calculate electrical power consumption in watts and kilowatt-hours. Find monthly electricity cost for appliances and estimate your bill.',
    what: 'This power consumption calculator computes the electricity usage and cost of any appliance based on its wattage, daily usage hours, and your electricity tariff rate. Shows daily, monthly, and annual consumption in kWh and equivalent cost.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The power computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'How is electricity bill calculated?', a: 'Energy (kWh) = Power (watts) × Hours used / 1000. Cost = kWh × Tariff rate. A 1500W AC running 8 hours/day: 1500 × 8 / 1000 = 12 kWh/day. At ₹7/kWh: ₹84/day or ₹2,520/month.' },
      { q: 'Which appliances consume the most electricity?', a: 'Air conditioners (1,500–2,500W), water heaters/geysers (2,000–3,000W), washing machines (500–2,000W), and refrigerators (150–400W but run 24/7, so ~3–4 kWh/day).' }
    ]
  },
  inverterbattery: {
    desc: 'Calculate the right inverter VA rating and battery capacity for your home. Size your backup system based on load and backup hours needed.',
    what: 'This inverter battery calculator determines the correct inverter capacity (VA) and battery size (Ah) for your home based on the appliances you want to run during power cuts and desired backup duration. Recommends between flat-plate and tubular batteries.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The inverter battery computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'How to calculate inverter size for my home?', a: 'Total load (watts) / Power factor (0.8) = Required VA. Example: 3 fans (225W) + 5 lights (50W) + 1 TV (100W) = 375W. Inverter: 375/0.8 = 470 VA — go for a 600 VA or 900 VA inverter.' },
      { q: 'How long will a 150Ah battery last?', a: 'Backup hours = Battery Ah × Battery Voltage × Efficiency / Load. For 150Ah, 12V, 0.8 efficiency, 375W load: (150 × 12 × 0.8) / 375 = 3.84 hours. Tubular batteries last 30% longer than flat-plate.' }
    ]
  },
  acbtu: {
    desc: 'Calculate the right AC tonnage and BTU capacity for your room. Based on room size, sunlight exposure, floor level, and occupancy.',
    what: 'This AC BTU calculator recommends the correct air conditioner capacity for your room based on area (sq ft), ceiling height, sun exposure, insulation quality, floor level, number of occupants, and heat-generating appliances. Prevents undersized or oversized AC selection.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The ac btu computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'What tonnage AC do I need for my room?', a: 'Rule of thumb: 1 ton per 100–120 sq ft. Adjust up for sunny rooms, top floors, or kitchens. A 150 sq ft bedroom: 1.5 ton. A 200 sq ft living room with large windows: 2 ton. Always round up.' },
      { q: 'What is the difference between BTU and tons?', a: '1 ton of cooling = 12,000 BTU/hour. A 1.5 ton AC = 18,000 BTU. BTU (British Thermal Unit) measures the heat an AC can remove per hour. Higher BTU = more cooling capacity.' }
    ]
  },
  beamload: {
    desc: 'Calculate maximum load capacity, bending moment, and shear force for simply supported and cantilever beams. Essential for structural design.',
    what: 'This beam load calculator determines the bending moment, shear force, and deflection for common beam configurations: simply supported, cantilever, and fixed beams with point loads, uniform distributed loads, or combined loading.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The beam load computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'How do I calculate maximum bending moment?', a: 'Simply supported beam with center point load: M = WL/4. Uniform load: M = wL²/8. Cantilever with end load: M = WL. Where W = point load, w = load per unit length, L = beam span.' },
      { q: 'What beam size do I need for a 10-foot span?', a: 'Depends on the load. For a residential floor (40 psf live load + 10 psf dead load), a 10-foot span typically requires W10×12 steel beam or equivalent. Always have a structural engineer verify for actual construction.' }
    ]
  },
  pipeflow: {
    desc: 'Calculate water flow rate, velocity, and pressure drop through pipes. Uses the Hazen-Williams and Darcy-Weisbach equations.',
    what: 'This pipe flow calculator determines the flow rate, fluid velocity, and pressure loss through pipes of any diameter and material. Uses industry-standard equations (Hazen-Williams for water, Darcy-Weisbach for general fluids) with Reynolds number and friction factor calculation.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The pipe flow computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'What causes pressure drop in pipes?', a: 'Friction between fluid and pipe walls (depends on pipe material roughness and flow velocity), pipe fittings (elbows, valves, tees add "equivalent length"), elevation changes, and flow obstructions. Longer, narrower pipes have more pressure drop.' },
      { q: 'What pipe size do I need for my house?', a: 'Main supply: 1" (25mm) for up to 3 bathrooms. Branch lines: 3/4" (20mm). Individual fixtures: 1/2" (15mm). Flow velocity should stay below 2 m/s to avoid noise and erosion. Municipal supply pressure also matters.' }
    ]
  },
  threephase: {
    desc: 'Calculate three-phase power, current, and voltage for star (Y) and delta (Δ) configurations. Essential for industrial electrical systems.',
    what: 'This three-phase power calculator computes power, line current, phase current, and line voltage for both star (Y) and delta (Δ) connected loads. Enter any combination of known values to find the rest, including power factor correction calculations.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The three phase power computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'What is the formula for three-phase power?', a: 'P = √3 × V_line × I_line × cos(φ). For balanced loads: Star — V_line = √3 × V_phase, I_line = I_phase. Delta — V_line = V_phase, I_line = √3 × I_phase.' },
      { q: 'Why is three-phase supply used in industry?', a: 'Three-phase delivers 73% more power than single-phase using fewer conductors. Motors run smoother (no pulsating torque), transmission is more efficient, and equipment is smaller for the same power rating.' }
    ]
  },
  transformercalc: {
    desc: 'Calculate transformer turns ratio, voltage, current, and KVA rating. Design step-up and step-down transformers for power applications.',
    what: 'This transformer calculator determines turns ratio, secondary voltage/current, and KVA rating from primary specifications. Works for step-up, step-down, isolation, and auto-transformers. Includes efficiency and regulation calculations.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The transformer computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'How does the transformer turns ratio work?', a: 'V_primary / V_secondary = N_primary / N_secondary. A 10:1 ratio transforms 230V to 23V (step-down). The inverse applies for current: lower voltage side carries higher current to maintain power balance.' },
      { q: 'What is transformer KVA rating?', a: 'KVA = (V × I) / 1000. It measures the apparent power capacity. A 5 KVA transformer at 230V can supply 21.7A. KVA (not kW) is used because transformers handle reactive loads where power factor varies.' }
    ]
  },
  heatexchanger: {
    desc: 'Calculate heat transfer rate, LMTD, and required surface area for shell-and-tube and plate heat exchangers. Size exchangers for thermal processes.',
    what: 'This heat exchanger calculator uses the LMTD (Log Mean Temperature Difference) method to size heat exchangers. Computes required heat transfer surface area, overall heat transfer coefficient, and thermal duty for counter-flow and parallel-flow configurations.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The heat exchanger computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'What is LMTD and why is it used?', a: 'LMTD (Log Mean Temperature Difference) is the effective average temperature difference between hot and cold fluids across the heat exchanger. It accounts for the logarithmic temperature profile: LMTD = (ΔT1 − ΔT2) / ln(ΔT1/ΔT2).' },
      { q: 'Counter-flow vs parallel-flow — which is better?', a: 'Counter-flow achieves higher LMTD (5–20% more heat transfer for same area), can reach a cold fluid outlet temperature above the hot fluid outlet, and is preferred in nearly all industrial applications.' }
    ]
  },
  fluidflow: {
    desc: 'Calculate Reynolds number, flow regime, and Bernoulli\'s equation parameters. Determine if flow is laminar or turbulent in pipes and channels.',
    what: 'This fluid flow calculator computes Reynolds number, determines flow regime (laminar/transitional/turbulent), and applies Bernoulli\'s equation for pressure-velocity-elevation relationships. Essential for piping system design and fluid mechanics analysis.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The fluid flow computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'What is Reynolds number and what does it tell us?', a: 'Re = (ρ × v × D) / μ where ρ = density, v = velocity, D = diameter, μ = viscosity. Re < 2,100: laminar flow. 2,100–4,000: transitional. > 4,000: turbulent. It determines which friction factor equations to use.' },
      { q: 'When does flow become turbulent in a pipe?', a: 'Generally above Re = 4,000. Higher velocity, larger pipe diameter, and lower fluid viscosity increase Reynolds number. Most practical piping systems operate in turbulent flow, which has higher friction losses but better heat transfer.' }
    ]
  },
  springforce: {
    desc: 'Calculate spring force, spring constant, and deflection using Hooke\'s Law. Design compression, tension, and torsion springs.',
    what: 'This spring force calculator applies Hooke\'s Law (F = kx) to determine the force required to compress or extend a spring by a given distance. Also computes spring constant from force-deflection data and potential energy stored in the spring.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The spring force computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'What is Hooke\'s Law?', a: 'F = k × x, where F = force (N), k = spring constant (N/m), x = displacement from natural length (m). A spring with k = 500 N/m stretched 0.1m requires 50N force. The law is valid only within the elastic region.' },
      { q: 'What is spring constant and how is it measured?', a: 'Spring constant (k) measures stiffness in N/m or N/mm. Higher k = stiffer spring. Measure by applying a known force and measuring deflection: k = F/x. Also calculated from: k = Gd⁴/(8D³n) for helical springs.' }
    ]
  },
  gearratio: {
    desc: 'Calculate gear ratio, output speed, and torque for spur, helical, and planetary gear trains. Design gear systems for desired speed reduction.',
    what: 'This gear ratio calculator determines the speed reduction (or increase) and torque multiplication when using gear pairs or gear trains. Enter input/output teeth count or desired speed ratio to get complete gear specifications.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The gear ratio computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'How is gear ratio calculated?', a: 'Gear Ratio = Driven Teeth / Driver Teeth = Input Speed / Output Speed. A 60-tooth gear driven by a 20-tooth gear gives 3:1 ratio — output speed is 1/3 of input, but torque is tripled (minus friction losses).' },
      { q: 'What gear ratio is used in common applications?', a: 'Bicycle: 1:1 to 4:1. Car first gear: 3:1–4:1. Final drive: 3:1–4.5:1. Ceiling fan: 1:1 (direct drive). Industrial reducers: up to 1000:1 using worm or planetary stages.' }
    ]
  },
  torque: {
    desc: 'Calculate torque from force and distance, or convert between Nm, lb-ft, and kgf-cm. Essential for bolt tightening and machine design.',
    what: 'This torque calculator computes rotational force from applied force and lever arm distance (τ = F × r). Also converts between torque units (Nm, lb-ft, kgf-cm, dyne-cm) and relates torque to power and angular velocity.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The torque computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'What is the relationship between torque and power?', a: 'Power (W) = Torque (Nm) × Angular velocity (rad/s). Or: HP = (Torque in lb-ft × RPM) / 5,252. A motor producing 100 Nm at 3,000 RPM delivers: 100 × (3000 × 2π/60) = 31,416 W ≈ 31.4 kW.' },
      { q: 'How much torque to tighten common bolts?', a: 'M6: 8–10 Nm. M8: 20–25 Nm. M10: 40–50 Nm. M12: 70–85 Nm. Car wheel lug nuts: 90–120 Nm. Always use a torque wrench for safety-critical fasteners.' }
    ]
  },
  decibel: {
    desc: 'Calculate sound level in decibels, compare noise sources, and determine combined dB levels. Understand dB addition and distance attenuation.',
    what: 'This decibel calculator performs dB addition (combining sound sources), distance attenuation, and power-to-dB conversion. Helps assess noise exposure for workplace safety compliance and understand how sound levels combine non-linearly.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The decibel computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'Why don\'t decibels add normally?', a: 'Decibels are logarithmic. Two 60 dB sources together produce 63 dB, not 120 dB. Formula: dB_total = 10 × log₁₀(10^(dB₁/10) + 10^(dB₂/10)). Two identical sources add only 3 dB.' },
      { q: 'What dB level is safe for hearing?', a: 'Below 85 dB for 8 hours. Every 3 dB increase halves safe exposure time. 88 dB: 4 hours. 91 dB: 2 hours. 100 dB (concert): 15 minutes. 120 dB: immediate pain. Use ear protection above 85 dB.' }
    ]
  },
  antennalen: {
    desc: 'Calculate antenna length for a target frequency. Find half-wave, quarter-wave, and full-wave antenna dimensions in meters and feet.',
    what: 'This antenna length calculator determines the physical length of dipole, monopole, and Yagi antennas for any target frequency. Uses the speed-of-light relationship (λ = c/f) with velocity factor correction for real-world antenna materials.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The antenna length computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'How is antenna length related to frequency?', a: 'Wavelength (m) = 300 / Frequency (MHz). A half-wave dipole for FM radio (100 MHz): λ = 3m, antenna = 1.5m (about 5 feet). Higher frequency = shorter antenna. WiFi 2.4 GHz: λ = 12.5 cm.' },
      { q: 'What is the velocity factor?', a: 'Radio waves travel slower in conductors than free space. Velocity factor (typically 0.95 for copper wire) shortens the required antenna length by 5%. Quarter-wave for 100 MHz: (300/100) × 0.25 × 0.95 = 71.25 cm.' }
    ]
  },
  ledresistor: {
    desc: 'Calculate the correct resistor value and wattage for an LED circuit. Supports single LED, series, and parallel LED configurations.',
    what: 'This LED resistor calculator determines the resistance value needed to safely drive LEDs from any DC voltage source. Handles single LEDs, series strings, and parallel arrays with proper current limiting to prevent LED burnout.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The led resistor computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'How do I calculate the resistor for an LED?', a: 'R = (V_supply − V_LED) / I_LED. For a red LED (2V, 20mA) on 5V: R = (5−2)/0.02 = 150Ω. Choose the next standard value up (180Ω). Wattage: P = I² × R = 0.06W — a 1/4W resistor is fine.' },
      { q: 'What forward voltage do different LED colors have?', a: 'Red: 1.8–2.2V. Orange/Yellow: 2.0–2.4V. Green: 2.0–3.5V. Blue: 3.0–3.5V. White: 3.0–3.6V. Forward current is typically 20mA for standard LEDs, 350mA–1A for high-power LEDs.' }
    ]
  },
  voltdivider: {
    desc: 'Calculate output voltage and resistor values for a voltage divider circuit. Design resistive dividers for sensor interfaces and reference voltages.',
    what: 'This voltage divider calculator applies Vout = Vin × R2/(R1+R2) to determine output voltage from two resistor values, or calculates the required resistor ratio for a desired output voltage. Includes load effect analysis and tolerance impact.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The voltage divider computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'When should I use a voltage divider?', a: 'For creating reference voltages, reading sensors with outputs above microcontroller ADC limits (e.g., reading a 12V battery with a 3.3V Arduino), biasing transistors, and level-shifting signals. Not recommended for power supply regulation.' },
      { q: 'Why is the loaded voltage different from the calculated value?', a: 'The load acts as a parallel resistance with R2, reducing the effective bottom resistance. If the load resistance is not at least 10× R2, voltage drops significantly. Use a buffer op-amp for low-impedance loads.' }
    ]
  },
  batterylife: {
    desc: 'Calculate battery runtime from capacity (mAh) and device current draw. Estimate how long your battery will last in real-world conditions.',
    what: 'This battery life calculator estimates how long a battery will power your device based on battery capacity (mAh/Wh) and average current draw (mA). Includes a Peukert effect correction for lead-acid batteries and accounts for real-world efficiency losses.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The battery life computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'How is battery life calculated?', a: 'Battery Life (hours) = Battery Capacity (mAh) / Device Current (mA) × 0.7 (efficiency factor). A 5,000 mAh phone battery drawing 400 mA average: 5000/400 × 0.7 = 8.75 hours of screen-on use.' },
      { q: 'Why does actual battery life differ from calculated?', a: 'Self-discharge (5–10%/month), temperature effects (cold reduces capacity 20–30%), aging (batteries lose 20% capacity after 500 cycles), and varying current draw (screen brightness, signal strength) all reduce actual runtime.' }
    ]
  },
  pcbtrace: {
    desc: 'Calculate PCB trace width for required current capacity using IPC-2221 standards. Ensure safe copper trace temperature rise in circuit boards.',
    what: 'This PCB trace width calculator uses IPC-2221 standards to determine the minimum copper trace width for a given current, copper thickness, and acceptable temperature rise. Separate calculations for internal and external traces.',
    howToSteps: [
      'Enter the required engineering parameters (values, dimensions, electrical ratings, etc.)',
      'Select the appropriate units or configuration if specified',
      'View the calculated result with the formula and working shown',
      'Use the output for preliminary design verification or academic reference'
    ],
    methodology: 'This calculator applies standard engineering formulas from established reference texts and codes (IS/IEEE/ASME). The pcb trace width computation uses accepted engineering principles. Results are preliminary estimates and must be verified by a licensed professional for any real-world application.',
    faqs: [
      { q: 'What trace width do I need for 1A current?', a: 'For 1A with 1 oz copper and 10°C temp rise: ~10 mil (0.25mm) external, ~25 mil (0.64mm) internal trace width. For 5A: ~50 mil external. These are minimum values — add margin for reliability.' },
      { q: 'What is the IPC-2221 standard?', a: 'IPC-2221 is the industry standard for PCB design. It defines trace width requirements based on current, copper weight, and allowable temperature rise. External traces (exposed to air) can carry more current than internal traces (surrounded by insulating FR4).' }
    ]
  },

  // ── SCIENCE (8 calcs) ─────────────────────────────────────────────
  newtons: {
    desc: 'Calculate force, mass, or acceleration using Newton\'s Second Law (F = ma). Includes unit conversion between N, kg, lbs, and g-forces.',
    what: 'This Newton\'s Second Law calculator solves F = ma for any unknown variable. Enter two of force (N), mass (kg), and acceleration (m/s²) to find the third. Includes weight calculation (F = mg) and unit conversions between metric and imperial systems.',
    howToSteps: [
      'Enter the known scientific values and parameters required for the calculation',
      'Select the appropriate formula variant or unit system if applicable',
      'View the calculated result along with the scientific formula used',
      'Cross-reference results with your textbook or lab measurements for verification'
    ],
    methodology: 'This calculator applies established scientific formulas from physics, chemistry, and biology textbooks used in CBSE, ICSE, and university curricula. The newton\'s laws computation uses SI units and accepted constants. Results are suitable for academic work and preliminary estimates.',
    faqs: [
      { q: 'What is Newton\'s Second Law?', a: 'F = m × a. A 1 kg object accelerating at 1 m/s² experiences 1 Newton of force. Your weight is mass × gravity: 70 kg × 9.81 m/s² = 686.7 N. The law applies to all objects from atoms to planets.' },
      { q: 'What is the difference between mass and weight?', a: 'Mass (kg) is the amount of matter — it is the same everywhere. Weight (N) is the gravitational force on that mass — it varies by location. On the Moon (1/6 Earth gravity), a 70 kg person weighs 114 N vs 687 N on Earth.' }
    ]
  },
  density: {
    desc: 'Calculate density, mass, or volume using ρ = m/V. Compare material densities and convert between g/cm³, kg/m³, and lb/ft³.',
    what: 'This density calculator solves ρ = m/V (density = mass/volume) for any unknown. Enter two known values to find the third. Includes a reference table of common material densities and unit conversion between g/cm³, kg/m³, and lb/ft³.',
    howToSteps: [
      'Enter the known scientific values and parameters required for the calculation',
      'Select the appropriate formula variant or unit system if applicable',
      'View the calculated result along with the scientific formula used',
      'Cross-reference results with your textbook or lab measurements for verification'
    ],
    methodology: 'This calculator applies established scientific formulas from physics, chemistry, and biology textbooks used in CBSE, ICSE, and university curricula. The density computation uses SI units and accepted constants. Results are suitable for academic work and preliminary estimates.',
    faqs: [
      { q: 'What is density and why does it matter?', a: 'Density (ρ) is mass per unit volume — it tells you how "heavy" a material is for its size. Water: 1 g/cm³. Iron: 7.87 g/cm³. Air: 0.0012 g/cm³. Objects with density > 1 g/cm³ sink in water.' },
      { q: 'What are densities of common materials?', a: 'Aluminum: 2.7 g/cm³. Steel: 7.85. Copper: 8.96. Gold: 19.3. Concrete: 2.4. Wood (oak): 0.6–0.9. Plastic (PVC): 1.3–1.45. Ice: 0.917 (which is why it floats).' }
    ]
  },
  wavelength: {
    desc: 'Calculate wavelength from frequency or vice versa for any wave. Covers electromagnetic waves, sound waves, and water waves.',
    what: 'This wavelength calculator uses the relationship λ = v/f (wavelength = wave speed / frequency) for any type of wave. Includes speed presets for electromagnetic waves (light), sound waves in air and water, and custom wave speeds.',
    howToSteps: [
      'Enter the known scientific values and parameters required for the calculation',
      'Select the appropriate formula variant or unit system if applicable',
      'View the calculated result along with the scientific formula used',
      'Cross-reference results with your textbook or lab measurements for verification'
    ],
    methodology: 'This calculator applies established scientific formulas from physics, chemistry, and biology textbooks used in CBSE, ICSE, and university curricula. The wavelength computation uses SI units and accepted constants. Results are suitable for academic work and preliminary estimates.',
    faqs: [
      { q: 'How are wavelength and frequency related?', a: 'Inversely proportional: λ = v/f. As frequency increases, wavelength decreases. Light at 600 THz (green): λ = 500 nm. FM radio at 100 MHz: λ = 3 m. Sound at 440 Hz (A note): λ = 0.78 m in air.' },
      { q: 'What is the electromagnetic spectrum order?', a: 'By increasing frequency (decreasing wavelength): Radio (>1m) → Microwave (1m–1mm) → Infrared (1mm–700nm) → Visible light (700–400nm) → Ultraviolet (400–10nm) → X-rays (10–0.01nm) → Gamma rays (<0.01nm).' }
    ]
  },
  gravitational: {
    desc: 'Calculate gravitational force between two masses using Newton\'s Law of Universal Gravitation. Compute gravity on different planets and celestial bodies.',
    what: 'This gravitational force calculator applies F = G(m₁m₂)/r² to compute the attractive force between two masses separated by a distance. Also shows how your weight would differ on the Moon, Mars, Jupiter, and other celestial bodies.',
    howToSteps: [
      'Enter the known scientific values and parameters required for the calculation',
      'Select the appropriate formula variant or unit system if applicable',
      'View the calculated result along with the scientific formula used',
      'Cross-reference results with your textbook or lab measurements for verification'
    ],
    methodology: 'This calculator applies established scientific formulas from physics, chemistry, and biology textbooks used in CBSE, ICSE, and university curricula. The gravitational force computation uses SI units and accepted constants. Results are suitable for academic work and preliminary estimates.',
    faqs: [
      { q: 'What is the gravitational constant G?', a: 'G = 6.674 × 10⁻¹¹ N⋅m²/kg². It is a universal constant that determines the strength of gravity. Despite being a fundamental force, gravity is extremely weak — two 1 kg masses 1 m apart attract with only 66.7 piconewtons.' },
      { q: 'How much would I weigh on Mars?', a: 'Mars gravity is 3.72 m/s² vs Earth\'s 9.81. You weigh 38% of your Earth weight on Mars. A 70 kg person weighs 686.7 N on Earth but only 260.4 N on Mars.' }
    ]
  },
  halflife: {
    desc: 'Calculate radioactive decay, remaining quantity, and elapsed time from half-life. Used in nuclear physics, pharmacology, and carbon dating.',
    what: 'This half-life calculator determines the remaining quantity of a substance after a given time based on its half-life. Works for radioactive decay, drug elimination from the body, and any exponential decay process using N(t) = N₀ × (1/2)^(t/t½).',
    howToSteps: [
      'Enter the known scientific values and parameters required for the calculation',
      'Select the appropriate formula variant or unit system if applicable',
      'View the calculated result along with the scientific formula used',
      'Cross-reference results with your textbook or lab measurements for verification'
    ],
    methodology: 'This calculator applies established scientific formulas from physics, chemistry, and biology textbooks used in CBSE, ICSE, and university curricula. The half-life computation uses SI units and accepted constants. Results are suitable for academic work and preliminary estimates.',
    faqs: [
      { q: 'What is half-life?', a: 'The time for half of a substance to decay or be eliminated. Carbon-14: 5,730 years (used in dating). Iodine-131: 8 days (medical imaging). Caffeine in blood: 5–6 hours. After 5 half-lives, about 97% is gone.' },
      { q: 'How is carbon dating related to half-life?', a: 'Living organisms maintain a constant C-14/C-12 ratio. After death, C-14 decays with a 5,730-year half-life. Measuring the remaining C-14 ratio reveals the age. Effective for dating up to ~50,000 years old.' }
    ]
  },
  ph: {
    desc: 'Calculate pH from hydrogen ion concentration or vice versa. Convert between pH, pOH, [H⁺], and [OH⁻] with acid-base classification.',
    what: 'This pH calculator converts between pH value, pOH, hydrogen ion concentration [H⁺], and hydroxide ion concentration [OH⁻]. Classifies solutions as acidic (pH < 7), neutral (pH = 7), or basic/alkaline (pH > 7) with common substance references.',
    howToSteps: [
      'Enter the known scientific values and parameters required for the calculation',
      'Select the appropriate formula variant or unit system if applicable',
      'View the calculated result along with the scientific formula used',
      'Cross-reference results with your textbook or lab measurements for verification'
    ],
    methodology: 'This calculator applies established scientific formulas from physics, chemistry, and biology textbooks used in CBSE, ICSE, and university curricula. The ph computation uses SI units and accepted constants. Results are suitable for academic work and preliminary estimates.',
    faqs: [
      { q: 'How is pH calculated?', a: 'pH = −log₁₀[H⁺]. A solution with [H⁺] = 10⁻⁴ M has pH 4 (acidic). Pure water has pH 7 ([H⁺] = 10⁻⁷ M). Each pH unit represents a 10× change in hydrogen ion concentration.' },
      { q: 'What are the pH values of common substances?', a: 'Lemon juice: 2.0. Vinegar: 2.5. Coffee: 5.0. Pure water: 7.0. Baking soda: 8.3. Soap: 9–10. Bleach: 12.5. Battery acid: 0.8. Blood: 7.35–7.45 (tightly regulated).' }
    ]
  },
  thermodynamics: {
    desc: 'Calculate heat transfer, specific heat, and temperature change using Q = mcΔT. Solve calorimetry and thermal equilibrium problems.',
    what: 'This thermodynamics calculator solves the heat equation Q = mcΔT (heat = mass × specific heat × temperature change) for any unknown variable. Includes specific heat values for common materials and handles heat exchange equilibrium problems.',
    howToSteps: [
      'Enter the known scientific values and parameters required for the calculation',
      'Select the appropriate formula variant or unit system if applicable',
      'View the calculated result along with the scientific formula used',
      'Cross-reference results with your textbook or lab measurements for verification'
    ],
    methodology: 'This calculator applies established scientific formulas from physics, chemistry, and biology textbooks used in CBSE, ICSE, and university curricula. The thermodynamics computation uses SI units and accepted constants. Results are suitable for academic work and preliminary estimates.',
    faqs: [
      { q: 'What is specific heat capacity?', a: 'The energy needed to raise 1 kg of a substance by 1°C. Water has unusually high specific heat (4,186 J/kg°C), which is why it is used for cooling and heating systems. Iron: 449. Aluminum: 897. Copper: 385 J/kg°C.' },
      { q: 'How does Q = mcΔT work?', a: 'To heat 2 kg of water from 20°C to 100°C: Q = 2 × 4186 × 80 = 669,760 J ≈ 670 kJ. This is about 0.19 kWh of energy. An electric kettle (2,000W) would take 335 seconds or about 5.5 minutes.' }
    ]
  },
  acceleration: {
    desc: 'Calculate acceleration from velocity change and time, or from force and mass. Includes gravitational, centripetal, and angular acceleration.',
    what: 'This acceleration calculator computes linear acceleration using a = (v−u)/t or a = F/m, plus centripetal acceleration (v²/r) and angular acceleration (α = Δω/t). Shows results in m/s², g-forces, and other units.',
    howToSteps: [
      'Enter the known scientific values and parameters required for the calculation',
      'Select the appropriate formula variant or unit system if applicable',
      'View the calculated result along with the scientific formula used',
      'Cross-reference results with your textbook or lab measurements for verification'
    ],
    methodology: 'This calculator applies established scientific formulas from physics, chemistry, and biology textbooks used in CBSE, ICSE, and university curricula. The acceleration computation uses SI units and accepted constants. Results are suitable for academic work and preliminary estimates.',
    faqs: [
      { q: 'What is the difference between velocity and acceleration?', a: 'Velocity is how fast you are moving (m/s). Acceleration is how fast your velocity is changing (m/s²). A car at constant 60 km/h has velocity but zero acceleration. A car speeding up from 0–100 km/h in 10 seconds accelerates at 2.78 m/s².' },
      { q: 'What does 1g of acceleration feel like?', a: 'Standing still, you experience 1g (9.81 m/s²) from gravity. 2g feels like doubling your weight. Fighter pilots experience 6–9g in turns. Roller coasters peak at 3–5g. Above 5g sustained, most people lose consciousness.' }
    ]
  }
};
