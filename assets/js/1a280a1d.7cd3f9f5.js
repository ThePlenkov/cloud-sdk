"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7693],{28778:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>r});var i=a(74848),o=a(28453);const d={id:"sap-cloud-sdk-linux-how-to",title:"Getting Started on Linux",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"SAP Cloud SDK on Linux",description:"Get up and started to build with SAP Cloud SDK on Linux",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},t=void 0,l={id:"guides/sap-cloud-sdk-linux-how-to",title:"Getting Started on Linux",description:"Get up and started to build with SAP Cloud SDK on Linux",source:"@site/docs-java/guides/linux-how-to.mdx",sourceDirName:"guides",slug:"/guides/sap-cloud-sdk-linux-how-to",permalink:"/cloud-sdk/docs/java/guides/sap-cloud-sdk-linux-how-to",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/guides/linux-how-to.mdx",tags:[],version:"current",frontMatter:{id:"sap-cloud-sdk-linux-how-to",title:"Getting Started on Linux",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"SAP Cloud SDK on Linux",description:"Get up and started to build with SAP Cloud SDK on Linux",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJavaSidebar",previous:{title:"Cloud Foundry CLI",permalink:"/cloud-sdk/docs/java/guides/cf-cli"},next:{title:"Getting Started",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-getting-started-with-sap-cloud-sdk-for-java"}},s={},r=[{value:"Get SAP Cloud SDK Development Environment for Java on Linux",id:"get-sap-cloud-sdk-development-environment-for-java-on-linux",level:2},{value:"Required Knowledge",id:"required-knowledge",level:2},{value:"Let&#39;s Install Dependencies",id:"lets-install-dependencies",level:2},{value:"Installing the Java Development Kit and Maven",id:"installing-the-java-development-kit-and-maven",level:3},{value:"Use Maven To Build and Deploy Your App",id:"use-maven-to-build-and-deploy-your-app",level:3},{value:"Cloud Foundry Command Line Interface",id:"cloud-foundry-command-line-interface",level:3},{value:"Installing IntelliJ Idea IDE",id:"installing-intellij-idea-ide",level:3},{value:"Initialize and Build Your App",id:"initialize-and-build-your-app",level:2},{value:"To Initialize Your SAP Cloud SDK App From the Maven Archetype",id:"to-initialize-your-sap-cloud-sdk-app-from-the-maven-archetype",level:3},{value:"Building Your App",id:"building-your-app",level:3},{value:"Bind your Command-Line Interface to an API Endpoint",id:"bind-your-command-line-interface-to-an-api-endpoint",level:3},{value:"Deploying Your App",id:"deploying-your-app",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"get-sap-cloud-sdk-development-environment-for-java-on-linux",children:"Get SAP Cloud SDK Development Environment for Java on Linux"}),"\n",(0,i.jsx)(n.p,{children:"This tutorial will guide you through getting your SAP Cloud SDK development environment up and running on Linux.\nAll the steps were verified on Ubuntu 18.04 and should comply with other Debian-based distributions."}),"\n",(0,i.jsx)(n.h2,{id:"required-knowledge",children:"Required Knowledge"}),"\n",(0,i.jsx)(n.p,{children:"No initial knowledge is required."}),"\n",(0,i.jsx)(n.h2,{id:"lets-install-dependencies",children:"Let's Install Dependencies"}),"\n",(0,i.jsx)(n.h3,{id:"installing-the-java-development-kit-and-maven",children:"Installing the Java Development Kit and Maven"}),"\n",(0,i.jsx)(n.p,{children:"SAP Cloud SDK supports Java 17."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install openjdk-17-jdk\n"})}),"\n",(0,i.jsx)(n.p,{children:"Updating alternatives to make sure the right version of Java is used."}),"\n",(0,i.jsx)(n.p,{children:"Your distribution might have a different version of Java installed by default.\nYou can check your Java version by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"java -version\n"})}),"\n",(0,i.jsx)(n.p,{children:"As you can see below, my laptop has Java 11 as default."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"openjdk 11.0.5 2019-10-15\nOpenJDK Runtime Environment (build 11.0.5+10-post-Ubuntu-0ubuntu1.1)\nOpenJDK 64-Bit Server VM (build 11.0.5+10-post-Ubuntu-0ubuntu1.1, mixed mode)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Check what Java versions you have on your machine with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"update-java-alternatives --list\n"})}),"\n",(0,i.jsx)(n.p,{children:"After installing OpenJDK 17 you should now have both Java 17 and Java 11."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"java-1.11.0-openjdk-amd64      1111       /usr/lib/jvm/java-1.11.0-openjdk-amd64\njava-1.17.0-openjdk-amd64      1081       /usr/lib/jvm/java-1.17.0-openjdk-amd64\n"})}),"\n",(0,i.jsx)(n.p,{children:"To switch between Java versions run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo update-alternatives --config java\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In my case, I have to press ",(0,i.jsx)(n.strong,{children:"2"})," to make Java 17 default."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Selection    Path                                            Priority   Status\n------------------------------------------------------------\n0            /usr/lib/jvm/java-11-openjdk-amd64/bin/java      1111      auto mode\n*1            /usr/lib/jvm/java-11-openjdk-amd64/bin/java      1111      manual mode\n2            /usr/lib/jvm/java-17-openjdk-amd64/jre/bin/java   1081      manual mode\nPress <enter> to keep the current choice[*], or type selection number:\n"})}),"\n",(0,i.jsx)(n.p,{children:"Check the Java version again."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"java -version\n"})}),"\n",(0,i.jsx)(n.p,{children:"You have now switched to Java 17."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'openjdk version "17.0.8.101"\nOpenJDK Runtime Environment (build jdk-17.0.8.101-8u232-b09-0ubuntu1.1-b09)\nOpenJDK 64-Bit Server VM (build 25.232-b09, mixed mode)\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"use-maven-to-build-and-deploy-your-app",children:["Use ",(0,i.jsx)(n.a,{href:"https://maven.apache.org/",children:"Maven"})," To Build and Deploy Your App"]}),"\n",(0,i.jsxs)(n.p,{children:["Install ",(0,i.jsx)(n.code,{children:"maven"})," with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install maven\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To check if ",(0,i.jsx)(n.code,{children:"maven"})," is installed correctly run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mvn --version\n"})}),"\n",(0,i.jsx)(n.p,{children:"You'll see the maven version and build details."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'Apache Maven 3.9.4\nMaven home: /usr/share/maven\nJava version: 17.0.8.1, vendor: Private Build, runtime: /usr/lib/jvm/java-17-openjdk-amd64/jre\nDefault locale: en_US, platform encoding: ANSI_X3.4-1968\nOS name: "linux", version: "5.3.0-26-generic", arch: "amd64", family: "unix"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To find out more about Apache Maven, how to get it for your Linux distribution, and detailed tutorials ",(0,i.jsx)(n.a,{href:"https://maven.apache.org/",children:"follow the official maven documentation"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"cloud-foundry-command-line-interface",children:"Cloud Foundry Command Line Interface"}),"\n",(0,i.jsxs)(n.p,{children:["To deploy your app developed with SAP Cloud SDK to ",(0,i.jsx)(n.a,{href:"https://www.sap.com/products/cloud-platform.html",children:"SAP Business Technology Platform"})," you'll need the Cloud Foundry command-line interface (CLI).\nYou can download the latest release of the DEB package ",(0,i.jsx)(n.a,{href:"https://github.com/cloudfoundry/cli/releases",children:"from the official CF GitHub repository"})," or follow ",(0,i.jsx)(n.a,{href:"https://github.com/cloudfoundry/cli#installing-using-a-package-manager",children:"instructions"})," to install it with you package manager: ",(0,i.jsx)(n.code,{children:"apt-get"}),", ",(0,i.jsx)(n.code,{children:"yum"})," and ",(0,i.jsx)(n.code,{children:"homebrew"})," are supported."]}),"\n",(0,i.jsx)(n.p,{children:"After installing the CLI, you might need to reload your shell before it becomes available.\nTo check if it works run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cf\n"})}),"\n",(0,i.jsx)(n.h3,{id:"installing-intellij-idea-ide",children:"Installing IntelliJ Idea IDE"}),"\n",(0,i.jsxs)(n.p,{children:["For the best developer experience, we recommend getting the community version of ",(0,i.jsx)(n.strong,{children:"IntelliJ Idea"}),".\nDownload the archive from the ",(0,i.jsx)(n.a,{href:"https://www.jetbrains.com/idea/download/#section=linux",children:"official site"})," and follow installation instructions for your system."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Another supported IDE is ",(0,i.jsx)(n.a,{href:"https://www.eclipse.org/ide/",children:"Eclipse"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"initialize-and-build-your-app",children:"Initialize and Build Your App"}),"\n",(0,i.jsx)(n.h3,{id:"to-initialize-your-sap-cloud-sdk-app-from-the-maven-archetype",children:"To Initialize Your SAP Cloud SDK App From the Maven Archetype"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mvn archetype:generate -DarchetypeGroupId=com.sap.cloud.sdk.archetypes -DarchetypeArtifactId=spring-boot3 -DarchetypeVersion=RELEASE\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The snippet above will create a ",(0,i.jsx)(n.code,{children:"Spring Boot"})," app."]}),"\n",(0,i.jsx)(n.h3,{id:"building-your-app",children:"Building Your App"}),"\n",(0,i.jsx)(n.p,{children:"Change the directory to the root of the app you've just created."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd /<app-root-directory>\n"})}),"\n",(0,i.jsx)(n.p,{children:"To build your APP run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mvn clean package\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After a successful build, you'll find a ",(0,i.jsx)(n.code,{children:"target"})," folder within your app's root folder containing a ",(0,i.jsx)(n.code,{children:"war"})," file along with other build artifacts.\nThis ",(0,i.jsx)(n.code,{children:"war"})," file is a packaged version of your web-app that's going to be deployed in the SAP Cloud Foundry environment."]}),"\n",(0,i.jsx)(n.h3,{id:"bind-your-command-line-interface-to-an-api-endpoint",children:"Bind your Command-Line Interface to an API Endpoint"}),"\n",(0,i.jsx)(n.p,{children:"Let's associate your Cloud Foundry(CF) CLI to your SAP account by providing an API endpoint and logging in with your account."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Select endpoint depending on your region:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Europe ",(0,i.jsx)(n.a,{href:"https://api.cf.eu10.hana.ondemand.com",children:"https://api.cf.eu10.hana.ondemand.com"})]}),"\n",(0,i.jsxs)(n.li,{children:["US East: ",(0,i.jsx)(n.a,{href:"https://api.cf.us10.hana.ondemand.com",children:"https://api.cf.us10.hana.ondemand.com"})]}),"\n",(0,i.jsxs)(n.li,{children:["US CENTRAL: ",(0,i.jsx)(n.a,{href:"https://api.cf.us20.hana.ondemand.com",children:"https://api.cf.us20.hana.ondemand.com"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To use a snippet for Europe run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    cf api https://api.cf.eu10.hana.ondemand.com\n"})}),"\n",(0,i.jsx)(n.p,{children:"Provide your credentials for the SAP BTP by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cf login\n"})}),"\n",(0,i.jsx)(n.h3,{id:"deploying-your-app",children:"Deploying Your App"}),"\n",(0,i.jsx)(n.p,{children:"To deploy your app run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cf push\n"})}),"\n",(0,i.jsx)(n.p,{children:"After a successful deployment, you'll see a status of just pushed app:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'Waiting for app to start...\nname:                test-app\nrequested state:     started\nisolation segment:   trial\nroutes:              test-app-shy-hyena-st.cfapps.eu10.hana.ondemand.com\nlast uploaded:       Sun 12 Jan 14:29:02 CET 2020\nstack:               cflinuxfs3\nbuildpacks:          sap_java_buildpack\ntype:            web\ninstances:       1/1\nmemory usage:    1024M\nstart command:   JRE_HOME="META-INF/.sap_java_buildpack/sapjvm" JBP_CONFIG_SAPJVM_MEMORY_STACK_THREADS="250" JBP_CLASSPATH="" JBP_CONFIG_SAPJVM_MEMORY_CLASS_COUNT="" JAVA_HOME="META-INF/.sap_java_buildpack/sapjvm"\nJBP_CONFIG_SAPJVM_MEMORY_HEADROOM="0" CATALINA_HOME="META-INF/.sap_java_buildpack/tomee7" JAVA_OPTS=" -Djava.io.tmpdir=$TMPDIR -Dhttp.port=$PORT -Daccess.logging.enabled=false\n-Dlogback.configurationFile=file:META-INF/.sap_java_buildpack/tomee7/conf/logback.xml -DSAPJVM_EXTENSION_COMMAND_HANDLER=com.sap.xs2rt.dropletaddon.JvmExtensionCommandHandler\n-Djava.protocol.handler.pkgs=com.sap.xs.statistics.stream.handling.protocols -agentpath:/app/META-INF/.sap_java_buildpack/jvm_kill/jvmkill-1.12.0.RELEASE-trusty.so=printHeapHistogram=1 -Dsun.net.inetaddr.ttl=0\n-Dsun.net.inetaddr.negative.ttl=0" ./META-INF/.sap_java_buildpack/tomee7/bin/catalina.sh run\nstate     since                  cpu     memory         disk           details\n#0   running   2020-01-12T13:30:29Z   69.0%   446.2M of 1G   191.1M of 1G\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To verify your deployment take a ",(0,i.jsx)(n.code,{children:"URL"})," indicated in the ",(0,i.jsx)(n.code,{children:"routes"})," section from the deployment output above.\nPut it into your browser and add ",(0,i.jsx)(n.code,{children:"/hello"})," at the end.\nIt should look similar to: ",(0,i.jsx)(n.code,{children:"https://test-app-shy-hyena-st.cfapps.eu10.hana.ondemand.com/hello"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>l});var i=a(96540);const o={},d=i.createContext(o);function t(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);