/* Calc Labz Service Worker — Stale-While-Revalidate (P6) */
const CACHE = 'calclabz-v16';
const ASSETS = [
    './',
    'index.html',
    'calclabz-logo.png',
    'manifest.json',
    'assets/css/main.css',
    // P1: Core stubs (100 KB — replaces monolithic 333 KB calculators.js)
    'assets/js/calculators-core.js',
    'assets/js/blog-posts.js',
    'assets/js/faq-data.js',
    'assets/js/formulas.js',
    'assets/js/app.js',
    // P1: Lazy-loaded category files (pre-cached for offline-first)
    'assets/js/calculators-finance.js',
    'assets/js/calculators-health.js',
    'assets/js/calculators-math.js',
    'assets/js/calculators-unit.js',
    'assets/js/calculators-everyday.js',
    'assets/js/calculators-datetime.js',
    'assets/js/calculators-engineering.js',
    'assets/js/calculators-science.js',
    'assets/js/calculators-construction.js',
    'assets/js/calculators-education.js'
];


self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
    e.waitUntil(caches.keys().then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    )).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
    if (e.request.method !== 'GET') return;
    const url = new URL(e.request.url);
    // Cache-first for same-origin assets
    if (url.origin === self.location.origin) {
        e.respondWith(
            caches.match(e.request).then(cached => {
                const fetchPromise = fetch(e.request).then(response => {
                    if (response && response.status === 200) {
                        const clone = response.clone();
                        caches.open(CACHE).then(c => c.put(e.request, clone));
                    }
                    return response;
                }).catch(() => cached);
                return cached || fetchPromise;
            })
        );
    }
});
