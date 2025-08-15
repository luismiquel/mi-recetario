/* Service Worker – Recetario (Netlify-friendly) */
const VERSION = "v2.0.0";
const CACHE_NAME = `recetario-${VERSION}`;

// Detecta la base (raíz o subcarpeta) a partir de dónde vive el SW
const BASE = new URL(self.location.href).pathname.replace(/[^/]+$/, "");

// Precarga mínimos para modo offline
const CORE_ASSETS = [
  BASE,
  BASE + "index.html",
  BASE + "manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.allSettled(CORE_ASSETS.map(p => cache.add(p).catch(()=>null)));
  })());
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => (k !== CACHE_NAME ? caches.delete(k) : null)));
    if (self.registration.navigationPreload) {
      await self.registration.navigationPreload.enable().catch(()=>{});
    }
    await self.clients.claim();
  })());
});

// Estrategias:
// - Navegación: network-first con fallback a index.html (offline).
// - Same-origin: stale-while-revalidate.
// - Terceros: red y, si falla, caché si existe.
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Navegación (SPA)
  if (req.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const preload = await event.preloadResponse;
        if (preload) return preload;
        return await fetch(new Request(req, { cache: "no-store" }));
      } catch {
        const cache = await caches.open(CACHE_NAME);
        const fb = await cache.match(BASE + "index.html");
        return fb || new Response("Sin conexión.", { status: 503 });
      }
    })());
    return;
  }

  // Same-origin
  if (url.origin === self.location.origin) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(req);
      const net = fetch(req).then(res => {
        if (res && res.status === 200 && (res.type === "basic" || res.type === "opaque")) {
          cache.put(req, res.clone()).catch(()=>{});
        }
        return res;
      }).catch(()=>null);
      return cached || net || new Response("No disponible.", { status: 504 });
    })());
    return;
  }

  // Terceros
  event.respondWith((async () => {
    try { return await fetch(req); }
    catch {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(req);
      return cached || new Response("Sin conexión.", { status: 503 });
    }
  })());
});
