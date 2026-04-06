/* ═══════════════════════════════════════════════════
   Calc Labz — Core Application Logic
   ═══════════════════════════════════════════════════ */
'use strict';

// ── STATE ──────────────────────────────────────────
var favorites = [];
try { favorites = JSON.parse(localStorage.getItem('cp_fav') || '[]'); } catch(e) {}
var recentList = [];
try { recentList = JSON.parse(localStorage.getItem('cp_recent') || '[]'); } catch(e) {}
var calcHistory = [];
try { calcHistory = JSON.parse(localStorage.getItem('cp_history') || '[]'); } catch(e) {}
var searchTimer;
var activeChart = null;
var _advChart = null;
var _undoStack = {};

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
    el.innerHTML = Object.entries(CATS).map(function(e) {
        var key = e[0], cat = e[1];
        return '<div class="cat-item">'
            + '<button class="cat-btn" id="catbtn-' + key + '" onclick="toggleCat(\'' + key + '\')" aria-expanded="false">'
            + '<span class="cat-ico" style="background:' + cat.color + '"><i class="fas ' + cat.icon + '"></i></span>'
            + '<span class="cat-lbl">' + cat.name + '</span>'
            + '<span class="cat-cnt">' + CAT_LIST[key].length + '</span>'
            + '<i class="fas fa-chevron-right cat-arr"></i>'
            + '</button>'
            + '<div class="calc-links" id="calclinks-' + key + '">'
            + CAT_LIST[key].map(function(id) {
                return '<div class="clink" id="clink-' + id + '" onclick="openCalc(\'' + key + '\',\'' + id + '\')" role="button" tabindex="0" onkeydown="if(event.key===\'Enter\')openCalc(\'' + key + '\',\'' + id + '\')">'
                    + '<i class="fas ' + DB[id].icon + '"></i> ' + DB[id].name + '</div>';
            }).join('')
            + '</div></div>';
    }).join('');
}

