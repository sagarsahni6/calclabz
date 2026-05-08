#!/usr/bin/env node
/**
 * Phase 6.1 — Enhance FAQ Schema
 * Adds 5-8 relevant FAQs per calculator page for "People Also Ask" targeting.
 * Run: node scripts/enhance-faq-schema.js
 */
'use strict';
const fs = require('fs').promises;
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

// Category-specific FAQ templates
const CAT_FAQS = {
  finance: [
    { q: 'Is this calculator free to use?', a: 'Yes, this calculator is 100% free. No signup, no hidden charges, no data collection. All calculations run locally in your browser.' },
    { q: 'How accurate are the results?', a: 'Results are calculated using industry-standard financial formulas used by banks and financial institutions. However, actual outcomes may vary based on market conditions and specific terms.' },
    { q: 'Can I use this for tax planning?', a: 'Yes, this calculator can help estimate tax implications. However, consult a Chartered Accountant for official tax filing and complex scenarios.' },
    { q: 'Does this work on mobile?', a: 'Yes, this calculator is fully responsive and works perfectly on all devices — mobile, tablet, and desktop. It also works offline as a PWA.' },
    { q: 'Are the interest rates updated?', a: 'We regularly update rates and tax slabs. However, always verify current rates with your bank or the official government portal before making decisions.' },
    { q: 'Is my financial data safe?', a: 'Absolutely. All calculations happen locally in your browser. No data is sent to any server. Your financial information never leaves your device.' },
  ],
  health: [
    { q: 'Is this calculator a substitute for medical advice?', a: 'No. This calculator provides estimates based on general formulas. Always consult a qualified healthcare professional for medical decisions and personalized health advice.' },
    { q: 'How accurate are health calculators?', a: 'Health calculators use clinically validated formulas (like Mifflin-St Jeor for BMR). They provide reliable estimates but individual results may vary based on genetics, health conditions, and lifestyle.' },
    { q: 'Are the health benchmarks applicable to Indians?', a: 'Where applicable, we use Asian-specific health benchmarks. For example, our BMI calculator uses both WHO and Asian classification cutoffs, which are more relevant for South Asians.' },
    { q: 'Is my health data stored anywhere?', a: 'No. All health calculations run entirely in your browser. We do not store, transmit, or track any health information you enter.' },
    { q: 'Can I track my health metrics over time?', a: 'You can bookmark your results or save them as screenshots. The calculator provides instant results each time you use it.' },
    { q: 'Should I use this during pregnancy?', a: 'Pregnancy-related calculators provide general estimates. Always follow your gynecologist\'s specific guidance, as individual pregnancy journeys vary significantly.' },
  ],
  math: [
    { q: 'Does this calculator show step-by-step solutions?', a: 'The calculator provides the methodology and formula used. For detailed step-by-step breakdowns, refer to the Formula & Methodology section on this page.' },
    { q: 'Can I use this for competitive exam preparation?', a: 'Yes, this calculator is useful for verifying answers while preparing for JEE, NEET, board exams, and other competitive tests. However, practice manual solving too.' },
    { q: 'What formulas does this calculator use?', a: 'We use standard mathematical formulas as taught in NCERT and university-level textbooks. The specific formula is shown in the Calculation Method section above.' },
    { q: 'Does it handle complex numbers?', a: 'If applicable to this calculator type, yes. Check the specific features listed on this page for complex number support.' },
    { q: 'Is it accurate for large numbers?', a: 'Yes, JavaScript handles numbers up to 2^53 with full precision. For extremely large numbers, results are displayed in scientific notation.' },
  ],
  education: [
    { q: 'Which university grading system does this support?', a: 'This calculator supports multiple grading systems including CBSE (10-point), US (4.0 GPA), UK, and various Indian university scales. Select your system from the options.' },
    { q: 'Can I use this for study abroad applications?', a: 'Yes, this is commonly used by students converting Indian grades for US, UK, Canada, and Australian university applications. Always verify conversion requirements with your target university.' },
    { q: 'Is the attendance calculation accurate?', a: 'Yes, the formula used is standard: (Classes Attended / Total Classes) × 100. Some institutions may count lab and theory sessions differently.' },
    { q: 'Does this work for semester and annual systems?', a: 'Yes, the calculator supports both semester-based and annual grading systems. Enter your specific academic period details.' },
    { q: 'Can teachers use this for grade calculation?', a: 'Absolutely. Teachers and professors can use this to calculate class averages, grade distributions, and individual student performance metrics.' },
  ],
  engineering: [
    { q: 'Are the formulas based on engineering standards?', a: 'Yes, all formulas follow standard engineering references and IS (Indian Standard) codes where applicable. Always verify for safety-critical applications.' },
    { q: 'What units does this calculator support?', a: 'The calculator supports both SI and Imperial/US customary units. You can switch between unit systems as needed.' },
    { q: 'Can I use this for professional engineering work?', a: 'This calculator provides accurate estimates suitable for preliminary design and verification. For final engineering submissions, use certified professional software.' },
    { q: 'Does it account for safety factors?', a: 'The calculator provides raw computed values. Apply appropriate safety factors as per relevant codes and standards for your specific application.' },
    { q: 'Is this suitable for electrical engineering?', a: 'Yes, for electrical calculations. We use standard Ohm\'s law, power formulas, and circuit analysis methods. Always follow electrical safety codes.' },
  ],
  construction: [
    { q: 'Are the construction rates current for India?', a: 'We update rates periodically. However, construction costs vary significantly by city, locality, and market conditions. Get local quotes for accurate budgeting.' },
    { q: 'Does this include labor costs?', a: 'The calculator estimates include both material and labor costs where applicable. Actual labor rates vary by region and availability.' },
    { q: 'Which Indian building codes does this follow?', a: 'Calculations are based on IS codes (Bureau of Indian Standards) and common construction practices followed across India.' },
    { q: 'Should I add a contingency budget?', a: 'Yes, always add 10-15% contingency over the calculated estimate. Construction projects frequently encounter unexpected costs.' },
    { q: 'Can I use this for commercial construction?', a: 'This calculator is primarily designed for residential construction. Commercial projects have different specifications and should use specialized estimation software.' },
  ],
  everyday: [
    { q: 'Is this calculator free?', a: 'Yes, completely free. No signup, no ads blocking your results, no premium features behind a paywall. Everything is free forever.' },
    { q: 'Does it work without internet?', a: 'Yes! Calc Labz is a Progressive Web App (PWA). Once loaded, it works offline. Install it from your browser for instant access.' },
    { q: 'Can I share my calculation results?', a: 'You can take a screenshot of your results or copy the values manually. The calculator runs in your browser so results aren\'t stored on any server.' },
    { q: 'How often is this calculator updated?', a: 'We regularly update calculators to reflect current rates, prices, and regulations. Check the "Last updated" date at the bottom of each calculator.' },
    { q: 'Is my data private?', a: 'Yes. All calculations run locally in your browser. We don\'t collect, store, or transmit any data you enter. Your privacy is our priority.' },
  ],
  unit: [
    { q: 'How accurate are the unit conversions?', a: 'Our conversions use exact conversion factors defined by international standards (SI, NIST). Results are accurate to the precision of JavaScript floating-point numbers.' },
    { q: 'Does this support metric and imperial units?', a: 'Yes, this converter supports both metric (SI) and imperial/US customary units with bidirectional conversion.' },
    { q: 'Can I convert between multiple units at once?', a: 'Enter a value in any unit and the calculator instantly shows equivalents in all supported units for that measurement type.' },
    { q: 'Are these conversions internationally standard?', a: 'Yes, all conversion factors follow the International System of Units (SI) and internationally agreed definitions.' },
  ],
  datetime: [
    { q: 'Does this account for leap years?', a: 'Yes, the calculator correctly handles leap years, including the century rule (divisible by 400). All date arithmetic accounts for varying month lengths.' },
    { q: 'Which calendar system does this use?', a: 'This calculator uses the Gregorian calendar, which is the standard calendar used in India and most of the world for civil purposes.' },
    { q: 'Does it handle time zones?', a: 'If applicable, the calculator supports major world time zones. India Standard Time (IST, UTC+5:30) is the default.' },
    { q: 'How far back/forward can I calculate?', a: 'The calculator handles dates from year 1 to year 9999. For historical dates, note that the Gregorian calendar was adopted at different times in different countries.' },
  ],
  science: [
    { q: 'Which scientific constants does this use?', a: 'We use CODATA internationally recommended values for physical constants (speed of light, Avogadro\'s number, Planck\'s constant, etc.).' },
    { q: 'Is this suitable for lab calculations?', a: 'Yes, for standard calculations and verification. For research-grade precision, use specialized scientific computing software with error propagation.' },
    { q: 'Does it handle significant figures?', a: 'Results are displayed with appropriate precision. For formal scientific work, round results to match the significant figures of your input measurements.' },
    { q: 'Can I use this for NEET/JEE preparation?', a: 'Absolutely. The formulas and constants used match NCERT and standard reference materials used for competitive exam preparation in India.' },
    { q: 'Are the physics formulas Newtonian or relativistic?', a: 'Unless specified otherwise, classical (Newtonian) formulas are used. These are accurate for everyday speeds and scales covered in most academic curricula.' },
  ]
};

