/* ═══════════════════════════════════════════════════
   Calc Labz — CSS Swap (Performance)
   Swaps non-blocking stylesheets from media="print" to media="all".
   Loaded as the first deferred script so CSS applies ASAP after FCP.
   CSP-safe: no inline event handlers needed.
   ═══════════════════════════════════════════════════ */
'use strict';
(function() {
    var ids = ['css-fonts', 'css-fa', 'css-main'];
    for (var i = 0; i < ids.length; i++) {
        var el = document.getElementById(ids[i]);
        if (el) el.media = 'all';
    }
})();
