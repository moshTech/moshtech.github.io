'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "190e59b58292a5aadc6cfaabe9337618",
"index.html": "182a9e782a67c7cdbe6360a35e6c3851",
"/": "182a9e782a67c7cdbe6360a35e6c3851",
"main.dart.js": "b9efb67c19e4f3c7a5106a488d455596",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3e92e585fb04e075fc188374c8245062",
"assets/AssetManifest.json": "3277b15733c8d4d57621aed2b0cd66e9",
"assets/NOTICES": "c7d269af6cf4c316d394733c24560dab",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/dashboard_signup_first.png": "e86aa62d1d700601fd21fdfc32e2f6be",
"assets/assets/images/reg_login_background.png": "f045af739f1373e7fdf89d41a666d42c",
"assets/assets/images/azalogo1.png": "e928726361704a089834bf68e36ae274",
"assets/assets/images/grid.png": "2d82d979e834d6a71a01d5bd2459b789",
"assets/assets/images/path_shape.png": "cf080f67f784664d6457aa32833169bc",
"assets/assets/images/login_background3.png": "f0287515dc5434d984033aeba6c521b7",
"assets/assets/images/unnamed.png": "fdb3d077c33296ae5f77d32fbab89818",
"assets/assets/images/login_background2.jpg": "6bfe01eebb00a67de37e4d8c60d4c93f",
"assets/assets/images/login_background1.png": "94e61f1a25bc34c057159f425c21a22e",
"assets/assets/images/reg2.png": "edba6362b65039c4cebfaa008d837958",
"assets/assets/images/reg1.png": "c6333979b7805bb8d04599a813f30f93",
"assets/assets/images/azalogo.png": "cc7760ceb1280b477961124c3604e252",
"assets/assets/images/images.png": "529863b0b3e813b7f9261451d5d7a904",
"assets/assets/icons/dashboardIcon.png": "75c3b868978a2d7647fd96e0d091096d",
"assets/assets/icons/transaction.png": "4c83bcf777e1cff9fe30afe7a41466e9",
"assets/assets/icons/wallet.png": "0430a0492f8d91084a1592e5fd5d3dc5",
"assets/assets/icons/settings.png": "0199a6ae66ce34fa1a6440f3f46b3aae",
"assets/assets/icons/cloud_upload.png": "b8b8103528268161070ffe5bb7d09ae0",
"assets/assets/icons/not_icon_on.png": "f397a6bbad923954a5e3bd532498ad96",
"assets/assets/icons/logout.png": "efff0c11f93bdb59b547ac3602e1c577",
"assets/assets/icons/wallet1.png": "f564cc651c6bd14625626196d97fc218",
"assets/assets/icons/subagent.png": "98d33d24ffa3300dd91cf723606accc2",
"assets/assets/icons/menu.png": "223d2de7d10f04c83d2e717d98ffbde8",
"assets/assets/icons/upload.png": "10f4d581293df25fb0fa48428709d578",
"assets/assets/icons/not_icon.png": "d5890c9a07652a30e11967aa03212798",
"assets/assets/icons/pro.png": "1a5349b24a1f028e634cf817cffd5edd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
