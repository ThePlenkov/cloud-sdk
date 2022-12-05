"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[721],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return t?r.createElement(h,i(i({ref:n},d),{},{components:t})):r.createElement(h,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},69471:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={id:"browser",title:"Use the SAP Cloud SDK in the Browser",sidebar_label:"Use the SAP Cloud SDK in the Browser",description:"You'll learn how to package SDK for a browser, what are the limitations, and how to use it with popular frontend frameworks.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},i=void 0,s={unversionedId:"guides/browser",id:"guides/browser",title:"Use the SAP Cloud SDK in the Browser",description:"You'll learn how to package SDK for a browser, what are the limitations, and how to use it with popular frontend frameworks.",source:"@site/docs-js/guides/sdk-in-browser.mdx",sourceDirName:"guides",slug:"/guides/browser",permalink:"/cloud-sdk/docs/js/v3/guides/browser",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/guides/sdk-in-browser.mdx",tags:[],version:"current",frontMatter:{id:"browser",title:"Use the SAP Cloud SDK in the Browser",sidebar_label:"Use the SAP Cloud SDK in the Browser",description:"You'll learn how to package SDK for a browser, what are the limitations, and how to use it with popular frontend frameworks.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJsSidebar",previous:{title:"Connecting to External Systems from BAS",permalink:"/cloud-sdk/docs/js/v3/guides/bas"},next:{title:"Trust and Keystores",permalink:"/cloud-sdk/docs/js/v3/guides/trust-and-keystores"}},l={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Include the SAP Cloud SDK",id:"include-the-sap-cloud-sdk",level:2},{value:"Run Locally",id:"run-locally",level:2},{value:"Run on SAP BTP, Cloud Foundry Environment",id:"run-on-sap-btp-cloud-foundry-environment",level:2},{value:"Workaround",id:"workaround",level:2},{value:"Angular",id:"angular",level:3},{value:"React",id:"react",level:3}],d={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The SAP Cloud SDK for JavaScript can be used both as a backend and frontend library when used in a browser.\nBecause of the specifics of a browser environment, some features might be unavailable.\nTo help you get up and running faster in a browser, this document outlines the main steps and caveats of using SAP Cloud SDK on the frontend.\nBoth Angular and React applications are used to illustrate the usage."),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("p",null,"A frontend application set up using either of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://angular.io/cli/new"},"Angular application")," via ",(0,a.kt)("inlineCode",{parentName:"li"},"ng new my-app")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/create-a-new-react-app.html#create-react-app"},"React application")," via ",(0,a.kt)("inlineCode",{parentName:"li"},"npx create-react-app my-app"),".\nRewire the create-react-app project using ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/timarney/react-app-rewired#how-to-rewire-your-create-react-app-project"},"react-app-rewired")," or other alternatives.\nThis creates a ",(0,a.kt)("inlineCode",{parentName:"li"},"config-overrides.js")," file in the root directory which can be used to override the settings for various webpack modules.")),(0,a.kt)("h2",{id:"include-the-sap-cloud-sdk"},"Include the SAP Cloud SDK"),(0,a.kt)("p",null,"The example below uses the business partner API.\nTo learn how to generate an API client from a service definition, refer to ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v3/features/odata/generate-client"},"this article"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"//In the .html part of the component\n<button (click)=\"callApi()\">Click me!</button>\n\n//In the .ts part of the component\nimport { businessPartnerService } from './generated/business-partner-service';\n\nconst { businessPartnerApi } = businessPartnerService();\n\nasync function callApi(){\n  const result = await businessPartnerApi.requestBuilder().getAll().execute(myDest)\n  console.log(result)\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For the destination lookup, the SAP Cloud SDK relies on Node.js functionality, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env"),".\nHowever, the request building, execution, and result parsing do not require any Node.js modules and can be used on the frontend.\nHence, create the destination variable ",(0,a.kt)("inlineCode",{parentName:"p"},"myDest")," manually.")),(0,a.kt)("p",null,"Executing ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build")," will result in compilation errors of the kind shown below:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Module not found: Error: Can't resolve 'https' in")),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"#workaround"},"workaround")," for resolving such errors."),(0,a.kt)("h2",{id:"run-locally"},"Run Locally"),(0,a.kt)("p",null,"As discussed above, the ",(0,a.kt)("inlineCode",{parentName:"p"},"myDest")," can not be fetched via the destination service.\nCreate and pass the variable when running locally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Destination } from '@sap-cloud-sdk/connectivity';\n\nconst myDest: Destination = {\n  url: 'https://my123456.s4hana.ondemand.com',\n  username: 'myUser',\n  password: 'myPassowrd'\n};\n")),(0,a.kt)("p",null,"Executing ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run serve")," compiles the project and hosts the application on a local server."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"All modern browsers block requests triggered from a browser to a remote system to ensure ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Same-origin_policy"},"same origin policy"),".\nOne simple way to overcome this issue locally is to disable the web security of the browser temporarily (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-web-security")," for Chrome).\nAlternatively, create a second localhost proxy server that adds the ",(0,a.kt)("inlineCode",{parentName:"p"},"access-allow-origin-header")," to the request.")),(0,a.kt)("h2",{id:"run-on-sap-btp-cloud-foundry-environment"},"Run on SAP BTP, Cloud Foundry Environment"),(0,a.kt)("p",null,"For productive usage, the methods mentioned above for running locally are not needed.\nConfigure the ",(0,a.kt)("inlineCode",{parentName:"p"},"xs-app.json")," file of the approuter with an entry as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "source": "/REMOTE_SYSTEM_IDENTIFIER/(.*)",\n  "target": "/$1",\n  "destination": "DESTINATION_NAME_ON_CF"\n}\n')),(0,a.kt)("p",null,"and then, in the application, define the destination as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Destination } from '@sap-cloud-sdk/connectivity';\n\nconst myDest: Destination = {\n  url: '/REMOTE_SYSTEM_IDENTIFIER'\n};\n")),(0,a.kt)("p",null,"The created request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/REMOTE_SYSTEM_IDENTIFIER/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner")," will be matched by the approuter and the destination with the given URL and credentials is used."),(0,a.kt)("p",null,"The approuter establishes a session with the client (browser) using a session cookie.\nThis session contains elements like the redirect URL, OAuth token, OAuth scopes, etc.\nOAuth token is a JSON Web Token (JWT) that is fetched from the UAA and forwarded to backend services in the Authorization header.\n",(0,a.kt)("strong",{parentName:"p"},"The client never gets this token.")),(0,a.kt)("p",null,"For a detailed understanding of session handling in the application router, refer to the documentation ",(0,a.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/SAP_HANA_PLATFORM/4505d0bdaf4948449b7f7379d24d0f0d/96c7545f62504d55b669010d8fb9c41e.html?version=2.0.00"},"here"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This approach does not support principal propagation to on-premise systems.\nFor this, you need a JWT and need to include the proper header fields defining the user.\nSee the documentation on ",(0,a.kt)("a",{parentName:"p",href:"../features/connectivity/on-premise"},"on-premise systems")," for details.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"With webpack, it is possible to ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/plugins/normal-module-replacement-plugin/"},"load resources")," for local or productive usage.\nUsing such a switch, you can adjust the value of the destination for the two cases.")),(0,a.kt)("h2",{id:"workaround"},"Workaround"),(0,a.kt)("p",null,"Webpack version 5 removed the automatic node.js polyfills and they need to be added manually.\nAn error message during the compilation from TS to JS provides a hint on how to achieve that."),(0,a.kt)("h3",{id:"angular"},"Angular"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add the corresponding library of the node.js core modules or the browserified version in ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Include ",(0,a.kt)("inlineCode",{parentName:"p"},"@angular-builders/custom-webpack")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create a custom webpack configuration named ",(0,a.kt)("inlineCode",{parentName:"p"},"node-webpack.config.js")," and list the node modules"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  resolve: {\n    alias: {\n      process: 'process/browser',\n      https: 'agent-base',\n      http: 'agent-base'\n    },\n    fallback: {\n      url: false,\n      os: false,\n      assert: false,\n      constants: false,\n      zlib: false,\n      path: false,\n      http: false,\n      util: require.resolve('util/'),\n      process: require.resolve('process/browser'),\n      stream: require.resolve('stream-browserify'),\n      buffer: require.resolve('buffer'),\n      crypto: require.resolve('crypto-browserify'),\n      https: require.resolve('https-browserify')\n    }\n  },\n  plugins: [new ProvidePlugin({ process: 'process/browser' })]\n};\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"angular.json")," file, adjust the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," target to use the custom builder and set ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," to the custom config ",(0,a.kt)("inlineCode",{parentName:"p"},"node-webpack.config.js")," defined above"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"build": {\n  "builder": "@angular-builders/custom-webpack:browser",\n  "options": {\n    "customWebpackConfig": {\n      "path": "./node-webpack.config.js"\n    }\n  }\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"angular.json")," file, adjust the ",(0,a.kt)("inlineCode",{parentName:"p"},"serve")," target to use the custom builder as well"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"serve": {\n  "builder": "@angular-builders/custom-webpack:dev-server",\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file, exclude the node modules that do not exist in the browser"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"browser": {\n  "fs": false,\n  "net": false,\n  "tls": false\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Proxy any requests to your API server in development by adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy.config.json")," file in ",(0,a.kt)("inlineCode",{parentName:"p"},"/src")," folder\nThis avoids the CORS issues."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "/api/*": {\n    "target": "REMOTE_SYSTEM_IDENTIFIER",\n    "secure": true,\n    "logLevel": "debug",\n    "changeOrigin": true\n  }\n}\n')),(0,a.kt)("p",{parentName:"li"},"Since the base path has been set in the proxy config, change the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," property in ",(0,a.kt)("inlineCode",{parentName:"p"},"myDest")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),".\nIn the ",(0,a.kt)("inlineCode",{parentName:"p"},"angular.json")," file, adjust the ",(0,a.kt)("inlineCode",{parentName:"p"},"serve")," options to include ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyConfig"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"proxyConfig": "src/proxy.conf.json"\n')))),(0,a.kt)("h3",{id:"react"},"React"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add the corresponding library of the core node.js modules in ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file.\nAdd the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-app-rewired")," dependency and adjust the existing calls to ",(0,a.kt)("inlineCode",{parentName:"p"},"react-scripts")," in npm scripts for ",(0,a.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"test")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"start": "react-app-rewired start"\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"config-overrides.js")," file, list the core node modules"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function override(config, env) {\n  config.ignoreWarnings = [/Failed to parse source map/];\n  config.resolve.alias = {\n    https: 'agent-base',\n    http: 'agent-base'\n  };\n  config.resolve.fallback = {\n    os: false,\n    url: false,\n    https: false,\n    http: false,\n    fs: false,\n    path: false,\n    assert: false,\n    zlib: false,\n    tls: false,\n    net: false,\n    constants: false,\n    util: require.resolve('util'),\n    process: require.resolve('process/browser'),\n    stream: require.resolve('stream-browserify'),\n    buffer: require.resolve('buffer'),\n    console: require.resolve('console-browserify'),\n    crypto: require.resolve('crypto-browserify'),\n    https: require.resolve('https-browserify')\n  };\n  config.plugins = [\n    ...config.plugins,\n    new ProvidePlugin({\n      Buffer: ['buffer', 'Buffer']\n    }),\n    new ProvidePlugin({\n      process: 'process/browser'\n    })\n  ];\n\n  return config;\n};\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Proxy any requests to your API server in development by adding a proxy field to the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file.\nThis avoids the CORS issues."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"proxy": "REMOTE_SYSTEM_IDENTIFIER",\n')),(0,a.kt)("p",{parentName:"li"},"Since the base path has been set in the proxy, change the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," property in ",(0,a.kt)("inlineCode",{parentName:"p"},"myDest")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"/")),(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This proxy is only for development.\nYou need to ensure that API URLs point to the right target in production.")))),(0,a.kt)("p",null,"Now, the project should build and run locally."))}u.isMDXComponent=!0}}]);