"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4073],{7799:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=n(74848),r=n(28453);const o={},c=void 0,a={id:"features/odata/common/batch/responses",title:"responses",description:"Once a batch request is executed, it returns a list of BatchResponse objects.",source:"@site/docs-js/features/odata/common/batch/responses.mdx",sourceDirName:"features/odata/common/batch",slug:"/features/odata/common/batch/responses",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/responses",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/batch/responses.mdx",tags:[],version:"current",frontMatter:{}},i={},d=[{value:"<code>ReadResponse</code>",id:"readresponse",level:3},{value:"<code>WriteResponses</code>",id:"writeresponses",level:3},{value:"<code>ErrorResponse</code>",id:"errorresponse",level:3}];function h(e){const s={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Once a ",(0,t.jsx)(s.code,{children:"batch"})," request is executed, it returns a list of ",(0,t.jsx)(s.code,{children:"BatchResponse"})," objects.\nThe responses correspond to the retrieve requests and changesets in the same order that they were passed to the ",(0,t.jsx)(s.code,{children:"batch()"})," function.\nRequests that were not successful are reflected as a list of ",(0,t.jsx)(s.code,{children:"ErrorResponse"})," objects.\nResponses to successful requests are represented as ",(0,t.jsx)(s.code,{children:"ReadResponse"})," instances for retrieve requests, and ",(0,t.jsx)(s.code,{children:"WriteResponses"})," for changesets."]}),"\n",(0,t.jsx)(s.p,{children:"To determine the type of a response, you can use the following type guards:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"isSuccess()"}),": to check that the response is either a ",(0,t.jsx)(s.code,{children:"ReadResponse"})," or ",(0,t.jsx)(s.code,{children:"WriteResponses"})," instance"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"isError()"}),": to check that the response is an ",(0,t.jsx)(s.code,{children:"ErrorResponse"})," instance"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"isReadResponse()"}),": to check that the response is a ",(0,t.jsx)(s.code,{children:"ReadResponse"})," instance"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"isWriteResponses()"}),": to check that the response is a ",(0,t.jsx)(s.code,{children:"WriteResponses"})," instance"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Then, depending on the corresponding request, you can parse the response or handle the error."}),"\n",(0,t.jsx)(s.h3,{id:"readresponse",children:(0,t.jsx)(s.code,{children:"ReadResponse"})}),"\n",(0,t.jsxs)(s.p,{children:["Successful retrieve requests have the type ",(0,t.jsx)(s.code,{children:"ReadResponse"}),", which contains the HTTP code, the raw body, and the constructor of the entity that was parsed from the response.\nTo work with an instance of the retrieved entity, you can use the ",(0,t.jsx)(s.code,{children:"as()"})," method, which allows you to transform the raw data into an instance of an entity represented by the given entity API.\nNote, that the ",(0,t.jsx)(s.code,{children:"as()"})," method transforms the raw data to an array of entities, even if the original request was a ",(0,t.jsx)(s.code,{children:"GetByKeyRequestBuilder"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["In the example below, you combine a list of ",(0,t.jsx)(s.code,{children:"GetByKeyRequestBuilder"})," instances into one ",(0,t.jsx)(s.code,{children:"batch"})," request and execute it against a destination.\nIf one of the requests was unsuccessful, an error will be thrown.\nOtherwise, the responses are transformed into instances of ",(0,t.jsx)(s.code,{children:"BusinessPartnerAddress"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"// Destructure business partner service\nconst { batch, businessPartnerAddressApi } = businessPartnerService();\n\nasync function getAddressesByIds(\n  ...retrieveRequests: GetByKeyRequestBuilder<BusinessPartnerAddress>[]\n): Promise<BusinessPartnerAddress[]> {\n  // Execute batch request combining multiple retrieve requests\n  const batchResponses = await batch(...retrieveRequests).execute(destination);\n\n  // Error handling\n  if (batchResponses.some(response => !response.isSuccess())) {\n    throw new Error('Some of the batch subrequests were not successful.');\n  }\n\n  return batchResponses.reduce(\n    (addresses: BusinessPartnerAddress[], response: BatchResponse) => {\n      if (response.isReadResponse()) {\n        // Transform response to an instance of BusinessPartnerAddress\n        const [address] = response.as(businessPartnerAddressApi);\n        addresses.push(address);\n      }\n      return addresses;\n    },\n    []\n  );\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Function imports using ",(0,t.jsx)(s.code,{children:"GET"})," operation are part of the retrieve requests as well.\nAs function imports are not entity based, you obtain the response using the ",(0,t.jsx)(s.code,{children:"responseTransformer()"})," method, which is part of the ",(0,t.jsx)(s.code,{children:"FunctionImportRequestBuilder"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"const {\n  operations: { getPdf }\n} = billingDocumentService();\n\nasync function batchExample(billingDocument: string) {\n  const request = getPdf({ billingDocument });\n  const [response] = await batch(request).execute(destination);\n  if (response.isReadResponse()) {\n    const parsedResponse = request.responseTransformer(response.body);\n  }\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"writeresponses",children:(0,t.jsx)(s.code,{children:"WriteResponses"})}),"\n",(0,t.jsxs)(s.p,{children:["Successful changeset requests can be cast to type ",(0,t.jsx)(s.code,{children:"WriteResponses"})," which contains all subresponses for the changeset request.\nThose responses can be accessed with the ",(0,t.jsx)(s.code,{children:"responses"})," property and have the type ",(0,t.jsx)(s.code,{children:"WriteResponse"}),".\nEach ",(0,t.jsx)(s.code,{children:"WriteResponse"})," instance contains the HTTP code and can contain the raw body and the constructor of the entity that was parsed from the response, depending on whether there was a body in the response.\nCreate and delete requests typically do not have a response body.\nTo work with an instance of an entity given in a ",(0,t.jsx)(s.code,{children:"WriteResponse"}),", you can use the ",(0,t.jsx)(s.code,{children:"as()"})," method, which allows you to transform the raw string body into an instance of the given constructor.\nNote that the response may not exist, so you should only call this method if you know that there is data.\nTypically the HTTP code is a good indicator for this - ",(0,t.jsx)(s.code,{children:"201 No Content"})," probably won't have content."]}),"\n",(0,t.jsxs)(s.p,{children:["If you are working with TypeScript, you will have to tell the compiler that the ",(0,t.jsx)(s.code,{children:"as!()"})," method can be used here by adding a ",(0,t.jsx)(s.code,{children:"!"}),".\nAlso note, that the response to a changeset can be an ",(0,t.jsx)(s.code,{children:"ErrorResponse"}),".\nTherefore, it is crucial to check responses for success, before casting them to ",(0,t.jsx)(s.code,{children:"WriteResponses"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["In the example below, you combine a list of ",(0,t.jsx)(s.code,{children:"UpdateRequestBuilder"})," instances into one changeset and pass it to the batch request.\nOnce you execute the batch request, you get a list which contains one ",(0,t.jsx)(s.code,{children:"BatchResponse"})," object only."]}),"\n",(0,t.jsxs)(s.p,{children:["If the request was unsuccessful, an error will be thrown.\nOtherwise, the subresponses are transformed into instances of ",(0,t.jsx)(s.code,{children:"BusinessPartnerAddress"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"// Destructure business partner service\nconst { batch, changeset } = businessPartnerService();\n\nasync function updateAddresses(\n  ...updateRequests: UpdateRequestBuilder<BusinessPartnerAddress>\n): Promise<BusinessPartnerAddress[]> {\n  // Execute batch request with one changeset\n  const batchResponses = await batch(\n    // Combine update requests into one changeset\n    changeset(...updateRequests)\n  ).execute(destination);\n\n  // Get response for the changeset request\n  const changesetResponse = batchResponses[0];\n\n  if (changesetResponse.isWriteResponses()) {\n    return changesetResponse.responses.map(response =>\n      // Transform response to an instance of BusinessPartnerAddress\n      response.as!(BusinessPartnerAddress)\n    );\n  }\n\n  // Error handling\n  throw new Error('The changeset request was not successful.');\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["As discussed for the ",(0,t.jsx)(s.a,{href:"#readresponse",children:"read response"})," you have to use the ",(0,t.jsx)(s.code,{children:"responseTransformer()"})," method for write responses related to function or action imports."]}),"\n",(0,t.jsx)(s.h3,{id:"errorresponse",children:(0,t.jsx)(s.code,{children:"ErrorResponse"})}),"\n",(0,t.jsxs)(s.p,{children:["Unsuccessful retrieve requests and changesets are reflected as ",(0,t.jsx)(s.code,{children:"ErrorResponse"})," instances in the response.\nThose responses have an ",(0,t.jsx)(s.code,{children:"httpCode"})," (a number) and a ",(0,t.jsx)(s.code,{children:"body"})," (a JSON object)."]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>a});var t=n(96540);const r={},o=t.createContext(r);function c(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);