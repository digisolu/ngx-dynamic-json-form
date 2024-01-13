"use strict";(self.webpackChunkngx_dynamic_json_form_common=self.webpackChunkngx_dynamic_json_form_common||[]).push([[423,681],{"./projects/lib-material/src/stories/examples/register.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,one:()=>one});var _angular_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_material_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/material/fesm2020/core.mjs"),_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2020/animations.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),ngx_dynamic_json_form_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./dist/lib-core/fesm2015/ngx-dynamic-json-form-core.mjs"),ngx_dynamic_json_form_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/lib-material/fesm2015/ngx-dynamic-json-form-material.mjs"),_helpers_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/lib-material/src/stories/helpers/utils.ts");let code="";const meta={title:"Examples and Guides/Register",component:ngx_dynamic_json_form_material__WEBPACK_IMPORTED_MODULE_2__.QS,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.provideAnimations)(),(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.importProvidersFrom)(ngx_dynamic_json_form_material__WEBPACK_IMPORTED_MODULE_2__.kl.forRoot({layoutOptions:{default:{appearance:"outline",floatLabel:"always"},select:{showSearch:!1}}})),(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.importProvidersFrom)(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.XK)]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[ngx_dynamic_json_form_core__WEBPACK_IMPORTED_MODULE_6__.T$]})]};code=[{type:"input",key:"fullName",label:"Full Name",required:!0,containerClassName:"col-4"},{type:"input",inputType:"email",key:"email",label:"Email Address",required:!0,containerClassName:"col-4"},{type:"input",inputType:"tel",key:"phone",label:"Phone Number",containerClassName:"col-4"},{type:"input",key:"country",label:"Country",options:[{label:"Country 1",value:"1"},{label:"Country 2",value:"2"},{label:"Country 3",value:"3"}],showSearch:!0,showEmptyOption:!0,containerClassName:"col-4"},{type:"select",key:"language",label:"Languages",options:[{label:"Language 1",value:"1"},{label:"Language 2",value:"2"},{label:"Language 3",value:"3"}],showSearch:!0,multiple:!0,containerClassName:"col-4"},{type:"html",content:'<h2 class="push-top-xl">Company information</h2>',containerClassName:"col-12"},{type:"input",key:"companyName",label:"Company Name",required:!0,containerClassName:"col-4"},{type:"input",key:"companyWebsite",label:"Email Address",required:!0,containerClassName:"col-4"},{type:"html",content:'<h3 class="push-top-lg">Company Addresses</h3>',containerClassName:"col-12"},{type:"multi-row",key:"companyAddresses",rowWrapperClassName:"ndf-fx-row-wrap gap",containerClassName:"col-12",addButtonOnlyLast:!0,deleteButtonRow:!0,fields:[{key:"type",type:"select",label:"Type",containerClassName:"col-2 no-grid",options:[{label:"Private",value:"1"},{label:"Business",value:"2"}],showEmptyOption:!0},{key:"streetNo",type:"input",label:"Street, No.",containerClassName:"auto no-grid"},{key:"zipCode",type:"input",label:"ZIP",containerClassName:"col-2   no-grid"},{key:"country",type:"input",label:"City",containerClassName:"col-3 no-grid"}]},{type:"html",content:'<h2 class="push-top-xl">Change Password</h2>',containerClassName:"col-12"},{type:"input",key:"passwordOld",inputType:"password",label:"Old Password",required:!0,containerClassName:"col-4",placeholder:"**********"},{type:"input",key:"passwordNew",inputType:"password",label:"New Password",required:!0,containerClassName:"col-4",placeholder:"**********"},{type:"input",key:"passwordConfirm",inputType:"password",label:"Confirm Password",required:!0,containerClassName:"col-4",placeholder:"**********"}];const one={name:"Standard",args:{fields:code},parameters:{docs:{source:{language:"jsx",code:`<div class="ndf-container push-top-xl form-container">\n<div class="ndf-container-row">\n  <div class="ndf-form-field col-10">\n    <h1>Account Settings</h1>\n    <p><small>Some very nice placeholder</small></p>\n  </div>\n\n  <div class="ndf-form-field col-2 align-right">\n    <button (click)="submit()" color="primary" mat-raised-button>Save</button>\n  </div>\n</div>\n\n<div class="push-top-xl">\n  <ngx-dynamic-json-form\n    [fields]='${_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.c.format(code)}'\n  ></ngx-dynamic-json-form>\n</div>\n\n</div>`}}}},__WEBPACK_DEFAULT_EXPORT__=meta},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const core_client_1=__webpack_require__("@storybook/core-client"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,core_client_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./projects/lib-material/src/stories/examples/register.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_register_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/lib-material/src/stories/examples/register.stories.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Examples and Guides/Registration Form"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"registration-form",children:"Registration Form"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The following example is a real life example of a styled dynamic form."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"registration-form",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"ndf-container push-top-xl form-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"ndf-container-row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"ndf-form-field col-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1",{children:"Account Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("small",{children:"Some very nice placeholder"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"ndf-form-field col-2 align-right",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button",{className:"mat-mdc-tooltip-trigger mdc-button mdc-button--raised mat-mdc-raised-button my-test mat-primary mat-mdc-button-base",type:"button",tabIndex:"0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"mat-mdc-button-persistent-ripple mdc-button__ripple"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"mdc-button__label",children:" Save "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"mat-mdc-focus-indicator"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"mat-ripple mat-mdc-button-ripple"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"mat-mdc-button-touch-target"})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"push-top-xl",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_register_stories__WEBPACK_IMPORTED_MODULE_2__.one})})]})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);