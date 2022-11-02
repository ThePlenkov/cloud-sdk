"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=n(87462),a=(n(67294),n(3905)),r=n(50941),i=n(44996);const l={id:"remote-debugging",title:"Remotely debug an application on SAP BTP",sidebar_label:"Remotely debug an application on SAP BTP",description:"This article describes how you can remotely debug an application on SAP Business Technology Platform",keywords:["sap","cloud","sdk","debug","cloud-foundry","JavaScript","TypeScript"]},s=void 0,p={unversionedId:"guides/remote-debugging",id:"guides/remote-debugging",title:"Remotely debug an application on SAP BTP",description:"This article describes how you can remotely debug an application on SAP Business Technology Platform",source:"@site/docs-js/guides/debug-remote-app.mdx",sourceDirName:"guides",slug:"/guides/remote-debugging",permalink:"/cloud-sdk/docs/js/guides/remote-debugging",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/guides/debug-remote-app.mdx",tags:[],version:"current",frontMatter:{id:"remote-debugging",title:"Remotely debug an application on SAP BTP",sidebar_label:"Remotely debug an application on SAP BTP",description:"This article describes how you can remotely debug an application on SAP Business Technology Platform",keywords:["sap","cloud","sdk","debug","cloud-foundry","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"How to retrieve JWTs",permalink:"/cloud-sdk/docs/js/guides/retrieve-jwt"},next:{title:"Introduction",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/introduction"}},u={},c=[{value:"Assign yourself as a Space Developer",id:"assign-yourself-as-a-space-developer",level:2},{value:"Deploy Your Application with Debug Mode",id:"deploy-your-application-with-debug-mode",level:2},{value:"Open an ssh Tunnel to Your Application",id:"open-an-ssh-tunnel-to-your-application",level:2},{value:"Attach a Local Debugger",id:"attach-a-local-debugger",level:2},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"Webstorm",id:"webstorm",level:3}],d={toc:c};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guides outlines the steps you need to follow to start a remote debugging session from your IDE for an application that is already deployed on Cloud Foundry in SAP BTP."),(0,a.kt)("h2",{id:"assign-yourself-as-a-space-developer"},"Assign yourself as a Space Developer"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You need to have the Space Manager or Org Manager role.\nFor details see ",(0,a.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/81d0b4dcfbc84016b6b3c1465d4272f4.html"},"here"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the ",(0,a.kt)("a",{parentName:"li",href:"https://account.hana.ondemand.com/"},"SAP Business Technology Platform Cockpit")," and navigate to your subaccount"),(0,a.kt)("li",{parentName:"ul"},"Go to the space on Cloud Foundry where your application will be pushed to"),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("em",{parentName:"li"},"Member")," on the left side menu"),(0,a.kt)("li",{parentName:"ul"},"Add yourself as a ",(0,a.kt)("em",{parentName:"li"},"Space Developer"))),(0,a.kt)("h2",{id:"deploy-your-application-with-debug-mode"},"Deploy Your Application with Debug Mode"),(0,a.kt)("p",null,"In the package.json file, replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," script to run in debug mode.\nE.g., instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"node start.js")," for node, use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"node --inspect start.js\n")),(0,a.kt)("p",null,"And instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node start.ts"),", use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"node -r ts-node/register --inspect start.ts\n")),(0,a.kt)("p",null,"You can do this by either changing your start script in the package.json or the command script in the ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.yml"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Don't use ",(0,a.kt)("inlineCode",{parentName:"p"},"--inspect-brk"),", this will make the ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," timeout on SAP Business Technology Platform.")),(0,a.kt)("p",null,"Deploy your application as usual by running the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cf deploy\n")),(0,a.kt)("h2",{id:"open-an-ssh-tunnel-to-your-application"},"Open an ssh Tunnel to Your Application"),(0,a.kt)("p",null,"Open an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/devguide/deploy-apps/ssh-apps.html#ssh-command"},"ssh tunnel")," to your backend application to connect your local debugger with the node inspector running on port 9229.\nReplace ",(0,a.kt)("inlineCode",{parentName:"p"},"<your-app-name>")," with your application name and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cf ssh <your-app-name> -L 9229:127.0.0.1:9229 -T -N\n")),(0,a.kt)("h2",{id:"attach-a-local-debugger"},"Attach a Local Debugger"),(0,a.kt)("p",null,"Now you can attach your local debugger.\nFor this you will have to launch a debugger that attaches to the remote session."),(0,a.kt)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,a.kt)("p",null,"In Visual Studio Code, you can use the below attach configuration for Node.js debugging.\nReplace ",(0,a.kt)("inlineCode",{parentName:"p"},"<path-to-your-application>")," with the relative path to your application directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "node",\n      "request": "attach",\n      "name": "Attach to Remote",\n      "address": "127.0.0.1",\n      "port": 9229,\n      "localRoot": "${workspaceFolder}/<path-to-your-application>",\n      "remoteRoot": "/home/vcap/app",\n      "skipFiles": ["<node_internals>/**"]\n    }\n  ]\n}\n')),(0,a.kt)("h3",{id:"webstorm"},"Webstorm"),(0,a.kt)("p",null,"In Webstorm you can add configure debugging by creating a config as shown below:"),(0,a.kt)(r.Z,{alt:"Application Router flow",sources:{light:(0,i.Z)("img/remote-debugging-config-webstorm.png"),dark:(0,i.Z)("img/remote-debugging-config-webstorm.png")},className:"center",width:"80%",mdxType:"ThemedImage"}),(0,a.kt)("p",null,"Start the debugger !"))}g.isMDXComponent=!0}}]);