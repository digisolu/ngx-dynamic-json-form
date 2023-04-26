import { DynamicFormFieldMultiAutocomplete } from '@ngx-dynamic-json-form/core';

import { MatFormField } from './mat-form-field';

import type { ThemePalette } from '@angular/material/core';

/**
 * The MatMultiAutocomplete Interface to extend the Default Interface with Material Design specific properties.
 *
 * @export
 * @interface MatMultiAutocomplete
 * @extends {DynamicFormFieldMultiAutocomplete}
 * @extends {MatFormField}
 */
export interface MatMultiAutocomplete extends DynamicFormFieldMultiAutocomplete, MatFormField {
  /**
   * The material color palette value.
   * Possible color palette values are: 'primary' | 'accent' | 'warn' | undefined
   *
   * @type {ThemePalette}
   * @memberof MatMultiAutocomplete
   */
  color?: ThemePalette;

  /**
   * Are the selections being removable by clicking a x-button?
   *
   * @type {boolean}
   * @memberof MatMultiAutocomplete
   */
  removable?: boolean;
}
