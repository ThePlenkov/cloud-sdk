"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6069],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(o),m=n,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return o?a.createElement(h,i(i({ref:t},u),{},{components:o})):a.createElement(h,i({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<r;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},87776:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),i=(o(44996),["components"]),l={id:"overview-cloud-sdk",title:"About the SAP Cloud SDK",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"About the SAP Cloud SDK",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},s=void 0,d={unversionedId:"overview/overview-cloud-sdk",id:"overview/overview-cloud-sdk",title:"About the SAP Cloud SDK",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",source:"@site/docs/overview/about.mdx",sourceDirName:"overview",slug:"/overview/overview-cloud-sdk",permalink:"/cloud-sdk/docs/overview/overview-cloud-sdk",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/overview/about.mdx",tags:[],version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1646056406,formattedLastUpdatedAt:"2/28/2022",frontMatter:{id:"overview-cloud-sdk",title:"About the SAP Cloud SDK",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"About the SAP Cloud SDK",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"someSidebar",next:{title:"Feature Matrix",permalink:"/cloud-sdk/docs/overview/cloud-sdk-feature-matrix"}},u=[{value:"Introduction",id:"introduction",children:[{value:"Benefits &amp; Capabilities",id:"benefits--capabilities",children:[],level:3},{value:"Well-Integrated With the SAP Cloud Development Ecosystem",id:"well-integrated-with-the-sap-cloud-development-ecosystem",children:[],level:3},{value:"Your Own SAP Cloud SDK",id:"your-own-sap-cloud-sdk",children:[],level:3},{value:"Flavors of SAP Cloud SDK",id:"flavors-of-sap-cloud-sdk",children:[],level:3},{value:"Open Source",id:"open-source",children:[],level:3},{value:"Feedback",id:"feedback",children:[],level:3}],level:2}],c={toc:u};function p(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The SAP Cloud SDK is a versatile set of libraries and tools for developers to build cloud-native applications on the SAP Business Technology Platform (SAP BTP).\nOur goal is to simplify the life of developers working in the SAP ecosystem.\nWe're abstracting the complexities of the SAP BTP and letting you focus on the application's business logic."),(0,r.kt)("p",null,"We continuously improve the SAP Cloud SDK in short release cycles to keep up with the enormous speed of changes in cloud development.\nBy choosing the SAP Cloud SDK, you also choose a curated set of standards and development best practices allowing for a resilient, agile, and streamlined software delivery process.\nTo make sure you get a kick start into developing with the SAP Cloud SDK, we regularly update this documentation and run ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/community/community-call"},"community events"),"."),(0,r.kt)("p",null,"Welcome on board!"),(0,r.kt)("h3",{id:"benefits--capabilities"},"Benefits & Capabilities"),(0,r.kt)("p",null,"The SAP Cloud SDK is available for ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/getting-started"},"Java")," and ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/getting-started"},"JavaScript / TypeScript"),", providing the following benefits and capabilities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A set of pregenerated type-safe client libraries for various SAP published OData and REST services for convenient consumption and bullet-proof developer experience."),(0,r.kt)("li",{parentName:"ul"},"Robust connectivity abstractions for SAP Business Technology Platform for convenient management of destinations, authentication, multitenancy, CSRF, e-tags, and more."),(0,r.kt)("li",{parentName:"ul"},"A tailor-made type-safe client code generator for OData services that seamlessly integrate with other SAP Cloud SDK value-adds."),(0,r.kt)("li",{parentName:"ul"},"A type-safe client code generator for REST services that wraps the open-source generator with custom code templates to make it deeply integrated with other SAP Cloud SDK features."),(0,r.kt)("li",{parentName:"ul"},"An easy-to-use CLI with code scaffolding capabilities."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/related-projects/project-piper"},"pre-configured CI/CD pipeline")," to set you on the best DevOps practices from the get-go."),(0,r.kt)("li",{parentName:"ul"},"Modular design and high-level of extensibility"),(0,r.kt)("li",{parentName:"ul"},"Advanced cloud-native development patterns like resilience, caching, inherent multitenancy, etc."),(0,r.kt)("li",{parentName:"ul"},"Support in ",(0,r.kt)("a",{parentName:"li",href:"https://developers.sap.com/tutorials/appstudio-onboarding.html"},"Business Application Studio")),(0,r.kt)("li",{parentName:"ul"},"First-class documentation and ",(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/overview/get-support"},"support"))),(0,r.kt)("h3",{id:"well-integrated-with-the-sap-cloud-development-ecosystem"},"Well-Integrated With the SAP Cloud Development Ecosystem"),(0,r.kt)("p",null,"The SAP Cloud SDK is well-integrated with other SAP products and services like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/related-projects/cloud-application-model"},"Cloud Application Programming model (CAP)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sap.com/products/s4hana-erp.html"},"SAP S/4HANA Cloud and On-premise")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.sap.com/"},"SAP API Business Hub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sap.com/products/human-resources-hcm.html"},"SAP SuccessFactors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sap.com/products/sales-cloud.html"},"SAP Sales Cloud")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.fieldglass.com/"},"SAP Fieldglass")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.concur.com/"},"SAP Concur")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ariba.com/"},"SAP Ariba")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sap.com/products/cloud-platform.html"},"SAP Business Technology Platform")),(0,r.kt)("li",{parentName:"ul"},"Deploy with Confidence")),(0,r.kt)("p",null,"In the next chapter, you'll learn how to generate a type-safe client for any SAP service and start using the benefits of the SAP Cloud SDK."),(0,r.kt)("h3",{id:"your-own-sap-cloud-sdk"},"Your Own SAP Cloud SDK"),(0,r.kt)("p",null,"Thanks to code generator capabilities, the SAP Cloud SDK is compatible with almost any other product that you want to integrate with."),(0,r.kt)("p",null,"It gives a lot of advantages and instant access to the SAP Cloud ecosystem for developers.\nThe SAP Cloud SDK helps you to integrate your apps or build extensions for SAP products."),(0,r.kt)("p",null,"For more details, check out our ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/overview/cloud-sdk-feature-matrix"},"feature matrix")," and ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/overview/getting-started"},"getting started")," guides for the SAP Cloud SDK."),(0,r.kt)("h3",{id:"flavors-of-sap-cloud-sdk"},"Flavors of SAP Cloud SDK"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../java/overview-cloud-sdk-for-java"},"SAP Cloud SDK for Java")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../js/overview-cloud-sdk-for-javascript"},"SAP Cloud SDK for JavaScript"))),(0,r.kt)("h3",{id:"open-source"},"Open Source"),(0,r.kt)("p",null,"The SAP Cloud SDK actively works in the direction of open-sourcing most of its components.\nWe engage in the open source community by endorsing open standards and technologies to simplify the developer's life and stay ahead of the curve.\nThe SAP Cloud SDK for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js"},"JavaScript / TypeScript")," is already open-source.\nFeel free to look at our source code, integrate the SAP Cloud SDK into your apps, or contribute improvements to the SAP Cloud SDK."),(0,r.kt)("p",null,"We actively develop and maintain every component of the SAP Cloud SDK to ensure the highest quality and seamless integration with other SAP solutions."),(0,r.kt)("h3",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"We are happy to hear your feedback about the SAP Cloud SDK.\nYou can write to us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:cloudsdk@sap.com"},"cloudsdk@sap.com")," or submit an issue to this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk/issues/new?assignees=&labels=feedback&template=feedback.md&title="},"repository"),"."))}p.isMDXComponent=!0}}]);