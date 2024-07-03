"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4983],{13393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(74848),s=n(28453);const o={},i=void 0,a={id:"features/odata/common/query-parameter/filter-functions",title:"filter-functions",description:"There are predefined filter functions e.g. length(), substring(), substringOf() in the core library, that allow for a wide range of filter expressions:",source:"@site/docs-js/features/odata/common/query-parameter/filter-functions.mdx",sourceDirName:"features/odata/common/query-parameter",slug:"/features/odata/common/query-parameter/filter-functions",permalink:"/cloud-sdk/docs/js/features/odata/common/query-parameter/filter-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/query-parameter/filter-functions.mdx",tags:[],version:"current",frontMatter:{}},c={},l=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["There are predefined filter functions e.g. ",(0,r.jsx)(t.code,{children:"length()"}),", ",(0,r.jsx)(t.code,{children:"substring()"}),", ",(0,r.jsx)(t.code,{children:"substringOf()"})," in the core library, that allow for a wide range of filter expressions:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"/*\nFetch all business partners who have a first name shorter than 5 letters\n*/\nconst { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .getAll()\n  .filter(length(businessPartnerApi.schema.FIRST_NAME).lessThan(5))\n  .execute(destination);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Filter functions with return type ",(0,r.jsx)(t.code,{children:"boolean"})," can be used directly as a filter without ",(0,r.jsx)(t.code,{children:"equal(true)"}),".\nLogically, the two following examples are equivalent to each other:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"/*\n  $filter=startswith(FirstName, 'Bob') eq true\n*/\n.filter(\n  startsWith(businessPartnerApi.schema.FIRST_NAME, 'Bob').equal(true)\n)\n"})}),"\n",(0,r.jsx)(t.p,{children:"The filter expression can be shortened:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"  /*\n    $filter=startswith(FirstName, 'Bob')\n  */\n  .filter(\n    startsWith(businessPartnerApi.schema.FIRST_NAME, 'Bob')\n  )\n"})}),"\n",(0,r.jsx)(t.p,{children:"However, as some services might not support both versions shown above, you might have to choose one of them to fit the target system."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);