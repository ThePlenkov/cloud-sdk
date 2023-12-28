"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const l={},r=void 0,o={unversionedId:"release-notes/release-notes-0-to-14",id:"release-notes/release-notes-0-to-14",title:"release-notes-0-to-14",description:"5.1.0 - December 27, 2023",source:"@site/docs-java/release-notes/release-notes-0-to-14.mdx",sourceDirName:"release-notes",slug:"/release-notes/release-notes-0-to-14",permalink:"/cloud-sdk/docs/java/release-notes/release-notes-0-to-14",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/release-notes/release-notes-0-to-14.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"5.1.0 - December 27, 2023",id:"510---december-27-2023",level:2},{value:"\ud83d\udd27 Compatibility Notes",id:"-compatibility-notes",level:3},{value:"\u2728 New Functionality",id:"-new-functionality",level:3},{value:"\ud83d\udcc8 Improvements",id:"-improvements",level:3},{value:"\ud83d\udc1b Fixed Issues",id:"-fixed-issues",level:3},{value:"Major Version Update: 5.0.0",id:"major-version-update-500",level:2},{value:"Important Compatibility Changes with Version 5",id:"important-compatibility-changes-with-version-5",level:3},{value:"API Changes",id:"api-changes",level:3},{value:"Changes to the overall Destination API:",id:"changes-to-the-overall-destination-api",level:4},{value:"Changes related to the BTP Destination Service:",id:"changes-related-to-the-btp-destination-service",level:4},{value:"Changes to HTTP clients:",id:"changes-to-http-clients",level:4},{value:"Changes to Multi-Tenancy APIs:",id:"changes-to-multi-tenancy-apis",level:4},{value:"Changes to the Cloud Platform API:",id:"changes-to-the-cloud-platform-api",level:4},{value:"Maven Module Changes",id:"maven-module-changes",level:3},{value:"Major Dependency Changes",id:"major-dependency-changes",level:3},{value:"Other Improvements",id:"other-improvements",level:3},{value:"Fixed Issues",id:"fixed-issues",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"510---december-27-2023"},"5.1.0 - December 27, 2023"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-java/releases/tag/rel%2F5.1.0"},"All Release Changes")),(0,i.kt)("h3",{id:"-compatibility-notes"},"\ud83d\udd27 Compatibility Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An earlier version of the ",(0,i.kt)("a",{parentName:"li",href:"https://sap.github.io/cloud-sdk/docs/java/guides/5.0-upgrade-steps"},"V5 Upgrade Guide")," contained an instruction to move handling of ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinationAccessExceptions")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinationAccessor.getDestination()")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"destination.getHeaders()"),".\nThis instruction was incorrect and has been removed.\nIn case you have followed this instruction, please revert the change."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UriBuilder.build(scheme, userInfo, host, port, path, query, fragment)")," has been deprecated in favor of ",(0,i.kt)("inlineCode",{parentName:"li"},"UriBuilder.build(scheme, authority, path, query, fragment)"),"."),(0,i.kt)("li",{parentName:"ul"},"Deprecate the strategies ",(0,i.kt)("inlineCode",{parentName:"li"},"LOOKUP_ONLY")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"LOOKUP_THEN_EXCHANGE")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinationServiceTokenExchangeStrategy"),".\nThey are replaced by the ",(0,i.kt)("inlineCode",{parentName:"li"},"FORWARD_USER_TOKEN")," strategy.\nIf there are any issues when using ",(0,i.kt)("inlineCode",{parentName:"li"},"FORWARD_USER_TOKEN")," for destinations that require user tokens, please report them and use ",(0,i.kt)("inlineCode",{parentName:"li"},"EXCHANGE_ONLY")," for such cases."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DestinationService.getAllDestinationProperties()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinationService.getAllDestinationProperties(DestinationOptions opts)")," have been deprecated in favor of ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinationService.getAllDestinationProperties()"),".")),(0,i.kt)("h3",{id:"-new-functionality"},"\u2728 New Functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added new API to retrieve destination properties only from the BTP Destination Service.\n",(0,i.kt)("inlineCode",{parentName:"li"},"DestinationService")," now offers ",(0,i.kt)("inlineCode",{parentName:"li"},"getDestinationProperties(String destinationName)")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"getAllDestinationProperties()"),".")),(0,i.kt)("h3",{id:"-improvements"},"\ud83d\udcc8 Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A warning is now logged when destinations with expired authentication tokens are used for requests."),(0,i.kt)("li",{parentName:"ul"},"SAP dependency updates:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Update the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-security-services-integration-library"},"SAP Security Library")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"3.3.0")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"3.3.1")))),(0,i.kt)("li",{parentName:"ul"},"Other dependency updates:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Update ",(0,i.kt)("a",{parentName:"li",href:"https://search.maven.org/artifact/org.apache.httpcomponents.client5/httpclient5"},"Apache HttpClient 5")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"5.2.1")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"5.3")),(0,i.kt)("li",{parentName:"ul"},"Update ",(0,i.kt)("a",{parentName:"li",href:"https://search.maven.org/search?q=a:httpcore5"},"Apache HttpCore 5")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"5.2.3")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"5.2.4"))))),(0,i.kt)("h3",{id:"-fixed-issues"},"\ud83d\udc1b Fixed Issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix an issue where an invalid hostname in a destination would lead to an empty hostname. The hostname is now accepted."),(0,i.kt)("li",{parentName:"ul"},"Fix an issue where errors from token flows of destinations retrieved from the BTP destination service were not handled consistently.\nFor the non-default strategy ",(0,i.kt)("inlineCode",{parentName:"li"},"LOOKUP_ONLY")," errors were handled too late and results would get cached unintentionally.")),(0,i.kt)("h2",{id:"major-version-update-500"},"Major Version Update: 5.0.0"),(0,i.kt)("p",null,"This is the first release of the SAP Cloud SDK as an ",(0,i.kt)("strong",{parentName:"p"},"open source")," project.\nAs this is a new major version, this release contains a lot of (under the hood) improvements, refactoring, and other changes."),(0,i.kt)("p",null,"These release notes list the most relevant API changes.\nPlease refer to the ",(0,i.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/guides/5.0-upgrade-steps"},"Upgrade Guide")," for detailed instructions on how to upgrade your project to version 5 and for a detailed list of changes."),(0,i.kt)("h3",{id:"important-compatibility-changes-with-version-5"},"Important Compatibility Changes with Version 5"),(0,i.kt)("p",null,"Please take note of the following changes introduced with version 5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The SAP Cloud SDK is now ",(0,i.kt)("strong",{parentName:"li"},"open source")," on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-sdk-java"},"github.com/SAP/cloud-sdk-java"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"As of version 5 the SAP Cloud SDK is now under the ",(0,i.kt)("a",{parentName:"li",href:"https://www.apache.org/licenses/LICENSE-2.0.txt"},(0,i.kt)("strong",{parentName:"a"},"Apache Software License"),", Version 2.0"),"."),(0,i.kt)("li",{parentName:"ul"},"Releases of version 4 remain under the ",(0,i.kt)("a",{parentName:"li",href:"https://tools.hana.ondemand.com/developer-license-3_1.txt"},"SAP DEVELOPER LICENSE AGREEMENT"),"."))),(0,i.kt)("li",{parentName:"ul"},"The minimum required Java version increased:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Java 17")," is now the minimum required version to build and use the SAP Cloud SDK."))),(0,i.kt)("li",{parentName:"ul"},"The integration with JavaEE servlets changed:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Jakarta")," servlet namespace is now used for servlet integration."))),(0,i.kt)("li",{parentName:"ul"},"The minimum required versions for Spring and the SAP BTP Security Libraries increased:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spring 6")," and ",(0,i.kt)("strong",{parentName:"li"},"SAP BTP Security Libraries version 3")," are now the minimum required versions."))),(0,i.kt)("li",{parentName:"ul"},"The compatibility with the SAP Java Buildpack changed:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Deployments to SAP BTP Cloud Foundry with packaging type ",(0,i.kt)("inlineCode",{parentName:"li"},"war")," require version 2 of the SAP Java Buildpack (not yet available at the time of writing)."))),(0,i.kt)("li",{parentName:"ul"},"The SAP BTP Neo Environment is no longer supported."),(0,i.kt)("li",{parentName:"ul"},"A significant number of modules have been renamed, moved or been removed.\nPlease refer to the ",(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/java/guides/5.0-upgrade-steps"},"Upgrade Guide")," for the full list of module changes.")),(0,i.kt)("h3",{id:"api-changes"},"API Changes"),(0,i.kt)("h4",{id:"changes-to-the-overall-destination-api"},"Changes to the overall Destination API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Both ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpDestination")," as well as ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpDestinationProperties")," are now sub-types of ",(0,i.kt)("inlineCode",{parentName:"li"},"Destination")," for improved compatibility with the Cloud SDK APIs."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Destination#decorate")," method has been removed without replacement."),(0,i.kt)("li",{parentName:"ul"},"The public constructor of ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultHttpDestination")," has been replaced with a static factory method ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultHttpDestination#fromProperties"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We also added some extra static factory methods (",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultHttpDestination#fromMap")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultHttpDestination#fromDestination"),") for convenience."))),(0,i.kt)("li",{parentName:"ul"},"The public constructor of ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultDestination")," has been replaced with a static factory method ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultHttpDestination#fromMap"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We also added an extra static factory method ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultHttpDestination#fromProperties")," for convenience."))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultHttpDestination.Builder")," has been modified in the following ways:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"user(String)")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"password(String)")," methods have been replaced with ",(0,i.kt)("inlineCode",{parentName:"li"},"basicCredentials(String, String)"),"."),(0,i.kt)("li",{parentName:"ul"},"Using any overload of ",(0,i.kt)("inlineCode",{parentName:"li"},"basicCredentials")," will now automatically set the ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthenticationType")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"BASIC_AUTHENTICATION"),"."),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"proxyConfiguration(ProxyConfiguration)")," will now throw an ",(0,i.kt)("inlineCode",{parentName:"li"},"IllegalArgumentException")," in case the contained ",(0,i.kt)("inlineCode",{parentName:"li"},"Credentials")," are not supported. Supported types are ",(0,i.kt)("inlineCode",{parentName:"li"},"BearerCredentials")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"NoCredentials"),"."))),(0,i.kt)("li",{parentName:"ul"},"Changed the following ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinationPropertyKey")," instances:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AUTH_TYPE"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"authentication")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CERTIFICATES"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"certificates")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"cloudsdk.certificates")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AUTH_TOKENS"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"authTokens")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"cloudsdk.authTokens")),(0,i.kt)("li",{parentName:"ul"},"These changes are most relevant for users who are ",(0,i.kt)("strong",{parentName:"li"},"not")," already using these constant ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinationPropertyKey")," instances but instead retrieved properties from ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinationProperties")," (and sub-types) using the ",(0,i.kt)("inlineCode",{parentName:"li"},"get(String, Function)")," method."))),(0,i.kt)("li",{parentName:"ul"},"The deprecated ",(0,i.kt)("inlineCode",{parentName:"li"},"ClientCredentialsHttpDestination")," has been removed in favor of the improved ",(0,i.kt)("inlineCode",{parentName:"li"},"OAuth2DestinationBuilder"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"OAuth2DestinationBuilder")," has been changed to allow for setting arbitrary destination properties after the OAuth2 configuration has been set."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},".withProperties(..)")," aspect of the builder has been replaced with ",(0,i.kt)("inlineCode",{parentName:"li"},".withProperty(..)"),"."))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"BearerCredentials")," behavior has been adjusted slightly: The ",(0,i.kt)("inlineCode",{parentName:"li"},"getToken()")," method no longer just returns the value passed in via the constructor but instead is now guaranteed to ",(0,i.kt)("strong",{parentName:"li"},"NOT")," contain the prefix ",(0,i.kt)("inlineCode",{parentName:"li"},'"Bearer "'),".\nTo compensate this change, the ",(0,i.kt)("inlineCode",{parentName:"li"},"#getHttpHeaderValue()")," method has been added, which is guaranteed to contain the ",(0,i.kt)("inlineCode",{parentName:"li"},'"Bearer "')," prefix.")),(0,i.kt)("h4",{id:"changes-related-to-the-btp-destination-service"},"Changes related to the BTP Destination Service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"ScpCfDestination")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ScpCfHttpDestination")," classes are replaced by the baseline ",(0,i.kt)("inlineCode",{parentName:"li"},"Destination")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultHttpDestination")," implementations."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"ScpCfDestinationLoader")," has been renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinationService"),".\nAll related classes have been renamed similarly:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ScpCfDestinationRetrievalStrategy")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinationServiceRetrievalStrategy"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The deprecated ",(0,i.kt)("inlineCode",{parentName:"li"},"CURRENT_TENANT_THEN_PROVIDER")," has been removed."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ScpCfDestinationTokenExchangeStrategy")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinationServiceTokenExchangeStrategy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ScpCfDestinationServiceV1Response")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinationServiceV1Response")))),(0,i.kt)("li",{parentName:"ul"},"Removed the following elements from enum ",(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.cloudplatform.connectivity.AuthenticationType"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APP_TO_APP_SSO")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INTERNAL_SYSTEM_AUTHENTICATION"))))),(0,i.kt)("h4",{id:"changes-to-http-clients"},"Changes to HTTP clients:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClientAccessor")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ApacheHttpClient5Accessor")," classes are generalised to accept ",(0,i.kt)("inlineCode",{parentName:"li"},"Destination")," instances, making invocations to ",(0,i.kt)("inlineCode",{parentName:"li"},".asHttp()")," superfluous when obtaining HTTP clients."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"getSslContext()")," method was removed from the ",(0,i.kt)("inlineCode",{parentName:"li"},"CloudPlatform")," interface and the implementation was moved to the modules ",(0,i.kt)("inlineCode",{parentName:"li"},"connectivity-apache-httpclient4")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"connectivity-apache-httpclient5"),".")),(0,i.kt)("h4",{id:"changes-to-multi-tenancy-apis"},"Changes to Multi-Tenancy APIs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The public constructor of ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultPrincipal")," now only accepts a String argument for ",(0,i.kt)("inlineCode",{parentName:"li"},"principalId"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"PrincipalFacade")," of the ",(0,i.kt)("inlineCode",{parentName:"li"},"PrincipalAccessor")," will default to ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultPrincipalFacade")," in the case that a facade cannot be found."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"RequestHeaderContainer")," no longer splits header values."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"ODataRequestResult")," no longer splits header values."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthTokenFacade")," of the ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthTokenAccessor")," will default to ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultAuthTokenFacade")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"TenantFacade")," of the ",(0,i.kt)("inlineCode",{parentName:"li"},"TenantAccessor")," will default to ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultTenantFacade")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"TenantWithSubdomain#getSubdomain")," is now nullable.")),(0,i.kt)("h4",{id:"changes-to-the-cloud-platform-api"},"Changes to the Cloud Platform API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"CloudPlatform")," interface and all related classes have been removed.\nIn particular, the following classes have been removed:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ScpCfCloudPlatform")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ScpNeoCloudPlatform")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CloudPlatformAccessor")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"CloudPlatformFacade"))))),(0,i.kt)("h3",{id:"maven-module-changes"},"Maven Module Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.cloudplatform:scp-cf")," has been deprecated. Please use ",(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk:sdk-core")," instead."),(0,i.kt)("li",{parentName:"ul"},"All classes related to the Apache Http Client 4 have been moved from ",(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.cloudplatform:cloudplatform-connectivity")," to a new module ",(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.cloudplatform:connectivity-apache-httpclient4"),"."),(0,i.kt)("li",{parentName:"ul"},"All classes related to the Apache Http Client 5 have been moved from ",(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.frameworks:apache-httpclient5")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.cloudplatform:connectivity-apache-httpclient5"),"."),(0,i.kt)("li",{parentName:"ul"},"All classes related to Resilience4j have been moved from ",(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.frameworks:resilience4j")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.cloudplatform:resilience4j"),"."),(0,i.kt)("li",{parentName:"ul"},"All classes related to OAuth authorization flows have been moved into a new module ",(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.cloudplatform:connectivity-oauth2"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"cloudplatform-connectivity-scp-cf")," module got renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"connectivity-destination-service"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To prevent breaking changes with the renamed module the ",(0,i.kt)("inlineCode",{parentName:"li"},"cloudplatform-connectivity-scp-cf")," module is still available as a dependency, but it is empty and just contains a reference to the new module ",(0,i.kt)("inlineCode",{parentName:"li"},"connectivity-destination-service"),"."))),(0,i.kt)("li",{parentName:"ul"},"All modules related to the SAP BTP Neo Environment have been removed."),(0,i.kt)("li",{parentName:"ul"},"All modules with suffixes ",(0,i.kt)("inlineCode",{parentName:"li"},"-scp-cf")," have been merged into their respective baseline modules:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tenant-scp-cf")," has been merged into ",(0,i.kt)("inlineCode",{parentName:"li"},"tenant")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"security-scp-cf")," has been merged into ",(0,i.kt)("inlineCode",{parentName:"li"},"security")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.cloudplatform:servlet")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.cloudplatform:security-servlet")," have been removed."),(0,i.kt)("li",{parentName:"ul"},"All deprecated pre-generated clients for OData and OpenAPI have been removed:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.s4hana:s4hana-all")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.s4hana:s4hana-api-odata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.s4hana:s4hana-api-odata-onpremise")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.s4hana:s4hana-api-odata-v4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.s4hana:s4hana-api-odata-v4-onpremise")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.services:scp-workflow-cf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.services:btp-business-rules"))))),(0,i.kt)("h3",{id:"major-dependency-changes"},"Major Dependency Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upgrade the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-security-services-integration-library"},"SAP BTP Security Libraries")," (",(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.security"),") from ",(0,i.kt)("inlineCode",{parentName:"li"},"2.14.2")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"3.3.0"),"."),(0,i.kt)("li",{parentName:"ul"},"Upgrade ",(0,i.kt)("a",{parentName:"li",href:"https://spring.io"},"Spring")," (",(0,i.kt)("inlineCode",{parentName:"li"},"org.springframework"),") from ",(0,i.kt)("inlineCode",{parentName:"li"},"5.3.29")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"6.1.1"),"."),(0,i.kt)("li",{parentName:"ul"},"Upgrade ",(0,i.kt)("a",{parentName:"li",href:"https://www.slf4j.org"},"SLF4J")," (",(0,i.kt)("inlineCode",{parentName:"li"},"org.slf4j"),") from ",(0,i.kt)("inlineCode",{parentName:"li"},"1.7.36")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"2.0.9"),"."),(0,i.kt)("li",{parentName:"ul"},"Upgrade ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ben-manes/caffeine"},"Caffeine")," (",(0,i.kt)("inlineCode",{parentName:"li"},"com.github.ben-manes.caffeine"),") from ",(0,i.kt)("inlineCode",{parentName:"li"},"2.9.3")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"3.1.8"),"."),(0,i.kt)("li",{parentName:"ul"},"Change the servlet integration to the ",(0,i.kt)("a",{parentName:"li",href:"https://jakarta.ee"},"Jakarta")," namespace (",(0,i.kt)("inlineCode",{parentName:"li"},"jakarta.servlet"),")."),(0,i.kt)("li",{parentName:"ul"},"The overall dependency footprint of the SAP Cloud SDK has been reduced significantly.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This also means that some dependencies have been removed from the ",(0,i.kt)("inlineCode",{parentName:"li"},"sdk-bom"),".")))),(0,i.kt)("h3",{id:"other-improvements"},"Other Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Destination#asHttp()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Destination#asRfc()")," methods no longer always return a new instance of ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpDestination")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"RfcDestination")," if the current objects is already a ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpDestination")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"RfcDestination")," respectively."),(0,i.kt)("li",{parentName:"ul"},"The OData, OpenAPI and SOAP APIs are generalised to accept instances of ",(0,i.kt)("inlineCode",{parentName:"li"},"Destination"),", making invocations to ",(0,i.kt)("inlineCode",{parentName:"li"},".asHttp()")," superfluous when executing OData or REST requests.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"OData V2 and OpenAPI clients need to be re-generated to adjust for this change."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Destination#asHttp()")," no longer throws an exception in case the ",(0,i.kt)("inlineCode",{parentName:"li"},"Destination")," originates from the Destination service and the attached auth token contains an error.\nInstead, an exception will be thrown upon invoking the ",(0,i.kt)("inlineCode",{parentName:"li"},"getHeaders()")," method, for example, during request execution."),(0,i.kt)("li",{parentName:"ul"},"Loading a ",(0,i.kt)("inlineCode",{parentName:"li"},"Destination")," from the BTP Destination service will now:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"No longer eagerly evaluate authentication tokens or On-Premise related headers (if applicable).\nInstead, those will be evaluated lazily upon request execution.\nAs a consequence, the ",(0,i.kt)("inlineCode",{parentName:"li"},"getHeaders")," method might now throw an exception if resolving (on-premise) authentication information fails."),(0,i.kt)("li",{parentName:"ul"},"Throw an exception if the tenant changed in between loading and using the destination to execute requests."),(0,i.kt)("li",{parentName:"ul"},"Throw an exception if any of the attached certificates isn't valid."))),(0,i.kt)("li",{parentName:"ul"},"Removed the ",(0,i.kt)("inlineCode",{parentName:"li"},"javax.inject.Named")," annotation from code generated with any of the OData generators (v2, v4).")),(0,i.kt)("h3",{id:"fixed-issues"},"Fixed Issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed a bug where an ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization")," header was attached multiple times to outgoing HTTP requests under some circumstances"),(0,i.kt)("li",{parentName:"ul"},"Fixed an issue where the ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinationType")," of an ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultHttpDestination")," could be changed to anything but ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinationType.HTTP")),(0,i.kt)("li",{parentName:"ul"},"Fixed an issue with custom GSON serialization of OpenAPI generated classes having unexpected ",(0,i.kt)("inlineCode",{parentName:"li"},"customFieldNames")," properties in JSON payload.")))}m.isMDXComponent=!0}}]);