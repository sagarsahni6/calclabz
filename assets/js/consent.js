/* ═══════════════════════════════════════════════════
   Calc Labz — Consent Manager
   Lightweight cookie/tracking consent for GA & AdSense.
   
   - Default state: analytics and ads DISABLED.
   - User can accept or reject via a non-invasive banner.
   - Consent stored in localStorage under 'calclabz_consent'.
   - GA and AdSense scripts only load after explicit acceptance.
   ═══════════════════════════════════════════════════ */
'use strict';

(function () {
    var CONSENT_KEY = 'calclabz_consent';
    var GA_ID = 'G-KBNL7BG63K';
    var ADSENSE_ID = 'ca-pub-3010631666598300';
    var _gaLoaded = false;
    var _adsLoaded = false;

    /** Read stored consent: 'accepted' | 'rejected' | null */
    function getConsent() {
        try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
    }

    /** Persist consent decision */
    function setConsent(value) {
        try { localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* quota exceeded */ }
    }

    /** Inject Google Analytics scripts */
    function loadGA() {
        if (_gaLoaded) return;
        _gaLoaded = true;
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
        document.head.appendChild(s);
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', GA_ID);
    }

    /** Inject Google AdSense script */
    function loadAdSense() {
        if (_adsLoaded) return;
        _adsLoaded = true;
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + ADSENSE_ID;
        s.crossOrigin = 'anonymous';
        document.head.appendChild(s);
        // Inject ad placement slots after the library loads
        s.onload = function () { injectAdSlots(); };
    }

    /** Dynamically inject AdSense ad units into calculator and content pages */
    function injectAdSlots() {
        if (typeof adsbygoogle === 'undefined') return;
        var main = document.getElementById('mainContent');
        if (!main) return;

        // Helper: create a responsive ad unit element
        function createAdUnit(format) {
            var wrap = document.createElement('div');
            wrap.className = 'ad-slot';
            wrap.style.cssText = 'margin:20px 0;text-align:center;min-height:100px;overflow:hidden;';
            var ins = document.createElement('ins');
            ins.className = 'adsbygoogle';
            ins.style.display = 'block';
            ins.setAttribute('data-ad-client', ADSENSE_ID);
            ins.setAttribute('data-ad-slot', ''); // Slot ID assigned by AdSense dashboard
            ins.setAttribute('data-ad-format', format || 'auto');
            ins.setAttribute('data-full-width-responsive', 'true');
            wrap.appendChild(ins);
            return wrap;
        }

        // Only inject if no ad slots already present
        if (main.querySelector('.ad-slot')) return;

        // Strategy: inject ads at natural content breaks
        // 1. After FAQ section (if present)
        var faq = main.querySelector('.calc-faq-wrap');
        if (faq && faq.parentNode) {
            faq.parentNode.insertBefore(createAdUnit('auto'), faq.nextSibling);
            try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { }
        }

        // 2. After the result card (if present)
        var resultCard = main.querySelector('[id^="res-"]');
        if (resultCard && resultCard.parentNode) {
            var afterResult = resultCard.nextElementSibling;
            resultCard.parentNode.insertBefore(createAdUnit('auto'), afterResult);
            try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { }
        }

        // 3. Bottom of main content (always — works for homepage, blog, category pages)
        if (!faq && !resultCard) {
            main.appendChild(createAdUnit('auto'));
            try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { }
        }
    }

    /** Show the consent banner */
    function showBanner() {
        // Don't show if already decided
        if (getConsent()) return;

        var banner = document.createElement('div');
        banner.id = 'consent-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Cookie consent');
        banner.innerHTML =
            '<div class="consent-inner">'
            + '<p class="consent-text"><i class="fas fa-cookie-bite" aria-hidden="true"></i> '
            + 'We use <strong>Google Analytics</strong> and <strong>Google AdSense</strong> to improve our service and keep it free. '
            + 'No personal data is collected by Calc Labz itself. '
            + '<a href="/privacy" class="consent-link">Privacy Policy</a></p>'
            + '<div class="consent-actions">'
            + '<button class="consent-btn consent-accept" data-consent="accept">Accept</button>'
            + '<button class="consent-btn consent-reject" data-consent="reject">Reject</button>'
            + '</div>'
            + '</div>';
        document.body.appendChild(banner);

        // Animate in
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                banner.classList.add('consent-show');
            });
        });

        // Handle clicks via delegation
        banner.addEventListener('click', function (e) {
            var btn = e.target.closest('[data-consent]');
            if (!btn) return;
            var action = btn.getAttribute('data-consent');
            if (action === 'accept') {
                setConsent('accepted');
                loadGA();
                loadAdSense();
            } else {
                setConsent('rejected');
            }
            banner.classList.remove('consent-show');
            setTimeout(function () { banner.remove(); }, 400);
        });
    }

    /** Revoke consent — called from Dashboard clear-data */
    function revokeConsent() {
        try { localStorage.removeItem(CONSENT_KEY); } catch (e) { }
        _gaLoaded = false;
        _adsLoaded = false;
        // Note: already-loaded scripts can't be unloaded; requires page reload
    }

    // Public API
    window.CalcLabzConsent = {
        get: getConsent,
        revoke: revokeConsent,
        showBanner: showBanner
    };

    // Auto-initialize on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        var consent = getConsent();
        if (consent === 'accepted') {
            // User previously accepted — load scripts immediately
            loadGA();
            loadAdSense();
        } else if (!consent) {
            // No decision yet — show banner
            showBanner();
        }
        // If 'rejected', do nothing — no banner, no scripts
    }
})();