async function enhanceFaqs() {
  const registryPath = path.join(__dirname, 'calculator-registry.json');
  const registryData = await fs.readFile(registryPath, 'utf8');
  const REGISTRY = JSON.parse(registryData);

  let enhanced = 0;

  await Promise.all(REGISTRY.map(async (entry) => {
    const slug = entry.slug;
    const fp = path.join(ROOT, slug + '.html');

    let html;
    try {
      html = await fs.readFile(fp, 'utf8');
    } catch (err) {
      return; // Skip if file doesn't exist or can't be read
    }

    const cat = entry.cat || 'everyday';

    // Find existing FAQ schema
    const faqSchemaStart = html.indexOf('"FAQPage"');
    if (faqSchemaStart === -1) return; // Skip if no FAQ schema

    // Find the script block containing FAQPage
    const scriptStart = html.lastIndexOf('<script type="application/ld+json"', faqSchemaStart);
    const scriptEnd = html.indexOf('</script>', faqSchemaStart);
    if (scriptStart === -1 || scriptEnd === -1) return;

    const existingBlock = html.substring(scriptStart, scriptEnd + 9);

    // Parse existing FAQ
    let existingFaq;
    try {
      const jsonStr = html.substring(
        html.indexOf('{', scriptStart),
        html.indexOf('</script>', faqSchemaStart)
      );
      existingFaq = JSON.parse(jsonStr);
    } catch (e) { return; }

    const existingQs = (existingFaq.mainEntity || []).map(q => q.name);

    // Only enhance if fewer than 5 questions
    if (existingQs.length >= 5) return;

    // Add category FAQs that don't duplicate existing
    const catFaqs = CAT_FAQS[cat] || CAT_FAQS.everyday;
    const newEntities = [...(existingFaq.mainEntity || [])];

    catFaqs.forEach(faq => {
      if (newEntities.length >= 7) return;
      if (existingQs.some(q => q.toLowerCase().includes(faq.q.substring(0, 20).toLowerCase()))) return;
      newEntities.push({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      });
    });

    if (newEntities.length === existingQs.length) return; // Nothing added

    // Build new FAQ schema
    const newFaqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": newEntities
    };

    const newBlock = `<script type="application/ld+json" id="jsonld-faq">\n${JSON.stringify(newFaqSchema, null, 2)}\n</script>`;
    html = html.replace(existingBlock, newBlock);

    // Also add FAQ items to the visible FAQ section on the page
    const faqSectionEnd = html.indexOf('</section>', html.indexOf('seo-faq'));
    if (faqSectionEnd !== -1) {
      let newFaqHtml = '';
      catFaqs.forEach(faq => {
        if (existingQs.some(q => q.toLowerCase().includes(faq.q.substring(0, 20).toLowerCase()))) return;
        if (html.includes(faq.q)) return;
        newFaqHtml += `\n        <details>\n          <summary>${faq.q}</summary>\n          <p>${faq.a}</p>\n        </details>`;
      });
      if (newFaqHtml) {
        html = html.substring(0, faqSectionEnd) + newFaqHtml + '\n      ' + html.substring(faqSectionEnd);
      }
    }

    await fs.writeFile(fp, html, 'utf8');
    enhanced++;
    console.log(`  ✅ ${slug} [${existingQs.length} → ${newEntities.length} FAQs]`);
  }));

  console.log(`\n📊 FAQ Enhancement: ${enhanced} pages upgraded with additional FAQs`);
}

enhanceFaqs().catch(err => {
  console.error(err);
  process.exit(1);
});
