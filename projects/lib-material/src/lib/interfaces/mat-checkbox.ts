import { DynamicFormFieldCheckbox } from 'ngx-dynamic-json-form-core';

import { MatFormField } from './mat-form-field';

import type { ThemePalette } from '@angular/material/core';

/**
 * The MatCheckbox Interface to extend the Default Interface with Material Design specific properties.
 *
 * @export
 * @interface MatCheckbox
 * @extends {DynamicFormFieldCheckbox}
 * @extends {MatFormField}
 */
export interface MatCheckbox extends DynamicFormFieldCheckbox, MatFormField {
  /**
   * The layout used to render the checkboxes.
   * true: vertical, false: horizontal
   *
   * @type {boolean}
   * @memberof MatCheckbox
   */
  vertical?: boolean;

  /**
   * The material color palette value.
   * Possible color palette values are: 'primary' | 'accent' | 'warn' | undefined
   *
   * @type {ThemePalette}
   * @memberof MatCheckbox
   */
  color?: ThemePalette;

  /**
   * Where should the label being positioned?
   * Possible values are 'before' | 'after'.
   *
   * @type {('before' | 'after')}
   * @memberof MatCheckbox
   */
  labelPosition?: 'before' | 'after';
}
