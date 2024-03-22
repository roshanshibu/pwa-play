self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("static-v1")
      .then((cache) => cache.addAll(["/offline-1.html", "/dog.svg"]))
  );
});

self.addEventListener("fetch", (e) => {
  if (navigator.onLine) {
    console.log("online");
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)) // if request is cached, return response from cache, otherwise fetch it from network
    );
  } else {
    console.log("offline");
    const url = new URL(e.request.url);
    if (url.pathname.endsWith("svg")) {
      e.respondWith(fetch("/dog.svg"));
    } else {
      e.respondWith(caches.match("/offline-1.html"));
    }
  }
});
