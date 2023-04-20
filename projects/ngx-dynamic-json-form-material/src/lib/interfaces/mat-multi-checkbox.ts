import { ThemePalette } from '@angular/material/core';
import { DynamicFormFieldMultiCheckbox } from '@ngx-dynamic-json-form/core';

import { MatFormField } from './mat-form-field';

/**
 * The MatMultiCheckbox Interface to extend the Default Interface with Material Design specific properties.
 *
 * @export
 * @interface MatMultiCheckbox
 * @extends {DynamicFormFieldMultiCheckbox}
 * @extends {MatFormField}
 */
export interface MatMultiCheckbox extends DynamicFormFieldMultiCheckbox, MatFormField {
  /**
   * Shall a select all option being available?
   *
   * @type {boolean}
   * @memberof MatMultiCheckbox
   */
  showSelectAll?: boolean;

  /**
   * The text for the select all option.
   *
   * @type {string}
   * @memberof MatMultiCheckbox
   */
  showSelectAllText?: string;

  /**
   * The material color palette value.
   * Possible color palette values are: 'primary' | 'accent' | 'warn' | undefined
   *
   * @type {ThemePalette}
   * @memberof MatMultiCheckbox
   */
  color?: ThemePalette;

  /**
   * Where should be the checkbox being placed?
   * Possible values are: 'before' | 'after'
   *
   * @type {('before' | 'after')}
   * @memberof MatMultiCheckbox
   */
  togglePosition?: 'before' | 'after';
}
