importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
    workbox.routing.registerRoute(
        new RegExp('/*'),
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'pwa-cache'
        })
    );
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}