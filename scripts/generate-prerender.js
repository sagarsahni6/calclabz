#!/usr/bin/env node
/**
 * Calc Labz — Pre-render Build Script (SEO-enhanced)
 * ====================================================
 * Generates pre-rendered HTML files for top 50 calculators AND category pages.
 * Each file has:
 *   - Unique <title>, <meta description>, og:*, canonical, JSON-LD schemas
 *   - REAL body HTML: H1, intro, how-to steps, formula, FAQ, related calcs,
 *     trust/YMYL disclaimers, breadcrumb nav — all crawlable without JS
 *   - Correct hreflang (removed from inner pages, only on homepage)
 *   - SEO CSS injected into critical inline styles
 *
 * Usage:  node scripts/generate-prerender.js
 * Output: /emi-calculator.html, /finance-calculators.html, ... (root of project)
 */

'use strict';

var fs   = require('fs');
var path = require('path');

// ── CONFIG ──────────────────────────────────────────────────────────────────
var BASE_URL = 'https://calclabz.com';
var ROOT     = path.resolve(__dirname, '..');
var TEMPLATE = path.join(ROOT, 'index.html');
var TODAY    = new Date().toISOString().split('T')[0];

// Import updated footer template with trust page links
var UPDATED_FOOTER;
try {
  UPDATED_FOOTER = require('./generate-trust-pages.js').UPDATED_FOOTER;
} catch (e) {
  UPDATED_FOOTER = null; // trust pages module not yet available
}

// Import unique per-calculator SEO content for basic (non-top-50) pages
var UNIQUE_BASIC_CONTENT;
try {
  UNIQUE_BASIC_CONTENT = require('./seo-content-basic');
} catch (e) {
  UNIQUE_BASIC_CONTENT = {};
  console.warn('  ⚠  seo-content-basic not found — basic pages will use category templates.');
}

// ── SEO CSS ─────────────────────────────────────────────────────────────────
var SEO_CSS = '\n/* SEO Pre-rendered Content */\n' +
'.seo-breadcrumb{padding:8px 0;font-size:.82rem;color:var(--txt2)}\n' +
'.seo-breadcrumb a{color:var(--p);text-decoration:none}\n' +
'.seo-breadcrumb a:hover{text-decoration:underline}\n' +
'#seo-content h1{font-size:1.8rem;font-weight:800;margin:16px 0 8px;color:var(--txt)}\n' +
'#seo-content h2{font-size:1.2rem;font-weight:700;margin:24px 0 8px;color:var(--txt)}\n' +
'#seo-content h3{font-size:1rem;font-weight:600;margin:16px 0 6px;color:var(--txt)}\n' +
'.seo-intro{font-size:.95rem;color:var(--txt1);line-height:1.7;margin-bottom:20px}\n' +
'.seo-section{margin-bottom:24px;padding:16px;background:var(--bg1);border:1px solid var(--brd);border-radius:var(--rmd)}\n' +
'.seo-section p,.seo-section li{font-size:.9rem;color:var(--txt1);line-height:1.7}\n' +
'.seo-section ol,.seo-section ul{padding-left:20px;margin:8px 0}\n' +
'.seo-section li{margin:4px 0}\n' +
'.seo-faq{margin-bottom:24px}\n' +
'.seo-faq details{background:var(--bg1);border:1px solid var(--brd);border-radius:var(--rsm);margin:8px 0;overflow:hidden}\n' +
'.seo-faq summary{padding:12px 16px;font-weight:600;cursor:pointer;font-size:.9rem;color:var(--txt)}\n' +
'.seo-faq details[open] summary{border-bottom:1px solid var(--brd)}\n' +
'.seo-faq details p{padding:8px 16px 12px;font-size:.88rem;color:var(--txt1);line-height:1.7}\n' +
'.seo-related-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:12px}\n' +
'.seo-related-grid a{display:block;padding:10px 14px;background:var(--bg1);border:1px solid var(--brd);border-radius:var(--rsm);font-size:.85rem;color:var(--p);text-decoration:none;transition:var(--transition)}\n' +
'.seo-related-grid a:hover{background:var(--bg2);border-color:var(--p)}\n' +
'.seo-trust{margin:24px 0;padding:16px;background:var(--bg2);border-radius:var(--rsm);border-left:3px solid var(--p)}\n' +
'.seo-trust p{font-size:.82rem;color:var(--txt2);line-height:1.6;margin:4px 0}\n' +
'.seo-trust strong{color:var(--txt1)}\n' +
'.seo-calc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;margin-top:16px}\n' +
'.seo-calc-card{display:block;padding:16px;background:var(--bg1);border:1px solid var(--brd);border-radius:var(--rmd);text-decoration:none;transition:var(--transition)}\n' +
'.seo-calc-card:hover{border-color:var(--p);background:var(--bg2)}\n' +
'.seo-calc-card strong{display:block;color:var(--txt);font-size:.95rem;margin-bottom:4px}\n' +
'.seo-calc-card span{font-size:.82rem;color:var(--txt2);display:block}\n' +
'@media(max-width:600px){.seo-related-grid{grid-template-columns:1fr}}\n' +
'.seo-article{margin-bottom:24px}\n' +
'.seo-article-meta{display:flex;gap:8px;font-size:.82rem;color:var(--txt2);margin-bottom:20px;flex-wrap:wrap}\n' +
'.seo-article h2{font-size:1.15rem;font-weight:700;margin:24px 0 8px;color:var(--txt)}\n' +
'.seo-article p{font-size:.92rem;color:var(--txt1);line-height:1.75;margin:8px 0}\n' +
'.seo-article ul,.seo-article ol{padding-left:20px;margin:8px 0}\n' +
'.seo-article li{font-size:.9rem;color:var(--txt1);line-height:1.7;margin:4px 0}\n' +
'.seo-article strong{color:var(--txt)}\n' +
'.seo-article-cta{margin:24px 0;padding:16px;background:linear-gradient(135deg,rgba(99,102,241,.12),rgba(129,140,248,.08));border:1px solid rgba(99,102,241,.2);border-radius:var(--rmd);text-align:center}\n' +
'.seo-article-cta a{display:inline-block;padding:10px 24px;background:var(--p);color:#fff;border-radius:var(--rsm);font-size:.9rem;font-weight:600;text-decoration:none;transition:var(--transition)}\n' +
'.seo-article-cta a:hover{background:var(--p2)}\n' +
'.seo-article table{width:100%;border-collapse:collapse;margin:12px 0;font-size:.88rem}\n' +
'.seo-article th,.seo-article td{padding:8px 12px;border:1px solid var(--brd);text-align:left}\n' +
'.seo-article th{background:var(--bg2);font-weight:600;color:var(--txt)}\n' +
'.seo-article td{color:var(--txt1)}\n' +
'.seo-article h3{font-size:1rem;font-weight:600;margin:16px 0 6px;color:var(--txt)}\n' +
'.seo-article a{color:var(--p);text-decoration:none}\n' +
'.seo-article a:hover{text-decoration:underline}\n';

// ── CALCULATORS — loaded from centralized SEO content module ────────────────
var CALCULATORS = require('./seo-content-top50');

