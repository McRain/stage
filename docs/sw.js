const CACHE_NAME = "CACHE_VERSION_1";
const FILE_EXTENSIONS_TO_CACHE = [
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.woff',
  '.woff2',
  '.ttf',
  '.ico',
  '.hdr',
  '.bin',
  '.glb',
  '.gltf'
];

const CACHE_FILES = [
  '/editor/index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(CACHE_FILES);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (!url.protocol.startsWith('http')) {
    return;
  }
  if (FILE_EXTENSIONS_TO_CACHE.some(ext => url.pathname.endsWith(ext))) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request)
            .then(response => {
              const responseToCache = response.clone();              
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache)
                });

              return response;
            })
            .catch(err => {
              console.error('Fetch failed:', err);
              throw err;
            });
        })
    );
  } else {
    return fetch(event.request);
  }
});