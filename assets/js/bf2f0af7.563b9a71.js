"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6459],{36390:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=i(74848),o=i(28453);const s={id:"on-premise",title:"On-Premise Connectivity",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"On-Premise",description:"This article describes the On-Premise connectivity features of the SAP Cloud SDK for Java.",keywords:["sap","cloud","sdk","java","connectivity","btp","on-premise"]},r=void 0,c={id:"features/connectivity/on-premise",title:"On-Premise Connectivity",description:"This article describes the On-Premise connectivity features of the SAP Cloud SDK for Java.",source:"@site/docs-java/features/connectivity/002-on-premise.mdx",sourceDirName:"features/connectivity",slug:"/features/connectivity/on-premise",permalink:"/cloud-sdk/docs/java/features/connectivity/on-premise",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/features/connectivity/002-on-premise.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"on-premise",title:"On-Premise Connectivity",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"On-Premise",description:"This article describes the On-Premise connectivity features of the SAP Cloud SDK for Java.",keywords:["sap","cloud","sdk","java","connectivity","btp","on-premise"]},sidebar:"docsJavaSidebar",previous:{title:"BTP Destination Service",permalink:"/cloud-sdk/docs/java/features/connectivity/btp-destination-service"},next:{title:"Bound Services",permalink:"/cloud-sdk/docs/java/features/connectivity/service-bindings"}},a={},d=[{value:"Cloud Foundry To On-Premise",id:"cloud-foundry-to-on-premise",level:2},{value:"Principal Propagation",id:"principal-propagation",level:3},{value:"1. Token Forwarding (Default)",id:"1-token-forwarding-default",level:4},{value:"2. Token Exchange (Discouraged)",id:"2-token-exchange-discouraged",level:4},{value:"Kubernetes To On-Premise",id:"kubernetes-to-on-premise",level:2},{value:"Non-Production Deployment To On-Premise",id:"non-production-deployment-to-on-premise",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Connecting to On-Premise systems is a crucial part of many enterprise applications.\nTo make this as easy as possible, the SAP Cloud SDK offers seamless integration with the ",(0,t.jsx)(n.a,{href:"https://help.sap.com/docs/connectivity/sap-btp-connectivity-cf/connectivity",children:"SAP BTP Connectivity Service"})," both on ",(0,t.jsx)(n.a,{href:"#cloud-foundry-to-on-premise",children:"Cloud Foundry"})," and ",(0,t.jsx)(n.a,{href:"#kubernetes-to-on-premise",children:"Kubernetes-based environments"})," (e.g. Kyma)."]}),"\n",(0,t.jsx)(n.h2,{id:"cloud-foundry-to-on-premise",children:"Cloud Foundry To On-Premise"}),"\n",(0,t.jsxs)(n.p,{children:["To enable On-Premise connectivity for applications that are deployed on Cloud Foundry, the SAP Cloud SDK requires ",(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.em,{children:"exactly"})," one service binding"]})," to the SAP BTP Connectivity Service.\nThe information provided within this service binding is then used to ",(0,t.jsxs)(n.a,{href:"http-destinations#deriving-the-proxy-authorization-header",children:["derive the ",(0,t.jsx)(n.code,{children:"ProxyAuthorization"})," header"]})," for ",(0,t.jsx)(n.code,{children:"Destination"})," objects that use ",(0,t.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/ProxyType.html#ON_PREMISE",children:(0,t.jsx)(n.code,{children:"ON_PREMISE"})})," as their ",(0,t.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/HttpDestinationProperties.html#getProxyType()",children:(0,t.jsx)(n.code,{children:"ProxyType"})}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"principal-propagation",children:"Principal Propagation"}),"\n",(0,t.jsxs)(n.p,{children:["Often times, On-Premise systems do have their own user management, which, in most cases, does not match the user management of Cloud Identity Providers.\nThis is why tenants and users on the application side need to be exchanged for entities that are registered within the On-Premise system.\nThis process is called ",(0,t.jsx)(n.a,{href:"https://help.sap.com/docs/connectivity/sap-btp-connectivity-cf/configuring-principal-propagation?locale=en-",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"principal propagation"})})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The SAP Cloud SDK, therefore, supports the ",(0,t.jsxs)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/AuthenticationType.html#PRINCIPAL_PROPAGATION",children:[(0,t.jsx)(n.code,{children:"PrincipalPropagation"})," authentication type"]})," for On-Premise destinations.\nThe concrete authentication flow is hereby separated into two parts, which can be configued by setting a property called ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"cloudsdk.principalPropagationMode"})})," on the ",(0,t.jsx)(n.code,{children:"Destination"})," object."]}),"\n",(0,t.jsx)(n.h4,{id:"1-token-forwarding-default",children:"1. Token Forwarding (Default)"}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"cloudsdk.principalPropagationMode"})})," property is set to ",(0,t.jsx)(n.code,{children:"TOKEN_FORWARDING"}),", or if the property is not set at all, the ",(0,t.jsxs)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/PrincipalPropagationMode.html#TOKEN_FORWARDING",children:[(0,t.jsx)(n.code,{children:"TOKEN_FORWARDING"})," strategy"]})," will be applied."]}),"\n",(0,t.jsx)(n.h4,{id:"2-token-exchange-discouraged",children:"2. Token Exchange (Discouraged)"}),"\n",(0,t.jsx)(n.admonition,{title:"Discouraged",type:"caution",children:(0,t.jsxs)(n.p,{children:["Using the ",(0,t.jsx)(n.code,{children:"TOKEN_EXCHANGE"})," strategy is discouraged as it results in unnecessary roundtrips and is therefore less performant than the ",(0,t.jsx)(n.code,{children:"TOKEN_FORWARDING"})," strategy."]})}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"cloudsdk.principalPropagationMode"})})," property is set to ",(0,t.jsx)(n.code,{children:"TOKEN_EXCHANGE"}),", the ",(0,t.jsxs)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/PrincipalPropagationMode.html#TOKEN_EXCHANGE",children:[(0,t.jsx)(n.code,{children:"TOKEN_EXCHANGE"})," strategy"]})," will be applied."]}),"\n",(0,t.jsx)(n.h2,{id:"kubernetes-to-on-premise",children:"Kubernetes To On-Premise"}),"\n",(0,t.jsxs)(n.p,{children:["The SAP Cloud SDK provides support On-Premise connectivity on Kubernetes-based environments as ",(0,t.jsx)(n.a,{href:"../../environments/kubernetes-kyma#on-premise-connectivity",children:"documented here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"non-production-deployment-to-on-premise",children:"Non-Production Deployment To On-Premise"}),"\n",(0,t.jsxs)(n.p,{children:["In non-production environments, such as a developer's local machine or a CI/CD pipeline, the SAP Cloud SDK can still be used to connect to On-Premise systems as ",(0,t.jsx)(n.a,{href:"running-locally",children:"documented here"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);