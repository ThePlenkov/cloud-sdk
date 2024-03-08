"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1735],{21472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var s=n(74848),a=n(28453);const o={},r=void 0,i={id:"features/odata/common/operations/update",title:"update",description:"The update request builder allows you to change existing entities.",source:"@site/docs-js/features/odata/common/operations/update.mdx",sourceDirName:"features/odata/common/operations",slug:"/features/odata/common/operations/update",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/update",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/operations/update.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[];function c(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The update request builder allows you to change existing entities.\nBy default, ",(0,s.jsx)(t.code,{children:"PATCH"})," is used to only update changed fields."]}),"\n",(0,s.jsx)(t.p,{children:"The following example first gets a business partner, changes one of its values, and then sends an update request."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const { businessPartnerApi } = businessPartnerService();\n\n// Get a business partner\nconst businessPartner = await businessPartnerApi\n  .requestBuilder()\n  .getByKey('1')\n  .execute({ destinationName: 'myDestination' });\n\n// Change first name\nbusinessPartner.firstName = 'Steve';\n\n// Send a PATCH request with `{ \"FirstName\" : \"Steve\" }`\nbusinessPartnerApi.requestBuilder().update(businessPartner);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The code above changed the first name of the given business partner.\nThe payload sent to the service with ",(0,s.jsx)(t.code,{children:"PATCH"})," includes only the first name."]}),"\n",(0,s.jsxs)(t.p,{children:["Be aware that update requests will fail if their ETags don't match.\nCheck out the ",(0,s.jsx)(t.a,{href:"#handling-of-etags",children:"ETag"})," section for more information."]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(96540);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);