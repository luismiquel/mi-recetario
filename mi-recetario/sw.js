// Service Worker PWA – cache-first con fallback y clones seguros
const CACHE_NAME = 'recetario-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
  // si más tarde añades iconos, agrégalos aquí
];

// Precache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activar y limpiar caches antiguos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Estrategia: cache-first con actualización en segundo plano
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Evita cachear llamadas no-GET
  if (req.method !== 'GET') {
    event.respondWith(fetch(req).catch(() => caches.match('./index.html')));
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req)
        .then((networkRes) => {
          // Clonar antes de leer/cachar
          const resClone = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => {
            // Sólo cachea 200 y tipo básico/opaques aptos
            if (
              networkRes.ok &&
              (networkRes.type === 'basic' || networkRes.type === 'opaque')
            ) {
              cache.put(req, resClone);
            }
          });
          return networkRes;
        })
        .catch(() => cached || caches.match('./index.html'));
      // Devuelve cache si existe, si no, la red
      return cached || fetchPromise;
    })
  );
});
