"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9747],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},62666:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],c={},i=void 0,l={unversionedId:"features/odata/v4/select",id:"version-v1/features/odata/v4/select",title:"select",description:"When reading entities, the API offers select( ... ) on the builders.",source:"@site/docs-js_versioned_docs/version-v1/features/odata/v4/select.mdx",sourceDirName:"features/odata/v4",slug:"/features/odata/v4/select",permalink:"/cloud-sdk/docs/js/v1/features/odata/v4/select",draft:!1,tags:[],version:"v1",frontMatter:{}},u={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When reading entities, the API offers ",(0,o.kt)("inlineCode",{parentName:"p"},"select( ... )")," on the builders.\nNote that for OData v4 a ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," does not automatically expand navigation properties.\nSee ",(0,o.kt)("a",{parentName:"p",href:"#expand-and-select"},"here")," for details on select and expand.\nFor non-navigational property the ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," behaves as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .getAll()\n  .select(BusinessPartner.FIRST_NAME, BusinessPartner.LAST_NAME)\n  .execute(destination);\n")),(0,o.kt)("p",null,"The above translates to the following query parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"$select=FirstName,LastName\n")))}d.isMDXComponent=!0}}]);