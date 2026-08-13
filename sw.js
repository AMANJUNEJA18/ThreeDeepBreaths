const CACHE_VERSION='tdb-clean-sync-20260813-v10';
const STATIC_CACHE=CACHE_VERSION+'-static';
const STATIC_ASSETS=['/manifest.json','/icon-192.png','/icon-512.png','/og-image.jpg'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(STATIC_CACHE).then(c=>c.addAll(STATIC_ASSETS)).catch(()=>{}));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==STATIC_CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET')return;
 if(r.mode==='navigate'||r.destination==='document'){
  e.respondWith(fetch(r,{cache:'no-store'}).then(res=>{const c=res.clone();caches.open(STATIC_CACHE).then(x=>x.put('/index.html',c)).catch(()=>{});return res;}).catch(()=>caches.match('/index.html')));
  return;
 }
 if(STATIC_ASSETS.includes(new URL(r.url).pathname)) e.respondWith(caches.match(r).then(c=>c||fetch(r)));
});