/* ═══════════════════════════════════════════════════
   Calc Labz — Core Application Logic
   ═══════════════════════════════════════════════════ */
'use strict';

// ── FAST INR FORMATTER (P5) ────────────────────────
// 10-15x faster than toLocaleString('en-IN') — safe for 60fps animation loops
function formatINR(n) {
    n = Math.round(n);
    if (n < 0) return '-' + formatINR(-n);
    var s = n.toString();
    if (s.length <= 3) return s;
    var r = s.slice(-3);
    var i = s.slice(0, -3);
    while (i.length > 2) { r = i.slice(-2) + ',' + r; i = i.slice(0, -2); }
    return i ? i + ',' + r : r;
}

// ── STATE ──────────────────────────────────────────
var favorites = [];
try { favorites = JSON.parse(localStorage.getItem('cp_fav') || '[]'); } catch (e) { }
var recentList = [];
try { recentList = JSON.parse(localStorage.getItem('cp_recent') || '[]'); } catch (e) { }
var calcHistory = [];
try { calcHistory = JSON.parse(localStorage.getItem('cp_history') || '[]'); } catch (e) { }
var searchTimer;
var activeChart = null;
var _advChart = null;
var _undoStack = {};

// ── LAZY CALC LOADER (P1) ──────────────────────────
// Maps category → script file; loaded once on first use
var _loadedCategories = {};
var _categoryScriptMap = {
    math: 'assets/js/calculators-math.js',
    finance: 'assets/js/calculators-finance.js',
    health: 'assets/js/calculators-health.js',
    unit: 'assets/js/calculators-unit.js',
    datetime: 'assets/js/calculators-datetime.js',
    engineering: 'assets/js/calculators-engineering.js',
    science: 'assets/js/calculators-science.js',
    construction: 'assets/js/calculators-construction.js',
    everyday: 'assets/js/calculators-everyday.js',
    education: 'assets/js/calculators-education.js'
};

// Callback registry — queued actions waiting for a category to load
var _pendingCalcCallbacks = {};

// Called by each category file when it finishes executing
window._calcCatLoaded = function (cat) {
    _loadedCategories[cat] = true;
    var cbs = _pendingCalcCallbacks[cat] || [];
    delete _pendingCalcCallbacks[cat];
    cbs.forEach(function (cb) { try { cb(); } catch (e) { console.error(e); } });
};

// Ensure a calculator's calc() function is loaded before calling it.
// If already loaded → calls callback immediately.
// If not → injects script tag, queues callback.
function ensureCalcLoaded(calcId, callback) {
    var calc = DB[calcId];
    if (!calc) { callback(); return; }

    // Already loaded (calc() function is not null)
    if (calc.calc !== null && calc.calc !== undefined) { callback(); return; }

    var cat = calc.cat;
    // If category already loaded (shouldn't hit this, but guard)
    if (_loadedCategories[cat]) { callback(); return; }

    // Queue callback
    if (!_pendingCalcCallbacks[cat]) _pendingCalcCallbacks[cat] = [];
    _pendingCalcCallbacks[cat].push(callback);

    // Only inject script once per category
    if (document.getElementById('calcscript-' + cat)) return;

    var src = _categoryScriptMap[cat];
    if (!src) { console.warn('[calclabz] No script map for category:', cat); callback(); return; }

    var script = document.createElement('script');
    script.id = 'calcscript-' + cat;
    script.src = src;
    script.onerror = function () {
        console.error('[calclabz] Failed to load', src);
        // Fire callbacks anyway with null-safe fallback
        var cbs = _pendingCalcCallbacks[cat] || [];
        delete _pendingCalcCallbacks[cat];
        cbs.forEach(function (cb) { try { cb(); } catch (e) { } });
    };
    document.head.appendChild(script);
}

// ── CALC SLUG MAP (SEO: clean URL routing) ──────────
// Maps 'emi-calculator' → 'emi', 'bmi-calculator' → 'bmi', etc.
var _calcSlugMap = {};
// Redirect map: old slugs from renamed calculator IDs → new canonical ID
var _slugRedirects = {
    'bodyfat-calculator': 'bodyfat',       // was bodyFat (duplicate removed)
    'incometax-calculator': 'incometax',   // was incomeTax (renamed)
    'waisthip-calculator': 'waisthip',     // was waistHip (renamed)
    'lungcapacity-calculator': 'lungcapacity', // was lungCapacity (renamed)
    'agenextbday-calculator': 'agenextbday',   // was ageNextBday (renamed)
    'calories-food-calculator': 'caloriesfood' // was calories_food (renamed)
};
(function () {
    Object.keys(DB).forEach(function (id) {
        var slug = id.toLowerCase().replace(/_/g, '-') + '-calculator';
        // Dev-time collision detection
        if (_calcSlugMap[slug]) {
            console.warn('[calclabz] SLUG COLLISION: "' + slug + '" maps to both "' + _calcSlugMap[slug] + '" and "' + id + '". Fix in calculators-core.js.');
        }
        _calcSlugMap[slug] = id;
    });
    // Apply redirects for old slugs
    Object.keys(_slugRedirects).forEach(function (oldSlug) {
        if (!_calcSlugMap[oldSlug]) _calcSlugMap[oldSlug] = _slugRedirects[oldSlug];
    });
}());
function findCalcBySlug(slug) { return _calcSlugMap[slug] || null; }

// ── THEME ──────────────────────────────────────────
function applyTheme() {
    var pref = localStorage.getItem('cp_theme');
    if (pref === 'light') document.body.classList.add('light');
    else if (pref === 'dark') document.body.classList.remove('light');
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.body.classList.add('light');
    }
    updateThemeIcon();
}
function toggleTheme() {
    document.body.classList.toggle('light');
    safeStore('cp_theme', document.body.classList.contains('light') ? 'light' : 'dark');
    updateThemeIcon();
}
function updateThemeIcon() {
    var ico = document.getElementById('themeIco');
    if (ico) ico.className = document.body.classList.contains('light') ? 'fas fa-sun' : 'fas fa-moon';
}

// ── SIDEBAR ────────────────────────────────────────
function buildSidebar() {
    var el = document.getElementById('catList');
    if (!el) return;
    el.innerHTML = Object.entries(CATS).map(function (e) {
        var key = e[0], cat = e[1];
        return '<div class="cat-item">'
            + '<button class="cat-btn" id="catbtn-' + key + '" data-action="toggleCat" data-key="' + key + '" aria-expanded="false">'
            + '<span class="cat-ico" style="background:' + cat.color + '"><i class="fas ' + cat.icon + '"></i></span>'
            + '<span class="cat-lbl">' + cat.name + '</span>'
            + '<span class="cat-cnt">' + CAT_LIST[key].length + '</span>'
            + '<i class="fas fa-chevron-right cat-arr"></i>'
            + '</button>'
            + '<div class="calc-links" id="calclinks-' + key + '">'
            + CAT_LIST[key].map(function (id) {
                return '<div class="clink" id="clink-' + id + '" data-action="openCalc" data-cat="' + key + '" data-id="' + id + '" role="button" tabindex="0">'
                    + '<i class="fas ' + DB[id].icon + '"></i> ' + DB[id].name + '</div>';
            }).join('')
            + '</div></div>';
    }).join('');
}

function toggleCat(key) {
    var btn = document.getElementById('catbtn-' + key);
    var links = document.getElementById('calclinks-' + key);
    var isActive = btn.classList.contains('active');
    document.querySelectorAll('.cat-btn').forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-expanded', 'false'); });
    document.querySelectorAll('.calc-links').forEach(function (l) { l.style.display = 'none'; });
    if (!isActive) {
        btn.classList.add('active');
        links.style.display = 'block';
        btn.setAttribute('aria-expanded', 'true');
    }
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sOverlay').classList.toggle('open');
}
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sOverlay').classList.remove('open');
}

// ── HELPERS ────────────────────────────────────────
function escHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/**
 * Lightweight sanitizer for trusted-but-external HTML (blog body).
 * Strips dangerous event-handler attributes (on*) and javascript: hrefs
 * so that even if blog data is ever compromised, no XSS executes.
 */
function sanitizeHTML(html) {
    if (typeof DOMParser === 'undefined') return escHtml(html);
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    // Remove all elements that are inherently unsafe
    var dangerous = doc.querySelectorAll('script,style,iframe,object,embed,base,form,input,button,link');
    dangerous.forEach(function (el) { el.remove(); });
    // Strip on* event attributes and javascript: hrefs from all remaining nodes
    doc.body.querySelectorAll('*').forEach(function (el) {
        Array.from(el.attributes).forEach(function (attr) {
            if (/^on/i.test(attr.name)) el.removeAttribute(attr.name);
            if ((attr.name === 'href' || attr.name === 'src' || attr.name === 'action') &&
                /^\s*javascript:/i.test(attr.value)) el.removeAttribute(attr.name);
        });
    });
    return doc.body.innerHTML;
}

/**
 * Safe localStorage setter — silently drops the write if quota is exceeded
 * rather than throwing an uncaught DOMException.
 */
function safeStore(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* quota exceeded — ignore */ }
}
var toastTimer;
function showToast(msg, type) {
    type = type || 'success';
    var t = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = msg;
    t.querySelector('i').className = type === 'warning' ? 'fas fa-triangle-exclamation' : 'fas fa-check-circle';
    t.style.borderColor = type === 'warning' ? 'var(--gold)' : 'var(--acc2)';
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2800);
}
function formatAgo(ts) {
    var diff = Date.now() - ts;
    if (diff < 60000) return 'just now';
    if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago';
    if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago';
    return Math.floor(diff / 86400000) + 'd ago';
}
function trackEvent() { } // no-op GA stub

// ── SEO HELPERS ────────────────────────────────────
function setMeta(name, content) {
    var el = document.querySelector('meta[name="' + name + '"]');
    if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el); }
    el.setAttribute('content', content);
}
function setOG(property, content) {
    var el = document.querySelector('meta[property="' + property + '"]');
    if (!el) { el = document.createElement('meta'); el.setAttribute('property', property); document.head.appendChild(el); }
    el.setAttribute('content', content);
}
function setCanon(url) {
    var el = document.querySelector('link[rel="canonical"]');
    if (!el) { el = document.createElement('link'); el.rel = 'canonical'; document.head.appendChild(el); }
    el.href = url;
}
function injectBreadcrumbSchema(items) {
    var existing = document.getElementById('jsonld-breadcrumb');
    if (existing) existing.remove();
    var schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map(function (item, i) {
            return { '@type': 'ListItem', position: i + 1, name: item.name, item: item.url };
        })
    };
    var el = document.createElement('script');
    el.type = 'application/ld+json'; el.id = 'jsonld-breadcrumb';
    el.textContent = JSON.stringify(schema);
    document.head.appendChild(el);
}
function removeSchema(id) {
    var el = document.getElementById(id); if (el) el.remove();
}
function updateSidebarActive(id) {
    document.querySelectorAll('.qbtn').forEach(function (b) { b.removeAttribute('aria-current'); });
    var btn = document.getElementById(id); if (btn) btn.setAttribute('aria-current', 'page');
}
function setQBtn(id) {
    document.querySelectorAll('.qbtn').forEach(function (b) { b.classList.remove('active'); });
    if (id) { var btn = document.getElementById(id); if (btn) btn.classList.add('active'); }
}
function setMobileNav(id) {
    document.querySelectorAll('.mnav-btn').forEach(function (b) { b.classList.remove('active'); });
    var btn = document.getElementById(id); if (btn) btn.classList.add('active');
}

// ── FAVORITES ──────────────────────────────────────
function toggleFav(id) {
    var idx = favorites.indexOf(id);
    if (idx >= 0) favorites.splice(idx, 1); else favorites.push(id);
    safeStore('cp_fav', JSON.stringify(favorites));
    var star = document.getElementById('fav-' + id);
    if (star) {
        star.classList.toggle('active', favorites.includes(id));
        star.innerHTML = favorites.includes(id) ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    }
    showToast(favorites.includes(id) ? 'Added to favorites!' : 'Removed from favorites');
}

function addToRecent(catKey, calcId) {
    var entry = catKey + ':' + calcId;
    recentList = recentList.filter(function (r) { return r !== entry; });
    recentList.unshift(entry);
    if (recentList.length > 20) recentList.pop();
    safeStore('cp_recent', JSON.stringify(recentList));
}

// ── RENDER HELPERS ─────────────────────────────────
// Reusable rendering functions to reduce string-building boilerplate
// and improve card semantics for keyboard accessibility.

/** Renders the standard page header with icon, title, subtitle */
function renderPageHeader(icon, title, subtitle, color) {
    return '<div class="cat-hdr"><div class="cat-ico-lg" style="background:' + (color || 'linear-gradient(135deg,var(--p),var(--p2))') + '"><i class="fas ' + icon + '"></i></div>'
        + '<div class="cat-meta"><h1>' + escHtml(title) + '</h1><p>' + escHtml(subtitle) + '</p></div></div>';
}

/** Renders a single calculator feature card with keyboard accessibility */
function featCard(catKey, id, calc) {
    var cat = CATS[catKey] || {};
    return '<div class="feat-card" role="button" tabindex="0" aria-label="Open ' + escHtml(calc.name) + '" data-action="openCalc" data-cat="' + catKey + '" data-id="' + id + '">'
        + '<div class="fc-ico" style="background:' + (cat.color || 'var(--p)') + '"><i class="fas ' + calc.icon + '"></i></div>'
        + '<div class="fc-name">' + calc.name + '</div>'
        + '<div class="fc-desc">' + calc.desc + '</div>'
        + (calc.badge ? '<span class="badge">' + calc.badge + '</span>' : '')
        + '</div>';
}

/** Renders a stats grid row */
function renderStat(value, label) {
    return '<div class="stat"><div class="stat-n">' + escHtml(String(value)) + '</div><div class="stat-l">' + escHtml(label) + '</div></div>';
}


