"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9204],{93054:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var o=t(74848),s=t(28453);const r={},i=void 0,d={id:"features/odata/common/function-imports/request-builder",title:"request-builder",description:"The function import request builder helps build a request for service operations including their parameters.",source:"@site/docs-js_versioned_docs/version-v1/features/odata/common/function-imports/request-builder.mdx",sourceDirName:"features/odata/common/function-imports",slug:"/features/odata/common/function-imports/request-builder",permalink:"/cloud-sdk/docs/js/v1/features/odata/common/function-imports/request-builder",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/odata/common/function-imports/request-builder.mdx",tags:[],version:"v1",frontMatter:{}},c={},a=[];function u(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The function import request builder helps build a request for service operations including their parameters.\nNot all services expose function imports.\nWe will use the ",(0,o.jsx)(n.a,{href:"https://api.sap.com/api/API_WHSE_OUTB_DLV_ORDER/resource",children:"Warehouse Outbound Delivery Order service"})," as an example.\nThe according SAP Cloud SDK for JavaScript package is named ",(0,o.jsx)(n.code,{children:"@sap/cloud-sdk-vdm-warehouse-outbound-delivery-order-service"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The example below creates a function import request builder for the service operation ",(0,o.jsx)(n.code,{children:"PostGoodsIssue"})," and then executes it against your destination."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"postGoodsIssue({ outboundDeliveryOrder: 'order' }).execute(destination);\n"})}),"\n",(0,o.jsx)(n.p,{children:"The service operation is defined in the service metadata."}),"\n",(0,o.jsxs)(n.p,{children:["If the response structure does not match the transformation type, the promise from ",(0,o.jsx)(n.code,{children:"execute(destination)"})," will be resolved into ",(0,o.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The default transformer expects the following response format:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "d": {\n    "Count": 0\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Assume the actual response has an additional layer ",(0,o.jsx)(n.code,{children:"Foo"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "d": {\n    "Foo": {\n      "Count": 0\n    }\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this case, ",(0,o.jsx)(n.code,{children:"dataAccessor"})," can be used in the following way to modify the response into the desired form for further deserialization."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"functionImportRequestBuilder.execute(destination, data => data.d.Foo);\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);