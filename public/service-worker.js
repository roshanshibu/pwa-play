console.log("hello");
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (url.pathname.endsWith("svg")) {
    e.respondWith(fetch("/dog.svg"));
  }
});
