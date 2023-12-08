"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3109],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,g=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},82036:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),i=a(74866),o=a(85162);const l={id:"vdm-generator",title:"Generate a Typed OData Client With the OData Generator",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Generate an OData Client",description:"This article describes how to leverage the OData client generator to obtain Java classes from a service definition. These classes can then be used to build type-safe OData requests.",keywords:["sap","cloud","sdk","odata","java","VDM","generate"]},d=void 0,p={unversionedId:"features/odata/vdm-generator",id:"features/odata/vdm-generator",title:"Generate a Typed OData Client With the OData Generator",description:"This article describes how to leverage the OData client generator to obtain Java classes from a service definition. These classes can then be used to build type-safe OData requests.",source:"@site/docs-java/features/odata/generator.mdx",sourceDirName:"features/odata",slug:"/features/odata/vdm-generator",permalink:"/cloud-sdk/docs/java/features/odata/vdm-generator",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/features/odata/generator.mdx",tags:[],version:"current",frontMatter:{id:"vdm-generator",title:"Generate a Typed OData Client With the OData Generator",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Generate an OData Client",description:"This article describes how to leverage the OData client generator to obtain Java classes from a service definition. These classes can then be used to build type-safe OData requests.",keywords:["sap","cloud","sdk","odata","java","VDM","generate"]},sidebar:"docsJavaSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/java/features/odata/overview"},next:{title:"OData v2 Client API",permalink:"/cloud-sdk/docs/java/features/odata/v2-vdm-client"}},s={},m=[{value:"Using the OData Generator",id:"using-the-odata-generator",level:2},{value:"Using the OData Generator Maven Plugin",id:"using-the-odata-generator-maven-plugin",level:3},{value:"Using the Plugin from the Command Line",id:"using-the-plugin-from-the-command-line",level:4},{value:"Generate Clients Programmatically",id:"generate-clients-programmatically",level:3},{value:"Available Parameters",id:"available-parameters",level:2},{value:"Available Naming Strategies",id:"available-naming-strategies",level:3}],c={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The OData Generator allows for generating Java classes from the metadata of an OData service.\nThese classes which are referred to as ",(0,r.kt)("em",{parentName:"p"},"typed OData client")," provide type-safe access to the service."),(0,r.kt)("admonition",{title:"Localisation",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The generator is designed to generate source code in english.\nYou may also generate a client based on other languages in the EDMX file.\nHowever, languages that use non-latin characters, specifically languages that read from right to left or that don't have capitalisation, may not be supported.")),(0,r.kt)("p",null,"In general, there are two ways to use the generator:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Via the dedicated maven plugin (via ",(0,r.kt)("inlineCode",{parentName:"li"},"pom.xml")," and CLI)"),(0,r.kt)("li",{parentName:"ul"},"By instantiating and invoking it at runtime")),(0,r.kt)("p",null,"The maven plugin is usually the recommended way as it integrates nicely with most project setups and makes configuration easy.\nHowever, the other two approaches are available and all are documented below."),(0,r.kt)("p",null,"For all three the required input is an ",(0,r.kt)("inlineCode",{parentName:"p"},"EDMX")," file holding the service metadata."),(0,r.kt)("admonition",{title:"OData v2 and OData v4",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please be aware that OData v2 and OData v4 service definitions are not interchangeable.\nThere is a dedicated generator for each protocol version and it only accepts service definitions for that version.")),(0,r.kt)("admonition",{title:"Custom Data Types",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The OData VDM generator does support all data types per the ",(0,r.kt)("a",{parentName:"p",href:"https://www.odata.org/documentation/odata-version-2-0/json-format/"},"OData specification"),".\nIf your OData service metadata uses a data type not listed in the standard, please alter your metadata to use a compatible data type from the specification instead."),(0,r.kt)("p",{parentName:"admonition"},"For example, a non-standard ",(0,r.kt)("inlineCode",{parentName:"p"},"Edm.Float")," type can be substituted by ",(0,r.kt)("inlineCode",{parentName:"p"},"Edm.Single")," type from the OData specification.")),(0,r.kt)("h2",{id:"using-the-odata-generator"},"Using the OData Generator"),(0,r.kt)("p",null,"Regardless of how the generator is invoked the generated code requires some dependencies to be present.\nTherefore, it is required to ensure the following dependencies are present in your project:"),(0,r.kt)(i.Z,{groupId:"odataVersion",defaultValue:"v4",values:[{label:"OData v2",value:"v2"},{label:"OData v4",value:"v4"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"v4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>odata-v4-core</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.projectlombok</groupId>\n    <artifactId>lombok</artifactId>\n    <scope>provided</scope>\n</dependency>\n"))),(0,r.kt)(o.Z,{value:"v2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>odata-core</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.projectlombok</groupId>\n    <artifactId>lombok</artifactId>\n    <scope>provided</scope>\n</dependency>\n")))),(0,r.kt)("admonition",{title:"Lombok and Dependency injection are mandatory!",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Lombok and dependency injections are used by the generated typed OData client classes, that is why they are needed but only with the scope ",(0,r.kt)("em",{parentName:"p"},"provided"),".\nFurthermore, some common IDEs (e.g. IntelliJ, Eclipse) require plugins to recognize these annotations.\nSee the note on ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/troubleshooting-frequent-problems#compilation-failures-in-generated-odata-vdm-classes"},"missing accessors"))),(0,r.kt)("h3",{id:"using-the-odata-generator-maven-plugin"},"Using the OData Generator Maven Plugin"),(0,r.kt)("p",null,"The maven plugin is most useful if you would like to use the generated code within a maven project.\nUse it by adding it to your ",(0,r.kt)("inlineCode",{parentName:"p"},"application/pom.xml")," file under the ",(0,r.kt)("inlineCode",{parentName:"p"},"<plugin>")," section:"),(0,r.kt)(i.Z,{groupId:"odataVersion",defaultValue:"v4",values:[{label:"OData v2",value:"v2"},{label:"OData v4",value:"v4"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"v4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>odata-v4-generator-maven-plugin</artifactId>\n    \x3c!-- Please use the latest version here--\x3e\n    <version>4.XX.X</version>\n    <executions>\n        <execution>\n            <id>generate-consumption</id>\n            <phase>generate-sources</phase>\n            <goals>\n                <goal>generate</goal>\n            </goals>\n            <configuration>\n                <inputDirectory>${project.basedir}/edmx</inputDirectory>\n                <outputDirectory>${project.build.directory}/vdm</outputDirectory>\n                <deleteOutputDirectory>true</deleteOutputDirectory>\n                <packageName>com.mycompany.vdm</packageName>\n                <defaultBasePath>odata/v4/</defaultBasePath>\n                <compileScope>COMPILE</compileScope>\n                <serviceMethodsPerEntitySet>true</serviceMethodsPerEntitySet>\n                \x3c!-- (Optional) You can add a custom copyright header:\n                <copyrightHeader>Copyright (c) this year, my company</copyrightHeader>\n\n                Or use the SAP copyright header:\n                <sapCopyrightHeader>true</sapCopyrightHeader>\n                --\x3e\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n"))),(0,r.kt)(o.Z,{value:"v2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>odata-generator-maven-plugin</artifactId>\n    \x3c!-- Please use the latest version here--\x3e\n    <version>4.XX.X</version>\n    <executions>\n        <execution>\n            <id>generate-consumption</id>\n            <phase>generate-sources</phase>\n            <goals>\n                <goal>generate</goal>\n            </goals>\n            <configuration>\n                <inputDirectory>${project.basedir}/edmx</inputDirectory>\n                <outputDirectory>${project.build.directory}/vdm</outputDirectory>\n                <deleteOutputDirectory>true</deleteOutputDirectory>\n                <packageName>com.mycompany.vdm</packageName>\n                <defaultBasePath>odata/v2/</defaultBasePath>\n                <compileScope>COMPILE</compileScope>\n                <serviceMethodsPerEntitySet>true</serviceMethodsPerEntitySet>\n                \x3c!-- (Optional) You can add a custom copyright header:\n                <copyrightHeader>Copyright (c) this year, my company</copyrightHeader>\n\n                Or use the SAP copyright header:\n                <sapCopyrightHeader>true</sapCopyrightHeader>\n                --\x3e\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")))),(0,r.kt)("p",null,"Adapt the ",(0,r.kt)("inlineCode",{parentName:"p"},"<inputDirectory>")," to point to the location of your service definitions.\nA full list of parameters is ",(0,r.kt)("a",{parentName:"p",href:"#available-parameters"},"available here"),"."),(0,r.kt)("p",null,"Now maven will run the generator within the ",(0,r.kt)("inlineCode",{parentName:"p"},"process-sources")," phase which is executed before ",(0,r.kt)("inlineCode",{parentName:"p"},"compile"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"<compileScope>")," option instructs maven to add the generated code as sources for the compile phase."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Usually, you will have to override the generated service path in the code.\nBy default, the generator will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace")," value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<schema>")," tag as the service name.\nThe URL path will be built as ",(0,r.kt)("inlineCode",{parentName:"p"},"default-base-path")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"service-name"),".\nIf your service definition does not contain this value or the value does not match what is needed in the URL then you need to override the service path in the code.\nUse the ",(0,r.kt)("inlineCode",{parentName:"p"},'.withServicePath("/path/to/my/service")')," option on the service class.")),(0,r.kt)("h4",{id:"using-the-plugin-from-the-command-line"},"Using the Plugin from the Command Line"),(0,r.kt)("p",null,"The maven plugin can also be invoked without a project from the command line using ",(0,r.kt)("inlineCode",{parentName:"p"},"-D")," parameter flags, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mvn com.sap.cloud.datamodel:odata-v4-generator-maven-plugin:5.XX.X:generate -Dodatav4.generate.inputDirectory=foo -Dodatav4.generate.outputDirectory=bar\n")),(0,r.kt)("p",null,"See the full list of parameters ",(0,r.kt)("a",{parentName:"p",href:"#available-parameters"},"here"),"."),(0,r.kt)("h3",{id:"generate-clients-programmatically"},"Generate Clients Programmatically"),(0,r.kt)(i.Z,{groupId:"odataVersion",defaultValue:"v4",values:[{label:"OData v2",value:"v2"},{label:"OData v4",value:"v4"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"v4",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Please include the ",(0,r.kt)("inlineCode",{parentName:"li"},"odata-v4-generator")," artifact as a dependency in your project.\nChoose a module and location from which you intend to invoke the generator and add the following dependency to the appropriate ",(0,r.kt)("inlineCode",{parentName:"li"},"pom.xml"),".",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>odata-v4-generator</artifactId>\n </dependency>\n"))))),(0,r.kt)(o.Z,{value:"v2",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Please include the ",(0,r.kt)("inlineCode",{parentName:"li"},"odata-generator")," artifact as a dependency in your project.\nChoose a module and location from which you intend to invoke the generator and add the following dependency to the appropriate ",(0,r.kt)("inlineCode",{parentName:"li"},"pom.xml"),".",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>odata-generator</artifactId>\n </dependency>\n")))))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the following code which will later invoke the generator:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final Path inputDirectory = Paths.get("application/src/main/resources/");\nfinal Path outputDirectory = Paths.get("application/src/main/java/");\nfinal Path serviceNameMapping = inputDirectory.resolve("serviceNameMappings.properties");\n\nnew DataModelGenerator()\n    .withInputDirectory(inputDirectory.toFile())\n    .withOutputDirectory(outputDirectory.toFile())\n    .withServiceNameMapping(serviceNameMapping.toFile())\n    .pojosOnly(false)\n    .withNameSource(NameSource.NAME)\n    .withPackageName("org.example")\n    .withDefaultBasePath("/my/path/")\n    .serviceMethodsPerEntitySet()\n    .execute();\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Adapt the input & output directory as well as the package name according to your setup.\nA full list of parameters is ",(0,r.kt)("a",{parentName:"p",href:"#available-parameters"},"available here"),".\nPlace your EDMX file within the input folder and run the generator."))),(0,r.kt)("p",null,"This should give you the generated classes in the desired folder.\nYou can now proceed with using them to build requests."),(0,r.kt)("p",null,"In case you run into issues with the above process:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Double-check your service and file names"),(0,r.kt)("li",{parentName:"ul"},"Check that the folders are set up correctly"),(0,r.kt)("li",{parentName:"ul"},"The service name mappings meet your expectations")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Usually, you will have to override the generated service path in the code.\nBy default, the generator will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace")," value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<schema>")," tag as the service name.\nThe URL path will be built as ",(0,r.kt)("inlineCode",{parentName:"p"},"default-base-path")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"service-name"),".\nIf your service definition does not contain this value or the value does not match what is needed in the URL then you need to override the service path in the code.\nUse the ",(0,r.kt)("inlineCode",{parentName:"p"},'.withServicePath("/path/to/my/service")')," option on the service class.")),(0,r.kt)("h2",{id:"available-parameters"},"Available Parameters"),(0,r.kt)("p",null,"The following parameters are available on the generator for both OData protocol versions:"),(0,r.kt)(i.Z,{defaultValue:"maven",values:[{label:"Maven Plugin",value:"maven"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"maven",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<compileScope>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"NONE")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds the generated sources to the compilation or test phase")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<copyrightHeader>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Copyright header to be added at the top of generated files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<deleteOutputDirectory>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Target directory is deleted before code generation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<defaultBasePath>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Base path of the exposed API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<includeEntitySets>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Only generate classes for specific entity sets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<includeFunctionImports>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Only generate classes for specific function imports")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<inputDirectory>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Location of the metadata files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<namingStrategy>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fully-qualified Java class to be used as the naming strategy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<nameSource>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"LABEL")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Source for entity and property names (either ",(0,r.kt)("inlineCode",{parentName:"td"},"LABEL")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"NAME"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<outputDirectory>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"output")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Output directory for generated sources")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<overwriteFiles>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Overwrite existing files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<packageName>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Package name for the generated sources")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<sapCopyrightHeader>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add the SAP copyright header (overrides ",(0,r.kt)("inlineCode",{parentName:"td"},"copyrightHeader"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<serviceNameMappingFile>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determine service names from a given mapping file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<serviceMethodsPerEntitySet>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Generate service methods per each entity set for one entity type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<keepExistingSignatures>"),(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Try to avoid API breaking changes by sticking to existing generated method",(0,r.kt)("sup",{parentName:"td",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," signatures")))),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," Feature is in experimental state."),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," The ",(0,r.kt)("em",{parentName:"p"},"keep existing signatures")," switch only works if the output directory already contains a generated client library."),(0,r.kt)("p",null,"More information is also available in the Javadoc of the generator implementation (",(0,r.kt)("a",{parentName:"p",href:"pathname:///java-api/v5/com/sap/cloud/sdk/datamodel/odata/generator/DataModelGenerator.html"},"OData v2"),", ",(0,r.kt)("a",{parentName:"p",href:"pathname:///java-api/v5/com/sap/cloud/sdk/datamodel/odatav4/generator/DataModelGenerator.html"},"OData v4"),").")),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"copyrightHeader(String)")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Copyright header to be added at the top of generated files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"deleteOutputDirectory()")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Target directory is deleted before code generation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"overwriteFiles()")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Overwrite existing files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"withDefaultBasePath(String)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Base path of the exposed API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"withIncludedEntitySets(Set<String>)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Only generate classes for specific entity sets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"withIncludedFunctionImports(Set<String>)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Only generate classes for specific function imports")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"withInputDirectory(String)")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Location of the metadata files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"withNamingStrategy(NamingStrategy)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fully-qualified Java class to be used as the naming strategy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"withNameSource(NameSource)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Source for entity and property names (either ",(0,r.kt)("inlineCode",{parentName:"td"},"NameSource.LABEL")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"NameSource.NAME"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"withOutputDirectory(String)")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"output")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Output directory for generated sources")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"withPackageName(String)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Package name for the generated sources")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"withServiceNameMapping(String)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determine service names from a given mapping file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sapCopyrightHeader()")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add the SAP copyright header (overrides ",(0,r.kt)("inlineCode",{parentName:"td"},"copyrightHeader"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"serviceMethodsPerEntitySet()")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Generate service methods per each entity set for one entity type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keepExistingSignatures()"),(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Try to avoid API breaking changes by sticking to existing generated",(0,r.kt)("sup",{parentName:"td",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," method signatures")))),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," Feature is in experimental state."),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," The ",(0,r.kt)("em",{parentName:"p"},"keep existing signatures")," switch only works if the output directory already contains a generated client library."),(0,r.kt)("p",null,"More details can be found on the Javadoc (",(0,r.kt)("a",{parentName:"p",href:"pathname:///java-api/v5/com/sap/cloud/sdk/datamodel/odata/generator/DataModelGenerator.html"},"OData v2"),", ",(0,r.kt)("a",{parentName:"p",href:"pathname:///java-api/v5/com/sap/cloud/sdk/datamodel/odatav4/generator/DataModelGenerator.html"},"OData v4"),")."))),(0,r.kt)("h3",{id:"available-naming-strategies"},"Available Naming Strategies"),(0,r.kt)("p",null,"The SAP Cloud SDK offers two different naming strategies that can be used out-of-the-box:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.datamodel.odata.utility.S4HanaNamingStrategy")," (default)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.datamodel.odata.utility.SimpleNamingStrategy"))),(0,r.kt)("p",null,"While both strategies, of course, generate syntactically valid Java names, the ",(0,r.kt)("inlineCode",{parentName:"p"},"S4HanaNamingStrategy")," tries to make the names as aligned with common Java coding convention as possible.\nThis is achieved by stripping away common pre- and suffixes used in SAP service specifications, such as the prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"SAP_")," or the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"Type"),".\nFurthermore, some names are even extended by, for example, adding the prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," to indicate a navigation property."),(0,r.kt)("p",null,"In contrast to that, the ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleNamingStrategy")," performs only the bare minimum of modifications to convert the specified names into valid Java syntax."))}u.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(34334);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(87462),r=a(67294),i=a(34334),o=a(12466),l=a(76775),d=a(91980),p=a(67392),s=a(50012);function m(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,d._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=c(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[d,p]=g({queryString:a,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,s.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),k=(()=>{const e=d??m;return u({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),h(e)}),[p,h,i]),tabValues:i}}var k=a(72389);const f="tabList__CuJ",N="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:l,selectValue:d,tabValues:p}=e;const s=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=s.indexOf(t),n=p[a].value;n!==l&&(m(t),d(n))},u=e=>{var t;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=s[t]??s[s.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>s.push(e),onKeyDown:u,onClick:c},o,{className:(0,i.Z)("tabs__item",N,null==o?void 0:o.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function C(e){const t=(0,k.Z)();return r.createElement(b,(0,n.Z)({key:String(t)},e))}}}]);