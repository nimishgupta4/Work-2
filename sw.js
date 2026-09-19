// IDPS Parent Portal — minimal service worker.
// Intentionally does NOT cache anything: this app shows live fee/attendance/notice
// data, and a cached response could show a parent stale (wrong) information.
// This file exists only so the browser treats the site as an installable app.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Always go to the network — never serve from a cache.
  event.respondWith(fetch(event.request));
});
