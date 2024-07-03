"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4929],{54750:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=t(74848),s=t(28453);const a={id:"frequently-asked-questions",title:"Frequently Asked Questions",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"FAQ",description:"You asked! We answered! We collected here the most frequent question about SAP Cloud SDK for Java.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},r=void 0,i={id:"frequently-asked-questions",title:"Frequently Asked Questions",description:"You asked! We answered! We collected here the most frequent question about SAP Cloud SDK for Java.",source:"@site/docs-java_versioned_docs/version-v4/faq.mdx",sourceDirName:".",slug:"/frequently-asked-questions",permalink:"/cloud-sdk/docs/java/v4/frequently-asked-questions",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v4/faq.mdx",tags:[],version:"v4",frontMatter:{id:"frequently-asked-questions",title:"Frequently Asked Questions",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"FAQ",description:"You asked! We answered! We collected here the most frequent question about SAP Cloud SDK for Java.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJavaSidebar",previous:{title:"Support",permalink:"/cloud-sdk/docs/java/v4/support"}},l={},d=[{value:"General Questions",id:"general-questions",level:2},{value:"How Often Do You Release a New SAP Cloud SDK Version?",id:"how-often-do-you-release-a-new-sap-cloud-sdk-version",level:3},{value:"Should I Update With Every Release?",id:"should-i-update-with-every-release",level:3},{value:"Which Java Versions Are Supported by the SAP Cloud SDK?",id:"which-java-versions-are-supported-by-the-sap-cloud-sdk",level:3},{value:"Spring Boot 3 and Java 17 support",id:"spring-boot-3-and-java-17-support",level:4},{value:"Can I Use Features Annotated as Beta in Production?",id:"can-i-use-features-annotated-as-beta-in-production",level:3},{value:"I Think I Found a Bug in the SAP Cloud SDK, What Should I Do?",id:"i-think-i-found-a-bug-in-the-sap-cloud-sdk-what-should-i-do",level:3},{value:"How Do I Remotely Debug My App on SAP BTP Cloud Foundry?",id:"how-do-i-remotely-debug-my-app-on-sap-btp-cloud-foundry",level:3},{value:"I&#39;m Observing a <code>DefaultHttpClientFactory not a subtype</code> Exception",id:"im-observing-a-defaulthttpclientfactory-not-a-subtype-exception",level:3},{value:"Incoming Requests Fail Because a Request Header is Too Large",id:"incoming-requests-fail-because-a-request-header-is-too-large",level:3},{value:"OData Related Questions",id:"odata-related-questions",level:2},{value:"What Versions of OData Protocol Do You Support?",id:"what-versions-of-odata-protocol-do-you-support",level:3},{value:"Do You Support All OData Features?",id:"do-you-support-all-odata-features",level:3},{value:"I Receive an OData Error/Exception When Using SAP Cloud SDK for Java",id:"i-receive-an-odata-errorexception-when-using-sap-cloud-sdk-for-java",level:3},{value:"How To Use the OData Attachment Service?",id:"how-to-use-the-odata-attachment-service",level:3},{value:"Open API Related Questions",id:"open-api-related-questions",level:2},{value:"Do You Support RESTful Services?",id:"do-you-support-restful-services",level:3},{value:"Questions About SAP Business Technology Platform",id:"questions-about-sap-business-technology-platform",level:2},{value:"Do You Support SAP BTP, Cloud Foundry Environment?",id:"do-you-support-sap-btp-cloud-foundry-environment",level:3},{value:"Do You Support SAP Business Technology Platform - Neo?",id:"do-you-support-sap-business-technology-platform---neo",level:3},{value:"Do You Support Reactive Spring Technology, e.g. Webflux?",id:"do-you-support-reactive-spring-technology-eg-webflux",level:3},{value:"Is the SAP Cloud SDK for Java affected by the Log4Shell/CVE-2021-44228 Vulnerability?",id:"is-the-sap-cloud-sdk-for-java-affected-by-the-log4shellcve-2021-44228-vulnerability",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"general-questions",children:"General Questions"}),"\n",(0,o.jsx)(n.h3,{id:"how-often-do-you-release-a-new-sap-cloud-sdk-version",children:"How Often Do You Release a New SAP Cloud SDK Version?"}),"\n",(0,o.jsxs)(n.p,{children:["We release a ",(0,o.jsx)(n.a,{href:"/cloud-sdk/docs/java/release-policy#minor-release-schedule",children:"minor version"})," every two weeks.\nAll the features that are ",(0,o.jsx)(n.em,{children:"Generally Available"})," or ",(0,o.jsx)(n.em,{children:"Beta"})," get into the next ",(0,o.jsx)(n.a,{href:"https://search.maven.org/artifact/com.sap.cloud.sdk/sdk-bom",children:"release"}),".\nYou can find the latest SAP Cloud SDK version and the list of previous releases ",(0,o.jsx)(n.a,{href:"/cloud-sdk/docs/java/release-notes",children:"here"})," or on ",(0,o.jsx)(n.a,{href:"https://search.maven.org/artifact/com.sap.cloud.sdk/sdk-bom",children:"Maven Central"}),".\nFind more details in our ",(0,o.jsx)(n.a,{href:"/cloud-sdk/docs/java/release-policy",children:"release policy"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"should-i-update-with-every-release",children:"Should I Update With Every Release?"}),"\n",(0,o.jsxs)(n.p,{children:["The general recommendation is ",(0,o.jsx)(n.em,{children:"YES"}),".\nThis way you'll reduce the effort to keep up with the fast pace of cloud development.\nWe try to keep stable functionality consistent and explicitly notify about breaking changes.\nBe cautious about using features annotated as ",(0,o.jsx)(n.em,{children:"Beta"})," because their API can change with every release."]}),"\n",(0,o.jsx)(n.h3,{id:"which-java-versions-are-supported-by-the-sap-cloud-sdk",children:"Which Java Versions Are Supported by the SAP Cloud SDK?"}),"\n",(0,o.jsxs)(n.p,{children:["The SAP Cloud SDK itself is compatible with Java 8, 11 ",(0,o.jsx)(n.a,{href:"#spring-boot-3-and-java-17-support",children:"and 17"}),".\nOther Java versions may work as well, depending on your setup, but are not yet tested by us.\nNote that the SAP Business Technology Platform Cloud Foundry environment only supports Java 8 out of the box, but can be configured to also run with Java 11 or 17.\nSAP Business Technology Platform Neo only supports Java 8."]}),"\n",(0,o.jsx)(n.h4,{id:"spring-boot-3-and-java-17-support",children:"Spring Boot 3 and Java 17 support"}),"\n",(0,o.jsxs)(n.p,{children:["SAP Cloud SDK can be used with JakartaEE (e.g. via Spring Boot 3, Spring 6, and Java 17) thanks to the experimental module ",(0,o.jsx)(n.code,{children:"servlet-jakarta"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"In case you are migrating your application from Spring Boot 2, the below steps make sure the Cloud SDK continues to work smoothly:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Set Spring Boot version to 3 and Java version to 17:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<properties>\n    <java.version>17</java.version>\n    <maven.compiler.source>${java.version}</maven.compiler.source>\n    <maven.compiler.target>${java.version}</maven.compiler.target>\n    <maven.compiler.testSource>${java.version}</maven.compiler.testSource>\n    <maven.compiler.testTarget>${java.version}</maven.compiler.testTarget>\n</properties>\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Place the Spring Boot dependency management ",(0,o.jsx)(n.strong,{children:"before"})," the SDK BOM:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-dependencies</artifactId>\n            <version>3.0.2</version> \x3c!-- TODO: replace this with the most recent version --\x3e\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n        <dependency>\n            <groupId>com.sap.cloud.security</groupId>\n            <artifactId>java-bom</artifactId>\n            <version>3.1.3</version> \x3c!-- TODO: replace this with the most recent version --\x3e\n            <scope>import</scope>\n            <type>pom</type>\n        </dependency>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>4.20.0</version> \x3c!-- TODO: replace this with the most recent version --\x3e\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Replace any ",(0,o.jsx)(n.code,{children:"javax"})," dependency with the respective ",(0,o.jsx)(n.code,{children:"jakarta"})," dependency:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",children:"-<dependency>\n-    <groupId>javax.inject</groupId>\n-    <artifactId>javax.inject</artifactId>\n-</dependency>\n+<dependency>\n+    <groupId>jakarta.inject</groupId>\n+    <artifactId>jakarta.inject-api</artifactId>\n+    <version>2.0.1</version>\n+</dependency>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Don't forget to replace ",(0,o.jsx)(n.code,{children:"javax"})," imports in Java files with ",(0,o.jsx)(n.code,{children:"jakarta"})," imports."]}),"\n",(0,o.jsxs)(n.p,{children:["Also remember to migrate all your dependencies to their respective ",(0,o.jsx)(n.code,{children:"jakarta"})," versions if applicable."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, if you were previously using ",(0,o.jsx)(n.code,{children:"com.sap.hcp.cf.logging:cf-java-logging-support-servlet"})," for application logging you must instead switch to using ",(0,o.jsx)(n.code,{children:"com.sap.hcp.cf.logging:cf-java-logging-support-servlet-jakarta"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",children:"-<dependency>\n-    <groupId>com.sap.hcp.cf.logging</groupId>\n-    <artifactId>cf-java-logging-support-servlet</artifactId>\n-</dependency>\n+<dependency>\n+    <groupId>com.sap.hcp.cf.logging</groupId>\n+    <artifactId>cf-java-logging-support-servlet-jakarta</artifactId>\n+    <version>latest-lib-version</version>\n+</dependency>\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["Add the new ",(0,o.jsx)(n.code,{children:"servlet-jakarta"})," module:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<dependencies>\n    <dependency>\n        <groupId>com.sap.cloud.sdk.cloudplatform</groupId>\n        <artifactId>servlet-jakarta</artifactId>\n    </dependency>\n</dependencies>\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsxs)(n.li,{children:["When using the ",(0,o.jsx)(n.code,{children:"@ServletComponentScan"})," annotation as suggested, please update the namespace:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",children:'- @ServletComponentScan({"com.sap.cloud.sdk", ...\n+ @ServletComponentScan({"com.sap.cloud.sdk.cloudplatform.servletjakarta", ...\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"6",children:["\n",(0,o.jsx)(n.li,{children:"Configure Cloud Foundry for Java 17"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://help.sap.com/docs/btp/sap-business-technology-platform/sapmachine#activation",children:"Configure SAP Java Buildpack to run with Java 17"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Add the SAPMachine JRE version 17 in you ",(0,o.jsx)(n.code,{children:"manifest.yml"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",children:"  env:\n+   JBP_CONFIG_COMPONENTS: 'jres: [''com.sap.xs.java.buildpack.jre.SAPMachineJRE'']'\n+   JBP_CONFIG_SAP_MACHINE_JRE: '{ use_offline_repository: false, version: 17.0.5 }'\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"can-i-use-features-annotated-as-beta-in-production",children:"Can I Use Features Annotated as Beta in Production?"}),"\n",(0,o.jsxs)(n.p,{children:["We ",(0,o.jsx)(n.strong,{children:"do not recommend"})," using the API that is marked unstable in the production code.\nWe do not guarantee any API compatibility for future updates and the features might be experimental.\nYou can use these features to test new functionality, provide us feedback, and plan migration steps when ",(0,o.jsx)(n.em,{children:"Beta"})," features are released as ",(0,o.jsx)(n.em,{children:"General Availability"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"i-think-i-found-a-bug-in-the-sap-cloud-sdk-what-should-i-do",children:"I Think I Found a Bug in the SAP Cloud SDK, What Should I Do?"}),"\n",(0,o.jsxs)(n.p,{children:["Please, report it to us via any available channel.\nThe preferred support channel is ",(0,o.jsx)(n.a,{href:"https://stackoverflow.com/questions/tagged/sap-cloud-sdk",children:"Stack Overflow"}),".\nYou can also create an issue on the SAP Cloud SDK external GitHub repository or use the internal one if you're an SAP employee."]}),"\n",(0,o.jsx)(n.h3,{id:"how-do-i-remotely-debug-my-app-on-sap-btp-cloud-foundry",children:"How Do I Remotely Debug My App on SAP BTP Cloud Foundry?"}),"\n",(0,o.jsx)(n.p,{children:"Use these CF CLI instructions to activate debugging for your App."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"TomEE (when using SAP Java Buildpack)"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cf ssh application -c \"app/META-INF/.sap_java_buildpack/sapjvm/bin/jvmmon <<< 'start debugging'\"\ncf ssh application -N -T -L 8000:localhost:8000\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Spring"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'cf set-env application JBP_CONFIG_DEBUG "{enabled: true}"\ncf restage application\ncf ssh -N -T -L 8000:localhost:8000 application\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Check out this ",(0,o.jsx)(n.a,{href:"https://blogs.sap.com/2019/07/24/remote-debugging-on-cloud-foundry/",children:"blog post"})," for step-by-step remote debugging instructions.\nYou'll also learn how to get debug information into IntelliJ IDEA."]}),"\n",(0,o.jsx)(n.admonition,{title:"warning",type:"warning",children:(0,o.jsxs)(n.p,{children:["Do not forget to revert any changes you made to your ",(0,o.jsx)(n.code,{children:"mta.yml"})," (and/or environment) after your debugging session.\nWe strongly discourage users from running productive applications in debug mode!"]})}),"\n",(0,o.jsxs)(n.h3,{id:"im-observing-a-defaulthttpclientfactory-not-a-subtype-exception",children:["I'm Observing a ",(0,o.jsx)(n.code,{children:"DefaultHttpClientFactory not a subtype"})," Exception"]}),"\n",(0,o.jsx)(n.p,{children:"Application that rely on the SAP Java Buildpack, which is always true for application that require JCo, may throw the following exception when trying to access a RFC destination:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"java.util.ServiceConfigurationError: com.sap.cloud.security.client.HttpClientFactory: com.sap.cloud.security.client.DefaultHttpClientFactory not a subtype\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This issue is caused by a dependency scope conflict and can be solved by following ",(0,o.jsx)(n.a,{href:"./guides/manage-dependencies#avoiding-scope-conflicts",children:"our guidance"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"incoming-requests-fail-because-a-request-header-is-too-large",children:"Incoming Requests Fail Because a Request Header is Too Large"}),"\n",(0,o.jsxs)(n.p,{children:["In some cases you may need to configure your app/server to accept larger request headers.\nIf your app is responding with 400 codes and you see a log entry ",(0,o.jsx)(n.code,{children:"Request header is too large"})," make sure to increase the header size limit."]}),"\n",(0,o.jsxs)(n.p,{children:["Refer to ",(0,o.jsx)(n.a,{href:"https://www.baeldung.com/spring-boot-max-http-header-size#overview-1",children:"this guide"})," on how to achieve this for Spring based applications.\nIn case you are deploying a WAR file with the SAP Java Buildpack refer to ",(0,o.jsx)(n.a,{href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/79c039ab43b946a7b50c5d0326a3b40b.html#customizing-the-sap-java-buildpack-defaults",children:"this documentation"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"odata-related-questions",children:"OData Related Questions"}),"\n",(0,o.jsx)(n.h3,{id:"what-versions-of-odata-protocol-do-you-support",children:"What Versions of OData Protocol Do You Support?"}),"\n",(0,o.jsxs)(n.p,{children:["We support OData v2 and OData v4 services.\nYou can use the pregenerated client libraries supplied with the SAP Cloud SDK or generate your client from the SAP Cloud SDK specification.\n",(0,o.jsx)(n.a,{href:"features/odata/overview",children:"Find more details here."})]}),"\n",(0,o.jsx)(n.h3,{id:"do-you-support-all-odata-features",children:"Do You Support All OData Features?"}),"\n",(0,o.jsxs)(n.p,{children:["We support most of the OData features that are exposed by SAP services.\nHowever, the ",(0,o.jsx)(n.a,{href:"https://www.odata.org/documentation/",children:"OData specification"})," is huge and contains many features that would see rare to no use.\nIf you need a feature that is not yet supported by SAP Cloud SDK, please make a feature request via email ",(0,o.jsx)(n.a,{href:"mailto:cloudsdk@sap.com",children:"cloudsdk@sap.com"})," or create an issue towards one of our repositories."]}),"\n",(0,o.jsx)(n.h3,{id:"i-receive-an-odata-errorexception-when-using-sap-cloud-sdk-for-java",children:"I Receive an OData Error/Exception When Using SAP Cloud SDK for Java"}),"\n",(0,o.jsxs)(n.p,{children:["You may see some errors while developing.\nThese errors are not always caused by flaws in the SAP Cloud SDK as we often see inconsistent OData protocol handling by different services.\nSome of them even have known flaws for which we have workarounds.\nIf you can't solve your issue via debugging and experimenting, please, report your incident via ",(0,o.jsx)(n.a,{href:"https://stackoverflow.com/questions/tagged/sap-cloud-sdk",children:"Stack Overflow"})," or our GitHub repositories."]}),"\n",(0,o.jsx)(n.h3,{id:"how-to-use-the-odata-attachment-service",children:"How To Use the OData Attachment Service?"}),"\n",(0,o.jsxs)(n.p,{children:["You are trying to use the virtual data model for ",(0,o.jsx)(n.a,{href:"https://api.sap.com/api/API_CV_ATTACHMENT_SRV/overview",children:"AttachmentService"})," as provided by the SAP Cloud SDK.\nHowever, it's impossible to run the request successfully, the attachments will not be uploaded.\nThis is caused by an outdated specification, for which the Java classes are automatically generated.\nAs a consequence the generated ",(0,o.jsx)(n.code,{children:"AttachmentService"})," interface and ",(0,o.jsx)(n.code,{children:"DefaultAttachmentService"})," implementation cannot be used reliably."]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"We recommend running manual requests instead (click to expand)."}),(0,o.jsxs)("ol",{children:[(0,o.jsx)("li",{children:"Request CSRF token with HEAD request"}),(0,o.jsx)("li",{children:"Upload Attachment with POST request."})]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'// Resolve HttpClient instance\nHttpDestination destination;\nHttpClient httpClient = HttpClientAccessor.getHttpClient(destination);\n\n// Resolve CSRF token, internally runs HEAD request\nString csrfToken = new DefaultCsrfTokenRetriever()\n    .retrieveCsrfToken(httpClient, AttachmentService.DEFAULT_SERVICE_PATH)\n    .getToken();\n\n// Prepare attachment for HTTP request\nInputStream inStream;\nHttpEntity attachmentEntity = new InputStreamEntity(inStream); // alternatively, new FileEntity(File)\n\n// Prepare attachment creation request\nHttpPost create = new HttpPost(AttachmentService.DEFAULT_SERVICE_PATH + "/AttachmentContentSet");\ncreate.setEntity(attachmentEntity);\ncreate.setHeader(DefaultCsrfTokenRetriever.X_CSRF_TOKEN_HEADER_KEY, csrfToken);\ncreate.setHeader("Content-Type", "image/jpeg");\ncreate.setHeader("Slug", "\'filename.jpg\'");\ncreate.setHeader("BusinessObjectTypeName", "\'ObjectTypeName\'");\ncreate.setHeader("LinkedSAPObjectKey", "\'ObjectKey\'");\n\n// Send attachment creation request\nHttpResponse response = httpClient.execute(create);\n\n// Parse response\nString responseText = EntityUtils.toString(response.getEntity());\n'})}),(0,o.jsxs)(n.p,{children:["Once you've decided on ",(0,o.jsx)(n.code,{children:"InputStream"})," or ",(0,o.jsx)(n.code,{children:"File"})," as underlying data type for ",(0,o.jsx)(n.code,{children:"HttpEntity"}),", you need to apply values for HTTP headers:"]}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"x-csrf-token"})," - value from previous HEAD request"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Content-Type"})," - value depending on a file type, make sure it is correct"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Slug"})," - value in single-quotes ",(0,o.jsx)(n.code,{children:"'"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"BusinessObjectTypeName"})," - value in single-quotes ",(0,o.jsx)(n.code,{children:"'"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"LinkedSAPObjectKey"})," - value in single-quotes ",(0,o.jsx)(n.code,{children:"'"}),"."]}),"\n"]}),(0,o.jsxs)(n.p,{children:["Please note, depending on the file size, a request may take several seconds to minutes.\nThis suggested HTTP interaction is the ",(0,o.jsx)(n.a,{href:"https://help.sap.com/viewer/7489fa08cede494cbdf08fa3651598af/2105.500/en-US/63259b6826174573bc32f2e1d1609cd9.html",children:"officially documented"})," approach.\nIt's not considered a workaround."]}),(0,o.jsxs)(n.p,{children:["In case you want to deserialize the JSON from ",(0,o.jsx)(n.code,{children:"responseTest"})," variable, then run the following code:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'// Deserialize the AttachmentContent object\nTypeToken<Map<String, AttachmentContent>> responseType = new TypeToken<Map<String, AttachmentContent>>() {\n};\nMap<String, AttachmentContent> responseObject = new Gson().fromJson(responseText, responseType.getType());\nAttachmentContent result = responseObject.get("d");\n'})})]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.mdxAdmonitionTitle,{children:['"Provide a correct ',(0,o.jsx)(n.code,{children:"Content-Type"}),'"']}),(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Content-Type"})," should correspond to the uploaded file or your upload might fail."]})]}),"\n",(0,o.jsx)(n.h2,{id:"open-api-related-questions",children:"Open API Related Questions"}),"\n",(0,o.jsx)(n.h3,{id:"do-you-support-restful-services",children:"Do You Support RESTful Services?"}),"\n",(0,o.jsxs)(n.p,{children:["Yes, we do support ",(0,o.jsx)(n.a,{href:"https://swagger.io/specification/v2/",children:"OpenAPI 2.0 also known as Swagger"}),", and ",(0,o.jsx)(n.a,{href:"https://swagger.io/specification/",children:"OpenAPI 3.0"})," specifications.\nThe latter is preferred.\nFind documentation how to generate a ",(0,o.jsx)(n.a,{href:"/cloud-sdk/docs/java/features/rest/generate-rest-client",children:"type-safe Open API client here"}),".\nWe also release pregenerated libraries in collaboration with service providers who release RESTful Open API services.\nFor details check an ",(0,o.jsx)(n.a,{href:"features/rest/overview",children:"overview"}),".\nFor feedback or questions about our Open API offering, please, create an issue ",(0,o.jsx)(n.a,{href:"https://github.com/SAP/cloud-sdk/issues",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"questions-about-sap-business-technology-platform",children:"Questions About SAP Business Technology Platform"}),"\n",(0,o.jsx)(n.h3,{id:"do-you-support-sap-btp-cloud-foundry-environment",children:"Do You Support SAP BTP, Cloud Foundry Environment?"}),"\n",(0,o.jsxs)(n.p,{children:["The SAP Cloud SDK for Java has first-class support for ",(0,o.jsx)(n.a,{href:"https://www.sap.com/germany/products/business-technology-platform.html",children:"SAP BTP, Cloud Foundry environment"}),".\nWe provide plenty of helpful abstractions for ",(0,o.jsx)(n.a,{href:"features/connectivity/destination-service",children:"connectivity"})," and authentication that make developing apps a pleasant and rewarding experience.\nLet us know if you miss functionality of the SAP BTP for the Cloud Foundry environment in the SAP Cloud SDK for Java."]}),"\n",(0,o.jsx)(n.h3,{id:"do-you-support-sap-business-technology-platform---neo",children:"Do You Support SAP Business Technology Platform - Neo?"}),"\n",(0,o.jsx)(n.admonition,{title:"warning",type:"warning",children:(0,o.jsx)(n.p,{children:"All the NEO specific classes and functions have been deprecated.\nWe are planning to discontinue support of NEO with SAP Cloud SDK v5 by end of 2023."})}),"\n",(0,o.jsx)(n.p,{children:"We still provide full support for SAP Business Technology Platform Neo.\nHowever, we do not recommend starting new projects with SAP BTP for the Neo environment.\nThe Cloud Foundry environment is better suited for apps and SAP S/4HANA extension development.\nAlso, for Neo we provide out-of-the-box support with only servlet based applications and not spring based applications."}),"\n",(0,o.jsx)(n.h3,{id:"do-you-support-reactive-spring-technology-eg-webflux",children:"Do You Support Reactive Spring Technology, e.g. Webflux?"}),"\n",(0,o.jsxs)(n.p,{children:["The SAP Cloud SDK for Java currently is not fully compatible with the ",(0,o.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/docs/5.0.0.M1/spring-framework-reference/html/web-reactive.html",children:"Reactive Spring Technology Stack"}),".\nMost importantly, the ",(0,o.jsx)(n.a,{href:"features/multi-tenancy/thread-context",children:"Multi Tenancy Features"})," are not functional on that stack, because they were designed with servlet based applications in mind."]}),"\n",(0,o.jsxs)(n.p,{children:["You can find more details on this ",(0,o.jsx)(n.a,{href:"https://stackoverflow.com/questions/68177837/how-to-use-spring-webclient-properly-in-the-tenant-context",children:"Stack Overflow Question"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"is-the-sap-cloud-sdk-for-java-affected-by-the-log4shellcve-2021-44228-vulnerability",children:"Is the SAP Cloud SDK for Java affected by the Log4Shell/CVE-2021-44228 Vulnerability?"}),"\n",(0,o.jsx)(n.p,{children:"The SAP Cloud SDK for Java uses SLF4J as its logging framework and actively excludes all other logging frameworks.\nThis exclusion strategy also applies to transitive dependencies.\nThat means you will not find any logging implementations provided or expected by the SAP Cloud SDK for Java.\nThat is why the SAP Cloud SDK for Java itself does not render your application built on it vulnerable to the Log4Shell vulnerability."}),"\n",(0,o.jsxs)(n.p,{children:["However, you should still check that your application or one of its dependencies doesn't include ",(0,o.jsx)(n.code,{children:"log4j-core"})," on the classpath."]}),"\n",(0,o.jsx)(n.p,{children:"Our SAP BTP CF Archetypes use logback as the logging implementation, the SAP BTP Neo archetype relies on the logger provided by the Neo Platform."}),"\n",(0,o.jsx)(n.p,{children:"For further reading on this vulnerability have a look at the following (external) links:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.lunasec.io/docs/blog/log4j-zero-day-mitigation-guide/",children:"https://www.lunasec.io/docs/blog/log4j-zero-day-mitigation-guide/"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://slf4j.org/log4shell.html",children:"http://slf4j.org/log4shell.html"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://support.sap.com/content/dam/support/en_us/library/ssp/my-support/trust-center/sap-tc-01-5025.pdf",children:"https://support.sap.com/content/dam/support/en_us/library/ssp/my-support/trust-center/sap-tc-01-5025.pdf"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://nvd.nist.gov/vuln/detail/CVE-2021-44228",children:"https://nvd.nist.gov/vuln/detail/CVE-2021-44228"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(96540);const s={},a=o.createContext(s);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);