"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9068],{84398:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=t(74848),s=t(28453);const i={id:"approuter",title:"Using the SAP Application Router with the SAP Cloud SDK",sidebar_label:"Using the SAP Application Router",description:"This article describes how you can use the SAP Application Router with the SAP Cloud SDK",keywords:["sap","cloud","sdk","approuter","multi-tenancy","cloud-foundry","JavaScript","TypeScript"]},o="Using the SAP Application Router with the SAP Cloud SDK",a={id:"guides/approuter",title:"Using the SAP Application Router with the SAP Cloud SDK",description:"This article describes how you can use the SAP Application Router with the SAP Cloud SDK",source:"@site/docs-js_versioned_docs/version-v1/guides/how-to-use-the-approuter.mdx",sourceDirName:"guides",slug:"/guides/approuter",permalink:"/cloud-sdk/docs/js/v1/guides/approuter",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/guides/how-to-use-the-approuter.mdx",tags:[],version:"v1",frontMatter:{id:"approuter",title:"Using the SAP Application Router with the SAP Cloud SDK",sidebar_label:"Using the SAP Application Router",description:"This article describes how you can use the SAP Application Router with the SAP Cloud SDK",keywords:["sap","cloud","sdk","approuter","multi-tenancy","cloud-foundry","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Trust and Keystores",permalink:"/cloud-sdk/docs/js/v1/guides/trust-and-keystores"},next:{title:"How to Add Resilience",permalink:"/cloud-sdk/docs/js/v1/guides/resilience"}},c={},p=[{value:"SAP Application Router",id:"sap-application-router",level:2},{value:"Application Router Setup",id:"application-router-setup",level:3},{value:"Securing Your Application",id:"securing-your-application",level:2},{value:"Enabling Principal Propagation",id:"enabling-principal-propagation",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"using-the-sap-application-router-with-the-sap-cloud-sdk",children:"Using the SAP Application Router with the SAP Cloud SDK"})}),"\n",(0,r.jsxs)(n.p,{children:["In this guide, we will show you how to use the SAP Application Router together with the SAP Cloud SDK.\nYou will learn how to secure your application and configure multi-tenancy for principal propagation with an SAP Cloud SDK-based application example powered by ",(0,r.jsx)(n.a,{href:"https://nestjs.com/",children:"nestJS"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"sap-application-router",children:"SAP Application Router"}),"\n",(0,r.jsxs)(n.p,{children:["When we want to enable multi-tenancy for our application, we use the ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@sap/approuter",children:"SAP Application Router"}),".\nThe application router\u2019s primary purpose is to be the single entry point of a microservice-based application and act as the application\u2019s reverse proxy."]}),"\n",(0,r.jsx)(n.p,{children:"Its responsibilities consist of dispatching requests to backend microservices, authenticating users, and serving static content.\nThe application router checks if a given request has a valid JSON Web Token (JWT) when accessing a target service.\nIf the request contains a valid JWT, the application router forwards the request to the target service; if the request does not contain a valid JWT, the user must authenticate.\nAs we can see in the diagram below, we use an Identity Provider (IdP) to authenticate, the request is redirected to an IdP where a user gets authenticated and then redirected back to the application router for passing further according to its desired destination."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mermaid",children:"sequenceDiagram\n  User->>Approuter: sending request\n  alt has no JWT\n    Approuter->>Identity Provider: redirecting\n    Identity Provider->>Identity Provider: authenticating\n    Identity Provider->>Identity Provider: granting JWT\n    Identity Provider->>Approuter: redirecting\n  else has JWT\n    Approuter->>Backend App: forwarding request\n  end\n"})}),"\n",(0,r.jsx)(n.h3,{id:"application-router-setup",children:"Application Router Setup"}),"\n",(0,r.jsx)(n.p,{children:"To deploy our application router in SAP BTP Cloud Foundry, we need to configure it first.\nLet's walk through the four files we need to use."}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"xs-security.json"})," file defines the security and deployment options for an application.\nWith the below example, we enable the ",(0,r.jsx)(n.code,{children:"shared"})," tenant-mode for our ",(0,r.jsx)(n.code,{children:"xsuaa"})," instance, which we need for multi-tenancy."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "xsappname": "approuter-scaffold",\n  "tenant-mode": "shared"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"xs-app.json"}),", we specify to which backend service a request is forwarded to, and how this request has to be authenticated.\nWe can optionally also specify a specific ",(0,r.jsx)(n.code,{children:"identityProvider"})," that is used for the authentication."]}),"\n",(0,r.jsxs)(n.p,{children:["In the example below, we forward every request against the application router's ",(0,r.jsx)(n.code,{children:"/"})," route to the backend destination's ",(0,r.jsx)(n.code,{children:"/"})," route."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "welcomeFile": "index.html",\n  "routes": [\n    {\n      "source": "/",\n      "target": "/",\n      "destination": "approuter-scaffold"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"package.json"})," we only have one dependency, the application router module."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "name": "approuter",\n  "dependencies": {\n    "@sap/approuter": "*"\n  },\n  "scripts": {\n    "start": "node node_modules/@sap/approuter/approuter.js"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The manifest contains our application router, as well as environment variables which our application router needs for multi-tenancy.\nAs you see under ",(0,r.jsx)(n.code,{children:"env"}),", we specify the ",(0,r.jsx)(n.code,{children:"TENANT_HOST_PATTERN"})," and ",(0,r.jsx)(n.code,{children:"destinations"}),".\nThe ",(0,r.jsx)(n.code,{children:"destinations"})," are the destinations we use in our ",(0,r.jsx)(n.code,{children:"xs-app.json"})," where we forward requests to.\nThe ",(0,r.jsx)(n.code,{children:"TENANT_HOST_PATTERN"})," is a regular expression that describes how a tenant name should be retrieved from the host.\nWe also have to bind the ",(0,r.jsx)(n.code,{children:"xsuaa"})," which we configured with our ",(0,r.jsx)(n.code,{children:"xs-security.json"})," to the application router."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'applications:\n  - name: approuter-scaffold-approuter\n    routes:\n      - route: approuter-scaffold-apps.cfapps.sap.hana.ondemand.com\n    path: .\n    memory: 128M\n    buildpacks:\n      - nodejs_buildpack\n    env:\n      TENANT_HOST_PATTERN: \'approuter-scaffold-(.*).cfapps.sap.hana.ondemand.com\'\n      destinations: \'[{"name":"approuter-scaffold","url":"approuter-scaffold.cfapps.sap.hana.ondemand.com","forwardAuthToken":true}]\'\n    services:\n      - approuter-scaffold-xsuaa\n'})}),"\n",(0,r.jsx)(n.h2,{id:"securing-your-application",children:"Securing Your Application"}),"\n",(0,r.jsxs)(n.p,{children:["To secure our application endpoints, we utilize the ",(0,r.jsx)(n.a,{href:"http://www.passportjs.org/packages/passport-jwt",children:"passport"})," library.\nIt lets us authenticate endpoints using a JSON web token."]}),"\n",(0,r.jsxs)(n.p,{children:["Additionally, we use the ",(0,r.jsx)(n.code,{children:"xsenv"})," library to retrieve our ",(0,r.jsx)(n.code,{children:"xsuaa"})," credentials and the ",(0,r.jsx)(n.code,{children:"xssec"})," library's ",(0,r.jsx)(n.code,{children:"JWTStrategy"})," object for the middleware."]}),"\n",(0,r.jsxs)(n.p,{children:["Below is a simple example, where we get the ",(0,r.jsx)(n.code,{children:"approuter-scaffold-xsuaa"})," which is bound to our application, use it in the ",(0,r.jsx)(n.code,{children:"JWTStrategy"}),", and then forward the middleware to the passport."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\nimport { JWTStrategy } from '@sap/xssec';\nimport { getServices } from '@sap/xsenv';\nimport * as passport from 'passport';\n\nconst xsuaa = getServices({\n  xsuaa: { name: 'approuter-scaffold-xsuaa' }\n}).xsuaa;\npassport.use(new JWTStrategy(xsuaa));\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  app.use(passport.initialize());\n  app.use(passport.authenticate('JWT', { session: false }));\n  await app.listen(process.env.PORT || 3000);\n}\nbootstrap();\n"})}),"\n",(0,r.jsx)(n.h2,{id:"enabling-principal-propagation",children:"Enabling Principal Propagation"}),"\n",(0,r.jsx)(n.p,{children:"To enable principal propagation with this setup, we must forward the request to our endpoints."}),"\n",(0,r.jsxs)(n.p,{children:["First, we forward the request in our ",(0,r.jsx)(n.code,{children:"app.controller.ts"})," to our principal propagation endpoint."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"@Get('principal-business-partner')\n  getPrincipalBusinessPartner(\n    @Req() request: Request,\n  ): Promise<BusinessPartner[]> {\n    return this.principalBusinessPartnerService.getFiveBusinessPartners(\n      request,\n    );\n  }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then, we simply use the SAP Cloud SDK's ",(0,r.jsx)(n.code,{children:"retrieveJwt"})," function to extract the JWT from our request, and forward it to the ",(0,r.jsx)(n.code,{children:"execute"})," method."]}),"\n",(0,r.jsxs)(n.p,{children:["Below is an example using the ",(0,r.jsx)(n.code,{children:"BusinessPartnerService"}),", where we retrieve the top five business partners."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { Injectable } from '@nestjs/common';\nimport { BusinessPartner } from '@sap/cloud-sdk-vdm-business-partner-service';\nimport { retrieveJwt } from '@sap-cloud-sdk/core';\nimport { Request } from 'express';\n\n@Injectable()\nexport class PrincipalBusinessPartnerService {\n  async getFiveBusinessPartners(request: Request): Promise<BusinessPartner[]> {\n    return BusinessPartner.requestBuilder()\n      .getAll()\n      .top(5)\n      .execute({\n        destinationName: 'MY-DESTINATION',\n        jwt: retrieveJwt(request)\n      });\n  }\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);