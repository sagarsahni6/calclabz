/* Calc Labz Service Worker — Cache-First + Network Fallback */
const CACHE = 'calclabz-v10';
const ASSETS = [
    './',
    'index.html',
    'manifest.json',
    'assets/css/main.css',
    'assets/js/calculators.js',
    'assets/js/formulas.js',
    'assets/js/app.js'
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
