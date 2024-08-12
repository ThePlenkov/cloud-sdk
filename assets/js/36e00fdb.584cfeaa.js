"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1243],{54800:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=t(74848),r=t(28453);const s={id:"resilience",title:"How to Make Applications more Resilient?",sidebar_label:"How to Add Resilience",description:"This article describes how you can add a layer of resilience to applications",keywords:["sap","cloud","sdk","http","resilience","JavaScript","TypeScript"]},o="Introduction",l={id:"guides/resilience",title:"How to Make Applications more Resilient?",description:"This article describes how you can add a layer of resilience to applications",source:"@site/docs-js/guides/how-to-add-resilience.mdx",sourceDirName:"guides",slug:"/guides/resilience",permalink:"/cloud-sdk/docs/js/guides/resilience",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/guides/how-to-add-resilience.mdx",tags:[],version:"current",frontMatter:{id:"resilience",title:"How to Make Applications more Resilient?",sidebar_label:"How to Add Resilience",description:"This article describes how you can add a layer of resilience to applications",keywords:["sap","cloud","sdk","http","resilience","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Using the SAP Application Router",permalink:"/cloud-sdk/docs/js/guides/approuter"},next:{title:"How to retrieve JWTs",permalink:"/cloud-sdk/docs/js/guides/retrieve-jwt"}},a={},d=[{value:"Resilience Middleware",id:"resilience-middleware",level:2},{value:"Timeout",id:"timeout",level:3},{value:"Circuit Breaker",id:"circuit-breaker",level:3},{value:"Retries",id:"retries",level:3},{value:"Remarks on Custom Implementations",id:"remarks-on-custom-implementations",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,n.jsxs)(i.p,{children:["In this article, you will learn about the different resilience patterns and how to add them to your application using the SAP Cloud SDK.\nVersion 3.0 of the SAP Cloud SDK introduced the concept of generic ",(0,n.jsx)(i.a,{href:"../features/middleware",children:"middlewares"}),", which are not resilience specific.\nThe SAP Cloud SDK provides default implementations for the standard resilience patterns like timeout, retry, and circuit breaker.\nThese implementations should work in most cases, but you can easily create your own."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.a,{href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/resilience-examples",children:"samples repository"})," provides examples that illustrate the usage of middlewares for resilience.\nNote that ",(0,n.jsx)(i.a,{href:"../features/middleware",children:"middlewares"}),", and therefore resilience, applies to requests against the target system, and by default, nothing is added.\nThe SAP Cloud SDK automatically applies resilience to the internal SAP BTP service calls done under the hood.\nThis is done automatically, and you do not have to worry about resilience with respect to internal service calls."]}),"\n",(0,n.jsx)(i.p,{children:"Here is a video that explains middlewares and resilience hands-on:"}),"\n",(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Y-QyncTnJ6s",title:"Embrace Failure - Build resilient applications with the SAP Cloud SDK for JavaScript",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,n.jsx)(i.h2,{id:"resilience-middleware",children:"Resilience Middleware"}),"\n",(0,n.jsxs)(i.p,{children:["The SAP Cloud SDK offers a ",(0,n.jsx)(i.code,{children:"resilience()"})," function to build a resilience middleware.\nIf you do not specify any options the method will return a timeout and circuit breaker:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-ts",children:"import { resilience } from '@sap-cloud-sdk/resilience';\n\nconst [circuitBreaker, timeout] = resilience();\n"})}),"\n",(0,n.jsx)(i.p,{children:"You can pass very basic options to adjust the creation of these middlewares:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-ts",children:"type ResilienceOptions = {\n  timeout?: boolean | number; // default is true with 10 seconds timeout. A number indicates the timeout in milliseconds.\n  circuitBreaker?: boolean; // default is true.\n  retry?: boolean | number; // default is false. A number indicates the number of retries.\n};\n\nconst [retry, circuitBreaker, timeout] = resilience({ retry: true });\nconst [retry5times, timeout5Seconds] = resilience({\n  timeout: 5000,\n  curcuitBreaker: false,\n  retry: 5\n});\n"})}),"\n",(0,n.jsxs)(i.p,{children:["You can find details on each option in the dedicated sections below.\nYou apply the resilience by adding it to your request as discussed in the ",(0,n.jsx)(i.a,{href:"../features/middleware",children:"middleware documentation"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-ts",children:"import { executeHttpRequest } from '@sap-cloud-sdk/http-client';\nimport { myService } from './generated-client';\n\nexecuteHttpRequest(myDestination, { middleware: resilience() });\n\nconst { myApi } = myService();\nmyApi.getAll().middleware(resilience()).execute(myDestination);\n"})}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["Using the ",(0,n.jsx)(i.code,{children:"resilience()"})," function is the recommended way to build resilience-related middleware, it ensures the correct order of middlewares."]})}),"\n",(0,n.jsx)(i.h3,{id:"timeout",children:"Timeout"}),"\n",(0,n.jsxs)(i.p,{children:["The timeout middleware is based on the ",(0,n.jsx)(i.code,{children:"Promise.race()"})," method and does not use an additional library.\nYou can create a timeout middleware with the ",(0,n.jsx)(i.code,{children:"timeout()"})," function.\nThe default timeout is 10 seconds, but can be changed on demand."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-ts",children:"import { timeout } from '@sap-cloud-sdk/resilience';\n\n// Three seconds timeout\nmyApi.getAll().middleware(timeout(3000)).execute(myDestination);\n"})}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:"The timeout should be the first entry in your list of middlewares."})}),"\n",(0,n.jsx)(i.h3,{id:"circuit-breaker",children:"Circuit Breaker"}),"\n",(0,n.jsxs)(i.p,{children:["The implementation uses the ",(0,n.jsx)(i.a,{href:"https://nodeshift.dev/opossum/",children:"opossum"})," circuit breaker.\nYou can create a circuit breaker middleware in the following way:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-ts",children:"import { circuitBreaker } from '@sap-cloud-sdk/resilience';\n\nmyApi.getAll().middleware(circuitBreaker()).execute(myDestination);\n"})}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:"The circuit breaker middleware should be after the timeout in the list of middlewares."})}),"\n",(0,n.jsxs)(i.p,{children:["The circuit breaker uses meaningful default values suggested by ",(0,n.jsx)(i.code,{children:"opossum"}),":"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Rolling count timeout: 10 seconds"}),"\n",(0,n.jsx)(i.li,{children:"Volume threshold: 10"}),"\n",(0,n.jsx)(i.li,{children:"Error threshold percentage: 50%"}),"\n",(0,n.jsx)(i.li,{children:"Reset timeout: 30 seconds"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"These numbers mean the following:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The circuit breaker records all requests for a duration of 10 seconds."}),"\n",(0,n.jsx)(i.li,{children:"If in this time window, 10 or more requests are recorded, the error threshold is calculated."}),"\n",(0,n.jsx)(i.li,{children:"If 50% or more of the requests in this time window fail, the circuit breaker opens.\nFrom this point in time, all requests to the target system are blocked directly and not executed anymore."}),"\n",(0,n.jsxs)(i.li,{children:["After a reset time of 30 seconds, the circuit breaker will go to the half-open state.\nThis means the next request will go through as a test.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"If it is successful, the circuit breaker will close again."}),"\n",(0,n.jsx)(i.li,{children:"If it fails, the circuit breaker will remain open."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["Requests with ",(0,n.jsx)(i.code,{children:"HTTP"})," status ",(0,n.jsx)(i.code,{children:"4XX"})," do not count as failed, because they do not indicate an unhealthy system."]})}),"\n",(0,n.jsx)(i.p,{children:"A circuit breaker needs to record all requests across users for a certain time window.\nThis state is stored in central circuit breaker instances.\nEach target system and tenant is represented by a separate circuit breaker instance."}),"\n",(0,n.jsx)(i.h3,{id:"retries",children:"Retries"}),"\n",(0,n.jsx)(i.p,{children:"The retry middleware should be used with caution, because it is often mitigating a problem that should be solved properly.\nAlso, if something fails consistently, it does not help to press the same button multiple times.\nYou should consider some rules for adding retries:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The error should be the exception, not the default."}),"\n",(0,n.jsx)(i.li,{children:"The error should happen randomly so a second call has a high likelihood of returning something."}),"\n",(0,n.jsx)(i.li,{children:"The source of the error is out of your domain to fix."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["You can create a retry middleware using the ",(0,n.jsx)(i.code,{children:"retry()"})," function, which adds 3 retries by default.\nYou can change the number in the following way:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-ts",children:"import { retry } from '@sap-cloud-sdk/resilience';\n\n// Four retries\nmyApi.getAll().middleware(retry(4)).execute(myDestination);\n"})}),"\n",(0,n.jsxs)(i.p,{children:["The retry middleware uses the ",(0,n.jsx)(i.a,{href:"https://www.npmjs.com/package/async-retry",children:"async-retry"})," library and uses meaningful default values:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Number of retires: 3."}),"\n",(0,n.jsx)(i.li,{children:"Exponential growth for waiting time using a base of 2."}),"\n",(0,n.jsx)(i.li,{children:"Initial waiting time of 1 second."}),"\n",(0,n.jsx)(i.li,{children:"Random factor on waiting time between 1 and 2."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"This means the maximum waiting times between the three retries are 2, 4, and 8 seconds."}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:"The retry middleware should be the last entry in the list of resilience middlewares.\nThis ensures the retry is executed in all failure cases."})}),"\n",(0,n.jsx)(i.h2,{id:"remarks-on-custom-implementations",children:"Remarks on Custom Implementations"}),"\n",(0,n.jsx)(i.p,{children:"One central idea to include resilience using a middleware concept is that you can implement your logic in case the provided one does not fit your needs.\nNote that the concept of resilience is not trivial, and you should develop and test your implementation thoroughly:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"You should keep the order of middlewares in mind.\nA retry should be at the end and a timeout or cache implementation at the very beginning."}),"\n",(0,n.jsxs)(i.li,{children:["You should filter certain errors from a retry and circuit breaker.\nFor example, a ",(0,n.jsx)(i.code,{children:"401"})," or ",(0,n.jsx)(i.code,{children:"403"})," response will not magically work if you do a retry."]}),"\n",(0,n.jsx)(i.li,{children:"If the middleware adds shared state between requests, e.g. a circuit breaker, you must consider isolation between customers in a multi-tenant situation."}),"\n",(0,n.jsx)(i.li,{children:"Align the parameters of the middlewares if necessary.\nAssume the system needs protection from a circuit breaker, and you want to use a retry to execute the request after system recovery.\nThen the circuit breaker reset time and retry waiting times should be aligned accordingly."}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>l});var n=t(96540);const r={},s=n.createContext(r);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);