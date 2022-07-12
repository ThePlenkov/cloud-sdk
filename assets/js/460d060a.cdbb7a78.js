"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9707],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||l[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63517:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={},s=void 0,u={unversionedId:"js/features/odata/common/batch/batch-intro",id:"js/features/odata/common/batch/batch-intro",title:"batch-intro",description:"OData batch requests combine multiple operations into one POST operation, allowing you to execute multiple requests with just one network call.",source:"@site/docs/js/features/odata/common/batch/batch-intro.mdx",sourceDirName:"js/features/odata/common/batch",slug:"/js/features/odata/common/batch/batch-intro",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/batch-intro",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/batch/batch-intro.mdx",tags:[],version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1657623713,formattedLastUpdatedAt:"7/12/2022",frontMatter:{}},p={},l=[],m={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OData batch requests combine multiple operations into one POST operation, allowing you to execute multiple requests with just one network call.\nThis can significantly reduce the network overhead you have to deal with when you want to execute many requests."),(0,a.kt)("p",null,"Every SAP Cloud SDK client provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," function that takes ",(0,a.kt)("a",{parentName:"p",href:"#retrieve-request"},"retrieve requests")," and ",(0,a.kt)("a",{parentName:"p",href:"#changeset"},"changesets"),".\nYou can combine those arbitrarily.\nTo execute batch requests, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," method - it works the same way as for single requests."),(0,a.kt)("p",null,"The response of a ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request is a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"BatchResponse"),"s.\nEach of the items in the response is either a ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadResponse"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponses")," or an ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),", see ",(0,a.kt)("a",{parentName:"p",href:"#responses"},"Responses"),"."))}f.isMDXComponent=!0}}]);