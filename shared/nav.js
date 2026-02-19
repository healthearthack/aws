var navContent = '<div class="nav-links">' +
    '<a href="index.html">HOME BASE</a>' +
    '<a href="apps/Magic2U-Design-System/index.html">Magic2U</a>' +
    '<a href="apps/Coinsextra/index.html">Coinsextra</a>' +
    '<a href="apps/Architex-pect-O/index.html">Architex PectO</a>' +
    '<a href="apps/Bit-of-Business-OS/index.html">Bit-of-Business-OS</a>' +
    '<a href="apps/MLucid-Dre/index.html">MLucid Dre-</a>' +
    '<a href="apps/We-at-hero-intel/index.html">Weather-o-Intel</a>' +
    '</div>';

document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("nav-container");
    if (container) { container.innerHTML = navContent; }
});
