var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n){t.$$.on_destroy.push(function(t,e){const n=t.subscribe(e);return n.unsubscribe?()=>n.unsubscribe():n}(e,n))}function i(t,e,n){if(t){const o=u(t,e,n);return t[0](o)}}function u(t,n,o){return t[1]?e({},e(n.$$scope.ctx,t[1](o?o(n):{}))):n.$$scope.ctx}function l(t,n,o,r){return t[1]?e({},e(n.$$scope.changed||{},t[1](r?r(o):{}))):n.$$scope.changed||{}}function p(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function $(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function v(){return m(" ")}function b(){return m("")}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:n[o]&&n[o].set?t[o]=e[o]:x(t,o,e[o])}function w(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let P;function C(t){P=t}function k(){if(!P)throw new Error("Function called outside component initialization");return P}function _(t){k().$$.on_mount.push(t)}function E(){const t=k();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,r)})}}}function z(t,e){k().$$.context.set(t,e)}function R(t){return k().$$.context.get(t)}const M=[],O=[],j=[],S=[],L=Promise.resolve();let A=!1;function N(t){j.push(t)}function B(){const t=new Set;do{for(;M.length;){const t=M.shift();C(t),I(t.$$)}for(;O.length;)O.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];t.has(n)||(n(),t.add(n))}j.length=0}while(M.length);for(;S.length;)S.pop()();A=!1}function I(t){null!==t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment&&t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(N))}const D=new Set;let H;function K(){H={r:0,c:[],p:H}}function U(){H.r||r(H.c),H=H.p}function V(t,e){t&&t.i&&(D.delete(t),t.i(e))}function q(t,e,n,o){if(t&&t.o){if(D.has(t))return;D.add(t),H.c.push(()=>{D.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function T(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[s]=a}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}function G(t){t&&t.c()}function J(t,e,o){const{fragment:c,on_mount:a,on_destroy:i,after_update:u}=t.$$;c&&c.m(e,o),N(()=>{const e=a.map(n).filter(s);i?i.push(...e):r(e),t.$$.on_mount=[]}),u.forEach(N)}function Q(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx={})}function W(t,e){t.$$.dirty||(M.push(t),A||(A=!0,L.then(B)),t.$$.dirty=o()),t.$$.dirty[e]=!0}function X(e,n,s,c,a,i){const u=P;C(e);const l=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:null};let $=!1;p.ctx=s?s(e,l,(t,n,o=n)=>(p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),$&&W(e,t)),n)):l,p.update(),$=!0,r(p.before_update),p.fragment=!!c&&c(p.ctx),n.target&&(n.hydrate?p.fragment&&p.fragment.l(function(t){return Array.from(t.childNodes)}(n.target)):p.fragment&&p.fragment.c(),n.intro&&V(e.$$.fragment),J(e,n.target,n.anchor),B()),C(u)}class Y{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Z=[];function tt(e,n=t){let o;const r=[];function s(t){if(c(e,t)&&(e=t,o)){const t=!Z.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return r.push(i),1===r.length&&(o=n(s)||t),c(e),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function et(e,n,o){const c=!Array.isArray(e),a=c?[e]:e,i=n.length<2;return{subscribe:tt(o,e=>{let o=!1;const u=[];let l=0,p=t;const $=()=>{if(l)return;p();const o=n(c?u[0]:u,e);i?e(o):p=s(o)?o:t},f=a.map((t,e)=>t.subscribe(t=>{u[e]=t,l&=~(1<<e),o&&$()},()=>{l|=1<<e}));return o=!0,$(),function(){r(f),p()}}).subscribe}}const nt={},ot={};function rt(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const st=function(t,e){const n=[];let o=rt(t);return{get location(){return o},listen(e){n.push(e);const r=()=>{o=rt(t),e({location:o,action:"POP"})};return t.addEventListener("popstate",r),()=>{t.removeEventListener("popstate",r);const o=n.indexOf(e);n.splice(o,1)}},navigate(e,{state:r,replace:s=!1}={}){r={...r,key:Date.now()+""};try{s?t.history.replaceState(r,null,e):t.history.pushState(r,null,e)}catch(n){t.location[s?"replace":"assign"](e)}o=rt(t),n.forEach(t=>t({location:o,action:"PUSH"}))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],o=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return o[e]},pushState(t,r,s){const[c,a=""]=s.split("?");e++,n.push({pathname:c,search:a}),o.push(t)},replaceState(t,r,s){const[c,a=""]=s.split("?");n[e]={pathname:c,search:a},o[e]=t}}}}()),{navigate:ct}=st,at=/^:(.+)/,it=4,ut=3,lt=2,pt=1,$t=1;function ft(t,e){return t.substr(0,e.length)===e}function ht(t){return"*"===t[0]}function dt(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function gt(t){return t.replace(/(^\/+|\/+$)/g,"")}function mt(t,e){return{route:t,score:t.default?0:dt(t.path).reduce((t,e)=>(t+=it,!function(t){return""===t}(e)?!function(t){return at.test(t)}(e)?ht(e)?t-=it+pt:t+=ut:t+=lt:t+=$t,t),0),index:e}}function vt(t,e){let n,o;const[r]=e.split("?"),s=dt(r),c=""===s[0],a=function(t){return t.map(mt).sort((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index)}(t);for(let t=0,r=a.length;t<r;t++){const r=a[t].route;let i=!1;if(r.default){o={route:r,params:{},uri:e};continue}const u=dt(r.path),l={},p=Math.max(s.length,u.length);let $=0;for(;$<p;$++){const t=u[$],e=s[$];if(void 0!==t&&ht(t)){l["*"===t?"*":t.slice(1)]=s.slice($).map(decodeURIComponent).join("/");break}if(void 0===e){i=!0;break}let n=at.exec(t);if(n&&!c){const t=decodeURIComponent(e);l[n[1]]=t}else if(t!==e){i=!0;break}}if(!i){n={route:r,params:l,uri:"/"+s.slice(0,$).join("/")};break}}return n||o||null}function bt(t,e){return t+(e?`?${e}`:"")}function xt(t,e){return`${gt("/"===e?t:`${gt(t)}/${gt(e)}`)}/`}function yt(t){let e;const n=t.$$slots.default,o=i(n,t,null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,e){o&&o.p&&t.$$scope&&o.p(l(n,e,t,null),u(n,e,null))},i(t){e||(V(o,t),e=!0)},o(t){q(o,t),e=!1},d(t){o&&o.d(t)}}}function wt(t,e,n){let o,r,s,{basepath:c="/"}=e,{url:i=null}=e;const u=R(nt),l=R(ot),p=tt([]);a(t,p,t=>n("$routes",s=t));const $=tt(null);let f=!1;const h=u||tt(i?{pathname:i}:st.location);a(t,h,t=>n("$location",r=t));const d=l?l.routerBase:tt({path:c,uri:c});a(t,d,t=>n("$base",o=t));const g=et([d,$],([t,e])=>{if(null===e)return t;const{path:n}=t,{route:o,uri:r}=e;return{path:o.default?n:o.path.replace(/\*.*$/,""),uri:r}});u||(_(()=>{return st.listen(t=>{h.set(t.location)})}),z(nt,h)),z(ot,{activeRoute:$,base:d,routerBase:g,registerRoute:function(t){const{path:e}=o;let{path:n}=t;if(t._path=n,t.path=xt(e,n),"undefined"==typeof window){if(f)return;const e=function(t,e){return vt([t],e)}(t,r.pathname);e&&($.set(e),f=!0)}else p.update(e=>(e.push(t),e))},unregisterRoute:function(t){p.update(e=>{const n=e.indexOf(t);return e.splice(n,1),e})}});let{$$slots:m={},$$scope:v}=e;return t.$set=t=>{"basepath"in t&&n("basepath",c=t.basepath),"url"in t&&n("url",i=t.url),"$$scope"in t&&n("$$scope",v=t.$$scope)},t.$$.update=(t={$base:1,$routes:1,$location:1})=>{if(t.$base){const{path:t}=o;p.update(e=>(e.forEach(e=>e.path=xt(t,e._path)),e))}if(t.$routes||t.$location){const t=vt(s,r.pathname);$.set(t)}},{basepath:c,url:i,routes:p,location:h,base:d,$$slots:m,$$scope:v}}class Pt extends Y{constructor(t){super(),X(this,t,wt,yt,c,{basepath:0,url:0})}}const Ct=({routeParams:t,$location:e})=>({params:t,location:e}),kt=({routeParams:t,$location:e})=>({params:t,location:e});function _t(t){let e,n,o,r;const s=[zt,Et],c=[];function a(t,e){return null!==e.component?0:1}return e=a(0,t),n=c[e]=s[e](t),{c(){n.c(),o=b()},m(t,n){c[e].m(t,n),f(t,o,n),r=!0},p(t,r){let i=e;(e=a(0,r))===i?c[e].p(t,r):(K(),q(c[i],1,1,()=>{c[i]=null}),U(),(n=c[e])||(n=c[e]=s[e](r)).c(),V(n,1),n.m(o.parentNode,o))},i(t){r||(V(n),r=!0)},o(t){q(n),r=!1},d(t){c[e].d(t),t&&h(o)}}}function Et(t){let e;const n=t.$$slots.default,o=i(n,t,kt);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,e){o&&o.p&&(t.$$scope||t.routeParams||t.$location)&&o.p(l(n,e,t,Ct),u(n,e,kt))},i(t){e||(V(o,t),e=!0)},o(t){q(o,t),e=!1},d(t){o&&o.d(t)}}}function zt(t){let n,o;const r=[{location:t.$location},t.routeParams,t.routeProps];var s=t.component;function c(t){let n={};for(let t=0;t<r.length;t+=1)n=e(n,r[t]);return{props:n}}if(s)var a=new s(c());return{c(){a&&G(a.$$.fragment),n=b()},m(t,e){a&&J(a,t,e),f(t,n,e),o=!0},p(t,e){const o=t.$location||t.routeParams||t.routeProps?T(r,[t.$location&&{location:e.$location},t.routeParams&&F(e.routeParams),t.routeProps&&F(e.routeProps)]):{};if(s!==(s=e.component)){if(a){K();const t=a;q(t.$$.fragment,1,0,()=>{Q(t,1)}),U()}s?(G((a=new s(c())).$$.fragment),V(a.$$.fragment,1),J(a,n.parentNode,n)):a=null}else s&&a.$set(o)},i(t){o||(a&&V(a.$$.fragment,t),o=!0)},o(t){a&&q(a.$$.fragment,t),o=!1},d(t){t&&h(n),a&&Q(a,t)}}}function Rt(t){let e,n,o=null!==t.$activeRoute&&t.$activeRoute.route===t.route&&_t(t);return{c(){o&&o.c(),e=b()},m(t,r){o&&o.m(t,r),f(t,e,r),n=!0},p(t,n){null!==n.$activeRoute&&n.$activeRoute.route===n.route?o?(o.p(t,n),V(o,1)):((o=_t(n)).c(),V(o,1),o.m(e.parentNode,e)):o&&(K(),q(o,1,1,()=>{o=null}),U())},i(t){n||(V(o),n=!0)},o(t){q(o),n=!1},d(t){o&&o.d(t),t&&h(e)}}}function Mt(t,n,o){let r,s,{path:c=""}=n,{component:i=null}=n;const{registerRoute:u,unregisterRoute:l,activeRoute:$}=R(ot);a(t,$,t=>o("$activeRoute",r=t));const f=R(nt);a(t,f,t=>o("$location",s=t));const h={path:c,default:""===c};let d={},g={};var m;u(h),"undefined"!=typeof window&&(m=()=>{l(h)},k().$$.on_destroy.push(m));let{$$slots:v={},$$scope:b}=n;return t.$set=t=>{o("$$props",n=e(e({},n),t)),"path"in t&&o("path",c=t.path),"component"in t&&o("component",i=t.component),"$$scope"in t&&o("$$scope",b=t.$$scope)},t.$$.update=(t={$activeRoute:1,$$props:1})=>{t.$activeRoute&&r&&r.route===h&&o("routeParams",d=r.params);{const{path:t,component:e,...r}=n;o("routeProps",g=r)}},{path:c,component:i,activeRoute:$,location:f,route:h,routeParams:d,routeProps:g,$activeRoute:r,$location:s,$$props:n=p(n),$$slots:v,$$scope:b}}class Ot extends Y{constructor(t){super(),X(this,t,Mt,Rt,c,{path:0,component:0})}}function jt(t){let n,o,r;const s=t.$$slots.default,c=i(s,t,null);let a=[{href:t.href},{"aria-current":t.ariaCurrent},t.props],p={};for(let t=0;t<a.length;t+=1)p=e(p,a[t]);return{c(){var e,o,s,a;n=d("a"),c&&c.c(),y(n,p),e=n,o="click",s=t.onClick,e.addEventListener(o,s,a),r=()=>e.removeEventListener(o,s,a)},m(t,e){f(t,n,e),c&&c.m(n,null),o=!0},p(t,e){c&&c.p&&t.$$scope&&c.p(l(s,e,t,null),u(s,e,null)),y(n,T(a,[t.href&&{href:e.href},t.ariaCurrent&&{"aria-current":e.ariaCurrent},t.props&&e.props]))},i(t){o||(V(c,t),o=!0)},o(t){q(c,t),o=!1},d(t){t&&h(n),c&&c.d(t),r()}}}function St(t,e,n){let o,r,{to:s="#"}=e,{replace:c=!1}=e,{state:i={}}=e,{getProps:u=(()=>({}))}=e;const{base:l}=R(ot);a(t,l,t=>n("$base",o=t));const p=R(nt);a(t,p,t=>n("$location",r=t));const $=E();let f,h,d,g;let m,{$$slots:v={},$$scope:b}=e;return t.$set=t=>{"to"in t&&n("to",s=t.to),"replace"in t&&n("replace",c=t.replace),"state"in t&&n("state",i=t.state),"getProps"in t&&n("getProps",u=t.getProps),"$$scope"in t&&n("$$scope",b=t.$$scope)},t.$$.update=(t={to:1,$base:1,$location:1,href:1,isCurrent:1,getProps:1,isPartiallyCurrent:1})=>{(t.to||t.$base)&&n("href",f="/"===s?o.uri:function(t,e){if(ft(t,"/"))return t;const[n,o]=t.split("?"),[r]=e.split("?"),s=dt(n),c=dt(r);if(""===s[0])return bt(r,o);if(!ft(s[0],".")){return bt(("/"===r?"":"/")+c.concat(s).join("/"),o)}const a=c.concat(s),i=[];return a.forEach(t=>{".."===t?i.pop():"."!==t&&i.push(t)}),bt("/"+i.join("/"),o)}(s,o.uri)),(t.$location||t.href)&&n("isPartiallyCurrent",h=ft(r.pathname,f)),(t.href||t.$location)&&n("isCurrent",d=f===r.pathname),t.isCurrent&&n("ariaCurrent",m=d?"page":void 0),(t.getProps||t.$location||t.href||t.isPartiallyCurrent||t.isCurrent)&&n("props",g=u({location:r,href:f,isPartiallyCurrent:h,isCurrent:d}))},{to:s,replace:c,state:i,getProps:u,base:l,location:p,href:f,props:g,onClick:function(t){if($("click",t),function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();const e=r.pathname===f||c;ct(f,{state:i,replace:e})}},ariaCurrent:m,$$slots:v,$$scope:b}}class Lt extends Y{constructor(t){super(),X(this,t,St,jt,c,{to:0,replace:0,state:0,getProps:0})}}function At(t){let e,n,o;return{c(){e=g("svg"),n=g("path"),o=g("path"),x(n,"fill","none"),x(n,"d","M0 0h24v24H0z"),x(o,"d","M23 12c0-6.07-4.93-11-11-11S1 5.93 1 12s4.93 11 11 11 11-4.93 11-11zM5 17.64C3.75 16.1 3 14.14 3 12c0-2.13.76-4.08 2-5.63v11.27zM17.64 5H6.36C7.9 3.75 9.86 3 12 3s4.1.75 5.64 2zM12 14.53L8.24 7h7.53L12 14.53zM17 9v8h-4l4-8zm-6 8H7V9l4 8zm6.64 2c-1.55 1.25-3.51 2-5.64 2s-4.1-.75-5.64-2h11.28zM21 12c0 2.14-.75 4.1-2 5.64V6.37c1.24 1.55 2 3.5 2 5.63z"),x(e,"xmlns","http://www.w3.org/2000/svg"),x(e,"width","24px"),x(e,"height","24px"),x(e,"viewBox","0 0 24 24"),x(e,"fill","#000000"),x(e,"class","svelte-15bwekv")},m(t,r){f(t,e,r),$(e,n),$(e,o)},d(t){t&&h(e)}}}function Nt(t){let e,n;return{c(){e=g("svg"),x(n=g("path"),"d","M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"),x(e,"id","about"),x(e,"xmlns","http://www.w3.org/2000/svg"),x(e,"width","24"),x(e,"height","24"),x(e,"viewBox","0 0 24 24"),x(e,"class","svelte-15bwekv")},m(t,o){f(t,e,o),$(e,n)},d(t){t&&h(e)}}}function Bt(t){let e,n,o,r,s,c,a;const i=new Lt({props:{to:t.ghpages,$$slots:{default:[At]},$$scope:{ctx:t}}}),u=new Lt({props:{to:t.ghpages+"about",$$slots:{default:[Nt]},$$scope:{ctx:t}}});return{c(){e=d("header"),n=d("div"),G(i.$$.fragment),o=v(),(r=d("span")).textContent="MD Icons β ¬",s=v(),c=d("nav"),G(u.$$.fragment),x(e,"class","svelte-15bwekv")},m(t,l){f(t,e,l),$(e,n),J(i,n,null),$(e,o),$(e,r),$(e,s),$(e,c),J(u,c,null),a=!0},p(t,e){const n={};t.ghpages&&(n.to=e.ghpages),t.$$scope&&(n.$$scope={changed:t,ctx:e}),i.$set(n);const o={};t.ghpages&&(o.to=e.ghpages+"about"),t.$$scope&&(o.$$scope={changed:t,ctx:e}),u.$set(o)},i(t){a||(V(i.$$.fragment,t),V(u.$$.fragment,t),a=!0)},o(t){q(i.$$.fragment,t),q(u.$$.fragment,t),a=!1},d(t){t&&h(e),Q(i),Q(u)}}}function It(t,e,n){let{ghpages:o}=e;return t.$set=t=>{"ghpages"in t&&n("ghpages",o=t.ghpages)},{ghpages:o}}class Dt extends Y{constructor(t){super(),X(this,t,It,Bt,c,{ghpages:0})}}const Ht={};function Kt(e){let n,o;return{c(){n=d("div"),o=m("Loading..."),w(n,"height",e.height+"px")},m(t,e){f(t,n,e),$(n,o)},p(t,e){t.height&&w(n,"height",e.height+"px")},i:t,o:t,d(t){t&&h(n)}}}function Ut(t){let e;const n=t.$$slots.default,o=i(n,t,null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,e){o&&o.p&&t.$$scope&&o.p(l(n,e,t,null),u(n,e,null))},i(t){e||(V(o,t),e=!0)},o(t){q(o,t),e=!1},d(t){o&&o.d(t)}}}function Vt(t){let e,n,o,r,s;const c=[Ut,Kt],a=[];function i(t,e){return e.load?0:1}return n=i(0,t),o=a[n]=c[n](t),{c(){e=d("div"),o.c(),x(e,"id",r="lazy-"+t.id)},m(t,o){f(t,e,o),a[n].m(e,null),s=!0},p(t,u){let l=n;(n=i(0,u))===l?a[n].p(t,u):(K(),q(a[l],1,1,()=>{a[l]=null}),U(),(o=a[n])||(o=a[n]=c[n](u)).c(),V(o,1),o.m(e,null)),(!s||t.id&&r!==(r="lazy-"+u.id))&&x(e,"id",r)},i(t){s||(V(o),s=!0)},o(t){q(o),s=!1},d(t){t&&h(e),a[n].d()}}}function qt(t,e,n){let{id:o=""}=e,{height:r=800}=e,s=!1;const{registerObserver:c}=R(Ht);_(()=>{const t=document.querySelector("#lazy-"+o);c(t,()=>{n("load",s=!0)})});let{$$slots:a={},$$scope:i}=e;return t.$set=t=>{"id"in t&&n("id",o=t.id),"height"in t&&n("height",r=t.height),"$$scope"in t&&n("$$scope",i=t.$$scope)},{id:o,height:r,load:s,$$slots:a,$$scope:i}}class Tt extends Y{constructor(t){super(),X(this,t,qt,Vt,c,{id:0,height:0})}}function Ft(t){let e;const n=t.$$slots.default,o=i(n,t,null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,e){o&&o.p&&t.$$scope&&o.p(l(n,e,t,null),u(n,e,null))},i(t){e||(V(o,t),e=!0)},o(t){q(o,t),e=!1},d(t){o&&o.d(t)}}}function Gt(t,e,n){let{threshold:o=.01}=e,r={};const s=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(r[t.target.id](),s.unobserve(t.target))})},{root:null,rootMargin:"0px",threshold:o});z(Ht,{registerObserver:(t,e)=>{r[t.id]=e,s.observe(t)}});let{$$slots:c={},$$scope:a}=e;return t.$set=t=>{"threshold"in t&&n("threshold",o=t.threshold),"$$scope"in t&&n("$$scope",a=t.$$scope)},{threshold:o,$$slots:c,$$scope:a}}class Jt extends Y{constructor(t){super(),X(this,t,Gt,Ft,c,{threshold:0})}}function Qt(t,e,n){const o=Object.create(t);return o.link=e[n],o.i=n,o}function Wt(t){let e,n,o,r,s;return{c(){e=d("a"),(n=d("img")).src!==(o="mdicons/icons/"+t.link+".svg")&&x(n,"src",o),x(n,"alt",r=t.link),x(e,"href",s="mdicons/icons/"+t.link+".svg"),x(e,"download","")},m(t,o){f(t,e,o),$(e,n)},p(t,c){t.data&&n.src!==(o="mdicons/icons/"+c.link+".svg")&&x(n,"src",o),t.data&&r!==(r=c.link)&&x(n,"alt",r),t.data&&s!==(s="mdicons/icons/"+c.link+".svg")&&x(e,"href",s)},d(t){t&&h(e)}}}function Xt(t){let e,n,o;const r=new Tt({props:{id:t.i,$$slots:{default:[Wt]},$$scope:{ctx:t}}});return{c(){e=d("div"),G(r.$$.fragment),n=v(),x(e,"class","icon-container svelte-lif2fz")},m(t,s){f(t,e,s),J(r,e,null),$(e,n),o=!0},p(t,e){const n={};(t.$$scope||t.data)&&(n.$$scope={changed:t,ctx:e}),r.$set(n)},i(t){o||(V(r.$$.fragment,t),o=!0)},o(t){q(r.$$.fragment,t),o=!1},d(t){t&&h(e),Q(r)}}}function Yt(t){let e,n,o=t.data,r=[];for(let e=0;e<o.length;e+=1)r[e]=Xt(Qt(t,o,e));const s=t=>q(r[t],1,1,()=>{r[t]=null});return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=b()},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o);f(t,e,o),n=!0},p(t,n){if(t.data){let c;for(o=n.data,c=0;c<o.length;c+=1){const s=Qt(n,o,c);r[c]?(r[c].p(t,s),V(r[c],1)):(r[c]=Xt(s),r[c].c(),V(r[c],1),r[c].m(e.parentNode,e))}for(K(),c=o.length;c<r.length;c+=1)s(c);U()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)V(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)q(r[t]);n=!1},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t),t&&h(e)}}}function Zt(t){let e;const n=new Jt({props:{threshold:"0",$$slots:{default:[Yt]},$$scope:{ctx:t}}});return{c(){G(n.$$.fragment)},m(t,o){J(n,t,o),e=!0},p(t,e){const o={};(t.$$scope||t.data)&&(o.$$scope={changed:t,ctx:e}),n.$set(o)},i(t){e||(V(n.$$.fragment,t),e=!0)},o(t){q(n.$$.fragment,t),e=!1},d(t){Q(n,t)}}}function te(t,e,n){let o=[];return _((async function(){const t=await fetch("./Icons.json"),e=await t.json();n("data",o=e)})),{data:o}}class ee extends Y{constructor(t){super(),X(this,t,te,Zt,c,{})}}function ne(e){let n;const o=new ee({});return{c(){G(o.$$.fragment)},m(t,e){J(o,t,e),n=!0},p:t,i(t){n||(V(o.$$.fragment,t),n=!0)},o(t){q(o.$$.fragment,t),n=!1},d(t){Q(o,t)}}}class oe extends Y{constructor(t){super(),X(this,t,null,ne,c,{})}}function re(e){let n,o,r;return{c(){(n=d("h1")).textContent="About",o=v(),(r=d("p")).textContent="Material design icons are the unofficial icon set of beautifully crafted icons for common actions and items that are\r\n designed under the material design guidelines."},m(t,e){f(t,n,e),f(t,o,e),f(t,r,e)},p:t,i:t,o:t,d(t){t&&h(n),t&&h(o),t&&h(r)}}}class se extends Y{constructor(t){super(),X(this,t,null,re,c,{})}}function ce(t){let e,n,o,r;const s=new Dt({props:{ghpages:t.ghpages}}),c=new Ot({props:{path:t.ghpages,component:oe}}),a=new Ot({props:{path:t.ghpages+"about",component:se}});return{c(){G(s.$$.fragment),e=v(),n=d("main"),G(c.$$.fragment),o=v(),G(a.$$.fragment),x(n,"class","svelte-1kavl3m")},m(t,i){J(s,t,i),f(t,e,i),f(t,n,i),J(c,n,null),$(n,o),J(a,n,null),r=!0},p(t,e){const n={};t.ghpages&&(n.ghpages=e.ghpages),s.$set(n);const o={};t.ghpages&&(o.path=e.ghpages),c.$set(o);const r={};t.ghpages&&(r.path=e.ghpages+"about"),a.$set(r)},i(t){r||(V(s.$$.fragment,t),V(c.$$.fragment,t),V(a.$$.fragment,t),r=!0)},o(t){q(s.$$.fragment,t),q(c.$$.fragment,t),q(a.$$.fragment,t),r=!1},d(t){Q(s,t),t&&h(e),t&&h(n),Q(c),Q(a)}}}function ae(t){let e;const n=new Pt({props:{$$slots:{default:[ce]},$$scope:{ctx:t}}});return{c(){G(n.$$.fragment)},m(t,o){J(n,t,o),e=!0},p(t,e){const o={};(t.$$scope||t.ghpages)&&(o.$$scope={changed:t,ctx:e}),n.$set(o)},i(t){e||(V(n.$$.fragment,t),e=!0)},o(t){q(n.$$.fragment,t),e=!1},d(t){Q(n,t)}}}function ie(t,e,n){let{ghpages:o}=e;return t.$set=t=>{"ghpages"in t&&n("ghpages",o=t.ghpages)},{ghpages:o}}return new class extends Y{constructor(t){super(),X(this,t,ie,ae,c,{ghpages:0})}}({target:document.body,props:{ghpages:"mdicons/"}})}();
//# sourceMappingURL=bundle.js.map
