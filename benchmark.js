const fs = require('fs');
const { TRUST_PAGES, UPDATED_FOOTER } = require('./scripts/generate-trust-pages.js');
const path = require('path');
const ROOT = path.join(__dirname);
const TEMPLATE = path.join(ROOT, 'index.html');
const BASE_URL = 'https://calclabz.com';
const CONTENT_SLOT_RE = /<!-- CONTENT_SLOT_START -->[\s\S]*?<!-- CONTENT_SLOT_END -->/;
const SEO_CSS = '\n/* SEO Pre-rendered Content */\n' +
'.seo-breadcrumb{padding:8px 0;font-size:.82rem;color:var(--txt2)}\n' +
'.seo-breadcrumb a{color:var(--p);text-decoration:none}\n' +
'.seo-breadcrumb a:hover{text-decoration:underline}\n' +
'#seo-content h1{font-size:1.8rem;font-weight:800;margin:16px 0 8px;color:var(--txt)}\n' +
'#seo-content h2{font-size:1.2rem;font-weight:700;margin:24px 0 8px;color:var(--txt)}\n' +
'#seo-content h3{font-size:1rem;font-weight:600;margin:16px 0 6px;color:var(--txt)}\n' +
'.seo-intro{font-size:.95rem;color:var(--txt1);line-height:1.7;margin-bottom:20px}\n' +
'.seo-section{margin-bottom:24px;padding:16px;background:var(--bg1);border:1px solid var(--brd);border-radius:var(--rmd)}\n' +
'.seo-section p,.seo-section li{font-size:.9rem;color:var(--txt1);line-height:1.7}\n' +
'.seo-section ol,.seo-section ul{padding-left:20px;margin:8px 0}\n' +
'.seo-section li{margin:4px 0}\n' +
'.seo-trust{margin:24px 0;padding:16px;background:var(--bg2);border-radius:var(--rsm);border-left:3px solid var(--p)}\n' +
'.seo-trust p{font-size:.82rem;color:var(--txt2);line-height:1.6;margin:4px 0}\n' +
'.seo-trust strong{color:var(--txt1)}\n';

function buildPageBaseline(page) {
  var template = fs.readFileSync(TEMPLATE, 'utf8');
  var pageUrl = BASE_URL + '/' + page.slug;
  var html = template;

  // 1. Replace <title>
  html = html.replace(/<title>.*?<\/title>/, '<title>' + page.title + ' | Calc Labz</title>');

  // 2. Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    '<meta name="description" content="' + page.desc.replace(/"/g, '&quot;') + '">'
  );

  // 3. Replace canonical
  html = html.replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="' + pageUrl + '">');

  // 4. Replace og tags
  html = html.replace(/<meta property="og:url" content="[^"]*">/, '<meta property="og:url" content="' + pageUrl + '">');
  html = html.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="' + page.title + '">');
  html = html.replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="' + page.desc.replace(/"/g, '&quot;') + '">');
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/, '<meta name="twitter:title" content="' + page.title + '">');
  html = html.replace(/<meta name="twitter:description" content="[^"]*">/, '<meta name="twitter:description" content="' + page.desc.replace(/"/g, '&quot;') + '">');

  // 5. Remove hreflang (inner pages)
  html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*">\r?\n/g, '');

  // 6. Remove homepage JSON-LD
  html = html.replace(/<!-- ═══ JSON-LD: SoftwareApplication[\s\S]*?<\/script>\s*\n/, '');
  html = html.replace(/<!-- ═══ JSON-LD: WebSite[\s\S]*?<\/script>\s*\n/, '');

  // 7. Inject breadcrumb schema
  var bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: page.title.split(' —')[0].split(' |')[0], item: pageUrl }
    ]
  };
  html = html.replace('</head>',
    '<script type="application/ld+json" id="jsonld-breadcrumb">\n' +
    JSON.stringify(bc, null, 2) + '\n</script>\n</head>'
  );

  // 8. Inject SEO CSS
  html = html.replace('    </style>', SEO_CSS + '    </style>');

  // 9. Replace body placeholder with real content
  var bodyHtml = typeof page.body === 'function' ? page.body() : page.body;
  html = html.replace(CONTENT_SLOT_RE, bodyHtml);

  // 10. Update footer with new links
  html = html.replace(
    /    <!-- ═══ FOOTER ═══ -->[\s\S]*?<\/footer>/,
    UPDATED_FOOTER
  );

  // Write file
  var outFile = path.join(ROOT, page.slug + '.html');
  fs.writeFileSync(outFile, html, 'utf8');
}

