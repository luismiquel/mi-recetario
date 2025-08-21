const CACHE_NAME = "recetario-v4-" + Date.now();
const CORE_ASSETS = ["./","./index.html","./manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys
        .filter((k) => k.startsWith("recetario-") && k !== CACHE_NAME)
        .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Navegación/HTML -> network-first
  if (req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html")) {
    event.respondWith((async () => {
      try {
        const net = await fetch(req, { cache: "no-store" });
        const copy = net.clone();
        const cache = await caches.open(CACHE_NAME);
        cache.put(req, copy);
        return net;
      } catch {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match(req);
        return cached || cache.match("./index.html");
      }
    })());
    return;
  }

  // Resto -> cache-first
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req);
    if (cached) return cached;

    const net = await fetch(req);
    if (req.method === "GET" && net && net.status === 200) {
      cache.put(req, net.clone());
    }
    return net;
  })());
});
