const CACHE_NAME = "PVZ-cache-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./imgs/512.png",
  "./imgs/192.png",
  "./swf/pvz.swf"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
