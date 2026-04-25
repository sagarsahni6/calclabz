/* Calc Labz Service Worker — Production Hardened (v17)
   - HTML: Network-first with offline cache fallback
   - Assets (JS/CSS/images): Cache-first with background revalidation
   - Never cache error/non-ok responses
   - Offline fallback to cached index.html for navigation requests
*/
const CACHE = 'calclabz-v25';
const ASSETS = [
    './',
    'index.html',
    'calclabz-logo.png',
    'manifest.json',
    'assets/css/main.css',
    // Core stubs
    'assets/js/css-swap.js',
    'assets/js/calculators-core.js',
    'assets/js/blog-posts.js',
    'assets/js/blog-content-finance.js',
    'assets/js/blog-content-health.js',
    'assets/js/blog-content-education.js',
    'assets/js/blog-content-lifestyle.js',
    'assets/js/faq-data.js',
    'assets/js/formulas.js',
    'assets/js/consent.js',
    'assets/js/app.js',
    // Lazy-loaded category files (pre-cached for offline-first)
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
    e.waitUntil(
        caches.open(CACHE)
            .then(c => c.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', e => {
    if (e.request.method !== 'GET') return;
    const url = new URL(e.request.url);
    if (url.origin !== self.location.origin) return;

    // HTML navigation requests: Network-first
    // Ensures users always get fresh HTML after deploys
    const isNavigation = e.request.mode === 'navigate';
    const isHTML = (e.request.headers.get('accept') || '').includes('text/html');

    if (isNavigation || isHTML) {
        e.respondWith(
            fetch(e.request)
                .then(response => {
                    // Only cache successful HTML responses
                    if (response.ok) {
                        const clone = response.clone();
                        caches.open(CACHE).then(c => c.put(e.request, clone));
                    }
                    return response;
                })
                .catch(() =>
                    // Offline: try cache, then fall back to index.html
                    caches.match(e.request)
                        .then(cached => cached || caches.match('index.html'))
                )
        );
        return;
    }

    // Static assets (JS, CSS, images, fonts): Cache-first with background revalidation
    e.respondWith(
        caches.match(e.request).then(cached => {
            const fetchPromise = fetch(e.request).then(response => {
                // Only cache successful responses
                if (response.ok) {
                    const clone = response.clone();
                    caches.open(CACHE).then(c => c.put(e.request, clone));
                }
                return response;
            }).catch(() => cached);
            return cached || fetchPromise;
        })
    );
});
