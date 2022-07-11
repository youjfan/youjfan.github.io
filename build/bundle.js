var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,s;function a(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function u(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function g(){return h(" ")}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t){s=t}function $(){if(!s)throw new Error("Function called outside component initialization");return s}function b(){const t=$();return(e,n,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=function(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}(e,n,{cancelable:o});return r.slice().forEach((e=>{e.call(t,c)})),!c.defaultPrevented}return!0}}const y=[],k=[],_=[],v=[],x=Promise.resolve();let w=!1;function E(t){_.push(t)}const S=new Set;let j=0;function C(){const t=s;do{for(;j<y.length;){const t=y[j];j++,p(t),A(t.$$)}for(p(null),y.length=0,j=0;k.length;)k.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];S.has(e)||(S.add(e),e())}_.length=0}while(y.length);for(;v.length;)v.pop()();w=!1,S.clear(),p(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const L=new Set;function N(t,e){t&&t.i&&(L.delete(t),t.i(e))}function F(t,n,c,i){const{fragment:s,on_mount:a,on_destroy:u,after_update:l}=t.$$;s&&s.m(n,c),i||E((()=>{const n=a.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(E)}function O(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(y.push(t),w||(w=!0,x.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(e,r,c,i,a,u,l,d=[-1]){const h=s;p(e);const g=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(h?h.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:r.target||h.$$.root};l&&l(g.root);let m=!1;if(g.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return g.ctx&&a(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),m&&P(e,t)),n})):[],g.update(),m=!0,o(g.before_update),g.fragment=!!i&&i(g.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);g.fragment&&g.fragment.l(t),t.forEach(f)}else g.fragment&&g.fragment.c();r.intro&&N(e.$$.fragment),F(e,r.target,r.anchor,r.customElement),C()}p(h)}class I{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function M(t,e,n){let{theme:o="dark"}=e,{key:r="theme"}=e;const c={dark:"dark",light:"light"},i=b(),s=t=>t in c,a=t=>n(0,o=t.matches?c.dark:c.light);var u;return u=()=>{const t=matchMedia("(prefers-color-scheme: dark)"),e=localStorage.getItem(r);return s(e)?n(0,o=e):n(0,o=t.matches?c.dark:c.light),t.addEventListener("change",a),()=>t.removeEventListener("change",a)},$().$$.on_mount.push(u),function(t){$().$$.after_update.push(t)}((()=>{s(o)&&(i("change",o),localStorage.setItem(r,o))})),t.$$set=t=>{"theme"in t&&n(0,o=t.theme),"key"in t&&n(1,r=t.key)},[o,r]}var W=class extends I{constructor(t){super(),q(this,t,M,null,c,{theme:0,key:1})}};function Y(t,e,n){const o=t.slice();return o[3]=e[n],o}function z(e){let n,o,r,c,i,s,p,$,b,y,k,_,v,x,w,E,S,j,C,A,L=e[3].title+"";return{c(){n=d("br"),o=g(),r=d("br"),c=g(),i=d("a"),s=d("img"),y=g(),k=d("h4"),_=h(L),v=g(),x=d("ul"),w=d("li"),E=d("a"),S=h("Google Play Store"),C=g(),A=d("hr"),m(s,"width","100"),m(s,"height","100"),a(s.src,p=e[3].img)||m(s,"src",p),m(s,"alt",$=`${e[3].title}'s icon`),m(i,"href",b=e[3].psLink),m(E,"href",j=e[3].psLink),m(E,"target","_blank")},m(t,e){l(t,n,e),l(t,o,e),l(t,r,e),l(t,c,e),l(t,i,e),u(i,s),l(t,y,e),l(t,k,e),u(k,_),l(t,v,e),l(t,x,e),u(x,w),u(w,E),u(E,S),l(t,C,e),l(t,A,e)},p:t,d(t){t&&f(n),t&&f(o),t&&f(r),t&&f(c),t&&f(i),t&&f(y),t&&f(k),t&&f(v),t&&f(x),t&&f(C),t&&f(A)}}}function B(t){let e,n,o,r,c,i,s,h,p,$,b,y,_,x,w,E;function S(e){t[2](e)}let j={};void 0!==t[0]&&(j.theme=t[0]),e=new W({props:j}),k.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(e,"theme",S)));let C=t[1],A=[];for(let e=0;e<C.length;e+=1)A[e]=z(Y(t,C,e));return{c(){var t;(t=e.$$.fragment)&&t.c(),o=g(),r=d("main"),c=d("img"),s=g(),h=d("h1"),h.textContent="YoujFan",p=g(),$=d("h3"),$.textContent="A series of wiki apps made by fans for the fans.",b=g(),y=d("br"),_=g(),x=d("br"),w=g();for(let t=0;t<A.length;t+=1)A[t].c();a(c.src,i="assets/icon.png")||m(c,"src","assets/icon.png"),m(c,"width","150"),m(c,"height","150"),m(c,"alt","YoujFan logo"),m(r,"class","svelte-y1gqua")},m(t,n){F(e,t,n),l(t,o,n),l(t,r,n),u(r,c),u(r,s),u(r,h),u(r,p),u(r,$),u(r,b),u(r,y),u(r,_),u(r,x),u(r,w);for(let t=0;t<A.length;t+=1)A[t].m(r,null);E=!0},p(t,[o]){const c={};var i;if(!n&&1&o&&(n=!0,c.theme=t[0],i=()=>n=!1,v.push(i)),e.$set(c),2&o){let e;for(C=t[1],e=0;e<C.length;e+=1){const n=Y(t,C,e);A[e]?A[e].p(n,o):(A[e]=z(n),A[e].c(),A[e].m(r,null))}for(;e<A.length;e+=1)A[e].d(1);A.length=C.length}},i(t){E||(N(e.$$.fragment,t),E=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),(void 0).c.push((()=>{L.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(e.$$.fragment,t),E=!1},d(t){O(e,t),t&&f(o),t&&f(r),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(A,t)}}}function G(t,e,n){let o;return document.body.className="dark",[o,[{title:"SeinWiki",img:"assets/seinwiki.png",psLink:"https://play.google.com/store/apps/details?id=com.youjfan.yfseinfeld"},{title:"WikiStranger",img:"assets/strangerthings.png",link:"https://play.google.com/store/apps/details?id=io.fandom.wikiverse.strangerthings"}],function(t){o=t,n(0,o)}]}return new class extends I{constructor(t){super(),q(this,t,G,B,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
