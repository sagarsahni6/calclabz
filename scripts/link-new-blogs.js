#!/usr/bin/env node
/**
 * Link newly generated blogs to their calculator pages.
 * Run: node scripts/link-new-blogs.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const MAP = JSON.parse(fs.readFileSync(path.join(__dirname, 'new-blog-map.json'), 'utf8'));
const BLOG = path.join(ROOT, 'blog');
let linked = 0;

Object.keys(MAP).forEach(calcKey => {
  const calcSlug = calcKey + '-calculator';
  const blogSlug = MAP[calcKey];
  const fp = path.join(ROOT, calcSlug + '.html');
  if (!fs.existsSync(fp)) return;

  let html = fs.readFileSync(fp, 'utf8');
  if (html.includes('seo-blog-cta')) return; // Already linked

  // Get blog title
  const blogIdx = path.join(BLOG, blogSlug, 'index.html');
  let title = calcKey.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  if (fs.existsSync(blogIdx)) {
    const bh = fs.readFileSync(blogIdx, 'utf8');
    const m = bh.match(/<h1>([^<]+)<\/h1>/);
    if (m) title = m[1];
  }

  const ctaHtml = `\n      <div class="seo-blog-cta" style="margin:20px 0;padding:20px;background:linear-gradient(135deg,rgba(99,102,241,.12),rgba(129,140,248,.08));border:1px solid rgba(99,102,241,.2);border-radius:16px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
          <i class="fas fa-book-open" style="color:var(--p);font-size:1.1rem"></i>
          <h3 style="font-size:1rem;font-weight:700;color:var(--txt);margin:0">📚 Complete Guide Available</h3>
        </div>
        <p style="font-size:.9rem;color:var(--txt1);line-height:1.7;margin-bottom:12px">Want to learn more? Read our comprehensive guide with detailed explanations, real-world examples, expert analysis, and actionable tips.</p>
        <a href="/blog/${blogSlug}" style="display:inline-flex;align-items:center;gap:8px;padding:10px 20px;background:var(--p);color:#fff;border-radius:12px;font-size:.88rem;font-weight:600;text-decoration:none;transition:all .3s">Read: ${title.substring(0, 55)}${title.length > 55 ? '…' : ''} <i class="fas fa-arrow-right" style="font-size:.75rem"></i></a>
      </div>`;

  const trust = '<div class="seo-trust">';
  if (html.includes(trust)) {
    html = html.replace(trust, ctaHtml + '\n      ' + trust);
    fs.writeFileSync(fp, html, 'utf8');
    linked++;
  }
});

console.log(`\n📊 New Blog Cross-Links: Added ${linked} calculator → blog links`);
