// Cache name for versioning (update this to force cache refresh)
const cacheName = 'CS-v1';

// List of files to cache (relative to service worker location)
const cachedFiles = [
    '../',
    '../index.html',
    '../favicon/manifest.json',
    '../favicon/apple-touch-icon.png',
    '../favicon/web-app-manifest-192x192.png',
    '../js/main.js',
    '../css/main.css',
    '../css/normalize.min.css',
    '../img/cassidy.jpg',
    '../img/cramer.jpg',
    '../img/duffy.jpg',
    '../img/gabor.jpg',
    '../img/aths.png',
    '../img/share.png'
];

// Install event - caches specified files
self.addEventListener('install', event => {
    console.log('Service Worker Install Event');

    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log('Caching Files...');
                return cache.addAll(cachedFiles);
            })
            .then(() => {
                console.log('All assets cached, skipping waiting');
                return self.skipWaiting(); // Activate the new service worker immediately
            })
            .catch(error => console.error('Cache Failed', error))
    );
});

// Activate event - clears old caches if cacheName changes
self.addEventListener('activate', event => {
    console.log('Service Worker Activated');

    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== cacheName) {
                        console.log('Removing Old Cache:', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );

    return self.clients.claim(); // Take control of any open pages immediately
});

self.addEventListener('fetch', event => {
    console.log('Fetch event occurred:', event.request.url);
    event.respondWith(
        caches
            .match(event.request)
            .then(response => response || fetch(event.request))
    );
});

function closeNotification(message, event) {
    console.log(message, event.notification.data);
    event.notification.close();  // Closes the notification
}
self.addEventListener("notificationclose", (event) => {
    closeNotification("Notification closed:", event);
});

self.addEventListener("notificationclick", (event) => {
    if (event.action !== "close") {  // Ignore close action
        event.waitUntil(
            self.clients.matchAll({ type: "window", includeUncontrolled: true })
                .then((allClients) => {
                    console.log("All clients:", allClients);  // Log matching clients
                    for (let i = 0; i < allClients.length; i++) {
                        if (allClients[i].visibilityState === "visible") {
                            console.log("Navigating to:", event.notification.data.loc);
                            allClients[i].navigate(event.notification.data.loc);
                            break;  // Stop loop once navigated
                        }
                    }
                })
        );
    }
    closeNotification("Notification clicked", event);
});
