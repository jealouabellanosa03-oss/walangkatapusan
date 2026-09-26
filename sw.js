/* =========================================================
   CYCLECARE - SERVICE WORKER (OFFLINE SUPPORT)
========================================================= */

const CACHE_NAME = 'cyclecare-cache-v3';

const OFFLINE_URLS = [
    './',
    './index.html',
    './style.css',
    './script.js'
];
/* =========================================================
   INSTALL
========================================================= */

self.addEventListener('install', function(event) {

    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(OFFLINE_URLS);
            })
    );

});


/* =========================================================
   ACTIVATE
========================================================= */

self.addEventListener('activate', function(event) {

    event.waitUntil(

        caches.keys()
            .then(function(keys) {

                return Promise.all(

                    keys.map(function(key) {

                        if (key !== CACHE_NAME) {
                            return caches.delete(key);
                        }

                    })

                );

            })

            .then(function() {
                return self.clients.claim();
            })

    );

});


/* =========================================================
   FETCH
========================================================= */

self.addEventListener('fetch', function(event) {

    const request = event.request;

    // Only GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Only same-origin requests
    if (
        new URL(request.url).origin !==
        self.location.origin
    ) {
        return;
    }

    event.respondWith(

        caches.match(request)

            .then(function(cachedResponse) {

                // Return cached file
                if (cachedResponse) {
                    return cachedResponse;
                }

                // Otherwise try network
                return fetch(request)

                    .then(function(networkResponse) {

                        if (
                            !networkResponse ||
                            networkResponse.status !== 200
                        ) {
                            return networkResponse;
                        }

                        const responseClone =
                            networkResponse.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {

                                cache.put(
                                    request,
                                    responseClone
                                );

                            });

                        return networkResponse;

                    })

                    .catch(function() {

                        // Offline page fallback
                        if (request.mode === 'navigate') {

                            return caches.match(
                                './index.html'
                            );

                        }

                    });

            })

    );

});