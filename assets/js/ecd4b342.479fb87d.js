"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7128],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,b=p["".concat(u,".").concat(m)]||p[m]||c[m]||s;return t?r.createElement(b,o(o({ref:n},d),{},{components:t})):r.createElement(b,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(87462),a=t(67294),s=t(72389),o=t(5979),i=t(86010),u="tabItem_LplD";function l(e){var n,t,s,l=e.lazy,d=e.block,c=e.defaultValue,p=e.values,m=e.groupId,b=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,o.lx)(v,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(n=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(s=f[0])?void 0:s.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),N=g.tabGroupChoices,k=g.setTabGroupChoices,P=(0,a.useState)(h),w=P[0],A=P[1],T=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=N[m];null!=D&&D!==w&&v.some((function(e){return e.value===D}))&&A(D)}var E=function(e){var n=e.currentTarget,t=T.indexOf(n),r=v[t].value;r!==w&&(x(n),A(r),null!=m&&k(m,r))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},b)},v.map((function(e){var n=e.value,t=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:E,onClick:E},s,{className:(0,i.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function d(e){var n=(0,s.Z)();return a.createElement(l,(0,r.Z)({key:String(n)},e))}},81054:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=t(87462),a=t(63366),s=(t(67294),t(3905)),o=t(9877),i=t(58215),u=["components"],l={},d=void 0,c={unversionedId:"js/features/odata/common/operations/deep-create",id:"js/features/odata/common/operations/deep-create",title:"deep-create",description:"It is also possible to create an entity together with related entities in a single request:",source:"@site/docs/js/features/odata/common/operations/deep-create.mdx",sourceDirName:"js/features/odata/common/operations",slug:"/js/features/odata/common/operations/deep-create",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/deep-create",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/operations/deep-create.mdx",tags:[],version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1651221783,formattedLastUpdatedAt:"4/29/2022",frontMatter:{}},p={},m=[],b={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,u);return(0,s.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"It is also possible to create an entity together with related entities in a single request:"),(0,s.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"major",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// build a business partner instance with one linked address\nconst { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\nconst businessPartner = businessPartnerApi\n  .entityBuilder()\n  .firstName('John')\n  .lastName('Doe')\n  .businessPartnerCategory('1')\n  .toBusinessPartnerAddress([\n    businessPartnerAddressApi\n      .entityBuilder()\n      .country('DE')\n      .postalCode('14469')\n      .cityName('Potsdam')\n      .streetName('Konrad-Zuse-Ring')\n      .houseNumber('10')\n      .build()\n  ])\n  .build();\n\n// execute the create request\nbusinessPartnerApi\n  .requestBuilder()\n  .create(businessPartner)\n  .execute(myDestination);\n"))),(0,s.kt)(i.Z,{value:"deprecated",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// build a business partner instance with one linked address\nconst businessPartner = BusinessPartner.builder()\n  .firstName('John')\n  .lastName('Doe')\n  .businessPartnerCategory('1')\n  .toBusinessPartnerAddress([\n    BusinessPartnerAddress.builder()\n      .country('DE')\n      .postalCode('14469')\n      .cityName('Potsdam')\n      .streetName('Konrad-Zuse-Ring')\n      .houseNumber('10')\n      .build()\n  ])\n  .build();\n\n// execute the create request\nBusinessPartner.requestBuilder().create(businessPartner).execute(myDestination);\n")))),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Troubleshooting")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"When you try the example code above for testing the ",(0,s.kt)("inlineCode",{parentName:"p"},"deep creat")," feature, you might see some errors like ",(0,s.kt)("inlineCode",{parentName:"p"},'"operation module BUA_CHECK_ADDRESS_VALIDITY_ALL; a check table is missing"'),".\nTypically, it can happen if you are using a new system with a default configuration.\nYou need to configure an ",(0,s.kt)("inlineCode",{parentName:"p"},"address usage")," field as shown in the example below to fix it."))),(0,s.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"major",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi, businessPartnerAddressApi, buPaAddressUsageApi } =\n  businessPartnerService();\nbusinessPartnerApi\n  .entityBuilder()\n  .firstName('John')\n  .lastName('Doe')\n  .businessPartnerCategory('1')\n  .toBusinessPartnerAddress([\n    businessPartnerAddressApi\n      .entityBuilder()\n      .country('DE')\n      .postalCode('14469')\n      .cityName('Potsdam')\n      .streetName('Konrad-Zuse-Ring')\n      .houseNumber('10')\n      // additional code starts\n      .toAddressUsage([\n        buPaAddressUsageApi.entityBuilder().addressUsage('XXDEFAULT').build()\n      ])\n      .build()\n  ])\n  .build();\n"))),(0,s.kt)(i.Z,{value:"deprecated",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const businessPartner = BusinessPartner.builder()\n  .firstName('John')\n  .lastName('Doe')\n  .businessPartnerCategory('1')\n  .toBusinessPartnerAddress([\n    BusinessPartnerAddress.builder()\n      .country('DE')\n      .postalCode('14469')\n      .cityName('Potsdam')\n      .streetName('Konrad-Zuse-Ring')\n      .houseNumber('10')\n      // additional code starts\n      .toAddressUsage([\n        BuPaAddressUsage.builder().addressUsage('XXDEFAULT').build()\n      ])\n      .build()\n  ])\n  .build();\n")))),(0,s.kt)("p",null,"You can also create an entity ",(0,s.kt)("inlineCode",{parentName:"p"},"asChildOf")," another entity."))}f.isMDXComponent=!0}}]);