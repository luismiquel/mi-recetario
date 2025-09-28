/* sw.js — Recetario PWA con precache + runtime cache */
const CACHE_VERSION = "recetario-precache-v3";
const RUNTIME_CACHE = "recetario-runtime-v3";
const IMG_CACHE     = "recetario-img-v3";

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./styles.css",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

const IMAGE_FALLBACK =
  'data:image/svg+xml;charset=utf-8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop stop-color="#f59e0b" offset="0"/><stop stop-color="#fbbf24" offset="1"/>
      </linearGradient></defs>
      <rect fill="url(#g)" x="0" y="0" width="800" height="500"/>
      <text x="50%" y="50%" font-family="system-ui,Segoe UI,Roboto" font-size="36" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">
        Foto no disponible
      </text>
    </svg>`
  );

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => ![CACHE_VERSION, RUNTIME_CACHE, IMG_CACHE].includes(k)).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

async function trimCache(cacheName, maxEntries = 120) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= maxEntries) return;
  await Promise.all(keys.slice(0, keys.length - maxEntries).map((k) => cache.delete(k)));
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (!req.url.startsWith("http")) return;

  const dest = req.destination;

  if (dest === "document" || (req.mode === "navigate")) {
    event.respondWith(networkFirst(req));
    return;
  }
  if (dest === "style" || dest === "script" || dest === "worker") {
    event.respondWith(staleWhileRevalidate(req, RUNTIME_CACHE));
    return;
  }
  if (dest === "image") {
    event.respondWith(imageCacheFirst(req));
    return;
  }
  event.respondWith(staleWhileRevalidate(req, RUNTIME_CACHE));
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE_VERSION);
  try {
    const fresh = await fetch(request);
    cache.put(request, fresh.clone()).catch(() => {});
    return fresh;
  } catch {
    const cached = await caches.match(request, { ignoreSearch: true });
    if (cached) return cached;
    const index = (await caches.match("./index.html")) || (await caches.match("/index.html"));
    return index || new Response("Offline", { status: 503, statusText: "Offline" });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedPromise = cache.match(request);
  const fetchPromise = fetch(request)
    .then((res) => { if (res && res.status === 200) cache.put(request, res.clone()).catch(() => {}); return res; })
    .catch(() => null);
  const cached = await cachedPromise;
  return cached || (await fetchPromise) || new Response("", { status: 204 });
}

async function imageCacheFirst(request) {
  const cache = await caches.open(IMG_CACHE);
  const cached = await cache.match(request, { ignoreSearch: true });
  if (cached) return cached;
  try {
    const res = await fetch(request, { cache: "no-store" });
    if (res && res.ok) {
      cache.put(request, res.clone()).catch(() => {});
      trimCache(IMG_CACHE, 120).catch(() => {});
      return res;
    }
  } catch {}
  return fetch(IMAGE_FALLBACK);
}