// ── CATEGORY META ───────────────────────────────────────────────────────────
var CATEGORIES = [
  {
    id: 'finance', slug: 'finance-calculators',
    name: 'Finance Calculators',
    title: 'Finance Calculators: EMI, SIP, Tax, FD &amp; 75+ Free Tools | Calc Labz',
    desc: 'Free online finance calculators for EMI, SIP, GST, income tax, PPF, FD, mortgage, and 75+ more. Instant results for loan planning, investment returns, and tax savings. No signup required.'
  },
  {
    id: 'health', slug: 'health-calculators',
    name: 'Health &amp; Fitness Calculators',
    title: 'Health Calculators: BMI, BMR, TDEE, Calories &amp; More | Calc Labz',
    desc: 'Free online health calculators for BMI, BMR, TDEE, calorie needs, body fat, ideal weight, and more. Track your fitness goals with instant, accurate results.'
  },
  {
    id: 'math', slug: 'math-calculators',
    name: 'Math Calculators',
    title: 'Math Calculators: Percentage, Statistics, Algebra &amp; More | Calc Labz',
    desc: 'Free online math calculators for percentage, average, ratio, quadratic equations, statistics, and more. Solve math problems instantly with step-by-step results.'
  },
  {
    id: 'everyday', slug: 'everyday-calculators',
    name: 'Everyday &amp; Lifestyle Calculators',
    title: 'Everyday Calculators: Tip, Discount, Fuel &amp; Budget Tools | Calc Labz',
    desc: 'Free everyday calculators for tip, discount, fuel cost, mileage, electric bill, and more. Handy tools for daily life decisions &mdash; instant results, no signup.'
  },
  {
    id: 'education', slug: 'education-calculators',
    name: 'Education Calculators',
    title: 'Education Calculators: CGPA, GPA, Grade &amp; Study Tools | Calc Labz',
    desc: 'Free education calculators for CGPA, GPA conversion, grade calculation, study hours, and more. Essential tools for students &mdash; instant results.'
  },
  {
    id: 'engineering', slug: 'engineering-calculators',
    name: 'Engineering &amp; Science Calculators',
    title: 'Engineering Calculators: Ohm\'s Law, Resistor, Power &amp; More | Calc Labz',
    desc: 'Free engineering calculators for Ohm\'s law, resistor values, power, beam load, pipe flow, and more. Essential tools for engineers &mdash; instant, accurate results.'
  },
  {
    id: 'construction', slug: 'construction-calculators',
    name: 'Construction Calculators',
    title: 'Construction Calculators: Concrete, Bricks, Paint &amp; More | Calc Labz',
    desc: 'Free construction calculators for concrete, bricks, paint, flooring, steel, and roofing estimation. Plan your building project with accurate material calculations.'
  },
  {
    id: 'unit', slug: 'unit-calculators',
    name: 'Unit Conversion Calculators',
    title: 'Unit Conversion Calculators: Length, Weight, Temperature | Calc Labz',
    desc: 'Free unit conversion calculators for length, weight, temperature, area, speed, volume, and more. Convert between metric, imperial, and other measurement systems instantly.'
  },
  {
    id: 'datetime', slug: 'datetime-calculators',
    name: 'Date &amp; Time Calculators',
    title: 'Date &amp; Time Calculators: Date Difference, Working Days | Calc Labz',
    desc: 'Free date and time calculators for date difference, working days, time conversion, countdown timers, and timezone conversion. Plan schedules with accuracy.'
  },
  {
    id: 'science', slug: 'science-calculators',
    name: 'Science Calculators',
    title: 'Science Calculators: Physics, Chemistry &amp; Lab Tools | Calc Labz',
    desc: 'Free science calculators for Newton\'s laws, density, wavelength, half-life, pH, and thermodynamics. Essential lab and homework tools for students and researchers.'
  }
];

// ── HELPERS ──────────────────────────────────────────────────────────────────

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildHowToSchema(calc) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: calc.howTo.name,
    description: calc.desc.replace(/&amp;/g, '&').replace(/&mdash;/g, '—').replace(/&ndash;/g, '–').replace(/&#8377;/g, '₹').replace(/<[^>]+>/g, ''),
    step: calc.howTo.steps.map(function(text) {
      return { '@type': 'HowToStep', text: text.replace(/&#8377;/g, '₹').replace(/&mdash;/g, '—').replace(/&ndash;/g, '–').replace(/<[^>]+>/g, '') };
    })
  };
}

function buildFAQSchema(calc) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: calc.faqs.map(function(f) {
      return {
        '@type': 'Question',
        name: f.q.replace(/&#8377;/g, '₹').replace(/&amp;/g, '&').replace(/&ndash;/g, '–'),
        acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/&#8377;/g, '₹').replace(/&amp;/g, '&').replace(/&ndash;/g, '–').replace(/&mdash;/g, '—').replace(/<[^>]+>/g, '') }
      };
    })
  };
}

function buildBreadcrumbSchema(calc) {
  var pageUrl = BASE_URL + '/' + calc.slug;
  var catSlug = calc.cat.toLowerCase() + '-calculators';
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: calc.cat + ' Calculators', item: BASE_URL + '/' + catSlug },
      { '@type': 'ListItem', position: 3, name: calc.title.split(':')[0].split(' —')[0].split('|')[0].trim(), item: pageUrl }
    ]
  };
}

function buildSoftwareSchema(calc) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: calc.title.split(':')[0].split(' —')[0].split('|')[0].trim(),
    description: calc.desc.replace(/&amp;/g, '&').replace(/&mdash;/g, '—').replace(/&#8377;/g, '₹').replace(/<[^>]+>/g, ''),
    applicationCategory: 'UtilitiesApplication',
    applicationSubCategory: 'Calculator',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock' }
  };
}

function jsonLdTag(id, schema) {
  return '<script type="application/ld+json" id="' + id + '">\n' +
    JSON.stringify(schema, null, 2) +
    '\n</script>';
}

// ── BODY HTML BUILDERS ──────────────────────────────────────────────────────

function getRelatedCalcs(calc) {
  return CALCULATORS.filter(function(c) {
    return c.cat === calc.cat && c.id !== calc.id;
  }).slice(0, 6);
}

function buildTrustSection(calc) {
  var html = '<div class="seo-trust">\n';
  if (calc.cat === 'Finance') {
    html += '  <p><strong>Disclaimer:</strong> This calculator provides estimates for informational purposes only. Actual outcomes may vary based on applicable rates, policies, and individual circumstances. Consult a qualified financial advisor or chartered accountant before making financial decisions. See our full <a href="/disclaimer">Disclaimer</a>.</p>\n';
    if (calc.howCalculated) {
      html += '  <p><strong>Methodology:</strong> Formula based on standard financial calculation methods widely used in the banking industry. See our <a href="/editorial-policy">Editorial Policy</a> for how we validate calculators.</p>\n';
    }
  } else if (calc.cat === 'Health') {
    html += '  <p><strong>Medical disclaimer:</strong> This calculator provides general estimates and is not a substitute for professional medical advice, diagnosis, or treatment. Results may vary based on individual factors. Consult a healthcare professional for personalized guidance. See our full <a href="/disclaimer">Disclaimer</a>.</p>\n';
    if (calc.howCalculated) {
      html += '  <p><strong>Methodology:</strong> Based on clinically validated formulas used in nutrition and medical research. See our <a href="/editorial-policy">Editorial Policy</a> for how we validate content.</p>\n';
    }
  } else {
    html += '  <p><strong>Note:</strong> This calculator provides estimates for informational purposes only. For professional advice, consult a qualified expert in the relevant field.</p>\n';
  }
  html += '  <p><strong>Author:</strong> Calc Labz Editorial Team &nbsp;|&nbsp; <strong>Reviewed for accuracy</strong></p>\n';
  html += '  <p><strong>Last updated:</strong> April 2026</p>\n';
  html += '</div>\n';
  return html;
}

