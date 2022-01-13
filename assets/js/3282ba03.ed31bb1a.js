"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4418],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,d(d({ref:t},l),{},{components:n})):a.createElement(h,d({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,d=new Array(i);d[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,d[1]=r;for(var c=2;c<i;c++)d[c]=n[c];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},497:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),d=["components"],r={id:"cap-sdk-integration",title:"Integration With Cloud Application Programming Model",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Integration With CAP",description:"Integrate the SAP Cloud SDK into your CAP application",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","cap"]},s=void 0,c={unversionedId:"java/guides/cap-sdk-integration",id:"java/guides/cap-sdk-integration",title:"Integration With Cloud Application Programming Model",description:"Integrate the SAP Cloud SDK into your CAP application",source:"@site/docs/java/guides/cap-sdk-integration.mdx",sourceDirName:"java/guides",slug:"/java/guides/cap-sdk-integration",permalink:"/cloud-sdk/docs/java/guides/cap-sdk-integration",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/guides/cap-sdk-integration.mdx",tags:[],version:"current",lastUpdatedBy:"Johannes Schneider",lastUpdatedAt:1642080675,formattedLastUpdatedAt:"1/13/2022",frontMatter:{id:"cap-sdk-integration",title:"Integration With Cloud Application Programming Model",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Integration With CAP",description:"Integrate the SAP Cloud SDK into your CAP application",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","cap"]},sidebar:"someSidebar",previous:{title:"SAP Cloud SDK on Linux",permalink:"/cloud-sdk/docs/java/guides/sap-cloud-sdk-linux-how-to"},next:{title:"Use WAR Deployment with Spring Boot",permalink:"/cloud-sdk/docs/java/guides/spring-boot-war-deployment"}},l=[{value:"Integration Steps",id:"integration-steps",children:[{value:"Add the SAP Cloud SDK Bill-of-Material",id:"add-the-sap-cloud-sdk-bill-of-material",children:[],level:3},{value:"Add the SAP Cloud SDK Dependencies",id:"add-the-sap-cloud-sdk-dependencies",children:[],level:3},{value:"Add the Integration Dependency",id:"add-the-integration-dependency",children:[],level:3},{value:"Enable the Component Scan for SAP Cloud SDK Package",id:"enable-the-component-scan-for-sap-cloud-sdk-package",children:[],level:3},{value:"Wrap Asynchronous Calls",id:"wrap-asynchronous-calls",children:[],level:3}],level:2}],p={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document outlines how you integrate the SAP Cloud SDK into an application based on the ",(0,i.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/"},"SAP Cloud Application Programming Model")," (referred to as CAP in the remainder)."),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Check out the tutorial as well")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"While this document provides a general overview of this topic, we have published a practical ",(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-integrate-cap.html"},"tutorial on SAP Developers")," which illustrates all steps on a comprehensive example."))),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Guide on the traditional Spring deployment")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We provide a ",(0,i.kt)("a",{parentName:"p",href:"spring-boot-war-deployment"},"guide")," on how to leverage the traditional Spring deployment in conjunction with CAP.\nThat guide is applicable for your project if you need to invoke BAPIs via the SAP Java Connector library."))),(0,i.kt)("h2",{id:"integration-steps"},"Integration Steps"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Assumption")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The following instructions assume that you have an existing CAP project that can be built successfully.\nFurthermore, we assume that you deploy your app to the SAP BTP, Cloud Foundry environment."))),(0,i.kt)("h3",{id:"add-the-sap-cloud-sdk-bill-of-material"},"Add the SAP Cloud SDK Bill-of-Material"),(0,i.kt)("p",null,"Add the SAP Cloud SDK Bill-of-Material (BOM) into the ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencyManagement")," section of the root POM.\nHere is the XML snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n")),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Use the latest SAP Cloud SDK version")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We recommend using the ",(0,i.kt)("strong",{parentName:"p"},"latest")," SAP Cloud SDK version always.\nCheck out the ",(0,i.kt)("a",{parentName:"p",href:"../release-notes-sap-cloud-sdk-for-java"},"release notes")," to see the release history."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"SAP Cloud SDK Modules Bill-of-Material")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"By default, the SAP Cloud SDK archetypes reference the SAP Cloud SDK Bill-of-Material ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk-bom"),", which manages dependency versions for all SAP Cloud SDK modules and transitive dependencies.\nIf you face dependency conflicts, you can instead try using the SAP Cloud SDK Modules Bill-of-Material ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk-modules-bom")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencyManagement")," section of your Maven POM file."))),(0,i.kt)("h3",{id:"add-the-sap-cloud-sdk-dependencies"},"Add the SAP Cloud SDK Dependencies"),(0,i.kt)("p",null,"Add the respective SAP Cloud SDK dependencies to the POM file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"srv")," directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.cloudplatform</groupId>\n    <artifactId>scp-cf</artifactId>\n</dependency>\n\n<dependency>\n    <groupId>com.sap.cloud.sdk.s4hana</groupId>\n    <artifactId>s4hana-all</artifactId>\n    <exclusions>\n        <exclusion>\n            <groupId>com.sap.cloud.servicesdk</groupId>\n            <artifactId>odata-v2-lib</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please use the same exclusion also on any other OData V2 related dependencies from the SAP Cloud SDK you may be using."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Version information controlled through the SAP Cloud SDK BOM")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," tags can be omitted, because the previously added the SAP Cloud SDK BOM controls the version of all the SAP Cloud SDK modules.\nThat is, you only need to increase the version of the BOM and all modules get updated automatically."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The two mentioned dependencies are modules that cover a broad range of possible the SAP Cloud SDK use cases.\nYou may choose a more fine-grained selection of the SAP Cloud SDK dependencies according to your specific use case."))),(0,i.kt)("h3",{id:"add-the-integration-dependency"},"Add the Integration Dependency"),(0,i.kt)("p",null,"If your app uses multitenancy features and/or a protected backend, we have to integrate the tenant and user concepts of CAP and the SAP Cloud SDK.\nWe'll add a respective integration dependency to the POM file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"srv")," directory (same place as the previous step)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.sap.cds</groupId>\n  <artifactId>cds-integration-cloud-sdk</artifactId>\n</dependency>\n")),(0,i.kt)("h3",{id:"enable-the-component-scan-for-sap-cloud-sdk-package"},"Enable the Component Scan for SAP Cloud SDK Package"),(0,i.kt)("p",null,"Let the Spring component scan crawl the SAP Cloud SDK package.\nWe'll annotate the Spring Boot application class which is annotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@SpringBootApplication")," as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@ComponentScan({"com.sap.cloud.sdk", "com.mycompany.myapplication"})\n@ServletComponentScan({"com.sap.cloud.sdk", "com.mycompany.myapplication"})\n')),(0,i.kt)("p",null,"Make sure that you also add the package name of your application."),(0,i.kt)("h3",{id:"wrap-asynchronous-calls"},"Wrap Asynchronous Calls"),(0,i.kt)("p",null,"If your app uses asynchronous calls which spawn new threads or reuse pooled threads, the call must be decorated with the respective wrapper classes.\nThis decoration is required to forward thread-specific information from the calling thread to the asynchronously running thread."),(0,i.kt)("p",null,"You need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadContextExecutor")," from the SAP Cloud SDK (refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context/#what-is-a-thread-context"},"ThreadContext documentation"),") in conjunction with the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestContextRunner")," from ",(0,i.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/java/provisioning-api#threading-requestcontext"},"CAP"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"final EventContext context;\nfinal ThreadContextExecutor threadContextExecutor = new ThreadContextExecutor();\nfinal RequestContextRunner cdsContextRunner = context.getCdsRuntime().requestContext();\n\nfinal Callable<Object> task = () -> cdsContextRunner.run(context ->\n                                        threadContextExecutor.execute(() -> ... ));\n")),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Integration finished")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Now the SAP Cloud SDK is integrated with the CAP application.\nYou can go ahead using the SAP Cloud SDK features, such as querying OData services."))))}u.isMDXComponent=!0}}]);