// ── HOME ───────────────────────────────────────────
function showHome() {

    setQBtn('qHome'); setMobileNav('mnavHome'); closeSidebar(); updateSidebarActive('qHome');
    resetMeta();
    var popular = Object.entries(DB).filter(function (e) { return e[1].badge === 'Popular'; }).slice(0, 8);
    var popHTML = popular.map(function (e) { return featCard(e[1].cat, e[0], e[1]); }).join('');

    var recentHTML = '';
    if (recentList.length) {
        var recCards = recentList.slice(0, 4).map(function (entry) {
            var parts = entry.split(':');
            var c = DB[parts[1]];
            return c ? featCard(parts[0], parts[1], c) : '';
        }).join('');
        recentHTML = '<div class="featured-section"><div class="sec-hdr"><div class="sec-ttl"><i class="fas fa-clock"></i> Recently Used</div></div><div class="feat-grid stagger-children">' + recCards + '</div></div>';
    }

    var catCards = Object.entries(CATS).map(function (e) {
        var key = e[0], cat = e[1];
        return '<div class="feat-card" data-action="showCategory" data-key="' + key + '">'
            + '<div class="fc-ico" style="background:' + cat.color + '"><i class="fas ' + cat.icon + '"></i></div>'
            + '<div class="fc-name">' + cat.name + '</div>'
            + '<div class="fc-desc">' + CAT_LIST[key].length + ' calculators</div></div>';
    }).join('');

    var _BCColors = { 'Finance': '#6366f1', 'Tax': '#f59e0b', 'Health': '#10b981', 'Math': '#8b5cf6', 'Education': '#06b6d4', 'Lifestyle': '#f0544f' };
    var _BCIcons = { 'Finance': 'fa-chart-line', 'Tax': 'fa-landmark', 'Health': 'fa-heart-pulse', 'Math': 'fa-calculator', 'Education': 'fa-graduation-cap', 'Lifestyle': 'fa-sun' };
    var blogCards = BLOG_POSTS.slice(0, 4).map(function (p) {
        var catColor = _BCColors[p.cat] || 'var(--p)';
        var catIcon = _BCIcons[p.cat] || 'fa-file-alt';
        return '<div class="blog-card" data-action="showBlogPost" data-id="' + p.id + '">'
            + '<div class="blog-card-hdr" style="background:linear-gradient(135deg,' + catColor + ',' + catColor + '88)"></div>'
            + '<div class="blog-meta-row"><span class="blog-read-badge"><i class="fas fa-clock"></i>' + (p.readTime || '5 min') + '</span><span><i class="fas fa-calendar"></i>' + (p.date || '2025') + '</span></div>'
            + '<div class="blog-cat"><i class="fas ' + catIcon + '"></i> ' + escHtml(p.cat) + '</div>'
            + '<div class="blog-title">' + escHtml(p.title) + '</div>'
            + '<div class="blog-desc">' + escHtml(p.desc) + '</div>'
            + '<div class="blog-link"><i class="fas fa-arrow-right"></i> Read guide</div></div>';
    }).join('');

    document.getElementById('mainContent').innerHTML =
        '<div class="hero"><div class="hero-bg-orb o1"></div><div class="hero-bg-orb o2"></div>'
        + '<h1>300+ Free Calculators</h1>'
        + '<p>Finance, health, math, engineering &amp; more — instant results, zero signup</p>'
        + '<div class="hero-search"><i class="fas fa-search"></i><input type="text" placeholder="Search calculators…" data-action-input="handleHeroSearch" aria-label="Search calculators"></div></div>'
        + '<div class="stats-row"><div class="stat"><div class="stat-n">' + Object.keys(DB).length + '</div><div class="stat-l">Calculators</div></div>'
        + '<div class="stat"><div class="stat-n">' + Object.keys(CATS).length + '</div><div class="stat-l">Categories</div></div>'
        + '<div class="stat"><div class="stat-n">0</div><div class="stat-l">Signup Required</div></div>'
        + '<div class="stat"><div class="stat-n">✓</div><div class="stat-l">Works Offline</div></div></div>'
        + '<div class="featured-section"><div class="sec-hdr"><div class="sec-ttl"><i class="fas fa-fire"></i> Popular Calculators</div></div><div class="feat-grid stagger-children">' + popHTML + '</div></div>'
        + recentHTML
        + '<div class="featured-section"><div class="sec-hdr"><div class="sec-ttl"><i class="fas fa-th-large"></i> Categories</div></div><div class="feat-grid stagger-children">' + catCards + '</div></div>'
        + '<div class="blog-strip"><div class="blog-strip-hdr"><h2><i class="fas fa-newspaper"></i> Calculator Guides</h2><button class="view-all" data-action="showBlogSection">View All <i class="fas fa-arrow-right"></i></button></div><div class="blog-grid">' + blogCards + '</div></div>';
    resetMeta();
}

function resetMeta() {
    var title = 'Calc Labz — 300+ Free Online Calculators | EMI, SIP, GST, BMI & More';
    document.title = title;
    setMeta('description', 'Free online calculators for EMI, SIP, GST, BMI, income tax and 300+ more. Instant results, no signup, works offline as a PWA.');
    setOG('og:title', title);
    setOG('og:description', 'Free online calculators for EMI, SIP, GST, BMI, income tax and 300+ more. Instant results, no signup. Works offline.');
    setOG('og:type', 'website');
    setOG('og:url', window.location.origin + '/');
    setOG('twitter:title', title);
    setOG('twitter:description', 'Free calculators for EMI, SIP, GST, BMI, income tax and 300+ more. Instant results, no signup.');
    setCanon(window.location.origin + '/');
    removeSchema('jsonld-breadcrumb');
    removeSchema('jsonld-calc');
    removeSchema('jsonld-faq');
    removeSchema('jsonld-howto');
    try { window.history.replaceState(null, '', '/'); } catch (e) { }
}

// ── CATEGORY VIEW ──────────────────────────────────
function showCategory(catKey) {
    var cat = CATS[catKey]; if (!cat) return;
    setQBtn(''); closeSidebar();
    document.title = cat.name + ' Calculators | Calc Labz';
    var cards = CAT_LIST[catKey].map(function (id) { return featCard(catKey, id, DB[id]); }).join('');
    document.getElementById('mainContent').innerHTML =
        '<div class="card"><div class="cat-hdr">'
        + '<div class="cat-ico-lg" style="background:' + cat.color + '"><i class="fas ' + cat.icon + '"></i></div>'
        + '<div class="cat-meta"><h1>' + cat.name + ' Calculators</h1><p>' + CAT_LIST[catKey].length + ' tools</p></div></div>'
        + '<div class="feat-grid stagger-children">' + cards + '</div></div>';
}

// ── FAVORITES VIEW ─────────────────────────────────
function showFavorites() {
    setQBtn('qFav'); setMobileNav('mnavFav'); closeSidebar(); updateSidebarActive('qFav');
    document.title = 'My Favorites | Calc Labz';
    var cards = favorites.map(function (id) {
        if (!DB[id]) return '';
        var cat = Object.keys(CAT_LIST).find(function (k) { return CAT_LIST[k].includes(id); }) || 'math';
        return featCard(cat, id, DB[id]);
    }).join('') || '<p style="color:var(--txt2);padding:20px;text-align:center">No favorites yet. Click ⭐ on any calculator.</p>';
    document.getElementById('mainContent').innerHTML =
        '<div class="card"><div class="cat-hdr"><div class="cat-ico-lg" style="background:linear-gradient(135deg,var(--gold),#f59e0b)"><i class="fas fa-star"></i></div>'
        + '<div class="cat-meta"><h1>My Favorites</h1><p>' + favorites.length + ' saved calculators</p></div></div>'
        + '<div class="feat-grid stagger-children">' + cards + '</div></div>';
}

// ── RECENT VIEW ────────────────────────────────────
function showRecent() {
    setQBtn(''); closeSidebar();
    document.title = 'Recently Used | Calc Labz';
    var cards = recentList.slice(0, 12).map(function (entry) {
        var parts = entry.split(':');
        var c = DB[parts[1]];
        return c ? featCard(parts[0], parts[1], c) : '';
    }).join('') || '<p style="color:var(--txt2);padding:20px;text-align:center">No recent calculators. Start calculating!</p>';
    document.getElementById('mainContent').innerHTML =
        '<div class="card"><div class="cat-hdr"><div class="cat-ico-lg" style="background:linear-gradient(135deg,var(--p),var(--p2))"><i class="fas fa-clock"></i></div>'
        + '<div class="cat-meta"><h1>Recently Used</h1><p>Your last ' + Math.min(recentList.length, 12) + ' calculators</p></div></div>'
        + '<div class="feat-grid stagger-children">' + cards + '</div></div>';
}

// ── INPUT TIPS ─────────────────────────────────────
var INPUT_TIPS = {
    principal: 'Total loan amount you wish to borrow', rate: 'Annual interest rate offered by the bank',
    tenure: 'Loan repayment period in months', monthly: 'Amount you invest every month',
    'return': 'Expected annual return on your investment', years: 'Total investment period in years',
    net: 'Amount before adding GST', weight: 'Your body weight', height: 'Your body height',
    val: 'The base value for calculation', pct: 'The percentage to apply', n: 'The number to operate on',
    income: 'Your total annual income', dob: 'Your date of birth'
};

// ── CALCULATOR VIEW (openCalc) ─────────────────────
// P1: Wraps the real render with lazy-loading.
// Shows a loading spinner while the category script downloads.
function openCalc(catKey, calcId) {
    var calc = DB[calcId]; if (!calc) return;

    // If calc() is null we need to lazy-load the category file first
    if (calc.calc === null || calc.calc === undefined) {
        // Show lightweight loading state instantly
        var cat = CATS[catKey] || {};
        setQBtn(''); closeSidebar(); addToRecent(catKey, calcId); updateSidebarActive('');
        updateMeta(calc.name, calc.desc, catKey, calcId);
        try { window.history.pushState({ type: 'calc', id: calcId }, calc.name + ' | Calc Labz', '/' + calcId.toLowerCase().replace(/_/g, '-') + '-calculator'); } catch (e) { }
        document.getElementById('mainContent').innerHTML =
            '<div class="card" style="text-align:center;padding:48px 24px">'
            + '<div style="width:48px;height:48px;border:3px solid var(--bg4);border-top-color:var(--p);'
            + 'border-radius:50%;animation:spin .7s linear infinite;margin:0 auto 16px"></div>'
            + '<p style="color:var(--txt1);font-size:.9rem">Loading ' + escHtml(calc.name) + '…</p>'
            + '</div>';
        // Add spin keyframe once
        if (!document.getElementById('spin-kf')) {
            var s = document.createElement('style');
            s.id = 'spin-kf';
            s.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
            document.head.appendChild(s);
        }
        ensureCalcLoaded(calcId, function () { _openCalcRender(catKey, calcId); });
        return;
    }
    _openCalcRender(catKey, calcId);
}

