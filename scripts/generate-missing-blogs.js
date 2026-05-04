#!/usr/bin/env node
/**
 * Generate blog posts for all calculators that don't have one yet.
 * Run: node scripts/generate-missing-blogs.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const BLOG = path.join(ROOT, 'blog');
const REG = JSON.parse(fs.readFileSync(path.join(__dirname, 'calculator-registry.json'), 'utf8'));

// Existing blog dirs
const existingBlogs = new Set(fs.readdirSync(BLOG).filter(f => {
  try { return fs.statSync(path.join(BLOG, f)).isDirectory(); } catch(e) { return false; }
}));

// Read existing blog-links mapping
const linkScript = fs.readFileSync(path.join(__dirname, 'add-blog-links.js'), 'utf8');
const mappedCalcs = new Set();
const mapLines = linkScript.match(/'([^']+)':\s*'([^']+)'/g) || [];
mapLines.forEach(p => { const m = p.match(/'([^']+)'/); if (m) mappedCalcs.add(m[1] + '-calculator'); });

// Template for blog HTML
const TEMPLATE_PATH = path.join(BLOG, 'emi-calculator-guide-india-2026', 'index.html');
const TEMPLATE = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// Category config
const CAT_COLORS = {
  finance: '#6366f1', health: '#10b981', math: '#f59e0b', education: '#8b5cf6',
  engineering: '#ef4444', construction: '#f97316', everyday: '#06b6d4',
  unit: '#14b8a6', datetime: '#ec4899', science: '#3b82f6'
};
const CAT_ICONS = {
  finance: 'fa-chart-line', health: 'fa-heartbeat', math: 'fa-calculator',
  education: 'fa-graduation-cap', engineering: 'fa-cog', construction: 'fa-hard-hat',
  everyday: 'fa-home', unit: 'fa-exchange-alt', datetime: 'fa-clock', science: 'fa-flask'
};
const CAT_LABELS = {
  finance: 'Finance', health: 'Health & Fitness', math: 'Mathematics',
  education: 'Education', engineering: 'Engineering', construction: 'Construction',
  everyday: 'Everyday', unit: 'Unit Conversion', datetime: 'Date & Time', science: 'Science'
};

function slugToTitle(slug) {
  return slug.replace(/-calculator$/, '').replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    .replace(/Bsa/,'BSA').replace(/Ibw/,'IBW').replace(/Gpa/,'GPA').replace(/Ph /,'pH ')
    .replace(/Sgb/,'SGB').replace(/Gst/,'GST').replace(/Emi/,'EMI').replace(/Fo /,'F&O ')
    .replace(/Pcb/,'PCB').replace(/Led/,'LED').replace(/Ev /,'EV ').replace(/Ohm/,"Ohm's");
}

function makeSlug(calcSlug) {
  const key = calcSlug.replace('-calculator', '');
  const parts = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().split('-');
  return parts.join('-') + '-calculator-guide-india';
}

// Content generators by category
function genFinanceContent(title, key) {
  return {
    sections: [
      { h: `What is ${title}?`, p: `${title} is a free online financial tool that helps you make informed money decisions. Whether you're planning investments, calculating taxes, or managing loans, this calculator provides instant, accurate results based on standard Indian financial formulas and current rates.` },
      { h: `Why Use a ${title}?`, p: `Financial planning in India requires precision. With changing tax slabs, fluctuating interest rates, and complex investment products, manual calculations often lead to errors. Our ${title.toLowerCase()} eliminates guesswork by applying the exact formulas used by banks, mutual fund houses, and tax professionals. It's especially useful for salaried professionals, business owners, and anyone looking to optimize their financial decisions.` },
      { h: 'How to Use This Calculator', list: [`Enter your financial details (amount, rate, tenure, etc.)`, `The calculator instantly shows results with a detailed breakdown`, `Compare different scenarios by changing input values`, `Use the chart visualization to understand trends`, `Download or screenshot results for your records`] },
      { h: 'Key Features', list: [`✅ Updated for FY 2025-26 Indian tax rules and rates`, `✅ Instant results with no signup required`, `✅ Detailed breakdown with charts and tables`, `✅ Works offline — install as PWA for instant access`, `✅ Mobile-friendly responsive design`, `✅ 100% privacy — all calculations happen in your browser`] },
      { h: 'Important Considerations', p: `While this calculator uses accurate financial formulas, actual returns and outcomes may vary based on market conditions, specific bank terms, and regulatory changes. Always consult a qualified Chartered Accountant or SEBI-registered financial advisor before making significant financial decisions. Tax laws are subject to change — verify current rates with the Income Tax Department website.` },
      { h: 'Frequently Asked Questions', faqs: [
        { q: `Is this ${title.toLowerCase()} accurate?`, a: 'Yes, it uses industry-standard financial formulas. However, actual outcomes may vary based on specific terms from your bank or institution.' },
        { q: 'Do I need to create an account?', a: 'No. All our calculators are 100% free with no signup, no login, and no data collection.' },
        { q: 'Can I use this for ITR filing?', a: 'This provides estimates for planning purposes. For actual ITR filing, use the official Income Tax portal and consult a CA.' },
      ]}
    ]
  };
}

function genHealthContent(title, key) {
  return {
    sections: [
      { h: `What is ${title}?`, p: `${title} is a free health assessment tool that helps you understand important health metrics. Using clinically validated formulas, it provides personalized estimates based on your body measurements, age, gender, and activity level. All calculations use Asian-specific benchmarks where applicable, which is crucial for South Asian populations.` },
      { h: `Why This Calculator Matters`, p: `India faces a growing burden of lifestyle diseases — with over 101 million diabetics and 315 million people with hypertension. Regular health monitoring through calculators like this helps you track important metrics between doctor visits. Early awareness of health indicators can lead to timely lifestyle changes and better health outcomes.` },
      { h: 'How to Use', list: [`Enter your measurements accurately (height, weight, age, etc.)`, `Select your gender and activity level if prompted`, `Review your results against the reference ranges shown`, `Use the recommendations to guide lifestyle adjustments`, `Track your metrics over time for trend analysis`] },
      { h: 'Clinical Accuracy', p: `This calculator uses formulas from peer-reviewed medical literature. For BMI-related metrics, we apply WHO and Asian-specific cutoffs. For metabolic calculations, we use the Mifflin-St Jeor equation (considered most accurate). For heart rate calculations, the Karvonen method is applied. Despite high accuracy, these are screening tools — not medical diagnoses.` },
      { h: 'Privacy & Safety', p: `All health data stays on your device. We don't store, transmit, or track any health information. This calculator is not a substitute for professional medical advice. Always consult your doctor for health decisions, especially if you have existing medical conditions or are on medication.` },
      { h: 'Frequently Asked Questions', faqs: [
        { q: 'Is this medically accurate?', a: 'It uses validated clinical formulas but provides estimates. Always consult a healthcare professional for medical decisions.' },
        { q: 'Are Asian health standards used?', a: 'Yes, where applicable we use Asian-specific cutoffs which are more relevant for South Asian populations.' },
        { q: 'Is my health data private?', a: 'Completely. All calculations run in your browser. No data is sent to any server.' },
      ]}
    ]
  };
}

function genMathContent(title, key) {
  return {
    sections: [
      { h: `What is ${title}?`, p: `${title} is a free mathematical computation tool that provides instant, accurate results. Whether you're a student preparing for JEE, NEET, or board exams, or a professional needing quick calculations, this tool applies standard mathematical formulas from NCERT and university-level textbooks.` },
      { h: `Understanding the Mathematics`, p: `Mathematics is the language of science and engineering. This calculator implements standard algorithms and formulas that have been verified against mathematical references. The computations handle edge cases, provide results to appropriate precision, and follow the conventions used in Indian academic curricula.` },
      { h: 'How to Use', list: [`Enter your values in the input fields`, `The calculator processes results instantly`, `Review the step-by-step breakdown when available`, `Use different input variations to explore concepts`, `Great for verifying homework and exam answers`] },
      { h: 'Educational Applications', list: [`📚 CBSE/ICSE board exam preparation`, `🎯 JEE Main & Advanced practice`, `📝 NEET and other competitive exams`, `🎓 B.Tech and M.Sc coursework`, `👩‍🏫 Teaching aid for math educators`] },
      { h: 'Frequently Asked Questions', faqs: [
        { q: 'Can I use this for exams?', a: 'It\'s great for practice and verification. In actual exams, you\'ll need to solve manually — but this tool helps you learn and verify.' },
        { q: 'Does it show steps?', a: 'Where applicable, the methodology section explains the approach used.' },
        { q: 'What precision does it support?', a: 'JavaScript handles numbers up to 2^53 with full precision. Very large numbers display in scientific notation.' },
      ]}
    ]
  };
}

function genGenericContent(title, key, cat) {
  const catLabel = CAT_LABELS[cat] || 'General';
  return {
    sections: [
      { h: `What is ${title}?`, p: `${title} is a free online tool designed for quick, accurate ${catLabel.toLowerCase()} calculations. It runs entirely in your browser with no signup required, providing instant results that you can use for planning, learning, or professional work.` },
      { h: `Why Use This Calculator?`, p: `Manual calculations are time-consuming and error-prone. Our ${title.toLowerCase()} applies validated formulas to give you reliable results instantly. Whether you're a student, professional, or simply curious, this tool saves time and eliminates calculation mistakes. It's designed with Indian users in mind, using relevant units and standards.` },
      { h: 'How to Use', list: [`Enter your values in the calculator inputs`, `Results appear instantly with detailed breakdown`, `Adjust inputs to compare different scenarios`, `Works on mobile, tablet, and desktop`, `Install as PWA for offline access`] },
      { h: 'Key Benefits', list: [`✅ 100% free with no hidden charges`, `✅ No signup or account needed`, `✅ Works offline as a Progressive Web App`, `✅ Mobile-friendly responsive design`, `✅ Privacy-first — no data leaves your device`, `✅ Accurate formulas from trusted sources`] },
      { h: 'Frequently Asked Questions', faqs: [
        { q: `Is this ${title.toLowerCase()} free?`, a: 'Yes, completely free forever. No ads blocking results, no premium tiers.' },
        { q: 'Does it work offline?', a: 'Yes! Install Calc Labz as a PWA from your browser for instant offline access.' },
        { q: 'Is my data safe?', a: 'All calculations run locally. We never collect or store any data you enter.' },
      ]}
    ]
  };
}

function getContent(title, key, cat) {
  if (cat === 'finance') return genFinanceContent(title, key);
  if (cat === 'health') return genHealthContent(title, key);
  if (cat === 'math') return genMathContent(title, key);
  return genGenericContent(title, key, cat);
}

function buildArticleBody(content) {
  let html = '';
  content.sections.forEach((s, i) => {
    if (s.faqs) {
      html += `<h2 id="toc-${i}">${s.h}</h2>`;
      s.faqs.forEach(f => {
        html += `<h3>${f.q}</h3><p>${f.a}</p>`;
      });
    } else {
      html += `<h2 id="toc-${i}">${s.h}</h2>`;
      if (s.p) html += `<p>${s.p}</p>`;
      if (s.list) {
        html += '<ul>';
        s.list.forEach(li => html += `<li>${li}</li>`);
        html += '</ul>';
      }
    }
  });
  return html;
}

function buildTOC(content) {
  return '<ol>' + content.sections.map((s, i) => `<li><a href="#toc-${i}">${s.h}</a></li>`).join('') + '</ol>';
}

// Get related blogs (existing ones from same category)
function getRelatedBlogs(cat) {
  const catBlogs = [];
  existingBlogs.forEach(dir => {
    if (catBlogs.length >= 3) return;
    const idxPath = path.join(BLOG, dir, 'index.html');
    if (!fs.existsSync(idxPath)) return;
    const h = fs.readFileSync(idxPath, 'utf8');
    const tMatch = h.match(/<h1>([^<]+)<\/h1>/);
    if (!tMatch) return;
    catBlogs.push({ slug: dir, title: tMatch[1] });
  });
  return catBlogs.slice(0, 3);
}

// Build blog HTML from template
function buildBlogHTML(blogSlug, title, calcSlug, cat, content) {
  const color = CAT_COLORS[cat] || '#6366f1';
  const icon = CAT_ICONS[cat] || 'fa-calculator';
  const catLabel = CAT_LABELS[cat] || 'General';
  const metaDesc = `Complete guide to ${title.toLowerCase()} — how it works, formulas, examples, and expert tips for Indian users. Free online calculator included.`;
  const pageTitle = `${title}: Complete Guide & Calculator 2026 | Calc Labz`;
  const articleBody = buildArticleBody(content);
  const toc = buildTOC(content);
  const related = getRelatedBlogs(cat);
  
  const relatedHTML = related.map(r => `
          <a href="/blog/${r.slug}" class="blog-card">
            <div class="blog-card-hdr" style="background:linear-gradient(135deg,${color},${color}88)"></div>
            <div class="blog-cat"><i class="fas ${icon}"></i> ${catLabel}</div>
            <div class="blog-title">${r.title}</div>
            <div class="blog-link"><i class="fas fa-arrow-right"></i> Read guide</div>
          </a>`).join('\n');

  // Clone template and replace
  let html = TEMPLATE;
  
  // Meta
  html = html.replace(/content="Complete guide to home loan[^"]*"/g, `content="${metaDesc}"`);
  html = html.replace(/content="How to Calculate EMI in India 2026[^"]*"/g, `content="${pageTitle}"`);
  html = html.replace(/How to Calculate EMI in India 2026/g, title);
  html = html.replace(/emi-calculator-guide-india-2026/g, blogSlug);
  html = html.replace(/<title>[^<]+<\/title>/, `<title>${pageTitle}</title>`);
  
  // Article schema
  html = html.replace(/"headline":\s*"[^"]*"/, `"headline": "${title}"`);
  html = html.replace(/"description":\s*"[^"]*"/, `"description": "${metaDesc}"`);
  html = html.replace(/"dateModified":\s*"[^"]*"/, `"dateModified": "2026-05-04"`);
  
  // Breadcrumb name
  html = html.replace(/"name": "How to Calculate EMI in India 2026"/, `"name": "${title}"`);
  
  // Article body
  const oldBody = html.match(/<div class="article-body">.*?<\/div>/s);
  if (oldBody) {
    html = html.replace(oldBody[0], `<div class="article-body">${articleBody}</div>`);
  }
  
  // TOC
  const oldToc = html.match(/<div class="article-toc">.*?<\/div>/s);
  if (oldToc) {
    html = html.replace(oldToc[0], `<div class="article-toc"><div class="article-toc-title"><i class="fas fa-list"></i> Table of Contents</div>${toc}</div>`);
  }
  
  // Meta badge
  html = html.replace(/style="background:#6366f120;color:#6366f1"/, `style="background:${color}20;color:${color}"`);
  html = html.replace(/<i class="fas fa-chart-line"><\/i>Finance/, `<i class="fas ${icon}"></i>${catLabel}`);
  html = html.replace(/Jan 2026/g, 'May 2026');
  html = html.replace(/5 min read/, `${Math.max(4, Math.ceil(articleBody.length / 1200))} min read`);
  
  // CTA
  html = html.replace(/Calculate your EMI now/, `Try our ${title} now`);
  html = html.replace(/href="\/emi-calculator"/, `href="/${calcSlug}"`);
  html = html.replace(/data-id="emi"/, `data-id="${calcSlug.replace('-calculator','')}"`);
  html = html.replace(/data-cat="finance"/, `data-cat="${cat}"`);
  
  // Related blogs
  const relatedSection = html.match(/<div class="related-blogs">.*?<\/div><\/div>/s);
  if (relatedSection && related.length > 0) {
    html = html.replace(relatedSection[0], `<div class="related-blogs"><h3><i class="fas fa-book-open"></i>You May Also Like</h3><div class="blog-grid related-blog-grid">${relatedHTML}
        </div></div>`);
  }
  
  // Trust section date
  html = html.replace(/<strong>Last updated:<\/strong> Jan 2026/, '<strong>Last updated:</strong> May 2026');
  
  return html;
}

// ─── MAIN ───
let created = 0;
const newSitemapEntries = [];
const newBlogLinkMap = {};

// Build registry lookup
const regMap = {};
REG.forEach(e => { regMap[e.slug] = e; });

// Get all calc files without blogs
const calcFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('-calculator.html')).map(f => f.replace('.html', ''));

calcFiles.forEach(calcSlug => {
  if (mappedCalcs.has(calcSlug)) return; // Already has blog
  
  const entry = regMap[calcSlug] || {};
  const cat = entry.cat || 'everyday';
  const title = slugToTitle(calcSlug);
  const blogSlug = makeSlug(calcSlug);
  
  // Skip if blog dir exists
  if (existingBlogs.has(blogSlug)) return;
  
  const content = getContent(title, calcSlug.replace('-calculator', ''), cat);
  const html = buildBlogHTML(blogSlug, title, calcSlug, cat, content);
  
  // Create directory and write
  const dir = path.join(BLOG, blogSlug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  
  newSitemapEntries.push(blogSlug);
  newBlogLinkMap[calcSlug.replace('-calculator', '')] = blogSlug;
  created++;
  console.log(`  ✅ ${blogSlug}`);
});

// Add to sitemap
if (newSitemapEntries.length > 0) {
  const sitemapPath = path.join(ROOT, 'sitemap-blog.xml');
  if (fs.existsSync(sitemapPath)) {
    let sitemap = fs.readFileSync(sitemapPath, 'utf8');
    const today = new Date().toISOString().split('T')[0];
    let newEntries = '';
    newSitemapEntries.forEach(slug => {
      if (!sitemap.includes(slug)) {
        newEntries += `  <url>\n    <loc>https://calclabz.com/blog/${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
      }
    });
    if (newEntries) {
      sitemap = sitemap.replace('</urlset>', newEntries + '</urlset>');
      fs.writeFileSync(sitemapPath, sitemap, 'utf8');
      console.log(`\n  📋 Added ${newSitemapEntries.length} entries to sitemap-blog.xml`);
    }
  }
}

// Save new mapping for add-blog-links
if (Object.keys(newBlogLinkMap).length > 0) {
  const mapPath = path.join(__dirname, 'new-blog-map.json');
  fs.writeFileSync(mapPath, JSON.stringify(newBlogLinkMap, null, 2), 'utf8');
  console.log(`  💾 Saved new blog mapping to scripts/new-blog-map.json`);
}

console.log(`\n📊 Blog Generation Complete!`);
console.log(`   Created: ${created} new blog posts`);
console.log(`   Total blog posts: ${existingBlogs.size + created}`);
