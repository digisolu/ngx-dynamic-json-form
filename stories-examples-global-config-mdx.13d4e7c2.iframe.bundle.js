"use strict";(self.webpackChunkngx_dynamic_json_form_common=self.webpackChunkngx_dynamic_json_form_common||[]).push([[445],{"./projects/lib-material/src/stories/examples/global-config.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_micha_Desktop_dev_digisolu_ngx_dynamic_json_fom_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_helpers_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/lib-material/src/stories/helpers/utils.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",strong:"strong"},(0,_Users_micha_Desktop_dev_digisolu_ngx_dynamic_json_fom_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Examples and Guides/Global Configurations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"global-configurations",children:"Global Configurations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A lot of default configuration parameters can be set global, so there is no need to pass them every time with your JSON."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-typescript",children:'@NgModule({\n  declarations: [\n    AppComponent,\n    MyCustomFormFieldComponent,\n\n    /** Other declarations */\n  ],\n  imports: [\n    /** Other imports */\n\n    NgxDynamicJsonFormMaterialModule.forRoot({\n      components: {\n        "my-custom-form-field": MyCustomFormFieldComponent,\n      },\n      layoutOptions: {\n        default: {\n          appearance: "outline",\n          floatLabel: "always",\n        },\n        select: {\n          showSearch: false,\n        },\n      },\n    }),\n\n    /** Other imports */\n  ],\n  providers: [\n    /** Other providers */\n  ],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default-values",children:"Default Values"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"layoutoptions",children:"layoutOptions"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"These are the default values for all Material Design Components."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{code:_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.c.getClassProperty("ConfigDefaults","MATERIAL_OPTIONS").defaultValue,dark:"true",language:"typescript",type:"code"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"components",children:"components"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["These are the default values for registered ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"components"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"You can add more components e.g. custom components here."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{code:_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.c.getClassProperty("ConfigDefaults","COMPONENTS").defaultValue,dark:"true",language:"typescript",type:"code"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"messages",children:"messages"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["These are the default values for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"messages"})," used in all components e.g. error messages."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{code:_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.c.getClassProperty("ConfigDefaults","MESSAGES").defaultValue,dark:"true",language:"typescript",type:"code"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"rangeformcontrols",children:"rangeFormControls"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["These are the default values for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"rangeFormControls"}),". All components in this array are range components and are generating two Formfields."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{code:_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.c.getClassProperty("ConfigDefaults","RANGE_CONTROLS").defaultValue,dark:"true",language:"typescript",type:"code"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"rangeendings",children:"rangeEndings"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["These are the default values for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"rangeEndings"})," used in all range components e.g. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"datepicker-range"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Every range component generates two form controls, one for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"start"})," and one for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"end"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{code:_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.c.getClassProperty("ConfigDefaults","RANGE_ENDINGS").defaultValue,dark:"true",language:"typescript",type:"code"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"ignoreformcontrolcheck",children:"ignoreFormControlCheck"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["These are the default values for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ignoreFormControlCheck"}),". By default the lib checks, if a FormControl was generated."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This Check is not needed for some components like container, html etc."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{code:_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.c.getClassProperty("ConfigDefaults","IGNORE_CONTROL_CHECK").defaultValue,dark:"true",language:"typescript",type:"code"})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_micha_Desktop_dev_digisolu_ngx_dynamic_json_fom_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);