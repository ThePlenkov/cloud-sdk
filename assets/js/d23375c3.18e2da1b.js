"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[640],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return v}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),v=r,m=p["".concat(s,".").concat(v)]||p[v]||u[v]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(87462),r=a(67294),o=a(72389),i=a(5979),l=a(86010),s="tabItem_LplD";function d(e){var t,a,o,d=e.lazy,c=e.block,u=e.defaultValue,p=e.values,v=e.groupId,m=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===u?u:null!=(t=null!=u?u:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),y=b.tabGroupChoices,N=b.setTabGroupChoices,w=(0,r.useState)(k),S=w[0],x=w[1],P=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var j=y[v];null!=j&&j!==S&&f.some((function(e){return e.value===j}))&&x(j)}var A=function(e){var t=e.currentTarget,a=P.indexOf(t),n=f[a].value;n!==S&&(T(t),x(n),null!=v&&N(v,n))},O=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=P.indexOf(e.currentTarget)+1;a=P[n]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;a=P[r]||P[P.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},m)},f.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return P.push(e)},onKeyDown:O,onFocus:A,onClick:A},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":S===t})}),null!=a?a:t)}))),d?(0,r.cloneElement)(h.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function c(e){var t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},15355:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return v}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(9877),l=a(58215),s=["components"],d={id:"getting-started",title:"Quick Start",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Quick Start",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},c=void 0,u={unversionedId:"overview/getting-started",id:"overview/getting-started",title:"Quick Start",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",source:"@site/docs/overview/getting-started.mdx",sourceDirName:"overview",slug:"/overview/getting-started",permalink:"/cloud-sdk/docs/overview/getting-started",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/overview/getting-started.mdx",tags:[],version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1651221783,formattedLastUpdatedAt:"4/29/2022",frontMatter:{id:"getting-started",title:"Quick Start",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Quick Start",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"someSidebar",previous:{title:"Feature Matrix",permalink:"/cloud-sdk/docs/overview/cloud-sdk-feature-matrix"},next:{title:"Benefits",permalink:"/cloud-sdk/docs/overview/benefits"}},p={},v=[{value:"Create Your First App",id:"create-your-first-app",level:2},{value:"Hello, World!",id:"hello-world",level:2},{value:"Getting Started - JavaScript",id:"getting-started---javascript",level:3},{value:"Getting Started - Java",id:"getting-started---java",level:3},{value:"Mock and Test Servers for OData and SAP S/4HANA",id:"mock-and-test-servers-for-odata-and-sap-s4hana",level:3}],m={toc:v};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-your-first-app"},"Create Your First App"),(0,o.kt)("p",null,"You can choose between ",(0,o.kt)("inlineCode",{parentName:"p"},"JavaScript")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Java")," when developing with the SAP Cloud SDK.\nCheck these two examples to initialize an application for your favorite development environment."),(0,o.kt)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure you have the latest stable version of ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," installed.\nThis example assumes you're running macOS or Linux.\nCheck out our detailed ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/getting-started"},"getting started guide")," for more information."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g @sap-cloud-sdk/cli\n\n$ sap-cloud-sdk init my-sdk-project\n\n+---------------------------------------------------------------+\n| \u2705 Init finished successfully.                                |\n|                                                               |\n| \ud83d\ude80 Next steps:                                                |\n| - Run the application locally (`npm run start:dev`)           |\n| - Deploy your application (`npm run deploy`)                  |\n|                                                               |\n| \ud83d\udd28 Consider setting up Jenkins to continuously build your app |\n| Use `sap-cloud-sdk add-cx-server` to create the setup script  |\n+---------------------------------------------------------------+\n"))),(0,o.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure your have ",(0,o.kt)("a",{parentName:"p",href:"https://adoptopenjdk.net/"},"Java 8")," and ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/install.html"},"maven")," installed.\nThis example assumes you're running macOS or Linux.\nCheck our detailed ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/getting-started"},"getting started")," guide for more information."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ mvn archetype:generate "-DarchetypeGroupId=com.sap.cloud.sdk.archetypes"\\\n"-DarchetypeArtifactId=scp-cf-tomee" "-DarchetypeVersion=RELEASE"\n')))),(0,o.kt)("h2",{id:"hello-world"},"Hello, World!"),(0,o.kt)("p",null,"This example is not a classical ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World"),".\nThere is much more to it than just bootstrapping a starter application.\nThe SAP Cloud SDK is a complex and flexible library addressing a vast range of use-cases.\nEach of them would require a ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World")," of its own, and we have them!"),(0,o.kt)("p",null,"To continue discovering the SAP Cloud SDK for your favorite programming language check the respective getting started guides and comprehensive tutorials for multiple use cases."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is no full feature parity between JavaScript and Java libraries.\nPlease, review the respective documentation sections to find out more."))),(0,o.kt)("h3",{id:"getting-started---javascript"},"Getting Started - JavaScript"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../js/getting-started"},"A comprehensive getting started guide for JavaScript developers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk&tag=topic:javascript"},"Tutorials covering SAP Cloud SDK for JavaScript on the SAP Developers portal"))),(0,o.kt)("h3",{id:"getting-started---java"},"Getting Started - Java"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../java/getting-started"},"A comprehensive getting started guide for Java developers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk&tag=topic:java"},"Tutorials covering SAP Cloud SDK for Java on the SAP Developers portal"))),(0,o.kt)("h3",{id:"mock-and-test-servers-for-odata-and-sap-s4hana"},"Mock and Test Servers for OData and SAP S/4HANA"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We created a ",(0,o.kt)("a",{parentName:"li",href:"https://github.wdf.sap.corp/MA/book-bupa-mock-odata"},"service")," that mocks SAP S/4HANA Business Partner service. You can host it on your own machine to practice with the SAP Cloud SDK."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://services.odata.org/V4/TripPinServiceRW"},"TripPin reference service")," used in official OData v4 documentation to provide ",(0,o.kt)("a",{parentName:"li",href:"https://www.odata.org/getting-started/basic-tutorial/"},"tutorials and learning materials"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://services.odata.org/V4/OData/"},"Northwind reference service")," has a complex data model allowing to try out advanced OData v4 features with the SAP Cloud SDK.")))}h.isMDXComponent=!0}}]);