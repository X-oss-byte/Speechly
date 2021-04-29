!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e,n){e in t?t[e]=n:p(t,e,n)}function m(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function v(t){const e={};for(const n of t)e[n.name]=n.value;return e}let w;function $(t){w=t}function b(){if(!w)throw new Error("Function called outside component initialization");return w}const y=[],x=[],C=[],E=[],N=Promise.resolve();let M=!1;function k(t){C.push(t)}let S=!1;const z=new Set;function _(){if(!S){S=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];$(e),B(e.$$)}for($(null),y.length=0;x.length;)x.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];z.has(e)||(z.add(e),e())}C.length=0}while(y.length);for(;E.length;)E.pop()();M=!1,S=!1,z.clear()}}function B(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const L=new Set;const D="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function R(t,e){-1===t.$$.dirty[0]&&(y.push(t),M||(M=!0,N.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(r,c,s,l,u,d,h=[-1]){const f=w;$(r);const p=r.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:c.context||[]),callbacks:n(),dirty:h,skip_bound:!1};let g=!1;if(p.ctx=s?s(r,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return p.ctx&&u(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),g&&R(r,t)),e})):[],p.update(),g=!0,o(p.before_update),p.fragment=!!l&&l(p.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();c.intro&&((m=r.$$.fragment)&&m.i&&(L.delete(m),m.i(v))),function(t,n,r,c){const{fragment:s,on_mount:a,on_destroy:l,after_update:u}=t.$$;s&&s.m(n,r),c||k((()=>{const n=a.map(e).filter(i);l?l.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(k)}(r,c.target,c.anchor,c.customElement),_()}var m,v;$(f)}let A;function F(e){let n,o,i,r,l,d,h,f;return{c(){n=u("svg"),o=u("defs"),i=u("linearGradient"),r=u("stop"),l=u("stop"),d=u("g"),h=u("path"),f=u("path"),this.c=t,p(r,"stop-color","var(--gradient-stop1)"),p(r,"offset","0%"),p(l,"stop-color","var(--gradient-stop2)"),p(l,"offset","100%"),p(i,"x1","50%"),p(i,"y1","0%"),p(i,"x2","50%"),p(i,"y2","100%"),p(i,"id","a"),p(h,"d","M46 3.119c23.683 0 42.881 19.198 42.881 42.881S69.683 88.881 46 88.881 3.119 69.683 3.119 46 22.317 3.119 46 3.119z"),p(h,"fill","#FFF"),p(f,"d","M46 0C20.595 0 0 20.595 0 46s20.595 46 46 46 46-20.595 46-46S71.405 0 46 0zm0 3.119c23.683 0 42.881 19.198 42.881 42.881S69.683 88.881 46 88.881 3.119 69.683 3.119 46 22.317 3.119 46 3.119z"),p(f,"fill","url(#a)"),p(d,"fill","none"),p(d,"fillrule","nonzero"),p(n,"class","buttonFrameEl"),p(n,"viewBox","0 0 92 92"),p(n,"xmlns","http://www.w3.org/2000/svg")},m(t,e){s(t,n,e),c(n,o),c(o,i),c(i,r),c(i,l),c(n,d),c(d,h),c(d,f)},p:t,i:t,o:t,d(t){t&&a(n)}}}"function"==typeof HTMLElement&&(A=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(i);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});customElements.define("mic-frame",class extends A{constructor(t){super(),this.shadowRoot.innerHTML="<style>svg{position:absolute;width:100%;height:100%;pointer-events:none;user-select:none;transform:rotate(var(--fx-rotation))}</style>",P(this,{target:this.shadowRoot,props:v(this.attributes),customElement:!0},null,F,r,{}),t&&t.target&&s(t.target,this,t.anchor)}});var H,T,I,V,j,G=(function(t,e){var n;Object.defineProperty(e,"__esModule",{value:!0}),(n=e.ClientState||(e.ClientState={}))[n.Failed=0]="Failed",n[n.NoBrowserSupport=1]="NoBrowserSupport",n[n.NoAudioConsent=2]="NoAudioConsent",n[n.Disconnected=3]="Disconnected",n[n.Disconnecting=4]="Disconnecting",n[n.Connecting=5]="Connecting",n[n.Connected=6]="Connected",n[n.Starting=7]="Starting",n[n.Stopping=8]="Stopping",n[n.Recording=9]="Recording"}(H={exports:{}},H.exports),H.exports);!function(t){t.Failed="Failed",t.NoBrowserSupport="NoBrowserSupport",t.NoAudioConsent="NoAudioConsent",t.Idle="Idle",t.Connecting="Connecting",t.Ready="Ready",t.Recording="Recording",t.Loading="Loading"}(T||(T={})),function(t){t.Poweron="poweron",t.Mic="mic",t.Error="error",t.Denied="denied"}(I||(I={})),function(t){t.Hold="hold",t.Click="click",t.Noninteractive="noninteractive"}(V||(V={})),function(t){t.None="none",t.Connecting="connecting",t.Busy="busy"}(j||(j={}));const O={[G.ClientState.Disconnected]:{icon:I.Poweron,behaviour:V.Click,effect:j.None},[G.ClientState.Disconnecting]:{icon:I.Poweron,behaviour:V.Noninteractive,effect:j.Connecting},[G.ClientState.Connecting]:{icon:I.Poweron,behaviour:V.Noninteractive,effect:j.Connecting},[G.ClientState.Connected]:{icon:I.Mic,behaviour:V.Hold,effect:j.None},[G.ClientState.Starting]:{icon:I.Mic,behaviour:V.Hold,effect:j.Connecting},[G.ClientState.Recording]:{icon:I.Mic,behaviour:V.Hold,effect:j.None},[G.ClientState.Stopping]:{icon:I.Mic,behaviour:V.Noninteractive,effect:j.Busy},[G.ClientState.Failed]:{icon:I.Error,behaviour:V.Click,effect:j.None},[G.ClientState.NoBrowserSupport]:{icon:I.Error,behaviour:V.Click,effect:j.None},[G.ClientState.NoAudioConsent]:{icon:I.Denied,behaviour:V.Click,effect:j.None},[T.Idle]:{icon:I.Poweron,behaviour:V.Click,effect:j.None},[T.Connecting]:{icon:I.Poweron,behaviour:V.Noninteractive,effect:j.Connecting},[T.Ready]:{icon:I.Mic,behaviour:V.Hold,effect:j.None},[T.Recording]:{icon:I.Mic,behaviour:V.Hold,effect:j.None},[T.Loading]:{icon:I.Mic,behaviour:V.Noninteractive,effect:j.Busy},[T.Failed]:{icon:I.Error,behaviour:V.Click,effect:j.None},[T.NoBrowserSupport]:{icon:I.Error,behaviour:V.Click,effect:j.None},[T.NoAudioConsent]:{icon:I.Denied,behaviour:V.Click,effect:j.None}};function q(t){let e,n,o,i;return{c(){e=u("svg"),n=u("g"),o=u("path"),i=u("rect"),p(o,"d","M42 26h4v4c0 9.265-7 16.895-16 17.89V55h-4v-7.11c-8.892-.982-15.833-8.444-15.997-17.56L10 30v-4h4v4c0 7.732 6.268 14 14 14 7.628 0 13.83-6.1 13.997-13.687L42 30v-4z"),p(i,"x","20"),p(i,"y","1"),p(i,"width","16"),p(i,"height","37"),p(i,"rx","8"),p(n,"fill","#000"),p(n,"fillrule","evenodd"),p(e,"class","buttonIconEl"),p(e,"viewBox","0 0 56 56"),p(e,"xmlns","http://www.w3.org/2000/svg")},m(t,r){s(t,e,r),c(e,n),c(n,o),c(n,i)},d(t){t&&a(e)}}}function U(t){let e,n,o,i;return{c(){e=u("svg"),n=u("g"),o=u("path"),i=u("path"),p(o,"d","M42 26h4v4c0 9.265-7 16.895-16 17.89V55h-4v-7.11c-8.892-.982-15.833-8.444-15.997-17.56L10 30v-4h4v4c0 7.732 6.268 14 14 14 7.628 0 13.83-6.1 13.997-13.687L42 30v-4z"),p(o,"fillrule","nonzero"),p(i,"d","M37 13.081V31a8 8 0 11-16 0v-1.919l16-16zM26 1a8 8 0 018 8v1.319L18 26.318V9a8 8 0 018-8zM37.969 7.932l3.74-7.35 3.018 2.625zM39.654 10.608l7.531-3.359.695 3.94z"),p(n,"fill","#000"),p(n,"fillrule","evenodd"),p(e,"class","buttonIconEl"),p(e,"viewBox","0 0 56 56"),p(e,"xmlns","http://www.w3.org/2000/svg")},m(t,r){s(t,e,r),c(e,n),c(n,o),c(n,i)},d(t){t&&a(e)}}}function J(t){let e,n,o,i;return{c(){e=u("svg"),n=u("g"),o=u("path"),i=u("path"),p(o,"d","M36 14.828V30a8 8 0 01-15.961.79l15.96-15.962zM28 1a8 8 0 018 8v.172L20 25.173V9a8 8 0 018-8z"),p(i,"d","M42 26h4v4c0 9.265-7 16.895-16 17.89V55h-4v-7.11c-8.892-.982-15.833-8.444-15.997-17.56L10 30v-4h4v4c0 7.732 6.268 14 14 14 7.628 0 13.83-6.1 13.997-13.687L42 30v-4z"),p(n,"fill","#000"),p(n,"fillrule","nonzero"),p(e,"class","buttonIconEl"),p(e,"viewBox","0 0 56 56"),p(e,"xmlns","http://www.w3.org/2000/svg")},m(t,r){s(t,e,r),c(e,n),c(n,o),c(n,i)},d(t){t&&a(e)}}}function K(t){let e,n,o,i;return{c(){e=u("svg"),n=u("g"),o=u("path"),i=u("rect"),p(o,"d","M52 28c0 13.255-10.745 24-24 24S4 41.255 4 28c0-8.921 4.867-16.705 12.091-20.842l1.984 3.474C12.055 14.08 8 20.566 8 28c0 11.046 8.954 20 20 20s20-8.954 20-20c0-7.434-4.056-13.92-10.075-17.368L39.91 7.16C47.133 11.296 52 19.079 52 28z"),p(o,"fillrule","nonzero"),p(i,"x","24"),p(i,"y","1"),p(i,"width","8"),p(i,"height","23"),p(i,"rx","4"),p(n,"fill","#000"),p(n,"fillrule","evenodd"),p(e,"class","buttonIconEl"),p(e,"viewBox","0 0 56 56"),p(e,"xmlns","http://www.w3.org/2000/svg")},m(t,r){s(t,e,r),c(e,n),c(n,o),c(n,i)},d(t){t&&a(e)}}}function Q(e){let n,o,i,r,c=e[0]===I.Mic&&q(),l=e[0]===I.Error&&U(),u=e[0]===I.Denied&&J(),f=e[0]===I.Poweron&&K();return{c(){c&&c.c(),n=h(),l&&l.c(),o=h(),u&&u.c(),i=h(),f&&f.c(),r=d(""),this.c=t},m(t,e){c&&c.m(t,e),s(t,n,e),l&&l.m(t,e),s(t,o,e),u&&u.m(t,e),s(t,i,e),f&&f.m(t,e),s(t,r,e)},p(t,[e]){t[0]===I.Mic?c||(c=q(),c.c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null),t[0]===I.Error?l||(l=U(),l.c(),l.m(o.parentNode,o)):l&&(l.d(1),l=null),t[0]===I.Denied?u||(u=J(),u.c(),u.m(i.parentNode,i)):u&&(u.d(1),u=null),t[0]===I.Poweron?f||(f=K(),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null)},i:t,o:t,d(t){c&&c.d(t),t&&a(n),l&&l.d(t),t&&a(o),u&&u.d(t),t&&a(i),f&&f.d(t),t&&a(r)}}}function W(t,e,n){let{icon:o=I.Mic}=e;return t.$$set=t=>{"icon"in t&&n(0,o=t.icon)},[o]}function X(e){let n,o,i,r,l,d,h,f;return{c(){n=u("svg"),o=u("defs"),i=u("linearGradient"),r=u("stop"),l=u("stop"),d=u("filter"),h=u("feGaussianBlur"),f=u("circle"),this.c=t,p(r,"stop-color","var(--gradient-stop1)"),p(r,"offset","0%"),p(l,"stop-color","var(--gradient-stop2)"),p(l,"offset","100%"),p(i,"x1","50%"),p(i,"y1","10%"),p(i,"x2","50%"),p(i,"y2","100%"),p(i,"id","a"),p(h,"stdDeviation","18"),p(h,"in","SourceGraphic"),p(d,"x","-35%"),p(d,"y","-35%"),p(d,"width","170%"),p(d,"height","170%"),p(d,"filterUnits","objectBoundingBox"),p(d,"id","b"),p(f,"filter","url(#b)"),p(f,"cx","124"),p(f,"cy","124"),p(f,"r","79"),p(f,"fill","url(#a)"),p(f,"fillrule","evenodd"),p(n,"viewBox","0 0 246 246"),p(n,"xmlns","http://www.w3.org/2000/svg")},m(t,e){s(t,n,e),c(n,o),c(o,i),c(i,r),c(i,l),c(o,d),c(d,h),c(n,f)},p:t,i:t,o:t,d(t){t&&a(n)}}}customElements.define("mic-icon",class extends A{constructor(t){super(),this.shadowRoot.innerHTML="<style>svg{position:absolute;width:60%;height:60%;top:50%;left:50%;transform:translate(-50%, -50%);pointer-events:none;transition:0.25s}</style>",P(this,{target:this.shadowRoot,props:v(this.attributes),customElement:!0},W,Q,r,{icon:0}),t&&(t.target&&s(t.target,this,t.anchor),t.props&&(this.$set(t.props),_()))}static get observedAttributes(){return["icon"]}get icon(){return this.$$.ctx[0]}set icon(t){this.$set({icon:t}),_()}});customElements.define("mic-fx",class extends A{constructor(t){super(),this.shadowRoot.innerHTML="<style>svg{top:-75%;left:-75%;height:250%;width:250%;position:absolute;pointer-events:none;transform:rotate(var(--fx-rotation))}</style>",P(this,{target:this.shadowRoot,props:v(this.attributes),customElement:!0},null,X,r,{}),t&&t.target&&s(t.target,this,t.anchor)}});const{window:Y}=D;function Z(e){let n,i,r,u,d,v,w,$,b,y,x,C;return{c(){n=l("main"),i=l("div"),r=l("mic-fx"),u=h(),d=l("mic-frame"),v=h(),w=l("mic-icon"),b=h(),y=l("slot"),this.c=t,m(r,"opacity",e[6][1]),m(r,"transform","rotate("+e[3][1]+"deg)"),g(w,"icon",$=e[7].icon),m(w,"opacity",e[5][1]),p(i,"class","ButtonComponents"),m(i,"transform","scale("+e[4][1]+")"),m(n,"width",e[0]),m(n,"height",e[0]),m(n,"--gradient-stop1",e[1]),m(n,"--gradient-stop2",e[2]),m(n,"--fx-rotation",e[3][1]+"deg")},m(t,o){s(t,n,o),c(n,i),c(i,r),c(i,u),c(i,d),c(i,v),c(i,w),c(n,b),c(n,y),x||(C=[f(Y,"mouseup",e[9]),f(Y,"keydown",e[10]),f(Y,"keyup",e[11]),f(n,"mousedown",e[8]),f(n,"touchstart",e[8]),f(n,"dragstart",e[8]),f(n,"mouseup",e[9]),f(n,"touchend",e[9],{passive:!0}),f(n,"dragend",e[9])],x=!0)},p(t,[e]){64&e&&m(r,"opacity",t[6][1]),8&e&&m(r,"transform","rotate("+t[3][1]+"deg)"),128&e&&$!==($=t[7].icon)&&g(w,"icon",$),32&e&&m(w,"opacity",t[5][1]),16&e&&m(i,"transform","scale("+t[4][1]+")"),1&e&&m(n,"width",t[0]),1&e&&m(n,"height",t[0]),2&e&&m(n,"--gradient-stop1",t[1]),4&e&&m(n,"--gradient-stop2",t[2]),8&e&&m(n,"--fx-rotation",t[3][1]+"deg")},i:t,o:t,d(t){t&&a(n),x=!1,o(C)}}}function tt(t,e,n){let o,{icon:i=T.Idle}=e,{capturekey:r=" "}=e,{size:c="6rem"}=e,{gradientstop1:s="#15e8b5"}=e,{gradientstop2:a="#4fa1f9"}=e,{hide:l}=e,u=!1,d=0,h=[0,0],f=[0,0],p=[1,1],g=[0,0],m=O[i],v=null,w=0,$=0;const y=b(),x=(t,e)=>{y.dispatchEvent(new CustomEvent(t,{detail:e,composed:!0}))};!function(t){b().$$.on_mount.push(t)}((()=>{n(4,f=[1,0]);let t=null;const e=()=>{w=$,$=(new Date).getTime();const i=$-(w||$);m.effect===j.Connecting&&n(5,p[0]=.25*Math.cos($/2500*Math.PI*2)+.25,p),m.effect===j.Busy&&n(5,p[0]=.25*Math.cos($/1e3*Math.PI*2)+.25,p),n(4,f=[f[0],N(f[1],o?f[0]:0,.2,i)]),n(5,p=[p[0],N(p[1],p[0],.08,i)]),n(6,g=[g[0],N(g[1],g[0],.08,i)]),n(3,h=[h[0]+2.5,N(h[1],h[0],.05,i)]),t=requestAnimationFrame(e)};return e(),()=>cancelAnimationFrame(t)}));const C=t=>{t.preventDefault(),t.stopPropagation(),o&&!u&&(n(15,u=!0),d=Date.now(),n(4,f[0]=1.35,f),n(6,g[0]=1,g),M(),m.behaviour===V.Click&&(n(3,h[0]+=720,h),null===v&&(v=window.setTimeout((()=>{n(6,g[0]=0,g),v=null}),500))),y.onholdstart&&y.onholdstart(),x("holdstart"))},E=()=>{if(u){n(4,f[0]=1,f),n(6,g[0]=0,g),n(15,u=!1);const t={timeMs:Date.now()-d};M(),null!==v&&window.clearTimeout(v),y.onholdend&&y.onholdend(t),x("holdend",t)}},N=(t,e,n,o)=>t*(1-(n=Math.pow(n,1e3/60/o)))+e*n,M=(t=5)=>{void 0!==navigator.vibrate&&navigator.vibrate(t)};return t.$$set=t=>{"icon"in t&&n(12,i=t.icon),"capturekey"in t&&n(13,r=t.capturekey),"size"in t&&n(0,c=t.size),"gradientstop1"in t&&n(1,s=t.gradientstop1),"gradientstop2"in t&&n(2,a=t.gradientstop2),"hide"in t&&n(14,l=t.hide)},t.$$.update=()=>{16384&t.$$.dirty&&(o=void 0===l||"false"===l),36864&t.$$.dirty&&(u||(t=>{if(m!==t)switch(n(7,m=t),t.icon){case I.Mic:case I.Denied:case I.Error:n(5,p[0]=1,p)}})(O[i]))},[c,s,a,h,f,p,g,m,C,E,t=>{r&&(t.key===r&&(document.hasFocus()&&document.activeElement!==document.body&&document.activeElement!==document.documentElement&&document.activeElement||null||(t.repeat?(t.preventDefault(),t.stopPropagation()):C(t))))},t=>{t.key===r&&E()},i,r,l,u]}customElements.define("holdable-button",class extends A{constructor(t){super(),this.shadowRoot.innerHTML="<style>main{position:relative;pointer-events:auto;cursor:pointer;border-radius:50%;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none !important;-webkit-user-select:none !important}.ButtonComponents{width:100%;height:100%}</style>",P(this,{target:this.shadowRoot,props:v(this.attributes),customElement:!0},tt,Z,r,{icon:12,capturekey:13,size:0,gradientstop1:1,gradientstop2:2,hide:14}),t&&(t.target&&s(t.target,this,t.anchor),t.props&&(this.$set(t.props),_()))}static get observedAttributes(){return["icon","capturekey","size","gradientstop1","gradientstop2","hide"]}get icon(){return this.$$.ctx[12]}set icon(t){this.$set({icon:t}),_()}get capturekey(){return this.$$.ctx[13]}set capturekey(t){this.$set({capturekey:t}),_()}get size(){return this.$$.ctx[0]}set size(t){this.$set({size:t}),_()}get gradientstop1(){return this.$$.ctx[1]}set gradientstop1(t){this.$set({gradientstop1:t}),_()}get gradientstop2(){return this.$$.ctx[2]}set gradientstop2(t){this.$set({gradientstop2:t}),_()}get hide(){return this.$$.ctx[14]}set hide(t){this.$set({hide:t}),_()}})}();
//# sourceMappingURL=holdable-button.js.map
