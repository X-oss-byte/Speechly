!function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function i(){return Object.create(null)}function r(t){t.forEach(o)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e}function a(t){return 0===Object.keys(t).length}function d(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}const u="undefined"!=typeof window;let f=u?()=>window.performance.now():()=>Date.now(),h=u?t=>requestAnimationFrame(t):t;const g=new Set;function p(t){g.forEach((e=>{e.c(t)||(g.delete(e),e.f())})),0!==g.size&&h(p)}function m(t){let e;return 0===g.size&&h(p),{promise:new Promise((n=>{g.add(e={c:t,f:n})})),abort(){g.delete(e)}}}let $=!1;const b=new Set;function y(t,e){$&&b.delete(e),e.parentNode!==t&&t.appendChild(e)}function w(t,e,n){$&&b.delete(e),(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function v(t){$?b.add(t):t.parentNode&&t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function C(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function _(){return k(" ")}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function N(t,e,n){t.classList[n?"add":"remove"](e)}function T(t){const e={};for(const n of t)e[n.name]=n.value;return e}const P=new Set;let R,z=0;function D(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-o.length;i&&(t.style.animation=o.join(", "),z-=i,z||h((()=>{z||(P.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),P.clear())})))}function B(t){R=t}function M(){if(!R)throw new Error("Function called outside component initialization");return R}const A=[],F=[],I=[],O=[],j=Promise.resolve();let L=!1;function H(t){I.push(t)}let V=!1;const q=new Set;function U(){if(!V){V=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];B(e),W(e.$$)}for(B(null),A.length=0;F.length;)F.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];q.has(e)||(q.add(e),e())}I.length=0}while(A.length);for(;O.length;)O.pop()();L=!1,V=!1,q.clear()}}function W(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let G;function J(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const K=new Set;function Q(t,e){t&&t.i&&(K.delete(t),t.i(e))}const X={duration:0};function Y(n,o,i){let r,c,l=o(n,i),a=!1,d=0;function u(){r&&D(n,r)}function h(){const{delay:o=0,duration:i=300,easing:s=e,tick:h=t,css:g}=l||X;g&&(r=function(t,e,n,o,i,r,s,c=0){const l=16.666/o;let a="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*r(t);a+=100*t+`%{${s(o,1-o)}}\n`}const d=a+`100% {${s(n,1-n)}}\n}`,u=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(d)}_${c}`,f=t.ownerDocument;P.add(f);const h=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(x("style")).sheet),g=f.__svelte_rules||(f.__svelte_rules={});g[u]||(g[u]=!0,h.insertRule(`@keyframes ${u} ${d}`,h.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${u} ${o}ms linear ${i}ms 1 both`,z+=1,u}(n,0,1,i,o,s,g,d++)),h(0,1);const p=f()+o,$=p+i;c&&c.abort(),a=!0,H((()=>J(n,!0,"start"))),c=m((t=>{if(a){if(t>=$)return h(1,0),J(n,!0,"end"),u(),a=!1;if(t>=p){const e=s((t-p)/i);h(e,1-e)}}return a}))}let g=!1;return{start(){g||(D(n),s(l)?(l=l(),(G||(G=Promise.resolve(),G.then((()=>{G=null}))),G).then(h)):h())},invalidate(){g=!1},end(){a&&(u(),a=!1)}}}const Z="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function tt(t,e,n,i){const{fragment:c,on_mount:l,on_destroy:a,after_update:d}=t.$$;c&&c.m(e,n),i||H((()=>{const e=l.map(o).filter(s);a?a.push(...e):r(e),t.$$.on_mount=[]})),d.forEach(H)}function et(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){-1===t.$$.dirty[0]&&(A.push(t),L||(L=!0,j.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,o,s,c,l,a=[-1]){const d=R;B(e);const u=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:i(),dirty:a,skip_bound:!1};let f=!1;if(u.ctx=o?o(e,n.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return u.ctx&&c(u.ctx[t],u.ctx[t]=i)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](i),f&&nt(e,t)),n})):[],u.update(),f=!0,r(u.before_update),u.fragment=!!s&&s(u.ctx),n.target){if(n.hydrate){$=!0;const t=function(t){return Array.from(t.childNodes)}(n.target);u.fragment&&u.fragment.l(t),t.forEach(v)}else u.fragment&&u.fragment.c();n.intro&&Q(e.$$.fragment),tt(e,n.target,n.anchor,n.customElement),function(){$=!1;for(const t of b)t.parentNode.removeChild(t);b.clear()}(),U()}B(d)}let it;"function"==typeof HTMLElement&&(it=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(o).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){r(this.$$.on_disconnect)}$destroy(){et(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!a(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var rt,st,ct,lt,at,dt=(function(t,e){var n;Object.defineProperty(e,"__esModule",{value:!0}),(n=e.ClientState||(e.ClientState={}))[n.Failed=0]="Failed",n[n.NoBrowserSupport=1]="NoBrowserSupport",n[n.NoAudioConsent=2]="NoAudioConsent",n[n.Disconnected=3]="Disconnected",n[n.Disconnecting=4]="Disconnecting",n[n.Connecting=5]="Connecting",n[n.Connected=6]="Connected",n[n.Starting=7]="Starting",n[n.Stopping=8]="Stopping",n[n.Recording=9]="Recording"}(rt={exports:{}},rt.exports),rt.exports);function ut(t){return function(e,n){if(!e.hasOwnProperty("ownerDocument")){Object.defineProperty(e,"ownerDocument",{get:function(){return e.parentElement}});let t=e;for(;t.parentElement;)t=t.parentElement;e.parentElement.head=t}return t(e,n)}}function ft(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function ht(t,{delay:e=0,speed:n,duration:o,easing:i=ft}={}){const r=t.getTotalLength();return void 0===o?o=void 0===n?800:r/n:"function"==typeof o&&(o=o(r)),{delay:e,duration:o,easing:i,css:(t,e)=>`stroke-dasharray: ${t*r} ${e*r}`}}!function(t){t.Failed="Failed",t.NoBrowserSupport="NoBrowserSupport",t.NoAudioConsent="NoAudioConsent",t.Idle="Idle",t.Connecting="Connecting",t.Ready="Ready",t.Recording="Recording",t.Loading="Loading"}(st||(st={})),function(t){t.Poweron="poweron",t.Mic="mic",t.Error="error",t.Denied="denied"}(ct||(ct={})),function(t){t.Hold="hold",t.Click="click",t.Noninteractive="noninteractive"}(lt||(lt={})),function(t){t.None="none",t.Connecting="connecting",t.Busy="busy"}(at||(at={})),dt.ClientState.Disconnected,ct.Poweron,lt.Click,at.None,dt.ClientState.Disconnecting,ct.Poweron,lt.Noninteractive,at.Connecting,dt.ClientState.Connecting,ct.Poweron,lt.Noninteractive,at.Connecting,dt.ClientState.Connected,ct.Mic,lt.Hold,at.None,dt.ClientState.Starting,ct.Mic,lt.Hold,at.Connecting,dt.ClientState.Recording,ct.Mic,lt.Hold,at.None,dt.ClientState.Stopping,ct.Mic,lt.Noninteractive,at.Busy,dt.ClientState.Failed,ct.Error,lt.Click,at.None,dt.ClientState.NoBrowserSupport,ct.Error,lt.Click,at.None,dt.ClientState.NoAudioConsent,ct.Denied,lt.Click,at.None,st.Idle,ct.Poweron,lt.Click,at.None,st.Connecting,ct.Poweron,lt.Noninteractive,at.Connecting,st.Ready,ct.Mic,lt.Hold,at.None,st.Recording,ct.Mic,lt.Hold,at.None,st.Loading,ct.Mic,lt.Noninteractive,at.Busy,st.Failed,ct.Error,lt.Click,at.None,st.NoBrowserSupport,ct.Error,lt.Click,at.None,st.NoAudioConsent,ct.Denied,lt.Click,at.None;const gt=[0,1];function pt(t,e,n,o){if(e<n)return t[0];if(e>o)return t[t.length-1];let i=(o-n)/(t.length-1);if(i<=0)return t[0];let r=(e-n)/i,s=Math.floor(r),c=Math.ceil(r),l=r-s;return(1-l)*t[s]+l*t[c]}function mt(e){let n;return{c(){n=x("canvas"),E(n,"color",e[0]),E(n,"display","block"),E(n,"width","1.35rem"),E(n,"height","1.5rem"),E(n,"margin","0"),E(n,"padding","0 0.8rem 0 0rem"),E(n,"flex-grow","0"),E(n,"flex-shrink","0"),E(n,"flex-basis","1.35rem"),S(n,"class","svelte-1fz8oog")},m(t,o){w(t,n,o),e[3](n)},p(t,[e]){1&e&&E(n,"color",t[0])},i:t,o:t,d(t){t&&v(n),e[3](null)}}}function $t(t,e,n){let{color:o="#60e0ff"}=e;const i=(t,e)=>{s=Date.now()>c?t:Math.max(s,t),c=Date.now()+e};let r,s=0,c=0,l=[0,0];const a=(t,e,n,o,i,r)=>{o<2*r&&(r=o/2),i<2*r&&(r=i/2),t.beginPath(),t.moveTo(e+r,n),t.arcTo(e+o,n,e+o,n+i,r),t.arcTo(e+o,n+i,e,n+i,r),t.arcTo(e,n+i,e,n,r),t.arcTo(e,n,e+o,n,r),t.closePath()};return function(t){M().$$.on_mount.push(t)}((()=>{let t;const e=2*(l.length-1)+1,o=3*e+1*(e-1),d=()=>{if(t=requestAnimationFrame(d),!r)return;const e=r.getContext("2d");if(!e)return;let i=(t=>{var e=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/e})(e),u=Number.parseInt(getComputedStyle(r).getPropertyValue("width").slice(0,-2)),f=Number.parseInt(getComputedStyle(r).getPropertyValue("height").slice(0,-2));n(1,r.width=u*i,r),n(1,r.height=f*i,r),Date.now()<c?l[0]=.15*s+.85*l[0]:l[0]=.0625+.75*l[0];let h=1;for(;h<l.length;)l[h]=.25*l[h-1]+.5*l[h]+.0625,h++;e.clearRect(0,0,r.width,r.height);const g=3/o*r.width*.5,p=4/o*r.width;for(e.fillStyle=r.style.color||"#000000",h=0;h<l.length;h++){const t=l[h]*r.height;t*r.height>2*g?a(e,.5*r.width-g+h*p,.5*(r.height-t),2*g,t,g):(e.beginPath(),e.arc(.5*r.width+h*p,.5*r.height,t*r.height*.5,0,2*Math.PI)),e.fill(),h>0&&(t*r.height>2*g?a(e,.5*r.width-g-h*p,.5*(r.height-t),2*g,t,g):(e.beginPath(),e.arc(.5*r.width-h*p,.5*r.height,t*r.height*.5,0,2*Math.PI)),e.fill())}};return d(),i(1,500),()=>{cancelAnimationFrame(t)}})),t.$$set=t=>{"color"in t&&n(0,o=t.color)},[o,r,i,function(t){F[t?"unshift":"push"]((()=>{r=t,n(1,r)}))}]}class bt extends class{$destroy(){et(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!a(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){var e;super(),document.getElementById("svelte-1fz8oog-style")||((e=x("style")).id="svelte-1fz8oog-style",e.textContent="canvas.svelte-1fz8oog{display:block;width:1.35rem;height:1.5rem;margin:0;padding:0 0.8rem 0 0rem;flex-grow:0;flex-shrink:0;flex-basis:1.35rem}",y(document.head,e)),ot(this,t,$t,mt,c,{color:0,updateVU:2})}get updateVU(){return this.$$.ctx[2]}}const yt=[];function wt(t){return"[object Date]"===Object.prototype.toString.call(t)}function vt(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const n=e.map(((e,n)=>vt(t[n],e)));return t=>n.map((e=>e(t)))}if("object"===n){if(!t||!e)throw new Error("Object cannot be null");if(wt(t)&&wt(e)){t=t.getTime();const n=(e=e.getTime())-t;return e=>new Date(t+e*n)}const n=Object.keys(e),o={};return n.forEach((n=>{o[n]=vt(t[n],e[n])})),t=>{const e={};return n.forEach((n=>{e[n]=o[n](t)})),e}}if("number"===n){const n=e-t;return e=>t+e*n}throw new Error(`Cannot interpolate ${n} values`)}function xt(o,i={}){const r=function(e,n=t){let o;const i=[];function r(t){if(c(e,t)&&(e=t,o)){const t=!yt.length;for(let t=0;t<i.length;t+=1){const n=i[t];n[1](),yt.push(n,e)}if(t){for(let t=0;t<yt.length;t+=2)yt[t][0](yt[t+1]);yt.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(s,c=t){const l=[s,c];return i.push(l),1===i.length&&(o=n(r)||t),s(e),()=>{const t=i.indexOf(l);-1!==t&&i.splice(t,1),0===i.length&&(o(),o=null)}}}}(o);let s,l=o;function a(t,c){if(null==o)return r.set(o=t),Promise.resolve();l=t;let a=s,d=!1,{delay:u=0,duration:h=400,easing:g=e,interpolate:p=vt}=n(n({},i),c);if(0===h)return a&&(a.abort(),a=null),r.set(o=l),Promise.resolve();const $=f()+u;let b;return s=m((e=>{if(e<$)return!0;d||(b=p(o,t),"function"==typeof h&&(h=h(o,t)),d=!0),a&&(a.abort(),a=null);const n=e-$;return n>h?(r.set(o=t),!1):(r.set(o=b(g(n/h))),!0)})),s.promise}return{set:a,update:(t,e)=>a(t(l,o),e),subscribe:r.subscribe}}const{window:Ct}=Z;function kt(t,e,n){const o=t.slice();return o[39]=e[n],o[41]=n,o}function _t(t){let e;return{c(){e=x("div"),S(e,"class","TransscriptItemBgDiv")},m(t,n){w(t,e,n)},d(t){t&&v(e)}}}function St(e){let n,o;return{c(){n=x("div"),n.textContent="Listening...",S(n,"class","listening")},m(t,e){w(t,n,e)},i(t){o||H((()=>{o=Y(n,e[19],{duration:400}),o.start()}))},o:t,d(t){t&&v(n)}}}function Et(e){let n,o;return{c(){n=x("div"),S(n,"class","TransscriptItemBgDiv")},m(t,e){w(t,n,e)},p(t,n){e=t},i(t){o||H((()=>{o=Y(n,e[19],{duration:e[15]}),o.start()}))},o:t,d(t){t&&v(n)}}}function Nt(t){let e,n;return{c(){e=x("span"),S(e,"style",n=t[41]<t[10].length-1?"width:0.25em;":t[12]?"width:1.2em;":"")},m(t,n){w(t,e,n)},p(t,o){5120&o[0]&&n!==(n=t[41]<t[10].length-1?"width:0.25em;":t[12]?"width:1.2em;":"")&&S(e,"style",n)},d(t){t&&v(e)}}}function Tt(e){let n,o,i,r,s,c,l,a=e[39].word+"",d=e[14]&&Et(e),u=e[41]<e[10].length&&Nt(e);return{c(){n=x("div"),d&&d.c(),o=_(),i=x("div"),r=k(a),s=_(),u&&u.c(),S(i,"class","TransscriptItemContent"),S(n,"class",l="TranscriptItem "+e[21](e[39])),N(n,"Entity",null!==e[39].entityType),N(n,"Final",e[39].isFinal)},m(t,e){w(t,n,e),d&&d.m(n,null),y(n,o),y(n,i),y(i,r),y(i,s),u&&u.m(i,null)},p(t,s){(e=t)[14]?d?16384&s[0]&&Q(d,1):(d=Et(e),d.c(),Q(d,1),d.m(n,o)):d&&(d.d(1),d=null),1024&s[0]&&a!==(a=e[39].word+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,a),e[41]<e[10].length?u?u.p(e,s):(u=Nt(e),u.c(),u.m(i,null)):u&&(u.d(1),u=null),1024&s[0]&&l!==(l="TranscriptItem "+e[21](e[39]))&&S(n,"class",l),1024&s[0]&&N(n,"Entity",null!==e[39].entityType),1024&s[0]&&N(n,"Final",e[39].isFinal)},i(t){Q(d),c||H((()=>{c=Y(i,e[19],{duration:e[15]}),c.start()}))},o:t,d(t){t&&v(n),d&&d.d(),u&&u.d()}}}function Pt(e){let n,o,i,r,s,c,l,a;return{c(){n=x("div"),o=x("div"),i=_(),r=x("div"),s=C("svg"),c=C("path"),S(o,"class","TransscriptItemBgDiv"),E(o,"background-color",e[5]),S(c,"stroke","currentColor"),S(c,"stroke-width","3"),S(c,"d","M7.191 11.444l4.059 6.107 7.376-12.949"),S(c,"fill","none"),S(c,"fill-rule","evenodd"),E(s,"width","2rem"),E(s,"height","2rem"),E(s,"position","absolute"),E(s,"transform","translate(-0.6rem, -0.5rem)"),E(s,"stroke","#eee"),S(s,"viewBox","0 0 24 24"),S(s,"xmlns","http://www.w3.org/2000/svg"),E(r,"width","1.0rem"),E(r,"height","1rem"),E(r,"position","relative"),S(n,"class","TranscriptItem")},m(t,e){w(t,n,e),y(n,o),y(n,i),y(n,r),y(r,s),y(s,c)},p(t,e){32&e[0]&&E(o,"background-color",t[5])},i(t){l||H((()=>{l=Y(c,e[18],{duration:500}),l.start()})),a||H((()=>{a=Y(n,e[19],{duration:200,maxWidth:3}),a.start()}))},o:t,d(t){t&&v(n)}}}function Rt(e){let n,o,i,r,s,c,l,a,d,u,f,h,g,p,m=e[14]&&_t(),$={color:e[5]};c=new bt({props:$}),e[31](c);let b=e[13]&&St(e),C=e[10],k=[];for(let t=0;t<C.length;t+=1)k[t]=Tt(kt(e,C,t));let T=e[12]&&Pt(e);return{c(){var h;n=x("main"),o=x("div"),i=x("div"),m&&m.c(),r=_(),s=x("div"),(h=c.$$.fragment)&&h.c(),l=_(),b&&b.c(),a=_();for(let t=0;t<k.length;t+=1)k[t].c();d=_(),T&&T.c(),u=_(),f=x("link"),this.c=t,S(s,"class","TransscriptItemContent"),S(i,"class","TranscriptItem"),S(o,"class","BigTranscript"),E(n,"--voffset",e[1]),E(n,"--hoffset",e[2]),E(n,"--fontsize",e[3]),E(n,"--color",e[4]),E(n,"--highlight-color",e[5]),E(n,"--text-bg-color",e[6]),E(n,"--gradient-stop1",e[7]),E(n,"--gradient-stop2",e[8]),E(n,"--marginbottom",e[9]),E(n,"--transition",e[16].transition),E(n,"opacity",e[16].transition),E(n,"max-height",10*pt(gt,e[16].transition,0,.6)+"rem"),E(n,"visibility",0!==e[16].transition?"visible":"hidden"),N(n,"placementTop","top"===e[0]),S(f,"href","https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@700&display=swap"),S(f,"rel","stylesheet")},m(t,$){w(t,n,$),y(n,o),y(o,i),m&&m.m(i,null),y(i,r),y(i,s),tt(c,s,null),y(s,l),b&&b.m(s,null),y(o,a);for(let t=0;t<k.length;t+=1)k[t].m(o,null);var v,x,C,_;y(o,d),T&&T.m(o,null),w(t,u,$),y(document.head,f),h=!0,g||(v=Ct,x="message",C=e[20],v.addEventListener(x,C,_),p=()=>v.removeEventListener(x,C,_),g=!0)},p(t,e){t[14]?m||(m=_t(),m.c(),m.m(i,r)):m&&(m.d(1),m=null);const l={};if(32&e[0]&&(l.color=t[5]),c.$set(l),t[13]?b?8192&e[0]&&Q(b,1):(b=St(t),b.c(),Q(b,1),b.m(s,null)):b&&(b.d(1),b=null),2118656&e[0]){let n;for(C=t[10],n=0;n<C.length;n+=1){const i=kt(t,C,n);k[n]?(k[n].p(i,e),Q(k[n],1)):(k[n]=Tt(i),k[n].c(),Q(k[n],1),k[n].m(o,d))}for(;n<k.length;n+=1)k[n].d(1);k.length=C.length}t[12]?T?(T.p(t,e),4096&e[0]&&Q(T,1)):(T=Pt(t),T.c(),Q(T,1),T.m(o,null)):T&&(T.d(1),T=null),(!h||2&e[0])&&E(n,"--voffset",t[1]),(!h||4&e[0])&&E(n,"--hoffset",t[2]),(!h||8&e[0])&&E(n,"--fontsize",t[3]),(!h||16&e[0])&&E(n,"--color",t[4]),(!h||32&e[0])&&E(n,"--highlight-color",t[5]),(!h||64&e[0])&&E(n,"--text-bg-color",t[6]),(!h||128&e[0])&&E(n,"--gradient-stop1",t[7]),(!h||256&e[0])&&E(n,"--gradient-stop2",t[8]),(!h||512&e[0])&&E(n,"--marginbottom",t[9]),(!h||65536&e[0])&&E(n,"--transition",t[16].transition),(!h||65536&e[0])&&E(n,"opacity",t[16].transition),(!h||65536&e[0])&&E(n,"max-height",10*pt(gt,t[16].transition,0,.6)+"rem"),(!h||65536&e[0])&&E(n,"visibility",0!==t[16].transition?"visible":"hidden"),1&e[0]&&N(n,"placementTop","top"===t[0])},i(t){if(!h){Q(c.$$.fragment,t),Q(b);for(let t=0;t<C.length;t+=1)Q(k[t]);Q(T),h=!0}},o(t){!function(t,e,n,o){if(t&&t.o){if(K.has(t))return;K.add(t),(void 0).c.push((()=>{K.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(c.$$.fragment,t),h=!1},d(t){t&&v(n),m&&m.d(),e[31](null),et(c),b&&b.d(),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(k,t),T&&T.d(),t&&v(u),v(f),g=!1,p()}}}function zt(t,e,n){let o,i,r,s,c,l,a,{placement:u}=e,{voffset:f="3rem"}=e,{hoffset:h="2rem"}=e,{fontsize:g="1.5rem"}=e,{color:p="#ffffff"}=e,{highlightcolor:m="#15e8b5"}=e,{backgroundcolor:$="#202020"}=e,{gradientstop1:b="#ffffff88"}=e,{gradientstop2:y="#ffffffcc"}=e,{marginbottom:w="0rem"}=e,{formattext:v}=e,{demomode:x}=e,C=[],k=null,_=null,S=dt.ClientState.Disconnected,E=!1,N=!1,T=!1,P=xt({transition:0},{duration:200});d(t,P,(t=>n(16,l=t)));const R=M(),z=ut(ht),D=ut(((t,{delay:e=0,duration:n=350,maxWidth:o=10})=>({delay:e,duration:n,css:t=>`\n        max-width: ${pt(gt,t,0,1)*o}rem;\n      `}))),B=t=>{n(12,T=T||t)},A=t=>{n(27,S=t),S===dt.ClientState.Recording&&(n(12,T=!1),n(10,C=[]),_=null)},I=t=>{if(void 0===t)return;a&&(s||S===dt.ClientState.Recording)&&a.updateVU(.5*Math.random()+.5,75*Math.random()+75),t.isFinal?O(C.length>0?s?3500:2e3:0):C.length>0&&(E||n(28,E=!0),O(2e3));const e=`${t.contextId}/${t.id}`;null!==_?_!==e&&(n(12,T=!1),_=e):_=e,n(10,C=[]),t.words.forEach((t=>{n(10,C[t.index]={word:t.value,serialNumber:t.index,entityType:null,isFinal:t.isFinal,hide:!1},C)})),r?t.entities.forEach((t=>{n(10,C[t.startPosition].word=t.value,C),n(10,C[t.startPosition].entityType=t.type,C),n(10,C[t.startPosition].isFinal=t.isFinal,C),n(10,C[t.startPosition].hide=!1,C);for(let e=t.startPosition+1;e<t.endPosition;e++)C[e]&&n(10,C[e].hide=!0,C)})):t.entities.forEach((t=>{for(let e=t.startPosition;e<t.endPosition;e++)C[e]&&(n(10,C[e].entityType=t.type,C),n(10,C[e].isFinal=t.isFinal,C))})),n(10,C=C.filter((t=>!t.hide)))},O=(t=0)=>{j(),k=window.setTimeout((()=>{k=null,E&&n(28,E=!1)}),t)},j=()=>{null!==k&&(window.clearTimeout(k),k=null)};return t.$$set=t=>{"placement"in t&&n(0,u=t.placement),"voffset"in t&&n(1,f=t.voffset),"hoffset"in t&&n(2,h=t.hoffset),"fontsize"in t&&n(3,g=t.fontsize),"color"in t&&n(4,p=t.color),"highlightcolor"in t&&n(5,m=t.highlightcolor),"backgroundcolor"in t&&n(6,$=t.backgroundcolor),"gradientstop1"in t&&n(7,b=t.gradientstop1),"gradientstop2"in t&&n(8,y=t.gradientstop2),"marginbottom"in t&&n(9,w=t.marginbottom),"formattext"in t&&n(22,v=t.formattext),"demomode"in t&&n(23,x=t.demomode)},t.$$.update=()=>{if(1024&t.$$.dirty[0]&&n(13,o=0===C.length),64&t.$$.dirty[0]&&n(14,i="none"!==$),4194304&t.$$.dirty[0]&&(r=void 0===v||"false"!==v),8388608&t.$$.dirty[0]&&n(30,s=void 0!==x&&"false"!==x),1073741824&t.$$.dirty[0]&&n(15,c=s?800:350),939524096&t.$$.dirty[0]){const t=S===dt.ClientState.Recording||E;t!==N&&(e="visibilitychanged",l=t,R.dispatchEvent(new CustomEvent(e,{detail:l,composed:!0}))),n(29,N=t),P.set({transition:N?1:0})}var e,l;1073741824&t.$$.dirty[0]&&(s||O(0))},[u,f,h,g,p,m,$,b,y,w,C,a,T,o,i,c,l,P,z,D,t=>{switch(t.data.type){case"speechsegment":I(t.data.segment);break;case"speechhandled":B(t.data.success);break;case"speechstate":A(t.data.state)}},t=>t.entityType||"",v,x,B,A,I,S,E,N,s,function(t){F[t?"unshift":"push"]((()=>{a=t,n(11,a)}))}]}class Dt extends it{constructor(t){super(),this.shadowRoot.innerHTML="<style>.BigTranscript{position:relative;user-select:none;font-family:'Saira Condensed', sans-serif;text-transform:uppercase;color:var(--color);font-size:var(--fontsize);line-height:135%;display:flex;flex-direction:row;justify-content:start;flex-wrap:wrap;margin-bottom:calc(var(--marginbottom) * var(--transition))}.TranscriptItem{position:relative;display:flex;flex-direction:row;align-items:center}.Entity{color:var(--highlight-color)}.TransscriptItemContent{z-index:1;display:flex;flex-wrap:nowrap;flex-direction:row;align-items:center;overflow:hidden;white-space:nowrap}.TransscriptItemBgDiv{position:absolute;box-sizing:content-box;width:100%;height:100%;top:-0.2rem;left:-0.8rem;margin:0;padding:0.2rem 0.8rem;background-color:var(--text-bg-color);z-index:-1}.placementTop{position:fixed;top:0;left:0;right:0;bottom:0;margin:var(--voffset) var(--hoffset) 0 var(--hoffset);z-index:50;pointer-events:none}.listening{animation:flow 1s linear infinite;background:linear-gradient(-60deg, var(--gradient-stop1), var(--gradient-stop2), var(--gradient-stop1), var(--gradient-stop2), var(--gradient-stop1));background-size:200%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;-webkit-box-decoration-break:clone}@keyframes flow{0%{background-position:100% 50%}100%{background-position:0% 50%}}</style>",ot(this,{target:this.shadowRoot,props:T(this.attributes),customElement:!0},zt,Rt,l,{placement:0,voffset:1,hoffset:2,fontsize:3,color:4,highlightcolor:5,backgroundcolor:6,gradientstop1:7,gradientstop2:8,marginbottom:9,formattext:22,demomode:23,speechhandled:24,speechstate:25,speechsegment:26},[-1,-1]),t&&(t.target&&w(t.target,this,t.anchor),t.props&&(this.$set(t.props),U()))}static get observedAttributes(){return["placement","voffset","hoffset","fontsize","color","highlightcolor","backgroundcolor","gradientstop1","gradientstop2","marginbottom","formattext","demomode","speechhandled","speechstate","speechsegment"]}get placement(){return this.$$.ctx[0]}set placement(t){this.$set({placement:t}),U()}get voffset(){return this.$$.ctx[1]}set voffset(t){this.$set({voffset:t}),U()}get hoffset(){return this.$$.ctx[2]}set hoffset(t){this.$set({hoffset:t}),U()}get fontsize(){return this.$$.ctx[3]}set fontsize(t){this.$set({fontsize:t}),U()}get color(){return this.$$.ctx[4]}set color(t){this.$set({color:t}),U()}get highlightcolor(){return this.$$.ctx[5]}set highlightcolor(t){this.$set({highlightcolor:t}),U()}get backgroundcolor(){return this.$$.ctx[6]}set backgroundcolor(t){this.$set({backgroundcolor:t}),U()}get gradientstop1(){return this.$$.ctx[7]}set gradientstop1(t){this.$set({gradientstop1:t}),U()}get gradientstop2(){return this.$$.ctx[8]}set gradientstop2(t){this.$set({gradientstop2:t}),U()}get marginbottom(){return this.$$.ctx[9]}set marginbottom(t){this.$set({marginbottom:t}),U()}get formattext(){return this.$$.ctx[22]}set formattext(t){this.$set({formattext:t}),U()}get demomode(){return this.$$.ctx[23]}set demomode(t){this.$set({demomode:t}),U()}get speechhandled(){return this.$$.ctx[24]}get speechstate(){return this.$$.ctx[25]}get speechsegment(){return this.$$.ctx[26]}}customElements.get("big-transcript")?console.warn("Skipping re-defining customElement big-transcript"):customElements.define("big-transcript",Dt)}();
//# sourceMappingURL=big-transcript.js.map