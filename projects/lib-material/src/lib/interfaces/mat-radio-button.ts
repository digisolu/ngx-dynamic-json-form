import { BasicOption, DynamicFormFieldRadioButton } from 'ngx-dynamic-json-form-core';

import { MatFormField } from './mat-form-field';

import type { ThemePalette } from '@angular/material/core';

/**
 * The MatRadioButton Interface to extend the Default Interface with Material Design specific properties.
 *
 * @export
 * @interface MatRadioButton
 * @extends {DynamicFormFieldRadioButton}
 * @extends {MatFormField}
 */
export interface MatRadioButton extends DynamicFormFieldRadioButton, MatFormField {
  /**
   * The layout used to render the radio buttons.
   * true: vertical, false: horizontal
   *
   * @type {boolean}
   * @memberof MatRadioButton
   */
  vertical?: boolean;

  /**
   * The extended BasicOption options.
   *
   * @type {(Array<
   *     BasicOption & {
   *       color?: ThemePalette;
   *       labelPosition?: 'before' | 'after';
   *     }
   *   >)}
   * @memberof MatRadioButton
   */
  options: Array<
    BasicOption & {
      /**
       * The material color palette value.
       * Possible color palette values are: 'primary' | 'accent' | 'warn' | undefined
       *
       * @type {ThemePalette}
       */
      color?: ThemePalette;
      /**
       * Where should the label being positioned?
       * Possible values are 'before' | 'after'.
       *
       * @type {('before' | 'after')}
       */
      labelPosition?: 'before' | 'after';
    }
  >;
}