function _openCalcRender(catKey, calcId) {
    var calc = DB[calcId]; if (!calc) return;
    var cat = CATS[catKey] || {};
    setQBtn(''); closeSidebar(); addToRecent(catKey, calcId); updateSidebarActive('');
    document.querySelectorAll('.clink').forEach(function (l) { l.classList.remove('active'); });
    var cl = document.getElementById('clink-' + calcId); if (cl) cl.classList.add('active');
    updateMeta(calc.name, calc.desc, catKey, calcId);

    var isFav = favorites.includes(calcId);
    var inputsHTML = calc.inputs.map(function (inp) {
        var tip = INPUT_TIPS[inp.id] ? '<span class="tip-ico" title="' + escHtml(INPUT_TIPS[inp.id]) + '">?</span>' : '';
        if (inp.type === 'select') {
            return '<div class="inp-grp"><div class="tip-wrap"><label>' + inp.label + '</label>' + tip + '</div>'
                + '<div class="inp-wrap"><select id="inp_' + inp.id + '" data-action-change="calculate" data-calcid="' + calcId + '">'
                + inp.options.map(function (o) { return '<option>' + o + '</option>'; }).join('') + '</select></div></div>';
        }
        if (inp.type === 'date' || inp.type === 'time') {
            return '<div class="inp-grp"><div class="tip-wrap"><label>' + inp.label + '</label>' + tip + '</div>'
                + '<div class="inp-wrap"><input type="' + inp.type + '" id="inp_' + inp.id + '"' + (inp.default ? ' value="' + inp.default + '"' : '')
                + ' data-action-change="calculate" data-calcid="' + calcId + '"></div></div>';
        }
        if (inp.type === 'text') {
            return '<div class="inp-grp"><div class="tip-wrap"><label>' + inp.label + '</label>' + tip + '</div>'
                + '<div class="inp-wrap"><input type="text" id="inp_' + inp.id + '" value="' + (inp.default || '') + '" data-action-input="debouncedCalculate" data-calcid="' + calcId + '"></div></div>';
        }
        var d = inp.default !== undefined ? inp.default : '';
        return '<div class="inp-grp" id="inpgrp_' + inp.id + '"><div class="tip-wrap"><label>' + inp.label + '</label>' + tip + '</div>'
            + '<div class="inp-wrap">' + (inp.prefix ? '<span class="inp-pfx">' + inp.prefix + '</span>' : '')
            + '<input type="number" id="inp_' + inp.id + '" value="' + d + '" step="any" class="' + (inp.prefix ? 'has-pfx' : '') + (inp.suffix ? ' has-sfx' : '') + '" data-action-input="debouncedCalculate" data-calcid="' + calcId + '">'
            + (inp.suffix ? '<span class="inp-sfx">' + inp.suffix + '</span>' : '') + '</div>'
            + '<div class="inp-error" id="err_' + inp.id + '"></div></div>';
    }).join('');

    var presetsHTML = '';
    var presets = getPresets(calcId);
    if (presets.length) {
        presetsHTML = '<div class="preset-row">'
            + presets.map(function (p, i) { return '<button class="preset-pill" data-action="loadPreset" data-calcid="' + calcId + '" data-index="' + i + '">' + escHtml(p.name) + '</button>'; }).join('')
            + '</div>';
    }

    var formulaHTML = '';
    var fData = (typeof CALC_FORMULAS !== 'undefined') ? CALC_FORMULAS[calcId] : null;
    if (fData) {
        formulaHTML = '<div class="formula-wrap"><div class="formula-hdr" data-action="toggleFormula">'
            + '<span><i class="fas fa-square-root-variable" style="color:var(--acc2);margin-right:6px"></i>How is this calculated?</span><i class="fas fa-chevron-up"></i></div>'
            + '<div class="formula-body">'
            + '<div class="formula-code">' + escHtml(fData.formula) + '</div>'
            + '<div class="formula-vars">' + escHtml(fData.variables) + '</div>'
            + '<p class="formula-desc">' + escHtml(fData.explanation) + '</p>'
            + '</div></div>';
    }

    var relatedCalcs = getRelated(catKey, calcId);
    var relatedHTML = relatedCalcs.length ? '<div class="related-wrap"><h3><i class="fas fa-link" style="color:var(--p);margin-right:6px"></i>Related Calculators</h3><div class="related-grid">'
        + relatedCalcs.map(function (r) { return '<button class="related-pill" data-action="openCalc" data-cat="' + r.cat + '" data-id="' + r.id + '"><i class="fas ' + DB[r.id].icon + '"></i>' + DB[r.id].name + '</button>'; }).join('')
        + '</div></div>' : '';

    var shareHTML = '<div class="share-bar"><span class="share-lbl">Share:</span>'
        + '<button class="share-btn wa" data-action="doShare" data-channel="wa" data-name="' + escHtml(calc.name) + '"><i class="fab fa-whatsapp"></i>WhatsApp</button>'
        + '<button class="share-btn tw" data-action="doShare" data-channel="tw" data-name="' + escHtml(calc.name) + '"><i class="fab fa-twitter"></i>Twitter</button>'
        + '<button class="share-btn" data-action="doShare" data-channel="copy" data-name="' + escHtml(calc.name) + '"><i class="fas fa-link"></i>Copy Link</button>'
        + (navigator.share ? '<button class="share-native-btn" data-action="doNativeShare" data-name="' + escHtml(calc.name) + '"><i class="fas fa-share-nodes"></i>Share</button>' : '')
        + '</div>';

    var noteVal = getNote(calcId);
    var noteHTML = '<div class="note-wrap"><label style="font-size:.78rem;font-weight:600;color:var(--txt2)"><i class="fas fa-sticky-note" style="margin-right:4px"></i>Notes</label>'
        + '<textarea class="note-inp" id="note-' + calcId + '" placeholder="Add personal notes…" data-action-input="saveNote" data-calcid="' + calcId + '">' + escHtml(noteVal) + '</textarea>'
        + '<div class="note-saved" id="noteSaved-' + calcId + '"><i class="fas fa-check"></i> Saved</div></div>';

    document.getElementById('mainContent').innerHTML =
        '<div class="card">'
        + '<div class="crumb"><a data-action="showHome" role="button" tabindex="0">Home</a> <span>›</span> <a data-action="showCategory" data-key="' + catKey + '" role="button" tabindex="0">' + cat.name + '</a> <span>›</span> ' + calc.name + '</div>'
        + '<div class="calc-hdr"><div class="calc-title-row"><div><h1>' + calc.name + '</h1><p>' + calc.desc + '</p></div>'
        + '<div class="calc-actions">'
        + '<button class="ibtn" id="fav-' + calcId + '" data-action="toggleFav" data-calcid="' + calcId + '" title="Favorite"><i class="' + (isFav ? 'fas' : 'far') + ' fa-star" style="color:' + (isFav ? 'var(--gold)' : '') + '"></i></button>'
        + '<button class="ibtn" data-action="savePDF" data-calcid="' + calcId + '" title="Save PDF"><i class="fas fa-file-pdf"></i></button>'
        + '<button class="ibtn" data-action="openCmpMode" data-cat="' + catKey + '" data-calcid="' + calcId + '" title="Compare"><i class="fas fa-columns"></i></button>'
        + '</div></div></div>'
        + '<div class="calc-badges">' + (fData ? '<span class="badge-verified"><i class="fas fa-check-circle"></i>Verified Formula</span>' : '<span class="badge-standard"><i class="fas fa-calculator"></i>Standard Formula</span>') + '<span class="badge-updated"><i class="fas fa-clock"></i>Updated 2026</span></div>'
        + presetsHTML
        + '<div class="inp-grid">' + inputsHTML + '</div>'
        + '<div class="btn-row"><button class="btn btn-p" data-action="calculate" data-calcid="' + calcId + '"><i class="fas fa-calculator"></i> Calculate</button>'
        + '<button class="btn btn-s" data-action="resetCalc" data-calcid="' + calcId + '"><i class="fas fa-redo"></i> Reset</button>'
        + '<button class="undo-btn" data-action="undoCalc" data-calcid="' + calcId + '"><i class="fas fa-undo"></i> Undo</button>'
        + '<button class="preset-save" data-action="savePreset" data-calcid="' + calcId + '"><i class="fas fa-bookmark"></i> Save Preset</button></div>'
        + '<div class="results" id="res-' + calcId + '" style="display:none"></div>'
        + '<div id="calcDisclaimer-' + calcId + '"></div>'
        + '<div id="aiInterpret-' + calcId + '"></div>'
        + '<div id="chartArea-' + calcId + '"></div>'
        + '<div id="amortArea-' + calcId + '"></div>'
        + formulaHTML
        + buildCalcFAQ(calcId, calc)
        + shareHTML
        + '<div class="feedback-bar"><span class="feedback-lbl">Was this helpful?</span>'
        + '<button class="fb-btn up" data-action="giveFeedback" data-calcid="' + calcId + '" data-value="1"><i class="fas fa-thumbs-up"></i></button>'
        + '<button class="fb-btn dn" data-action="giveFeedback" data-calcid="' + calcId + '" data-value="-1"><i class="fas fa-thumbs-down"></i></button>'
        + '<span class="fb-thanks" id="fbt-' + calcId + '">Thanks!</span></div>'
        + '<div class="trust-bar"><span class="trust-item"><i class="fas fa-check-circle"></i>Free forever</span>'
        + '<span class="trust-item"><i class="fas fa-lock"></i>Data stays on your device</span>'
        + '<span class="trust-item"><i class="fas fa-wifi"></i>Works offline (PWA)</span></div>'
        + noteHTML
        + relatedHTML
        + '</div>';

    // Auto-restore input memory and calculate
    if (loadInputMemory(calcId)) { setTimeout(function () { calculate(calcId); }, 50); }
    // URL routing
    try { window.history.pushState({ type: 'calc', id: calcId }, calc.name + ' | Calc Labz', '/' + calcId.toLowerCase().replace(/_/g, '-') + '-calculator'); } catch (e) { }
    // Focus management: move focus to calculator heading for accessibility
    setTimeout(function () {
        var h1 = document.querySelector('#mainContent h1');
        if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus(); }
    }, 100);
}

// ── DEBOUNCED AUTO-CALCULATE (Phase 3) ─────────────
var _calcTimer = {};
function debouncedCalculate(calcId) {
    clearTimeout(_calcTimer[calcId]);
    _calcTimer[calcId] = setTimeout(function () { calculate(calcId); }, 300);
}

// ── CALCULATOR ENGINE ──────────────────────────────
function getValues(calcId) {
    var calc = DB[calcId]; if (!calc) return {};
    var vals = {}, hasError = false;
    calc.inputs.forEach(function (inp) {
        var el = document.getElementById('inp_' + inp.id);
        if (!el) return;
        var errEl = document.getElementById('err_' + inp.id);
        var grpEl = document.getElementById('inpgrp_' + inp.id);
        // Clear previous validation state
        if (errEl) errEl.textContent = '';
        if (grpEl) grpEl.classList.remove('inp-invalid');
        if (el) el.classList.remove('inp-err');

        if (inp.type === 'select' || inp.type === 'text' || inp.type === 'date' || inp.type === 'time' || inp.type === 'datetime-local') {
            vals[inp.id] = el.value;
        } else {
            // Numeric input — NaN-aware parsing (Phase 2)
            var raw = el.value.trim();
            if (raw === '') {
                // Empty input: mark as invalid instead of silently using 0
                if (errEl) errEl.textContent = inp.label + ' is required';
                if (grpEl) grpEl.classList.add('inp-invalid');
                if (el) el.classList.add('inp-err');
                vals[inp.id] = NaN;
                hasError = true;
            } else {
                var num = parseFloat(raw);
                if (isNaN(num)) {
                    if (errEl) errEl.textContent = 'Enter a valid number';
                    if (grpEl) grpEl.classList.add('inp-invalid');
                    if (el) el.classList.add('inp-err');
                    vals[inp.id] = NaN;
                    hasError = true;
                } else {
                    // Range validation from input metadata
                    if (inp.min !== undefined && num < inp.min) {
                        if (errEl) errEl.textContent = 'Minimum: ' + inp.min;
                        if (grpEl) grpEl.classList.add('inp-invalid');
                        if (el) el.classList.add('inp-err');
                    }
                    if (inp.max !== undefined && num > inp.max) {
                        if (errEl) errEl.textContent = 'Maximum: ' + inp.max;
                        if (grpEl) grpEl.classList.add('inp-invalid');
                        if (el) el.classList.add('inp-err');
                    }
                    vals[inp.id] = num;
                }
            }
        }
    });
    vals._hasError = hasError;
    return vals;
}

function calculate(calcId) {
    var calc = DB[calcId]; if (!calc) return;
    // P1: Guard against calc() still being null (lazy-load in progress)
    if (!calc.calc) {
        ensureCalcLoaded(calcId, function () { calculate(calcId); });
        return;
    }
    saveUndoState(calcId);
    var vals = getValues(calcId);
    // Phase 2: Block calculation if any required numeric input is invalid
    if (vals._hasError) {
        var section = document.getElementById('res-' + calcId);
        if (section) {
            section.style.display = 'block';
            section.innerHTML = '<div class="res-grid"><div class="res-card hi" style="border-color:var(--err)"><div class="res-lbl">Validation Error</div><div class="res-val" style="color:var(--err);font-size:1rem">Please fill in all required fields with valid numbers</div></div></div>';
        }
        return;
    }
    var results; try { results = calc.calc(vals); } catch (e) { return; }
    if (!results) return;
    var section = document.getElementById('res-' + calcId);
    if (!section) return;
    section.style.display = 'block';
    section.classList.remove('pulse'); void section.offsetWidth; section.classList.add('pulse');
    var html = '<div class="res-grid">';
    if (results.main) html += '<div class="res-card hi"><div class="res-lbl">' + escHtml(results.main.label) + '</div><div class="res-val">' + escHtml(String(results.main.value)) + '</div></div>';
    if (results.secondary) results.secondary.forEach(function (r) {
        if (!r.label) return;
        html += '<div class="res-card"><div class="res-lbl">' + escHtml(r.label) + '</div><div class="res-val sm' + (r.pos ? ' pos' : '') + '">' + escHtml(String(r.value)) + '</div></div>';
    });
    html += '</div>';
    section.innerHTML = html;
    animateCounters(section);
    colourCodeResult(section, results, calcId);
    renderChart(calcId, results, vals);
    renderAmortTable(calcId, vals);
    interpretResult(calcId, results);
    // Phase 6: Category-specific disclaimers
    renderDisclaimer(calcId, calc);
    saveHistory(calcId, calc.name, results.main ? String(results.main.value) : '', vals);
    saveInputMemory(calcId);
    try { navigator.vibrate(40); } catch (e) { }
}

// ── CATEGORY DISCLAIMERS (Phase 6) ──────────────────
var _taxCalcIds = ['incometax', 'capitalgains', 'taxregime', 'tds', 'advancetax', 'taxsaving'];
function renderDisclaimer(calcId, calc) {
    var wrap = document.getElementById('calcDisclaimer-' + calcId);
    if (!wrap) return;
    var msg = '';
    if (calc.cat === 'health') {
        msg = '<div class="disclaimer disclaimer-health"><i class="fas fa-staff-snake"></i> This tool provides estimates only. Consult a qualified healthcare professional for medical advice.</div>';
    } else if (_taxCalcIds.indexOf(calcId) !== -1) {
        msg = '<div class="disclaimer disclaimer-finance"><i class="fas fa-file-invoice"></i> Results are illustrative. Consult a Chartered Accountant for tax filing decisions.</div>';
    }
    wrap.innerHTML = msg;
}

function resetCalc(calcId) {
    var calc = DB[calcId]; if (!calc) return;
    calc.inputs.forEach(function (inp) {
        var el = document.getElementById('inp_' + inp.id);
        if (el) el.value = inp.default !== undefined ? inp.default : '';
    });
    var res = document.getElementById('res-' + calcId);
    if (res) res.style.display = 'none';
    showToast('Reset to defaults');
}

