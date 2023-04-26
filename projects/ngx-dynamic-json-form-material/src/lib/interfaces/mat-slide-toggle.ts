import { DynamicFormFieldSlideToggle } from '@ngx-dynamic-json-form/core';

import { MatFormField } from './mat-form-field';

import type { ThemePalette } from '@angular/material/core';

/**
 * The MatSlideToggle Interface to extend the Default Interface with Material Design specific properties.
 *
 * @export
 * @interface MatSlideToggle
 * @extends {DynamicFormFieldSlideToggle}
 * @extends {MatFormField}
 */
export interface MatSlideToggle extends DynamicFormFieldSlideToggle, MatFormField {
  /**
   * The material color palette value.
   * Possible color palette values are: 'primary' | 'accent' | 'warn' | undefined
   *
   * @type {ThemePalette}
   * @memberof MatSlideToggle
   */
  color?: ThemePalette;
}
