(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{7947:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,366,23)),Promise.resolve().then(n.bind(n,3048)),Promise.resolve().then(n.t.bind(n,5922,23))},3048:(e,t,n)=>{"use strict";n.d(t,{ThemeProvider:()=>b});var r=n(4001),s=n(7749),a=(e,t,n,r,s,a,o,l)=>{let i=document.documentElement,c=["light","dark"];function m(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&a?s.map(e=>a[e]||e):s;n?(i.classList.remove(...r),i.classList.add(a&&a[t]?a[t]:t)):i.setAttribute(e,t)}),l&&c.includes(t)&&(i.style.colorScheme=t)}if(r)m(r);else try{let e=localStorage.getItem(t)||n,r=o&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;m(r)}catch(e){}},o=["light","dark"],l="(prefers-color-scheme: dark)",i="undefined"==typeof window,c=s.createContext(void 0),m=e=>s.useContext(c)?s.createElement(s.Fragment,null,e.children):s.createElement(u,{...e}),d=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:r=!0,enableColorScheme:a=!0,storageKey:i="theme",themes:m=d,defaultTheme:u=r?"system":"light",attribute:b="data-theme",value:v,children:g,nonce:w,scriptProps:E}=e,[S,k]=s.useState(()=>y(i,u)),[C,T]=s.useState(()=>"system"===S?p():S),_=v?Object.values(v):m,L=s.useCallback(e=>{let t=e;if(!t)return;"system"===e&&r&&(t=p());let s=v?v[t]:t,l=n?f(w):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(..._),s&&i.classList.add(s)):e.startsWith("data-")&&(s?i.setAttribute(e,s):i.removeAttribute(e))};if(Array.isArray(b)?b.forEach(c):c(b),a){let e=o.includes(u)?u:null,n=o.includes(t)?t:e;i.style.colorScheme=n}null==l||l()},[w]),A=s.useCallback(e=>{let t="function"==typeof e?e(S):e;k(t);try{localStorage.setItem(i,t)}catch(e){}},[S]),P=s.useCallback(e=>{T(p(e)),"system"===S&&r&&!t&&L("system")},[S,t]);s.useEffect(()=>{let e=window.matchMedia(l);return e.addListener(P),P(e),()=>e.removeListener(P)},[P]),s.useEffect(()=>{let e=e=>{e.key===i&&(e.newValue?k(e.newValue):A(u))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[A]),s.useEffect(()=>{L(null!=t?t:S)},[t,S]);let N=s.useMemo(()=>({theme:S,setTheme:A,forcedTheme:t,resolvedTheme:"system"===S?C:S,themes:r?[...m,"system"]:m,systemTheme:r?C:void 0}),[S,A,t,C,r,m]);return s.createElement(c.Provider,{value:N},s.createElement(h,{forcedTheme:t,storageKey:i,attribute:b,enableSystem:r,enableColorScheme:a,defaultTheme:u,value:v,themes:m,nonce:w,scriptProps:E}),g)},h=s.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:r,enableSystem:o,enableColorScheme:l,defaultTheme:i,value:c,themes:m,nonce:d,scriptProps:u}=e,h=JSON.stringify([r,n,i,t,m,c,o,l]).slice(1,-1);return s.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:"(".concat(a.toString(),")(").concat(h,")")}})}),y=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},f=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},p=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light");function b(e){let{children:t,...n}=e;return(0,r.jsx)(m,{...n,children:t})}},366:()=>{},5922:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_73bde7"}}},e=>{var t=t=>e(e.s=t);e.O(0,[35,142,767,358],()=>t(7947)),_N_E=e.O()}]);