// ── PRESETS ─────────────────────────────────────────
function getPresets(calcId) { try { return JSON.parse(localStorage.getItem('cp_presets_' + calcId) || '[]'); } catch (e) { return []; } }
function savePreset(calcId) {
    var name = prompt('Name this preset:'); if (!name) return;
    // Sanitize preset name: strip tags, limit length
    name = String(name).replace(/<[^>]*>/g, '').replace(/[<>"'`]/g, '').slice(0, 20);
    if (!name) { showToast('Invalid preset name', 'warning'); return; }
    var vals = getValues(calcId), presets = getPresets(calcId);
    if (presets.length >= 20) { showToast('Max 20 presets per calculator', 'warning'); return; }
    presets.push({ name: name, vals: vals });
    safeStore('cp_presets_' + calcId, JSON.stringify(presets));
    showToast('Preset "' + name + '" saved!');
}
function loadPreset(calcId, idx) {
    var presets = getPresets(calcId); if (!presets[idx]) return;
    var vals = presets[idx].vals, calc = DB[calcId];
    calc.inputs.forEach(function (inp) { var el = document.getElementById('inp_' + inp.id); if (el && vals[inp.id] !== undefined) el.value = vals[inp.id]; });
    calculate(calcId); showToast('Preset loaded!');
}

// ── UNDO ───────────────────────────────────────────
function saveUndoState(calcId) {
    var calc = DB[calcId]; if (!calc) return;
    var state = {}; calc.inputs.forEach(function (inp) { var el = document.getElementById('inp_' + inp.id); if (el) state[inp.id] = el.value; });
    if (!_undoStack[calcId]) _undoStack[calcId] = [];
    _undoStack[calcId].push(state);
    if (_undoStack[calcId].length > 20) _undoStack[calcId].shift();
}
function undoCalc(calcId) {
    var stack = _undoStack[calcId]; if (!stack || stack.length < 2) { showToast('Nothing to undo', 'warning'); return; }
    stack.pop(); var prev = stack[stack.length - 1]; var calc = DB[calcId]; if (!calc) return;
    calc.inputs.forEach(function (inp) { var el = document.getElementById('inp_' + inp.id); if (el && prev[inp.id] !== undefined) el.value = prev[inp.id]; });
    calculate(calcId); showToast('Undo applied');
}

// ── INPUT MEMORY ───────────────────────────────────
function saveInputMemory(calcId) {
    var calc = DB[calcId]; if (!calc) return; var vals = {};
    calc.inputs.forEach(function (inp) { var el = document.getElementById('inp_' + inp.id); if (el) vals[inp.id] = el.value; });
    safeStore('cp_mem_' + calcId, JSON.stringify(vals));
}
function loadInputMemory(calcId) {
    try {
        var saved = JSON.parse(localStorage.getItem('cp_mem_' + calcId) || 'null'); if (!saved) return false; var calc = DB[calcId]; if (!calc) return false;
        calc.inputs.forEach(function (inp) { var el = document.getElementById('inp_' + inp.id); if (el && saved[inp.id] !== undefined) el.value = saved[inp.id]; }); return true;
    } catch (e) { return false; }
}

// ── HISTORY ────────────────────────────────────────
function saveHistory(calcId, name, result, vals) {
    calcHistory.unshift({ calcId: calcId, name: name, result: result, vals: vals, ts: Date.now() });
    if (calcHistory.length > 50) calcHistory.pop();
    safeStore('cp_history', JSON.stringify(calcHistory));
}

// ── NOTES ──────────────────────────────────────────
function getNote(calcId) { return localStorage.getItem('cp_note_' + calcId) || ''; }
function saveNote(calcId) {
    var el = document.getElementById('note-' + calcId); if (!el) return;
    // Limit note size to 2 KB to prevent localStorage abuse
    var noteVal = el.value.slice(0, 2048);
    safeStore('cp_note_' + calcId, noteVal);
    var saved = document.getElementById('noteSaved-' + calcId);
    if (saved) { saved.style.display = 'flex'; setTimeout(function () { saved.style.display = 'none'; }, 1500); }
}

// ── ANIMATED COUNTERS ──────────────────────────────
function animateCounters(section) {
    if (!section) return;
    section.querySelectorAll('.res-val').forEach(function (el) {
        var text = el.textContent.trim();
        // Skip animation for non-numeric values (contains letters like "36y 3m 10d", "Normal ✓", etc.)
        // Only animate values that are purely numeric with optional currency prefix and unit suffix
        if (/[a-zA-Z]/.test(text.replace(/^[₹$£€]\s*/, '').replace(/[\d,.\s%+-]+/g, '').replace(/[^\x20-\x7E]/g, ''))) return;
        var num = parseFloat(text.replace(/[₹,%\s,]/g, '').replace(/[^\d.-]/g, ''));
        if (isNaN(num) || num === 0 || text.length > 22) return;
        var prefix = (text[0] === '₹' || text[0] === '$') ? text[0] : '';
        var suffix = text.replace(/^[₹$£€]?[\d,.\s]+/, '');
        var duration = 700, startTime = null;
        function step(ts) {
            if (!startTime) startTime = ts;
            var progress = Math.min((ts - startTime) / duration, 1);
            var ease = 1 - Math.pow(1 - progress, 3);
            var cur = num * ease;
            // P5: formatINR is 10-15x faster than toLocaleString('en-IN') at 60fps
            el.textContent = prefix + (Math.abs(cur) > 100 ? formatINR(Math.round(cur)) : cur.toFixed(2)) + suffix;
            if (progress < 1) requestAnimationFrame(step); else el.textContent = text;
        }
        requestAnimationFrame(step);
    });
}

// ── COLOUR CODE RESULTS ────────────────────────────
function colourCodeResult(section, results, calcId) {
    if (!results || !results.main) return;
    var card = section.querySelector('.res-card.hi'); if (!card) return;
    var val = String(results.main.value);
    if (['taxregime', 'prepayment', 'savingsgoal', 'cagr', 'stepupsip'].includes(calcId)) card.classList.add('great');
    else if (['creditcard'].includes(calcId)) card.classList.add('warn');
    else if (val.includes('❌') || val.includes('Fail')) card.classList.add('danger');
    if (calcId === 'bmi') { var bmiNum = parseFloat(val); if (bmiNum < 18.5 || bmiNum >= 30) card.classList.add('danger'); else if (bmiNum < 25) card.classList.add('great'); else card.classList.add('warn'); }
}

// ── FEEDBACK ───────────────────────────────────────
function giveFeedback(btn, calcId, val) {
    var bar = btn.parentElement;
    bar.querySelectorAll('.fb-btn').forEach(function (b) { b.style.opacity = '0.4'; b.disabled = true; });
    var thanks = document.getElementById('fbt-' + calcId); if (thanks) thanks.style.display = 'inline';
    var fb = JSON.parse(localStorage.getItem('cp_feedback') || '{}');
    fb[calcId] = (fb[calcId] || 0) + val;
    localStorage.setItem('cp_feedback', JSON.stringify(fb));
}

// ── SHARE ──────────────────────────────────────────
function doShare(type, calcName) {
    var url = window.location.href;
    if (type === 'wa') window.open('https://wa.me/?text=' + encodeURIComponent(calcName + ' — Calc Labz: ' + url));
    else if (type === 'tw') window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(calcName + ' — Calc Labz') + '&url=' + encodeURIComponent(url));
    else if (type === 'copy') { navigator.clipboard.writeText(url).then(function () { showToast('Link copied!'); }).catch(function () { showToast('Copy failed', 'warning'); }); }
}
function doNativeShare(calcName) {
    if (!navigator.share) return;
    navigator.share({ title: calcName + ' — Calc Labz', text: 'I used Calc Labz\'s ' + calcName + '. Try it free!', url: window.location.href }).catch(function () { });
}

// ── PDF ────────────────────────────────────────────
function savePDF(calcId) {
    var res = document.getElementById('res-' + calcId);
    if (!res || res.style.display === 'none') { showToast('Calculate first!', 'warning'); return; }
    if (typeof html2pdf === 'undefined') { window.print(); return; }
    var card = document.querySelector('.card');
    html2pdf().set({ margin: 10, filename: calcId + '-result.pdf', image: { type: 'jpeg', quality: 0.95 }, html2canvas: { scale: 2, useCORS: true }, jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } }).from(card).save();
    showToast('Saving PDF…');
}

// ── FORMULA TOGGLE ─────────────────────────────────
function toggleFormula(hdr) {
    var body = hdr.nextElementSibling; body.classList.toggle('open');
    var ico = hdr.querySelector('.fa-chevron-up'); if (ico) ico.style.transform = body.classList.contains('open') ? '' : 'rotate(180deg)';
}
function toggleDisclaimer(btn) { var id = btn.closest('.card').querySelector('.disclaimer-box'); if (id) id.classList.toggle('open'); }


// ── CHART ──────────────────────────────────────────
var CHART_COLORS = ['#6366f1', '#10b981', '#f59e0b', '#f0544f', '#8b5cf6', '#06b6d4'];
var _currentChartType = 'doughnut';

function renderChart(calcId, results, vals) {
    var area = document.getElementById('chartArea-' + calcId); if (!area) return;
    if (!results.chart) { area.innerHTML = ''; return; }
    var ch = results.chart;
    var chartType = ch.type || 'doughnut';
    _currentChartType = chartType;
    // Phase 5: Category-aware currency prefix (only financial calculators show ₹)
    var _calc = DB[calcId];
    var _currencyPrefix = (_calc && (_calc.cat === 'finance' || _calc.cat === 'everyday' || _calc.cat === 'construction')) ? '\u20b9' : '';

    // P4: Show shimmer placeholder immediately so chart area isn't blank during Chart.js load
    area.innerHTML = '<div class="chart-skeleton"><div class="shimmer"></div></div>';

    // Build labels/data arrays — support multi-segment
    var labels, data, colors;
    if (ch.labels && ch.data) {
        labels = ch.labels;
        data = ch.data;
    } else {
        labels = [ch.lA, ch.lB];
        data = [ch.a, ch.b];
    }
    colors = CHART_COLORS.slice(0, data.length);

    // Compute total for center label
    var total = data.reduce(function (s, v) { return s + v; }, 0);
    var centerHTML = '';
    if (chartType === 'doughnut' || chartType === 'pie') {
        centerHTML = '<div class="chart-center-label"><div class="ccl-val">' + _currencyPrefix + formatINR(Math.round(total)) + '</div><div class="ccl-lbl">Total</div></div>';
    }

    area.innerHTML = '<div class="chart-wrap"><div class="chart-title"><span><i class="fas fa-chart-pie" style="color:var(--p)"></i> Breakdown</span>'
        + '<div class="chart-toggle-wrap">'
        + '<button class="chart-toggle' + (chartType === 'doughnut' ? ' active' : '') + '" data-action="switchChartType" data-calcid="' + calcId + '" data-type="doughnut">○ Doughnut</button>'
        + '<button class="chart-toggle' + (chartType === 'bar' ? ' active' : '') + '" data-action="switchChartType" data-calcid="' + calcId + '" data-type="bar">▁ Bar</button>'
        + '</div></div>'
        + '<div class="chart-canvas-wrap"><canvas id="mainChart" width="300" height="' + (chartType === 'bar' ? '180' : '200') + '"></canvas>' + (chartType === 'doughnut' ? centerHTML : '') + '</div></div>';

    // Timeline chart
    if (ch.timeline) {
        area.innerHTML += '<div class="timeline-wrap"><div class="chart-title"><span><i class="fas fa-chart-line" style="color:var(--acc2)"></i> Growth Over Time</span></div>'
            + '<canvas id="timelineChart" width="400" height="180"></canvas></div>';
    }

    loadChartJS(function () {
        var ctx = document.getElementById('mainChart');
        if (!ctx) return;
        if (activeChart) { activeChart.destroy(); activeChart = null; }
        var isDark = !document.body.classList.contains('light');
        var gridColor = isDark ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.06)';
        var txtColor = isDark ? '#a1a1aa' : '#52525b';

        var chartConfig = {
            type: _currentChartType,
            data: {
                labels: labels,
                datasets: [{ data: data, backgroundColor: colors, borderWidth: 0, borderRadius: chartType === 'bar' ? 6 : 0 }]
            },
            options: {
                responsive: true, maintainAspectRatio: true,
                animation: { duration: 800, easing: 'easeOutQuart' },
                plugins: {
                    legend: { position: 'bottom', labels: { color: txtColor, padding: 14, usePointStyle: true, pointStyleWidth: 10 } },
                    tooltip: {
                        backgroundColor: isDark ? '#27272a' : '#ffffff',
                        titleColor: isDark ? '#f4f4f5' : '#18181b',
                        bodyColor: isDark ? '#a1a1aa' : '#52525b',
                        borderColor: isDark ? 'rgba(255,255,255,.1)' : 'rgba(0,0,0,.1)',
                        borderWidth: 1, cornerRadius: 8, padding: 10,
                        callbacks: { label: function (ctx) { return ctx.label + ': ' + _currencyPrefix + formatINR(Math.round(ctx.raw)); } }
                    }
                }
            }
        };

        if (_currentChartType === 'doughnut') {
            chartConfig.options.cutout = '65%';
        }
        if (_currentChartType === 'bar') {
            chartConfig.options.indexAxis = 'y';
            chartConfig.options.scales = {
                x: { grid: { color: gridColor }, ticks: { color: txtColor, callback: function (v) { return _currencyPrefix + (v >= 100000 ? (v / 100000).toFixed(1) + 'L' : v >= 1000 ? (v / 1000).toFixed(0) + 'K' : v); } } },
                y: { grid: { display: false }, ticks: { color: txtColor } }
            };
            chartConfig.options.plugins.legend.display = false;
        }

        activeChart = new Chart(ctx, chartConfig);

        // Timeline chart
        if (ch.timeline) {
            var tCtx = document.getElementById('timelineChart');
            if (!tCtx) return;
            if (_advChart) { _advChart.destroy(); _advChart = null; }
            _advChart = new Chart(tCtx, {
                type: 'line',
                data: {
                    labels: ch.timeline.labels,
                    datasets: ch.timeline.datasets.map(function (ds, i) {
                        return {
                            label: ds.label, data: ds.data,
                            borderColor: CHART_COLORS[i % CHART_COLORS.length],
                            backgroundColor: CHART_COLORS[i % CHART_COLORS.length] + '18',
                            fill: ds.fill !== undefined ? ds.fill : true,
                            tension: 0.4, pointRadius: 3, pointHoverRadius: 6, borderWidth: 2
                        };
                    })
                },
                options: {
                    responsive: true, maintainAspectRatio: true,
                    animation: { duration: 1000, easing: 'easeOutQuart' },
                    scales: {
                        x: { grid: { color: gridColor }, ticks: { color: txtColor } },
                        y: { grid: { color: gridColor }, ticks: { color: txtColor, callback: function (v) { return _currencyPrefix + (v >= 100000 ? (v / 100000).toFixed(1) + 'L' : v >= 1000 ? (v / 1000).toFixed(0) + 'K' : v); } } }
                    },
                    plugins: {
                        legend: { labels: { color: txtColor, usePointStyle: true, padding: 14 } },
                        tooltip: {
                            backgroundColor: isDark ? '#27272a' : '#ffffff',
                            titleColor: isDark ? '#f4f4f5' : '#18181b',
                            bodyColor: isDark ? '#a1a1aa' : '#52525b',
                            borderColor: isDark ? 'rgba(255,255,255,.1)' : 'rgba(0,0,0,.1)',
                            borderWidth: 1, cornerRadius: 8, padding: 10,
                            callbacks: { label: function (ctx) { return ctx.dataset.label + ': ' + _currencyPrefix + formatINR(Math.round(ctx.raw)); } }
                        }
                    }
                }
            });
        }
    });
}

function switchChartType(calcId, type) {
    _currentChartType = type;
    // Re-trigger calculation to re-render with new chart type
    var calc = DB[calcId]; if (!calc) return;
    var vals = getValues(calcId);
    var results; try { results = calc.calc(vals); } catch (e) { return; }
    if (!results || !results.chart) return;
    results.chart.type = type;
    renderChart(calcId, results, vals);
}

function loadChartJS(cb) {
    if (typeof Chart !== 'undefined') { cb(); return; }
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js';
    s.onload = cb; document.head.appendChild(s);
}

