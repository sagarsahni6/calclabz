#!/usr/bin/env node
/**
 * Phase 1.4 — Fix Related Calculators Grid
 * Replaces random/unknown-category related links with semantically relevant ones.
 * Run: node scripts/fix-related-calcs.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const REGISTRY = JSON.parse(fs.readFileSync(path.join(__dirname, 'calculator-registry.json'), 'utf8'));

// Build category lookup
const byCat = {};
REGISTRY.forEach(e => {
  const c = e.cat || 'unknown';
  if (!byCat[c]) byCat[c] = [];
  byCat[c].push(e);
});

// Cross-category recommendations (complementary topics)
const CROSS = {
  finance:      ['everyday', 'education'],
  health:       ['everyday', 'science'],
  math:         ['science', 'engineering'],
  education:    ['math', 'datetime'],
  engineering:  ['math', 'science', 'construction'],
  construction: ['engineering', 'finance'],
  everyday:     ['finance', 'health'],
  unit:         ['math', 'science'],
  datetime:     ['everyday', 'education'],
  science:      ['math', 'engineering']
};

async function main() {
  let fixed = 0;

  await Promise.all(REGISTRY.map(async (entry) => {
    const slug = entry.slug;
    const fp = path.join(ROOT, slug + '.html');

    try {
      await fs.promises.access(fp);
    } catch {
      return;
    }

    let html = await fs.promises.readFile(fp, 'utf8');

    // Find the related grid section
    const gridStart = html.indexOf('<div class="seo-related-grid">');
    if (gridStart === -1) return;
    const gridEnd = html.indexOf('</div>', gridStart);
    if (gridEnd === -1) return;

    const cat = entry.cat || 'unknown';
    const sameCat = (byCat[cat] || []).filter(e => e.slug !== slug);
    const crossCats = CROSS[cat] || ['math', 'finance'];

    // Pick 4 from same category (shuffled by hash)
    const h = Math.abs(slug.split('').reduce((a,c) => ((a << 5) - a + c.charCodeAt(0)) | 0, 0));
    const shuffled = sameCat.slice().sort((a, b) => {
      const ha = Math.abs(a.slug.split('').reduce((x,c) => ((x << 5) - x + c.charCodeAt(0)) | 0, 0));
      const hb = Math.abs(b.slug.split('').reduce((x,c) => ((x << 5) - x + c.charCodeAt(0)) | 0, 0));
      return ((ha ^ h) % 1000) - ((hb ^ h) % 1000);
    });
    const samePicks = shuffled.slice(0, 4);

    // Pick 2 from cross-categories
    let crossPicks = [];
    for (const cc of crossCats) {
      const pool = (byCat[cc] || []).filter(e => e.slug !== slug);
      if (pool.length > 0) {
        const idx = h % pool.length;
        crossPicks.push(pool[idx]);
        if (crossPicks.length >= 2) break;
      }
    }

    const allPicks = [...samePicks, ...crossPicks].slice(0, 6);
    if (allPicks.length === 0) return;

    const gridHtml = allPicks.map(e => {
      const name = e.name || e.slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      return `\n          <a href="/${e.slug}">${name}</a>`;
    }).join('');

    const newGrid = `<div class="seo-related-grid">${gridHtml}\n        </div>`;
    const oldGrid = html.substring(gridStart, gridEnd + 6);
    html = html.replace(oldGrid, newGrid);

    await fs.promises.writeFile(fp, html, 'utf8');
    fixed++;
  }));

  console.log(`\n📊 Related Calculators: Fixed ${fixed} pages with category-aware links`);
}

main().catch(console.error);
