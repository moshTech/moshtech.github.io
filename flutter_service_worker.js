'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "190e59b58292a5aadc6cfaabe9337618",
"index.html": "0495fbbe33c4755359c5df0e8e8b322d",
"/": "0495fbbe33c4755359c5df0e8e8b322d",
"main.dart.js": "14c962731c2492691ddae843501cdf01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3e92e585fb04e075fc188374c8245062",
"assets/AssetManifest.json": "4c7fe9b196ea0878a211332f85b1adc0",
"assets/NOTICES": "1240df118cf46206477e82472ecc1f70",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/change_trans_pin.png": "5f767c73f69303384437bf99c982c7db",
"assets/assets/images/dashboard_signup_first.png": "e86aa62d1d700601fd21fdfc32e2f6be",
"assets/assets/images/hexagon_medium.png": "d4530382449f5325addc01f50570bd51",
"assets/assets/images/reg_login_background.png": "f045af739f1373e7fdf89d41a666d42c",
"assets/assets/images/azalogo1.png": "e928726361704a089834bf68e36ae274",
"assets/assets/images/hexagon.png": "10e31def1e959ae03155111473cc6864",
"assets/assets/images/circle.png": "3f3c48599c1f96c9fb0798e4b95c397b",
"assets/assets/images/grid.png": "2d82d979e834d6a71a01d5bd2459b789",
"assets/assets/images/path_shape.png": "cf080f67f784664d6457aa32833169bc",
"assets/assets/images/azalogo.svg": "a27a2eed7ffe3d5d3ce88ee0d6de9ffa",
"assets/assets/images/login_background3.png": "f0287515dc5434d984033aeba6c521b7",
"assets/assets/images/hexagon_small.png": "bf9de45b0ae8b2707ed3cfd3cd7d4cb1",
"assets/assets/images/unnamed.png": "fdb3d077c33296ae5f77d32fbab89818",
"assets/assets/images/login_background2.jpg": "6bfe01eebb00a67de37e4d8c60d4c93f",
"assets/assets/images/login_background1.png": "94e61f1a25bc34c057159f425c21a22e",
"assets/assets/images/reg2.png": "edba6362b65039c4cebfaa008d837958",
"assets/assets/images/reg1.png": "c6333979b7805bb8d04599a813f30f93",
"assets/assets/images/azalogo.png": "cc7760ceb1280b477961124c3604e252",
"assets/assets/images/images.png": "529863b0b3e813b7f9261451d5d7a904",
"assets/assets/icons/transaction1.png": "21b36a9071209b2f35eb7730492d7ce6",
"assets/assets/icons/dashboardIcon.png": "75c3b868978a2d7647fd96e0d091096d",
"assets/assets/icons/transaction.png": "4c83bcf777e1cff9fe30afe7a41466e9",
"assets/assets/icons/aza_agent_icon.png": "6cafdebec2e74c70937624e4c2a00fca",
"assets/assets/icons/dashboard.png": "6da69ef49298118678a6de8e074b576d",
"assets/assets/icons/wallet.png": "8bf1b052be262d4cad25c1c05ecc61ee",
"assets/assets/icons/settings.png": "0199a6ae66ce34fa1a6440f3f46b3aae",
"assets/assets/icons/settings1.png": "86dd8e7716a9b7c8678d85787179f760",
"assets/assets/icons/cloud_upload.png": "b8b8103528268161070ffe5bb7d09ae0",
"assets/assets/icons/aza.png": "111a103ce8f7b1f21443eeffb1c48954",
"assets/assets/icons/wallet3.png": "f564cc651c6bd14625626196d97fc218",
"assets/assets/icons/not_icon_on.png": "f397a6bbad923954a5e3bd532498ad96",
"assets/assets/icons/logout.png": "efff0c11f93bdb59b547ac3602e1c577",
"assets/assets/icons/wallet1.png": "0430a0492f8d91084a1592e5fd5d3dc5",
"assets/assets/icons/bank_transfer_icon.png": "27a12f0db6c97b70e45adc11610a1827",
"assets/assets/icons/subagent.png": "98d33d24ffa3300dd91cf723606accc2",
"assets/assets/icons/subagent1.png": "67e6c52cd066b3f5f25e0f44fa6deb3b",
"assets/assets/icons/gtb_logo.png": "19e81d5810970c3da1cce580db41d0c9",
"assets/assets/icons/dashboard1.png": "45b391d7d34b10ea85970ffc289903ca",
"assets/assets/icons/menu.png": "223d2de7d10f04c83d2e717d98ffbde8",
"assets/assets/icons/upload.png": "10f4d581293df25fb0fa48428709d578",
"assets/assets/icons/load_azapay_icon.png": "7bd62152962482481dccdd9fb707104e",
"assets/assets/icons/qr_code.png": "2994cf99c0d46a2af9742f711a3119da",
"assets/assets/icons/not_icon.png": "d5890c9a07652a30e11967aa03212798",
"assets/assets/icons/pro.png": "1a5349b24a1f028e634cf817cffd5edd",
"assets/assets/icons/AZApay.svg": "8cec76a6e92f967627f402a1af320f23"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
