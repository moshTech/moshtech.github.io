'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "190e59b58292a5aadc6cfaabe9337618",
"index.html": "e1fad399836815336a5363a56f93c09a",
"/": "f58e6318b8159a595758850d9fff700f",
"main.dart.js": "92f8b70c7feadf737c9b521267448459",
"moshtech.github.io/version.json": "190e59b58292a5aadc6cfaabe9337618",
"moshtech.github.io/index.html": "f58e6318b8159a595758850d9fff700f",
"moshtech.github.io/main.dart.js": "a5c75e75a2833bf8833014af876774cf",
"moshtech.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"moshtech.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"moshtech.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"moshtech.github.io/manifest.json": "3e92e585fb04e075fc188374c8245062",
"moshtech.github.io/.git/config": "818d6ae9126ef11559072d94adcf7291",
"moshtech.github.io/.git/objects/0d/3a3fda78013722570eb30bdab2f57257307f5a": "9e2d7684ab20f8013d80c08ffd2f4e8b",
"moshtech.github.io/.git/objects/3e/64d9f5ff357f7d3f7c2826d9898bd7c34f12d4": "0cdcbe38102aec08542d1438308deb63",
"moshtech.github.io/.git/objects/68/e87f97ee074e5ab95b9e6ec74fa39e9d64fb60": "57239ab4b7b4b4e135f100e3e94dfec1",
"moshtech.github.io/.git/objects/04/351d4ef6fd08855d54012258c0db4f771270b3": "a8de87ca13f09cd4a113ecbf50c514ce",
"moshtech.github.io/.git/objects/6a/f2d6940a57586f1f0c747ac20ae9fea2dd9e02": "b63ba80e98ae5a3def12d49c61237aed",
"moshtech.github.io/.git/objects/35/a429330ba9d21aec1a9761d0959409fa25916a": "a22c5b7b3e87b7112923e3dc41587cef",
"moshtech.github.io/.git/objects/3c/a686db7822e9000be10a10f1b5bf496efb6a6a": "0a6e6292bb96873dcdc4b8b204affd93",
"moshtech.github.io/.git/objects/58/718b6fa8dc7eb0678975c57587cfbb1ab92155": "f5e7a741f9e875aa5121c137889f3791",
"moshtech.github.io/.git/objects/94/b7152731809f067874f8ccc67f406d11802323": "a6acf06c830e0dfb8e68ca4ee13476fc",
"moshtech.github.io/.git/objects/5f/9c603f4a77b063ac961f8e69f7efd693e415ed": "fa17c87d91c6b4697096dc9badfc42be",
"moshtech.github.io/.git/objects/05/6778f2c9fe199aff6c2020774e78973e4cd02a": "54ba11f5a446ea74f4c1fd961d8376a3",
"moshtech.github.io/.git/objects/9d/d5405141f0398835b80daf730e9fff0a59d6ae": "d31a5c2551f0ff171bd7defc56f04630",
"moshtech.github.io/.git/objects/9c/2256cb4bc8d5b9d4d275e65b65ed10824647eb": "d0114348f05807c6797ba8db4f7f8f95",
"moshtech.github.io/.git/objects/bb/480bcdf8f1fa3a0b650ac89e5282a030bf6e76": "7a5be830a88fa9522291dfb8344b8c8c",
"moshtech.github.io/.git/objects/b3/bc3a14af8a3e7d4e0a4a08c91b0d45ea3e92aa": "b1a6ffc3d96a2c916a0c70ba4731a5a2",
"moshtech.github.io/.git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"moshtech.github.io/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"moshtech.github.io/.git/objects/e5/6261ab0e52f3132002e6814030f8709a6f5107": "03584041466f849ead5268617913ae8e",
"moshtech.github.io/.git/objects/ee/0355572f2972fd82237a3a1aaa4defdb0ea069": "da7d2aaded6ea33beca753f4b28dc44b",
"moshtech.github.io/.git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
"moshtech.github.io/.git/objects/c1/b249eb335da8540d1f05567469fc6267f19e38": "40fba0e2d238c942ef12670a2a6b1b14",
"moshtech.github.io/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"moshtech.github.io/.git/objects/11/100febab69dd961d49f6c5a1e4b6bb01c71a8a": "cd608e62fe8336a4290227e65fdd73db",
"moshtech.github.io/.git/objects/16/554603f325285ded54c486ed298e27cd2fe65f": "80511010fe92dd7a7eff1292c5eb13da",
"moshtech.github.io/.git/objects/74/8b2415dd550f2bf0890993a7e1fd3e028c398c": "0fdad9d35582224b05392e286e76f45e",
"moshtech.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"moshtech.github.io/.git/objects/44/09f2498c9019a4bcc9fd284e8caf35d899aa73": "40e6d2381f5bee7226c5abd99fe3188e",
"moshtech.github.io/.git/objects/2a/fa294344e8fac0d63cc4cf526d16a588d462f7": "64910571899b39733af8fa145a3eede8",
"moshtech.github.io/.git/objects/2f/3e8b26c4cccd4797b6f7738f0127e10da487a6": "f7fe40555aafcfa82dff2d83300b6d2a",
"moshtech.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"moshtech.github.io/.git/objects/07/9a5919054eda1101545f9a08678de8f271fe85": "c81b3a5a6ffa1ce25d99b3b89774c7aa",
"moshtech.github.io/.git/objects/38/351749afb44f0a9fe3f82f565fbd121d9821e5": "f85ba072fc714fc7dda32bb3a3e8ed07",
"moshtech.github.io/.git/objects/08/ee6ff973ce17b66c6f9ae8ab73c8b47793f48a": "a0ee80fc0c3fd71859652e9ddfe84f1b",
"moshtech.github.io/.git/objects/99/2c36e31d8f7bfd75cde65ef715a7514361c6e0": "4299f83d3b8511612fcdb0dc3dc46964",
"moshtech.github.io/.git/objects/55/5c458d52093feda05bcfb7f45e38c8041b41f4": "1dae6cd50381f698bd302223890f0cac",
"moshtech.github.io/.git/objects/dc/1d98034747b26d7b54be8cd631e21e8100b849": "50db96878fff6e2ea28185ad50af76d9",
"moshtech.github.io/.git/objects/d2/9b8f9e555de287a3394835a634379a183fce12": "8ba54a4bb25f1da5dbedc6cafe6f3dc3",
"moshtech.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"moshtech.github.io/.git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
"moshtech.github.io/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"moshtech.github.io/.git/objects/a1/d23585de481d56124cdb28462c9f46121c3c75": "2a38175df53e6235bcababa53f46af4e",
"moshtech.github.io/.git/objects/f0/ae7d71cac809bc8f1be85ace999cb0869c1076": "89474d71172b79897b4d236b72a444fd",
"moshtech.github.io/.git/objects/46/b2ee367a32c1d22ba887f1c26c8171172df00c": "0f0534ac6e87d276f0e13061f76d937b",
"moshtech.github.io/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"moshtech.github.io/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"moshtech.github.io/.git/objects/2d/1ef25ecec9e84854bf166e6d657c9531d22a22": "7dffa0f309748437773dbf7107a0aeea",
"moshtech.github.io/.git/objects/77/08e0fd0a0d1e17b7287a4f88c8f36711f93a14": "31c0e535265cc292c09e6a92963b4776",
"moshtech.github.io/.git/objects/71/bde005dc62233eb30e33200050c11c1597f9f4": "517c541a539504bcfb05268e16f44d31",
"moshtech.github.io/.git/objects/8e/8bbe4b5279a878891a101b104b9f0c47d3aa1d": "eb467a8f60a1941634d89de744a83a25",
"moshtech.github.io/.git/objects/22/bd55dfa55d1fa14c475e8549c42c8e5d2644d0": "9f072ef520dac1855352cbb1a926b90d",
"moshtech.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"moshtech.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"moshtech.github.io/.git/logs/HEAD": "e535c198a67236985673b6400f16fb39",
"moshtech.github.io/.git/logs/refs/heads/main": "c2a7072f32348738e02d226120d9cf53",
"moshtech.github.io/.git/logs/refs/remotes/origin/main": "c3f93a3d2e0b1e0b46cf902ba5707773",
"moshtech.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"moshtech.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"moshtech.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"moshtech.github.io/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"moshtech.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"moshtech.github.io/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"moshtech.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"moshtech.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"moshtech.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"moshtech.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"moshtech.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"moshtech.github.io/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"moshtech.github.io/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"moshtech.github.io/.git/refs/heads/main": "868cba12c459f3429d20a199912a7f2f",
"moshtech.github.io/.git/refs/remotes/origin/main": "868cba12c459f3429d20a199912a7f2f",
"moshtech.github.io/.git/index": "c364ff7b3356b90173b75f83306b14b8",
"moshtech.github.io/.git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
"moshtech.github.io/assets/AssetManifest.json": "82d16ac642ec5d530b0019cd8f35241b",
"moshtech.github.io/assets/NOTICES": "c8809cc4c4b1aacff3647c1a91052ead",
"moshtech.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"moshtech.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"moshtech.github.io/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"moshtech.github.io/assets/assets/images/dashboard_signup_first.png": "e86aa62d1d700601fd21fdfc32e2f6be",
"moshtech.github.io/assets/assets/images/reg_login_background.png": "f045af739f1373e7fdf89d41a666d42c",
"moshtech.github.io/assets/assets/images/azalogo1.png": "e928726361704a089834bf68e36ae274",
"moshtech.github.io/assets/assets/images/grid.png": "2d82d979e834d6a71a01d5bd2459b789",
"moshtech.github.io/assets/assets/images/path_shape.png": "cf080f67f784664d6457aa32833169bc",
"moshtech.github.io/assets/assets/images/login_background3.png": "f0287515dc5434d984033aeba6c521b7",
"moshtech.github.io/assets/assets/images/unnamed.png": "fdb3d077c33296ae5f77d32fbab89818",
"moshtech.github.io/assets/assets/images/login_background2.png": "9587b8ee4e9cf43db4cee1d7f77fb684",
"moshtech.github.io/assets/assets/images/login_background1.png": "94e61f1a25bc34c057159f425c21a22e",
"moshtech.github.io/assets/assets/images/reg2.png": "edba6362b65039c4cebfaa008d837958",
"moshtech.github.io/assets/assets/images/reg1.png": "c6333979b7805bb8d04599a813f30f93",
"moshtech.github.io/assets/assets/images/azalogo.png": "aed2d89e6309ac9c3f362d31ca500e87",
"moshtech.github.io/assets/assets/images/images.png": "529863b0b3e813b7f9261451d5d7a904",
"moshtech.github.io/assets/assets/icons/dashboardIcon.png": "75c3b868978a2d7647fd96e0d091096d",
"moshtech.github.io/assets/assets/icons/transaction.png": "4c83bcf777e1cff9fe30afe7a41466e9",
"moshtech.github.io/assets/assets/icons/wallet.png": "0430a0492f8d91084a1592e5fd5d3dc5",
"moshtech.github.io/assets/assets/icons/settings.png": "0199a6ae66ce34fa1a6440f3f46b3aae",
"moshtech.github.io/assets/assets/icons/cloud_upload.png": "b8b8103528268161070ffe5bb7d09ae0",
"moshtech.github.io/assets/assets/icons/not_icon_on.png": "f397a6bbad923954a5e3bd532498ad96",
"moshtech.github.io/assets/assets/icons/logout.png": "efff0c11f93bdb59b547ac3602e1c577",
"moshtech.github.io/assets/assets/icons/subagent.png": "98d33d24ffa3300dd91cf723606accc2",
"moshtech.github.io/assets/assets/icons/upload.png": "10f4d581293df25fb0fa48428709d578",
"moshtech.github.io/assets/assets/icons/not_icon.png": "d5890c9a07652a30e11967aa03212798",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3e92e585fb04e075fc188374c8245062",
"assets/AssetManifest.json": "82d16ac642ec5d530b0019cd8f35241b",
"assets/NOTICES": "c8809cc4c4b1aacff3647c1a91052ead",
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
"assets/assets/images/login_background2.png": "9587b8ee4e9cf43db4cee1d7f77fb684",
"assets/assets/images/login_background1.png": "94e61f1a25bc34c057159f425c21a22e",
"assets/assets/images/reg2.png": "edba6362b65039c4cebfaa008d837958",
"assets/assets/images/reg1.png": "c6333979b7805bb8d04599a813f30f93",
"assets/assets/images/azalogo.png": "aed2d89e6309ac9c3f362d31ca500e87",
"assets/assets/images/images.png": "529863b0b3e813b7f9261451d5d7a904",
"assets/assets/icons/dashboardIcon.png": "75c3b868978a2d7647fd96e0d091096d",
"assets/assets/icons/transaction.png": "4c83bcf777e1cff9fe30afe7a41466e9",
"assets/assets/icons/wallet.png": "0430a0492f8d91084a1592e5fd5d3dc5",
"assets/assets/icons/settings.png": "0199a6ae66ce34fa1a6440f3f46b3aae",
"assets/assets/icons/cloud_upload.png": "b8b8103528268161070ffe5bb7d09ae0",
"assets/assets/icons/not_icon_on.png": "f397a6bbad923954a5e3bd532498ad96",
"assets/assets/icons/logout.png": "efff0c11f93bdb59b547ac3602e1c577",
"assets/assets/icons/subagent.png": "98d33d24ffa3300dd91cf723606accc2",
"assets/assets/icons/upload.png": "10f4d581293df25fb0fa48428709d578",
"assets/assets/icons/not_icon.png": "d5890c9a07652a30e11967aa03212798"
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
