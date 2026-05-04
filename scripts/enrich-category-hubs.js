#!/usr/bin/env node
/**
 * Phase 4 — Enrich Category Hub Pages
 * Adds ItemList schema and authority content to all 10 category landing pages.
 * Run: node scripts/enrich-category-hubs.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const CATEGORIES = {
  'finance-calculators': {
    count: '85+',
    desc: 'Finance is the most critical area where accurate calculations directly impact your wealth. From ₹50 lakh home loans where a 0.25% rate difference saves ₹3+ lakhs, to SIP returns where early investing by 5 years can double your corpus, financial precision matters. Our finance calculators cover loans (EMI, mortgage, car loan, personal loan), investments (SIP, lumpsum, CAGR, SWP, XIRR), taxation (income tax, GST, TDS, capital gains, advance tax), retirement (NPS, PPF, EPF, FIRE, gratuity), and specialized Indian tools (Section 80C, HRA, SSY, SCSS). Every calculator is updated for FY 2025-26 with the latest tax slabs, interest rates, and RBI guidelines.',
    highlights: ['Updated for FY 2025-26 tax slabs and rates', 'India-specific: GST, TDS, EPF, NPS, SCSS, SSY', '₹ INR calculations with realistic Indian scenarios', 'Compare old vs new tax regime instantly']
  },
  'health-calculators': {
    count: '37+',
    desc: 'Health monitoring through calculators is increasingly important as India faces a dual burden of malnutrition and lifestyle diseases. With 101 million diabetics and 315 million with hypertension, proactive health tracking is essential. Our health calculators use Asian-specific benchmarks where applicable — critical for South Asians who develop metabolic conditions at lower BMI levels. Tools cover body composition (BMI, body fat, lean mass, waist-hip ratio), nutrition (calories, macros, protein, water intake, calorie deficit), fitness (heart rate zones, VO2 max, one-rep max, running pace), and medical (pregnancy, ovulation, blood pressure, diabetes risk, sleep cycles).',
    highlights: ['Asian BMI cutoffs for South Asian accuracy', 'Clinically validated formulas (Mifflin-St Jeor, Karvonen)', 'Privacy-first: all health data stays on your device', 'Fitness + medical + nutrition tools combined']
  },
  'math-calculators': {
    count: '22+',
    desc: 'Mathematics is the foundation of every quantitative field. Whether you are preparing for JEE, NEET, or board exams, our math calculators provide step-by-step solutions using standard NCERT formulas. Tools cover arithmetic (percentage, average, ratio, fractions, LCM/GCD), algebra (quadratic equations, linear equations, complex numbers), statistics (standard deviation, combinations, probability), and advanced topics (matrices, determinants, logarithms, factorials). Perfect for verifying homework, preparing for competitive exams, or quick professional calculations.',
    highlights: ['Step-by-step solutions for learning', 'Aligned with NCERT and competitive exam syllabi', 'Covers Class 10 through B.Tech level', 'Scientific calculator with 100+ functions']
  },
  'education-calculators': {
    count: '16+',
    desc: 'Academic planning in India\'s competitive education landscape requires precise tools. With over 5 crore students appearing for competitive exams annually and increasing global mobility for higher education, accurate grade conversion and planning tools are essential. Our education calculators cover grade management (CGPA to percentage, GPA calculator, grade predictor), exam preparation (study hours, Pomodoro timer, percentile calculator, cutoff predictor), attendance tracking (75% requirement calculator), and typing speed assessment. Designed for Indian students, teachers, and parents.',
    highlights: ['CBSE, VTU, Anna University conversion formulas', 'Competitive exam cutoff analysis', '75% attendance requirement calculator', 'Study planning and productivity tools']
  },
  'engineering-calculators': {
    count: '21+',
    desc: 'Engineering calculations require precision — errors can have real-world consequences. Our engineering calculators use validated formulas from IS (Indian Standard) codes and international standards. Tools cover electrical (Ohm\'s law, wire sizing, power calculation), mechanical (forces, kinematics, acceleration), and cross-disciplinary computation. All standard units are supported with automatic SI/Imperial conversion. Designed for engineering students, practicing engineers, and hobbyists.',
    highlights: ['IS code compliant calculations', 'SI and Imperial unit support', 'Electrical, mechanical, and civil tools', 'Safety-factor aware calculations']
  },
  'construction-calculators': {
    count: '18+',
    desc: 'India\'s construction industry is worth ₹10+ lakh crore, and accurate estimation prevents costly overruns. Our construction calculators use Indian Standard specifications and local material rates. Tools cover cost estimation (per-sqft construction cost by city tier), material calculation (cement, steel, bricks, sand quantities), water tank sizing, and specialized tools. Material costs fluctuate seasonally — steel prices can vary 15-20% within a year — making accurate quantity estimation crucial for budget planning.',
    highlights: ['City-wise cost rates (Tier 1, 2, 3)', 'IS code material specifications', 'Material quantity calculators with wastage', 'Residential and commercial estimation']
  },
  'everyday-calculators': {
    count: '31+',
    desc: 'Smart everyday decisions start with accurate calculations. Our everyday tools cover budgeting (household, wedding, travel, event), shopping (discount calculator, unit price comparison, GST invoice), utility (electricity bill, fuel cost, mileage), lifestyle (cooking, laundry, shoe size, pet age), and fun tools (random number, stopwatch). Designed for simplicity and speed, these calculators help you make informed choices without any signup or data collection.',
    highlights: ['Budget planners for Indian households', 'Shopping calculators for smart buying', 'Utility bill estimators by state', 'Works offline as PWA — no internet needed']
  },
  'unit-calculators': {
    count: '11+',
    desc: 'Accurate unit conversion is fundamental — the Mars Climate Orbiter was lost due to a unit mismatch. Our converters cover all major measurement types: length (km, miles, feet, meters), weight (kg, pounds, grams, ounces), temperature (°C, °F, K), area (sqft, sqm, acres), volume (liters, gallons), speed (km/h, mph, m/s), data (bytes to TB), pressure, energy, and angles. All conversions use internationally standardized factors from SI/NIST definitions.',
    highlights: ['Exact SI-standard conversion factors', 'Metric and Imperial bidirectional', 'Covers 11 measurement categories', 'Instant results for all unit pairs']
  },
  'datetime-calculators': {
    count: '7+',
    desc: 'Date and time calculations are surprisingly complex — leap years, varying month lengths, and timezone differences make manual computation error-prone. Our datetime tools handle age calculation (exact years, months, days for government forms), birthday countdown, age in different units (hours, minutes, seconds), and retirement date planning. Essential for visa applications, government exam eligibility (UPSC, SSC age limits), insurance applications, and life event planning.',
    highlights: ['Exact age for government forms', 'Handles leap years and edge cases', 'UPSC/SSC exam age limit checker', 'IST timezone default with global support']
  },
  'science-calculators': {
    count: '11+',
    desc: 'Scientific computation requires precision with proper unit handling. Our science calculators implement formulas from standard physics, chemistry, and biology references. Tools cover mechanics (Newton\'s laws, acceleration, kinematics, gravitational force), waves (wavelength, frequency), thermodynamics, chemistry (pH, molar mass, half-life), and general science (density, speed-distance-time). All calculations use CODATA recommended values for physical constants. Perfect for JEE, NEET, and board exam preparation.',
    highlights: ['CODATA physical constants', 'Physics, chemistry, and biology tools', 'JEE/NEET exam formula coverage', 'Significant figures handling']
  }
};

let enriched = 0;

Object.keys(CATEGORIES).forEach(catSlug => {
  const fp = path.join(ROOT, catSlug + '.html');
  if (!fs.existsSync(fp)) { console.log(`  skip ${catSlug} (not found)`); return; }

  let html = fs.readFileSync(fp, 'utf8');
  const cat = CATEGORIES[catSlug];
  const catName = catSlug.replace('-calculators', '').replace(/\b\w/g, c => c.toUpperCase());

  // Add ItemList schema if not present
  if (!html.includes('"ItemList"')) {
    // Count calculator links on the page
    const calcLinks = html.match(/href="\/[a-z]+-calculator"/g) || [];
    const items = calcLinks.slice(0, 20).map((link, i) => {
      const slug = link.match(/href="\/([^"]+)"/)[1];
      return {
        "@type": "ListItem",
        "position": i + 1,
        "url": `https://calclabz.com/${slug}`
      };
    });

    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": `${catName} Calculators`,
      "description": `Free ${catName.toLowerCase()} calculators for Indian users`,
      "numberOfItems": calcLinks.length,
      "itemListElement": items
    };

    const schemaTag = `\n<script type="application/ld+json" id="jsonld-itemlist">\n${JSON.stringify(itemListSchema, null, 2)}\n</script>`;
    html = html.replace('</head>', schemaTag + '\n</head>');
  }

  // Add authority content section if not present
  if (!html.includes('category-authority')) {
    const authorityHtml = `
      <section class="seo-section category-authority" style="margin-top:32px">
        <h2>About Our ${catName} Calculators (${cat.count} Free Tools)</h2>
        <p>${cat.desc}</p>
        <h3>What Sets Our Calculators Apart</h3>
        <ul>
${cat.highlights.map(h => `          <li>✅ ${h}</li>`).join('\n')}
          <li>✅ 100% free — no signup, no hidden costs</li>
          <li>✅ Works offline as a Progressive Web App</li>
          <li>✅ Mobile-friendly responsive design</li>
          <li>✅ Privacy-first: calculations run locally in your browser</li>
        </ul>
      </section>

      <div class="seo-trust">
        <p><strong>Maintained by:</strong> <a href="/author">Sagar Sahni</a>, Calc Labz</p>
        <p><strong>Last updated:</strong> May 2026 · <strong>Total calculators:</strong> ${cat.count}</p>
        <p>All calculators use validated formulas and are regularly updated. Results are for informational purposes — consult a professional for critical decisions.</p>
      </div>`;

    // Insert before closing main content
    const closingMain = '</main>';
    if (html.includes(closingMain)) {
      html = html.replace(closingMain, authorityHtml + '\n        ' + closingMain);
    }
  }

  fs.writeFileSync(fp, html, 'utf8');
  enriched++;
  console.log(`  ✅ ${catSlug} — ${cat.count} tools, ItemList schema + authority content`);
});

console.log(`\n📊 Category Hubs: Enriched ${enriched} pages`);
