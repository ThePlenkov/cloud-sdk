"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5612],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(i),u=a,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return i?n.createElement(k,l(l({ref:t},p),{},{components:i})):n.createElement(k,l({ref:t},p))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var d=2;d<o;d++)l[d]=i[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},14051:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=i(87462),a=(i(67294),i(3905)),o=i(43689),l=i(15767);const r={id:"release-notes",title:"Release Notes",sidebar_label:"Release Notes",description:"Release notes of the SAP Cloud SDK for JavaScript and TypeScript, stay up to date with the recent features, fixes, dependency updates, and recommendations.",keywords:["sap","cloud","sdk","cloud-native","cloud sdk","sap cloud sdk"]},s=void 0,d={unversionedId:"release-notes",id:"release-notes",title:"Release Notes",description:"Release notes of the SAP Cloud SDK for JavaScript and TypeScript, stay up to date with the recent features, fixes, dependency updates, and recommendations.",source:"@site/docs-js/release-notes.mdx",sourceDirName:".",slug:"/release-notes",permalink:"/cloud-sdk/docs/js/release-notes",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/release-notes.mdx",tags:[],version:"current",frontMatter:{id:"release-notes",title:"Release Notes",sidebar_label:"Release Notes",description:"Release notes of the SAP Cloud SDK for JavaScript and TypeScript, stay up to date with the recent features, fixes, dependency updates, and recommendations.",keywords:["sap","cloud","sdk","cloud-native","cloud sdk","sap cloud sdk"]},sidebar:"docsJsSidebar",previous:{title:"SAP Cloud SDK & CAP",permalink:"/cloud-sdk/docs/js/video/calm"},next:{title:"Support",permalink:"/cloud-sdk/docs/js/support"}},p={},c=[{value:"3.7.0 Core Modules - October 17, 2023",id:"370-core-modules---october-17-2023",level:2},{value:"Fixed Issues",id:"fixed-issues",level:3},{value:"3.6.0 Core Modules - October 02, 2023",id:"360-core-modules---october-02-2023",level:2},{value:"Compatibility Notes",id:"compatibility-notes",level:3},{value:"Fixed Issues",id:"fixed-issues-1",level:3},{value:"3.5.0 Core Modules - September 13, 2023",id:"350-core-modules---september-13-2023",level:2},{value:"Fixed Issues",id:"fixed-issues-2",level:3},{value:"3.4.0 Core Modules - July 31, 2023",id:"340-core-modules---july-31-2023",level:2},{value:"Compatibility Notes",id:"compatibility-notes-1",level:3},{value:"New Functionalities",id:"new-functionalities",level:3},{value:"Fixed Issues",id:"fixed-issues-3",level:3},{value:"3.3.0 Core Modules - July 21, 2023",id:"330-core-modules---july-21-2023",level:2},{value:"Compatibility Notes",id:"compatibility-notes-2",level:3},{value:"New Functionalities",id:"new-functionalities-1",level:3},{value:"Improvements",id:"improvements",level:3},{value:"Fixed Issues",id:"fixed-issues-4",level:3},{value:"3.2.0 Core Modules - May 30, 2023",id:"320-core-modules---may-30-2023",level:2},{value:"New Functionalities",id:"new-functionalities-2",level:3},{value:"Improvements",id:"improvements-1",level:3},{value:"Fixed Issues",id:"fixed-issues-5",level:3},{value:"3.1.1 Core Modules - April 14, 2023",id:"311-core-modules---april-14-2023",level:2},{value:"Fixed Issues",id:"fixed-issues-6",level:3},{value:"3.1.0 Core Modules - April 06, 2023",id:"310-core-modules---april-06-2023",level:2},{value:"Compatibility Notes",id:"compatibility-notes-3",level:3},{value:"New Functionalities",id:"new-functionalities-3",level:3},{value:"Fixed Issues",id:"fixed-issues-7",level:3},{value:"3.0.2 Core Modules - March 23, 2023",id:"302-core-modules---march-23-2023",level:2},{value:"Compatibility Notes",id:"compatibility-notes-4",level:3},{value:"Fixed Issues",id:"fixed-issues-8",level:3},{value:"3.0.1 Core Modules - March 01, 2023",id:"301-core-modules---march-01-2023",level:2},{value:"Compatibility Notes",id:"compatibility-notes-5",level:3},{value:"Improvements",id:"improvements-2",level:3},{value:"3.0.0 Core Modules - February 28, 2023",id:"300-core-modules---february-28-2023",level:2},{value:"Compatibility Notes",id:"compatibility-notes-6",level:3},{value:"New Functionalities",id:"new-functionalities-4",level:3},{value:"Improvements",id:"improvements-3",level:3},{value:"Fixed Issues",id:"fixed-issues-9",level:3}],m={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{mdxType:"BuildBadge"})," ",(0,a.kt)(l.Z,{mdxType:"LicenseBadge"}),(0,a.kt)("h2",{id:"370-core-modules---october-17-2023"},"3.7.0 ","[Core Modules]"," - October 17, 2023"),(0,a.kt)("h3",{id:"fixed-issues"},"Fixed Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[odata-common, odata-v2, odata-v4, generator, generator-common]"," Do not send ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," values in the request payload for properties that are not set while creating or updating an entity."),(0,a.kt)("li",{parentName:"ul"},"[odata-common, odata-v2, odata-v4, generator, generator-common]"," Fix ",(0,a.kt)("inlineCode",{parentName:"li"},"RangeError: Maximum call stack size exceeded")," error that occurs when updating an entity after calling ",(0,a.kt)("inlineCode",{parentName:"li"},"getByKey"),". (bdcf14f85)")),(0,a.kt)("h2",{id:"360-core-modules---october-02-2023"},"3.6.0 ","[Core Modules]"," - October 02, 2023"),(0,a.kt)("h3",{id:"compatibility-notes"},"Compatibility Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Proxy configuration is no longer realized through a proxy agent, but with the native axios proxy setting instead. (025b6aa2c)")),(0,a.kt)("h3",{id:"fixed-issues-1"},"Fixed Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Use axios native proxy, instead of proxy agent, which causes connection issues for write requests on SAP Cloud Connector. (025b6aa2c)"),(0,a.kt)("li",{parentName:"ul"},"[http-client]"," Fix CSRF token fetching against OnPremise systems. (c2a2987c5)")),(0,a.kt)("h2",{id:"350-core-modules---september-13-2023"},"3.5.0 ","[Core Modules]"," - September 13, 2023"),(0,a.kt)("h3",{id:"fixed-issues-2"},"Fixed Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Compare ",(0,a.kt)("inlineCode",{parentName:"li"},"selectionStrategy")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"DestinationFetchOptions")," based on value instead of reference. (7ed5ceb52)"),(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Fix destination caching for destinations from service bindings. The destinations are not cached repeatedly. The function ",(0,a.kt)("inlineCode",{parentName:"li"},"getDestinationFromServiceBinding()")," returns ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined")," for destinations which have expired JWTs. (bf54df09b)"),(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Support destinations of type ",(0,a.kt)("inlineCode",{parentName:"li"},"ClientCertificateAuthentication")," without password.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"@sap-cloud-sdk/",(0,a.kt)("a",{parentName:"li",href:"mailto:resilience@3.5.0"},"resilience@3.5.0")),(0,a.kt)("li",{parentName:"ul"},"@sap-cloud-sdk/",(0,a.kt)("a",{parentName:"li",href:"mailto:util@3.5.0"},"util@3.5.0")," (2277f9443)"))),(0,a.kt)("li",{parentName:"ul"},"[odata-common, odata-v2, odata-v4]"," Fix OData v2 serialization for ",(0,a.kt)("inlineCode",{parentName:"li"},"Edm.Decimal")," to serialize to ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),". (ee7477ce2)")),(0,a.kt)("h2",{id:"340-core-modules---july-31-2023"},"3.4.0 ","[Core Modules]"," - July 31, 2023"),(0,a.kt)("h3",{id:"compatibility-notes-1"},"Compatibility Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Deprecate ",(0,a.kt)("inlineCode",{parentName:"li"},"destinationForServiceBinding()")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"PartialDestinationFetchOptions"),". Use ",(0,a.kt)("inlineCode",{parentName:"li"},"getDestinationFromServiceBinding()")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ServiceBindingTransformOptions")," instead. (bde64634d)")),(0,a.kt)("h3",{id:"new-functionalities"},"New Functionalities"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Always add a name to destinations from service bindings created with ",(0,a.kt)("inlineCode",{parentName:"li"},"getDestinationFromServiceBinding()"),". (db0780f1b)"),(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Support forwarding of auth tokens for destinations from the destination service, service bindings and environment variables. (bde64634d)")),(0,a.kt)("h3",{id:"fixed-issues-3"},"Fixed Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[odata-common, odata-v4]",' Serialize properties of type "Edm.Decimal" to numbers when they are within the safe range and strings when they are not. (431d2a542)')),(0,a.kt)("h2",{id:"330-core-modules---july-21-2023"},"3.3.0 ","[Core Modules]"," - July 21, 2023"),(0,a.kt)("h3",{id:"compatibility-notes-2"},"Compatibility Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[connectivity]"," The ",(0,a.kt)("inlineCode",{parentName:"p"},"expiresIn")," property of ",(0,a.kt)("inlineCode",{parentName:"p"},"authTokens")," on a ",(0,a.kt)("inlineCode",{parentName:"p"},"Destination")," can be undefined. (c09b1d06f)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[connectivity]"," Deprecate ",(0,a.kt)("inlineCode",{parentName:"p"},"getAgentConfig()"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Temporarily use replacement function ",(0,a.kt)("inlineCode",{parentName:"li"},"getAgentConfigAsync()"),"."),(0,a.kt)("li",{parentName:"ul"},"Rename ",(0,a.kt)("inlineCode",{parentName:"li"},"getAgentConfigAsync()")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"getAgentConfig()")," in next major version. (36a01f775)")))),(0,a.kt)("h3",{id:"new-functionalities-1"},"New Functionalities"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Add option to cache mTLS certificates. (36a01f775)")),(0,a.kt)("h3",{id:"improvements"},"Improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Do not rely on XSUAA service when caching service tokens. Cache keys are now based on service credentials URL. (0583836bc)"),(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Do not rely on the XSUAA service binding to retrieve tenant information when registering destinations. If tenant is unknown and no binding is found, set it to a default value (",(0,a.kt)("inlineCode",{parentName:"li"},"'tenant_id'"),"). (8f54207b6)"),(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Read mTLS certificates asynchronously. (36a01f775)")),(0,a.kt)("h3",{id:"fixed-issues-4"},"Fixed Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Remove dependency to XSUAA service binding when checking whether a JWT was issued by XSUAA for destination retrieval. Now, the ",(0,a.kt)("inlineCode",{parentName:"li"},"ext_attr.ehancer")," property is checked. (6b58354e8)"),(0,a.kt)("li",{parentName:"ul"},"[http-client]"," Do not set default tenant ID in the context of middlewares, if the tenant ID is unknown. In those cases it will be ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined")," from now on. (8f54207b6)")),(0,a.kt)("h2",{id:"320-core-modules---may-30-2023"},"3.2.0 ","[Core Modules]"," - May 30, 2023"),(0,a.kt)("h3",{id:"new-functionalities-2"},"New Functionalities"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Enable the use of mTLS certificates for registered destinations on CloudFoundry. (616d77b85)")),(0,a.kt)("h3",{id:"improvements-1"},"Improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Set the default validity time of the client credentials token cache to 5 minutes instead of never expiring. (782b9e37e)")),(0,a.kt)("h3",{id:"fixed-issues-5"},"Fixed Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity, http-client]"," Forward the user JWT irrespective of the destination authentication type when ",(0,a.kt)("inlineCode",{parentName:"li"},"forwardAuthToken")," is set to true on a destination (56c3f70f4)"),(0,a.kt)("li",{parentName:"ul"},"[http-client]"," Improve CSRF token fetching for large requests. (73ff0ab03)"),(0,a.kt)("li",{parentName:"ul"},"[odata-common]"," Remove encoding of keys in the ",(0,a.kt)("inlineCode",{parentName:"li"},"getEntityKeys()")," as it should only happen once in ",(0,a.kt)("inlineCode",{parentName:"li"},"getResourcePathForKeys()"),".Fixes the error ",(0,a.kt)("inlineCode",{parentName:"li"},"value.format is not a function")," when executing requests for entities with ",(0,a.kt)("inlineCode",{parentName:"li"},"Edm.Date")," type key property. (aa1a4bdb0)"),(0,a.kt)("li",{parentName:"ul"},"[resilience]"," Fix parsing error when the last response in a chain of retries returned undefined.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"@sap-cloud-sdk/",(0,a.kt)("a",{parentName:"li",href:"mailto:util@3.2.0"},"util@3.2.0")," (234675fc3)")))),(0,a.kt)("h2",{id:"311-core-modules---april-14-2023"},"3.1.1 ","[Core Modules]"," - April 14, 2023"),(0,a.kt)("h3",{id:"fixed-issues-6"},"Fixed Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[resilience]"," Fix transpilation on OData generation, where types for 'opossum' could not be found.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"@sap-cloud-sdk/",(0,a.kt)("a",{parentName:"li",href:"mailto:util@3.1.1"},"util@3.1.1")," (166a16d82)")))),(0,a.kt)("h2",{id:"310-core-modules---april-06-2023"},"3.1.0 ","[Core Modules]"," - April 06, 2023"),(0,a.kt)("h3",{id:"compatibility-notes-3"},"Compatibility Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," The combination of ",(0,a.kt)("inlineCode",{parentName:"li"},"iss")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"jwt")," is now supported when fetching destinations. When both properties are set, the ",(0,a.kt)("inlineCode",{parentName:"li"},"iss")," property is no longer ignored. (28b7af86f)")),(0,a.kt)("h3",{id:"new-functionalities-3"},"New Functionalities"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Add support for authentication type ",(0,a.kt)("inlineCode",{parentName:"li"},"NoAuthentication")," on-premise destinations. (039412e59)"),(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Allow combination of ",(0,a.kt)("inlineCode",{parentName:"li"},"iss")," an ",(0,a.kt)("inlineCode",{parentName:"li"},"jwt")," when fetching a destination. In this case the ",(0,a.kt)("inlineCode",{parentName:"li"},"iss")," URL will be used to fetch the destination service token and ",(0,a.kt)("inlineCode",{parentName:"li"},"jwt")," will be used for the ",(0,a.kt)("inlineCode",{parentName:"li"},"x-user-token")," header of user based authentication types. (28b7af86f)")),(0,a.kt)("h3",{id:"fixed-issues-7"},"Fixed Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[odata-common]"," Adjust ",(0,a.kt)("inlineCode",{parentName:"li"},"FromJsonType")," to stricter typings in TypeScript 5. (cc8425abc)")),(0,a.kt)("h2",{id:"302-core-modules---march-23-2023"},"3.0.2 ","[Core Modules]"," - March 23, 2023"),(0,a.kt)("h3",{id:"compatibility-notes-4"},"Compatibility Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[odata-common, odata-v2, odata-v4]"," The ",(0,a.kt)("inlineCode",{parentName:"li"},"ActionFunctionImportRequestBuilderBase")," has an additional mandatory type parameter to pass the according (de-)serializer type. This was missing previously due to a bug. (2fa8c36a6)")),(0,a.kt)("h3",{id:"fixed-issues-8"},"Fixed Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Fix the ",(0,a.kt)("inlineCode",{parentName:"li"},"The proxy configuration is undefined")," error for OnPrem ",(0,a.kt)("inlineCode",{parentName:"li"},"MAIL")," destinations by removing the ",(0,a.kt)("inlineCode",{parentName:"li"},"isHttpDestination")," check when adding proxyConfiguration to the destination object.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"@sap-cloud-sdk/",(0,a.kt)("a",{parentName:"li",href:"mailto:resilience@3.0.2"},"resilience@3.0.2")),(0,a.kt)("li",{parentName:"ul"},"@sap-cloud-sdk/",(0,a.kt)("a",{parentName:"li",href:"mailto:util@3.0.2"},"util@3.0.2")," (47fc7278d)"))),(0,a.kt)("li",{parentName:"ul"},"[mail-client]"," Fix error ",(0,a.kt)("inlineCode",{parentName:"li"},"Greeting never received")," when sending emails to On-Premise mail servers. The ",(0,a.kt)("inlineCode",{parentName:"li"},"_readableListening")," property of socket is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," to allow nodemailer to receive SMTP greeting messages. (47fc7278d)"),(0,a.kt)("li",{parentName:"ul"},"[mail-client]"," Fix ",(0,a.kt)("inlineCode",{parentName:"li"},"Invalid greeting")," error from nodemailer by removing the ",(0,a.kt)("inlineCode",{parentName:"li"},"transport.verify")," function call. (be04dafc2)"),(0,a.kt)("li",{parentName:"ul"},"[odata-common, odata-v2, odata-v4]"," Fix batch requests to accept only functions or actions. (2fa8c36a6)")),(0,a.kt)("h2",{id:"301-core-modules---march-01-2023"},"3.0.1 ","[Core Modules]"," - March 01, 2023"),(0,a.kt)("h3",{id:"compatibility-notes-5"},"Compatibility Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[resilience]"," Deprecate erroneously exposed ",(0,a.kt)("inlineCode",{parentName:"li"},"circuitBreakerHttp()")," function in favor of ",(0,a.kt)("inlineCode",{parentName:"li"},"circuitBreaker()"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"@sap-cloud-sdk/",(0,a.kt)("a",{parentName:"li",href:"mailto:util@3.0.1"},"util@3.0.1")," (fcab06c4b)")))),(0,a.kt)("h3",{id:"improvements-2"},"Improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[generator-common]"," Improve logs when generating OData clients without package.json",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"@sap-cloud-sdk/",(0,a.kt)("a",{parentName:"li",href:"mailto:util@3.0.1"},"util@3.0.1")," (c78c16ddf)")))),(0,a.kt)("h2",{id:"300-core-modules---february-28-2023"},"3.0.0 ","[Core Modules]"," - February 28, 2023"),(0,a.kt)("h3",{id:"compatibility-notes-6"},"Compatibility Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," The generic types of ",(0,a.kt)("inlineCode",{parentName:"li"},"JwtKeyMapping")," is simplified so the second type argument ",(0,a.kt)("inlineCode",{parentName:"li"},"JwtKeysT")," are always strings. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," The ",(0,a.kt)("inlineCode",{parentName:"li"},"Protocol")," enum was replaced with a string literal union type. Now, instead of passing ",(0,a.kt)("inlineCode",{parentName:"li"},"Protocol.HTTPS")," pass 'https'. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[connectivity, http-client, openapi, odata-common, odata-v2, resilience]"," Remove the options ",(0,a.kt)("inlineCode",{parentName:"li"},"timeout")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"enableCircuitBreaker")," from all BTP service interactions i.e. destination and token fetching. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[connectivity, http-client, mail-client, openapi, odata-common, odata-v2, odata-v4, eslint-config, generator, test-util, util, openapi-generator, generator-common, temporal-de-serializers, resilience]"," Switch the compilerOptions.module to ",(0,a.kt)("inlineCode",{parentName:"li"},"Node16")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"CommonJS")," for better interoperability with ES modules. See the ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/esm-node.html"},"TypeScript handbook")," for technical details if needed. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," The enum ",(0,a.kt)("inlineCode",{parentName:"li"},"IsolationStrategy")," was replaced with a string literal union type of the same name. Use 'tenant' and 'tenant-user' instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"IsolationStrategy.Tenant")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"IsolationStrategy.Tenant_User"),". (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[connectivity, http-client, odata-common]"," The ",(0,a.kt)("inlineCode",{parentName:"li"},"url")," property in ",(0,a.kt)("inlineCode",{parentName:"li"},"Destination")," is now optional as destinations of type ",(0,a.kt)("inlineCode",{parentName:"li"},"MAIL")," do not have a URL. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[http-client, openapi, odata-common]"," Remove ",(0,a.kt)("inlineCode",{parentName:"li"},"timeout()")," method from the request builders and the ",(0,a.kt)("inlineCode",{parentName:"li"},"timeout")," options from the ",(0,a.kt)("inlineCode",{parentName:"li"},"executeHttpRequest()")," function.\nVisit the ",(0,a.kt)("a",{parentName:"li",href:"https://sap.github.io/cloud-sdk/docs/js/guides/resilience"},"documentation portal")," to see how to add a timeout using middlewares. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[http-client]"," Removed overload of executeHttpRequest\nThe overload, that accepted ",(0,a.kt)("inlineCode",{parentName:"li"},"HttpRequestConfigWithOrigin")," as a parameter, is removed and replaced by the function ",(0,a.kt)("inlineCode",{parentName:"li"},"executeHttpRequestWithOrigin"),". (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[odata-common, generator, util]"," By default, generation of OData clients fails if a service path cannot be determined. Either provide ",(0,a.kt)("inlineCode",{parentName:"li"},"servicePath")," value in the ",(0,a.kt)("inlineCode",{parentName:"li"},"options-per-service.json")," or set ",(0,a.kt)("inlineCode",{parentName:"li"},"skipValidation")," to true, in which case, ",(0,a.kt)("inlineCode",{parentName:"li"},"/")," will be used. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[odata-common]"," The constructor of ",(0,a.kt)("inlineCode",{parentName:"li"},"ODataRequestConfig")," was changed so that the third parameter cannot be a ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," anymore.\nPassing in a string which was then interpreted as the value for the ",(0,a.kt)("inlineCode",{parentName:"li"},"Content-Type")," HTTP header was deprecated.\nThe type of the parameter is now ",(0,a.kt)("inlineCode",{parentName:"li"},"Record<string, any>"),", and if only want to set the ",(0,a.kt)("inlineCode",{parentName:"li"},"Content-Type")," HTTP header you can do so by passing ",(0,a.kt)("inlineCode",{parentName:"li"},"{'content-type': 'some-value'}")," to the constructor. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[odata-common]"," The constructor of the entity API is private to avoid accidental usage. Use the service object to get a API instance. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[odata-common, generator, openapi-generator]"," The ",(0,a.kt)("inlineCode",{parentName:"li"},"serviceMapping")," option of the OData generator has been renamed to ",(0,a.kt)("inlineCode",{parentName:"li"},"optionsPerService"),". The mapping file, ",(0,a.kt)("inlineCode",{parentName:"li"},"service-mapping.json")," has also been renamed to ",(0,a.kt)("inlineCode",{parentName:"li"},"options-per-service.json"),". By default, an options file will not be generated. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[odata-common]"," Setting custom fields in ",(0,a.kt)("inlineCode",{parentName:"li"},"fromJson")," through the ",(0,a.kt)("inlineCode",{parentName:"li"},"_customFields")," property has been removed.\nAdd custom properties to your JSON object instead. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[generator]"," The options per service behavior is now the same as for the OpenApi generator.\nFor details on how to migrate and what has change look at the migration guide. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[generator]"," The deprecated ",(0,a.kt)("inlineCode",{parentName:"li"},"forceOverwrite")," option of the generator is removed. Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"overwrite")," option instead."),(0,a.kt)("li",{parentName:"ul"},"[generator]"," The deprecated ",(0,a.kt)("inlineCode",{parentName:"li"},"generatePackageJson")," option of the generator is removed. Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"packageJson")," option instead."),(0,a.kt)("li",{parentName:"ul"},"[generator]"," The deprecated ",(0,a.kt)("inlineCode",{parentName:"li"},"writeReadme")," option of the generator is removed. Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"readme")," option instead."),(0,a.kt)("li",{parentName:"ul"},"[generator]"," The deprecated ",(0,a.kt)("inlineCode",{parentName:"li"},"processesJsGeneration")," option of the generator is removed. Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"transpilationProcesses")," option instead."),(0,a.kt)("li",{parentName:"ul"},"[generator]"," The internal options ",(0,a.kt)("inlineCode",{parentName:"li"},"sdkAfterVersionScript"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"s4HanaCloud")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"packageVersion")," of the generator are removed.\nThese were hidden options never meant for external usage and there is no replacement."),(0,a.kt)("li",{parentName:"ul"},"[generator]"," The deprecated ",(0,a.kt)("inlineCode",{parentName:"li"},"generateNpmrc")," option of the generator is removed. Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"include")," option to add a ",(0,a.kt)("inlineCode",{parentName:"li"},".npmrc")," to the generated code if needed. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[generator]"," Add ",(0,a.kt)("inlineCode",{parentName:"li"},"verbose")," generator option. By default, only error and warning logs will be displayed. If ",(0,a.kt)("inlineCode",{parentName:"li"},"verbose")," is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", all logs will be displayed. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[generator]"," The ",(0,a.kt)("inlineCode",{parentName:"li"},"generateJs")," option has been replaced with the ",(0,a.kt)("inlineCode",{parentName:"li"},"transpile")," option. Transpilation is not enabled by default. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[generator]"," The command line argument ",(0,a.kt)("inlineCode",{parentName:"li"},"inputDir")," of the OData generator is renamed to ",(0,a.kt)("inlineCode",{parentName:"li"},"input"),".\nThe new ",(0,a.kt)("inlineCode",{parentName:"li"},"input")," options accepts now also file paths and glob patterns. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[generator]"," The OData generator won't automatically rename identifiers to avoid name conflicts.\nThe generation process will fail if identifiers have conflicting names.\nSwitch on the ",(0,a.kt)("inlineCode",{parentName:"li"},"skipValidation")," flag if you want to generate despite name conflicts and are okay with changed identifier names to avoid conflicts. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[generator, openapi-generator, generator-common]"," Removed the option ",(0,a.kt)("inlineCode",{parentName:"li"},"versionInPackageJson")," from the OData and OpenAPI generator.\nIf the option ",(0,a.kt)("inlineCode",{parentName:"li"},"packageJson")," is enabled now a ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," with a default version ",(0,a.kt)("inlineCode",{parentName:"li"},"1.0.0")," is created.\nIf necessary use the ",(0,a.kt)("inlineCode",{parentName:"li"},"include")," option to add a ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," with a custom value."),(0,a.kt)("li",{parentName:"ul"},"[generator, openapi-generator]"," Removed the option ",(0,a.kt)("inlineCode",{parentName:"li"},"licenseInPackageJson")," from the OData and OpenAPI generator.\nIf the option ",(0,a.kt)("inlineCode",{parentName:"li"},"packageJson")," is enabled now a ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," with a default license ",(0,a.kt)("inlineCode",{parentName:"li"},"UNLICENSED")," is created.\nIf necessary use the ",(0,a.kt)("inlineCode",{parentName:"li"},"include")," option to add a ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," with a custom value. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[generator, openapi-generator]"," Rename servicePath to basePath. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[generator]"," The option ",(0,a.kt)("inlineCode",{parentName:"li"},"generateCSN")," is removed. There is no replacement. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[generator]"," The type for paths in the ",(0,a.kt)("inlineCode",{parentName:"li"},"GeneratorOptions")," is changed from ",(0,a.kt)("inlineCode",{parentName:"li"},"fs.PathLike")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),".\nIn case you passed a buffer object please resolve it to a string before passing it to the SAP Cloud SDK. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[generator, openapi-generator, generator-common]"," The two generators use the same CLI parsing code now, aligning the way paths are resolved.\nIn case you experience problems with the new logic, enable the ",(0,a.kt)("inlineCode",{parentName:"li"},"verbose")," flag to investigate the new paths. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[util]"," The function ",(0,a.kt)("inlineCode",{parentName:"li"},"variadicArgumentToArray")," is replaced by the function ",(0,a.kt)("inlineCode",{parentName:"li"},"transformVariadicArgumentToArray"),". (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[util]"," The field ",(0,a.kt)("inlineCode",{parentName:"li"},"logger")," on the interface ",(0,a.kt)("inlineCode",{parentName:"li"},"LoggerOptions")," was not used and is removed from the interface. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[openapi-generator]"," The internal option ",(0,a.kt)("inlineCode",{parentName:"li"},"packageVersion")," of the OpenAPI generator is removed. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[openapi-generator]"," ",(0,a.kt)("inlineCode",{parentName:"li"},"tsConfig")," option has been renamed to ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig"),". (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[generator-common]"," The generator does not create ",(0,a.kt)("inlineCode",{parentName:"li"},"d.ts.map")," files per default anymore. If you need them include a custom ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),"."),(0,a.kt)("li",{parentName:"ul"},"[connectivity, http-client, mail-client, openapi, odata-common, odata-v2, odata-v4, eslint-config, generator, test-util, util, openapi-generator, generator-common, temporal-de-serializers, resilience]"," All SAP Cloud SDK packages ship without ",(0,a.kt)("inlineCode",{parentName:"li"},"d.ts.map")," files from now on.\nModern IDEs don't require those files for code navigation, thus they are removed to decrease download size of the SDK. (1b974095f)")),(0,a.kt)("h3",{id:"new-functionalities-4"},"New Functionalities"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Support ",(0,a.kt)("inlineCode",{parentName:"li"},"OAuth2RefreshToken")," authentication type (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Add a ",(0,a.kt)("inlineCode",{parentName:"li"},"retry")," option in the ",(0,a.kt)("inlineCode",{parentName:"li"},"DestinationFetchOption"),".\nEnable this options if the token exchange done by the destination service is unstable. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[connectivity, resilience]"," Add ",(0,a.kt)("inlineCode",{parentName:"li"},"ResilienceOptions")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"resilience()")," function. The function returns an array of middlewares based on the provided options. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[http-client, resilience]"," The request configuration used in the final request is now part of the middleware context.\nUser can implement middlewares to change request properties like ",(0,a.kt)("inlineCode",{parentName:"li"},"headers")," using this reference in the middleware context.\nThe request configuration contains the ",(0,a.kt)("inlineCode",{parentName:"li"},"url"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"headers")," and all other properties of the HTTP request. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[http-client, openapi, odata-common]"," Introduce the middleware on the request builders and http-client.\nVisit the ",(0,a.kt)("a",{parentName:"li",href:"https://sap.github.io/cloud-sdk/docs/js/guides/resilience"},"documentation portal")," to see how to use middlewares. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[generator, generator-common]"," Introduced options ",(0,a.kt)("inlineCode",{parentName:"li"},"transpile")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig")," to configure transpilation for generated OData clients. (1b974095f)")),(0,a.kt)("h3",{id:"improvements-3"},"Improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Replace ",(0,a.kt)("inlineCode",{parentName:"li"},"Protocol")," enum with a string literal union type. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Replace ",(0,a.kt)("inlineCode",{parentName:"li"},"IsolationStrategy")," enum with union type. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[generator]"," Align naming rules for operations and properties in OData clients by removing ",(0,a.kt)("inlineCode",{parentName:"li"},"_")," prefix (1b974095f)")),(0,a.kt)("h3",{id:"fixed-issues-9"},"Fixed Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[connectivity]"," Fix the combination of providing the ",(0,a.kt)("inlineCode",{parentName:"li"},"iss")," together with ",(0,a.kt)("inlineCode",{parentName:"li"},"OnPremise")," basic destinations. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[odata-v2]"," Allow to update OData v2 entities to ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),". Fixes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-sdk-js/issues/3204"},"3204"),". (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[generator]"," Allow OData service to contain an entity name 'Service'. (1b974095f)"),(0,a.kt)("li",{parentName:"ul"},"[generator]"," Now links to the correct generator binary. (1b974095f)")))}u.isMDXComponent=!0},43689:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(67294);const a=function(e){let{align:t}=e;return n.createElement("span",{className:t?"col text--right":""},n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/SAP/cloud-sdk-js"},n.createElement("img",{src:"https://github.com/SAP/cloud-sdk-js/workflows/build/badge.svg",alt:"build",className:"max-width:100%;"})))}},15767:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(67294);const a=function(e){let{align:t}=e;return n.createElement("span",{className:t?"col text--right":""},n.createElement("a",{href:"https://opensource.org/licenses/Apache-2.0",rel:"nofollow"},n.createElement("img",{src:"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",alt:"License","data-canonical-src":"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",className:"max-width:100%;"})))}}}]);