/**
 * Gateway — BGMC Obs vs Inpatient Criteria
 * Service Worker v1.0
 * Caches the app shell for fully offline use after first load.
 */

const CACHE_NAME  = 'gateway-criteria-v1';
const FONT_CACHE  = 'gateway-fonts-v1';

// Core app files to cache immediately on install
const APP_SHELL = [
  '/criteria',
  '/criteria.html',
];

// Google Fonts domains — cached separately with longer TTL
const FONT_ORIGINS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

// ── Install: pre-cache app shell ─────────────────────────────────────────────
self.addEventListener('install', event => {
  console.log('[GW-SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(APP_SHELL).then(() => {
        console.log('[GW-SW] App shell cached');
        return self.skipWaiting(); // Activate immediately
      });
    }).catch(err => {
      console.log('[GW-SW] Install cache error (non-fatal):', err);
      return self.skipWaiting();
    })
  );
});

// ── Activate: clean up old caches ────────────────────────────────────────────
self.addEventListener('activate', event => {
  console.log('[GW-SW] Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME && name !== FONT_CACHE)
          .map(name => {
            console.log('[GW-SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim()) // Take control of all pages
  );
});

// ── Fetch: serve from cache, fall back to network ────────────────────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip non-GET requests and cross-origin requests (except fonts)
  if (event.request.method !== 'GET') return;

  // ── Font requests: cache-first with long TTL ─────────────────────────────
  if (FONT_ORIGINS.some(origin => url.hostname.includes(origin))) {
    event.respondWith(
      caches.open(FONT_CACHE).then(cache => {
        return cache.match(event.request).then(cached => {
          if (cached) return cached;
          return fetch(event.request).then(response => {
            if (response.ok) cache.put(event.request, response.clone());
            return response;
          }).catch(() => cached); // If network fails, return whatever we have
        });
      })
    );
    return;
  }

  // ── App requests: network-first with cache fallback ──────────────────────
  // Try network first (gets updates), fall back to cache if offline
  if (url.pathname.startsWith('/criteria') || url.pathname === '/') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cache the fresh response for next time
          if (response.ok) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, response.clone());
            });
          }
          return response;
        })
        .catch(() => {
          // Offline — serve from cache
          return caches.match(event.request).then(cached => {
            if (cached) {
              console.log('[GW-SW] Offline — serving from cache:', url.pathname);
              return cached;
            }
            // Last resort: try the root criteria page
            return caches.match('/criteria.html') ||
                   caches.match('/criteria');
          });
        })
    );
  }
});
