"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),g=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=g(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=g(n),d=o,m=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var g=2;g<r;g++)l[g]=n[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>g,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),r=n(74866),l=n(85162);const i={id:"logging-overview",title:"Logging",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Logging",description:"This document will give you an overview of the different ways to log information with your application."},s=void 0,g={unversionedId:"guides/logging-overview",id:"version-v4/guides/logging-overview",title:"Logging",description:"This document will give you an overview of the different ways to log information with your application.",source:"@site/docs-java_versioned_docs/version-v4/guides/logging-overview.mdx",sourceDirName:"guides",slug:"/guides/logging-overview",permalink:"/cloud-sdk/docs/java/v4/guides/logging-overview",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v4/guides/logging-overview.mdx",tags:[],version:"v4",frontMatter:{id:"logging-overview",title:"Logging",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Logging",description:"This document will give you an overview of the different ways to log information with your application."},sidebar:"docsJavaSidebar",previous:{title:"Integration With CAP",permalink:"/cloud-sdk/docs/java/v4/guides/cap-sdk-integration"},next:{title:"Use WAR Deployment with Spring Boot",permalink:"/cloud-sdk/docs/java/v4/guides/spring-boot-war-deployment"}},u={},p=[{value:"Logging Overview",id:"logging-overview",level:2},{value:"Providing a Logging Framework",id:"providing-a-logging-framework",level:3},{value:"Writing Log Messages",id:"writing-log-messages",level:2},{value:"Simple SLF4J Usage",id:"simple-slf4j-usage",level:3},{value:"Advanced SLF4J Usage",id:"advanced-slf4j-usage",level:3},{value:"Logging Configuration",id:"logging-configuration",level:2},{value:"Configuring Logback",id:"configuring-logback",level:3},{value:"Setting Log Levels",id:"setting-log-levels",level:4},{value:"On Cloud Foundry",id:"on-cloud-foundry",level:4},{value:"Recommendation for Spring Boot (e.g. SAP Cloud Application Programming Model)",id:"recommendation-for-spring-boot-eg-sap-cloud-application-programming-model",level:4},{value:"Further Reading",id:"further-reading",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document aims to give you an overview of how you can write events of your application with the standard logging frameworks and how the SAP Cloud SDK integrates with that.\nThere are three parts to this document:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How the SAP Cloud SDK integrates with logging frameworks"),(0,o.kt)("li",{parentName:"ul"},"How to create log entries"),(0,o.kt)("li",{parentName:"ul"},"How to configure those entries")),(0,o.kt)("p",null,"To better differentiate between different kinds of logging we will call the type of logs that are usually only relevant for developers to understand why the system behaves the way it did (for example during debugging) as ",(0,o.kt)("em",{parentName:"p"},"Application Logging"),".\nOther types of logs might be kept due to legislative requirements (audit trails or audit logging) or be part of the terms and conditions (business logging).\nThis document describes how to write and configure ",(0,o.kt)("em",{parentName:"p"},"Applications Logs"),"."),(0,o.kt)("h2",{id:"logging-overview"},"Logging Overview"),(0,o.kt)("p",null,"For creating log entries the SAP Cloud SDK relies on the popular ",(0,o.kt)("a",{parentName:"p",href:"http://www.slf4j.org/"},"Simple Logging Facade for Java (SLF4J)"),".\nIt serves as an interface to a variety of different logging frameworks (e.g. ",(0,o.kt)("a",{parentName:"p",href:"http://logback.qos.ch/"},"Logback"),", ",(0,o.kt)("a",{parentName:"p",href:"https://logging.apache.org/log4j/2.x/"},"log4j"),")."),(0,o.kt)("p",null,"That means there are two components involved:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("em",{parentName:"p"},"SLF4J API")),(0,o.kt)("p",{parentName:"li"},"The API is used to get a logger instance and create log entries:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Logger logger = LoggerFactory.getLogger(DummyClass.class);\nlogger.debug("message");\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("em",{parentName:"p"},"logging framework")," which provides the implementation of that API"),(0,o.kt)("p",{parentName:"li"},"The framework is then responsible for writing such messages according to a configuration.\nWhich configuration options are available, depends on the framework.\nTypically, one can configure a log level (Error, Warn, Debug, etc.) and the format of messages."))),(0,o.kt)("p",null,"The SAP Cloud SDK itself ",(0,o.kt)("em",{parentName:"p"},"only")," relies upon the SLF4J API, not on any specific logging framework.\nThis is good practice because otherwise all consumers would be forced to use the same logging framework that the SAP Cloud SDK comes with, rendering the SAP Cloud SDK unusable for many use cases."),(0,o.kt)("p",null,"That means that you have to ",(0,o.kt)("em",{parentName:"p"},"provide a logging framework")," in your application.\nOtherwise, you will not see any log entries the SAP Cloud SDK attempts to put out."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In case your project is based on one of the SAP Cloud SDK archetypes you will already have Logback set up as the logging provider.")),(0,o.kt)("h3",{id:"providing-a-logging-framework"},"Providing a Logging Framework"),(0,o.kt)("p",null,"To provide a logging framework, you have to add it to the dependency tree.\nWhich artifacts are to be added exactly, depends on the framework."),(0,o.kt)("p",null,"To take ",(0,o.kt)("inlineCode",{parentName:"p"},"Logback")," as an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>ch.qos.logback</groupId>\n    <artifactId>logback-classic</artifactId>\n    <version>latest-logback-version</version>\n    <scope>runtime</scope>\n</dependency>\n")),(0,o.kt)("p",null,"Also, you might have to provide some sort of configuration file.\nFor our example of Logback, we need a ",(0,o.kt)("inlineCode",{parentName:"p"},"logback.xml")," within the ",(0,o.kt)("inlineCode",{parentName:"p"},"main/resources")," directory of our application."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When running on the SAP BTP, Cloud Foundry environment using the SAP Java build pack the logging implementation is provided at runtime by the container.\nThis means, if you only run the application on Cloud Foundry you don't need to provide any implementation.\nStill, oftentimes logging is also important for local deployment and testing.\nFor that providing, an implementation is required.")),(0,o.kt)("h2",{id:"writing-log-messages"},"Writing Log Messages"),(0,o.kt)("p",null,"To start writing your log entries you also need to specify a dependency to the SLF4J API: ",(0,o.kt)("inlineCode",{parentName:"p"},"org.slf4j:slf4j-api"),".\nDepending on the chosen logging-implementation, you might not ",(0,o.kt)("em",{parentName:"p"},"need")," to specify the SLF4J API, but it's in general best practice to not rely on transitive dependencies and therefore reference the SLF4J API anyway."),(0,o.kt)("h3",{id:"simple-slf4j-usage"},"Simple SLF4J Usage"),(0,o.kt)("p",null,"Having these prerequisites out of the way, you can now start logging:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class DummyClass {\n\n  private static final Logger logger = LoggerFactory.getLogger(\n    DummyClass.class\n  );\n\n  public void doSomething() {\n    logger.trace("doSomething was called");\n  }\n}\n\n')),(0,o.kt)("p",null,"What do you see in this example?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the first line inside the class a new logger is created (once per class), with the class object as a reference.\nThis class name will then be logged alongside the message in the logs."),(0,o.kt)("li",{parentName:"ul"},"Inside the ",(0,o.kt)("inlineCode",{parentName:"li"},"doSomething")," method this logger is now used to log the fact that the given method was called.\nThe method you use for that depends on the level at which you want to see the message.\nOther options besides ",(0,o.kt)("inlineCode",{parentName:"li"},"trace")," are ",(0,o.kt)("inlineCode",{parentName:"li"},"debug"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"info"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"warn"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"error"),".")),(0,o.kt)("p",null,"As you can see, no reference to the actual logging implementation can be found in the code.\nThis is the benefit of using SLF4J as a logging facade.\nThis allows you to change the logging implementation without any changes to your application code."),(0,o.kt)("h3",{id:"advanced-slf4j-usage"},"Advanced SLF4J Usage"),(0,o.kt)("p",null,"If you are logging more and more information you might find yourself in cases where you concatenate ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),"s or log inside a loop.\nThis might cause unnecessary load on your system if the runtime log level is higher than the messages you want to log.\nTo make this more plastic have a look at the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class DummyClass {\n    private static final Logger logger = LoggerFactory.getLogger(DummyClass.class);\n\n    public void doSomething() {\n        List<String> someResults = retrieveSomeResults();\n\n        logger.debug("Processing the following results:")\n        for(String result : someResult) {\n            logger.debug("- " + result);\n        }\n        consumeResults(someResults)\n    }\n}\n')),(0,o.kt)("p",null,"Now assume that ",(0,o.kt)("inlineCode",{parentName:"p"},"someResults")," contains hundreds or thousands of entries and the log level at runtime is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO"),". This would mean that the loop is run without actually doing anything."),(0,o.kt)("p",null,"To prevent this kind of ",(0,o.kt)("em",{parentName:"p"},"empty")," loops you can use guards like ",(0,o.kt)("inlineCode",{parentName:"p"},"logger.isDebugEnabled()")," in the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class DummyClass {\n    private static final Logger logger = LoggerFactory.getLogger(DummyClass.class);\n\n    public void doSomething() {\n        List<String> someResults = retrieveSomeResults();\n\n        if( logger.isDebugEnabled() ) {\n            logger.debug("Processing the following results:")\n            for(String result : someResult) {\n                logger.debug("- " + result);\n            }\n        }\n\n        consumeResults(someResults)\n    }\n}\n')),(0,o.kt)("p",null,"That way the loop is only executed if necessary."),(0,o.kt)("h2",{id:"logging-configuration"},"Logging Configuration"),(0,o.kt)("p",null,"Logging frameworks offer different options to configure the behavior of the implementation.\nWhich options are available and how to configure them highly depends on the framework you are using."),(0,o.kt)("p",null,"Generally, all frameworks offer some way of configuring:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The application ",(0,o.kt)("em",{parentName:"li"},"log level")),(0,o.kt)("li",{parentName:"ul"},"The output format")),(0,o.kt)("p",null,"Please refer to the documentation of the specific logging implementation you are using for detailed information on what is available and how to apply it."),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"SDK archetypes")," already come with Logback preconfigured as the logging implementation.\nThe following gives an overview of how to change these configurations and perform essential steps like changing the log level."),(0,o.kt)("h3",{id:"configuring-logback"},"Configuring Logback"),(0,o.kt)("p",null,"General information about configuring Logback can be obtained from ",(0,o.kt)("a",{parentName:"p",href:"http://logback.qos.ch/manual/configuration.html"},"the documentation"),".\nThis section only explains some basics."),(0,o.kt)("p",null,"Logback is configured via the configuration file located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/resources")," directory of your ",(0,o.kt)("inlineCode",{parentName:"p"},"application")," module.\nIt is named ",(0,o.kt)("inlineCode",{parentName:"p"},"logback.xml")," for TomEE and ",(0,o.kt)("inlineCode",{parentName:"p"},"logback-spring.xml")," for Spring-based projects.\nTo understand how Logback detects this file have a look at ",(0,o.kt)("a",{parentName:"p",href:"http://logback.qos.ch/manual/configuration.html#auto_configuration"},"their documentation"),"."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This configuration file is not accounted for when running a TomEE based application on SAP BTP, Cloud Foundry environment!\nTo configure logging on Cloud Foundry refer to the ",(0,o.kt)("a",{parentName:"p",href:"#on-cloud-foundry"},"dedicated section")," below.")),(0,o.kt)("h4",{id:"setting-log-levels"},"Setting Log Levels"),(0,o.kt)("p",null,"In this configuration file you will find a block like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<root level="INFO">\n    <appender-ref ref="STDOUT"/>\n</root>\n')),(0,o.kt)("p",null,"This tells Logback to log all messages with level ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO")," and higher to an appender with the reference ",(0,o.kt)("inlineCode",{parentName:"p"},"STDOUT"),".\nValid values for the ",(0,o.kt)("inlineCode",{parentName:"p"},"level")," property are: ",(0,o.kt)("inlineCode",{parentName:"p"},"TRACE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"WARN"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"ERROR"),".\nIf you want to log all packages with level ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG"),", for example, you could set it the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<root level="DEBUG">\n    <appender-ref ref="STDOUT"/>\n</root>\n')),(0,o.kt)("p",null,"However, you usually want to set the logging level for certain packages (or classes) only.\nFor this you would add the following line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<logger name="package.to.log" level="INFO" />\n')),(0,o.kt)("p",null,"In the case that you want to log all requests sent and responses received by the Apache HttpClient in your application locally you would have the following configuration block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<logger name="org.apache.http" level="DEBUG" />\n<logger name="org.apache.http.wire" level="ERROR" />\n<root level="INFO">\n    <appender-ref ref="STDOUT"/>\n</root>\n')),(0,o.kt)("h4",{id:"on-cloud-foundry"},"On Cloud Foundry"),(0,o.kt)("p",null,"To set the debug levels of your application running on Cloud Foundry (using the SAP Java Buildpack) you can leverage the ",(0,o.kt)("inlineCode",{parentName:"p"},"SET_LOGGING_LEVEL")," environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"{ROOT: INFO, com.sap.cloud.sdk: INFO, other.package.to.log: TRACE}\n")),(0,o.kt)("p",null,"Adjust the content of Java packages and their respective log levels according to your needs.\nFor example, to log all requests sent and responses received by the Apache HttpClient you would set ",(0,o.kt)("inlineCode",{parentName:"p"},"SET_LOGGING_LEVEL")," to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"{ROOT: INFO, com.sap.cloud.sdk: INFO, org.apache.http: DEBUG, org.apache.http.wire: ERROR}\n")),(0,o.kt)("p",null,"You can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"SET_LOGGING_LEVEL")," environment variable via your deployment descriptor or via the CF CLI."),(0,o.kt)("admonition",{title:"Dynamically Changing Log Levels at Runtime",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"SET_LOGGING_LEVEL")," requires at least a restart of your application for changes to take effect.\nAlternatively, you can also change the log levels dynamically and even on a per-request basis via ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SAP/cf-java-logging-support/wiki/Dynamic-Log-Levels"},"Dynamic Logging"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Setting the Log Levels Using the Deployment Descriptor:")),(0,o.kt)("p",null,"You can conveniently set this environment variable in the deployment descriptor of your project.\nThat way it will always be applied when (re-)deploying your application.\nIn a ",(0,o.kt)("a",{parentName:"p",href:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjVv7TknpbsAhUJ36QKHaA_Bp4QFjAAegQIBBAC&url=https%3A%2F%2Fhelp.sap.com%2Fviewer%2F6a4563286d06419cb9927ef448c67432%2FCloud%2Fen-US%2Fe68e33b67c844689b07abf70e7ca5bc8.html&usg=AOvVaw1D_4MogbdbFNLOG1A1xeJy"},"Manifest")," or ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/4505d0bdaf4948449b7f7379d24d0f0d/2.0.03/en-US/33548a721e6548688605049792d55295.html"},"MTA")," file the environment variable can be set like this:"),(0,o.kt)(r.Z,{defaultValue:"manifest",values:[{label:"Manifest",value:"manifest"},{label:"MTA",value:"mta"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"manifest",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napplications:\n  - name: <your-application>\n    some-properties: <some-values>\n    env:\n      OTHER_ENVIRONMENT_VARIABLE: 'and their values'\n      SET_LOGGING_LEVEL: '{ROOT: INFO, com.sap.cloud.sdk: INFO, package.to.log: DEBUG}'\n"))),(0,o.kt)(l.Z,{value:"mta",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"ID: com.company.project.app\nversion: 1.0.1\nmodules:\n  - name: <your-module>\n    type: java.tomcat\n    properties:\n      SET_LOGGING_LEVEL: '{ROOT: INFO, com.sap.cloud.sdk: INFO, package.to.log: DEBUG}'\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Setting the Log Levels Using the Cloud Foundry CLI:")),(0,o.kt)("p",null,"Leverage the ",(0,o.kt)("inlineCode",{parentName:"p"},"cf set-env")," command to set an environment variable and apply the change via ",(0,o.kt)("inlineCode",{parentName:"p"},"cf restart"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cf set-env <your-application> SET_LOGGING_LEVEL '{ROOT: INFO, com.sap.cloud.sdk: INFO, org.apache.http: DEBUG, org.apache.http.wire: ERROR}'\ncf restart <your-application>\n")),(0,o.kt)("p",null,"Remember to change the levels back to their original value using the same approach, e.g. after debugging an issue."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Mind that a value set via the CLI will be overridden if you re-deploy your application with different environment variables.")),(0,o.kt)("h4",{id:"recommendation-for-spring-boot-eg-sap-cloud-application-programming-model"},"Recommendation for Spring Boot (e.g. SAP Cloud Application Programming Model)"),(0,o.kt)("p",null,"It's possible to customize the log levels and formatting of your Spring Boot application, e.g. when using the ",(0,o.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/"},"SAP Cloud Application Programming Model (CAP)")," framework.\nFor this we recommend the best practices as they are used in our ",(0,o.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/java/getting-started#generating-a-project-from-a-maven-archetype"},(0,o.kt)("inlineCode",{parentName:"a"},"scp-cf-spring"))," Maven archetype."),(0,o.kt)("p",null,"If not exist, add a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/resources/logback-spring.xml")," with the following contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<configuration>\n    <springProfile name="!cloud">\n        <include resource="org/springframework/boot/logging/logback/base.xml"/>\n        <root level="INFO"/>\n        <logger name="org.springframework.web" level="INFO"/>\n    </springProfile>\n\n    <springProfile name="cloud">\n        <appender name="STDOUT-JSON" class="ch.qos.logback.core.ConsoleAppender">\n            <encoder class="com.sap.hcp.cf.logback.encoder.JsonEncoder"/>\n        </appender>\n        <root level="INFO">\n            <appender-ref ref="STDOUT-JSON"/>\n        </root>\n        <logger name="com.sap.cloud.sdk" level="INFO"/>\n        <logger name="package.to.log" level="DEBUG"/>\n    </springProfile>\n</configuration>\n')),(0,o.kt)("p",null,"If your application starts with an error message about missing class ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonEncoder"),", then an additional dependency is still required:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.hcp.cf.logging</groupId>\n    <artifactId>cf-java-logging-support-logback</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,"Please choose the latest version manually or have the dependency managed by the ",(0,o.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/java/guides/manage-dependencies#the-sap-cloud-sdk-bill-of-material"},"SAP Cloud SDK BOM"),"."),(0,o.kt)("h2",{id:"further-reading"},"Further Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'How to use SLF4J with "legacy" logging frameworks: ',(0,o.kt)("a",{parentName:"li",href:"http://www.slf4j.org/legacy.html"},"http://www.slf4j.org/legacy.html")),(0,o.kt)("li",{parentName:"ul"},"Debug Logging of the Apache HttpClient: ",(0,o.kt)("a",{parentName:"li",href:"https://hc.apache.org/httpcomponents-client-4.5.x/logging.html"},"https://hc.apache.org/httpcomponents-client-4.5.x/logging.html"))))}d.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(34334);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),o=n(67294),r=n(34334),l=n(12466),i=n(76775),s=n(91980),g=n(67392),u=n(50012);function p(e){return function(e){var t;return(null==(t=o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function c(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,g.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=c(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,g]=m({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=s??p;return d({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),g(e),h(e)}),[g,h,r]),tabValues:r}}var f=n(72389);const v="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:g}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=g[n].value;a!==i&&(p(t),s(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:c},l,{className:(0,r.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",v)},o.createElement(y,(0,a.Z)({},e,t)),o.createElement(b,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return o.createElement(w,(0,a.Z)({key:String(t)},e))}}}]);