import { DynamicFormFieldTextarea } from '@ngx-dynamic-json-form/core';

import { MatFormField } from './mat-form-field';

/**
 * The MatTextarea Interface to extend the Default Interface with Material Design specific properties.
 *
 * @export
 * @interface MatTextarea
 * @extends {DynamicFormFieldTextarea}
 * @extends {MatFormField}
 */
export interface MatTextarea extends DynamicFormFieldTextarea, MatFormField {
  /**
   * Maximum amount of rows in the textarea used in the material CDK.
   *
   * @type {number}
   * @memberof MatTextarea
   */
  autosizeMaxRows?: number;

  /**
   * Minimum amount of rows in the textarea used in the material CDK.
   *
   * @type {number}
   * @memberof MatTextarea
   */
  autosizeMinRows?: number;

  /**
   * Shall the textarea using auto sizing?
   *
   * @type {boolean}
   * @memberof MatTextarea
   */
  autosize?: boolean;
}