function buildBodyHTML(calc) {
  var shortName = calc.title.split(':')[0].split(' —')[0].split('|')[0].trim();
  var catSlug = calc.cat.toLowerCase() + '-calculators';
  var catName = calc.cat + ' Calculators';

  var html = '\n    <!-- SEO Pre-rendered Content — visible to crawlers; JS app hydrates over this -->\n';
  html += '    <div id="seo-content">\n';

  // Breadcrumb
  html += '      <nav class="seo-breadcrumb" aria-label="Breadcrumb">\n';
  html += '        <a href="/">Home</a> &rsaquo; ';
  html += '<a href="/' + catSlug + '">' + catName + '</a> &rsaquo; ';
  html += '<span>' + shortName + '</span>\n';
  html += '      </nav>\n\n';

  // H1
  html += '      <h1>' + shortName + '</h1>\n';

  // Intro
  html += '      <p class="seo-intro">' + calc.desc + '</p>\n\n';

  // What it does (enriched calcs only)
  if (calc.whatItDoes) {
    html += '      <section class="seo-section">\n';
    html += '        <h2>What is ' + shortName + '?</h2>\n';
    html += '        <p>' + calc.whatItDoes + '</p>\n';
    html += '      </section>\n\n';
  }

  // How to use (from howTo steps)
  if (calc.howTo) {
    html += '      <section class="seo-section">\n';
    html += '        <h2>' + calc.howTo.name + '</h2>\n';
    html += '        <ol>\n';
    calc.howTo.steps.forEach(function(step) {
      html += '          <li>' + step + '</li>\n';
    });
    html += '        </ol>\n';
    html += '      </section>\n\n';
  }

  // Formula / How it's calculated (enriched calcs only)
  if (calc.howCalculated) {
    html += '      <section class="seo-section">\n';
    html += '        <h2>How ' + shortName + ' is Calculated</h2>\n';
    html += '        <p>' + calc.howCalculated + '</p>\n';
    if (calc.workedExample) {
      html += '        <h3>Worked Example</h3>\n';
      html += '        <p>' + calc.workedExample + '</p>\n';
    }
    html += '      </section>\n\n';
  }

  // Use cases (enriched calcs only)
  if (calc.useCases && calc.useCases.length) {
    html += '      <section class="seo-section">\n';
    html += '        <h2>Common Use Cases</h2>\n';
    html += '        <ul>\n';
    calc.useCases.forEach(function(uc) {
      html += '          <li>' + uc + '</li>\n';
    });
    html += '        </ul>\n';
    html += '      </section>\n\n';
  }

  // Common mistakes (enriched calcs only)
  if (calc.commonMistakes && calc.commonMistakes.length) {
    html += '      <section class="seo-section">\n';
    html += '        <h2>Common Mistakes to Avoid</h2>\n';
    html += '        <ul>\n';
    calc.commonMistakes.forEach(function(m) {
      html += '          <li>' + m + '</li>\n';
    });
    html += '        </ul>\n';
    html += '      </section>\n\n';
  }

  // FAQ section
  if (calc.faqs && calc.faqs.length) {
    html += '      <section class="seo-faq">\n';
    html += '        <h2>Frequently Asked Questions</h2>\n';
    calc.faqs.forEach(function(faq) {
      html += '        <details>\n';
      html += '          <summary>' + faq.q + '</summary>\n';
      html += '          <p>' + faq.a + '</p>\n';
      html += '        </details>\n';
    });
    html += '      </section>\n\n';
  }

  // Related calculators
  var related = getRelatedCalcs(calc);
  if (related.length) {
    html += '      <section class="seo-section">\n';
    html += '        <h2>Related Calculators</h2>\n';
    html += '        <div class="seo-related-grid">\n';
    related.forEach(function(r) {
      var rName = r.title.split(':')[0].split(' —')[0].split('|')[0].trim();
      html += '          <a href="/' + r.slug + '">' + rName + '</a>\n';
    });
    html += '        </div>\n';
    html += '      </section>\n\n';
  }

  // Trust section
  html += '      ' + buildTrustSection(calc).replace(/\n/g, '\n      ').trim() + '\n';

  html += '    </div>\n';

  return html;
}

function buildCategoryBodyHTML(cat, calcs) {
  var html = '\n    <!-- SEO Pre-rendered Content — visible to crawlers; JS app hydrates over this -->\n';
  html += '    <div id="seo-content">\n';

  // Breadcrumb
  html += '      <nav class="seo-breadcrumb" aria-label="Breadcrumb">\n';
  html += '        <a href="/">Home</a> &rsaquo; <span>' + cat.name + '</span>\n';
  html += '      </nav>\n\n';

  // H1
  html += '      <h1>' + cat.name + '</h1>\n';

  // Intro
  html += '      <p class="seo-intro">' + cat.desc + '</p>\n\n';

  // Calculator grid
  html += '      <div class="seo-calc-grid">\n';
  calcs.forEach(function(c) {
    // Prefer registry name > title extraction > slug-to-name fallback
    var name = c.name || (c.title ? c.title.split(':')[0].split(' —')[0].split('|')[0].trim() : formatSlugToName(c.slug));
    // Look up unique description from basic content modules, then top-50 desc, then generic
    var unique = UNIQUE_BASIC_CONTENT[c.id] || null;
    var cDesc = (unique && unique.desc) ? unique.desc : (c.desc || 'Free online ' + name.toLowerCase() + '. Instant results, no signup.');
    if (cDesc.length > 120) cDesc = cDesc.substring(0, 117) + '...';
    html += '        <a href="/' + c.slug + '" class="seo-calc-card">\n';
    html += '          <strong>' + name + '</strong>\n';
    html += '          <span>' + cDesc + '</span>\n';
    html += '        </a>\n';
  });
  html += '      </div>\n';

  html += '    </div>\n';

  return html;
}

function formatSlugToName(slug) {
  return slug.replace(/-calculator$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, function(c) { return c.toUpperCase(); }) + ' Calculator';
}

// ── GENERATOR: Calculator Pages ─────────────────────────────────────────────

