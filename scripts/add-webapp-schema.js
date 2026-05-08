#!/usr/bin/env node
/**
 * Phase 1.1 — Add WebApplication + SoftwareApplication Schema
 * Injects structured data into every *-calculator.html for rich results.
 * Run: node scripts/add-webapp-schema.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const REGISTRY = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'calculator-registry.json'), 'utf8')
);

// Category → schema applicationCategory mapping
const CAT_MAP = {
  finance: 'FinanceApplication',
  health: 'HealthApplication',
  math: 'EducationalApplication',
  education: 'EducationalApplication',
  engineering: 'UtilitiesApplication',
  construction: 'UtilitiesApplication',
  everyday: 'LifestyleApplication',
  unit: 'UtilitiesApplication',
  datetime: 'UtilitiesApplication',
  science: 'EducationalApplication',
  unknown: 'UtilitiesApplication'
};

// Category → keywords for the schema
const CAT_KEYWORDS = {
  finance: 'finance calculator, financial planning, India, free',
  health: 'health calculator, fitness, wellness, India, free',
  math: 'math calculator, mathematics, solver, free',
  education: 'education calculator, academic, student tools, free',
  engineering: 'engineering calculator, technical tools, free',
  construction: 'construction calculator, building estimation, India, free',
  everyday: 'everyday calculator, lifestyle tools, utility, free',
  unit: 'unit converter, conversion tool, free',
  datetime: 'date time calculator, calendar tools, free',
  science: 'science calculator, physics, chemistry, free',
  unknown: 'online calculator, free tools'
};

let added = 0,
  skipped = 0;

for (let i = 0; i < REGISTRY.length; i++) {
  const entry = REGISTRY[i];
  const slug = entry.slug;
  const fp = path.join(ROOT, slug + '.html');

  let html;
  try {
    html = fs.readFileSync(fp, 'utf8');
  } catch (err) {
    if (err.code === 'ENOENT') continue;
    throw err;
  }

  // Skip if already has WebApplication schema
  if (
    html.indexOf('"WebApplication"') !== -1 ||
    html.indexOf('"SoftwareApplication"') !== -1
  ) {
    skipped++;
    continue;
  }

  const name =
    entry.name ||
    slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const cat = entry.cat || 'unknown';
  const appCat = CAT_MAP[cat] || 'UtilitiesApplication';
  const keywords = CAT_KEYWORDS[cat] || 'online calculator, free';

  // Extract description from meta tag
  const descMatch = html.match(
    /<meta\s+name="description"\s+content="([^"]+)"/i
  );
  const desc = descMatch
    ? descMatch[1]
    : `Free online ${name}. Instant results, no signup required.`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: name,
    url: `https://calclabz.com/${slug}`,
    description: desc,
    applicationCategory: appCat,
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript',
    softwareVersion: '2.0',
    inLanguage: 'en-IN',
    isAccessibleForFree: true,
    keywords: `${name.toLowerCase()}, ${keywords}`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR'
    },
    author: {
      '@type': 'Person',
      name: 'Sagar Sahni',
      url: 'https://calclabz.com/author'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Calc Labz',
      url: 'https://calclabz.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://calclabz.com/calclabz-logo.png'
      }
    },
    datePublished: '2026-01-15',
    dateModified: '2026-05-04'
  };

  const schemaTag = `\n<script type="application/ld+json" id="jsonld-webapp">\n${JSON.stringify(
    schema,
    null,
    2
  )}\n</script>`;

  // Insert before </head>
  html = html.replace('</head>', schemaTag + '\n</head>');

  fs.writeFileSync(fp, html, 'utf8');
  added++;
  console.log(`  ✅ ${slug} → ${appCat}`);
}

console.log(`\n📊 WebApplication Schema: Added ${added} | Skipped ${skipped}`);
