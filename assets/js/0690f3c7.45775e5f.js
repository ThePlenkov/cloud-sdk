"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1205],{11191:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=s(74848),o=s(28453);const a={},r=void 0,i={id:"features/odata/common/operations/create-as-child-of",title:"create-as-child-of",description:"Assume you have already created a business partner and would like to add an address to it:",source:"@site/docs-js_versioned_docs/version-v2/features/odata/common/operations/create-as-child-of.mdx",sourceDirName:"features/odata/common/operations",slug:"/features/odata/common/operations/create-as-child-of",permalink:"/cloud-sdk/docs/js/v2/features/odata/common/operations/create-as-child-of",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/odata/common/operations/create-as-child-of.mdx",tags:[],version:"v2",frontMatter:{}},d={},c=[];function u(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Assume you have already created a business partner and would like to add an address to it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\nconst existingBusinessPartner = await businessPartnerApi\n  .requestBuilder()\n  .getByKey(myID)\n  .execute(myDestination);\n\nconst newAddress = businessPartnerAddressApi\n  .entityBuilder()\n  .country('DE')\n  .postalCode('14469')\n  .cityName('Potsdam')\n  .streetName('Konrad-Zuse-Ring')\n  .houseNumber('10')\n  .build();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This can be done by using the ",(0,t.jsx)(n.code,{children:"asChildOf"})," method which allows for creating an entity as a child of an existing entity.\nYou need to give the parent object and the field connecting the two entities:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"businessPartnerAddressApi\n  .requestBuilder()\n  .create(newAddress)\n  .asChildOf(\n    existingBusinessPartner,\n    businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS\n  )\n  .execute(myDestination);\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var t=s(96540);const o={},a=t.createContext(o);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);