function generate() {
  var template = fs.readFileSync(TEMPLATE, 'utf8');

  CALCULATORS.forEach(function(calc) {
    var pageUrl = BASE_URL + '/' + calc.slug;
    var html    = template;

    // 1. Replace <title>
    html = html.replace(
      /<title>.*?<\/title>/,
      '<title>' + calc.title + '</title>'
    );

    // 2. Replace meta description
    html = html.replace(
      /<meta name="description" content="[^"]*">/,
      '<meta name="description" content="' + calc.desc.replace(/"/g, '&quot;') + '">'
    );

    // 3. Replace canonical
    html = html.replace(
      /<link rel="canonical" href="[^"]*">/,
      '<link rel="canonical" href="' + pageUrl + '">'
    );

    // 4. Replace og:url
    html = html.replace(
      /<meta property="og:url" content="[^"]*">/,
      '<meta property="og:url" content="' + pageUrl + '">'
    );

    // 5. Replace og:title
    html = html.replace(
      /<meta property="og:title" content="[^"]*">/,
      '<meta property="og:title" content="' + calc.title + '">'
    );

    // 6. Replace og:description
    html = html.replace(
      /<meta property="og:description" content="[^"]*">/,
      '<meta property="og:description" content="' + calc.desc.replace(/"/g, '&quot;') + '">'
    );

    // 7. Replace twitter:title
    html = html.replace(
      /<meta name="twitter:title" content="[^"]*">/,
      '<meta name="twitter:title" content="' + calc.title + '">'
    );

    // 8. Replace twitter:description
    html = html.replace(
      /<meta name="twitter:description" content="[^"]*">/,
      '<meta name="twitter:description" content="' + calc.desc.replace(/"/g, '&quot;') + '">'
    );

    // 9. Remove incorrect hreflang (inner pages should not have hreflang pointing to homepage)
    html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*">\r?\n/g, '');

    // 10. Inject per-calc JSON-LD schemas just before </head>
    var schemas = [
      jsonLdTag('jsonld-howto',       buildHowToSchema(calc)),
      jsonLdTag('jsonld-faq',         buildFAQSchema(calc)),
      jsonLdTag('jsonld-breadcrumb',  buildBreadcrumbSchema(calc)),
      jsonLdTag('jsonld-calc',        buildSoftwareSchema(calc))
    ].join('\n');

    // Remove existing jsonld-main and jsonld-website blocks in template
    html = html.replace(
      /<!-- ═══ JSON-LD: SoftwareApplication[\s\S]*?<\/script>\s*\n/,
      ''
    );
    html = html.replace(
      /<!-- ═══ JSON-LD: WebSite[\s\S]*?<\/script>\s*\n/,
      ''
    );
    html = html.replace('</head>', schemas + '\n</head>');

    // 11. og:type
    html = html.replace(
      /<meta property="og:type" content="[^"]*">/,
      '<meta property="og:type" content="website">'
    );

    // 12. Inject SEO CSS before </style>
    html = html.replace('    </style>', SEO_CSS + '    </style>');

    // 13. Replace body placeholder with real SEO content
    var bodyHtml = buildBodyHTML(calc);
    html = html.replace(
      /<!-- Content injected by JS -->[\s\S]*?<p>Loading Calc Labz\.\.\.<\/p>\s*<\/div>/,
      bodyHtml
    );

    // 14. Update footer with trust page links
    if (UPDATED_FOOTER) {
      html = html.replace(
        /    <!-- ═══ FOOTER ═══ -->[\s\S]*?<\/footer>/,
        UPDATED_FOOTER
      );
    }

    // Write output file
    var outFile = path.join(ROOT, calc.slug + '.html');
    fs.writeFileSync(outFile, html, 'utf8');
    console.log('  ✓  ' + calc.slug + '.html  (with body content)');
  });

  console.log('  Generated ' + CALCULATORS.length + ' calculator pages.\n');
}

// ── GENERATOR: Category Pages ───────────────────────────────────────────────

function generateCategories() {
  var template = fs.readFileSync(TEMPLATE, 'utf8');
  var registry;
  try {
    registry = require('./calculator-registry.json');
  } catch (e) {
    console.warn('  ⚠  calculator-registry.json not found, skipping category pages.');
    return;
  }

  CATEGORIES.forEach(function(cat) {
    // Find all calculators in this category from registry
    var calcs = registry.filter(function(c) { return c.cat === cat.id; });
    if (!calcs.length) return;

    // Sort by priority descending
    calcs.sort(function(a, b) { return parseFloat(b.priority || '0.5') - parseFloat(a.priority || '0.5'); });

    var pageUrl = BASE_URL + '/' + cat.slug;
    var html = template;

    // Replace <title>
    html = html.replace(/<title>.*?<\/title>/, '<title>' + cat.title + '</title>');

    // Replace meta description
    html = html.replace(
      /<meta name="description" content="[^"]*">/,
      '<meta name="description" content="' + cat.desc.replace(/"/g, '&quot;') + '">'
    );

    // Replace canonical
    html = html.replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="' + pageUrl + '">');

    // Replace og tags
    html = html.replace(/<meta property="og:url" content="[^"]*">/, '<meta property="og:url" content="' + pageUrl + '">');
    html = html.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="' + cat.title + '">');
    html = html.replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="' + cat.desc.replace(/"/g, '&quot;') + '">');
    html = html.replace(/<meta name="twitter:title" content="[^"]*">/, '<meta name="twitter:title" content="' + cat.title + '">');
    html = html.replace(/<meta name="twitter:description" content="[^"]*">/, '<meta name="twitter:description" content="' + cat.desc.replace(/"/g, '&quot;') + '">');

    // Remove incorrect hreflang
    html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*">\r?\n/g, '');

    // Remove homepage JSON-LD, inject category breadcrumb
    html = html.replace(/<!-- ═══ JSON-LD: SoftwareApplication[\s\S]*?<\/script>\s*\n/, '');
    html = html.replace(/<!-- ═══ JSON-LD: WebSite[\s\S]*?<\/script>\s*\n/, '');

    var catBreadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: cat.name.replace(/&amp;/g, '&'), item: pageUrl }
      ]
    };
    html = html.replace('</head>', jsonLdTag('jsonld-breadcrumb', catBreadcrumb) + '\n</head>');

    // Inject SEO CSS
    html = html.replace('    </style>', SEO_CSS + '    </style>');

    // Replace body content
    var bodyHtml = buildCategoryBodyHTML(cat, calcs);
    html = html.replace(
      /<!-- Content injected by JS -->[\s\S]*?<p>Loading Calc Labz\.\.\.<\/p>\s*<\/div>/,
      bodyHtml
    );

    // Update footer with trust page links
    if (UPDATED_FOOTER) {
      html = html.replace(
        /    <!-- ═══ FOOTER ═══ -->[\s\S]*?<\/footer>/,
        UPDATED_FOOTER
      );
    }

    // Write output file
    var outFile = path.join(ROOT, cat.slug + '.html');
    fs.writeFileSync(outFile, html, 'utf8');
    console.log('  ✓  ' + cat.slug + '.html  (' + calcs.length + ' calculators)');
  });

  console.log('  Generated ' + CATEGORIES.length + ' category pages.\n');
}

// ── GENERATOR: All Registry Calculators (basic pages) ───────────────────────

var CAT_DISPLAY = {
  finance: 'Finance', health: 'Health', math: 'Math',
  everyday: 'Everyday', unit: 'Unit Conversion', datetime: 'Date &amp; Time',
  engineering: 'Engineering', construction: 'Construction',
  education: 'Education', science: 'Science'
};

