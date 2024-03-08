"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9347],{92032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(74848),s=n(28453);const i={id:"overview",title:"OData",sidebar_label:"Overview",description:"This article provides an overview of how the SAP Cloud SDK for JavaScript supports connecting to OData services.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","client","generate"]},r=void 0,o={id:"features/odata/overview",title:"OData",description:"This article provides an overview of how the SAP Cloud SDK for JavaScript supports connecting to OData services.",source:"@site/docs-js_versioned_docs/version-v1/features/odata/overview.mdx",sourceDirName:"features/odata",slug:"/features/odata/overview",permalink:"/cloud-sdk/docs/js/v1/features/odata/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/odata/overview.mdx",tags:[],version:"v1",frontMatter:{id:"overview",title:"OData",sidebar_label:"Overview",description:"This article provides an overview of how the SAP Cloud SDK for JavaScript supports connecting to OData services.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","client","generate"]},sidebar:"docsJsSidebar",previous:{title:"Getting Started",permalink:"/cloud-sdk/docs/js/v1/getting-started"},next:{title:"Generate an OData Client",permalink:"/cloud-sdk/docs/js/v1/features/odata/generate-client"}},d={},l=[{value:"What OData Protocol Versions Are Supported?",id:"what-odata-protocol-versions-are-supported",level:2},{value:"What Is OData?",id:"what-is-odata",level:2},{value:"Pregenerated OData Clients",id:"pregenerated-odata-clients",level:2},{value:"Links",id:"links",level:3},{value:"Legal",id:"legal",level:3},{value:"Code Generator",id:"code-generator",level:2},{value:"Connectivity",id:"connectivity",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"what-odata-protocol-versions-are-supported",children:"What OData Protocol Versions Are Supported?"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"OData protocol version"}),(0,a.jsx)(t.th,{children:"SAP Cloud SDK for JavaScript"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/cloud-sdk/docs/js/v1/features/odata/v2-client",children:"OData v2"})}),(0,a.jsx)(t.td,{children:"\u2713"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/cloud-sdk/docs/js/v1/features/odata/v4-client",children:"OData v4"})}),(0,a.jsx)(t.td,{children:"\u2713"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"what-is-odata",children:"What Is OData?"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.odata.org/",children:"OData"})," is an open standard for building and consuming RESTful APIs.\nIt defines a query language to send and retrieve data via HTTP and to perform operations on data."]}),"\n",(0,a.jsxs)(t.p,{children:["There are two widely used versions of the protocol: OData v2 and OData v4.\nThe latter comes with more and improved functionality.\nFull details on the standards are to be found in the ",(0,a.jsx)(t.a,{href:"https://www.odata.org/documentation/",children:"documentation"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"pregenerated-odata-clients",children:"Pregenerated OData Clients"}),"\n",(0,a.jsx)(t.p,{children:"The SAP Cloud SDK includes pregenerated JavaScript/TypeScript clients for all OData-based SAP S/4HANA Cloud and On-Premise services.\nThose clients simplify service consumption by exposing a typed and fluent API.\nThis API allows you to explore and autocomplete requests against the SAP S/4HANA services."}),"\n",(0,a.jsx)(t.p,{children:"There are more than 400 pregenerated clients with the following naming patterns:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["SAP S/4HANA Cloud: ",(0,a.jsx)(t.code,{children:"@sap/cloud-sdk-vdm-<service name>-service"})]}),"\n",(0,a.jsxs)(t.li,{children:["SAP S/4HANA On-Premise: ",(0,a.jsx)(t.code,{children:"@sap/cloud-sdk-op-vdm-<service name>-service"})]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{title:"Virtual Data Model (VDM)",type:"info",children:(0,a.jsxs)(t.p,{children:["Sometimes the pregenerated clients for SAP S/4HANA are referred to as ",(0,a.jsx)(t.em,{children:"Virtual Data Model (VDM)"}),".\nThis is why the naming pattern for the pregenerated clients contains ",(0,a.jsx)(t.code,{children:"vdm"})," as well."]})}),"\n",(0,a.jsx)(t.h3,{id:"links",children:"Links"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://sap.github.io/cloud-sdk/docs/js/features/odata/execute-odata-request",children:"How to use the clients"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../../release-notes",children:"Release Notes"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://api.sap.com/products/SAPS4HANACloud/overview",children:"SAP S/4HANA Cloud on the SAP Business Hub"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://api.sap.com/products/SAPS4HANA/overview",children:"SAP S/4HANA On-Premise on the SAP Business Hub"})}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"legal",children:"Legal"}),"\n",(0,a.jsxs)(t.p,{children:["All SAP Cloud SDK's pregenerated client libraries are distributed under the ",(0,a.jsx)(t.a,{href:"https://tools.eu1.hana.ondemand.com/developer-license-3_1.txt",children:"SAP developer license agreement"}),".\nThis limits the use of the pregenerated clients to development purposes only."]}),"\n",(0,a.jsx)(t.h2,{id:"code-generator",children:"Code Generator"}),"\n",(0,a.jsxs)(t.p,{children:["If you want to use an OData service, that has no pregenerated client, you can use the ",(0,a.jsx)(t.a,{href:"/cloud-sdk/docs/js/v1/features/odata/generate-client",children:"client generator"})," to generate your own client.\nYou can do it for any service either developed by yourself, provided by SAP, or by other 3rd parties."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Service definition usually comes in form of the ",(0,a.jsx)(t.code,{children:".edmx"})," file and contains metadata of OData service.\nThe simplest way to obtain it if you have access to the service is by navigating to the ",(0,a.jsx)(t.code,{children:"http(s)://<service-path>/$metadata"})," endpoint.\nYou can generate a client for any 3rd party service or a service that you have built on your own."]}),"\n",(0,a.jsx)(t.li,{children:"You can invoke the code generator via our command-line interface (CLI)."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"connectivity",children:"Connectivity"}),"\n",(0,a.jsxs)(t.p,{children:["We simplify connectivity to SAP-enabled OData services via type-safe abstractions over ",(0,a.jsx)(t.a,{href:"../connectivity/destinations",children:"Destinations"}),", Authentication, and some other related concepts."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(96540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);