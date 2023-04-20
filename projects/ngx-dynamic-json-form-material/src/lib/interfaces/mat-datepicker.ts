import { DynamicFormFieldDatepicker } from '@ngx-dynamic-json-form/core';

import { MatFormField } from './mat-form-field';

/**
 * The MatDatepicker Interface to extend the Default Interface with Material Design specific properties.
 *
 * @export
 * @interface MatDatepicker
 * @extends {DynamicFormFieldDatepicker}
 * @extends {MatFormField}
 */
export interface MatDatepicker extends DynamicFormFieldDatepicker, MatFormField {
  /**
   * Should the datepicker open automatically after clicking or tabbing into the field?
   *
   * @type {boolean}
   * @memberof MatDatepicker
   */
  openWhenActive?: boolean;
}
