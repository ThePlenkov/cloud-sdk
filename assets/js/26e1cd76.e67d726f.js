"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3424],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)t=u[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)t=u[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),i=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=i(e.components);return o.createElement(a.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,u=e.originalType,a=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=i(t),m=r,v=p["".concat(a,".").concat(m)]||p[m]||c[m]||u;return t?o.createElement(v,l(l({ref:n},s),{},{components:t})):o.createElement(v,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var u=t.length,l=new Array(u);l[0]=p;var d={};for(var a in n)hasOwnProperty.call(n,a)&&(d[a]=n[a]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var i=2;i<u;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},75536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>u,metadata:()=>d,toc:()=>i});var o=t(87462),r=(t(67294),t(3905));const u={title:"SAP BTP Cloud Foundry Environment",sidebar_label:"Cloud Foundry",id:"cloud-foundry",description:"SAP BTP Cloud Foundry environment is fully supported by the SAP Cloud SDK for Java",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},l=void 0,d={unversionedId:"environments/cloud-foundry",id:"version-v4/environments/cloud-foundry",title:"SAP BTP Cloud Foundry Environment",description:"SAP BTP Cloud Foundry environment is fully supported by the SAP Cloud SDK for Java",source:"@site/docs-java_versioned_docs/version-v4/environments/cloudfoundry.mdx",sourceDirName:"environments",slug:"/environments/cloud-foundry",permalink:"/cloud-sdk/docs/java/v4/environments/cloud-foundry",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v4/environments/cloudfoundry.mdx",tags:[],version:"v4",frontMatter:{title:"SAP BTP Cloud Foundry Environment",sidebar_label:"Cloud Foundry",id:"cloud-foundry",description:"SAP BTP Cloud Foundry environment is fully supported by the SAP Cloud SDK for Java",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJavaSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/java/v4/environments/overview"},next:{title:"Kubernetes with SAP Gardener",permalink:"/cloud-sdk/docs/java/v4/environments/kubernetes-gardener"}},a={},i=[{value:"SAP Cloud SDK Features Supported on SAP BTP Cloud Foundry",id:"sap-cloud-sdk-features-supported-on-sap-btp-cloud-foundry",level:2}],s={toc:i};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html"},"The Cloud Foundry environment")," allows you to create polyglot cloud applications in Cloud Foundry.\nIt contains the SAP BTP, Cloud Foundry runtime service, which is based on the open-source application platform managed by the Cloud Foundry Foundation."),(0,r.kt)("p",null,"The SAP Cloud SDK for Java supports SAP BTP Cloud Foundry Environment out of the box."),(0,r.kt)("h2",{id:"sap-cloud-sdk-features-supported-on-sap-btp-cloud-foundry"},"SAP Cloud SDK Features Supported on SAP BTP Cloud Foundry"),(0,r.kt)("p",null,"Find below the list of features we currently support:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 Consume SAP BTP services like Destination, Connectivity, IAS, XSUAA, and others"),(0,r.kt)("li",{parentName:"ul"},"\u2705 Multitenancy"),(0,r.kt)("li",{parentName:"ul"},"\u2705 Resilience & Caching"),(0,r.kt)("li",{parentName:"ul"},"\u2705 Connect to and consume services from SAP S/4HANA Cloud"),(0,r.kt)("li",{parentName:"ul"},"\u2705 Connect to and consume services from SAP S/4HANA On-Premise"),(0,r.kt)("li",{parentName:"ul"},"\u2705 Seamless use of typed clients provided by the SAP Cloud SDK")),(0,r.kt)("p",null,"In most situations the SAP Cloud SDK for Java will implicitly manage complexities of this runtime for you."))}c.isMDXComponent=!0}}]);