"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[915],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=c(t),m=a,f=l["".concat(u,".").concat(m)]||l[m]||d[m]||o;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=l;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},93154:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],i={},u=void 0,c={unversionedId:"features/odata/common/operations/deep-create",id:"features/odata/common/operations/deep-create",title:"deep-create",description:"It is also possible to create an entity together with related entities in a single request:",source:"@site/docs-js/features/odata/common/operations/deep-create.mdx",sourceDirName:"features/odata/common/operations",slug:"/features/odata/common/operations/deep-create",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/deep-create",draft:!1,tags:[],version:"current",frontMatter:{}},p={},d=[],l={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is also possible to create an entity together with related entities in a single request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// build a business partner instance with one linked address\nconst { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\nconst businessPartner = businessPartnerApi\n  .entityBuilder()\n  .firstName('John')\n  .lastName('Doe')\n  .businessPartnerCategory('1')\n  .toBusinessPartnerAddress([\n    businessPartnerAddressApi\n      .entityBuilder()\n      .country('DE')\n      .postalCode('14469')\n      .cityName('Potsdam')\n      .streetName('Konrad-Zuse-Ring')\n      .houseNumber('10')\n      .build()\n  ])\n  .build();\n\n// execute the create request\nbusinessPartnerApi\n  .requestBuilder()\n  .create(businessPartner)\n  .execute(myDestination);\n")),(0,o.kt)("admonition",{title:"Troubleshooting",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When you try the example code above for testing the ",(0,o.kt)("inlineCode",{parentName:"p"},"deep create")," feature, you might see some errors like ",(0,o.kt)("inlineCode",{parentName:"p"},'"operation module BUA_CHECK_ADDRESS_VALIDITY_ALL; a check table is missing"'),".\nTypically, it can happen if you are using a new system with a default configuration.\nYou need to configure an ",(0,o.kt)("inlineCode",{parentName:"p"},"address usage")," field as shown in the example below to fix it.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi, businessPartnerAddressApi, buPaAddressUsageApi } =\n  businessPartnerService();\nbusinessPartnerApi\n  .entityBuilder()\n  .firstName('John')\n  .lastName('Doe')\n  .businessPartnerCategory('1')\n  .toBusinessPartnerAddress([\n    businessPartnerAddressApi\n      .entityBuilder()\n      .country('DE')\n      .postalCode('14469')\n      .cityName('Potsdam')\n      .streetName('Konrad-Zuse-Ring')\n      .houseNumber('10')\n      // additional code starts\n      .toAddressUsage([\n        buPaAddressUsageApi.entityBuilder().addressUsage('XXDEFAULT').build()\n      ])\n      .build()\n  ])\n  .build();\n")),(0,o.kt)("p",null,"You can also create an entity ",(0,o.kt)("inlineCode",{parentName:"p"},"asChildOf")," another entity."))}m.isMDXComponent=!0}}]);