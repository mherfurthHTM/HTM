const CACHE="htm-beta-0.032-profile-edit";
const ASSETS=[
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./qr/stempeln.png"
];

self.addEventListener("install",event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});

self.addEventListener("activate",event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch",event=>{
  const req=event.request;
  if(req.method!=="GET")return;
  const url=new URL(req.url);

  // HTML/navigation always prefers the network, so a new GitHub version is visible immediately.
  if(req.mode==="navigate" || url.pathname.endsWith("/index.html") || url.pathname.endsWith("/")){
    event.respondWith((async()=>{
      try{
        const fresh=await fetch(req,{cache:"no-store"});
        return fresh;
      }catch(err){
        return (await caches.match("./index.html")) || (await caches.match("./")) || Response.error();
      }
    })());
    return;
  }

  // Static assets can stay cached, but are refreshed when missing.
  event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(response=>{
    if(response && response.ok){
      const copy=response.clone();
      caches.open(CACHE).then(cache=>cache.put(req,copy));
    }
    return response;
  })));
});