// ── AMORTIZATION TABLE ─────────────────────────────
function renderAmortTable(calcId, vals) {
    var area = document.getElementById('amortArea-' + calcId); if (!area) return;
    if (!['emi', 'mortgage', 'carloan'].includes(calcId)) { area.innerHTML = ''; return; }
    var P = vals.principal || vals.amount || 0, r, n;
    if (calcId === 'emi') { r = vals.rate / 12 / 100; n = vals.tenure; }
    else if (calcId === 'mortgage') { r = vals.rate / 12 / 100; n = vals.term * 12; P = vals.amount; }
    else { r = vals.rate / 12 / 100; n = vals.tenure * 12; P = vals.amount; }
    if (!P || !r || !n || P <= 0) return;
    var emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    var rows = '', bal = P, totalInt = 0, totalPrin = 0;
    for (var i = 1; i <= Math.min(n, 360); i++) {
        var interest = bal * r, prinPay = emi - interest;
        bal -= prinPay; totalInt += interest; totalPrin += prinPay;
        if (i <= 60 || i % 12 === 0 || i === Math.min(n, 360)) {
            rows += '<tr><td>' + i + '</td><td>\u20b9' + Math.round(emi).toLocaleString() + '</td><td>\u20b9' + Math.round(prinPay).toLocaleString() + '</td><td>\u20b9' + Math.round(interest).toLocaleString() + '</td><td>\u20b9' + Math.max(0, Math.round(bal)).toLocaleString() + '</td></tr>';
        }
    }
    area.innerHTML = '<div class="amort-wrap"><h3 style="font-size:.88rem;font-weight:700;margin-bottom:8px"><i class="fas fa-table" style="color:var(--p);margin-right:6px"></i>Amortization Schedule</h3>'
        + '<div style="max-height:300px;overflow-y:auto"><table class="amort-table"><thead><tr><th>Month</th><th>EMI</th><th>Principal</th><th>Interest</th><th>Balance</th></tr></thead><tbody>' + rows + '</tbody></table></div>'
        + '<div class="amort-actions"><button class="btn btn-s" data-action="exportAmortCSV" data-calcid="' + calcId + '"><i class="fas fa-download"></i> CSV</button></div></div>';
}
function exportAmortCSV(calcId) {
    var table = document.querySelector('#amortArea-' + calcId + ' table');
    if (!table) return;
    var csv = ''; table.querySelectorAll('tr').forEach(function (row) {
        var cols = []; row.querySelectorAll('th,td').forEach(function (td) { cols.push(td.textContent.replace(/,/g, '')); });
        csv += cols.join(',') + '\n';
    });
    var blob = new Blob([csv], { type: 'text/csv' });
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = calcId + '-amortization.csv';
    document.body.appendChild(a); a.click(); a.remove();
    showToast('CSV downloaded!');
}

// ── AI INTERPRETATION ──────────────────────────────
function interpretResult(calcId, results) {
    var wrap = document.getElementById('aiInterpret-' + calcId); if (!wrap) return;
    if (!results || !results.main) { wrap.innerHTML = ''; return; }
    var val = String(results.main.value), label = results.main.label, msg = '';
    if (calcId === 'emi') msg = 'Your monthly EMI is ' + val + '. Consider prepaying to save on interest.';
    else if (calcId === 'sip') msg = 'Your investment could grow to ' + val + '. Starting early maximizes compounding.';
    else if (calcId === 'bmi') {
        var bv = parseFloat(val);
        if (bv < 18.5) msg = 'Your BMI is low. Consider consulting a nutritionist.';
        else if (bv < 25) msg = 'Great! Your BMI is in the healthy range.';
        else msg = 'Your BMI suggests you may benefit from diet and exercise changes.';
    }
    else if (calcId === 'gst') msg = 'The total cost including GST is ' + val + '.';
    if (msg) wrap.innerHTML = '<div class="result-ai-wrap"><i class="fas fa-lightbulb"></i>' + msg + '</div>';
    else wrap.innerHTML = '';
}

// u{2500}u{2500} FAQ BUILDER u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}u{2500}
// RICH_FAQS + BLOG_CAT_COLORS + BLOG_CAT_ICONS moved to faq-data.js

function buildCalcFAQ(calcId, calc) {
    var faqs = RICH_FAQS[calcId] || [];
    // Fallback to generic FAQs if no rich FAQs defined
    if (!faqs.length) {
        faqs = [
            { q: 'What is a ' + calc.name + '?', a: calc.desc + '. This tool provides instant, accurate results with no signup required.' },
            { q: 'How to use this calculator?', a: 'Enter your values in the input fields above. Results update automatically as you type, or click the Calculate button for a full breakdown with charts.' }
        ];
        if (calc.tips && calc.tips.length) faqs.push({ q: 'Any tips for better results?', a: calc.tips.join('. ') + '.' });
        faqs.push({ q: 'Is this calculator free?', a: 'Yes, 100% free forever. No signup required — your data stays on your device. Calc Labz works offline as a PWA — install it for instant access anytime. We show ads to keep the service free.' });
    }

    // Inject FAQPage JSON-LD schema for SEO (deduplicated with updateMeta)
    removeSchema('jsonld-faq');
    var faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(function (f) {
            return { '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } };
        })
    };
    var schemaEl = document.createElement('script');
    schemaEl.type = 'application/ld+json'; schemaEl.id = 'jsonld-faq';
    schemaEl.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(schemaEl);

    return '<div class="calc-faq-wrap"><div class="calc-faq-hdr"><i class="fas fa-circle-question"></i>Frequently Asked Questions<span class="faq-count">' + faqs.length + '</span></div>'
        + faqs.map(function (f, i) {
            return '<div class="calc-faq-item" id="faq-' + calcId + '-' + i + '"><button class="calc-faq-q" data-action="toggleFAQ"><span>' + escHtml(f.q) + '</span><i class="fas fa-chevron-down"></i></button><div class="calc-faq-a">' + escHtml(f.a) + '</div></div>';
        }).join('') + '</div>';
}
function toggleFAQ(btn) { btn.parentElement.classList.toggle('open'); }

// ── RELATED CALCS ──────────────────────────────────
function getRelated(catKey, calcId) {
    var list = (CAT_LIST[catKey] || []).filter(function (id) { return id !== calcId; }).slice(0, 4);
    return list.map(function (id) { return { id: id, cat: catKey }; });
}

// ── SEARCH ─────────────────────────────────────────
function handleSearch(query) {
    clearTimeout(searchTimer);
    var drop = document.getElementById('srDrop');
    var clear = document.getElementById('srClear');
    if (!query || query.length < 2) { drop.classList.remove('open'); drop.innerHTML = ''; if (clear) clear.style.display = 'none'; return; }
    if (clear) clear.style.display = 'block';
    searchTimer = setTimeout(function () {
        var q = query.toLowerCase();
        var results = Object.entries(DB).filter(function (e) {
            return e[1].name.toLowerCase().includes(q) || e[1].desc.toLowerCase().includes(q) || e[0].includes(q);
        }).slice(0, 8);
        if (!results.length) { drop.innerHTML = '<div class="sr-empty">No calculators found for "' + escHtml(query) + '"</div>'; drop.classList.add('open'); return; }
        drop.innerHTML = results.map(function (e) {
            var id = e[0], c = e[1], cat = CATS[c.cat] || {};
            return '<div class="sr-item" data-action="openCalcAndClearSearch" data-cat="' + c.cat + '" data-id="' + id + '">'
                + '<div class="sr-icon" style="background:' + (cat.color || 'var(--p)') + '"><i class="fas ' + c.icon + '"></i></div>'
                + '<div><div class="sr-name">' + c.name + '</div><div class="sr-cat">' + (cat.name || c.cat) + '</div></div></div>';
        }).join('');
        drop.classList.add('open');
    }, 150);
}
function clearSearch() {
    var input = document.getElementById('srInput');
    if (input) input.value = '';
    var drop = document.getElementById('srDrop');
    if (drop) { drop.classList.remove('open'); drop.innerHTML = ''; }
    var clear = document.getElementById('srClear');
    if (clear) clear.style.display = 'none';
}
function handleHeroSearch(q) {
    if (q.length >= 2) { var input = document.getElementById('srInput'); if (input) input.value = q; handleSearch(q); }
}

// ── DASHBOARD ──────────────────────────────────────
function showDashboard() {
    setQBtn('qDash'); setMobileNav('mnavDash'); closeSidebar(); updateSidebarActive('qDash');
    document.title = 'Dashboard | Calc Labz';
    setOG('og:title', 'Dashboard | Calc Labz');
    setOG('og:type', 'website');
    var histHTML = calcHistory.slice(0, 10).map(function (h) {
        return '<div class="hist-item"><span class="hist-name">' + escHtml(h.name) + '</span><span class="hist-val">' + escHtml(h.result) + '</span><span class="hist-time">' + formatAgo(h.ts) + '</span>'
            + '<button class="hist-reopen" data-action="openCalc" data-cat="' + (DB[h.calcId] ? DB[h.calcId].cat : 'math') + '" data-id="' + h.calcId + '">Open</button></div>';
    }).join('') || '<p style="color:var(--txt2);padding:12px">No history yet.</p>';

    var totalCalcs = Object.keys(DB).length, favCount = favorites.length, histCount = calcHistory.length;
    document.getElementById('mainContent').innerHTML =
        '<div class="card"><div class="cat-hdr"><div class="cat-ico-lg" style="background:linear-gradient(135deg,var(--p),var(--p2))"><i class="fas fa-chart-line"></i></div>'
        + '<div class="cat-meta"><h1>Dashboard</h1><p>Your activity overview</p></div></div></div>'
        + '<div class="dash-grid" style="margin-top:16px">'
        + '<div class="dash-card"><h3><i class="fas fa-calculator"></i>Quick Stats</h3>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
        + '<div class="stat"><div class="stat-n">' + totalCalcs + '</div><div class="stat-l">Total Calcs</div></div>'
        + '<div class="stat"><div class="stat-n">' + favCount + '</div><div class="stat-l">Favorites</div></div>'
        + '<div class="stat"><div class="stat-n">' + histCount + '</div><div class="stat-l">Calculations</div></div>'
        + '<div class="stat"><div class="stat-n">' + Object.keys(CATS).length + '</div><div class="stat-l">Categories</div></div></div></div>'
        + '<div class="dash-card"><h3><i class="fas fa-clock-rotate-left"></i>Recent History</h3>' + histHTML + '</div>'
        + '<div class="dash-card"><h3><i class="fas fa-trash"></i>Data Management</h3>'
        + '<button class="btn btn-s" data-action="clearHistory"><i class="fas fa-eraser"></i> Clear History</button>'
        + '<button class="btn btn-s" style="margin-top:8px" data-action="clearAllData"><i class="fas fa-trash"></i> Clear All Data</button></div>'
        + '</div>';
}

// ── BLOG ───────────────────────────────────────────
// BLOG_CAT_COLORS and BLOG_CAT_ICONS moved to faq-data.js

