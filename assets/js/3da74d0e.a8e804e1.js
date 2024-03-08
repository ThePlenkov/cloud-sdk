"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6659],{90982:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(74848),i=t(28453);const r={id:"generate-client",title:"Generate an OData client for JavaScript",sidebar_label:"Generate an OData Client",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","generate"]},a=void 0,l={id:"features/odata/generate-client",title:"Generate an OData client for JavaScript",description:"The OData client generator allows you to generate custom OData client libraries for OData services.",source:"@site/docs-js_versioned_docs/version-v1/features/odata/generate-odata-client.mdx",sourceDirName:"features/odata",slug:"/features/odata/generate-client",permalink:"/cloud-sdk/docs/js/v1/features/odata/generate-client",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/odata/generate-odata-client.mdx",tags:[],version:"v1",frontMatter:{id:"generate-client",title:"Generate an OData client for JavaScript",sidebar_label:"Generate an OData Client",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","generate"]},sidebar:"docsJsSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/js/v1/features/odata/overview"},next:{title:"Execute an OData request",permalink:"/cloud-sdk/docs/js/v1/features/odata/execute-request"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Generate a Client Using the Command Line Interface",id:"generate-a-client-using-the-command-line-interface",level:2},{value:"Options",id:"options",level:2},{value:"Generate a Client Programmatically",id:"generate-a-client-programmatically",level:2},{value:"npm Packages vs. Local clients",id:"npm-packages-vs-local-clients",level:2},{value:"Transpilation",id:"transpilation",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The OData client generator allows you to generate custom OData client libraries for OData services.\nYou can then access these services from your code using the client libraries."}),"\n",(0,s.jsx)(n.p,{children:"You can use the SAP Cloud SDK generator both as a command-line interface (CLI) and programmatically."}),"\n",(0,s.jsxs)(n.p,{children:["All you need to use is a service metadata specification in the ",(0,s.jsx)(n.code,{children:"EDMX"})," format (file ending can be ",(0,s.jsx)(n.code,{children:".edmx"})," or ",(0,s.jsx)(n.code,{children:".xml"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["Run this command in your project's terminal to install the generator as a ",(0,s.jsx)(n.code,{children:"devDependency"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install -D @sap-cloud-sdk/generator\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["We recommend to install the generator as a local dependency, because global installations hide the used generator version and cause problems when transpiling to JavaScript.\nIf you must use a globally installed generator, install the",(0,s.jsx)(n.code,{children:"@types/node"})," and ",(0,s.jsx)(n.code,{children:"@sap-cloud-sdk/odata-v2"})," or ",(0,s.jsx)(n.code,{children:"@sap-cloud-sdk/odata-v4"})," package in your project to make the transpilation work.\nSee ",(0,s.jsx)(n.a,{href:"#transpilation",children:"Transpilation"})," for more details.\nIf you need to transpile sources without any local ",(0,s.jsx)(n.code,{children:"node_modules"}),", you must manually execute the ",(0,s.jsx)(n.code,{children:"tsc"})," on your own with a custom ",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping",children:"path mapping"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"generate-a-client-using-the-command-line-interface",children:"Generate a Client Using the Command Line Interface"}),"\n",(0,s.jsx)(n.p,{children:"The SAP Cloud SDK generator is primarily intended to be used on the command line."}),"\n",(0,s.jsx)(n.p,{children:"Run"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npx generate-odata-client --inputDir path/to/your/service-specifications --outputDir path/to/store/generated/modules\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Adapt the ",(0,s.jsx)(n.code,{children:"path/to/your/service-specifications"})," to the directory containing your service specifications in ",(0,s.jsx)(n.code,{children:"EDMX"})," format, for example ",(0,s.jsx)(n.code,{children:"service-specifications/"}),".\nAlso adapt ",(0,s.jsx)(n.code,{children:"path/to/store/generated/modules"})," to your OData client directory for example ",(0,s.jsx)(n.code,{children:"odata-client"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This will generate OData clients for all your service specifications and create a ",(0,s.jsx)(n.code,{children:"serviceMapping.json"})," in your input directory.\nThis file is used for generation and contains a mapping from the original file name to the following information:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"directoryName"})," - the name of the subdirectory the client code will be generated into."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"servicePath"})," - the URL path to be prepended before every request.\nBy default, this is read from the EDMX file, if available.\nOtherwise, the value will be set as ",(0,s.jsx)(n.code,{children:"VALUE_IS_UNDEFINED"}),", and an error will be logged.\nIn this case, you can specify ",(0,s.jsx)(n.code,{children:"servicePath"})," in the ",(0,s.jsx)(n.code,{children:"serviceMapping.json"})," manually and re-generate again."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npmPackageName"})," - the name of the npm package, if a ",(0,s.jsx)(n.code,{children:"package.json"})," is generated.\nThis information is optional."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This information can be adjusted manually and ensure that every run of the generator produces the same names for the generation."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "MyService": {\n    "directoryName": "my-service",\n    "servicePath": "/odata/v2",\n    "npmPackageName": "my-service"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"By default, the generated module contains the following sources:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["TypeScript code (",(0,s.jsx)(n.code,{children:".ts"}),") representing request builders, entity representations, and if needed representations for complex types as well as function/action imports."]}),"\n",(0,s.jsxs)(n.li,{children:["All of the above as transpiled sources, including JavaScript sources (",(0,s.jsx)(n.code,{children:".js"}),"), type definition files (",(0,s.jsx)(n.code,{children:".d.ts"}),"), and sourcemap files (",(0,s.jsx)(n.code,{children:".js.map"})," and ",(0,s.jsx)(n.code,{children:".d.ts.map"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["An ",(0,s.jsx)(n.code,{children:".npmrc"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.code,{children:"typedoc.json"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.code,{children:"tsconfig.json"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The generation always includes the TypeScript sources.\nAll other files can be excluded from the generation - see the options below."}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"generate-odata-client --help"})," for additional options."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{style:{textAlign:"left"},children:["Option, Aliases ",(0,s.jsx)("div",{style:{width:"225px"}})]}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\xa0Default"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:"-i"}),", ",(0,s.jsx)(n.code,{children:"--inputDir"})," ",(0,s.jsx)(n.em,{children:"(required)"})]}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["\xa0This directory will be recursively searched for ",(0,s.jsx)(n.code,{children:".edmx"}),"/",(0,s.jsx)(n.code,{children:".xml"})," files."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:"-o"}),", ",(0,s.jsx)(n.code,{children:"--outputDir"})," ",(0,s.jsx)(n.em,{children:"(required)"})]}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\xa0Directory to save the generated code in."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:"-s"}),", ",(0,s.jsx)(n.code,{children:"--serviceMapping"}),","]}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"inputDir/service-mapping.json"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\xa0Configuration file to ensure consistent names between multiple generation runs with updated / changed metadata files. Will be generated if not existent."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"--forceOverwrite"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["\xa0Exit when encountering a file that already exists. When set to true, it will be overwritten instead. Please note that compared to the ",(0,s.jsx)(n.code,{children:"--clearOutputDir"})," option, this will not delete outdated files."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"--clearOutputDir"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\xa0Deletes EVERYTHING in the specified output directory before generating code."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:"--generateNpmrc"})," ",(0,s.jsx)(n.em,{children:"(deprecated)"})]}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["\xa0Generate a ",(0,s.jsx)(n.code,{children:".npmrc"})," file specifying a registry for ",(0,s.jsx)(n.code,{children:"@sap"})," scoped dependencies."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"--generateTypedocJson"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["\xa0Generates a ",(0,s.jsx)(n.code,{children:"typedoc.json"}),' file for each package, used for the corresponding "doc" npm script.']})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"--generatePackageJson"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["\xa0Generate a ",(0,s.jsx)(n.code,{children:"package.json"})," file, specifying dependencies and scripts for compiling and generating documentation."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"--versionInPackageJson"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Version of the generator"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["\xa0By default, when generating ",(0,s.jsx)(n.code,{children:"package.json"})," file, the generator will set a version by using the generator version. It can also be set to a specific version."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"--generateJs"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["\xa0Generates transpiled ",(0,s.jsx)(n.code,{children:".js"}),", ",(0,s.jsx)(n.code,{children:".js.map"}),", ",(0,s.jsx)(n.code,{children:".d.ts"})," and ",(0,s.jsx)(n.code,{children:".d.ts.map"})," files. When set to false, the generator will only generate ",(0,s.jsx)(n.code,{children:".ts"})," files."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"--processesJsGeneration"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"16"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\xa0Number of processes used for transpilation of JavaScript files."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"--generateCSN"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\xa0A CSN file will be generated for each service definition in the output directory."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"generate-a-client-programmatically",children:"Generate a Client Programmatically"}),"\n",(0,s.jsx)(n.p,{children:"You can also use the generator programmatically.\nYou will have to provide the options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { generate } from '@sap-cloud-sdk/generator';\n\n// Create your options, adapt the input & output directory as well as the package name according to your setup.\nconst inputDir = 'service-specifications';\nconst outputDir = 'odata-client';\n\n// Create your project datastructure with all sourcefiles based on your options\nconst generatorConfig = {\n  forceOverwrite: true,\n  generateJs: false,\n  useSwagger: false,\n  writeReadme: false,\n  clearOutputDir: true,\n  generateNpmrc: false,\n  generateTypedocJson: false,\n  generatePackageJson: false,\n  generateCSN: false,\n  sdkAfterVersionScript: false,\n  s4hanaCloud: false\n  /* optional:\n    serviceMapping: 'test/directory',\n    changelogFile: 'test/directory',\n    versionInPackageJson: 'version'\n  */\n};\n\n// generate your project, you can also redefine options\ngenerate({\n  ...generatorConfig,\n  inputDir,\n  outputDir\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"npm-packages-vs-local-clients",children:"npm Packages vs. Local clients"}),"\n",(0,s.jsxs)(n.p,{children:["The SAP Cloud SDK OData client generator generates TypeScript code.\nBy default, the generator creates all sources needed for an npm package.\nIt transpiles the generated sources to JavaScript and provides a ",(0,s.jsx)(n.code,{children:"package.json"})," for the client.\nThis differs from the OpenAPI generator and will likely change in a future major version upgrade."]}),"\n",(0,s.jsx)(n.p,{children:"If you want to publish a generated client to an npm registry, you can work with the default configuration.\nPlease make sure to check intellectual property regulations before publishing to a public registry."}),"\n",(0,s.jsxs)(n.p,{children:["If you want to use the generated client in your code without sharing it, you can omit the generation of a ",(0,s.jsx)(n.code,{children:"package.json"})," with the ",(0,s.jsx)(n.code,{children:"generatePackageJson"})," flag.\nAdditionally, if you work with TypeScript you can skip transpilation with the ",(0,s.jsx)(n.code,{children:"--generateJs"})," flag.\nThe generated clients depend on the ",(0,s.jsx)(n.code,{children:"@sap-cloud-sdk/odata-v2"})," or ",(0,s.jsx)(n.code,{children:"@sap-cloud-sdk/odata-v4"})," packages, depending on the OData version of the service.\nYou have to make sure, there is a local reference to these packages, by running:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install @sap-cloud-sdk/odata-v2\n"})}),"\n",(0,s.jsx)(n.p,{children:"or:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install @sap-cloud-sdk/odata-v4\n"})}),"\n",(0,s.jsx)(n.p,{children:"respectively."}),"\n",(0,s.jsx)(n.h2,{id:"transpilation",children:"Transpilation"}),"\n",(0,s.jsxs)(n.p,{children:["If you installed the generator globally and want to transpile the generated code, you have to install the required dependency (or ",(0,s.jsx)(n.code,{children:"devDependency"}),") for your client (",(0,s.jsx)(n.code,{children:"sap-cloud-sdk/odata-v2"})," or ",(0,s.jsx)(n.code,{children:"sap-cloud-sdk/odata-v4"}),") prior to generation.\nYou do this by running:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install -D @sap-cloud-sdk/odata-v2\n"})}),"\n",(0,s.jsx)(n.p,{children:"or:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install -D @sap-cloud-sdk/odata-v4\n"})}),"\n",(0,s.jsx)(n.p,{children:"respectively."}),"\n",(0,s.jsxs)(n.p,{children:["If you installed the generator as a ",(0,s.jsx)(n.code,{children:"devDependency"}),", transpilation will work without additional steps."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);