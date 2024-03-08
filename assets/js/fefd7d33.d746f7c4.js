"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[233],{297:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=i(74848),t=i(28453);const a={title:"SAP Cloud SDK for JavaScript 2.x - Announce New Major Release",sidebar_label:"Announcing Version 2.x",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","version 2","announcement","upgrade","migration"]},s=void 0,l={id:"announcing-version-2",title:"SAP Cloud SDK for JavaScript 2.x - Announce New Major Release",description:"This announcement only applies to the SAP Cloud SDK for JavaScript.",source:"@site/docs-js_versioned_docs/version-v1/announcing-version-2.mdx",sourceDirName:".",slug:"/announcing-version-2",permalink:"/cloud-sdk/docs/js/v1/announcing-version-2",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/announcing-version-2.mdx",tags:[],version:"v1",frontMatter:{title:"SAP Cloud SDK for JavaScript 2.x - Announce New Major Release",sidebar_label:"Announcing Version 2.x",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","version 2","announcement","upgrade","migration"]},sidebar:"docsJsSidebar",previous:{title:"Release Policy",permalink:"/cloud-sdk/docs/js/v1/release-policy"},next:{title:"Announcing Version 2 Beta",permalink:"/cloud-sdk/docs/js/v1/announcing-version-2-beta"}},r={},d=[{value:"Timeline for the Version 2.x",id:"timeline-for-the-version-2x",level:2},{value:"What Will Change in Version 2?",id:"what-will-change-in-version-2",level:2},{value:"Replace <code>Moment.js</code> With a Flexible Middleware Approach for Deserialization",id:"replace-momentjs-with-a-flexible-middleware-approach-for-deserialization",level:3},{value:"Split Packages and Export Only the Public Interface",id:"split-packages-and-export-only-the-public-interface",level:3},{value:"Increase Compilation Target to ECMAScript 2019",id:"increase-compilation-target-to-ecmascript-2019",level:3},{value:"Remove Deprecated Functionality",id:"remove-deprecated-functionality",level:3},{value:"What Will the Upgrade Look Like?",id:"what-will-the-upgrade-look-like",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"relevance",type:"info",children:(0,o.jsx)(n.p,{children:"This announcement only applies to the SAP Cloud SDK for JavaScript.\nIt is not relevant for the SAP Cloud SDK for Java."})}),"\n",(0,o.jsx)(n.admonition,{title:"Release Policy",type:"tip",children:(0,o.jsxs)(n.p,{children:["Check our ",(0,o.jsx)(n.a,{href:"/cloud-sdk/docs/js/release-policy",children:"general release policy"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"timeline-for-the-version-2x",children:"Timeline for the Version 2.x"}),"\n",(0,o.jsx)(n.p,{children:"The planned timeline looks as follows:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"September/October: Start of development"}),"\n",(0,o.jsx)(n.li,{children:"November: Publish beta versions and start of feedback cycle"}),"\n",(0,o.jsx)(n.li,{children:"December: Publish release candidate"}),"\n",(0,o.jsx)(n.li,{children:"January 2022: Release of SAP Cloud SDK 2.0.0"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"We will continuously publish beta versions and would appreciate feedback from early adopters."}),"\n",(0,o.jsx)(n.li,{children:"Constructive suggestions will be included in the ongoing beta releases."}),"\n",(0,o.jsxs)(n.li,{children:["Once the ",(0,o.jsx)(n.a,{href:"#what-will-change-in-version-2",children:"scope of version 2.x"})," is implemented, a release candidate will be published for end-to-end evaluation."]}),"\n",(0,o.jsx)(n.li,{children:"The final release will happen after the evaluation of the release candidate is completed."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"During development time, we may postpone changes that have a workaround in version 1.x or are not time-critical.\nImportant and time-critical issues will be resolved within our usual SLA."})}),"\n",(0,o.jsx)(n.h2,{id:"what-will-change-in-version-2",children:"What Will Change in Version 2?"}),"\n",(0,o.jsx)(n.p,{children:"The planned list of changes is:"}),"\n",(0,o.jsxs)(n.h3,{id:"replace-momentjs-with-a-flexible-middleware-approach-for-deserialization",children:["Replace ",(0,o.jsx)(n.code,{children:"Moment.js"})," With a Flexible Middleware Approach for Deserialization"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Moment.js"})," used to be somewhat of a standard for JavaScript date handling, but is now in ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/moment#project-status",children:"maintenance mode"}),".\nIt is also a rather large dependency and not optimized for tree shaking.\nWe will remove the direct dependency to ",(0,o.jsx)(n.code,{children:"Moment.js"})," and allow you to choose a middleware that suits your project.\nWe will provide a few popular options including a ",(0,o.jsx)(n.code,{children:"Moment.js"})," - based middleware for the easiest possible migration.\nThis gives you flexibility while reducing package size dramatically."]}),"\n",(0,o.jsx)(n.h3,{id:"split-packages-and-export-only-the-public-interface",children:"Split Packages and Export Only the Public Interface"}),"\n",(0,o.jsx)(n.p,{children:"The SAP Cloud SDK for JavaScript exports many functions that are used across our packages, but are not supposed to be part of the public interface.\nWe will clean up these exports and are expecting a better experience when using IntelliSense or similar auto-completion tools.\nAs long as you don't use undocumented methods, this change should not need any changes on your side."}),"\n",(0,o.jsx)(n.h3,{id:"increase-compilation-target-to-ecmascript-2019",children:"Increase Compilation Target to ECMAScript 2019"}),"\n",(0,o.jsxs)(n.p,{children:["We are currently compiling to meet the ECMAScript 5 standard.\nThis is not needed anymore as ",(0,o.jsx)(n.code,{children:"Node.js"})," fully supports ECMAScript 2019 in both the Maintenance LTS (v12) and Active LTS (v14).\nWe expect a reduction in package size and a slight performance improvement.\nNo changes to your projects will be necessary unless it depends on ECMAScript 5 compatibility."]}),"\n",(0,o.jsx)(n.h3,{id:"remove-deprecated-functionality",children:"Remove Deprecated Functionality"}),"\n",(0,o.jsx)(n.p,{children:"We marked outdated functionality as deprecated.\nThese functions will be removed during the major version increase.\nWe expect a minor reduction in package size.\nIf you still use a deprecated function, you should start replacing any occurrence with the proposed alternative as mentioned in the release notes."}),"\n",(0,o.jsx)(n.h2,{id:"what-will-the-upgrade-look-like",children:"What Will the Upgrade Look Like?"}),"\n",(0,o.jsx)(n.p,{children:"Applying an upgrade is an additional effort.\nWe want to minimize this effort on the customer's side.\nOur team will provide a detailed upgrade guide for each major release.\nThe guide will include step-by-step changes to resolve any incompatibilities.\nUpgrading should be possible in less than a day regardless of the project size."}),"\n",(0,o.jsx)(n.admonition,{title:"Looking For Feedback",type:"tip",children:(0,o.jsxs)(n.p,{children:["To achieve this, we will need your feedback during the beta and release candidate phase.\nPlease let us know if you want to collaborate with us on finding problems and solutions for the upgrade guide.\n",(0,o.jsx)(n.a,{href:"https://github.com/SAP/cloud-sdk-js/discussions/1518",children:"Reach out to us"})," with your feedback, suggestions, or improvement ideas."]})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var o=i(96540);const t={},a=o.createContext(t);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);