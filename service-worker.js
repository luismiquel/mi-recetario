const VERSION = "v1.0.0";
const CACHE_STATIC = `recetario-static-${VERSION}`;
const CORE_ASSETS = ["/","/index.html","/manifest.json"];

// Instalar
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_STATIC).then(c => c.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

// Activar: limpia versiones antiguas + habilita navigationPreload
self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => (k !== CACHE_STATIC ? caches.delete(k) : null)));
    if (self.registration.navigationPreload) { await self.registration.navigationPreload.enable().catch(()=>{}); }
    self.clients.claim();
  })());
});

// Fetch
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  // Navegación (HTML): network-first con fallback
  if (req.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const preload = await event.preloadResponse;
        return preload || await fetch(req);
      } catch {
        const cache = await caches.open(CACHE_STATIC);
        return (await cache.match("/index.html")) || new Response("Sin conexión.", { status: 503 });
      }
    })());
    return;
  }

  // Resto: stale-while-revalidate
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_STATIC);
    const cached = await cache.match(req);
    const net = fetch(req).then(res => { cache.put(req, res.clone()); return res; }).catch(()=>null);
    return cached || net || new Response("No disponible.", { status: 504 });
  })());
});
