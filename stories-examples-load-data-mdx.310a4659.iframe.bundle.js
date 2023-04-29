"use strict";(self.webpackChunk_ngx_dynamic_json_form_common=self.webpackChunk_ngx_dynamic_json_form_common||[]).push([[575,184],{"./projects/ngx-dynamic-json-form-material/src/stories/examples/callback.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Change:()=>Change,Click:()=>Click,LoadData:()=>LoadData,LoadDataBefore:()=>LoadDataBefore,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),_angular_material_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/material/fesm2020/core.mjs"),_ngx_dynamic_json_form_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./dist/ngx-dynamic-json-form/fesm2015/ngx-dynamic-json-form-core.mjs"),_ngx_dynamic_json_form_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/ngx-dynamic-json-form-material/fesm2015/ngx-dynamic-json-form-material.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_helpers_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/ngx-dynamic-json-form-material/src/stories/helpers/utils.ts"),rxjs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),rxjs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/delay.js");const form={change:new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.cw({}),click:new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.cw({}),loadData:new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.cw({})};function setForm(instance,type){form[type]=instance}const meta={title:"Examples and Guides/Change",component:_ngx_dynamic_json_form_material__WEBPACK_IMPORTED_MODULE_3__.QS,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.importProvidersFrom)(_ngx_dynamic_json_form_material__WEBPACK_IMPORTED_MODULE_3__.kl.forRoot()),(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.importProvidersFrom)(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.XK)]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_ngx_dynamic_json_form_core__WEBPACK_IMPORTED_MODULE_6__.T$]})]},Change=args=>(args.setForm=setForm,args.fields=[{type:"select",key:"type",label:"Type",showEmptyOption:!0,showEmptyOptionText:"Please choose",options:[{label:"Language",value:"1"},{label:"Food",value:"2"},{label:"Fruit",value:"3"}],showSearch:!1,onChange(){"1"===form.change?.get("type")?.value?form.change?.get("language")?.enable():form.change?.get("language")?.disable()}},{type:"select",key:"language",label:"Languages",options:[{label:"Language 1",value:"1"},{label:"Language 2",value:"2"},{label:"Language 3",value:"3"}],disabled:!0}],args.formClassName="ndf-fx-row ndf-fx-gap-16",{props:args,template:'<ngx-dynamic-json-form [fields]="fields" [formClassName]="formClassName" (getForm)="setForm($event, \'change\')"></ngx-dynamic-json-form>'}),Click=args=>(args.setForm=setForm,args.fields=[{type:"select",key:"language2",label:"Languages",options:[{label:"Language 1",value:"1"},{label:"Language 2",value:"2"},{label:"Language 3",value:"3"}]},{type:"button",variant:"mat-raised-button",buttonText:"Submit",buttonColor:"primary",onClick(){alert(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.c.format(form.click.getRawValue()))}}],args.formClassName="ndf-fx-row ndf-fx-gap-16",{props:args,template:'<ngx-dynamic-json-form [fields]="fields" [formClassName]="formClassName" (getForm)="setForm($event, \'click\')"></ngx-dynamic-json-form>'}),LoadData=args=>(args.setForm=setForm,args.fields=[{type:"select",key:"type3",label:"Type",showEmptyOption:!0,showEmptyOptionText:"Please choose",options:[{label:"Language",value:"1"},{label:"Food",value:"2"},{label:"Fruit",value:"3"}],showSearch:!1,onChange(){let options=[],label="Choose type first";switch(form.loadData?.get("anyKey")?.disable(),form.loadData?.get("anyKey")?.patchValue(null),form.loadData?.get("type3")?.value){case"1":label="Language",options=[{label:"Language 1",value:"1"},{label:"Language 2",value:"2"},{label:"Language 3",value:"3"},{label:"Language 4",value:"3"}];break;case"2":label="Food",options=[{label:"Food 1",value:"1"},{label:"Food 2",value:"2"},{label:"Food 3",value:"3"},{label:"Food 4",value:"3"}];break;case"3":label="Fruit",options=[{label:"Fruit 1",value:"1"},{label:"Fruit 2",value:"2"},{label:"Fruit 3",value:"3"},{label:"Fruit 4",value:"3"}];break;default:return void(args.fields[1]={...args.fields[1],label,options})}(0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.g)(500)).subscribe((options=>{args.fields[1]={...args.fields[1],label,options},form.loadData?.get("anyKey")?.enable()}))}},{type:"select",key:"anyKey",label:"Choose type first",options:[],disabled:!0}],args.formClassName="ndf-fx-row ndf-fx-gap-16",{props:args,template:'<ngx-dynamic-json-form [fields]="fields" [formClassName]="formClassName" (getForm)="setForm($event, \'loadData\')"></ngx-dynamic-json-form>'}),LoadDataBefore=args=>(args.setForm=setForm,args.fields=(0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([{type:"select",key:"language4",label:"Languages",options:[{label:"Language 1",value:"1"},{label:"Language 2",value:"2"},{label:"Language 3",value:"3"}]}]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.g)(2e3)),args.formClassName="ndf-fx-row ndf-fx-gap-16",{props:args,template:'<ng-container *ngIf="fields | async as data; else loading">\n  <ngx-dynamic-json-form [fields]="data" [formClassName]="formClassName" (getForm)="setForm($event, \'click\')"></ngx-dynamic-json-form>\n</ng-container>\n<ng-template #loading>loading data...</ng-template>'}),__WEBPACK_DEFAULT_EXPORT__=meta},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const core_client_1=__webpack_require__("@storybook/core-client"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,core_client_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./projects/ngx-dynamic-json-form-material/src/stories/examples/load-data.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_callback_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/ngx-dynamic-json-form-material/src/stories/examples/callback.stories.ts");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Examples and Guides/Load Data from Server"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"callback-onchange-example-reload-data",children:"Callback: onChange-Example: Reload Data"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The library allows you to use several callback functions to handle most of your needs. A list of all callbacks of a component can be found in the docs of every component."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The change callback can be used for example to reload data from the server."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"my.component.ts"}),":"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-typescript",children:'@Component({\n  selector: "app-my-component",\n  templateUrl: "./my-component.component.html",\n  styleUrls: ["./my-component.component.scss"],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class MyComponent implements OnInit {\n  public form: FormGroup = new FormGroup({});\n\n  public fields: Observable<FormField[]>;\n\n  public ngOnInit(options: BasicOption[], label: string): void {\n    this.fields = this.loadData();\n  }\n\n  public loadData(): Observable<FormField[]> {\n    // your load action\n  }\n}\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"my.component.html"}),":"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<ng-container *ngIf="fields | async as data; else loading">\n  <ngx-dynamic-json-form\n    [fields]="data"\n    [formClassName]="formClassName"\n    (getForm)="setForm($event)"\n  ></ngx-dynamic-json-form>\n</ng-container>\n\n<ng-template #loading>\n  \x3c!-- your loading spinner --\x3e\n</ng-template>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_callback_stories__WEBPACK_IMPORTED_MODULE_2__.LoadDataBefore})]})}}}}]);