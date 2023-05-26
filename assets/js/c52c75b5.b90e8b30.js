"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[382],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,v=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},15218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"overview",title:"Overview",sidebar_label:"Overview",description:"Client generators for OpenAPI services for TypeScript and JavaScript",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","openapi","JavaScript","TypeScript","OpenAPI"]},i=void 0,s={unversionedId:"features/openapi/overview",id:"version-v1/features/openapi/overview",title:"Overview",description:"Client generators for OpenAPI services for TypeScript and JavaScript",source:"@site/docs-js_versioned_docs/version-v1/features/openapi/overview.mdx",sourceDirName:"features/openapi",slug:"/features/openapi/overview",permalink:"/cloud-sdk/docs/js/v1/features/openapi/overview",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/openapi/overview.mdx",tags:[],version:"v1",frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",description:"Client generators for OpenAPI services for TypeScript and JavaScript",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","openapi","JavaScript","TypeScript","OpenAPI"]},sidebar:"docsJsSidebar",previous:{title:"On-Premise Systems",permalink:"/cloud-sdk/docs/js/v1/features/connectivity/on-premise"},next:{title:"Generate an OpenAPI Client",permalink:"/cloud-sdk/docs/js/v1/features/openapi/generate-client"}},p={},l=[{value:"OpenAPI &amp; the SAP Cloud SDK",id:"openapi--the-sap-cloud-sdk",level:2},{value:"OpenAPI Code Generator",id:"openapi-code-generator",level:3},{value:"Pregenerated OpenAPI Type-safe Client Libraries",id:"pregenerated-openapi-type-safe-client-libraries",level:3},{value:"Why the SAP Cloud SDK for JavaScript for OpenAPI Services?",id:"why-the-sap-cloud-sdk-for-javascript-for-openapi-services",level:2},{value:"Feedback &amp; Support",id:"feedback--support",level:2}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"openapi--the-sap-cloud-sdk"},"OpenAPI & the SAP Cloud SDK"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI")," standard is a popular format to define RESTful APIs.\nTogether with ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v1/features/odata/overview"},"OData")," OpenAPI is one of the key API definition formats used at SAP.\nThe SAP Cloud SDK provides convenient tooling to make the consumption of OpenAPI services easy and convenient on SAP Business Technology Platform."),(0,a.kt)("h3",{id:"openapi-code-generator"},"OpenAPI Code Generator"),(0,a.kt)("p",null,"We developed an ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v1/features/openapi/generate-client"},"OpenAPI code generator")," from the ground up.\nIt's a ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v1/features/openapi/generate-client#options-of-the-openapi-cli"},"command line tool (CLI)")," capable of converting any OpenAPI specification into a TypeScript or JavaScript type-safe client library that is seamlessly integrated with other SAP Cloud SDK features like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/v1/features/connectivity/destinations"},"connectivity")),(0,a.kt)("li",{parentName:"ul"},"multi-tenancy"),(0,a.kt)("li",{parentName:"ul"},"authentication"),(0,a.kt)("li",{parentName:"ul"},"destinations"),(0,a.kt)("li",{parentName:"ul"},"and other abstractions of the SAP Business Technology Platform.")),(0,a.kt)("p",null,"We support both OpenAPI versions ",(0,a.kt)("strong",{parentName:"p"},"2.0")," and ",(0,a.kt)("strong",{parentName:"p"},"3.0"),".\nYou can use the OpenAPI generator to create a client library for any OpenAPI-based API service available on the ",(0,a.kt)("a",{parentName:"p",href:"https://api.sap.com/"},"SAP Business Accelerator Hub")," or found elsewhere in the Internet.\nIf you encounter any problems or errors with OpenAPI tooling give us feedback via our ",(0,a.kt)("a",{parentName:"p",href:"/docs/overview/get-support"},"support channels"),"."),(0,a.kt)("h3",{id:"pregenerated-openapi-type-safe-client-libraries"},"Pregenerated OpenAPI Type-safe Client Libraries"),(0,a.kt)("p",null,"We're collaborating with service publishers at SAP to certify and release type-safe OpenAPI client libraries for their services on npm.\nThe ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v1/features/openapi/pregenerated-clients/workflow"},"SAP Workflow service")," is a good example of such collaboration.\nStay tuned for more certified services.\nStay tuned for more OpenAPI client libraries certified by the SAP Cloud SDK or create a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk/issues"},"request")," for the specific service you're interested in."),(0,a.kt)("admonition",{title:"generate a client library yourself",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can always ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v1/features/openapi/generate-client"},"generate an OpenAPI client library yourself")," based on API specifications available on the ",(0,a.kt)("a",{parentName:"p",href:"https://api.sap.com/"},"SAP Business Accelerator Hub")," or found elsewhere.")),(0,a.kt)("h2",{id:"why-the-sap-cloud-sdk-for-javascript-for-openapi-services"},"Why the SAP Cloud SDK for JavaScript for OpenAPI Services?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You'll benefit from less code boilerplate and better developer experience."),(0,a.kt)("li",{parentName:"ul"},"We take care of various complexities around the development of applications and extensions on the SAP Business Technology Platform."),(0,a.kt)("li",{parentName:"ul"},"You'll get convenient abstractions for",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Destinations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Authentication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Service bindings")),(0,a.kt)("li",{parentName:"ul"},"automated ",(0,a.kt)("inlineCode",{parentName:"li"},"CSRF")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ETag")," tokens handling"),(0,a.kt)("li",{parentName:"ul"},"automated management of HTTP Headers"),(0,a.kt)("li",{parentName:"ul"},"and much more"))),(0,a.kt)("li",{parentName:"ul"},"We hide the complexities of cloud development making many tasks easier for developers."),(0,a.kt)("li",{parentName:"ul"},"You're getting best in class ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-sdk-js/issues/new/choose"},"support from the SAP Cloud SDK")," development team."),(0,a.kt)("li",{parentName:"ul"},"We take care of change management by continuously updating, integrating, and shipping the latest version of services that we release."),(0,a.kt)("li",{parentName:"ul"},"Our documentation is written by developers for developers.\nWe keep it relevant and up to date.")),(0,a.kt)("h2",{id:"feedback--support"},"Feedback & Support"),(0,a.kt)("p",null,"We are happy to hear from you via internal communication channels or our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/issues/new/choose"},"GitHub repository"),"."))}d.isMDXComponent=!0}}]);