function showBlogSection(filterCat) {
    setQBtn('qBlog'); closeSidebar(); updateSidebarActive('qBlog');
    var blogTitle = (filterCat || 'Calculator') + ' Guides & Articles | Calc Labz';
    var blogDesc = 'Free in-depth guides on ' + (filterCat || 'finance, health, math and more') + '. Expert articles with calculator tools by Calc Labz.';
    document.title = blogTitle;
    setMeta('description', blogDesc);
    setOG('og:title', blogTitle);
    setOG('og:description', blogDesc);
    setOG('og:type', 'website');
    setOG('twitter:title', blogTitle);
    setOG('twitter:description', blogDesc);

    var cats = ['All'];
    BLOG_POSTS.forEach(function (p) { if (cats.indexOf(p.cat) === -1) cats.push(p.cat); });
    var filterPills = cats.map(function (c) {
        var active = (!filterCat && c === 'All') || filterCat === c ? ' active' : '';
        return '<button class="blog-filter-pill' + active + '" data-action="showBlogSection" data-filter="' + (c === 'All' ? '' : c) + '">' + c + '</button>';
    }).join('');

    var filtered = filterCat ? BLOG_POSTS.filter(function (p) { return p.cat === filterCat; }) : BLOG_POSTS;
    var cards = filtered.map(function (p) {
        var catColor = BLOG_CAT_COLORS[p.cat] || 'var(--p)';
        var catIcon = BLOG_CAT_ICONS[p.cat] || 'fa-file-alt';
        return '<div class="blog-card" data-action="showBlogPost" data-id="' + p.id + '">'
            + '<div class="blog-card-hdr" style="background:linear-gradient(135deg,' + catColor + ',' + catColor + '88)"></div>'
            + '<div class="blog-meta-row"><span class="blog-read-badge"><i class="fas fa-clock"></i>' + (p.readTime || '5 min') + '</span><span><i class="fas fa-calendar"></i>' + (p.date || '2025') + '</span></div>'
            + '<div class="blog-cat"><i class="fas ' + catIcon + '"></i> ' + escHtml(p.cat) + '</div>'
            + '<div class="blog-title">' + escHtml(p.title) + '</div>'
            + '<div class="blog-desc">' + escHtml(p.desc) + '</div>'
            + '<div class="blog-link"><i class="fas fa-arrow-right"></i> Read guide</div></div>';
    }).join('');

    var uniqueCats = cats.length - 1;
    document.getElementById('mainContent').innerHTML =
        '<div class="card"><div class="cat-hdr"><div class="cat-ico-lg" style="background:linear-gradient(135deg,var(--p),var(--p2))"><i class="fas fa-newspaper"></i></div>'
        + '<div class="cat-meta"><h1>Calculator Guides & Blog</h1><p>' + BLOG_POSTS.length + ' in-depth articles on finance, health, math & more</p></div></div>'
        + '<div class="blog-stats-bar"><div class="blog-stat"><div class="blog-stat-n">' + BLOG_POSTS.length + '</div><div class="blog-stat-l">Articles</div></div>'
        + '<div class="blog-stat"><div class="blog-stat-n">' + uniqueCats + '</div><div class="blog-stat-l">Categories</div></div>'
        + '<div class="blog-stat"><div class="blog-stat-n">Free</div><div class="blog-stat-l">Always</div></div>'
        + '<div class="blog-stat"><div class="blog-stat-n">✓</div><div class="blog-stat-l">SEO Rich</div></div></div>'
        + '<div class="blog-filters">' + filterPills + '</div>'
        + '<div class="blog-grid">' + cards + '</div></div>';
}
function showBlogPost(postId) {
    var bc = BLOG_CONTENT[postId]; if (!bc) return;
    var bp = BLOG_POSTS.find(function (p) { return p.id === postId; });
    closeSidebar(); updateSidebarActive('qBlog');
    var pageTitle = bc.title + ' | Calc Labz Blog';
    var pageDesc = bp ? bp.desc + ' Read the complete guide on Calc Labz.' : bc.title;
    document.title = pageTitle;
    setMeta('description', pageDesc);
    // Open Graph — article type for blog posts
    setOG('og:type', 'article');
    setOG('og:title', pageTitle);
    setOG('og:description', pageDesc);
    setOG('twitter:title', pageTitle);
    setOG('twitter:description', pageDesc);
    // Breadcrumb schema
    injectBreadcrumbSchema([
        { name: 'Home', url: window.location.origin + '/' },
        { name: 'Blog', url: window.location.origin + '/blog/' },
        { name: bc.title, url: window.location.href }
    ]);

    // Push SEO-friendly URL
    pushBlogUrl(postId);

    // Article JSON-LD Schema for SEO
    var existArticle = document.getElementById('jsonld-article'); if (existArticle) existArticle.remove();
    var articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: bc.title, description: bp ? bp.desc : '', datePublished: '2026-01-15', dateModified: '2026-04-01', author: { '@type': 'Organization', name: 'Calc Labz Team' }, publisher: { '@type': 'Organization', name: 'Calc Labz' }, mainEntityOfPage: { '@type': 'WebPage', '@id': window.location.href } };
    var aSchEl = document.createElement('script'); aSchEl.type = 'application/ld+json'; aSchEl.id = 'jsonld-article'; aSchEl.textContent = JSON.stringify(articleSchema); document.head.appendChild(aSchEl);

    // Build Table of Contents from h2 tags
    var bodyHTML = bc.body;
    var headings = bodyHTML.match(/<h2>(.*?)<\/h2>/g) || [];
    var tocHTML = '';
    if (headings.length > 2) {
        var tocItems = headings.map(function (h, i) {
            var text = escHtml(h.replace(/<\/?h2>/g, ''));
            return '<li data-action="scrollToToc" data-target="toc-' + i + '">' + text + '</li>';
        });
        tocHTML = '<div class="article-toc"><div class="article-toc-title"><i class="fas fa-list"></i> Table of Contents</div><ol>' + tocItems.join('') + '</ol></div>';
        var hIdx = 0;
        bodyHTML = bodyHTML.replace(/<h2>/g, function () {
            return '<h2 id="toc-' + (hIdx++) + '">';
        });
    }

    // Sanitize blog body HTML before injection to strip on* handlers / javascript: URIs
    var safeBody = sanitizeHTML(bodyHTML);

    // Related posts (same category first)
    var relatedPosts = [];
    if (bp) {
        relatedPosts = BLOG_POSTS.filter(function (p) { return p.id !== postId && p.cat === bp.cat; }).slice(0, 3);
        if (relatedPosts.length < 3) {
            var more = BLOG_POSTS.filter(function (p) { return p.id !== postId && p.cat !== bp.cat; }).slice(0, 3 - relatedPosts.length);
            relatedPosts = relatedPosts.concat(more);
        }
    }
    var relatedHTML = '';
    if (relatedPosts.length) {
        var relCards = relatedPosts.map(function (p) {
            var catColor = BLOG_CAT_COLORS[p.cat] || 'var(--p)';
            var catIcon = BLOG_CAT_ICONS[p.cat] || 'fa-file-alt';
            return '<div class="blog-card" data-action="showBlogPost" data-id="' + p.id + '">'
                + '<div class="blog-card-hdr" style="background:linear-gradient(135deg,' + catColor + ',' + catColor + '88)"></div>'
                + '<div class="blog-cat"><i class="fas ' + catIcon + '"></i> ' + escHtml(p.cat) + '</div>'
                + '<div class="blog-title">' + escHtml(p.title) + '</div>'
                + '<div class="blog-link"><i class="fas fa-arrow-right"></i> Read guide</div></div>';
        }).join('');
        relatedHTML = '<div class="related-blogs"><h3><i class="fas fa-book-open"></i>You May Also Like</h3><div class="blog-grid related-blog-grid">' + relCards + '</div></div>';
    }

    var shareHTML = '<div class="share-bar"><span class="share-lbl">Share this article:</span>'
        + '<button class="share-btn wa" data-action="doShare" data-channel="wa" data-name="' + escHtml(bc.title) + '"><i class="fab fa-whatsapp"></i>WhatsApp</button>'
        + '<button class="share-btn tw" data-action="doShare" data-channel="tw" data-name="' + escHtml(bc.title) + '"><i class="fab fa-twitter"></i>Twitter</button>'
        + '<button class="share-btn" data-action="doShare" data-channel="copy" data-name="' + escHtml(bc.title) + '"><i class="fas fa-link"></i>Copy Link</button></div>';

    document.getElementById('mainContent').innerHTML =
        '<div class="article-wrap"><div class="crumb"><a data-action="showHome" role="button" tabindex="0">Home</a> <span>\u203a</span> <a data-action="showBlogSection" role="button" tabindex="0">Blog</a> <span>\u203a</span> ' + escHtml(bc.title) + '</div>'
        + '<h1>' + escHtml(bc.title) + '</h1>'
        + '<div class="article-meta"><span><i class="fas fa-calendar"></i>' + escHtml(bc.meta.date) + '</span><span><i class="fas fa-clock"></i>' + escHtml(bc.meta.readTime) + ' read</span><span><i class="fas fa-user"></i>' + escHtml(bc.meta.author) + '</span>' + (bp ? '<span class="article-cat-badge" style="background:' + (BLOG_CAT_COLORS[bp.cat] || 'var(--p)') + '20;color:' + (BLOG_CAT_COLORS[bp.cat] || 'var(--p)') + '"><i class="fas ' + (BLOG_CAT_ICONS[bp.cat] || 'fa-tag') + '"></i>' + escHtml(bp.cat) + '</span>' : '') + '</div>'
        + tocHTML
        + '<div class="article-body">' + safeBody + '</div>'
        + (bc.cta ? '<div class="article-cta"><span style="flex:1"><strong>Ready to calculate?</strong> ' + escHtml(bc.cta.text) + '</span><button class="btn btn-p" data-action="openCalc" data-cat="' + escHtml(bc.cta.cat) + '" data-id="' + escHtml(bc.cta.calc) + '" ><i class="fas fa-calculator"></i> Open Calculator</button></div>' : '')
        + shareHTML
        + relatedHTML
        + '</div>';
}

// ── COMPARISON MODE ────────────────────────────────
function openCmpMode(catKey, calcId) {
    showToast('Compare mode: coming in next update', 'warning');
}

// ── COMMAND PALETTE ────────────────────────────────
function openCmdPalette() {
    var overlay = document.getElementById('cmdOverlay');
    overlay.classList.add('open');
    var input = document.getElementById('cmdInput');
    input.value = ''; input.focus(); filterCmd('');
}
function closeCmdPalette() {
    document.getElementById('cmdOverlay').classList.remove('open');
}
function filterCmd(q) {
    var list = document.getElementById('cmdList'); if (!list) return;
    q = q.toLowerCase();
    var items = Object.entries(DB).filter(function (e) {
        return !q || e[1].name.toLowerCase().includes(q) || e[0].includes(q);
    }).slice(0, 12);
    var actItems = [
        { name: 'Home', icon: 'fa-house', action: 'showHome()' },
        { name: 'Dashboard', icon: 'fa-chart-line', action: 'showDashboard()' },
        { name: 'Favorites', icon: 'fa-star', action: 'showFavorites()' },
        { name: 'Toggle Theme', icon: 'fa-moon', action: 'toggleTheme()' },
        { name: 'Blog', icon: 'fa-newspaper', action: 'showBlogSection()' }
    ].filter(function (a) { return !q || a.name.toLowerCase().includes(q); });
    var html = '';
    if (actItems.length) {
        html += '<div class="cmd-section">Actions</div>';
        actItems.forEach(function (a) {
            html += '<div class="cmd-item" data-action="cmdAction" data-cmd="' + a.name + '"><div class="ci-ico" style="background:var(--p)"><i class="fas ' + a.icon + '"></i></div><div class="ci-name">' + a.name + '</div><i class="fas fa-arrow-right ci-arrow"></i></div>';
        });
    }
    if (items.length) {
        html += '<div class="cmd-section">Calculators</div>';
        items.forEach(function (e) {
            var id = e[0], c = e[1], cat = CATS[c.cat] || {};
            html += '<div class="cmd-item" data-action="cmdCalc" data-cat="' + c.cat + '" data-id="' + id + '"><div class="ci-ico" style="background:' + (cat.color || 'var(--p)') + '"><i class="fas ' + c.icon + '"></i></div><div><div class="ci-name">' + c.name + '</div><div class="ci-cat">' + (cat.name || '') + '</div></div><i class="fas fa-arrow-right ci-arrow"></i></div>';
        });
    }
    if (!html) html = '<div class="cmd-empty">No results for "' + escHtml(q) + '"</div>';
    list.innerHTML = html;
}

// ── SHORTCUT MODAL ─────────────────────────────────
function toggleShortcutModal() {
    document.getElementById('shortcutModal').classList.toggle('open');
}

// ── KEYBOARD SHORTCUTS ─────────────────────────────
document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openCmdPalette(); return; }
    if (e.key === 'Escape') { closeCmdPalette(); document.getElementById('shortcutModal').classList.remove('open'); return; }
    if (e.key === '?' && e.shiftKey) { e.preventDefault(); toggleShortcutModal(); return; }
    if (e.key === 'h') showHome();
    else if (e.key === 'd') showDashboard();
    else if (e.key === 'f') showFavorites();
    else if (e.key === 't') toggleTheme();
    else if (e.key === '/') { e.preventDefault(); var si = document.getElementById('srInput'); if (si) si.focus(); }
});

// ── META / SEO ─────────────────────────────────────
// Curated HowTo steps for high-traffic calculators.
// Richer steps improve Google rich snippet eligibility.
var HOWTO_STEPS = {
    emi: {
        name: 'How to Calculate Loan EMI', steps: [
            'Enter the loan principal amount (e.g. ₹50,00,000 for a home loan)',
            'Enter the annual interest rate offered by your bank (e.g. 8.5%)',
            'Enter the loan tenure in months (e.g. 240 for a 20-year home loan)',
            'Click Calculate to see your monthly EMI, total interest paid, and full amortization schedule'
        ]
    },
    sip: {
        name: 'How to Calculate SIP Returns', steps: [
            'Enter your monthly SIP investment amount (e.g. ₹5,000)',
            'Enter the expected annual return rate (e.g. 12% for equity mutual funds)',
            'Enter the investment duration in years (e.g. 10 or 20 years)',
            'Click Calculate to see total corpus, wealth gained, and a year-wise growth chart'
        ]
    },
    gst: {
        name: 'How to Calculate GST', steps: [
            'Enter the net price — the amount before adding GST',
            'Select the applicable GST rate (5%, 12%, 18%, or 28%)',
            'Click Calculate to see GST amount, CGST, SGST, IGST breakdown, and total price'
        ]
    },
    bmi: {
        name: 'How to Calculate BMI', steps: [
            'Enter your weight in kilograms (e.g. 70 kg)',
            'Enter your height in centimetres (e.g. 170 cm)',
            'Click Calculate to see your BMI value, health category, and personalised interpretation'
        ]
    },
    incometax: {
        name: 'How to Calculate Income Tax', steps: [
            'Enter your annual gross income from salary or business',
            'Select your age group (below 60, senior citizen, or super senior citizen)',
            'Enter deductions under 80C, 80D, HRA, NPS and standard deduction',
            'Click Calculate to see taxable income, slab-wise tax breakdown, and total tax including cess'
        ]
    },
    compoundinterest: {
        name: 'How to Calculate Compound Interest', steps: [
            'Enter the principal amount you are investing or borrowing',
            'Enter the annual interest rate',
            'Select the compounding frequency (daily, monthly, quarterly, or annually)',
            'Enter the time period in years',
            'Click Calculate to see the final amount, interest earned, and a year-wise growth chart'
        ]
    },
    ppf: {
        name: 'How to Calculate PPF Maturity Amount', steps: [
            'Enter your annual PPF contribution (maximum ₹1,50,000 per year)',
            'The current PPF interest rate (7.1%) is pre-filled — update if changed by the government',
            'Enter the number of years (minimum 15, extendable in 5-year blocks)',
            'Click Calculate to see total maturity amount, interest earned, and year-wise balance'
        ]
    },
    taxregime: {
        name: 'How to Compare Old vs New Tax Regime', steps: [
            'Enter your annual gross income',
            'Enter your total deductions under the old regime (80C, HRA, NPS, home loan interest, etc.)',
            'Click Calculate to instantly see tax payable under both regimes and which saves you more money'
        ]
    }
};

function injectHowToSchema(calcId, calc) {
    removeSchema('jsonld-howto');
    if (!calc || !calc.inputs || !calc.inputs.length) return;
    var howtoData = HOWTO_STEPS[calcId];
    var schemaName, steps;
    if (howtoData) {
        schemaName = howtoData.name;
        steps = howtoData.steps.map(function (text) {
            return { '@type': 'HowToStep', 'text': text };
        });
    } else {
        schemaName = 'How to Use ' + calc.name;
        steps = calc.inputs.map(function (inp) {
            return { '@type': 'HowToStep', 'text': 'Enter your ' + inp.label };
        });
        steps.push({ '@type': 'HowToStep', 'text': 'Click the Calculate button to get instant results' });
    }
    var schema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': schemaName,
        'description': calc.desc,
        'step': steps
    };
    var el = document.createElement('script');
    el.type = 'application/ld+json'; el.id = 'jsonld-howto';
    el.textContent = JSON.stringify(schema);
    document.head.appendChild(el);
}
function updateMeta(name, desc, catKey, calcId) {
    var pageTitle = name + ' — Free Online Calculator | Calc Labz';
    var pageDesc = name + ': ' + desc + '. Free, instant, no signup required.';
    var pageUrl = window.location.origin + '/' + calcId.toLowerCase().replace(/_/g, '-') + '-calculator';

    // Title + meta description
    document.title = pageTitle;
    setMeta('description', pageDesc);

    // Open Graph
    setOG('og:title', pageTitle);
    setOG('og:description', pageDesc);
    setOG('og:url', pageUrl);
    setOG('og:type', 'website');

    // Twitter Card
    setOG('twitter:title', pageTitle);
    setOG('twitter:description', pageDesc);

    // Canonical
    setCanon(pageUrl);

    // BreadcrumbList JSON-LD — use clean category URLs, not query params
    var cat = CATS[catKey] || {};
    injectBreadcrumbSchema([
        { name: 'Home', url: window.location.origin + '/' },
        { name: (cat.name || catKey) + ' Calculators', url: window.location.origin + '/' + catKey + '-calculators' },
        { name: name, url: pageUrl }
    ]);

    // SoftwareApplication JSON-LD
    removeSchema('jsonld-calc');
    var schema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': name,
        'description': pageDesc,
        'applicationCategory': 'UtilitiesApplication',
        'applicationSubCategory': 'Calculator',
        'operatingSystem': 'All',
        'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'INR' }
    };
    var scriptEl = document.createElement('script');
    scriptEl.type = 'application/ld+json'; scriptEl.id = 'jsonld-calc';
    scriptEl.textContent = JSON.stringify(schema);
    document.head.appendChild(scriptEl);

    // HowTo JSON-LD (enables rich snippets in Google Search)
    injectHowToSchema(calcId, DB[calcId]);
}

// ── PWA ────────────────────────────────────────────
var deferredPrompt;
window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault(); deferredPrompt = e;
    var bar = document.getElementById('pwaInstallBar');
    if (bar) bar.classList.add('show');
});
function installPWA() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(function (r) {
        var bar = document.getElementById('pwaInstallBar');
        if (bar) bar.classList.remove('show');
        deferredPrompt = null;
        if (r.outcome === 'accepted') showToast('Installing Calc Labz!');
    });
}

