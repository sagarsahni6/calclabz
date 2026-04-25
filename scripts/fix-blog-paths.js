/**
 * Fix blog pages asset paths — including subdirectory index.html files.
 * Blog HTML files are in /blog/ or /blog/<slug>/ subdirectories but reference assets with
 * relative paths like "assets/css/main.css" which doesn't resolve correctly.
 * This script changes them to absolute paths "/assets/css/..." and "/assets/js/..."
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

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

let fixedCount = 0;
let totalCount = 0;

// Get all subdirectories in blog/
const entries = fs.readdirSync(blogDir, { withFileTypes: true });

for (const entry of entries) {
  if (entry.isDirectory()) {
    const indexPath = path.join(blogDir, entry.name, 'index.html');
    if (fs.existsSync(indexPath)) {
      totalCount++;
      if (fixFile(indexPath)) {
        fixedCount++;
        console.log(`Fixed: ${entry.name}/index.html`);
      }
    }
  }
}

console.log(`\nDone. Fixed ${fixedCount}/${totalCount} subdirectory index.html files.`);
