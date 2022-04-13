"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2422],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(87462),a=t(67294),o=t(72389),s=t(29548),u=t(86010),l="tabItem_LplD";function i(e){var n,t,o,i=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,s.lx)(b,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,s.UB)(),k=g.tabGroupChoices,w=g.setTabGroupChoices,T=(0,a.useState)(h),x=T[0],O=T[1],P=[],N=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=k[m];null!=j&&j!==x&&b.some((function(e){return e.value===j}))&&O(j)}var E=function(e){var n=e.currentTarget,t=P.indexOf(n),r=b[t].value;r!==x&&(N(n),O(r),null!=m&&w(m,r))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=P.indexOf(e.currentTarget)+1;t=P[r]||P[0];break;case"ArrowLeft":var a=P.indexOf(e.currentTarget)-1;t=P[a]||P[P.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return P.push(e)},onKeyDown:D,onFocus:E,onClick:E},o,{className:(0,u.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function c(e){var n=(0,o.Z)();return a.createElement(i,(0,r.Z)({key:String(n)},e))}},53383:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=t(9877),u=t(58215),l=["components"],i={},c=void 0,d={unversionedId:"js/features/odata/common/operations/create-as-child-of",id:"js/features/odata/common/operations/create-as-child-of",title:"create-as-child-of",description:"Assume you have already created a business partner and would like to add a new address to it:",source:"@site/docs/js/features/odata/common/operations/create-as-child-of.mdx",sourceDirName:"js/features/odata/common/operations",slug:"/js/features/odata/common/operations/create-as-child-of",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/create-as-child-of",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/operations/create-as-child-of.mdx",tags:[],version:"current",lastUpdatedBy:"Tom Frenken",lastUpdatedAt:1649854765,formattedLastUpdatedAt:"4/13/2022",frontMatter:{}},p=[],m={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Assume you have already created a business partner and would like to add a new address to it:"),(0,o.kt)(s.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\nconst existingBusinessPartner = await businessPartnerApi\n  .requestBuilder()\n  .getByKey(myID)\n  .execute(myDestination);\n\nconst newAddress = businessPartnerAddressApi\n  .entityBuilder()\n  .country('DE')\n  .postalCode('14469')\n  .cityName('Potsdam')\n  .streetName('Konrad-Zuse-Ring')\n  .houseNumber('10')\n  .build();\n"))),(0,o.kt)(u.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const existingBusinessPartner = await BusinessPartner.requestBuilder()\n  .getByKey(myID)\n  .execute(myDestination);\n\nconst newAddress = new BusinessPartnerAddress()\n  .builder()\n  .country('DE')\n  .postalCode('14469')\n  .cityName('Potsdam')\n  .streetName('Konrad-Zuse-Ring')\n  .houseNumber('10')\n  .build();\n")))),(0,o.kt)("p",null,"This can be done by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"asChildOf")," method which allows creating an entity as a child of an existing entity.\nYou need to give the parent object and the field connecting the two entities:"),(0,o.kt)(s.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"businessPartnerAddressApi\n  .requestBuilder()\n  .create(newAddress)\n  .asChildOf(\n    existingBusinessPartner,\n    businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS\n  )\n  .execute(myDestination);\n"))),(0,o.kt)(u.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartnerAddress.requestBuilder()\n  .create(newAddress)\n  .asChildOf(\n    existingBusinessPartner,\n    BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS\n  )\n  .execute(myDestination);\n")))))}f.isMDXComponent=!0}}]);