"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[883],{48329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=n(74848),o=n(28453);const a={},r=void 0,i={id:"features/odata/common/batch/serialization",title:"serialization",description:"By default, when you execute a batch request, the subrequests are serialized to a multipart representation of the request, which is essentially a string.",source:"@site/docs-js_versioned_docs/version-v2/features/odata/common/batch/serialization.mdx",sourceDirName:"features/odata/common/batch",slug:"/features/odata/common/batch/serialization",permalink:"/cloud-sdk/docs/js/v2/features/odata/common/batch/serialization",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/odata/common/batch/serialization.mdx",tags:[],version:"v2",frontMatter:{}},c={},d=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"By default, when you execute a batch request, the subrequests are serialized to a multipart representation of the request, which is essentially a string.\nThis is what a create request for a business partner addresses would serialize to:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'Content-Type: application/http\nContent-Transfer-Encoding: binary\n\nPOST /sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress HTTP/1.1\nContent-Type: application/json\nAccept: application/json\n\n{"BusinessPartner":"1","PostalCode":"10001","City":"New York","Country":"USA"}\n\n'})}),"\n",(0,s.jsxs)(t.p,{children:['The first lines are request headers for the multipart request, followed by a blank line.\nThe next line contains the request method and URL, followed by the request headers, a blank line, and the request payload.\nEvery "atomic" request is serialized to a string of this kind, while ',(0,s.jsx)(t.code,{children:"GET"})," and ",(0,s.jsx)(t.code,{children:"DELETE"})," requests do not provide a payload."]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(96540);const o={},a=s.createContext(o);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);