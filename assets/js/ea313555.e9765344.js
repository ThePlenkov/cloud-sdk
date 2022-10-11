"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7937],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return a?o.createElement(h,s(s({ref:t},u),{},{components:a})):o.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<r;d++)s[d]=a[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},50510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=a(87462),n=(a(67294),a(3905));const r={id:"frequently-asked-questions-about-sap-cloud-sdk",title:"Frequently Asked Questions",sidebar_label:"FAQ",description:"You asked, we answered!",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},s=void 0,i={unversionedId:"frequently-asked-questions-about-sap-cloud-sdk",id:"frequently-asked-questions-about-sap-cloud-sdk",title:"Frequently Asked Questions",description:"You asked, we answered!",source:"@site/docs/faq.mdx",sourceDirName:".",slug:"/frequently-asked-questions-about-sap-cloud-sdk",permalink:"/cloud-sdk/docs/overview/frequently-asked-questions-about-sap-cloud-sdk",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/faq.mdx",tags:[],version:"current",frontMatter:{id:"frequently-asked-questions-about-sap-cloud-sdk",title:"Frequently Asked Questions",sidebar_label:"FAQ",description:"You asked, we answered!",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsCommonSidebar",previous:{title:"Who Uses the SAP Cloud SDK?",permalink:"/cloud-sdk/docs/overview/who-uses-sap-cloud-sdk"},next:{title:"Get Support",permalink:"/cloud-sdk/docs/overview/get-support"}},l={},d=[{value:"What Programming Languages Can I Use?",id:"what-programming-languages-can-i-use",level:2},{value:"How Was the SAP Cloud SDK Started?",id:"how-was-the-sap-cloud-sdk-started",level:2},{value:"SAP Cloud SDK &amp; SAP Cloud Application Programming Model? What is the difference?",id:"sap-cloud-sdk--sap-cloud-application-programming-model-what-is-the-difference",level:2},{value:"Can I Run an SAP Cloud SDK App Locally",id:"can-i-run-an-sap-cloud-sdk-app-locally",level:2},{value:"Is It Expensive?",id:"is-it-expensive",level:2},{value:"How Often Do You Release a New Version?",id:"how-often-do-you-release-a-new-version",level:2},{value:"Getting Help?",id:"getting-help",level:2}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This FAQ section is for generic SAP Cloud SDK questions.\nFeel free to check out the ",(0,n.kt)("a",{parentName:"p",href:"/docs/java/frequently-asked-questions"},"Java"),"] specific FAQ.")),(0,n.kt)("h2",{id:"what-programming-languages-can-i-use"},"What Programming Languages Can I Use?"),(0,n.kt)("p",null,"You can code in ",(0,n.kt)("a",{parentName:"p",href:"/docs/java/getting-started"},"Java")," or ",(0,n.kt)("a",{parentName:"p",href:"/docs/js/getting-started"},"JavaScript"),"."),(0,n.kt)("h2",{id:"how-was-the-sap-cloud-sdk-started"},"How Was the SAP Cloud SDK Started?"),(0,n.kt)("p",null,"We've been and still are developing cloud-native applications in the SAP ecosystem.\nAfter some time, we've noticed that many useful patterns repeat themselves, and we abstracted them for reuse.\nOur colleagues showed interest in our work because of solving similar problems with their applications.\nThat's when we decided to wrap that value into a library and make it available for SAP developers and later to SAP customers for benefiting from our experience of building from scratch and extending SAP applications."),(0,n.kt)("h2",{id:"sap-cloud-sdk--sap-cloud-application-programming-model-what-is-the-difference"},"SAP Cloud SDK & ",(0,n.kt)("a",{parentName:"h2",href:"/cloud-sdk/docs/overview/related-projects/cloud-application-model"},"SAP Cloud Application Programming Model"),"? What is the difference?"),(0,n.kt)("p",null,"Cloud Application Programming Model (CAP) and SAP Cloud SDK are complementary tools to publish and consume APIs like OData and REST.\nThey play nicely together to cover the full stack of cloud-native application development.\nThe SAP CAP plays more on the API and service publishing side, while SAP Cloud SDK deals more with API consumption and deployment of applications to SAP Business Technology Platform."),(0,n.kt)("p",null,"You can use the SAP Cloud SDK and CAP together in one project.\nFind more details about CAP ",(0,n.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/overview/related-projects/cloud-application-model"},"here")," and check out our ",(0,n.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-integrate-cap.html"},"tutorial about using SAP Cloud SDK for Java and CAP together"),"."),(0,n.kt)("h2",{id:"can-i-run-an-sap-cloud-sdk-app-locally"},"Can I Run an SAP Cloud SDK App Locally"),(0,n.kt)("p",null,"Yes, you can.\nCheck respective documentation for ",(0,n.kt)("a",{parentName:"p",href:"/docs/java/getting-started"},"Java")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/js/getting-started#run-the-project"},"JavaScript"),".\nIf you experience any issues, let us know via our support channels."),(0,n.kt)("h2",{id:"is-it-expensive"},"Is It Expensive?"),(0,n.kt)("p",null,"The SAP Cloud SDK is free for everyone.\nParts of it are available as ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js"},"open source software"),".\nOther parts containing SAP Intellectual Property are distributed free of charge under the ",(0,n.kt)("a",{parentName:"p",href:"https://tools.hana.ondemand.com/developer-license-3.0.0.txt"},"SAP Developer License"),"."),(0,n.kt)("h2",{id:"how-often-do-you-release-a-new-version"},"How Often Do You Release a New Version?"),(0,n.kt)("p",null,"We release bi-weekly on average.\nYou can find release notes for Java and JavaScript in their respective documentation sections.\nSome packages or modules like pregenerated type-safe client libraries are released according to the release-cycle of the underlying service.\nThey can be updated if we made a change to the code generator between the releases."),(0,n.kt)("h2",{id:"getting-help"},"Getting Help?"),(0,n.kt)("p",null,"Checkout our ",(0,n.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/overview/get-support"},"support channels info"),".\nSupport is handled by SAP Cloud SDK developers.\nTo help us save time and help you quicker, we ask you to be mindful and provide as much relevant information about your issue or question as reasonably possible."))}c.isMDXComponent=!0}}]);