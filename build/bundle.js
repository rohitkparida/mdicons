var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n){t.$$.on_destroy.push(function(t,e){const n=t.subscribe(e);return n.unsubscribe?()=>n.unsubscribe():n}(e,n))}function u(t,e,n){if(t){const o=i(t,e,n);return t[0](o)}}function i(t,n,o){return t[1]?e({},e(n.$$scope.ctx,t[1](o?o(n):{}))):n.$$scope.ctx}function l(t,n,o,r){return t[1]?e({},e(n.$$scope.changed||{},t[1](r?r(o):{}))):n.$$scope.changed||{}}function p(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function v(){return g(" ")}function b(){return g("")}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:n[o]&&n[o].set?t[o]=e[o]:w(t,o,e[o])}let x;function P(t){x=t}function C(){if(!x)throw new Error("Function called outside component initialization");return x}function k(t){C().$$.on_mount.push(t)}function _(){const t=C();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,r)})}}}function E(t,e){C().$$.context.set(t,e)}function R(t){return C().$$.context.get(t)}const z=[],M=[],j=[],S=[],O=Promise.resolve();let A=!1;function L(t){j.push(t)}function N(){const t=new Set;do{for(;z.length;){const t=z.shift();P(t),B(t.$$)}for(;M.length;)M.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];t.has(n)||(n(),t.add(n))}j.length=0}while(z.length);for(;S.length;)S.pop()();A=!1}function B(t){null!==t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment&&t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(L))}const D=new Set;let H;function K(){H={r:0,c:[],p:H}}function I(){H.r||r(H.c),H=H.p}function U(t,e){t&&t.i&&(D.delete(t),t.i(e))}function V(t,e,n,o){if(t&&t.o){if(D.has(t))return;D.add(t),H.c.push(()=>{D.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function T(t,e){const n={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],a=e[c];if(a){for(const t in s)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[c]=a}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function q(t){return"object"==typeof t&&null!==t?t:{}}function F(t){t&&t.c()}function G(t,e,o){const{fragment:s,on_mount:a,on_destroy:u,after_update:i}=t.$$;s&&s.m(e,o),L(()=>{const e=a.map(n).filter(c);u?u.push(...e):r(e),t.$$.on_mount=[]}),i.forEach(L)}function J(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx={})}function Q(t,e){t.$$.dirty||(z.push(t),A||(A=!0,O.then(N)),t.$$.dirty=o()),t.$$.dirty[e]=!0}function W(e,n,c,s,a,u){const i=x;P(e);const l=n.props||{},p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:o(),dirty:null};let f=!1;p.ctx=c?c(e,l,(t,n,o=n)=>(p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),f&&Q(e,t)),n)):l,p.update(),f=!0,r(p.before_update),p.fragment=!!s&&s(p.ctx),n.target&&(n.hydrate?p.fragment&&p.fragment.l(function(t){return Array.from(t.childNodes)}(n.target)):p.fragment&&p.fragment.c(),n.intro&&U(e.$$.fragment),G(e,n.target,n.anchor),N()),P(i)}class X{$destroy(){J(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Y=[];function Z(e,n=t){let o;const r=[];function c(t){if(s(e,t)&&(e=t,o)){const t=!Y.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),Y.push(n,e)}if(t){for(let t=0;t<Y.length;t+=2)Y[t][0](Y[t+1]);Y.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(s,a=t){const u=[s,a];return r.push(u),1===r.length&&(o=n(c)||t),s(e),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function tt(e,n,o){const s=!Array.isArray(e),a=s?[e]:e,u=n.length<2;return{subscribe:Z(o,e=>{let o=!1;const i=[];let l=0,p=t;const f=()=>{if(l)return;p();const o=n(s?i[0]:i,e);u?e(o):p=c(o)?o:t},$=a.map((t,e)=>t.subscribe(t=>{i[e]=t,l&=~(1<<e),o&&f()},()=>{l|=1<<e}));return o=!0,f(),function(){r($),p()}}).subscribe}}const et={},nt={};function ot(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const rt=function(t,e){const n=[];let o=ot(t);return{get location(){return o},listen(e){n.push(e);const r=()=>{o=ot(t),e({location:o,action:"POP"})};return t.addEventListener("popstate",r),()=>{t.removeEventListener("popstate",r);const o=n.indexOf(e);n.splice(o,1)}},navigate(e,{state:r,replace:c=!1}={}){r={...r,key:Date.now()+""};try{c?t.history.replaceState(r,null,e):t.history.pushState(r,null,e)}catch(n){t.location[c?"replace":"assign"](e)}o=ot(t),n.forEach(t=>t({location:o,action:"PUSH"}))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],o=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return o[e]},pushState(t,r,c){const[s,a=""]=c.split("?");e++,n.push({pathname:s,search:a}),o.push(t)},replaceState(t,r,c){const[s,a=""]=c.split("?");n[e]={pathname:s,search:a},o[e]=t}}}}()),{navigate:ct}=rt,st=/^:(.+)/,at=4,ut=3,it=2,lt=1,pt=1;function ft(t,e){return t.substr(0,e.length)===e}function $t(t){return"*"===t[0]}function dt(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function ht(t){return t.replace(/(^\/+|\/+$)/g,"")}function mt(t,e){return{route:t,score:t.default?0:dt(t.path).reduce((t,e)=>(t+=at,!function(t){return""===t}(e)?!function(t){return st.test(t)}(e)?$t(e)?t-=at+lt:t+=ut:t+=it:t+=pt,t),0),index:e}}function gt(t,e){let n,o;const[r]=e.split("?"),c=dt(r),s=""===c[0],a=function(t){return t.map(mt).sort((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index)}(t);for(let t=0,r=a.length;t<r;t++){const r=a[t].route;let u=!1;if(r.default){o={route:r,params:{},uri:e};continue}const i=dt(r.path),l={},p=Math.max(c.length,i.length);let f=0;for(;f<p;f++){const t=i[f],e=c[f];if(void 0!==t&&$t(t)){l["*"===t?"*":t.slice(1)]=c.slice(f).map(decodeURIComponent).join("/");break}if(void 0===e){u=!0;break}let n=st.exec(t);if(n&&!s){const t=decodeURIComponent(e);l[n[1]]=t}else if(t!==e){u=!0;break}}if(!u){n={route:r,params:l,uri:"/"+c.slice(0,f).join("/")};break}}return n||o||null}function vt(t,e){return t+(e?`?${e}`:"")}function bt(t,e){return`${ht("/"===e?t:`${ht(t)}/${ht(e)}`)}/`}function wt(t){let e;const n=t.$$slots.default,o=u(n,t,null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,e){o&&o.p&&t.$$scope&&o.p(l(n,e,t,null),i(n,e,null))},i(t){e||(U(o,t),e=!0)},o(t){V(o,t),e=!1},d(t){o&&o.d(t)}}}function yt(t,e,n){let o,r,c,{basepath:s="/"}=e,{url:u=null}=e;const i=R(et),l=R(nt),p=Z([]);a(t,p,t=>n("$routes",c=t));const f=Z(null);let $=!1;const d=i||Z(u?{pathname:u}:rt.location);a(t,d,t=>n("$location",r=t));const h=l?l.routerBase:Z({path:s,uri:s});a(t,h,t=>n("$base",o=t));const m=tt([h,f],([t,e])=>{if(null===e)return t;const{path:n}=t,{route:o,uri:r}=e;return{path:o.default?n:o.path.replace(/\*.*$/,""),uri:r}});i||(k(()=>{return rt.listen(t=>{d.set(t.location)})}),E(et,d)),E(nt,{activeRoute:f,base:h,routerBase:m,registerRoute:function(t){const{path:e}=o;let{path:n}=t;if(t._path=n,t.path=bt(e,n),"undefined"==typeof window){if($)return;const e=function(t,e){return gt([t],e)}(t,r.pathname);e&&(f.set(e),$=!0)}else p.update(e=>(e.push(t),e))},unregisterRoute:function(t){p.update(e=>{const n=e.indexOf(t);return e.splice(n,1),e})}});let{$$slots:g={},$$scope:v}=e;return t.$set=t=>{"basepath"in t&&n("basepath",s=t.basepath),"url"in t&&n("url",u=t.url),"$$scope"in t&&n("$$scope",v=t.$$scope)},t.$$.update=(t={$base:1,$routes:1,$location:1})=>{if(t.$base){const{path:t}=o;p.update(e=>(e.forEach(e=>e.path=bt(t,e._path)),e))}if(t.$routes||t.$location){const t=gt(c,r.pathname);f.set(t)}},{basepath:s,url:u,routes:p,location:d,base:h,$$slots:g,$$scope:v}}class xt extends X{constructor(t){super(),W(this,t,yt,wt,s,{basepath:0,url:0})}}const Pt=({routeParams:t,$location:e})=>({params:t,location:e}),Ct=({routeParams:t,$location:e})=>({params:t,location:e});function kt(t){let e,n,o,r;const c=[Et,_t],s=[];function a(t,e){return null!==e.component?0:1}return e=a(0,t),n=s[e]=c[e](t),{c(){n.c(),o=b()},m(t,n){s[e].m(t,n),$(t,o,n),r=!0},p(t,r){let u=e;(e=a(0,r))===u?s[e].p(t,r):(K(),V(s[u],1,1,()=>{s[u]=null}),I(),(n=s[e])||(n=s[e]=c[e](r)).c(),U(n,1),n.m(o.parentNode,o))},i(t){r||(U(n),r=!0)},o(t){V(n),r=!1},d(t){s[e].d(t),t&&d(o)}}}function _t(t){let e;const n=t.$$slots.default,o=u(n,t,Ct);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,e){o&&o.p&&(t.$$scope||t.routeParams||t.$location)&&o.p(l(n,e,t,Pt),i(n,e,Ct))},i(t){e||(U(o,t),e=!0)},o(t){V(o,t),e=!1},d(t){o&&o.d(t)}}}function Et(t){let n,o;const r=[{location:t.$location},t.routeParams,t.routeProps];var c=t.component;function s(t){let n={};for(let t=0;t<r.length;t+=1)n=e(n,r[t]);return{props:n}}if(c)var a=new c(s());return{c(){a&&F(a.$$.fragment),n=b()},m(t,e){a&&G(a,t,e),$(t,n,e),o=!0},p(t,e){const o=t.$location||t.routeParams||t.routeProps?T(r,[t.$location&&{location:e.$location},t.routeParams&&q(e.routeParams),t.routeProps&&q(e.routeProps)]):{};if(c!==(c=e.component)){if(a){K();const t=a;V(t.$$.fragment,1,0,()=>{J(t,1)}),I()}c?(F((a=new c(s())).$$.fragment),U(a.$$.fragment,1),G(a,n.parentNode,n)):a=null}else c&&a.$set(o)},i(t){o||(a&&U(a.$$.fragment,t),o=!0)},o(t){a&&V(a.$$.fragment,t),o=!1},d(t){t&&d(n),a&&J(a,t)}}}function Rt(t){let e,n,o=null!==t.$activeRoute&&t.$activeRoute.route===t.route&&kt(t);return{c(){o&&o.c(),e=b()},m(t,r){o&&o.m(t,r),$(t,e,r),n=!0},p(t,n){null!==n.$activeRoute&&n.$activeRoute.route===n.route?o?(o.p(t,n),U(o,1)):((o=kt(n)).c(),U(o,1),o.m(e.parentNode,e)):o&&(K(),V(o,1,1,()=>{o=null}),I())},i(t){n||(U(o),n=!0)},o(t){V(o),n=!1},d(t){o&&o.d(t),t&&d(e)}}}function zt(t,n,o){let r,c,{path:s=""}=n,{component:u=null}=n;const{registerRoute:i,unregisterRoute:l,activeRoute:f}=R(nt);a(t,f,t=>o("$activeRoute",r=t));const $=R(et);a(t,$,t=>o("$location",c=t));const d={path:s,default:""===s};let h={},m={};var g;i(d),"undefined"!=typeof window&&(g=()=>{l(d)},C().$$.on_destroy.push(g));let{$$slots:v={},$$scope:b}=n;return t.$set=t=>{o("$$props",n=e(e({},n),t)),"path"in t&&o("path",s=t.path),"component"in t&&o("component",u=t.component),"$$scope"in t&&o("$$scope",b=t.$$scope)},t.$$.update=(t={$activeRoute:1,$$props:1})=>{t.$activeRoute&&r&&r.route===d&&o("routeParams",h=r.params);{const{path:t,component:e,...r}=n;o("routeProps",m=r)}},{path:s,component:u,activeRoute:f,location:$,route:d,routeParams:h,routeProps:m,$activeRoute:r,$location:c,$$props:n=p(n),$$slots:v,$$scope:b}}class Mt extends X{constructor(t){super(),W(this,t,zt,Rt,s,{path:0,component:0})}}function jt(t){let n,o,r;const c=t.$$slots.default,s=u(c,t,null);let a=[{href:t.href},{"aria-current":t.ariaCurrent},t.props],p={};for(let t=0;t<a.length;t+=1)p=e(p,a[t]);return{c(){var e,o,c,a;n=h("a"),s&&s.c(),y(n,p),e=n,o="click",c=t.onClick,e.addEventListener(o,c,a),r=()=>e.removeEventListener(o,c,a)},m(t,e){$(t,n,e),s&&s.m(n,null),o=!0},p(t,e){s&&s.p&&t.$$scope&&s.p(l(c,e,t,null),i(c,e,null)),y(n,T(a,[t.href&&{href:e.href},t.ariaCurrent&&{"aria-current":e.ariaCurrent},t.props&&e.props]))},i(t){o||(U(s,t),o=!0)},o(t){V(s,t),o=!1},d(t){t&&d(n),s&&s.d(t),r()}}}function St(t,e,n){let o,r,{to:c="#"}=e,{replace:s=!1}=e,{state:u={}}=e,{getProps:i=(()=>({}))}=e;const{base:l}=R(nt);a(t,l,t=>n("$base",o=t));const p=R(et);a(t,p,t=>n("$location",r=t));const f=_();let $,d,h,m;let g,{$$slots:v={},$$scope:b}=e;return t.$set=t=>{"to"in t&&n("to",c=t.to),"replace"in t&&n("replace",s=t.replace),"state"in t&&n("state",u=t.state),"getProps"in t&&n("getProps",i=t.getProps),"$$scope"in t&&n("$$scope",b=t.$$scope)},t.$$.update=(t={to:1,$base:1,$location:1,href:1,isCurrent:1,getProps:1,isPartiallyCurrent:1})=>{(t.to||t.$base)&&n("href",$="/"===c?o.uri:function(t,e){if(ft(t,"/"))return t;const[n,o]=t.split("?"),[r]=e.split("?"),c=dt(n),s=dt(r);if(""===c[0])return vt(r,o);if(!ft(c[0],".")){return vt(("/"===r?"":"/")+s.concat(c).join("/"),o)}const a=s.concat(c),u=[];return a.forEach(t=>{".."===t?u.pop():"."!==t&&u.push(t)}),vt("/"+u.join("/"),o)}(c,o.uri)),(t.$location||t.href)&&n("isPartiallyCurrent",d=ft(r.pathname,$)),(t.href||t.$location)&&n("isCurrent",h=$===r.pathname),t.isCurrent&&n("ariaCurrent",g=h?"page":void 0),(t.getProps||t.$location||t.href||t.isPartiallyCurrent||t.isCurrent)&&n("props",m=i({location:r,href:$,isPartiallyCurrent:d,isCurrent:h}))},{to:c,replace:s,state:u,getProps:i,base:l,location:p,href:$,props:m,onClick:function(t){if(f("click",t),function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();const e=r.pathname===$||s;ct($,{state:u,replace:e})}},ariaCurrent:g,$$slots:v,$$scope:b}}class Ot extends X{constructor(t){super(),W(this,t,St,jt,s,{to:0,replace:0,state:0,getProps:0})}}function At(t){let e,n,o;return{c(){e=m("svg"),n=m("path"),o=m("path"),w(n,"fill","none"),w(n,"d","M0 0h24v24H0z"),w(o,"d","M23 12c0-6.07-4.93-11-11-11S1 5.93 1 12s4.93 11 11 11 11-4.93 11-11zM5 17.64C3.75 16.1 3 14.14 3 12c0-2.13.76-4.08 2-5.63v11.27zM17.64 5H6.36C7.9 3.75 9.86 3 12 3s4.1.75 5.64 2zM12 14.53L8.24 7h7.53L12 14.53zM17 9v8h-4l4-8zm-6 8H7V9l4 8zm6.64 2c-1.55 1.25-3.51 2-5.64 2s-4.1-.75-5.64-2h11.28zM21 12c0 2.14-.75 4.1-2 5.64V6.37c1.24 1.55 2 3.5 2 5.63z"),w(e,"xmlns","http://www.w3.org/2000/svg"),w(e,"width","24px"),w(e,"height","24px"),w(e,"viewBox","0 0 24 24"),w(e,"fill","#000000"),w(e,"class","svelte-15bwekv")},m(t,r){$(t,e,r),f(e,n),f(e,o)},d(t){t&&d(e)}}}function Lt(t){let e,n;return{c(){e=m("svg"),w(n=m("path"),"d","M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"),w(e,"id","about"),w(e,"xmlns","http://www.w3.org/2000/svg"),w(e,"width","24"),w(e,"height","24"),w(e,"viewBox","0 0 24 24"),w(e,"class","svelte-15bwekv")},m(t,o){$(t,e,o),f(e,n)},d(t){t&&d(e)}}}function Nt(t){let e,n,o,r,c,s,a;const u=new Ot({props:{to:"/",$$slots:{default:[At]},$$scope:{ctx:t}}}),i=new Ot({props:{to:"/about",$$slots:{default:[Lt]},$$scope:{ctx:t}}});return{c(){e=h("header"),n=h("div"),F(u.$$.fragment),o=v(),(r=h("span")).textContent="MD Icons β ¬",c=v(),s=h("nav"),F(i.$$.fragment),w(e,"class","svelte-15bwekv")},m(t,l){$(t,e,l),f(e,n),G(u,n,null),f(e,o),f(e,r),f(e,c),f(e,s),G(i,s,null),a=!0},p(t,e){const n={};t.$$scope&&(n.$$scope={changed:t,ctx:e}),u.$set(n);const o={};t.$$scope&&(o.$$scope={changed:t,ctx:e}),i.$set(o)},i(t){a||(U(u.$$.fragment,t),U(i.$$.fragment,t),a=!0)},o(t){V(u.$$.fragment,t),V(i.$$.fragment,t),a=!1},d(t){t&&d(e),J(u),J(i)}}}class Bt extends X{constructor(t){super(),W(this,t,null,Nt,s,{})}}function Dt(t,e,n){const o=Object.create(t);return o.link=e[n],o}function Ht(t){let e,n,o,r,c,s;return{c(){e=h("a"),n=h("img"),c=v(),n.src!==(o="icons/"+t.link+".svg")&&w(n,"src",o),w(n,"alt",r=t.link),w(e,"href",s="icons/"+t.link+".svg"),w(e,"download","")},m(t,o){$(t,e,o),f(e,n),f(e,c)},p(t,c){t.data&&n.src!==(o="icons/"+c.link+".svg")&&w(n,"src",o),t.data&&r!==(r=c.link)&&w(n,"alt",r),t.data&&s!==(s="icons/"+c.link+".svg")&&w(e,"href",s)},d(t){t&&d(e)}}}function Kt(e){let n,o=e.data,r=[];for(let t=0;t<o.length;t+=1)r[t]=Ht(Dt(e,o,t));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();n=b()},m(t,e){for(let n=0;n<r.length;n+=1)r[n].m(t,e);$(t,n,e)},p(t,e){if(t.data){let c;for(o=e.data,c=0;c<o.length;c+=1){const s=Dt(e,o,c);r[c]?r[c].p(t,s):(r[c]=Ht(s),r[c].c(),r[c].m(n.parentNode,n))}for(;c<r.length;c+=1)r[c].d(1);r.length=o.length}},i:t,o:t,d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t),t&&d(n)}}}function It(t,e,n){let o=[];return k((async function(){const t=await fetch("./icons.json"),e=await t.json();n("data",o=e)})),{data:o}}class Ut extends X{constructor(t){super(),W(this,t,It,Kt,s,{})}}function Vt(e){let n;const o=new Ut({});return{c(){F(o.$$.fragment)},m(t,e){G(o,t,e),n=!0},p:t,i(t){n||(U(o.$$.fragment,t),n=!0)},o(t){V(o.$$.fragment,t),n=!1},d(t){J(o,t)}}}class Tt extends X{constructor(t){super(),W(this,t,null,Vt,s,{})}}function qt(e){let n,o,r;return{c(){(n=h("h1")).textContent="About",o=v(),(r=h("p")).textContent="Material design icons are the unofficial icon set of beautifully crafted icons for common actions and items that are designed under the material design guidelines."},m(t,e){$(t,n,e),$(t,o,e),$(t,r,e)},p:t,i:t,o:t,d(t){t&&d(n),t&&d(o),t&&d(r)}}}class Ft extends X{constructor(t){super(),W(this,t,null,qt,s,{})}}function Gt(e){let n,o,r,c;const s=new Bt({}),a=new Mt({props:{path:"/",component:Tt}}),u=new Mt({props:{path:"/about",component:Ft}});return{c(){F(s.$$.fragment),n=v(),o=h("main"),F(a.$$.fragment),r=v(),F(u.$$.fragment),w(o,"class","svelte-8p38ub")},m(t,e){G(s,t,e),$(t,n,e),$(t,o,e),G(a,o,null),f(o,r),G(u,o,null),c=!0},p:t,i(t){c||(U(s.$$.fragment,t),U(a.$$.fragment,t),U(u.$$.fragment,t),c=!0)},o(t){V(s.$$.fragment,t),V(a.$$.fragment,t),V(u.$$.fragment,t),c=!1},d(t){J(s,t),t&&d(n),t&&d(o),J(a),J(u)}}}function Jt(t){let e;const n=new xt({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}});return{c(){F(n.$$.fragment)},m(t,o){G(n,t,o),e=!0},p(t,e){const o={};t.$$scope&&(o.$$scope={changed:t,ctx:e}),n.$set(o)},i(t){e||(U(n.$$.fragment,t),e=!0)},o(t){V(n.$$.fragment,t),e=!1},d(t){J(n,t)}}}return new class extends X{constructor(t){super(),W(this,t,null,Jt,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
