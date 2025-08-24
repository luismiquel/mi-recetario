const CACHE = "recetario-v150";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./favicon.svg",
  "./favicon.ico",
  "./icons/icon-16.png",
  "./icons/icon-32.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./img/aperitivo.svg",
  "./img/primero.svg",
  "./img/segundo.svg",
  "./img/postre.svg"
, "./styles.css"];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  const req = e.request;
  const url = new URL(req.url);

  if (url.origin !== location.origin) return;

  // Navegaciones: si falla red, sirve index (SPA fallback)
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).catch(() => caches.match("./index.html")));
    return;
  }

  // ImÃƒÂ¡genes: stale-while-revalidate
  if (req.destination === "image") {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(req);
      const fetchPromise = fetch(req).then(res => { cache.put(req, res.clone()); return res; })
                                    .catch(() => cached);
      return cached || fetchPromise;
    })());
    return;
  }

  // Resto: cache-first
  e.respondWith(caches.match(req).then(res => res || fetch(req)));
});








