!function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t}let c=!1;const l=new Set;function s(e,t){c&&l.delete(t),t.parentNode!==e&&e.appendChild(t)}function a(e,t,n){c&&l.delete(t),(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function d(e){c?l.add(e):e.parentNode&&e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function f(){return p(" ")}function h(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function g(e,t,n){e.classList[n?"add":"remove"](t)}function C(e){const t={};for(const n of e)t[n.name]=n.value;return t}let w;function b(e){w=e}const $=[],y=[],S=[],x=[],N=Promise.resolve();let v=!1;function k(e){S.push(e)}let _=!1;const R=new Set;function T(){if(!_){_=!0;do{for(let e=0;e<$.length;e+=1){const t=$[e];b(t),E(t.$$)}for(b(null),$.length=0;y.length;)y.pop()();for(let e=0;e<S.length;e+=1){const t=S[e];R.has(t)||(R.add(t),t())}S.length=0}while($.length);for(;x.length;)x.pop()();v=!1,_=!1,R.clear()}}function E(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(k)}}const A=new Set;const M="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function B(e,t){-1===e.$$.dirty[0]&&($.push(e),v||(v=!0,N.then(T)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(i,s,a,u,p,f,h=[-1]){const m=w;b(i);const g=i.$$={fragment:null,ctx:null,props:f,update:e,not_equal:p,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:s.context||[]),callbacks:n(),dirty:h,skip_bound:!1};let C=!1;if(g.ctx=a?a(i,s.props||{},((e,t,...n)=>{const o=n.length?n[0]:t;return g.ctx&&p(g.ctx[e],g.ctx[e]=o)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](o),C&&B(i,e)),t})):[],g.update(),C=!0,o(g.before_update),g.fragment=!!u&&u(g.ctx),s.target){if(s.hydrate){c=!0;const e=function(e){return Array.from(e.childNodes)}(s.target);g.fragment&&g.fragment.l(e),e.forEach(d)}else g.fragment&&g.fragment.c();s.intro&&(($=i.$$.fragment)&&$.i&&(A.delete($),$.i(y))),function(e,n,i,c){const{fragment:l,on_mount:s,on_destroy:a,after_update:d}=e.$$;l&&l.m(n,i),c||k((()=>{const n=s.map(t).filter(r);a?a.push(...n):o(n),e.$$.on_mount=[]})),d.forEach(k)}(i,s.target,s.anchor,s.customElement),function(){c=!1;for(const e of l)e.parentNode.removeChild(e);l.clear()}(),T()}var $,y;b(m)}let L;"function"==typeof HTMLElement&&(L=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(t).filter(r);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});var P,D,I,F,q,z=(function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.ClientState=void 0,(n=t.ClientState||(t.ClientState={}))[n.Failed=0]="Failed",n[n.NoBrowserSupport=1]="NoBrowserSupport",n[n.NoAudioConsent=2]="NoAudioConsent",n[n.Disconnected=3]="Disconnected",n[n.Disconnecting=4]="Disconnecting",n[n.Connecting=5]="Connecting",n[n.Connected=6]="Connected",n[n.Starting=7]="Starting",n[n.Stopping=8]="Stopping",n[n.Recording=9]="Recording"}(P={exports:{}},P.exports),P.exports);!function(e){e.Failed="Failed",e.NoBrowserSupport="NoBrowserSupport",e.NoAudioConsent="NoAudioConsent",e.Idle="Idle",e.Connecting="Connecting",e.Ready="Ready",e.Recording="Recording",e.Loading="Loading"}(D||(D={})),function(e){e.Poweron="poweron",e.Mic="mic",e.Error="error",e.Denied="denied"}(I||(I={})),function(e){e.Hold="hold",e.Click="click",e.Noninteractive="noninteractive"}(F||(F={})),function(e){e.None="none",e.Connecting="connecting",e.Busy="busy"}(q||(q={})),z.ClientState.Disconnected,I.Poweron,F.Click,q.None,z.ClientState.Disconnecting,I.Poweron,F.Noninteractive,q.Connecting,z.ClientState.Connecting,I.Poweron,F.Noninteractive,q.Connecting,z.ClientState.Connected,I.Mic,F.Hold,q.None,z.ClientState.Starting,I.Mic,F.Hold,q.Connecting,z.ClientState.Recording,I.Mic,F.Hold,q.None,z.ClientState.Stopping,I.Mic,F.Noninteractive,q.Busy,z.ClientState.Failed,I.Error,F.Click,q.None,z.ClientState.NoBrowserSupport,I.Error,F.Click,q.None,z.ClientState.NoAudioConsent,I.Denied,F.Click,q.None,D.Idle,I.Poweron,F.Click,q.None,D.Connecting,I.Poweron,F.Noninteractive,q.Connecting,D.Ready,I.Mic,F.Hold,q.None,D.Recording,I.Mic,F.Hold,q.None,D.Loading,I.Mic,F.Noninteractive,q.Busy,D.Failed,I.Error,F.Click,q.None,D.NoBrowserSupport,I.Error,F.Click,q.None,D.NoAudioConsent,I.Denied,F.Click,q.None;const{window:j}=M;function O(e){let t,n,o,r,i,c,l,p,m=e[2]===V&&U(e),g=e[2]===z.ClientState.NoAudioConsent&&G(),C=e[2]===z.ClientState.NoBrowserSupport&&J(),w=e[2]===W&&K();return{c(){t=u("errorDiv"),n=u("errorLeft"),n.textContent="×",o=f(),m&&m.c(),r=f(),g&&g.c(),i=f(),C&&C.c(),c=f(),w&&w.c()},m(d,u){a(d,t,u),s(t,n),s(t,o),m&&m.m(t,null),s(t,r),g&&g.m(t,null),s(t,i),C&&C.m(t,null),s(t,c),w&&w.m(t,null),l||(p=h(n,"click",e[4]),l=!0)},p(e,n){e[2]===V?m?m.p(e,n):(m=U(e),m.c(),m.m(t,r)):m&&(m.d(1),m=null),e[2]===z.ClientState.NoAudioConsent?g?g.p(e,n):(g=G(),g.c(),g.m(t,i)):g&&(g.d(1),g=null),e[2]===z.ClientState.NoBrowserSupport?C||(C=J(),C.c(),C.m(t,c)):C&&(C.d(1),C=null),e[2]===W?w?w.p(e,n):(w=K(),w.c(),w.m(t,null)):w&&(w.d(1),w=null)},d(e){e&&d(t),m&&m.d(),g&&g.d(),C&&C.d(),w&&w.d(),l=!1,p()}}}function U(e){let t,n,o,r,i,c,l,h,g,C,w,b,$,y=e[1].appId+"";return{c(){t=u("errorRight"),n=u("h1"),n.textContent="Failed to connect Speechly",o=f(),r=u("p"),i=p("Please check that Speechly application id '"),c=p(y),l=p("' has been successfully deployed."),h=f(),g=u("p"),C=u("a"),C.textContent="Troubleshooting",w=p("\n                \n            "),b=u("a"),$=p("Reload"),m(C,"href","https://docs.speechly.com/faq/#error-invalid-app-id"),m(b,"href",window.location.href)},m(e,d){a(e,t,d),s(t,n),s(t,o),s(t,r),s(r,i),s(r,c),s(r,l),s(t,h),s(t,g),s(g,C),s(g,w),s(g,b),s(b,$)},p(e,t){2&t&&y!==(y=e[1].appId+"")&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(c,y)},d(e){e&&d(t)}}}function G(t){let n,o,r,i,c,l,h,g,C,w;return{c(){n=u("errorRight"),o=u("h1"),o.textContent="No Mic Permission",r=f(),i=u("p"),i.textContent="To use the voice interface, please allow your web browser access the\n            microphone and reload.",c=f(),l=u("p"),h=u("a"),h.textContent="Troubleshooting",g=p("\n                \n            "),C=u("a"),w=p("Reload"),m(h,"href","https://docs.speechly.com/faq/#error-no-audio-consent"),m(C,"href",window.location.href)},m(e,t){a(e,n,t),s(n,o),s(n,r),s(n,i),s(n,c),s(n,l),s(l,h),s(l,g),s(l,C),s(C,w)},p:e,d(e){e&&d(n)}}}function J(e){let t;return{c(){t=u("errorRight"),t.innerHTML='<h1>Unsupported Browser</h1> \n          <p>To use the voice interface, please visit this site using a supported\n            browser.</p> \n          <p><a href="https://docs.speechly.com/client-libraries/supported-browsers/#error-no-browser-support">Troubleshooting</a></p>'},m(e,n){a(e,t,n)},d(e){e&&d(t)}}}function K(t){let n,o,r,i,c,l,h,g,C,w;return{c(){n=u("errorRight"),o=u("h1"),o.textContent="HTTPS Required",r=f(),i=u("p"),i.textContent="To use the voice interface, please visit this site using the secure\n            https:// protocol.",c=f(),l=u("p"),h=u("a"),h.textContent="Troubleshooting",g=p("\n                \n            "),C=u("a"),w=p("Try with HTTPS"),m(h,"href","https://docs.speechly.com/faq/#error-https-required"),m(C,"href",window.location.href.replace(/^http(?!s)/,"https"))},m(e,t){a(e,n,t),s(n,o),s(n,r),s(n,i),s(n,c),s(n,l),s(l,h),s(l,g),s(l,C),s(C,w)},p:e,d(e){e&&d(n)}}}function Q(t){let n,o,r,i,c,l=t[2]&&O(t);return{c(){n=u("link"),o=f(),r=u("main"),l&&l.c(),this.c=e,m(n,"href","https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@700&display=swap"),m(n,"rel","stylesheet"),g(r,"bottom","bottom"===t[0])},m(e,d){s(document.head,n),a(e,o,d),a(e,r,d),l&&l.m(r,null),i||(c=h(j,"message",t[3]),i=!0)},p(e,[t]){e[2]?l?l.p(e,t):(l=O(e),l.c(),l.m(r,null)):l&&(l.d(1),l=null),1&t&&g(r,"bottom","bottom"===e[0])},i:e,o:e,d(e){d(n),e&&d(o),e&&d(r),l&&l.d(),i=!1,c()}}}const V="InvaldAppId",W="HttpsRequired";function X(e,t,n){let{placement:o=null}=t,r={};let i=null;const c=(e,t)=>{n(1,r={appId:t})},l=e=>{var t,o;switch(e){case z.ClientState.Failed:n(2,i=V);break;case z.ClientState.NoAudioConsent:case z.ClientState.NoBrowserSupport:if("https:"!==(null===(t=null===window||void 0===window?void 0:window.location)||void 0===t?void 0:t.protocol)&&("localhost"!==(o=window.location.hostname)&&"[::1]"!==o&&null===o.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))){n(2,i=W);break}n(2,i=e)}};return e.$$set=e=>{"placement"in e&&n(0,o=e.placement)},[o,r,i,e=>{switch(e.data.type){case"holdstart":l(e.data.state);break;case"initialized":console.log(e.data),c(e.data.status,e.data.appId)}},()=>{n(2,i=null)}]}class Y extends L{constructor(e){super(),this.shadowRoot.innerHTML="<style>main.bottom{position:fixed;bottom:0;left:0;right:0;min-height:10em;z-index:51;user-select:none;pointer-events:none}errorDiv{box-sizing:border-box;position:relative;width:100%;min-height:10em;background-color:white;user-select:text;pointer-events:all;color:black;display:flex;box-shadow:0 0 8px #00000040;flex-direction:row}errorLeft{box-sizing:border-box;width:2rem;background-color:red;padding:0.2rem 0.2rem;color:#ffffff;display:flex;flex-direction:column;align-items:center;justify-content:start;font-size:1.5rem;cursor:pointer}errorRight{background-color:white;padding:1rem 3rem 1rem 1rem;overflow:auto;flex-grow:1}h1{font-size:1.5rem;margin:0;padding:0 0 0.5rem 0;font-family:'Saira Condensed', sans-serif;text-transform:uppercase}p{margin:0;padding:0 0 0.5rem 0;color:#999}a{color:#000}</style>",H(this,{target:this.shadowRoot,props:C(this.attributes),customElement:!0},X,Q,i,{placement:0}),e&&(e.target&&a(e.target,this,e.anchor),e.props&&(this.$set(e.props),T()))}static get observedAttributes(){return["placement"]}get placement(){return this.$$.ctx[0]}set placement(e){this.$set({placement:e}),T()}}customElements.get("error-panel")?console.warn("Skipping re-defining customElement error-panel"):customElements.define("error-panel",Y)}();
//# sourceMappingURL=error-panel.js.map