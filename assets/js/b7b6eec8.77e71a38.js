"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1725],{58146:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var s=i(74848),o=i(28453),t=i(91517),a=i(5594);const d={id:"manage-dependencies",title:"Managing Dependencies",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Dependency Management",description:"How to manage dependencies, detect and resolve conflicts",keywords:["sap","cloud","sdk","cloud native","cloud sdk","dependency","dependency conflicts","manage dependencies","how-to"]},r=void 0,l={id:"guides/manage-dependencies",title:"Managing Dependencies",description:"How to manage dependencies, detect and resolve conflicts",source:"@site/docs-java/guides/dependencies.mdx",sourceDirName:"guides",slug:"/guides/manage-dependencies",permalink:"/cloud-sdk/docs/java/guides/manage-dependencies",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/guides/dependencies.mdx",tags:[],version:"current",frontMatter:{id:"manage-dependencies",title:"Managing Dependencies",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Dependency Management",description:"How to manage dependencies, detect and resolve conflicts",keywords:["sap","cloud","sdk","cloud native","cloud sdk","dependency","dependency conflicts","manage dependencies","how-to"]},sidebar:"docsJavaSidebar",previous:{title:"Update Steps to Version 5",permalink:"/cloud-sdk/docs/java/guides/5.0-upgrade-steps"},next:{title:"Integration With CAP",permalink:"/cloud-sdk/docs/java/guides/cap-sdk-integration"}},c={},p=[{value:"General Information",id:"general-information",level:2},{value:"The SAP Cloud SDK Bill-of-Material",id:"the-sap-cloud-sdk-bill-of-material",level:3},{value:"Dealing With Dependency Conflicts",id:"dealing-with-dependency-conflicts",level:2},{value:"Updating the SAP Cloud SDK Version",id:"updating-the-sap-cloud-sdk-version",level:3},{value:"Overriding Dependency Versions of the SAP Cloud SDK Bill-of-Material",id:"overriding-dependency-versions-of-the-sap-cloud-sdk-bill-of-material",level:3},{value:"Notes on the SAP Java Buildpack",id:"notes-on-the-sap-java-buildpack",level:2},{value:"Managing the Buildpack Version",id:"managing-the-buildpack-version",level:3},{value:"Avoiding Scope Conflicts",id:"avoiding-scope-conflicts",level:3},{value:"Background: Dependency Version Conflicts",id:"background-dependency-version-conflicts",level:3},{value:"Background: Dependency Scope Conflicts",id:"background-dependency-scope-conflicts",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"general-information",children:"General Information"}),"\n",(0,s.jsxs)(n.p,{children:["The SAP Cloud SDK for Java is a set of libraries that itself depends on other libraries.\nTo manage these relationships it relies on the ",(0,s.jsx)(n.a,{href:"https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html",children:"dependency management functionality"})," of ",(0,s.jsx)(n.a,{href:"https://maven.apache.org/index.html",children:"Maven"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This article shows how to manage dependencies for the SAP Cloud SDK for Java specifically.\nFor general information on how to deal with dependencies refer to the resources linked above and throughout this page."}),"\n",(0,s.jsx)(n.h3,{id:"the-sap-cloud-sdk-bill-of-material",children:"The SAP Cloud SDK Bill-of-Material"}),"\n",(0,s.jsxs)(n.p,{children:["The SAP Cloud SDK provides a ",(0,s.jsx)(n.a,{href:"https://dzone.com/articles/the-bill-of-materials-in-maven",children:"Bill-of-Material"})," (BOM).\nIt comprises all dependencies and their specific version that the SAP Cloud SDK relies upon."]}),"\n",(0,s.jsx)(n.p,{children:"It can be used in the dependency management as follows:"}),"\n",(0,s.jsxs)(t.A,{groupId:"deployment",defaultValue:"default",values:[{label:"Default",value:"default"},{label:"Tomcat/TomEE with SAP Java Buildpack",value:"SJB"}],children:[(0,s.jsx)(a.A,{value:"default",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n"})})}),(0,s.jsxs)(a.A,{value:"SJB",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sjb.cf</groupId>\n            <artifactId>cf-tomee7-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/6c6936e8e4ea40c9a9a69f6783b1e978.html",children:"More information about Tomcat and TomEE BOMs here"})})]})]}),"\n",(0,s.jsx)(n.p,{children:"It helps in various ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Minimizing the effort for updating SAP Cloud SDK versions"}),"\n",(0,s.jsx)(n.li,{children:"Ensuring all SAP Cloud SDK components are used consistently with the same version"}),"\n",(0,s.jsxs)(n.li,{children:["Compatibility with some other key SAP libraries or frameworks like ",(0,s.jsx)(n.a,{href:"https://github.com/SAP/cloud-security-xsuaa-integration",children:"XSUAA"})," and ",(0,s.jsx)(n.a,{href:"https://cap.cloud.sap/docs/",children:"CAP"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Avoiding some potential dependency conflicts"}),"\n",(0,s.jsx)(n.li,{children:"Checking which components & their respective version the SAP Cloud SDK depends upon"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For these reasons we highly recommend using the BOM in your project."}),"\n",(0,s.jsx)(n.admonition,{title:"Alternative: SAP Cloud SDK Modules Bill-of-Material",type:"tip",children:(0,s.jsxs)(n.p,{children:["Besides the SAP Cloud SDK Bill-of-Material ",(0,s.jsx)(n.code,{children:"sdk-bom"})," there is also the SAP Cloud SDK Modules Bill-of-Material ",(0,s.jsx)(n.code,{children:"sdk-modules-bom"}),".\nIt manages the version of all SAP Cloud SDK modules only.\n",(0,s.jsx)(n.code,{children:"sdk-modules-bom"})," does not manage versions of transitive dependencies and hence can be chosen to resolve dependency version conflicts."]})}),"\n",(0,s.jsx)(n.admonition,{title:"SAP Cloud SDK Maven Plugins",type:"info",children:(0,s.jsxs)(n.p,{children:["Please be aware that neither the ",(0,s.jsx)(n.code,{children:"sdk-bom"})," nor the ",(0,s.jsx)(n.code,{children:"modules-bom"})," will manage the versions of any SAP Cloud SDK Maven plugins (like the ",(0,s.jsx)(n.code,{children:"odata-generator-maven-plugin"}),") you may use.\nIt is required to specify a version for such plugins explicitly, otherwise dependency conflicts may occur."]})}),"\n",(0,s.jsx)(n.h2,{id:"dealing-with-dependency-conflicts",children:"Dealing With Dependency Conflicts"}),"\n",(0,s.jsxs)(n.p,{children:["When using multiple libraries, you will probably run into a version conflict at some point.\nThis is caused by the way dependencies are resolved.\nIf you are using two libraries ",(0,s.jsx)(n.code,{children:"A"})," and ",(0,s.jsx)(n.code,{children:"B"})," where both depend on a different version of ",(0,s.jsx)(n.code,{children:"C"})," you encounter a conflict."]}),"\n",(0,s.jsxs)(n.p,{children:["This conflict can only be solved by you as the consumer be explicitly stating which version of ",(0,s.jsx)(n.code,{children:"C"})," should be used."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://dzone.com/articles/solving-dependency-conflicts-in-maven",children:"This guide"})," outlines this problem in more detail and provides general guidance on how to find and resolve such problems."]}),"\n",(0,s.jsx)(n.h3,{id:"updating-the-sap-cloud-sdk-version",children:"Updating the SAP Cloud SDK Version"}),"\n",(0,s.jsx)(n.p,{children:"You may run into dependency related problems when updating SAP Cloud SDK versions since its dependencies are frequently updated.\nHere are some recommendations from our experience that should help to mitigate any problems:"}),"\n",(0,s.jsx)(n.p,{children:"We recommend increasing the SAP Cloud SDK version in a dedicated change e.g. a pull request."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This isolates the change and makes finding problems easier."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Look out for ",(0,s.jsx)(n.code,{children:"MethodNotFound"})," and ",(0,s.jsx)(n.code,{children:"ClassDefNotFound"})," exceptions."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"They are common when a library is provided with an unexpected version."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Check out our ",(0,s.jsx)(n.a,{href:"/cloud-sdk/docs/java/release-notes",children:"release notes"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Under improvements, you will see all dependency changes."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"mvn dependency:tree"})," to analyze the dependency tree."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It shows where dependencies are used and in which version."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Google the error message."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Usually, you will at least get an idea which library is causing the problems."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Update the SAP Cloud SDK version frequently."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This mitigates the risk per update and ensures you are up to date."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"overriding-dependency-versions-of-the-sap-cloud-sdk-bill-of-material",children:"Overriding Dependency Versions of the SAP Cloud SDK Bill-of-Material"}),"\n",(0,s.jsx)(n.p,{children:"Sometimes you may want to override the version of a specific dependency the SAP Cloud SDK is using.\nYou can achieve this by listing it in the dependency management."}),"\n",(0,s.jsx)(n.p,{children:"For example to override the version of SLF4J:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>latest-sdk-version</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.slf4j</groupId>\n            <artifactId>slf4j-api</artifactId>\n            <version>your-slf4j-version</version>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Remember that including a dependency in the ",(0,s.jsx)(n.code,{children:"<dependencyManagement>"})," section only enforces its version and scope.\nIt does not yet include it as a dependency in your project."]})}),"\n",(0,s.jsx)(n.h2,{id:"notes-on-the-sap-java-buildpack",children:"Notes on the SAP Java Buildpack"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/a3f90069d6cd41da82f34a6123d82ce6.html",children:"SAP Java Buildpack"})," brings some dependencies that are also brought by the SAP Cloud SDK.\nThis can lead to conflicts when using a ",(0,s.jsx)(n.code,{children:"war"})," deployment."]}),"\n",(0,s.jsxs)(n.p,{children:["To prevent any SAP Java Buildpack issues we recommend using the ",(0,s.jsx)(n.code,{children:"cf-tomee7-bom"}),"\n(",(0,s.jsx)(n.a,{href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/6c6936e8e4ea40c9a9a69f6783b1e978.html",children:"or Tomcat or TomEE BOMs"}),") followed by our ",(0,s.jsx)(n.code,{children:"sdk-bom"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"The SAP Java Buildpack generally does not affect typical Spring Boot applications which are packed into an executable jar by default."})}),"\n",(0,s.jsx)(n.h3,{id:"managing-the-buildpack-version",children:"Managing the Buildpack Version"}),"\n",(0,s.jsxs)(n.p,{children:["We recommend setting a fixed Buildpack version in the ",(0,s.jsx)(n.code,{children:"manifest.yml"})," and updating it regularly.\nUse ",(0,s.jsx)(n.code,{children:"cf buildpacks"})," to see which Buildpacks are currently available.\nPlease note that usually only the last 3 Buildpack versions are kept alive, and usually every two weeks a new version is released.\nConsequently, with this strategy, you should update at least once a month."]}),"\n",(0,s.jsx)(n.p,{children:"In general, this is safer than using always the latest Buildpack.\nBecause this strategy avoids that a simple restart can break your application due to a changed Buildpack."}),"\n",(0,s.jsx)(n.p,{children:"In particular, it ensures that the specific Buildpack + SAP Cloud SDK combination has been tested."}),"\n",(0,s.jsxs)(n.p,{children:["Also see ",(0,s.jsx)(n.a,{href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/a3f90069d6cd41da82f34a6123d82ce6.html",children:"this note"})," on Buildpack versioning."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["There are no known dependencies in the ",(0,s.jsx)(n.a,{href:"https://github.com/cloudfoundry/java-buildpack",children:"Community Java Buildpack"})," that could interfere with the ones provided by the SAP Cloud SDK.\nStill, the same strategy is also valid and useful for the community Buildpack."]})}),"\n",(0,s.jsx)(n.h3,{id:"avoiding-scope-conflicts",children:"Avoiding Scope Conflicts"}),"\n",(0,s.jsxs)(n.p,{children:["The BOMs will set the version and the scope of the dependencies the SAP Java Buildpack adds to your application at runtime.\nThe scope of the those dependencies is set to ",(0,s.jsx)(n.code,{children:"provided"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can verify the behavior by searching for the scope of, for example, the ",(0,s.jsx)(n.code,{children:"com.sap.cloud.security.xsuaa:token-client"})," dependency in your application.\nWhen you use any of the ",(0,s.jsx)(n.a,{href:"https://search.maven.org/search?q=com.sap.cloud.sjb.cf",children:"BOMs provided by the SAP Java Buildpack directly"})," the ",(0,s.jsx)(n.code,{children:"token-client"})," should have the scope ",(0,s.jsx)(n.code,{children:"provided"}),".\nIf you are not using the BOMs, it should have the scope ",(0,s.jsx)(n.code,{children:"compile"})," or ",(0,s.jsx)(n.code,{children:"test"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Verify your dependency tree via ",(0,s.jsx)(n.code,{children:"mvn dependency:tree"}),".\nThe above dependencies should only be listed with scope ",(0,s.jsx)(n.code,{children:"provided"}),"."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["Dependencies with the scope ",(0,s.jsx)(n.code,{children:"provided"})," are not part of your ",(0,s.jsx)(n.code,{children:".war"})," file.\nThis means you need to adapt the scopes if you want to run your applications without the SAP Java Buildpack.\nOne common example for this is running your application locally."]}),(0,s.jsxs)(n.p,{children:["Local deployment of TomEE is possible with a maven profile activated by the parameter ",(0,s.jsx)(n.code,{children:"-Ddeployment=local"}),":"]}),(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Maven profile"}),(0,s.jsxs)(n.p,{children:["As a result the SAP Java Buildpack BOM is removed from the ",(0,s.jsx)(n.code,{children:"dependencyManagement"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<profiles>\n    <profile>\n        <id>cloud-deployment</id>\n        <activation>\n            <property>\n                <name>deployment</name>\n                \x3c!-- Activate this profile when the 'local' is not defined --\x3e\n                <value>!local</value>\n            </property>\n        </activation>\n        <dependencyManagement>\n            <dependencies>\n                <dependency>\n                    <groupId>com.sap.cloud.sjb.cf</groupId>\n                    <artifactId>cf-tomee7-bom</artifactId>\n                    <version>use-latest-version-here</version>\n                    <type>pom</type>\n                    <scope>import</scope>\n                </dependency>\n                <dependency>\n                    <groupId>com.sap.cloud.sdk</groupId>\n                    <artifactId>sdk-bom</artifactId>\n                    <version>use-latest-version-here</version>\n                    <type>pom</type>\n                    <scope>import</scope>\n                </dependency>\n            </dependencies>\n        </dependencyManagement>\n    </profile>\n    \x3c!-- Having 2 profiles ensures that the tomee bom will always be in front of the sdk bom--\x3e\n    <profile>\n        <id>local-deployment</id>\n        <activation>\n            <property>\n                <name>deployment</name>\n                \x3c!-- Activate this profile when the 'local' is defined --\x3e\n                <value>local</value>\n            </property>\n        </activation>\n        <dependencyManagement>\n            <dependencies>\n                <dependency>\n                    <groupId>com.sap.cloud.sdk</groupId>\n                    <artifactId>sdk-bom</artifactId>\n                    <version>use-latest-version-here</version>\n                    <type>pom</type>\n                    <scope>import</scope>\n                </dependency>\n            </dependencies>\n        </dependencyManagement>\n    </profile>\n</profiles>\n"})})]}),(0,s.jsx)(n.h3,{id:"background-dependency-version-conflicts",children:"Background: Dependency Version Conflicts"}),(0,s.jsxs)(n.p,{children:["The dependency versions from the ",(0,s.jsx)(n.code,{children:"sdk-bom"})," and the Buildpack may differ."]}),(0,s.jsx)(n.p,{children:"Consider this example:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Buildpack version ",(0,s.jsx)(n.code,{children:"1.43"})," contains ",(0,s.jsx)(n.code,{children:"java-security:2.10.5"})]}),"\n",(0,s.jsxs)(n.li,{children:["SAP Cloud SDK version ",(0,s.jsx)(n.code,{children:"3.59"})," contains ",(0,s.jsx)(n.code,{children:"java-security:2.11.2"})]}),"\n"]}),(0,s.jsxs)(n.p,{children:["If there are breaking API changes in ",(0,s.jsx)(n.code,{children:"java-security"})," this can lead to runtime errors."]}),(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"There is no way to solve this versioning problem on SAP Cloud SDK or Buildpack side.\nGenerally, we try to keep the versions as consistent as possible."}),(0,s.jsx)(n.p,{children:"However, the exact combination of Buildpack and SAP Cloud SDK depends on the release schedule of the two products.\nIn addition to that, it also depends on the time an application updates the SAP Cloud SDK version & deploys it."})]})]}),"\n",(0,s.jsx)(n.h3,{id:"background-dependency-scope-conflicts",children:"Background: Dependency Scope Conflicts"}),"\n",(0,s.jsx)(n.p,{children:"In addition to potential version conflicts also scope problems can occur."}),"\n",(0,s.jsx)(n.p,{children:"Consider this example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Buildpack contains ",(0,s.jsx)(n.code,{children:"java-security"})]}),"\n",(0,s.jsxs)(n.li,{children:["SAP Cloud SDK depends on ",(0,s.jsx)(n.code,{children:"java-security"})," with scope ",(0,s.jsx)(n.code,{children:"compile"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["As a result, the classes from ",(0,s.jsx)(n.code,{children:"java-security"})," will be on the classpath twice.\nOnce from the Buildpack and once packaged by maven into the deployment artifact."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},5594:(e,n,i)=>{i.d(n,{A:()=>a});i(96540);var s=i(34164);const o={tabItem:"tabItem__kUE"};var t=i(74848);function a(e){let{children:n,hidden:i,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(o.tabItem,a),hidden:i,children:n})}},91517:(e,n,i)=>{i.d(n,{A:()=>k});var s=i(96540),o=i(34164),t=i(23104),a=i(56347),d=i(205),r=i(57485),l=i(31682),c=i(89466);function p(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:i,attributes:s,default:o}}=e;return{value:n,label:i,attributes:s,default:o}}))}(i);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function h(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:i}=e;const o=(0,a.W6)(),t=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,r.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(o.location.search);n.set(t,e),o.replace({...o.location,search:n.toString()})}),[t,o])]}function f(e){const{defaultValue:n,queryString:i=!1,groupId:o}=e,t=u(e),[a,r]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=i.find((e=>e.default))??i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[l,p]=m({queryString:i,groupId:o}),[f,v]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,t]=(0,c.Dv)(i);return[o,(0,s.useCallback)((e=>{i&&t.set(e)}),[i,t])]}({groupId:o}),y=(()=>{const e=l??f;return h({value:e,tabValues:t})?e:null})();(0,d.A)((()=>{y&&r(y)}),[y]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);r(e),p(e),v(e)}),[p,v,t]),tabValues:t}}var v=i(92303);const y={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var g=i(74848);function x(e){let{className:n,block:i,selectedValue:s,selectValue:a,tabValues:d}=e;const r=[],{blockElementScrollPositionUntilNextRender:l}=(0,t.a_)(),c=e=>{const n=e.currentTarget,i=r.indexOf(n),o=d[i].value;o!==s&&(l(n),a(o))},p=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const i=r.indexOf(e.currentTarget)+1;n=r[i]??r[0];break}case"ArrowLeft":{const i=r.indexOf(e.currentTarget)-1;n=r[i]??r[r.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":i},n),children:d.map((e=>{let{value:n,label:i,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>r.push(e),onKeyDown:p,onClick:c,...t,className:(0,o.A)("tabs__item",y.tabItem,t?.className,{"tabs__item--active":s===n}),children:i??n},n)}))})}function j(e){let{lazy:n,children:i,selectedValue:o}=e;const t=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function b(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",y.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function k(e){const n=(0,v.A)();return(0,g.jsx)(b,{...e,children:p(e.children)},String(n))}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var s=i(96540);const o={},t=s.createContext(o);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);