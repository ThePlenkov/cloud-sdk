"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8763],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?o.createElement(h,n(n({ref:t},p),{},{components:a})):o.createElement(h,n({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,n[1]=l;for(var u=2;u<i;u++)n[u]=a[u];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},21309:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var o=a(87462),r=a(63366),i=(a(67294),a(3905)),n=["components"],l={id:"tutorial-overview-sdk-java",title:"Overview of the Available Tutorials",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Tutorials Overview",description:"This document will give you an overview of the different tutorials for the SAP Cloud SDK for Java."},s=void 0,u={unversionedId:"java/guides/tutorial-overview-sdk-java",id:"java/guides/tutorial-overview-sdk-java",title:"Overview of the Available Tutorials",description:"This document will give you an overview of the different tutorials for the SAP Cloud SDK for Java.",source:"@site/docs/java/guides/tutorial-overview-sdk-java.mdx",sourceDirName:"java/guides",slug:"/java/guides/tutorial-overview-sdk-java",permalink:"/cloud-sdk/docs/java/guides/tutorial-overview-sdk-java",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/guides/tutorial-overview-sdk-java.mdx",tags:[],version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1646056406,formattedLastUpdatedAt:"2/28/2022",frontMatter:{id:"tutorial-overview-sdk-java",title:"Overview of the Available Tutorials",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Tutorials Overview",description:"This document will give you an overview of the different tutorials for the SAP Cloud SDK for Java."},sidebar:"someSidebar",previous:{title:"Logging",permalink:"/cloud-sdk/docs/java/guides/logging-overview"},next:{title:"SAP Cloud SDK on Linux",permalink:"/cloud-sdk/docs/java/guides/sap-cloud-sdk-linux-how-to"}},p=[{value:"Tutorial Overview",id:"tutorial-overview",children:[{value:"Missions",id:"missions",children:[],level:3},{value:"Groups",id:"groups",children:[],level:3},{value:"Tutorials Quick Links",id:"tutorials-quick-links",children:[],level:3}],level:2}],d={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,n);return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To give you a quick and easy start to developing with the SAP Cloud SDK for Java we created a set of comprehensive tutorials split into missions and groups for a convenient learning path.\nThey'll help you kick-start your project and get you up to speed with the most frequent use-cases and valuable features of the SAP Cloud SDK."),(0,i.kt)("h2",{id:"tutorial-overview"},"Tutorial Overview"),(0,i.kt)("p",null,"Tutorials can also be bundled into groups and missions.\nA group is a series of individual tutorials.\nA mission consists of groups and/or individual tutorials.\nIn this way, you can carry out a more extensive and meaningful learning experience.\nWe recommend ",(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/bin/fiji/es/login.sapdxdevs.html"},"creating an account")," to keep track of your progress."),(0,i.kt)("h3",{id:"missions"},"Missions"),(0,i.kt)("p",null,"Missions are the first point of contact if you want to familiarize yourself with the SAP Cloud SDK for Java and want to achieve certain goals."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.sap.com/mission.cloudsdk-cf-app.html"},"Create a Cloud Foundry App Using SAP Cloud SDK"),"\nCreate a Cloud Foundry app using SAP Cloud SDK, then add security and other advanced features like resilience and caching.")),(0,i.kt)("h3",{id:"groups"},"Groups"),(0,i.kt)("p",null,"Groups are a collection of topic-based tutorials."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/group.s4sdk-cloud-foundry.html"},"Create a Simple App in Cloud Foundry Using SAP Cloud SDK")),(0,i.kt)("p",{parentName:"li"},"Using the SAP Cloud SDK, create a simple app for SAP BTP, Cloud Foundry environment that calls an SAP S/4HANA OData service.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/group.cloudsdk-more-features.html"},"Add Security and More to Your SAP Cloud SDK App"),"\nIntroduce resilience and caching to your application using the SAP Cloud SDK and protect your Java-based Hello World microservice with authenticated and authorized users."))),(0,i.kt)("h3",{id:"tutorials-quick-links"},"Tutorials Quick Links"),(0,i.kt)("p",null,"Use the links below to directly access your favorite tutorial and refresh your knowledge."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/s4sdk-setup.html"},"Set Up Your Local Infrastructure to Develop with SAP Cloud SDK")),(0,i.kt)("p",{parentName:"li"},"Set up your system to create an SAP Business Technology Platform application with the SAP Cloud SDK.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/s4sdk-cloud-foundry-sample-application.html"},"Create a Sample Application on Cloud Foundry Using SAP Cloud SDK")),(0,i.kt)("p",{parentName:"li"},"Create the very first Hello World example on Cloud Foundry using the SAP Cloud SDK.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/s4sdk-odata-service-cloud-foundry.html"},"Connect to OData Service on Cloud Foundry Using SAP Cloud SDK")),(0,i.kt)("p",{parentName:"li"},"Protect your Java-based Hello World microservice with authenticated and authorized users.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/s4sdk-resilience.html"},"Introduce Resilience to your Application")),(0,i.kt)("p",{parentName:"li"},"Introduce resilience to your application using the SAP Cloud SDK.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/s4sdk-caching.html"},"Introduce Caching to Your Application")),(0,i.kt)("p",{parentName:"li"},"Introduce caching to your application using the SAP Cloud SDK.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/s4sdk-secure-cloudfoundry.html"},"Secure Your Application on SAP Business Technology Platform Cloud Foundry")),(0,i.kt)("p",{parentName:"li"},"Protect your Java-based Hello World microservice with authenticated and authorized users.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-mocking-capabilities.html"},"Develop an SAP S/4HANA Extension Without an SAP S/4HANA System")),(0,i.kt)("p",{parentName:"li"},"Learn about the mocking capabilities of the SAP Cloud SDK and how to test and develop your SAP S/4HANA extension without an SAP S/4HANA system.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-virtual-data-model-odata.html"},"Create and Deep Insert with the Virtual Data Model for OData")),(0,i.kt)("p",{parentName:"li"},"Create and deep insert functionality for OData as supported by the SAP Cloud SDK.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/blockchain-sdk-sample.html"},"Create Cloud Foundry App with Blockchain Features of SAP Cloud SDK")),(0,i.kt)("p",{parentName:"li"},"Learn how to create your first sample application on Cloud Foundry using the blockchain features of the SAP Cloud SDK.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-extensibility-type-safe-expand.html"},"Extensibility, Type-Safe Expand, and Dependency Injection with the Virtual Data Model for OData")),(0,i.kt)("p",{parentName:"li"},"Use the latest features of the SAP Cloud SDK regarding extensibility, eager, and type-safe expand, as well as dependency injection with the Virtual Data Model for OData for any SAP S/4HANA system.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/s4sdk-migration-v3.html"},"Migrate an Existing Application to Version 3.0 of the SAP Cloud SDK"),"\nMigrate an existing project to version 3.0 of the SAP Cloud SDK."))))}c.isMDXComponent=!0}}]);