function generateAllRegistryCalcs() {
  var template = fs.readFileSync(TEMPLATE, 'utf8');
  var registry;
  try {
    registry = require('./calculator-registry.json');
  } catch (e) {
    console.warn('  ⚠  calculator-registry.json not found, skipping.');
    return 0;
  }

  // Build a set of already-generated slugs (from the rich CALCULATORS array)
  var alreadyGenerated = {};
  CALCULATORS.forEach(function(c) { alreadyGenerated[c.slug] = true; });

  // Category-specific content templates for enriching basic pages
  var CAT_CONTENT = {
    finance: {
      whatPrefix: 'This calculator helps you compute ',
      whatSuffix: ' with instant, accurate results. All calculations use standard formulas widely used in the Indian banking and financial planning industry.',
      useCases: ['Planning your monthly budget', 'Comparing financial products', 'Making informed investment or loan decisions', 'Tax planning and compliance'],
      faqs: [
        { q: 'Is this calculator accurate?', a: 'Our calculator uses standard financial formulas used by banks and financial institutions. Results are estimates — actual amounts may vary based on specific terms, fees, and conditions from your financial provider.' },
        { q: 'Do I need to sign up to use this?', a: 'No. All calculations run locally in your browser. We do not collect any personal or financial data.' },
        { q: 'Can I use this for tax filing?', a: 'This calculator provides estimates for planning purposes. Always verify figures with a qualified chartered accountant or use the official Income Tax Department portal for filing.' }
      ],
      disclaimer: '<p><strong>Disclaimer:</strong> This calculator provides estimates for informational purposes only. Actual outcomes may vary based on applicable rates, policies, and individual circumstances. Consult a qualified financial advisor or chartered accountant before making financial decisions. See our full <a href="/disclaimer">Disclaimer</a>.</p>'
    },
    health: {
      whatPrefix: 'This calculator helps you estimate ',
      whatSuffix: ' based on clinically validated formulas. Results provide general guidance — individual needs may vary based on personal health factors.',
      useCases: ['Tracking your fitness and health metrics', 'Setting realistic health and nutrition goals', 'Understanding your body measurements', 'Discussing results with your healthcare provider'],
      faqs: [
        { q: 'How accurate are the results?', a: 'This calculator uses peer-reviewed formulas from medical and nutrition research. Results are general estimates — individual results may vary. Consult a healthcare professional for personalized advice.' },
        { q: 'Is my health data stored?', a: 'No. All calculations happen locally in your browser. We do not collect, store, or transmit any health data.' },
        { q: 'Should I use this to diagnose a condition?', a: 'No. This tool is for informational and educational purposes only. It is not a substitute for professional medical diagnosis. Always consult a qualified healthcare provider.' }
      ],
      disclaimer: '<p><strong>Medical disclaimer:</strong> This calculator provides general estimates and is not a substitute for professional medical advice, diagnosis, or treatment. Results may vary based on individual factors. Consult a healthcare professional for personalized guidance. See our full <a href="/disclaimer">Disclaimer</a>.</p>'
    },
    math: {
      whatPrefix: 'This calculator helps you solve ',
      whatSuffix: ' problems quickly and accurately. Enter your values and get instant results with clear output.',
      useCases: ['Homework and exam preparation', 'Quick verification of manual calculations', 'Understanding mathematical concepts', 'Professional and academic research'],
      faqs: [
        { q: 'What formulas does this calculator use?', a: 'This calculator uses standard mathematical formulas from established textbooks and academic references.' },
        { q: 'Can I use this for exams?', a: 'This tool is designed for practice and learning. Check your institution\'s policy on calculator use during exams.' }
      ],
      disclaimer: '<p><strong>Note:</strong> This calculator provides results based on standard mathematical formulas. Always verify important calculations independently.</p>'
    },
    everyday: {
      whatPrefix: 'This calculator helps you quickly figure out ',
      whatSuffix: ' for everyday decisions. Simple inputs, instant results — no complex setup needed.',
      useCases: ['Daily budgeting and spending decisions', 'Planning purchases and comparing options', 'Quick estimations for everyday tasks', 'Saving time on routine calculations'],
      faqs: [
        { q: 'Is this calculator free?', a: 'Yes, all calculators on Calc Labz are completely free to use with no signup required.' },
        { q: 'Does it work on mobile?', a: 'Yes, our calculators are fully responsive and work on smartphones, tablets, and desktops. You can also install Calc Labz as an app for offline access.' }
      ],
      disclaimer: '<p><strong>Note:</strong> This calculator provides estimates for informational purposes only. Results may vary based on local conditions and individual circumstances.</p>'
    },
    education: {
      whatPrefix: 'This calculator helps students and educators with ',
      whatSuffix: ' calculations. Designed to save time and provide accurate academic results.',
      useCases: ['Academic grade tracking and GPA planning', 'Exam preparation and score analysis', 'Study schedule optimization', 'Understanding grading systems and requirements'],
      faqs: [
        { q: 'Which grading system does this support?', a: 'Our education calculators support common Indian university grading scales as well as international 4.0 GPA systems. Check the specific calculator for supported scales.' },
        { q: 'Can I rely on this for official results?', a: 'Our calculators provide accurate estimates based on standard formulas, but you should always verify with your institution\'s official grading policy.' }
      ],
      disclaimer: '<p><strong>Note:</strong> Results are based on standard formulas and may not account for institution-specific grading policies. Verify with your school or university.</p>'
    },
    engineering: {
      whatPrefix: 'This engineering calculator helps you compute ',
      whatSuffix: ' using standard engineering formulas. Ideal for students, hobbyists, and professionals doing preliminary calculations.',
      useCases: ['Engineering coursework and homework', 'Preliminary design calculations', 'Quick verification of engineering parameters', 'Hobby electronics and DIY projects'],
      faqs: [
        { q: 'Can I use these results in a real project?', a: 'Our calculators provide preliminary estimates. All structural, electrical, and mechanical calculations for actual projects must be verified and approved by a licensed professional engineer.' },
        { q: 'What standards are these based on?', a: 'Our engineering calculators use widely accepted formulas from standard engineering references and textbooks.' }
      ],
      disclaimer: '<p><strong>Engineering disclaimer:</strong> This calculator provides preliminary estimates. All calculations for actual engineering projects must be verified by a licensed professional engineer. See our full <a href="/disclaimer">Disclaimer</a>.</p>'
    },
    construction: {
      whatPrefix: 'This construction calculator helps you estimate ',
      whatSuffix: ' for your building or renovation project. Get material quantities, costs, and measurements instantly.',
      useCases: ['Estimating construction material quantities', 'Budget planning for building projects', 'Comparing material options and costs', 'Quick reference for contractors and homeowners'],
      faqs: [
        { q: 'How accurate are the material estimates?', a: 'Our estimates use standard construction industry formulas and include typical waste factors. Actual quantities may vary based on site conditions, material quality, and construction methods.' },
        { q: 'Should I buy materials based on these estimates?', a: 'Use our estimates as a starting point for planning. Always consult with a contractor or engineer for final quantities before purchasing materials.' }
      ],
      disclaimer: '<p><strong>Construction disclaimer:</strong> Material estimates are approximate. Actual quantities depend on site conditions, wastage, and construction methods. Consult a qualified contractor or engineer before purchasing materials. See our full <a href="/disclaimer">Disclaimer</a>.</p>'
    },
    unit: {
      whatPrefix: 'This converter helps you quickly convert ',
      whatSuffix: ' between different measurement systems. Supports metric, imperial, and other standard units.',
      useCases: ['Converting between metric and imperial units', 'International trade and travel calculations', 'Academic and scientific unit conversions', 'Cooking and recipe conversions'],
      faqs: [
        { q: 'Which unit systems are supported?', a: 'We support conversions between metric (SI), imperial, US customary, and other commonly used measurement systems.' },
        { q: 'How precise are the conversions?', a: 'Our conversions use standard conversion factors with high precision. Results are suitable for most practical applications.' }
      ],
      disclaimer: '<p><strong>Note:</strong> Conversions use standard factors. For scientific or industrial applications requiring extreme precision, verify with authoritative reference sources.</p>'
    },
    datetime: {
      whatPrefix: 'This date/time calculator helps you compute ',
      whatSuffix: ' with precision. Handles calendar math, time zones, and scheduling calculations.',
      useCases: ['Counting days between dates', 'Planning schedules and deadlines', 'Time zone conversions for international calls', 'Age calculations and milestone tracking'],
      faqs: [
        { q: 'Does it account for leap years?', a: 'Yes, our date calculators correctly handle leap years, varying month lengths, and calendar edge cases.' },
        { q: 'Which calendar system is used?', a: 'Our calculators use the Gregorian calendar, which is the standard civil calendar used worldwide.' }
      ],
      disclaimer: '<p><strong>Note:</strong> Date calculations use the Gregorian calendar. Results are accurate for all practical purposes.</p>'
    },
    science: {
      whatPrefix: 'This science calculator helps you solve ',
      whatSuffix: ' problems using established physics, chemistry, or biology formulas. Perfect for students and educators.',
      useCases: ['Physics and chemistry homework', 'Lab calculations and data analysis', 'Exam preparation and concept verification', 'Quick reference for scientific formulas'],
      faqs: [
        { q: 'What formulas are used?', a: 'Our science calculators implement standard formulas from physics, chemistry, and biology textbooks used in CBSE, ICSE, and university-level curricula.' },
        { q: 'Are these suitable for lab work?', a: 'For preliminary estimates yes. Critical lab calculations should be verified using calibrated instruments and peer-reviewed reference values.' }
      ],
      disclaimer: '<p><strong>Note:</strong> Calculations use standard scientific formulas. For critical research or industrial applications, verify results with authoritative references.</p>'
    }
  };

  var count = 0;
  registry.forEach(function(entry) {
    if (alreadyGenerated[entry.slug]) return; // Skip — already has rich page

    var catDisplay = CAT_DISPLAY[entry.cat] || 'Tools';
    var catSlug = entry.cat + '-calculators';
    var shortName = entry.name || formatSlugToName(entry.slug);
    var pageUrl = BASE_URL + '/' + entry.slug;
    var nameLC = shortName.toLowerCase();
    var catContent = CAT_CONTENT[entry.cat] || CAT_CONTENT.everyday;

    // Look up unique per-calculator content (overrides category template)
    var unique = UNIQUE_BASIC_CONTENT[entry.id] || null;

    var pageTitle = shortName + ' — Free Online Calculator | Calc Labz';
    // Use unique desc if available, otherwise generic
    var pageDesc = unique ? unique.desc : 'Use our free ' + nameLC + ' for instant, accurate results. Understand the methodology, see examples, and make informed decisions. No signup required.';

    var html = template;

    // Head metadata
    html = html.replace(/<title>.*?<\/title>/, '<title>' + pageTitle + '</title>');
    html = html.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="' + pageDesc + '">');
    html = html.replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="' + pageUrl + '">');
    html = html.replace(/<meta property="og:url" content="[^"]*">/, '<meta property="og:url" content="' + pageUrl + '">');
    html = html.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="' + pageTitle + '">');
    html = html.replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="' + pageDesc + '">');
    html = html.replace(/<meta name="twitter:title" content="[^"]*">/, '<meta name="twitter:title" content="' + pageTitle + '">');
    html = html.replace(/<meta name="twitter:description" content="[^"]*">/, '<meta name="twitter:description" content="' + pageDesc + '">');

    // Remove hreflang
    html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*">\r?\n/g, '');

    // Remove homepage JSON-LD, inject breadcrumb + FAQ
    html = html.replace(/<!-- ═══ JSON-LD: SoftwareApplication[\s\S]*?<\/script>\s*\n/, '');
    html = html.replace(/<!-- ═══ JSON-LD: WebSite[\s\S]*?<\/script>\s*\n/, '');

    var bc = {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: catDisplay + ' Calculators', item: BASE_URL + '/' + catSlug },
        { '@type': 'ListItem', position: 3, name: shortName, item: pageUrl }
      ]
    };

    // Use unique FAQs for structured data if available, else category template
    var faqsForSchema = (unique && unique.faqs) ? unique.faqs : catContent.faqs;
    var faqSchema = {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: faqsForSchema.map(function(f) {
        return { '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } };
      })
    };

    html = html.replace('</head>',
      jsonLdTag('jsonld-breadcrumb', bc) + '\n' +
      jsonLdTag('jsonld-faq', faqSchema) + '\n</head>'
    );

    // Inject SEO CSS
    html = html.replace('    </style>', SEO_CSS + '    </style>');

    // Build enriched body content
    var body = '\n    <!-- SEO Pre-rendered Content -->\n';
    body += '    <div id="seo-content">\n';
    body += '      <nav class="seo-breadcrumb" aria-label="Breadcrumb">\n';
    body += '        <a href="/">Home</a> &rsaquo; ';
    body += '<a href="/' + catSlug + '">' + catDisplay + ' Calculators</a> &rsaquo; ';
    body += '<span>' + shortName + '</span>\n';
    body += '      </nav>\n\n';
    body += '      <h1>' + shortName + '</h1>\n';
    body += '      <p class="seo-intro">' + pageDesc + '</p>\n\n';

    // What it does section — unique or category template
    body += '      <section class="seo-section">\n';
    body += '        <h2>What is ' + shortName + '?</h2>\n';
    if (unique && unique.what) {
      body += '        <p>' + unique.what + '</p>\n';
    } else {
      body += '        <p>' + catContent.whatPrefix + nameLC.replace(/ calculator$/, '') + ' values' + catContent.whatSuffix + '</p>\n';
    }
    body += '      </section>\n\n';

    // How to use section — unique or generic
    body += '      <section class="seo-section">\n';
    body += '        <h2>How to Use This Calculator</h2>\n';
    body += '        <ol>\n';
    if (unique && unique.howToSteps) {
      unique.howToSteps.forEach(function(step) {
        body += '          <li>' + step + '</li>\n';
      });
    } else {
      body += '          <li>Enter your values in the input fields above</li>\n';
      body += '          <li>Adjust any optional parameters as needed</li>\n';
      body += '          <li>Results are calculated automatically as you type</li>\n';
      body += '          <li>Review the breakdown and charts for detailed insights</li>\n';
    }
    body += '        </ol>\n';
    body += '      </section>\n\n';

    // Methodology section (if unique content has it)
    if (unique && unique.methodology) {
      body += '      <section class="seo-section">\n';
      body += '        <h2>How ' + shortName + ' is Calculated</h2>\n';
      body += '        <p>' + unique.methodology + '</p>\n';
      body += '      </section>\n\n';
    }

    // Use cases section (only if NO unique content — unique pages get FAQ instead)
    if (!unique) {
      body += '      <section class="seo-section">\n';
      body += '        <h2>Common Use Cases</h2>\n';
      body += '        <ul>\n';
      catContent.useCases.forEach(function(uc) {
        body += '          <li>' + uc + '</li>\n';
      });
      body += '        </ul>\n';
      body += '      </section>\n\n';
    }

    // FAQ section — unique per-calculator FAQs or category template
    var pageFaqs = (unique && unique.faqs) ? unique.faqs : catContent.faqs;
    body += '      <section class="seo-faq">\n';
    body += '        <h2>Frequently Asked Questions</h2>\n';
    pageFaqs.forEach(function(faq) {
      body += '        <details>\n';
      body += '          <summary>' + faq.q + '</summary>\n';
      body += '          <p>' + faq.a + '</p>\n';
      body += '        </details>\n';
    });
    body += '      </section>\n\n';

    // Related calculators from same category
    var relatedCalcs = registry.filter(function(c) {
      return c.cat === entry.cat && c.slug !== entry.slug;
    }).slice(0, 6);
    if (relatedCalcs.length) {
      body += '      <section class="seo-section">\n';
      body += '        <h2>Related Calculators</h2>\n';
      body += '        <div class="seo-related-grid">\n';
      relatedCalcs.forEach(function(r) {
        body += '          <a href="/' + r.slug + '">' + (r.name || formatSlugToName(r.slug)) + '</a>\n';
      });
      body += '        </div>\n';
      body += '      </section>\n\n';
    }

    // Trust section with author and disclaimer
    body += '      <div class="seo-trust">\n';
    body += '        ' + catContent.disclaimer + '\n';
    body += '        <p><strong>Author:</strong> Calc Labz Editorial Team &nbsp;|&nbsp; <strong>Reviewed for accuracy</strong></p>\n';
    body += '        <p><strong>Last updated:</strong> April 2026</p>\n';
    body += '      </div>\n';

    body += '    </div>\n';

    // Replace body placeholder
    html = html.replace(
      /<!-- Content injected by JS -->[\s\S]*?<p>Loading Calc Labz\.\.\.<\/p>\s*<\/div>/,
      body
    );

    // Update footer with trust page links
    html = html.replace(
      /    <!-- ═══ FOOTER ═══ -->[\s\S]*?<\/footer>/,
      UPDATED_FOOTER
    );

    var outFile = path.join(ROOT, entry.slug + '.html');
    fs.writeFileSync(outFile, html, 'utf8');
    count++;
  });

  console.log('  ✓  Generated ' + count + ' additional calculator pages (enriched).\n');
  return count;
}

