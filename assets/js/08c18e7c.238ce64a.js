"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4236],{10732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var o=t(74848),i=t(28453),s=t(86025),c=t(21122);const r={id:"on-premise",title:"On-Premise Connectivity",sidebar_label:"On-Premise Systems",description:"How to connect to SAP S/4HANA On-premise systems using the SAP Cloud SDK",keywords:["sap","cloud","sdk","On-premise","connectivity","JavaScript","TypeScript"]},d=void 0,a={id:"features/connectivity/on-premise",title:"On-Premise Connectivity",description:"How to connect to SAP S/4HANA On-premise systems using the SAP Cloud SDK",source:"@site/docs-js_versioned_docs/version-v1/features/connectivity/on-premise.mdx",sourceDirName:"features/connectivity",slug:"/features/connectivity/on-premise",permalink:"/cloud-sdk/docs/js/v1/features/connectivity/on-premise",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/connectivity/on-premise.mdx",tags:[],version:"v1",frontMatter:{id:"on-premise",title:"On-Premise Connectivity",sidebar_label:"On-Premise Systems",description:"How to connect to SAP S/4HANA On-premise systems using the SAP Cloud SDK",keywords:["sap","cloud","sdk","On-premise","connectivity","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Generic HTTP Client",permalink:"/cloud-sdk/docs/js/v1/features/connectivity/http-client"},next:{title:"Overview",permalink:"/cloud-sdk/docs/js/v1/features/openapi/overview"}},l={},h=[{value:"Why On-Premise Systems Are Different",id:"why-on-premise-systems-are-different",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Connectivity Service",id:"connectivity-service",level:3},{value:"Principal Propagation",id:"principal-propagation",level:3},{value:"Multiple Cloud Connectors",id:"multiple-cloud-connectors",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"why-on-premise-systems-are-different",children:"Why On-Premise Systems Are Different"}),"\n",(0,o.jsx)(n.p,{children:"The crucial problem with SAP S/4HANA On-premise systems is, that they are not exposed to the internet.\nTypically, they are located within a company's internal network.\nThe SAP Cloud SDK provides helpful features that allow you to connect to On-premise systems."}),"\n",(0,o.jsxs)(n.p,{children:["Since this isolation contradicts modern requirements of data availability, SAP has introduced the ",(0,o.jsx)(n.a,{href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector",children:"Cloud Connector"}),".\nThe Cloud Connector works like a reverse proxy, opening a connection between some allowlisted service endpoints of the On-premise system and the connected Cloud Foundry account.\nOnly applications running in the connected Cloud Foundry account can access the services.\nApplications that are supposed to access On-premise systems need a binding to the ",(0,o.jsx)(n.a,{href:"https://www.cloudfoundry.org/the-foundry/sap-cloud-platform-service-connectivity/",children:"connectivity service"}),"."]}),"\n",(0,o.jsx)(c.A,{alt:"On Premise Connectivity",sources:{light:(0,s.Ay)("img/on-premise-connectivity_light.svg"),dark:(0,s.Ay)("img/on-premise-connectivity_dark.svg")},className:"center",width:"100%"}),"\n",(0,o.jsx)(n.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,o.jsx)(n.h3,{id:"connectivity-service",children:"Connectivity Service"}),"\n",(0,o.jsxs)(n.p,{children:["As a first step, the SAP Cloud SDK ",(0,o.jsx)(n.a,{href:"/cloud-sdk/docs/js/v1/features/connectivity/destinations",children:"looks up the destination"}),".\nIf the ",(0,o.jsx)(n.code,{children:"Proxy Type"})," of the destination is ",(0,o.jsx)(n.code,{children:"OnPremise"})," the SAP Cloud SDK will try to establish a connection via the Cloud Connector."]}),"\n",(0,o.jsxs)(n.p,{children:["As mentioned above, the application needs a service binding to the connectivity service.\nA service binding leads to client credentials in the ",(0,o.jsx)(n.code,{children:"VCAP"})," environment variable.\nThe environment variables are accessible for the application at runtime.\nThe SAP Cloud SDK uses the client credentials and if given the tenant id of the JWT to obtain a ",(0,o.jsx)(n.a,{href:"https://help.sap.com/viewer/8d8be6a74e4e49589a546c02ee193741/latest/en-US/f1eff1dd7907469491989b3a36e6a7c6.html",children:"client credentials grant."}),"\nIf multiple connectivity services bindings exist, the SAP Cloud SDK uses the first entry per default."]}),"\n",(0,o.jsxs)(n.p,{children:["The SAP Cloud SDK takes the client grant to call the connectivity service and receives the host, password, and authorization of the connectivity proxy.\nThen the SAP Cloud SDK creates an HTTP agent considering this proxy and the necessary ",(0,o.jsx)(n.code,{children:"Proxy-Authorization"})," headers.\nThe proxy is the entry point to the Cloud Connector instance connected to the account.\nThe proxy is only reachable from the Cloud Foundry space, so you cannot use that flow for applications running outside of Cloud Foundry.\nFor quick local test purposes, a deployment to Cloud Foundry is tedious and the following workarounds are possible:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/cloud-sdk/docs/js/v1/guides/bas",children:"SAP Business Application Studio"})," has some built-in functionality to connect to Cloud Foundry."]}),"\n",(0,o.jsxs)(n.li,{children:["If you are in a VPN from where the On-premise system is reachable, use a ",(0,o.jsx)(n.a,{href:"/cloud-sdk/docs/js/v1/features/connectivity/destinations",children:"environment destination"})," to access the system directly."]}),"\n",(0,o.jsxs)(n.li,{children:["You can also use an existing application with a bound connectivity service as an ssh tunnel:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Enable ssh for the application as described ",(0,o.jsx)(n.a,{href:"https://docs.cloudfoundry.org/devguide/deploy-apps/ssh-apps.html",children:"here"})]}),"\n",(0,o.jsxs)(n.li,{children:["Open an ssh tunnel with forwarding via the ",(0,o.jsx)(n.code,{children:" cf ssh MY-APP -L LOCAL-HOST:LOCAL-PORT:REMOTE-HOST:REMOTE-HOST-PORT"})," command.\nUse as remote host and port the ",(0,o.jsx)(n.code,{children:"onpremise_proxy_host"})," and ",(0,o.jsx)(n.code,{children:"onpremise_proxy_port"})," values from the VCAP service variables e.g. ",(0,o.jsx)(n.code,{children:"connectivityproxy.internal.cf.eu10.hana.ondemand.com"})," and ",(0,o.jsx)(n.code,{children:"20003"}),".\nFor the localhost and port use the localhost and some free port e.g. ",(0,o.jsx)(n.code,{children:"localhost:8081"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Replace the ",(0,o.jsx)(n.code,{children:"onpremise_proxy_host"})," and ",(0,o.jsx)(n.code,{children:"onpremise_proxy_port"})," in your locally used ",(0,o.jsx)(n.code,{children:"VCAP_SERVICE"})," variables with ",(0,o.jsx)(n.code,{children:"localhost"})," and the free port you choose."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The final destination in the productive scenario containing the ",(0,o.jsx)(n.a,{href:"/cloud-sdk/docs/js/v1/features/connectivity/proxies",children:"proxy information"})," will look like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\nurl: "https://my.onPremise.System.url.com",\nheaders: {...},    //contains authorization headers for the SAP S/4HANA system\nproxyConfiguration?: {\n  host: "connectivity.service.proxy.host"\n  port: 1234\n  protocol: "http"\n  headers?: {\n      Proxy-Authorization: "AuthHeaderForTheProxy"\n    };,\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["It will be used by the ",(0,o.jsx)(n.a,{href:"/cloud-sdk/docs/js/v1/features/connectivity/http-client",children:"HTTP client"})," of the SAP Cloud SDK to execute the request.\nWe would like to mention two minor aspects of the SAP Cloud SDK."]}),"\n",(0,o.jsx)(n.h3,{id:"principal-propagation",children:"Principal Propagation"}),"\n",(0,o.jsxs)(n.p,{children:["In case the ",(0,o.jsx)(n.code,{children:"Authentication"})," property on the destination is ",(0,o.jsx)(n.code,{children:"PrincipalPropagation"})," the SAP Cloud SDK adds the ",(0,o.jsx)(n.code,{children:"SAP-Connectivity-Authentication"})," header to the request.\nThe header contains user information included in the ",(0,o.jsx)(n.code,{children:"JWT"})," and enables user propagation from the cloud application to the SAP S/4HANA system."]}),"\n",(0,o.jsx)(n.h3,{id:"multiple-cloud-connectors",children:"Multiple Cloud Connectors"}),"\n",(0,o.jsxs)(n.p,{children:["If you have multiple Cloud Connectors connected to your account, the ",(0,o.jsx)(n.code,{children:"LocationId"})," defines which one of these to use for the request.\nIn case the destination contains a ",(0,o.jsx)(n.code,{children:"LocationId"})," property, the SAP Cloud SDK adds the ",(0,o.jsx)(n.code,{children:"SAP-Connectivity-SCC-Location_ID"})," header to the request."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(96540);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);