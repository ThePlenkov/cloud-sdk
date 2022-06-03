"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9590],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,u=new Array(s);u[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var l=2;l<s;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},72360:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(67294),a=r(86010),s="tabItem_OmH5";function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,u),hidden:r},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(87462),a=r(67294),s=r(72389),u=r(67392),o=r(7094),i=r(12466),l=r(86010),c="tabList_uSqn",d="tabItem_LplD";function p(e){var t,r,s,p=e.lazy,m=e.block,f=e.defaultValue,b=e.values,v=e.groupId,y=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,u.l)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var q=null===f?f:null!=(t=null!=f?f:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(s=h[0])?void 0:s.props.value;if(null!==q&&!g.some((function(e){return e.value===q})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+q+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,O=(0,a.useState)(q),P=O[0],E=O[1],I=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var x=N[v];null!=x&&x!==P&&g.some((function(e){return e.value===x}))&&E(x)}var C=function(e){var t=e.currentTarget,r=I.indexOf(t),n=g[r].value;n!==P&&(j(t),E(n),null!=v&&T(v,n))},A=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=I.indexOf(e.currentTarget)+1;r=I[n]||I[0];break;case"ArrowLeft":var a=I.indexOf(e.currentTarget)-1;r=I[a]||I[I.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},y)},g.map((function(e){var t=e.value,r=e.label,s=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return I.push(e)},onKeyDown:A,onFocus:C,onClick:C},s,{className:(0,l.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":P===t})}),null!=r?r:t)}))),p?(0,a.cloneElement)(h.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function m(e){var t=(0,s.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},79862:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),u=r(9877),o=r(72360),i=["components"],l={},c=void 0,d={unversionedId:"js/features/odata/common/batch/retrieve-request",id:"js/features/odata/common/batch/retrieve-request",title:"retrieve-request",description:"A retrieve request represents an HTTP GET request.",source:"@site/docs/js/features/odata/common/batch/retrieve-request.mdx",sourceDirName:"js/features/odata/common/batch",slug:"/js/features/odata/common/batch/retrieve-request",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/retrieve-request",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/batch/retrieve-request.mdx",tags:[],version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1654265002,formattedLastUpdatedAt:"6/3/2022",frontMatter:{}},p={},m=[],f={toc:m};function b(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A retrieve request represents an HTTP ",(0,s.kt)("inlineCode",{parentName:"p"},"GET")," request.\nIn terms of the SAP Cloud SDK this includes all requests built by ",(0,s.kt)("a",{parentName:"p",href:"#getall-request-builder"},(0,s.kt)("inlineCode",{parentName:"a"},"GetAllRequestBuilder"),"s")," and ",(0,s.kt)("a",{parentName:"p",href:"#getbykey-request-builder"},(0,s.kt)("inlineCode",{parentName:"a"},"GetByKeyRequestBuilder"),"s"),"."),(0,s.kt)("p",null,"You can pass retrieve requests directly to the ",(0,s.kt)("inlineCode",{parentName:"p"},"batch")," function.\nOnce you execute a ",(0,s.kt)("inlineCode",{parentName:"p"},"batch")," request you get a list of ",(0,s.kt)("a",{parentName:"p",href:"#responses"},(0,s.kt)("inlineCode",{parentName:"a"},"BatchResponse"),"s"),".\nA ",(0,s.kt)("inlineCode",{parentName:"p"},"BatchResponse")," that corresponds with a retrieve request can either be a ",(0,s.kt)("inlineCode",{parentName:"p"},"ReadResponse")," or an ",(0,s.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),"."),(0,s.kt)("p",null,"In the example below, we map each given address ID to a ",(0,s.kt)("a",{parentName:"p",href:"#getbykey-request-builder"},(0,s.kt)("inlineCode",{parentName:"a"},"GetByKeyRequestBuilder")),".\nThese retrieve requests are combined into one ",(0,s.kt)("inlineCode",{parentName:"p"},"batch")," request and executed against a destination."),(0,s.kt)(u.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"major",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Destructure business partner service\nconst { batch, businessPartnerAddressApi } = businessPartnerService();\n\nasync function getAddressesByIds(\n  businessPartnerId: string,\n  addressIds: string[]\n): Promise<BusinessPartnerAddress[]> {\n  const retrieveRequests = addressIds.map(addressId =>\n    // Create get by key request\n    businessPartnerAddressApi\n      .requestBuilder()\n      .getByKey(businessPartnerId, addressId)\n  );\n\n  // Execute batch request combining multiple retrieve requests\n  const batchResponses = await batch(...retrieveRequests).execute(destination);\n\n  // ...\n}\n"))),(0,s.kt)(o.Z,{value:"deprecated",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async function getAddressesByIds(\n  businessPartnerId: string,\n  addressIds: string[]\n): Promise<BusinessPartnerAddress[]> {\n  const retrieveRequests = addressIds.map(addressId =>\n    // Create get by key request\n    BusinessPartnerAddress.requestBuilder().getByKey(\n      businessPartnerId,\n      addressId\n    )\n  );\n\n  // Execute batch request combining multiple retrieve requests\n  const batchResponses = await batch(...retrieveRequests).execute(destination);\n\n  // ...\n}\n")))))}b.isMDXComponent=!0}}]);