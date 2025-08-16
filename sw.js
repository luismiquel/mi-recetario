/* Service Worker – Recetario (Netlify) */
const VERSION = "v4.1.0";
const CACHE = `recetario-${VERSION}`;
const BASE = new URL(self.location.href).pathname.replace(/[^/]+$/, "");
const CORE = [ BASE, BASE + "index.html", BASE + "manifest.json" ];

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await Promise.allSettled(CORE.map(p => c.add(p).catch(()=>null)));
  })());
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => (k !== CACHE ? caches.delete(k) : null)));
    if (self.registration.navigationPreload) {
      await self.registration.navigationPreload.enable().catch(()=>{});
    }
    await self.clients.claim();
  })());
});

// Navegación: network-first → fallback índice
// Same-origin: stale-while-revalidate
// Terceros: red → fallback caché si existe
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (req.mode === "navigate") {
    e.respondWith((async () => {
      try {
        const preload = await e.preloadResponse;
        if (preload) return preload;
        return await fetch(new Request(req, { cache: "no-store" }));
      } catch {
        const c = await caches.open(CACHE);
        return (await c.match(BASE + "index.html")) || new Response("Sin conexión.", { status: 503 });
      }
    })());
    return;
  }

  if (url.origin === self.location.origin) {
    e.respondWith((async () => {
      const c = await caches.open(CACHE);
      const cached = await c.match(req);
      const net = fetch(req).then(res => {
        if (res && res.status === 200 && (res.type === "basic" || res.type === "opaque")) {
          c.put(req, res.clone()).catch(()=>{});
        }
        return res;
      }).catch(()=>null);
      return cached || net || new Response("No disponible.", { status: 504 });
    })());
    return;
  }

  e.respondWith((async () => {
    try { return await fetch(req); }
    catch {
      const c = await caches.open(CACHE);
      const cached = await c.match(req);
      return cached || new Response("Sin conexión.", { status: 503 });
    }
  })());
});
