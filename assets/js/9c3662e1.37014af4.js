"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={id:"spring-boot-war-deployment",title:"Use WAR Deployment with Spring Boot",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Use WAR Deployment with Spring Boot",description:"Adjust a Spring Boot project to use WAR deployment",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","cap"]},i=void 0,p={unversionedId:"guides/spring-boot-war-deployment",id:"guides/spring-boot-war-deployment",title:"Use WAR Deployment with Spring Boot",description:"Adjust a Spring Boot project to use WAR deployment",source:"@site/docs-java/guides/spring-boot-war-deployment.mdx",sourceDirName:"guides",slug:"/guides/spring-boot-war-deployment",permalink:"/cloud-sdk/docs/java/guides/spring-boot-war-deployment",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/guides/spring-boot-war-deployment.mdx",tags:[],version:"current",frontMatter:{id:"spring-boot-war-deployment",title:"Use WAR Deployment with Spring Boot",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Use WAR Deployment with Spring Boot",description:"Adjust a Spring Boot project to use WAR deployment",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","cap"]},sidebar:"docsJavaSidebar",previous:{title:"Logging",permalink:"/cloud-sdk/docs/java/guides/logging-overview"},next:{title:"Tutorials Overview",permalink:"/cloud-sdk/docs/java/guides/tutorial-overview-sdk-java"}},l={},d=[{value:"Modern and Traditional Spring Deployment",id:"modern-and-traditional-spring-deployment",level:2},{value:"Target Projects of This Guide",id:"target-projects-of-this-guide",level:2},{value:"Use Traditional Spring Deployment",id:"use-traditional-spring-deployment",level:2},{value:"Change Maven Packaging",id:"change-maven-packaging",level:3},{value:"Add Maven WAR Plugin",id:"add-maven-war-plugin",level:3},{value:"Adjust Dependency Scopes",id:"adjust-dependency-scopes",level:3},{value:"Let Application Class Inherit from <code>SpringBootServletInitializer</code>",id:"let-application-class-inherit-from-springbootservletinitializer",level:3},{value:"Change the Deployment Configuration",id:"change-the-deployment-configuration",level:3},{value:"Build and Deploy the Project",id:"build-and-deploy-the-project",level:2}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document outlines how to adjust a Spring Boot project to use WAR deployment (also known as traditional deployment).\nThe traditional deployment of Spring helps overcome exceptions related to the SAP JCo library."),(0,o.kt)("admonition",{title:"WAR Deployment not supported for SDK 5",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"SAP Cloud SDK 5 support for WAR deployment will only be available after the release of SAP Java Buildpack 2.\nFor now, only SDK 4 supports WAR deployment.")),(0,o.kt)("h2",{id:"modern-and-traditional-spring-deployment"},"Modern and Traditional Spring Deployment"),(0,o.kt)("p",null,"Traditionally, Java projects based on Spring were built as war files which had to be deployed to standalone application servers, such as Tomcat.\nWith the rise of Spring Boot, the target file type changed to jar files where the application server is already built in.\nThe advantage of that modern deployment form is that the application can be started directly without the need to administer a complex application server."),(0,o.kt)("h2",{id:"target-projects-of-this-guide"},"Target Projects of This Guide"),(0,o.kt)("p",null,"This guide is applicable to all Spring-based Java projects which use the modern deployment of Spring as jar file.\nThat comprises in the first place any project using the ",(0,o.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/"},"new CAP stack")," as well as the ",(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/com.sap.cloud.sdk.archetypes/spring-boot3"},"Spring Boot Maven archetype")," of the SAP Cloud SDK."),(0,o.kt)("p",null,"The problem with the modern deployment is that the ",(0,o.kt)("a",{parentName:"p",href:"https://support.sap.com/en/product/connectors/jco.html"},"SAP Java Connector")," library cannot be used when the application gets deployed as jar file.\nThat results in runtime exceptions like ",(0,o.kt)("inlineCode",{parentName:"p"},"java.lang.NoClassDefFoundError: com/sap/conn/jco/JCoException"),"."),(0,o.kt)("p",null,"To overcome this problem, we'll outline how to adjust your project to leverage the traditional Spring deployment instead."),(0,o.kt)("h2",{id:"use-traditional-spring-deployment"},"Use Traditional Spring Deployment"),(0,o.kt)("p",null,"Perform the following steps to switch your project from using the modern to the traditional Spring deployment."),(0,o.kt)("h3",{id:"change-maven-packaging"},"Change Maven Packaging"),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml"),", change the packaging setting from ",(0,o.kt)("inlineCode",{parentName:"p"},"jar")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"war"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- before: --\x3e\n\x3c!-- <packaging>jar</packaging> --\x3e\n\n\x3c!-- after: --\x3e\n<packaging>war</packaging>\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Use the right ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"pom.xml")),(0,o.kt)("p",{parentName:"admonition"},"When your project uses multiple Maven modules, you need to choose the ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," that contains your application code.\nFor instance, in a CAP project use the ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"srv")," module.")),(0,o.kt)("h3",{id:"add-maven-war-plugin"},"Add Maven WAR Plugin"),(0,o.kt)("p",null,"Add the Maven WAR plugin to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-war-plugin</artifactId>\n    \x3c!-- use latest version here --\x3e\n    <version>3.3.2</version>\n    <configuration>\n      <failOnMissingWebXml>false</failOnMissingWebXml>\n    </configuration>\n</plugin>\n")),(0,o.kt)("h3",{id:"adjust-dependency-scopes"},"Adjust Dependency Scopes"),(0,o.kt)("p",null,"The WAR file will be deployed into an a Tomcat application container.\nThus we no longer need to include the dependencies that are now provided by the container."),(0,o.kt)("p",null,"Adjust your dependency management section to contain the following entries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependencyManagement>\n    <dependencies>\n    \x3c!-- Cloud SDK + SAP Java Buildpack BOMs --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sjb.cf</groupId>\n            <artifactId>cf-tomee7-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n    \x3c!-- Work around error in Buildpack BOM --\x3e\n    <dependency>\n        <groupId>org.codehaus.woodstox</groupId>\n        <artifactId>stax2-api</artifactId>\n        <scope>compile</scope>\n    </dependency>\n    \x3c!-- Set Spring Boot Tomcat dependencies to provided --\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-tomcat</artifactId>\n        <scope>provided</scope>\n    </dependency>\n\n    \x3c!-- Any further dependency management you might use\n        e.g. org.springframework.boot:spring-boot-dependencies --\x3e\n  </dependencies>\n</dependencyManagement>\n")),(0,o.kt)("admonition",{title:"Ordering of dependencies",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please note that the ordering of entries under the ",(0,o.kt)("inlineCode",{parentName:"p"},"<dependencyManagement>")," matters.\nTo ensure the correct scopes are set make sure the order is implemented as shown above.\nIn particular the ",(0,o.kt)("inlineCode",{parentName:"p"},"cf-tomee7-bom")," should be the first entry if possible.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The versions for ",(0,o.kt)("inlineCode",{parentName:"li"},"stax2-api")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"spring-boot-starter-tomcat")," are not relevant, only the scopes matter")),(0,o.kt)("admonition",{title:"Further Guidance",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can find more guidance on how to manage dependencies around the SAP Java Buildpack in our ",(0,o.kt)("a",{parentName:"p",href:"./manage-dependencies"},"dedicated guide here"),".")),(0,o.kt)("h3",{id:"let-application-class-inherit-from-springbootservletinitializer"},"Let Application Class Inherit from ",(0,o.kt)("inlineCode",{parentName:"h3"},"SpringBootServletInitializer")),(0,o.kt)("p",null,"Make your application class a subclass of the class ",(0,o.kt)("inlineCode",{parentName:"p"},"SpringBootServletInitializer"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@SpringBootApplication\npublic class Application extends SpringBootServletInitializer {\n\n  public static void main(String[] args) {\n    SpringApplication.run(Application.class, args);\n  }\n}\n\n")),(0,o.kt)("h3",{id:"change-the-deployment-configuration"},"Change the Deployment Configuration"),(0,o.kt)("p",null,"Go to your deployment descriptor, for instance to your mta.yaml, and locate the module that contains your application under ",(0,o.kt)("inlineCode",{parentName:"p"},"modules"),".\nFor that particular module, perform the following changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Change the ",(0,o.kt)("inlineCode",{parentName:"li"},"type")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"java")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"java.tomcat"),"."),(0,o.kt)("li",{parentName:"ul"},"Change the ",(0,o.kt)("inlineCode",{parentName:"li"},"build-result")," so that the file extension is ",(0,o.kt)("inlineCode",{parentName:"li"},"war"),"."),(0,o.kt)("li",{parentName:"ul"},"If not present, add the property ",(0,o.kt)("inlineCode",{parentName:"li"},"USE_JCO")," with the value ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," under ",(0,o.kt)("inlineCode",{parentName:"li"},"properties"),"."),(0,o.kt)("li",{parentName:"ul"},"If not present, add ",(0,o.kt)("inlineCode",{parentName:"li"},"buildpack: sap_java_buildpack")," under ",(0,o.kt)("inlineCode",{parentName:"li"},"parameters"),".")),(0,o.kt)("p",null,"In the following example we have commented the old values for your reference:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'showLineNumbers {4,9,15,17} title:"mta.yaml"',showLineNumbers:!0,"{4,9,15,17}":!0,'title:"mta.yaml"':!0},"modules:\n  - name: example-project-srv\n    #type: java\n    type: java.tomcat\n    path: srv\n    properties:\n      SPRING_PROFILES_ACTIVE: cloud\n      # make sure that the property USE_JCO is present\n      USE_JCO: true\n    build-parameters:\n      builder: custom\n      commands:\n        - mvn clean package\n      # set the WAR file according to your artifact id\n      build-result: target/example-project.war # do not use the -exec.war variant\n    parameters:\n      buildpack: sap_java_buildpack\n    provides:\n      - name: srv-api\n        properties:\n          srv-url: ${default-url}\n    requires:\n      - name: my-destination\n")),(0,o.kt)("h2",{id:"build-and-deploy-the-project"},"Build and Deploy the Project"),(0,o.kt)("p",null,"The presented changes do not lead to any changes in the build and deployment process.\nHence, you can build and deploy your Java project as usually."),(0,o.kt)("p",null,"From now on, the JCo classes should be found during runtime."))}c.isMDXComponent=!0}}]);