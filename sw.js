/* sw.js — Recetario Español (offline + caché de imágenes externas)
   Funciona con index.html como SPA y fallback de imágenes si no hay red.
*/
const APP_VER = "recetario-1.7.0";
const CACHE_CORE = `core-${APP_VER}`;
const CACHE_PAGES = `pages-${APP_VER}`;
const CACHE_IMAGES = `images-${APP_VER}`;
const MAX_IMAGES = 120; // límite para no crecer sin control

// Rutas base que conviene precachear (ajusta si tu index está en subcarpeta)
const CORE_ASSETS = [
  "./",           // raíz bajo el scope del SW
  "./index.html", // SPA
];

// Utilidades
async function putSafe(cacheName, request, response) {
  try {
    const cache = await caches.open(cacheName);
    await cache.put(request, response.clone());
  } catch (_) {}
  return response;
}
async function trimCache(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= maxItems) return;
  // Borra los más antiguos
  await cache.delete(keys[0]);
  return trimCache(cacheName, maxItems);
}
function offlineImagePlaceholder(url = "") {
  // SVG simple legible como fallback de imágenes sin red
  const title = decodeURIComponent((url.split("/").pop() || "Receta").split("?")[0])
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[-_]/g, " ")
    .slice(0, 60);
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#e5e7eb"/><stop offset="1" stop-color="#d1d5db"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#g)"/>
  <text x="50%" y="48%" text-anchor="middle" fill="#6b7280" font-size="28" font-family="system-ui,Segoe UI,Roboto">Sin imagen</text>
  <text x="50%" y="60%" text-anchor="middle" fill="#9ca3af" font-size="16" font-family="system-ui,Segoe UI,Roboto">${title}</text>
</svg>`;
  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml", "Cache-Control": "no-store" },
    status: 200,
  });
}

// Install: precache core
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_CORE);
      await cache.addAll(CORE_ASSETS);
    })().then(() => self.skipWaiting())
  );
});

// Activate: limpia versiones antiguas
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter(
            (k) =>
              ![CACHE_CORE, CACHE_PAGES, CACHE_IMAGES].includes(k)
          )
          .map((k) => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
});

// Estrategias:
// - Navegación (mode: navigate) → SPA: network first, fallback a cache index
// - HTML mismo origen → network first, fallback cache
// - Imágenes (mismo y cross-origin) → cache first, SWR cuando sea posible, fallback SVG si offline
// - Resto GET → stale-while-revalidate
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const isSameOrigin = url.origin === self.location.origin;

  // 1) Navegación SPA
  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const net = await fetch(req);
          const res = net.clone();
          putSafe(CACHE_PAGES, req, res);
          return net;
        } catch {
          // offline: intenta devolver index del cache
          const cache = await caches.open(CACHE_CORE);
          return (await cache.match("./index.html")) || new Response("", { status: 503 });
        }
      })()
    );
    return;
  }

  // 2) Imágenes (incluye Wikipedia, Commons, loremflickr)
  if (req.destination === "image") {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_IMAGES);
        const hit = await cache.match(req);
        if (hit) {
          // revalida en segundo plano
          event.waitUntil(
            (async () => {
              try {
                const fresh = await fetch(req, { mode: "no-cors" });
                // Aunque sea opaque, lo cacheamos para mantener actualizado
                await cache.put(req, fresh.clone());
                await trimCache(CACHE_IMAGES, MAX_IMAGES);
              } catch {}
            })()
          );
          return hit;
        }
        // No estaba en caché
        try {
          // Para dominios que responden con CORS limitado, permitimos opaque
          const resp = await fetch(req, { mode: "no-cors" });
          // Si va bien, guardamos y devolvemos
          putSafe(CACHE_IMAGES, req, resp.clone()).then(() =>
            trimCache(CACHE_IMAGES, MAX_IMAGES)
          );
          return resp;
        } catch {
          // Sin red: devolvemos SVG de cortesía
          return offlineImagePlaceholder(req.url);
        }
      })()
    );
    return;
  }

  // 3) HTML del mismo origen (no navigate)
  if (isSameOrigin && req.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      (async () => {
        try {
          const net = await fetch(req);
          putSafe(CACHE_PAGES, req, net.clone());
          return net;
        } catch {
          const cache = await caches.open(CACHE_PAGES);
          return (await cache.match(req)) || (await caches.match("./index.html"));
        }
      })()
    );
    return;
  }

  // 4) Resto GET → Stale-While-Revalidate
  event.respondWith(
    (async () => {
      const cacheName = isSameOrigin ? CACHE_PAGES : CACHE_CORE;
      const cache = await caches.open(cacheName);
      const cached = await cache.match(req);
      const networkPromise = fetch(req)
        .then((res) => {
          putSafe(cacheName, req, res.clone());
          return res;
        })
        .catch(() => null);

      return cached || networkPromise || new Response("", { status: 504 });
    })()
  );
});

// Mensajes desde página para forzar actualización
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