// ── GENERATOR: Blog Pages ───────────────────────────────────────────────────

function generateBlogPages() {
  var template = fs.readFileSync(TEMPLATE, 'utf8');
  var vm = require('vm');
  var blogSrc;
  try {
    blogSrc = fs.readFileSync(path.join(ROOT, 'assets', 'js', 'blog-posts.js'), 'utf8');
  } catch (e) {
    console.warn('  ⚠  blog-posts.js not found, skipping blog generation.');
    return;
  }

  var sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(blogSrc, sandbox);

  // Load additional blog content files (split for maintainability)
  var contentFiles = ['blog-content-finance.js', 'blog-content-health.js', 'blog-content-education.js', 'blog-content-lifestyle.js'];
  contentFiles.forEach(function(file) {
    try {
      var src = fs.readFileSync(path.join(ROOT, 'assets', 'js', file), 'utf8');
      vm.runInContext(src, sandbox);
    } catch (e) { /* file doesn't exist yet — skip */ }
  });

  var BLOG_POSTS = sandbox.BLOG_POSTS || [];
  var BLOG_CONTENT = sandbox.BLOG_CONTENT || {};

  if (!BLOG_POSTS.length) {
    console.warn('  ⚠  No blog posts found.');
    return;
  }

  // Create blog directory if needed
  var blogDir = path.join(ROOT, 'blog');
  if (!fs.existsSync(blogDir)) fs.mkdirSync(blogDir);

  BLOG_POSTS.forEach(function(post) {
    var content = BLOG_CONTENT[post.id];
    if (!content) return; // No article body for this post

    var pageUrl = BASE_URL + '/blog/' + post.slug;
    var pageTitle = post.title + ' | Calc Labz';
    var pageDesc = post.desc;
    var html = template;

    // Head metadata
    html = html.replace(/<title>.*?<\/title>/, '<title>' + pageTitle + '</title>');
    html = html.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="' + pageDesc.replace(/"/g, '&quot;') + '">');
    html = html.replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="' + pageUrl + '">');
    html = html.replace(/<meta property="og:url" content="[^"]*">/, '<meta property="og:url" content="' + pageUrl + '">');
    html = html.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="' + pageTitle + '">');
    html = html.replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="' + pageDesc.replace(/"/g, '&quot;') + '">');
    html = html.replace(/<meta name="twitter:title" content="[^"]*">/, '<meta name="twitter:title" content="' + pageTitle + '">');
    html = html.replace(/<meta name="twitter:description" content="[^"]*">/, '<meta name="twitter:description" content="' + pageDesc.replace(/"/g, '&quot;') + '">');
    html = html.replace(/<meta property="og:type" content="[^"]*">/, '<meta property="og:type" content="article">');

    // Remove hreflang
    html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*">\r?\n/g, '');

    // Remove homepage JSON-LD, inject article + breadcrumb schema
    html = html.replace(/<!-- ═══ JSON-LD: SoftwareApplication[\s\S]*?<\/script>\s*\n/, '');
    html = html.replace(/<!-- ═══ JSON-LD: WebSite[\s\S]*?<\/script>\s*\n/, '');

    var articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.desc,
      author: { '@type': 'Organization', name: 'Calc Labz Team' },
      publisher: { '@type': 'Organization', name: 'Calc Labz', url: BASE_URL },
      datePublished: post.date ? '2026-' + monthToNum(post.date) + '-01' : TODAY,
      dateModified: TODAY,
      mainEntityOfPage: pageUrl
    };

    var blogBreadcrumb = {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: 'Guides & Blog', item: BASE_URL + '/blog' },
        { '@type': 'ListItem', position: 3, name: post.title, item: pageUrl }
      ]
    };

    html = html.replace('</head>',
      jsonLdTag('jsonld-article', articleSchema) + '\n' +
      jsonLdTag('jsonld-breadcrumb', blogBreadcrumb) + '\n</head>'
    );

    // Inject SEO CSS
    html = html.replace('    </style>', SEO_CSS + '    </style>');

    // Build blog article body
    var body = '\n    <!-- SEO Pre-rendered Blog Article -->\n';
    body += '    <div id="seo-content">\n';
    body += '      <nav class="seo-breadcrumb" aria-label="Breadcrumb">\n';
    body += '        <a href="/">Home</a> &rsaquo; ';
    body += '<a href="/blog">Guides &amp; Blog</a> &rsaquo; ';
    body += '<span>' + post.title + '</span>\n';
    body += '      </nav>\n\n';
    body += '      <article class="seo-article">\n';
    body += '        <h1>' + post.title + '</h1>\n';
    body += '        <div class="seo-article-meta">\n';
    body += '          <span>' + (content.meta.date || post.date) + '</span>';
    body += ' · <span>' + (content.meta.readTime || post.readTime) + ' read</span>';
    body += ' · <span>By ' + (content.meta.author || 'Calc Labz Team') + '</span>\n';
    body += '        </div>\n\n';
    body += '        ' + content.body + '\n\n';

    // CTA
    if (content.cta) {
      body += '        <div class="seo-article-cta">\n';
      body += '          <a href="/' + content.cta.calc + '-calculator">' + content.cta.text + ' &rarr;</a>\n';
      body += '        </div>\n';
    }

    body += '      </article>\n\n';

    // Related articles section
    var relatedPosts = BLOG_POSTS.filter(function(p) {
      return p.cat === post.cat && p.id !== post.id && BLOG_CONTENT[p.id];
    }).slice(0, 4);
    if (relatedPosts.length) {
      body += '      <section class="seo-section">\n';
      body += '        <h2>Related Articles</h2>\n';
      body += '        <div class="seo-related-grid">\n';
      relatedPosts.forEach(function(rp) {
        body += '          <a href="/blog/' + rp.slug + '">' + rp.title + '</a>\n';
      });
      body += '        </div>\n';
      body += '      </section>\n\n';
    }

    // Trust section
    body += '      <div class="seo-trust">\n';
    if (post.cat === 'Finance' || post.cat === 'Tax') {
      body += '        <p><strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute financial or tax advice. Tax laws and rates may change. Consult a qualified chartered accountant or financial advisor for decisions specific to your situation.</p>\n';
    } else if (post.cat === 'Health') {
      body += '        <p><strong>Medical disclaimer:</strong> This article provides general health information and is not a substitute for professional medical advice. Consult a healthcare professional for personalized guidance.</p>\n';
    } else {
      body += '        <p><strong>Note:</strong> This article is for informational purposes only. For professional advice, consult a qualified expert.</p>\n';
    }
    body += '        <p><strong>Last updated:</strong> ' + (content.meta.date || 'April 2026') + '</p>\n';
    body += '      </div>\n';

    body += '    </div>\n';

    // Replace body placeholder
    html = html.replace(
      /<!-- Content injected by JS -->[\s\S]*?<p>Loading Calc Labz\.\.\.<\/p>\s*<\/div>/,
      body
    );

    // Update footer with trust page links
    if (UPDATED_FOOTER) {
      html = html.replace(
        /    <!-- ═══ FOOTER ═══ -->[\s\S]*?<\/footer>/,
        UPDATED_FOOTER
      );
    }

    var outFile = path.join(blogDir, post.slug + '.html');
    fs.writeFileSync(outFile, html, 'utf8');
    console.log('  ✓  blog/' + post.slug + '.html');
  });

  console.log('  Generated ' + Object.keys(BLOG_CONTENT).length + ' blog pages.\n');
}

