"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8687],{18918:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>h,default:()=>x,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var t=i(74848),o=i(28453);const a=i.p+"assets/images/imports-in-v1-d998d7d6ee717529b1c0e6713066b542.png",s=i.p+"assets/images/imports-in-v2-31b49494001a1534bb902def22e94b91.png",r=i.p+"assets/images/ecma2019-8447f2de225b029f3e131a9a5a7db892.png",d=i.p+"assets/images/es5-27a4c7929b0768743fe63c49e0447be1.png",c=i.p+"assets/images/temporal-da595c2261bb60074866c9d0d4aa7b44.png",l={},h="Announcing Version 2 Beta",p={id:"announcing-version-2-beta",title:"Announcing Version 2 Beta",description:"What Is Included in the Beta?",source:"@site/docs-js_versioned_docs/version-v1/announcing-version-2-beta.mdx",sourceDirName:".",slug:"/announcing-version-2-beta",permalink:"/cloud-sdk/docs/js/v1/announcing-version-2-beta",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/announcing-version-2-beta.mdx",tags:[],version:"v1",frontMatter:{},sidebar:"docsJsSidebar",previous:{title:"Announcing Version 2.x",permalink:"/cloud-sdk/docs/js/v1/announcing-version-2"},next:{title:"SAP Cloud SDK & CAP",permalink:"/cloud-sdk/docs/js/v1/video/calm"}},u={},m=[{value:"What Is Included in the Beta?",id:"what-is-included-in-the-beta",level:2},{value:"Split Packages and Export Only the Public Interface",id:"split-packages-and-export-only-the-public-interface",level:3},{value:"Increase Compilation Target to ECMAScript 2019",id:"increase-compilation-target-to-ecmascript-2019",level:3},{value:"Remove Deprecated Functionality",id:"remove-deprecated-functionality",level:3},{value:"Remove Generator Options",id:"remove-generator-options",level:3},{value:"Introduce Customizable (De-)Serialization",id:"introduce-customizable-de-serialization",level:3},{value:"How Can I Use It?",id:"how-can-i-use-it",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"announcing-version-2-beta",children:"Announcing Version 2 Beta"}),"\n",(0,t.jsx)(n.h2,{id:"what-is-included-in-the-beta",children:"What Is Included in the Beta?"}),"\n",(0,t.jsx)(n.p,{children:"We announced four noteworthy changes for our upcoming version increase:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Split packages and export only the public interface"}),"\n",(0,t.jsx)(n.li,{children:"Increase compilation target to ECMAScript 2019"}),"\n",(0,t.jsx)(n.li,{children:"Remove deprecated functionality"}),"\n",(0,t.jsx)(n.li,{children:"Remove generator options"}),"\n",(0,t.jsx)(n.li,{children:"Introduce customizable (de-)serialization"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The beta already provides many improvements, and we would love for you to try them.\nLet's take a look what was achieved so far."}),"\n",(0,t.jsx)(n.h3,{id:"split-packages-and-export-only-the-public-interface",children:"Split Packages and Export Only the Public Interface"}),"\n",(0,t.jsxs)(n.p,{children:["There is no more ",(0,t.jsx)(n.code,{children:"@sap-cloud-sdk/core"})," package anymore.\nInstead, there are the following packages:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@sap-cloud-sdk/connectivity"})," (e.g. ",(0,t.jsx)(n.code,{children:"getDestination()"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@sap-cloud-sdk/http-client"})," (e.g. ",(0,t.jsx)(n.code,{children:"executeHttpRequest()"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@sap-cloud-sdk/openapi"}),", ",(0,t.jsx)(n.code,{children:"@sap-cloud-sdk/odata-v2"})," and ",(0,t.jsx)(n.code,{children:"@sap-cloud-sdk/odata-v4"})," (e.g. filter functions, request builder)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Internal functions are not exported in our new packages to make it easier to find the right function for your use case.\nWe expose internals via a special import path, but offer no stability guarantee for this internal interface."}),"\n",(0,t.jsx)(n.p,{children:"This means you will see this:"}),"\n",(0,t.jsx)("img",{style:{maxWidth:"75%",height:"auto"},src:s,alt:"autocomplete for import from core"}),"\n",(0,t.jsx)(n.p,{children:"rather than this:"}),"\n",(0,t.jsx)("img",{style:{maxWidth:"75%",height:"auto"},src:a,alt:"autocomplete for import from odata-v2"}),"\n",(0,t.jsx)(n.h3,{id:"increase-compilation-target-to-ecmascript-2019",children:"Increase Compilation Target to ECMAScript 2019"}),"\n",(0,t.jsx)(n.p,{children:"This will only affect you if you run your application in a legacy environment.\nIt makes the compiled JavaScript code a little cleaner, as in this example."}),"\n",(0,t.jsx)(n.p,{children:"Old:"}),"\n",(0,t.jsx)("img",{style:{maxWidth:"75%",height:"auto"},src:d,alt:"file-generator in ES5"}),"\n",(0,t.jsx)(n.p,{children:"New:"}),"\n",(0,t.jsx)("img",{style:{maxWidth:"75%",height:"auto"},src:r,alt:"file-generator in ECMAScript 2019"}),"\n",(0,t.jsx)(n.p,{children:"The differences are minor, but it saves five lines of code in this file alone."}),"\n",(0,t.jsx)(n.h3,{id:"remove-deprecated-functionality",children:"Remove Deprecated Functionality"}),"\n",(0,t.jsx)(n.p,{children:"We hope you replaced deprecated functionality already.\nIf not, our upgrade guide lists all removed methods and their replacement.\nIn total, we removed a bit more than 100 deprecated methods."}),"\n",(0,t.jsx)(n.h3,{id:"remove-generator-options",children:"Remove Generator Options"}),"\n",(0,t.jsx)(n.p,{children:"The following generator options are removed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"generateTypedocJson"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"aggregatorDirectoryName"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"aggregatorNpmPackageName"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.code,{children:"generateTypedocJson"})," option, you can add ",(0,t.jsx)(n.code,{children:"typedoc"})," or other documentation lib as a dependency to your ",(0,t.jsx)(n.code,{children:"package.json"})," by your own.\nThe options ",(0,t.jsx)(n.code,{children:"aggregatorDirectoryName"})," and ",(0,t.jsx)(n.code,{children:"aggregatorNpmPackageName"})," are not useful from the user perspective."]}),"\n",(0,t.jsx)(n.h3,{id:"introduce-customizable-de-serialization",children:"Introduce Customizable (De-)Serialization"}),"\n",(0,t.jsxs)(n.p,{children:["We added options to dynamically change the types in your entities.\nYou can now define custom (de-)serializers - functions to convert data to and from the types you need.\nHere is an example for (de-)serializers to convert ",(0,t.jsx)(n.code,{children:"Edm.DateTime"}),", ",(0,t.jsx)(n.code,{children:"Edm.DateTimeOffset"})," and ",(0,t.jsx)(n.code,{children:"Edm.Time"})," to/from Temporal:"]}),"\n",(0,t.jsx)("img",{style:{maxWidth:"75%",height:"auto"},src:c,alt:"example temporal serializer"}),"\n",(0,t.jsxs)(n.p,{children:["Intrigued?\nYou can get the Temporal-based (de-)serializers via npm (",(0,t.jsx)(n.code,{children:"npm install @sap-cloud-sdk/temporal-de-serializers@beta"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"how-can-i-use-it",children:"How Can I Use It?"}),"\n",(0,t.jsxs)(n.p,{children:["We publish the beta version on ",(0,t.jsx)(n.code,{children:"npm"}),".\nYou can install it by adding ",(0,t.jsx)(n.code,{children:"@beta"})," after the package name (e.g. ",(0,t.jsx)(n.code,{children:"npm install @sap-cloud-sdk/generator@beta"}),")."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"If you use an OData or OpenAPI client, make sure it was generated with the same version as your other SAP Cloud SDK dependencies.\nWe do not provide pregenerated clients for beta versions."})}),"\n",(0,t.jsxs)(n.p,{children:["Check the ",(0,t.jsx)(n.a,{href:"/cloud-sdk/docs/js/v1/guides/upgrade-to-version-2",children:"upgrade guide"})," for detailed instructions how to upgrade."]})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(96540);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);