function toggleCat(key) {
    var btn = document.getElementById('catbtn-' + key);
    var links = document.getElementById('calclinks-' + key);
    var isActive = btn.classList.contains('active');
    document.querySelectorAll('.cat-btn').forEach(function(b) { b.classList.remove('active'); b.setAttribute('aria-expanded', 'false'); });
    document.querySelectorAll('.calc-links').forEach(function(l) { l.style.display = 'none'; });
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
    dangerous.forEach(function(el) { el.remove(); });
    // Strip on* event attributes and javascript: hrefs from all remaining nodes
    doc.body.querySelectorAll('*').forEach(function(el) {
        Array.from(el.attributes).forEach(function(attr) {
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
    try { localStorage.setItem(key, value); } catch(e) { /* quota exceeded — ignore */ }
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
    toastTimer = setTimeout(function() { t.classList.remove('show'); }, 2800);
}
function formatAgo(ts) {
    var diff = Date.now() - ts;
    if (diff < 60000) return 'just now';
    if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago';
    if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago';
    return Math.floor(diff / 86400000) + 'd ago';
}
function trackEvent() {} // no-op GA stub

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
        itemListElement: items.map(function(item, i) {
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
    document.querySelectorAll('.qbtn').forEach(function(b) { b.removeAttribute('aria-current'); });
    var btn = document.getElementById(id); if (btn) btn.setAttribute('aria-current', 'page');
}
function setQBtn(id) {
    document.querySelectorAll('.qbtn').forEach(function(b) { b.classList.remove('active'); });
    if (id) { var btn = document.getElementById(id); if (btn) btn.classList.add('active'); }
}
function setMobileNav(id) {
    document.querySelectorAll('.mnav-btn').forEach(function(b) { b.classList.remove('active'); });
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
    recentList = recentList.filter(function(r) { return r !== entry; });
    recentList.unshift(entry);
    if (recentList.length > 20) recentList.pop();
    safeStore('cp_recent', JSON.stringify(recentList));
}

// ── CARD BUILDER ───────────────────────────────────
function featCard(catKey, id, calc) {
    var cat = CATS[catKey] || {};
    var isFav = favorites.includes(id);
    return '<div class="feat-card" onclick="openCalc(\'' + catKey + '\',\'' + id + '\')" role="button" tabindex="0">'
        + '<div class="fc-ico" style="background:' + (cat.color || 'var(--p)') + '"><i class="fas ' + calc.icon + '"></i></div>'
        + '<div class="fc-name">' + calc.name + '</div>'
        + '<div class="fc-desc">' + calc.desc + '</div>'
        + (calc.badge ? '<span class="badge">' + calc.badge + '</span>' : '')
        + '</div>';
}

// ── HOME ───────────────────────────────────────────
function showHome() {
    setQBtn('qHome'); setMobileNav('mnavHome'); closeSidebar(); updateSidebarActive('qHome');
    resetMeta();
    var popular = Object.entries(DB).filter(function(e) { return e[1].badge === 'Popular'; }).slice(0, 8);
    var popHTML = popular.map(function(e) { return featCard(e[1].cat, e[0], e[1]); }).join('');

    var recentHTML = '';
    if (recentList.length) {
        var recCards = recentList.slice(0, 4).map(function(entry) {
            var parts = entry.split(':');
            var c = DB[parts[1]];
            return c ? featCard(parts[0], parts[1], c) : '';
        }).join('');
        recentHTML = '<div class="featured-section"><div class="sec-hdr"><div class="sec-ttl"><i class="fas fa-clock"></i> Recently Used</div></div><div class="feat-grid stagger-children">' + recCards + '</div></div>';
    }

    var catCards = Object.entries(CATS).map(function(e) {
        var key = e[0], cat = e[1];
        return '<div class="feat-card" onclick="showCategory(\'' + key + '\')">'
            + '<div class="fc-ico" style="background:' + cat.color + '"><i class="fas ' + cat.icon + '"></i></div>'
            + '<div class="fc-name">' + cat.name + '</div>'
            + '<div class="fc-desc">' + CAT_LIST[key].length + ' calculators</div></div>';
    }).join('');

    var _BCColors = {'Finance':'#6366f1','Tax':'#f59e0b','Health':'#10b981','Math':'#8b5cf6','Education':'#06b6d4','Lifestyle':'#f0544f'};
    var _BCIcons = {'Finance':'fa-chart-line','Tax':'fa-landmark','Health':'fa-heart-pulse','Math':'fa-calculator','Education':'fa-graduation-cap','Lifestyle':'fa-sun'};
    var blogCards = BLOG_POSTS.slice(0, 4).map(function(p) {
        var catColor = _BCColors[p.cat] || 'var(--p)';
        var catIcon = _BCIcons[p.cat] || 'fa-file-alt';
        return '<div class="blog-card" onclick="showBlogPost(\'' + p.id + '\')">'
            + '<div class="blog-card-hdr" style="background:linear-gradient(135deg,' + catColor + ',' + catColor + '88)"></div>'
            + '<div class="blog-meta-row"><span class="blog-read-badge"><i class="fas fa-clock"></i>' + (p.readTime||'5 min') + '</span><span><i class="fas fa-calendar"></i>' + (p.date||'2025') + '</span></div>'
            + '<div class="blog-cat"><i class="fas ' + catIcon + '"></i> ' + escHtml(p.cat) + '</div>'
            + '<div class="blog-title">' + escHtml(p.title) + '</div>'
            + '<div class="blog-desc">' + escHtml(p.desc) + '</div>'
            + '<div class="blog-link"><i class="fas fa-arrow-right"></i> Read guide</div></div>';
    }).join('');

    document.getElementById('mainContent').innerHTML =
        '<div class="hero"><div class="hero-bg-orb o1"></div><div class="hero-bg-orb o2"></div>'
        + '<h1>300+ Free Calculators</h1>'
        + '<p>Finance, health, math, engineering &amp; more — instant results, zero signup</p>'
        + '<div class="hero-search"><i class="fas fa-search"></i><input type="text" placeholder="Search calculators…" oninput="handleHeroSearch(this.value)" aria-label="Search calculators"></div></div>'
        + '<div class="stats-row"><div class="stat"><div class="stat-n">' + Object.keys(DB).length + '</div><div class="stat-l">Calculators</div></div>'
        + '<div class="stat"><div class="stat-n">' + Object.keys(CATS).length + '</div><div class="stat-l">Categories</div></div>'
        + '<div class="stat"><div class="stat-n">0</div><div class="stat-l">Signup Required</div></div>'
        + '<div class="stat"><div class="stat-n">✓</div><div class="stat-l">Works Offline</div></div></div>'
        + '<div class="featured-section"><div class="sec-hdr"><div class="sec-ttl"><i class="fas fa-fire"></i> Popular Calculators</div></div><div class="feat-grid stagger-children">' + popHTML + '</div></div>'
        + recentHTML
        + '<div class="featured-section"><div class="sec-hdr"><div class="sec-ttl"><i class="fas fa-th-large"></i> Categories</div></div><div class="feat-grid stagger-children">' + catCards + '</div></div>'
        + '<div class="blog-strip"><div class="blog-strip-hdr"><h2><i class="fas fa-newspaper"></i> Calculator Guides</h2><button class="view-all" onclick="showBlogSection()">View All <i class="fas fa-arrow-right"></i></button></div><div class="blog-grid">' + blogCards + '</div></div>';
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
    try { window.history.replaceState(null, '', '/'); } catch(e) {}
}

// ── CATEGORY VIEW ──────────────────────────────────
function showCategory(catKey) {
    var cat = CATS[catKey]; if (!cat) return;
    setQBtn(''); closeSidebar();
    document.title = cat.name + ' Calculators | Calc Labz';
    var cards = CAT_LIST[catKey].map(function(id) { return featCard(catKey, id, DB[id]); }).join('');
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
    var cards = favorites.map(function(id) {
        if (!DB[id]) return '';
        var cat = Object.keys(CAT_LIST).find(function(k) { return CAT_LIST[k].includes(id); }) || 'math';
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
    var cards = recentList.slice(0, 12).map(function(entry) {
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
    principal:'Total loan amount you wish to borrow',rate:'Annual interest rate offered by the bank',
    tenure:'Loan repayment period in months',monthly:'Amount you invest every month',
    'return':'Expected annual return on your investment',years:'Total investment period in years',
    net:'Amount before adding GST',weight:'Your body weight',height:'Your body height',
    val:'The base value for calculation',pct:'The percentage to apply',n:'The number to operate on',
    income:'Your total annual income',dob:'Your date of birth'
};

// ── CALCULATOR VIEW (openCalc) ─────────────────────
function openCalc(catKey, calcId) {
    var calc = DB[calcId]; if(!calc) return;
    var cat = CATS[catKey] || {};
    setQBtn(''); closeSidebar(); addToRecent(catKey, calcId); updateSidebarActive('');
    document.querySelectorAll('.clink').forEach(function(l){ l.classList.remove('active'); });
    var cl = document.getElementById('clink-'+calcId); if(cl) cl.classList.add('active');
    updateMeta(calc.name, calc.desc, catKey, calcId);

    var isFav = favorites.includes(calcId);
    var inputsHTML = calc.inputs.map(function(inp){
        var tip = INPUT_TIPS[inp.id] ? '<span class="tip-ico" title="'+escHtml(INPUT_TIPS[inp.id])+'">?</span>' : '';
        if(inp.type==='select'){
            return '<div class="inp-grp"><div class="tip-wrap"><label>'+inp.label+'</label>'+tip+'</div>'
                +'<div class="inp-wrap"><select id="inp_'+inp.id+'" onchange="calculate(\''+calcId+'\')">'
                +inp.options.map(function(o){return '<option>'+o+'</option>';}).join('')+'</select></div></div>';
        }
        if(inp.type==='date'||inp.type==='time'){
            return '<div class="inp-grp"><div class="tip-wrap"><label>'+inp.label+'</label>'+tip+'</div>'
                +'<div class="inp-wrap"><input type="'+inp.type+'" id="inp_'+inp.id+'"'+(inp.default?' value="'+inp.default+'"':'')
                +' onchange="calculate(\''+calcId+'\')"></div></div>';
        }
        if(inp.type==='text'){
            return '<div class="inp-grp"><div class="tip-wrap"><label>'+inp.label+'</label>'+tip+'</div>'
                +'<div class="inp-wrap"><input type="text" id="inp_'+inp.id+'" value="'+(inp.default||'')+'" oninput="calculate(\''+calcId+'\')"></div></div>';
        }
        var d = inp.default!==undefined?inp.default:'';
        return '<div class="inp-grp"><div class="tip-wrap"><label>'+inp.label+'</label>'+tip+'</div>'
            +'<div class="inp-wrap">'+(inp.prefix?'<span class="inp-pfx">'+inp.prefix+'</span>':'')
            +'<input type="number" id="inp_'+inp.id+'" value="'+d+'" step="any" class="'+(inp.prefix?'has-pfx':'')+(inp.suffix?' has-sfx':'')+'" oninput="calculate(\''+calcId+'\')">'
            +(inp.suffix?'<span class="inp-sfx">'+inp.suffix+'</span>':'')+'</div></div>';
    }).join('');

    var presetsHTML = '';
    var presets = getPresets(calcId);
    if(presets.length){
        presetsHTML = '<div class="preset-row">'
            +presets.map(function(p,i){return '<button class="preset-pill" onclick="loadPreset(\''+calcId+'\','+i+')">'+escHtml(p.name)+'</button>';}).join('')
            +'</div>';
    }

    var formulaHTML = '';
    var fData = (typeof CALC_FORMULAS !== 'undefined') ? CALC_FORMULAS[calcId] : null;
    if(fData){
        formulaHTML = '<div class="formula-wrap"><div class="formula-hdr" onclick="toggleFormula(this)">'
            +'<span><i class="fas fa-square-root-variable" style="color:var(--acc2);margin-right:6px"></i>How is this calculated?</span><i class="fas fa-chevron-up"></i></div>'
            +'<div class="formula-body">'
            +'<div class="formula-code">'+escHtml(fData.formula)+'</div>'
            +'<div class="formula-vars">'+escHtml(fData.variables)+'</div>'
            +'<p class="formula-desc">'+escHtml(fData.explanation)+'</p>'
            +'</div></div>';
    }

    var relatedCalcs = getRelated(catKey, calcId);
    var relatedHTML = relatedCalcs.length ? '<div class="related-wrap"><h3><i class="fas fa-link" style="color:var(--p);margin-right:6px"></i>Related Calculators</h3><div class="related-grid">'
        +relatedCalcs.map(function(r){return '<button class="related-pill" onclick="openCalc(\''+r.cat+'\',\''+r.id+'\')"><i class="fas '+DB[r.id].icon+'"></i>'+DB[r.id].name+'</button>';}).join('')
        +'</div></div>' : '';

    var shareHTML = '<div class="share-bar"><span class="share-lbl">Share:</span>'
        +'<button class="share-btn wa" onclick="doShare(\'wa\',\''+escHtml(calc.name)+'\')"><i class="fab fa-whatsapp"></i>WhatsApp</button>'
        +'<button class="share-btn tw" onclick="doShare(\'tw\',\''+escHtml(calc.name)+'\')"><i class="fab fa-twitter"></i>Twitter</button>'
        +'<button class="share-btn" onclick="doShare(\'copy\',\''+escHtml(calc.name)+'\')"><i class="fas fa-link"></i>Copy Link</button>'
        +(navigator.share?'<button class="share-native-btn" onclick="doNativeShare(\''+escHtml(calc.name)+'\')"><i class="fas fa-share-nodes"></i>Share</button>':'')
        +'</div>';

    var noteVal = getNote(calcId);
    var noteHTML = '<div class="note-wrap"><label style="font-size:.78rem;font-weight:600;color:var(--txt2)"><i class="fas fa-sticky-note" style="margin-right:4px"></i>Notes</label>'
        +'<textarea class="note-inp" id="note-'+calcId+'" placeholder="Add personal notes…" oninput="saveNote(\''+calcId+'\')">'+escHtml(noteVal)+'</textarea>'
        +'<div class="note-saved" id="noteSaved-'+calcId+'"><i class="fas fa-check"></i> Saved</div></div>';

    document.getElementById('mainContent').innerHTML =
        '<div class="card">'
        +'<div class="crumb"><a onclick="showHome()">Home</a> <span>›</span> <a onclick="showCategory(\''+catKey+'\')">'+cat.name+'</a> <span>›</span> '+calc.name+'</div>'
        +'<div class="calc-hdr"><div class="calc-title-row"><div><h1>'+calc.name+'</h1><p>'+calc.desc+'</p></div>'
        +'<div class="calc-actions">'
        +'<button class="ibtn" id="fav-'+calcId+'" onclick="event.stopPropagation();toggleFav(\''+calcId+'\')" title="Favorite"><i class="'+(isFav?'fas':'far')+' fa-star" style="color:'+(isFav?'var(--gold)':'')+'"></i></button>'
        +'<button class="ibtn" onclick="savePDF(\''+calcId+'\')" title="Save PDF"><i class="fas fa-file-pdf"></i></button>'
        +'<button class="ibtn" onclick="openCmpMode(\''+catKey+'\',\''+calcId+'\')" title="Compare"><i class="fas fa-columns"></i></button>'
        +'</div></div></div>'
        +'<div class="calc-badges"><span class="badge-verified"><i class="fas fa-check-circle"></i>Verified Formula</span><span class="badge-updated"><i class="fas fa-clock"></i>Updated 2026</span></div>'
        +presetsHTML
        +'<div class="inp-grid">'+inputsHTML+'</div>'
        +'<div class="btn-row"><button class="btn btn-p" onclick="calculate(\''+calcId+'\')"><i class="fas fa-calculator"></i> Calculate</button>'
        +'<button class="btn btn-s" onclick="resetCalc(\''+calcId+'\')"><i class="fas fa-redo"></i> Reset</button>'
        +'<button class="undo-btn" onclick="undoCalc(\''+calcId+'\')"><i class="fas fa-undo"></i> Undo</button>'
        +'<button class="preset-save" onclick="savePreset(\''+calcId+'\')"><i class="fas fa-bookmark"></i> Save Preset</button></div>'
        +'<div class="results" id="res-'+calcId+'" style="display:none"></div>'
        +'<div id="aiInterpret-'+calcId+'"></div>'
        +'<div id="chartArea-'+calcId+'"></div>'
        +'<div id="amortArea-'+calcId+'"></div>'
        +formulaHTML
        +buildCalcFAQ(calcId, calc)
        +shareHTML
        +'<div class="feedback-bar"><span class="feedback-lbl">Was this helpful?</span>'
        +'<button class="fb-btn up" onclick="giveFeedback(this,\''+calcId+'\',1)"><i class="fas fa-thumbs-up"></i></button>'
        +'<button class="fb-btn dn" onclick="giveFeedback(this,\''+calcId+'\',-1)"><i class="fas fa-thumbs-down"></i></button>'
        +'<span class="fb-thanks" id="fbt-'+calcId+'">Thanks!</span></div>'
        +'<div class="trust-bar"><span class="trust-item"><i class="fas fa-check-circle"></i>Free forever</span>'
        +'<span class="trust-item"><i class="fas fa-lock"></i>No personal data stored</span>'
        +'<span class="trust-item"><i class="fas fa-wifi"></i>Works offline</span></div>'
        +noteHTML
        +relatedHTML
        +'</div>';

    // Auto-restore input memory and calculate
    if(loadInputMemory(calcId)) { setTimeout(function(){ calculate(calcId); }, 50); }
    // URL routing
    try { window.history.pushState({type:'calc',id:calcId}, calc.name + ' | Calc Labz', '?calc='+calcId); } catch(e){}
    // Focus management: move focus to calculator heading for accessibility
    setTimeout(function() {
        var h1 = document.querySelector('#mainContent h1');
        if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus(); }
    }, 100);
}

// ── CALCULATOR ENGINE ──────────────────────────────
function getValues(calcId) {
    var calc = DB[calcId]; if(!calc) return {};
    var vals = {};
    calc.inputs.forEach(function(inp){
        var el = document.getElementById('inp_'+inp.id);
        if(!el) return;
        if(inp.type==='select'||inp.type==='text'||inp.type==='date'||inp.type==='time') vals[inp.id]=el.value;
        else vals[inp.id] = parseFloat(el.value)||0;
    });
    return vals;
}

function calculate(calcId) {
    var calc = DB[calcId]; if(!calc) return;
    saveUndoState(calcId);
    var vals = getValues(calcId);
    var results; try { results = calc.calc(vals); } catch(e) { return; }
    if(!results) return;
    var section = document.getElementById('res-'+calcId);
    if(!section) return;
    section.style.display = 'block';
    section.classList.remove('pulse'); void section.offsetWidth; section.classList.add('pulse');
    var html = '<div class="res-grid">';
    if(results.main) html += '<div class="res-card hi"><div class="res-lbl">'+escHtml(results.main.label)+'</div><div class="res-val">'+escHtml(String(results.main.value))+'</div></div>';
    if(results.secondary) results.secondary.forEach(function(r){
        if(!r.label) return;
        html += '<div class="res-card"><div class="res-lbl">'+escHtml(r.label)+'</div><div class="res-val sm'+(r.pos?' pos':'')+'">'+escHtml(String(r.value))+'</div></div>';
    });
    html += '</div>';
    section.innerHTML = html;
    animateCounters(section);
    colourCodeResult(section, results, calcId);
    renderChart(calcId, results, vals);
    renderAmortTable(calcId, vals);
    interpretResult(calcId, results);
    saveHistory(calcId, calc.name, results.main?String(results.main.value):'', vals);
    saveInputMemory(calcId);
    try { navigator.vibrate(40); } catch(e){}
}

function resetCalc(calcId) {
    var calc = DB[calcId]; if(!calc) return;
    calc.inputs.forEach(function(inp){
        var el = document.getElementById('inp_'+inp.id);
        if(el) el.value = inp.default!==undefined?inp.default:'';
    });
    var res = document.getElementById('res-'+calcId);
    if(res) res.style.display = 'none';
    showToast('Reset to defaults');
}

// ── PRESETS ─────────────────────────────────────────
function getPresets(calcId){ try{return JSON.parse(localStorage.getItem('cp_presets_'+calcId)||'[]');}catch(e){return[];} }
function savePreset(calcId){
    var name=prompt('Name this preset:'); if(!name) return;
    // Sanitize preset name: strip tags, limit length
    name = String(name).replace(/<[^>]*>/g,'').replace(/[<>"'`]/g,'').slice(0,20);
    if(!name) { showToast('Invalid preset name','warning'); return; }
    var vals=getValues(calcId), presets=getPresets(calcId);
    if(presets.length >= 20) { showToast('Max 20 presets per calculator','warning'); return; }
    presets.push({name:name,vals:vals});
    safeStore('cp_presets_'+calcId,JSON.stringify(presets));
    showToast('Preset "'+name+'" saved!');
}
function loadPreset(calcId,idx){
    var presets=getPresets(calcId); if(!presets[idx]) return;
    var vals=presets[idx].vals, calc=DB[calcId];
    calc.inputs.forEach(function(inp){ var el=document.getElementById('inp_'+inp.id); if(el&&vals[inp.id]!==undefined)el.value=vals[inp.id]; });
    calculate(calcId); showToast('Preset loaded!');
}

// ── UNDO ───────────────────────────────────────────
function saveUndoState(calcId){
    var calc=DB[calcId]; if(!calc) return;
    var state={}; calc.inputs.forEach(function(inp){ var el=document.getElementById('inp_'+inp.id); if(el)state[inp.id]=el.value; });
    if(!_undoStack[calcId]) _undoStack[calcId]=[];
    _undoStack[calcId].push(state);
    if(_undoStack[calcId].length>20) _undoStack[calcId].shift();
}
function undoCalc(calcId){
    var stack=_undoStack[calcId]; if(!stack||stack.length<2){showToast('Nothing to undo','warning');return;}
    stack.pop(); var prev=stack[stack.length-1]; var calc=DB[calcId]; if(!calc) return;
    calc.inputs.forEach(function(inp){ var el=document.getElementById('inp_'+inp.id); if(el&&prev[inp.id]!==undefined)el.value=prev[inp.id]; });
    calculate(calcId); showToast('Undo applied');
}

// ── INPUT MEMORY ───────────────────────────────────
function saveInputMemory(calcId){
    var calc=DB[calcId]; if(!calc) return; var vals={};
    calc.inputs.forEach(function(inp){ var el=document.getElementById('inp_'+inp.id); if(el)vals[inp.id]=el.value; });
    safeStore('cp_mem_'+calcId,JSON.stringify(vals));
}
function loadInputMemory(calcId){
    try{var saved=JSON.parse(localStorage.getItem('cp_mem_'+calcId)||'null');if(!saved)return false;var calc=DB[calcId];if(!calc)return false;
    calc.inputs.forEach(function(inp){var el=document.getElementById('inp_'+inp.id);if(el&&saved[inp.id]!==undefined)el.value=saved[inp.id];});return true;}catch(e){return false;}
}

// ── HISTORY ────────────────────────────────────────
function saveHistory(calcId,name,result,vals){
    calcHistory.unshift({calcId:calcId,name:name,result:result,vals:vals,ts:Date.now()});
    if(calcHistory.length>50) calcHistory.pop();
    safeStore('cp_history',JSON.stringify(calcHistory));
}

// ── NOTES ──────────────────────────────────────────
function getNote(calcId){ return localStorage.getItem('cp_note_'+calcId)||''; }
function saveNote(calcId){
    var el=document.getElementById('note-'+calcId); if(!el)return;
    // Limit note size to 2 KB to prevent localStorage abuse
    var noteVal = el.value.slice(0, 2048);
    safeStore('cp_note_'+calcId, noteVal);
    var saved=document.getElementById('noteSaved-'+calcId);
    if(saved){saved.style.display='flex';setTimeout(function(){saved.style.display='none';},1500);}
}

// ── ANIMATED COUNTERS ──────────────────────────────
function animateCounters(section){
    if(!section) return;
    section.querySelectorAll('.res-val').forEach(function(el){
        var text=el.textContent.trim();
        var num=parseFloat(text.replace(/[₹,%\s,]/g,'').replace(/[^\d.-]/g,''));
        if(isNaN(num)||num===0||text.length>22) return;
        var prefix=(text[0]==='₹'||text[0]==='$')?text[0]:'';
        var suffix=text.replace(/^[₹$£€]?[\d,.\s]+/,'');
        var duration=700,startTime=null;
        function step(ts){
            if(!startTime) startTime=ts;
            var progress=Math.min((ts-startTime)/duration,1);
            var ease=1-Math.pow(1-progress,3);
            var cur=num*ease;
            el.textContent=prefix+(Math.abs(cur)>100?Math.round(cur).toLocaleString('en-IN'):cur.toFixed(2))+suffix;
            if(progress<1) requestAnimationFrame(step); else el.textContent=text;
        }
        requestAnimationFrame(step);
    });
}

// ── COLOUR CODE RESULTS ────────────────────────────
function colourCodeResult(section,results,calcId){
    if(!results||!results.main) return;
    var card=section.querySelector('.res-card.hi'); if(!card) return;
    var val=String(results.main.value);
    if(['taxregime','prepayment','savingsgoal','cagr','stepupsip'].includes(calcId)) card.classList.add('great');
    else if(['creditcard'].includes(calcId)) card.classList.add('warn');
    else if(val.includes('❌')||val.includes('Fail')) card.classList.add('danger');
    if(calcId==='bmi'){var bmiNum=parseFloat(val);if(bmiNum<18.5||bmiNum>=30)card.classList.add('danger');else if(bmiNum<25)card.classList.add('great');else card.classList.add('warn');}
}

// ── FEEDBACK ───────────────────────────────────────
function giveFeedback(btn,calcId,val){
    var bar=btn.parentElement;
    bar.querySelectorAll('.fb-btn').forEach(function(b){b.style.opacity='0.4';b.disabled=true;});
    var thanks=document.getElementById('fbt-'+calcId); if(thanks)thanks.style.display='inline';
    var fb=JSON.parse(localStorage.getItem('cp_feedback')||'{}');
    fb[calcId]=(fb[calcId]||0)+val;
    localStorage.setItem('cp_feedback',JSON.stringify(fb));
}

// ── SHARE ──────────────────────────────────────────
function doShare(type,calcName){
    var url=window.location.href;
    if(type==='wa') window.open('https://wa.me/?text='+encodeURIComponent(calcName+' — Calc Labz: '+url));
    else if(type==='tw') window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(calcName+' — Calc Labz')+'&url='+encodeURIComponent(url));
    else if(type==='copy'){navigator.clipboard.writeText(url).then(function(){showToast('Link copied!');}).catch(function(){showToast('Copy failed','warning');});}
}
function doNativeShare(calcName){
    if(!navigator.share) return;
    navigator.share({title:calcName+' — Calc Labz',text:'I used Calc Labz\'s '+calcName+'. Try it free!',url:window.location.href}).catch(function(){});
}

// ── PDF ────────────────────────────────────────────
function savePDF(calcId){
    var res=document.getElementById('res-'+calcId);
    if(!res||res.style.display==='none'){showToast('Calculate first!','warning');return;}
    if(typeof html2pdf==='undefined'){window.print();return;}
    var card=document.querySelector('.card');
    html2pdf().set({margin:10,filename:calcId+'-result.pdf',image:{type:'jpeg',quality:0.95},html2canvas:{scale:2,useCORS:true},jsPDF:{unit:'mm',format:'a4',orientation:'portrait'}}).from(card).save();
    showToast('Saving PDF…');
}

// ── FORMULA TOGGLE ─────────────────────────────────
function toggleFormula(hdr){
    var body=hdr.nextElementSibling;body.classList.toggle('open');
    var ico=hdr.querySelector('.fa-chevron-up'); if(ico)ico.style.transform=body.classList.contains('open')?'':'rotate(180deg)';
}
function toggleDisclaimer(btn){var id=btn.closest('.card').querySelector('.disclaimer-box');if(id)id.classList.toggle('open');}


// ── CHART ──────────────────────────────────────────
var CHART_COLORS = ['#6366f1','#10b981','#f59e0b','#f0544f','#8b5cf6','#06b6d4'];
var _currentChartType = 'doughnut';

function renderChart(calcId, results, vals) {
    var area = document.getElementById('chartArea-' + calcId); if (!area) return;
    if (!results.chart) { area.innerHTML = ''; return; }
    var ch = results.chart;
    var chartType = ch.type || 'doughnut';
    _currentChartType = chartType;

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
    var total = data.reduce(function(s, v) { return s + v; }, 0);
    var centerHTML = '';
    if (chartType === 'doughnut' || chartType === 'pie') {
        centerHTML = '<div class="chart-center-label"><div class="ccl-val">\u20b9' + Math.round(total).toLocaleString('en-IN') + '</div><div class="ccl-lbl">Total</div></div>';
    }

    area.innerHTML = '<div class="chart-wrap"><div class="chart-title"><span><i class="fas fa-chart-pie" style="color:var(--p)"></i> Breakdown</span>'
        + '<div class="chart-toggle-wrap">'
        + '<button class="chart-toggle' + (chartType === 'doughnut' ? ' active' : '') + '" onclick="switchChartType(\'' + calcId + '\',\'doughnut\')">○ Doughnut</button>'
        + '<button class="chart-toggle' + (chartType === 'bar' ? ' active' : '') + '" onclick="switchChartType(\'' + calcId + '\',\'bar\')">▁ Bar</button>'
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
                        callbacks: { label: function(ctx) { return ctx.label + ': \u20b9' + Math.round(ctx.raw).toLocaleString('en-IN'); } }
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
                x: { grid: { color: gridColor }, ticks: { color: txtColor, callback: function(v) { return '\u20b9' + (v >= 100000 ? (v/100000).toFixed(1)+'L' : v >= 1000 ? (v/1000).toFixed(0)+'K' : v); } } },
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
                    datasets: ch.timeline.datasets.map(function(ds, i) {
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
                        y: { grid: { color: gridColor }, ticks: { color: txtColor, callback: function(v) { return '\u20b9' + (v >= 100000 ? (v/100000).toFixed(1)+'L' : v >= 1000 ? (v/1000).toFixed(0)+'K' : v); } } }
                    },
                    plugins: {
                        legend: { labels: { color: txtColor, usePointStyle: true, padding: 14 } },
                        tooltip: {
                            backgroundColor: isDark ? '#27272a' : '#ffffff',
                            titleColor: isDark ? '#f4f4f5' : '#18181b',
                            bodyColor: isDark ? '#a1a1aa' : '#52525b',
                            borderColor: isDark ? 'rgba(255,255,255,.1)' : 'rgba(0,0,0,.1)',
                            borderWidth: 1, cornerRadius: 8, padding: 10,
                            callbacks: { label: function(ctx) { return ctx.dataset.label + ': \u20b9' + Math.round(ctx.raw).toLocaleString('en-IN'); } }
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
    var results; try { results = calc.calc(vals); } catch(e) { return; }
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
        + '<div class="amort-actions"><button class="btn btn-s" onclick="exportAmortCSV(\'' + calcId + '\')"><i class="fas fa-download"></i> CSV</button></div></div>';
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

// ── FAQ BUILDER ────────────────────────────────────
var RICH_FAQS = {
    emi: [
        {q:'What is EMI and how is it calculated?',a:'EMI (Equated Monthly Installment) is a fixed payment made by a borrower to a lender each month. It is calculated using: EMI = P × r × (1+r)^n / ((1+r)^n - 1), where P = principal, r = monthly rate, n = tenure in months.'},
        {q:'How does prepayment reduce my total interest?',a:'Prepaying even a small amount each year reduces the outstanding principal, which means less interest accrues. A 5% annual prepayment can save 15-20% of total interest and shorten the loan by several years.'},
        {q:'Fixed vs floating interest rate — which is better?',a:'Fixed rates give predictable EMIs but are usually 1-2% higher. Floating rates change with market conditions and are ideal when rates are expected to fall. Most experts recommend floating for long tenures.'},
        {q:'Can I reduce my EMI amount?',a:'Yes — you can increase tenure (lower EMI but more interest), negotiate a lower rate, make prepayments to reduce principal, or opt for a step-down EMI plan.'},
        {q:'What is the ideal EMI-to-income ratio?',a:'Financial experts recommend keeping your total EMI obligations below 40% of your monthly income. Banks typically approve loans where EMI is 45-50% of income.'},
        {q:'Is this EMI calculator accurate?',a:'Yes, it uses the standard reducing-balance formula used by all Indian banks and NBFCs. Results match those from SBI, HDFC, ICICI calculators.'}
    ],
    sip: [
        {q:'What is SIP and how does it work?',a:'SIP (Systematic Investment Plan) lets you invest a fixed amount in mutual funds monthly. It leverages rupee-cost averaging — buying more units when prices are low, fewer when high — reducing risk over time.'},
        {q:'How much can ₹5,000/month grow in 20 years?',a:'At 12% annual returns, ₹5,000/month for 20 years becomes approximately ₹49.5 lakhs. Your total investment of ₹12 lakhs grows nearly 4x through compounding.'},
        {q:'SIP vs lumpsum — which gives better returns?',a:'Historically, SIP outperforms lumpsum during volatile markets due to rupee-cost averaging. Lumpsum can outperform in consistently rising markets. SIP is safer for most investors.'},
        {q:'What is the power of compounding in SIP?',a:'Compounding means you earn returns on your returns. In a 20-year SIP, ~70% of your final corpus comes from compounding gains, not your actual investment.'},
        {q:'Can I stop or modify my SIP?',a:'Yes, most mutual funds allow you to pause, increase, decrease, or stop your SIP anytime with no penalty. You can also set up a step-up SIP that increases automatically each year.'},
        {q:'Is SIP risk-free?',a:'No investment is risk-free. However, SIP reduces risk through diversification and rupee-cost averaging. Equity SIPs held for 7+ years have historically never given negative returns in India.'}
    ],
    gst: [
        {q:'What is GST and how many types are there?',a:'GST (Goods and Services Tax) has 4 components: CGST (Central), SGST (State), IGST (Integrated for inter-state), and Cess. Common rates are 5%, 12%, 18%, and 28%.'},
        {q:'How is GST calculated on a product?',a:'GST Amount = Net Price × GST Rate / 100. For a ₹1,000 item at 18% GST: GST = ₹180, total = ₹1,180. For intra-state sales, it splits equally into CGST (₹90) and SGST (₹90).'},
        {q:'What is the difference between CGST, SGST and IGST?',a:'CGST goes to the Central Government, SGST to the State Government — both apply on intra-state sales. IGST applies on inter-state sales and goes to the Central Government.'},
        {q:'Can I claim GST input tax credit?',a:'Yes, registered businesses can claim ITC on purchases against their output GST liability, effectively paying tax only on value addition.'},
        {q:'Is this GST calculator accurate for all items?',a:'Yes, this calculator accurately computes GST at any rate. However, some items have special rates or exemptions — always verify the applicable rate for your specific item.'}
    ],
    bmi: [
        {q:'What is BMI and what does it measure?',a:'BMI (Body Mass Index) = weight (kg) / height² (m²). It estimates body fat based on height and weight. BMI categories: Underweight (<18.5), Normal (18.5-24.9), Overweight (25-29.9), Obese (30+).'},
        {q:'Is BMI accurate for everyone?',a:'BMI has limitations — it doesn\'t distinguish between muscle and fat. Athletes may show "overweight" BMI despite low body fat. It\'s less accurate for children, elderly, and pregnant women.'},
        {q:'What is a healthy BMI range?',a:'A BMI of 18.5 to 24.9 is considered normal. For Asian populations, some experts suggest a stricter range of 18.5 to 22.9 due to higher metabolic risk at lower BMIs.'},
        {q:'How can I improve my BMI?',a:'For overweight: reduce caloric intake by 500 cal/day, exercise 150 min/week, increase protein and fiber. For underweight: increase caloric intake with nutrient-dense foods, strength training, and adequate sleep.'},
        {q:'BMI vs body fat percentage — what\'s better?',a:'Body fat percentage is more accurate but harder to measure. BMI is a quick screening tool. For comprehensive health assessment, combine BMI with waist circumference and body fat measurements.'}
    ],
    tip: [
        {q:'How much should I tip?',a:'Standard tipping: 15-20% for good service in restaurants, 10% for takeout, 15-20% for delivery, 20%+ for exceptional service. In India, 10% is common.'},
        {q:'Should I tip on the pre-tax or post-tax amount?',a:'Traditionally, you tip on the pre-tax (subtotal) amount. However, tipping on the total (post-tax) is also common and simpler to calculate.'},
        {q:'How do I split a bill with tip?',a:'This calculator automatically divides the total (bill + tip) evenly among the number of people you specify, making group dining math effortless.'}
    ]
};

function buildCalcFAQ(calcId, calc) {
    var faqs = RICH_FAQS[calcId] || [];
    // Fallback to generic FAQs if no rich FAQs defined
    if (!faqs.length) {
        faqs = [
            { q: 'What is a ' + calc.name + '?', a: calc.desc + '. This tool provides instant, accurate results with no signup required.' },
            { q: 'How to use this calculator?', a: 'Enter your values in the input fields above. Results update automatically as you type, or click the Calculate button for a full breakdown with charts.' }
        ];
        if (calc.tips && calc.tips.length) faqs.push({ q: 'Any tips for better results?', a: calc.tips.join('. ') + '.' });
        faqs.push({ q: 'Is this calculator free?', a: 'Yes, 100% free forever. No signup required, no personal data stored. Calc Labz works offline as a PWA — install it for instant access anytime. We show ads to keep the service free.' });
    }

    // Inject FAQPage JSON-LD schema for SEO (deduplicated with updateMeta)
    removeSchema('jsonld-faq');
    var faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(function(f) {
            return { '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } };
        })
    };
    var schemaEl = document.createElement('script');
    schemaEl.type = 'application/ld+json'; schemaEl.id = 'jsonld-faq';
    schemaEl.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(schemaEl);

    return '<div class="calc-faq-wrap"><div class="calc-faq-hdr"><i class="fas fa-circle-question"></i>Frequently Asked Questions<span class="faq-count">' + faqs.length + '</span></div>'
        + faqs.map(function (f, i) {
            return '<div class="calc-faq-item" id="faq-' + calcId + '-' + i + '"><button class="calc-faq-q" onclick="toggleFAQ(this)"><span>' + escHtml(f.q) + '</span><i class="fas fa-chevron-down"></i></button><div class="calc-faq-a">' + escHtml(f.a) + '</div></div>';
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
            return '<div class="sr-item" onclick="openCalc(\'' + c.cat + '\',\'' + id + '\');clearSearch()">'
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
            + '<button class="hist-reopen" onclick="openCalc(\'' + (DB[h.calcId] ? DB[h.calcId].cat : 'math') + '\',\'' + h.calcId + '\')">Open</button></div>';
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
        + '<button class="btn btn-s" onclick="if(confirm(\'Clear all history?\')){calcHistory=[];localStorage.removeItem(\'cp_history\');showDashboard();showToast(\'History cleared\');}"><i class="fas fa-eraser"></i> Clear History</button>'
        + '<button class="btn btn-s" style="margin-top:8px" onclick="if(confirm(\'Clear all data?\')){localStorage.clear();location.reload();}"><i class="fas fa-trash"></i> Clear All Data</button></div>'
        + '</div>';
}

// ── BLOG ───────────────────────────────────────────
var BLOG_CAT_COLORS = {'Finance':'#6366f1','Tax':'#f59e0b','Health':'#10b981','Math':'#8b5cf6','Education':'#06b6d4','Lifestyle':'#f0544f'};
var BLOG_CAT_ICONS = {'Finance':'fa-chart-line','Tax':'fa-landmark','Health':'fa-heart-pulse','Math':'fa-calculator','Education':'fa-graduation-cap','Lifestyle':'fa-sun'};

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
    BLOG_POSTS.forEach(function(p){ if(cats.indexOf(p.cat)===-1) cats.push(p.cat); });
    var filterPills = cats.map(function(c){
        var active = (!filterCat && c==='All') || filterCat===c ? ' active' : '';
        return '<button class="blog-filter-pill' + active + '" onclick="showBlogSection(' + (c==='All' ? '' : "'" + c + "'") + ')">' + c + '</button>';
    }).join('');

    var filtered = filterCat ? BLOG_POSTS.filter(function(p){ return p.cat===filterCat; }) : BLOG_POSTS;
    var cards = filtered.map(function(p){
        var catColor = BLOG_CAT_COLORS[p.cat] || 'var(--p)';
        var catIcon = BLOG_CAT_ICONS[p.cat] || 'fa-file-alt';
        return '<div class="blog-card" onclick="showBlogPost(\'' + p.id + '\')">'
            + '<div class="blog-card-hdr" style="background:linear-gradient(135deg,' + catColor + ',' + catColor + '88)"></div>'
            + '<div class="blog-meta-row"><span class="blog-read-badge"><i class="fas fa-clock"></i>' + (p.readTime||'5 min') + '</span><span><i class="fas fa-calendar"></i>' + (p.date||'2025') + '</span></div>'
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
    var bp = BLOG_POSTS.find(function(p){ return p.id===postId; });
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
    var existArticle = document.getElementById('jsonld-article'); if(existArticle) existArticle.remove();
    var articleSchema = {'@context':'https://schema.org','@type':'Article',headline:bc.title,description:bp?bp.desc:'',datePublished:'2026-01-15',dateModified:'2026-04-01',author:{'@type':'Organization',name:'Calc Labz Team'},publisher:{'@type':'Organization',name:'Calc Labz'},mainEntityOfPage:{'@type':'WebPage','@id':window.location.href}};
    var aSchEl = document.createElement('script'); aSchEl.type='application/ld+json'; aSchEl.id='jsonld-article'; aSchEl.textContent=JSON.stringify(articleSchema); document.head.appendChild(aSchEl);

    // Build Table of Contents from h2 tags
    var bodyHTML = bc.body;
    var headings = bodyHTML.match(/<h2>(.*?)<\/h2>/g) || [];
    var tocHTML = '';
    if(headings.length > 2){
        var tocItems = headings.map(function(h,i){
            var text = escHtml(h.replace(/<\/?h2>/g, ''));
            return '<li onclick="document.getElementById(\'toc-' + i + '\').scrollIntoView({behavior:\'smooth\'})">' + text + '</li>';
        });
        tocHTML = '<div class="article-toc"><div class="article-toc-title"><i class="fas fa-list"></i> Table of Contents</div><ol>' + tocItems.join('') + '</ol></div>';
        var hIdx = 0;
        bodyHTML = bodyHTML.replace(/<h2>/g, function(){ return '<h2 id="toc-' + (hIdx++) + '">';
        });
    }

    // Sanitize blog body HTML before injection to strip on* handlers / javascript: URIs
    var safeBody = sanitizeHTML(bodyHTML);

    // Related posts (same category first)
    var relatedPosts = [];
    if(bp){
        relatedPosts = BLOG_POSTS.filter(function(p){ return p.id!==postId && p.cat===bp.cat; }).slice(0,3);
        if(relatedPosts.length < 3){
            var more = BLOG_POSTS.filter(function(p){ return p.id!==postId && p.cat!==bp.cat; }).slice(0, 3-relatedPosts.length);
            relatedPosts = relatedPosts.concat(more);
        }
    }
    var relatedHTML = '';
    if(relatedPosts.length){
        var relCards = relatedPosts.map(function(p){
            var catColor = BLOG_CAT_COLORS[p.cat]||'var(--p)';
            var catIcon = BLOG_CAT_ICONS[p.cat]||'fa-file-alt';
            return '<div class="blog-card" onclick="showBlogPost(\'' + p.id + '\')">'
                + '<div class="blog-card-hdr" style="background:linear-gradient(135deg,' + catColor + ',' + catColor + '88)"></div>'
                + '<div class="blog-cat"><i class="fas ' + catIcon + '"></i> ' + escHtml(p.cat) + '</div>'
                + '<div class="blog-title">' + escHtml(p.title) + '</div>'
                + '<div class="blog-link"><i class="fas fa-arrow-right"></i> Read guide</div></div>';
        }).join('');
        relatedHTML = '<div class="related-blogs"><h3><i class="fas fa-book-open"></i>You May Also Like</h3><div class="blog-grid related-blog-grid">' + relCards + '</div></div>';
    }

    var shareHTML = '<div class="share-bar"><span class="share-lbl">Share this article:</span>'
        + '<button class="share-btn wa" onclick="doShare(\'wa\',\'' + escHtml(bc.title) + '\')"><i class="fab fa-whatsapp"></i>WhatsApp</button>'
        + '<button class="share-btn tw" onclick="doShare(\'tw\',\'' + escHtml(bc.title) + '\')"><i class="fab fa-twitter"></i>Twitter</button>'
        + '<button class="share-btn" onclick="doShare(\'copy\',\'' + escHtml(bc.title) + '\')"><i class="fas fa-link"></i>Copy Link</button></div>';

    document.getElementById('mainContent').innerHTML =
        '<div class="article-wrap"><div class="crumb"><a onclick="showHome()">Home</a> <span>\u203a</span> <a onclick="showBlogSection()">Blog</a> <span>\u203a</span> ' + escHtml(bc.title) + '</div>'
        + '<h1>' + escHtml(bc.title) + '</h1>'
        + '<div class="article-meta"><span><i class="fas fa-calendar"></i>' + escHtml(bc.meta.date) + '</span><span><i class="fas fa-clock"></i>' + escHtml(bc.meta.readTime) + ' read</span><span><i class="fas fa-user"></i>' + escHtml(bc.meta.author) + '</span>' + (bp ? '<span class="article-cat-badge" style="background:' + (BLOG_CAT_COLORS[bp.cat]||'var(--p)') + '20;color:' + (BLOG_CAT_COLORS[bp.cat]||'var(--p)') + '"><i class="fas ' + (BLOG_CAT_ICONS[bp.cat]||'fa-tag') + '"></i>' + escHtml(bp.cat) + '</span>' : '') + '</div>'
        + tocHTML
        + '<div class="article-body">' + safeBody + '</div>'
        + (bc.cta ? '<div class="article-cta"><span style="flex:1"><strong>Ready to calculate?</strong> ' + escHtml(bc.cta.text) + '</span><button class="btn btn-p" onclick="openCalc(\'' + escHtml(bc.cta.cat) + '\',\'' + escHtml(bc.cta.calc) + '\')" ><i class="fas fa-calculator"></i> Open Calculator</button></div>' : '')
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
            html += '<div class="cmd-item" onclick="closeCmdPalette();' + a.action + '"><div class="ci-ico" style="background:var(--p)"><i class="fas ' + a.icon + '"></i></div><div class="ci-name">' + a.name + '</div><i class="fas fa-arrow-right ci-arrow"></i></div>';
        });
    }
    if (items.length) {
        html += '<div class="cmd-section">Calculators</div>';
        items.forEach(function (e) {
            var id = e[0], c = e[1], cat = CATS[c.cat] || {};
            html += '<div class="cmd-item" onclick="closeCmdPalette();openCalc(\'' + c.cat + '\',\'' + id + '\')"><div class="ci-ico" style="background:' + (cat.color || 'var(--p)') + '"><i class="fas ' + c.icon + '"></i></div><div><div class="ci-name">' + c.name + '</div><div class="ci-cat">' + (cat.name || '') + '</div></div><i class="fas fa-arrow-right ci-arrow"></i></div>';
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
function updateMeta(name, desc, catKey, calcId) {
    var pageTitle = name + ' — Free Online Calculator | Calc Labz';
    var pageDesc = name + ': ' + desc + '. Free, instant, no signup required.';
    var pageUrl = window.location.origin + '/?calc=' + calcId;

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

    // BreadcrumbList JSON-LD
    var cat = CATS[catKey] || {};
    injectBreadcrumbSchema([
        { name: 'Home', url: window.location.origin + '/' },
        { name: (cat.name || catKey) + ' Calculators', url: window.location.origin + '/?cat=' + catKey },
        { name: name, url: pageUrl }
    ]);

    // SoftwareApplication JSON-LD (replaces old generic WebApplication)
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
    var path = window.location.pathname;
    var params = new URLSearchParams(window.location.search);
    var calcId = params.get('calc');

    // SEO-friendly blog URL: /blog/slug-name
    if (path.indexOf('/blog/') === 0) {
        var slug = path.replace('/blog/', '').replace(/\/$/, '');
        // Validate slug is safe before using it
        if (/^[a-z0-9-]{1,80}$/.test(slug)) {
            var blogPost = BLOG_POSTS.find(function(p) { return p.slug === slug || p.id === slug; });
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
    // Static pages: ?page=about|privacy|terms
    var pageId = params.get('page');
    if (pageId === 'about') { showAboutPage(); return; }
    if (pageId === 'privacy') { showPrivacyPage(); return; }
    if (pageId === 'terms') { showTermsPage(); return; }
    if (calcId && isSafeCalcId(calcId)) {
        openCalc(DB[calcId].cat, calcId);
    } else {
        showHome();
    }
}

// Push SEO-friendly blog URL
function pushBlogUrl(postId) {
    var bp = BLOG_POSTS.find(function(p) { return p.id === postId; });
    if (bp && bp.slug && window.history && window.history.pushState) {
        var url = '/blog/' + bp.slug;
        window.history.pushState({type:'blog',id:postId}, bp.title, url);
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
    try { window.history.pushState({type:'static',id:'about'}, 'About | Calc Labz', '?page=about'); } catch(e) {}
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
        + '<div class="about-card"><div class="about-icon" style="background:linear-gradient(135deg,#06b6d4,#22d3ee)"><i class="fas fa-trophy"></i></div><h3>Verified Formulas</h3><p>Every calculator uses industry-standard, peer-reviewed formulas. Results match those of leading banks and institutions.</p></div>'
        + '<div class="about-card"><div class="about-icon" style="background:linear-gradient(135deg,#8b5cf6,#a78bfa)"><i class="fas fa-universal-access"></i></div><h3>Accessible & Fast</h3><p>Built to WCAG 2.1 AA standards. Screen-reader friendly, keyboard navigable, and mobile-first design.</p></div>'
        + '</div>'

        + '<div class="about-section">'
        + '<h2><i class="fas fa-th" style="color:var(--p);margin-right:8px"></i>Calculator Categories</h2>'
        + '<div class="about-cats">'
        + Object.entries(CATS).map(function(e){
            var key=e[0],cat=e[1];
            return '<div class="about-cat-pill" onclick="showCategory(\''+key+'\')"><span style="background:'+cat.color+'" class="about-cat-dot"><i class="fas '+cat.icon+'"></i></span>'+cat.name+' <em>('+CAT_LIST[key].length+')</em></div>';
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
        + '<button class="btn btn-p" onclick="showHome()"><i class="fas fa-calculator"></i> Browse Calculators</button>'
        + '<button class="btn btn-s" onclick="installPWA()"><i class="fas fa-download"></i> Install App (PWA)</button>'
        + '</div></div>'
        + '</div>';
}

// ── PRIVACY POLICY PAGE ────────────────────────────
function showPrivacyPage() {
    setQBtn(''); closeSidebar();
    document.title = 'Privacy Policy | Calc Labz';
    setMeta('description', 'Calc Labz Privacy Policy — we do not collect personal data. We use Google Analytics for anonymous usage insights and Google AdSense for ads. Your calculations stay on your device.');
    try { window.history.pushState({type:'static',id:'privacy'}, 'Privacy Policy | Calc Labz', '?page=privacy'); } catch(e) {}
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
        + '<div class="legal-back"><button class="btn btn-s" onclick="showHome()"><i class="fas fa-arrow-left"></i> Back to Home</button></div>'
        + '</div>';
}

// ── TERMS OF USE PAGE ──────────────────────────────
function showTermsPage() {
    setQBtn(''); closeSidebar();
    document.title = 'Terms of Use | Calc Labz';
    setMeta('description', 'Calc Labz Terms of Use — free to use for personal and commercial purposes. Calculator results are for informational purposes only.');
    try { window.history.pushState({type:'static',id:'terms'}, 'Terms of Use | Calc Labz', '?page=terms'); } catch(e) {}
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
        + '<button class="btn btn-s" onclick="showHome()"><i class="fas fa-arrow-left"></i> Back to Home</button>'
        + '<button class="btn btn-s" onclick="showPrivacyPage()"><i class="fas fa-user-shield"></i> Privacy Policy</button>'
        + '</div>'
        + '</div>';
}

// ── INIT ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    applyTheme();
    buildSidebar();
    handleRoute();
    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(function () { });
    }
});
window.addEventListener('popstate', handleRoute);
