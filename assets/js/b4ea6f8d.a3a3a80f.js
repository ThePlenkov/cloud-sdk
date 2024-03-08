"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3623],{33320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var i=t(74848),o=t(28453),s=t(86025),a=t(13152);const r={id:"bas",title:"Connecting to External Systems From the Business Application Studio",sidebar_label:"Connecting to External Systems from BAS",description:"This article describes how the SDK helps to connect to external systems from the Business Application Studio.",keywords:["sap","cloud","sdk","proxy","connectivity","Business Application Studio","cloud-foundry","JavaScript","TypeScript"]},c=void 0,d={id:"guides/bas",title:"Connecting to External Systems From the Business Application Studio",description:"This article describes how the SDK helps to connect to external systems from the Business Application Studio.",source:"@site/docs-js_versioned_docs/version-v2/guides/bas-external-system.mdx",sourceDirName:"guides",slug:"/guides/bas",permalink:"/cloud-sdk/docs/js/v2/guides/bas",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/guides/bas-external-system.mdx",tags:[],version:"v2",frontMatter:{id:"bas",title:"Connecting to External Systems From the Business Application Studio",sidebar_label:"Connecting to External Systems from BAS",description:"This article describes how the SDK helps to connect to external systems from the Business Application Studio.",keywords:["sap","cloud","sdk","proxy","connectivity","Business Application Studio","cloud-foundry","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Upgrade to version 2",permalink:"/cloud-sdk/docs/js/v2/guides/upgrade-to-version-2"},next:{title:"Use the SAP Cloud SDK in the Browser",permalink:"/cloud-sdk/docs/js/v2/guides/browser"}},l={},h=[{value:"What is the Business Application Studio?",id:"what-is-the-business-application-studio",level:2},{value:"Case 1: Connection to an On-Premise System",id:"case-1-connection-to-an-on-premise-system",level:2},{value:"Technical Background",id:"technical-background",level:3},{value:"Prerequisite 1: The Business Application Studio (BAS)",id:"prerequisite-1-the-business-application-studio-bas",level:3},{value:"Prerequisite 2: Cloud Connector and Destination Setup",id:"prerequisite-2-cloud-connector-and-destination-setup",level:3},{value:"Checking the Connection",id:"checking-the-connection",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Supported Authentication Types for On-Premise Systems",id:"supported-authentication-types-for-on-premise-systems",level:3},{value:"Supported Authentication Types for Cloud Systems",id:"supported-authentication-types-for-cloud-systems",level:3},{value:"Case 2: Connection to Cloud Systems",id:"case-2-connection-to-cloud-systems",level:2},{value:"Prerequisite: Service Setup",id:"prerequisite-service-setup",level:3},{value:"Implementation",id:"implementation-1",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"what-is-the-business-application-studio",children:"What is the Business Application Studio?"}),"\n",(0,i.jsxs)(n.p,{children:["The SAP Business Application Studio (BAS) is a development environment offered as a service on SAP BTP.\nYou can subscribe to the BAS and from there quickly start developing without installing node, git, Visual Studio Code, nor other tools.\nThe solution looks and feels like Visual Studio Code, which is no surprise since it is based on ",(0,i.jsx)(n.a,{href:"https://theia-ide.org/",children:"Eclipse Theia"}),", the open source version of Visual Studio Code."]}),"\n",(0,i.jsx)(n.p,{children:"However, SAP added a few useful features to the BAS.\nYou can connect the BAS to your SAP BTP account, which allows you to reach all systems that you have configured on SAP BTP from your local machine.\nThis includes systems that are connected through the Cloud Connector (CC) and are normally not reachable through the internet.\nBeing able to test changes locally reduces the overhead of deploying remotely and thus increases convenience for developers."}),"\n",(0,i.jsx)(a.A,{alt:"Connecting to on-premise systems",sources:{light:(0,s.A)("img/bas_light.svg"),dark:(0,s.A)("img/bas_dark.svg")},className:"center",width:"100%"}),"\n",(0,i.jsx)(n.h2,{id:"case-1-connection-to-an-on-premise-system",children:"Case 1: Connection to an On-Premise System"}),"\n",(0,i.jsx)(n.h3,{id:"technical-background",children:"Technical Background"}),"\n",(0,i.jsx)(n.p,{children:"Companies do not expose their SAP S/4HANA On-Premise systems to the internet.\nThey are only reachable via a Cloud Connector attached to an SAP BTP account.\nIn principle, you cannot reach these systems outside the SAP BTP account."}),"\n",(0,i.jsx)(n.p,{children:"However, due to the subscription between the BAS and the SAP BTP account, there is a connection from the local application to the SAP S/4HANA system.\nOn a high level the connection works the following way:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The BAS includes an HTTP_PROXY running at ",(0,i.jsx)(n.a,{href:"http://localhost:8887",children:"http://localhost:8887"})]}),"\n",(0,i.jsxs)(n.li,{children:["This proxy forwards all ",(0,i.jsx)(n.code,{children:"http"})," requests to the SAP BTP account"]}),"\n",(0,i.jsx)(n.li,{children:"SAP BTP searches the existing destinations for one matching the name"}),"\n",(0,i.jsx)(n.li,{children:"If a destination is present, an initial request is sent to this destination"}),"\n",(0,i.jsx)(n.li,{children:"The proxy is a reverse proxy also piping back the response to the BAS"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"prerequisite-1-the-business-application-studio-bas",children:"Prerequisite 1: The Business Application Studio (BAS)"}),"\n",(0,i.jsx)(n.p,{children:"You have an SAP BTP account and a subscription to the BAS.\nVia the subscription, the BAS can access all destination in the subscribed account."}),"\n",(0,i.jsx)(n.h3,{id:"prerequisite-2-cloud-connector-and-destination-setup",children:"Prerequisite 2: Cloud Connector and Destination Setup"}),"\n",(0,i.jsxs)(n.p,{children:["You have set up a working Cloud Connector and configured a destination pointing to an on-premise system.\nPer default, destinations are not usable by a subscribed BAS.\nYou need to set two properties ",(0,i.jsx)(n.code,{children:"WebIDEEnabled"})," and ",(0,i.jsx)(n.code,{children:"HTML5.DynamicDestination"})," to enable that feature for a specific destination.\nGo to the destination configuration on SAP BTP and add the properties:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"WebIDEEnabled"})}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"HTML5.DynamicDestination"})}),(0,i.jsx)(n.td,{children:"true"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"checking-the-connection",children:"Checking the Connection"}),"\n",(0,i.jsxs)(n.p,{children:["Before you start the implementation, ensure that the connection is correctly configured.\nThe connectivity proxy running in BAS expects a pattern of the kind ",(0,i.jsx)(n.code,{children:"http://<destinationName>.dest"}),".\nWhen such a pattern is found the destination name is extracted and checked against the destinations in the related Cloud\nFoundry account.\nIf a match is found and the ",(0,i.jsx)(n.code,{children:"WebIDEEnabled"})," and ",(0,i.jsx)(n.code,{children:"HTML5.DynamicDestination"})," properties are enabled for the destination the request is forwarded via this destination.\nAll authorization information from the real destination is used.\nYou can test this flow by using a simple ",(0,i.jsx)(n.code,{children:"curl"})," command without any code."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl <destinationName>.dest/path/to/service\n"})}),"\n",(0,i.jsxs)(n.p,{children:["So if your destination is called ",(0,i.jsx)(n.code,{children:"S4H_Test.dest"})," and you want to query the catalog service the command would be:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -v -i "S4H_Test.dest/sap/opu/odata/iwfnd/catalogservice;v=2/ServiceCollection?%24top=1"\n'})}),"\n",(0,i.jsx)(n.p,{children:"If the request responds with status code 200 for the service you want to use, you can start the implementation.\nThe connectivity proxy has a built-in cache that needs to be emptied after you adjusted destinations.\nThis is done by calling:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl localhost:8887/reload\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more details on testing and troubleshooting have a look at ",(0,i.jsx)(n.a,{href:"https://blogs.sap.com/2020/10/13/how-to-check-the-connectivity-to-your-backend-system-in-business-application-studio/",children:"this guide"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsxs)(n.p,{children:["If the connection is tested and working you can start the implementation.\nThe SAP Cloud SDK helps you to consider the HTTP_PROXY automatically and makes it easy to use the same code base locally and in production on SAP BTP.\nThe SAP Cloud SDK has a ",(0,i.jsx)(n.a,{href:"../features/connectivity/destinations",children:"destination lookup"})," priority considering environment variables first."]}),"\n",(0,i.jsxs)(n.p,{children:["The trick is to define a ",(0,i.jsx)(n.code,{children:"destinations"})," environment variable when you run locally, which works like a switch under the hood when you execute:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"executeHttpRequest({ destinationName: 'myDestinationName', jwt: 'myJWT' });\n"})}),"\n",(0,i.jsx)(n.p,{children:"The code is the same for local execution and production.\nThe two situations are:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Case 1:"})," When run locally, the SAP Cloud SDK reads the destination from the environment variables.\nThe ",(0,i.jsx)(n.code,{children:"jwt"})," is irrelevant.\nThe destination contains only the name and URL of the real SAP BTP destination.\nSince the destination has no proxy type specified, the SAP Cloud SDK takes the HTTP_PROXY into account, as is the default.\nFrom there the flow described above takes place."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Case 2:"})," When run on SAP BTP there is no environment variable present.\nThe ",(0,i.jsx)(n.code,{children:"jwt"})," is used to fetch the full destination from the service.\nThe proxy type is ",(0,i.jsx)(n.code,{children:"OnPremise"})," and the connectivity service provides all proxy information."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"executeHttpRequest()"})," function is used by all request builders provided of the SAP Cloud SDK as well as by CAP applications connecting to an SAP S/4HANA system."]})}),"\n",(0,i.jsxs)(n.p,{children:["You use ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs/editor/debugging#_launchjson-attributes",children:"launch configurations"})," to run and debug applications locally.\nEither extend your existing ",(0,i.jsx)(n.code,{children:".vscode/launch.json"})," or create a new one."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{"configurations": [\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Debug my application",\n      "program": "${workspaceFolder}/dist/main.js",\n      "envFile": "${workspaceFolder}/.env",\n      "preLaunchTask": "npm: build",\n      "outFiles": [\n        "${workspaceFolder}/dist/**/*.js"\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, we use a simple Nest.js application.\nThe code will look almost identical for express or ",(0,i.jsx)(n.a,{href:"https://community.sap.com/topics/cloud-application-programming",children:"CAP"})," applications.\nThe property ",(0,i.jsx)(n.code,{children:"program"})," defines the script file executed when you run the configuration.\nIn our case, the ",(0,i.jsx)(n.code,{children:"main.js"})," script will start up the Nest server.\nThe ",(0,i.jsx)(n.code,{children:"preLaunchTask"})," executes the build before each run which compiles the TypeScript files to JavaScript.\nThe ",(0,i.jsx)(n.code,{children:"outFiles"})," property defines where the compiled files will be located."]}),"\n",(0,i.jsxs)(n.p,{children:["We have to set the ",(0,i.jsx)(n.code,{children:"destinations"})," environment variable, to provide our destination.\nThis will interrupt the ",(0,i.jsx)(n.a,{href:"../features/connectivity/destinations",children:"destination lookup"})," and lead to a destination with the HTTP_PROXY considered.\nThe easiest way to do that is via a ",(0,i.jsx)(n.code,{children:".env"})," file which is read when starting the application.\nIf you do not have a ",(0,i.jsx)(n.code,{children:".env"})," file, create one or adjust the existing one.\nJust add the following entry to the ",(0,i.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'destinations="[{\n"name": "<destinationName>",\n"url": "http://<destinationName>.dest",\n"proxyConfiguration":{\n      "host": "127.0.0.1",\n      "port": 8887,\n      "protocol":"http"\n  }\n}]"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Fill in the ",(0,i.jsx)(n.code,{children:"name"})," and ",(0,i.jsx)(n.code,{children:"url"})," of the destination you ",(0,i.jsx)(n.a,{href:"#prerequisite-2-cloud-connector-and-destination-setup",children:"configured on SAP BTP"}),".\nYou can use the same pattern ",(0,i.jsx)(n.code,{children:"<name>.dest"})," that you have used for ",(0,i.jsx)(n.a,{href:"#checking-the-connection",children:"testing the connection"}),".\nThe proxy host and port are from the ",(0,i.jsx)(n.code,{children:"http_proxy"})," environment variables BAS creates for you.\nAll requests done with the SAP Cloud SDK will now reach the SAP S/4HANA system via the BAS connectivity proxy.\nYou can start your application via the launch button."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The SAP Cloud SDK also offers a ",(0,i.jsx)(n.code,{children:"mockTestDestination()"})," method which reads destination information from a ",(0,i.jsx)(n.code,{children:"system.json"})," and ",(0,i.jsx)(n.code,{children:"credentials.json"})," file.\nIn the end, this only sets the ",(0,i.jsx)(n.code,{children:"destinations"})," environment variables as stored in the ",(0,i.jsx)(n.code,{children:".env"})," file, but could become advantageous if you have many systems.\nYou can also set the ",(0,i.jsx)(n.code,{children:"credentials.json"})," to your git ignore list so that they are not checked-in by accident and share the systems with your colleagues."]})}),"\n",(0,i.jsxs)(n.p,{children:["For the simple case you would add ",(0,i.jsx)(n.code,{children:"mockTestDestination(<destinationName>)"})," to your local startup script and have a ",(0,i.jsx)(n.code,{children:"systems.json"})," in your project root:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\n    "systems": [\n        {\n            "alias": "your destination name",\n            "uri": "your destination url "\n        }\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"supported-authentication-types-for-on-premise-systems",children:"Supported Authentication Types for On-Premise Systems"}),"\n",(0,i.jsxs)(n.p,{children:["The supported authentication types are either ",(0,i.jsx)(n.code,{children:"BasicAuthorization"})," or ",(0,i.jsx)(n.code,{children:"PrincipalPropagation"}),".\nIn case you use principal propagation, the BAS will fill the ",(0,i.jsx)(n.code,{children:"SAP-Connectivity-Authentication"})," header as discussed in the ",(0,i.jsx)(n.a,{href:"/cloud-sdk/docs/js/v2/features/connectivity/on-premise",children:"on-premise connectivity guide."}),"\nThe user logged into the BAS will be propagated.\nIn case your BAS user is ",(0,i.jsx)(n.strong,{children:"not"})," a valid user of the on-premise system you can use a destination using basic authorization."]}),"\n",(0,i.jsx)(n.h3,{id:"supported-authentication-types-for-cloud-systems",children:"Supported Authentication Types for Cloud Systems"}),"\n",(0,i.jsx)(n.p,{children:"For calls to cloud systems, i.e. systems that are reachable over the internet, the local BAS proxy is not needed.\nHowever, the web proxy will be used for all requests.\nIn general, this does not cause problems because the proxy is totally transparent."}),"\n",(0,i.jsxs)(n.p,{children:["An exception to this rule is destinations using ",(0,i.jsx)(n.code,{children:"ClientCertificateAuthentication"})," because the http-agent does not yet ",(0,i.jsx)(n.a,{href:"https://github.com/TooTallNate/node-https-proxy-agent/pull/111",children:"allow for certificate forwarding"}),".\nAs a workaround you can add the target system to the ",(0,i.jsx)(n.code,{children:"no_proxy"})," environment variable:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'process.env.no_proxy = process.env.no_proxy  + ",<YourDestinationUrl>"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"case-2-connection-to-cloud-systems",children:"Case 2: Connection to Cloud Systems"}),"\n",(0,i.jsx)(n.p,{children:"Cloud systems are reachable via the internet and you do not need any cloud connector to reach them.\nThe same is true for the destination service of the SAP Business Technology Platform.\nHence, you can use the same approach locally and in production."}),"\n",(0,i.jsx)(n.h3,{id:"prerequisite-service-setup",children:"Prerequisite: Service Setup"}),"\n",(0,i.jsxs)(n.p,{children:["On Cloud Foundry, the access to services is granted via the ",(0,i.jsx)(n.code,{children:"VCAP_SERVICE"})," variables.\nWe assume that you have configured your application so that it can access the destination service.\nIf not, follow the ",(0,i.jsx)(n.a,{href:"../tutorials/getting-started/introduction",children:"steps in the Cloud Foundry tutorial"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"implementation-1",children:"Implementation"}),"\n",(0,i.jsxs)(n.p,{children:["You can mirror the ",(0,i.jsx)(n.code,{children:"VCAP_SERVICE"})," variables from your Cloud Foundry account to your local BAS.\nStart the BAS and connect your BAS workspace to the SAP BTP account.\nThis is done via the little connection icon (",(0,i.jsx)("img",{src:(0,s.A)("img/cf-connect-button.jpg")}),") on the left of the BAS.\nThen select the application from which you want to mirror the variables and select the folder containing the ",(0,i.jsx)(n.code,{children:".env"})," file to store it.\nUse the ",(0,i.jsx)(n.code,{children:"envFile"})," property in the ",(0,i.jsx)(n.code,{children:"launch.json"})," to load the file on your local application startup."]}),"\n",(0,i.jsxs)(n.p,{children:["Now your application will fetch the service credentials and call the destination service as in production.\nNote that there are certain limitations to this approach.\nWithin the BAS you will not have a JWT issued for your user.\nThis means that flows like ",(0,i.jsx)(n.code,{children:"OAuth2SAMLBearerAssertion"})," and ",(0,i.jsx)(n.code,{children:"OAuth2UserTokenExchange"})," can only work if you provide such a JWT.\nThis is possible in principle, but difficult within the local development environment.\nWe recommend creating dedicated development destinations with authentications flows like:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"OAuth2ClientCredentials"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"BasicAuthentication"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ClientCertificateAuthentication"})," (here we wait for a fix on the ",(0,i.jsx)(n.a,{href:"https://github.com/TooTallNate/node-https-proxy-agent/pull/111",children:"http-proxy-agent"})," or you have to disable the proxy"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Note that for the connection to the cloud system the destinations do not need the two properties ",(0,i.jsx)(n.code,{children:"WebIDEEnabled"})," and ",(0,i.jsx)(n.code,{children:"HTML5.DynamicDestination"}),", because the BAS connectivity proxy is not needed."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(96540);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);