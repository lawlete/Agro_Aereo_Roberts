const CACHE_NAME = 'agro-roberts-gestor-cache-v1.0'; // Changed version to reflect new app
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/index.tsx', // Main application script module
  '/manifest.json',
  // Add paths to your icons here if you want them to be cached immediately
  // e.g., '/icons/icon-192x192.png', '/icons/icon-512x512.png'
  // For now, we'll let them be cached on first fetch if not explicitly listed
  
  // Tailwind CSS is from CDN, so it's subject to standard browser caching.
  // Google Fonts are also external.
];

self.addEventListener('install', event => {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(URLS_TO_CACHE);
      })
      .then(() => {
        return self.skipWaiting(); // Activate worker immediately
      })
  );
});

self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
        return self.clients.claim(); // Take control of all open clients
    })
  );
});

self.addEventListener('fetch', event => {
  // For navigation requests (HTML pages), try network first, then cache.
  // This ensures users get the latest HTML if online.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          return response;
        })
        .catch(() => {
          // If network fails, try to serve from cache
          return caches.match(event.request)
            .then(response => {
              return response || caches.match('/index.html'); // Fallback to main shell
            });
        })
    );
    return;
  }

  // For other requests (CSS, JS, images, etc.), use cache-first strategy.
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Serve from cache
        }
        return fetch(event.request).then(
          networkResponse => {
            if (networkResponse && networkResponse.status === 200 && networkResponse.type !== 'opaque' && (event.request.url.startsWith(self.location.origin) || event.request.url.includes('esm.sh'))) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }
            return networkResponse;
          }
        ).catch(error => {
          console.error('[ServiceWorker] Fetch failed; returning offline page instead.', error);
        });
      })
  );
});