if(!self.define){let e,r={};const i=(i,s)=>(i=new URL(i+".js",s).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let f={};const c=e=>i(e,n),o={module:{uri:n},exports:f,require:c};r[n]=Promise.all(s.map((e=>o[e]||c(e)))).then((e=>(a(...e),f)))}}define(["./workbox-e628b7cf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"canvas-only.html",revision:"ca61fe1c37c9c50f59fdb5e6499c853d"},{url:"game/collision_util.js",revision:"a8396fc0d7e0daced3c1187567163d7c"},{url:"game/font/ms-sans-serif.otf",revision:"447b53bb29da0e7060bc589fbf037f30"},{url:"game/generation.js",revision:"01c4329d1e0a03235a22065522483c34"},{url:"game/keydrown.min.js",revision:"895d1e7bda1734833108fbb6c38506c7"},{url:"game/model_loader.js",revision:"037736e9351fd5082845a04280752f0c"},{url:"game/object_defines.js",revision:"37aa235870fc42874ebe53e5ff64ad0e"},{url:"game/player_controller.js",revision:"d7cb327730bef927828f6ef39473c299"},{url:"game/surface.js",revision:"5b672340ecf4ba6943fa5b849d8ad5e7"},{url:"game/three.module.js",revision:"814e9df1d8ba357858626a48dd93cae2"},{url:"game/utils.js",revision:"422a4a2ac4438bfaf61551f2531461e2"},{url:"index.css",revision:"5cbfc18b40d189c889ec15be9e325d1d"},{url:"index.html",revision:"72b7909ffae0f01b03f30be5c64110f5"},{url:"manifest.json",revision:"488806777f9ac2e0012163a1739dc6a3"},{url:"maze95.js",revision:"7d52f44aa2d24498cd769aa7179e7e54"},{url:"README.md",revision:"e0cb70ba6d4d89b0d12c0024455332c9"},{url:"textures/button.png",revision:"70c315e5ef934fcf6a729a716929a341"},{url:"textures/ceiling.png",revision:"d40fe49767b66cda0957493870120384"},{url:"textures/fin.png",revision:"564826d5283028f5376dc4d3a5291b79"},{url:"textures/finbig.png",revision:"e110ec7a99cc7e41240c36e363d4c15e"},{url:"textures/floor.png",revision:"18358bfe18e512f2afa5a1d60f2a98e8"},{url:"textures/start.png",revision:"385be8e0384fa4fad2fba6e8e2f08a53"},{url:"textures/textures.js",revision:"2128b30a541e989ecbc45f816ae8d2c6"},{url:"textures/wall.png",revision:"6de320f3873a3d484620238115de83f7"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map