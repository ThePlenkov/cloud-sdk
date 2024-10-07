"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5537],{14448:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var t=a(74848),r=a(28453);const s={},o=void 0,c={id:"environments/code/operator-xsuaa-service",title:"operator-xsuaa-service",description:"",source:"@site/docs-js/environments/code/operator-xsuaa-service.mdx",sourceDirName:"environments/code",slug:"/environments/code/operator-xsuaa-service",permalink:"/cloud-sdk/docs/js/environments/code/operator-xsuaa-service",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/environments/code/operator-xsuaa-service.mdx",tags:[],version:"current",frontMatter:{}},i={},p=[];function d(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="operator-xsuaa-service.yml"',children:"apiVersion: services.cloud.sap.com/v1alpha1\nkind: ServiceInstance\nmetadata:\n  name: operator-xsuaa-service\nspec:\n  serviceOfferingName: xsuaa\n  servicePlanName: application\n  parameters:\n    xsappname: kubernetes-xsuaa\n    tenant-mode: shared\n    scopes:\n      - name: '$XSAPPNAME.Callback'\n        description: 'With this scope set, the callbacks for tenant onboarding, offboarding and getDependencies can be called.'\n        grant-as-authority-to-apps:\n          - $XSAPPNAME(application,sap-provisioning,tenant-onboarding)\n    role-templates:\n      - name: TOKEN_EXCHANGE\n        description: Token exchange\n        scope-references:\n          - uaa.user\n      - name: 'MultitenancyCallbackRoleTemplate'\n        description: 'Call callback-services of applications'\n        scope-references:\n          - '$XSAPPNAME.Callback'\n    oauth2-configuration:\n      grant-types:\n        - authorization_code\n        - client_credentials\n        - password\n        - refresh_token\n        - urn:ietf:params:oauth:grant-type:saml2-bearer\n        - user_token\n        - client_x509\n        - urn:ietf:params:oauth:grant-type:jwt-bearer\n      # Allowed redirect URIs in case you want to use an approuter behind an ingress for user login\n      redirect-uris:\n        - https://*/**\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="operator-xsuaa-binding.yml"',children:"apiVersion: services.cloud.sap.com/v1alpha1\nkind: ServiceBinding\nmetadata:\n  name: operator-xsuaa-service\nspec:\n  serviceInstanceName: operator-xsuaa-service\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>c});var t=a(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);