/**
 * Enterprise Service Worker — Mahindra Rivenza Global Edge Architecture
 * Offline Resilience, Stale-While-Revalidate Edge Caching & Instant Navigation
 */

const CACHE_NAME = 'mahindra-rivenza-edge-v1';
const PRECACHE_ASSETS = [
  '/',
  '/favicon.svg',
  '/images/mahindra-lifespaces-logo.svg',
  '/site.webmanifest',
  '/offline.html',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[Service Worker] Pre-cache warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests or third-party API dispatches (e.g. form submissions)
  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  // Immutable Astro build chunks & static assets: Cache-First
  if (url.pathname.startsWith('/_astro/') || url.pathname.startsWith('/images/')) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // HTML Pages: Stale-While-Revalidate
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            if (networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            }
            return networkResponse;
          })
          .catch(() => {
            // Return cached version or offline fallback
            return cached || caches.match('/offline.html');
          });

        return cached || fetchPromise;
      })
    );
    return;
  }

  // Default network with cache fallback
  event.respondWith(
    caches.match(request).then((cached) => {
      return cached || fetch(request);
    })
  );
});
