"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5294],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83634:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={},u=void 0,c={unversionedId:"js/features/odata/common/function-imports/request-builder",id:"js/features/odata/common/function-imports/request-builder",title:"request-builder",description:"The function imports request builder helps build a request for a service operation containing parameters in a type-safe way.",source:"@site/docs/js/features/odata/common/function-imports/request-builder.mdx",sourceDirName:"js/features/odata/common/function-imports",slug:"/js/features/odata/common/function-imports/request-builder",permalink:"/cloud-sdk/docs/js/features/odata/common/function-imports/request-builder",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/function-imports/request-builder.mdx",tags:[],version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1651221783,formattedLastUpdatedAt:"4/29/2022",frontMatter:{}},p={},l=[],d={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"pathname:///api/1.28.1/classes/sap_cloud_sdk_core.functionimportrequestbuilderv2"},"function imports request builder")," helps build a request for a service operation containing parameters in a type-safe way.\nThis time, as an example, the ",(0,a.kt)("a",{parentName:"p",href:"https://api.sap.com/api/API_WHSE_OUTB_DLV_ORDER/resource"},(0,a.kt)("inlineCode",{parentName:"a"},"Warehouse Outbound Delivery Order Service"))," is used, because not all the services contain function imports like the ",(0,a.kt)("inlineCode",{parentName:"p"},"Business Partner Service"),".\nThe type-safe client for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Warehouse Outbound Delivery Order Service")," can be found in the package ",(0,a.kt)("inlineCode",{parentName:"p"},"@sap/cloud-sdk-vdm-warehouse-outbound-delivery-order-service"),"."),(0,a.kt)("p",null,"The example below creates a function import request builder for the service operation ",(0,a.kt)("inlineCode",{parentName:"p"},"PostGoodsIssue")," and then execute it against your service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"postGoodsIssue({ outboundDeliveryOrder: 'order' }).execute(destination);\n")),(0,a.kt)("p",null,"The service operation is defined in the service metadata."),(0,a.kt)("p",null,"If the response structure does not match the transformation type, the promise from ",(0,a.kt)("inlineCode",{parentName:"p"},"execute(destination)")," will be resolved into ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,a.kt)("p",null,"The default transformer expects the following response format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "d": {\n    "Count": 0\n  }\n}\n')),(0,a.kt)("p",null,"Assume the actual response has an additional layer ",(0,a.kt)("inlineCode",{parentName:"p"},"Foo"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "d": {\n    "Foo": {\n      "Count": 0\n    }\n  }\n}\n')),(0,a.kt)("p",null,"In this case, ",(0,a.kt)("inlineCode",{parentName:"p"},"dataAccessor")," can be used in the following way to modify the response into the desired form for further deserialization."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"functionImportRequestBuilder.execute(destination, data => data.d.Foo);\n")))}m.isMDXComponent=!0}}]);