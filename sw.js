if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise(async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()})),i.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},i=(i,c)=>{Promise.all(i.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(i)};self.define=(i,r,f)=>{c[i]||(c[i]=Promise.resolve().then(()=>{let c={};const b={uri:location.origin+i.slice(1)};return Promise.all(r.map(i=>{switch(i){case"exports":return c;case"module":return b;default:return e(i)}})).then(e=>{const i=f(...e);return c.default||(c.default=i),c})}))}}define("./sw.js",["./workbox-7409304f"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"00-LUKCHAP-001.html",revision:"35d9372e119f2c0264ed72fa1804ecf0"},{url:"00-LUKCHAP-002.html",revision:"8de5da04ee29fad0e45aeb9652c635cc"},{url:"00-LUKCHAP-003.html",revision:"800bdf0933620fffe48f054f6743cd9d"},{url:"00-LUKCHAP-004.html",revision:"f8f0cd08c8bacbf5ad956e59a815a50c"},{url:"00-LUKCHAP-005.html",revision:"d6528d5b1c19b894122f20da549fe7f6"},{url:"00-LUKCHAP-006.html",revision:"bc39e44788460d27d7b6e72eb9fad6b3"},{url:"00-LUKCHAP-007.html",revision:"e37f060d1100b8d4832bc0351fc97967"},{url:"00-LUKCHAP-008.html",revision:"f87ab00a7ced54bd58ea6962ed4d603d"},{url:"00-LUKCHAP-009.html",revision:"c17e4cd6319524e4ba8d60b671ce3a5c"},{url:"00-LUKCHAP-010.html",revision:"9a66d976a07120f856f9e9e9eeb1203f"},{url:"00-LUKCHAP-011.html",revision:"d629159eadcec56c0344f0c04d32af5d"},{url:"00-LUKCHAP-012.html",revision:"2e72caf7cd8ac6b86c3510933310462f"},{url:"00-LUKCHAP-013.html",revision:"8ca4f9015a2335ebc80ef17f23d1121e"},{url:"00-LUKCHAP-014.html",revision:"f44dad4898c561c3159a7013a94aaae5"},{url:"00-LUKCHAP-015.html",revision:"d730464108554bafda6828d2385282fe"},{url:"00-LUKCHAP-016.html",revision:"39bf1dc586262fe2afca93ab5c9cb59b"},{url:"00-LUKCHAP-017.html",revision:"5df6727ab9a06db1c24ecb75f9249f65"},{url:"00-LUKCHAP-018.html",revision:"2b02059e7042ee3f9c22dd70197b78c0"},{url:"00-LUKCHAP-019.html",revision:"bd1bec3e29fb8b4c9ec6b9ee8a3691d2"},{url:"00-LUKCHAP-020.html",revision:"fa582fb88d7f1e85ac86839fefe4a389"},{url:"00-LUKCHAP-021.html",revision:"1a9a588a3a9a44f07dd153c7e857e2f0"},{url:"00-LUKCHAP-022.html",revision:"658680d73b74da46eefe219a53071974"},{url:"00-LUKCHAP-023.html",revision:"ca85b3af04480ae29666872c73c62a60"},{url:"00-LUKCHAP-024.html",revision:"397e078d6c90150140f06d6a1e79f362"},{url:"00-LUKCHAP-2-001.html",revision:"20ea5f293ce7c8571ca384dd04cba794"},{url:"00-LUKCHAP-2-002.html",revision:"9050fde76f96bc3e6c57c947d1bf3464"},{url:"00-LUKCHAP-2-003.html",revision:"2b961a025931a0232682cc2975046fad"},{url:"00-LUKCHAP-2-004.html",revision:"45b936624fb8f5f64cba98c74938143f"},{url:"00-LUKCHAP-2-005.html",revision:"df7356bc31a625316f05a311470f0b6a"},{url:"00-LUKCHAP-2-006.html",revision:"e12992ecfc519fbf8503d2786b327834"},{url:"00-LUKCHAP-2-007.html",revision:"65e788f84172b25ef7d47a48f5b01e9d"},{url:"00-LUKCHAP-2-008.html",revision:"7789dbc3aa40f27b2898e320c77592b8"},{url:"00-LUKCHAP-2-009.html",revision:"769d9af8a417c535125cb38d86b7e604"},{url:"00-LUKCHAP-2-010.html",revision:"bf7fe97f62fbf4fab2f852fcbf27619b"},{url:"00-LUKCHAP-2-011.html",revision:"19d7ce184ff1cbd45c0410e44d50f664"},{url:"00-LUKCHAP-2-012.html",revision:"d48a7bcd9087b0fa45c4fef1de39313c"},{url:"00-LUKCHAP-2-013.html",revision:"1463c2797cb114451b8065ae456f82d7"},{url:"00-LUKCHAP-2-014.html",revision:"b84ac2b827d5bc758a1d879e4c049024"},{url:"00-LUKCHAP-2-015.html",revision:"c611abbf313f5d11a08e1736006ce735"},{url:"00-LUKCHAP-2-016.html",revision:"9aa75e0b0a5f18ede300dc923e7eeb2f"},{url:"00-LUKCHAP-2-017.html",revision:"4aca3f351ad144b55131245b4d7f3a57"},{url:"00-LUKCHAP-2-018.html",revision:"630515c8b8d502b55c142eb5f3110508"},{url:"00-LUKCHAP-2-019.html",revision:"4ed2522408c5190decd700e09fb3521a"},{url:"00-LUKCHAP-2-020.html",revision:"d2336cf9b3723031dff8f0a4590a4904"},{url:"00-LUKCHAP-2-021.html",revision:"ed38517be8da0810bc0c56f1de3c89f1"},{url:"00-LUKCHAP-2-022.html",revision:"7a3400ea3378e7bb18f39c901f98b0e6"},{url:"00-LUKCHAP-2-023.html",revision:"e5d6524174c74016287db92ebf722461"},{url:"00-LUKCHAP-2-024.html",revision:"38bea99ab3317f00c5e6551af588171e"},{url:"00-LUKSETS-001.html",revision:"026c672af820f3734b9cd0ec6f11ea9f"},{url:"00-LUKSETS-002.html",revision:"481d25bafb7860e3fec7ac4a1a9bbe05"},{url:"00-LUKSETS-003.html",revision:"983acc3c528a6c1ed75143486539c4e5"},{url:"00-LUKSETS-004.html",revision:"dac261258c1436647e57145d932427c8"},{url:"00-LUKSETS-005.html",revision:"517c84789bb373f067fe5c8c617eb88f"},{url:"00-LUKSETS-006.html",revision:"9b9a08e611632f7fedb0a7c5ca7e8ee1"},{url:"00-LUKSETS-007.html",revision:"553f2eb621efd00dae246ffe4beec00d"},{url:"00-LUKSETS-008.html",revision:"0fc51ec8856b4bfa0926082b19e8de8f"},{url:"00-LUKSETS-009.html",revision:"56b7d3b02434bed01c79bc24ce417007"},{url:"00-LUKSETS-010.html",revision:"ac3991181eb4193cf8203ca0f0976e0c"},{url:"00-LUKSETS-011.html",revision:"ddc28e64d4c54d8776c29cbf10196a17"},{url:"00-LUKSETS-012.html",revision:"3f4479eab0f181f70f4d35391015efd4"},{url:"00-LUKSETS-013.html",revision:"aba1857e58f9a1f14ec24138b494330f"},{url:"00-LUKSETS-014.html",revision:"739528b170ec180493d936192ea74d77"},{url:"00-LUKSETS-015.html",revision:"3145c9b051af615f5908088acd121dfb"},{url:"00-LUKSETS-016.html",revision:"7770badb1b20f0cd89c00e4ce1697ac9"},{url:"00-LUKSETS-017.html",revision:"3c635992abfb0163d373b5b684a8a91f"},{url:"00-LUKSETS-018.html",revision:"1338e6474f23a80ceaf16e1c254d5bd0"},{url:"00-LUKSETS-019.html",revision:"f8f2bc9119510e15b0d908de49f08b56"},{url:"00-LUKSETS-020.html",revision:"c9cdad0d0a80ebda4801e075433c239a"},{url:"00-LUKSETS-021.html",revision:"9e1eb4ef67ff6d9c25f58d49075e12af"},{url:"00-LUKSETS-022.html",revision:"f7bc834c5eb8dcadb1db486c85f29b50"},{url:"00-LUKSETS-023.html",revision:"7290d57215b38f279127b4b3a5cb7a00"},{url:"00-LUKSETS-024.html",revision:"ba4420316fae8a7669c0d9221b6205e4"},{url:"00-LUKSETS-025.html",revision:"61db860c6e6ff07498639124343041ea"},{url:"00-LUKSETS-026.html",revision:"1ba861f008cb37de7c5142e3a7b59f93"},{url:"00-LUKSETS-027.html",revision:"a76fd3d6c875da2fe5cb4477072ce8b8"},{url:"00-LUKSETS-028.html",revision:"02873baf4ee159086a1b621a9fc0beef"},{url:"00-LUKSETS-029.html",revision:"60c45009279453ecf8c7ef135e8e0bd9"},{url:"00-LUKSETS-030.html",revision:"d2cef49e6fcb782a394d01e3cc6f0caa"},{url:"contents/contents-menu-1.html",revision:"b03b5321be107e448056275b395dccef"},{url:"contents/fonts/CharisSILCompact-B.ttf",revision:"9cd85723a282d28259b6697699e1f187"},{url:"contents/fonts/CharisSILCompact-R.ttf",revision:"bf3b8fa39cbdb09e1ef881c5e94fe98c"},{url:"css/sab-stylesheet.css",revision:"41ec1eb4b0a0fbcb453e13d1f79631b1"},{url:"css/tooltipster.css",revision:"d115154b4e0dfd44110462064fb12af1"},{url:"fonts/CharisSILCompact-B.ttf",revision:"9cd85723a282d28259b6697699e1f187"},{url:"fonts/CharisSILCompact-R.ttf",revision:"bf3b8fa39cbdb09e1ef881c5e94fe98c"},{url:"icons/apple-touch-icon.png",revision:"78240cc2d838e80a5a60a33f7a6289ef"},{url:"icons/icon-144.png",revision:"b94bbf604f3c17c33284ce8a21f2cf12"},{url:"icons/icon-192.png",revision:"31836e775a866f20ca0c7d3544f42320"},{url:"icons/icon-36.png",revision:"9940e7dc9e72374ed9a7f6a73dc09feb"},{url:"icons/icon-48.png",revision:"46c8d50d0744b4a01afbe266842bd105"},{url:"icons/icon-512.png",revision:"f061748a6a35bfd32293ba80e8c7dabe"},{url:"icons/icon-72.png",revision:"8f2bc652afb61873be7cde8349b168b7"},{url:"icons/icon-96.png",revision:"c784b15d0417612ca45a66ca024c67db"},{url:"icons/icon-adaptive.png",revision:"f061748a6a35bfd32293ba80e8c7dabe"},{url:"index.html",revision:"a5b770fe8856267206b98bd6c90c8e99"},{url:"js/app-builder-audio.js",revision:"e781fb907a0c0b9adb6b67925126b322"},{url:"js/app-builder-footnotes.js",revision:"e94c3de8ff92984bf713a2bbb6c161d8"},{url:"js/app-builder-menus.js",revision:"15c25cda5c124325d4abfaeaad0cebc1"},{url:"js/app-builder-video.js",revision:"358490d3ea1dfc3da0fb9b0cb729dd69"},{url:"js/book-names.js",revision:"045b08eb77f14be14ed204507f5b7582"},{url:"js/jquery-1.11.3.min.js",revision:"13c0a5055cca7b2463b2f73701960b9e"},{url:"js/jquery.tooltipster.min.js",revision:"ff2f685494b400ea2098c79332759a8f"},{url:"js/popcorn-complete.min.js",revision:"baafc91fa16cc9b44395ee0a3655887e"},{url:"pwa-main.js",revision:"5630f3086d52ca5e1d63cc6462fcce3d"}],{})}));
//# sourceMappingURL=sw.js.map
