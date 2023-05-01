import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  DynamicFormConfig,
  NDF_CONFIG,
  NgxDynamicJsonFormModule,
  NgxDynamicJsonFormService,
  Utils,
} from 'ngx-dynamic-json-form-core';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import {
  AutocompleteComponent,
  ButtonComponent,
  CheckboxComponent,
  DatepickerComponent,
  DatepickerRangeComponent,
  InputComponent,
  MultiAutocompleteComponent,
  MultiCheckboxComponent,
  MultiRowComponent,
  RadioButtonComponent,
  SelectComponent,
  SliderComponent,
  SliderRangeComponent,
  SlideToggleComponent,
  TextareaComponent,
} from './components';
import { NdfMatFormFieldComponent } from './components/ndf-mat-form-field/ndf-mat-form-field.component';
import { ConfigDefaults } from './config-defaults.class';
import { MaterialModule } from './material/material.module';
import { NgxDynamicJsonFormMaterialComponent } from './ngx-dynamic-json-form-material.component';

/**
 * The Main Module.
 *
 * @export
 * @class NgxDynamicJsonFormMaterialModule
 */
@NgModule({
  declarations: [
    AutocompleteComponent,
    ButtonComponent,
    CheckboxComponent,
    DatepickerComponent,
    DatepickerRangeComponent,
    InputComponent,
    MultiAutocompleteComponent,
    MultiCheckboxComponent,
    MultiRowComponent,
    NdfMatFormFieldComponent,
    NgxDynamicJsonFormMaterialComponent,
    RadioButtonComponent,
    SelectComponent,
    SliderComponent,
    SliderRangeComponent,
    SlideToggleComponent,
    TextareaComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NgxDynamicJsonFormModule,
    MaterialModule,
    NgxMatSelectSearchModule,
  ],
  exports: [NgxDynamicJsonFormMaterialComponent, MaterialModule],
})
export class NgxDynamicJsonFormMaterialModule {
  /**
   * Creates an instance of NgxDynamicJsonFormMaterialModule.
   *
   * @param {NgxDynamicJsonFormMaterialModule} [parentModule]
   * @memberof NgxDynamicJsonFormMaterialModule
   */
  public constructor(@Optional() @SkipSelf() parentModule?: NgxDynamicJsonFormMaterialModule) {
    if (parentModule) {
      throw new Error(
        '[ngx-dynamic-json-form] NgxDynamicJsonFormMaterialModule is already loaded. Import is only allowed in the AppModule.'
      );
    }
  }

  /**
   * The forRoot method to register all default components and configs.
   *
   * @static
   * @param {DynamicFormConfig} [config]
   * @return {ModuleWithProviders<NgxDynamicJsonFormMaterialModule>}
   * @memberof NgxDynamicJsonFormMaterialModule
   */
  public static forRoot(
    config?: DynamicFormConfig
  ): ModuleWithProviders<NgxDynamicJsonFormMaterialModule> {
    return {
      ngModule: NgxDynamicJsonFormMaterialModule,
      providers: [
        {
          provide: NDF_CONFIG,
          useValue: {
            components: Utils.deepMerge(
              // Merge components
              ConfigDefaults.COMPONENTS,
              config?.components || {}
            ),
            layoutOptions: Utils.deepMerge(
              // Merge materialOptions
              ConfigDefaults.MATERIAL_OPTIONS,
              config?.layoutOptions || {}
            ),
            messages: Utils.deepMerge(
              // Merge messages
              ConfigDefaults.MESSAGES,
              config?.messages || {}
            ),
            rangeEndings: Utils.deepMerge(
              // Merge rangeEndings
              ConfigDefaults.RANGE_ENDINGS,
              config?.rangeEndings || {}
            ),
            ignoreFormControlCheck: Utils.deepMerge(
              // Merge ignoreFormControlCheck
              ConfigDefaults.IGNORE_CONTROL_CHECK,
              config?.ignoreFormControlCheck || []
            ),
            rangeFormControls: Utils.deepMerge(
              // Merge rangeFormControls
              ConfigDefaults.RANGE_CONTROLS,
              config?.rangeFormControls || []
            ),
          },
        },
        NgxDynamicJsonFormService,
      ],
    };
  }
}
