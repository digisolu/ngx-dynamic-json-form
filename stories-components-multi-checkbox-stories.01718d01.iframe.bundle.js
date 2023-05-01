"use strict";(self.webpackChunkngx_dynamic_json_form_common=self.webpackChunkngx_dynamic_json_form_common||[]).push([[361],{"./projects/lib-material/src/stories/components/multi-checkbox.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{base:()=>base,default:()=>__WEBPACK_DEFAULT_EXPORT__,one:()=>one,two:()=>two});var _angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_material_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/material/fesm2020/core.mjs"),ngx_dynamic_json_form_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/lib-core/fesm2015/ngx-dynamic-json-form-core.mjs"),ngx_dynamic_json_form_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/lib-material/fesm2015/ngx-dynamic-json-form-material.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_helpers_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/lib-material/src/stories/helpers/utils.ts");const defaultKey="multiCheckboxKey";let code=`{\n  "key": '${defaultKey}',\n  "type": 'multi-checkbox',\n  "options": [/* any options */],\n}`;const model=new class Model{constructor(){this.showSelectAll=!0,this.showSelectAllText="",this.color="primary",this.togglePosition="before",this.type="multi-checkbox",this.options=[],this.required=!1,this.validators=[],this.nonNullable=!1,this.asyncValidators=[],this.updateOn="change",this.disabled=!1,this.tabIndex=0,this.label="",this.key="",this.className="",this.containerClassName="",this.formFieldClassName="",this.messages={},this.appearance="fill",this.clearButton=!0,this.floatLabel="always",this.hideBorder=!0,this.hideLabel=!0,this.hideRequiredMarker=!0,this.hintAlign="start",this.hintCount=!0,this.hintCountAlign="start",this.hintLabel="",this.hintText="",this.matFormFieldClassName="",this.prefixClassName="",this.prefixIcon="",this.prefixText="",this.subscriptSizing="fixed",this.suffixClassName="",this.suffixIcon="",this.suffixText=""}onBlur(){throw new Error("Method not implemented.")}onFocus(){throw new Error("Method not implemented.")}onChange(){throw new Error("Method not implemented.")}onPrefixClick(){throw new Error("Method not implemented.")}onSuffixClick(){throw new Error("Method not implemented.")}},argTypes={..._helpers_utils__WEBPACK_IMPORTED_MODULE_1__.c.getArgTypesDefault(),..._helpers_utils__WEBPACK_IMPORTED_MODULE_1__.c.getArgTypes("MatMultiCheckbox","multi-checkbox",model,"")},meta={title:"Components/Multi Checkbox",component:ngx_dynamic_json_form_material__WEBPACK_IMPORTED_MODULE_2__.QS,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(ngx_dynamic_json_form_material__WEBPACK_IMPORTED_MODULE_2__.kl.forRoot())]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[ngx_dynamic_json_form_core__WEBPACK_IMPORTED_MODULE_4__.T$,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.XK]})],tags:["autodocs"],argTypes,render:args=>_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.c.getUpdatedArgs(args,model,"")},base={name:"BaseComponent",..._helpers_utils__WEBPACK_IMPORTED_MODULE_1__.c.getBaseStory(defaultKey,"multi-checkbox",code,{required:!0,label:"Clothes",floatLabel:"always",options:[{value:"1",label:"Boots"},{value:"2",label:"Clogs"},{value:"3",disabled:!0,label:"Loafers"},{value:"4",label:"Moccasins"},{value:"5",label:"Sneakers"}],..._helpers_utils__WEBPACK_IMPORTED_MODULE_1__.c.getBasicCallbacksDefaults(),..._helpers_utils__WEBPACK_IMPORTED_MODULE_1__.c.geMatFormFieldCallbacksDefaults()})};code=[{...base.args?.fields?.[0]||{}},{...base.args?.fields?.[0]||{},key:`${defaultKey}Outline`,appearance:"outline"},{...base.args?.fields?.[0]||{},key:`${defaultKey}Plain`,appearance:"outline",hideBorder:!0,hideLabel:!0,subscriptSizing:"dynamic"}];const one={name:"Standard",args:{fields:code},parameters:{docs:{source:{code:_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.c.format(code)}}}};code=[{...base.args?.fields?.[0]||{},disabled:!0},{...base.args?.fields?.[0]||{},key:`${defaultKey}Outline`,appearance:"outline",disabled:!0},{...base.args?.fields?.[0]||{},key:`${defaultKey}Plain`,appearance:"outline",hideBorder:!0,hideLabel:!0,subscriptSizing:"dynamic",disabled:!0}];const two={name:"Disabled",args:{fields:code,initial:{[defaultKey]:["2"],[`${defaultKey}Outline`]:["2"],[`${defaultKey}Plain`]:["2"]}},parameters:{docs:{source:{code:_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.c.format(code)}}}},__WEBPACK_DEFAULT_EXPORT__=meta},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const core_client_1=__webpack_require__("@storybook/core-client"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,core_client_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})}}]);