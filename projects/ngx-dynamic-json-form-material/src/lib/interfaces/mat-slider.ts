import { ThemePalette } from '@angular/material/core';
import { DynamicFormFieldSlider } from '@ngx-dynamic-json-form/core';

import { MatFormField } from './mat-form-field';

/**
 * The MatSlider Interface to extend the Default Interface with Material Design specific properties.
 *
 * @export
 * @interface MatSlider
 * @extends {DynamicFormFieldSlider}
 * @extends {MatFormField}
 */
export interface MatSlider extends DynamicFormFieldSlider, MatFormField {
  /**
   * The material color palette value.
   * Possible color palette values are: 'primary' | 'accent' | 'warn' | undefined
   *
   * @type {ThemePalette}
   * @memberof MatSlider
   */
  color?: ThemePalette;

  /**
   * Shall the slider display a discrete value?
   *
   * @type {boolean}
   * @memberof MatSlider
   */
  discrete?: boolean;

  /**
   * This method is used to format the value before it is displayed in the thumb label.
   *
   * @param {number} value
   * @return {string}
   * @memberof MatSlider
   */
  displayWith?(value: number): string;

  /**
   * Shall the tick marks being visible?
   *
   * @type {boolean}
   * @memberof MatSlider
   */
  showTickMarks?: boolean;
}
