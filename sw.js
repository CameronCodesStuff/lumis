const CACHE = 'lumis-v4';
const PRECACHE = [
  '/lumis/index.html',
  '/lumis/catalogue.html',
  '/lumis/watch.html',
  '/lumis/history.html',
  '/lumis/404.html',
  '/lumis/anime-home.html',
  '/lumis/anime-detail.html',
  '/lumis/anime-watch.html',
  '/lumis/style.css',
  '/lumis/catalogue.css',
  '/lumis/anime.css',
  '/lumis/main.js',
  '/lumis/catalogue.js',
  '/lumis/anime-app.js',
  '/lumis/images/logo.png',
  '/lumis/images/endgame.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      if (res && res.status === 200) {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    }))
  );
});
