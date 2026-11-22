/* PDF & Image Tools — central Analytics + Ads configuration.
   Owner/Developer: Md. Abdulla.
   HOW ADS TURN ON: when an ad network approves this site, paste its loader
   code in the marked section below and set ads.enabled = true.
   Only this one file changes — every page already has the slots
   (#ad-top under the header, #ad-bottom above the footer).
   Until then the slots stay empty and invisible. */
window.SITE_CONFIG = {
  gaMeasurementId: 'G-42RSB0YK8Z', /* GA4 property "PDF & Image Tools" (owner: Md. Abdulla) */
  ads: { enabled: false, network: '', client: '' }
};

/* Google Analytics 4 — loads only when a Measurement ID is set. */
(function () {
  var id = window.SITE_CONFIG.gaMeasurementId;
  if (!id) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', id);
})();

/* App install (PWA): captures Chrome's install prompt; the Install button
   on every page triggers it, or shows manual steps when no prompt exists. */
(function () {
  var deferred = null;
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
  });
  window.addEventListener('appinstalled', function () {
    var bar = document.getElementById('installBar');
    if (bar) bar.style.display = 'none';
  });
  document.addEventListener('click', function (e) {
    if (!e.target || e.target.id !== 'installBtn') return;
    if (deferred) {
      deferred.prompt();
      deferred.userChoice.then(function () { deferred = null; });
    } else {
      var help = document.getElementById('installHelp');
      if (help) help.style.display = help.style.display === 'none' ? 'block' : 'none';
    }
  });
  /* Already installed / running as app → hide the bar. */
  if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
    var bar = document.getElementById('installBar');
    if (bar) bar.style.display = 'none';
  }
})();

/* === AD NETWORK LOADER — paste the approved network code here === */
(function () {
  var cfg = window.SITE_CONFIG.ads;
  if (!cfg.enabled) return;
  /* Example (AdSense, after approval with a custom domain):
     var s = document.createElement('script');
     s.async = true; s.crossOrigin = 'anonymous';
     s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + cfg.client;
     document.head.appendChild(s);
     document.querySelectorAll('.ad-slot').forEach(function (slot) {
       var ins = document.createElement('ins');
       ins.className = 'adsbygoogle';
       ins.style.display = 'block';
       ins.setAttribute('data-ad-client', cfg.client);
       ins.setAttribute('data-ad-format', 'auto');
       ins.setAttribute('data-full-width-responsive', 'true');
       slot.appendChild(ins);
       (window.adsbygoogle = window.adsbygoogle || []).push({});
     });
  */
})();
