"use strict";(self["webpackChunksolar_bk_landing_page"]=self["webpackChunksolar_bk_landing_page"]||[]).push([[23],{3053:function(e,t,r){r.d(t,{Xw:function(){return z}});r(7658);var a=r(4870),n=r(3396);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(((r,n)=>(t.includes(n)||(r[n]=(0,a.SU)(e[n])),r)),{})}function i(e){return"function"===typeof e}function l(e){return(0,a.PG)(e)||(0,a.$y)(e)}function o(e,t,r){let a=e;const n=t.split(".");for(let s=0;s<n.length;s++){if(!a[n[s]])return r;a=a[n[s]]}return a}function u(e,t,r){return(0,n.Fl)((()=>e.some((e=>o(t,e,{[r]:!1})[r]))))}function c(e,t,r){return(0,n.Fl)((()=>e.reduce(((e,a)=>{const n=o(t,a,{[r]:!1})[r]||[];return e.concat(n)}),[])))}function $(e,t,r,n){return e.call(n,(0,a.SU)(t),(0,a.SU)(r),n)}function d(e){return void 0!==e.$valid?!e.$valid:!e}function v(e,t,r,s,i,l,o){let{$lazy:u,$rewardEarly:c}=i,v=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],f=arguments.length>8?arguments[8]:void 0,p=arguments.length>9?arguments[9]:void 0,g=arguments.length>10?arguments[10]:void 0;const h=(0,a.iH)(!!s.value),m=(0,a.iH)(0);r.value=!1;const y=(0,n.YP)([t,s].concat(v,g),(()=>{if(u&&!s.value||c&&!p.value&&!r.value)return;let a;try{a=$(e,t,f,o)}catch(n){a=Promise.reject(n)}m.value++,r.value=!!m.value,h.value=!1,Promise.resolve(a).then((e=>{m.value--,r.value=!!m.value,l.value=e,h.value=d(e)})).catch((e=>{m.value--,r.value=!!m.value,l.value=e,h.value=!0}))}),{immediate:!0,deep:"object"===typeof t});return{$invalid:h,$unwatch:y}}function f(e,t,r,a,s,i,l,o){let{$lazy:u,$rewardEarly:c}=a;const v=()=>({}),f=(0,n.Fl)((()=>{if(u&&!r.value||c&&!o.value)return!1;let a=!0;try{const r=$(e,t,l,i);s.value=r,a=d(r)}catch(n){s.value=n}return a}));return{$unwatch:v,$invalid:f}}function p(e,t,r,l,o,u,c,$,d,p,g){const h=(0,a.iH)(!1),m=e.$params||{},y=(0,a.iH)(null);let b,x;e.$async?({$invalid:b,$unwatch:x}=v(e.$validator,t,h,r,l,y,o,e.$watchTargets,d,p,g)):({$invalid:b,$unwatch:x}=f(e.$validator,t,r,l,y,o,d,p));const j=e.$message,w=i(j)?(0,n.Fl)((()=>j(s({$pending:h,$invalid:b,$params:s(m),$model:t,$response:y,$validator:u,$propertyPath:$,$property:c})))):j||"";return{$message:w,$params:m,$pending:h,$invalid:b,$response:y,$unwatch:x}}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,a.SU)(e),r=Object.keys(t),n={},s={},l={};let o=null;return r.forEach((e=>{const r=t[e];switch(!0){case i(r.$validator):n[e]=r;break;case i(r):n[e]={$validator:r};break;case"$validationGroups"===e:o=r;break;case e.startsWith("$"):l[e]=r;break;default:s[e]=r}})),{rules:n,nestedValidators:s,config:l,validationGroups:o}}function h(){}const m="__root";function y(e,t,r){if(r)return t?t(e()):e();try{var a=Promise.resolve(e());return t?a.then(t):a}catch(n){return Promise.reject(n)}}function b(e,t){return y(e,h,t)}function x(e,t){var r=e();return r&&r.then?r.then(t):t(r)}function j(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];try{return Promise.resolve(e.apply(this,t))}catch(a){return Promise.reject(a)}}}function w(e,t,r,s,i,l,o,u,c){const $=Object.keys(e),d=s.get(i,e),v=(0,a.iH)(!1),f=(0,a.iH)(!1),g=(0,a.iH)(0);if(d){if(!d.$partial)return d;d.$unwatch(),v.value=d.$dirty.value}const h={$dirty:v,$path:i,$touch:()=>{v.value||(v.value=!0)},$reset:()=>{v.value&&(v.value=!1)},$commit:()=>{}};return $.length?($.forEach((a=>{h[a]=p(e[a],t,h.$dirty,l,o,a,r,i,c,f,g)})),h.$externalResults=(0,n.Fl)((()=>u.value?[].concat(u.value).map(((e,t)=>({$propertyPath:i,$property:r,$validator:"$externalResults",$uid:`${i}-externalResult-${t}`,$message:e,$params:{},$response:null,$pending:!1}))):[])),h.$invalid=(0,n.Fl)((()=>{const e=$.some((e=>(0,a.SU)(h[e].$invalid)));return f.value=e,!!h.$externalResults.value.length||e})),h.$pending=(0,n.Fl)((()=>$.some((e=>(0,a.SU)(h[e].$pending))))),h.$error=(0,n.Fl)((()=>!!h.$dirty.value&&(h.$pending.value||h.$invalid.value))),h.$silentErrors=(0,n.Fl)((()=>$.filter((e=>(0,a.SU)(h[e].$invalid))).map((e=>{const t=h[e];return(0,a.qj)({$propertyPath:i,$property:r,$validator:e,$uid:`${i}-${e}`,$message:t.$message,$params:t.$params,$response:t.$response,$pending:t.$pending})})).concat(h.$externalResults.value))),h.$errors=(0,n.Fl)((()=>h.$dirty.value?h.$silentErrors.value:[])),h.$unwatch=()=>$.forEach((e=>{h[e].$unwatch()})),h.$commit=()=>{f.value=!0,g.value=Date.now()},s.set(i,e,h),h):(d&&s.set(i,e,h),h)}function S(e,t,r,a,n,s,i){const l=Object.keys(e);return l.length?l.reduce(((l,o)=>(l[o]=U({validations:e[o],state:t,key:o,parentKey:r,resultsCache:a,globalConfig:n,instance:s,externalResults:i}),l)),{}):{}}function E(e,t,r){const s=(0,n.Fl)((()=>[t,r].filter((e=>e)).reduce(((e,t)=>e.concat(Object.values((0,a.SU)(t)))),[]))),i=(0,n.Fl)({get(){return e.$dirty.value||!!s.value.length&&s.value.every((e=>e.$dirty))},set(t){e.$dirty.value=t}}),l=(0,n.Fl)((()=>{const t=(0,a.SU)(e.$silentErrors)||[],r=s.value.filter((e=>((0,a.SU)(e).$silentErrors||[]).length)).reduce(((e,t)=>e.concat(...t.$silentErrors)),[]);return t.concat(r)})),o=(0,n.Fl)((()=>{const t=(0,a.SU)(e.$errors)||[],r=s.value.filter((e=>((0,a.SU)(e).$errors||[]).length)).reduce(((e,t)=>e.concat(...t.$errors)),[]);return t.concat(r)})),u=(0,n.Fl)((()=>s.value.some((e=>e.$invalid))||(0,a.SU)(e.$invalid)||!1)),c=(0,n.Fl)((()=>s.value.some((e=>(0,a.SU)(e.$pending)))||(0,a.SU)(e.$pending)||!1)),$=(0,n.Fl)((()=>s.value.some((e=>e.$dirty))||s.value.some((e=>e.$anyDirty))||i.value)),d=(0,n.Fl)((()=>!!i.value&&(c.value||u.value))),v=()=>{e.$touch(),s.value.forEach((e=>{e.$touch()}))},f=()=>{e.$commit(),s.value.forEach((e=>{e.$commit()}))},p=()=>{e.$reset(),s.value.forEach((e=>{e.$reset()}))};return s.value.length&&s.value.every((e=>e.$dirty))&&v(),{$dirty:i,$errors:o,$invalid:u,$anyDirty:$,$error:d,$pending:c,$touch:v,$reset:p,$silentErrors:l,$commit:f}}function U(e){const t=j((function(){return q(),x((function(){if(F.$rewardEarly)return G(),b(n.Y3)}),(function(){return y(n.Y3,(function(){return new Promise((e=>{if(!N.value)return e(!V.value);const t=(0,n.YP)(N,(()=>{e(!V.value),t()}))}))}))}))}));let{validations:r,state:s,key:i,parentKey:l,childResults:o,resultsCache:$,globalConfig:d={},instance:v,externalResults:f}=e;const p=l?`${l}.${i}`:i,{rules:h,nestedValidators:U,config:_,validationGroups:O}=g(r),F=Object.assign({},d,_),R=i?(0,n.Fl)((()=>{const e=(0,a.SU)(s);return e?(0,a.SU)(e[i]):void 0})):s,C=Object.assign({},(0,a.SU)(f)||{}),k=(0,n.Fl)((()=>{const e=(0,a.SU)(f);return i?e?(0,a.SU)(e[i]):void 0:e})),P=w(h,R,i,$,p,F,v,k,s),z=S(U,R,p,$,F,v,k),A={};O&&Object.entries(O).forEach((e=>{let[t,r]=e;A[t]={$invalid:u(r,z,"$invalid"),$error:u(r,z,"$error"),$pending:u(r,z,"$pending"),$errors:c(r,z,"$errors"),$silentErrors:c(r,z,"$silentErrors")}}));const{$dirty:L,$errors:H,$invalid:V,$anyDirty:T,$error:I,$pending:N,$touch:q,$reset:D,$silentErrors:Y,$commit:G}=E(P,z,o),J=i?(0,n.Fl)({get:()=>(0,a.SU)(R),set:e=>{L.value=!0;const t=(0,a.SU)(s),r=(0,a.SU)(f);r&&(r[i]=C[i]),(0,a.dq)(t[i])?t[i].value=e:t[i]=e}}):null;function Z(e){return(o.value||{})[e]}function K(){(0,a.dq)(f)?f.value=C:0===Object.keys(C).length?Object.keys(f).forEach((e=>{delete f[e]})):Object.assign(f,C)}return i&&F.$autoDirty&&(0,n.YP)(R,(()=>{L.value||q();const e=(0,a.SU)(f);e&&(e[i]=C[i])}),{flush:"sync"}),(0,a.qj)(Object.assign({},P,{$model:J,$dirty:L,$error:I,$errors:H,$invalid:V,$anyDirty:T,$pending:N,$touch:q,$reset:D,$path:p||m,$silentErrors:Y,$validate:t,$commit:G},o&&{$getResultsForChild:Z,$clearExternalResults:K,$validationGroups:A},z))}class _{constructor(){this.storage=new Map}set(e,t,r){this.storage.set(e,{rules:t,result:r})}checkRulesValidity(e,t,r){const n=Object.keys(r),s=Object.keys(t);if(s.length!==n.length)return!1;const i=s.every((e=>n.includes(e)));return!!i&&s.every((e=>!t[e].$params||Object.keys(t[e].$params).every((n=>(0,a.SU)(r[e].$params[n])===(0,a.SU)(t[e].$params[n])))))}get(e,t){const r=this.storage.get(e);if(!r)return;const{rules:a,result:n}=r,s=this.checkRulesValidity(e,t,a),i=n.$unwatch?n.$unwatch:()=>({});return s?n:{$dirty:n.$dirty,$partial:!0,$unwatch:i}}}const O={COLLECT_ALL:!0,COLLECT_NONE:!1},F=Symbol("vuelidate#injectChildResults"),R=Symbol("vuelidate#removeChildResults");function C(e){let{$scope:t,instance:r}=e;const s={},i=(0,a.iH)([]),l=(0,n.Fl)((()=>i.value.reduce(((e,t)=>(e[t]=(0,a.SU)(s[t]),e)),{})));function o(e,r){let{$registerAs:a,$scope:n,$stopPropagation:l}=r;l||t===O.COLLECT_NONE||n===O.COLLECT_NONE||t!==O.COLLECT_ALL&&t!==n||(s[a]=e,i.value.push(a))}function u(e){i.value=i.value.filter((t=>t!==e)),delete s[e]}r.__vuelidateInjectInstances=[].concat(r.__vuelidateInjectInstances||[],o),r.__vuelidateRemoveInstances=[].concat(r.__vuelidateRemoveInstances||[],u);const c=(0,n.f3)(F,[]);(0,n.JJ)(F,r.__vuelidateInjectInstances);const $=(0,n.f3)(R,[]);return(0,n.JJ)(R,r.__vuelidateRemoveInstances),{childResults:l,sendValidationResultsToParent:c,removeValidationResultsFromParent:$}}function k(e){return new Proxy(e,{get(e,t){return"object"===typeof e[t]?k(e[t]):(0,n.Fl)((()=>e[t]))}})}let P=0;function z(e,t){var r;let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};1===arguments.length&&(s=e,e=void 0,t=void 0);let{$registerAs:o,$scope:u=O.COLLECT_ALL,$stopPropagation:c,$externalResults:$,currentVueInstance:d}=s;const v=d||(null===(r=(0,n.FN)())||void 0===r?void 0:r.proxy),f=v?v.$options:{};o||(P+=1,o=`_vuelidate_${P}`);const p=(0,a.iH)({}),g=new _,{childResults:h,sendValidationResultsToParent:m,removeValidationResultsFromParent:y}=v?C({$scope:u,instance:v}):{childResults:(0,a.iH)({})};if(!e&&f.validations){const e=f.validations;t=(0,a.iH)({}),(0,n.wF)((()=>{t.value=v,(0,n.YP)((()=>i(e)?e.call(t.value,new k(t.value)):e),(e=>{p.value=U({validations:e,state:t,childResults:h,resultsCache:g,globalConfig:s,instance:v,externalResults:$||v.vuelidateExternalResults})}),{immediate:!0})})),s=f.validationsConfig||s}else{const r=(0,a.dq)(e)||l(e)?e:(0,a.qj)(e||{});(0,n.YP)(r,(e=>{p.value=U({validations:e,state:t,childResults:h,resultsCache:g,globalConfig:s,instance:null!==v&&void 0!==v?v:{},externalResults:$})}),{immediate:!0})}return v&&(m.forEach((e=>e(p,{$registerAs:o,$scope:u,$stopPropagation:c}))),(0,n.Jd)((()=>y.forEach((e=>e(o)))))),(0,n.Fl)((()=>Object.assign({},(0,a.SU)(p.value),h.value)))}},9117:function(e,t,r){r.d(t,{C1:function(){return m}});r(7658);var a=r(4870);function n(e){return"function"===typeof e}function s(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function i(e){return n(e.$validator)?Object.assign({},e):{$validator:e}}function l(e){return"object"===typeof e?e.$valid:e}function o(e){return e.$validator||e}function u(e,t){if(!s(e))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '+typeof e);if(!s(t)&&!n(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const r=i(t);return r.$params=Object.assign({},r.$params||{},e),r}function c(e,t){if(!n(e)&&"string"!==typeof(0,a.SU)(e))throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '+typeof e);if(!s(t)&&!n(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const r=i(t);return r.$message=e,r}function $(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const r=i(e);return Object.assign({},r,{$async:!0,$watchTargets:t})}function d(e){return{$validator(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),s=1;s<r;s++)n[s-1]=arguments[s];return(0,a.SU)(t).reduce(((t,r,a)=>{const s=Object.entries(r).reduce(((t,s)=>{let[i,u]=s;const c=e[i]||{},$=Object.entries(c).reduce(((e,t)=>{let[s,c]=t;const $=o(c),d=$.call(this,u,r,a,...n),v=l(d);if(e.$data[s]=d,e.$data.$invalid=!v||!!e.$data.$invalid,e.$data.$error=e.$data.$invalid,!v){let t=c.$message||"";const r=c.$params||{};"function"===typeof t&&(t=t({$pending:!1,$invalid:!v,$params:r,$model:u,$response:d})),e.$errors.push({$property:i,$message:t,$params:r,$response:d,$model:u,$pending:!1,$validator:s})}return{$valid:e.$valid&&v,$data:e.$data,$errors:e.$errors}}),{$valid:!0,$data:{},$errors:[]});return t.$data[i]=$.$data,t.$errors[i]=$.$errors,{$valid:t.$valid&&$.$valid,$data:t.$data,$errors:t.$errors}}),{$valid:!0,$data:{},$errors:{}});return{$valid:t.$valid&&s.$valid,$data:t.$data.concat(s.$data),$errors:t.$errors.concat(s.$errors)}}),{$valid:!0,$data:[],$errors:[]})},$message:e=>{let{$response:t}=e;return t?t.$errors.map((e=>Object.values(e).map((e=>e.map((e=>e.$message)))).reduce(((e,t)=>e.concat(t)),[]))):[]}}}const v=e=>{if(e=(0,a.SU)(e),Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===typeof e){for(let t in e)return!0;return!1}return!!String(e).length},f=e=>(e=(0,a.SU)(e),Array.isArray(e)?e.length:"object"===typeof e?Object.keys(e).length:String(e).length);function p(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>(e=(0,a.SU)(e),!v(e)||t.every((t=>t.test(e))))}a.SU,p(/^[a-zA-Z]*$/),p(/^[a-zA-Z0-9]*$/),p(/^\d*(\.\d+)?$/);const g=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;p(g);function h(e){return"string"===typeof e&&(e=e.trim()),v(e)}var m={$validator:h,$message:"Value is required",$params:{type:"required"}};const y=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;p(y);p(/(^[0-9]*$)|(^-[0-9]+$)/),p(/^[-]?\d*(\.\d+)?$/)},5074:function(e,t,r){r.d(t,{Z:function(){return $}});var a=r(3396);const n={class:"grid"},s=(0,a._)("div",{class:"col-12 flex"},[(0,a._)("img",{src:"https://solarbk.vn/uploads/images/2020/12/01/logo-solarbk.png",class:"rounded d-block align-items-start",alt:"..."})],-1),i=[s];function l(e,t,r,s,l,o){return(0,a.wg)(),(0,a.iD)("div",n,i)}var o={name:"HeaderComponent"},u=r(89);const c=(0,u.Z)(o,[["render",l]]);var $=c}}]);
//# sourceMappingURL=23.b78ce4c1.js.map