self.addEventListener('install', () => {
  console.log('PWA installée');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});