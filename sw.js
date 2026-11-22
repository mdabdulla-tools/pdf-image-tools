/* Monetag verification + ads service worker (zone 12320151).
   Required by Monetag for site verification and MultiTag; do not remove. */
self.options = {
    "domain": "5gvci.com",
    "zoneId": 12320151
}
self.lary = ""
importScripts('https://5gvci.com/act/files/service-worker.min.js?r=sw')

const CACHE = 'pdf-image-tools-site-v4';
const FILES = ["./", "./index.html", "./manifest.json", "./image-to-pdf.html", "./compress-pdf.html", "./pdf-to-image.html", "./merge-pdf.html", "./image-compressor.html", "./passport-photo-maker.html", "./image-resizer.html", "./split-pdf.html", "./image-converter.html", "./rotate-pdf.html", "./delete-pdf-pages.html", "./image-cropper.html", "./rotate-flip-image.html", "./add-page-numbers.html", "./add-watermark.html", "./photo-filters.html", "./photo-collage.html", "./image-grid-splitter.html", "./privacy.html", "./ads.js", "./icon-192.png", "./icon-512.png"];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
