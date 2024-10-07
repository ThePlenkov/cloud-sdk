"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5895],{64547:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=o(74848),s=o(28453),t=o(11610);const r={id:"troubleshooting-frequent-problems",title:"Troubleshooting SDK Java",sidebar_label:"Troubleshooting",description:"This article is a collection of frequently occurring symptoms and a short guidance on how to address them.",keywords:["sap","cloud","sdk","debugging","FAQ","common mistakes","problems"]},a=void 0,l={id:"troubleshooting-frequent-problems",title:"Troubleshooting SDK Java",description:"This article is a collection of frequently occurring symptoms and a short guidance on how to address them.",source:"@site/docs-java_versioned_docs/version-v3/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting-frequent-problems",permalink:"/cloud-sdk/docs/java/v3/troubleshooting-frequent-problems",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v3/troubleshooting.mdx",tags:[],version:"v3",frontMatter:{id:"troubleshooting-frequent-problems",title:"Troubleshooting SDK Java",sidebar_label:"Troubleshooting",description:"This article is a collection of frequently occurring symptoms and a short guidance on how to address them.",keywords:["sap","cloud","sdk","debugging","FAQ","common mistakes","problems"]},sidebar:"docsJavaSidebar",previous:{title:"Use OData v4 Client",permalink:"/cloud-sdk/docs/java/v3/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client"},next:{title:"Release Policy",permalink:"/cloud-sdk/docs/java/v3/release-policy"}},d={},c=[{value:"Solving Common Problems",id:"solving-common-problems",level:2},{value:"Tenant or Principal Not Available",id:"tenant-or-principal-not-available",level:2},{value:"Provider Instead of Subscriber Account Used",id:"provider-instead-of-subscriber-account-used",level:2},{value:"JSON Web Token Validation Fails",id:"json-web-token-validation-fails",level:2},{value:"Connecting to an ERP System fails",id:"connecting-to-an-erp-system-fails",level:2},{value:"Compilation Failures in the Generated OData Virtual Data Model Classes",id:"compilation-failures-in-the-generated-odata-virtual-data-model-classes",level:2},{value:"Compilation or Runtime Failures After Updating the SAP Cloud SDK Version",id:"compilation-or-runtime-failures-after-updating-the-sap-cloud-sdk-version",level:2},{value:"The Java App Has Good Performance on Your Local Machine but Utilizes 100% CPU on SAP Business Technology Platform, Cloud Foundry Environment",id:"the-java-app-has-good-performance-on-your-local-machine-but-utilizes-100-cpu-on-sap-business-technology-platform-cloud-foundry-environment",level:2},{value:"Request via Cloud Connector Fails with HTTP 407",id:"request-via-cloud-connector-fails-with-http-407",level:2},{value:"<code>No Such Method: com.google.gson.JsonParser.parseReader</code>",id:"no-such-method-comgooglegsonjsonparserparsereader",level:2},{value:"<code>Class Not Found: JsonEncoder</code>",id:"class-not-found-jsonencoder",level:2},{value:"OData Request Rejected by or Failed in OData Service",id:"odata-request-rejected-by-or-failed-in-odata-service",level:2},{value:"<code>java.lang.IllegalArgumentException: JClass name empty</code>",id:"javalangillegalargumentexception-jclass-name-empty",level:2},{value:"<code>DestinationAccessException: Failed to read authentication token. The destination service responded with an error: Could not verify the provided CSRF token because your session was not found</code>",id:"destinationaccessexception-failed-to-read-authentication-token-the-destination-service-responded-with-an-error-could-not-verify-the-provided-csrf-token-because-your-session-was-not-found",level:2},{value:"<code>SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target</code>",id:"sslhandshakeexception-pkix-path-building-failed-sunsecurityprovidercertpathsuncertpathbuilderexception-unable-to-find-valid-certification-path-to-requested-target",level:2},{value:"Olingo Dependency Conflicts",id:"olingo-dependency-conflicts",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.A,{}),"\n",(0,i.jsx)(n.h2,{id:"solving-common-problems",children:"Solving Common Problems"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Check if you're using the latest ",(0,i.jsx)(n.a,{href:"/cloud-sdk/docs/java/release-notes",children:"SAP Cloud SDK version"}),".\nWe release significant updates bi-weekly."]}),"\n",(0,i.jsxs)(n.li,{children:["Try searching on ",(0,i.jsx)(n.a,{href:"https://stackoverflow.com/questions/tagged/sap-cloud-sdk",children:"Stack Overflow"}),"\nYou can ",(0,i.jsx)(n.a,{href:"https://stackoverflow.com/questions",children:"ask there questions"})," as well by tagging it with ",(0,i.jsx)(n.code,{children:"sap-cloud-sdk"})]}),"\n",(0,i.jsx)(n.li,{children:"Check this page for known solutions for most frequent problems"}),"\n",(0,i.jsxs)(n.li,{children:["Welcome to our ",(0,i.jsx)(n.a,{href:"/docs/overview/get-support",children:"awesome support"})," if nothing else helps."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tenant-or-principal-not-available",children:"Tenant or Principal Not Available"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Symptoms"})}),(0,i.jsx)(n.p,{children:"Tenant or principal information is not available or an incorrect tenant is used."})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A subscriber based JWT is passed in, but its validation fails, causing the SAP Cloud SDK to fall back to the provider account.\nSee ",(0,i.jsx)(n.a,{href:"#json-web-token-validation-fails",children:"JWT validation fails"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["An operation is performed in an asynchronous manner without propagating the ",(0,i.jsx)(n.code,{children:"ThreadContext"}),".\nSee ",(0,i.jsx)(n.a,{href:"features/multi-tenancy/thread-context#running-asynchronous-operations",children:"Running Asynchronous Operations"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The SAP Cloud SDK components are not registered as listeners on incoming requests.\nSee ",(0,i.jsx)(n.a,{href:"getting-started#framework-integration",children:"Framework Support"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"There was no JWT in the authorization header."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A BAPI/RFC call was attempted while using resilience or multithreading capabilities of the SAP Cloud SDK.\nSee ",(0,i.jsx)(n.a,{href:"features/bapi-and-rfc/overview#subscriber-tenant-is-not-found-at-runtime",children:"Subscriber Tenant Is Not Found at Runtime"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"provider-instead-of-subscriber-account-used",children:"Provider Instead of Subscriber Account Used"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Symptoms"})}),(0,i.jsx)(n.p,{children:"Destinations are returned only for the provider account, but not for a subscriber account."})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The SAP Cloud SDK defaults back to the provider account if no tenant information is available.\nSee the above section on ",(0,i.jsx)(n.a,{href:"#tenant-or-principal-not-available",children:"Tenant or Principal not available"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"json-web-token-validation-fails",children:"JSON Web Token Validation Fails"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Symptoms:"})}),(0,i.jsx)(n.p,{children:"Logs show JWT validation exceptions, Tenant information is not available."})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The SAP Cloud SDK version might be outdated.\nCheck with the ",(0,i.jsx)(n.a,{href:"https://search.maven.org/artifact/com.sap.cloud.sdk/sdk-bom",children:"latest SAP Cloud SDK version"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"connecting-to-an-erp-system-fails",children:"Connecting to an ERP System fails"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Symptoms:"})}),(0,i.jsxs)(n.p,{children:["The ERP system unexpectedly responds with ",(0,i.jsx)(n.em,{children:"401: Unauthorized"})," or ",(0,i.jsx)(n.em,{children:"403: Forbidden"}),"."]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The SAP Client and Locale headers will be missing if the ",(0,i.jsx)(n.code,{children:"Destination"})," is not an ",(0,i.jsx)(n.code,{children:"ErpHttpDestination"}),".\nSee ",(0,i.jsx)(n.a,{href:"features/connectivity/destination-service#connect-to-on-premise-s4hana-system",children:"Connecting to SAP S/4HANA"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"compilation-failures-in-the-generated-odata-virtual-data-model-classes",children:"Compilation Failures in the Generated OData Virtual Data Model Classes"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Symptoms:"})}),(0,i.jsxs)(n.p,{children:["Compilation fails due to missing ",(0,i.jsx)(n.em,{children:"Getters"})," and ",(0,i.jsx)(n.em,{children:"Setters"})," on entity objects."]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Getters and Setters will be missing if ",(0,i.jsx)(n.a,{href:"https://projectlombok.org/",children:"Lombok"})," is not present in the dependency tree of your project.\nSee ",(0,i.jsx)(n.a,{href:"features/odata/vdm-generator#using-the-odata-generator",children:"Using the OData Generator"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Getters and Setters will be shown red if your IDE does not support Lombok. Hence, install the Lombok plugin for your IDE.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For IntelliJ, install ",(0,i.jsx)(n.a,{href:"https://plugins.jetbrains.com/plugin/6317-lombok",children:"the Lombok plugin"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["For Eclipse, follow ",(0,i.jsx)(n.a,{href:"https://projectlombok.org/setup/eclipse",children:"this guide"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"compilation-or-runtime-failures-after-updating-the-sap-cloud-sdk-version",children:"Compilation or Runtime Failures After Updating the SAP Cloud SDK Version"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Symptoms:"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"MethodNotFound"}),", ",(0,i.jsx)(n.code,{children:"ClassDefNotFound"})," or similar exceptions occur."]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Conflicting dependency versions may cause such issues.\nSee the section on ",(0,i.jsx)(n.a,{href:"/cloud-sdk/docs/java/guides/manage-dependencies#dealing-with-dependency-conflicts",children:"Managing Dependencies"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"the-java-app-has-good-performance-on-your-local-machine-but-utilizes-100-cpu-on-sap-business-technology-platform-cloud-foundry-environment",children:"The Java App Has Good Performance on Your Local Machine but Utilizes 100% CPU on SAP Business Technology Platform, Cloud Foundry Environment"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Symptoms:"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Java app executes multiple threads and runs with good performance on a powerful local machine."}),"\n",(0,i.jsx)(n.li,{children:"The performance significantly drops after the app is deployed to SAP Business Technology Platform - Cloud Foundry and CPU utilization is always around 100%."}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A powerful developer's machine usually has much better CPU and memory capacity than a standard cloud instance."}),"\n",(0,i.jsx)(n.li,{children:"SAP BTP, Cloud Foundry environment provides 1/4 of CPU unit per every GB of memory.\nWith maximum memory per instance of 8 GB, you can get a maximum of 2 CPU cores."}),"\n",(0,i.jsxs)(n.li,{children:["All the limitations are subject to change.\nPlease check the latest details about ",(0,i.jsx)(n.a,{href:"https://help.sap.com/viewer/3504ec5ef16548778610c7e89cc0eac3/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html#loio9809fa4f02cb4696baea5c23d6eaac94",children:"SAP BTP, Cloud Foundry Environment quotas and limitations"})]}),"\n",(0,i.jsx)(n.li,{children:"If even after achieving the maximum vertical scale of your instance, your app doesn't reach the desired performance level, try to optimize it.\nConsider scaling it horizontally or different custom solutions to boost performance where it lags."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"request-via-cloud-connector-fails-with-http-407",children:"Request via Cloud Connector Fails with HTTP 407"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Symptoms"})}),(0,i.jsx)(n.p,{children:"In your application log you find the HTTP error code 407 and the request targets an On-Premise system via the SAP Cloud Connector."})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["You are caching the ",(0,i.jsx)(n.code,{children:"HttpDestination"})," instance in your application code instead of retrieving it for each request.\nSince the ",(0,i.jsx)(n.code,{children:"HttpDestination"})," object stores the JWT needed for passing the SAP Cloud Connector, the JWT does not get refreshed after its expiration."]}),"\n",(0,i.jsxs)(n.p,{children:["To solve this issue, retrieve the ",(0,i.jsx)(n.code,{children:"HttpDestination"})," for each request again with the ",(0,i.jsx)(n.code,{children:"DestinationAccessor"})," API.\nThere is no need to worry about performance, because the SAP Cloud SDK uses an optimized built-in cache for Destinations."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"no-such-method-comgooglegsonjsonparserparsereader",children:(0,i.jsx)(n.code,{children:"No Such Method: com.google.gson.JsonParser.parseReader"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Symptoms"})}),(0,i.jsxs)(n.p,{children:["In your application log you find exception ",(0,i.jsx)(n.code,{children:"java.lang.NoSuchMethodError: com.google.gson.JsonParser.parseReader(Lcom/google/gson/stream/JsonReader;)Lcom/google/gson/JsonElement;"}),"."]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Your project uses the ",(0,i.jsx)(n.a,{href:"https://github.com/google/gson",children:"GSON library"})," in version ",(0,i.jsx)(n.code,{children:"2.8.5"})," or earlier.\nThis could happen if you do not use the SAP Cloud SDK Bill-of-Material.\nTo solve this issue, update GSON to at least version ",(0,i.jsx)(n.code,{children:"2.8.6"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"class-not-found-jsonencoder",children:(0,i.jsx)(n.code,{children:"Class Not Found: JsonEncoder"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Symptoms"})}),(0,i.jsxs)(n.p,{children:["Your application does not start and fails with the error message ",(0,i.jsx)(n.code,{children:'"Could not create component [encoder] of type [com.sap.hcp.cf.logback.encoder.JsonEncoder] java.lang.ClassNotFoundException: com.sap.hcp.cf.logback.encoder.JsonEncoder"'}),"."]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Your project uses the ",(0,i.jsx)(n.a,{href:"http://logback.qos.ch/",children:"Logback library"})," for application logging.\nThe required dependency ",(0,i.jsx)(n.code,{children:"com.sap.hcp.cf.logging:cf-java-logging-support-logback"})," is missing.\nTo solve this issue, add this dependency to your project.\nAlso, use the SAP Cloud SDK Bill-Of-Material in your POM to manage the version of this dependency."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"odata-request-rejected-by-or-failed-in-odata-service",children:"OData Request Rejected by or Failed in OData Service"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Symptoms"})}),(0,i.jsx)(n.p,{children:"Your OData request returns with a 400 (bad request) or 500 (server error) HTTP code."})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The service may not be implemented correctly or deviate from the OData standard / conventions."}),"\n",(0,i.jsxs)(n.p,{children:["Check the request being sent out (",(0,i.jsx)(n.a,{href:"./guides/logging-overview",children:"looking at HTTP logs"}),") against the ",(0,i.jsx)(n.a,{href:"https://www.odata.org/documentation/",children:"OData documentation"}),".\nIf the service deviates from OData conventions, try using the more ",(0,i.jsx)(n.a,{href:"./features/odata/generic-untyped-odata-client",children:"low-level generic OData client"})," which gives you more flexibility to adapt requests."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The SAP Cloud SDK may send an incorrect OData request."}),"\n",(0,i.jsxs)(n.p,{children:["Verify that the request the SAP Cloud SDK sends out (",(0,i.jsx)(n.a,{href:"./guides/logging-overview",children:"looking at HTTP logs"}),") does not conform to the ",(0,i.jsx)(n.a,{href:"https://www.odata.org/documentation/",children:"OData documentation"}),".\nIn that case please ",(0,i.jsx)(n.a,{href:"https://github.com/SAP/cloud-sdk/issues/new?assignees=&labels=Java&template=sap-cloud-sdk-for-java-issue.md&title=",children:"raise an issue on our GitHub"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In addition, you can leverage the ",(0,i.jsx)(n.a,{href:"./features/odata/generic-untyped-odata-client",children:"low-level generic OData client"})," which gives you more flexibility to adapt requests to overcome potential issues with the typed APIs."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"javalangillegalargumentexception-jclass-name-empty",children:(0,i.jsx)(n.code,{children:"java.lang.IllegalArgumentException: JClass name empty"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Symptoms"})}),(0,i.jsxs)(n.p,{children:["While generating a type-safe API client for an OData service, you encounter the exception message ",(0,i.jsx)(n.code,{children:'"java.lang.IllegalArgumentException: JClass name empty"'}),"."]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The service specification (",(0,i.jsx)(n.code,{children:"EDMX"})," file) contains an entity that is named ",(0,i.jsx)(n.code,{children:"Type"}),", ",(0,i.jsx)(n.code,{children:"Type_"}),", or just ",(0,i.jsx)(n.code,{children:"_"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, both the OData V2 and V4 VDM generators use the ",(0,i.jsx)(n.code,{children:"S4HanaNamingStrategy"})," to generate valid Java names from the given service specification.\nHereby, it removes pre- and suffixes that are commonly used in SAP service specifications, such as the suffixes ",(0,i.jsx)(n.code,{children:"Type"})," and ",(0,i.jsx)(n.code,{children:"_"})," for entities.\nIn special cases, where an entity name consist of those suffixes only, that logic leads to the generation of an empty class name, which, in turn, then results in the observed exception."]}),"\n",(0,i.jsxs)(n.p,{children:["To solve that issue, you can change the naming strategy used by the generator.\nThe SAP Cloud SDK additionally includes the ",(0,i.jsx)(n.code,{children:"com.sap.cloud.sdk.datamodel.odata.utility.SimpleNamingStrategy"})," out-of-the-box, which does not perform any unnecessary pre- and suffix removal."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"destinationaccessexception-failed-to-read-authentication-token-the-destination-service-responded-with-an-error-could-not-verify-the-provided-csrf-token-because-your-session-was-not-found",children:(0,i.jsx)(n.code,{children:"DestinationAccessException: Failed to read authentication token. The destination service responded with an error: Could not verify the provided CSRF token because your session was not found"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Symptoms"})}),(0,i.jsxs)(n.p,{children:["When running ",(0,i.jsx)(n.code,{children:"Destination#asHttp()"})," you encounter an exception message like ",(0,i.jsx)(n.code,{children:'"DestinationAccessException: Failed to read authentication token. The destination service responded with an error: Could not verify the provided CSRF token because your session was not found"'}),"."]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The Destination Service on Cloud Foundry is unable to generate an authentication token that will be used in later requests.\nIn the service configuration, the destination entry references a token service endpoint that could not communicate correctly with the Destination Service."}),"\n",(0,i.jsxs)(n.p,{children:["To solve that issue, please check every field in the destination configuration for valid input.\nPlease find the official ",(0,i.jsx)(n.a,{href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/42a0e6b966924f2e902090bdf435e1b2.html",children:"documentation from the Destination Service"}),' for more details.\nThe value for field "Token Service URL" may require the full service endpoint path, including e.g. ',(0,i.jsx)(n.code,{children:"/oauth/token"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sslhandshakeexception-pkix-path-building-failed-sunsecurityprovidercertpathsuncertpathbuilderexception-unable-to-find-valid-certification-path-to-requested-target",children:(0,i.jsx)(n.code,{children:"SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Symptoms"})}),(0,i.jsxs)(n.p,{children:["When accessing an On-Premise system from your local machine the HTTP client is unable to establish a secure connection to the target server.\nYou may experience the follow-up error message: ",(0,i.jsx)(n.code,{children:'"ODataConnectionException: Connection was aborted."'})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To validate the SSL connection your Java runtime would need to check the chain of trusted certificates.\nPlease review your local Java trust store."}),"\n",(0,i.jsxs)(n.p,{children:["To solve the issue there are many tutorials on how to register certificates.\nHowever, if you require a quick solution for your local development environmment, you can add a special flag to your ",(0,i.jsx)(n.code,{children:'"destinations"'})," environment variable: ",(0,i.jsx)(n.code,{children:'"TrustAll" : "true"'}),".\nThis will disable the certificate validation on your local runtime."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"olingo-dependency-conflicts",children:"Olingo Dependency Conflicts"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Symptoms"})}),(0,i.jsxs)(n.p,{children:["In your CAP based application you encounter exception messages like ",(0,i.jsx)(n.code,{children:"NoSuchMethodError"})," or ",(0,i.jsx)(n.code,{children:"ClassDefNotFoundException"})," on methods or classes of ",(0,i.jsx)(n.code,{children:"org.apache.olingo.odata2"}),"."]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Possible causes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The SAP Cloud SDK brings the dependency ",(0,i.jsx)(n.code,{children:"com.sap.cloud.servicesdk:odata-v2-lib"})," which internally repackages Olingo.\nIf you don't rely on any deprecated OData V2 functionality of the SAP Cloud SDK this dependency is not required and can be excluded."]}),"\n",(0,i.jsxs)(n.p,{children:["Add this exclusion in all places where ",(0,i.jsx)(n.code,{children:"odata-v2-lib"})," is coming into your ",(0,i.jsx)(n.code,{children:"mvn dependency:tree"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<exclusion>\n  <groupId>com.sap.cloud.servicesdk</groupId>\n  <artifactId>odata-v2-lib</artifactId>\n</exclusion>\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11610:(e,n,o)=>{o.d(n,{A:()=>s});o(96540);var i=o(74848);const s=function(e){let{align:n}=e;return(0,i.jsx)("span",{className:n?"col text--right":"",children:(0,i.jsx)("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom",children:(0,i.jsx)("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})})})}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var i=o(96540);const s={},t=i.createContext(s);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);