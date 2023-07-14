"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?i.createElement(f,r(r({ref:t},d),{},{components:n})):i.createElement(f,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const o={id:"mtls",title:"Certificate-Based Authentication Using SAP Cloud SDK",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Certificate-based Authentication",description:"This article describes how the SAP Cloud SDK for Java can be used to establish connections to other cloud services using mTLS",keywords:["sap","cloud","sdk","mTLS","java","connectivity"]},r=void 0,c={unversionedId:"features/connectivity/mtls",id:"version-v5/features/connectivity/mtls",title:"Certificate-Based Authentication Using SAP Cloud SDK",description:"This article describes how the SAP Cloud SDK for Java can be used to establish connections to other cloud services using mTLS",source:"@site/docs-java_versioned_docs/version-v5/features/connectivity/mtls.mdx",sourceDirName:"features/connectivity",slug:"/features/connectivity/mtls",permalink:"/cloud-sdk/docs/java/v5/features/connectivity/mtls",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v5/features/connectivity/mtls.mdx",tags:[],version:"v5",frontMatter:{id:"mtls",title:"Certificate-Based Authentication Using SAP Cloud SDK",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Certificate-based Authentication",description:"This article describes how the SAP Cloud SDK for Java can be used to establish connections to other cloud services using mTLS",keywords:["sap","cloud","sdk","mTLS","java","connectivity"]},sidebar:"docsJavaSidebar",previous:{title:"HttpClient",permalink:"/cloud-sdk/docs/java/v5/features/connectivity/http-client"},next:{title:"Thread Context",permalink:"/cloud-sdk/docs/java/v5/features/multi-tenancy/thread-context"}},s={},l=[{value:"Why Certificate-Based Authentication (mTLS)",id:"why-certificate-based-authentication-mtls",level:2},{value:"Shortcomings of Using Secret for Token Retrieval",id:"shortcomings-of-using-secret-for-token-retrieval",level:2},{value:"Certificate-Based Authentication for Services",id:"certificate-based-authentication-for-services",level:2},{value:"Default Validity Period of Certificates",id:"default-validity-period-of-certificates",level:2},{value:"Extending the Validity of a Certificate",id:"extending-the-validity-of-a-certificate",level:3},{value:"Sticking to Using Secret for Token Retrieval",id:"sticking-to-using-secret-for-token-retrieval",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This article talks about using mTLS to connect with cloud services like ",(0,a.kt)("inlineCode",{parentName:"p"},"XSUAA")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Destination")," service.\nIf you are interested in using mTLS for communication between your application and target destination, please refer ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/connectivity/destination-service#enabling-mtls-for-application-to-destination-communication"},"here")," instead.")),(0,a.kt)("p",null,"The SAP Cloud SDK supports certificate-based authentication while establishing connections to other cloud services like ",(0,a.kt)("inlineCode",{parentName:"p"},"XSUAA")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Destination")," service."),(0,a.kt)("h2",{id:"why-certificate-based-authentication-mtls"},"Why Certificate-Based Authentication (mTLS)"),(0,a.kt)("p",null,"Mutual ",(0,a.kt)("inlineCode",{parentName:"p"},"TLS")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"mTLS")," for short is a method for mutual authentication.\nIt ensures that before proceeding with the ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP")," exchange both the client and the server each mutually verify each other's identities by the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"X.509")," certificates.\nUsing certificate-based authentication ensures overcoming the shortcomings of authenticating with ",(0,a.kt)("inlineCode",{parentName:"p"},"clientsecret"),"."),(0,a.kt)("h2",{id:"shortcomings-of-using-secret-for-token-retrieval"},"Shortcomings of Using Secret for Token Retrieval"),(0,a.kt)("p",null,"Let's take an example of a service or an application protected by ",(0,a.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/6373bb7a96114d619bfdfdc6f505d1b9.html"},(0,a.kt)("inlineCode",{parentName:"a"},"XSUAA")),".\nTo access the service or application, you'll need a ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT"),".\nYou will usually fetch a ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," by providing ",(0,a.kt)("inlineCode",{parentName:"p"},"clientid"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"clientsecret")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"uri")," stored in your service binding to run a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-security-xsuaa-integration/tree/main/token-client"},(0,a.kt)("inlineCode",{parentName:"a"},"token retrieval flow"))," say for e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"client")),(0,a.kt)("p",null,"The use of ",(0,a.kt)("inlineCode",{parentName:"p"},"clientsecret")," has an inherent risk of these credentials being leaked, especially as they are not frequently rotated.\nLeaking these credentials into the hands of an attacker can cause a lot of harm and stay long unnoticed.\nThe use of certificate-based authentication to fetch the ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"XSUAA")," significantly reduces the risk of leaking secrets and makes rotating them easier."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The SAP Cloud SDK automatically"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Fetches the ",(0,a.kt)("inlineCode",{parentName:"li"},"JWT")," for you"),(0,a.kt)("li",{parentName:"ul"},"Adds the fetched ",(0,a.kt)("inlineCode",{parentName:"li"},"JWT")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorization")," header when requesting a service to ensure that the request gets authenticated and authorized.")),(0,a.kt)("p",{parentName:"admonition"},"Application developers do not need to worry about doing any of this themselves.")),(0,a.kt)("h2",{id:"certificate-based-authentication-for-services"},"Certificate-Based Authentication for Services"),(0,a.kt)("p",null,"To adhere to the latest recommended security best practices by SAP, some re-use and kernel services have enabled certificate-based authentication.\nAs a consequence, SAP Cloud SDK also supports certificate-based authentication while accessing these services.\nIf a service binding has a property ",(0,a.kt)("inlineCode",{parentName:"p"},"credentials: { credential-type: x509 }")," then this is an indication that you can use certificate-based authentication to access the service."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"XSUAA")," service is one of the services that has enabled certificate-based authentication.\nThis means that in the service binding in addition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"client_secret")," you will also find ",(0,a.kt)("inlineCode",{parentName:"p"},"certificate")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," entries now.\nExample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "VCAP_SERVICES": {\n        "xsuaa": [\n            {\n                "label": "xsuaa",\n                ...\n                "credentials": {\n                    ...\n                    "credential-type": "x509"\n                    "clientid": "fictional-client-id",\n                    "clientsecret": "fictional-secret",\n                    "certificate": "-----BEGIN CERTIFICATE-----fictional-certificate-----END CERTIFICATE-----\\n",\n                    "key": "key"\n                    ...\n                },\n            }\n        ]\n    }\n}\n')),(0,a.kt)("p",null,"This certificate would now be used in place of ",(0,a.kt)("inlineCode",{parentName:"p"},"clientsecret")," to obtain the ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-security-xsuaa-integration/tree/main/token-client"},(0,a.kt)("inlineCode",{parentName:"a"},"XSUAA")," token retrieval flows"),".\nThe SAP Cloud SDK will as before fetch the ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," for you.\nThe only difference is that the ",(0,a.kt)("inlineCode",{parentName:"p"},"certificate")," from your service binding is used to authenticate the client."),(0,a.kt)("h2",{id:"default-validity-period-of-certificates"},"Default Validity Period of Certificates"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"X.509")," certificates used in the service binding could either be external or ",(0,a.kt)("inlineCode",{parentName:"p"},"XSUAA")," managed.\nBy default ",(0,a.kt)("inlineCode",{parentName:"p"},"XSUAA")," managed certificates are valid only for ",(0,a.kt)("strong",{parentName:"p"},"7 days"),".\nYour calls to the ",(0,a.kt)("inlineCode",{parentName:"p"},"XSUAA")," to fetch a ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," will fail after your certificate expires."),(0,a.kt)("p",null,"You can verify this by looking at the logs of your application, you should see"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[APP/PROC/WEB/0] OUT Caused by: com.sap.cloud.sdk.cloudplatform.security.exception.TokenRequestFailedException:\ncom.sap.cloud.security.xsuaa.tokenflows.TokenFlowException:\nError requesting technical user token with grant_type 'client_credentials':\nError retrieving JWT token. Server URI https://<subdomain>.authentication.cert.<landscape domain>/oauth/token.\nHttp status code 400. Response body '400 Bad Request: TLS handshake failed.\n\n[APP/PROC/WEB/0] OUT ssl_c_err: X509_V_ERR_CERT_HAS_EXPIRED\n")),(0,a.kt)("p",null,"Don't get confused with the grant_type of ",(0,a.kt)("inlineCode",{parentName:"p"},"client_credentials")," in the log, this is expected."),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"X.509")," certificate-based authentication, the token retrieval end point will look like\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://<subdomain>.authentication.cert.<landscape domain>/oauth/token"),".\nNotice that the endpoint contains ",(0,a.kt)("strong",{parentName:"p"},"cert")," ."),(0,a.kt)("p",null,"For authentication based on ",(0,a.kt)("inlineCode",{parentName:"p"},"clientsecret"),", the end point would have looked like: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<subdomain>.authentication.<landscape domain>/oauth/token")),(0,a.kt)("admonition",{title:"certificate renewal process",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"To obtain a new certificate, you will have to delete and re-create a service binding.\nThe application also needs to be restarted to use the updated service binding.")),(0,a.kt)("h3",{id:"extending-the-validity-of-a-certificate"},"Extending the Validity of a Certificate"),(0,a.kt)("p",null,"For less frequent certificate rotation you can extend its validity to a maximum of 1 year.\nFor the ",(0,a.kt)("inlineCode",{parentName:"p"},"XSUAA")," managed certificate use parameters below while creating a service ",(0,a.kt)("strong",{parentName:"p"},"binding"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cf bind-service myapp myservice -c parameters.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "credential-type": "x509",\n  "x509": {\n    "key-length": 2048,\n    "validity": 365,\n    "validity-type": "DAYS"\n  }\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"With longer certificate validity there is a danger that compromised certificate might go unnoticed for a significant period of time.\nThis significantly increases potential damage to a compromised system.")),(0,a.kt)("h2",{id:"sticking-to-using-secret-for-token-retrieval"},"Sticking to Using Secret for Token Retrieval"),(0,a.kt)("p",null,"If you prefer to continue using ",(0,a.kt)("strong",{parentName:"p"},"clientSecret")," instead of ",(0,a.kt)("strong",{parentName:"p"},"Certificate-based Authentication"),", make sure your ",(0,a.kt)("inlineCode",{parentName:"p"},"xs-security.json")," contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"instance-secret")," as the first entry in the property ",(0,a.kt)("inlineCode",{parentName:"p"},"credential-types"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"oauth2-configuration": {\n  "credential-types": ["instance-secret"]\n}\n')))}p.isMDXComponent=!0}}]);