// ── ROUTE HANDLER ──────────────────────────────────
// Safe allowlist check — only accept IDs that are own-properties of DB / BLOG_CONTENT
function isSafeCalcId(id) {
    return typeof id === 'string' && /^[a-z0-9_-]{1,50}$/.test(id) && Object.prototype.hasOwnProperty.call(DB, id);
}
function isSafeBlogId(id) {
    return typeof id === 'string' && /^[a-z0-9_-]{1,80}$/.test(id) && Object.prototype.hasOwnProperty.call(BLOG_CONTENT, id);
}

function handleRoute() {
    // Normalize path: strip trailing slash for consistent matching (except root '/')
    var rawPath = window.location.pathname;
    var path = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : rawPath;
    var params = new URLSearchParams(window.location.search);
    var calcId = params.get('calc');


    // Pre-rendered static pages — preserve existing HTML content (check first to avoid overwrite)
    if (path === '/contact' || path === '/disclaimer' || path === '/editorial-policy') { return; }

    // Blog index: /blog
    if (path === '/blog') {
        showBlogSection();
        return;
    }
    // SEO-friendly blog URL: /blog/slug-name
    if (path.indexOf('/blog/') === 0) {
        var slug = path.replace('/blog/', '').replace(/\/$/, '');
        // Validate slug is safe before using it
        if (/^[a-z0-9-]{1,80}$/.test(slug)) {
            var blogPost = BLOG_POSTS.find(function (p) { return p.slug === slug || p.id === slug; });
            if (blogPost) {
                showBlogPost(blogPost.id);
                return;
            }
        }
    }
    // Legacy blog ID support: ?blog=emi-guide
    var blogId = params.get('blog');
    if (blogId && isSafeBlogId(blogId)) {
        showBlogPost(blogId);
        return;
    }
    // Category pages: /finance-calculators, /health-calculators, etc.
    var catMatch = path.match(/^\/([a-z]+)-calculators$/);
    if (catMatch) {
        var catKey = catMatch[1];
        if (CATS[catKey]) {
            showCategory(catKey);
            return;
        }
    }
    // Static pages — clean URL paths (primary) + legacy ?page= (fallback)
    if (path === '/about') { showAboutPage(); return; }
    if (path === '/privacy') { showPrivacyPage(); return; }
    if (path === '/terms') { showTermsPage(); return; }
    var pageId = params.get('page');
    if (pageId === 'about') { showAboutPage(); return; }
    if (pageId === 'privacy') { showPrivacyPage(); return; }
    if (pageId === 'terms') { showTermsPage(); return; }
    // Clean URL routing: /emi-calculator, /bmi-calculator, etc.
    var cleanSlug = path.replace(/^\//, '');
    if (cleanSlug && _calcSlugMap[cleanSlug]) {
        var cleanId = _calcSlugMap[cleanSlug];
        openCalc(DB[cleanId].cat, cleanId);
        return;
    }
    // Legacy query-param routing: ?calc=emi (kept for backwards-compat)
    if (calcId && isSafeCalcId(calcId)) {
        openCalc(DB[calcId].cat, calcId);
    } else {
        showHome();
    }
}

// Push SEO-friendly blog URL
function pushBlogUrl(postId) {
    var bp = BLOG_POSTS.find(function (p) { return p.id === postId; });
    if (bp && bp.slug && window.history && window.history.pushState) {
        var url = '/blog/' + bp.slug;
        window.history.pushState({ type: 'blog', id: postId }, bp.title, url);
        // Update canonical link
        var canon = document.querySelector('link[rel="canonical"]');
        if (!canon) { canon = document.createElement('link'); canon.rel = 'canonical'; document.head.appendChild(canon); }
        canon.href = window.location.origin + url;
    }
}

// ── ABOUT PAGE ─────────────────────────────────────
function showAboutPage() {
    setQBtn(''); closeSidebar();
    document.title = 'About Calc Labz — Free Online Calculator Suite';
    setMeta('description', 'Learn about Calc Labz — 300+ free online calculators for finance, health, math and more. Built in India, works offline, zero signup required.');
    setCanon(window.location.origin + '/about');
    try { window.history.pushState({ type: 'static', id: 'about' }, 'About | Calc Labz', '/about'); } catch (e) { }
    document.getElementById('mainContent').innerHTML =
        '<div class="card about-page">'
        + '<div class="cat-hdr"><div class="cat-ico-lg" style="background:linear-gradient(135deg,#6366f1,#8b5cf6)"><i class="fas fa-calculator"></i></div>'
        + '<div class="cat-meta"><h1>About Calc Labz</h1><p>Free calculators for everyone</p></div></div>'

        + '<div class="about-hero">'
        + '<p class="about-lead">Calc Labz is a <strong>free, no-signup</strong> calculator suite built for students, professionals, and everyday users across India and the world. With <strong>300+ tools</strong> spanning Finance, Health, Math, Education, Engineering and more — everything you need is one click away. We display ads to keep the service 100% free.</p>'
        + '</div>'

        + '<div class="about-grid">'
        + '<div class="about-card"><div class="about-icon" style="background:linear-gradient(135deg,#6366f1,#818cf8)"><i class="fas fa-bolt"></i></div><h3>Instant Results</h3><p>All calculations happen in your browser — no server round-trips. Results appear as you type.</p></div>'
        + '<div class="about-card"><div class="about-icon" style="background:linear-gradient(135deg,#10b981,#34d399)"><i class="fas fa-lock"></i></div><h3>No Personal Data</h3><p>We never collect personal data, no user accounts, and no login. Your calculation inputs stay on your device. We use anonymous analytics &amp; ads to keep Calc Labz free.</p></div>'
        + '<div class="about-card"><div class="about-icon" style="background:linear-gradient(135deg,#f59e0b,#fbbf24)"><i class="fas fa-wifi"></i></div><h3>Works Offline (PWA)</h3><p>Install Calc Labz as a Progressive Web App and use it anywhere — even without an internet connection.</p></div>'
        + '<div class="about-card"><div class="about-icon" style="background:linear-gradient(135deg,#f0544f,#fb7185)"><i class="fas fa-heart"></i></div><h3>Made in India</h3><p>Built with ❤️ in India. Designed around Indian financial tools — GST, PPF, Income Tax, SIP and more.</p></div>'
        + '<div class="about-card"><div class="about-icon" style="background:linear-gradient(135deg,#06b6d4,#22d3ee)"><i class="fas fa-trophy"></i></div><h3>Documented Formulas</h3><p>Every calculator uses industry-standard formulas. Formula sources and methodology are documented where available for full transparency.</p></div>'
        + '<div class="about-card"><div class="about-icon" style="background:linear-gradient(135deg,#8b5cf6,#a78bfa)"><i class="fas fa-universal-access"></i></div><h3>Accessible & Fast</h3><p>Built with accessibility in mind — keyboard navigable, screen-reader friendly, and mobile-first. We are actively working toward full WCAG 2.1 AA conformance.</p></div>'
        + '</div>'

        + '<div class="about-section">'
        + '<h2><i class="fas fa-th" style="color:var(--p);margin-right:8px"></i>Calculator Categories</h2>'
        + '<div class="about-cats">'
        + Object.entries(CATS).map(function (e) {
            var key = e[0], cat = e[1];
            return '<div class="about-cat-pill" data-action="showCategory" data-key="' + key + '"><span style="background:' + cat.color + '" class="about-cat-dot"><i class="fas ' + cat.icon + '"></i></span>' + cat.name + ' <em>(' + CAT_LIST[key].length + ')</em></div>';
        }).join('')
        + '</div></div>'

        + '<div class="about-section">'
        + '<h2><i class="fas fa-star" style="color:var(--gold);margin-right:8px"></i>Why Users Love Calc Labz</h2>'
        + '<div class="about-testimonials">'
        + '<div class="testimonial-card"><p>"Finally a calculator app that just works — no ads, no popups, no nonsense."</p><span>— Priya M., Mumbai</span></div>'
        + '<div class="testimonial-card"><p>"The EMI calculator with amortization schedule saved me so much time during home loan planning."</p><span>— Rahul K., Bangalore</span></div>'
        + '<div class="testimonial-card"><p>"I installed it as a PWA and use it every day offline. Incredible app, completely free!"</p><span>— Sunita T., Delhi</span></div>'
        + '</div></div>'

        + '<div class="about-section about-cta">'
        + '<h2>Get Started</h2>'
        + '<p>Explore all 300+ calculators or Install Calc Labz on your device for instant offline access.</p>'
        + '<div class="btn-row" style="justify-content:center;margin-top:16px">'
        + '<button class="btn btn-p" data-action="showHome"><i class="fas fa-calculator"></i> Browse Calculators</button>'
        + '<button class="btn btn-s" data-action="installPWA"><i class="fas fa-download"></i> Install App (PWA)</button>'
        + '</div></div>'
        + '</div>';
}

// ── PRIVACY POLICY PAGE ────────────────────────────
function showPrivacyPage() {
    setQBtn(''); closeSidebar();
    document.title = 'Privacy Policy | Calc Labz';
    setMeta('description', 'Calc Labz Privacy Policy — we do not collect personal data. We use Google Analytics for anonymous usage insights and Google AdSense for ads. Your calculations stay on your device.');
    setCanon(window.location.origin + '/privacy');
    try { window.history.pushState({ type: 'static', id: 'privacy' }, 'Privacy Policy | Calc Labz', '/privacy'); } catch (e) { }
    document.getElementById('mainContent').innerHTML =
        '<div class="card legal-page">'
        + '<div class="cat-hdr"><div class="cat-ico-lg" style="background:linear-gradient(135deg,#10b981,#34d399)"><i class="fas fa-user-shield"></i></div>'
        + '<div class="cat-meta"><h1>Privacy Policy</h1><p>Last updated: April 2026</p></div></div>'

        + '<div class="legal-notice"><i class="fas fa-shield-halved"></i><strong>Short version:</strong> Calc Labz does <em>not</em> collect personal data. No user accounts, no login. We use Google Analytics (anonymous usage data) and Google AdSense (ads) to keep the service free. Your calculations stay on your device.</div>'

        + '<div class="legal-body">'

        + '<h2>1. Information We Collect</h2>'
        + '<p>Calc Labz does <strong>not</strong> collect, store, transmit, or process any personally identifiable information (PII). There are no user accounts and no registration required.</p>'
        + '<p>Calculation inputs and results exist <strong>only in your browser\'s memory</strong> (or localStorage for optional features like favorites and history). This data never leaves your device.</p>'
        + '<p>We do collect <strong>anonymous, aggregated usage data</strong> via Google Analytics — this includes pages visited, device type, browser, and general location (country/city level). This data helps us improve the product and cannot be used to identify you personally.</p>'

        + '<h2>2. Cookies</h2>'
        + '<p>Calc Labz itself does not set any first-party cookies. However, our third-party partners <strong>Google Analytics</strong> and <strong>Google AdSense</strong> may set cookies on your device to measure usage and serve relevant ads. You can opt out via your browser settings or <a href="https://adssettings.google.com/" target="_blank" rel="noopener">Google Ads Settings</a>.</p>'

        + '<h2>3. Analytics, Advertising & Third-Party Services</h2>'
        + '<p>We use the following third-party services to operate and improve Calc Labz:</p>'
        + '<ul>'
        + '<li><strong>Google Analytics (G-KBNL7BG63K)</strong> — We use Google Analytics to understand how users interact with our calculators (pages visited, session duration, device type). Data is anonymous and aggregated. Google\'s Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>. You may opt out with the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out Browser Add-on</a>.</li>'
        + '<li><strong>Google AdSense (ca-pub-3010631666598300)</strong> — We display Google ads to help fund the free service. AdSense may use cookies to serve ads based on your prior visits to this and other websites. You can control ad personalization via <a href="https://adssettings.google.com/" target="_blank" rel="noopener">Google Ads Settings</a>.</li>'
        + '<li><strong>Google Fonts</strong> (Inter typeface) — loaded from fonts.googleapis.com. Google\'s Privacy Policy governs that request.</li>'
        + '<li><strong>Font Awesome</strong> (icons) — loaded from cdnjs.cloudflare.com. Cloudflare\'s Privacy Policy governs that request.</li>'
        + '<li><strong>Chart.js</strong> (charts) — loaded on-demand from cdn.jsdelivr.net. jsDelivr\'s Privacy Policy governs that request.</li>'
        + '</ul>'

        + '<h2>4. Local Storage</h2>'
        + '<p>With your knowledge, Calc Labz may save the following data <em>locally on your device</em> via <code>localStorage</code>:</p>'
        + '<ul><li>Your preferred theme (light/dark)</li><li>Favorite calculators you have starred</li><li>Recently used calculators</li><li>Calculation history (last 50 calculations)</li><li>Input memory (last used values for each calculator)</li><li>Custom notes you type into calculator note fields</li></ul>'
        + '<p>You can clear all locally stored data at any time via <strong>Dashboard → Clear All Data</strong>.</p>'

        + '<h2>5. Service Worker & Offline Caching</h2>'
        + '<p>Calc Labz\'s service worker caches app assets (HTML, CSS, JS) on your device to enable offline use. No personal data is cached. You can clear this cache by uninstalling the PWA or clearing your browser cache.</p>'

        + '<h2>6. Your Rights & Opt-Out</h2>'
        + '<p>You can opt out of Google Analytics tracking via the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">GA Opt-out Add-on</a>. You can control ad personalization via <a href="https://adssettings.google.com/" target="_blank" rel="noopener">Google Ads Settings</a> or your browser\'s cookie settings. Since Calc Labz does not collect personal data directly, there is nothing to request deletion of on our side.</p>'
        + '<h2>7. Children\'s Privacy</h2>'
        + '<p>Calc Labz is not directed at children under 13. We do not knowingly collect personal data from children. Our use of Google Analytics and AdSense is subject to Google\'s child-safety policies and COPPA compliance.</p>'

        + '<h2>8. Changes to This Policy</h2>'
        + '<p>We may update this policy if we add new features or services. Any changes will be reflected on this page with an updated date.</p>'

        + '<h2>9. Contact</h2>'
        + '<p>Questions about privacy? We\'re committed to transparency. Contact us through the Calc Labz website for any privacy-related queries.</p>'

        + '</div>'
        + '<div class="legal-back"><button class="btn btn-s" data-action="showHome"><i class="fas fa-arrow-left"></i> Back to Home</button></div>'
        + '</div>';
}

// ── TERMS OF USE PAGE ──────────────────────────────
function showTermsPage() {
    setQBtn(''); closeSidebar();
    document.title = 'Terms of Use | Calc Labz';
    setMeta('description', 'Calc Labz Terms of Use — free to use for personal and commercial purposes. Calculator results are for informational purposes only.');
    setCanon(window.location.origin + '/terms');
    try { window.history.pushState({ type: 'static', id: 'terms' }, 'Terms of Use | Calc Labz', '/terms'); } catch (e) { }
    document.getElementById('mainContent').innerHTML =
        '<div class="card legal-page">'
        + '<div class="cat-hdr"><div class="cat-ico-lg" style="background:linear-gradient(135deg,#6366f1,#a78bfa)"><i class="fas fa-file-contract"></i></div>'
        + '<div class="cat-meta"><h1>Terms of Use</h1><p>Last updated: April 2026</p></div></div>'

        + '<div class="legal-notice" style="border-color:var(--p)"><i class="fas fa-circle-info" style="color:var(--p)"></i><strong>Summary:</strong> Calc Labz is free for personal and professional use. Results are estimates — always verify with a qualified professional for important financial or medical decisions.</div>'

        + '<div class="legal-body">'

        + '<h2>1. Acceptance of Terms</h2>'
        + '<p>By accessing or using Calc Labz ("the Service"), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Service.</p>'

        + '<h2>2. Free Use License</h2>'
        + '<p>Calc Labz grants you a <strong>free, non-exclusive, non-transferable, revocable license</strong> to use the Service for personal and professional purposes. You may:</p>'
        + '<ul><li>Use all calculators freely without any payment</li><li>Share links to Calc Labz pages</li><li>Install the PWA on your personal devices</li><li>Use results for personal or professional reference</li></ul>'

        + '<h2>3. Disclaimer of Accuracy</h2>'
        + '<p>Calculator results provided by Calc Labz are <strong>for informational and illustrative purposes only</strong>. They are estimates based on formulas and the inputs you provide.</p>'
        + '<p><strong>Calc Labz does not guarantee accuracy and is not liable for any decisions made based on results.</strong> Always consult:</p>'
        + '<ul><li>A <strong>Chartered Accountant or tax advisor</strong> for financial and tax matters</li><li>A <strong>licensed doctor or dietitian</strong> for health and medical matters</li><li>A <strong>certified financial planner</strong> for investment decisions</li><li>Your <strong>bank or lender</strong> for loan and EMI decisions</li></ul>'

        + '<h2>4. Prohibited Uses</h2>'
        + '<p>You agree not to:</p>'
        + '<ul><li>Reverse-engineer, copy, or redistribute the Calc Labz codebase commercially without permission</li><li>Use Calc Labz APIs (if any) in an abusive or high-volume automated manner</li><li>Attempt to circumvent any security measures</li><li>Use the Service for any unlawful purpose</li></ul>'

        + '<h2>5. Intellectual Property</h2>'
        + '<p>All content, code, design, and branding of Calc Labz are the intellectual property of the Calc Labz Team unless otherwise noted. Third-party libraries (Chart.js, Font Awesome, etc.) are used under their respective open-source licenses.</p>'

        + '<h2>6. No Warranty</h2>'
        + '<p>The Service is provided <strong>"as is"</strong> without warranty of any kind, express or implied. Calc Labz is not responsible for service interruptions, calculation errors, or any consequential damages arising from use of the Service.</p>'

        + '<h2>7. Limitation of Liability</h2>'
        + '<p>To the fullest extent permitted by law, Calc Labz shall not be liable for any indirect, incidental, special, or consequential damages — including financial loss — resulting from use or inability to use the Service.</p>'

        + '<h2>8. Governing Law</h2>'
        + '<p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts located in India.</p>'

        + '<h2>9. Changes to Terms</h2>'
        + '<p>We may update these Terms at any time. Continued use of Calc Labz constitutes acceptance of the updated Terms. The "Last updated" date at the top reflects the most recent revision.</p>'

        + '<h2>10. Contact</h2>'
        + '<p>For questions regarding these Terms, please reach out through the Calc Labz website.</p>'

        + '</div>'
        + '<div class="legal-back">'
        + '<button class="btn btn-s" data-action="showHome"><i class="fas fa-arrow-left"></i> Back to Home</button>'
        + '<button class="btn btn-s" data-action="showPrivacyPage"><i class="fas fa-user-shield"></i> Privacy Policy</button>'
        + '</div>'
        + '</div>';
}

// ── INIT ───────────────────────────────────────────
// ── DOM EVENT WIRING (replaces all inline handlers) ──
// Called once after DOMContentLoaded. Binds all static-shell interactions
// via addEventListener — no onclick/oninput/onkeydown attributes in HTML.
function initDOMHandlers() {
    // ── HEADER ──────────────────────────────────────
    var hamburger = document.getElementById('hamburger-btn');
    if (hamburger) hamburger.addEventListener('click', toggleSidebar);

    var srInput = document.getElementById('srInput');
    if (srInput) srInput.addEventListener('input', function () { handleSearch(this.value); });

    var srClear = document.getElementById('srClear');
    if (srClear) srClear.addEventListener('click', clearSearch);

    var themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    var cmdBtn = document.getElementById('cmd-palette-btn');
    if (cmdBtn) cmdBtn.addEventListener('click', openCmdPalette);

    // ── SIDEBAR OVERLAY ──────────────────────────────
    var sOverlay = document.getElementById('sOverlay');
    if (sOverlay) sOverlay.addEventListener('click', closeSidebar);

    // ── SIDEBAR QUICK BUTTONS ────────────────────────
    var qHome = document.getElementById('qHome');
    if (qHome) qHome.addEventListener('click', showHome);

    var qFav = document.getElementById('qFav');
    if (qFav) qFav.addEventListener('click', showFavorites);

    var qDash = document.getElementById('qDash');
    if (qDash) qDash.addEventListener('click', showDashboard);

    var qBlog = document.getElementById('qBlog');
    if (qBlog) qBlog.addEventListener('click', showBlogSection);

    // ── MOBILE BOTTOM NAV ────────────────────────────
    var mnavHome = document.getElementById('mnavHome');
    if (mnavHome) mnavHome.addEventListener('click', showHome);

    var mnavFav = document.getElementById('mnavFav');
    if (mnavFav) mnavFav.addEventListener('click', showFavorites);

    var mnavSearch = document.getElementById('mnav-search-btn');
    if (mnavSearch) mnavSearch.addEventListener('click', openCmdPalette);

    var mnavDash = document.getElementById('mnavDash');
    if (mnavDash) mnavDash.addEventListener('click', showDashboard);

    var mnavTheme = document.getElementById('mnav-theme-btn');
    if (mnavTheme) mnavTheme.addEventListener('click', toggleTheme);

    // ── PWA INSTALL BAR ──────────────────────────────
    var pwaInstall = document.getElementById('pwa-install-btn');
    if (pwaInstall) pwaInstall.addEventListener('click', installPWA);

    var pwaDismiss = document.getElementById('pwa-dismiss-btn');
    if (pwaDismiss) pwaDismiss.addEventListener('click', function () {
        var bar = document.getElementById('pwaInstallBar');
        if (bar) bar.classList.remove('show');
    });

    // ── COMMAND PALETTE ──────────────────────────────
    var cmdOverlay = document.getElementById('cmdOverlay');
    if (cmdOverlay) cmdOverlay.addEventListener('click', function (e) {
        if (e.target === this) closeCmdPalette();
    });

    var cmdInput = document.getElementById('cmdInput');
    if (cmdInput) cmdInput.addEventListener('input', function () { filterCmd(this.value); });

    // ── SHORTCUT MODAL ───────────────────────────────
    var shortcutModal = document.getElementById('shortcutModal');
    if (shortcutModal) shortcutModal.addEventListener('click', function (e) {
        if (e.target === this) this.classList.remove('open');
    });

    var shortcutClose = document.getElementById('shortcut-close-btn');
    if (shortcutClose) shortcutClose.addEventListener('click', function () {
        document.getElementById('shortcutModal').classList.remove('open');
    });

    // ── GLOBAL EVENT DELEGATION ────────────────────────
    // Single handler for ALL data-action click events (replaces all inline onclick).
    // This covers sidebar, mainContent, footer, modals, toast, etc.
    document.addEventListener('click', function (e) {
        var target = e.target.closest('[data-action]');
        if (!target) return;
        var action = target.getAttribute('data-action');
        switch (action) {
            // Navigation
            case 'showHome': showHome(); break;
            case 'showDashboard': showDashboard(); break;
            case 'showFavorites': showFavorites(); break;
            case 'showBlogSection': {
                var filter = target.getAttribute('data-filter');
                showBlogSection(filter || undefined);
                break;
            }
            case 'showBlogPost': showBlogPost(target.getAttribute('data-id')); break;
            case 'showCategory': showCategory(target.getAttribute('data-key')); break;
            case 'showAboutPage': showAboutPage(); break;
            case 'showPrivacyPage': showPrivacyPage(); break;
            case 'showTermsPage': showTermsPage(); break;
            case 'toggleShortcutModal': toggleShortcutModal(); break;
            case 'installPWA': installPWA(); break;
            case 'reloadPage': location.reload(); break;

            // Sidebar
            case 'toggleCat': toggleCat(target.getAttribute('data-key')); break;

            // Calculator
            case 'openCalc': {
                var cat = target.getAttribute('data-cat');
                var id = target.getAttribute('data-id');
                if (cat && id) openCalc(cat, id);
                break;
            }
            case 'openCalcAndClearSearch': {
                openCalc(target.getAttribute('data-cat'), target.getAttribute('data-id'));
                clearSearch();
                break;
            }
            case 'calculate': calculate(target.getAttribute('data-calcid')); break;
            case 'resetCalc': resetCalc(target.getAttribute('data-calcid')); break;
            case 'undoCalc': undoCalc(target.getAttribute('data-calcid')); break;
            case 'toggleFav': {
                e.stopPropagation();
                toggleFav(target.getAttribute('data-calcid'));
                break;
            }
            case 'savePDF': savePDF(target.getAttribute('data-calcid')); break;
            case 'openCmpMode': openCmpMode(target.getAttribute('data-cat'), target.getAttribute('data-calcid')); break;
            case 'savePreset': savePreset(target.getAttribute('data-calcid')); break;
            case 'loadPreset': loadPreset(target.getAttribute('data-calcid'), parseInt(target.getAttribute('data-index'), 10)); break;
            case 'switchChartType': switchChartType(target.getAttribute('data-calcid'), target.getAttribute('data-type')); break;
            case 'exportAmortCSV': exportAmortCSV(target.getAttribute('data-calcid')); break;

            // Formula + FAQ
            case 'toggleFormula': toggleFormula(target); break;
            case 'toggleFAQ': {
                var faqBtn = target.closest('.calc-faq-q') || target;
                faqBtn.parentElement.classList.toggle('open');
                break;
            }

            // Share
            case 'doShare': doShare(target.getAttribute('data-channel'), target.getAttribute('data-name')); break;
            case 'doNativeShare': doNativeShare(target.getAttribute('data-name')); break;

            // Feedback
            case 'giveFeedback': giveFeedback(target, target.getAttribute('data-calcid'), parseInt(target.getAttribute('data-value'), 10)); break;

            // Dashboard
            case 'clearHistory': {
                if (confirm('Clear all history?')) {
                    calcHistory = [];
                    try { localStorage.removeItem('cp_history'); } catch (ex) { }
                    showDashboard();
                    showToast('History cleared');
                }
                break;
            }
            case 'clearAllData': {
                if (confirm('Clear all data?')) {
                    try { localStorage.clear(); } catch (ex) { }
                    if (window.CalcLabzConsent) window.CalcLabzConsent.revoke();
                    location.reload();
                }
                break;
            }

            // Blog TOC scroll
            case 'scrollToToc': {
                var el = document.getElementById(target.getAttribute('data-target'));
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                break;
            }

            // Command palette actions
            case 'cmdAction': {
                closeCmdPalette();
                var cmd = target.getAttribute('data-cmd');
                if (cmd === 'Home') showHome();
                else if (cmd === 'Dashboard') showDashboard();
                else if (cmd === 'Favorites') showFavorites();
                else if (cmd === 'Toggle Theme') toggleTheme();
                else if (cmd === 'Blog') showBlogSection();
                break;
            }
            case 'cmdCalc': {
                closeCmdPalette();
                openCalc(target.getAttribute('data-cat'), target.getAttribute('data-id'));
                break;
            }
        }
    });

    // ── Keyboard delegation for data-action elements ──
    // Enables Enter/Space activation on non-button elements with data-action
    document.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        var target = e.target.closest('[data-action]');
        if (!target) return;
        // Only synthesize click for non-button, non-link elements (buttons already fire click on Enter)
        var tag = target.tagName.toLowerCase();
        if (tag === 'button' || tag === 'a' || tag === 'input' || tag === 'select') return;
        e.preventDefault();
        target.click();
    });

    // ── Input delegation for data-action-input ──
    document.addEventListener('input', function (e) {
        var target = e.target;
        var action = target.getAttribute('data-action-input');
        if (!action) return;
        switch (action) {
            case 'debouncedCalculate': debouncedCalculate(target.getAttribute('data-calcid')); break;
            case 'handleHeroSearch': handleHeroSearch(target.value); break;
            case 'saveNote': saveNote(target.getAttribute('data-calcid')); break;
        }
    });

    // ── Change delegation for data-action-change ──
    document.addEventListener('change', function (e) {
        var target = e.target;
        var action = target.getAttribute('data-action-change');
        if (!action) return;
        switch (action) {
            case 'calculate': calculate(target.getAttribute('data-calcid')); break;
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    applyTheme();
    buildSidebar();
    initDOMHandlers();
    handleRoute();
    // Register service worker + P6: detect updates
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(function (reg) {
            // P6: When a new SW takes over, show a refresh toast
            reg.addEventListener('updatefound', function () {
                var newWorker = reg.installing;
                if (!newWorker) return;
                newWorker.addEventListener('statechange', function () {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        // New version cached — show update toast
                        var t = document.getElementById('toast');
                        if (t) {
                            document.getElementById('toastMsg').innerHTML =
                                '\uD83D\uDD04 Update available — <button data-action="reloadPage" style="background:none;border:none;color:var(--acc2);font-weight:700;cursor:pointer;padding:0;font-size:inherit">Refresh</button>';
                            t.querySelector('i').className = 'fas fa-rotate';
                            t.style.borderColor = 'var(--p)';
                            t.classList.add('show');
                            // Don't auto-hide — user must click refresh or dismiss
                            setTimeout(function () { t.classList.remove('show'); }, 12000);
                        }
                    }
                });
            });
        }).catch(function () { });
    }
});
window.addEventListener('popstate', handleRoute);

