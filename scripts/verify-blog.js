const fs = require('fs');
const files = fs.readdirSync('blog').filter(f => f.endsWith('.html'));
let total = 0, withCalcLinks = 0, withBlogLinks = 0, withRelated = 0;
files.forEach(f => {
  const h = fs.readFileSync('blog/' + f, 'utf8');
  total++;
  if (h.includes('-calculator"')) withCalcLinks++;
  if (h.includes('/blog/')) withBlogLinks++;
  if (h.includes('Related Articles')) withRelated++;
});
console.log('Total blog pages:', total);
console.log('With calculator links:', withCalcLinks);
console.log('With cross-blog links:', withBlogLinks);
console.log('With Related Articles section:', withRelated);

// Category count
const bp = require('./assets/js/blog-posts.js');
// Won't work directly, count from metadata
const meta = fs.readFileSync('assets/js/blog-posts.js', 'utf8');
const cats = {};
const matches = meta.match(/cat:'[^']+'/g) || [];
matches.forEach(m => {
  const c = m.replace("cat:'", '').replace("'", '');
  cats[c] = (cats[c] || 0) + 1;
});
console.log('\nPosts by category:', cats);
console.log('Total metadata entries:', matches.length);
