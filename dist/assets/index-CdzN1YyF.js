(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=e(o);fetch(o.href,u)}})();var Nh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=function(i){const t=[];let e=0;for(let r=0;r<i.length;r++){let o=i.charCodeAt(r);o<128?t[e++]=o:o<2048?(t[e++]=o>>6|192,t[e++]=o&63|128):(o&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++r)&1023),t[e++]=o>>18|240,t[e++]=o>>12&63|128,t[e++]=o>>6&63|128,t[e++]=o&63|128):(t[e++]=o>>12|224,t[e++]=o>>6&63|128,t[e++]=o&63|128)}return t},pd=function(i){const t=[];let e=0,r=0;for(;e<i.length;){const o=i[e++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[e++];t[r++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[e++],c=i[e++],p=i[e++],_=((o&7)<<18|(u&63)<<12|(c&63)<<6|p&63)-65536;t[r++]=String.fromCharCode(55296+(_>>10)),t[r++]=String.fromCharCode(56320+(_&1023))}else{const u=i[e++],c=i[e++];t[r++]=String.fromCharCode((o&15)<<12|(u&63)<<6|c&63)}}return t.join("")},Yu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<i.length;o+=3){const u=i[o],c=o+1<i.length,p=c?i[o+1]:0,_=o+2<i.length,y=_?i[o+2]:0,E=u>>2,x=(u&3)<<4|p>>4;let D=(p&15)<<2|y>>6,F=y&63;_||(F=64,c||(D=64)),r.push(e[E],e[x],e[D],e[F])}return r.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(Qu(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):pd(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<i.length;){const u=e[i.charAt(o++)],p=o<i.length?e[i.charAt(o)]:0;++o;const y=o<i.length?e[i.charAt(o)]:64;++o;const x=o<i.length?e[i.charAt(o)]:64;if(++o,u==null||p==null||y==null||x==null)throw new md;const D=u<<2|p>>4;if(r.push(D),y!==64){const F=p<<4&240|y>>2;if(r.push(F),x!==64){const q=y<<6&192|x;r.push(q)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class md extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _d=function(i){const t=Qu(i);return Yu.encodeByteArray(t,!0)},fo=function(i){return _d(i).replace(/\./g,"")},Ju=function(i){try{return Yu.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=()=>gd().__FIREBASE_DEFAULTS__,yd=()=>{if(typeof process>"u"||typeof Nh>"u")return;const i=Nh.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},wd=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&Ju(i[1]);return t&&JSON.parse(t)},So=()=>{try{return vd()||yd()||wd()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Xu=i=>{var t,e;return(e=(t=So())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[i]},Td=i=>{const t=Xu(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},tl=()=>{var i;return(i=So())===null||i===void 0?void 0:i.config},el=i=>{var t;return(t=So())===null||t===void 0?void 0:t[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[fo(JSON.stringify(e)),fo(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function Ad(){var i;const t=(i=So())===null||i===void 0?void 0:i.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sd(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Cd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rd(){const i=ne();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Ld(){return!Ad()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xd(){try{return typeof indexedDB=="object"}catch{return!1}}function kd(){return new Promise((i,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),e||self.indexedDB.deleteDatabase(r),i(!0)},o.onupgradeneeded=()=>{e=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="FirebaseError";class an extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Od,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,as.prototype.create)}}class as{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},o=`${this.service}/${t}`,u=this.errors[t],c=u?Md(u,r):"Error",p=`${this.serviceName}: ${c} (${o}).`;return new an(o,p,r)}}function Md(i,t){return i.replace(Dd,(e,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const Dd=/\{\$([^}]+)}/g;function Nd(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}function po(i,t){if(i===t)return!0;const e=Object.keys(i),r=Object.keys(t);for(const o of e){if(!r.includes(o))return!1;const u=i[o],c=t[o];if(Vh(u)&&Vh(c)){if(!po(u,c))return!1}else if(u!==c)return!1}for(const o of r)if(!e.includes(o))return!1;return!0}function Vh(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(i){const t=[];for(const[e,r]of Object.entries(i))Array.isArray(r)?r.forEach(o=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Vd(i,t){const e=new Fd(i,t);return e.subscribe.bind(e)}class Fd{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let o;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Bd(t,["next","error","complete"])?o=t:o={next:t,error:e,complete:r},o.next===void 0&&(o.next=Qo),o.error===void 0&&(o.error=Qo),o.complete===void 0&&(o.complete=Qo);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bd(i,t){if(typeof i!="object"||i===null)return!1;for(const e of t)if(e in i&&typeof i[e]=="function")return!0;return!1}function Qo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(i){return i&&i._delegate?i._delegate:i}class ti{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ed;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:e});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jd(t))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(e);try{const u=this.getOrInitializeService({instanceIdentifier:o});r.resolve(u)}catch{}}}}clearInstance(t=Qn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qn){return this.instances.has(t)}getOptions(t=Qn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[u,c]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);r===p&&c.resolve(o)}return o}onInit(t,e){var r;const o=this.normalizeInstanceIdentifier(e),u=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;u.add(t),this.onInitCallbacks.set(o,u);const c=this.instances.get(o);return c&&t(c,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const o of r)try{o(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zd(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qn){return this.component?this.component.multipleInstances?t:Qn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zd(i){return i===Qn?void 0:i}function jd(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ud(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ut||(ut={}));const Hd={debug:ut.DEBUG,verbose:ut.VERBOSE,info:ut.INFO,warn:ut.WARN,error:ut.ERROR,silent:ut.SILENT},Zd=ut.INFO,Wd={[ut.DEBUG]:"log",[ut.VERBOSE]:"log",[ut.INFO]:"info",[ut.WARN]:"warn",[ut.ERROR]:"error"},Gd=(i,t,...e)=>{if(t<i.logLevel)return;const r=new Date().toISOString(),o=Wd[t];if(o)console[o](`[${r}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ma{constructor(t){this.name=t,this._logLevel=Zd,this._logHandler=Gd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ut))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Hd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ut.DEBUG,...t),this._logHandler(this,ut.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ut.VERBOSE,...t),this._logHandler(this,ut.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ut.INFO,...t),this._logHandler(this,ut.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ut.WARN,...t),this._logHandler(this,ut.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ut.ERROR,...t),this._logHandler(this,ut.ERROR,...t)}}const Kd=(i,t)=>t.some(e=>i instanceof e);let Fh,Bh;function $d(){return Fh||(Fh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qd(){return Bh||(Bh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nl=new WeakMap,ha=new WeakMap,il=new WeakMap,Yo=new WeakMap,Da=new WeakMap;function Yd(i){const t=new Promise((e,r)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",c)},u=()=>{e(Sn(i.result)),o()},c=()=>{r(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",c)});return t.then(e=>{e instanceof IDBCursor&&nl.set(e,i)}).catch(()=>{}),Da.set(t,i),t}function Jd(i){if(ha.has(i))return;const t=new Promise((e,r)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",c),i.removeEventListener("abort",c)},u=()=>{e(),o()},c=()=>{r(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",c),i.addEventListener("abort",c)});ha.set(i,t)}let ua={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return ha.get(i);if(t==="objectStoreNames")return i.objectStoreNames||il.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Sn(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function Xd(i){ua=i(ua)}function tf(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=i.call(Jo(this),t,...e);return il.set(r,t.sort?t.sort():[t]),Sn(r)}:Qd().includes(i)?function(...t){return i.apply(Jo(this),t),Sn(nl.get(this))}:function(...t){return Sn(i.apply(Jo(this),t))}}function ef(i){return typeof i=="function"?tf(i):(i instanceof IDBTransaction&&Jd(i),Kd(i,$d())?new Proxy(i,ua):i)}function Sn(i){if(i instanceof IDBRequest)return Yd(i);if(Yo.has(i))return Yo.get(i);const t=ef(i);return t!==i&&(Yo.set(i,t),Da.set(t,i)),t}const Jo=i=>Da.get(i);function nf(i,t,{blocked:e,upgrade:r,blocking:o,terminated:u}={}){const c=indexedDB.open(i,t),p=Sn(c);return r&&c.addEventListener("upgradeneeded",_=>{r(Sn(c.result),_.oldVersion,_.newVersion,Sn(c.transaction),_)}),e&&c.addEventListener("blocked",_=>e(_.oldVersion,_.newVersion,_)),p.then(_=>{u&&_.addEventListener("close",()=>u()),o&&_.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const rf=["get","getKey","getAll","getAllKeys","count"],sf=["put","add","delete","clear"],Xo=new Map;function Uh(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(Xo.get(t))return Xo.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,o=sf.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(o||rf.includes(e)))return;const u=async function(c,...p){const _=this.transaction(c,o?"readwrite":"readonly");let y=_.store;return r&&(y=y.index(p.shift())),(await Promise.all([y[e](...p),o&&_.done]))[0]};return Xo.set(t,u),u}Xd(i=>({...i,get:(t,e,r)=>Uh(t,e)||i.get(t,e,r),has:(t,e)=>!!Uh(t,e)||i.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(af(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function af(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const la="@firebase/app",zh="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Ma("@firebase/app"),hf="@firebase/app-compat",uf="@firebase/analytics-compat",lf="@firebase/analytics",cf="@firebase/app-check-compat",df="@firebase/app-check",ff="@firebase/auth",pf="@firebase/auth-compat",mf="@firebase/database",_f="@firebase/data-connect",gf="@firebase/database-compat",vf="@firebase/functions",yf="@firebase/functions-compat",wf="@firebase/installations",Tf="@firebase/installations-compat",Ef="@firebase/messaging",If="@firebase/messaging-compat",Pf="@firebase/performance",Af="@firebase/performance-compat",bf="@firebase/remote-config",Sf="@firebase/remote-config-compat",Cf="@firebase/storage",Rf="@firebase/storage-compat",Lf="@firebase/firestore",xf="@firebase/vertexai-preview",kf="@firebase/firestore-compat",Of="firebase",Mf="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="[DEFAULT]",Df={[la]:"fire-core",[hf]:"fire-core-compat",[lf]:"fire-analytics",[uf]:"fire-analytics-compat",[df]:"fire-app-check",[cf]:"fire-app-check-compat",[ff]:"fire-auth",[pf]:"fire-auth-compat",[mf]:"fire-rtdb",[_f]:"fire-data-connect",[gf]:"fire-rtdb-compat",[vf]:"fire-fn",[yf]:"fire-fn-compat",[wf]:"fire-iid",[Tf]:"fire-iid-compat",[Ef]:"fire-fcm",[If]:"fire-fcm-compat",[Pf]:"fire-perf",[Af]:"fire-perf-compat",[bf]:"fire-rc",[Sf]:"fire-rc-compat",[Cf]:"fire-gcs",[Rf]:"fire-gcs-compat",[Lf]:"fire-fst",[kf]:"fire-fst-compat",[xf]:"fire-vertex","fire-js":"fire-js",[Of]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Map,Nf=new Map,da=new Map;function jh(i,t){try{i.container.addComponent(t)}catch(e){nn.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function Qi(i){const t=i.name;if(da.has(t))return nn.debug(`There were multiple attempts to register component ${t}.`),!1;da.set(t,i);for(const e of mo.values())jh(e,i);for(const e of Nf.values())jh(e,i);return!0}function Na(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}function Je(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cn=new as("app","Firebase",Vf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=Mf;function rl(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ca,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw Cn.create("bad-app-name",{appName:String(o)});if(e||(e=tl()),!e)throw Cn.create("no-options");const u=mo.get(o);if(u){if(po(e,u.options)&&po(r,u.config))return u;throw Cn.create("duplicate-app",{appName:o})}const c=new qd(o);for(const _ of da.values())c.addComponent(_);const p=new Ff(e,r,c);return mo.set(o,p),p}function sl(i=ca){const t=mo.get(i);if(!t&&i===ca&&tl())return rl();if(!t)throw Cn.create("no-app",{appName:i});return t}function Rn(i,t,e){var r;let o=(r=Df[i])!==null&&r!==void 0?r:i;e&&(o+=`-${e}`);const u=o.match(/\s|\//),c=t.match(/\s|\//);if(u||c){const p=[`Unable to register library "${o}" with version "${t}":`];u&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&c&&p.push("and"),c&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),nn.warn(p.join(" "));return}Qi(new ti(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="firebase-heartbeat-database",Uf=1,es="firebase-heartbeat-store";let ta=null;function ol(){return ta||(ta=nf(Bf,Uf,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(es)}catch(e){console.warn(e)}}}}).catch(i=>{throw Cn.create("idb-open",{originalErrorMessage:i.message})})),ta}async function zf(i){try{const e=(await ol()).transaction(es),r=await e.objectStore(es).get(al(i));return await e.done,r}catch(t){if(t instanceof an)nn.warn(t.message);else{const e=Cn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});nn.warn(e.message)}}}async function qh(i,t){try{const r=(await ol()).transaction(es,"readwrite");await r.objectStore(es).put(t,al(i)),await r.done}catch(e){if(e instanceof an)nn.warn(e.message);else{const r=Cn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});nn.warn(r.message)}}}function al(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=1024,qf=30*24*60*60*1e3;class Hf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Wf(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Hh();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(c=>c.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const p=new Date(c.date).valueOf();return Date.now()-p<=qf}),this._storage.overwrite(this._heartbeatsCache))}catch(r){nn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hh(),{heartbeatsToSend:r,unsentEntries:o}=Zf(this._heartbeatsCache.heartbeats),u=fo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(e){return nn.warn(e),""}}}function Hh(){return new Date().toISOString().substring(0,10)}function Zf(i,t=jf){const e=[];let r=i.slice();for(const o of i){const u=e.find(c=>c.agent===o.agent);if(u){if(u.dates.push(o.date),Zh(e)>t){u.dates.pop();break}}else if(e.push({agent:o.agent,dates:[o.date]}),Zh(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Wf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xd()?kd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await zf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const o=await this.read();return qh(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const o=await this.read();return qh(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Zh(i){return fo(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(i){Qi(new ti("platform-logger",t=>new of(t),"PRIVATE")),Qi(new ti("heartbeat",t=>new Hf(t),"PRIVATE")),Rn(la,zh,i),Rn(la,zh,"esm2017"),Rn("fire-js","")}Gf("");var Kf="firebase",$f="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn(Kf,$f,"app");function Va(i,t){var e={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&t.indexOf(r)<0&&(e[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(i);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(i,r[o])&&(e[r[o]]=i[r[o]]);return e}function hl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qf=hl,ul=new as("auth","Firebase",hl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Ma("@firebase/auth");function Yf(i,...t){_o.logLevel<=ut.WARN&&_o.warn(`Auth (${ir}): ${i}`,...t)}function io(i,...t){_o.logLevel<=ut.ERROR&&_o.error(`Auth (${ir}): ${i}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(i,...t){throw Fa(i,...t)}function Me(i,...t){return Fa(i,...t)}function ll(i,t,e){const r=Object.assign(Object.assign({},Qf()),{[t]:e});return new as("auth","Firebase",r).create(t,{appName:i.name})}function Ln(i){return ll(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fa(i,...t){if(typeof i!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(e,...r)}return ul.create(i,...t)}function tt(i,t,...e){if(!i)throw Fa(t,...e)}function Xe(i){const t="INTERNAL ASSERTION FAILED: "+i;throw io(t),new Error(t)}function sn(i,t){i||Xe(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Jf(){return Wh()==="http:"||Wh()==="https:"}function Wh(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jf()||Sd()||"connection"in navigator)?navigator.onLine:!0}function tp(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,e){this.shortDelay=t,this.longDelay=e,sn(e>t,"Short delay should be less than long delay!"),this.isMobile=Pd()||Cd()}get(){return Xf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(i,t){sn(i.emulator,"Emulator should always be set here");const{url:e}=i.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=new us(3e4,6e4);function Co(i,t){return i.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:i.tenantId}):t}async function rr(i,t,e,r,o={}){return dl(i,o,async()=>{let u={},c={};r&&(t==="GET"?c=r:u={body:JSON.stringify(r)});const p=hs(Object.assign({key:i.config.apiKey},c)).slice(1),_=await i._getAdditionalHeaders();_["Content-Type"]="application/json",i.languageCode&&(_["X-Firebase-Locale"]=i.languageCode);const y=Object.assign({method:t,headers:_},u);return bd()||(y.referrerPolicy="no-referrer"),cl.fetch()(pl(i,i.config.apiHost,e,p),y)})}async function dl(i,t,e){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},ep),t);try{const o=new ip(i),u=await Promise.race([e(),o.promise]);o.clearNetworkTimeout();const c=await u.json();if("needConfirmation"in c)throw Js(i,"account-exists-with-different-credential",c);if(u.ok&&!("errorMessage"in c))return c;{const p=u.ok?c.errorMessage:c.error.message,[_,y]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Js(i,"credential-already-in-use",c);if(_==="EMAIL_EXISTS")throw Js(i,"email-already-in-use",c);if(_==="USER_DISABLED")throw Js(i,"user-disabled",c);const E=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw ll(i,E,y);rn(i,E)}}catch(o){if(o instanceof an)throw o;rn(i,"network-request-failed",{message:String(o)})}}async function fl(i,t,e,r,o={}){const u=await rr(i,t,e,r,o);return"mfaPendingCredential"in u&&rn(i,"multi-factor-auth-required",{_serverResponse:u}),u}function pl(i,t,e,r){const o=`${t}${e}?${r}`;return i.config.emulator?Ba(i.config,o):`${i.config.apiScheme}://${o}`}class ip{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(Me(this.auth,"network-request-failed")),np.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Js(i,t,e){const r={appName:i.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const o=Me(i,t,r);return o.customData._tokenResponse=e,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(i,t){return rr(i,"POST","/v1/accounts:delete",t)}async function ml(i,t){return rr(i,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(i){if(i)try{const t=new Date(Number(i));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function sp(i,t=!1){const e=hn(i),r=await e.getIdToken(t),o=Ua(r);tt(o&&o.exp&&o.auth_time&&o.iat,e.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,c=u==null?void 0:u.sign_in_provider;return{claims:o,token:r,authTime:$r(ea(o.auth_time)),issuedAtTime:$r(ea(o.iat)),expirationTime:$r(ea(o.exp)),signInProvider:c||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function ea(i){return Number(i)*1e3}function Ua(i){const[t,e,r]=i.split(".");if(t===void 0||e===void 0||r===void 0)return io("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ju(e);return o?JSON.parse(o):(io("Failed to decode base64 JWT payload"),null)}catch(o){return io("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Gh(i){const t=Ua(i);return tt(t,"internal-error"),tt(typeof t.exp<"u","internal-error"),tt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(i,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof an&&op(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function op({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=$r(this.lastLoginAt),this.creationTime=$r(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(i){var t;const e=i.auth,r=await i.getIdToken(),o=await ns(i,ml(e,{idToken:r}));tt(o==null?void 0:o.users.length,e,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const c=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?_l(u.providerUserInfo):[],p=up(i.providerData,c),_=i.isAnonymous,y=!(i.email&&u.passwordHash)&&!(p!=null&&p.length),E=_?y:!1,x={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new pa(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,x)}async function hp(i){const t=hn(i);await go(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function up(i,t){return[...i.filter(r=>!t.some(o=>o.providerId===r.providerId)),...t]}function _l(i){return i.map(t=>{var{providerId:e}=t,r=Va(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(i,t){const e=await dl(i,{},async()=>{const r=hs({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,c=pl(i,o,"/v1/token",`key=${u}`),p=await i._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",cl.fetch()(c,{method:"POST",headers:p,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function cp(i,t){return rr(i,"POST","/v2/accounts:revokeToken",Co(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){tt(t.idToken,"internal-error"),tt(typeof t.idToken<"u","internal-error"),tt(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Gh(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){tt(t.length!==0,"internal-error");const e=Gh(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(tt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:o,expiresIn:u}=await lp(t,e);this.updateTokensAndExpiration(r,o,Number(u))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:o,expirationTime:u}=e,c=new ji;return r&&(tt(typeof r=="string","internal-error",{appName:t}),c.refreshToken=r),o&&(tt(typeof o=="string","internal-error",{appName:t}),c.accessToken=o),u&&(tt(typeof u=="number","internal-error",{appName:t}),c.expirationTime=u),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return Xe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(i,t){tt(typeof i=="string"||typeof i>"u","internal-error",{appName:t})}class tn{constructor(t){var{uid:e,auth:r,stsTokenManager:o}=t,u=Va(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ap(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new pa(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const e=await ns(this,this.stsTokenManager.getToken(this.auth,t));return tt(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return sp(this,t)}reload(){return hp(this)}_assign(t){this!==t&&(tt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new tn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){tt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Je(this.auth.app))return Promise.reject(Ln(this.auth));const t=await this.getIdToken();return await ns(this,rp(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,o,u,c,p,_,y,E;const x=(r=e.displayName)!==null&&r!==void 0?r:void 0,D=(o=e.email)!==null&&o!==void 0?o:void 0,F=(u=e.phoneNumber)!==null&&u!==void 0?u:void 0,q=(c=e.photoURL)!==null&&c!==void 0?c:void 0,z=(p=e.tenantId)!==null&&p!==void 0?p:void 0,H=(_=e._redirectEventId)!==null&&_!==void 0?_:void 0,gt=(y=e.createdAt)!==null&&y!==void 0?y:void 0,yt=(E=e.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:rt,emailVerified:It,isAnonymous:Kt,providerData:Pt,stsTokenManager:S}=e;tt(rt&&S,t,"internal-error");const w=ji.fromJSON(this.name,S);tt(typeof rt=="string",t,"internal-error"),wn(x,t.name),wn(D,t.name),tt(typeof It=="boolean",t,"internal-error"),tt(typeof Kt=="boolean",t,"internal-error"),wn(F,t.name),wn(q,t.name),wn(z,t.name),wn(H,t.name),wn(gt,t.name),wn(yt,t.name);const I=new tn({uid:rt,auth:t,email:D,emailVerified:It,displayName:x,isAnonymous:Kt,photoURL:q,phoneNumber:F,tenantId:z,stsTokenManager:w,createdAt:gt,lastLoginAt:yt});return Pt&&Array.isArray(Pt)&&(I.providerData=Pt.map(b=>Object.assign({},b))),H&&(I._redirectEventId=H),I}static async _fromIdTokenResponse(t,e,r=!1){const o=new ji;o.updateFromServerResponse(e);const u=new tn({uid:e.localId,auth:t,stsTokenManager:o,isAnonymous:r});return await go(u),u}static async _fromGetAccountInfoResponse(t,e,r){const o=e.users[0];tt(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?_l(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new ji;p.updateFromIdToken(r);const _=new tn({uid:o.localId,auth:t,stsTokenManager:p,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new pa(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(_,y),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=new Map;function en(i){sn(i instanceof Function,"Expected a class definition");let t=Kh.get(i);return t?(sn(t instanceof i,"Instance stored in cache mismatched with class"),t):(t=new i,Kh.set(i,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}gl.type="NONE";const $h=gl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(i,t,e){return`firebase:${i}:${t}:${e}`}class qi{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:o,name:u}=this.auth;this.fullUserKey=ro(this.userKey,o.apiKey,u),this.fullPersistenceKey=ro("persistence",o.apiKey,u),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?tn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new qi(en($h),t,r);const o=(await Promise.all(e.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||en($h);const c=ro(r,t.config.apiKey,t.name);let p=null;for(const y of e)try{const E=await y._get(c);if(E){const x=tn._fromJSON(t,E);y!==u&&(p=x),u=y;break}}catch{}const _=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!_.length?new qi(u,t,r):(u=_[0],p&&await u._set(c,p.toJSON()),await Promise.all(e.map(async y=>{if(y!==u)try{await y._remove(c)}catch{}})),new qi(u,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(i){const t=i.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Tl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(vl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Il(t))return"Blackberry";if(Pl(t))return"Webos";if(yl(t))return"Safari";if((t.includes("chrome/")||wl(t))&&!t.includes("edge/"))return"Chrome";if(El(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vl(i=ne()){return/firefox\//i.test(i)}function yl(i=ne()){const t=i.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function wl(i=ne()){return/crios\//i.test(i)}function Tl(i=ne()){return/iemobile/i.test(i)}function El(i=ne()){return/android/i.test(i)}function Il(i=ne()){return/blackberry/i.test(i)}function Pl(i=ne()){return/webos/i.test(i)}function za(i=ne()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function dp(i=ne()){var t;return za(i)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function fp(){return Rd()&&document.documentMode===10}function Al(i=ne()){return za(i)||El(i)||Pl(i)||Il(i)||/windows phone/i.test(i)||Tl(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(i,t=[]){let e;switch(i){case"Browser":e=Qh(ne());break;case"Worker":e=`${Qh(ne())}-${i}`;break;default:e=i}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${ir}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=u=>new Promise((c,p)=>{try{const _=t(u);c(_)}catch(_){p(_)}});r.onAbort=e,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const o of e)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mp(i,t={}){return rr(i,"GET","/v2/passwordPolicy",Co(i,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=6;class gp{constructor(t){var e,r,o,u;const c=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=c.minPasswordLength)!==null&&e!==void 0?e:_p,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,o,u,c,p;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,_),this.validatePasswordCharacterOptions(t,_),_.isValid&&(_.isValid=(e=_.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),_.isValid&&(_.isValid=(r=_.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),_.isValid&&(_.isValid=(o=_.containsLowercaseLetter)!==null&&o!==void 0?o:!0),_.isValid&&(_.isValid=(u=_.containsUppercaseLetter)!==null&&u!==void 0?u:!0),_.isValid&&(_.isValid=(c=_.containsNumericCharacter)!==null&&c!==void 0?c:!0),_.isValid&&(_.isValid=(p=_.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),_}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),o&&(e.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let o=0;o<t.length;o++)r=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(t,e,r,o){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yh(this),this.idTokenSubscription=new Yh(this),this.beforeStateQueue=new pp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ul,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=en(e)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await qi.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await ml(this,{idToken:t}),r=await tn._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(Je(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(p,p))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,p=o==null?void 0:o._redirectEventId,_=await this.tryRedirectSignIn(t);(!c||c===p)&&(_!=null&&_.user)&&(o=_.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return tt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await go(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=tp()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Je(this.app))return Promise.reject(Ln(this));const e=t?hn(t):null;return e&&tt(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&tt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Je(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Je(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await mp(this),e=new gp(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new as("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await cp(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&en(t)||this._popupRedirectResolver;tt(e,this,"argument-error"),this.redirectPersistenceManager=await qi.create(this,[en(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,o){if(this._deleted)return()=>{};const u=typeof e=="function"?e:e.next.bind(e);let c=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(tt(p,this,"internal-error"),p.then(()=>{c||u(this.currentUser)}),typeof e=="function"){const _=t.addObserver(e,r,o);return()=>{c=!0,_()}}else{const _=t.addObserver(e);return()=>{c=!0,_()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return tt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=bl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(e["X-Firebase-AppCheck"]=o),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&Yf(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ro(i){return hn(i)}class Yh{constructor(t){this.auth=t,this.observer=null,this.addObserver=Vd(e=>this.observer=e)}get next(){return tt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yp(i){ja=i}function wp(i){return ja.loadJS(i)}function Tp(){return ja.gapiScript}function Ep(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(i,t){const e=Na(i,"auth");if(e.isInitialized()){const o=e.getImmediate(),u=e.getOptions();if(po(u,t??{}))return o;rn(o,"already-initialized")}return e.initialize({options:t})}function Pp(i,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(en);t!=null&&t.errorMap&&i._updateErrorMap(t.errorMap),i._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Ap(i,t,e){const r=Ro(i);tt(r._canInitEmulator,r,"emulator-config-failed"),tt(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!1,u=Sl(t),{host:c,port:p}=bp(t),_=p===null?"":`:${p}`;r.config.emulator={url:`${u}//${c}${_}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:c,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),Sp()}function Sl(i){const t=i.indexOf(":");return t<0?"":i.substr(0,t+1)}function bp(i){const t=Sl(i),e=/(\/\/)?([^?#/]+)/.exec(i.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const u=o[1];return{host:u,port:Jh(r.substr(u.length+1))}}else{const[u,c]=r.split(":");return{host:u,port:Jh(c)}}}function Jh(i){if(!i)return null;const t=Number(i);return isNaN(t)?null:t}function Sp(){function i(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Xe("not implemented")}_getIdTokenResponse(t){return Xe("not implemented")}_linkToIdToken(t,e){return Xe("not implemented")}_getReauthenticationResolver(t){return Xe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(i,t){return fl(i,"POST","/v1/accounts:signInWithIdp",Co(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="http://localhost";class ei extends Cl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ei(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):rn("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:o}=e,u=Va(e,["providerId","signInMethod"]);if(!r||!o)return null;const c=new ei(r,o);return c.idToken=u.idToken||void 0,c.accessToken=u.accessToken||void 0,c.secret=u.secret,c.nonce=u.nonce,c.pendingToken=u.pendingToken||null,c}_getIdTokenResponse(t){const e=this.buildRequest();return Hi(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Hi(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Hi(t,e)}buildRequest(){const t={requestUri:Cp,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=hs(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Rl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends ls{constructor(){super("facebook.com")}static credential(t){return ei._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Tn.credentialFromTaggedObject(t)}static credentialFromError(t){return Tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Tn.credential(t.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends ls{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ei._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return En.credentialFromTaggedObject(t)}static credentialFromError(t){return En.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return En.credential(e,r)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends ls{constructor(){super("github.com")}static credential(t){return ei._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return In.credentialFromTaggedObject(t)}static credentialFromError(t){return In.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return In.credential(t.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends ls{constructor(){super("twitter.com")}static credential(t,e){return ei._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Pn.credentialFromTaggedObject(t)}static credentialFromError(t){return Pn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Pn.credential(e,r)}catch{return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(i,t){return fl(i,"POST","/v1/accounts:signUp",Co(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,o=!1){const u=await tn._fromIdTokenResponse(t,r,o),c=Xh(r);return new xn({user:u,providerId:c,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const o=Xh(r);return new xn({user:t,providerId:o,_tokenResponse:r,operationType:e})}}function Xh(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lp(i){var t;if(Je(i.app))return Promise.reject(Ln(i));const e=Ro(i);if(await e._initializationPromise,!((t=e.currentUser)===null||t===void 0)&&t.isAnonymous)return new xn({user:e.currentUser,providerId:null,operationType:"signIn"});const r=await Rp(e,{returnSecureToken:!0}),o=await xn._fromIdTokenResponse(e,"signIn",r,!0);return await e._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends an{constructor(t,e,r,o){var u;super(e.code,e.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,vo.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,o){return new vo(t,e,r,o)}}function Ll(i,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(i):e._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?vo._fromErrorAndOperation(i,u,t,r):u})}async function xp(i,t,e=!1){const r=await ns(i,t._linkToIdToken(i.auth,await i.getIdToken()),e);return xn._forOperation(i,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp(i,t,e=!1){const{auth:r}=i;if(Je(r.app))return Promise.reject(Ln(r));const o="reauthenticate";try{const u=await ns(i,Ll(r,o,t,i),e);tt(u.idToken,r,"internal-error");const c=Ua(u.idToken);tt(c,r,"internal-error");const{sub:p}=c;return tt(i.uid===p,r,"user-mismatch"),xn._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(i,t,e=!1){if(Je(i.app))return Promise.reject(Ln(i));const r="signIn",o=await Ll(i,r,t),u=await xn._fromIdTokenResponse(i,r,o);return e||await i._updateCurrentUser(u.user),u}function Mp(i,t,e,r){return hn(i).onIdTokenChanged(t,e,r)}function Dp(i,t,e){return hn(i).beforeAuthStateChanged(t,e)}function Np(i,t,e,r){return hn(i).onAuthStateChanged(t,e,r)}const yo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(yo,"1"),this.storage.removeItem(yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=1e3,Fp=10;class kl extends xl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Al(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),o=this.localCache[e];r!==o&&t(e,o,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((c,p,_)=>{this.notifyListeners(c,_)});return}const r=t.key;e?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(r);!e&&this.localCache[r]===c||this.notifyListeners(r,c)},u=this.storage.getItem(r);fp()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,Fp):o()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Vp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}kl.type="LOCAL";const Bp=kl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends xl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ol.type="SESSION";const Ml=Ol;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(i){return Promise.all(i.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(o=>o.isListeningto(t));if(e)return e;const r=new Lo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:o,data:u}=e.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const p=Array.from(c).map(async y=>y(e.origin,u)),_=await Up(p);e.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:_})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(i="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return i+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,c;return new Promise((p,_)=>{const y=qa("",20);o.port1.start();const E=setTimeout(()=>{_(new Error("unsupported_event"))},r);c={messageChannel:o,onMessage(x){const D=x;if(D.data.eventId===y)switch(D.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(D.data.response);break;default:clearTimeout(E),clearTimeout(u),_(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:t,eventId:y,data:e},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return window}function jp(i){De().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(){return typeof De().WorkerGlobalScope<"u"&&typeof De().importScripts=="function"}async function qp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hp(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Zp(){return Dl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="firebaseLocalStorageDb",Wp=1,wo="firebaseLocalStorage",Vl="fbase_key";class cs{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function xo(i,t){return i.transaction([wo],t?"readwrite":"readonly").objectStore(wo)}function Gp(){const i=indexedDB.deleteDatabase(Nl);return new cs(i).toPromise()}function ma(){const i=indexedDB.open(Nl,Wp);return new Promise((t,e)=>{i.addEventListener("error",()=>{e(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(wo,{keyPath:Vl})}catch(o){e(o)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(wo)?t(r):(r.close(),await Gp(),t(await ma()))})})}async function tu(i,t,e){const r=xo(i,!0).put({[Vl]:t,value:e});return new cs(r).toPromise()}async function Kp(i,t){const e=xo(i,!1).get(t),r=await new cs(e).toPromise();return r===void 0?null:r.value}function eu(i,t){const e=xo(i,!0).delete(t);return new cs(e).toPromise()}const $p=800,Qp=3;class Fl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ma(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>Qp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lo._getInstance(Zp()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await qp(),!this.activeServiceWorker)return;this.sender=new zp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Hp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ma();return await tu(t,yo,"1"),await eu(t,yo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>tu(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>Kp(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>eu(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=xo(o,!1).getAll();return new cs(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),e.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),e.push(o));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$p)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fl.type="LOCAL";const Yp=Fl;new us(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(i,t){return t?en(t):(tt(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends Cl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Hi(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Hi(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Hi(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Xp(i){return Op(i.auth,new Ha(i),i.bypassAuthState)}function tm(i){const{auth:t,user:e}=i;return tt(e,t,"internal-error"),kp(e,new Ha(i),i.bypassAuthState)}async function em(i){const{auth:t,user:e}=i;return tt(e,t,"internal-error"),xp(e,new Ha(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,e,r,o,u=!1){this.auth=t,this.resolver=r,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:o,tenantId:u,error:c,type:p}=t;if(c){this.reject(c);return}const _={auth:this.auth,requestUri:e,sessionId:r,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Xp;case"linkViaPopup":case"linkViaRedirect":return em;case"reauthViaPopup":case"reauthViaRedirect":return tm;default:rn(this.auth,"internal-error")}}resolve(t){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=new us(2e3,1e4);class zi extends Bl{constructor(t,e,r,o,u){super(t,e,o,u),this.provider=r,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return tt(t,this.auth,"internal-error"),t}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const t=qa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,nm.get())};t()}}zi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="pendingRedirect",so=new Map;class rm extends Bl{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=so.get(this.auth._key());if(!t){try{const r=await sm(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}so.set(this.auth._key(),t)}return this.bypassAuthState||so.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sm(i,t){const e=hm(t),r=am(i);if(!await r._isAvailable())return!1;const o=await r._get(e)==="true";return await r._remove(e),o}function om(i,t){so.set(i._key(),t)}function am(i){return en(i._redirectPersistence)}function hm(i){return ro(im,i.config.apiKey,i.name)}async function um(i,t,e=!1){if(Je(i.app))return Promise.reject(Ln(i));const r=Ro(i),o=Jp(r,t),c=await new rm(r,o,e).execute();return c&&!e&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,t)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=10*60*1e3;class cm{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!dm(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Ul(t)){const o=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(Me(this.auth,o))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=lm&&this.cachedEventUids.clear(),this.cachedEventUids.has(nu(t))}saveEventToCache(t){this.cachedEventUids.add(nu(t)),this.lastProcessedEventTime=Date.now()}}function nu(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(t=>t).join("-")}function Ul({type:i,error:t}){return i==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function dm(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ul(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fm(i,t={}){return rr(i,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mm=/^https?/;async function _m(i){if(i.config.emulator)return;const{authorizedDomains:t}=await fm(i);for(const e of t)try{if(gm(e))return}catch{}rn(i,"unauthorized-domain")}function gm(i){const t=fa(),{protocol:e,hostname:r}=new URL(t);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&r===""?e==="chrome-extension:"&&i.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&c.hostname===r}if(!mm.test(e))return!1;if(pm.test(i))return r===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=new us(3e4,6e4);function iu(){const i=De().___jsl;if(i!=null&&i.H){for(const t of Object.keys(i.H))if(i.H[t].r=i.H[t].r||[],i.H[t].L=i.H[t].L||[],i.H[t].r=[...i.H[t].L],i.CP)for(let e=0;e<i.CP.length;e++)i.CP[e]=null}}function ym(i){return new Promise((t,e)=>{var r,o,u;function c(){iu(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{iu(),e(Me(i,"network-request-failed"))},timeout:vm.get()})}if(!((o=(r=De().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=De().gapi)===null||u===void 0)&&u.load)c();else{const p=Ep("iframefcb");return De()[p]=()=>{gapi.load?c():e(Me(i,"network-request-failed"))},wp(`${Tp()}?onload=${p}`).catch(_=>e(_))}}).catch(t=>{throw oo=null,t})}let oo=null;function wm(i){return oo=oo||ym(i),oo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=new us(5e3,15e3),Em="__/auth/iframe",Im="emulator/auth/iframe",Pm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Am=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bm(i){const t=i.config;tt(t.authDomain,i,"auth-domain-config-required");const e=t.emulator?Ba(t,Im):`https://${i.config.authDomain}/${Em}`,r={apiKey:t.apiKey,appName:i.name,v:ir},o=Am.get(i.config.apiHost);o&&(r.eid=o);const u=i._getFrameworks();return u.length&&(r.fw=u.join(",")),`${e}?${hs(r).slice(1)}`}async function Sm(i){const t=await wm(i),e=De().gapi;return tt(e,i,"internal-error"),t.open({where:document.body,url:bm(i),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pm,dontclear:!0},r=>new Promise(async(o,u)=>{await r.restyle({setHideOnLeave:!1});const c=Me(i,"network-request-failed"),p=De().setTimeout(()=>{u(c)},Tm.get());function _(){De().clearTimeout(p),o(r)}r.ping(_).then(_,()=>{u(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rm=500,Lm=600,xm="_blank",km="http://localhost";class ru{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Om(i,t,e,r=Rm,o=Lm){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const _=Object.assign(Object.assign({},Cm),{width:r.toString(),height:o.toString(),top:u,left:c}),y=ne().toLowerCase();e&&(p=wl(y)?xm:e),vl(y)&&(t=t||km,_.scrollbars="yes");const E=Object.entries(_).reduce((D,[F,q])=>`${D}${F}=${q},`,"");if(dp(y)&&p!=="_self")return Mm(t||"",p),new ru(null);const x=window.open(t||"",p,E);tt(x,i,"popup-blocked");try{x.focus()}catch{}return new ru(x)}function Mm(i,t){const e=document.createElement("a");e.href=i,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="__/auth/handler",Nm="emulator/auth/handler",Vm=encodeURIComponent("fac");async function su(i,t,e,r,o,u){tt(i.config.authDomain,i,"auth-domain-config-required"),tt(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:e,redirectUrl:r,v:ir,eventId:o};if(t instanceof Rl){t.setDefaultLanguage(i.languageCode),c.providerId=t.providerId||"",Nd(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,x]of Object.entries({}))c[E]=x}if(t instanceof ls){const E=t.getScopes().filter(x=>x!=="");E.length>0&&(c.scopes=E.join(","))}i.tenantId&&(c.tid=i.tenantId);const p=c;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const _=await i._getAppCheckToken(),y=_?`#${Vm}=${encodeURIComponent(_)}`:"";return`${Fm(i)}?${hs(p).slice(1)}${y}`}function Fm({config:i}){return i.emulator?Ba(i,Nm):`https://${i.authDomain}/${Dm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="webStorageSupport";class Bm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ml,this._completeRedirectFn=um,this._overrideRedirectResult=om}async _openPopup(t,e,r,o){var u;sn((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const c=await su(t,e,r,fa(),o);return Om(t,c,qa())}async _openRedirect(t,e,r,o){await this._originValidation(t);const u=await su(t,e,r,fa(),o);return jp(u),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:o,promise:u}=this.eventManagers[e];return o?Promise.resolve(o):(sn(u,"If manager is not set, promise should be"),u)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Sm(t),r=new cm(t);return e.register("authEvent",o=>(tt(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(na,{type:na},o=>{var u;const c=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[na];c!==void 0&&e(!!c),rn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=_m(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Al()||yl()||za()}}const Um=Bm;var ou="@firebase/auth",au="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){tt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qm(i){Qi(new ti("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:c,authDomain:p}=r.options;tt(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:c,authDomain:p,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bl(i)},y=new vp(r,o,u,_);return Pp(y,e),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Qi(new ti("auth-internal",t=>{const e=Ro(t.getProvider("auth").getImmediate());return(r=>new zm(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(ou,au,jm(i)),Rn(ou,au,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=5*60,Zm=el("authIdTokenMaxAge")||Hm;let hu=null;const Wm=i=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>Zm)return;const o=e==null?void 0:e.token;hu!==o&&(hu=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Gm(i=sl()){const t=Na(i,"auth");if(t.isInitialized())return t.getImmediate();const e=Ip(i,{popupRedirectResolver:Um,persistence:[Yp,Bp,Ml]}),r=el("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(r,location.origin);if(location.origin===u.origin){const c=Wm(u.toString());Dp(e,c,()=>c(e.currentUser)),Mp(e,p=>c(p))}}const o=Xu("auth");return o&&Ap(e,`http://${o}`),e}function Km(){var i,t;return(t=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&t!==void 0?t:document}yp({loadJS(i){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=t,r.onerror=o=>{const u=Me("internal-error");u.customData=o,e(u)},r.type="text/javascript",r.charset="UTF-8",Km().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qm("Browser");var uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jn,zl;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(S,w){function I(){}I.prototype=w.prototype,S.D=w.prototype,S.prototype=new I,S.prototype.constructor=S,S.C=function(b,A,C){for(var P=Array(arguments.length-2),jt=2;jt<arguments.length;jt++)P[jt-2]=arguments[jt];return w.prototype[A].apply(b,P)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(S,w,I){I||(I=0);var b=Array(16);if(typeof w=="string")for(var A=0;16>A;++A)b[A]=w.charCodeAt(I++)|w.charCodeAt(I++)<<8|w.charCodeAt(I++)<<16|w.charCodeAt(I++)<<24;else for(A=0;16>A;++A)b[A]=w[I++]|w[I++]<<8|w[I++]<<16|w[I++]<<24;w=S.g[0],I=S.g[1],A=S.g[2];var C=S.g[3],P=w+(C^I&(A^C))+b[0]+3614090360&4294967295;w=I+(P<<7&4294967295|P>>>25),P=C+(A^w&(I^A))+b[1]+3905402710&4294967295,C=w+(P<<12&4294967295|P>>>20),P=A+(I^C&(w^I))+b[2]+606105819&4294967295,A=C+(P<<17&4294967295|P>>>15),P=I+(w^A&(C^w))+b[3]+3250441966&4294967295,I=A+(P<<22&4294967295|P>>>10),P=w+(C^I&(A^C))+b[4]+4118548399&4294967295,w=I+(P<<7&4294967295|P>>>25),P=C+(A^w&(I^A))+b[5]+1200080426&4294967295,C=w+(P<<12&4294967295|P>>>20),P=A+(I^C&(w^I))+b[6]+2821735955&4294967295,A=C+(P<<17&4294967295|P>>>15),P=I+(w^A&(C^w))+b[7]+4249261313&4294967295,I=A+(P<<22&4294967295|P>>>10),P=w+(C^I&(A^C))+b[8]+1770035416&4294967295,w=I+(P<<7&4294967295|P>>>25),P=C+(A^w&(I^A))+b[9]+2336552879&4294967295,C=w+(P<<12&4294967295|P>>>20),P=A+(I^C&(w^I))+b[10]+4294925233&4294967295,A=C+(P<<17&4294967295|P>>>15),P=I+(w^A&(C^w))+b[11]+2304563134&4294967295,I=A+(P<<22&4294967295|P>>>10),P=w+(C^I&(A^C))+b[12]+1804603682&4294967295,w=I+(P<<7&4294967295|P>>>25),P=C+(A^w&(I^A))+b[13]+4254626195&4294967295,C=w+(P<<12&4294967295|P>>>20),P=A+(I^C&(w^I))+b[14]+2792965006&4294967295,A=C+(P<<17&4294967295|P>>>15),P=I+(w^A&(C^w))+b[15]+1236535329&4294967295,I=A+(P<<22&4294967295|P>>>10),P=w+(A^C&(I^A))+b[1]+4129170786&4294967295,w=I+(P<<5&4294967295|P>>>27),P=C+(I^A&(w^I))+b[6]+3225465664&4294967295,C=w+(P<<9&4294967295|P>>>23),P=A+(w^I&(C^w))+b[11]+643717713&4294967295,A=C+(P<<14&4294967295|P>>>18),P=I+(C^w&(A^C))+b[0]+3921069994&4294967295,I=A+(P<<20&4294967295|P>>>12),P=w+(A^C&(I^A))+b[5]+3593408605&4294967295,w=I+(P<<5&4294967295|P>>>27),P=C+(I^A&(w^I))+b[10]+38016083&4294967295,C=w+(P<<9&4294967295|P>>>23),P=A+(w^I&(C^w))+b[15]+3634488961&4294967295,A=C+(P<<14&4294967295|P>>>18),P=I+(C^w&(A^C))+b[4]+3889429448&4294967295,I=A+(P<<20&4294967295|P>>>12),P=w+(A^C&(I^A))+b[9]+568446438&4294967295,w=I+(P<<5&4294967295|P>>>27),P=C+(I^A&(w^I))+b[14]+3275163606&4294967295,C=w+(P<<9&4294967295|P>>>23),P=A+(w^I&(C^w))+b[3]+4107603335&4294967295,A=C+(P<<14&4294967295|P>>>18),P=I+(C^w&(A^C))+b[8]+1163531501&4294967295,I=A+(P<<20&4294967295|P>>>12),P=w+(A^C&(I^A))+b[13]+2850285829&4294967295,w=I+(P<<5&4294967295|P>>>27),P=C+(I^A&(w^I))+b[2]+4243563512&4294967295,C=w+(P<<9&4294967295|P>>>23),P=A+(w^I&(C^w))+b[7]+1735328473&4294967295,A=C+(P<<14&4294967295|P>>>18),P=I+(C^w&(A^C))+b[12]+2368359562&4294967295,I=A+(P<<20&4294967295|P>>>12),P=w+(I^A^C)+b[5]+4294588738&4294967295,w=I+(P<<4&4294967295|P>>>28),P=C+(w^I^A)+b[8]+2272392833&4294967295,C=w+(P<<11&4294967295|P>>>21),P=A+(C^w^I)+b[11]+1839030562&4294967295,A=C+(P<<16&4294967295|P>>>16),P=I+(A^C^w)+b[14]+4259657740&4294967295,I=A+(P<<23&4294967295|P>>>9),P=w+(I^A^C)+b[1]+2763975236&4294967295,w=I+(P<<4&4294967295|P>>>28),P=C+(w^I^A)+b[4]+1272893353&4294967295,C=w+(P<<11&4294967295|P>>>21),P=A+(C^w^I)+b[7]+4139469664&4294967295,A=C+(P<<16&4294967295|P>>>16),P=I+(A^C^w)+b[10]+3200236656&4294967295,I=A+(P<<23&4294967295|P>>>9),P=w+(I^A^C)+b[13]+681279174&4294967295,w=I+(P<<4&4294967295|P>>>28),P=C+(w^I^A)+b[0]+3936430074&4294967295,C=w+(P<<11&4294967295|P>>>21),P=A+(C^w^I)+b[3]+3572445317&4294967295,A=C+(P<<16&4294967295|P>>>16),P=I+(A^C^w)+b[6]+76029189&4294967295,I=A+(P<<23&4294967295|P>>>9),P=w+(I^A^C)+b[9]+3654602809&4294967295,w=I+(P<<4&4294967295|P>>>28),P=C+(w^I^A)+b[12]+3873151461&4294967295,C=w+(P<<11&4294967295|P>>>21),P=A+(C^w^I)+b[15]+530742520&4294967295,A=C+(P<<16&4294967295|P>>>16),P=I+(A^C^w)+b[2]+3299628645&4294967295,I=A+(P<<23&4294967295|P>>>9),P=w+(A^(I|~C))+b[0]+4096336452&4294967295,w=I+(P<<6&4294967295|P>>>26),P=C+(I^(w|~A))+b[7]+1126891415&4294967295,C=w+(P<<10&4294967295|P>>>22),P=A+(w^(C|~I))+b[14]+2878612391&4294967295,A=C+(P<<15&4294967295|P>>>17),P=I+(C^(A|~w))+b[5]+4237533241&4294967295,I=A+(P<<21&4294967295|P>>>11),P=w+(A^(I|~C))+b[12]+1700485571&4294967295,w=I+(P<<6&4294967295|P>>>26),P=C+(I^(w|~A))+b[3]+2399980690&4294967295,C=w+(P<<10&4294967295|P>>>22),P=A+(w^(C|~I))+b[10]+4293915773&4294967295,A=C+(P<<15&4294967295|P>>>17),P=I+(C^(A|~w))+b[1]+2240044497&4294967295,I=A+(P<<21&4294967295|P>>>11),P=w+(A^(I|~C))+b[8]+1873313359&4294967295,w=I+(P<<6&4294967295|P>>>26),P=C+(I^(w|~A))+b[15]+4264355552&4294967295,C=w+(P<<10&4294967295|P>>>22),P=A+(w^(C|~I))+b[6]+2734768916&4294967295,A=C+(P<<15&4294967295|P>>>17),P=I+(C^(A|~w))+b[13]+1309151649&4294967295,I=A+(P<<21&4294967295|P>>>11),P=w+(A^(I|~C))+b[4]+4149444226&4294967295,w=I+(P<<6&4294967295|P>>>26),P=C+(I^(w|~A))+b[11]+3174756917&4294967295,C=w+(P<<10&4294967295|P>>>22),P=A+(w^(C|~I))+b[2]+718787259&4294967295,A=C+(P<<15&4294967295|P>>>17),P=I+(C^(A|~w))+b[9]+3951481745&4294967295,S.g[0]=S.g[0]+w&4294967295,S.g[1]=S.g[1]+(A+(P<<21&4294967295|P>>>11))&4294967295,S.g[2]=S.g[2]+A&4294967295,S.g[3]=S.g[3]+C&4294967295}r.prototype.u=function(S,w){w===void 0&&(w=S.length);for(var I=w-this.blockSize,b=this.B,A=this.h,C=0;C<w;){if(A==0)for(;C<=I;)o(this,S,C),C+=this.blockSize;if(typeof S=="string"){for(;C<w;)if(b[A++]=S.charCodeAt(C++),A==this.blockSize){o(this,b),A=0;break}}else for(;C<w;)if(b[A++]=S[C++],A==this.blockSize){o(this,b),A=0;break}}this.h=A,this.o+=w},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var w=1;w<S.length-8;++w)S[w]=0;var I=8*this.o;for(w=S.length-8;w<S.length;++w)S[w]=I&255,I/=256;for(this.u(S),S=Array(16),w=I=0;4>w;++w)for(var b=0;32>b;b+=8)S[I++]=this.g[w]>>>b&255;return S};function u(S,w){var I=p;return Object.prototype.hasOwnProperty.call(I,S)?I[S]:I[S]=w(S)}function c(S,w){this.h=w;for(var I=[],b=!0,A=S.length-1;0<=A;A--){var C=S[A]|0;b&&C==w||(I[A]=C,b=!1)}this.g=I}var p={};function _(S){return-128<=S&&128>S?u(S,function(w){return new c([w|0],0>w?-1:0)}):new c([S|0],0>S?-1:0)}function y(S){if(isNaN(S)||!isFinite(S))return x;if(0>S)return H(y(-S));for(var w=[],I=1,b=0;S>=I;b++)w[b]=S/I|0,I*=4294967296;return new c(w,0)}function E(S,w){if(S.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S.charAt(0)=="-")return H(E(S.substring(1),w));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=y(Math.pow(w,8)),b=x,A=0;A<S.length;A+=8){var C=Math.min(8,S.length-A),P=parseInt(S.substring(A,A+C),w);8>C?(C=y(Math.pow(w,C)),b=b.j(C).add(y(P))):(b=b.j(I),b=b.add(y(P)))}return b}var x=_(0),D=_(1),F=_(16777216);i=c.prototype,i.m=function(){if(z(this))return-H(this).m();for(var S=0,w=1,I=0;I<this.g.length;I++){var b=this.i(I);S+=(0<=b?b:4294967296+b)*w,w*=4294967296}return S},i.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(q(this))return"0";if(z(this))return"-"+H(this).toString(S);for(var w=y(Math.pow(S,6)),I=this,b="";;){var A=It(I,w).g;I=gt(I,A.j(w));var C=((0<I.g.length?I.g[0]:I.h)>>>0).toString(S);if(I=A,q(I))return C+b;for(;6>C.length;)C="0"+C;b=C+b}},i.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function q(S){if(S.h!=0)return!1;for(var w=0;w<S.g.length;w++)if(S.g[w]!=0)return!1;return!0}function z(S){return S.h==-1}i.l=function(S){return S=gt(this,S),z(S)?-1:q(S)?0:1};function H(S){for(var w=S.g.length,I=[],b=0;b<w;b++)I[b]=~S.g[b];return new c(I,~S.h).add(D)}i.abs=function(){return z(this)?H(this):this},i.add=function(S){for(var w=Math.max(this.g.length,S.g.length),I=[],b=0,A=0;A<=w;A++){var C=b+(this.i(A)&65535)+(S.i(A)&65535),P=(C>>>16)+(this.i(A)>>>16)+(S.i(A)>>>16);b=P>>>16,C&=65535,P&=65535,I[A]=P<<16|C}return new c(I,I[I.length-1]&-2147483648?-1:0)};function gt(S,w){return S.add(H(w))}i.j=function(S){if(q(this)||q(S))return x;if(z(this))return z(S)?H(this).j(H(S)):H(H(this).j(S));if(z(S))return H(this.j(H(S)));if(0>this.l(F)&&0>S.l(F))return y(this.m()*S.m());for(var w=this.g.length+S.g.length,I=[],b=0;b<2*w;b++)I[b]=0;for(b=0;b<this.g.length;b++)for(var A=0;A<S.g.length;A++){var C=this.i(b)>>>16,P=this.i(b)&65535,jt=S.i(A)>>>16,Dn=S.i(A)&65535;I[2*b+2*A]+=P*Dn,yt(I,2*b+2*A),I[2*b+2*A+1]+=C*Dn,yt(I,2*b+2*A+1),I[2*b+2*A+1]+=P*jt,yt(I,2*b+2*A+1),I[2*b+2*A+2]+=C*jt,yt(I,2*b+2*A+2)}for(b=0;b<w;b++)I[b]=I[2*b+1]<<16|I[2*b];for(b=w;b<2*w;b++)I[b]=0;return new c(I,0)};function yt(S,w){for(;(S[w]&65535)!=S[w];)S[w+1]+=S[w]>>>16,S[w]&=65535,w++}function rt(S,w){this.g=S,this.h=w}function It(S,w){if(q(w))throw Error("division by zero");if(q(S))return new rt(x,x);if(z(S))return w=It(H(S),w),new rt(H(w.g),H(w.h));if(z(w))return w=It(S,H(w)),new rt(H(w.g),w.h);if(30<S.g.length){if(z(S)||z(w))throw Error("slowDivide_ only works with positive integers.");for(var I=D,b=w;0>=b.l(S);)I=Kt(I),b=Kt(b);var A=Pt(I,1),C=Pt(b,1);for(b=Pt(b,2),I=Pt(I,2);!q(b);){var P=C.add(b);0>=P.l(S)&&(A=A.add(I),C=P),b=Pt(b,1),I=Pt(I,1)}return w=gt(S,A.j(w)),new rt(A,w)}for(A=x;0<=S.l(w);){for(I=Math.max(1,Math.floor(S.m()/w.m())),b=Math.ceil(Math.log(I)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),C=y(I),P=C.j(w);z(P)||0<P.l(S);)I-=b,C=y(I),P=C.j(w);q(C)&&(C=D),A=A.add(C),S=gt(S,P)}return new rt(A,S)}i.A=function(S){return It(this,S).h},i.and=function(S){for(var w=Math.max(this.g.length,S.g.length),I=[],b=0;b<w;b++)I[b]=this.i(b)&S.i(b);return new c(I,this.h&S.h)},i.or=function(S){for(var w=Math.max(this.g.length,S.g.length),I=[],b=0;b<w;b++)I[b]=this.i(b)|S.i(b);return new c(I,this.h|S.h)},i.xor=function(S){for(var w=Math.max(this.g.length,S.g.length),I=[],b=0;b<w;b++)I[b]=this.i(b)^S.i(b);return new c(I,this.h^S.h)};function Kt(S){for(var w=S.g.length+1,I=[],b=0;b<w;b++)I[b]=S.i(b)<<1|S.i(b-1)>>>31;return new c(I,S.h)}function Pt(S,w){var I=w>>5;w%=32;for(var b=S.g.length-I,A=[],C=0;C<b;C++)A[C]=0<w?S.i(C+I)>>>w|S.i(C+I+1)<<32-w:S.i(C+I);return new c(A,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,zl=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=E,Jn=c}).apply(typeof uu<"u"?uu:typeof self<"u"?self:typeof window<"u"?window:{});var Xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jl,Zr,ql,ao,_a,Hl,Zl,Wl;(function(){var i,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,m){return a==Array.prototype||a==Object.prototype||(a[d]=m.value),a};function e(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xs=="object"&&Xs];for(var d=0;d<a.length;++d){var m=a[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=e(this);function o(a,d){if(d)t:{var m=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var R=a[v];if(!(R in m))break t;m=m[R]}a=a[a.length-1],v=m[a],d=d(v),d!=v&&d!=null&&t(m,a,{configurable:!0,writable:!0,value:d})}}function u(a,d){a instanceof String&&(a+="");var m=0,v=!1,R={next:function(){if(!v&&m<a.length){var M=m++;return{value:d(M,a[M]),done:!1}}return v=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}o("Array.prototype.values",function(a){return a||function(){return u(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},p=this||self;function _(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function y(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function E(a,d,m){return a.call.apply(a.bind,arguments)}function x(a,d,m){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,v),a.apply(d,R)}}return function(){return a.apply(d,arguments)}}function D(a,d,m){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:x,D.apply(null,arguments)}function F(a,d){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function q(a,d){function m(){}m.prototype=d.prototype,a.aa=d.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(v,R,M){for(var B=Array(arguments.length-2),vt=2;vt<arguments.length;vt++)B[vt-2]=arguments[vt];return d.prototype[R].apply(v,B)}}function z(a){const d=a.length;if(0<d){const m=Array(d);for(let v=0;v<d;v++)m[v]=a[v];return m}return[]}function H(a,d){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(_(v)){const R=a.length||0,M=v.length||0;a.length=R+M;for(let B=0;B<M;B++)a[R+B]=v[B]}else a.push(v)}}class gt{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function yt(a){return/^[\s\xa0]*$/.test(a)}function rt(){var a=p.navigator;return a&&(a=a.userAgent)?a:""}function It(a){return It[" "](a),a}It[" "]=function(){};var Kt=rt().indexOf("Gecko")!=-1&&!(rt().toLowerCase().indexOf("webkit")!=-1&&rt().indexOf("Edge")==-1)&&!(rt().indexOf("Trident")!=-1||rt().indexOf("MSIE")!=-1)&&rt().indexOf("Edge")==-1;function Pt(a,d,m){for(const v in a)d.call(m,a[v],v,a)}function S(a,d){for(const m in a)d.call(void 0,a[m],m,a)}function w(a){const d={};for(const m in a)d[m]=a[m];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,d){let m,v;for(let R=1;R<arguments.length;R++){v=arguments[R];for(m in v)a[m]=v[m];for(let M=0;M<I.length;M++)m=I[M],Object.prototype.hasOwnProperty.call(v,m)&&(a[m]=v[m])}}function A(a){var d=1;a=a.split(":");const m=[];for(;0<d&&a.length;)m.push(a.shift()),d--;return a.length&&m.push(a.join(":")),m}function C(a){p.setTimeout(()=>{throw a},0)}function P(){var a=oi;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class jt{constructor(){this.h=this.g=null}add(d,m){const v=Dn.get();v.set(d,m),this.h?this.h.next=v:this.g=v,this.h=v}}var Dn=new gt(()=>new ie,a=>a.reset());class ie{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,Q=!1,oi=new jt,J=()=>{const a=p.Promise.resolve(void 0);Ee=()=>{a.then(At)}};var At=()=>{for(var a;a=P();){try{a.h.call(a.g)}catch(m){C(m)}var d=Dn;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Q=!1};function Ct(){this.s=this.s,this.C=this.C}Ct.prototype.s=!1,Ct.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ct.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function mt(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var xt=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};p.addEventListener("test",m,d),p.removeEventListener("test",m,d)}catch{}return a}();function lt(a,d){if(mt.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(Kt){t:{try{It(d.nodeName);var R=!0;break t}catch{}R=!1}R||(d=null)}}else m=="mouseover"?d=a.fromElement:m=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:at[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&lt.aa.h.call(this)}}q(lt,mt);var at={2:"touch",3:"pen",4:"mouse"};lt.prototype.h=function(){lt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ae="closure_listenable_"+(1e6*Math.random()|0),Ce=0;function _s(a,d,m,v,R){this.listener=a,this.proxy=null,this.src=d,this.type=m,this.capture=!!v,this.ha=R,this.key=++Ce,this.da=this.fa=!1}function un(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ln(a){this.src=a,this.g={},this.h=0}ln.prototype.add=function(a,d,m,v,R){var M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);var B=Nn(a,d,v,R);return-1<B?(d=a[B],m||(d.fa=!1)):(d=new _s(d,this.src,M,!!v,R),d.fa=m,a.push(d)),d};function Be(a,d){var m=d.type;if(m in a.g){var v=a.g[m],R=Array.prototype.indexOf.call(v,d,void 0),M;(M=0<=R)&&Array.prototype.splice.call(v,R,1),M&&(un(d),a.g[m].length==0&&(delete a.g[m],a.h--))}}function Nn(a,d,m,v){for(var R=0;R<a.length;++R){var M=a[R];if(!M.da&&M.listener==d&&M.capture==!!m&&M.ha==v)return R}return-1}var hr="closure_lm_"+(1e6*Math.random()|0),ai={};function ur(a,d,m,v,R){if(Array.isArray(d)){for(var M=0;M<d.length;M++)ur(a,d[M],m,v,R);return null}return m=ys(m),a&&a[ae]?a.K(d,m,y(v)?!!v.capture:!1,R):lr(a,d,m,!1,v,R)}function lr(a,d,m,v,R,M){if(!d)throw Error("Invalid event type");var B=y(R)?!!R.capture:!!R,vt=ci(a);if(vt||(a[hr]=vt=new ln(a)),m=vt.add(d,m,v,B,M),m.proxy)return m;if(v=hi(),m.proxy=v,v.src=a,v.listener=m,a.addEventListener)xt||(R=B),R===void 0&&(R=!1),a.addEventListener(d.toString(),v,R);else if(a.attachEvent)a.attachEvent(li(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function hi(){function a(m){return d.call(a.src,a.listener,m)}const d=vs;return a}function gs(a,d,m,v,R){if(Array.isArray(d))for(var M=0;M<d.length;M++)gs(a,d[M],m,v,R);else v=y(v)?!!v.capture:!!v,m=ys(m),a&&a[ae]?(a=a.i,d=String(d).toString(),d in a.g&&(M=a.g[d],m=Nn(M,m,v,R),-1<m&&(un(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete a.g[d],a.h--)))):a&&(a=ci(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Nn(d,m,v,R)),(m=-1<a?d[a]:null)&&ui(m))}function ui(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[ae])Be(d.i,a);else{var m=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(m,v,a.capture):d.detachEvent?d.detachEvent(li(m),v):d.addListener&&d.removeListener&&d.removeListener(v),(m=ci(d))?(Be(m,a),m.h==0&&(m.src=null,d[hr]=null)):un(a)}}}function li(a){return a in ai?ai[a]:ai[a]="on"+a}function vs(a,d){if(a.da)a=!0;else{d=new lt(d,this);var m=a.listener,v=a.ha||a.src;a.fa&&ui(a),a=m.call(v,d)}return a}function ci(a){return a=a[hr],a instanceof ln?a:null}var cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ys(a){return typeof a=="function"?a:(a[cr]||(a[cr]=function(d){return a.handleEvent(d)}),a[cr])}function Ft(){Ct.call(this),this.i=new ln(this),this.M=this,this.F=null}q(Ft,Ct),Ft.prototype[ae]=!0,Ft.prototype.removeEventListener=function(a,d,m,v){gs(this,a,d,m,v)};function Ht(a,d){var m,v=a.F;if(v)for(m=[];v;v=v.F)m.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new mt(d,a);else if(d instanceof mt)d.target=d.target||a;else{var R=d;d=new mt(v,a),b(d,R)}if(R=!0,m)for(var M=m.length-1;0<=M;M--){var B=d.g=m[M];R=Vn(B,v,!0,d)&&R}if(B=d.g=a,R=Vn(B,v,!0,d)&&R,R=Vn(B,v,!1,d)&&R,m)for(M=0;M<m.length;M++)B=d.g=m[M],R=Vn(B,v,!1,d)&&R}Ft.prototype.N=function(){if(Ft.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var m=a.g[d],v=0;v<m.length;v++)un(m[v]);delete a.g[d],a.h--}}this.F=null},Ft.prototype.K=function(a,d,m,v){return this.i.add(String(a),d,!1,m,v)},Ft.prototype.L=function(a,d,m,v){return this.i.add(String(a),d,!0,m,v)};function Vn(a,d,m,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var R=!0,M=0;M<d.length;++M){var B=d[M];if(B&&!B.da&&B.capture==m){var vt=B.listener,Bt=B.ha||B.src;B.fa&&Be(a.i,B),R=vt.call(Bt,v)!==!1&&R}}return R&&!v.defaultPrevented}function ws(a,d,m){if(typeof a=="function")m&&(a=D(a,m));else if(a&&typeof a.handleEvent=="function")a=D(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:p.setTimeout(a,d||0)}function dr(a){a.g=ws(()=>{a.g=null,a.i&&(a.i=!1,dr(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Ts extends Ct{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:dr(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fn(a){Ct.call(this),this.h=a,this.g={}}q(Fn,Ct);var fr=[];function di(a){Pt(a.g,function(d,m){this.g.hasOwnProperty(m)&&ui(d)},a),a.g={}}Fn.prototype.N=function(){Fn.aa.N.call(this),di(this)},Fn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fi=p.JSON.stringify,jo=p.JSON.parse,Bn=class{stringify(a){return p.JSON.stringify(a,void 0)}parse(a){return p.JSON.parse(a,void 0)}};function pr(){}pr.prototype.h=null;function Es(a){return a.h||(a.h=a.i())}function mr(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pi(){mt.call(this,"d")}q(pi,mt);function _r(){mt.call(this,"c")}q(_r,mt);var Ue={},Is=null;function mi(){return Is=Is||new Ft}Ue.La="serverreachability";function Ps(a){mt.call(this,Ue.La,a)}q(Ps,mt);function Un(a){const d=mi();Ht(d,new Ps(d))}Ue.STAT_EVENT="statevent";function _i(a,d){mt.call(this,Ue.STAT_EVENT,a),this.stat=d}q(_i,mt);function $t(a){const d=mi();Ht(d,new _i(d,a))}Ue.Ma="timingevent";function As(a,d){mt.call(this,Ue.Ma,a),this.size=d}q(As,mt);function zn(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){a()},d)}function jn(){this.g=!0}jn.prototype.xa=function(){this.g=!1};function pe(a,d,m,v,R,M){a.info(function(){if(a.g)if(M)for(var B="",vt=M.split("&"),Bt=0;Bt<vt.length;Bt++){var ct=vt[Bt].split("=");if(1<ct.length){var Tt=ct[0];ct=ct[1];var Lt=Tt.split("_");B=2<=Lt.length&&Lt[1]=="type"?B+(Tt+"="+ct+"&"):B+(Tt+"=redacted&")}}else B=null;else B=M;return"XMLHTTP REQ ("+v+") [attempt "+R+"]: "+d+`
`+m+`
`+B})}function W(a,d,m,v,R,M,B){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+R+"]: "+d+`
`+m+`
`+M+" "+B})}function ze(a,d,m,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Ss(a,m)+(v?" "+v:"")})}function bs(a,d){a.info(function(){return"TIMEOUT: "+d})}jn.prototype.info=function(){};function Ss(a,d){if(!a.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var v=m[a];if(!(2>v.length)){var R=v[1];if(Array.isArray(R)&&!(1>R.length)){var M=R[0];if(M!="noop"&&M!="stop"&&M!="close")for(var B=1;B<R.length;B++)R[B]=""}}}}return fi(m)}catch{return d}}var qn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vi;function Ie(){}q(Ie,pr),Ie.prototype.g=function(){return new XMLHttpRequest},Ie.prototype.i=function(){return{}},vi=new Ie;function Pe(a,d,m,v){this.j=a,this.i=d,this.l=m,this.R=v||1,this.U=new Fn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cs}function Cs(){this.i=null,this.g="",this.h=!1}var Rs={},gr={};function vr(a,d,m){a.L=1,a.v=_e(kt(d)),a.m=m,a.P=!0,yr(a,null)}function yr(a,d){a.F=Date.now(),wi(a),a.A=kt(a.v);var m=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),ks(m.i,"t",v),a.C=0,m=a.j.J,a.h=new Cs,a.g=Bs(a.j,m?d:null,!a.m),0<a.O&&(a.M=new Ts(D(a.Y,a,a.g),a.O)),d=a.U,m=a.g,v=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(fr[0]=R.toString()),R=fr);for(var M=0;M<R.length;M++){var B=ur(m,R[M],v||d.handleEvent,!1,d.h||d);if(!B)break;d.g[B.key]=B}d=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Un(),pe(a.i,a.u,a.A,a.l,a.R,a.m)}Pe.prototype.ca=function(a){a=a.target;const d=this.M;d&&re(a)==3?d.j():this.Y(a)},Pe.prototype.Y=function(a){try{if(a==this.g)t:{const Lt=re(this.g);var d=this.g.Ba();const vn=this.g.Z();if(!(3>Lt)&&(Lt!=3||this.g&&(this.h.h||this.g.oa()||Dr(this.g)))){this.J||Lt!=4||d==7||(d==8||0>=vn?Un(3):Un(2)),wr(this);var m=this.g.Z();this.X=m;e:if(Ls(this)){var v=Dr(this.g);a="";var R=v.length,M=re(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){je(this),Hn(this);var B="";break e}this.h.i=new p.TextDecoder}for(d=0;d<R;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!(M&&d==R-1)});v.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=m==200,W(this.i,this.u,this.A,this.l,this.R,Lt,m),this.o){if(this.T&&!this.K){e:{if(this.g){var vt,Bt=this.g;if((vt=Bt.g?Bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yt(vt)){var ct=vt;break e}}ct=null}if(m=ct)ze(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zn(this,m);else{this.o=!1,this.s=3,$t(12),je(this),Hn(this);break t}}if(this.P){m=!0;let Dt;for(;!this.J&&this.C<B.length;)if(Dt=yi(this,B),Dt==gr){Lt==4&&(this.s=4,$t(14),m=!1),ze(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==Rs){this.s=4,$t(15),ze(this.i,this.l,B,"[Invalid Chunk]"),m=!1;break}else ze(this.i,this.l,Dt,null),Zn(this,Dt);if(Ls(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Lt!=4||B.length!=0||this.h.h||(this.s=1,$t(16),m=!1),this.o=this.o&&m,!m)ze(this.i,this.l,B,"[Invalid Chunked Response]"),je(this),Hn(this);else if(0<B.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Ri(Tt),Tt.M=!0,$t(11))}}else ze(this.i,this.l,B,null),Zn(this,B);Lt==4&&je(this),this.o&&!this.J&&(Lt==4?Vr(this.j,this):(this.o=!1,wi(this)))}else qo(this.g),m==400&&0<B.indexOf("Unknown SID")?(this.s=3,$t(12)):(this.s=0,$t(13)),je(this),Hn(this)}}}catch{}finally{}};function Ls(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function yi(a,d){var m=a.C,v=d.indexOf(`
`,m);return v==-1?gr:(m=Number(d.substring(m,v)),isNaN(m)?Rs:(v+=1,v+m>d.length?gr:(d=d.slice(v,v+m),a.C=v+m,d)))}Pe.prototype.cancel=function(){this.J=!0,je(this)};function wi(a){a.S=Date.now()+a.I,xs(a,a.I)}function xs(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=zn(D(a.ba,a),d)}function wr(a){a.B&&(p.clearTimeout(a.B),a.B=null)}Pe.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(bs(this.i,this.A),this.L!=2&&(Un(),$t(17)),je(this),this.s=2,Hn(this)):xs(this,this.S-a)};function Hn(a){a.j.G==0||a.J||Vr(a.j,a)}function je(a){wr(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,di(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Zn(a,d){try{var m=a.j;if(m.G!=0&&(m.g==a||ht(m.h,a))){if(!a.K&&ht(m.h,a)&&m.G==3){try{var v=m.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var R=v;if(R[0]==0){t:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)xi(m),Si(m);else break t;Ci(m),$t(18)}}else m.za=R[1],0<m.za-m.T&&37500>R[2]&&m.F&&m.v==0&&!m.C&&(m.C=zn(D(m.Za,m),6e3));if(1>=dn(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Ge(m,11)}else if((a.K||m.g==a)&&xi(m),!yt(d))for(R=m.Da.g.parse(d),d=0;d<R.length;d++){let ct=R[d];if(m.T=ct[0],ct=ct[1],m.G==2)if(ct[0]=="c"){m.K=ct[1],m.ia=ct[2];const Tt=ct[3];Tt!=null&&(m.la=Tt,m.j.info("VER="+m.la));const Lt=ct[4];Lt!=null&&(m.Aa=Lt,m.j.info("SVER="+m.Aa));const vn=ct[5];vn!=null&&typeof vn=="number"&&0<vn&&(v=1.5*vn,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const Dt=a.g;if(Dt){const Oi=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oi){var M=v.h;M.g||Oi.indexOf("spdy")==-1&&Oi.indexOf("quic")==-1&&Oi.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Et(M,M.h),M.h=null))}if(v.D){const xe=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;xe&&(v.ya=xe,X(v.I,v.D,xe))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var B=a;if(v.qa=ki(v,v.J?v.ia:null,v.W),B.K){Gn(v.h,B);var vt=B,Bt=v.L;Bt&&(vt.I=Bt),vt.B&&(wr(vt),wi(vt)),v.g=B}else Se(v);0<m.i.length&&gn(m)}else ct[0]!="stop"&&ct[0]!="close"||Ge(m,7);else m.G==3&&(ct[0]=="stop"||ct[0]=="close"?ct[0]=="stop"?Ge(m,7):bi(m):ct[0]!="noop"&&m.l&&m.l.ta(ct),m.v=0)}}Un(4)}catch{}}var Wn=class{constructor(a,d){this.g=a,this.map=d}};function Tr(a){this.l=a||10,p.PerformanceNavigationTiming?(a=p.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Er(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function dn(a){return a.h?1:a.g?a.g.size:0}function ht(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Et(a,d){a.g?a.g.add(d):a.h=d}function Gn(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Tr.prototype.cancel=function(){if(this.i=qe(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qe(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const m of a.g.values())d=d.concat(m.D);return d}return z(a.i)}function fn(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(_(a)){for(var d=[],m=a.length,v=0;v<m;v++)d.push(a[v]);return d}d=[],m=0;for(v in a)d[m++]=a[v];return d}function Ir(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(_(a)||typeof a=="string"){var d=[];a=a.length;for(var m=0;m<a;m++)d.push(m);return d}d=[],m=0;for(const v in a)d[m++]=v;return d}}}function et(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(_(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var m=Ir(a),v=fn(a),R=v.length,M=0;M<R;M++)d.call(void 0,v[M],m&&m[M],a)}var bt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pr(a,d){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var v=a[m].indexOf("="),R=null;if(0<=v){var M=a[m].substring(0,v);R=a[m].substring(v+1)}else M=a[m];d(M,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function me(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof me){this.h=a.h,Ti(this,a.j),this.o=a.o,this.g=a.g,He(this,a.s),this.l=a.l;var d=a.i,m=new Ze;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),Re(this,m),this.m=a.m}else a&&(d=String(a).match(bt))?(this.h=!1,Ti(this,d[1]||"",!0),this.o=Ae(d[2]||""),this.g=Ae(d[3]||"",!0),He(this,d[4]),this.l=Ae(d[5]||"",!0),Re(this,d[6]||"",!0),this.m=Ae(d[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}me.prototype.toString=function(){var a=[],d=this.j;d&&a.push(be(d,pn,!0),":");var m=this.g;return(m||d=="file")&&(a.push("//"),(d=this.o)&&a.push(be(d,pn,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(be(m,m.charAt(0)=="/"?Sr:br,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",be(m,Cr)),a.join("")};function kt(a){return new me(a)}function Ti(a,d,m){a.j=m?Ae(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function He(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Re(a,d,m){d instanceof Ze?(a.i=d,ge(a.i,a.h)):(m||(d=be(d,Ei)),a.i=new Ze(d,a.h))}function X(a,d,m){a.i.set(d,m)}function _e(a){return X(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ae(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function be(a,d,m){return typeof a=="string"?(a=encodeURI(a).replace(d,Ar),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ar(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var pn=/[#\/\?@]/g,br=/[#\?:]/g,Sr=/[#\?]/g,Ei=/[#\?@]/g,Cr=/#/g;function Ze(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function ce(a){a.g||(a.g=new Map,a.h=0,a.i&&Pr(a.i,function(d,m){a.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}i=Ze.prototype,i.add=function(a,d){ce(this),this.i=null,a=G(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(d),this.h+=1,this};function Rr(a,d){ce(a),d=G(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Ii(a,d){return ce(a),d=G(a,d),a.g.has(d)}i.forEach=function(a,d){ce(this),this.g.forEach(function(m,v){m.forEach(function(R){a.call(d,R,v,this)},this)},this)},i.na=function(){ce(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let v=0;v<d.length;v++){const R=a[v];for(let M=0;M<R.length;M++)m.push(d[v])}return m},i.V=function(a){ce(this);let d=[];if(typeof a=="string")Ii(this,a)&&(d=d.concat(this.g.get(G(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)d=d.concat(a[m])}return d},i.set=function(a,d){return ce(this),this.i=null,a=G(this,a),Ii(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},i.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function ks(a,d,m){Rr(a,d),0<m.length&&(a.i=null,a.g.set(G(a,d),z(m)),a.h+=m.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var v=d[m];const M=encodeURIComponent(String(v)),B=this.V(v);for(v=0;v<B.length;v++){var R=M;B[v]!==""&&(R+="="+encodeURIComponent(String(B[v]))),a.push(R)}}return this.i=a.join("&")};function G(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function ge(a,d){d&&!a.j&&(ce(a),a.i=null,a.g.forEach(function(m,v){var R=v.toLowerCase();v!=R&&(Rr(this,v),ks(this,R,m))},a)),a.j=d}function wt(a,d){const m=new jn;if(p.Image){const v=new Image;v.onload=F(ve,m,"TestLoadImage: loaded",!0,d,v),v.onerror=F(ve,m,"TestLoadImage: error",!1,d,v),v.onabort=F(ve,m,"TestLoadImage: abort",!1,d,v),v.ontimeout=F(ve,m,"TestLoadImage: timeout",!1,d,v),p.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function Os(a,d){const m=new jn,v=new AbortController,R=setTimeout(()=>{v.abort(),ve(m,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(M=>{clearTimeout(R),M.ok?ve(m,"TestPingServer: ok",!0,d):ve(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(R),ve(m,"TestPingServer: error",!1,d)})}function ve(a,d,m,v,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),v(m)}catch{}}function Lr(){this.g=new Bn}function xr(a,d,m){const v=m||"";try{et(a,function(R,M){let B=R;y(R)&&(B=fi(R)),d.push(v+M+"="+encodeURIComponent(B))})}catch(R){throw d.push(v+"type="+encodeURIComponent("_badmap")),R}}function ye(a){this.l=a.Ub||null,this.j=a.eb||!1}q(ye,pr),ye.prototype.g=function(){return new mn(this.l,this.j)},ye.prototype.i=function(a){return function(){return a}}({});function mn(a,d){Ft.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(mn,Ft),i=mn.prototype,i.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,de(this)},i.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||p).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rt(this)),this.readyState=0},i.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,de(this)),this.g&&(this.readyState=3,de(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_n(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function _n(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}i.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Rt(this):de(this),this.readyState==3&&_n(this)}},i.Ra=function(a){this.g&&(this.response=this.responseText=a,Rt(this))},i.Qa=function(a){this.g&&(this.response=a,Rt(this))},i.ga=function(){this.g&&Rt(this)};function Rt(a){a.readyState=4,a.l=null,a.j=null,a.v=null,de(a)}i.setRequestHeader=function(a,d){this.u.append(a,d)},i.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=d.next();return a.join(`\r
`)};function de(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(mn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function kr(a){let d="";return Pt(a,function(m,v){d+=v,d+=":",d+=m,d+=`\r
`}),d}function Pi(a,d,m){t:{for(v in m){var v=!1;break t}v=!0}v||(m=kr(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):X(a,d,m))}function St(a){Ft.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(St,Ft);var Ms=/^https?$/i,Or=["POST","PUT"];i=St.prototype,i.Ha=function(a){this.J=a},i.ea=function(a,d,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vi.g(),this.v=this.o?Es(this.o):Es(vi),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(M){Ds(this,M);return}if(a=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var R in v)m.set(R,v[R]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const M of v.keys())m.set(M,v.get(M));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),R=p.FormData&&a instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Or,d,void 0))||v||R||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,B]of m)this.g.setRequestHeader(M,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{he(this),this.u=!0,this.g.send(a),this.u=!1}catch(M){Ds(this,M)}};function Ds(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Mr(a),Ai(a)}function Mr(a){a.A||(a.A=!0,Ht(a,"complete"),Ht(a,"error"))}i.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ht(this,"complete"),Ht(this,"abort"),Ai(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ai(this,!0)),St.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?ot(this):this.bb())},i.bb=function(){ot(this)};function ot(a){if(a.h&&typeof c<"u"&&(!a.v[1]||re(a)!=4||a.Z()!=2)){if(a.u&&re(a)==4)ws(a.Ea,0,a);else if(Ht(a,"readystatechange"),re(a)==4){a.h=!1;try{const B=a.Z();t:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break t;default:d=!1}var m;if(!(m=d)){var v;if(v=B===0){var R=String(a.D).match(bt)[1]||null;!R&&p.self&&p.self.location&&(R=p.self.location.protocol.slice(0,-1)),v=!Ms.test(R?R.toLowerCase():"")}m=v}if(m)Ht(a,"complete"),Ht(a,"success");else{a.m=6;try{var M=2<re(a)?a.g.statusText:""}catch{M=""}a.l=M+" ["+a.Z()+"]",Mr(a)}}finally{Ai(a)}}}}function Ai(a,d){if(a.g){he(a);const m=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Ht(a,"ready");try{m.onreadystatechange=v}catch{}}}function he(a){a.I&&(p.clearTimeout(a.I),a.I=null)}i.isActive=function(){return!!this.g};function re(a){return a.g?a.g.readyState:0}i.Z=function(){try{return 2<re(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),jo(d)}};function Dr(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function qo(a){const d={};a=(a.g&&2<=re(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(yt(a[v]))continue;var m=A(a[v]);const R=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=d[R]||[];d[R]=M,M.push(m)}S(d,function(v){return v.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function We(a,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||d}function Ns(a){this.Aa=0,this.i=[],this.j=new jn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=We("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=We("baseRetryDelayMs",5e3,a),this.cb=We("retryDelaySeedMs",1e4,a),this.Wa=We("forwardChannelMaxRetries",2,a),this.wa=We("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Tr(a&&a.concurrentRequestLimit),this.Da=new Lr,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ns.prototype,i.la=8,i.G=1,i.connect=function(a,d,m,v){$t(0),this.W=a,this.H=d||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=ki(this,null,this.W),gn(this)};function bi(a){if(Vs(a),a.G==3){var d=a.U++,m=kt(a.I);if(X(m,"SID",a.K),X(m,"RID",d),X(m,"TYPE","terminate"),Kn(a,m),d=new Pe(a,a.j,d),d.L=2,d.v=_e(kt(m)),m=!1,p.navigator&&p.navigator.sendBeacon)try{m=p.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&p.Image&&(new Image().src=d.v,m=!0),m||(d.g=Bs(d.j,null),d.g.ea(d.v)),d.F=Date.now(),wi(d)}Fs(a)}function Si(a){a.g&&(Ri(a),a.g.cancel(),a.g=null)}function Vs(a){Si(a),a.u&&(p.clearTimeout(a.u),a.u=null),xi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&p.clearTimeout(a.s),a.s=null)}function gn(a){if(!Er(a.h)&&!a.s){a.s=!0;var d=a.Ga;Ee||J(),Q||(Ee(),Q=!0),oi.add(d,a),a.B=0}}function Ho(a,d){return dn(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=zn(D(a.Ga,a,d),Fr(a,a.B)),a.B++,!0)}i.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new Pe(this,this.j,a);let M=this.o;if(this.S&&(M?(M=w(M),b(M,this.S)):M=this.S),this.m!==null||this.O||(R.H=M,M=null),this.P)t:{for(var d=0,m=0;m<this.i.length;m++){e:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break e}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=m;break t}if(d===4096||m===this.i.length-1){d=m+1;break t}}d=1e3}else d=1e3;d=Nr(this,R,d),m=kt(this.I),X(m,"RID",a),X(m,"CVER",22),this.D&&X(m,"X-HTTP-Session-Id",this.D),Kn(this,m),M&&(this.O?d="headers="+encodeURIComponent(String(kr(M)))+"&"+d:this.m&&Pi(m,this.m,M)),Et(this.h,R),this.Ua&&X(m,"TYPE","init"),this.P?(X(m,"$req",d),X(m,"SID","null"),R.T=!0,vr(R,m,null)):vr(R,m,d),this.G=2}}else this.G==3&&(a?fe(this,a):this.i.length==0||Er(this.h)||fe(this))};function fe(a,d){var m;d?m=d.l:m=a.U++;const v=kt(a.I);X(v,"SID",a.K),X(v,"RID",m),X(v,"AID",a.T),Kn(a,v),a.m&&a.o&&Pi(v,a.m,a.o),m=new Pe(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Nr(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Et(a.h,m),vr(m,v,d)}function Kn(a,d){a.H&&Pt(a.H,function(m,v){X(d,v,m)}),a.l&&et({},function(m,v){X(d,v,m)})}function Nr(a,d,m){m=Math.min(a.i.length,m);var v=a.l?D(a.l.Na,a.l,a):null;t:{var R=a.i;let M=-1;for(;;){const B=["count="+m];M==-1?0<m?(M=R[0].g,B.push("ofs="+M)):M=0:B.push("ofs="+M);let vt=!0;for(let Bt=0;Bt<m;Bt++){let ct=R[Bt].g;const Tt=R[Bt].map;if(ct-=M,0>ct)M=Math.max(0,R[Bt].g-100),vt=!1;else try{xr(Tt,B,"req"+ct+"_")}catch{v&&v(Tt)}}if(vt){v=B.join("&");break t}}}return a=a.i.splice(0,m),d.D=a,v}function Se(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Ee||J(),Q||(Ee(),Q=!0),oi.add(d,a),a.v=0}}function Ci(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=zn(D(a.Fa,a),Fr(a,a.v)),a.v++,!0)}i.Fa=function(){if(this.u=null,Li(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=zn(D(this.ab,this),a)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$t(10),Si(this),Li(this))};function Ri(a){a.A!=null&&(p.clearTimeout(a.A),a.A=null)}function Li(a){a.g=new Pe(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=kt(a.qa);X(d,"RID","rpc"),X(d,"SID",a.K),X(d,"AID",a.T),X(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&X(d,"TO",a.ja),X(d,"TYPE","xmlhttp"),Kn(a,d),a.m&&a.o&&Pi(d,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=_e(kt(d)),m.m=null,m.P=!0,yr(m,a)}i.Za=function(){this.C!=null&&(this.C=null,Si(this),Ci(this),$t(19))};function xi(a){a.C!=null&&(p.clearTimeout(a.C),a.C=null)}function Vr(a,d){var m=null;if(a.g==d){xi(a),Ri(a),a.g=null;var v=2}else if(ht(a.h,d))m=d.D,Gn(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var R=a.B;v=mi(),Ht(v,new As(v,m)),gn(a)}else Se(a);else if(R=d.s,R==3||R==0&&0<d.X||!(v==1&&Ho(a,d)||v==2&&Ci(a)))switch(m&&0<m.length&&(d=a.h,d.i=d.i.concat(m)),R){case 1:Ge(a,5);break;case 4:Ge(a,10);break;case 3:Ge(a,6);break;default:Ge(a,2)}}}function Fr(a,d){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*d}function Ge(a,d){if(a.j.info("Error code "+d),d==2){var m=D(a.fb,a),v=a.Xa;const R=!v;v=new me(v||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Ti(v,"https"),_e(v),R?wt(v.toString(),m):Os(v.toString(),m)}else $t(2);a.G=0,a.l&&a.l.sa(d),Fs(a),Vs(a)}i.fb=function(a){a?(this.j.info("Successfully pinged google.com"),$t(2)):(this.j.info("Failed to ping google.com"),$t(1))};function Fs(a){if(a.G=0,a.ka=[],a.l){const d=qe(a.h);(d.length!=0||a.i.length!=0)&&(H(a.ka,d),H(a.ka,a.i),a.h.i.length=0,z(a.i),a.i.length=0),a.l.ra()}}function ki(a,d,m){var v=m instanceof me?kt(m):new me(m);if(v.g!="")d&&(v.g=d+"."+v.g),He(v,v.s);else{var R=p.location;v=R.protocol,d=d?d+"."+R.hostname:R.hostname,R=+R.port;var M=new me(null);v&&Ti(M,v),d&&(M.g=d),R&&He(M,R),m&&(M.l=m),v=M}return m=a.D,d=a.ya,m&&d&&X(v,m,d),X(v,"VER",a.la),Kn(a,v),v}function Bs(a,d,m){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new St(new ye({eb:m})):new St(a.pa),d.Ha(a.J),d}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Br(){}i=Br.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function $n(){}$n.prototype.g=function(a,d){return new Zt(a,d)};function Zt(a,d){Ft.call(this),this.g=new Ns(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!yt(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!yt(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new we(this)}q(Zt,Ft),Zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Zt.prototype.close=function(){bi(this.g)},Zt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=fi(a),a=m);d.i.push(new Wn(d.Ya++,a)),d.G==3&&gn(d)},Zt.prototype.N=function(){this.g.l=null,delete this.j,bi(this.g),delete this.g,Zt.aa.N.call(this)};function Le(a){pi.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){t:{for(const m in d){a=m;break t}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}q(Le,pi);function Us(){_r.call(this),this.status=1}q(Us,_r);function we(a){this.g=a}q(we,Br),we.prototype.ua=function(){Ht(this.g,"a")},we.prototype.ta=function(a){Ht(this.g,new Le(a))},we.prototype.sa=function(a){Ht(this.g,new Us)},we.prototype.ra=function(){Ht(this.g,"b")},$n.prototype.createWebChannel=$n.prototype.g,Zt.prototype.send=Zt.prototype.o,Zt.prototype.open=Zt.prototype.m,Zt.prototype.close=Zt.prototype.close,Wl=function(){return new $n},Zl=function(){return mi()},Hl=Ue,_a={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qn.NO_ERROR=0,qn.TIMEOUT=8,qn.HTTP_ERROR=6,ao=qn,gi.COMPLETE="complete",ql=gi,mr.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",Ft.prototype.listen=Ft.prototype.K,Zr=mr,St.prototype.listenOnce=St.prototype.L,St.prototype.getLastError=St.prototype.Ka,St.prototype.getLastErrorCode=St.prototype.Ba,St.prototype.getStatus=St.prototype.Z,St.prototype.getResponseJson=St.prototype.Oa,St.prototype.getResponseText=St.prototype.oa,St.prototype.send=St.prototype.ea,St.prototype.setWithCredentials=St.prototype.Ha,jl=St}).apply(typeof Xs<"u"?Xs:typeof self<"u"?self:typeof window<"u"?window:{});const lu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}te.UNAUTHENTICATED=new te(null),te.GOOGLE_CREDENTIALS=new te("google-credentials-uid"),te.FIRST_PARTY=new te("first-party-uid"),te.MOCK_USER=new te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new Ma("@firebase/firestore");function Hr(){return ni.logLevel}function Z(i,...t){if(ni.logLevel<=ut.DEBUG){const e=t.map(Za);ni.debug(`Firestore (${sr}): ${i}`,...e)}}function on(i,...t){if(ni.logLevel<=ut.ERROR){const e=t.map(Za);ni.error(`Firestore (${sr}): ${i}`,...e)}}function Yi(i,...t){if(ni.logLevel<=ut.WARN){const e=t.map(Za);ni.warn(`Firestore (${sr}): ${i}`,...e)}}function Za(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(i="Unexpected state"){const t=`FIRESTORE (${sr}) INTERNAL ASSERTION FAILED: `+i;throw on(t),new Error(t)}function Mt(i,t){i||it()}function ft(i,t){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends an{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class $m{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(te.UNAUTHENTICATED))}shutdown(){}}class Qm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Ym{constructor(t){this.t=t,this.currentUser=te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Mt(this.o===void 0);let r=this.i;const o=_=>this.i!==r?(r=this.i,e(_)):Promise.resolve();let u=new Zi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Zi,t.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const _=u;t.enqueueRetryable(async()=>{await _.promise,await o(this.currentUser)})},p=_=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(_=>p(_)),setTimeout(()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?p(_):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Zi)}},0),c()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Mt(typeof r.accessToken=="string"),new Gl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Mt(t===null||typeof t=="string"),new te(t)}}class Jm{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=te.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Xm{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Jm(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class t_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class e_{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){Mt(this.o===void 0);const r=u=>{u.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const c=u.token!==this.R;return this.R=u.token,Z("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?e(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>r(u))};const o=u=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Mt(typeof e.token=="string"),this.R=e.token,new t_(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<i;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const o=n_(40);for(let u=0;u<o.length;++u)r.length<20&&o[u]<e&&(r+=t.charAt(o[u]%t.length))}return r}}function _t(i,t){return i<t?-1:i>t?1:0}function Ji(i,t,e){return i.length===t.length&&i.every((r,o)=>e(r,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new $(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new $(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new $(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new $(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return le.fromMillis(Date.now())}static fromDate(t){return le.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new le(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_t(this.nanoseconds,t.nanoseconds):_t(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new nt(t)}static min(){return new nt(new le(0,0))}static max(){return new nt(new le(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t,e,r){e===void 0?e=0:e>t.length&&it(),r===void 0?r=t.length-e:r>t.length-e&&it(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return is.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof is?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let o=0;o<r;o++){const u=t.get(o),c=e.get(o);if(u<c)return-1;if(u>c)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ot extends is{construct(t,e,r){return new Ot(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new $(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(o=>o.length>0))}return new Ot(e)}static emptyPath(){return new Ot([])}}const r_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oe extends is{construct(t,e,r){return new oe(t,e,r)}static isValidIdentifier(t){return r_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new oe(["__name__"])}static fromServerFormat(t){const e=[];let r="",o=0;const u=()=>{if(r.length===0)throw new $(U.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let c=!1;for(;o<t.length;){const p=t[o];if(p==="\\"){if(o+1===t.length)throw new $(U.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const _=t[o+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new $(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=_,o+=2}else p==="`"?(c=!c,o++):p!=="."||c?(r+=p,o++):(u(),o++)}if(u(),c)throw new $(U.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new oe(e)}static emptyPath(){return new oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.path=t}static fromPath(t){return new Y(Ot.fromString(t))}static fromName(t){return new Y(Ot.fromString(t).popFirst(5))}static empty(){return new Y(Ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ot.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Ot.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Y(new Ot(t.slice()))}}function s_(i,t){const e=i.toTimestamp().seconds,r=i.toTimestamp().nanoseconds+1,o=nt.fromTimestamp(r===1e9?new le(e+1,0):new le(e,r));return new kn(o,Y.empty(),t)}function o_(i){return new kn(i.readTime,i.key,-1)}class kn{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new kn(nt.min(),Y.empty(),-1)}static max(){return new kn(nt.max(),Y.empty(),-1)}}function a_(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=Y.comparator(i.documentKey,t.documentKey),e!==0?e:_t(i.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class u_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(i){if(i.code!==U.FAILED_PRECONDITION||i.message!==h_)throw i;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&it(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((r,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(r,o)},this.catchCallback=u=>{this.wrapFailure(e,u).next(r,o)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,r)=>{e(t)})}static reject(t){return new V((e,r)=>{r(t)})}static waitFor(t){return new V((e,r)=>{let o=0,u=0,c=!1;t.forEach(p=>{++o,p.next(()=>{++u,c&&u===o&&e()},_=>r(_))}),c=!0,u===o&&e()})}static or(t){let e=V.resolve(!1);for(const r of t)e=e.next(o=>o?V.resolve(o):r());return e}static forEach(t,e){const r=[];return t.forEach((o,u)=>{r.push(e.call(this,o,u))}),this.waitFor(r)}static mapArray(t,e){return new V((r,o)=>{const u=t.length,c=new Array(u);let p=0;for(let _=0;_<u;_++){const y=_;e(t[y]).next(E=>{c[y]=E,++p,p===u&&r(c)},E=>o(E))}})}static doWhile(t,e){return new V((r,o)=>{const u=()=>{t()===!0?e().next(()=>{u()},o):r()};u()})}}function l_(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ds(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ga.oe=-1;function ko(i){return i==null}function ga(i){return i===0&&1/i==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function Oo(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function c_(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e){this.comparator=t,this.root=e||Qt.EMPTY}insert(t,e){return new Vt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Qt.BLACK,null,null))}remove(t){return new Vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Qt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(t,r.key);if(o===0)return e+r.left.size;o<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new to(this.root,t,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new to(this.root,t,this.comparator,!0)}}class to{constructor(t,e,r,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=e?r(t.key,e):1,e&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Qt{constructor(t,e,r,o,u){this.key=t,this.value=e,this.color=r??Qt.RED,this.left=o??Qt.EMPTY,this.right=u??Qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,o,u){return new Qt(t??this.key,e??this.value,r??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let o=this;const u=r(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,e,r),null):u===0?o.copy(null,e,null,null,null):o.copy(null,null,null,null,o.right.insert(t,e,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Qt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,o=this;if(e(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,e),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),e(t,o.key)===0){if(o.right.isEmpty())return Qt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,e))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw it();const t=this.left.check();if(t!==this.right.check())throw it();return t+(this.isRed()?0:1)}}Qt.EMPTY=null,Qt.RED=!0,Qt.BLACK=!1;Qt.EMPTY=new class{constructor(){this.size=0}get key(){throw it()}get value(){throw it()}get color(){throw it()}get left(){throw it()}get right(){throw it()}copy(t,e,r,o,u){return this}insert(t,e,r){return new Qt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this.comparator=t,this.data=new Vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,t[1])>=0)return;e(o.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new du(this.data.getIterator())}getIteratorFrom(t){return new du(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Yt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const o=e.getNext().key,u=r.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Yt(this.comparator);return e.data=t,e}}class du{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t){this.fields=t,t.sort(oe.comparator)}static empty(){return new An([])}unionWith(t){let e=new Yt(oe.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new An(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ji(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Kl("Invalid base64 string: "+u):u}}(t);return new Jt(e)}static fromUint8Array(t){const e=function(o){let u="";for(let c=0;c<o.length;++c)u+=String.fromCharCode(o[c]);return u}(t);return new Jt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let o=0;o<e.length;o++)r[o]=e.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _t(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const d_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(i){if(Mt(!!i),typeof i=="string"){let t=0;const e=d_.exec(i);if(Mt(!!e),e[1]){let o=e[1];o=(o+"000000000").substr(0,9),t=Number(o)}const r=new Date(i);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Nt(i.seconds),nanos:Nt(i.nanos)}}function Nt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function ii(i){return typeof i=="string"?Jt.fromBase64String(i):Jt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(i){var t,e;return((e=(((t=i==null?void 0:i.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function $a(i){const t=i.mapValue.fields.__previous_value__;return Ka(t)?$a(t):t}function rs(i){const t=On(i.mapValue.fields.__local_write_time__.timestampValue);return new le(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(t,e,r,o,u,c,p,_,y){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=o,this.ssl=u,this.forceLongPolling=c,this.autoDetectLongPolling=p,this.longPollingOptions=_,this.useFetchStreams=y}}class ss{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ss("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ss&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo={mapValue:{}};function ri(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Ka(i)?4:m_(i)?9007199254740991:p_(i)?10:11:it()}function Ve(i,t){if(i===t)return!0;const e=ri(i);if(e!==ri(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return rs(i).isEqual(rs(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const c=On(o.timestampValue),p=On(u.timestampValue);return c.seconds===p.seconds&&c.nanos===p.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(o,u){return ii(o.bytesValue).isEqual(ii(u.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(o,u){return Nt(o.geoPointValue.latitude)===Nt(u.geoPointValue.latitude)&&Nt(o.geoPointValue.longitude)===Nt(u.geoPointValue.longitude)}(i,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return Nt(o.integerValue)===Nt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const c=Nt(o.doubleValue),p=Nt(u.doubleValue);return c===p?ga(c)===ga(p):isNaN(c)&&isNaN(p)}return!1}(i,t);case 9:return Ji(i.arrayValue.values||[],t.arrayValue.values||[],Ve);case 10:case 11:return function(o,u){const c=o.mapValue.fields||{},p=u.mapValue.fields||{};if(cu(c)!==cu(p))return!1;for(const _ in c)if(c.hasOwnProperty(_)&&(p[_]===void 0||!Ve(c[_],p[_])))return!1;return!0}(i,t);default:return it()}}function os(i,t){return(i.values||[]).find(e=>Ve(e,t))!==void 0}function Xi(i,t){if(i===t)return 0;const e=ri(i),r=ri(t);if(e!==r)return _t(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return _t(i.booleanValue,t.booleanValue);case 2:return function(u,c){const p=Nt(u.integerValue||u.doubleValue),_=Nt(c.integerValue||c.doubleValue);return p<_?-1:p>_?1:p===_?0:isNaN(p)?isNaN(_)?0:-1:1}(i,t);case 3:return fu(i.timestampValue,t.timestampValue);case 4:return fu(rs(i),rs(t));case 5:return _t(i.stringValue,t.stringValue);case 6:return function(u,c){const p=ii(u),_=ii(c);return p.compareTo(_)}(i.bytesValue,t.bytesValue);case 7:return function(u,c){const p=u.split("/"),_=c.split("/");for(let y=0;y<p.length&&y<_.length;y++){const E=_t(p[y],_[y]);if(E!==0)return E}return _t(p.length,_.length)}(i.referenceValue,t.referenceValue);case 8:return function(u,c){const p=_t(Nt(u.latitude),Nt(c.latitude));return p!==0?p:_t(Nt(u.longitude),Nt(c.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return pu(i.arrayValue,t.arrayValue);case 10:return function(u,c){var p,_,y,E;const x=u.fields||{},D=c.fields||{},F=(p=x.value)===null||p===void 0?void 0:p.arrayValue,q=(_=D.value)===null||_===void 0?void 0:_.arrayValue,z=_t(((y=F==null?void 0:F.values)===null||y===void 0?void 0:y.length)||0,((E=q==null?void 0:q.values)===null||E===void 0?void 0:E.length)||0);return z!==0?z:pu(F,q)}(i.mapValue,t.mapValue);case 11:return function(u,c){if(u===eo.mapValue&&c===eo.mapValue)return 0;if(u===eo.mapValue)return 1;if(c===eo.mapValue)return-1;const p=u.fields||{},_=Object.keys(p),y=c.fields||{},E=Object.keys(y);_.sort(),E.sort();for(let x=0;x<_.length&&x<E.length;++x){const D=_t(_[x],E[x]);if(D!==0)return D;const F=Xi(p[_[x]],y[E[x]]);if(F!==0)return F}return _t(_.length,E.length)}(i.mapValue,t.mapValue);default:throw it()}}function fu(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return _t(i,t);const e=On(i),r=On(t),o=_t(e.seconds,r.seconds);return o!==0?o:_t(e.nanos,r.nanos)}function pu(i,t){const e=i.values||[],r=t.values||[];for(let o=0;o<e.length&&o<r.length;++o){const u=Xi(e[o],r[o]);if(u)return u}return _t(e.length,r.length)}function tr(i){return va(i)}function va(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const r=On(e);return`time(${r.seconds},${r.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return ii(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return Y.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let r="[",o=!0;for(const u of e.values||[])o?o=!1:r+=",",r+=va(u);return r+"]"}(i.arrayValue):"mapValue"in i?function(e){const r=Object.keys(e.fields||{}).sort();let o="{",u=!0;for(const c of r)u?u=!1:o+=",",o+=`${c}:${va(e.fields[c])}`;return o+"}"}(i.mapValue):it()}function ya(i){return!!i&&"integerValue"in i}function Qa(i){return!!i&&"arrayValue"in i}function mu(i){return!!i&&"nullValue"in i}function _u(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function ia(i){return!!i&&"mapValue"in i}function p_(i){var t,e;return((e=(((t=i==null?void 0:i.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Qr(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const t={mapValue:{fields:{}}};return Oo(i.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Qr(r)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Qr(i.arrayValue.values[e]);return t}return Object.assign({},i)}function m_(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this.value=t}static empty(){return new Oe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ia(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qr(e)}setAll(t){let e=oe.emptyPath(),r={},o=[];t.forEach((c,p)=>{if(!e.isImmediateParentOf(p)){const _=this.getFieldsMap(e);this.applyChanges(_,r,o),r={},o=[],e=p.popLast()}c?r[p.lastSegment()]=Qr(c):o.push(p.lastSegment())});const u=this.getFieldsMap(e);this.applyChanges(u,r,o)}delete(t){const e=this.field(t.popLast());ia(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ve(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let o=e.mapValue.fields[t.get(r)];ia(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=o),e=o}return e.mapValue.fields}applyChanges(t,e,r){Oo(e,(o,u)=>t[o]=u);for(const o of r)delete t[o]}clone(){return new Oe(Qr(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t,e,r,o,u,c,p){this.key=t,this.documentType=e,this.version=r,this.readTime=o,this.createTime=u,this.data=c,this.documentState=p}static newInvalidDocument(t){return new ee(t,0,nt.min(),nt.min(),nt.min(),Oe.empty(),0)}static newFoundDocument(t,e,r,o){return new ee(t,1,e,nt.min(),r,o,0)}static newNoDocument(t,e){return new ee(t,2,e,nt.min(),nt.min(),Oe.empty(),0)}static newUnknownDocument(t,e){return new ee(t,3,e,nt.min(),nt.min(),Oe.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(nt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Oe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ee&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t,e){this.position=t,this.inclusive=e}}function gu(i,t,e){let r=0;for(let o=0;o<i.position.length;o++){const u=t[o],c=i.position[o];if(u.field.isKeyField()?r=Y.comparator(Y.fromName(c.referenceValue),e.key):r=Xi(c,e.data.field(u.field)),u.dir==="desc"&&(r*=-1),r!==0)break}return r}function vu(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!Ve(i.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t,e="asc"){this.field=t,this.dir=e}}function __(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{}class qt extends $l{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new v_(t,e,r):e==="array-contains"?new T_(t,r):e==="in"?new E_(t,r):e==="not-in"?new I_(t,r):e==="array-contains-any"?new P_(t,r):new qt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new y_(t,r):new w_(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Xi(e,this.value)):e!==null&&ri(this.value)===ri(e)&&this.matchesComparison(Xi(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return it()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fe extends $l{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Fe(t,e)}matches(t){return Ql(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ql(i){return i.op==="and"}function Yl(i){return g_(i)&&Ql(i)}function g_(i){for(const t of i.filters)if(t instanceof Fe)return!1;return!0}function wa(i){if(i instanceof qt)return i.field.canonicalString()+i.op.toString()+tr(i.value);if(Yl(i))return i.filters.map(t=>wa(t)).join(",");{const t=i.filters.map(e=>wa(e)).join(",");return`${i.op}(${t})`}}function Jl(i,t){return i instanceof qt?function(r,o){return o instanceof qt&&r.op===o.op&&r.field.isEqual(o.field)&&Ve(r.value,o.value)}(i,t):i instanceof Fe?function(r,o){return o instanceof Fe&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce((u,c,p)=>u&&Jl(c,o.filters[p]),!0):!1}(i,t):void it()}function Xl(i){return i instanceof qt?function(e){return`${e.field.canonicalString()} ${e.op} ${tr(e.value)}`}(i):i instanceof Fe?function(e){return e.op.toString()+" {"+e.getFilters().map(Xl).join(" ,")+"}"}(i):"Filter"}class v_ extends qt{constructor(t,e,r){super(t,e,r),this.key=Y.fromName(r.referenceValue)}matches(t){const e=Y.comparator(t.key,this.key);return this.matchesComparison(e)}}class y_ extends qt{constructor(t,e){super(t,"in",e),this.keys=tc("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class w_ extends qt{constructor(t,e){super(t,"not-in",e),this.keys=tc("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function tc(i,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>Y.fromName(r.referenceValue))}class T_ extends qt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qa(e)&&os(e.arrayValue,this.value)}}class E_ extends qt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&os(this.value.arrayValue,e)}}class I_ extends qt{constructor(t,e){super(t,"not-in",e)}matches(t){if(os(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!os(this.value.arrayValue,e)}}class P_ extends qt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qa(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>os(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(t,e=null,r=[],o=[],u=null,c=null,p=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=o,this.limit=u,this.startAt=c,this.endAt=p,this.ue=null}}function yu(i,t=null,e=[],r=[],o=null,u=null,c=null){return new A_(i,t,e,r,o,u,c)}function Ya(i){const t=ft(i);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>wa(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(u){return u.field.canonicalString()+u.dir}(r)).join(","),ko(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>tr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>tr(r)).join(",")),t.ue=e}return t.ue}function Ja(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!__(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!Jl(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!vu(i.startAt,t.startAt)&&vu(i.endAt,t.endAt)}function Ta(i){return Y.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t,e=null,r=[],o=[],u=null,c="F",p=null,_=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=o,this.limit=u,this.limitType=c,this.startAt=p,this.endAt=_,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function b_(i,t,e,r,o,u,c,p){return new Mo(i,t,e,r,o,u,c,p)}function Xa(i){return new Mo(i)}function wu(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function S_(i){return i.collectionGroup!==null}function Yr(i){const t=ft(i);if(t.ce===null){t.ce=[];const e=new Set;for(const u of t.explicitOrderBy)t.ce.push(u),e.add(u.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(c){let p=new Yt(oe.comparator);return c.filters.forEach(_=>{_.getFlattenedFilters().forEach(y=>{y.isInequality()&&(p=p.add(y.field))})}),p})(t).forEach(u=>{e.has(u.canonicalString())||u.isKeyField()||t.ce.push(new Eo(u,r))}),e.has(oe.keyField().canonicalString())||t.ce.push(new Eo(oe.keyField(),r))}return t.ce}function Ne(i){const t=ft(i);return t.le||(t.le=C_(t,Yr(i))),t.le}function C_(i,t){if(i.limitType==="F")return yu(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Eo(o.field,u)});const e=i.endAt?new To(i.endAt.position,i.endAt.inclusive):null,r=i.startAt?new To(i.startAt.position,i.startAt.inclusive):null;return yu(i.path,i.collectionGroup,t,i.filters,i.limit,e,r)}}function Ea(i,t,e){return new Mo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function Do(i,t){return Ja(Ne(i),Ne(t))&&i.limitType===t.limitType}function ec(i){return`${Ya(Ne(i))}|lt:${i.limitType}`}function Fi(i){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(o=>Xl(o)).join(", ")}]`),ko(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(o=>tr(o)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(o=>tr(o)).join(",")),`Target(${r})`}(Ne(i))}; limitType=${i.limitType})`}function No(i,t){return t.isFoundDocument()&&function(r,o){const u=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(u):Y.isDocumentKey(r.path)?r.path.isEqual(u):r.path.isImmediateParentOf(u)}(i,t)&&function(r,o){for(const u of Yr(r))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,t)&&function(r,o){for(const u of r.filters)if(!u.matches(o))return!1;return!0}(i,t)&&function(r,o){return!(r.startAt&&!function(c,p,_){const y=gu(c,p,_);return c.inclusive?y<=0:y<0}(r.startAt,Yr(r),o)||r.endAt&&!function(c,p,_){const y=gu(c,p,_);return c.inclusive?y>=0:y>0}(r.endAt,Yr(r),o))}(i,t)}function R_(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function nc(i){return(t,e)=>{let r=!1;for(const o of Yr(i)){const u=L_(o,t,e);if(u!==0)return u;r=r||o.field.isKeyField()}return 0}}function L_(i,t,e){const r=i.field.isKeyField()?Y.comparator(t.key,e.key):function(u,c,p){const _=c.data.field(u),y=p.data.field(u);return _!==null&&y!==null?Xi(_,y):it()}(i.field,t,e);switch(i.dir){case"asc":return r;case"desc":return-1*r;default:return it()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[o,u]of r)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),o=this.inner[r];if(o===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,e]);o.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],t))return r.length===1?delete this.inner[e]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Oo(this.inner,(e,r)=>{for(const[o,u]of r)t(o,u)})}isEmpty(){return c_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=new Vt(Y.comparator);function Mn(){return x_}const ic=new Vt(Y.comparator);function Wr(...i){let t=ic;for(const e of i)t=t.insert(e.key,e);return t}function k_(i){let t=ic;return i.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Yn(){return Jr()}function rc(){return Jr()}function Jr(){return new or(i=>i.toString(),(i,t)=>i.isEqual(t))}const O_=new Yt(Y.comparator);function pt(...i){let t=O_;for(const e of i)t=t.add(e);return t}const M_=new Yt(_t);function D_(){return M_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ga(t)?"-0":t}}function V_(i){return{integerValue:""+i}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this._=void 0}}function F_(i,t,e){return i instanceof Ia?function(o,u){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Ka(u)&&(u=$a(u)),u&&(c.fields.__previous_value__=u),{mapValue:c}}(e,t):i instanceof Io?sc(i,t):i instanceof Po?oc(i,t):function(o,u){const c=U_(o,u),p=Tu(c)+Tu(o.Pe);return ya(c)&&ya(o.Pe)?V_(p):N_(o.serializer,p)}(i,t)}function B_(i,t,e){return i instanceof Io?sc(i,t):i instanceof Po?oc(i,t):e}function U_(i,t){return i instanceof Pa?function(r){return ya(r)||function(u){return!!u&&"doubleValue"in u}(r)}(t)?t:{integerValue:0}:null}class Ia extends Vo{}class Io extends Vo{constructor(t){super(),this.elements=t}}function sc(i,t){const e=ac(t);for(const r of i.elements)e.some(o=>Ve(o,r))||e.push(r);return{arrayValue:{values:e}}}class Po extends Vo{constructor(t){super(),this.elements=t}}function oc(i,t){let e=ac(t);for(const r of i.elements)e=e.filter(o=>!Ve(o,r));return{arrayValue:{values:e}}}class Pa extends Vo{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Tu(i){return Nt(i.integerValue||i.doubleValue)}function ac(i){return Qa(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function z_(i,t){return i.field.isEqual(t.field)&&function(r,o){return r instanceof Io&&o instanceof Io||r instanceof Po&&o instanceof Po?Ji(r.elements,o.elements,Ve):r instanceof Pa&&o instanceof Pa?Ve(r.Pe,o.Pe):r instanceof Ia&&o instanceof Ia}(i.transform,t.transform)}class Xn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Xn}static exists(t){return new Xn(void 0,t)}static updateTime(t){return new Xn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ho(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class th{}function hc(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new q_(i.key,Xn.none()):new eh(i.key,i.data,Xn.none());{const e=i.data,r=Oe.empty();let o=new Yt(oe.comparator);for(let u of t.fields)if(!o.has(u)){let c=e.field(u);c===null&&u.length>1&&(u=u.popLast(),c=e.field(u)),c===null?r.delete(u):r.set(u,c),o=o.add(u)}return new Fo(i.key,r,new An(o.toArray()),Xn.none())}}function j_(i,t,e){i instanceof eh?function(o,u,c){const p=o.value.clone(),_=Iu(o.fieldTransforms,u,c.transformResults);p.setAll(_),u.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(i,t,e):i instanceof Fo?function(o,u,c){if(!ho(o.precondition,u))return void u.convertToUnknownDocument(c.version);const p=Iu(o.fieldTransforms,u,c.transformResults),_=u.data;_.setAll(uc(o)),_.setAll(p),u.convertToFoundDocument(c.version,_).setHasCommittedMutations()}(i,t,e):function(o,u,c){u.convertToNoDocument(c.version).setHasCommittedMutations()}(0,t,e)}function Xr(i,t,e,r){return i instanceof eh?function(u,c,p,_){if(!ho(u.precondition,c))return p;const y=u.value.clone(),E=Pu(u.fieldTransforms,_,c);return y.setAll(E),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null}(i,t,e,r):i instanceof Fo?function(u,c,p,_){if(!ho(u.precondition,c))return p;const y=Pu(u.fieldTransforms,_,c),E=c.data;return E.setAll(uc(u)),E.setAll(y),c.convertToFoundDocument(c.version,E).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(x=>x.field))}(i,t,e,r):function(u,c,p){return ho(u.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):p}(i,t,e)}function Eu(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&Ji(r,o,(u,c)=>z_(u,c))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class eh extends th{constructor(t,e,r,o=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Fo extends th{constructor(t,e,r,o,u=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function uc(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=i.data.field(e);t.set(e,r)}}),t}function Iu(i,t,e){const r=new Map;Mt(i.length===e.length);for(let o=0;o<e.length;o++){const u=i[o],c=u.transform,p=t.data.field(u.field);r.set(u.field,B_(c,p,e[o]))}return r}function Pu(i,t,e){const r=new Map;for(const o of i){const u=o.transform,c=e.data.field(o.field);r.set(o.field,F_(u,c,t))}return r}class q_ extends th{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(t,e,r,o){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&j_(u,t,r[o])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Xr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Xr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=rc();return this.mutations.forEach(o=>{const u=t.get(o.key),c=u.overlayedDocument;let p=this.applyToLocalView(c,u.mutatedFields);p=e.has(o.key)?null:p;const _=hc(c,p);_!==null&&r.set(o.key,_),c.isValidDocument()||c.convertToNoDocument(nt.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),pt())}isEqual(t){return this.batchId===t.batchId&&Ji(this.mutations,t.mutations,(e,r)=>Eu(e,r))&&Ji(this.baseMutations,t.baseMutations,(e,r)=>Eu(e,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt,dt;function lc(i){if(i===void 0)return on("GRPC error has no .code"),U.UNKNOWN;switch(i){case zt.OK:return U.OK;case zt.CANCELLED:return U.CANCELLED;case zt.UNKNOWN:return U.UNKNOWN;case zt.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case zt.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case zt.INTERNAL:return U.INTERNAL;case zt.UNAVAILABLE:return U.UNAVAILABLE;case zt.UNAUTHENTICATED:return U.UNAUTHENTICATED;case zt.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case zt.NOT_FOUND:return U.NOT_FOUND;case zt.ALREADY_EXISTS:return U.ALREADY_EXISTS;case zt.PERMISSION_DENIED:return U.PERMISSION_DENIED;case zt.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case zt.ABORTED:return U.ABORTED;case zt.OUT_OF_RANGE:return U.OUT_OF_RANGE;case zt.UNIMPLEMENTED:return U.UNIMPLEMENTED;case zt.DATA_LOSS:return U.DATA_LOSS;default:return it()}}(dt=zt||(zt={}))[dt.OK=0]="OK",dt[dt.CANCELLED=1]="CANCELLED",dt[dt.UNKNOWN=2]="UNKNOWN",dt[dt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",dt[dt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",dt[dt.NOT_FOUND=5]="NOT_FOUND",dt[dt.ALREADY_EXISTS=6]="ALREADY_EXISTS",dt[dt.PERMISSION_DENIED=7]="PERMISSION_DENIED",dt[dt.UNAUTHENTICATED=16]="UNAUTHENTICATED",dt[dt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",dt[dt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",dt[dt.ABORTED=10]="ABORTED",dt[dt.OUT_OF_RANGE=11]="OUT_OF_RANGE",dt[dt.UNIMPLEMENTED=12]="UNIMPLEMENTED",dt[dt.INTERNAL=13]="INTERNAL",dt[dt.UNAVAILABLE=14]="UNAVAILABLE",dt[dt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=new Jn([4294967295,4294967295],0);function Au(i){const t=G_().encode(i),e=new zl;return e.update(t),new Uint8Array(e.digest())}function bu(i){const t=new DataView(i.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Jn([e,r],0),new Jn([o,u],0)]}class nh{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Gr(`Invalid padding: ${e}`);if(r<0)throw new Gr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Gr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Gr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Jn.fromNumber(this.Ie)}Ee(t,e,r){let o=t.add(e.multiply(Jn.fromNumber(r)));return o.compare(K_)===1&&(o=new Jn([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Au(t),[r,o]=bu(e);for(let u=0;u<this.hashCount;u++){const c=this.Ee(r,o,u);if(!this.de(c))return!1}return!0}static create(t,e,r){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),c=new nh(u,o,e);return r.forEach(p=>c.insert(p)),c}insert(t){if(this.Ie===0)return;const e=Au(t),[r,o]=bu(e);for(let u=0;u<this.hashCount;u++){const c=this.Ee(r,o,u);this.Ae(c)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Gr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t,e,r,o,u){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const o=new Map;return o.set(t,fs.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Bo(nt.min(),o,new Vt(_t),Mn(),pt())}}class fs{constructor(t,e,r,o,u){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new fs(r,e,pt(),pt(),pt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,e,r,o){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=o}}class cc{constructor(t,e){this.targetId=t,this.me=e}}class dc{constructor(t,e,r=Jt.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=o}}class Su{constructor(){this.fe=0,this.ge=Ru(),this.pe=Jt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=pt(),e=pt(),r=pt();return this.ge.forEach((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:e=e.add(o);break;case 1:r=r.add(o);break;default:it()}}),new fs(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Ru()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Mt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class $_{constructor(t){this.Le=t,this.Be=new Map,this.ke=Mn(),this.qe=Cu(),this.Qe=new Vt(_t)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:it()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,o)=>{this.ze(o)&&e(o)})}He(t){const e=t.targetId,r=t.me.count,o=this.Je(e);if(o){const u=o.target;if(Ta(u))if(r===0){const c=new Y(u.path);this.Ue(e,c,ee.newNoDocument(c,nt.min()))}else Mt(r===1);else{const c=this.Ye(e);if(c!==r){const p=this.Ze(t),_=p?this.Xe(p,t,c):1;if(_!==0){this.je(e);const y=_===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,y)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:u=0}=e;let c,p;try{c=ii(r).toUint8Array()}catch(_){if(_ instanceof Kl)return Yi("Decoding the base64 bloom filter in existence filter failed ("+_.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw _}try{p=new nh(c,o,u)}catch(_){return Yi(_ instanceof Gr?"BloomFilter error: ":"Applying bloom filter failed: ",_),null}return p.Ie===0?null:p}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let o=0;return r.forEach(u=>{const c=this.Le.tt(),p=`projects/${c.projectId}/databases/${c.database}/documents/${u.path.canonicalString()}`;t.mightContain(p)||(this.Ue(e,u,null),o++)}),o}rt(t){const e=new Map;this.Be.forEach((u,c)=>{const p=this.Je(c);if(p){if(u.current&&Ta(p.target)){const _=new Y(p.target.path);this.ke.get(_)!==null||this.it(c,_)||this.Ue(c,_,ee.newNoDocument(_,t))}u.be&&(e.set(c,u.ve()),u.Ce())}});let r=pt();this.qe.forEach((u,c)=>{let p=!0;c.forEachWhile(_=>{const y=this.Je(_);return!y||y.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(r=r.add(u))}),this.ke.forEach((u,c)=>c.setReadTime(t));const o=new Bo(t,e,this.Qe,this.ke,r);return this.ke=Mn(),this.qe=Cu(),this.Qe=new Vt(_t),o}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const o=this.Ge(t);this.it(t,e)?o.Fe(e,1):o.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Su,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Yt(_t),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||Z("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Su),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Cu(){return new Vt(Y.comparator)}function Ru(){return new Vt(Y.comparator)}const Q_={asc:"ASCENDING",desc:"DESCENDING"},Y_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},J_={and:"AND",or:"OR"};class X_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Aa(i,t){return i.useProto3Json||ko(t)?t:{value:t}}function tg(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function eg(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function Wi(i){return Mt(!!i),nt.fromTimestamp(function(e){const r=On(e);return new le(r.seconds,r.nanos)}(i))}function ng(i,t){return ba(i,t).canonicalString()}function ba(i,t){const e=function(o){return new Ot(["projects",o.projectId,"databases",o.database])}(i).child("documents");return t===void 0?e:e.child(t)}function fc(i){const t=Ot.fromString(i);return Mt(vc(t)),t}function ra(i,t){const e=fc(t);if(e.get(1)!==i.databaseId.projectId)throw new $(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+i.databaseId.projectId);if(e.get(3)!==i.databaseId.database)throw new $(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+i.databaseId.database);return new Y(mc(e))}function pc(i,t){return ng(i.databaseId,t)}function ig(i){const t=fc(i);return t.length===4?Ot.emptyPath():mc(t)}function Lu(i){return new Ot(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function mc(i){return Mt(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function rg(i,t){let e;if("targetChange"in t){t.targetChange;const r=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:it()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=function(y,E){return y.useProto3Json?(Mt(E===void 0||typeof E=="string"),Jt.fromBase64String(E||"")):(Mt(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Jt.fromUint8Array(E||new Uint8Array))}(i,t.targetChange.resumeToken),c=t.targetChange.cause,p=c&&function(y){const E=y.code===void 0?U.UNKNOWN:lc(y.code);return new $(E,y.message||"")}(c);e=new dc(r,o,u,p||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const o=ra(i,r.document.name),u=Wi(r.document.updateTime),c=r.document.createTime?Wi(r.document.createTime):nt.min(),p=new Oe({mapValue:{fields:r.document.fields}}),_=ee.newFoundDocument(o,u,c,p),y=r.targetIds||[],E=r.removedTargetIds||[];e=new uo(y,E,_.key,_)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const o=ra(i,r.document),u=r.readTime?Wi(r.readTime):nt.min(),c=ee.newNoDocument(o,u),p=r.removedTargetIds||[];e=new uo([],p,c.key,c)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const o=ra(i,r.document),u=r.removedTargetIds||[];e=new uo([],u,o,null)}else{if(!("filter"in t))return it();{t.filter;const r=t.filter;r.targetId;const{count:o=0,unchangedNames:u}=r,c=new W_(o,u),p=r.targetId;e=new cc(p,c)}}return e}function sg(i,t){return{documents:[pc(i,t.path)]}}function og(i,t){const e={structuredQuery:{}},r=t.path;let o;t.collectionGroup!==null?(o=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=pc(i,o);const u=function(y){if(y.length!==0)return gc(Fe.create(y,"and"))}(t.filters);u&&(e.structuredQuery.where=u);const c=function(y){if(y.length!==0)return y.map(E=>function(D){return{field:Bi(D.field),direction:ug(D.dir)}}(E))}(t.orderBy);c&&(e.structuredQuery.orderBy=c);const p=Aa(i,t.limit);return p!==null&&(e.structuredQuery.limit=p),t.startAt&&(e.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{_t:e,parent:o}}function ag(i){let t=ig(i.parent);const e=i.structuredQuery,r=e.from?e.from.length:0;let o=null;if(r>0){Mt(r===1);const E=e.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];e.where&&(u=function(x){const D=_c(x);return D instanceof Fe&&Yl(D)?D.getFilters():[D]}(e.where));let c=[];e.orderBy&&(c=function(x){return x.map(D=>function(q){return new Eo(Ui(q.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(q.direction))}(D))}(e.orderBy));let p=null;e.limit&&(p=function(x){let D;return D=typeof x=="object"?x.value:x,ko(D)?null:D}(e.limit));let _=null;e.startAt&&(_=function(x){const D=!!x.before,F=x.values||[];return new To(F,D)}(e.startAt));let y=null;return e.endAt&&(y=function(x){const D=!x.before,F=x.values||[];return new To(F,D)}(e.endAt)),b_(t,o,c,u,p,"F",_,y)}function hg(i,t){const e=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return it()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function _c(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ui(e.unaryFilter.field);return qt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=Ui(e.unaryFilter.field);return qt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ui(e.unaryFilter.field);return qt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Ui(e.unaryFilter.field);return qt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return it()}}(i):i.fieldFilter!==void 0?function(e){return qt.create(Ui(e.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return it()}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return Fe.create(e.compositeFilter.filters.map(r=>_c(r)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return it()}}(e.compositeFilter.op))}(i):it()}function ug(i){return Q_[i]}function lg(i){return Y_[i]}function cg(i){return J_[i]}function Bi(i){return{fieldPath:i.canonicalString()}}function Ui(i){return oe.fromServerFormat(i.fieldPath)}function gc(i){return i instanceof qt?function(e){if(e.op==="=="){if(_u(e.value))return{unaryFilter:{field:Bi(e.field),op:"IS_NAN"}};if(mu(e.value))return{unaryFilter:{field:Bi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(_u(e.value))return{unaryFilter:{field:Bi(e.field),op:"IS_NOT_NAN"}};if(mu(e.value))return{unaryFilter:{field:Bi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bi(e.field),op:lg(e.op),value:e.value}}}(i):i instanceof Fe?function(e){const r=e.getFilters().map(o=>gc(o));return r.length===1?r[0]:{compositeFilter:{op:cg(e.op),filters:r}}}(i):it()}function vc(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e,r,o,u=nt.min(),c=nt.min(),p=Jt.EMPTY_BYTE_STRING,_=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=p,this.expectedCount=_}withSequenceNumber(t){return new bn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(t){this.ct=t}}function fg(i){const t=ag({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Ea(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.un=new mg}addToCollectionParentIndex(t,e){return this.un.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(kn.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(kn.min())}updateCollectionGroup(t,e,r){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class mg{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),o=this.index[e]||new Yt(Ot.comparator),u=!o.has(r);return this.index[e]=o.add(r),u}has(t){const e=t.lastSegment(),r=t.popLast(),o=this.index[e];return o&&o.has(r)}getEntries(t){return(this.index[t]||new Yt(Ot.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new er(0)}static kn(){return new er(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.changes=new or(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ee.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?V.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(t,e,r,o){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=o}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(o=>(r=o,this.remoteDocumentCache.getEntry(t,e))).next(o=>(r!==null&&Xr(r.mutation,o,An.empty(),le.now()),o))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,pt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=pt()){const o=Yn();return this.populateOverlays(t,o,e).next(()=>this.computeViews(t,e,o,r).next(u=>{let c=Wr();return u.forEach((p,_)=>{c=c.insert(p,_.overlayedDocument)}),c}))}getOverlayedDocuments(t,e){const r=Yn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,pt()))}populateOverlays(t,e,r){const o=[];return r.forEach(u=>{e.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((c,p)=>{e.set(c,p)})})}computeViews(t,e,r,o){let u=Mn();const c=Jr(),p=function(){return Jr()}();return e.forEach((_,y)=>{const E=r.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Fo)?u=u.insert(y.key,y):E!==void 0?(c.set(y.key,E.mutation.getFieldMask()),Xr(E.mutation,y,E.mutation.getFieldMask(),le.now())):c.set(y.key,An.empty())}),this.recalculateAndSaveOverlays(t,u).next(_=>(_.forEach((y,E)=>c.set(y,E)),e.forEach((y,E)=>{var x;return p.set(y,new gg(E,(x=c.get(y))!==null&&x!==void 0?x:null))}),p))}recalculateAndSaveOverlays(t,e){const r=Jr();let o=new Vt((c,p)=>c-p),u=pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(c=>{for(const p of c)p.keys().forEach(_=>{const y=e.get(_);if(y===null)return;let E=r.get(_)||An.empty();E=p.applyToLocalView(y,E),r.set(_,E);const x=(o.get(p.batchId)||pt()).add(_);o=o.insert(p.batchId,x)})}).next(()=>{const c=[],p=o.getReverseIterator();for(;p.hasNext();){const _=p.getNext(),y=_.key,E=_.value,x=rc();E.forEach(D=>{if(!u.has(D)){const F=hc(e.get(D),r.get(D));F!==null&&x.set(D,F),u=u.add(D)}}),c.push(this.documentOverlayCache.saveOverlays(t,y,x))}return V.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,o){return function(c){return Y.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):S_(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,o):this.getDocumentsMatchingCollectionQuery(t,e,r,o)}getNextDocuments(t,e,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,o).next(u=>{const c=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,o-u.size):V.resolve(Yn());let p=-1,_=u;return c.next(y=>V.forEach(y,(E,x)=>(p<x.largestBatchId&&(p=x.largestBatchId),u.get(E)?V.resolve():this.remoteDocumentCache.getEntry(t,E).next(D=>{_=_.insert(E,D)}))).next(()=>this.populateOverlays(t,y,u)).next(()=>this.computeViews(t,_,y,pt())).next(E=>({batchId:p,changes:k_(E)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Y(e)).next(r=>{let o=Wr();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o})}getDocumentsMatchingCollectionGroupQuery(t,e,r,o){const u=e.collectionGroup;let c=Wr();return this.indexManager.getCollectionParents(t,u).next(p=>V.forEach(p,_=>{const y=function(x,D){return new Mo(D,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)}(e,_.child(u));return this.getDocumentsMatchingCollectionQuery(t,y,r,o).next(E=>{E.forEach((x,D)=>{c=c.insert(x,D)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(t,e,r,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(c=>(u=c,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,u,o))).next(c=>{u.forEach((_,y)=>{const E=y.getKey();c.get(E)===null&&(c=c.insert(E,ee.newInvalidDocument(E)))});let p=Wr();return c.forEach((_,y)=>{const E=u.get(_);E!==void 0&&Xr(E.mutation,y,An.empty(),le.now()),No(e,y)&&(p=p.insert(_,y))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return V.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(o){return{id:o.id,version:o.version,createTime:Wi(o.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(o){return{name:o.name,query:fg(o.bundledQuery),readTime:Wi(o.readTime)}}(e)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.overlays=new Vt(Y.comparator),this.Ir=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Yn();return V.forEach(e,o=>this.getOverlay(t,o).next(u=>{u!==null&&r.set(o,u)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((o,u)=>{this.ht(t,e,u)}),V.resolve()}removeOverlaysForBatchId(t,e,r){const o=this.Ir.get(r);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(t,e,r){const o=Yn(),u=e.length+1,c=new Y(e.child("")),p=this.overlays.getIteratorFrom(c);for(;p.hasNext();){const _=p.getNext().value,y=_.getKey();if(!e.isPrefixOf(y.path))break;y.path.length===u&&_.largestBatchId>r&&o.set(_.getKey(),_)}return V.resolve(o)}getOverlaysForCollectionGroup(t,e,r,o){let u=new Vt((y,E)=>y-E);const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===e&&y.largestBatchId>r){let E=u.get(y.largestBatchId);E===null&&(E=Yn(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const p=Yn(),_=u.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach((y,E)=>p.set(y,E)),!(p.size()>=o)););return V.resolve(p)}ht(t,e,r){const o=this.overlays.get(r.key);if(o!==null){const c=this.Ir.get(o.largestBatchId).delete(r.key);this.Ir.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new Z_(e,r));let u=this.Ir.get(e);u===void 0&&(u=pt(),this.Ir.set(e,u)),this.Ir.set(e,u.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(){this.sessionToken=Jt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this.Tr=new Yt(Gt.Er),this.dr=new Yt(Gt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new Gt(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new Gt(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new Y(new Ot([])),r=new Gt(e,t),o=new Gt(e,t+1),u=[];return this.dr.forEachInRange([r,o],c=>{this.Vr(c),u.push(c.key)}),u}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new Y(new Ot([])),r=new Gt(e,t),o=new Gt(e,t+1);let u=pt();return this.dr.forEachInRange([r,o],c=>{u=u.add(c.key)}),u}containsKey(t){const e=new Gt(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Gt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return Y.comparator(t.key,e.key)||_t(t.wr,e.wr)}static Ar(t,e){return _t(t.wr,e.wr)||Y.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Yt(Gt.Er)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,o){const u=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new H_(u,e,r,o);this.mutationQueue.push(c);for(const p of o)this.br=this.br.add(new Gt(p.key,u)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return V.resolve(c)}lookupMutationBatch(t,e){return V.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,o=this.vr(r),u=o<0?0:o;return V.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Gt(e,0),o=new Gt(e,Number.POSITIVE_INFINITY),u=[];return this.br.forEachInRange([r,o],c=>{const p=this.Dr(c.wr);u.push(p)}),V.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Yt(_t);return e.forEach(o=>{const u=new Gt(o,0),c=new Gt(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([u,c],p=>{r=r.add(p.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,o=r.length+1;let u=r;Y.isDocumentKey(u)||(u=u.child(""));const c=new Gt(new Y(u),0);let p=new Yt(_t);return this.br.forEachWhile(_=>{const y=_.key.path;return!!r.isPrefixOf(y)&&(y.length===o&&(p=p.add(_.wr)),!0)},c),V.resolve(this.Cr(p))}Cr(t){const e=[];return t.forEach(r=>{const o=this.Dr(r);o!==null&&e.push(o)}),e}removeMutationBatch(t,e){Mt(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(e.mutations,o=>{const u=new Gt(o.key,e.batchId);return r=r.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new Gt(e,0),o=this.br.firstAfterOrEqual(r);return V.resolve(e.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(t){this.Mr=t,this.docs=function(){return new Vt(Y.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,o=this.docs.get(r),u=o?o.size:0,c=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:c}),this.size+=c-u,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return V.resolve(r?r.document.mutableCopy():ee.newInvalidDocument(e))}getEntries(t,e){let r=Mn();return e.forEach(o=>{const u=this.docs.get(o);r=r.insert(o,u?u.document.mutableCopy():ee.newInvalidDocument(o))}),V.resolve(r)}getDocumentsMatchingQuery(t,e,r,o){let u=Mn();const c=e.path,p=new Y(c.child("")),_=this.docs.getIteratorFrom(p);for(;_.hasNext();){const{key:y,value:{document:E}}=_.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||a_(o_(E),r)<=0||(o.has(E.key)||No(e,E))&&(u=u.insert(E.key,E.mutableCopy()))}return V.resolve(u)}getAllFromCollectionGroup(t,e,r,o){it()}Or(t,e){return V.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Pg(this)}getSize(t){return V.resolve(this.size)}}class Pg extends _g{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,o)=>{o.isValidDocument()?e.push(this.cr.addEntry(t,o)):this.cr.removeEntry(r)}),V.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(t){this.persistence=t,this.Nr=new or(e=>Ya(e),Ja),this.lastRemoteSnapshotVersion=nt.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ih,this.targetCount=0,this.kr=er.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,o)=>e(o)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),V.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new er(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Kn(e),V.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,r){let o=0;const u=[];return this.Nr.forEach((c,p)=>{p.sequenceNumber<=e&&r.get(p.targetId)===null&&(this.Nr.delete(c),u.push(this.removeMatchingKeysForTargetId(t,p.targetId)),o++)}),V.waitFor(u).next(()=>o)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return V.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),V.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const o=this.persistence.referenceDelegate,u=[];return o&&e.forEach(c=>{u.push(o.markPotentiallyOrphaned(t,c))}),V.waitFor(u)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return V.resolve(r)}containsKey(t,e){return V.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Ga(0),this.Kr=!1,this.Kr=!0,this.$r=new Tg,this.referenceDelegate=t(this),this.Ur=new Ag(this),this.indexManager=new pg,this.remoteDocumentCache=function(o){return new Ig(o)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new dg(e),this.Gr=new yg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new wg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Eg(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){Z("MemoryPersistence","Starting transaction:",t);const o=new Sg(this.Qr.next());return this.referenceDelegate.zr(),r(o).next(u=>this.referenceDelegate.jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Hr(t,e){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Sg extends u_{constructor(t){super(),this.currentSequenceNumber=t}}class rh{constructor(t){this.persistence=t,this.Jr=new ih,this.Yr=null}static Zr(t){return new rh(t)}get Xr(){if(this.Yr)return this.Yr;throw it()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),V.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),V.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(o=>this.Xr.add(o.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(o=>{o.forEach(u=>this.Xr.add(u.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const o=Y.fromPath(r);return this.ei(t,o).next(u=>{u||e.removeEntry(o,nt.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return V.or([()=>V.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,e,r,o){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=o}static Wi(t,e){let r=pt(),o=pt();for(const u of e.docChanges)switch(u.type){case 0:r=r.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new sh(t,e.fromCache,r,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ld()?8:l_(ne())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,o){const u={result:null};return this.Yi(t,e).next(c=>{u.result=c}).next(()=>{if(!u.result)return this.Zi(t,e,o,r).next(c=>{u.result=c})}).next(()=>{if(u.result)return;const c=new Cg;return this.Xi(t,e,c).next(p=>{if(u.result=p,this.zi)return this.es(t,e,c,p.size)})}).next(()=>u.result)}es(t,e,r,o){return r.documentReadCount<this.ji?(Hr()<=ut.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Fi(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Hr()<=ut.DEBUG&&Z("QueryEngine","Query:",Fi(e),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.Hi*o?(Hr()<=ut.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Fi(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ne(e))):V.resolve())}Yi(t,e){if(wu(e))return V.resolve(null);let r=Ne(e);return this.indexManager.getIndexType(t,r).next(o=>o===0?null:(e.limit!==null&&o===1&&(e=Ea(e,null,"F"),r=Ne(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(u=>{const c=pt(...u);return this.Ji.getDocuments(t,c).next(p=>this.indexManager.getMinOffset(t,r).next(_=>{const y=this.ts(e,p);return this.ns(e,y,c,_.readTime)?this.Yi(t,Ea(e,null,"F")):this.rs(t,y,e,_)}))})))}Zi(t,e,r,o){return wu(e)||o.isEqual(nt.min())?V.resolve(null):this.Ji.getDocuments(t,r).next(u=>{const c=this.ts(e,u);return this.ns(e,c,r,o)?V.resolve(null):(Hr()<=ut.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Fi(e)),this.rs(t,c,e,s_(o,-1)).next(p=>p))})}ts(t,e){let r=new Yt(nc(t));return e.forEach((o,u)=>{No(t,u)&&(r=r.add(u))}),r}ns(t,e,r,o){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const u=t.limitType==="F"?e.last():e.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Xi(t,e,r){return Hr()<=ut.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Fi(e)),this.Ji.getDocumentsMatchingQuery(t,e,kn.min(),r)}rs(t,e,r,o){return this.Ji.getDocumentsMatchingQuery(t,r,o).next(u=>(e.forEach(c=>{u=u.insert(c.key,c)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(t,e,r,o){this.persistence=t,this.ss=e,this.serializer=o,this.os=new Vt(_t),this._s=new or(u=>Ya(u),Ja),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new vg(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function xg(i,t,e,r){return new Lg(i,t,e,r)}async function yc(i,t){const e=ft(i);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let o;return e.mutationQueue.getAllMutationBatches(r).next(u=>(o=u,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(u=>{const c=[],p=[];let _=pt();for(const y of o){c.push(y.batchId);for(const E of y.mutations)_=_.add(E.key)}for(const y of u){p.push(y.batchId);for(const E of y.mutations)_=_.add(E.key)}return e.localDocuments.getDocuments(r,_).next(y=>({hs:y,removedBatchIds:c,addedBatchIds:p}))})})}function wc(i){const t=ft(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function kg(i,t){const e=ft(i),r=t.snapshotVersion;let o=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const c=e.cs.newChangeBuffer({trackRemovals:!0});o=e.os;const p=[];t.targetChanges.forEach((E,x)=>{const D=o.get(x);if(!D)return;p.push(e.Ur.removeMatchingKeys(u,E.removedDocuments,x).next(()=>e.Ur.addMatchingKeys(u,E.addedDocuments,x)));let F=D.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(x)!==null?F=F.withResumeToken(Jt.EMPTY_BYTE_STRING,nt.min()).withLastLimboFreeSnapshotVersion(nt.min()):E.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(E.resumeToken,r)),o=o.insert(x,F),function(z,H,gt){return z.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=3e8?!0:gt.addedDocuments.size+gt.modifiedDocuments.size+gt.removedDocuments.size>0}(D,F,E)&&p.push(e.Ur.updateTargetData(u,F))});let _=Mn(),y=pt();if(t.documentUpdates.forEach(E=>{t.resolvedLimboDocuments.has(E)&&p.push(e.persistence.referenceDelegate.updateLimboDocument(u,E))}),p.push(Og(u,c,t.documentUpdates).next(E=>{_=E.Ps,y=E.Is})),!r.isEqual(nt.min())){const E=e.Ur.getLastRemoteSnapshotVersion(u).next(x=>e.Ur.setTargetsMetadata(u,u.currentSequenceNumber,r));p.push(E)}return V.waitFor(p).next(()=>c.apply(u)).next(()=>e.localDocuments.getLocalViewOfDocuments(u,_,y)).next(()=>_)}).then(u=>(e.os=o,u))}function Og(i,t,e){let r=pt(),o=pt();return e.forEach(u=>r=r.add(u)),t.getEntries(i,r).next(u=>{let c=Mn();return e.forEach((p,_)=>{const y=u.get(p);_.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(p)),_.isNoDocument()&&_.version.isEqual(nt.min())?(t.removeEntry(p,_.readTime),c=c.insert(p,_)):!y.isValidDocument()||_.version.compareTo(y.version)>0||_.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(_),c=c.insert(p,_)):Z("LocalStore","Ignoring outdated watch update for ",p,". Current version:",y.version," Watch version:",_.version)}),{Ps:c,Is:o}})}function Mg(i,t){const e=ft(i);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let o;return e.Ur.getTargetData(r,t).next(u=>u?(o=u,V.resolve(o)):e.Ur.allocateTargetId(r).next(c=>(o=new bn(t,c,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,o).next(()=>o))))}).then(r=>{const o=e.os.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Sa(i,t,e){const r=ft(i),o=r.os.get(t),u=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",u,c=>r.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!ds(c))throw c;Z("LocalStore",`Failed to update sequence numbers for target ${t}: ${c}`)}r.os=r.os.remove(t),r._s.delete(o.target)}function xu(i,t,e){const r=ft(i);let o=nt.min(),u=pt();return r.persistence.runTransaction("Execute query","readwrite",c=>function(_,y,E){const x=ft(_),D=x._s.get(E);return D!==void 0?V.resolve(x.os.get(D)):x.Ur.getTargetData(y,E)}(r,c,Ne(t)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(c,p.targetId).next(_=>{u=_})}).next(()=>r.ss.getDocumentsMatchingQuery(c,t,e?o:nt.min(),e?u:pt())).next(p=>(Dg(r,R_(t),p),{documents:p,Ts:u})))}function Dg(i,t,e){let r=i.us.get(t)||nt.min();e.forEach((o,u)=>{u.readTime.compareTo(r)>0&&(r=u.readTime)}),i.us.set(t,r)}class ku{constructor(){this.activeTargetIds=D_()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ng{constructor(){this.so=new ku,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new ku,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no=null;function sa(){return no===null?no=function(){return 268435456+Math.round(2147483648*Math.random())}():no++,"0x"+no.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="WebChannelConnection";class Ug extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${o}/databases/${u}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}get Fo(){return!1}Mo(e,r,o,u,c){const p=sa(),_=this.xo(e,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${e}' ${p}:`,_,o);const y={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(y,u,c),this.No(e,_,y,o).then(E=>(Z("RestConnection",`Received RPC '${e}' ${p}: `,E),E),E=>{throw Yi("RestConnection",`RPC '${e}' ${p} failed with error: `,E,"url: ",_,"request:",o),E})}Lo(e,r,o,u,c,p){return this.Mo(e,r,o,u,c)}Oo(e,r,o){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+sr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((u,c)=>e[c]=u),o&&o.headers.forEach((u,c)=>e[c]=u)}xo(e,r){const o=Fg[e];return`${this.Do}/v1/${r}:${o}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,o){const u=sa();return new Promise((c,p)=>{const _=new jl;_.setWithCredentials(!0),_.listenOnce(ql.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case ao.NO_ERROR:const E=_.getResponseJson();Z(Xt,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(E)),c(E);break;case ao.TIMEOUT:Z(Xt,`RPC '${t}' ${u} timed out`),p(new $(U.DEADLINE_EXCEEDED,"Request time out"));break;case ao.HTTP_ERROR:const x=_.getStatus();if(Z(Xt,`RPC '${t}' ${u} failed with status:`,x,"response text:",_.getResponseText()),x>0){let D=_.getResponseJson();Array.isArray(D)&&(D=D[0]);const F=D==null?void 0:D.error;if(F&&F.status&&F.message){const q=function(H){const gt=H.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(gt)>=0?gt:U.UNKNOWN}(F.status);p(new $(q,F.message))}else p(new $(U.UNKNOWN,"Server responded with status "+_.getStatus()))}else p(new $(U.UNAVAILABLE,"Connection failed."));break;default:it()}}finally{Z(Xt,`RPC '${t}' ${u} completed.`)}});const y=JSON.stringify(o);Z(Xt,`RPC '${t}' ${u} sending request:`,o),_.send(e,"POST",y,r,15)})}Bo(t,e,r){const o=sa(),u=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],c=Wl(),p=Zl(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(_.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(_.useFetchStreams=!0),this.Oo(_.initMessageHeaders,e,r),_.encodeInitMessageHeaders=!0;const E=u.join("");Z(Xt,`Creating RPC '${t}' stream ${o}: ${E}`,_);const x=c.createWebChannel(E,_);let D=!1,F=!1;const q=new Bg({Io:H=>{F?Z(Xt,`Not sending because RPC '${t}' stream ${o} is closed:`,H):(D||(Z(Xt,`Opening RPC '${t}' stream ${o} transport.`),x.open(),D=!0),Z(Xt,`RPC '${t}' stream ${o} sending:`,H),x.send(H))},To:()=>x.close()}),z=(H,gt,yt)=>{H.listen(gt,rt=>{try{yt(rt)}catch(It){setTimeout(()=>{throw It},0)}})};return z(x,Zr.EventType.OPEN,()=>{F||(Z(Xt,`RPC '${t}' stream ${o} transport opened.`),q.yo())}),z(x,Zr.EventType.CLOSE,()=>{F||(F=!0,Z(Xt,`RPC '${t}' stream ${o} transport closed`),q.So())}),z(x,Zr.EventType.ERROR,H=>{F||(F=!0,Yi(Xt,`RPC '${t}' stream ${o} transport errored:`,H),q.So(new $(U.UNAVAILABLE,"The operation could not be completed")))}),z(x,Zr.EventType.MESSAGE,H=>{var gt;if(!F){const yt=H.data[0];Mt(!!yt);const rt=yt,It=rt.error||((gt=rt[0])===null||gt===void 0?void 0:gt.error);if(It){Z(Xt,`RPC '${t}' stream ${o} received error:`,It);const Kt=It.status;let Pt=function(I){const b=zt[I];if(b!==void 0)return lc(b)}(Kt),S=It.message;Pt===void 0&&(Pt=U.INTERNAL,S="Unknown error status: "+Kt+" with message "+It.message),F=!0,q.So(new $(Pt,S)),x.close()}else Z(Xt,`RPC '${t}' stream ${o} received:`,yt),q.bo(yt)}}),z(p,Hl.STAT_EVENT,H=>{H.stat===_a.PROXY?Z(Xt,`RPC '${t}' stream ${o} detected buffering proxy`):H.stat===_a.NOPROXY&&Z(Xt,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{q.wo()},0),q}}function oa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(i){return new X_(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t,e,r=1e3,o=1.5,u=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=o,this.Qo=u,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),o=Math.max(0,e-r);o>0&&Z("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(t,e,r,o,u,c,p,_){this.ui=t,this.Ho=r,this.Jo=o,this.connection=u,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=p,this.listener=_,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ec(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===U.RESOURCE_EXHAUSTED?(on(e.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,o])=>{this.Yo===e&&this.P_(r,o)},r=>{t(()=>{const o=new $(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(o)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{r(()=>this.I_(o))}),this.stream.onMessage(o=>{r(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return Z("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jg extends zg{constructor(t,e,r,o,u,c){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,o,c),this.serializer=u}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=rg(this.serializer,t),r=function(u){if(!("targetChange"in u))return nt.min();const c=u.targetChange;return c.targetIds&&c.targetIds.length?nt.min():c.readTime?Wi(c.readTime):nt.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Lu(this.serializer),e.addTarget=function(u,c){let p;const _=c.target;if(p=Ta(_)?{documents:sg(u,_)}:{query:og(u,_)._t},p.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){p.resumeToken=eg(u,c.resumeToken);const y=Aa(u,c.expectedCount);y!==null&&(p.expectedCount=y)}else if(c.snapshotVersion.compareTo(nt.min())>0){p.readTime=tg(u,c.snapshotVersion.toTimestamp());const y=Aa(u,c.expectedCount);y!==null&&(p.expectedCount=y)}return p}(this.serializer,t);const r=hg(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Lu(this.serializer),e.removeTarget=t,this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg extends class{}{constructor(t,e,r,o){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new $(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Mo(t,ba(e,r),o,u,c)).catch(u=>{throw u.name==="FirebaseError"?(u.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new $(U.UNKNOWN,u.toString())})}Lo(t,e,r,o,u){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,p])=>this.connection.Lo(t,ba(e,r),o,c,p,u)).catch(c=>{throw c.name==="FirebaseError"?(c.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new $(U.UNKNOWN,c.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Hg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(on(e),this.D_=!1):Z("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(t,e,r,o,u){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=u,this.k_._o(c=>{r.enqueueAndForget(async()=>{ms(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(_){const y=ft(_);y.L_.add(4),await ps(y),y.q_.set("Unknown"),y.L_.delete(4),await Uo(y)}(this))})}),this.q_=new Hg(r,o)}}async function Uo(i){if(ms(i))for(const t of i.B_)await t(!0)}async function ps(i){for(const t of i.B_)await t(!1)}function Ic(i,t){const e=ft(i);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),uh(e)?hh(e):ar(e).r_()&&ah(e,t))}function oh(i,t){const e=ft(i),r=ar(e);e.N_.delete(t),r.r_()&&Pc(e,t),e.N_.size===0&&(r.r_()?r.o_():ms(e)&&e.q_.set("Unknown"))}function ah(i,t){if(i.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(nt.min())>0){const e=i.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ar(i).A_(t)}function Pc(i,t){i.Q_.xe(t),ar(i).R_(t)}function hh(i){i.Q_=new $_({getRemoteKeysForTarget:t=>i.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>i.N_.get(t)||null,tt:()=>i.datastore.serializer.databaseId}),ar(i).start(),i.q_.v_()}function uh(i){return ms(i)&&!ar(i).n_()&&i.N_.size>0}function ms(i){return ft(i).L_.size===0}function Ac(i){i.Q_=void 0}async function Wg(i){i.q_.set("Online")}async function Gg(i){i.N_.forEach((t,e)=>{ah(i,t)})}async function Kg(i,t){Ac(i),uh(i)?(i.q_.M_(t),hh(i)):i.q_.set("Unknown")}async function $g(i,t,e){if(i.q_.set("Online"),t instanceof dc&&t.state===2&&t.cause)try{await async function(o,u){const c=u.cause;for(const p of u.targetIds)o.N_.has(p)&&(await o.remoteSyncer.rejectListen(p,c),o.N_.delete(p),o.Q_.removeTarget(p))}(i,t)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Mu(i,r)}else if(t instanceof uo?i.Q_.Ke(t):t instanceof cc?i.Q_.He(t):i.Q_.We(t),!e.isEqual(nt.min()))try{const r=await wc(i.localStore);e.compareTo(r)>=0&&await function(u,c){const p=u.Q_.rt(c);return p.targetChanges.forEach((_,y)=>{if(_.resumeToken.approximateByteSize()>0){const E=u.N_.get(y);E&&u.N_.set(y,E.withResumeToken(_.resumeToken,c))}}),p.targetMismatches.forEach((_,y)=>{const E=u.N_.get(_);if(!E)return;u.N_.set(_,E.withResumeToken(Jt.EMPTY_BYTE_STRING,E.snapshotVersion)),Pc(u,_);const x=new bn(E.target,_,y,E.sequenceNumber);ah(u,x)}),u.remoteSyncer.applyRemoteEvent(p)}(i,e)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Mu(i,r)}}async function Mu(i,t,e){if(!ds(t))throw t;i.L_.add(1),await ps(i),i.q_.set("Offline"),e||(e=()=>wc(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await e(),i.L_.delete(1),await Uo(i)})}async function Du(i,t){const e=ft(i);e.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=ms(e);e.L_.add(3),await ps(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Uo(e)}async function Qg(i,t){const e=ft(i);t?(e.L_.delete(2),await Uo(e)):t||(e.L_.add(2),await ps(e),e.q_.set("Unknown"))}function ar(i){return i.K_||(i.K_=function(e,r,o){const u=ft(e);return u.w_(),new jg(r,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Eo:Wg.bind(null,i),Ro:Gg.bind(null,i),mo:Kg.bind(null,i),d_:$g.bind(null,i)}),i.B_.push(async t=>{t?(i.K_.s_(),uh(i)?hh(i):i.q_.set("Unknown")):(await i.K_.stop(),Ac(i))})),i.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t,e,r,o,u){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=o,this.removalCallback=u,this.deferred=new Zi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,o,u){const c=Date.now()+r,p=new lh(t,e,c,o,u);return p.start(r),p}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(U.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bc(i,t){if(on("AsyncQueue",`${t}: ${i}`),ds(i))return new $(U.UNAVAILABLE,`${t}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t){this.comparator=t?(e,r)=>t(e,r)||Y.comparator(e.key,r.key):(e,r)=>Y.comparator(e.key,r.key),this.keyedMap=Wr(),this.sortedSet=new Vt(this.comparator)}static emptySet(t){return new Gi(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Gi)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const o=e.getNext().key,u=r.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Gi;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this.W_=new Vt(Y.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):it():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class nr{constructor(t,e,r,o,u,c,p,_,y){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=u,this.fromCache=c,this.syncStateChanged=p,this.excludesMetadataChanges=_,this.hasCachedResults=y}static fromInitialDocuments(t,e,r,o,u){const c=[];return e.forEach(p=>{c.push({type:0,doc:p})}),new nr(t,e,Gi.emptySet(e),c,r,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Do(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let o=0;o<e.length;o++)if(e[o].type!==r[o].type||!e[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Jg{constructor(){this.queries=Vu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const o=ft(e),u=o.queries;o.queries=Vu(),u.forEach((c,p)=>{for(const _ of p.j_)_.onError(r)})})(this,new $(U.ABORTED,"Firestore shutting down"))}}function Vu(){return new or(i=>ec(i),Do)}async function Xg(i,t){const e=ft(i);let r=3;const o=t.query;let u=e.queries.get(o);u?!u.H_()&&t.J_()&&(r=2):(u=new Yg,r=t.J_()?0:1);try{switch(r){case 0:u.z_=await e.onListen(o,!0);break;case 1:u.z_=await e.onListen(o,!1);break;case 2:await e.onFirstRemoteStoreListen(o)}}catch(c){const p=bc(c,`Initialization of query '${Fi(t.query)}' failed`);return void t.onError(p)}e.queries.set(o,u),u.j_.push(t),t.Z_(e.onlineState),u.z_&&t.X_(u.z_)&&ch(e)}async function tv(i,t){const e=ft(i),r=t.query;let o=3;const u=e.queries.get(r);if(u){const c=u.j_.indexOf(t);c>=0&&(u.j_.splice(c,1),u.j_.length===0?o=t.J_()?0:1:!u.H_()&&t.J_()&&(o=2))}switch(o){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function ev(i,t){const e=ft(i);let r=!1;for(const o of t){const u=o.query,c=e.queries.get(u);if(c){for(const p of c.j_)p.X_(o)&&(r=!0);c.z_=o}}r&&ch(e)}function nv(i,t,e){const r=ft(i),o=r.queries.get(t);if(o)for(const u of o.j_)u.onError(e);r.queries.delete(t)}function ch(i){i.Y_.forEach(t=>{t.next()})}var Ca,Fu;(Fu=Ca||(Ca={})).ea="default",Fu.Cache="cache";class iv{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const o of t.docChanges)o.type!==3&&r.push(o);t=new nr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=nr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Ca.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t){this.key=t}}class Cc{constructor(t){this.key=t}}class rv{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=pt(),this.mutatedKeys=pt(),this.Aa=nc(t),this.Ra=new Gi(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Nu,o=e?e.Ra:this.Ra;let u=e?e.mutatedKeys:this.mutatedKeys,c=o,p=!1;const _=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((E,x)=>{const D=o.get(E),F=No(this.query,x)?x:null,q=!!D&&this.mutatedKeys.has(D.key),z=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let H=!1;D&&F?D.data.isEqual(F.data)?q!==z&&(r.track({type:3,doc:F}),H=!0):this.ga(D,F)||(r.track({type:2,doc:F}),H=!0,(_&&this.Aa(F,_)>0||y&&this.Aa(F,y)<0)&&(p=!0)):!D&&F?(r.track({type:0,doc:F}),H=!0):D&&!F&&(r.track({type:1,doc:D}),H=!0,(_||y)&&(p=!0)),H&&(F?(c=c.add(F),u=z?u.add(E):u.delete(E)):(c=c.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const E=this.query.limitType==="F"?c.last():c.first();c=c.delete(E.key),u=u.delete(E.key),r.track({type:1,doc:E})}return{Ra:c,fa:r,ns:p,mutatedKeys:u}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,o){const u=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const c=t.fa.G_();c.sort((E,x)=>function(F,q){const z=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return it()}};return z(F)-z(q)}(E.type,x.type)||this.Aa(E.doc,x.doc)),this.pa(r),o=o!=null&&o;const p=e&&!o?this.ya():[],_=this.da.size===0&&this.current&&!o?1:0,y=_!==this.Ea;return this.Ea=_,c.length!==0||y?{snapshot:new nr(this.query,t.Ra,u,c,t.mutatedKeys,_===0,y,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:p}:{wa:p}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Nu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=pt(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new Cc(r))}),this.da.forEach(r=>{t.has(r)||e.push(new Sc(r))}),e}ba(t){this.Ta=t.Ts,this.da=pt();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return nr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class sv{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class ov{constructor(t){this.key=t,this.va=!1}}class av{constructor(t,e,r,o,u,c){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=c,this.Ca={},this.Fa=new or(p=>ec(p),Do),this.Ma=new Map,this.xa=new Set,this.Oa=new Vt(Y.comparator),this.Na=new Map,this.La=new ih,this.Ba={},this.ka=new Map,this.qa=er.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function hv(i,t,e=!0){const r=Oc(i);let o;const u=r.Fa.get(t);return u?(r.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Da()):o=await Rc(r,t,e,!0),o}async function uv(i,t){const e=Oc(i);await Rc(e,t,!0,!1)}async function Rc(i,t,e,r){const o=await Mg(i.localStore,Ne(t)),u=o.targetId,c=i.sharedClientState.addLocalQueryTarget(u,e);let p;return r&&(p=await lv(i,t,u,c==="current",o.resumeToken)),i.isPrimaryClient&&e&&Ic(i.remoteStore,o),p}async function lv(i,t,e,r,o){i.Ka=(x,D,F)=>async function(z,H,gt,yt){let rt=H.view.ma(gt);rt.ns&&(rt=await xu(z.localStore,H.query,!1).then(({documents:S})=>H.view.ma(S,rt)));const It=yt&&yt.targetChanges.get(H.targetId),Kt=yt&&yt.targetMismatches.get(H.targetId)!=null,Pt=H.view.applyChanges(rt,z.isPrimaryClient,It,Kt);return Uu(z,H.targetId,Pt.wa),Pt.snapshot}(i,x,D,F);const u=await xu(i.localStore,t,!0),c=new rv(t,u.Ts),p=c.ma(u.documents),_=fs.createSynthesizedTargetChangeForCurrentChange(e,r&&i.onlineState!=="Offline",o),y=c.applyChanges(p,i.isPrimaryClient,_);Uu(i,e,y.wa);const E=new sv(t,e,c);return i.Fa.set(t,E),i.Ma.has(e)?i.Ma.get(e).push(t):i.Ma.set(e,[t]),y.snapshot}async function cv(i,t,e){const r=ft(i),o=r.Fa.get(t),u=r.Ma.get(o.targetId);if(u.length>1)return r.Ma.set(o.targetId,u.filter(c=>!Do(c,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await Sa(r.localStore,o.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(o.targetId),e&&oh(r.remoteStore,o.targetId),Ra(r,o.targetId)}).catch(Wa)):(Ra(r,o.targetId),await Sa(r.localStore,o.targetId,!0))}async function dv(i,t){const e=ft(i),r=e.Fa.get(t),o=e.Ma.get(r.targetId);e.isPrimaryClient&&o.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),oh(e.remoteStore,r.targetId))}async function Lc(i,t){const e=ft(i);try{const r=await kg(e.localStore,t);t.targetChanges.forEach((o,u)=>{const c=e.Na.get(u);c&&(Mt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.va=!0:o.modifiedDocuments.size>0?Mt(c.va):o.removedDocuments.size>0&&(Mt(c.va),c.va=!1))}),await kc(e,r,t)}catch(r){await Wa(r)}}function Bu(i,t,e){const r=ft(i);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const o=[];r.Fa.forEach((u,c)=>{const p=c.view.Z_(t);p.snapshot&&o.push(p.snapshot)}),function(c,p){const _=ft(c);_.onlineState=p;let y=!1;_.queries.forEach((E,x)=>{for(const D of x.j_)D.Z_(p)&&(y=!0)}),y&&ch(_)}(r.eventManager,t),o.length&&r.Ca.d_(o),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function fv(i,t,e){const r=ft(i);r.sharedClientState.updateQueryState(t,"rejected",e);const o=r.Na.get(t),u=o&&o.key;if(u){let c=new Vt(Y.comparator);c=c.insert(u,ee.newNoDocument(u,nt.min()));const p=pt().add(u),_=new Bo(nt.min(),new Map,new Vt(_t),c,p);await Lc(r,_),r.Oa=r.Oa.remove(u),r.Na.delete(t),dh(r)}else await Sa(r.localStore,t,!1).then(()=>Ra(r,t,e)).catch(Wa)}function Ra(i,t,e=null){i.sharedClientState.removeLocalQueryTarget(t);for(const r of i.Ma.get(t))i.Fa.delete(r),e&&i.Ca.$a(r,e);i.Ma.delete(t),i.isPrimaryClient&&i.La.gr(t).forEach(r=>{i.La.containsKey(r)||xc(i,r)})}function xc(i,t){i.xa.delete(t.path.canonicalString());const e=i.Oa.get(t);e!==null&&(oh(i.remoteStore,e),i.Oa=i.Oa.remove(t),i.Na.delete(e),dh(i))}function Uu(i,t,e){for(const r of e)r instanceof Sc?(i.La.addReference(r.key,t),pv(i,r)):r instanceof Cc?(Z("SyncEngine","Document no longer in limbo: "+r.key),i.La.removeReference(r.key,t),i.La.containsKey(r.key)||xc(i,r.key)):it()}function pv(i,t){const e=t.key,r=e.path.canonicalString();i.Oa.get(e)||i.xa.has(r)||(Z("SyncEngine","New document in limbo: "+e),i.xa.add(r),dh(i))}function dh(i){for(;i.xa.size>0&&i.Oa.size<i.maxConcurrentLimboResolutions;){const t=i.xa.values().next().value;i.xa.delete(t);const e=new Y(Ot.fromString(t)),r=i.qa.next();i.Na.set(r,new ov(e)),i.Oa=i.Oa.insert(e,r),Ic(i.remoteStore,new bn(Ne(Xa(e.path)),r,"TargetPurposeLimboResolution",Ga.oe))}}async function kc(i,t,e){const r=ft(i),o=[],u=[],c=[];r.Fa.isEmpty()||(r.Fa.forEach((p,_)=>{c.push(r.Ka(_,t,e).then(y=>{var E;if((y||e)&&r.isPrimaryClient){const x=y?!y.fromCache:(E=e==null?void 0:e.targetChanges.get(_.targetId))===null||E===void 0?void 0:E.current;r.sharedClientState.updateQueryState(_.targetId,x?"current":"not-current")}if(y){o.push(y);const x=sh.Wi(_.targetId,y);u.push(x)}}))}),await Promise.all(c),r.Ca.d_(o),await async function(_,y){const E=ft(_);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",x=>V.forEach(y,D=>V.forEach(D.$i,F=>E.persistence.referenceDelegate.addReference(x,D.targetId,F)).next(()=>V.forEach(D.Ui,F=>E.persistence.referenceDelegate.removeReference(x,D.targetId,F)))))}catch(x){if(!ds(x))throw x;Z("LocalStore","Failed to update sequence numbers: "+x)}for(const x of y){const D=x.targetId;if(!x.fromCache){const F=E.os.get(D),q=F.snapshotVersion,z=F.withLastLimboFreeSnapshotVersion(q);E.os=E.os.insert(D,z)}}}(r.localStore,u))}async function mv(i,t){const e=ft(i);if(!e.currentUser.isEqual(t)){Z("SyncEngine","User change. New user:",t.toKey());const r=await yc(e.localStore,t);e.currentUser=t,function(u,c){u.ka.forEach(p=>{p.forEach(_=>{_.reject(new $(U.CANCELLED,c))})}),u.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await kc(e,r.hs)}}function _v(i,t){const e=ft(i),r=e.Na.get(t);if(r&&r.va)return pt().add(r.key);{let o=pt();const u=e.Ma.get(t);if(!u)return o;for(const c of u){const p=e.Fa.get(c);o=o.unionWith(p.view.Va)}return o}}function Oc(i){const t=ft(i);return t.remoteStore.remoteSyncer.applyRemoteEvent=Lc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=_v.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=fv.bind(null,t),t.Ca.d_=ev.bind(null,t.eventManager),t.Ca.$a=nv.bind(null,t.eventManager),t}class Ao{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Tc(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return xg(this.persistence,new Rg,t.initialUser,this.serializer)}Ga(t){return new bg(rh.Zr,this.serializer)}Wa(t){return new Ng}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ao.provider={build:()=>new Ao};class La{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mv.bind(null,this.syncEngine),await Qg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Jg}()}createDatastore(t){const e=Tc(t.databaseInfo.databaseId),r=function(u){return new Ug(u)}(t.databaseInfo);return function(u,c,p,_){return new qg(u,c,p,_)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,o,u,c,p){return new Zg(r,o,u,c,p)}(this.localStore,this.datastore,t.asyncQueue,e=>Bu(this.syncEngine,e,0),function(){return Ou.D()?new Ou:new Vg}())}createSyncEngine(t,e){return function(o,u,c,p,_,y,E){const x=new av(o,u,c,p,_,y);return E&&(x.Qa=!0),x}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(o){const u=ft(o);Z("RemoteStore","RemoteStore shutting down."),u.L_.add(5),await ps(u),u.k_.shutdown(),u.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}La.provider={build:()=>new La};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):on("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(t,e,r,o,u){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=o,this.user=te.UNAUTHENTICATED,this.clientId=i_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(r,async c=>{Z("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(Z("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=bc(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function aa(i,t){i.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let r=e.initialUser;i.setCredentialChangeListener(async o=>{r.isEqual(o)||(await yc(t.localStore,o),r=o)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function zu(i,t){i.asyncQueue.verifyOperationInProgress();const e=await yv(i);Z("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(r=>Du(t.remoteStore,r)),i.setAppCheckTokenChangeListener((r,o)=>Du(t.remoteStore,o)),i._onlineComponents=t}async function yv(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await aa(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(o){return o.name==="FirebaseError"?o.code===U.FAILED_PRECONDITION||o.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(e))throw e;Yi("Error using user provided cache. Falling back to memory cache: "+e),await aa(i,new Ao)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await aa(i,new Ao);return i._offlineComponents}async function wv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await zu(i,i._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await zu(i,new La))),i._onlineComponents}async function ju(i){const t=await wv(i),e=t.eventManager;return e.onListen=hv.bind(null,t.syncEngine),e.onUnlisten=cv.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=uv.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=dv.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Map;function Tv(i,t,e,r){if(t===!0&&r===!0)throw new $(U.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function Hu(i){if(Y.isDocumentKey(i))throw new $(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Ev(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":it()}function lo(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new $(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ev(i);throw new $(U.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new $(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new $(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Tv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new $(U.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new $(U.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new $(U.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class fh{constructor(t,e,r,o){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new $(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zu(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $m;switch(r.type){case"firstParty":return new Xm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=qu.get(e);r&&(Z("ComponentProvider","Removing Datastore"),qu.delete(e),r.terminate())}(this),Promise.resolve()}}function Iv(i,t,e,r={}){var o;const u=(i=lo(i,fh))._getSettings(),c=`${t}:${e}`;if(u.host!=="firestore.googleapis.com"&&u.host!==c&&Yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:c,ssl:!1})),r.mockUserToken){let p,_;if(typeof r.mockUserToken=="string")p=r.mockUserToken,_=te.MOCK_USER;else{p=Id(r.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new $(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new te(y)}i._authCredentials=new Qm(new Gl(p,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new zo(this.firestore,t,this._query)}}class si{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ki(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new si(this.firestore,t,this._key)}}class Ki extends zo{constructor(t,e,r){super(t,e,Xa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new si(this.firestore,null,new Y(t))}withConverter(t){return new Ki(this.firestore,t,this._path)}}function Pv(i,t,...e){if(i=hn(i),i instanceof fh){const r=Ot.fromString(t,...e);return Hu(r),new Ki(i,null,r)}{if(!(i instanceof si||i instanceof Ki))throw new $(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(Ot.fromString(t,...e));return Hu(r),new Ki(i.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ec(this,"async_queue_retry"),this.Vu=()=>{const r=oa();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=oa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=oa();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Zi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!ds(t))throw t;Z("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const o=function(c){let p=c.message||"";return c.stack&&(p=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),p}(r);throw on("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const o=lh.createAndSchedule(this,t,e,r,u=>this.yu(u));return this.Tu.push(o),o}fu(){this.Eu&&it()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Gu(i){return function(e,r){if(typeof e!="object"||e===null)return!1;const o=e;for(const u of r)if(u in o&&typeof o[u]=="function")return!0;return!1}(i,["next","error","complete"])}class xa extends fh{constructor(t,e,r,o){super(t,e,r,o),this.type="firestore",this._queue=new Wu,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Wu(t),this._firestoreClient=void 0,await t}}}function Av(i,t){const e=typeof i=="object"?i:sl(),r=typeof i=="string"?i:"(default)",o=Na(e,"firestore").getImmediate({identifier:r});if(!o._initialized){const u=Td("firestore");u&&Iv(o,...u)}return o}function bv(i){if(i._terminated)throw new $(U.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||Sv(i),i._firestoreClient}function Sv(i){var t,e,r;const o=i._freezeSettings(),u=function(p,_,y,E){return new f_(p,_,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Mc(E.experimentalLongPollingOptions),E.useFetchStreams)}(i._databaseId,((t=i._app)===null||t===void 0?void 0:t.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((e=o.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new vv(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(p){const _=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(_),_online:_}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bo(Jt.fromBase64String(t))}catch(e){throw new $(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new bo(Jt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new $(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new $(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new $(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _t(this._lat,t._lat)||_t(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,o){if(r.length!==o.length)return!1;for(let u=0;u<r.length;++u)if(r[u]!==o[u])return!1;return!0}(this._values,t._values)}}const Lv=new RegExp("[~\\*/\\[\\]]");function xv(i,t,e){if(t.search(Lv)>=0)throw Ku(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new Dc(...t.split("."))._internalPath}catch{throw Ku(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function Ku(i,t,e,r,o){let u=`Function ${t}() called with invalid data`;u+=". ";let c="";return new $(U.INVALID_ARGUMENT,u+i+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t,e,r,o,u){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new si(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new kv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Vc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class kv extends Nc{data(){return super.data()}}function Vc(i,t){return typeof t=="string"?xv(i,t):t instanceof Dc?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new $(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mv{convertValue(t,e="none"){switch(ri(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Nt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ii(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw it()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Oo(t,(o,u)=>{r[o]=this.convertValue(u,e)}),r}convertVectorValue(t){var e,r,o;const u=(o=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.map(c=>Nt(c.doubleValue));return new Rv(u)}convertGeoPoint(t){return new Cv(Nt(t.latitude),Nt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=$a(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(rs(t));default:return null}}convertTimestamp(t){const e=On(t);return new le(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Ot.fromString(t);Mt(vc(r));const o=new ss(r.get(1),r.get(3)),u=new Y(r.popFirst(5));return o.isEqual(e)||on(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Fc extends Nc{constructor(t,e,r,o,u,c){super(t,e,r,o,c),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new co(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Vc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class co extends Fc{data(t={}){return super.data(t)}}class Dv{constructor(t,e,r,o){this._firestore=t,this._userDataWriter=e,this._snapshot=o,this.metadata=new Kr(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new co(this._firestore,this._userDataWriter,r.key,r,new Kr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new $(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(p=>{const _=new co(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Kr(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:_,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const _=new co(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Kr(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return p.type!==0&&(y=c.indexOf(p.doc.key),c=c.delete(p.doc.key)),p.type!==1&&(c=c.add(p.doc),E=c.indexOf(p.doc.key)),{type:Nv(p.type),doc:_,oldIndex:y,newIndex:E}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Nv(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return it()}}class Bc extends Mv{constructor(t){super(),this.firestore=t}convertBytes(t){return new bo(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new si(this.firestore,null,e)}}function Vv(i,...t){var e,r,o;i=hn(i);let u={includeMetadataChanges:!1,source:"default"},c=0;typeof t[c]!="object"||Gu(t[c])||(u=t[c],c++);const p={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(Gu(t[c])){const x=t[c];t[c]=(e=x.next)===null||e===void 0?void 0:e.bind(x),t[c+1]=(r=x.error)===null||r===void 0?void 0:r.bind(x),t[c+2]=(o=x.complete)===null||o===void 0?void 0:o.bind(x)}let _,y,E;if(i instanceof si)y=lo(i.firestore,xa),E=Xa(i._key.path),_={next:x=>{t[c]&&t[c](Fv(y,i,x))},error:t[c+1],complete:t[c+2]};else{const x=lo(i,zo);y=lo(x.firestore,xa),E=x._query;const D=new Bc(y);_={next:F=>{t[c]&&t[c](new Dv(y,D,x,F))},error:t[c+1],complete:t[c+2]},Ov(i._query)}return function(D,F,q,z){const H=new gv(z),gt=new iv(F,H,q);return D.asyncQueue.enqueueAndForget(async()=>Xg(await ju(D),gt)),()=>{H.Za(),D.asyncQueue.enqueueAndForget(async()=>tv(await ju(D),gt))}}(bv(y),E,p,_)}function Fv(i,t,e){const r=e.docs.get(t._key),o=new Bc(i);return new Fc(i,o,t._key,r,new Kr(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(o){sr=o})(ir),Qi(new ti("firestore",(r,{instanceIdentifier:o,options:u})=>{const c=r.getProvider("app").getImmediate(),p=new xa(new Ym(r.getProvider("auth-internal")),new e_(r.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new $(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ss(y.options.projectId,E)}(c,o),c);return u=Object.assign({useFetchStreams:e},u),p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),Rn(lu,"4.7.3",t),Rn(lu,"4.7.3","esm2017")})();const Bv={apiKey:"YOUR_API_KEY",authDomain:"cavite-live-track.firebaseapp.com",databaseURL:"https://cavite-live-track-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"cavite-live-track",storageBucket:"cavite-live-track.firebasestorage.app",messagingSenderId:"195142604130",appId:"1:195142604130:web:82479738eed78aaf01c83b",measurementId:"G-XL267WFSFF"},Uc=rl(Bv),$u=Gm(Uc),Uv=Av(Uc);var zv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ka={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(i,t){(function(e,r){r(t)})(zv,function(e){var r="1.9.4";function o(n){var s,h,l,f;for(h=1,l=arguments.length;h<l;h++){f=arguments[h];for(s in f)n[s]=f[s]}return n}var u=Object.create||function(){function n(){}return function(s){return n.prototype=s,new n}}();function c(n,s){var h=Array.prototype.slice;if(n.bind)return n.bind.apply(n,h.call(arguments,1));var l=h.call(arguments,2);return function(){return n.apply(s,l.length?l.concat(h.call(arguments)):arguments)}}var p=0;function _(n){return"_leaflet_id"in n||(n._leaflet_id=++p),n._leaflet_id}function y(n,s,h){var l,f,g,T;return T=function(){l=!1,f&&(g.apply(h,f),f=!1)},g=function(){l?f=arguments:(n.apply(h,arguments),setTimeout(T,s),l=!0)},g}function E(n,s,h){var l=s[1],f=s[0],g=l-f;return n===l&&h?n:((n-f)%g+g)%g+f}function x(){return!1}function D(n,s){if(s===!1)return n;var h=Math.pow(10,s===void 0?6:s);return Math.round(n*h)/h}function F(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function q(n){return F(n).split(/\s+/)}function z(n,s){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?u(n.options):{});for(var h in s)n.options[h]=s[h];return n.options}function H(n,s,h){var l=[];for(var f in n)l.push(encodeURIComponent(h?f.toUpperCase():f)+"="+encodeURIComponent(n[f]));return(!s||s.indexOf("?")===-1?"?":"&")+l.join("&")}var gt=/\{ *([\w_ -]+) *\}/g;function yt(n,s){return n.replace(gt,function(h,l){var f=s[l];if(f===void 0)throw new Error("No value provided for variable "+h);return typeof f=="function"&&(f=f(s)),f})}var rt=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function It(n,s){for(var h=0;h<n.length;h++)if(n[h]===s)return h;return-1}var Kt="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function Pt(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var S=0;function w(n){var s=+new Date,h=Math.max(0,16-(s-S));return S=s+h,window.setTimeout(n,h)}var I=window.requestAnimationFrame||Pt("RequestAnimationFrame")||w,b=window.cancelAnimationFrame||Pt("CancelAnimationFrame")||Pt("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function A(n,s,h){if(h&&I===w)n.call(s);else return I.call(window,c(n,s))}function C(n){n&&b.call(window,n)}var P={__proto__:null,extend:o,create:u,bind:c,get lastId(){return p},stamp:_,throttle:y,wrapNum:E,falseFn:x,formatNum:D,trim:F,splitWords:q,setOptions:z,getParamString:H,template:yt,isArray:rt,indexOf:It,emptyImageUrl:Kt,requestFn:I,cancelFn:b,requestAnimFrame:A,cancelAnimFrame:C};function jt(){}jt.extend=function(n){var s=function(){z(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},h=s.__super__=this.prototype,l=u(h);l.constructor=s,s.prototype=l;for(var f in this)Object.prototype.hasOwnProperty.call(this,f)&&f!=="prototype"&&f!=="__super__"&&(s[f]=this[f]);return n.statics&&o(s,n.statics),n.includes&&(Dn(n.includes),o.apply(null,[l].concat(n.includes))),o(l,n),delete l.statics,delete l.includes,l.options&&(l.options=h.options?u(h.options):{},o(l.options,n.options)),l._initHooks=[],l.callInitHooks=function(){if(!this._initHooksCalled){h.callInitHooks&&h.callInitHooks.call(this),this._initHooksCalled=!0;for(var g=0,T=l._initHooks.length;g<T;g++)l._initHooks[g].call(this)}},s},jt.include=function(n){var s=this.prototype.options;return o(this.prototype,n),n.options&&(this.prototype.options=s,this.mergeOptions(n.options)),this},jt.mergeOptions=function(n){return o(this.prototype.options,n),this},jt.addInitHook=function(n){var s=Array.prototype.slice.call(arguments,1),h=typeof n=="function"?n:function(){this[n].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(h),this};function Dn(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=rt(n)?n:[n];for(var s=0;s<n.length;s++)n[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var ie={on:function(n,s,h){if(typeof n=="object")for(var l in n)this._on(l,n[l],s);else{n=q(n);for(var f=0,g=n.length;f<g;f++)this._on(n[f],s,h)}return this},off:function(n,s,h){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var l in n)this._off(l,n[l],s);else{n=q(n);for(var f=arguments.length===1,g=0,T=n.length;g<T;g++)f?this._off(n[g]):this._off(n[g],s,h)}return this},_on:function(n,s,h,l){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(n,s,h)===!1){h===this&&(h=void 0);var f={fn:s,ctx:h};l&&(f.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(f)}},_off:function(n,s,h){var l,f,g;if(this._events&&(l=this._events[n],!!l)){if(arguments.length===1){if(this._firingCount)for(f=0,g=l.length;f<g;f++)l[f].fn=x;delete this._events[n];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var T=this._listens(n,s,h);if(T!==!1){var k=l[T];this._firingCount&&(k.fn=x,this._events[n]=l=l.slice()),l.splice(T,1)}}},fire:function(n,s,h){if(!this.listens(n,h))return this;var l=o({},s,{type:n,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var f=this._events[n];if(f){this._firingCount=this._firingCount+1||1;for(var g=0,T=f.length;g<T;g++){var k=f[g],O=k.fn;k.once&&this.off(n,O,k.ctx),O.call(k.ctx||this,l)}this._firingCount--}}return h&&this._propagateEvent(l),this},listens:function(n,s,h,l){typeof n!="string"&&console.warn('"string" type argument expected');var f=s;typeof s!="function"&&(l=!!s,f=void 0,h=void 0);var g=this._events&&this._events[n];if(g&&g.length&&this._listens(n,f,h)!==!1)return!0;if(l){for(var T in this._eventParents)if(this._eventParents[T].listens(n,s,h,l))return!0}return!1},_listens:function(n,s,h){if(!this._events)return!1;var l=this._events[n]||[];if(!s)return!!l.length;h===this&&(h=void 0);for(var f=0,g=l.length;f<g;f++)if(l[f].fn===s&&l[f].ctx===h)return f;return!1},once:function(n,s,h){if(typeof n=="object")for(var l in n)this._on(l,n[l],s,!0);else{n=q(n);for(var f=0,g=n.length;f<g;f++)this._on(n[f],s,h,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[_(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[_(n)],this},_propagateEvent:function(n){for(var s in this._eventParents)this._eventParents[s].fire(n.type,o({layer:n.target,propagatedFrom:n.target},n),!0)}};ie.addEventListener=ie.on,ie.removeEventListener=ie.clearAllEventListeners=ie.off,ie.addOneTimeEventListener=ie.once,ie.fireEvent=ie.fire,ie.hasEventListeners=ie.listens;var Ee=jt.extend(ie);function Q(n,s,h){this.x=h?Math.round(n):n,this.y=h?Math.round(s):s}var oi=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};Q.prototype={clone:function(){return new Q(this.x,this.y)},add:function(n){return this.clone()._add(J(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(J(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new Q(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new Q(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=oi(this.x),this.y=oi(this.y),this},distanceTo:function(n){n=J(n);var s=n.x-this.x,h=n.y-this.y;return Math.sqrt(s*s+h*h)},equals:function(n){return n=J(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=J(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+D(this.x)+", "+D(this.y)+")"}};function J(n,s,h){return n instanceof Q?n:rt(n)?new Q(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new Q(n.x,n.y):new Q(n,s,h)}function At(n,s){if(n)for(var h=s?[n,s]:n,l=0,f=h.length;l<f;l++)this.extend(h[l])}At.prototype={extend:function(n){var s,h;if(!n)return this;if(n instanceof Q||typeof n[0]=="number"||"x"in n)s=h=J(n);else if(n=Ct(n),s=n.min,h=n.max,!s||!h)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=h.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(h.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(h.y,this.max.y)),this},getCenter:function(n){return J((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return J(this.min.x,this.max.y)},getTopRight:function(){return J(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var s,h;return typeof n[0]=="number"||n instanceof Q?n=J(n):n=Ct(n),n instanceof At?(s=n.min,h=n.max):s=h=n,s.x>=this.min.x&&h.x<=this.max.x&&s.y>=this.min.y&&h.y<=this.max.y},intersects:function(n){n=Ct(n);var s=this.min,h=this.max,l=n.min,f=n.max,g=f.x>=s.x&&l.x<=h.x,T=f.y>=s.y&&l.y<=h.y;return g&&T},overlaps:function(n){n=Ct(n);var s=this.min,h=this.max,l=n.min,f=n.max,g=f.x>s.x&&l.x<h.x,T=f.y>s.y&&l.y<h.y;return g&&T},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var s=this.min,h=this.max,l=Math.abs(s.x-h.x)*n,f=Math.abs(s.y-h.y)*n;return Ct(J(s.x-l,s.y-f),J(h.x+l,h.y+f))},equals:function(n){return n?(n=Ct(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function Ct(n,s){return!n||n instanceof At?n:new At(n,s)}function mt(n,s){if(n)for(var h=s?[n,s]:n,l=0,f=h.length;l<f;l++)this.extend(h[l])}mt.prototype={extend:function(n){var s=this._southWest,h=this._northEast,l,f;if(n instanceof lt)l=n,f=n;else if(n instanceof mt){if(l=n._southWest,f=n._northEast,!l||!f)return this}else return n?this.extend(at(n)||xt(n)):this;return!s&&!h?(this._southWest=new lt(l.lat,l.lng),this._northEast=new lt(f.lat,f.lng)):(s.lat=Math.min(l.lat,s.lat),s.lng=Math.min(l.lng,s.lng),h.lat=Math.max(f.lat,h.lat),h.lng=Math.max(f.lng,h.lng)),this},pad:function(n){var s=this._southWest,h=this._northEast,l=Math.abs(s.lat-h.lat)*n,f=Math.abs(s.lng-h.lng)*n;return new mt(new lt(s.lat-l,s.lng-f),new lt(h.lat+l,h.lng+f))},getCenter:function(){return new lt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new lt(this.getNorth(),this.getWest())},getSouthEast:function(){return new lt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof lt||"lat"in n?n=at(n):n=xt(n);var s=this._southWest,h=this._northEast,l,f;return n instanceof mt?(l=n.getSouthWest(),f=n.getNorthEast()):l=f=n,l.lat>=s.lat&&f.lat<=h.lat&&l.lng>=s.lng&&f.lng<=h.lng},intersects:function(n){n=xt(n);var s=this._southWest,h=this._northEast,l=n.getSouthWest(),f=n.getNorthEast(),g=f.lat>=s.lat&&l.lat<=h.lat,T=f.lng>=s.lng&&l.lng<=h.lng;return g&&T},overlaps:function(n){n=xt(n);var s=this._southWest,h=this._northEast,l=n.getSouthWest(),f=n.getNorthEast(),g=f.lat>s.lat&&l.lat<h.lat,T=f.lng>s.lng&&l.lng<h.lng;return g&&T},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,s){return n?(n=xt(n),this._southWest.equals(n.getSouthWest(),s)&&this._northEast.equals(n.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function xt(n,s){return n instanceof mt?n:new mt(n,s)}function lt(n,s,h){if(isNaN(n)||isNaN(s))throw new Error("Invalid LatLng object: ("+n+", "+s+")");this.lat=+n,this.lng=+s,h!==void 0&&(this.alt=+h)}lt.prototype={equals:function(n,s){if(!n)return!1;n=at(n);var h=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return h<=(s===void 0?1e-9:s)},toString:function(n){return"LatLng("+D(this.lat,n)+", "+D(this.lng,n)+")"},distanceTo:function(n){return Ce.distance(this,at(n))},wrap:function(){return Ce.wrapLatLng(this)},toBounds:function(n){var s=180*n/40075017,h=s/Math.cos(Math.PI/180*this.lat);return xt([this.lat-s,this.lng-h],[this.lat+s,this.lng+h])},clone:function(){return new lt(this.lat,this.lng,this.alt)}};function at(n,s,h){return n instanceof lt?n:rt(n)&&typeof n[0]!="object"?n.length===3?new lt(n[0],n[1],n[2]):n.length===2?new lt(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new lt(n.lat,"lng"in n?n.lng:n.lon,n.alt):s===void 0?null:new lt(n,s,h)}var ae={latLngToPoint:function(n,s){var h=this.projection.project(n),l=this.scale(s);return this.transformation._transform(h,l)},pointToLatLng:function(n,s){var h=this.scale(s),l=this.transformation.untransform(n,h);return this.projection.unproject(l)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var s=this.projection.bounds,h=this.scale(n),l=this.transformation.transform(s.min,h),f=this.transformation.transform(s.max,h);return new At(l,f)},infinite:!1,wrapLatLng:function(n){var s=this.wrapLng?E(n.lng,this.wrapLng,!0):n.lng,h=this.wrapLat?E(n.lat,this.wrapLat,!0):n.lat,l=n.alt;return new lt(h,s,l)},wrapLatLngBounds:function(n){var s=n.getCenter(),h=this.wrapLatLng(s),l=s.lat-h.lat,f=s.lng-h.lng;if(l===0&&f===0)return n;var g=n.getSouthWest(),T=n.getNorthEast(),k=new lt(g.lat-l,g.lng-f),O=new lt(T.lat-l,T.lng-f);return new mt(k,O)}},Ce=o({},ae,{wrapLng:[-180,180],R:6371e3,distance:function(n,s){var h=Math.PI/180,l=n.lat*h,f=s.lat*h,g=Math.sin((s.lat-n.lat)*h/2),T=Math.sin((s.lng-n.lng)*h/2),k=g*g+Math.cos(l)*Math.cos(f)*T*T,O=2*Math.atan2(Math.sqrt(k),Math.sqrt(1-k));return this.R*O}}),_s=6378137,un={R:_s,MAX_LATITUDE:85.0511287798,project:function(n){var s=Math.PI/180,h=this.MAX_LATITUDE,l=Math.max(Math.min(h,n.lat),-h),f=Math.sin(l*s);return new Q(this.R*n.lng*s,this.R*Math.log((1+f)/(1-f))/2)},unproject:function(n){var s=180/Math.PI;return new lt((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*s,n.x*s/this.R)},bounds:function(){var n=_s*Math.PI;return new At([-n,-n],[n,n])}()};function ln(n,s,h,l){if(rt(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=s,this._c=h,this._d=l}ln.prototype={transform:function(n,s){return this._transform(n.clone(),s)},_transform:function(n,s){return s=s||1,n.x=s*(this._a*n.x+this._b),n.y=s*(this._c*n.y+this._d),n},untransform:function(n,s){return s=s||1,new Q((n.x/s-this._b)/this._a,(n.y/s-this._d)/this._c)}};function Be(n,s,h,l){return new ln(n,s,h,l)}var Nn=o({},Ce,{code:"EPSG:3857",projection:un,transformation:function(){var n=.5/(Math.PI*un.R);return Be(n,.5,-n,.5)}()}),hr=o({},Nn,{code:"EPSG:900913"});function ai(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function ur(n,s){var h="",l,f,g,T,k,O;for(l=0,g=n.length;l<g;l++){for(k=n[l],f=0,T=k.length;f<T;f++)O=k[f],h+=(f?"L":"M")+O.x+" "+O.y;h+=s?W.svg?"z":"x":""}return h||"M0 0"}var lr=document.documentElement.style,hi="ActiveXObject"in window,gs=hi&&!document.addEventListener,ui="msLaunchUri"in navigator&&!("documentMode"in document),li=pe("webkit"),vs=pe("android"),ci=pe("android 2")||pe("android 3"),cr=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ys=vs&&pe("Google")&&cr<537&&!("AudioNode"in window),Ft=!!window.opera,Ht=!ui&&pe("chrome"),Vn=pe("gecko")&&!li&&!Ft&&!hi,ws=!Ht&&pe("safari"),dr=pe("phantom"),Ts="OTransition"in lr,Fn=navigator.platform.indexOf("Win")===0,fr=hi&&"transition"in lr,di="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!ci,fi="MozPerspective"in lr,jo=!window.L_DISABLE_3D&&(fr||di||fi)&&!Ts&&!dr,Bn=typeof orientation<"u"||pe("mobile"),pr=Bn&&li,Es=Bn&&di,mr=!window.PointerEvent&&window.MSPointerEvent,cn=!!(window.PointerEvent||mr),pi="ontouchstart"in window||!!window.TouchEvent,_r=!window.L_NO_TOUCH&&(pi||cn),Ue=Bn&&Ft,Is=Bn&&Vn,mi=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Ps=function(){var n=!1;try{var s=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",x,s),window.removeEventListener("testPassiveEventSupport",x,s)}catch{}return n}(),Un=function(){return!!document.createElement("canvas").getContext}(),_i=!!(document.createElementNS&&ai("svg").createSVGRect),$t=!!_i&&function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),As=!_i&&function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var s=n.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),zn=navigator.platform.indexOf("Mac")===0,jn=navigator.platform.indexOf("Linux")===0;function pe(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var W={ie:hi,ielt9:gs,edge:ui,webkit:li,android:vs,android23:ci,androidStock:ys,opera:Ft,chrome:Ht,gecko:Vn,safari:ws,phantom:dr,opera12:Ts,win:Fn,ie3d:fr,webkit3d:di,gecko3d:fi,any3d:jo,mobile:Bn,mobileWebkit:pr,mobileWebkit3d:Es,msPointer:mr,pointer:cn,touch:_r,touchNative:pi,mobileOpera:Ue,mobileGecko:Is,retina:mi,passiveEvents:Ps,canvas:Un,svg:_i,vml:As,inlineSvg:$t,mac:zn,linux:jn},ze=W.msPointer?"MSPointerDown":"pointerdown",bs=W.msPointer?"MSPointerMove":"pointermove",Ss=W.msPointer?"MSPointerUp":"pointerup",qn=W.msPointer?"MSPointerCancel":"pointercancel",gi={touchstart:ze,touchmove:bs,touchend:Ss,touchcancel:qn},vi={touchstart:wi,touchmove:yi,touchend:yi,touchcancel:yi},Ie={},Pe=!1;function Cs(n,s,h){return s==="touchstart"&&Ls(),vi[s]?(h=vi[s].bind(this,h),n.addEventListener(gi[s],h,!1),h):(console.warn("wrong event specified:",s),x)}function Rs(n,s,h){if(!gi[s]){console.warn("wrong event specified:",s);return}n.removeEventListener(gi[s],h,!1)}function gr(n){Ie[n.pointerId]=n}function vr(n){Ie[n.pointerId]&&(Ie[n.pointerId]=n)}function yr(n){delete Ie[n.pointerId]}function Ls(){Pe||(document.addEventListener(ze,gr,!0),document.addEventListener(bs,vr,!0),document.addEventListener(Ss,yr,!0),document.addEventListener(qn,yr,!0),Pe=!0)}function yi(n,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var h in Ie)s.touches.push(Ie[h]);s.changedTouches=[s],n(s)}}function wi(n,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&Rt(s),yi(n,s)}function xs(n){var s={},h,l;for(l in n)h=n[l],s[l]=h&&h.bind?h.bind(n):h;return n=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var wr=200;function Hn(n,s){n.addEventListener("dblclick",s);var h=0,l;function f(g){if(g.detail!==1){l=g.detail;return}if(!(g.pointerType==="mouse"||g.sourceCapabilities&&!g.sourceCapabilities.firesTouchEvents)){var T=kr(g);if(!(T.some(function(O){return O instanceof HTMLLabelElement&&O.attributes.for})&&!T.some(function(O){return O instanceof HTMLInputElement||O instanceof HTMLSelectElement}))){var k=Date.now();k-h<=wr?(l++,l===2&&s(xs(g))):l=1,h=k}}}return n.addEventListener("click",f),{dblclick:s,simDblclick:f}}function je(n,s){n.removeEventListener("dblclick",s.dblclick),n.removeEventListener("click",s.simDblclick)}var Zn=He(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Wn=He(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Tr=Wn==="webkitTransition"||Wn==="OTransition"?Wn+"End":"transitionend";function Er(n){return typeof n=="string"?document.getElementById(n):n}function dn(n,s){var h=n.style[s]||n.currentStyle&&n.currentStyle[s];if((!h||h==="auto")&&document.defaultView){var l=document.defaultView.getComputedStyle(n,null);h=l?l[s]:null}return h==="auto"?null:h}function ht(n,s,h){var l=document.createElement(n);return l.className=s||"",h&&h.appendChild(l),l}function Et(n){var s=n.parentNode;s&&s.removeChild(n)}function Gn(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function qe(n){var s=n.parentNode;s&&s.lastChild!==n&&s.appendChild(n)}function fn(n){var s=n.parentNode;s&&s.firstChild!==n&&s.insertBefore(n,s.firstChild)}function Ir(n,s){if(n.classList!==void 0)return n.classList.contains(s);var h=me(n);return h.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(h)}function et(n,s){if(n.classList!==void 0)for(var h=q(s),l=0,f=h.length;l<f;l++)n.classList.add(h[l]);else if(!Ir(n,s)){var g=me(n);Pr(n,(g?g+" ":"")+s)}}function bt(n,s){n.classList!==void 0?n.classList.remove(s):Pr(n,F((" "+me(n)+" ").replace(" "+s+" "," ")))}function Pr(n,s){n.className.baseVal===void 0?n.className=s:n.className.baseVal=s}function me(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function kt(n,s){"opacity"in n.style?n.style.opacity=s:"filter"in n.style&&Ti(n,s)}function Ti(n,s){var h=!1,l="DXImageTransform.Microsoft.Alpha";try{h=n.filters.item(l)}catch{if(s===1)return}s=Math.round(s*100),h?(h.Enabled=s!==100,h.Opacity=s):n.style.filter+=" progid:"+l+"(opacity="+s+")"}function He(n){for(var s=document.documentElement.style,h=0;h<n.length;h++)if(n[h]in s)return n[h];return!1}function Re(n,s,h){var l=s||new Q(0,0);n.style[Zn]=(W.ie3d?"translate("+l.x+"px,"+l.y+"px)":"translate3d("+l.x+"px,"+l.y+"px,0)")+(h?" scale("+h+")":"")}function X(n,s){n._leaflet_pos=s,W.any3d?Re(n,s):(n.style.left=s.x+"px",n.style.top=s.y+"px")}function _e(n){return n._leaflet_pos||new Q(0,0)}var Ae,be,Ar;if("onselectstart"in document)Ae=function(){G(window,"selectstart",Rt)},be=function(){wt(window,"selectstart",Rt)};else{var pn=He(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Ae=function(){if(pn){var n=document.documentElement.style;Ar=n[pn],n[pn]="none"}},be=function(){pn&&(document.documentElement.style[pn]=Ar,Ar=void 0)}}function br(){G(window,"dragstart",Rt)}function Sr(){wt(window,"dragstart",Rt)}var Ei,Cr;function Ze(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(ce(),Ei=n,Cr=n.style.outlineStyle,n.style.outlineStyle="none",G(window,"keydown",ce))}function ce(){Ei&&(Ei.style.outlineStyle=Cr,Ei=void 0,Cr=void 0,wt(window,"keydown",ce))}function Rr(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function Ii(n){var s=n.getBoundingClientRect();return{x:s.width/n.offsetWidth||1,y:s.height/n.offsetHeight||1,boundingClientRect:s}}var ks={__proto__:null,TRANSFORM:Zn,TRANSITION:Wn,TRANSITION_END:Tr,get:Er,getStyle:dn,create:ht,remove:Et,empty:Gn,toFront:qe,toBack:fn,hasClass:Ir,addClass:et,removeClass:bt,setClass:Pr,getClass:me,setOpacity:kt,testProp:He,setTransform:Re,setPosition:X,getPosition:_e,get disableTextSelection(){return Ae},get enableTextSelection(){return be},disableImageDrag:br,enableImageDrag:Sr,preventOutline:Ze,restoreOutline:ce,getSizedParentNode:Rr,getScale:Ii};function G(n,s,h,l){if(s&&typeof s=="object")for(var f in s)Lr(n,f,s[f],h);else{s=q(s);for(var g=0,T=s.length;g<T;g++)Lr(n,s[g],h,l)}return this}var ge="_leaflet_events";function wt(n,s,h,l){if(arguments.length===1)Os(n),delete n[ge];else if(s&&typeof s=="object")for(var f in s)xr(n,f,s[f],h);else if(s=q(s),arguments.length===2)Os(n,function(k){return It(s,k)!==-1});else for(var g=0,T=s.length;g<T;g++)xr(n,s[g],h,l);return this}function Os(n,s){for(var h in n[ge]){var l=h.split(/\d/)[0];(!s||s(l))&&xr(n,l,null,null,h)}}var ve={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Lr(n,s,h,l){var f=s+_(h)+(l?"_"+_(l):"");if(n[ge]&&n[ge][f])return this;var g=function(k){return h.call(l||n,k||window.event)},T=g;!W.touchNative&&W.pointer&&s.indexOf("touch")===0?g=Cs(n,s,g):W.touch&&s==="dblclick"?g=Hn(n,g):"addEventListener"in n?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?n.addEventListener(ve[s]||s,g,W.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(g=function(k){k=k||window.event,Or(n,k)&&T(k)},n.addEventListener(ve[s],g,!1)):n.addEventListener(s,T,!1):n.attachEvent("on"+s,g),n[ge]=n[ge]||{},n[ge][f]=g}function xr(n,s,h,l,f){f=f||s+_(h)+(l?"_"+_(l):"");var g=n[ge]&&n[ge][f];if(!g)return this;!W.touchNative&&W.pointer&&s.indexOf("touch")===0?Rs(n,s,g):W.touch&&s==="dblclick"?je(n,g):"removeEventListener"in n?n.removeEventListener(ve[s]||s,g,!1):n.detachEvent("on"+s,g),n[ge][f]=null}function ye(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function mn(n){return Lr(n,"wheel",ye),this}function _n(n){return G(n,"mousedown touchstart dblclick contextmenu",ye),n._leaflet_disable_click=!0,this}function Rt(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function de(n){return Rt(n),ye(n),this}function kr(n){if(n.composedPath)return n.composedPath();for(var s=[],h=n.target;h;)s.push(h),h=h.parentNode;return s}function Pi(n,s){if(!s)return new Q(n.clientX,n.clientY);var h=Ii(s),l=h.boundingClientRect;return new Q((n.clientX-l.left)/h.x-s.clientLeft,(n.clientY-l.top)/h.y-s.clientTop)}var St=W.linux&&W.chrome?window.devicePixelRatio:W.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Ms(n){return W.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/St:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function Or(n,s){var h=s.relatedTarget;if(!h)return!0;try{for(;h&&h!==n;)h=h.parentNode}catch{return!1}return h!==n}var Ds={__proto__:null,on:G,off:wt,stopPropagation:ye,disableScrollPropagation:mn,disableClickPropagation:_n,preventDefault:Rt,stop:de,getPropagationPath:kr,getMousePosition:Pi,getWheelDelta:Ms,isExternalTarget:Or,addListener:G,removeListener:wt},Mr=Ee.extend({run:function(n,s,h,l){this.stop(),this._el=n,this._inProgress=!0,this._duration=h||.25,this._easeOutPower=1/Math.max(l||.5,.2),this._startPos=_e(n),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=A(this._animate,this),this._step()},_step:function(n){var s=+new Date-this._startTime,h=this._duration*1e3;s<h?this._runFrame(this._easeOut(s/h),n):(this._runFrame(1),this._complete())},_runFrame:function(n,s){var h=this._startPos.add(this._offset.multiplyBy(n));s&&h._round(),X(this._el,h),this.fire("step")},_complete:function(){C(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),ot=Ee.extend({options:{crs:Nn,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,s){s=z(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=c(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(at(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Wn&&W.any3d&&!W.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),G(this._proxy,Tr,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,s,h){if(s=s===void 0?this._zoom:this._limitZoom(s),n=this._limitCenter(at(n),s,this.options.maxBounds),h=h||{},this._stop(),this._loaded&&!h.reset&&h!==!0){h.animate!==void 0&&(h.zoom=o({animate:h.animate},h.zoom),h.pan=o({animate:h.animate,duration:h.duration},h.pan));var l=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,s,h.zoom):this._tryAnimatedPan(n,h.pan);if(l)return clearTimeout(this._sizeTimer),this}return this._resetView(n,s,h.pan&&h.pan.noMoveStart),this},setZoom:function(n,s){return this._loaded?this.setView(this.getCenter(),n,{zoom:s}):(this._zoom=n,this)},zoomIn:function(n,s){return n=n||(W.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,s)},zoomOut:function(n,s){return n=n||(W.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,s)},setZoomAround:function(n,s,h){var l=this.getZoomScale(s),f=this.getSize().divideBy(2),g=n instanceof Q?n:this.latLngToContainerPoint(n),T=g.subtract(f).multiplyBy(1-1/l),k=this.containerPointToLatLng(f.add(T));return this.setView(k,s,{zoom:h})},_getBoundsCenterZoom:function(n,s){s=s||{},n=n.getBounds?n.getBounds():xt(n);var h=J(s.paddingTopLeft||s.padding||[0,0]),l=J(s.paddingBottomRight||s.padding||[0,0]),f=this.getBoundsZoom(n,!1,h.add(l));if(f=typeof s.maxZoom=="number"?Math.min(s.maxZoom,f):f,f===1/0)return{center:n.getCenter(),zoom:f};var g=l.subtract(h).divideBy(2),T=this.project(n.getSouthWest(),f),k=this.project(n.getNorthEast(),f),O=this.unproject(T.add(k).divideBy(2).add(g),f);return{center:O,zoom:f}},fitBounds:function(n,s){if(n=xt(n),!n.isValid())throw new Error("Bounds are not valid.");var h=this._getBoundsCenterZoom(n,s);return this.setView(h.center,h.zoom,s)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,s){return this.setView(n,this._zoom,{pan:s})},panBy:function(n,s){if(n=J(n).round(),s=s||{},!n.x&&!n.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Mr,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){et(this._mapPane,"leaflet-pan-anim");var h=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,h,s.duration||.25,s.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,s,h){if(h=h||{},h.animate===!1||!W.any3d)return this.setView(n,s,h);this._stop();var l=this.project(this.getCenter()),f=this.project(n),g=this.getSize(),T=this._zoom;n=at(n),s=s===void 0?T:s;var k=Math.max(g.x,g.y),O=k*this.getZoomScale(T,s),N=f.distanceTo(l)||1,j=1.42,K=j*j;function st(Ut){var Ys=Ut?-1:1,ld=Ut?O:k,cd=O*O-k*k+Ys*K*K*N*N,dd=2*ld*K*N,$o=cd/dd,Dh=Math.sqrt($o*$o+1)-$o,fd=Dh<1e-9?-18:Math.log(Dh);return fd}function se(Ut){return(Math.exp(Ut)-Math.exp(-Ut))/2}function Wt(Ut){return(Math.exp(Ut)+Math.exp(-Ut))/2}function Te(Ut){return se(Ut)/Wt(Ut)}var ue=st(0);function Vi(Ut){return k*(Wt(ue)/Wt(ue+j*Ut))}function od(Ut){return k*(Wt(ue)*Te(ue+j*Ut)-se(ue))/K}function ad(Ut){return 1-Math.pow(1-Ut,1.5)}var hd=Date.now(),Oh=(st(1)-ue)/j,ud=h.duration?1e3*h.duration:1e3*Oh*.8;function Mh(){var Ut=(Date.now()-hd)/ud,Ys=ad(Ut)*Oh;Ut<=1?(this._flyToFrame=A(Mh,this),this._move(this.unproject(l.add(f.subtract(l).multiplyBy(od(Ys)/N)),T),this.getScaleZoom(k/Vi(Ys),T),{flyTo:!0})):this._move(n,s)._moveEnd(!0)}return this._moveStart(!0,h.noMoveStart),Mh.call(this),this},flyToBounds:function(n,s){var h=this._getBoundsCenterZoom(n,s);return this.flyTo(h.center,h.zoom,s)},setMaxBounds:function(n){return n=xt(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var s=this.options.minZoom;return this.options.minZoom=n,this._loaded&&s!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var s=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&s!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,s){this._enforcingBounds=!0;var h=this.getCenter(),l=this._limitCenter(h,this._zoom,xt(n));return h.equals(l)||this.panTo(l,s),this._enforcingBounds=!1,this},panInside:function(n,s){s=s||{};var h=J(s.paddingTopLeft||s.padding||[0,0]),l=J(s.paddingBottomRight||s.padding||[0,0]),f=this.project(this.getCenter()),g=this.project(n),T=this.getPixelBounds(),k=Ct([T.min.add(h),T.max.subtract(l)]),O=k.getSize();if(!k.contains(g)){this._enforcingBounds=!0;var N=g.subtract(k.getCenter()),j=k.extend(g).getSize().subtract(O);f.x+=N.x<0?-j.x:j.x,f.y+=N.y<0?-j.y:j.y,this.panTo(this.unproject(f),s),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=o({animate:!1,pan:!0},n===!0?{animate:!0}:n);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var h=this.getSize(),l=s.divideBy(2).round(),f=h.divideBy(2).round(),g=l.subtract(f);return!g.x&&!g.y?this:(n.animate&&n.pan?this.panBy(g):(n.pan&&this._rawPanBy(g),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(c(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:h}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=o({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=c(this._handleGeolocationResponse,this),h=c(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,h,n):navigator.geolocation.getCurrentPosition(s,h,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var s=n.code,h=n.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+h+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var s=n.coords.latitude,h=n.coords.longitude,l=new lt(s,h),f=l.toBounds(n.coords.accuracy*2),g=this._locateOptions;if(g.setView){var T=this.getBoundsZoom(f);this.setView(l,g.maxZoom?Math.min(T,g.maxZoom):T)}var k={latlng:l,bounds:f,timestamp:n.timestamp};for(var O in n.coords)typeof n.coords[O]=="number"&&(k[O]=n.coords[O]);this.fire("locationfound",k)}},addHandler:function(n,s){if(!s)return this;var h=this[n]=new s(this);return this._handlers.push(h),this.options[n]&&h.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Et(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(C(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)Et(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,s){var h="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),l=ht("div",h,s||this._mapPane);return n&&(this._panes[n]=l),l},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),s=this.unproject(n.getBottomLeft()),h=this.unproject(n.getTopRight());return new mt(s,h)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,s,h){n=xt(n),h=J(h||[0,0]);var l=this.getZoom()||0,f=this.getMinZoom(),g=this.getMaxZoom(),T=n.getNorthWest(),k=n.getSouthEast(),O=this.getSize().subtract(h),N=Ct(this.project(k,l),this.project(T,l)).getSize(),j=W.any3d?this.options.zoomSnap:1,K=O.x/N.x,st=O.y/N.y,se=s?Math.max(K,st):Math.min(K,st);return l=this.getScaleZoom(se,l),j&&(l=Math.round(l/(j/100))*(j/100),l=s?Math.ceil(l/j)*j:Math.floor(l/j)*j),Math.max(f,Math.min(g,l))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new Q(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,s){var h=this._getTopLeftPoint(n,s);return new At(h,h.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,s){var h=this.options.crs;return s=s===void 0?this._zoom:s,h.scale(n)/h.scale(s)},getScaleZoom:function(n,s){var h=this.options.crs;s=s===void 0?this._zoom:s;var l=h.zoom(n*h.scale(s));return isNaN(l)?1/0:l},project:function(n,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(at(n),s)},unproject:function(n,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(J(n),s)},layerPointToLatLng:function(n){var s=J(n).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(n){var s=this.project(at(n))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(at(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(xt(n))},distance:function(n,s){return this.options.crs.distance(at(n),at(s))},containerPointToLayerPoint:function(n){return J(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return J(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var s=this.containerPointToLayerPoint(J(n));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(at(n)))},mouseEventToContainerPoint:function(n){return Pi(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var s=this._container=Er(n);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");G(s,"scroll",this._onScroll,this),this._containerId=_(s)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&W.any3d,et(n,"leaflet-container"+(W.touch?" leaflet-touch":"")+(W.retina?" leaflet-retina":"")+(W.ielt9?" leaflet-oldie":"")+(W.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=dn(n,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),X(this._mapPane,new Q(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(et(n.markerPane,"leaflet-zoom-hide"),et(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,s,h){X(this._mapPane,new Q(0,0));var l=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var f=this._zoom!==s;this._moveStart(f,h)._move(n,s)._moveEnd(f),this.fire("viewreset"),l&&this.fire("load")},_moveStart:function(n,s){return n&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(n,s,h,l){s===void 0&&(s=this._zoom);var f=this._zoom!==s;return this._zoom=s,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),l?h&&h.pinch&&this.fire("zoom",h):((f||h&&h.pinch)&&this.fire("zoom",h),this.fire("move",h)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return C(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){X(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[_(this._container)]=this;var s=n?wt:G;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),W.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){C(this._resizeRequest),this._resizeRequest=A(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,s){for(var h=[],l,f=s==="mouseout"||s==="mouseover",g=n.target||n.srcElement,T=!1;g;){if(l=this._targets[_(g)],l&&(s==="click"||s==="preclick")&&this._draggableMoved(l)){T=!0;break}if(l&&l.listens(s,!0)&&(f&&!Or(g,n)||(h.push(l),f))||g===this._container)break;g=g.parentNode}return!h.length&&!T&&!f&&this.listens(s,!0)&&(h=[this]),h},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var s=n.target||n.srcElement;if(!(!this._loaded||s._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(s))){var h=n.type;h==="mousedown"&&Ze(s),this._fireDOMEvent(n,h)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,s,h){if(n.type==="click"){var l=o({},n);l.type="preclick",this._fireDOMEvent(l,l.type,h)}var f=this._findEventTargets(n,s);if(h){for(var g=[],T=0;T<h.length;T++)h[T].listens(s,!0)&&g.push(h[T]);f=g.concat(f)}if(f.length){s==="contextmenu"&&Rt(n);var k=f[0],O={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var N=k.getLatLng&&(!k._radius||k._radius<=10);O.containerPoint=N?this.latLngToContainerPoint(k.getLatLng()):this.mouseEventToContainerPoint(n),O.layerPoint=this.containerPointToLayerPoint(O.containerPoint),O.latlng=N?k.getLatLng():this.layerPointToLatLng(O.layerPoint)}for(T=0;T<f.length;T++)if(f[T].fire(s,O,!0),O.originalEvent._stopped||f[T].options.bubblingMouseEvents===!1&&It(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,s=this._handlers.length;n<s;n++)this._handlers[n].disable()},whenReady:function(n,s){return this._loaded?n.call(s||this,{target:this}):this.on("load",n,s),this},_getMapPanePos:function(){return _e(this._mapPane)||new Q(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,s){var h=n&&s!==void 0?this._getNewPixelOrigin(n,s):this.getPixelOrigin();return h.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,s){var h=this.getSize()._divideBy(2);return this.project(n,s)._subtract(h)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,s,h){var l=this._getNewPixelOrigin(h,s);return this.project(n,s)._subtract(l)},_latLngBoundsToNewLayerBounds:function(n,s,h){var l=this._getNewPixelOrigin(h,s);return Ct([this.project(n.getSouthWest(),s)._subtract(l),this.project(n.getNorthWest(),s)._subtract(l),this.project(n.getSouthEast(),s)._subtract(l),this.project(n.getNorthEast(),s)._subtract(l)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,s,h){if(!h)return n;var l=this.project(n,s),f=this.getSize().divideBy(2),g=new At(l.subtract(f),l.add(f)),T=this._getBoundsOffset(g,h,s);return Math.abs(T.x)<=1&&Math.abs(T.y)<=1?n:this.unproject(l.add(T),s)},_limitOffset:function(n,s){if(!s)return n;var h=this.getPixelBounds(),l=new At(h.min.add(n),h.max.add(n));return n.add(this._getBoundsOffset(l,s))},_getBoundsOffset:function(n,s,h){var l=Ct(this.project(s.getNorthEast(),h),this.project(s.getSouthWest(),h)),f=l.min.subtract(n.min),g=l.max.subtract(n.max),T=this._rebound(f.x,-g.x),k=this._rebound(f.y,-g.y);return new Q(T,k)},_rebound:function(n,s){return n+s>0?Math.round(n-s)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(s))},_limitZoom:function(n){var s=this.getMinZoom(),h=this.getMaxZoom(),l=W.any3d?this.options.zoomSnap:1;return l&&(n=Math.round(n/l)*l),Math.max(s,Math.min(h,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){bt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,s){var h=this._getCenterOffset(n)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(h)?!1:(this.panBy(h,s),!0)},_createAnimProxy:function(){var n=this._proxy=ht("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(s){var h=Zn,l=this._proxy.style[h];Re(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),l===this._proxy.style[h]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Et(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),s=this.getZoom();Re(this._proxy,this.project(n,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,s,h){if(this._animatingZoom)return!0;if(h=h||{},!this._zoomAnimated||h.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var l=this.getZoomScale(s),f=this._getCenterOffset(n)._divideBy(1-1/l);return h.animate!==!0&&!this.getSize().contains(f)?!1:(A(function(){this._moveStart(!0,h.noMoveStart||!1)._animateZoom(n,s,!0)},this),!0)},_animateZoom:function(n,s,h,l){this._mapPane&&(h&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=s,et(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:s,noUpdate:l}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(c(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&bt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Ai(n,s){return new ot(n,s)}var he=jt.extend({options:{position:"topright"},initialize:function(n){z(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var s=this._map;return s&&s.removeControl(this),this.options.position=n,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var s=this._container=this.onAdd(n),h=this.getPosition(),l=n._controlCorners[h];return et(s,"leaflet-control"),h.indexOf("bottom")!==-1?l.insertBefore(s,l.firstChild):l.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Et(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),re=function(n){return new he(n)};ot.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},s="leaflet-",h=this._controlContainer=ht("div",s+"control-container",this._container);function l(f,g){var T=s+f+" "+s+g;n[f+g]=ht("div",T,h)}l("top","left"),l("top","right"),l("bottom","left"),l("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)Et(this._controlCorners[n]);Et(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Dr=he.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,s,h,l){return h<l?-1:l<h?1:0}},initialize:function(n,s,h){z(this,h),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var l in n)this._addLayer(n[l],l);for(l in s)this._addLayer(s[l],l,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return he.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,s){return this._addLayer(n,s),this._map?this._update():this},addOverlay:function(n,s){return this._addLayer(n,s,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var s=this._getLayer(_(n));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){et(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(et(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):bt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return bt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",s=this._container=ht("div",n),h=this.options.collapsed;s.setAttribute("aria-haspopup",!0),_n(s),mn(s);var l=this._section=ht("section",n+"-list");h&&(this._map.on("click",this.collapse,this),G(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var f=this._layersLink=ht("a",n+"-toggle",s);f.href="#",f.title="Layers",f.setAttribute("role","button"),G(f,{keydown:function(g){g.keyCode===13&&this._expandSafely()},click:function(g){Rt(g),this._expandSafely()}},this),h||this.expand(),this._baseLayersList=ht("div",n+"-base",l),this._separator=ht("div",n+"-separator",l),this._overlaysList=ht("div",n+"-overlays",l),s.appendChild(l)},_getLayer:function(n){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&_(this._layers[s].layer)===n)return this._layers[s]},_addLayer:function(n,s,h){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:s,overlay:h}),this.options.sortLayers&&this._layers.sort(c(function(l,f){return this.options.sortFunction(l.layer,f.layer,l.name,f.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Gn(this._baseLayersList),Gn(this._overlaysList),this._layerControlInputs=[];var n,s,h,l,f=0;for(h=0;h<this._layers.length;h++)l=this._layers[h],this._addItem(l),s=s||l.overlay,n=n||!l.overlay,f+=l.overlay?0:1;return this.options.hideSingleBase&&(n=n&&f>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=s&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var s=this._getLayer(_(n.target)),h=s.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;h&&this._map.fire(h,s)},_createRadioElement:function(n,s){var h='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(s?' checked="checked"':"")+"/>",l=document.createElement("div");return l.innerHTML=h,l.firstChild},_addItem:function(n){var s=document.createElement("label"),h=this._map.hasLayer(n.layer),l;n.overlay?(l=document.createElement("input"),l.type="checkbox",l.className="leaflet-control-layers-selector",l.defaultChecked=h):l=this._createRadioElement("leaflet-base-layers_"+_(this),h),this._layerControlInputs.push(l),l.layerId=_(n.layer),G(l,"click",this._onInputClick,this);var f=document.createElement("span");f.innerHTML=" "+n.name;var g=document.createElement("span");s.appendChild(g),g.appendChild(l),g.appendChild(f);var T=n.overlay?this._overlaysList:this._baseLayersList;return T.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,s,h,l=[],f=[];this._handlingClick=!0;for(var g=n.length-1;g>=0;g--)s=n[g],h=this._getLayer(s.layerId).layer,s.checked?l.push(h):s.checked||f.push(h);for(g=0;g<f.length;g++)this._map.hasLayer(f[g])&&this._map.removeLayer(f[g]);for(g=0;g<l.length;g++)this._map.hasLayer(l[g])||this._map.addLayer(l[g]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,s,h,l=this._map.getZoom(),f=n.length-1;f>=0;f--)s=n[f],h=this._getLayer(s.layerId).layer,s.disabled=h.options.minZoom!==void 0&&l<h.options.minZoom||h.options.maxZoom!==void 0&&l>h.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,G(n,"click",Rt),this.expand();var s=this;setTimeout(function(){wt(n,"click",Rt),s._preventClick=!1})}}),qo=function(n,s,h){return new Dr(n,s,h)},We=he.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var s="leaflet-control-zoom",h=ht("div",s+" leaflet-bar"),l=this.options;return this._zoomInButton=this._createButton(l.zoomInText,l.zoomInTitle,s+"-in",h,this._zoomIn),this._zoomOutButton=this._createButton(l.zoomOutText,l.zoomOutTitle,s+"-out",h,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),h},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,s,h,l,f){var g=ht("a",h,l);return g.innerHTML=n,g.href="#",g.title=s,g.setAttribute("role","button"),g.setAttribute("aria-label",s),_n(g),G(g,"click",de),G(g,"click",f,this),G(g,"click",this._refocusOnMap,this),g},_updateDisabled:function(){var n=this._map,s="leaflet-disabled";bt(this._zoomInButton,s),bt(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(et(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(et(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});ot.mergeOptions({zoomControl:!0}),ot.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new We,this.addControl(this.zoomControl))});var Ns=function(n){return new We(n)},bi=he.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var s="leaflet-control-scale",h=ht("div",s),l=this.options;return this._addScales(l,s+"-line",h),n.on(l.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),h},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,s,h){n.metric&&(this._mScale=ht("div",s,h)),n.imperial&&(this._iScale=ht("div",s,h))},_update:function(){var n=this._map,s=n.getSize().y/2,h=n.distance(n.containerPointToLatLng([0,s]),n.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(h)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var s=this._getRoundNum(n),h=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,h,s/n)},_updateImperial:function(n){var s=n*3.2808399,h,l,f;s>5280?(h=s/5280,l=this._getRoundNum(h),this._updateScale(this._iScale,l+" mi",l/h)):(f=this._getRoundNum(s),this._updateScale(this._iScale,f+" ft",f/s))},_updateScale:function(n,s,h){n.style.width=Math.round(this.options.maxWidth*h)+"px",n.innerHTML=s},_getRoundNum:function(n){var s=Math.pow(10,(Math.floor(n)+"").length-1),h=n/s;return h=h>=10?10:h>=5?5:h>=3?3:h>=2?2:1,s*h}}),Si=function(n){return new bi(n)},Vs='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',gn=he.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(W.inlineSvg?Vs+" ":"")+"Leaflet</a>"},initialize:function(n){z(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=ht("div","leaflet-control-attribution"),_n(this._container);for(var s in n._layers)n._layers[s].getAttribution&&this.addAttribution(n._layers[s].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var s in this._attributions)this._attributions[s]&&n.push(s);var h=[];this.options.prefix&&h.push(this.options.prefix),n.length&&h.push(n.join(", ")),this._container.innerHTML=h.join(' <span aria-hidden="true">|</span> ')}}});ot.mergeOptions({attributionControl:!0}),ot.addInitHook(function(){this.options.attributionControl&&new gn().addTo(this)});var Ho=function(n){return new gn(n)};he.Layers=Dr,he.Zoom=We,he.Scale=bi,he.Attribution=gn,re.layers=qo,re.zoom=Ns,re.scale=Si,re.attribution=Ho;var fe=jt.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});fe.addTo=function(n,s){return n.addHandler(s,this),this};var Kn={Events:ie},Nr=W.touch?"touchstart mousedown":"mousedown",Se=Ee.extend({options:{clickTolerance:3},initialize:function(n,s,h,l){z(this,l),this._element=n,this._dragStartTarget=s||n,this._preventOutline=h},enable:function(){this._enabled||(G(this._dragStartTarget,Nr,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Se._dragging===this&&this.finishDrag(!0),wt(this._dragStartTarget,Nr,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!Ir(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){Se._dragging===this&&this.finishDrag();return}if(!(Se._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(Se._dragging=this,this._preventOutline&&Ze(this._element),br(),Ae(),!this._moving)){this.fire("down");var s=n.touches?n.touches[0]:n,h=Rr(this._element);this._startPoint=new Q(s.clientX,s.clientY),this._startPos=_e(this._element),this._parentScale=Ii(h);var l=n.type==="mousedown";G(document,l?"mousemove":"touchmove",this._onMove,this),G(document,l?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var s=n.touches&&n.touches.length===1?n.touches[0]:n,h=new Q(s.clientX,s.clientY)._subtract(this._startPoint);!h.x&&!h.y||Math.abs(h.x)+Math.abs(h.y)<this.options.clickTolerance||(h.x/=this._parentScale.x,h.y/=this._parentScale.y,Rt(n),this._moved||(this.fire("dragstart"),this._moved=!0,et(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),et(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(h),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),X(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){bt(document.body,"leaflet-dragging"),this._lastTarget&&(bt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),wt(document,"mousemove touchmove",this._onMove,this),wt(document,"mouseup touchend touchcancel",this._onUp,this),Sr(),be();var s=this._moved&&this._moving;this._moving=!1,Se._dragging=!1,s&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function Ci(n,s,h){var l,f=[1,4,2,8],g,T,k,O,N,j,K,st;for(g=0,j=n.length;g<j;g++)n[g]._code=Le(n[g],s);for(k=0;k<4;k++){for(K=f[k],l=[],g=0,j=n.length,T=j-1;g<j;T=g++)O=n[g],N=n[T],O._code&K?N._code&K||(st=Zt(N,O,K,s,h),st._code=Le(st,s),l.push(st)):(N._code&K&&(st=Zt(N,O,K,s,h),st._code=Le(st,s),l.push(st)),l.push(O));n=l}return n}function Ri(n,s){var h,l,f,g,T,k,O,N,j;if(!n||n.length===0)throw new Error("latlngs not passed");a(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var K=at([0,0]),st=xt(n),se=st.getNorthWest().distanceTo(st.getSouthWest())*st.getNorthEast().distanceTo(st.getNorthWest());se<1700&&(K=Li(n));var Wt=n.length,Te=[];for(h=0;h<Wt;h++){var ue=at(n[h]);Te.push(s.project(at([ue.lat-K.lat,ue.lng-K.lng])))}for(k=O=N=0,h=0,l=Wt-1;h<Wt;l=h++)f=Te[h],g=Te[l],T=f.y*g.x-g.y*f.x,O+=(f.x+g.x)*T,N+=(f.y+g.y)*T,k+=T*3;k===0?j=Te[0]:j=[O/k,N/k];var Vi=s.unproject(J(j));return at([Vi.lat+K.lat,Vi.lng+K.lng])}function Li(n){for(var s=0,h=0,l=0,f=0;f<n.length;f++){var g=at(n[f]);s+=g.lat,h+=g.lng,l++}return at([s/l,h/l])}var xi={__proto__:null,clipPolygon:Ci,polygonCenter:Ri,centroid:Li};function Vr(n,s){if(!s||!n.length)return n.slice();var h=s*s;return n=Bs(n,h),n=Fs(n,h),n}function Fr(n,s,h){return Math.sqrt(we(n,s,h,!0))}function Ge(n,s,h){return we(n,s,h)}function Fs(n,s){var h=n.length,l=typeof Uint8Array<"u"?Uint8Array:Array,f=new l(h);f[0]=f[h-1]=1,ki(n,f,s,0,h-1);var g,T=[];for(g=0;g<h;g++)f[g]&&T.push(n[g]);return T}function ki(n,s,h,l,f){var g=0,T,k,O;for(k=l+1;k<=f-1;k++)O=we(n[k],n[l],n[f],!0),O>g&&(T=k,g=O);g>h&&(s[T]=1,ki(n,s,h,l,T),ki(n,s,h,T,f))}function Bs(n,s){for(var h=[n[0]],l=1,f=0,g=n.length;l<g;l++)Us(n[l],n[f])>s&&(h.push(n[l]),f=l);return f<g-1&&h.push(n[g-1]),h}var Br;function $n(n,s,h,l,f){var g=l?Br:Le(n,h),T=Le(s,h),k,O,N;for(Br=T;;){if(!(g|T))return[n,s];if(g&T)return!1;k=g||T,O=Zt(n,s,k,h,f),N=Le(O,h),k===g?(n=O,g=N):(s=O,T=N)}}function Zt(n,s,h,l,f){var g=s.x-n.x,T=s.y-n.y,k=l.min,O=l.max,N,j;return h&8?(N=n.x+g*(O.y-n.y)/T,j=O.y):h&4?(N=n.x+g*(k.y-n.y)/T,j=k.y):h&2?(N=O.x,j=n.y+T*(O.x-n.x)/g):h&1&&(N=k.x,j=n.y+T*(k.x-n.x)/g),new Q(N,j,f)}function Le(n,s){var h=0;return n.x<s.min.x?h|=1:n.x>s.max.x&&(h|=2),n.y<s.min.y?h|=4:n.y>s.max.y&&(h|=8),h}function Us(n,s){var h=s.x-n.x,l=s.y-n.y;return h*h+l*l}function we(n,s,h,l){var f=s.x,g=s.y,T=h.x-f,k=h.y-g,O=T*T+k*k,N;return O>0&&(N=((n.x-f)*T+(n.y-g)*k)/O,N>1?(f=h.x,g=h.y):N>0&&(f+=T*N,g+=k*N)),T=n.x-f,k=n.y-g,l?T*T+k*k:new Q(f,g)}function a(n){return!rt(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function d(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),a(n)}function m(n,s){var h,l,f,g,T,k,O,N;if(!n||n.length===0)throw new Error("latlngs not passed");a(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var j=at([0,0]),K=xt(n),st=K.getNorthWest().distanceTo(K.getSouthWest())*K.getNorthEast().distanceTo(K.getNorthWest());st<1700&&(j=Li(n));var se=n.length,Wt=[];for(h=0;h<se;h++){var Te=at(n[h]);Wt.push(s.project(at([Te.lat-j.lat,Te.lng-j.lng])))}for(h=0,l=0;h<se-1;h++)l+=Wt[h].distanceTo(Wt[h+1])/2;if(l===0)N=Wt[0];else for(h=0,g=0;h<se-1;h++)if(T=Wt[h],k=Wt[h+1],f=T.distanceTo(k),g+=f,g>l){O=(g-l)/f,N=[k.x-O*(k.x-T.x),k.y-O*(k.y-T.y)];break}var ue=s.unproject(J(N));return at([ue.lat+j.lat,ue.lng+j.lng])}var v={__proto__:null,simplify:Vr,pointToSegmentDistance:Fr,closestPointOnSegment:Ge,clipSegment:$n,_getEdgeIntersection:Zt,_getBitCode:Le,_sqClosestPointOnSegment:we,isFlat:a,_flat:d,polylineCenter:m},R={project:function(n){return new Q(n.lng,n.lat)},unproject:function(n){return new lt(n.y,n.x)},bounds:new At([-180,-90],[180,90])},M={R:6378137,R_MINOR:6356752314245179e-9,bounds:new At([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var s=Math.PI/180,h=this.R,l=n.lat*s,f=this.R_MINOR/h,g=Math.sqrt(1-f*f),T=g*Math.sin(l),k=Math.tan(Math.PI/4-l/2)/Math.pow((1-T)/(1+T),g/2);return l=-h*Math.log(Math.max(k,1e-10)),new Q(n.lng*s*h,l)},unproject:function(n){for(var s=180/Math.PI,h=this.R,l=this.R_MINOR/h,f=Math.sqrt(1-l*l),g=Math.exp(-n.y/h),T=Math.PI/2-2*Math.atan(g),k=0,O=.1,N;k<15&&Math.abs(O)>1e-7;k++)N=f*Math.sin(T),N=Math.pow((1-N)/(1+N),f/2),O=Math.PI/2-2*Math.atan(g*N)-T,T+=O;return new lt(T*s,n.x*s/h)}},B={__proto__:null,LonLat:R,Mercator:M,SphericalMercator:un},vt=o({},Ce,{code:"EPSG:3395",projection:M,transformation:function(){var n=.5/(Math.PI*M.R);return Be(n,.5,-n,.5)}()}),Bt=o({},Ce,{code:"EPSG:4326",projection:R,transformation:Be(1/180,1,-1/180,.5)}),ct=o({},ae,{projection:R,transformation:Be(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,s){var h=s.lng-n.lng,l=s.lat-n.lat;return Math.sqrt(h*h+l*l)},infinite:!0});ae.Earth=Ce,ae.EPSG3395=vt,ae.EPSG3857=Nn,ae.EPSG900913=hr,ae.EPSG4326=Bt,ae.Simple=ct;var Tt=Ee.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[_(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[_(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var s=n.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var h=this.getEvents();s.on(h,this),this.once("remove",function(){s.off(h,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});ot.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var s=_(n);return this._layers[s]?this:(this._layers[s]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var s=_(n);return this._layers[s]?(this._loaded&&n.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return _(n)in this._layers},eachLayer:function(n,s){for(var h in this._layers)n.call(s,this._layers[h]);return this},_addLayers:function(n){n=n?rt(n)?n:[n]:[];for(var s=0,h=n.length;s<h;s++)this.addLayer(n[s])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[_(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var s=_(n);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,s=-1/0,h=this._getZoomSpan();for(var l in this._zoomBoundLayers){var f=this._zoomBoundLayers[l].options;n=f.minZoom===void 0?n:Math.min(n,f.minZoom),s=f.maxZoom===void 0?s:Math.max(s,f.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=n===1/0?void 0:n,h!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Lt=Tt.extend({initialize:function(n,s){z(this,s),this._layers={};var h,l;if(n)for(h=0,l=n.length;h<l;h++)this.addLayer(n[h])},addLayer:function(n){var s=this.getLayerId(n);return this._layers[s]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var s=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(n){var s=typeof n=="number"?n:this.getLayerId(n);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var s=Array.prototype.slice.call(arguments,1),h,l;for(h in this._layers)l=this._layers[h],l[n]&&l[n].apply(l,s);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,s){for(var h in this._layers)n.call(s,this._layers[h]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return _(n)}}),vn=function(n,s){return new Lt(n,s)},Dt=Lt.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),Lt.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),Lt.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new mt;for(var s in this._layers){var h=this._layers[s];n.extend(h.getBounds?h.getBounds():h.getLatLng())}return n}}),Oi=function(n,s){return new Dt(n,s)},xe=jt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){z(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,s){var h=this._getIconUrl(n);if(!h){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var l=this._createImg(h,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(l,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),l},_setIconStyles:function(n,s){var h=this.options,l=h[s+"Size"];typeof l=="number"&&(l=[l,l]);var f=J(l),g=J(s==="shadow"&&h.shadowAnchor||h.iconAnchor||f&&f.divideBy(2,!0));n.className="leaflet-marker-"+s+" "+(h.className||""),g&&(n.style.marginLeft=-g.x+"px",n.style.marginTop=-g.y+"px"),f&&(n.style.width=f.x+"px",n.style.height=f.y+"px")},_createImg:function(n,s){return s=s||document.createElement("img"),s.src=n,s},_getIconUrl:function(n){return W.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function zc(n){return new xe(n)}var Ur=xe.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof Ur.imagePath!="string"&&(Ur.imagePath=this._detectIconPath()),(this.options.imagePath||Ur.imagePath)+xe.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var s=function(h,l,f){var g=l.exec(h);return g&&g[f]};return n=s(n,/^url\((['"])?(.+)\1\)$/,2),n&&s(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=ht("div","leaflet-default-icon-path",document.body),s=dn(n,"background-image")||dn(n,"backgroundImage");if(document.body.removeChild(n),s=this._stripUrl(s),s)return s;var h=document.querySelector('link[href$="leaflet.css"]');return h?h.href.substring(0,h.href.length-11-1):""}}),ph=fe.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new Se(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),et(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&bt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var s=this._marker,h=s._map,l=this._marker.options.autoPanSpeed,f=this._marker.options.autoPanPadding,g=_e(s._icon),T=h.getPixelBounds(),k=h.getPixelOrigin(),O=Ct(T.min._subtract(k).add(f),T.max._subtract(k).subtract(f));if(!O.contains(g)){var N=J((Math.max(O.max.x,g.x)-O.max.x)/(T.max.x-O.max.x)-(Math.min(O.min.x,g.x)-O.min.x)/(T.min.x-O.min.x),(Math.max(O.max.y,g.y)-O.max.y)/(T.max.y-O.max.y)-(Math.min(O.min.y,g.y)-O.min.y)/(T.min.y-O.min.y)).multiplyBy(l);h.panBy(N,{animate:!1}),this._draggable._newPos._add(N),this._draggable._startPos._add(N),X(s._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=A(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(C(this._panRequest),this._panRequest=A(this._adjustPan.bind(this,n)))},_onDrag:function(n){var s=this._marker,h=s._shadow,l=_e(s._icon),f=s._map.layerPointToLatLng(l);h&&X(h,l),s._latlng=f,n.latlng=f,n.oldLatLng=this._oldLatLng,s.fire("move",n).fire("drag",n)},_onDragEnd:function(n){C(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),zs=Tt.extend({options:{icon:new Ur,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,s){z(this,s),this._latlng=at(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var s=this._latlng;return this._latlng=at(n),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),h=n.icon.createIcon(this._icon),l=!1;h!==this._icon&&(this._icon&&this._removeIcon(),l=!0,n.title&&(h.title=n.title),h.tagName==="IMG"&&(h.alt=n.alt||"")),et(h,s),n.keyboard&&(h.tabIndex="0",h.setAttribute("role","button")),this._icon=h,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&G(h,"focus",this._panOnFocus,this);var f=n.icon.createShadow(this._shadow),g=!1;f!==this._shadow&&(this._removeShadow(),g=!0),f&&(et(f,s),f.alt=""),this._shadow=f,n.opacity<1&&this._updateOpacity(),l&&this.getPane().appendChild(this._icon),this._initInteraction(),f&&g&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&wt(this._icon,"focus",this._panOnFocus,this),Et(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Et(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&X(this._icon,n),this._shadow&&X(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(et(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),ph)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new ph(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&kt(this._icon,n),this._shadow&&kt(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var s=this.options.icon.options,h=s.iconSize?J(s.iconSize):J(0,0),l=s.iconAnchor?J(s.iconAnchor):J(0,0);n.panInside(this._latlng,{paddingTopLeft:l,paddingBottomRight:h.subtract(l)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function jc(n,s){return new zs(n,s)}var yn=Tt.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return z(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),js=yn.extend({options:{fill:!0,radius:10},initialize:function(n,s){z(this,s),this._latlng=at(n),this._radius=this.options.radius},setLatLng:function(n){var s=this._latlng;return this._latlng=at(n),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var s=n&&n.radius||this._radius;return yn.prototype.setStyle.call(this,n),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,s=this._radiusY||n,h=this._clickTolerance(),l=[n+h,s+h];this._pxBounds=new At(this._point.subtract(l),this._point.add(l))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function qc(n,s){return new js(n,s)}var Zo=js.extend({initialize:function(n,s,h){if(typeof s=="number"&&(s=o({},h,{radius:s})),z(this,s),this._latlng=at(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new mt(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:yn.prototype.setStyle,_project:function(){var n=this._latlng.lng,s=this._latlng.lat,h=this._map,l=h.options.crs;if(l.distance===Ce.distance){var f=Math.PI/180,g=this._mRadius/Ce.R/f,T=h.project([s+g,n]),k=h.project([s-g,n]),O=T.add(k).divideBy(2),N=h.unproject(O).lat,j=Math.acos((Math.cos(g*f)-Math.sin(s*f)*Math.sin(N*f))/(Math.cos(s*f)*Math.cos(N*f)))/f;(isNaN(j)||j===0)&&(j=g/Math.cos(Math.PI/180*s)),this._point=O.subtract(h.getPixelOrigin()),this._radius=isNaN(j)?0:O.x-h.project([N,n-j]).x,this._radiusY=O.y-T.y}else{var K=l.unproject(l.project(this._latlng).subtract([this._mRadius,0]));this._point=h.latLngToLayerPoint(this._latlng),this._radius=this._point.x-h.latLngToLayerPoint(K).x}this._updateBounds()}});function Hc(n,s,h){return new Zo(n,s,h)}var Ke=yn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,s){z(this,s),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var s=1/0,h=null,l=we,f,g,T=0,k=this._parts.length;T<k;T++)for(var O=this._parts[T],N=1,j=O.length;N<j;N++){f=O[N-1],g=O[N];var K=l(n,f,g,!0);K<s&&(s=K,h=l(n,f,g))}return h&&(h.distance=Math.sqrt(s)),h},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return m(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,s){return s=s||this._defaultShape(),n=at(n),s.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new mt,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return a(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var s=[],h=a(n),l=0,f=n.length;l<f;l++)h?(s[l]=at(n[l]),this._bounds.extend(s[l])):s[l]=this._convertLatLngs(n[l]);return s},_project:function(){var n=new At;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),s=new Q(n,n);this._rawPxBounds&&(this._pxBounds=new At([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(n,s,h){var l=n[0]instanceof lt,f=n.length,g,T;if(l){for(T=[],g=0;g<f;g++)T[g]=this._map.latLngToLayerPoint(n[g]),h.extend(T[g]);s.push(T)}else for(g=0;g<f;g++)this._projectLatlngs(n[g],s,h)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,h,l,f,g,T,k,O;for(h=0,f=0,g=this._rings.length;h<g;h++)for(O=this._rings[h],l=0,T=O.length;l<T-1;l++)k=$n(O[l],O[l+1],n,l,!0),k&&(s[f]=s[f]||[],s[f].push(k[0]),(k[1]!==O[l+1]||l===T-2)&&(s[f].push(k[1]),f++))}},_simplifyPoints:function(){for(var n=this._parts,s=this.options.smoothFactor,h=0,l=n.length;h<l;h++)n[h]=Vr(n[h],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,s){var h,l,f,g,T,k,O=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(h=0,g=this._parts.length;h<g;h++)for(k=this._parts[h],l=0,T=k.length,f=T-1;l<T;f=l++)if(!(!s&&l===0)&&Fr(n,k[f],k[l])<=O)return!0;return!1}});function Zc(n,s){return new Ke(n,s)}Ke._flat=d;var Mi=Ke.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ri(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var s=Ke.prototype._convertLatLngs.call(this,n),h=s.length;return h>=2&&s[0]instanceof lt&&s[0].equals(s[h-1])&&s.pop(),s},_setLatLngs:function(n){Ke.prototype._setLatLngs.call(this,n),a(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return a(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,s=this.options.weight,h=new Q(s,s);if(n=new At(n.min.subtract(h),n.max.add(h)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var l=0,f=this._rings.length,g;l<f;l++)g=Ci(this._rings[l],n,!0),g.length&&this._parts.push(g)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var s=!1,h,l,f,g,T,k,O,N;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(g=0,O=this._parts.length;g<O;g++)for(h=this._parts[g],T=0,N=h.length,k=N-1;T<N;k=T++)l=h[T],f=h[k],l.y>n.y!=f.y>n.y&&n.x<(f.x-l.x)*(n.y-l.y)/(f.y-l.y)+l.x&&(s=!s);return s||Ke.prototype._containsPoint.call(this,n,!0)}});function Wc(n,s){return new Mi(n,s)}var $e=Dt.extend({initialize:function(n,s){z(this,s),this._layers={},n&&this.addData(n)},addData:function(n){var s=rt(n)?n:n.features,h,l,f;if(s){for(h=0,l=s.length;h<l;h++)f=s[h],(f.geometries||f.geometry||f.features||f.coordinates)&&this.addData(f);return this}var g=this.options;if(g.filter&&!g.filter(n))return this;var T=qs(n,g);return T?(T.feature=Ws(n),T.defaultOptions=T.options,this.resetStyle(T),g.onEachFeature&&g.onEachFeature(n,T),this.addLayer(T)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=o({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(s){this._setLayerStyle(s,n)},this)},_setLayerStyle:function(n,s){n.setStyle&&(typeof s=="function"&&(s=s(n.feature)),n.setStyle(s))}});function qs(n,s){var h=n.type==="Feature"?n.geometry:n,l=h?h.coordinates:null,f=[],g=s&&s.pointToLayer,T=s&&s.coordsToLatLng||Wo,k,O,N,j;if(!l&&!h)return null;switch(h.type){case"Point":return k=T(l),mh(g,n,k,s);case"MultiPoint":for(N=0,j=l.length;N<j;N++)k=T(l[N]),f.push(mh(g,n,k,s));return new Dt(f);case"LineString":case"MultiLineString":return O=Hs(l,h.type==="LineString"?0:1,T),new Ke(O,s);case"Polygon":case"MultiPolygon":return O=Hs(l,h.type==="Polygon"?1:2,T),new Mi(O,s);case"GeometryCollection":for(N=0,j=h.geometries.length;N<j;N++){var K=qs({geometry:h.geometries[N],type:"Feature",properties:n.properties},s);K&&f.push(K)}return new Dt(f);case"FeatureCollection":for(N=0,j=h.features.length;N<j;N++){var st=qs(h.features[N],s);st&&f.push(st)}return new Dt(f);default:throw new Error("Invalid GeoJSON object.")}}function mh(n,s,h,l){return n?n(s,h):new zs(h,l&&l.markersInheritOptions&&l)}function Wo(n){return new lt(n[1],n[0],n[2])}function Hs(n,s,h){for(var l=[],f=0,g=n.length,T;f<g;f++)T=s?Hs(n[f],s-1,h):(h||Wo)(n[f]),l.push(T);return l}function Go(n,s){return n=at(n),n.alt!==void 0?[D(n.lng,s),D(n.lat,s),D(n.alt,s)]:[D(n.lng,s),D(n.lat,s)]}function Zs(n,s,h,l){for(var f=[],g=0,T=n.length;g<T;g++)f.push(s?Zs(n[g],a(n[g])?0:s-1,h,l):Go(n[g],l));return!s&&h&&f.length>0&&f.push(f[0].slice()),f}function Di(n,s){return n.feature?o({},n.feature,{geometry:s}):Ws(s)}function Ws(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var Ko={toGeoJSON:function(n){return Di(this,{type:"Point",coordinates:Go(this.getLatLng(),n)})}};zs.include(Ko),Zo.include(Ko),js.include(Ko),Ke.include({toGeoJSON:function(n){var s=!a(this._latlngs),h=Zs(this._latlngs,s?1:0,!1,n);return Di(this,{type:(s?"Multi":"")+"LineString",coordinates:h})}}),Mi.include({toGeoJSON:function(n){var s=!a(this._latlngs),h=s&&!a(this._latlngs[0]),l=Zs(this._latlngs,h?2:s?1:0,!0,n);return s||(l=[l]),Di(this,{type:(h?"Multi":"")+"Polygon",coordinates:l})}}),Lt.include({toMultiPoint:function(n){var s=[];return this.eachLayer(function(h){s.push(h.toGeoJSON(n).geometry.coordinates)}),Di(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(n){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(n);var h=s==="GeometryCollection",l=[];return this.eachLayer(function(f){if(f.toGeoJSON){var g=f.toGeoJSON(n);if(h)l.push(g.geometry);else{var T=Ws(g);T.type==="FeatureCollection"?l.push.apply(l,T.features):l.push(T)}}}),h?Di(this,{geometries:l,type:"GeometryCollection"}):{type:"FeatureCollection",features:l}}});function _h(n,s){return new $e(n,s)}var Gc=_h,Gs=Tt.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,s,h){this._url=n,this._bounds=xt(s),z(this,h)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(et(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Et(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&qe(this._image),this},bringToBack:function(){return this._map&&fn(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=xt(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",s=this._image=n?this._url:ht("img");if(et(s,"leaflet-image-layer"),this._zoomAnimated&&et(s,"leaflet-zoom-animated"),this.options.className&&et(s,this.options.className),s.onselectstart=x,s.onmousemove=x,s.onload=c(this.fire,this,"load"),s.onerror=c(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(n){var s=this._map.getZoomScale(n.zoom),h=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;Re(this._image,h,s)},_reset:function(){var n=this._image,s=new At(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),h=s.getSize();X(n,s.min),n.style.width=h.x+"px",n.style.height=h.y+"px"},_updateOpacity:function(){kt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),Kc=function(n,s,h){return new Gs(n,s,h)},gh=Gs.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",s=this._image=n?this._url:ht("video");if(et(s,"leaflet-image-layer"),this._zoomAnimated&&et(s,"leaflet-zoom-animated"),this.options.className&&et(s,this.options.className),s.onselectstart=x,s.onmousemove=x,s.onloadeddata=c(this.fire,this,"load"),n){for(var h=s.getElementsByTagName("source"),l=[],f=0;f<h.length;f++)l.push(h[f].src);this._url=h.length>0?l:[s.src];return}rt(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var g=0;g<this._url.length;g++){var T=ht("source");T.src=this._url[g],s.appendChild(T)}}});function $c(n,s,h){return new gh(n,s,h)}var vh=Gs.extend({_initImage:function(){var n=this._image=this._url;et(n,"leaflet-image-layer"),this._zoomAnimated&&et(n,"leaflet-zoom-animated"),this.options.className&&et(n,this.options.className),n.onselectstart=x,n.onmousemove=x}});function Qc(n,s,h){return new vh(n,s,h)}var ke=Tt.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,s){n&&(n instanceof lt||rt(n))?(this._latlng=at(n),z(this,s)):(z(this,n),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&kt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&kt(this._container,1),this.bringToFront(),this.options.interactive&&(et(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(kt(this._container,0),this._removeTimeout=setTimeout(c(Et,void 0,this._container),200)):Et(this._container),this.options.interactive&&(bt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=at(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&qe(this._container),this},bringToBack:function(){return this._map&&fn(this._container),this},_prepareOpen:function(n){var s=this._source;if(!s._map)return!1;if(s instanceof Dt){s=null;var h=this._source._layers;for(var l in h)if(h[l]._map){s=h[l];break}if(!s)return!1;this._source=s}if(!n)if(s.getCenter)n=s.getCenter();else if(s.getLatLng)n=s.getLatLng();else if(s.getBounds)n=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")n.innerHTML=s;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),s=J(this.options.offset),h=this._getAnchor();this._zoomAnimated?X(this._container,n.add(h)):s=s.add(n).add(h);var l=this._containerBottom=-s.y,f=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=l+"px",this._container.style.left=f+"px"}},_getAnchor:function(){return[0,0]}});ot.include({_initOverlay:function(n,s,h,l){var f=s;return f instanceof n||(f=new n(l).setContent(s)),h&&f.setLatLng(h),f}}),Tt.include({_initOverlay:function(n,s,h,l){var f=h;return f instanceof n?(z(f,l),f._source=this):(f=s&&!l?s:new n(l,this),f.setContent(h)),f}});var Ks=ke.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,ke.prototype.openOn.call(this,n)},onAdd:function(n){ke.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof yn||this._source.on("preclick",ye))},onRemove:function(n){ke.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof yn||this._source.off("preclick",ye))},getEvents:function(){var n=ke.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",s=this._container=ht("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),h=this._wrapper=ht("div",n+"-content-wrapper",s);if(this._contentNode=ht("div",n+"-content",h),_n(s),mn(this._contentNode),G(s,"contextmenu",ye),this._tipContainer=ht("div",n+"-tip-container",s),this._tip=ht("div",n+"-tip",this._tipContainer),this.options.closeButton){var l=this._closeButton=ht("a",n+"-close-button",s);l.setAttribute("role","button"),l.setAttribute("aria-label","Close popup"),l.href="#close",l.innerHTML='<span aria-hidden="true">&#215;</span>',G(l,"click",function(f){Rt(f),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,s=n.style;s.width="",s.whiteSpace="nowrap";var h=n.offsetWidth;h=Math.min(h,this.options.maxWidth),h=Math.max(h,this.options.minWidth),s.width=h+1+"px",s.whiteSpace="",s.height="";var l=n.offsetHeight,f=this.options.maxHeight,g="leaflet-popup-scrolled";f&&l>f?(s.height=f+"px",et(n,g)):bt(n,g),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),h=this._getAnchor();X(this._container,s.add(h))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,s=parseInt(dn(this._container,"marginBottom"),10)||0,h=this._container.offsetHeight+s,l=this._containerWidth,f=new Q(this._containerLeft,-h-this._containerBottom);f._add(_e(this._container));var g=n.layerPointToContainerPoint(f),T=J(this.options.autoPanPadding),k=J(this.options.autoPanPaddingTopLeft||T),O=J(this.options.autoPanPaddingBottomRight||T),N=n.getSize(),j=0,K=0;g.x+l+O.x>N.x&&(j=g.x+l-N.x+O.x),g.x-j-k.x<0&&(j=g.x-k.x),g.y+h+O.y>N.y&&(K=g.y+h-N.y+O.y),g.y-K-k.y<0&&(K=g.y-k.y),(j||K)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([j,K]))}},_getAnchor:function(){return J(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Yc=function(n,s){return new Ks(n,s)};ot.mergeOptions({closePopupOnClick:!0}),ot.include({openPopup:function(n,s,h){return this._initOverlay(Ks,n,s,h).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),Tt.include({bindPopup:function(n,s){return this._popup=this._initOverlay(Ks,this._popup,n,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof Dt||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){de(n);var s=n.layer||n.target;if(this._popup._source===s&&!(s instanceof yn)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=s,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var $s=ke.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){ke.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){ke.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=ke.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",s=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=ht("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+_(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var s,h,l=this._map,f=this._container,g=l.latLngToContainerPoint(l.getCenter()),T=l.layerPointToContainerPoint(n),k=this.options.direction,O=f.offsetWidth,N=f.offsetHeight,j=J(this.options.offset),K=this._getAnchor();k==="top"?(s=O/2,h=N):k==="bottom"?(s=O/2,h=0):k==="center"?(s=O/2,h=N/2):k==="right"?(s=0,h=N/2):k==="left"?(s=O,h=N/2):T.x<g.x?(k="right",s=0,h=N/2):(k="left",s=O+(j.x+K.x)*2,h=N/2),n=n.subtract(J(s,h,!0)).add(j).add(K),bt(f,"leaflet-tooltip-right"),bt(f,"leaflet-tooltip-left"),bt(f,"leaflet-tooltip-top"),bt(f,"leaflet-tooltip-bottom"),et(f,"leaflet-tooltip-"+k),X(f,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&kt(this._container,n)},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(s)},_getAnchor:function(){return J(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Jc=function(n,s){return new $s(n,s)};ot.include({openTooltip:function(n,s,h){return this._initOverlay($s,n,s,h).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),Tt.include({bindTooltip:function(n,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay($s,this._tooltip,n,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var s=n?"off":"on",h={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?h.add=this._openTooltip:(h.mouseover=this._openTooltip,h.mouseout=this.closeTooltip,h.click=this._openTooltip,this._map?this._addFocusListeners():h.add=this._addFocusListeners),this._tooltip.options.sticky&&(h.mousemove=this._moveTooltip),this[s](h),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof Dt||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var s=typeof n.getElement=="function"&&n.getElement();s&&(G(s,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),G(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var s=typeof n.getElement=="function"&&n.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var s=this;this._map.once("moveend",function(){s._openOnceFlag=!1,s._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var s=n.latlng,h,l;this._tooltip.options.sticky&&n.originalEvent&&(h=this._map.mouseEventToContainerPoint(n.originalEvent),l=this._map.containerPointToLayerPoint(h),s=this._map.layerPointToLatLng(l)),this._tooltip.setLatLng(s)}});var yh=xe.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var s=n&&n.tagName==="DIV"?n:document.createElement("div"),h=this.options;if(h.html instanceof Element?(Gn(s),s.appendChild(h.html)):s.innerHTML=h.html!==!1?h.html:"",h.bgPos){var l=J(h.bgPos);s.style.backgroundPosition=-l.x+"px "+-l.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function Xc(n){return new yh(n)}xe.Default=Ur;var zr=Tt.extend({options:{tileSize:256,opacity:1,updateWhenIdle:W.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){z(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),Et(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(qe(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(fn(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=y(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof Q?n:new Q(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var s=this.getPane().children,h=-n(-1/0,1/0),l=0,f=s.length,g;l<f;l++)g=s[l].style.zIndex,s[l]!==this._container&&g&&(h=n(h,+g));isFinite(h)&&(this.options.zIndex=h+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!W.ielt9){kt(this._container,this.options.opacity);var n=+new Date,s=!1,h=!1;for(var l in this._tiles){var f=this._tiles[l];if(!(!f.current||!f.loaded)){var g=Math.min(1,(n-f.loaded)/200);kt(f.el,g),g<1?s=!0:(f.active?h=!0:this._onOpaqueTile(f),f.active=!0)}}h&&!this._noPrune&&this._pruneTiles(),s&&(C(this._fadeFrame),this._fadeFrame=A(this._updateOpacity,this))}},_onOpaqueTile:x,_initContainer:function(){this._container||(this._container=ht("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,s=this.options.maxZoom;if(n!==void 0){for(var h in this._levels)h=Number(h),this._levels[h].el.children.length||h===n?(this._levels[h].el.style.zIndex=s-Math.abs(n-h),this._onUpdateLevel(h)):(Et(this._levels[h].el),this._removeTilesAtZoom(h),this._onRemoveLevel(h),delete this._levels[h]);var l=this._levels[n],f=this._map;return l||(l=this._levels[n]={},l.el=ht("div","leaflet-tile-container leaflet-zoom-animated",this._container),l.el.style.zIndex=s,l.origin=f.project(f.unproject(f.getPixelOrigin()),n).round(),l.zoom=n,this._setZoomTransform(l,f.getCenter(),f.getZoom()),x(l.el.offsetWidth),this._onCreateLevel(l)),this._level=l,l}},_onUpdateLevel:x,_onRemoveLevel:x,_onCreateLevel:x,_pruneTiles:function(){if(this._map){var n,s,h=this._map.getZoom();if(h>this.options.maxZoom||h<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)s=this._tiles[n],s.retain=s.current;for(n in this._tiles)if(s=this._tiles[n],s.current&&!s.active){var l=s.coords;this._retainParent(l.x,l.y,l.z,l.z-5)||this._retainChildren(l.x,l.y,l.z,l.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var s in this._tiles)this._tiles[s].coords.z===n&&this._removeTile(s)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)Et(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,s,h,l){var f=Math.floor(n/2),g=Math.floor(s/2),T=h-1,k=new Q(+f,+g);k.z=+T;var O=this._tileCoordsToKey(k),N=this._tiles[O];return N&&N.active?(N.retain=!0,!0):(N&&N.loaded&&(N.retain=!0),T>l?this._retainParent(f,g,T,l):!1)},_retainChildren:function(n,s,h,l){for(var f=2*n;f<2*n+2;f++)for(var g=2*s;g<2*s+2;g++){var T=new Q(f,g);T.z=h+1;var k=this._tileCoordsToKey(T),O=this._tiles[k];if(O&&O.active){O.retain=!0;continue}else O&&O.loaded&&(O.retain=!0);h+1<l&&this._retainChildren(f,g,h+1,l)}},_resetView:function(n){var s=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var s=this.options;return s.minNativeZoom!==void 0&&n<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<n?s.maxNativeZoom:n},_setView:function(n,s,h,l){var f=Math.round(s);this.options.maxZoom!==void 0&&f>this.options.maxZoom||this.options.minZoom!==void 0&&f<this.options.minZoom?f=void 0:f=this._clampZoom(f);var g=this.options.updateWhenZooming&&f!==this._tileZoom;(!l||g)&&(this._tileZoom=f,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),f!==void 0&&this._update(n),h||this._pruneTiles(),this._noPrune=!!h),this._setZoomTransforms(n,s)},_setZoomTransforms:function(n,s){for(var h in this._levels)this._setZoomTransform(this._levels[h],n,s)},_setZoomTransform:function(n,s,h){var l=this._map.getZoomScale(h,n.zoom),f=n.origin.multiplyBy(l).subtract(this._map._getNewPixelOrigin(s,h)).round();W.any3d?Re(n.el,f,l):X(n.el,f)},_resetGrid:function(){var n=this._map,s=n.options.crs,h=this._tileSize=this.getTileSize(),l=this._tileZoom,f=this._map.getPixelWorldBounds(this._tileZoom);f&&(this._globalTileRange=this._pxBoundsToTileRange(f)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,s.wrapLng[0]],l).x/h.x),Math.ceil(n.project([0,s.wrapLng[1]],l).x/h.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([s.wrapLat[0],0],l).y/h.x),Math.ceil(n.project([s.wrapLat[1],0],l).y/h.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var s=this._map,h=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),l=s.getZoomScale(h,this._tileZoom),f=s.project(n,this._tileZoom).floor(),g=s.getSize().divideBy(l*2);return new At(f.subtract(g),f.add(g))},_update:function(n){var s=this._map;if(s){var h=this._clampZoom(s.getZoom());if(n===void 0&&(n=s.getCenter()),this._tileZoom!==void 0){var l=this._getTiledPixelBounds(n),f=this._pxBoundsToTileRange(l),g=f.getCenter(),T=[],k=this.options.keepBuffer,O=new At(f.getBottomLeft().subtract([k,-k]),f.getTopRight().add([k,-k]));if(!(isFinite(f.min.x)&&isFinite(f.min.y)&&isFinite(f.max.x)&&isFinite(f.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var N in this._tiles){var j=this._tiles[N].coords;(j.z!==this._tileZoom||!O.contains(new Q(j.x,j.y)))&&(this._tiles[N].current=!1)}if(Math.abs(h-this._tileZoom)>1){this._setView(n,h);return}for(var K=f.min.y;K<=f.max.y;K++)for(var st=f.min.x;st<=f.max.x;st++){var se=new Q(st,K);if(se.z=this._tileZoom,!!this._isValidTile(se)){var Wt=this._tiles[this._tileCoordsToKey(se)];Wt?Wt.current=!0:T.push(se)}}if(T.sort(function(ue,Vi){return ue.distanceTo(g)-Vi.distanceTo(g)}),T.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Te=document.createDocumentFragment();for(st=0;st<T.length;st++)this._addTile(T[st],Te);this._level.el.appendChild(Te)}}}},_isValidTile:function(n){var s=this._map.options.crs;if(!s.infinite){var h=this._globalTileRange;if(!s.wrapLng&&(n.x<h.min.x||n.x>h.max.x)||!s.wrapLat&&(n.y<h.min.y||n.y>h.max.y))return!1}if(!this.options.bounds)return!0;var l=this._tileCoordsToBounds(n);return xt(this.options.bounds).overlaps(l)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var s=this._map,h=this.getTileSize(),l=n.scaleBy(h),f=l.add(h),g=s.unproject(l,n.z),T=s.unproject(f,n.z);return[g,T]},_tileCoordsToBounds:function(n){var s=this._tileCoordsToNwSe(n),h=new mt(s[0],s[1]);return this.options.noWrap||(h=this._map.wrapLatLngBounds(h)),h},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var s=n.split(":"),h=new Q(+s[0],+s[1]);return h.z=+s[2],h},_removeTile:function(n){var s=this._tiles[n];s&&(Et(s.el),delete this._tiles[n],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){et(n,"leaflet-tile");var s=this.getTileSize();n.style.width=s.x+"px",n.style.height=s.y+"px",n.onselectstart=x,n.onmousemove=x,W.ielt9&&this.options.opacity<1&&kt(n,this.options.opacity)},_addTile:function(n,s){var h=this._getTilePos(n),l=this._tileCoordsToKey(n),f=this.createTile(this._wrapCoords(n),c(this._tileReady,this,n));this._initTile(f),this.createTile.length<2&&A(c(this._tileReady,this,n,null,f)),X(f,h),this._tiles[l]={el:f,coords:n,current:!0},s.appendChild(f),this.fire("tileloadstart",{tile:f,coords:n})},_tileReady:function(n,s,h){s&&this.fire("tileerror",{error:s,tile:h,coords:n});var l=this._tileCoordsToKey(n);h=this._tiles[l],h&&(h.loaded=+new Date,this._map._fadeAnimated?(kt(h.el,0),C(this._fadeFrame),this._fadeFrame=A(this._updateOpacity,this)):(h.active=!0,this._pruneTiles()),s||(et(h.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:h.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),W.ielt9||!this._map._fadeAnimated?A(this._pruneTiles,this):setTimeout(c(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var s=new Q(this._wrapX?E(n.x,this._wrapX):n.x,this._wrapY?E(n.y,this._wrapY):n.y);return s.z=n.z,s},_pxBoundsToTileRange:function(n){var s=this.getTileSize();return new At(n.min.unscaleBy(s).floor(),n.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function td(n){return new zr(n)}var Ni=zr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,s){this._url=n,s=z(this,s),s.detectRetina&&W.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,s){return this._url===n&&s===void 0&&(s=!0),this._url=n,s||this.redraw(),this},createTile:function(n,s){var h=document.createElement("img");return G(h,"load",c(this._tileOnLoad,this,s,h)),G(h,"error",c(this._tileOnError,this,s,h)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(h.referrerPolicy=this.options.referrerPolicy),h.alt="",h.src=this.getTileUrl(n),h},getTileUrl:function(n){var s={r:W.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var h=this._globalTileRange.max.y-n.y;this.options.tms&&(s.y=h),s["-y"]=h}return yt(this._url,o(s,this.options))},_tileOnLoad:function(n,s){W.ielt9?setTimeout(c(n,this,null,s),0):n(null,s)},_tileOnError:function(n,s,h){var l=this.options.errorTileUrl;l&&s.getAttribute("src")!==l&&(s.src=l),n(h,s)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,s=this.options.maxZoom,h=this.options.zoomReverse,l=this.options.zoomOffset;return h&&(n=s-n),n+l},_getSubdomain:function(n){var s=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var n,s;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(s=this._tiles[n].el,s.onload=x,s.onerror=x,!s.complete)){s.src=Kt;var h=this._tiles[n].coords;Et(s),delete this._tiles[n],this.fire("tileabort",{tile:s,coords:h})}},_removeTile:function(n){var s=this._tiles[n];if(s)return s.el.setAttribute("src",Kt),zr.prototype._removeTile.call(this,n)},_tileReady:function(n,s,h){if(!(!this._map||h&&h.getAttribute("src")===Kt))return zr.prototype._tileReady.call(this,n,s,h)}});function wh(n,s){return new Ni(n,s)}var Th=Ni.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,s){this._url=n;var h=o({},this.defaultWmsParams);for(var l in s)l in this.options||(h[l]=s[l]);s=z(this,s);var f=s.detectRetina&&W.retina?2:1,g=this.getTileSize();h.width=g.x*f,h.height=g.y*f,this.wmsParams=h},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,Ni.prototype.onAdd.call(this,n)},getTileUrl:function(n){var s=this._tileCoordsToNwSe(n),h=this._crs,l=Ct(h.project(s[0]),h.project(s[1])),f=l.min,g=l.max,T=(this._wmsVersion>=1.3&&this._crs===Bt?[f.y,f.x,g.y,g.x]:[f.x,f.y,g.x,g.y]).join(","),k=Ni.prototype.getTileUrl.call(this,n);return k+H(this.wmsParams,k,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+T},setParams:function(n,s){return o(this.wmsParams,n),s||this.redraw(),this}});function ed(n,s){return new Th(n,s)}Ni.WMS=Th,wh.wms=ed;var Qe=Tt.extend({options:{padding:.1},initialize:function(n){z(this,n),_(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),et(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,s){var h=this._map.getZoomScale(s,this._zoom),l=this._map.getSize().multiplyBy(.5+this.options.padding),f=this._map.project(this._center,s),g=l.multiplyBy(-h).add(f).subtract(this._map._getNewPixelOrigin(n,s));W.any3d?Re(this._container,g,h):X(this._container,g)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,s=this._map.getSize(),h=this._map.containerPointToLayerPoint(s.multiplyBy(-n)).round();this._bounds=new At(h,h.add(s.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Eh=Qe.extend({options:{tolerance:0},getEvents:function(){var n=Qe.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Qe.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");G(n,"mousemove",this._onMouseMove,this),G(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),G(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){C(this._redrawRequest),delete this._ctx,Et(this._container),wt(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var s in this._layers)n=this._layers[s],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Qe.prototype._update.call(this);var n=this._bounds,s=this._container,h=n.getSize(),l=W.retina?2:1;X(s,n.min),s.width=l*h.x,s.height=l*h.y,s.style.width=h.x+"px",s.style.height=h.y+"px",W.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){Qe.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[_(n)]=n;var s=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var s=n._order,h=s.next,l=s.prev;h?h.prev=l:this._drawLast=l,l?l.next=h:this._drawFirst=h,delete n._order,delete this._layers[_(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var s=n.options.dashArray.split(/[, ]+/),h=[],l,f;for(f=0;f<s.length;f++){if(l=Number(s[f]),isNaN(l))return;h.push(l)}n.options._dashArray=h}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||A(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var s=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new At,this._redrawBounds.extend(n._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(n._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var s=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,s=this._redrawBounds;if(this._ctx.save(),s){var h=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,h.x,h.y),this._ctx.clip()}this._drawing=!0;for(var l=this._drawFirst;l;l=l.next)n=l.layer,(!s||n._pxBounds&&n._pxBounds.intersects(s))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,s){if(this._drawing){var h,l,f,g,T=n._parts,k=T.length,O=this._ctx;if(k){for(O.beginPath(),h=0;h<k;h++){for(l=0,f=T[h].length;l<f;l++)g=T[h][l],O[l?"lineTo":"moveTo"](g.x,g.y);s&&O.closePath()}this._fillStroke(O,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var s=n._point,h=this._ctx,l=Math.max(Math.round(n._radius),1),f=(Math.max(Math.round(n._radiusY),1)||l)/l;f!==1&&(h.save(),h.scale(1,f)),h.beginPath(),h.arc(s.x,s.y/f,l,0,Math.PI*2,!1),f!==1&&h.restore(),this._fillStroke(h,n)}},_fillStroke:function(n,s){var h=s.options;h.fill&&(n.globalAlpha=h.fillOpacity,n.fillStyle=h.fillColor||h.color,n.fill(h.fillRule||"evenodd")),h.stroke&&h.weight!==0&&(n.setLineDash&&n.setLineDash(s.options&&s.options._dashArray||[]),n.globalAlpha=h.opacity,n.lineWidth=h.weight,n.strokeStyle=h.color,n.lineCap=h.lineCap,n.lineJoin=h.lineJoin,n.stroke())},_onClick:function(n){for(var s=this._map.mouseEventToLayerPoint(n),h,l,f=this._drawFirst;f;f=f.next)h=f.layer,h.options.interactive&&h._containsPoint(s)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(h))&&(l=h);this._fireEvent(l?[l]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,s)}},_handleMouseOut:function(n){var s=this._hoveredLayer;s&&(bt(this._container,"leaflet-interactive"),this._fireEvent([s],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,s){if(!this._mouseHoverThrottled){for(var h,l,f=this._drawFirst;f;f=f.next)h=f.layer,h.options.interactive&&h._containsPoint(s)&&(l=h);l!==this._hoveredLayer&&(this._handleMouseOut(n),l&&(et(this._container,"leaflet-interactive"),this._fireEvent([l],n,"mouseover"),this._hoveredLayer=l)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(c(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,s,h){this._map._fireDOMEvent(s,h||s.type,n)},_bringToFront:function(n){var s=n._order;if(s){var h=s.next,l=s.prev;if(h)h.prev=l;else return;l?l.next=h:h&&(this._drawFirst=h),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(n)}},_bringToBack:function(n){var s=n._order;if(s){var h=s.next,l=s.prev;if(l)l.next=h;else return;h?h.prev=l:l&&(this._drawLast=l),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(n)}}});function Ih(n){return W.canvas?new Eh(n):null}var jr=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),nd={_initContainer:function(){this._container=ht("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Qe.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var s=n._container=jr("shape");et(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",n._path=jr("path"),s.appendChild(n._path),this._updateStyle(n),this._layers[_(n)]=n},_addPath:function(n){var s=n._container;this._container.appendChild(s),n.options.interactive&&n.addInteractiveTarget(s)},_removePath:function(n){var s=n._container;Et(s),n.removeInteractiveTarget(s),delete this._layers[_(n)]},_updateStyle:function(n){var s=n._stroke,h=n._fill,l=n.options,f=n._container;f.stroked=!!l.stroke,f.filled=!!l.fill,l.stroke?(s||(s=n._stroke=jr("stroke")),f.appendChild(s),s.weight=l.weight+"px",s.color=l.color,s.opacity=l.opacity,l.dashArray?s.dashStyle=rt(l.dashArray)?l.dashArray.join(" "):l.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=l.lineCap.replace("butt","flat"),s.joinstyle=l.lineJoin):s&&(f.removeChild(s),n._stroke=null),l.fill?(h||(h=n._fill=jr("fill")),f.appendChild(h),h.color=l.fillColor||l.color,h.opacity=l.fillOpacity):h&&(f.removeChild(h),n._fill=null)},_updateCircle:function(n){var s=n._point.round(),h=Math.round(n._radius),l=Math.round(n._radiusY||h);this._setPath(n,n._empty()?"M0 0":"AL "+s.x+","+s.y+" "+h+","+l+" 0,"+65535*360)},_setPath:function(n,s){n._path.v=s},_bringToFront:function(n){qe(n._container)},_bringToBack:function(n){fn(n._container)}},Qs=W.vml?jr:ai,qr=Qe.extend({_initContainer:function(){this._container=Qs("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Qs("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Et(this._container),wt(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Qe.prototype._update.call(this);var n=this._bounds,s=n.getSize(),h=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,h.setAttribute("width",s.x),h.setAttribute("height",s.y)),X(h,n.min),h.setAttribute("viewBox",[n.min.x,n.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(n){var s=n._path=Qs("path");n.options.className&&et(s,n.options.className),n.options.interactive&&et(s,"leaflet-interactive"),this._updateStyle(n),this._layers[_(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){Et(n._path),n.removeInteractiveTarget(n._path),delete this._layers[_(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var s=n._path,h=n.options;s&&(h.stroke?(s.setAttribute("stroke",h.color),s.setAttribute("stroke-opacity",h.opacity),s.setAttribute("stroke-width",h.weight),s.setAttribute("stroke-linecap",h.lineCap),s.setAttribute("stroke-linejoin",h.lineJoin),h.dashArray?s.setAttribute("stroke-dasharray",h.dashArray):s.removeAttribute("stroke-dasharray"),h.dashOffset?s.setAttribute("stroke-dashoffset",h.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),h.fill?(s.setAttribute("fill",h.fillColor||h.color),s.setAttribute("fill-opacity",h.fillOpacity),s.setAttribute("fill-rule",h.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(n,s){this._setPath(n,ur(n._parts,s))},_updateCircle:function(n){var s=n._point,h=Math.max(Math.round(n._radius),1),l=Math.max(Math.round(n._radiusY),1)||h,f="a"+h+","+l+" 0 1,0 ",g=n._empty()?"M0 0":"M"+(s.x-h)+","+s.y+f+h*2+",0 "+f+-h*2+",0 ";this._setPath(n,g)},_setPath:function(n,s){n._path.setAttribute("d",s)},_bringToFront:function(n){qe(n._path)},_bringToBack:function(n){fn(n._path)}});W.vml&&qr.include(nd);function Ph(n){return W.svg||W.vml?new qr(n):null}ot.include({getRenderer:function(n){var s=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var s=this._paneRenderers[n];return s===void 0&&(s=this._createRenderer({pane:n}),this._paneRenderers[n]=s),s},_createRenderer:function(n){return this.options.preferCanvas&&Ih(n)||Ph(n)}});var Ah=Mi.extend({initialize:function(n,s){Mi.prototype.initialize.call(this,this._boundsToLatLngs(n),s)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=xt(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function id(n,s){return new Ah(n,s)}qr.create=Qs,qr.pointsToPath=ur,$e.geometryToLayer=qs,$e.coordsToLatLng=Wo,$e.coordsToLatLngs=Hs,$e.latLngToCoords=Go,$e.latLngsToCoords=Zs,$e.getFeature=Di,$e.asFeature=Ws,ot.mergeOptions({boxZoom:!0});var bh=fe.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){G(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){wt(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Et(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Ae(),br(),this._startPoint=this._map.mouseEventToContainerPoint(n),G(document,{contextmenu:de,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=ht("div","leaflet-zoom-box",this._container),et(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var s=new At(this._point,this._startPoint),h=s.getSize();X(this._box,s.min),this._box.style.width=h.x+"px",this._box.style.height=h.y+"px"},_finish:function(){this._moved&&(Et(this._box),bt(this._container,"leaflet-crosshair")),be(),Sr(),wt(document,{contextmenu:de,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(c(this._resetState,this),0);var s=new mt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ot.addInitHook("addHandler","boxZoom",bh),ot.mergeOptions({doubleClickZoom:!0});var Sh=fe.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var s=this._map,h=s.getZoom(),l=s.options.zoomDelta,f=n.originalEvent.shiftKey?h-l:h+l;s.options.doubleClickZoom==="center"?s.setZoom(f):s.setZoomAround(n.containerPoint,f)}});ot.addInitHook("addHandler","doubleClickZoom",Sh),ot.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Ch=fe.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new Se(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}et(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){bt(this._map._container,"leaflet-grab"),bt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=xt(this._map.options.maxBounds);this._offsetLimit=Ct(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var s=this._lastTime=+new Date,h=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(h),this._times.push(s),this._prunePositions(s)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,s){return n-(n-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;n.x<s.min.x&&(n.x=this._viscousLimit(n.x,s.min.x)),n.y<s.min.y&&(n.y=this._viscousLimit(n.y,s.min.y)),n.x>s.max.x&&(n.x=this._viscousLimit(n.x,s.max.x)),n.y>s.max.y&&(n.y=this._viscousLimit(n.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,s=Math.round(n/2),h=this._initialWorldOffset,l=this._draggable._newPos.x,f=(l-s+h)%n+s-h,g=(l+s+h)%n-s-h,T=Math.abs(f+h)<Math.abs(g+h)?f:g;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=T},_onDragEnd:function(n){var s=this._map,h=s.options,l=!h.inertia||n.noInertia||this._times.length<2;if(s.fire("dragend",n),l)s.fire("moveend");else{this._prunePositions(+new Date);var f=this._lastPos.subtract(this._positions[0]),g=(this._lastTime-this._times[0])/1e3,T=h.easeLinearity,k=f.multiplyBy(T/g),O=k.distanceTo([0,0]),N=Math.min(h.inertiaMaxSpeed,O),j=k.multiplyBy(N/O),K=N/(h.inertiaDeceleration*T),st=j.multiplyBy(-K/2).round();!st.x&&!st.y?s.fire("moveend"):(st=s._limitOffset(st,s.options.maxBounds),A(function(){s.panBy(st,{duration:K,easeLinearity:T,noMoveStart:!0,animate:!0})}))}}});ot.addInitHook("addHandler","dragging",Ch),ot.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Rh=fe.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),G(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),wt(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,s=document.documentElement,h=n.scrollTop||s.scrollTop,l=n.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(l,h)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var s=this._panKeys={},h=this.keyCodes,l,f;for(l=0,f=h.left.length;l<f;l++)s[h.left[l]]=[-1*n,0];for(l=0,f=h.right.length;l<f;l++)s[h.right[l]]=[n,0];for(l=0,f=h.down.length;l<f;l++)s[h.down[l]]=[0,n];for(l=0,f=h.up.length;l<f;l++)s[h.up[l]]=[0,-1*n]},_setZoomDelta:function(n){var s=this._zoomKeys={},h=this.keyCodes,l,f;for(l=0,f=h.zoomIn.length;l<f;l++)s[h.zoomIn[l]]=n;for(l=0,f=h.zoomOut.length;l<f;l++)s[h.zoomOut[l]]=-n},_addHooks:function(){G(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){wt(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var s=n.keyCode,h=this._map,l;if(s in this._panKeys){if(!h._panAnim||!h._panAnim._inProgress)if(l=this._panKeys[s],n.shiftKey&&(l=J(l).multiplyBy(3)),h.options.maxBounds&&(l=h._limitOffset(J(l),h.options.maxBounds)),h.options.worldCopyJump){var f=h.wrapLatLng(h.unproject(h.project(h.getCenter()).add(l)));h.panTo(f)}else h.panBy(l)}else if(s in this._zoomKeys)h.setZoom(h.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&h._popup&&h._popup.options.closeOnEscapeKey)h.closePopup();else return;de(n)}}});ot.addInitHook("addHandler","keyboard",Rh),ot.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Lh=fe.extend({addHooks:function(){G(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){wt(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var s=Ms(n),h=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var l=Math.max(h-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(c(this._performZoom,this),l),de(n)},_performZoom:function(){var n=this._map,s=n.getZoom(),h=this._map.options.zoomSnap||0;n._stop();var l=this._delta/(this._map.options.wheelPxPerZoomLevel*4),f=4*Math.log(2/(1+Math.exp(-Math.abs(l))))/Math.LN2,g=h?Math.ceil(f/h)*h:f,T=n._limitZoom(s+(this._delta>0?g:-g))-s;this._delta=0,this._startTime=null,T&&(n.options.scrollWheelZoom==="center"?n.setZoom(s+T):n.setZoomAround(this._lastMousePos,s+T))}});ot.addInitHook("addHandler","scrollWheelZoom",Lh);var rd=600;ot.mergeOptions({tapHold:W.touchNative&&W.safari&&W.mobile,tapTolerance:15});var xh=fe.extend({addHooks:function(){G(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){wt(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var s=n.touches[0];this._startPos=this._newPos=new Q(s.clientX,s.clientY),this._holdTimeout=setTimeout(c(function(){this._cancel(),this._isTapValid()&&(G(document,"touchend",Rt),G(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),rd),G(document,"touchend touchcancel contextmenu",this._cancel,this),G(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){wt(document,"touchend",Rt),wt(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),wt(document,"touchend touchcancel contextmenu",this._cancel,this),wt(document,"touchmove",this._onMove,this)},_onMove:function(n){var s=n.touches[0];this._newPos=new Q(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,s){var h=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});h._simulated=!0,s.target.dispatchEvent(h)}});ot.addInitHook("addHandler","tapHold",xh),ot.mergeOptions({touchZoom:W.touch,bounceAtZoomLimits:!0});var kh=fe.extend({addHooks:function(){et(this._map._container,"leaflet-touch-zoom"),G(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){bt(this._map._container,"leaflet-touch-zoom"),wt(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var s=this._map;if(!(!n.touches||n.touches.length!==2||s._animatingZoom||this._zooming)){var h=s.mouseEventToContainerPoint(n.touches[0]),l=s.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(h.add(l)._divideBy(2))),this._startDist=h.distanceTo(l),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),G(document,"touchmove",this._onTouchMove,this),G(document,"touchend touchcancel",this._onTouchEnd,this),Rt(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var s=this._map,h=s.mouseEventToContainerPoint(n.touches[0]),l=s.mouseEventToContainerPoint(n.touches[1]),f=h.distanceTo(l)/this._startDist;if(this._zoom=s.getScaleZoom(f,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&f<1||this._zoom>s.getMaxZoom()&&f>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,f===1)return}else{var g=h._add(l)._divideBy(2)._subtract(this._centerPoint);if(f===1&&g.x===0&&g.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(g),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),C(this._animRequest);var T=c(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=A(T,this,!0),Rt(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,C(this._animRequest),wt(document,"touchmove",this._onTouchMove,this),wt(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ot.addInitHook("addHandler","touchZoom",kh),ot.BoxZoom=bh,ot.DoubleClickZoom=Sh,ot.Drag=Ch,ot.Keyboard=Rh,ot.ScrollWheelZoom=Lh,ot.TapHold=xh,ot.TouchZoom=kh,e.Bounds=At,e.Browser=W,e.CRS=ae,e.Canvas=Eh,e.Circle=Zo,e.CircleMarker=js,e.Class=jt,e.Control=he,e.DivIcon=yh,e.DivOverlay=ke,e.DomEvent=Ds,e.DomUtil=ks,e.Draggable=Se,e.Evented=Ee,e.FeatureGroup=Dt,e.GeoJSON=$e,e.GridLayer=zr,e.Handler=fe,e.Icon=xe,e.ImageOverlay=Gs,e.LatLng=lt,e.LatLngBounds=mt,e.Layer=Tt,e.LayerGroup=Lt,e.LineUtil=v,e.Map=ot,e.Marker=zs,e.Mixin=Kn,e.Path=yn,e.Point=Q,e.PolyUtil=xi,e.Polygon=Mi,e.Polyline=Ke,e.Popup=Ks,e.PosAnimation=Mr,e.Projection=B,e.Rectangle=Ah,e.Renderer=Qe,e.SVG=qr,e.SVGOverlay=vh,e.TileLayer=Ni,e.Tooltip=$s,e.Transformation=ln,e.Util=P,e.VideoOverlay=gh,e.bind=c,e.bounds=Ct,e.canvas=Ih,e.circle=Hc,e.circleMarker=qc,e.control=re,e.divIcon=Xc,e.extend=o,e.featureGroup=Oi,e.geoJSON=_h,e.geoJson=Gc,e.gridLayer=td,e.icon=zc,e.imageOverlay=Kc,e.latLng=at,e.latLngBounds=xt,e.layerGroup=vn,e.map=Ai,e.marker=jc,e.point=J,e.polygon=Wc,e.polyline=Zc,e.popup=Yc,e.rectangle=id,e.setOptions=z,e.stamp=_,e.svg=Ph,e.svgOverlay=Qc,e.tileLayer=wh,e.tooltip=Jc,e.transformation=Be,e.version=r,e.videoOverlay=$c;var sd=window.L;e.noConflict=function(){return window.L=sd,this},window.L=e})})(ka,ka.exports);var qv=ka.exports;const ts=jv(qv);let $i,Ye={},Oa={};async function Hv(){try{Oa=(await(await fetch("./routes.json")).json()).routes,Zv(),Np($u,e=>{e||Lp($u).catch(console.error),Wv()})}catch(i){console.error("Passenger Init Error:",i)}}function Zv(){$i=ts.map("map",{zoomControl:!1}).setView([14.39,120.9],11),ts.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{maxZoom:19,subdomains:"abcd"}).addTo($i),Oa&&Object.values(Oa).forEach(i=>{ts.polyline(i.path,{color:i.color,opacity:.3,weight:3}).addTo($i)})}function Wv(){const i=Pv(Uv,"artifacts","metro-cavite-v4","public","active_buses");Vv(i,t=>{const e=[];t.forEach(r=>e.push(r.data())),Gv(e),Kv(e)})}function Gv(i){Object.keys(Ye).forEach(t=>{i.find(e=>e.driverId===t)||($i.removeLayer(Ye[t]),delete Ye[t])}),i.forEach(t=>{if(t.lat===0)return;let e="#fff";t.status==="arriving"&&(e="#facc15"),t.status==="arrived"&&(e="#22c55e"),t.status==="departing"&&(e="#f97316"),t.status==="departed"&&(e="#ef4444");const o=`
            <div class="bus-icon-wrapper ${t.speed>60?"overspeeding-marker":""}">
                <div style="background:${e}; box-shadow: 0 0 10px ${e};" class="w-3 h-3 rounded-full border border-white"></div>
            </div>`,u=ts.divIcon({className:"bg-transparent",html:o,iconSize:[20,20]});if(Ye[t.driverId]){const c=Ye[t.driverId];c.setLatLng([t.lat,t.lng]),c.setIcon(u)}else{const c=ts.marker([t.lat,t.lng],{icon:u}).addTo($i);c.bindPopup(`
                <div class="font-mono text-xs p-1">
                    <div class="font-bold text-sm">${t.driverName}</div>
                    <div class="text-gray-400 text-[10px]">${t.company}</div>
                    <div class="mt-1">Speed: ${Math.round(t.speed)} km/h</div>
                    <div style="color:${e}" class="font-bold uppercase">${t.status||"Active"}</div>
                </div>
            `),Ye[t.driverId]=c}})}function Kv(i){const t=document.getElementById("bus-list");if(t){if(i.length===0){t.innerHTML='<div class="text-center py-10 text-gray-500 text-xs font-mono">NO ACTIVE BUSES</div>';return}t.innerHTML=i.map(e=>`
        <div class="p-3 hover:bg-slate-800/50 cursor-pointer transition" onclick="window.focusBus('${e.driverId}')">
            <div class="flex justify-between items-center">
                <div>
                    <div class="font-bold text-xs">${e.driverName}</div>
                    <div class="text-[9px] text-gray-500 uppercase">${e.company}</div>
                </div>
                <div class="text-right">
                    <div class="font-mono font-bold text-cyan-400 text-xs">${Math.round(e.speed)} KM/H</div>
                    <div class="text-[9px] text-gray-400 uppercase">${e.status||"On Route"}</div>
                </div>
            </div>
        </div>
    `).join("")}}window.focusBus=i=>{Ye[i]&&($i.setView(Ye[i].getLatLng(),15),Ye[i].openPopup())};window.onload=Hv;
