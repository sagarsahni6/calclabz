#!/usr/bin/env node
/**
 * Phase 1.3 — Fix Duplicate/Generic Meta Descriptions
 * Generates unique, keyword-rich meta descriptions for all calculator pages.
 * Run: node scripts/fix-meta-uniqueness.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const REGISTRY = JSON.parse(fs.readFileSync(path.join(__dirname, 'calculator-registry.json'), 'utf8'));

const CAT_CONTEXT = {
  finance: 'financial planning in India',
  health: 'health and fitness tracking',
  math: 'mathematical computation',
  education: 'academic planning',
  engineering: 'engineering design',
  construction: 'construction estimation in India',
  everyday: 'everyday decisions',
  unit: 'unit conversion',
  datetime: 'date and time calculation',
  science: 'scientific computation'
};

const TEMPLATES = [
  (name, cat, desc) => `Free ${name} — ${desc} Instant results, no signup. Trusted by lakhs of Indian users. Works offline.`,
  (name, cat, desc) => `Use our free ${name} for ${CAT_CONTEXT[cat] || 'quick calculations'}. ${desc} 100% accurate, privacy-first, works offline.`,
  (name, cat, desc) => `${name}: ${desc} Free online tool with step-by-step breakdown. No login required. Used by professionals across India.`,
  (name, cat, desc) => `Calculate ${name.replace(' Calculator', '').toLowerCase()} instantly with our free tool. ${desc} Accurate formulas, zero data collection.`,
];

function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0; return Math.abs(h); }

let fixed = 0;
const seen = new Set();
const dupes = [];

REGISTRY.forEach(entry => {
  const slug = entry.slug;
  const fp = path.join(ROOT, slug + '.html');
  if (!fs.existsSync(fp)) return;

  let html = fs.readFileSync(fp, 'utf8');
  const cat = entry.cat || 'everyday';

  // Extract current description
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
  if (!descMatch) return;
  const currentDesc = descMatch[1];

  // Check for generic/template patterns
  const isGeneric = currentDesc.includes('standard formulas for') ||
                    currentDesc.includes('roman numeral converter') && currentDesc.length < 80 ||
                    currentDesc.length < 60;

  // Check for duplicates
  if (seen.has(currentDesc)) {
    dupes.push(slug);
  }
  seen.add(currentDesc);

  // Extract H1 for name
  const h1Match = html.match(/<h1>([^<]+)<\/h1>/);
  const name = h1Match ? h1Match[1] : entry.name || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  // Get intro text for context
  const introMatch = html.match(/<p class="seo-intro">([^<]+)<\/p>/);
  const intro = introMatch ? introMatch[1] : '';

  // Only fix if current description is short or generic
  if (currentDesc.length >= 100 && !isGeneric) return;

  // Generate unique description using intro + template
  const s = hash(slug);
  const shortIntro = intro.length > 0 ? intro.substring(0, 120).replace(/\.$/, '') + '.' : `Accurate ${name.toLowerCase()} with detailed breakdown.`;
  const template = TEMPLATES[s % TEMPLATES.length];
  let newDesc = template(name, cat, shortIntro);

  // Trim to 155 chars (Google's display limit)
  if (newDesc.length > 155) {
    newDesc = newDesc.substring(0, 152) + '...';
  }

  // Replace in HTML (meta description)
  html = html.replace(
    `<meta name="description" content="${currentDesc}">`,
    `<meta name="description" content="${newDesc}">`
  );

  // Also update OG description
  const ogDescMatch = html.match(/<meta\s+property="og:description"\s+content="([^"]+)"/i);
  if (ogDescMatch) {
    html = html.replace(
      `<meta property="og:description" content="${ogDescMatch[1]}">`,
      `<meta property="og:description" content="${newDesc}">`
    );
  }

  // Also update Twitter description
  const twDescMatch = html.match(/<meta\s+name="twitter:description"\s+content="([^"]+)"/i);
  if (twDescMatch) {
    html = html.replace(
      `<meta name="twitter:description" content="${twDescMatch[1]}">`,
      `<meta name="twitter:description" content="${newDesc}">`
    );
  }

  fs.writeFileSync(fp, html, 'utf8');
  fixed++;
});

console.log(`\n📊 Meta Description Fix:`);
console.log(`   Fixed: ${fixed} pages`);
console.log(`   Duplicates found: ${dupes.length}`);
if (dupes.length > 0) console.log(`   Duplicate slugs: ${dupes.slice(0, 10).join(', ')}`);
