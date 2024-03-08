"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8788],{78276:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=n(74848),t=n(28453),a=n(91517),i=n(5594);const o={id:"read",title:"Building an Address Manager with the SAP Cloud SDK - Part 1",sidebar_label:"Read Address Data",description:"Build an Address Manager with the SAP Cloud SDK - Part 1",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial","address manager"]},l=void 0,d={id:"tutorials/address-manager/read",title:"Building an Address Manager with the SAP Cloud SDK - Part 1",description:"Build an Address Manager with the SAP Cloud SDK - Part 1",source:"@site/docs-js_versioned_docs/version-v2/tutorials/address-manager/read-addresses.mdx",sourceDirName:"tutorials/address-manager",slug:"/tutorials/address-manager/read",permalink:"/cloud-sdk/docs/js/v2/tutorials/address-manager/read",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/tutorials/address-manager/read-addresses.mdx",tags:[],version:"v2",frontMatter:{id:"read",title:"Building an Address Manager with the SAP Cloud SDK - Part 1",sidebar_label:"Read Address Data",description:"Build an Address Manager with the SAP Cloud SDK - Part 1",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial","address manager"]},sidebar:"docsJsSidebar",previous:{title:"Deploy Application to Cloud Foundry",permalink:"/cloud-sdk/docs/js/v2/tutorials/getting-started/deploy-app-to-cf"},next:{title:"Change Address Data",permalink:"/cloud-sdk/docs/js/v2/tutorials/address-manager/change"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Get All Business Partners",id:"get-all-business-partners",level:2},{value:"Recap Existing Service",id:"recap-existing-service",level:3},{value:"Test GetAll Service",id:"test-getall-service",level:3},{value:"Select Certain Fields",id:"select-certain-fields",level:3},{value:"Filter Business Partners by Type",id:"filter-business-partners-by-type",level:3},{value:"Get Addresses of Business Partner",id:"get-addresses-of-business-partner",level:2},{value:"Get One Business Partner",id:"get-one-business-partner",level:3},{value:"Test GetById Service",id:"test-getbyid-service",level:3},{value:"Navigate To Address",id:"navigate-to-address",level:3},{value:"Final Code Review",id:"final-code-review",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(s.p,{children:"In the SAP S/4HANA data model, addresses are related to the business partner entity.\nEach business partner can have multiple addresses assigned.\nYou will develop an application that provides a REST API to manage the addresses of business partners.\nIn this part of the tutorial, you will create the endpoints reading data.\nYou will learn:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"How to retrieve a single business partner."}),"\n",(0,r.jsx)(s.li,{children:"How to retrieve the addresses of a business partner."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["The tutorial is based on the initial NestJs application explained in the ",(0,r.jsx)(s.a,{href:"/cloud-sdk/docs/js/v2/tutorials/getting-started/set-up-dev-environment",children:"first part of the getting started tutorials"}),".\nIn that tutorial you already created ",(0,r.jsx)(s.a,{href:"/cloud-sdk/docs/js/v2/tutorials/getting-started/execute-an-odata-request",children:"a first OData request"})," to get a list of business partners.\nYou will extend the functionality of the API in this tutorial and the ",(0,r.jsx)(s.a,{href:"/cloud-sdk/docs/js/v2/tutorials/address-manager/change",children:"follow-up part"}),".\nSince the follow-up part is about changing data, we recommend using a ",(0,r.jsx)(s.a,{href:"https://sap.github.io/cloud-s4-sdk-book/pages/mock-odata.html",children:"local mock system"}),".\nChanging data is impossible on SAP Business Accelerator Hub and an actual SAP S/4HANA instance should not be polluted with test data.\nNote that both systems run locally but have different ports:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"localhost:3000"})," is the mock system imitating the SAP S/4HANA system."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"localhost:8080"})," is the address manager application you develop in the tutorial."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"get-all-business-partners",children:"Get All Business Partners"}),"\n",(0,r.jsx)(s.h3,{id:"recap-existing-service",children:"Recap Existing Service"}),"\n",(0,r.jsxs)(s.p,{children:["In the previous ",(0,r.jsx)(s.a,{href:"/cloud-sdk/docs/js/v2/tutorials/getting-started/execute-an-odata-request",children:"tutorial"}),", you created an OData request to retrieve business partners.\nYou included the following code in your ",(0,r.jsx)(s.code,{children:"business-partner.service.ts"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"import { Injectable } from '@nestjs/common';\nimport {\n  BusinessPartner,\n  businessPartnerService\n} from '../../services/business-partner-service';\n\n@Injectable()\nexport class BusinessPartnerService {\n  getAllBusinessPartners(): Promise<BusinessPartner[]> {\n    const { businessPartnerApi } = businessPartnerService();\n    return businessPartnerApi\n      .requestBuilder()\n      .getAll()\n      .addCustomHeaders({ apikey: process.env.APIKey })\n      .execute({ url: 'http://localhost:3000' });\n  }\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Let's walk you through the implementation of the service as a recap.\nYou have imported the ",(0,r.jsx)(s.code,{children:"businessPartnerService"})," which offers you many APIs and you picked the ",(0,r.jsx)(s.code,{children:"businessPartnerApi"}),".\nWith this API you requested all business partners using the ",(0,r.jsx)(s.code,{children:"getAll"})," request builder.\nAs discussed, you should use the local ",(0,r.jsx)(s.a,{href:"https://sap.github.io/cloud-s4-sdk-book/pages/mock-odata.html",children:"mock system"}),".\nFor simplicity, the ",(0,r.jsx)(s.code,{children:"url"})," is passed directly to the ",(0,r.jsx)(s.code,{children:"execute()"})," method."]}),"\n",(0,r.jsx)(s.admonition,{type:"caution",children:(0,r.jsxs)(s.p,{children:["In real applications, you would use a real SAP S/4HANA system and the ",(0,r.jsx)(s.a,{href:"/cloud-sdk/docs/js/v2/features/connectivity/destinations",children:"destination service"})," to avoid leaking private or secret information through hard-coding system properties."]})}),"\n",(0,r.jsx)(s.h3,{id:"test-getall-service",children:"Test GetAll Service"}),"\n",(0,r.jsx)(s.p,{children:"You can start your application using:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Shell",children:"npm start\n"})}),"\n",(0,r.jsxs)(s.p,{children:["When the server is running, you should see a message like: ",(0,r.jsx)(s.code,{children:"[NestApplication] Nest application successfully started"})," and some mappings related to the listed controllers.\nOpen the URL ",(0,r.jsx)(s.code,{children:"http://localhost:8080/business-partner"})," and you should see the data of the mock server."]}),"\n",(0,r.jsx)(s.h3,{id:"select-certain-fields",children:"Select Certain Fields"}),"\n",(0,r.jsxs)(s.p,{children:["The output from the previous sections shows all fields of the business partner entity.\nLike SQL, OData allows the selection of only specific properties of an entity.\nFor our address manager, we only want to know the ID, first name, and last name of a business partner.\nAdd a ",(0,r.jsx)(s.code,{children:"select"})," statement to the service implementation:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"const { businessPartnerApi } = businessPartnerService();\n\n@Injectable()\nexport class BusinessPartnerService {\n  getAllBusinessPartners(): Promise<BusinessPartner[]> {\n    return businessPartnerApi\n      .requestBuilder()\n      .getAll()\n      .select(\n        businessPartnerApi.schema.BUSINESS_PARTNER,\n        businessPartnerApi.schema.FIRST_NAME,\n        businessPartnerApi.schema.LAST_NAME\n      )\n      .top(10)\n      .execute({ url: 'http://localhost:3000' });\n  }\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["As you can see, each property you select is represented by a property of the ",(0,r.jsx)(s.code,{children:"businessPartnerApi"})," schema.\nTo keep the code shorter, the ",(0,r.jsx)(s.code,{children:"businessPartnerApi"})," has been assigned to a local variable.\nIf your IDE supports code completion, you can see all properties that can be selected on this entity by typing ",(0,r.jsx)(s.code,{children:"businessPartnerApi.schema."}),".\nDepending on your IDE, the list may show automatically or when you trigger the code completion manually (often by pressing ",(0,r.jsx)(s.code,{children:"Ctrl"})," + ",(0,r.jsx)(s.code,{children:"Space"}),").\nThis saves you from having to look up the properties in the metadata and prevents errors due to mistyping."]}),"\n",(0,r.jsxs)(s.p,{children:["If you open the URL ",(0,r.jsx)(s.code,{children:"http://localhost:8080/business-partner"}),", you should see only the ID, first name, and last name of the business partners."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Get all business partners.",src:n(93615).A+"",width:"536",height:"706"})}),"\n",(0,r.jsx)(s.h3,{id:"filter-business-partners-by-type",children:"Filter Business Partners by Type"}),"\n",(0,r.jsx)(s.p,{children:"Business partners can either be natural persons or legal persons (e.g. organizations or companies).\nFor the address manager, we only want the addresses of natural persons.\nTherefore, you need to filter our request.\nModify your code like this:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"businessPartnerApi\n      .requestBuilder()\n      .getAll()\n      .select(\n        businessPartnerApi.schema.BUSINESS_PARTNER,\n        businessPartnerApi.schema.FIRST_NAME,\n        businessPartnerApi.schema.LAST_NAME\n      )\n      .filter(\n          businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY.equals('1')\n      )\n      .execute({ url: \"http://localhost:3000\" });\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["As for the ",(0,r.jsx)(s.code,{children:"select()"})," method, you can use the properties of the ",(0,r.jsx)(s.code,{children:"BusinessPartner"})," entity directly for filtering.\nEach property offers a set of methods for constructing filters.\nEvery property has a ",(0,r.jsx)(s.code,{children:"equals()"})," and ",(0,r.jsx)(s.code,{children:"notEquals()"})," method.\nDepending on the type of property, there can be additional methods like ",(0,r.jsx)(s.code,{children:"greaterThan()"})," or ",(0,r.jsx)(s.code,{children:"greaterOrEqual()"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Since the type of the property is known, the typed client will prevent you from passing values of the wrong type.\nFor example, ",(0,r.jsx)(s.code,{children:"businessPartnerApi.schema.FIRST_NAME.equals(1)"})," would not compile when using TypeScript.\nIn JavaScript, the code would only fail at run-time, but your editor may raise a warning for the type mismatch."]}),"\n",(0,r.jsxs)(s.p,{children:["For more complicated filter conditions have a look at the ",(0,r.jsx)(s.a,{href:"/cloud-sdk/docs/js/v2/features/odata/v2-client#filter",children:"filter documentation"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"get-addresses-of-business-partner",children:"Get Addresses of Business Partner"}),"\n",(0,r.jsx)(s.p,{children:"As a first step, you created an endpoint for obtaining a list of business partners.\nIn this part of the tutorial, you will create the services to read the addresses."}),"\n",(0,r.jsx)(s.h3,{id:"get-one-business-partner",children:"Get One Business Partner"}),"\n",(0,r.jsxs)(s.p,{children:["We are interested in the addresses related to one business partner and create a query for fetching one specific business partner.\nEach business partner has a unique ID, which you can use to do that.\nInclude a second method in the existing ",(0,r.jsx)(s.code,{children:"business-partner.service.ts"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"getBusinessPartnerById(id: string): Promise<BusinessPartner> {\n    return businessPartnerApi\n      .requestBuilder()\n      .getByKey(id)\n      .execute({ url: 'http://localhost:3000' });\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["As before, you call ",(0,r.jsx)(s.code,{children:"businessPartnerApi.requestBuilder()"})," to select the type of request you want to build.\nSince you only want to get a single business partner, you use the ",(0,r.jsx)(s.code,{children:"getByKey()"})," function and then call ",(0,r.jsx)(s.code,{children:"execute()"})," to execute the request.\nAgain, you use the local mock server from the previous section for the ",(0,r.jsx)(s.code,{children:"getAll()"})," request."]}),"\n",(0,r.jsxs)(s.p,{children:["As a next step, you need to expose the service via the controller.\nOpen the ",(0,r.jsx)(s.code,{children:"business-partner.controller.ts"})," and add the following method:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"@Get('/:id')\ngetBusinessPartnerById(@Param('id') id: string): Promise<BusinessPartner> {\n    return this.businessPartnerService.getBusinessPartnerById(id);\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The method takes the ID from the URL and passes it to ",(0,r.jsx)(s.code,{children:"getBusinessPartnerById()"})," in the service class.\nIf a business partner with the provided ID exists in the target system, it will be sent to the client.\nOtherwise, an error message is sent."]}),"\n",(0,r.jsx)(s.h3,{id:"test-getbyid-service",children:"Test GetById Service"}),"\n",(0,r.jsxs)(s.p,{children:["Restart your server and open ",(0,r.jsx)(s.code,{children:"http://localhost:8080/business-partner"})," to get the list of all business partners.\nCopy one ID from the result list and execute ",(0,r.jsx)(s.code,{children:"http://localhost:8080/business-partner/<yourId>"}),".\nYou should see the details of the chosen business partner.\nNote that Nest applications have a built-in ",(0,r.jsx)(s.a,{href:"https://docs.nestjs.com/exception-filters",children:"exception filter"}),", which maps exceptions to HTTP messages shown to the client.\nBy default, the exceptions from the SAP Cloud SDK are mapped to a server-side error.\nSo if you provide a non-existing ID, you will receive a 500 response and not a 404."]}),"\n",(0,r.jsx)(s.h3,{id:"navigate-to-address",children:"Navigate To Address"}),"\n",(0,r.jsx)(s.p,{children:"As mentioned before, the address is a separate OData entity related to the business partner.\nIn OData, the address is a navigation property of the business partner.\nIf you want to include such a related property in the query result, you have to include it in the select statement:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"return businessPartnerApi\n  .requestBuilder()\n  .getByKey(id)\n  .select(\n    businessPartnerApi.schema.BUSINESS_PARTNER,\n    businessPartnerApi.schema.FIRST_NAME,\n    businessPartnerApi.schema.LAST_NAME,\n    businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS\n  )\n  .execute({ url: 'http://localhost:3000' });\n"})}),"\n",(0,r.jsx)(s.p,{children:"This implicitly expands the property and includes all properties like street, house number, and state of the address in the result.\nAlso here we are interested only in some properties of the address.\nA second select on the navigation property reduces the response to the desired fields:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"const { businessPartnerAddressApi } = businessPartnerService();\n\nreturn businessPartnerApi\n  .requestBuilder()\n  .getByKey(id)\n  .addCustomHeaders({ apikey: process.env.APIKey })\n  .select(\n    businessPartnerApi.schema.BUSINESS_PARTNER,\n    businessPartnerApi.schema.FIRST_NAME,\n    businessPartnerApi.schema.LAST_NAME,\n    businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS.select(\n      businessPartnerAddressApi.schema.BUSINESS_PARTNER,\n      businessPartnerAddressApi.schema.ADDRESS_ID\n      businessPartnerAddressApi.schema.POSTAL_CODE,\n      businessPartnerAddressApi.schema.CITY_NAME,\n      businessPartnerAddressApi.schema.STREET_NAME,\n      businessPartnerAddressApi.schema.HOUSE_NUMBER\n    )\n  )\n  .execute({ url: 'http://localhost:3000' });\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Properties like ",(0,r.jsx)(s.code,{children:"POSTAL_CODE"})," and ",(0,r.jsx)(s.code,{children:"CITY_NAME"})," are part of the address API and related schema.\nThe ",(0,r.jsx)(s.code,{children:"businessPartnerAddressApi"})," is also part of the business partner service.\nIf you call the URL ",(0,r.jsx)(s.code,{children:"http://localhost:8080/business-partner/YOUR_ID"}),", the service returns a single business partner with the selected address information:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "businessPartner": "1003765",\n  "firstName": "Jane",\n  "lastName": "Roe",\n  "toBusinessPartnerAddress": [\n    {\n      "businessPartner": "1003765",\n      "addressId": "28241",\n      "cityName": "Palo Alto",\n      "houseNumber": "3410",\n      "postalCode": "CA 94304",\n      "streetName": "Hillview Avenue"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"final-code-review",children:"Final Code Review"}),"\n",(0,r.jsxs)(s.p,{children:["In this tutorial, you have created an API to read business partners.\nYou created endpoints to read a list of business partners as well as a specific business partner by ID.\nYou adjusted the results with ",(0,r.jsx)(s.code,{children:"select"})," and ",(0,r.jsx)(s.code,{children:"filter"})," statements to fit your needs.\nIn the ",(0,r.jsx)(s.a,{href:"/cloud-sdk/docs/js/v2/tutorials/address-manager/change",children:"next part"})," you will extend the API to change data."]}),"\n",(0,r.jsx)(s.p,{children:"You can find the complete code below:"}),"\n",(0,r.jsxs)(a.A,{groupId:"code-files",defaultValue:"business-partner.service.ts",values:[{label:"business-partner.service.ts",value:"business-partner.service.ts"},{label:"business-partner.controller.ts",value:"business-partner.controller.ts"}],children:[(0,r.jsx)(i.A,{value:"business-partner.service.ts",className:"code-block-height-js thin-scrollbar",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"import { Injectable } from '@nestjs/common';\nimport {\n  BusinessPartner,\n  BusinessPartnerAddress,\n  businessPartnerService\n} from '../../services/business-partner-service';\nimport * as dotenv from 'dotenv';\n\ndotenv.config();\nconst { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\n\n/**\n * Service implementation of address API.\n */\n@Injectable()\nexport class BusinessPartnerService {\n  /**\n   * Gets a list of all business partners.\n   * @returns List of business partner.\n   */\n  async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n    return businessPartnerApi\n      .requestBuilder()\n      .getAll()\n      .select(\n        businessPartnerApi.schema.BUSINESS_PARTNER,\n        businessPartnerApi.schema.FIRST_NAME,\n        businessPartnerApi.schema.LAST_NAME,\n        businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS.select(\n          businessPartnerAddressApi.schema.BUSINESS_PARTNER,\n          businessPartnerAddressApi.schema.ADDRESS_ID\n        )\n      )\n      .filter(businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY.equals('1'))\n      .execute({ url: 'http://localhost:3000' });\n  }\n\n  /**\n   * Get a business partner by ID.\n   * @param id - ID of the business partner to be returned.\n   * @returns The business partner with the given ID.\n   */\n  getBusinessPartnerById(id: string): Promise<BusinessPartner> {\n    return businessPartnerApi\n      .requestBuilder()\n      .getByKey(id)\n      .select(\n        businessPartnerApi.schema.BUSINESS_PARTNER,\n        businessPartnerApi.schema.FIRST_NAME,\n        businessPartnerApi.schema.LAST_NAME,\n        businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS.select(\n          businessPartnerAddressApi.schema.BUSINESS_PARTNER,\n          businessPartnerAddressApi.schema.ADDRESS_ID,\n          businessPartnerAddressApi.schema.POSTAL_CODE,\n          businessPartnerAddressApi.schema.CITY_NAME,\n          businessPartnerAddressApi.schema.STREET_NAME,\n          businessPartnerAddressApi.schema.HOUSE_NUMBER\n        )\n      )\n      .execute({ url: 'http://localhost:3000' });\n  }\n}\n"})})}),(0,r.jsx)(i.A,{value:"business-partner.controller.ts",className:"code-block-height-js thin-scrollbar",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"import {\n  Body,\n  Controller,\n  Delete,\n  Get,\n  HttpCode,\n  Param,\n  Post,\n  Put\n} from '@nestjs/common';\nimport {\n  BusinessPartner,\n  BusinessPartnerAddress\n} from '../../services/business-partner-service';\nimport { BusinessPartnerService } from './business-partner.service';\n\n@Controller('business-partner')\nexport class BusinessPartnerController {\n  constructor(\n    private readonly businessPartnerService: BusinessPartnerService\n  ) {}\n\n  @Get()\n  getAllBusinessPartners(): Promise<BusinessPartner[]> {\n    return this.businessPartnerService.getAllBusinessPartners();\n  }\n\n  @Get('/:id')\n  getBusinessPartnerById(@Param('id') id: string): Promise<BusinessPartner> {\n    return this.businessPartnerService.getBusinessPartnerById(id);\n  }\n\n  @Post('/:id/address')\n  @HttpCode(201)\n  createAddress(\n    @Body() requestBody: Record<string, any>,\n    @Param('id') id: string\n  ): Promise<BusinessPartnerAddress> {\n    return this.businessPartnerService.createAddress(requestBody, id);\n  }\n\n  @Put('/:businessPartnerId/address/:addressId')\n  updateBusinessPartnerAddress(\n    @Body() requestBody: Record<string, any>,\n    @Param('businessPartnerId') businessPartnerId: string,\n    @Param('addressId') addressId: string\n  ): Promise<BusinessPartnerAddress> {\n    return this.businessPartnerService.updateAddress(\n      requestBody,\n      businessPartnerId,\n      addressId\n    );\n  }\n\n  @Delete('/:businessPartnerId/address/:addressId')\n  @HttpCode(204)\n  deleteBusinessPartnerAddress(\n    @Param('businessPartnerId') businessPartnerId: string,\n    @Param('addressId') addressId: string\n  ): Promise<void> {\n    return this.businessPartnerService.deleteAddress(\n      businessPartnerId,\n      addressId\n    );\n  }\n}\n"})})})]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5594:(e,s,n)=>{n.d(s,{A:()=>i});n(96540);var r=n(34164);const t={tabItem:"tabItem__kUE"};var a=n(74848);function i(e){let{children:s,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,i),hidden:n,children:s})}},91517:(e,s,n)=>{n.d(s,{A:()=>x});var r=n(96540),t=n(34164),a=n(23104),i=n(56347),o=n(205),l=n(57485),d=n(31682),u=n(89466);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:n}=e;return(0,r.useMemo)((()=>{const e=s??function(e){return c(e).map((e=>{let{props:{value:s,label:n,attributes:r,default:t}}=e;return{value:s,label:n,attributes:r,default:t}}))}(n);return function(e){const s=(0,d.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function p(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:n}=e;const t=(0,i.W6)(),a=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const s=new URLSearchParams(t.location.search);s.set(a,e),t.replace({...t.location,search:s.toString()})}),[a,t])]}function b(e){const{defaultValue:s,queryString:n=!1,groupId:t}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:a}))),[d,c]=m({queryString:n,groupId:t}),[b,A]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[t,a]=(0,u.Dv)(n);return[t,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:t}),g=(()=>{const e=d??b;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),A(e)}),[c,A,a]),tabValues:a}}var A=n(92303);const g={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var v=n(74848);function f(e){let{className:s,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),u=e=>{const s=e.currentTarget,n=l.indexOf(s),t=o[n].value;t!==r&&(d(s),i(t))},c=e=>{let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;s=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;s=l[n]??l[l.length-1];break}}s?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},s),children:o.map((e=>{let{value:s,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===s?0:-1,"aria-selected":r===s,ref:e=>l.push(e),onKeyDown:c,onClick:u,...a,className:(0,t.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===s}),children:n??s},s)}))})}function P(e){let{lazy:s,children:n,selectedValue:t}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=a.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,s)=>(0,r.cloneElement)(e,{key:s,hidden:e.props.value!==t})))})}function y(e){const s=b(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,v.jsx)(f,{...e,...s}),(0,v.jsx)(P,{...e,...s})]})}function x(e){const s=(0,A.A)();return(0,v.jsx)(y,{...e,children:c(e.children)},String(s))}},93615:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/get-all-business-partners-0510c32e6f3710f1109d98875cafd976.png"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var r=n(96540);const t={},a=r.createContext(t);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);