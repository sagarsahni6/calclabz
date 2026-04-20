/**
 * clean-vercel-config.js
 * 
 * Strips the vercel.json of:
 * 1. ALL legacy query-based /?calc=xxx 301 redirects (cause "Page with redirect" in GSC)
 * 2. ALL redundant rewrites (cleanUrls:true already handles /slug → /slug.html)
 * 
 * Keeps:
 * - cleanUrls: true
 * - trailingSlash: false
 * - The 404 catch-all rewrite
 * - The blog catch-all rewrite
 * - All headers (security, caching, CSP)
 */

const fs = require('fs');
const path = require('path');

const vercelPath = path.join(__dirname, '..', 'vercel.json');
const config = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));

console.log('=== Current vercel.json stats ===');
console.log(`  redirects: ${config.redirects?.length || 0}`);
console.log(`  rewrites:  ${config.rewrites?.length || 0}`);
console.log(`  headers:   ${config.headers?.length || 0}`);

// Build the clean config
const cleanConfig = {
  cleanUrls: true,
  trailingSlash: false,
  // REMOVE ALL redirects — the /?calc=xxx redirects are legacy and cause GSC issues
  // cleanUrls:true handles /slug → /slug.html transparently
  // Old slug 301s were already removed in a previous cleanup
  redirects: [],
  // KEEP ONLY essential rewrites that cleanUrls can't handle
  rewrites: [],
  headers: config.headers
};

// Filter rewrites - only keep non-calculator rewrites that cleanUrls can't handle
if (config.rewrites) {
  for (const rule of config.rewrites) {
    // Keep the blog catch-all (dynamic route, no .html counterpart)
    if (rule.source === '/blog/:path*') {
      cleanConfig.rewrites.push(rule);
      continue;
    }
    // Keep the 404 catch-all
    if (rule.destination === '/404.html' && rule.source.includes('(?!')) {
      cleanConfig.rewrites.push(rule);
      continue;
    }
    // Skip ALL other rewrites — cleanUrls:true handles them
    // /slug → /slug.html is automatic
  }
}

console.log('\n=== Cleaned vercel.json stats ===');
console.log(`  redirects: ${cleanConfig.redirects.length}`);
console.log(`  rewrites:  ${cleanConfig.rewrites.length}`);
console.log(`  headers:   ${cleanConfig.headers?.length || 0}`);

// Write the clean config
const output = JSON.stringify(cleanConfig, null, 2) + '\n';
fs.writeFileSync(vercelPath, output, 'utf8');

console.log(`\n✅ Written clean vercel.json (${output.length} bytes, was ${fs.statSync(vercelPath).size} bytes)`);
console.log('\nKept rewrites:');
cleanConfig.rewrites.forEach(r => console.log(`  ${r.source} → ${r.destination}`));
