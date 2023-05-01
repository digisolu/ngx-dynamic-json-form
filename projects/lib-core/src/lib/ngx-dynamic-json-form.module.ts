import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ContainerComponent, FormFieldComponent } from './components';
import { CustomErrorDirective, LoadCustomComponentDirective } from './directives';

/**
 * The main Module of the NgxDynamicJsonForm.
 *
 * @export
 * @class NgxDynamicJsonFormModule
 */
@NgModule({
  declarations: [
    ContainerComponent,
    FormFieldComponent,
    LoadCustomComponentDirective,
    CustomErrorDirective,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ReactiveFormsModule, FormFieldComponent, CustomErrorDirective],
})
export class NgxDynamicJsonFormModule {}
