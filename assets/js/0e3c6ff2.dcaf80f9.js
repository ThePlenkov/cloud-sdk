"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1228],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return a?r.createElement(f,l(l({ref:t},d),{},{components:a})):r.createElement(f,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},75551:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));a(74866),a(85162);const o={id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for Java",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},l=void 0,i={unversionedId:"release-policy",id:"version-v4/release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for Java",description:"Planned Major Releases",source:"@site/docs-java_versioned_docs/version-v4/release-policy.mdx",sourceDirName:".",slug:"/release-policy",permalink:"/cloud-sdk/docs/java/v4/release-policy",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v4/release-policy.mdx",tags:[],version:"v4",frontMatter:{id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for Java",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},sidebar:"docsJavaSidebar",previous:{title:"Troubleshooting",permalink:"/cloud-sdk/docs/java/v4/troubleshooting-frequent-problems"},next:{title:"Release Notes",permalink:"/cloud-sdk/docs/java/v4/release-notes"}},s={},u=[{value:"Planned Major Releases",id:"planned-major-releases",level:2},{value:"Minor and Major Release Policy",id:"minor-and-major-release-policy",level:2},{value:"Minor Release Schedule",id:"minor-release-schedule",level:3},{value:"Major Release Schedule",id:"major-release-schedule",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Maintenance and Support",id:"maintenance-and-support",level:3},{value:"Support and Feedback",id:"support-and-feedback",level:2}],d={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"planned-major-releases"},"Planned Major Releases"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Release Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"End of Life"),(0,n.kt)("th",{parentName:"tr",align:null},"Upgrade guide"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.x"),(0,n.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2017, Sept"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2018, May"),(0,n.kt)("td",{parentName:"tr",align:null},"N/A")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2.x"),(0,n.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2018, May"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2020, February"),(0,n.kt)("td",{parentName:"tr",align:null},"N/A")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3.x"),(0,n.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2019, August"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023, March"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://developers.sap.com/tutorials/s4sdk-migration-v3.html"},"Link"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"4.x"),(0,n.kt)("td",{parentName:"tr",align:null},"Released GA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022, October"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2024, May"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"guides/4.0-upgrade"},"Link"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5.x"),(0,n.kt)("td",{parentName:"tr",align:null},"Planned"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023, December"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2025, March"),(0,n.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,n.kt)("h2",{id:"minor-and-major-release-policy"},"Minor and Major Release Policy"),(0,n.kt)("p",null,"We follow ",(0,n.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning")," for our releases."),(0,n.kt)("h3",{id:"minor-release-schedule"},"Minor Release Schedule"),(0,n.kt)("p",null,"Our regular ",(0,n.kt)("strong",{parentName:"p"},"minor version")," release happens every ",(0,n.kt)("strong",{parentName:"p"},"two weeks"),".\nIt includes new functionality, fixes, and maintenance updates that we communicate in the ",(0,n.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/v4/release-notes"},"release notes"),"."),(0,n.kt)("p",null,"We sometimes change our release frequency to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Provide a patch version to the latest minor release when a critical bug fix is necessary."),(0,n.kt)("li",{parentName:"ul"},"Accommodate a longer development cycle.\nWe can extend an interval between ",(0,n.kt)("strong",{parentName:"li"},"minor version")," releases.")),(0,n.kt)("admonition",{title:"Upgrading between minor releases",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Usually, an upgrade between minor releases does not involve any effort.\nAll the changes are incremental and backward compatible.\nWe do not remove any deprecated code before the next major release.")),(0,n.kt)("h3",{id:"major-release-schedule"},"Major Release Schedule"),(0,n.kt)("p",null,"We intend to release a new ",(0,n.kt)("strong",{parentName:"p"},"major version")," every ",(0,n.kt)("strong",{parentName:"p"},"12 months")," to introduce significant feature upgrades, refactor existing features, and clean up deprecated code."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Major version")," release intervals are indicative and may change."),(0,n.kt)("li",{parentName:"ul"},"After release of a new major version, the preceding version will be moved into maintenance mode before being marked as deprecated.\nIn maintenance mode, the version will still receive vulnerability fixes and major bug fixes.\nThe duration for which we grant support highly depends customer demand."),(0,n.kt)("li",{parentName:"ul"},"We will announce planned date and scope of the next ",(0,n.kt)("strong",{parentName:"li"},"major version")," release in this ",(0,n.kt)("a",{parentName:"li",href:"#planned-major-release-schedule"},"document")," and ",(0,n.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/java/v4/release-notes"},"release notes")," at least 3 months before the planned release date.")),(0,n.kt)("admonition",{title:"Upgrading between major versions",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Major releases include incompatible API changes.\nAn upgrade will usually involve a certain effort to make your code benefit from new APIs.\nWe intend to minimize this effort between adjacent major versions."),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"We provide a step-by-step upgrade guide for each major version."),(0,n.kt)("li",{parentName:"ul"},"Following the upgrade steps should take less than a day of development effort regardless of the project size."))),(0,n.kt)("h3",{id:"documentation"},"Documentation"),(0,n.kt)("p",null,"The documentation is always up to date with the ",(0,n.kt)("strong",{parentName:"p"},"latest major release"),".\nWe provide documentation for the two most recent major versions at the same time.\nUse the versioning toggle in the top right corner to switch between versions of the documentation."),(0,n.kt)("h3",{id:"maintenance-and-support"},"Maintenance and Support"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We provide new features and fixes ",(0,n.kt)("strong",{parentName:"li"},"only")," for the ",(0,n.kt)("strong",{parentName:"li"},"latest major release")," of the SAP Cloud SDK for Java."),(0,n.kt)("li",{parentName:"ul"},"We continue to ",(0,n.kt)("a",{parentName:"li",href:"/docs/overview/get-support"},"support")," customers using any version of the SAP Cloud SDK for Java.\nIn case the identified solution resides in upgrading to the newer version of the SAP Cloud SDK - it will be the default recommended solution.")),(0,n.kt)("admonition",{title:"Upgrade regularly",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We recommend upgrading to the latest major version immediately or at least not later than within 3 months after its release.\nThis guarantees:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"easy upgrade path"),(0,n.kt)("li",{parentName:"ul"},"compatibility to the latest features of SAP Business Technology Platform"),(0,n.kt)("li",{parentName:"ul"},"protection of your development process from disruptions in the future.\nUpgrading gets more complex if you have to migrate between more than one major version."))),(0,n.kt)("h2",{id:"support-and-feedback"},"Support and Feedback"),(0,n.kt)("p",null,"Let us know if you have any questions about our release policy.\nWe usually respond within one day.\nCheck our ",(0,n.kt)("a",{parentName:"p",href:"/docs/overview/get-support"},"support channels")," and choose the one working best for you."))}c.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(34334);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(87462),n=a(67294),o=a(34334),l=a(12466),i=a(76775),s=a(91980),u=a(67392),d=a(50012);function c(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:a,groupId:r}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),v=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var v=a(72389);const g="tabList__CuJ",k="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),r=u[a].value;r!==i&&(c(t),s(r))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}}}]);