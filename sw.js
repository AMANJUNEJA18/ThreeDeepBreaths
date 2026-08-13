const CACHE_VERSION = 'tdb-final-20260813-v9';
const STATIC_CACHE = CACHE_VERSION + '-static';
const STATIC_ASSETS = [
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/og-image.jpg'
];

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(STATIC_ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== STATIC_CACHE)
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.method !== 'GET') return;

  if (
    request.mode === 'navigate' ||
    request.destination === 'document'
  ) {
    event.respondWith(
      fetch(request, { cache: 'no-store' })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  const path = new URL(request.url).pathname;

  if (STATIC_ASSETS.includes(path)) {
    event.respondWith(
      caches.match(request)
        .then(cached => cached || fetch(request))
    );
  }
});
