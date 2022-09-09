(()=>{"use strict";var n={870:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,".letterContainer {\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 2em;\n  /* background-color: #abcdef; */\n  color: #ddd;\n  display: flex;\n  justify-content: space-evenly;\n  gap: 0.5rem;\n  padding-bottom: 10px;\n  width: 90%;\n  margin: 0 auto;\n  max-width: 700px;\n}\n.letterElem{\n  padding: 0 0.25rem;\n  cursor: pointer;\n}\n\n.active {\n  color: #69db7e;\n  cursor: default;\n}\n\n@media (max-width: 640px) {\n  .letterContainer {\n    gap: 0.5rem;\n    flex-wrap: wrap;\n    justify-content: center;\n    line-height: 1.5em;\n    padding-bottom: 15px;\n}\n}",""]);const i=o},669:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,".news{\n  max-width: 90%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  margin: 10px auto 0 auto;\n}\n\n.news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #9d9d9d;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #ddd;;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n.news__no-data {\n  font-size: 2rem;\n    font-weight: 300;\n    /* text-transform: uppercase; */\n    color: #a2a2a2;\n    margin-top: 60px;\n    display: flex;\n    justify-content: center;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #ddd;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n",""]);const i=o},501:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,".sources {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  /*height: 278px;*/\n  overflow: auto;\n  align-items: center;\n  font: 300 1em 'Fira Sans', sans-serif;\n  justify-content: center;\n  max-width: 1200px;\n  margin: 0px auto 0 auto;\n}\n\n.source__item {\n  background: none;\n  border: 2px solid #30c5ff;\n  font: inherit;\n  line-height: 1;\n  margin: 0.5em;\n  padding: 1em 2em;\n  color: #70d6ff;\n  transition: 0.25s;\n  cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n  border-color: #3fcc59;\n  color: #69db7e;\n  box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n  transform: translateY(-0.25em);\n}\n\n.source__item-name {\n  font-weight: 400;\n  white-space: nowrap;\n}\n\n@media (max-width: 640px) {\n\n  .sources {\n    max-height: 240px;\n  }\n\n  .source__item {\n    padding: 1em 1em;\n  }\n}\n\n/*@media (max-width: 500px) {\n  .letterContainer {\n    flex-wrap: wrap;\n}\n}*/",""]);const i=o},767:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,":root {\n  --white: #ddd;\n  --bg-color: #555;\n  --sec-color: #9d9d9d;\n  --hover-color: #555;\n  --sub-color: #eee;\n}\n\na:focus,\na:active {\n  outline: none;\n  color: #ddd;\n}\n\na,\na:visited {\n  text-decoration: none;\n  color: #ddd;\n}\n\na:hover {\n  color: var(--hover-color);\n  text-decoration: none;\n  transition: 0.3s;\n}\n\nbody {\n  color: #ddd;\n  background: #17181c;\n  font-family: sans-serif;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  max-height: 100vh;\n  min-height: 100vh;\n  justify-content: space-between;\n}\n\nmain {\n  margin-bottom: auto;\n}\n\nheader {\n  padding: 10px 30px;\n}\n\nheader h1 {\n  font-size: 40px;\n  font-weight: 800;\n  position: relative;\n  max-width: fit-content;\n\n}\n\nheader h1::after {\n  position: absolute;\n  content: '';\n  bottom: -7px;\n  width: 100%;\n  height: 3px;\n  animation: color-change 10s infinite;\n  margin: 0 auto;\n  left: 0;\n\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@keyframes color-change {\n  0% {\n    background-color: #ddd;\n  }\n\n  20% {\n    background-color: #ddd;\n  }\n\n  50% {\n    background-color: #3fcc59;\n  }\n\n  80% {\n    background-color: #30c5ff;\n  }\n\n  100% {\n    background-color: #ddd;\n  }\n\n}\n\nfooter .copyright {\n  color: var(--white);\n  text-align: center;\n}\n\nfooter .copyright:before {\n  content: '©';\n}\n\n.footer-container {\n  /* background-color: var(--sec-color);*/\n  padding: 1rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  color: #ddd;\n  /* padding: 20px 20px;*/\n}\n\n.footer-data {\n  display: flex;\n  align-items: center;\n  line-height: 1.5rem;\n}\n\n.copyright {\n  padding-right: 20px;\n\n}\n\n.github-username,\n.rss {\n  color: var(--white);\n  text-decoration: none;\n  padding: 0 20px;\n}\n\n::-webkit-scrollbar-button {\n  height: 0px\n}\n\n::-webkit-scrollbar-track {\n  background-color: var(--bg-color);\n  box-shadow: 0px 0px 3px #000 inset;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: var(--sec-color);\n}\n\n::-webkit-resizer {\n  height: 0px\n}\n\n::-webkit-scrollbar {\n  width: 9px;\n}\n\n@media (max-width: 938px) {\n\n  header {\n    justify-content: center;\n  }\n\n}\n\n@media (max-width: 768px) {\n  body {\n    font-size: 14px;\n  }\n\n\n  .footer-container {\n    flex-wrap: wrap;\n  }\n\n  .footer-container>div,\n  a,\n  p {\n    line-height: 2.5rem;\n  }\n\n  header h1 {\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  header h1::after {\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media (max-width: 350px) {\n  header h1 {\n\n    font-size: 30px;\n  }\n\n}",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],o=0;o<n.length;o++){var s=n[o],c=e.base?s[0]+e.base:s[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var u=a(l),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(m)):i.push({identifier:l,updater:f(m,e),references:1}),r.push(l)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function m(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var p=null,h=0;function f(n,e){var t,r,o;if(e.singleton){var i=h++;t=p||(p=c(e)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=c(e),r=m.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var c=s(n,e),d=0;d<t.length;d++){var l=a(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=c}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;!function(n){n[n.OK=200]="OK",n[n.Bad=400]="Bad",n[n.Unauthorized=401]="Unauthorized",n[n.Not_Found=404]="Not_Found",n[n.Too_Many_Requests=429]="Too_Many_Requests",n[n.Server_Error=500]="Server_Error"}(n||(n={}));var e=t(379),r=t.n(e),o=t(669);r()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var i=t(501);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=t(870);r()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;class s{constructor(){this.news=new class{draw(n){const e=n.length>=10?n.filter(((n,e)=>e<10)):n,t=document.querySelector(".news");if(n.length>0){const n=document.createDocumentFragment(),r=document.querySelector("#newsItemTemp");e.forEach(((e,t)=>{const o=r.content.cloneNode(!0);t%2&&o.querySelector(".news__item").classList.add("alt"),o.querySelector(".news__meta-photo").style.backgroundImage=`url(${e.urlToImage||"img/news_placeholder.jpg"})`,o.querySelector(".news__meta-author").textContent=e.author||e.source.name,o.querySelector(".news__meta-date").textContent=e.publishedAt.slice(0,10).split("-").reverse().join("-"),o.querySelector(".news__description-title").textContent=e.title,o.querySelector(".news__description-source").textContent=e.source.name,o.querySelector(".news__description-content").textContent=e.description,o.querySelector(".news__read-more a").setAttribute("href",e.url),n.append(o)})),t.innerHTML="",t.appendChild(n)}else t.innerHTML="<div class='news__no-data'>Sorry no data :(</div>"}},this.sources=new class{draw(n){const e=document.createDocumentFragment(),t=document.querySelector("#sourceItemTemp");n.forEach((n=>{const r=t.content.cloneNode(!0);r.querySelector(".source__item-name").textContent=n.name,r.querySelector(".source__item").setAttribute("data-source-id",n.id),e.append(r)})),document.querySelector(".sources").innerHTML="",document.querySelector(".sources").append(e)}},this.alphabet=new class{constructor(){this.navItem=document.querySelector("#nav")}createNavList(n){let e="";n.forEach((n=>{e=this.createDivForCharElement(e,n)})),this.navItem.innerHTML=e,this.navItem.querySelector(".letterElem").classList.add("active")}createDivForCharElement(n,e){return`${n}<div class='letterElem' data-filter='${e}'>${e}</div>`}navHandler(n,e){const t=n.target,r=n.currentTarget;t!==r&&t.classList.contains("letterElem")&&(r.querySelectorAll(".letterElem").forEach((n=>n.classList.remove("active"))),t.classList.add("active"),e(t.getAttribute("data-filter")))}},this.sourcesData=[]}drawNews(n){const e=(null==n?void 0:n.articles)?null==n?void 0:n.articles:[];this.news.draw(e)}drawAlphabet(){const n=new Set;this.sourcesData.forEach((e=>n.add(e.name[0]))),this.alphabet.createNavList(n),document.querySelector(".letterContainer").addEventListener("click",(n=>this.alphabet.navHandler(n,(n=>this.drawLetterSources(n)))))}drawSources(n){const e=(null==n?void 0:n.sources)?null==n?void 0:n.sources:[];this.sourcesData=e,this.drawAlphabet(),this.drawLetterSources("A")}drawLetterSources(n){const e=this.sourcesData.filter((e=>e.name[0]===n));this.sources.draw(e)}}var c=t(767);r()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,(new class{constructor(){this.controller=new class extends class extends class{constructor(n,e){this.baseLink=n,this.options=e}getResp({endpoint:n,options:e={}},t=(()=>{console.error("No callback for GET response")})){this.load("GET",n,t,e)}errorHandler(e){if(!e.ok)throw e.status!==n.Unauthorized&&e.status!==n.Not_Found||console.log(`Sorry, but there is ${e.status} error: ${e.statusText}`),Error(e.statusText);return e}makeUrl(n,e){const t=Object.assign(Object.assign({},this.options),n);let r=`${this.baseLink}${e}?`;return Object.keys(t).forEach((n=>{r+=`${n}=${t[n]}&`})),r.slice(0,-1)}load(n,e,t,r={}){fetch(this.makeUrl(r,e),{method:n}).then(this.errorHandler.bind(this)).then((n=>n.json())).then((n=>t(n))).catch((n=>console.error(n)))}}{constructor(){super("https://nodenews.herokuapp.com/",{apiKey:"6d74f24f1ee743ceb6b716d7ddc9184b"})}}{getSources(n){super.getResp({endpoint:"sources"},n)}getNews(n,e){let t=n.target;const r=n.currentTarget;for(;t!==r;){if(t.classList.contains("source__item")){const n=t.getAttribute("data-source-id");return void(r.getAttribute("data-source")!==n&&(r.setAttribute("data-source",n),super.getResp({endpoint:"everything",options:{sources:n}},e)))}t=t.parentNode}}},this.view=new s}start(){this.controller.getSources((n=>this.view.drawSources(n))),document.querySelector(".sources").addEventListener("click",(n=>this.controller.getNews(n,(n=>this.view.drawNews(n)))))}}).start()})()})();