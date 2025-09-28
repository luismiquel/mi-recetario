const CACHE_NAME = "recetario-v5-" + Date.now();
const CORE_ASSETS = ["./","./index.html","./manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k.startsWith("recetario-") && k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

function isHttp(req) {
  try { const u=new URL(req.url); return u.protocol==="http:"||u.protocol==="https:"; }
  catch { return false; }
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || !isHttp(req)) return;

  // HTML -> network-first
  if (req.mode === "navigate" || (req.headers.get("accept")||"").includes("text/html")) {
    event.respondWith((async () => {
      try {
        const net = await fetch(req, { cache: "no-store" });
        const url = new URL(req.url);
        if ((url.origin === self.location.origin)) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(req, net.clone());
        }
        return net;
      } catch {
        const cache = await caches.open(CACHE_NAME);
        return (await cache.match(req)) || cache.match("./index.html");
      }
    })());
    return;
  }

  // Otros -> cache-first (mismo origen)
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req);
    if (cached) return cached;

    try {
      const net = await fetch(req);
      const url = new URL(req.url);
      if (net && net.status === 200 && url.origin === self.location.origin) {
        cache.put(req, net.clone());
      }
      return net;
    } catch {
      return Response.error();
    }
  })());
});
