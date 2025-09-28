# Recetario Español · 160 recetas (PWA)

Búsqueda, voz manos libres (Web Speech), cocina guiada con temporizador, lista de la compra y favoritos. PWA lista para offline.

## Estructura
- `index.html`: app (JS embebido).
- `styles.css`: estilos globales.
- `sw.js`: Service Worker (precache + cachés).
- `manifest.json`: PWA.
- `icons/`: `icon-192.png`, `icon-512.png`.

## Desarrollo local
Abre con cualquier servidor estático (mejor HTTPS para STT):
```bash
npx serve .           # http
# o
npx http-server -S -C cert.pem -K key.pem  # https (si tienes certificados)
