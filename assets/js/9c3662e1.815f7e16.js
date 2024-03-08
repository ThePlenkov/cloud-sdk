"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8690],{76010:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=t(74848),i=t(28453);const a={id:"spring-boot-war-deployment",title:"Use WAR Deployment with Spring Boot",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Use WAR Deployment with Spring Boot",description:"Adjust a Spring Boot project to use WAR deployment",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","cap"]},r=void 0,d={id:"guides/spring-boot-war-deployment",title:"Use WAR Deployment with Spring Boot",description:"Adjust a Spring Boot project to use WAR deployment",source:"@site/docs-java/guides/spring-boot-war-deployment.mdx",sourceDirName:"guides",slug:"/guides/spring-boot-war-deployment",permalink:"/cloud-sdk/docs/java/guides/spring-boot-war-deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/guides/spring-boot-war-deployment.mdx",tags:[],version:"current",frontMatter:{id:"spring-boot-war-deployment",title:"Use WAR Deployment with Spring Boot",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Use WAR Deployment with Spring Boot",description:"Adjust a Spring Boot project to use WAR deployment",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","cap"]},sidebar:"docsJavaSidebar",previous:{title:"Logging",permalink:"/cloud-sdk/docs/java/guides/logging-overview"},next:{title:"Tutorials Overview",permalink:"/cloud-sdk/docs/java/guides/tutorial-overview-sdk-java"}},s={},l=[{value:"Modern and Traditional Spring Deployment",id:"modern-and-traditional-spring-deployment",level:2},{value:"Target Projects of This Guide",id:"target-projects-of-this-guide",level:2},{value:"Use Traditional Spring Deployment",id:"use-traditional-spring-deployment",level:2},{value:"Change Maven Packaging",id:"change-maven-packaging",level:3},{value:"Add Maven WAR Plugin",id:"add-maven-war-plugin",level:3},{value:"Adjust Dependency Scopes",id:"adjust-dependency-scopes",level:3},{value:"Let Application Class Inherit from <code>SpringBootServletInitializer</code>",id:"let-application-class-inherit-from-springbootservletinitializer",level:3},{value:"Change the Deployment Configuration",id:"change-the-deployment-configuration",level:3},{value:"Build and Deploy the Project",id:"build-and-deploy-the-project",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This document outlines how to adjust a Spring Boot project to use WAR deployment (also known as traditional deployment).\nThe traditional deployment of Spring helps overcome exceptions related to the SAP JCo library."}),"\n",(0,o.jsx)(n.h2,{id:"modern-and-traditional-spring-deployment",children:"Modern and Traditional Spring Deployment"}),"\n",(0,o.jsx)(n.p,{children:"Traditionally, Java projects based on Spring were built as war files which had to be deployed to standalone application servers, such as Tomcat.\nWith the rise of Spring Boot, the target file type changed to jar files where the application server is already built in.\nThe advantage of that modern deployment form is that the application can be started directly without the need to administer a complex application server."}),"\n",(0,o.jsx)(n.h2,{id:"target-projects-of-this-guide",children:"Target Projects of This Guide"}),"\n",(0,o.jsxs)(n.p,{children:["This guide is applicable to all Spring-based Java projects which use the modern deployment of Spring as jar file.\nThat comprises in the first place any project using the ",(0,o.jsx)(n.a,{href:"https://cap.cloud.sap/docs/",children:"new CAP stack"})," as well as the ",(0,o.jsx)(n.a,{href:"https://central.sonatype.com/artifact/com.sap.cloud.sdk.archetypes/spring-boot3",children:"Spring Boot Maven archetype"})," of the SAP Cloud SDK."]}),"\n",(0,o.jsxs)(n.p,{children:["The problem with the modern deployment is that the ",(0,o.jsx)(n.a,{href:"https://support.sap.com/en/product/connectors/jco.html",children:"SAP Java Connector"})," library cannot be used when the application gets deployed as jar file.\nThat results in runtime exceptions like ",(0,o.jsx)(n.code,{children:"java.lang.NoClassDefFoundError: com/sap/conn/jco/JCoException"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"To overcome this problem, we'll outline how to adjust your project to leverage the traditional Spring deployment instead."}),"\n",(0,o.jsx)(n.h2,{id:"use-traditional-spring-deployment",children:"Use Traditional Spring Deployment"}),"\n",(0,o.jsx)(n.p,{children:"Perform the following steps to switch your project from using the modern to the traditional Spring deployment."}),"\n",(0,o.jsx)(n.h3,{id:"change-maven-packaging",children:"Change Maven Packaging"}),"\n",(0,o.jsxs)(n.p,{children:["In your ",(0,o.jsx)(n.code,{children:"pom.xml"}),", change the packaging setting from ",(0,o.jsx)(n.code,{children:"jar"})," to ",(0,o.jsx)(n.code,{children:"war"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"\x3c!-- before: --\x3e\n\x3c!-- <packaging>jar</packaging> --\x3e\n\n\x3c!-- after: --\x3e\n<packaging>war</packaging>\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.mdxAdmonitionTitle,{children:["Use the right ",(0,o.jsx)(n.code,{children:"pom.xml"})]}),(0,o.jsxs)(n.p,{children:["When your project uses multiple Maven modules, you need to choose the ",(0,o.jsx)(n.code,{children:"pom.xml"})," that contains your application code.\nFor instance, in a CAP project use the ",(0,o.jsx)(n.code,{children:"pom.xml"})," of the ",(0,o.jsx)(n.code,{children:"srv"})," module."]})]}),"\n",(0,o.jsx)(n.h3,{id:"add-maven-war-plugin",children:"Add Maven WAR Plugin"}),"\n",(0,o.jsxs)(n.p,{children:["Add the Maven WAR plugin to the ",(0,o.jsx)(n.code,{children:"pom.xml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-war-plugin</artifactId>\n    \x3c!-- use latest version here --\x3e\n    <version>3.3.2</version>\n    <configuration>\n      <failOnMissingWebXml>false</failOnMissingWebXml>\n    </configuration>\n</plugin>\n"})}),"\n",(0,o.jsx)(n.h3,{id:"adjust-dependency-scopes",children:"Adjust Dependency Scopes"}),"\n",(0,o.jsx)(n.p,{children:"The WAR file will be deployed into an a Tomcat application container.\nThus we no longer need to include the dependencies that are now provided by the container."}),"\n",(0,o.jsx)(n.p,{children:"Adjust your dependency management section to contain the following entries:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",metastring:'title="pom.xml"',children:"<dependencyManagement>\n\t<dependencies>\n    \x3c!-- Cloud SDK + SAP Java Buildpack BOMs --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sjb.cf</groupId>\n            <artifactId>cf-tomee7-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n    \x3c!-- Work around error in Buildpack BOM --\x3e\n    <dependency>\n    \t<groupId>org.codehaus.woodstox</groupId>\n    \t<artifactId>stax2-api</artifactId>\n    \t<scope>compile</scope>\n    </dependency>\n    \x3c!-- Set Spring Boot Tomcat dependencies to provided --\x3e\n    <dependency>\n    \t<groupId>org.springframework.boot</groupId>\n    \t<artifactId>spring-boot-starter-tomcat</artifactId>\n    \t<scope>provided</scope>\n    </dependency>\n\n    \x3c!-- Any further dependency management you might use\n        e.g. org.springframework.boot:spring-boot-dependencies --\x3e\n  </dependencies>\n</dependencyManagement>\n"})}),"\n",(0,o.jsx)(n.admonition,{title:"Ordering of dependencies",type:"caution",children:(0,o.jsxs)(n.p,{children:["Please note that the ordering of entries under the ",(0,o.jsx)(n.code,{children:"<dependencyManagement>"})," matters.\nTo ensure the correct scopes are set make sure the order is implemented as shown above.\nIn particular the ",(0,o.jsx)(n.code,{children:"cf-tomee7-bom"})," should be the first entry if possible."]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The versions for ",(0,o.jsx)(n.code,{children:"stax2-api"})," and ",(0,o.jsx)(n.code,{children:"spring-boot-starter-tomcat"})," are not relevant, only the scopes matter"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"Further Guidance",type:"tip",children:(0,o.jsxs)(n.p,{children:["You can find more guidance on how to manage dependencies around the SAP Java Buildpack in our ",(0,o.jsx)(n.a,{href:"./manage-dependencies",children:"dedicated guide here"}),"."]})}),"\n",(0,o.jsxs)(n.h3,{id:"let-application-class-inherit-from-springbootservletinitializer",children:["Let Application Class Inherit from ",(0,o.jsx)(n.code,{children:"SpringBootServletInitializer"})]}),"\n",(0,o.jsxs)(n.p,{children:["Make your application class a subclass of the class ",(0,o.jsx)(n.code,{children:"SpringBootServletInitializer"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"@SpringBootApplication\npublic class Application extends SpringBootServletInitializer {\n\n  public static void main(String[] args) {\n    SpringApplication.run(Application.class, args);\n  }\n}\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"change-the-deployment-configuration",children:"Change the Deployment Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Go to your deployment descriptor, for instance to your mta.yaml, and locate the module that contains your application under ",(0,o.jsx)(n.code,{children:"modules"}),".\nFor that particular module, perform the following changes:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Change the ",(0,o.jsx)(n.code,{children:"type"})," from ",(0,o.jsx)(n.code,{children:"java"})," to ",(0,o.jsx)(n.code,{children:"java.tomcat"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Change the ",(0,o.jsx)(n.code,{children:"build-result"})," so that the file extension is ",(0,o.jsx)(n.code,{children:"war"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["If not present, add the property ",(0,o.jsx)(n.code,{children:"USE_JCO"})," with the value ",(0,o.jsx)(n.code,{children:"true"})," under ",(0,o.jsx)(n.code,{children:"properties"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["If not present, add ",(0,o.jsx)(n.code,{children:"buildpack: sap_java_buildpack_jakarta"})," under ",(0,o.jsx)(n.code,{children:"parameters"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In the following example we have commented the old values for your reference:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'showLineNumbers {4,9,15,17} title:"mta.yaml"',children:"modules:\n  - name: example-project-srv\n    #type: java\n    type: java.tomcat\n    path: srv\n    properties:\n      SPRING_PROFILES_ACTIVE: cloud\n      # make sure that the property USE_JCO is present\n      USE_JCO: true\n    build-parameters:\n      builder: custom\n      commands:\n        - mvn clean package\n      # set the WAR file according to your artifact id\n      build-result: target/example-project.war # do not use the -exec.war variant\n    parameters:\n      buildpack: sap_java_buildpack_jakarta\n    provides:\n      - name: srv-api\n        properties:\n          srv-url: ${default-url}\n    requires:\n      - name: my-destination\n"})}),"\n",(0,o.jsx)(n.h2,{id:"build-and-deploy-the-project",children:"Build and Deploy the Project"}),"\n",(0,o.jsx)(n.p,{children:"The presented changes do not lead to any changes in the build and deployment process.\nHence, you can build and deploy your Java project as usually."}),"\n",(0,o.jsx)(n.p,{children:"From now on, the JCo classes should be found during runtime."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var o=t(96540);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);