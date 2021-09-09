var e=Object.defineProperty,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(t,s,n)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,i=(e,i)=>{for(var o in i||(i={}))s.call(i,o)&&r(e,o,i[o]);if(t)for(var o of t(i))n.call(i,o)&&r(e,o,i[o]);return e},o=(e,t,s)=>(r(e,"symbol"!=typeof t?t+"":t,s),s);import{s as l,t as a,a as c,r as p,w as u,d as m,o as d,c as f,b as h,e as v,f as g,u as y,n as w,g as b,F as j,h as S,i as _,j as k,k as P,l as O,m as E,p as V,q as I,_ as $,v as C,x,y as F}from"./vendor.6c8fddd5.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const L={};async function N(e){return c(e,{transforms:["typescript"]}).code}async function R(e,{filename:t,code:s,compiled:n}){if(!s.trim())return void(e.state.errors=[]);if(!t.endsWith(".vue"))return l(s)&&(s=a(s,{filename:t}).code),t.endsWith(".ts")&&(s=await N(s)),n.js=n.ssr=s,void(e.state.errors=[]);const r=await async function(e){const t=(new TextEncoder).encode(e),s=await crypto.subtle.digest("SHA-256",t),n=Array.from(new Uint8Array(s));return n.map((e=>e.toString(16).padStart(2,"0"))).join("").slice(0,8)}(t),{errors:i,descriptor:o}=e.compiler.parse(s,{filename:t,sourceMap:!0});if(i.length)return void(e.state.errors=i);if(o.styles.some((e=>e.lang))||o.template&&o.template.lang)return void(e.state.errors=['lang="x" pre-processors for <template> or <style> are currently not supported.']);const c=o.script&&o.script.lang||o.scriptSetup&&o.scriptSetup.lang;if(c&&"ts"!==c)return void(e.state.errors=['Only lang="ts" is supported for <script> blocks.']);const p=o.styles.some((e=>e.scoped));let u="",m="";const d=e=>{u+=e,m+=e},f=await A(e,o,r,!1);if(!f)return;const[h,v]=f;if(u+=h,o.scriptSetup){const t=await A(e,o,r,!0);t?m+=t[0]:m=`/* SSR compile error: ${e.state.errors[0]} */`}else m+=h;if(o.template&&!o.scriptSetup){const t=M(e,o,r,v,!1);if(!t)return;u+=t;const s=M(e,o,r,v,!0);s?m+=s:m=`/* SSR compile error: ${e.state.errors[0]} */`}p&&d(`\n__sfc__.__scopeId = ${JSON.stringify(`data-v-${r}`)}`),(u||m)&&(d(`\n__sfc__.__file = ${JSON.stringify(t)}\nexport default __sfc__`),n.js=u.trimStart(),n.ssr=m.trimStart());let g="";for(const l of o.styles){if(l.module)return void(e.state.errors=["<style module> is not supported in the playground."]);const s=await e.compiler.compileStyleAsync({source:l.content,filename:t,id:r,scoped:l.scoped,modules:!!l.module});s.errors.length?s.errors[0].message.includes("pathToFileURL")||(e.state.errors=s.errors):g+=s.code+"\n"}n.css=g?g.trim():"/* No <style> tags present */",e.state.errors=[]}async function A(e,t,s,n){if(!t.script&&!t.scriptSetup)return["\nconst __sfc__ = {}",void 0];try{const r=e.compiler.compileScript(t,{id:s,refTransform:!0,inlineTemplate:!0,templateOptions:{ssr:n,ssrCssVars:t.cssVars}});let i="";return r.bindings&&(i+=`\n/* Analyzed bindings: ${JSON.stringify(r.bindings,null,2)} */`),i+="\n"+e.compiler.rewriteDefault(r.content,"__sfc__"),"ts"===(t.script||t.scriptSetup).lang&&(i=await N(i)),[i,r.bindings]}catch(r){return void(e.state.errors=[r.stack.split("\n").slice(0,12).join("\n")])}}function M(e,t,s,n,r){const i=e.compiler.compileTemplate({source:t.template.content,filename:t.filename,id:s,scoped:t.styles.some((e=>e.scoped)),slotted:t.slotted,ssr:r,ssrCssVars:t.cssVars,isProd:!1,compilerOptions:{bindingMetadata:n}});if(i.errors.length)return void(e.state.errors=i.errors);const o=r?"ssrRender":"render";return`\n${i.code.replace(/\nexport (function|const) (render|ssrRender)/,`$1 ${o}`)}\n__sfc__.${o} = ${o}`}const z=(e,t,s)=>`https://unpkg.com/${e}${t=t?`@${t}`:""}${s}`,D=({vue:e,elementPlus:t}={})=>{const s={vue:{pkg:"@vue/runtime-dom",version:e,path:"/dist/runtime-dom.esm-browser.js"},"element-plus":{version:t,path:"/es"},"@vue/shared":{version:e,path:"/dist/shared.esm-bundler.js"},"lodash/":{pkg:"lodash-es",version:"4",path:"/"},"@popperjs/core":{version:"2",path:"/dist/esm"},"normalize-wheel":{pkg:"@sxzz/normalize-wheel-es",version:"0.0.2",path:"/index.js"},"resize-observer-polyfill":{version:"1.5",path:"/dist/ResizeObserver.es.js"},dayjs:{version:"1",path:"/esm"},"dayjs/":{pkg:"dayjs",version:"1",path:"/esm/"},mitt:{version:"3",path:"/dist/mitt.mjs"},"async-validator":{version:"3",path:"/dist-web/index.js"}};return Object.fromEntries(Object.entries(s).map((([e,t])=>{var s;return[e,z(null!=(s=t.pkg)?s:e,t.version,t.path)]})))};const T="\n<script setup>\nimport { ref } from 'vue'\nimport { setupElementPlus } from './element-plus.js';\nimport { ElInput } from 'element-plus'\n\nsetupElementPlus();\nconst msg = ref('Hello World!')\n<\/script>\n\n<template>\n  <h1>{{ msg }}</h1>\n  <el-input v-model=\"msg\" />\n</template>\n".trim();class J{constructor(e,t=""){o(this,"filename"),o(this,"code"),o(this,"compiled",{js:"",css:"",ssr:""}),this.filename=e,this.code=t}}class H{constructor({serializedState:e="",vueVersion:t="latest",elementPlusVersion:s="latest"}){o(this,"state"),o(this,"compiler"),o(this,"pendingCompiler",null),o(this,"vueVersion"),o(this,"elementPlusVersion");let n={};if(e){const t=JSON.parse(decodeURIComponent(escape(atob(e))));for(const e in t)n[e]=new J(e,t[e])}else n={"App.vue":new J("App.vue",T)};this.state=p({files:n,activeFilename:"App.vue",errors:[],vueRuntimeURL:""}),this.vueVersion=t,this.elementPlusVersion=s,this.initImportMap()}async init(){var e;await this.setVueVersion(this.vueVersion),this.state.files["element-plus.js"]=new J("element-plus.js",(e="latest",`\n// ⛔️ ⛔️ ⛔️\n// DO NOT MODIFY THIS FILE! THIS FILE WILL BE RESTORED WHEN SHARING.\n// 不要修改此文件！该文件在共享时被还原。\n// このファイルは変更しないでください。このファイルは、共有時に復元されます。\n// NE MODIFIEZ PAS CE FICHIER !\n\nimport { getCurrentInstance } from 'vue'\nimport ElementPlus from 'element-plus'\n\nexport function setupElementPlus() {\n  const instance = getCurrentInstance()\n  instance.appContext.app.use(ElementPlus)\n  loadStyle();\n}\n\nexport function loadStyle() {\n  const link = document.createElement('link')\n\tlink.rel = 'stylesheet'\n\tlink.href = '${z("element-plus",e,"/dist/index.css")}'\n\tdocument.body.appendChild(link)\n}\n`).trim());for(const t in this.state.files)"App.vue"!==t&&R(this,this.state.files[t]);u((()=>R(this,this.activeFile)))}get activeFile(){return this.state.files[this.state.activeFilename]}setActive(e){this.state.activeFilename=e}addFile(e){this.state.files[e]=new J(e),this.setActive(e)}deleteFile(e){confirm(`Are you sure you want to delete ${e}?`)&&(this.state.activeFilename===e&&(this.state.activeFilename="App.vue"),delete this.state.files[e])}simplifyImportMaps(){const e=this.getImportMap(),t=D({}),s=Object.keys(t);return e.imports=Object.fromEntries(Object.entries(e.imports).filter((([e])=>!s.includes(e)))),JSON.stringify(e)}serialize(){return`#${function(e){return btoa(unescape(encodeURIComponent(e)))}(JSON.stringify(Object.fromEntries(Object.entries(this.getFiles()).filter((([e])=>"element-plus.js"!==e)).map((([e,t])=>{if("import-map.json"===e)try{return[e,this.simplifyImportMaps()]}catch{}return[e,t]})))))}`}getFiles(){const e={};for(const t in this.state.files)e[t]=this.state.files[t].code;return e}setFiles(e){const t={};for(const s in e)t[s]=new J(s,e[s]);this.state.files=t,this.initImportMap()}initImportMap(){this.state.files["import-map.json"]||(this.state.files["import-map.json"]=new J("import-map.json",JSON.stringify({imports:{}},null,2)))}getImportMap(){try{return JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}setImportMap(e){this.state.files["import-map.json"].code=JSON.stringify(e,null,2)}addDeps(){const e=this.getImportMap();e.imports=i(i({},e.imports),D({vue:this.vueVersion,elementPlus:this.elementPlusVersion})),this.setImportMap(e)}async setElementPlusVersion(e){this.elementPlusVersion=e,this.addDeps()}async setVueVersion(e){const{compilerSfc:t,runtimeDom:s}=(e=>({compilerSfc:z("@vue/compiler-sfc",e,"/dist/compiler-sfc.esm-browser.js"),runtimeDom:z("@vue/runtime-dom",e,"/dist/runtime-dom.esm-browser.js")}))(e);var n,r;this.pendingCompiler=(n=()=>import(t),(r=[])&&0!==r.length?Promise.all(r.map((e=>{if((e=`/${e}`)in L)return;L[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>n())):n()),this.compiler=await this.pendingCompiler,this.pendingCompiler=null,this.state.vueRuntimeURL=s,this.vueVersion=e,this.addDeps(),console.info(`[@vue/repl] Now using Vue version: ${e}`)}}const U=h("h1",null,[h("img",{alt:"logo",src:"/assets/logo.97147da7.svg"}),h("span",null,"ELement Plus Playground")],-1),W={class:"links"},q={key:0},B=[h("a",null,"loading versions...",-1)],G=["onClick"],K={key:0},Y=[h("a",null,"loading versions...",-1)],Z=["onClick"],Q=[k('<svg width="1.4em" height="1.4em" viewBox="0 0 24 24"><g fill="none" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98"></path><path d="M15.41 6.51l-6.82 3.98"></path></g></svg>',1)];var X=m({props:{store:{type:null,required:!0}},setup(e){const{store:t}=e,s=p({vue:t.vueVersion,elementPlus:t.elementPlusVersion}),n=p({vue:null,elementPlus:null}),r=p({vue:!1,elementPlus:!1});async function i(e){for(const t of Object.keys(r))r[t]=t===e&&!r[e];"vue"!==e||n.vue?"elementPlus"!==e||n.elementPlus||(n.elementPlus=await async function(){const e=await fetch("https://api.github.com/repos/element-plus/element-plus/releases?per_page=100"),t=await e.json();return t.map((e=>/^v/.test(e.tag_name)?e.tag_name.substr(1):e.tag_name))}()):n.vue=await async function(){const e=await fetch("https://api.github.com/repos/vuejs/vue-next/releases?per_page=100"),t=(await e.json()).map((e=>/^v/.test(e.tag_name)?e.tag_name.substr(1):e.tag_name));let s=t[0].includes("-");const n=[];for(const r of t)if(r.includes("-")?s&&n.push(r):(n.push(r),s=!1),n.length>=30)break;return n}()}async function o(){await navigator.clipboard.writeText(location.href),alert("Sharable URL has been copied to clipboard.")}return d((async()=>{window.addEventListener("click",(()=>{Object.keys(r).forEach((e=>r[e]=!1))}))})),(e,l)=>(_(),f("nav",null,[U,h("div",W,[h("div",{class:"version",onClick:l[1]||(l[1]=v((()=>{}),["stop"]))},[h("span",{class:"active-version",onClick:l[0]||(l[0]=e=>i("elementPlus"))}," Element Plus Version: "+g(y(s).elementPlus),1),h("ul",{class:w(["versions",{expanded:y(r).elementPlus}])},[y(n).elementPlus?b("",!0):(_(),f("li",q,B)),(_(!0),f(j,null,S(y(n).elementPlus,(e=>(_(),f("li",null,[h("a",{onClick:n=>async function(e){s.elementPlus="loading...",await t.setElementPlusVersion(e),s.elementPlus=`v${e}`,r.vue=!1}(e)},"v"+g(e),9,G)])))),256))],2)]),h("div",{class:"version",onClick:l[3]||(l[3]=v((()=>{}),["stop"]))},[h("span",{class:"active-version",onClick:l[2]||(l[2]=e=>i("vue"))}," Vue Version: "+g(y(s).vue),1),h("ul",{class:w(["versions",{expanded:y(r).vue}])},[y(n).vue?b("",!0):(_(),f("li",K,Y)),(_(!0),f(j,null,S(y(n).vue,(e=>(_(),f("li",null,[h("a",{onClick:n=>async function(e){s.vue="loading...",await t.setVueVersion(e),s.vue=`v${e}`,r.vue=!1}(e)},"v"+g(e),9,Z)])))),256))],2)]),h("button",{class:"share",onClick:o},Q)])]))}});const ee={key:1,class:"loading","element-loading-text":"Loading..."};x(m({setup(e){const t=P(!0),s=new H({serializedState:location.hash.slice(1),vueVersion:"latest"});return s.init().then((()=>t.value=!1)),u((()=>history.replaceState({},"",s.serialize()))),O(),E("--vh").value=window.innerHeight+"px",(e,n)=>{const r=V("loading");return t.value?C((_(),f("div",ee,null,512)),[[r,!0]]):(_(),f(j,{key:0},[I(X,{store:y(s)},null,8,["store"]),I(y($),{ref:(e,t)=>{t.repl=e},store:y(s),"show-compile-output":""},null,8,["store"])],64))}}})).use(F).mount("#app");
