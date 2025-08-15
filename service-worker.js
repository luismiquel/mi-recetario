/* Service Worker – Recetario
   - Funciona en raíz o subcarpeta (auto-detecta BASE)
   - Navegación: network-first con fallback a index.html (offline)
   - Resto GET same-origin: stale-while-revalidate
   - Limpieza de cachés antiguas por versión
*/
const VERSION = "v1.1.0";
const CACHE_NAME = `recetario-${VERSION}`;

// Directorio donde vive este sw.js (raíz o subcarpeta)
const BASE = new URL(self.location.href).pathname.replace(/[^/]+$/, ""); // ej: "/", "/recetario/"

// Recursos nucleares (se resuelven contra BASE)
const CORE_ASSETS = [
  BASE,                 // carpeta (equivale a GET de la ruta / o /subcarpeta/)
  BASE + "index.html",
  BASE + "manifest.json"
];

// Utilidad: ¿es del mismo origen?
const isSameOrigin = (url) => url.origin === self.location.origin;

// ---- Instalación: precache básico + activación inmediata
self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Intentamos precache, si alguno falla no rompemos toda la instalación
    await Promise.allSettled(CORE_ASSETS.map(path => cache.add(path).catch(()=>null)));
  })());
  self.skipWaiting();
});

// ---- Activación: limpia versiones antiguas + navigationPreload
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

// ---- Mensajes opcionales desde la página para forzar actualización inmediata
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

// ---- Estrategias de fetch
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Solo gestionamos GET
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // 1) Navegación (documentos/SPA): network-first con fallback a index.html
  if (req.mode === "navigate") {
    event.respondWith((async () => {
      try {
        // Si hay navigationPreload, úsala (más rápido)
        const preload = await event.preloadResponse;
        if (preload) return preload;

        // Fuerza a pedir sin tirar de caché del navegador
        return await fetch(new Request(req, { cache: "no-store" }));
      } catch (err) {
        // Offline o fallo → devolvemos index.html desde caché (de la misma BASE)
        const cache = await caches.open(CACHE_NAME);
        const fallback = await cache.match(BASE + "index.html");
        return fallback || new Response("Sin conexión y sin caché disponible.", { status: 503, statusText: "Offline" });
      }
    })());
    return;
  }

  // 2) Recursos same-origin (JS/CSS/IMG/JSON…): stale-while-revalidate
  if (isSameOrigin(url)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(req);

      const fetchPromise = fetch(req).then((res) => {
        // Solo cacheamos respuestas válidas (status 200, tipo básico/opaque permitido)
        if (res && res.status === 200 && (res.type === "basic" || res.type === "opaque")) {
          cache.put(req, res.clone()).catch(()=>{});
        }
        return res;
      }).catch(() => null);

      // Devuelve rápido lo que haya en caché y actualiza en segundo plano
      return cached || fetchPromise || new Response("No disponible (offline).", { status: 504 });
    })());
    return;
  }

  // 3) Terceros (CDNs, APIs externas): intenta red y si falla, da caché si existe
  event.respondWith((async () => {
    try {
      return await fetch(req);
    } catch {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(req);
      return cached || new Response("Sin conexión.", { status: 503 });
    }
  })());
});