var templateCached = fs.readFileSync(TEMPLATE, 'utf8');
function buildPageOptimized(page) {
  var template = templateCached;
  var pageUrl = BASE_URL + '/' + page.slug;
  var html = template;

  // 1. Replace <title>
  html = html.replace(/<title>.*?<\/title>/, '<title>' + page.title + ' | Calc Labz</title>');

  // 2. Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    '<meta name="description" content="' + page.desc.replace(/"/g, '&quot;') + '">'
  );

  // 3. Replace canonical
  html = html.replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="' + pageUrl + '">');

  // 4. Replace og tags
  html = html.replace(/<meta property="og:url" content="[^"]*">/, '<meta property="og:url" content="' + pageUrl + '">');
  html = html.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="' + page.title + '">');
  html = html.replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="' + page.desc.replace(/"/g, '&quot;') + '">');
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/, '<meta name="twitter:title" content="' + page.title + '">');
  html = html.replace(/<meta name="twitter:description" content="[^"]*">/, '<meta name="twitter:description" content="' + page.desc.replace(/"/g, '&quot;') + '">');

  // 5. Remove hreflang (inner pages)
  html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*">\r?\n/g, '');

  // 6. Remove homepage JSON-LD
  html = html.replace(/<!-- ═══ JSON-LD: SoftwareApplication[\s\S]*?<\/script>\s*\n/, '');
  html = html.replace(/<!-- ═══ JSON-LD: WebSite[\s\S]*?<\/script>\s*\n/, '');

  // 7. Inject breadcrumb schema
  var bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: page.title.split(' —')[0].split(' |')[0], item: pageUrl }
    ]
  };
  html = html.replace('</head>',
    '<script type="application/ld+json" id="jsonld-breadcrumb">\n' +
    JSON.stringify(bc, null, 2) + '\n</script>\n</head>'
  );

  // 8. Inject SEO CSS
  html = html.replace('    </style>', SEO_CSS + '    </style>');

  // 9. Replace body placeholder with real content
  var bodyHtml = typeof page.body === 'function' ? page.body() : page.body;
  html = html.replace(CONTENT_SLOT_RE, bodyHtml);

  // 10. Update footer with new links
  html = html.replace(
    /    <!-- ═══ FOOTER ═══ -->[\s\S]*?<\/footer>/,
    UPDATED_FOOTER
  );

  // Write file
  var outFile = path.join(ROOT, page.slug + '.html');
  fs.writeFileSync(outFile, html, 'utf8');
}


console.log('Running benchmark (100 iterations of each approach on all pages)');
const ITERATIONS = 100;

const startBaseline = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
  TRUST_PAGES.forEach(buildPageBaseline);
}
const endBaseline = performance.now();
const timeBaseline = endBaseline - startBaseline;

const startOptimized = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
  TRUST_PAGES.forEach(buildPageOptimized);
}
const endOptimized = performance.now();
const timeOptimized = endOptimized - startOptimized;

console.log(`Baseline time: ${timeBaseline.toFixed(2)} ms`);
console.log(`Optimized time: ${timeOptimized.toFixed(2)} ms`);
const improvement = ((timeBaseline - timeOptimized) / timeBaseline) * 100;
console.log(`Improvement: ${improvement.toFixed(2)}%`);
