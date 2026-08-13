const CACHE_VERSION='tdb-final-20260813';
const STATIC_CACHE=CACHE_VERSION+'-static';
const STATIC_ASSETS=['/manifest.json','/icon-192.png','/icon-512.png','/og-image.jpg'];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(STATIC_CACHE).then(cache=>cache.addAll(STATIC_ASSETS)));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==STATIC_CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('message',event=>{
  if(event.data && event.data.type==='SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;

  // Always ask the network first for HTML/navigation so a new deployment
  // becomes visible without a manual cache purge.
  if(req.mode==='navigate' || req.destination==='document'){
    event.respondWith(
      fetch(req,{cache:'no-store'})
        .then(response=>{
          const copy=response.clone();
          caches.open(STATIC_CACHE).then(cache=>cache.put('/index.html',copy)).catch(()=>{});
          return response;
        })
        .catch(()=>caches.match('/index.html'))
    );
    return;
  }

  // Static assets can be cached safely.
  if(STATIC_ASSETS.includes(new URL(req.url).pathname)){
    event.respondWith(caches.match(req).then(cached=>cached||fetch(req)));
  }
});
