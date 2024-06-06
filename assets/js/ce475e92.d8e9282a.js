"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3427],{6357:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var n=o(74848),s=o(28453);const c={},r=void 0,a={id:"features/odata/common/batch/batch-intro",title:"batch-intro",description:"OData batch requests combine multiple operations into one POST operation, allowing you to execute multiple requests with just one network call.",source:"@site/docs-js_versioned_docs/version-v1/features/odata/common/batch/batch-intro.mdx",sourceDirName:"features/odata/common/batch",slug:"/features/odata/common/batch/batch-intro",permalink:"/cloud-sdk/docs/js/v1/features/odata/common/batch/batch-intro",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/odata/common/batch/batch-intro.mdx",tags:[],version:"v1",frontMatter:{}},i={},d=[];function u(e){const t={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"OData batch requests combine multiple operations into one POST operation, allowing you to execute multiple requests with just one network call.\nThis can significantly reduce the network overhead you have to deal with when you want to execute many requests."}),"\n",(0,n.jsxs)(t.p,{children:["Every SAP Cloud SDK client provides a ",(0,n.jsx)(t.code,{children:"batch"})," function that takes ",(0,n.jsx)(t.a,{href:"#retrieve-request",children:"retrieve requests"})," and ",(0,n.jsx)(t.a,{href:"#changeset",children:"changesets"}),".\nYou can combine those arbitrarily.\nTo execute batch requests, use the ",(0,n.jsx)(t.code,{children:"execute"})," method - it works the same way as for single requests."]}),"\n",(0,n.jsxs)(t.p,{children:["The response of a ",(0,n.jsx)(t.code,{children:"batch"})," request is a list of ",(0,n.jsx)(t.code,{children:"BatchResponse"}),"s.\nEach of the items in the response is either a ",(0,n.jsx)(t.code,{children:"ReadResponse"}),", ",(0,n.jsx)(t.code,{children:"WriteResponses"})," or an ",(0,n.jsx)(t.code,{children:"ErrorResponse"}),", see ",(0,n.jsx)(t.a,{href:"#responses",children:"Responses"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var n=o(96540);const s={},c=n.createContext(s);function r(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);