// workbox init setting
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);
workbox.core.setCacheNameDetails({ prefix: "js-primer-v1" });
workbox.googleAnalytics.initialize();
// reload asap
workbox.skipWaiting();
workbox.clientsClaim();
// precache
workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "636ab4c68f308cbc4539fecb2e9e9329"
  },
  {
    "url": "appendix/links/index.html",
    "revision": "1ac52bd8667a6782ee853f57cdd82ada"
  },
  {
    "url": "basic/array/index.html",
    "revision": "04c9c113af428589061c85b7e91bb6d4"
  },
  {
    "url": "basic/async/img/promise-chain.png",
    "revision": "34b48836a6f476f1d57f197e121041c2"
  },
  {
    "url": "basic/async/img/then-rejected-promise.png",
    "revision": "c45405c987bb1a739850f71be6d010f0"
  },
  {
    "url": "basic/async/index.html",
    "revision": "580c77d5e2c3d39f4f18c49469153996"
  },
  {
    "url": "basic/class/index.html",
    "revision": "d3a529255c45490e8647af17c5fa9e46"
  },
  {
    "url": "basic/comments/index.html",
    "revision": "2e7fcb28999329fb41b383abb06d2379"
  },
  {
    "url": "basic/condition/index.html",
    "revision": "3ece2ba5acc5102058c21d34e3948704"
  },
  {
    "url": "basic/data-type/index.html",
    "revision": "91af45152a97c7167b9b62b40ba63342"
  },
  {
    "url": "basic/date/index.html",
    "revision": "4ffba65772a025df7231aff265b0a515"
  },
  {
    "url": "basic/ecmascript/index.html",
    "revision": "18eb3a73d7a81c1b8f2ae522745b744c"
  },
  {
    "url": "basic/error-try-catch/img/console.error.png",
    "revision": "5fa103e5189ff041370d915232f5770e"
  },
  {
    "url": "basic/error-try-catch/img/error.png",
    "revision": "dff0e4322cb06d42d699119b6f89428f"
  },
  {
    "url": "basic/error-try-catch/index.html",
    "revision": "a5add8244539d3637456116d86b0bbfd"
  },
  {
    "url": "basic/error-try-catch/src/console/index.html",
    "revision": "f1d5ff6a6b82e975f74ac1e3d877f723"
  },
  {
    "url": "basic/error-try-catch/src/error.html",
    "revision": "359cbe7900932fac79eb321c76e104b4"
  },
  {
    "url": "basic/function-declaration/index.html",
    "revision": "b19313637793de181b1fc6ae2914a2c9"
  },
  {
    "url": "basic/function-scope/index.html",
    "revision": "73c8f7de1227b36d7a7dd701b4a2e692"
  },
  {
    "url": "basic/function-this/index.html",
    "revision": "04bf8e9b1ecd5015adb629fe1f05e7b5"
  },
  {
    "url": "basic/implicit-coercion/img/JavaScript-Equality-Table.png",
    "revision": "249e75cfe1f22458bfa9fe71480a6c0d"
  },
  {
    "url": "basic/implicit-coercion/index.html",
    "revision": "80ae4626e5932af894d558302b132439"
  },
  {
    "url": "basic/index.html",
    "revision": "bdd642977f81f300e6d5555203f8f2e8"
  },
  {
    "url": "basic/introduction/img/javascript-ecmascript.png",
    "revision": "40a83bcf5b26783fc68b7caeb792d36d"
  },
  {
    "url": "basic/introduction/index.html",
    "revision": "7c637409a7a8882a581e808f14d62003"
  },
  {
    "url": "basic/json/index.html",
    "revision": "2ba1fe67fdaeed1a2e04432492689986"
  },
  {
    "url": "basic/loop/index.html",
    "revision": "c00fad44116aa63a43e6d4de93947eb6"
  },
  {
    "url": "basic/loop/public/index.html",
    "revision": "226c5a5e385446f7b048d1b990a8f603"
  },
  {
    "url": "basic/map-and-set/index.html",
    "revision": "ca1f3fc57077130990a3e73fbb118ba1"
  },
  {
    "url": "basic/math/index.html",
    "revision": "d375bc1cee8aa4e97d5c3b7d8d0acaf6"
  },
  {
    "url": "basic/module/index.html",
    "revision": "1ff83d5795843401685b9b7f92114c87"
  },
  {
    "url": "basic/object/index.html",
    "revision": "f2ade87447d549f4525b7dda23c46275"
  },
  {
    "url": "basic/operator/img/0000_0000_0000_0000_0000_0000_0000_0001.png",
    "revision": "580d8149815fb30e1eb1212a5b71dcad"
  },
  {
    "url": "basic/operator/img/1111_1111_1111_1111_1111_1111_1111_1111.png",
    "revision": "8610b114ac684d837756124da4e0f9fd"
  },
  {
    "url": "basic/operator/index.html",
    "revision": "1e461b4d9769854271bfd47f98d51d15"
  },
  {
    "url": "basic/other-parts/index.html",
    "revision": "2adb12e6b9105fc4376ce5af4b6abfa1"
  },
  {
    "url": "basic/prototype-object/img/object-prototype.png",
    "revision": "6bbe9c151a73ec89ed45606a0b42975f"
  },
  {
    "url": "basic/prototype-object/index.html",
    "revision": "1a9bf3d644dbae2d4ad50e4ad8ff1f80"
  },
  {
    "url": "basic/read-eval-print/img/syntax-error.png",
    "revision": "889dfb7dec547bc8bde6fed9566d204f"
  },
  {
    "url": "basic/read-eval-print/img/web-console.png",
    "revision": "abfdb41b731d613c7898cfadbc849160"
  },
  {
    "url": "basic/read-eval-print/index.html",
    "revision": "a854c8ac5d5c891d146650b96e46c658"
  },
  {
    "url": "basic/read-eval-print/src/empty/index.html",
    "revision": "5a2a8b11dda21e4b54164d24dd751dc4"
  },
  {
    "url": "basic/read-eval-print/src/example/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error-typo/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/runtime-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/statement-expression/index.html",
    "revision": "61e2038a0bba45ce4db2eb6edce96429"
  },
  {
    "url": "basic/string-unicode/img/codeunit-codepoint-table.png",
    "revision": "7d065a8e65d944b1898b9de5e8d1e07e"
  },
  {
    "url": "basic/string-unicode/img/emoji-codeunit-codepoint-table.png",
    "revision": "6665ae16a9f3b2bfee3d28930988f382"
  },
  {
    "url": "basic/string-unicode/img/extenal-code-and-internal-code.png",
    "revision": "81bdae3abbfa82c8a14ce1d961bab2e5"
  },
  {
    "url": "basic/string-unicode/index.html",
    "revision": "540a919a3f56aef0f81a39f00e7cbd46"
  },
  {
    "url": "basic/string/index.html",
    "revision": "4d0fe857d534f19a93a3f70ec956b2d4"
  },
  {
    "url": "basic/variables/index.html",
    "revision": "4bb3dcaa58881fbca0fe7cb38c6da655"
  },
  {
    "url": "basic/wrapper-object/index.html",
    "revision": "8ae7500f56985f1c19c2092472f06cfa"
  },
  {
    "url": "cheatsheet/index.html",
    "revision": "b8387c2f1308d397201843ebd3f80b3a"
  },
  {
    "url": "cheetsheet/index.html",
    "revision": "c6c30c5f139f5c4b78ec9d79ad31ef41"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.eot",
    "revision": "25a32416abee198dd821b0b17a198a8f"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.ttf",
    "revision": "1dc35d25e61d819a9c357074014867ab"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "gitbook/fonts/fontawesome/FontAwesome.otf",
    "revision": "5dc41d8fe329a22fa1ee9225571c843e"
  },
  {
    "url": "gitbook/gitbook-plugin-anchors/plugin.css",
    "revision": "45deda85e7ceaacadb6a51c17248ad1c"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/fontsettings.js",
    "revision": "fab8f6412ce18bb367635b1bcae503ca"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/website.css",
    "revision": "056a6db3eef3553a78f3b7e02356b2e7"
  },
  {
    "url": "gitbook/gitbook-plugin-ga/plugin.js",
    "revision": "8b0d0bfffa07cfd2675fffb1b7b6e6f4"
  },
  {
    "url": "gitbook/gitbook-plugin-github-issue-feedback/plugin.js",
    "revision": "8e12063d49ae924cd3480aac1d58f7e9"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/ebook.css",
    "revision": "49282fd7a65a9a3e6eb6021e333bdab7"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/website.css",
    "revision": "637413aed3ac91940e57d22879ed68c2"
  },
  {
    "url": "gitbook/gitbook-plugin-js-console/console-ui.js",
    "revision": "0ca768e48d364ee90d22664568902840"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.css",
    "revision": "4e7efddf5df2ea927a186116ba2aee2b"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.js",
    "revision": "834dad580dcb5926f3b090502550f60d"
  },
  {
    "url": "gitbook/gitbook.js",
    "revision": "4a8f3557c204c095df7ffe4a82def73b"
  },
  {
    "url": "gitbook/icons/amazon-icon.png",
    "revision": "a52ae6aa63ba42a3dea1a5cd59ebf418"
  },
  {
    "url": "gitbook/icons/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/icons/icon-128x128.png",
    "revision": "b91df37069569bafccc6936d1b2e1352"
  },
  {
    "url": "gitbook/icons/icon-144x144.png",
    "revision": "e744cdec12fa24a28b40fde9b52d7695"
  },
  {
    "url": "gitbook/icons/icon-152x152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/icons/icon-192x192.png",
    "revision": "e3682439a02773056ce1bd46e6085555"
  },
  {
    "url": "gitbook/icons/icon-384x384.png",
    "revision": "2814afaf288c99d08c584b39234d3e39"
  },
  {
    "url": "gitbook/icons/icon-512x512.png",
    "revision": "fd7a37b059ccac4d7256226883672bce"
  },
  {
    "url": "gitbook/icons/icon-72x72.png",
    "revision": "406eb5ae0057f1f40b2abf9b17cd12a4"
  },
  {
    "url": "gitbook/icons/icon-96x96.png",
    "revision": "7529c23361ebe1eaba84a6cd042a9565"
  },
  {
    "url": "gitbook/images/apple-touch-icon-precomposed-152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/images/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/style.css",
    "revision": "6d72a59f07e54cc60663a3c397cba063"
  },
  {
    "url": "gitbook/theme.js",
    "revision": "ab0cd99cd2cda741ec6ed845dca3b1f2"
  },
  {
    "url": "index.html",
    "revision": "713b8635713b444a28ca4eb5ec5f4039"
  },
  {
    "url": "intro/authors/index.html",
    "revision": "810a67390acece5e0c9c1954c2777015"
  },
  {
    "url": "intro/feedback/index.html",
    "revision": "770432a31906ca66f0c99fa74f03f078"
  },
  {
    "url": "intro/index.html",
    "revision": "5b430d1592c31363d80746d53aa24e66"
  },
  {
    "url": "intro/preparation/index.html",
    "revision": "7c828bd0e99b797f4994051ea1712a2f"
  },
  {
    "url": "landing/css/style.css",
    "revision": "30232f49621b4afedbd4e2d1f0db2d3d"
  },
  {
    "url": "landing/img/js-primer.png",
    "revision": "19d98be248101b2685bb2a74d510890f"
  },
  {
    "url": "landing/img/repo-actions-watch.png",
    "revision": "4b4cd63c1bad3861502d3127c2a2d0a2"
  },
  {
    "url": "landing/index.html",
    "revision": "a7676e9ff3dfab0f364b65b67caa318f"
  },
  {
    "url": "outro/index.html",
    "revision": "254a83c2b41b43a5e8782299c9e56323"
  },
  {
    "url": "use-case/ajaxapp/display/img/fig-1.png",
    "revision": "15072f06aa7fd4d5fbce148bc2db975f"
  },
  {
    "url": "use-case/ajaxapp/display/index.html",
    "revision": "aff9ed24a4c4cfa3f52a19786e0539a7"
  },
  {
    "url": "use-case/ajaxapp/display/src/index.html",
    "revision": "d3966c68b57ff30ca7c7bd0960797fca"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/img/fig-1.png",
    "revision": "eaa77b26666e9db49bc6cc41b21ae8fe"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/index.html",
    "revision": "0a9a45a90f69ce6fe1abc91e6e1caa4c"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/src/index.html",
    "revision": "1763cb9bc16b6d860badb9583fef1f33"
  },
  {
    "url": "use-case/ajaxapp/http/img/fig-1.png",
    "revision": "77527b0eb6a46e1ba35e566b1a4d046f"
  },
  {
    "url": "use-case/ajaxapp/http/img/fig-2.png",
    "revision": "37168eab1ce7ca03de46134c15838a9f"
  },
  {
    "url": "use-case/ajaxapp/http/index.html",
    "revision": "ebc1b5a982cca5cd3f91c738ab58e50e"
  },
  {
    "url": "use-case/ajaxapp/http/src/index.html",
    "revision": "20ac665f8c423183077d0c9d96046394"
  },
  {
    "url": "use-case/ajaxapp/index.html",
    "revision": "c322ccdde27a6a8a23b3b63d6ca300af"
  },
  {
    "url": "use-case/ajaxapp/promise/img/fig-1.png",
    "revision": "0c29e65b2be0ef42cd63ab8c3166a5ad"
  },
  {
    "url": "use-case/ajaxapp/promise/index.html",
    "revision": "6d2bf8fff10be6f259bc2e6273746e53"
  },
  {
    "url": "use-case/ajaxapp/promise/src/index.html",
    "revision": "8fabf08afa50f533922ee33519b1f5f8"
  },
  {
    "url": "use-case/ajaxapp/src/index.html",
    "revision": "8fabf08afa50f533922ee33519b1f5f8"
  },
  {
    "url": "use-case/ajaxapp/xhr/index.html",
    "revision": "651fa8730a67aa297192718fa96949dd"
  },
  {
    "url": "use-case/index.html",
    "revision": "e6af4a2c4cde4d34ef2cbddfad75a166"
  },
  {
    "url": "use-case/nodecli/argument-parse/index.html",
    "revision": "ebed9568a3a9f9c2e8e9e2c05fc301de"
  },
  {
    "url": "use-case/nodecli/helloworld/index.html",
    "revision": "9b201dbaf9cc20eb433b0674ac151c7a"
  },
  {
    "url": "use-case/nodecli/index.html",
    "revision": "370b65dfded6d446a5b2e9498bfed8f2"
  },
  {
    "url": "use-case/nodecli/md-to-html/index.html",
    "revision": "62a719a0909627b411d113170de0555b"
  },
  {
    "url": "use-case/nodecli/read-file/index.html",
    "revision": "6526d248b77bffb6acead486d2536e69"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/index.html",
    "revision": "5aed1c4c1410f084ddddc07783a9be23"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/fixtures/expected-gfm.html",
    "revision": "bab3ba2ded7964789458b79dea29b6b7"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/fixtures/expected.html",
    "revision": "3fd11b8807a99394e85b39b332b5fa8b"
  },
  {
    "url": "use-case/setup-local-env/img/index.png",
    "revision": "8d5d71bc5560c6754ee0b6544c6ed191"
  },
  {
    "url": "use-case/setup-local-env/index.html",
    "revision": "46deb5b27a2229d4e2fc9bdff42c406b"
  },
  {
    "url": "use-case/setup-local-env/src/index.html",
    "revision": "cc9229dc8c7ec9ed2001348c1deac7fb"
  },
  {
    "url": "use-case/todoapp/app-structure/img/todo-html.png",
    "revision": "1fb6dcbbdbfdd704327d60aa4e5d3e7c"
  },
  {
    "url": "use-case/todoapp/app-structure/index.html",
    "revision": "63cc0f325d9f77a139566ea02493d84c"
  },
  {
    "url": "use-case/todoapp/app-structure/todo-html/index.html",
    "revision": "38180327a5c28512e55afb67b8b2b64b"
  },
  {
    "url": "use-case/todoapp/entrypoint/first-entry/index.html",
    "revision": "3f18bd00b8e93877290057512e8eaf32"
  },
  {
    "url": "use-case/todoapp/entrypoint/img/first-entry.png",
    "revision": "c8755a0b82958a80a0d96cb7890253ed"
  },
  {
    "url": "use-case/todoapp/entrypoint/index.html",
    "revision": "fe148328e7dde0a9f0de0ea83098984a"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-entry/index.html",
    "revision": "3f18bd00b8e93877290057512e8eaf32"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-scope/index.html",
    "revision": "32cab3b2ed950ab156f898fc679177c2"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/event-model/index.html",
    "revision": "5b13195cc90b6afa776a29b83aa9b09a"
  },
  {
    "url": "use-case/todoapp/final/create-view/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/final/final/index.html",
    "revision": "511ed06efb3f56bc2075f939912ddab2"
  },
  {
    "url": "use-case/todoapp/final/index.html",
    "revision": "eaa6b143b25a4a1d3b25b9f7d32c19ea"
  },
  {
    "url": "use-case/todoapp/final/more/index.html",
    "revision": "511ed06efb3f56bc2075f939912ddab2"
  },
  {
    "url": "use-case/todoapp/form-event/add-todo-item/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/form-event/img/add-todo-item.png",
    "revision": "77312d7b2c9b7a21e1cda1a06727ed57"
  },
  {
    "url": "use-case/todoapp/form-event/img/prevent-event.png",
    "revision": "217030daba4269a6bfb200f2e5e8ad34"
  },
  {
    "url": "use-case/todoapp/form-event/index.html",
    "revision": "24ffab09e98f6783228c6bddc0d71c0f"
  },
  {
    "url": "use-case/todoapp/form-event/prevent-event/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/index.html",
    "revision": "4b25f27e053ce440069d32189c52466c"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/update-delete/img/input-checkbox.png",
    "revision": "44920eba3f5737a49e9cc4c0893c44dd"
  },
  {
    "url": "use-case/todoapp/update-delete/index.html",
    "revision": "79bd13a75ed4978a1d56ca10ffaf40bd"
  },
  {
    "url": "use-case/todoapp/update-delete/input-checkbox/index.html",
    "revision": "c2402ea91d6e2872bd260a2629b275ae"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  }
]);
