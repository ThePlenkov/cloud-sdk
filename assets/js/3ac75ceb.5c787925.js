"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2499],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,p=m["".concat(c,".").concat(f)]||m[f]||l[f]||i;return n?r.createElement(p,s(s({ref:t},d),{},{components:n})):r.createElement(p,s({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44971:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={},c=void 0,u={unversionedId:"js/features/odata/common/entity/custom-fields",id:"js/features/odata/common/entity/custom-fields",title:"custom-fields",description:"In the real world, OData service implementations can differ from their original service specifications.",source:"@site/docs/js/features/odata/common/entity/custom-fields.mdx",sourceDirName:"js/features/odata/common/entity",slug:"/js/features/odata/common/entity/custom-fields",permalink:"/cloud-sdk/docs/js/features/odata/common/entity/custom-fields",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/entity/custom-fields.mdx",tags:[],version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1651221783,formattedLastUpdatedAt:"4/29/2022",frontMatter:{}},d={},l=[],m={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the real world, OData service implementations can differ from their original service specifications.\nThis can happen due to incorrect specifications or customizations of the service.\nThe SAP Cloud SDK supports custom fields on your entities, that are not covered by the specification the according service is based on."),(0,i.kt)("p",null,"You can set custom fields on an entity through the ",(0,i.kt)("inlineCode",{parentName:"p"},".setCustomFields")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".setCustomField")," methods.\nSetting custom fields with existing keys overrides the existing fields.\nNon-existent fields are added without removing other fields."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// add custom fields to the existing fields\nbusinessPartner.setCustomFields({\n  myCustomField: 'this is custom'\n});\n\n// add specific custom field\nbusinessPartner.setCustomField('myCustomField', 'this is custom');\n")),(0,i.kt)("p",null,"You can also access existing fields using the ",(0,i.kt)("inlineCode",{parentName:"p"},".getCustomField")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".getCustomFields")," methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// get all custom fields\nconst customFields = businessPartner.getCustomFields(); // { myCustomField: 'this is custom' }\n\n// get specific custom field\nconst customFields: = businessPartner.getCustomField(); // 'this is custom'\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Custom fields are not serialized or deserialized")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As custom fields are not defined through the service specification, the type of their values is unknown.\nTherefore, custom fields are never automatically serialized or deserialized.\nIf you are using custom fields, you might have to take care of serialization on your own."))))}f.isMDXComponent=!0}}]);