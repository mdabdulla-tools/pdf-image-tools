const CACHE = 'pdf-image-tools-site-v1';
const FILES = ["./", "./index.html", "./manifest.json", "./image-to-pdf.html", "./compress-pdf.html", "./pdf-to-image.html", "./merge-pdf.html", "./image-compressor.html", "./passport-photo-maker.html", "./image-resizer.html", "./split-pdf.html", "./image-converter.html", "./rotate-pdf.html", "./delete-pdf-pages.html", "./image-cropper.html", "./rotate-flip-image.html", "./add-page-numbers.html", "./add-watermark.html", "./photo-filters.html", "./photo-collage.html", "./image-grid-splitter.html", "./privacy.html"];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
