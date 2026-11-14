/**
 * Gateway — BGMC Obs vs Inpatient Criteria
 * Service Worker v2.0
 *
 * Strategy
 *  - The app page (/criteria) opens INSTANTLY from the saved copy, then a
 *    fresh copy is fetched in the background. If the fresh copy is different,
 *    it is saved and the page is told ("gw-update") so it can refresh.
 *  - Fonts, icons and the manifest are saved once and served from the device.
 *  - Everything else goes straight to the network, untouched.
 */

const CACHE_NAME = 'gateway-criteria-v2';
const APP_URL    = '/criteria';

// Saved on install so the app works offline after the first visit
const PRECACHE = [
  APP_URL,
  '/manifest.json',
  '/fonts/inter-latin-var.woff2',
  '/fonts/lora-latin-600.woff2',
  '/icons/icon-180.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

const isStatic = p => p.startsWith('/fonts/') || p.startsWith('/icons/') || p === '/manifest.json';
const isApp    = p => p === '/criteria' || p === '/criteria.html' || p === '/criteria/';

// ── Install: save the app shell ──────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.all(
        // Save each file on its own so one failure does not block the rest
        PRECACHE.map(url =>
          fetch(url, { cache: 'reload' })
            .then(res => { if (res.ok && !res.redirected) return cache.put(url, res); })
            .catch(() => {})
        )
      ))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: remove old caches, take control ────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

// Fetch a fresh copy of the app page; if it changed, save it and notify pages
async function refreshApp() {
  const cache = await caches.open(CACHE_NAME);
  const fresh = await fetch(APP_URL, { cache: 'no-store' });
  if (!fresh.ok || fresh.redirected) return fresh;

  const cached   = await cache.match(APP_URL);
  const freshTxt = await fresh.clone().text();
  const oldTxt   = cached ? await cached.text() : null;

  if (freshTxt !== oldTxt) {
    await cache.put(APP_URL, fresh.clone());
    if (oldTxt !== null) {
      const pages = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      pages.forEach(p => p.postMessage({ type: 'gw-update' }));
    }
  }
  return fresh;
}

// ── Fetch ────────────────────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // App page: saved copy first, refresh in the background
  if (isApp(url.pathname)) {
    event.respondWith((async () => {
      const cache  = await caches.open(CACHE_NAME);
      const cached = await cache.match(APP_URL);
      if (cached) {
        event.waitUntil(refreshApp().catch(() => {}));
        return cached;
      }
      // Nothing saved yet — go to the network
      try { return await refreshApp(); }
      catch (e) { return fetch(req); }
    })());
    return;
  }

  // Fonts, icons, manifest: device copy first, network if missing
  if (isStatic(url.pathname)) {
    event.respondWith((async () => {
      const cache  = await caches.open(CACHE_NAME);
      const cached = await cache.match(url.pathname);
      if (cached) return cached;
      const res = await fetch(req);
      if (res.ok) cache.put(url.pathname, res.clone());
      return res;
    })());
  }
});
