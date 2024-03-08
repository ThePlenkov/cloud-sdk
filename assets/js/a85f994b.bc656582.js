"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7853],{39179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var s=n(74848),o=n(28453);const c={},a=void 0,r={id:"features/odata/common/batch/changeset",title:"changeset",description:"The order of execution within a changeset is not defined.",source:"@site/docs-js/features/odata/common/batch/changeset.mdx",sourceDirName:"features/odata/common/batch",slug:"/features/odata/common/batch/changeset",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/changeset",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/batch/changeset.mdx",tags:[],version:"current",frontMatter:{}},i={},h=[];function d(e){const t={a:"a",code:"code",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The order of execution within a changeset is not defined.\nThis differs from the whole batch request itself, where the order is defined.\nTherefore, the requests within one changeset should not depend on each other.\nIf the execution of any request within a changeset fails, the whole changeset will be reflected as an error in the response.\nThe changeset will not be applied, much like a database transaction."}),"\n",(0,s.jsxs)(t.p,{children:["Unlike retrieve requests, you can not pass change requests to the ",(0,s.jsx)(t.code,{children:"batch()"})," function directly.\nYou have to wrap them with the ",(0,s.jsx)(t.code,{children:"changeset()"})," function, which in turn can be passed to the ",(0,s.jsx)(t.code,{children:"batch()"})," function.\nOnce a batch request is executed, it returns a list of ",(0,s.jsx)(t.a,{href:"#responses",children:(0,s.jsx)(t.code,{children:"BatchResponse"})})," objects."]}),"\n",(0,s.jsxs)(t.p,{children:["If a changeset was executed successfully, its corresponding response is of type ",(0,s.jsx)(t.code,{children:"WriteResponses"})," and contains a collection of all raw responses to the requests in the changeset.\nIf the execution fails, the response is an ",(0,s.jsx)(t.code,{children:"ErrorResponse"})," instance."]}),"\n",(0,s.jsxs)(t.p,{children:["In the example below, you create a list of ",(0,s.jsxs)(t.a,{href:"#update-request-builder",children:[(0,s.jsx)(t.code,{children:"UpdateRequestBuilder"})," instances"]})," from a list of addresses.\nCombine these change requests into one changeset and pass it to the batch request, which you execute against a destination."]}),"\n",(0,s.jsxs)(t.p,{children:["Once you execute the batch request, you get a list of ",(0,s.jsx)(t.code,{children:"BatchResponse"})," instances, which in this example contains one response only, i.e. the one for the changeset."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const o={},c=s.createContext(o);function a(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);