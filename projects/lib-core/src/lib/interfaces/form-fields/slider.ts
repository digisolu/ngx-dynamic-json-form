import { FormFieldBasics } from './base';

/**
 * The DynamicFormFieldSlider Interface
 *
 * @export
 * @interface DynamicFormFieldSlider
 * @extends {FormFieldBasics}
 */
export interface DynamicFormFieldSlider extends FormFieldBasics {
  /**
   * @override
   * @inheritdoc
   */
  type: 'slider' | 'slider-range';

  /**
   * Max value of the slider.
   *
   * @type {number}
   * @memberof DynamicFormFieldSlider
   */
  max?: number;

  /**
   * Min value of the slider.
   *
   * @type {number}
   * @memberof DynamicFormFieldSlider
   */
  min?: number;

  /**
   * The step size of the slider.
   *
   * @type {number}
   * @memberof DynamicFormFieldSlider
   */
  step?: number;

  /**
   * A callback after the slider was changed.
   *
   * @param {*} value
   * @memberof DynamicFormFieldSlider
   */
  onChange?(value: any): void;
}
