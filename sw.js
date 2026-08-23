const CACHE_VERSION = 'tdb-final-20260823-be-v15';
const STATIC_CACHE = CACHE_VERSION + '-static';
const STATIC_ASSETS = [
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/og-image.jpg',
  '/breath-loop-mmmm-v9.wav',
  '/gong.wav'
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
        .then(response => {
          const copy = response.clone();
          caches.open(STATIC_CACHE)
            .then(cache => cache.put('/index.html', copy))
            .catch(() => {});
          return response;
        })
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
