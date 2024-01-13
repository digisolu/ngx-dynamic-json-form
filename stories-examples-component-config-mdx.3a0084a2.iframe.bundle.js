"use strict";(self.webpackChunkngx_dynamic_json_form_common=self.webpackChunkngx_dynamic_json_form_common||[]).push([[614],{"./projects/lib-material/src/stories/examples/component-config.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_helpers_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/lib-material/src/stories/helpers/utils.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Examples and Guides/Component Configurations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"component-configurations",children:"Component Configurations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Sometimes you need to override some layout options for one specific component."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You need to add the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"NgxDynamicJsonFormService"})," as a provider in your component. Then you can override the needed options with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"overrideLayoutOptions()"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-typescript",children:'@Component({\n  selector: "app-my-custom-component",\n  templateUrl: "./my-custom-component.component.html",\n  styleUrls: ["./my-custom-component.component.scss"],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  encapsulation: ViewEncapsulation.None,\n  providers: [NgxDynamicJsonFormService], // <-- Add the NgxDynamicJsonFormService here\n})\nexport class myCustomComponent implements OnInit {\n  public constructor(private _ngxdynamicJsonFormService: NgxDynamicJsonFormService) {}\n\n  public ngOnInit(): void {\n    // override the layout options for this component only\n    this._ngxdynamicJsonFormService.overrideLayoutOptions({\n      default: {\n        appearance: "outline",\n        floatLabel: "always",\n      },\n      select: {\n        showSearch: false,\n      },\n    });\n  }\n}\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default-values",children:"Default Values"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"layoutoptions",children:"layoutOptions"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"These are the default values for all Material Design Components."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{code:_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.c.getClassProperty("ConfigDefaults","MATERIAL_OPTIONS").defaultValue,dark:"true",language:"typescript",type:"code"})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);