"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6054],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},77414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(58911),l=a(74866),i=a(85162);const p={id:"getting-started",title:"Getting Started",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting Started",description:"Get up to speed with SAP Cloud SDK for Java in no time",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},s=void 0,u={unversionedId:"getting-started",id:"version-v5/getting-started",title:"Getting Started",description:"Get up to speed with SAP Cloud SDK for Java in no time",source:"@site/docs-java_versioned_docs/version-v5/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/cloud-sdk/docs/java/v5/getting-started",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v5/getting-started.mdx",tags:[],version:"v5",frontMatter:{id:"getting-started",title:"Getting Started",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting Started",description:"Get up to speed with SAP Cloud SDK for Java in no time",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJavaSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/java/v5/overview-cloud-sdk-for-java"},next:{title:"Overview",permalink:"/cloud-sdk/docs/java/v5/features/odata/overview"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Generating a Project from a Maven Archetype",id:"generating-a-project-from-a-maven-archetype",level:2},{value:"Run App Locally",id:"run-app-locally",level:3},{value:"Deploy to Cloud Foundry",id:"deploy-to-cloud-foundry",level:3},{value:"Integrate the SAP Cloud SDK for Java Into Your Project",id:"integrate-the-sap-cloud-sdk-for-java-into-your-project",level:2},{value:"Adding Dependencies",id:"adding-dependencies",level:3},{value:"Framework Integration",id:"framework-integration",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Further Resources",id:"further-resources",level:2}],m={toc:d};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"MvnBadge"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"To get started with the SAP Cloud SDK for Java you can either create a new project or integrate the SAP Cloud SDK into your existing one.\nYou will need an installation of Java and Maven."),(0,r.kt)("admonition",{title:"Java version compatibility",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The SAP Cloud SDK is compatible with all current Long-Term-Support (LTS) releases of Java: 8, 11 ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/frequently-asked-questions#spring-boot-3-and-java-17-support"},"and 17"),".\nOther Java versions may work as well depending on your setup but are not yet tested by us.\nNote that the SAP Business Technology Platform Cloud Foundry environment only supports Java 8 out of the box but can be configured to also run with Java 11 or 17.\nSAP Business Technology Platform Neo only supports Java 8.")),(0,r.kt)("p",null,"To start with a clean, new project you can select ",(0,r.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=com.sap.cloud.sdk.archetypes"},"one of our archetypes")," and build upon it.\nAlternatively, you can follow ",(0,r.kt)("a",{parentName:"p",href:"#integrate-the-cloud-sdk-for-java-into-your-project"},"these instructions")," to integrate the SAP Cloud SDK into your existing setup."),(0,r.kt)("h2",{id:"generating-a-project-from-a-maven-archetype"},"Generating a Project from a Maven Archetype"),(0,r.kt)("p",null,"The SAP Cloud SDK provides archetypes based on ",(0,r.kt)("a",{parentName:"p",href:"https://spring.io/"},"Spring")," and ",(0,r.kt)("a",{parentName:"p",href:"https://tomee.apache.org/"},"TomEE"),", so select whatever suits you best."),(0,r.kt)("p",null,"Run:"),(0,r.kt)(l.Z,{groupId:"frameworks",defaultValue:"spring",values:[{label:"Spring",value:"spring"},{label:"TomEE",value:"tomee"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"spring",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mvn archetype:generate "-DarchetypeGroupId=com.sap.cloud.sdk.archetypes" \\\n    "-DarchetypeArtifactId=scp-cf-spring" \\\n    "-DarchetypeVersion=RELEASE"\n'))),(0,r.kt)(i.Z,{value:"tomee",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mvn archetype:generate "-DarchetypeGroupId=com.sap.cloud.sdk.archetypes" \\\n    "-DarchetypeArtifactId=scp-cf-tomee" \\\n    "-DarchetypeVersion=RELEASE"\n')))),(0,r.kt)("p",null,"Maven will ask you to provide the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"groupId")," - usually serves as your organization identifier, i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"foo.bar.cloud.app")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"artifactId")," - it's your application's name, i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"mydreamapp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"version")," - we recommend keeping ",(0,r.kt)("inlineCode",{parentName:"li"},"1.0-SNAPSHOT")," if you're just starting"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"package")," - by default this equals to ",(0,r.kt)("inlineCode",{parentName:"li"},"groupId"),". Change it only if you know what you're doing")),(0,r.kt)("p",null,"After providing all the interactive values to the CLI it will generate your first SAP Cloud SDK based application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[INFO] Scanning for projects...\n[INFO]\n[INFO] ------------------< org.apache.maven:standalone-pom >-------------------\n[INFO] Building Maven Stub Project (No POM) 1\n[INFO] --------------------------------[ pom ]---------------------------------\n[INFO]\n[INFO] >>> maven-archetype-plugin:3.1.2:generate (default-cli) > generate-sources @ standalone-pom >>>\n[INFO]\n[INFO] <<< maven-archetype-plugin:3.1.2:generate (default-cli) < generate-sources @ standalone-pom <<<\n[INFO]\n[INFO]\n[INFO] --- maven-archetype-plugin:3.1.2:generate (default-cli) @ standalone-pom ---\n[INFO] Generating project in Interactive mode\n[INFO] ....\n[INFO] ....\nDefine value for property 'groupId': foo.bar.cloud.app\nDefine value for property 'artifactId' (should match expression '[^_]+'): mydreamapp\n[INFO] Using property: artifactId = mydreamapp\nDefine value for property 'version' 1.0-SNAPSHOT: :\nDefine value for property 'package' foo.bar.cloud.app: :\n[INFO] Using property: gitignore = .gitignore\n[INFO] Using property: skipUsageAnalytics = false\nConfirm properties configuration:\ngroupId: foo.bar.cloud.app\nartifactId: mydreamapp\nartifactId: mydreamapp\nversion: 1.0-SNAPSHOT\npackage: foo.bar.cloud.app\ngitignore: .gitignore\nskipUsageAnalytics: false\n Y: :\n[INFO] ----------------------------------------------------------------------------\n[INFO] Using following parameters for creating project from Archetype: scp-cf-tomee:RELEASE\n[INFO] ----------------------------------------------------------------------------\n[INFO] Parameter: groupId, Value: foo.bar.cloud.app\n[INFO] Parameter: artifactId, Value: mydreamapp\n[INFO] Parameter: version, Value: 1.0-SNAPSHOT\n[INFO] Parameter: package, Value: foo.bar.cloud.app\n[INFO] Parameter: packageInPathFormat, Value: foo/bar/cloud/app\n[INFO] Parameter: package, Value: foo.bar.cloud.app\n[INFO] Parameter: version, Value: 1.0-SNAPSHOT\n[INFO] Parameter: groupId, Value: foo.bar.cloud.app\n[INFO] Parameter: skipUsageAnalytics, Value: false\n[INFO] Parameter: gitignore, Value: .gitignore\n[INFO] Parameter: artifactId, Value: mydreamapp\n[INFO] Project created from Archetype in dir: /home/user/dev/temp/mydreamapp\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  02:28 min\n[INFO] Finished at: 2020-04-19T19:25:33+02:00\n[INFO] ------------------------------------------------------------------------\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congratulations! You've just set up a brand-new application with the SAP Cloud SDK for Java.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To change the Java version modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"<java.version>")," property in the root ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),".")),(0,r.kt)("h3",{id:"run-app-locally"},"Run App Locally"),(0,r.kt)("p",null,"Applications created with our SAP Cloud SDK Archetypes give you the possibility to run locally on your development machine."),(0,r.kt)(l.Z,{groupId:"frameworks",defaultValue:"spring",values:[{label:"Spring",value:"spring"},{label:"TomEE",value:"tomee"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"spring",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mvn clean install\ncd application/\nmvn spring-boot:run -D"spring-boot.run.profiles"=local\n'))),(0,r.kt)(i.Z,{value:"tomee",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn clean install -Ddeployment=local\ncd application/\nmvn tomee:run -Ddeployment=local\n")),(0,r.kt)("p",null,"The property ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment=local")," activates a profile that replaces the ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk-sjb-bom")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk-bom"),", the former being a combination of the SAP Java Buildpack BOM and our ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk-bom"),".\nThat way you replace the scope of the dependencies marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"provided")," from the SAP Java Buildpack with ",(0,r.kt)("inlineCode",{parentName:"p"},"compile"),"."))),(0,r.kt)("h3",{id:"deploy-to-cloud-foundry"},"Deploy to Cloud Foundry"),(0,r.kt)("p",null,"Assuming you have installed the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/cf-cli/"},"Cloud Foundry CLI")," and are logged into your BTP account you can deploy the app via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cf push\n")),(0,r.kt)("admonition",{title:"Authentication & Authorization",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please note that the starter project does not come with any authentication or authorization checks enabled by default.\nThis enables you to get started quickly and run locally without further configuration."),(0,r.kt)("p",{parentName:"admonition"},"However, we recommend securing your application as early as possible in the development process.\nThe archetypes already come preconfigured for typical authorization scenarios.\nFollowing ",(0,r.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/s4sdk-secure-cloudfoundry.html"},"this guide")," you can secure your newly created application in just a few steps.")),(0,r.kt)("h2",{id:"integrate-the-sap-cloud-sdk-for-java-into-your-project"},"Integrate the SAP Cloud SDK for Java Into Your Project"),(0,r.kt)("h3",{id:"adding-dependencies"},"Adding Dependencies"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The SAP Cloud SDK ",(0,r.kt)("a",{parentName:"p",href:"/docs/overview/overview-cloud-sdk#sap-cloud-application-programming-model"},"integrates with CAP projects"),"!\nFollow the steps below or check out the dedicated ",(0,r.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-integrate-cap.html"},"tutorial on SAP Developers"),".")),(0,r.kt)("p",null,"To get started with an existing project include the ",(0,r.kt)("em",{parentName:"p"},"SAP Cloud SDK BOM")," in the ",(0,r.kt)("em",{parentName:"p"},"dependency management")," section of your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n")),(0,r.kt)("p",null,"If your application is running on ",(0,r.kt)("strong",{parentName:"p"},"SAP Business Technology Platform")," please add the appropriate dependency:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.cloudplatform</groupId>\n    <artifactId>scp-cf</artifactId>\n</dependency>\n")),(0,r.kt)("p",null,"If you want to connect to an ",(0,r.kt)("strong",{parentName:"p"},"SAP S/4HANA")," system via the ",(0,r.kt)("strong",{parentName:"p"},"OData")," protocol, you should checkout our convenient ",(0,r.kt)("a",{parentName:"p",href:"features/odata/vdm-generator"},"OData code generator"),".\nBy downloading the OData service specifications for either type of ",(0,r.kt)("strong",{parentName:"p"},"SAP S/4HANA")," system (",(0,r.kt)("a",{parentName:"p",href:"https://api.sap.com/package/SAPS4HANACloud?section=Artifacts"},(0,r.kt)("strong",{parentName:"a"},"SAP S/4HANA Cloud"))," or ",(0,r.kt)("a",{parentName:"p",href:"https://api.sap.com/package/S4HANAOPAPI?section=Artifacts"},(0,r.kt)("strong",{parentName:"a"},"SAP S/4HANA On-premise")),") you can generate your own set of classes.\nSimilarly the SAP Cloud SDK offers a ",(0,r.kt)("a",{parentName:"p",href:"features/rest/generate-rest-client"},"code generator for Open API")," protocol."),(0,r.kt)("p",null,"In case you have a ",(0,r.kt)("strong",{parentName:"p"},"CAP application")," which uses ",(0,r.kt)("strong",{parentName:"p"},"multitenancy")," features and/or a ",(0,r.kt)("strong",{parentName:"p"},"protected backend")," your service will need the following dependency:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.sap.cds</groupId>\n  <artifactId>cds-integration-cloud-sdk</artifactId>\n</dependency>\n")),(0,r.kt)("h3",{id:"framework-integration"},"Framework Integration"),(0,r.kt)("p",null,"In general, the SAP Cloud SDK for Java integrates natively into the ",(0,r.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-boot"},"Spring Boot")," and ",(0,r.kt)("a",{parentName:"p",href:"https://tomee.apache.org/"},"TomEE")," frameworks."),(0,r.kt)("p",null,"In particular the ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/multi-tenancy/thread-context"},"SAP Cloud SDK provides listeners")," that can extract tenant and principal information from an incoming request.\nTo ensure these listeners are present, please configure your project accordingly."),(0,r.kt)(l.Z,{groupId:"frameworks",defaultValue:"spring5",values:[{label:"Spring 5",value:"spring5"},{label:"Spring 6",value:"spring6"},{label:"TomEE",value:"tomee"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"spring5",mdxType:"TabItem"},(0,r.kt)("p",null,"For a ",(0,r.kt)("strong",{parentName:"p"},"Spring 5")," based project please ensure that the application is annotated to scan for components of the SAP Cloud SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@ComponentScan({"com.sap.cloud.sdk", <your.own.package>})\n@ServletComponentScan({"com.sap.cloud.sdk", <your.own.package>})\n')),(0,r.kt)("p",null,"Also, please check ",(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.sap.cloud.sdk/sdk-bom/latest"},"the Spring version")," declared in the SAP Cloud SDK BOM doesn't clash with your version of Spring."),(0,r.kt)("admonition",{title:"Spring Support for Cloud Foundry",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For Spring based projects we provide out-of-the-box support only on Cloud Foundry with the archetype ",(0,r.kt)("inlineCode",{parentName:"p"},"scp-cf-spring"),"."))),(0,r.kt)(i.Z,{value:"spring6",mdxType:"TabItem"},(0,r.kt)("p",null,"For a ",(0,r.kt)("strong",{parentName:"p"},"Spring 6")," based project please ensure that the application is annotated to scan for components of the SAP Cloud SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@ComponentScan({"com.sap.cloud.sdk", <your.own.package>})\n@ServletComponentScan({"com.sap.cloud.sdk.cloudplatform.servletjakarta", <your.own.package>})\n')),(0,r.kt)("p",null,"Add the jakarta servlet dependency to your pom.xml:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.cloudplatform</groupId>\n    <artifactId>servlet-jakarta</artifactId>\n</dependency>\n")),(0,r.kt)("p",null,"And, in case you are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk-bom"),", make sure to set the spring version before importing the bom.\nYou can find more details about the configuration for Java 17 / Spring 6 / Spring Boot 3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/java/frequently-asked-questions#which-java-versions-are-supported-by-the-sap-cloud-sdk"},"here"),"."),(0,r.kt)("admonition",{title:"Spring Support for Cloud Foundry",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For Spring based projects we provide out-of-the-box support only on Cloud Foundry with the archetype ",(0,r.kt)("inlineCode",{parentName:"p"},"scp-cf-spring"),"."))),(0,r.kt)(i.Z,{value:"tomee",mdxType:"TabItem"},(0,r.kt)("p",null,"For a TomEE based project, the filters should be registered automatically.\nThey are part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"servlet")," module which comes into the dependency tree through ",(0,r.kt)("inlineCode",{parentName:"p"},"scp-cf")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"scp-neo")," automatically.\nCheck the logs during application startup to ensure the listeners got registered."))),(0,r.kt)("admonition",{title:"SAP Cloud SDK Modules Bill-of-Material",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"By default, the SAP Cloud SDK archetypes reference the SAP Cloud SDK Bill-of-Material ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk-bom"),", which manages dependency versions for all SAP Cloud SDK modules and transitive dependencies.\nIf you face dependency conflicts, you can instead try using the SAP Cloud SDK Modules Bill-of-Material ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk-modules-bom")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencyManagement")," section of your Maven POM file.")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.sap.com/tutorials/s4sdk-cloud-foundry-sample-application.html"},"Deploy your application to BTP Cloud Foundry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.sap.com/tutorials/s4sdk-odata-service-cloud-foundry.html"},"Call an OData Service on S/4HANA Cloud or On-Premise")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.sap.com/tutorials/s4sdk-resilience.html"},"Add resilience to your application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.sap.com/tutorials/s4sdk-secure-cloudfoundry.html"},"Secure your application to prevent unauthorized access"))),(0,r.kt)("h2",{id:"further-resources"},"Further Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check our latest ",(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/java/release-notes"},"release notes")),(0,r.kt)("li",{parentName:"ul"},"Get ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-sdk/issues/new/choose"},"support")," if you have questions or experience any issues")))}h.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>S});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(76775),p=a(91980),s=a(67392),u=a(50012);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[p,s]=h({queryString:a,groupId:n}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=p??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:p,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=s[a].value;n!==i&&(c(t),p(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":i===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function S(e){const t=(0,f.Z)();return r.createElement(b,(0,n.Z)({key:String(t)},e))}},58911:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=function(e){let{align:t}=e;return n.createElement("span",{className:t?"col text--right":""},n.createElement("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom"},n.createElement("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})))}}}]);