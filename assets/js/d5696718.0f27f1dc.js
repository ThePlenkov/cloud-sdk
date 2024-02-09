"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8693],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?i.createElement(h,l(l({ref:t},d),{},{components:n})):i.createElement(h,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={id:"mail-client",title:"Send e-mails",sidebar_label:"Send e-mails",description:"How to send emails from application deployed on the SAP BTP",keywords:["sap","cloud","sdk","mail","email","e-mail","BTP","on-premise","JavaScript","TypeScript"]},l=void 0,r={unversionedId:"features/mail-client/mail-client",id:"features/mail-client/mail-client",title:"Send e-mails",description:"How to send emails from application deployed on the SAP BTP",source:"@site/docs-js/features/mail-client/mail-client.mdx",sourceDirName:"features/mail-client",slug:"/features/mail-client/",permalink:"/cloud-sdk/docs/js/features/mail-client/",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/mail-client/mail-client.mdx",tags:[],version:"current",frontMatter:{id:"mail-client",title:"Send e-mails",sidebar_label:"Send e-mails",description:"How to send emails from application deployed on the SAP BTP",keywords:["sap","cloud","sdk","mail","email","e-mail","BTP","on-premise","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Execute an OpenAPI Request",permalink:"/cloud-sdk/docs/js/features/openapi/execute-request"},next:{title:"Middleware",permalink:"/cloud-sdk/docs/js/features/middleware"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Examples",id:"examples",level:2},{value:"Send an E-Mail",id:"send-an-e-mail",level:3},{value:"Send Multiple E-Mails",id:"send-multiple-e-mails",level:3},{value:"Send E-Mails Sequentially",id:"send-e-mails-sequentially",level:4},{value:"Configure Nodemailer",id:"configure-nodemailer",level:3},{value:"Proxy",id:"proxy",level:4},{value:"On-Premise Destination",id:"on-premise-destination",level:2},{value:"What&#39;s the Difference",id:"whats-the-difference",level:3},{value:"SOCKS5 Proxy Implementation",id:"socks5-proxy-implementation",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This documentation describes how you can send e-mails from applications deployed on the SAP BTP to your e-mail servers.\nWhen defining e-mail servers by using the destination service on the SAP BTP, both ",(0,a.kt)("inlineCode",{parentName:"p"},"Internet")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"OnPremise")," destinations are supported."),(0,a.kt)("admonition",{title:"Caution",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Only basic auth is supported for the time being, and OAuth based authentication types are not fully tested.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Run this command in your root directory of your project to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"mail-client")," dependency and add it to your dependency list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install @sap-cloud-sdk/mail-client\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"In this section you find minimal examples illustrating how to send e-mails using the SAP Cloud SDK."),(0,a.kt)("h3",{id:"send-an-e-mail"},"Send an E-Mail"),(0,a.kt)("p",null,"First, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"mailConfig")," object that contains all the essential information of an e-mail:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { sendMail, MailConfig } from '@sap-cloud-sdk/mail-client';\n\nconst mailConfig: MailConfig = {\n  from: 'from@example.com',\n  to: 'to@example.com',\n  subject: 'e-mail subject',\n  text: 'e-mail text'\n};\n")),(0,a.kt)("p",null,"Send the e-mail by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"sendMail()")," function with ",(0,a.kt)("inlineCode",{parentName:"p"},"mailConfig")," as argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"sendMail({ destinationName: 'my-mail-destination' }, [mailConfig]);\n")),(0,a.kt)("p",null,"The first parameter is either a ",(0,a.kt)("a",{parentName:"p",href:"pathname:///api/v3/interfaces/sap_cloud_sdk_connectivity.Destination"},"destination")," object or ",(0,a.kt)("a",{parentName:"p",href:"pathname:///api/v3/interfaces/sap_cloud_sdk_connectivity.DestinationFetchOptions"},"DestinationFetchOptions"),".\nFor productive environment, you should use the destination service on the SAP BTP and reference the destination by name, just like in the example above.\n",(0,a.kt)("inlineCode",{parentName:"p"},"{ destinationName: 'my-mail-destination' }")," is the minimal object that is typed as ",(0,a.kt)("inlineCode",{parentName:"p"},"DestinationFetchOptions"),".\nFor test environment, instead of using the ",(0,a.kt)("inlineCode",{parentName:"p"},"DestinationFetchOptions"),", you can also pass a complete ",(0,a.kt)("inlineCode",{parentName:"p"},"destination")," object."),(0,a.kt)("admonition",{title:"Caution",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"As the destination object might contain credentials, using it in production should be avoided.")),(0,a.kt)("p",null,"You can read more about the abstraction of the ",(0,a.kt)("inlineCode",{parentName:"p"},"destination")," in the documentation ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/destinations"},"here"),"."),(0,a.kt)("h3",{id:"send-multiple-e-mails"},"Send Multiple E-Mails"),(0,a.kt)("p",null,"The code snippets below show how to send two e-mails with the ",(0,a.kt)("inlineCode",{parentName:"p"},"mailConfig")," created in the previous example.\nThe e-mails are sent in parallel by default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"sendMail({ destinationName: 'my-mail-destination' }, [mailConfig, mailConfig]);\n")),(0,a.kt)("h4",{id:"send-e-mails-sequentially"},"Send E-Mails Sequentially"),(0,a.kt)("p",null,"Sometimes you prefer sending e-mails sequentially instead of parallelly due to, e.g., the rate limit of your e-mail server.\nTo send e-mails in a sequence, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"parallel")," option to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"sendMail({ destinationName: 'my-mail-destination' }, [mailConfig, mailConfig], {\n  sdkOptions: {\n    parallel: false\n  }\n});\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"As parallelization is the default behaviour, you don't have to set ",(0,a.kt)("inlineCode",{parentName:"p"},"parallel: true")," explicitly.")),(0,a.kt)("h3",{id:"configure-nodemailer"},"Configure Nodemailer"),(0,a.kt)("p",null,"The SAP Cloud SDK uses the node package Nodemailer under the hood.\nNodemailer supports creating a transport based on options listed in their ",(0,a.kt)("a",{parentName:"p",href:"https://nodemailer.com/smtp/"},"documentation"),".\nThe SAP Cloud SDK exposes these options (as ",(0,a.kt)("inlineCode",{parentName:"p"},"SmtpTransportOptions"),") and will transfer them based on user input.\nFor example, you can provide the TLS option like below to circumvent issues with self-signed certificates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"sendMail({ destinationName: 'my-mail-destination' }, [mailConfig], {\n  tls: {\n    rejectUnauthorized: false\n  }\n});\n")),(0,a.kt)("p",null,"The SAP Cloud SDK API documentation of the complete ",(0,a.kt)("inlineCode",{parentName:"p"},"SmtpTransportOptions")," can be found in the API doc ",(0,a.kt)("a",{parentName:"p",href:"pathname:///api/v3/interfaces/sap_cloud_sdk_mail_client.SmtpTransportOptions"},"here"),"."),(0,a.kt)("admonition",{title:"DEBUGGING OPTIONS",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"logger")," options to true to log all the data that is passed to the server in the console.\nThe debug option logs SMTP traffic when true, otherwise only transaction events are logged.\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"logger")," is not set or set to false, nothing gets logged.")),(0,a.kt)("h4",{id:"proxy"},"Proxy"),(0,a.kt)("p",null,"Nodemailer also supports defining proxy option as mentioned ",(0,a.kt)("a",{parentName:"p",href:"https://nodemailer.com/smtp/proxies/"},"here"),".\nSimilar to other Nodemailer options, the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," key is also part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"SmtpTransportOptions"),".\nYou can find a minimal example below for defining an HTTP proxy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"sendMail({ destinationName: 'my-mail-destination' }, [mailConfig], {\n  proxy: 'http://my-proxy-host:1234'\n});\n")),(0,a.kt)("p",null,"Using socks proxy is not supported for the time being.\nFor on-premise connectivity via the connectivity service on the SAP BTP, please check the next section."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The SAP Cloud SDK will pass the proxy option directly to the Nodemailer, but the proxy feature is not end-to-end tested.")),(0,a.kt)("h2",{id:"on-premise-destination"},"On-Premise Destination"),(0,a.kt)("p",null,"The SAP Cloud SDK supports using on-premise destinations as well.\nFrom the SAP Cloud SDK API perspective, the code looks similar, no matter whether you use ",(0,a.kt)("inlineCode",{parentName:"p"},"OnPremise")," destinations or ",(0,a.kt)("inlineCode",{parentName:"p"},"Internet")," destinations.\nThe only difference is that you have to reference the name of the on-premise destination, which is obvious."),(0,a.kt)("h3",{id:"whats-the-difference"},"What's the Difference"),(0,a.kt)("p",null,"First, for applications deployed on the SAP BTP, you need a connectivity service for connecting to an on-premise destination.\nSecond, a cloud connector is used as a proxy for accessing the on-premise system.\nPlease make sure the mail destination is configured correctly as discussed in the ",(0,a.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/8d1f989deca1455dabc3d81b433fbdaf.html"},"documentation"),"."),(0,a.kt)("h3",{id:"socks5-proxy-implementation"},"SOCKS5 Proxy Implementation"),(0,a.kt)("p",null,"Using a SOCKS5 proxy for accessing on-premise systems from applications on SAP BTP requires the SOCKS5 authentication flow as explained ",(0,a.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/CP_CONNECTIVITY/cca91383641e40ffbe03bdc78f00f681/cd1583775afa43f0bb9ec69d9dbcc880.html?locale=en-US"},"here"),".\nThe SAP Cloud SDK handles the SOCKS5 proxy implementation automatically when detecting an on-premise mail destination."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For some on-premise e-mail servers, including the test server, the parallelization of sending e-mail might be a challenge.\nYou can disable the parallelization by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"parallel: false")," as mentioned above.")))}m.isMDXComponent=!0}}]);