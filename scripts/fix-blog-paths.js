/**
 * Fix blog pages asset paths — ALL blog HTML files.
 *
 * Affected files:
 *   1. blog/index.html           (blog listing page)
 *   2. blog/<slug>/index.html    (individual blog posts)
 *
 * All reference assets with relative paths like "assets/css/main.css"
 * and "manifest.json" which don't resolve correctly from subdirectories.
 * This script changes them to absolute paths "/assets/css/...", "/assets/js/...",
 * and "/manifest.json".
 */

const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'blog');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Fix CSS path: href="assets/css/main.css" -> href="/assets/css/main.css"
  content = content.replace(/href="assets\/css\/main\.css"/g, 'href="/assets/css/main.css"');

  // Fix JS paths: src="assets/js/..." -> src="/assets/js/..."
  content = content.replace(/src="assets\/js\//g, 'src="/assets/js/');

  // Fix noscript CSS fallback too
  content = content.replace(/<noscript><link rel="stylesheet" href="assets\/css\/main\.css"><\/noscript>/g,
    '<noscript><link rel="stylesheet" href="/assets/css/main.css"></noscript>');

  // Fix manifest.json path: href="manifest.json" -> href="/manifest.json"
  content = content.replace(/href="manifest\.json"/g, 'href="/manifest.json"');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

let fixedCount = 0;
let totalCount = 0;

// Get all entries in blog/
const entries = fs.readdirSync(blogDir, { withFileTypes: true });

// 1. Fix blog/index.html itself
const blogIndexPath = path.join(blogDir, 'index.html');
if (fs.existsSync(blogIndexPath)) {
  totalCount++;
  if (fixFile(blogIndexPath)) {
    fixedCount++;
    console.log('Fixed: blog/index.html');
  }
}

for (const entry of entries) {
  if (entry.isDirectory()) {
    // 2. Fix blog/<slug>/index.html
    const indexPath = path.join(blogDir, entry.name, 'index.html');
    if (fs.existsSync(indexPath)) {
      totalCount++;
      if (fixFile(indexPath)) {
        fixedCount++;
        console.log(`Fixed: blog/${entry.name}/index.html`);
      }
    }
  }
}

console.log(`\nDone. Fixed ${fixedCount}/${totalCount} blog HTML files.`);
