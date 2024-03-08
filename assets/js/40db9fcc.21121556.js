"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8846],{54141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(74848),r=n(28453);const i={},a=void 0,o={id:"features/odata/common/entity/entity-builder",title:"entity-builder",description:"The API class provides an entity builder with the entityBuilder() method.",source:"@site/docs-js/features/odata/common/entity/entity-builder.mdx",sourceDirName:"features/odata/common/entity",slug:"/features/odata/common/entity/entity-builder",permalink:"/cloud-sdk/docs/js/features/odata/common/entity/entity-builder",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/entity/entity-builder.mdx",tags:[],version:"current",frontMatter:{}},d={},c=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The API class provides an entity builder with the ",(0,s.jsx)(t.code,{children:"entityBuilder()"})," method.\nYou can set the properties using a fluent API.\nThe ",(0,s.jsx)(t.code,{children:"build()"})," method will return the new entity."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { businessPartnerService } from './generated/business-partner-service';\n\nconst { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\n\nbusinessPartnerApi.entityBuilder().firstName('Peter').lastName('Pan').build();\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can create navigation properties that link to other entities using their respective builders.\nNavigation properties with a one-to-many relation require an array of entities as a parameter.\nThis also applies if the array only contains one entity."}),"\n",(0,s.jsx)(t.p,{children:"The relation to the business partner address is a one-to-many relation here."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { businessPartnerService } from './generated/business-partner-service';\n\nconst { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\n\nbusinessPartnerApi\n  .entityBuilder()\n  .firstName('Peter')\n  .lastName('Pan')\n  .toBusinessPartnerAddress([\n    businessPartnerAddressApi.entityBuilder().country('Neverland').build()\n  ])\n  .build();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can also add fields that are unknown according to the specification, if you add them as custom fields.\nTo achieve this, pass an object to the ",(0,s.jsx)(t.code,{children:"withCustomFields()"})," method.\nThe keys of the object represent the names of the custom fields and the values their respective values."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { businessPartnerService } from './generated/business-partner-service';\n\nconst { businessPartnerApi } = businessPartnerService();\n\nbusinessPartnerApi\n  .entityBuilder()\n  .firstName('Peter')\n  .withCustomFields({\n    myCustomField: 'this is custom'\n  })\n  .build();\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);