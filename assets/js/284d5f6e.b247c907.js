"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,y=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?i.createElement(y,r(r({ref:t},u),{},{components:n})):i.createElement(y,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={id:"trust-and-keystores",title:"How the SAP Cloud SDK handles Trust and Keystores",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Trust and Keystores",description:"This article describes how to configure trust and keystores in the SAP Business Technology Platform and how the SAP Cloud SDK handles them.",keywords:["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript","Keystore","Truststore"]},r=void 0,s={unversionedId:"guides/trust-and-keystores",id:"guides/trust-and-keystores",title:"How the SAP Cloud SDK handles Trust and Keystores",description:"This article describes how to configure trust and keystores in the SAP Business Technology Platform and how the SAP Cloud SDK handles them.",source:"@site/docs-js/guides/trust-and-key-stores.mdx",sourceDirName:"guides",slug:"/guides/trust-and-keystores",permalink:"/cloud-sdk/docs/js/v3/guides/trust-and-keystores",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/guides/trust-and-key-stores.mdx",tags:[],version:"current",frontMatter:{id:"trust-and-keystores",title:"How the SAP Cloud SDK handles Trust and Keystores",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Trust and Keystores",description:"This article describes how to configure trust and keystores in the SAP Business Technology Platform and how the SAP Cloud SDK handles them.",keywords:["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript","Keystore","Truststore"]},sidebar:"docsJsSidebar",previous:{title:"Use the SAP Cloud SDK in the Browser",permalink:"/cloud-sdk/docs/js/v3/guides/browser"},next:{title:"Using the SAP Application Router",permalink:"/cloud-sdk/docs/js/v3/guides/approuter"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Formats and Naming",id:"formats-and-naming",level:3},{value:"Classic TLS / One-Way SSL",id:"classic-tls--one-way-ssl",level:3},{value:"Mutual TLS (mTLS) / Two-Way SSL",id:"mutual-tls-mtls--two-way-ssl",level:3},{value:"Truststore Configuration",id:"truststore-configuration",level:2},{value:"Keystore Configuration",id:"keystore-configuration",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The essence of web applications is communication between two parties.\nThese two parties could be a server and a client, two servers, or any other combination.\nIn the communication you want to ensure that:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You are talking to the party you expect to talk to."),(0,a.kt)("li",{parentName:"ol"},"The content of your conversation is securely encrypted and therefore private.")),(0,a.kt)("p",null,"To ensure this the secure socket layer (SSL), later called transport layer security (TLS), was developed.\nIf you want to add this security layer to your request you use ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTPS")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP"),"."),(0,a.kt)("p",null,"The method to achieve both points above (trust and privacy) are private and public keys.\nSuch keys offer the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can encrypt something with one key, but you can decrypt it only with the counterpart."),(0,a.kt)("li",{parentName:"ul"},"You can distribute one key but you can not derive the counterpart from the distributed one.")),(0,a.kt)("p",null,"The process of encrypting something with the private key is sometimes called ",(0,a.kt)("inlineCode",{parentName:"p"},"signing")," because everybody can check the signature with the public key.\nThe format of the private and public keys are certificates that provide additional information like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the used encryption algorithm"),(0,a.kt)("li",{parentName:"ul"},"the issuer of the key pair"),(0,a.kt)("li",{parentName:"ul"},"the validity of the key"),(0,a.kt)("li",{parentName:"ul"},"the domain the key was issued for"),(0,a.kt)("li",{parentName:"ul"},"etc.")),(0,a.kt)("h3",{id:"formats-and-naming"},"Formats and Naming"),(0,a.kt)("p",null,"In the previous paragraph, terms like certificates for the public and private keys were introduced.\nHowever, you need to know a few additional terms to understand how the SAP Cloud SDK handles trust:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Keystore"),": A keystore is an object containing keys.\nUsually, these are private and public key pairs as introduced above, but they may contain a certificate instead.\nYou need a password to open a keystore.\nTypical formats are ",(0,a.kt)("inlineCode",{parentName:"li"},".jks"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".p12"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".pfcks"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},".pkcS7")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Truststore"),": A truststore contains public keys like certificates.\nSome formats allow you to protect the trust store with a password.\nTypical formats are ",(0,a.kt)("inlineCode",{parentName:"li"},".jks"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".crt"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".pem"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".pub"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},".der"),".")),(0,a.kt)("p",null,"For X.509 certificate there are two encodings: base64 ASCII (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},".pem"),") and binary (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},".der"),").\nThe content of a PEM file looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\nMIIFZjCCA06gAwIBAgIQGHcPvmUGa79M6pM42bGFYjANBgkqhkiG9wA\n\u2026.\nLvHPhNDM3rMsLu06agF4JTbO8ANYtWQTx0PVrZKJu+8fcIaUp7MVBIVZ\n-----END CERTIFICATE-----\n")),(0,a.kt)("h3",{id:"classic-tls--one-way-ssl"},"Classic TLS / One-Way SSL"),(0,a.kt)("p",null,"The typical situation is that a client requests something from a public server and wants to be sure that the server is not somebody else.\nThe server does not care about the identity of the client.\nThe identity is verified in the following way:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Server presents the public key (certificate) and some signed content to the client."),(0,a.kt)("li",{parentName:"ul"},"Client checks that the domain in the certificate matches the requested resource."),(0,a.kt)("li",{parentName:"ul"},"Client checks that the certificate issuer is on the list of trusted ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Certificate_authority"},"certificate authorities (CA)"),"."),(0,a.kt)("li",{parentName:"ul"},"Client checks that the content was signed with the public key.")),(0,a.kt)("p",null,"If all checks have passed, the server is trustworthy.\nCreating a secure connection is possible using private and public keys.\nFor an encrypted connection, you need to interchange a secret.\nAn initial secret can be encrypted using the public certificate and sent back to the server.\nThis is the starting point for a private connection between client and server."),(0,a.kt)("h3",{id:"mutual-tls-mtls--two-way-ssl"},"Mutual TLS (mTLS) / Two-Way SSL"),(0,a.kt)("p",null,"Sometimes you would also like to verify the identity of the client.\nYou can do this via a username and password or some authentication token.\nHowever, you can also use a private and public key pair to do that."),(0,a.kt)("p",null,"You would store the public part of your client certificate on the server.\nWhen sending a request you then access your keystore and sign your request with the private part.\nThis is called ",(0,a.kt)("inlineCode",{parentName:"p"},"client certificate authentication")," or two-way SSL because the identity of the server and client is verified using private and public keys."),(0,a.kt)("h2",{id:"truststore-configuration"},"Truststore Configuration"),(0,a.kt)("p",null,"In most cases, your server will use a certificate from trusted CAs and one-way SSL just works without additional actions.\nSometimes this is impossible and locally created key pairs also call ",(0,a.kt)("inlineCode",{parentName:"p"},"self-signed certificates")," are used.\nPer default, browsers and node clients do not trust such a certificate.\nYou will encounter errors like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Error: self-signed certificate in certificate chain.\n")),(0,a.kt)("p",null,"In such a case you need to add the self-signed certificate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ca")," property of the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/tls.html#tlscreatesecurecontextoptions"},"node http client"),".\nThe SAP Cloud SDK does this for you if you maintain the truststore configuration via the destination service.\nYou have to do the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Upload your certificate ",(0,a.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/CP_CONNECTIVITY/cca91383641e40ffbe03bdc78f00f681/df1bb55a526942b9bee78fea2ebb3162.html"},"to destinations sections of the subaccount"),"."),(0,a.kt)("li",{parentName:"ul"},"Maintain the ",(0,a.kt)("inlineCode",{parentName:"li"},"TrustStoreLocation")," property on the destination and ",(0,a.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/CP_CONNECTIVITY/b865ed651e414196b39f8922db2122c7/3f1247537c1a4f069235ee63633659c5.html"},"select the uploaded certificate"),".\nThe password value is only relevant for the java keys store format (JKS).")),(0,a.kt)("p",null,"Note that you can also upload certificates in the destination service instance.\nThe SAP Cloud SDK searches the subaccount first and only if no certificate with the given name is found proceeds to the instance certificates."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The SAP Cloud SDK for JavaScript supports only ",(0,a.kt)("inlineCode",{parentName:"p"},".pem")," as certificate format.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The SAP Cloud SDK also considers the ",(0,a.kt)("inlineCode",{parentName:"p"},"TrustAll")," property on the destination.\nThis leads to ",(0,a.kt)("inlineCode",{parentName:"p"},"rejectUnauthorized: false")," in the node client and should be used with great caution.\nIf you trust everybody, you are vulnerable to man-in-the-middle attacks.\nAvoid this option if possible.")),(0,a.kt)("h2",{id:"keystore-configuration"},"Keystore Configuration"),(0,a.kt)("p",null,"As discussed above you can also use a certificate to authenticate the client.\nThis is the mentioned two-way SSL scenario and is called ",(0,a.kt)("inlineCode",{parentName:"p"},"clientCertificateAuthentication")," in the destination service.\nThe SAP Cloud SDK supports this authentication flow.\nYou have to do the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Upload the keystore in the destinations section of the subaccount."),(0,a.kt)("li",{parentName:"ul"},"Configure the destination to use ",(0,a.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/CP_CONNECTIVITY/cca91383641e40ffbe03bdc78f00f681/4e13a04147314e8e9e54321f25d93fdc.html"},"ClientCertificateAuthentication")," and provide the keystore information like keystore name and password.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The SAP Cloud SDK for JavaScript only supports formats ",(0,a.kt)("inlineCode",{parentName:"p"},".p12")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".pfx")," for the keystore.")))}d.isMDXComponent=!0}}]);