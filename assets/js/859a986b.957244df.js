"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={title:"Develop your App for the Kyma Environment with Java SDK",sidebar_label:"Kubernetes with SAP Kyma",id:"kubernetes-kyma",description:"Learn how to develop an application with the SAP Cloud SDK for Java in the Kyma environment",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},r=void 0,p={unversionedId:"environments/kubernetes-kyma",id:"environments/kubernetes-kyma",title:"Develop your App for the Kyma Environment with Java SDK",description:"Learn how to develop an application with the SAP Cloud SDK for Java in the Kyma environment",source:"@site/docs-java/environments/kyma.mdx",sourceDirName:"environments",slug:"/environments/kubernetes-kyma",permalink:"/cloud-sdk/docs/java/environments/kubernetes-kyma",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/environments/kyma.mdx",tags:[],version:"current",frontMatter:{title:"Develop your App for the Kyma Environment with Java SDK",sidebar_label:"Kubernetes with SAP Kyma",id:"kubernetes-kyma",description:"Learn how to develop an application with the SAP Cloud SDK for Java in the Kyma environment",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJavaSidebar",previous:{title:"Kubernetes with SAP Gardener",permalink:"/cloud-sdk/docs/java/environments/kubernetes-gardener"},next:{title:"Update Steps to Version 5",permalink:"/cloud-sdk/docs/java/guides/5.0-upgrade-steps"}},l={},s=[{value:"SAP Cloud SDK Features Supported on Kyma by SAP",id:"sap-cloud-sdk-features-supported-on-kyma-by-sap",level:2},{value:"Getting Started with the SAP Cloud SDK on Kyma",id:"getting-started-with-the-sap-cloud-sdk-on-kyma",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Containerize the Application",id:"containerize-the-application",level:3},{value:"Create a Kyma Deployment",id:"create-a-kyma-deployment",level:3},{value:"Access Your Application",id:"access-your-application",level:3},{value:"Bind SAP BTP Services to the Application",id:"bind-sap-btp-services-to-the-application",level:3},{value:"Create and Bind the Destination Service",id:"create-and-bind-the-destination-service",level:4},{value:"Bind the XSUAA Service",id:"bind-the-xsuaa-service",level:4},{value:"Expose your Application to the Internet",id:"expose-your-application-to-the-internet",level:3},{value:"On-Premise Connectivity",id:"on-premise-connectivity",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Background Information",id:"background-information",level:3},{value:"Create a Kubernetes Resource",id:"create-a-kubernetes-resource",level:3},{value:"Executing Requests",id:"executing-requests",level:3}],c={toc:s};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kyma-project.io/"},"Kyma")," is an application runtime that provides you a flexible and easy way to connect, extend, and customize your applications in the cloud-native world of Kubernetes.\nFind more details in the ",(0,o.kt)("a",{parentName:"p",href:"https://kyma-project.io/docs/kyma/latest/01-overview/"},"official documentation"),"."),(0,o.kt)("p",null,"You can also refer to this additional material available for getting started with SAP Cloud SDK on Kyma:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/kyma-runtime-extension-samples/tree/main/sample-cloudsdk-java"},"Sample Application with Setup Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blogs.sap.com/2022/01/11/use-sap-cloud-sdk-on-kyma-runtime-to-connect-to-external-systems-with-client-cert-authentication/"},"Blog Post on a Sample Use Case")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sap.github.io/cloud-sdk/docs/java/environments/sap-btp-kubernetes-environment-with-sap-gardener#excursion-bind-services-created-by-the-service-catalog"},"Using the Service Catalog with the SAP Cloud SDK"))),(0,o.kt)("h2",{id:"sap-cloud-sdk-features-supported-on-kyma-by-sap"},"SAP Cloud SDK Features Supported on Kyma by SAP"),(0,o.kt)("p",null,"The SAP Cloud SDK supports the Kyma runtime through the regular Cloud Foundry specific modules and classes.\nHence, Cloud Foundry application developers usually don't need to adjust their code to deploy and run it on Kyma."),(0,o.kt)("p",null,"Nevertheless, before deploying your application on a Kyma cluster, please ensure that following dependency is on the classpath: ",(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:com.sap.cloud.environment.servicebinding%20AND%20a:java-sap-service-operator"},(0,o.kt)("inlineCode",{parentName:"a"},"com.sap.cloud.environment.servicebinding:java-sap-service-operator")),"."),(0,o.kt)("p",null,"Find below the list of features we currently support:\nLegend: \u2705 - supported, \u2757- partially supported, \u274c - not supported"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2705 Consume SAP BTP services like Destination, Connectivity, IAS, XSUAA, and others"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Multitenancy"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Resilience & Caching"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Connect to and consume services from SAP S/4HANA Cloud"),(0,o.kt)("li",{parentName:"ul"},"\u2757 Connect to and consume services from SAP S/4HANA On-Premise"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Seamless use of typed clients provided by the SAP Cloud SDK")),(0,o.kt)("h2",{id:"getting-started-with-the-sap-cloud-sdk-on-kyma"},"Getting Started with the SAP Cloud SDK on Kyma"),(0,o.kt)("p",null,"This detailed guide will help get your SAP Cloud SDK Java application up and running in Kyma.\nYou can also use this guide to migrate your existing application to Kyma."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To follow this guide you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("a",{parentName:"li",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/09dd313bf6644250a14f8f38c3d644c0.html?locale=en-US"},"SAP BTP Kyma environment")," instance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," and a publicly reachable Docker repository"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-boot"},"Spring Boot")," Application using the SAP Cloud SDK")),(0,o.kt)("admonition",{title:"Tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When deploying applications to Kyma, you are not limited to Spring Boot applications.\nIn fact, you may deploy any application that can be executed within a Docker container.\nThe examples in this document, however, do use a Spring Boot app.")),(0,o.kt)("p",null,"Check out the details below in case you are uncertain about any of the prerequisites."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Kyma Environment"),(0,o.kt)("p",null,"This guide assumes you already have a Global Account, a subaccount on SAP BTP platform and have ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"Kubernetes CLI")," installed on your local machine.\nIf not, please refer to these guides on getting a ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/d61c2819034b48e68145c45c36acba6e.html?locale=en-US"},"Global Account")," and creating a ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/05280a123d3044ae97457a25b3013918.html?locale=en-US"},"subaccount")),(0,o.kt)("p",null,"In your subaccount in SAP BTP cockpit, create a ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/09dd313bf6644250a14f8f38c3d644c0.html?locale=en-US"},"Kyma Environment instance"),".\nMake sure that you select an appropriate ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/befe01d5d8864e59bf847fa5a5f3d669.html?locale=en-US#azure"},"plan")," and also assign the necessary ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/148ae38b7d6f4e61bbb696bbfb3996b2.html?locale=en-US"},"roles")," to users."),(0,o.kt)("admonition",{title:"Kyma Setup Time",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Creating a Kyma environment instance can take up to 30 minutes.")),(0,o.kt)("p",null,"Once your Kyma environment is created, you can download a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"Kubeconfig file")," directly from the SAP BTP cockpit."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Kubeconfig file download",src:n(63865).Z,width:"1573",height:"822"}))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Docker"),(0,o.kt)("p",null,"This guide assumes you have ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," installed on your local machine."),(0,o.kt)("p",null,"Furthermore, you need a ",(0,o.kt)("strong",{parentName:"p"},"Docker repository")," where you can store images.\nThe repository needs to be publicly accessible in order for the cluster to access and download the Docker image we are going to create."),(0,o.kt)("p",null,"In case you don't have such a repository yet we recommend either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/"},"Docker Hub")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://common.repositories.cloud.sap/ui/"},"Artifactory DMZ")," (for SAP internal developers)")),(0,o.kt)("p",null,"Access to images in a repository may be limited to authenticated and/or authorized users, depending on your configuration."),(0,o.kt)("p",null,"Make sure you are logged in to your repository on your local machine by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker login (your-repo) --username=(your-username)\n")),(0,o.kt)("p",null,"And check your configuration which is usually located under ",(0,o.kt)("inlineCode",{parentName:"p"},"(your-home-directory)/.docker/config.json"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In case AuthN/AuthZ is required to download images make sure you have a secret configured in your cluster"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret docker-registry (name-of-the-secret) --docker-username=(username) --docker-password=(API-token) --docker-server=(your-repo)\n")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Application using the SAP Cloud SDK"),(0,o.kt)("p",null,"If you don't have an application already you can comfortably ",(0,o.kt)("a",{parentName:"p",href:"../getting-started"},"create one from our archetypes"),".")),(0,o.kt)("h3",{id:"containerize-the-application"},"Containerize the Application"),(0,o.kt)("p",null,"To run on Kyma the application needs to be shipped in a container.\nFor this guide we will be using Docker."),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the project root directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:"{2}","{2}":!0},'FROM openjdk:17-jdk-slim\nARG JAR_FILE=application/target/*.jar\nCOPY ${JAR_FILE} app.jar\nENTRYPOINT ["java","-jar","/app.jar"]\n')),(0,o.kt)("p",null,"If needed, update the ",(0,o.kt)("inlineCode",{parentName:"p"},"JAR_FILE")," to point to your JAR file."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can find more information on how to containerize Spring Boot applications in ",(0,o.kt)("a",{parentName:"p",href:"https://spring.io/guides/gs/spring-boot-docker/"},"this guide")," (in particular, check the ",(0,o.kt)("em",{parentName:"p"},"Containerize It")," section).")),(0,o.kt)("p",null,"Compile and push the image by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t <your-repo>/<your-image-name> .\ndocker push <your-repo>/<your-image-name>\n\n# alternatively, you may add a tag to your image\ndocker build -t <your-repo>/<your-image-name>:<your-tag> .\ndocker push <your-repo>/<your-image-name>:<your-tag>\n")),(0,o.kt)("admonition",{title:"Tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In case you are facing authorization issues when pushing to your repository refer to the dedicated section under ",(0,o.kt)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites"),".")),(0,o.kt)("h3",{id:"create-a-kyma-deployment"},"Create a Kyma Deployment"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new YAML file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="deployment.yml" {17,31}',title:'"deployment.yml"',"{17,31}":!0}," apiVersion: apps/v1\n kind: Deployment\n metadata:\n   name: my-app-deployment\n spec:\n   replicas: 1\n   selector:\n     matchLabels:\n       app: my-app\n   template:\n     metadata:\n       labels:\n         app: my-app\n     spec:\n       containers:\n         # Configure the docker image you just pushed to your repository here\n         - image: <name-of-the-image>\n           name: my-app\n           imagePullPolicy: Always\n           resources:\n             requests:\n               memory: '1.5Gi'\n               cpu: '500m'\n             limits:\n               memory: '2Gi'\n               cpu: '1000m'\n           # Volume mounts needed for injecting SAP BTP service credentials\n           volumeMounts:\n           env:\n           - name: SERVICE_BINDING_ROOT\n             value: \"/etc/secrets/sapbtp\"\n       imagePullSecrets:\n         # In case your repository requires a login, reference your secret here\n         - name: <your-secret-for-docker-login>\n       volumes:\n ----\n apiVersion: v1\n kind: Service\n metadata:\n   labels:\n     app: my-app\n   name:  my-app\n spec:\n   type: NodePort\n   ports:\n     - port: 8080\n       targetPort: 8080\n       protocol: TCP\n   selector:\n     app: my-app\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the configuration via ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply -f path/to/deployment/file/deployment.yml"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Monitor the status of the deployment by running: ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get deployment my-app-deployment"),"."))),(0,o.kt)("p",null,"Eventually, you should see an output similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deployment my-app-deployment\n\nNAME                  READY   UP-TO-DATE   AVAILABLE   AGE\nmy-app-deployment     1/1     1            1           15s\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In case something went wrong use ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl describe")," together with ",(0,o.kt)("inlineCode",{parentName:"p"},"deployment")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"pod")," to get more information about the status of your application.")),(0,o.kt)("h3",{id:"access-your-application"},"Access Your Application"),(0,o.kt)("p",null,"To access your application without further configuration you need to find the name of the application pod by listing out all available pods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods\n")),(0,o.kt)("p",null,"Now use the name of the application pod and forward the application port to your local machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward [pod-name] [local-port]:[application-port]\n")),(0,o.kt)("p",null,"In case you started with an SAP Cloud SDK Archetype, you can test the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello")," endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl localhost:[local-port]/hello\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example"),(0,o.kt)("p",null,"If your application is running on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8080")," (default configuration) in it's pod, you can use the following command to gain access to your app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward my-app-pod-XYZ :8080\n")),(0,o.kt)("p",null,"Please note that we skipped the ",(0,o.kt)("inlineCode",{parentName:"p"},"[local-port]")," parameter in the command above.\nThis will let ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," choose a random available port on your local machine every time you run the command."),(0,o.kt)("p",null,"If everything worked as expected, you should see an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Forwarding from 127.0.0.1:50309 -> 8080\nForwarding from [::1]:50309 -> 8080\n")),(0,o.kt)("p",null,"In this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," chose the local port ",(0,o.kt)("inlineCode",{parentName:"p"},"50309"),".\nHence, you should be able to successfully run the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:50309/hello\n"))),(0,o.kt)("admonition",{title:"SSH Access to your Pods",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If port-forwarding is not enough for you, you can also get SSH access to your application pods:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec --stdin --tty [pod-name] -- /bin/sh\n"))),(0,o.kt)("h3",{id:"bind-sap-btp-services-to-the-application"},"Bind SAP BTP Services to the Application"),(0,o.kt)("p",null,"The SAP Business Technology Platform offers various services that can be used by applications.\nTo access services from a Kyma environment, instances have to be created and bound to the application."),(0,o.kt)("p",null,"For this guide we'll assume we want to use two services:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Destination Service"),(0,o.kt)("li",{parentName:"ol"},"XSUAA Service")),(0,o.kt)("h4",{id:"create-and-bind-the-destination-service"},"Create and Bind the Destination Service"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open your Kyma dashboard and select the namespace of your application (top right hand side of the screen) and navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Service Management > Service Instances"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new service instance by first clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"+ Create Service Instance")," button."),(0,o.kt)("p",{parentName:"li"},"Choose a name for the instance, then enter ",(0,o.kt)("inlineCode",{parentName:"p"},"destination")," as offering name and ",(0,o.kt)("inlineCode",{parentName:"p"},"lite")," as plan."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Destination Service Instance Creation",src:n(428).Z,width:"2872",height:"994"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finalize the service instance creation by confirming your configuration with a click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," button."),(0,o.kt)("admonition",{parentName:"li",title:"Save the configuration as YAML",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you prefer to maintain your configration as code you can copy the resulting YAML into your project."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Service Management > Service Bindings")," and create a binding for the service instance you just created."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Destination Service Binding Creation",src:n(86049).Z,width:"2872",height:"994"})),(0,o.kt)("p",{parentName:"li"},"Make sure to provide a meaningful name to the binding as it will also be used for the created secret, which is needed for the next step.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The automatically created secret (derived from the service binding) needs to be mounted to the file system of your application pods.\nOpen your ",(0,o.kt)("inlineCode",{parentName:"p"},"deployment.yml")," and add the following content:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find the empty list of ",(0,o.kt)("inlineCode",{parentName:"p"},"volumes")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"deployment.yml"),".\nAdd a new volume, referencing the secret:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="volumes:"',title:'"volumes:"'},"- name: my-destination-service-binding-volume\n  secret:\n    secretName: <the name of your binding goes here>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Mount this volume into the file system of your application.\nAdd it to the empty list of ",(0,o.kt)("inlineCode",{parentName:"p"},"volumeMounts")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"container")," section of your ",(0,o.kt)("inlineCode",{parentName:"p"},"deployment.yml"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="volumeMounts:"',title:'"volumeMounts:"'},"- name: my-destination-service-binding-volume\n  mountPath: '/etc/secrets/sapbtp/my-destination-service-binding'\n  readOnly: true\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Apply the changes to your deployment by running ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply -f deployment.yml"),"."))),(0,o.kt)("h4",{id:"bind-the-xsuaa-service"},"Bind the XSUAA Service"),(0,o.kt)("p",null,"Apply the same steps as for the destination service, but use the following values when creating the service instance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Offering Name: ",(0,o.kt)("inlineCode",{parentName:"li"},"xsuaa")),(0,o.kt)("li",{parentName:"ul"},"Plan: ",(0,o.kt)("inlineCode",{parentName:"li"},"application"))),(0,o.kt)("p",null,"Here is an example of what the YAML for the service instance and service binding might look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: services.cloud.sap.com/v1\nkind: ServiceInstance\nmetadata:\n  name: my-xsuaa\n  labels:\n    app.kubernetes.io/name: my-xsuaa\n  annotations: {}\n  namespace: sdk-java\nspec:\n  serviceOfferingName: xsuaa\n  servicePlanName: application\n---\napiVersion: services.cloud.sap.com/v1\nkind: ServiceBinding\nmetadata:\n  name: my-xsuaa-binding\n  labels:\n    app.kubernetes.io/name: my-xsuaa-binding\n  annotations: {}\n  namespace: sdk-java\nspec:\n  serviceInstanceName: kyma-xsuaa-serv\n")),(0,o.kt)("h3",{id:"expose-your-application-to-the-internet"},"Expose your Application to the Internet"),(0,o.kt)("p",null,"During the next steps, you will configure and deploy an ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/01c5f9ba7d6847aaaf069d153b981b51.html?locale=en-US"},"approuter")," so that only authenticated users can access your application.\nFor that, you will need to create a simple application that uses the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@sap/approuter"},"@sap/approuter")," and starts it for this purpose."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Based on the approuter application you used, containerize your application and push the image to a docker repository of your choice.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new YAML file describing the approuter deployment:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="deployment.yml" {18,21,31,32,37}',title:'"deployment.yml"',"{18,21,31,32,37}":!0},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-approuter-deployment\n  labels:\n    app: my-approuter\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: my-approuter\n  template:\n    metadata:\n      labels:\n        app: my-approuter\n    spec:\n      imagePullSecrets:\n        - name: <your-secret-for-docker-login>\n      containers:\n        # Configure the docker image of your approuter application here\n        - image: <name-of-the-image>\n          imagePullPolicy: Always\n          name: my-approuter\n          env:\n            - name: PORT\n              value: \'5000\'\n            - name: destinations\n              value: >\n                [\n                  {\n                    "name": "<name-for-the-backend-app>",\n                    "url": "<URL-to-access-backend-app>",\n                    "forwardAuthToken": true\n                  }\n                ]\n            - name: TENANT_HOST_PATTERN\n              value: <URL-pattern-for-outside-cluster-access>\n          volumeMounts:\n            - name: my-xsuaa-service-binding-volume\n              mountPath: \'/etc/secrets/sapcp/xsuaa/my-xsuaa-service-binding\'\n      volumes:\n        - name: my-xsuaa-service-binding-volume\n          secret:\n            secretName: my-xsuaa-secret\n      restartPolicy: Always\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: my-approuter\n  name: my-approuter\nspec:\n  type: NodePort\n  ports:\n    - port: 5000\n      targetPort: 5000\n      protocol: TCP\n      nodePort: 31002\n  selector:\n    app: my-approuter\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Also adapt the ",(0,o.kt)("inlineCode",{parentName:"p"},"xs-app.json")," file:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json{5,7,8}"},'{\n    "welcomeFile": "/web-pages/index.html",\n    "routes": [\n        {\n            "source": "/<path-for-backend-endpoints>/(.*)",\n            "target": "$1",\n            "destination": "<name-for-the-backend-app>",\n            "identityProvider": "<optional-identity-provider-id>",\n            "csrfProtection": false\n        }\n    ]\n}\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow steps similar to steps 2-3 in ",(0,o.kt)("a",{parentName:"p",href:"#create-a-kyma-deployment"},"Create a Kyma Deployment section")," to deploy the approuter and check if the deployment is successful.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the already created XSUAA service instance with few parameters like ",(0,o.kt)("inlineCode",{parentName:"p"},"xsappname")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"oauth2-configuration"),".\nThis is required to provide authenticated access to backend application via the approuter."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="xsuaa-service.yaml"{9-15}',title:'"xsuaa-service.yaml"{9-15}'},"---\napiVersion: servicecatalog.k8s.io/v1beta1\nkind: ServiceInstance\nmetadata:\n  name: xsuaa-service\nspec:\n  clusterServiceClassExternalName: xsuaa\n  clusterServicePlanExternalName: <your-desired-plan>\n  parameters:\n    xsappname: <your-backend-app-name>\n    oauth2-configuration:\n      allowedproviders:\n        - <your-idp-key>\n      redirect-uris:\n        - <URL-pattern-for-outside-cluster-access>\n---\napiVersion: servicecatalog.k8s.io/v1beta1\nkind: ServiceBinding\nmetadata:\n  name: my-xsuaa-service-binding\nspec:\n  instanceRef:\n    name: xsuaa-service\n  secretName: my-xsuaa-secret\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the configuration via ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply -f xsuaa-service.yaml"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make the approuter accessible outside the cluster by creating an API rule:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="create-api-rule.yml"{4,15}',title:'"create-api-rule.yml"{4,15}'},"apiVersion: gateway.kyma-project.io/v1alpha1\nkind: APIRule\nmetadata:\n  name: <your-rule-name>\nspec:\n  gateway: kyma-gateway.kyma-system.svc.cluster.local\n  rules:\n    - accessStrategies:\n        - config: {}\n          handler: noop\n      methods:\n        - GET\n      path: /.*\n  service:\n    host: <subaccount-prefix>.<URL-pattern-for-outside-cluster-access>\n    name: my-approuter\n    port: 5000\n")),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the configuration via ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply -f create-api-rule.yml"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finally, access the application by using the host address provided in the API rule created and appending the ",(0,o.kt)("inlineCode",{parentName:"p"},"path-for-backend-endpoints")," given in ",(0,o.kt)("inlineCode",{parentName:"p"},"xs-app.json")," along with the an actual end point of your backend application."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You need not necessarily push an Approuter to access your application outside a cluster.\nYou could also go ahead and expose the service for your application directly by creating an APIRule.\nBut, this would mean that access to your application would not be authenticated first.")),(0,o.kt)("h2",{id:"on-premise-connectivity"},"On-Premise Connectivity"),(0,o.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,o.kt)("p",null,"This guide assumes you have both the ",(0,o.kt)("strong",{parentName:"p"},"Transparent Proxy")," (version ",(0,o.kt)("inlineCode",{parentName:"p"},">= 1.3.0"),") and ",(0,o.kt)("strong",{parentName:"p"},"Connectivity Proxy")," (version ",(0,o.kt)("inlineCode",{parentName:"p"},">= 2.9.2"),") installed in your cluster.\nPlease refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/kyma-runtime-extension-samples/tree/main/connectivity-proxy"},"this")," and ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/CP_CONNECTIVITY/cca91383641e40ffbe03bdc78f00f681/23fc1100c60b45c58f09694b7f9c7700.html"},"this")," documentation on how to install it if you haven't already."),(0,o.kt)("admonition",{title:"Kyma Compatibility",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"On Kyma, two scenarios are supported by the SAP Cloud SDK:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},'Using the Connecitivty Proxy in "trusted mode" together with the Transparent Proxy'),(0,o.kt)("li",{parentName:"ol"},'Using a custom Connecitivty Proxy instance in "untrusted mode" without the Transparent Proxy')),(0,o.kt)("p",{parentName:"admonition"},'The Connecitivty Proxy managed by Kyma is coming in "trusted mode", thus this guide covers scenario (1).\nIn case you want to run scenario (2) refer to ',(0,o.kt)("a",{parentName:"p",href:"./kubernetes-gardener#2-using-the-connectivity-proxy"},"this guide")," for using the Connectivity Proxy without Transparent Proxy.\nOther scenarios are currently not supported.")),(0,o.kt)("h3",{id:"background-information"},"Background Information"),(0,o.kt)("p",null,"When using the Transparent Proxy your app performs requests against the Transparent Proxy without explicit authentication, relying on the secure network communication provided by Kyma via Istio.\nThe Transparent Proxy will obtain the relevant destination from the destination service and use it to forward the request via the Connectivity Proxy to the On-Premise system.\nConsequently, your app itself does not interact with destination or connectivity service at all and thus your application pods do not require bindings to these two services."),(0,o.kt)("p",null,"Please note that the current implementation of the Transparent Proxy does not yet cover all use cases."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Constraints when using the Transparent Proxy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Private Link not yet supported"),(0,o.kt)("li",{parentName:"ul"},"Destination names need to be known at design time",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"see the note on ",(0,o.kt)("a",{parentName:"li",href:"#create-a-kubernetes-resource"},"Create a Kubernetes Resource")))))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This approach is conceptually different from what you may be used to from a CloufdFoundry environment.\nThe official ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/CP_CONNECTIVITY/cca91383641e40ffbe03bdc78f00f681/e661713ef7d14373b57e3e26b0b03b86.html"},"documentation of the Transparent Proxy")," gives more information on the architecture.")),(0,o.kt)("h3",{id:"create-a-kubernetes-resource"},"Create a Kubernetes Resource"),(0,o.kt)("p",null,"Create the following YAML file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title:"example-dest.yaml"','title:"example-dest.yaml"':!0},"apiVersion: destination.connectivity.api.sap/v1\nkind: Destination\nmetadata:\n  name: example-dest\nspec:\n  destinationRef:\n    name: 'example-dest-onprem' # name from BTP Cockpit\n  destinationServiceInstanceName: dest-service-instance-example # can be ommited if config.destinationService.defaultInstanceName was provided to the helm chart of the transparent proxy upon installation\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adjust the name ",(0,o.kt)("inlineCode",{parentName:"li"},"example-dest-onprem")," to the On-Premise destination you defined in your SAP BTP Cockpit.")),(0,o.kt)("p",null,"It will create a Kubernetes resource in your cluster, pointing to the destination you created in the cockpit.\nApply the YAML with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply")," to take effect."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This step is required for each destination that should be reachable via the Transparent Proxy.\nIf you do not create a custom Kubernetes resource of type ",(0,o.kt)("inlineCode",{parentName:"p"},"destinations.destination.connectivity.api.sap")," for a given destination, the destination will not be handled by the Transparent Proxy.")),(0,o.kt)("h3",{id:"executing-requests"},"Executing Requests"),(0,o.kt)("p",null,"In your application you can now configure a destination to execute requests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'DefaultHttpDestination destination = DefaultHttpDestination\n        .builder("http://example-dest.namespace/")\n        // for a subscriber tenant make sure to send the tenant header:\n        // .header(new Header("X-Tenant-Id", TenantAccessor.getCurrentTenant().getTenantId()))\n        // for principal propagation make sure to set the auth type to "TOKEN_FORWARDING":\n        // .authenticationType(AuthenticationType.TOKEN_FORWARDING)\n        .build();\n\nList<SalesArea> execute = new DefaultSalesAreaService().getAllSalesArea() // example OData request\n        .execute(destination);\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"namespace")," in the URL with the namespace you installed the Transparent Proxy into")),(0,o.kt)("p",null,"This will target the Kubernetes resource ",(0,o.kt)("inlineCode",{parentName:"p"},"example-dest")," we created above which will be resolved to the destination we configured in that resource.\nThe code above shows an example how you can use it to perform an OData request."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Repeat this process for all ",(0,o.kt)("em",{parentName:"p"},"destination names")," you want to use in your application.")),(0,o.kt)("admonition",{title:"Connecting to Cloud systems",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The above approach is not limited to destinations of proxy type ",(0,o.kt)("inlineCode",{parentName:"p"},"ON_PREMISE"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"INTERNET")," destinations are equally supported.")))}u.isMDXComponent=!0},63865:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/btp-cockpit-kubeconfig-url-c08c8f6e714ad0a4584a974ff370c880.png"},86049:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kyma-binding-creation-f279a23238dac80ef1fb062691322b69.png"},428:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kyma-instance-creation-0e42d3fc281702384c37193453521bc6.png"}}]);