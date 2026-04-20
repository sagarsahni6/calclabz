/**
 * clean-serve-config.js
 * Strips serve.json (local dev config) to match cleaned vercel.json.
 * Keeps: cleanUrls, trailingSlash, blog catch-all, 404 catch-all
 * Removes: ALL redundant rewrites (cleanUrls:true handles them)
 */

const fs = require('fs');
const path = require('path');

const servePath = path.join(__dirname, '..', 'serve.json');
const config = JSON.parse(fs.readFileSync(servePath, 'utf8'));

console.log('=== Current serve.json stats ===');
console.log(`  rewrites:  ${config.rewrites?.length || 0}`);

const cleanConfig = {
  cleanUrls: true,
  directoryListing: false,
  trailingSlash: false,
  rewrites: []
};

// Keep only essential rewrites
if (config.rewrites) {
  for (const rule of config.rewrites) {
    if (rule.source === '/blog/:path*') {
      cleanConfig.rewrites.push(rule);
      continue;
    }
    if (rule.destination === '/404.html' && rule.source.includes('(?!')) {
      cleanConfig.rewrites.push(rule);
      continue;
    }
    // Skip all others — cleanUrls handles /slug → /slug.html
  }
}

console.log(`\n=== Cleaned serve.json stats ===`);
console.log(`  rewrites:  ${cleanConfig.rewrites.length}`);

const output = JSON.stringify(cleanConfig, null, 2) + '\n';
fs.writeFileSync(servePath, output, 'utf8');

console.log(`\n✅ Written clean serve.json (${output.length} bytes)`);
cleanConfig.rewrites.forEach(r => console.log(`  ${r.source} → ${r.destination}`));
