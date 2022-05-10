"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5238],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=s.createContext({}),p=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return s.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),h=r,m=d["".concat(c,".").concat(h)]||d[h]||l[h]||a;return t?s.createElement(m,o(o({ref:n},u),{},{components:t})):s.createElement(m,o({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72360:function(e,n,t){t.d(n,{Z:function(){return o}});var s=t(67294),r=t(86010),a="tabItem_OmH5";function o(e){var n=e.children,t=e.hidden,o=e.className;return s.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,o),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return h}});var s=t(87462),r=t(67294),a=t(72389),o=t(67392),i=t(7094),c=t(12466),p=t(86010),u="tabList_uSqn",l="tabItem_LplD";function d(e){var n,t,a,d=e.lazy,h=e.block,m=e.defaultValue,f=e.values,b=e.groupId,k=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=f?f:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,o.l)(w,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(n=null!=m?m:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=y[0])?void 0:a.props.value;if(null!==g&&!w.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),R=N.tabGroupChoices,C=N.setTabGroupChoices,q=(0,r.useState)(g),T=q[0],P=q[1],E=[],B=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var x=R[b];null!=x&&x!==T&&w.some((function(e){return e.value===x}))&&P(x)}var A=function(e){var n=e.currentTarget,t=E.indexOf(n),s=w[t].value;s!==T&&(B(n),P(s),null!=b&&C(b,s))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var s=E.indexOf(e.currentTarget)+1;t=E[s]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;t=E[r]||E[E.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,p.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":h},k)},w.map((function(e){var n=e.value,t=e.label,a=e.attributes;return r.createElement("li",(0,s.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return E.push(e)},onKeyDown:O,onFocus:A,onClick:A},a,{className:(0,p.Z)("tabs__item",l,null==a?void 0:a.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),d?(0,r.cloneElement)(y.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function h(e){var n=(0,a.Z)();return r.createElement(d,(0,s.Z)({key:String(n)},e))}},55204:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return h}});var s=t(87462),r=t(63366),a=(t(67294),t(3905)),o=t(9877),i=t(72360),c=["components"],p={},u=void 0,l={unversionedId:"js/features/odata/common/batch/responses",id:"js/features/odata/common/batch/responses",title:"responses",description:"Once a batch request is executed, it returns a list of BatchResponses.",source:"@site/docs/js/features/odata/common/batch/responses.mdx",sourceDirName:"js/features/odata/common/batch",slug:"/js/features/odata/common/batch/responses",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/responses",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/batch/responses.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1652167560,formattedLastUpdatedAt:"5/10/2022",frontMatter:{}},d={},h=[{value:"<code>ReadResponse</code>",id:"readresponse",level:3},{value:"<code>WriteResponses</code>",id:"writeresponses",level:3},{value:"<code>ErrorResponse</code>",id:"errorresponse",level:3},{value:"<code>ReadResponse</code>",id:"readresponse-1",level:3},{value:"<code>WriteResponses</code>",id:"writeresponses-1",level:3},{value:"<code>ErrorResponse</code>",id:"errorresponse-1",level:3}],m={toc:h};function f(e){var n=e.components,t=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,s.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once a ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request is executed, it returns a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"BatchResponse"),"s.\nThe responses correspond to the retrieve requests and changesets in the same order that they were passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," function.\nRequests that were not successful are reflected as ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),"s.\nResponses to successful requests are represented as ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadResponse"),"s for retrieve requests, and ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponses")," for changesets."),(0,a.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"major",mdxType:"TabItem"},"To determine the type of a response, you can use the following type guards:",(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".isSuccess()")," - to check that the response is either a ",(0,a.kt)("inlineCode",{parentName:"li"},"ReadResponse")," or of type ",(0,a.kt)("inlineCode",{parentName:"li"},"WriteResponses")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".isError()")," - to check that the response is an ",(0,a.kt)("inlineCode",{parentName:"li"},"ErrorResponse")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".isReadResponse()")," - to check that the response is a ",(0,a.kt)("inlineCode",{parentName:"li"},"ReadResponse")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".isWriteResponses()")," - to check that the response is either of type ",(0,a.kt)("inlineCode",{parentName:"li"},"WriteResponses"))),(0,a.kt)("p",null,"Then, depending on the corresponding request, you can parse the response or handle the error."),(0,a.kt)("h3",{id:"readresponse"},(0,a.kt)("inlineCode",{parentName:"h3"},"ReadResponse")),(0,a.kt)("p",null,"Successful retrieve requests have the type ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadResponse"),", which contains the HTTP code, the raw body, and the constructor of the entity that was parsed from the response.\nTo work with an instance of the retrieved entity, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},".as")," method, which allows you to transform the raw data into an instance of an entity represented by the given entity API.\nNote, that the ",(0,a.kt)("inlineCode",{parentName:"p"},".as")," method transforms the raw data to an array of entities, even if the original request was a ",(0,a.kt)("inlineCode",{parentName:"p"},"GetByKeyRequestBuilder"),"."),(0,a.kt)("p",null,"In the example below, we combine a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"GetByKeyRequestBuilder"),"s into one ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request and execute it against a destination.\nIf one of the requests was unsuccessful, an error will be thrown.\nOtherwise, the responses are transformed into instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartnerAddress"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Destructure business partner service\nconst { batch, businessPartnerAddressApi } = businessPartnerService();\n\nasync function getAddressesByIds(\n  ...retrieveRequests: GetByKeyRequestBuilder<BusinessPartnerAddress>[]\n): Promise<BusinessPartnerAddress[]> {\n  // Execute batch request combining multiple retrieve requests\n  const batchResponses = await batch(...retrieveRequests).execute(destination);\n\n  // Error handling\n  if (batchResponses.some(response => !response.isSuccess())) {\n    throw new Error('Some of the batch subrequests were not successful.');\n  }\n\n  return batchResponses.reduce(\n    (addresses: BusinessPartnerAddress[], response: BatchResponse) => {\n      if (response.isReadResponse()) {\n        // Transform response to an instance of BusinessPartnerAddress\n        const [address] = response.as(businessPartnerAddressApi);\n        addresses.push(address);\n      }\n      return addresses;\n    },\n    []\n  );\n}\n")),(0,a.kt)("h3",{id:"writeresponses"},(0,a.kt)("inlineCode",{parentName:"h3"},"WriteResponses")),(0,a.kt)("p",null,"Successful changeset requests can be cast to ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponses")," which contains all subresponses for the changeset request.\nThose responses can be accessed by ",(0,a.kt)("inlineCode",{parentName:"p"},".responses")," and have the type ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponse"),".\nEach ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponse")," contains the HTTP code and can contain the raw body and the constructor of the entity that was parsed from the response, depending on whether there was a body in the response.\nCreate and delete requests typically do not have a response body.\nTo work with an instance of an entity given in a ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponse"),", you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},".as")," method, which allows you to transform the raw string body into an instance of the given constructor.\nNote that the response may not exist, so you should only call this method if you know that there is data.\nTypically the HTTP code is a good indicator for this - ",(0,a.kt)("inlineCode",{parentName:"p"},"201 No Content")," probably won't have content.\nIf you are working with TypeScript you will have to tell the compiler, that the ",(0,a.kt)("inlineCode",{parentName:"p"},".as!")," method can be used here by adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"!"),".\nAlso note, that the response to a changeset can be an ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),".\nTherefore, it is crucial to check responses for success, before casting them to ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponses"),"."),(0,a.kt)("p",null,"In the example below, we combine a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateRequestBuilder"),"s into one ",(0,a.kt)("inlineCode",{parentName:"p"},"changeset")," and pass it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request, which we execute against a destination."),(0,a.kt)("p",null,"Once we execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request, we get a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"BatchResponse"),"s, which contains one response only."),(0,a.kt)("p",null,"If the request was unsuccessful, an error will be thrown.\nOtherwise, the subresponses are transformed into instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartnerAddress"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Destructure business partner service\nconst { batch, businessPartnerAddressApi, changeset } =\n  businessPartnerService();\n\nasync function updateAddresses(\n  ...updateRequests: UpdateRequestBuilder<BusinessPartnerAddress>\n): Promise<BusinessPartnerAddress[]> {\n  // Execute batch request with one changeset\n  const batchResponses = await batch(\n    // Combine update requests into one changeset\n    changeset(...updateRequests)\n  ).execute(destination);\n\n  // Get response for the changeset request\n  const changesetResponse = batchResponses[0];\n\n  if (changesetResponse.isWriteResponses()) {\n    return changesetResponse.responses.map(response =>\n      // Transform response to an instance of BusinessPartnerAddress\n      response.as!(BusinessPartnerAddress)\n    );\n  }\n\n  // Error handling\n  throw new Error('The changeset request was not successful.');\n}\n")),(0,a.kt)("h3",{id:"errorresponse"},(0,a.kt)("inlineCode",{parentName:"h3"},"ErrorResponse")),(0,a.kt)("p",null,"Unsuccessful retrieve requests and changesets are reflected as ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),"s in the response.\nThose responses have an ",(0,a.kt)("inlineCode",{parentName:"p"},"httpCode")," (a number) and a ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," (a JSON object).")),(0,a.kt)(i.Z,{value:"deprecated",mdxType:"TabItem"},(0,a.kt)("p",null,"To determine if a request was successful use ",(0,a.kt)("inlineCode",{parentName:"p"},".isSuccess()"),".\nThen, depending on the corresponding request, you can parse the response or handle the error."),(0,a.kt)("h3",{id:"readresponse-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"ReadResponse")),(0,a.kt)("p",null,"Successful retrieve requests can be cast to ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadResponse"),", which contains the HTTP code, the raw body, and the constructor of the entity that was parsed from the response.\nTo work with an instance of the retrieved entity, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},".as")," method, which allows you to transform the raw data into an instance of the given constructor.\nNote, that the ",(0,a.kt)("inlineCode",{parentName:"p"},".as")," method transforms the raw data to an array of entities, even if the original request was a ",(0,a.kt)("inlineCode",{parentName:"p"},"GetByKeyRequestBuilder"),".\nAlso note, that retrieve responses can be ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),"s.\nTherefore, it is crucial to check responses for success, before casting them to ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadResponse"),"."),(0,a.kt)("p",null,"In the example below, we combine a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"GetByKeyRequestBuilder"),"s into one ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request and execute it against a destination.\nIf one of the requests was unsuccessful, an error will be thrown.\nOtherwise, the responses are transformed into instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartnerAddress"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async function getAddressesByIds(\n  ...retrieveRequests: GetByKeyRequestBuilder<BusinessPartnerAddress>[]\n): Promise<BusinessPartnerAddress[]> {\n  // Execute batch request combining multiple retrieve requests\n  const batchResponses = await batch(...retrieveRequests).execute(destination);\n\n  // Error handling\n  if (batchResponses.some(response => !response.isSuccess())) {\n    throw new Error('Some of the batch subrequests were not successful.');\n  }\n\n  return batchResponses.reduce(\n    (addresses: BusinessPartnerAddress[], response: BatchResponse) => [\n      ...addresses,\n      // Transform response to an instance of BusinessPartnerAddress\n      ...(response as ReadResponse).as(BusinessPartnerAddress)\n    ],\n    []\n  );\n}\n")),(0,a.kt)("h3",{id:"writeresponses-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"WriteResponses")),(0,a.kt)("p",null,"Successful changeset requests can be cast to ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponses")," which contains all subresponses for the changeset request.\nThose responses can be accessed by ",(0,a.kt)("inlineCode",{parentName:"p"},".responses")," and have the type ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponse"),".\nEach ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponse")," contains the HTTP code and can contain the raw body and the constructor of the entity that was parsed from the response, depending on whether there was a body in the response.\nCreate and delete requests typically do not have a response body.\nTo work with an instance of an entity given in a ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponse"),", you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},".as")," method, which allows you to transform the raw string body into an instance of the given constructor.\nNote that the response may not exist, so you should only call this method if you know that there is data.\nTypically the HTTP code is a good indicator for this - ",(0,a.kt)("inlineCode",{parentName:"p"},"201 No Content")," probably won't have content.\nIf you are working with TypeScript you will have to tell the compiler, that the ",(0,a.kt)("inlineCode",{parentName:"p"},".as!")," method can be used here by adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"!"),".\nAlso note, that the response to a changeset can be an ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),".\nTherefore, it is crucial to check responses for success, before casting them to ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponses"),"."),(0,a.kt)("p",null,"In the example below, we combine a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateRequestBuilder"),"s into one ",(0,a.kt)("inlineCode",{parentName:"p"},"changeset")," and pass it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request, which we execute against a destination."),(0,a.kt)("p",null,"Once we execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request, we get a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"BatchResponse"),"s, which contains one response only."),(0,a.kt)("p",null,"If the request was unsuccessful, an error will be thrown.\nOtherwise, the subresponses are transformed into instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartnerAddress"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async function updateAddresses(\n  ...updateRequests: UpdateRequestBuilder<BusinessPartnerAddress>\n): Promise<BusinessPartnerAddress[]> {\n  // Execute batch request with one changeset\n  const batchResponses = await batch(\n    // Combine update requests into one changeset\n    changeset(...updateRequests)\n  ).execute(destination);\n\n  // Get response for the changeset request\n  const changesetResponse = batchResponses[0];\n\n  // Error handling\n  if (!changesetResponse.isSuccess()) {\n    throw new Error('The changeset request was not successful.');\n  }\n\n  return changesetResponse.responses.map(response =>\n    // Transform response to an instance of BusinessPartnerAddress\n    response.as!(BusinessPartnerAddress)\n  );\n}\n")),(0,a.kt)("h3",{id:"errorresponse-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"ErrorResponse")),(0,a.kt)("p",null,"Unsuccessful retrieve requests and changesets are reflected as ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),"s in the response.\nThose responses have an ",(0,a.kt)("inlineCode",{parentName:"p"},"httpCode")," (a number) and a ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," (a JSON object)."))))}f.isMDXComponent=!0}}]);