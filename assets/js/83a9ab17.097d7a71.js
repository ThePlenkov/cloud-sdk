"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4695],{93420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var i=t(74848),s=t(28453),o=t(86025),r=t(13152);const l={id:"troubleshooting",title:"Troubleshooting",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Troubleshooting",description:"Troubleshooting guide for the SAP Cloud SDK for JavaScript",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","troubleshooting","connectivity"]},c=void 0,a={id:"troubleshooting",title:"Troubleshooting",description:"Troubleshooting guide for the SAP Cloud SDK for JavaScript",source:"@site/docs-js/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/cloud-sdk/docs/js/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/troubleshooting.mdx",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Troubleshooting",description:"Troubleshooting guide for the SAP Cloud SDK for JavaScript",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","troubleshooting","connectivity"]},sidebar:"docsJsSidebar",previous:{title:"Support",permalink:"/cloud-sdk/docs/js/support"}},d={},h=[{value:"Cannot find module &#39;@sap-cloud-sdk/http-client&#39;",id:"cannot-find-module-sap-cloud-sdkhttp-client",level:2},{value:"Connectivity Issue",id:"connectivity-issue",level:2},{value:"Use Minimal Example",id:"use-minimal-example",level:3},{value:"Get Destination Error",id:"get-destination-error",level:3},{value:"Fix Cloud Issues",id:"fix-cloud-issues",level:3},{value:"Activate Backend Logs",id:"activate-backend-logs",level:3},{value:"Fix Connection Issues",id:"fix-connection-issues",level:3},{value:"Fix On-Premise Issues",id:"fix-on-premise-issues",level:3},{value:"Find Difference",id:"find-difference",level:3}];function u(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"cannot-find-module-sap-cloud-sdkhttp-client",children:"Cannot find module '@sap-cloud-sdk/http-client'"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://cap.cloud.sap/docs/",children:"SAP Cloud Application Programming Mode (CAP)"})," uses the SAP Cloud SDK to execute HTTP requests towards ",(0,i.jsx)(n.a,{href:"https://cap.cloud.sap/docs/guides/using-services?q=http-client",children:"external services"}),".\nSince not all CAP users call external services, the dependency was excluded since version 6.0.0 of CAP.\nIf you are a CAP user and experience errors like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cannot find module '@sap-cloud-sdk/http-client'\n"})}),"\n",(0,i.jsx)(n.p,{children:"please install the missing dependency via:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm install @sap-cloud-sdk/http-client\n"})}),"\n",(0,i.jsx)(n.h2,{id:"connectivity-issue",children:"Connectivity Issue"}),"\n",(0,i.jsxs)(n.p,{children:["You are experiencing connectivity issues using the SAP Cloud SDK and the ",(0,i.jsx)(n.a,{href:"/cloud-sdk/docs/js/features/error-handling",children:"error logs"})," are not conclusive?\nIn such a case please follow the flowchart.\nFor each squared box, a dedicated section gives instructions below.\nThe circle indicate start and end points.\nA ",(0,i.jsx)(n.code,{children:"get help"})," circle means opening an issue on the respective component or repository."]}),"\n",(0,i.jsx)(r.A,{alt:"Troubleshooting connectivity",sources:{light:(0,o.A)("img/trouble_shooting_light.svg"),dark:(0,o.A)("img/trouble_shooting_dark.svg")},className:"center",width:"100%"}),"\n",(0,i.jsx)(n.h3,{id:"use-minimal-example",children:"Use Minimal Example"}),"\n",(0,i.jsx)(n.p,{children:"Often the issue is related to a framework that uses the SAP Cloud SDK and not the code itself.\nTherefore, add the minimal example to the code to ensure the error is related to the SAP Cloud SDK."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { executeHttpRequest } from '@sap-cloud-sdk/http-client';\nimport { getDestination } from '@sap-cloud-sdk/connectivity';\n\nasync function minimalTest() {\n  const destination = await getDestination({\n    destinationName: YOUR_DESTINATION_NAME\n  });\n  if (destination) {\n    destination.authTokens?.forEach(authToken => {\n      if (authToken.error) {\n        throw new Error(`Error in authToken ${authToken.error}`);\n      }\n    });\n  } else {\n    throw new Error('Destination is undefined.');\n  }\n  console.log('Destination Retrieved.');\n  const response = await executeHttpRequest(destination, {\n    method: 'get',\n    url: YOUR_SERVICE_URL\n  });\n  if (!response.data) {\n    throw new Error('No data returned');\n  }\n  console.log('Data Retrieved.');\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"YOUR_SERVICE_URL"})})," with the URL of your service, e.g., ",(0,i.jsx)(n.code,{children:"/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner?%24top=1"}),".\nUse the same service you also plan to call in production to observe authorization issues in the test case as well.\nInclude all ",(0,i.jsx)(n.code,{children:"getDestination()"})," options you are using in your real example, like ",(0,i.jsx)(n.code,{children:"useCache"})," or ",(0,i.jsx)(n.a,{href:"/cloud-sdk/docs/js/guides/retrieve-jwt",children:"JWT"}),".\nAlso adjust the example to your needs by adding additional log statements."]}),"\n",(0,i.jsxs)(n.p,{children:["You can execute the minimal example locally to have a quicker turnaround time.\nThis is possible when you connect to a cloud system.\nTo do that, copy the ",(0,i.jsx)(n.code,{children:"VCAP_SERVICES"})," environment of the application to the local process."]}),"\n",(0,i.jsx)(n.h3,{id:"get-destination-error",children:"Get Destination Error"}),"\n",(0,i.jsx)(n.p,{children:"You retrieved an error in the process of getting the destination or saw alarming logs while retrieving the destination.\nThis can have multiple reasons:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The destination name is not correct or the destination is not present in your SAP BTP account."}),"\n",(0,i.jsxs)(n.li,{children:["The destination has errors in the ",(0,i.jsx)(n.code,{children:"authToken"})," object.\nAdjust the configuration according to the error message until the destination service can receive a token."]}),"\n",(0,i.jsx)(n.li,{children:"The destination service is not bound to your application."}),"\n",(0,i.jsxs)(n.li,{children:["For ",(0,i.jsx)(n.code,{children:"OnPremise"})," destinations the connectivity service must be bound to your application."]}),"\n",(0,i.jsxs)(n.li,{children:["The destination service is missing as a ",(0,i.jsx)(n.a,{href:"/cloud-sdk/docs/js/tutorials/multi-tenant-application",children:"dependency of your application"}),".\nThis is only relevant in multi-tenant applications if you make the call via a subscriber account."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you are stuck in retrieving the destination, and you think the issue is caused by the SAP Cloud SDK, please ",(0,i.jsx)(n.a,{href:"https://github.com/SAP/cloud-sdk-js/issues/new/choose",children:"open an issue"}),".\nPlease provide the information from you minimal example in the ticket."]}),"\n",(0,i.jsx)(n.h3,{id:"fix-cloud-issues",children:"Fix Cloud Issues"}),"\n",(0,i.jsx)(n.p,{children:"You retrieved the destination but got an error when calling the cloud target system.\nThis can have multiple reasons:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The destination contains wrong user credentials or the user does not exist in the target system."}),"\n",(0,i.jsx)(n.li,{children:"The user is locked in the target system."}),"\n",(0,i.jsx)(n.li,{children:"The permissions of the user are insufficient."}),"\n",(0,i.jsxs)(n.li,{children:["The scopes of the JWT in the ",(0,i.jsx)(n.code,{children:"authTokens"})," are insufficient."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If your request reaches the target system and gets rejected there, the problem most likely does not lie with the SAP Cloud SDK.\nThe error logs of the target system may provide additional information on the error."}),"\n",(0,i.jsx)(n.h3,{id:"activate-backend-logs",children:"Activate Backend Logs"}),"\n",(0,i.jsx)(n.p,{children:"You have a problem connecting to an on-premise system via a Cloud Connector and connectivity service.\nOften there is an issue in the Cloud Connector setup.\nTo see if a request reaches the backend system, activate the HTTP logs."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to transaction ",(0,i.jsx)(n.strong,{children:"SMICM"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"GOTO->Trace Level"})," and set the trace level to 3 and activate HTTP logs.","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["You may want to reset the log file to have no old logs ",(0,i.jsx)(n.strong,{children:"GOTO->Trace File"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Trigger your request."}),"\n",(0,i.jsx)(n.li,{children:"Remember to switch back the trace level after you send the request."}),"\n",(0,i.jsxs)(n.li,{children:["Go to transaction ",(0,i.jsx)(n.strong,{children:"ST11"})," and investigate the file ",(0,i.jsx)(n.code,{children:"dev_icm"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you see entries related to your request, your connection is working."}),"\n",(0,i.jsx)(n.h3,{id:"fix-connection-issues",children:"Fix Connection Issues"}),"\n",(0,i.jsx)(n.p,{children:"You have not found entries in the HTTP logs.\nThis means your request got stuck somewhere before."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Investigate the logs of the Cloud Connector and check the ",(0,i.jsx)(n.a,{href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/9b6510edf4d844a28f022b3db41f3202.html",children:"documentation"})," to fix problems."]}),"\n",(0,i.jsx)(n.li,{children:"The connectivity service is not bound to your application."}),"\n",(0,i.jsxs)(n.li,{children:["The connectivity service is missing as ",(0,i.jsx)(n.a,{href:"/cloud-sdk/docs/js/tutorials/multi-tenant-application",children:"dependency of your application"}),".\nThis is only relevant in multi-tenant applications if you make the call via a subscriber account."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you keep experiencing problems, please reach out to the SAP BTP or Cloud Connector support."}),"\n",(0,i.jsx)(n.h3,{id:"fix-on-premise-issues",children:"Fix On-Premise Issues"}),"\n",(0,i.jsxs)(n.p,{children:["Your request reaches the backend, but is rejected there.\nUsually the content of the ",(0,i.jsx)(n.a,{href:"#activate-backend-logs",children:"HTTP logs"})," should give you a hint what to do.\nIn the end requests get rejected for the same reasons as in the ",(0,i.jsx)(n.a,{href:"#fix-cloud-issues",children:"cloud case"}),".\nIn addition, there are on-premise specific problems:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The default client is not the client with your user and configuration.\nSet the ",(0,i.jsx)(n.code,{children:"sap-client"})," explicitly on the destination."]}),"\n",(0,i.jsx)(n.li,{children:"The principal propagation is more difficult to configure.\nIf a destination with basic authentication works you know for sure you have a problem with user propagation."}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"https://help.sap.com/docs/SAP_NETWEAVER_AS_ABAP_FOR_SOH_740/d528eef3dca14679bcb47b069aa17a9d/c830fd902dc8473b9e59db1576cc784b.html?version=7.40.16&locale=en-US",children:"user mapping"})," is not correctly configured for principal propagation."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"find-difference",children:"Find Difference"}),"\n",(0,i.jsxs)(n.p,{children:["The minimal example is working, but your real code is not.\nThis means the framework you are using is calling the SAP Cloud SDK in a different way than you are.\nAt this point, ",(0,i.jsx)(n.a,{href:"/cloud-sdk/docs/js/guides/remote-debugging",children:"debug the application"}),".\nTry to reach the point where the ",(0,i.jsx)(n.code,{children:"executeHttpRequest()"})," function of the SAP Cloud SDK is called and compare the argument to the one of the minimal example."]}),"\n",(0,i.jsx)(n.p,{children:"If you found the difference, try to align it or open an issue with the framework."})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);