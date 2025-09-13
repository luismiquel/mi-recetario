// 📦 Nombre de la caché (cambia versión al actualizar)
const CACHE = "recetario-v401";

const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",       // estilos locales
  "./manifest.json",
  "./favicon.ico",
  "./icons/icon-16.png",
  "./icons/icon-32.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./img/aperitivo.svg",
  "./img/primero.svg",
  "./img/segundo.svg",
  "./img/postre.svg"
];

// 🚀 Instalar: precache de recursos
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ♻️ Activar: limpiar versiones antiguas
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// 🌐 Interceptar peticiones
self.addEventListener("fetch", e => {
  const req = e.request;
  const url = new URL(req.url);

  // Solo atender recursos del mismo origen
  if (url.origin !== location.origin) return;

  // Navegaciones → fallback a index si offline
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).catch(() => caches.match("./index.html")));
    return;
  }

  // Imágenes → estrategia stale-while-revalidate
  if (req.destination === "image") {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(req);
      const fetchPromise = fetch(req).then(res => {
        cache.put(req, res.clone());
        return res;
      }).catch(() => cached);
      return cached || fetchPromise;
    })());
    return;
  }

  // Resto → estrategia cache-first
  e.respondWith(
    caches.match(req).then(res => res || fetch(req))
  );
});
