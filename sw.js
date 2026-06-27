const CACHE = 'lumis-v3';
const PRECACHE = [
  '/index.html',
  '/catalogue.html',
  '/watch.html',
  '/history.html',
  '/404.html',
  '/anime-home.html',
  '/anime-detail.html',
  '/anime-watch.html',
  '/style.css',
  '/catalogue.css',
  '/anime.css',
  '/main.js',
  '/catalogue.js',
  '/anime-app.js',
  '/images/logo.png',
  '/images/endgame.jpg'
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