function monthToNum(dateStr) {
  var months = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
                 Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
  var parts = dateStr.split(' ');
  return months[parts[0]] || '01';
}

// ── GENERATOR: Blog Listing Page ────────────────────────────────────────────

function generateBlogListingPage() {
  var template = fs.readFileSync(TEMPLATE, 'utf8');
  var vm = require('vm');
  var blogSrc;
  try {
    blogSrc = fs.readFileSync(path.join(ROOT, 'assets', 'js', 'blog-posts.js'), 'utf8');
  } catch (e) {
    console.warn('  ⚠  blog-posts.js not found, skipping blog listing page.');
    return;
  }

  var sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(blogSrc, sandbox);
  var BLOG_POSTS = sandbox.BLOG_POSTS || [];

  if (!BLOG_POSTS.length) {
    console.warn('  ⚠  No blog posts found, skipping blog listing page.');
    return;
  }

  var pageUrl = BASE_URL + '/blog';
  var pageTitle = 'Guides & Articles — Finance, Health & Calculator Tips | Calc Labz';
  var pageDesc = 'Free guides and articles on personal finance, health metrics, tax planning, and how to use online calculators. Expert tips to make smarter decisions with data.';
  var html = template;

  // Head metadata
  html = html.replace(/<title>.*?<\/title>/, '<title>' + pageTitle + '</title>');
  html = html.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="' + pageDesc + '">');
  html = html.replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="' + pageUrl + '">');
  html = html.replace(/<meta property="og:url" content="[^"]*">/, '<meta property="og:url" content="' + pageUrl + '">');
  html = html.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="' + pageTitle + '">');
  html = html.replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="' + pageDesc + '">');
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/, '<meta name="twitter:title" content="' + pageTitle + '">');
  html = html.replace(/<meta name="twitter:description" content="[^"]*">/, '<meta name="twitter:description" content="' + pageDesc + '">');

  // Remove hreflang
  html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*">\r?\n/g, '');

  // Remove homepage JSON-LD, inject breadcrumb
  html = html.replace(/<!-- ═══ JSON-LD: SoftwareApplication[\s\S]*?<\/script>\s*\n/, '');
  html = html.replace(/<!-- ═══ JSON-LD: WebSite[\s\S]*?<\/script>\s*\n/, '');

  var blogBreadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: 'Guides & Blog', item: pageUrl }
    ]
  };
  html = html.replace('</head>', jsonLdTag('jsonld-breadcrumb', blogBreadcrumb) + '\n</head>');

  // Inject SEO CSS
  html = html.replace('    </style>', SEO_CSS + '    </style>');

  // Build blog listing body
  var body = '\n    <!-- SEO Pre-rendered Blog Listing -->\n';
  body += '    <div id="seo-content">\n';
  body += '      <nav class="seo-breadcrumb" aria-label="Breadcrumb">\n';
  body += '        <a href="/">Home</a> &rsaquo; <span>Guides &amp; Blog</span>\n';
  body += '      </nav>\n\n';
  body += '      <h1>Guides &amp; Articles</h1>\n';
  body += '      <p class="seo-intro">Expert guides on personal finance, tax planning, health metrics, and more. Learn how to make the most of our calculators with practical tips, worked examples, and in-depth explanations.</p>\n\n';

  // Blog cards grid
  body += '      <div class="seo-calc-grid">\n';
  BLOG_POSTS.forEach(function(post) {
    var desc = post.desc || '';
    if (desc.length > 120) desc = desc.substring(0, 117) + '...';
    body += '        <a href="/blog/' + post.slug + '" class="seo-calc-card">\n';
    body += '          <strong>' + post.title + '</strong>\n';
    body += '          <span>' + desc + '</span>\n';
    body += '        </a>\n';
  });
  body += '      </div>\n';
  body += '    </div>\n';

  // Replace body placeholder
  html = html.replace(
    /<!-- Content injected by JS -->[\s\S]*?<p>Loading Calc Labz\.\.\.<\/p>\s*<\/div>/,
    body
  );

  // Update footer
  if (UPDATED_FOOTER) {
    html = html.replace(
      /    <!-- ═══ FOOTER ═══ -->[\s\S]*?<\/footer>/,
      UPDATED_FOOTER
    );
  }

  var outFile = path.join(ROOT, 'blog.html');
  fs.writeFileSync(outFile, html, 'utf8');
  console.log('  ✓  blog.html (listing page with ' + BLOG_POSTS.length + ' posts)\n');
}

// ── EXPORTS / MAIN ──────────────────────────────────────────────────────────
module.exports = {
  generate: generate,
  generateCategories: generateCategories,
  generateAllRegistryCalcs: generateAllRegistryCalcs,
  generateBlogPages: generateBlogPages,
  generateBlogListingPage: generateBlogListingPage,
  CALCULATORS: CALCULATORS,
  CATEGORIES: CATEGORIES
};

console.log('\n📄 Pre-rendering top calculator pages (rich content)...\n');
generate();

console.log('📄 Pre-rendering remaining calculator pages (basic)...\n');
generateAllRegistryCalcs();

console.log('📂 Pre-rendering category pages...\n');
generateCategories();

console.log('📝 Pre-rendering blog pages...\n');
generateBlogPages();

console.log('📝 Pre-rendering blog listing page...\n');
generateBlogListingPage();

console.log('✅ Pre-render complete.\n');

