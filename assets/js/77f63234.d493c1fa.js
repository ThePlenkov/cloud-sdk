"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9707],{61131:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=s(74848),t=s(28453),a=s(91517),i=s(5594);const o={id:"execute-an-odata-request",title:"Execute an OData GET request using the SAP Cloud SDK for JavaScript",sidebar_label:"Execute an OData Request",description:"Learn the fundamentals of the SAP Cloud SDK for JavaScript and integrate with an SAP S/4HANA Cloud system.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial"]},l=void 0,c={id:"tutorials/getting-started/execute-an-odata-request",title:"Execute an OData GET request using the SAP Cloud SDK for JavaScript",description:"Learn the fundamentals of the SAP Cloud SDK for JavaScript and integrate with an SAP S/4HANA Cloud system.",source:"@site/docs-js/tutorials/getting-started/2-execute-odata-request.mdx",sourceDirName:"tutorials/getting-started",slug:"/tutorials/getting-started/execute-an-odata-request",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/execute-an-odata-request",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/tutorials/getting-started/2-execute-odata-request.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"execute-an-odata-request",title:"Execute an OData GET request using the SAP Cloud SDK for JavaScript",sidebar_label:"Execute an OData Request",description:"Learn the fundamentals of the SAP Cloud SDK for JavaScript and integrate with an SAP S/4HANA Cloud system.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial"]},sidebar:"docsJsSidebar",previous:{title:"Set up Development Environment",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/set-up-dev-environment"},next:{title:"Deploy Application to Cloud Foundry",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/deploy-app-to-cf"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Add a Custom Route",id:"add-a-custom-route",level:2},{value:"Generate Service Entities",id:"generate-service-entities",level:2},{value:"Execute an OData Request",id:"execute-an-odata-request",level:2},{value:"Manage Destinations Centrally (Optional)",id:"manage-destinations-centrally-optional",level:2},{value:"Final Code Review",id:"final-code-review",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"In this part of the tutorial, you will do the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Extend your starter NestJS application by adding a custom route."}),"\n",(0,r.jsx)(n.li,{children:"Call the business partner service of SAP S/4HANA Cloud using the SAP Cloud SDK for JavaScript."}),"\n",(0,r.jsx)(n.li,{children:"Manage destinations centrally during development (optional)."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"add-a-custom-route",children:"Add a Custom Route"}),"\n",(0,r.jsxs)(n.p,{children:['Initially, the app contains a basic controller with a single route that returns the string "Hello World!".\nYou will add another route for ',(0,r.jsx)(n.code,{children:"business-partner"})," that will list all available business partners."]}),"\n",(0,r.jsx)(n.p,{children:"Create a new controller by executing the command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"nest g controller business-partner\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will create a folder ",(0,r.jsx)(n.code,{children:"business-partner"})," in the ",(0,r.jsx)(n.code,{children:"src/"})," directory containing the controller ",(0,r.jsx)(n.code,{children:"business-partner.controller.ts"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { Controller } from '@nestjs/common';\n\n@Controller('business-partner')\nexport class BusinessPartnerController {}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"@Controller(business-partner)"})," decorator marks the class ",(0,r.jsx)(n.code,{children:"BusinessPartnerController"})," as a controller (i.e. a thing that handles requests).\nNext, add a method ",(0,r.jsx)(n.code,{children:"getBusinessPartners()"})," with a ",(0,r.jsx)(n.code,{children:"@Get('')"})," decorator.\nThis will tell Nest to create a handler for this endpoint for HTTP requests."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { Controller, Get } from '@nestjs/common';\n\n@Controller('business-partner')\nexport class BusinessPartnerController {\n  @Get()\n  getBusinessPartners() {\n    return 'You will implement this in a minute.';\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Notice that you did not add any path information in the decorator.\nNest will map ",(0,r.jsx)(n.code,{children:"GET /business-partner"})," requests to this handler."]}),"\n",(0,r.jsxs)(n.p,{children:["For the controller to work, you need to include it in the ",(0,r.jsx)(n.code,{children:"controllers"})," array within the ",(0,r.jsx)(n.code,{children:"@Module()"})," decorator in ",(0,r.jsx)(n.code,{children:"app.module.ts"}),".\nThe generate command updates the ",(0,r.jsx)(n.code,{children:"app.module.ts"})," automatically and looks like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { BusinessPartnerController } from './business-partner/business-partner.controller';\n\n@Module({\n  imports: [],\n  controllers: [AppController, BusinessPartnerController],\n  providers: [AppService]\n})\nexport class AppModule {}\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you've started your application with the following command in the previous tutorial, it should detect the change and restart automatically."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm run start:dev\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you've terminated your application, you can restart it by running the start command again.\nNow, calling ",(0,r.jsx)(n.a,{href:"http://localhost:8080/business-partner",children:"http://localhost:8080/business-partner"})," should return the placeholder string."]}),"\n",(0,r.jsx)(n.h2,{id:"generate-service-entities",children:"Generate Service Entities"}),"\n",(0,r.jsxs)(n.p,{children:["The SAP Cloud SDK for JavaScript requires client libraries to make calls to OData services.\nIn this tutorial, you generate the client library for the business partner service using ",(0,r.jsx)(n.code,{children:"@sap-cloud-sdk/generator"}),".\nMore details of the OData generator can be found in ",(0,r.jsx)(n.a,{href:"/cloud-sdk/docs/js/features/odata/generate-client",children:"Generate an OData client for JavaScript"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Install the ",(0,r.jsx)(n.code,{children:"@sap-cloud-sdk/generator"})," package as a local dependency."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install -D @sap-cloud-sdk/generator\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a folder ",(0,r.jsx)(n.code,{children:"service-specifications"})," at the root of the project."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Download the EDMX file for the business partner service in the ",(0,r.jsx)(n.a,{href:"https://api.sap.com/api/API_BUSINESS_PARTNER/overview",children:"SAP Business Accelerator Hub"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Copy the ",(0,r.jsx)(n.code,{children:"API_BUSINESS_PARTNER.edmx"})," file into the ",(0,r.jsx)(n.code,{children:"service-specifications"})," folder."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"options-per-service.json"})," file in the ",(0,r.jsx)(n.code,{children:"service-specifications"})," folder with the following content:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "service-specifications/API_BUSINESS_PARTNER.edmx": {\n    "directoryName": "business-partner-service",\n    "basePath": "/sap/opu/odata/sap/API_BUSINESS_PARTNER",\n    "packageName": "business-partner-service"\n  }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Generate the ",(0,r.jsx)(n.code,{children:"BusinessPartner"})," service."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx generate-odata-client --input service-specifications --outputDir services --optionsPerService service-specifications/options-per-service.json\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The generated client library is in ",(0,r.jsx)(n.code,{children:"services/business-partner-service"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You can find a list of services exposed by SAP S/4HANA Cloud in the ",(0,r.jsx)(n.a,{href:"https://api.sap.com/",children:"SAP Business Accelerator Hub"}),".\nUse ",(0,r.jsx)(n.code,{children:"@sap-cloud-sdk/generator"})," to generate OData client libraries you need, as mentioned above."]})}),"\n",(0,r.jsx)(n.h2,{id:"execute-an-odata-request",children:"Execute an OData Request"}),"\n",(0,r.jsxs)(n.p,{children:["Next, you will create a service that will be responsible for fetching the business partners.\nTo create a service class ",(0,r.jsx)(n.code,{children:"business-partner.service.ts"}),", execute:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"nest g service business-partner\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This creates a basic class inside ",(0,r.jsx)(n.code,{children:"src/business-partner"})," folder."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class BusinessPartnerService {}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The service is also registered in the ",(0,r.jsx)(n.code,{children:"provider"})," array within the ",(0,r.jsx)(n.code,{children:"@Module()"})," decorator in ",(0,r.jsx)(n.code,{children:"app.module.ts"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"@Module({\n  imports: [],\n  controllers: [AppController, BusinessPartnerController],\n  providers: [AppService, BusinessPartnerService],\n})\n"})}),"\n",(0,r.jsx)(n.p,{children:"To import the service function and entity exported by the client library, add the following line to the top of the service class."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import {\n  businessPartnerService,\n  BusinessPartner\n} from '../../services/business-partner-service';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create a function ",(0,r.jsx)(n.code,{children:"getAllBusinessPartners()"}),".\nGet the API for the entity you want to make a call to in your application.\nIn this tutorial, you are using the ",(0,r.jsx)(n.code,{children:"businessPartnerApi"})," of the business partner service.\nUnpack the API object from the service function using ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",children:"JavaScript Object Destructuring"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Depending on the target system you are connecting to, the destination configuration can vary:"}),"\n",(0,r.jsxs)(a.A,{groupId:"scenario",defaultValue:"mock-server",values:[{label:"Mock Server",value:"mock-server"},{label:"SAP S/4HANA Cloud System",value:"s4hana-cloud"},{label:"SAP Business Accelerator Hub Sandbox",value:"api-hub-sandbox"}],children:[(0,r.jsx)(i.A,{value:"mock-server",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n  const { businessPartnerApi } = businessPartnerService();\n  return await businessPartnerApi.requestBuilder().getAll().execute({\n    url: 'http://localhost:3000/',\n  });\n}\n"})})}),(0,r.jsx)(i.A,{value:"s4hana-cloud",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n  const { businessPartnerApi } = businessPartnerService();\n  return await businessPartnerApi.requestBuilder().getAll().execute({\n    url: '<URI of your SAP S/4HANA Cloud System>',\n    username: '<USERNAME>',\n    password: '<PASSWORD>'\n  });\n}\n"})})}),(0,r.jsx)(i.A,{value:"api-hub-sandbox",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n  const { businessPartnerApi } = businessPartnerService();\n  return await businessPartnerApi\n    .requestBuilder()\n    .getAll()\n    .addCustomHeaders({ APIKey: '<YOUR-API-KEY>' })\n    .execute({\n      url: 'https://sandbox.api.sap.com/s4hanacloud'\n    });\n}\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["As network requests are asynchronous by nature, the return value of this function is a ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",children:"Promise"})," to a list of business partners ",(0,r.jsx)(n.code,{children:"(Promise<BusinessPartner[]>)"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Now that you have a service class to retrieve business partners, use it in the ",(0,r.jsx)(n.code,{children:"BusinessPartnerController"}),".\nThe ",(0,r.jsx)(n.code,{children:"BusinessPartnerService"})," is injected through the class constructor:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { Controller, Get, HttpException } from '@nestjs/common';\nimport { BusinessPartner } from '../../services/business-partner-service';\nimport { BusinessPartnerService } from './business-partner.service';\n\n@Controller('business-partner')\nexport class BusinessPartnerController {\n  constructor(private businessPartnerService: BusinessPartnerService) {}\n\n  @Get()\n  async getBusinessPartners(): Promise<BusinessPartner[]> {\n    return await this.businessPartnerService\n      .getAllBusinessPartners()\n      .catch(error => {\n        throw new HttpException(\n          `Failed to get business partners - ${error.message}`,\n          500\n        );\n      });\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Nest will handle the returned ",(0,r.jsx)(n.code,{children:"Promise"})," automatically.\nAdd a ",(0,r.jsx)(n.code,{children:"catch()"})," handler to specify how errors are handled (otherwise it would only show an internal server error when something goes wrong).\nReload the ",(0,r.jsx)(n.a,{href:"http://localhost:8080/business-partner",children:"http://localhost:8080/business-partner"})," URL to retrieve a list of business partners."]}),"\n",(0,r.jsx)(n.p,{children:"Congratulations, you just made your first call with the SAP Cloud SDK!"}),"\n",(0,r.jsx)(n.h2,{id:"manage-destinations-centrally-optional",children:"Manage Destinations Centrally (Optional)"}),"\n",(0,r.jsxs)(n.p,{children:["To avoid repeating your destination configuration for every request execution, you can set a destinations environment variable to manage your destinations.\nIn ",(0,r.jsx)(n.code,{children:"Node.js"})," applications, it is common to use a ",(0,r.jsx)(n.code,{children:".env"})," file to maintain such environment variables for a given project.\nCreate a ",(0,r.jsx)(n.code,{children:".env"})," file in the root directory of your project and define the destinations environment variable as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"destinations = [\n  {\n    name: '<DESTINATIONNAME>',\n    url: '<URL to your system>',\n    username: '<USERNAME>',\n    password: '<PASSWORD>'\n  }\n];\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Every environment variable in the ",(0,r.jsx)(n.code,{children:".env"})," file has to be defined on one line.\nYou can add more destinations to the array."]})}),"\n",(0,r.jsx)(n.p,{children:"This is what it would look like for the mock server:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"destinations = [{ name: 'MockServer', url: 'http://localhost:3000' }];\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Please do not use this approach in production and also include the ",(0,r.jsx)(n.code,{children:".env"})," file in your ",(0,r.jsx)(n.code,{children:".gitignore"})," list, so that it is not checked in."]})}),"\n",(0,r.jsxs)(n.p,{children:["Now that you have defined the destinations, make sure that they are available in the process.\nFor this, use the ",(0,r.jsx)(n.code,{children:"config"})," package provided by ",(0,r.jsx)(n.code,{children:"nest.js"}),". You can install it with the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install @nestjs/config\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To load the environment variables defined in the ",(0,r.jsx)(n.code,{children:".env"})," file, add the ",(0,r.jsx)(n.code,{children:"ConfigModule"})," provided by the ",(0,r.jsx)(n.code,{children:"config"})," package to the application's ",(0,r.jsx)(n.code,{children:"@Module"})," definition.\nOpen ",(0,r.jsx)(n.code,{children:"app.module.ts"})," and update it with the following code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { ConfigModule } from '@nestjs/config';\n\n@Module({\n  imports: [ConfigModule.forRoot()],\n  controllers: [AppController, BusinessPartnerController],\n  providers: [AppService, BusinessPartnerService],\n})\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ConfigModule"})," is imported from the ",(0,r.jsx)(n.code,{children:"config"})," package and added to the module's ",(0,r.jsx)(n.code,{children:"imports"}),".\nIf no arguments are passed to the ",(0,r.jsx)(n.code,{children:"forRoot()"})," method, the ",(0,r.jsx)(n.code,{children:".env"})," file has to be located in the project root.\nFor details on the possible configuration see the ",(0,r.jsx)(n.a,{href:"https://docs.nestjs.com/techniques/configuration",children:"nest documentation"}),".\nTo reference a destination in the request execution, replace the URL with a destinationName - ",(0,r.jsx)(n.code,{children:"MockServer"})," in this example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n  const { businessPartnerApi } = businessPartnerService();\n  return await businessPartnerApi.requestBuilder().getAll().execute({\n    destinationName: 'MockServer'\n  });\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"final-code-review",children:"Final Code Review"}),"\n",(0,r.jsxs)(n.p,{children:["In this tutorial, you added a new custom route to your application.\nUsing the SAP Cloud SDK, you executed an OData request to fetch a list of business partners.\nYou configured the destinations environment variable using a ",(0,r.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,r.jsx)(n.p,{children:"Here are the code files discussed on this page, if you are using the mock server:"}),"\n",(0,r.jsxs)(a.A,{groupId:"code-files",defaultValue:"bupa-controller",values:[{label:"src/business-partner/business-partner.controller.ts",value:"bupa-controller"},{label:"src/business-partner/business-partner.service.ts",value:"bupa-service"},{label:"src/app.module.ts",value:"app-module"}],children:[(0,r.jsx)(i.A,{value:"bupa-controller",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { Controller, Get, HttpException } from '@nestjs/common';\nimport { BusinessPartner } from '../../services/business-partner-service';\nimport { BusinessPartnerService } from './business-partner.service';\n\n@Controller('business-partner')\nexport class BusinessPartnerController {\n  constructor(private businessPartnerService: BusinessPartnerService) {}\n\n  @Get()\n  async getBusinessPartners(): Promise<BusinessPartner[]> {\n    return await this.businessPartnerService\n      .getAllBusinessPartners()\n      .catch(error => {\n        throw new HttpException(\n          `Failed to get business partners - ${error.message}`,\n          500\n        );\n      });\n  }\n}\n"})})}),(0,r.jsx)(i.A,{value:"bupa-service",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { Injectable } from '@nestjs/common';\nimport {\n  businessPartnerService,\n  BusinessPartner\n} from '../../services/business-partner-service';\n\n@Injectable()\nexport class BusinessPartnerService {\n  async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n    const { businessPartnerApi } = businessPartnerService();\n    return await businessPartnerApi.requestBuilder().getAll().execute({\n      url: 'http://localhost:3000/'\n    });\n  }\n}\n"})})}),(0,r.jsx)(i.A,{value:"app-module",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { BusinessPartnerController } from './business-partner/business-partner.controller';\nimport { BusinessPartnerService } from './business-partner/business-partner.service';\n\n@Module({\n  imports: [],\n  controllers: [AppController, BusinessPartnerController],\n  providers: [AppService, BusinessPartnerService]\n})\nexport class AppModule {}\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5594:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var r=s(34164);const t={tabItem:"tabItem__kUE"};var a=s(74848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,i),hidden:s,children:n})}},91517:(e,n,s)=>{s.d(n,{A:()=>S});var r=s(96540),t=s(34164),a=s(23104),i=s(56347),o=s(205),l=s(57485),c=s(31682),d=s(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const t=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=m({queryString:s,groupId:t}),[x,v]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,d.Dv)(s);return[t,(0,r.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:t}),j=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,a]),tabValues:a}}var v=s(92303);const j={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var f=s(74848);function g(e){let{className:n,block:s,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),t=o[s].value;t!==r&&(c(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,t.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:t}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function P(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(b,{...e,...n})]})}function S(e){const n=(0,v.A)();return(0,f.jsx)(P,{...e,children:u(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(96540);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);