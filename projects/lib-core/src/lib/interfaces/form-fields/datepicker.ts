import { BasicCallbacks, FormFieldBasics } from './base';

/**
 * The DynamicFormFieldDatepicker Interface.
 *
 * @export
 * @interface DynamicFormFieldDatepicker
 * @extends {FormFieldBasics}
 * @extends {BasicCallbacks}
 */
export interface DynamicFormFieldDatepicker extends FormFieldBasics, BasicCallbacks {
  /**
   * @override
   * @inheritdoc
   */
  type: 'datepicker' | 'datepicker-range';

  /**
   * Is the datepicker readonly?
   *
   * @type {boolean}
   * @memberof DynamicFormFieldDatepicker
   */
  readonly?: boolean;

  /**
   * The placeholder text to be shown up. (Single)
   *
   * @type {string}
   * @memberof DynamicFormFieldDatepicker
   */
  placeholder?: string;

  /**
   * The start placeholder text to be shown up. (Multi)
   *
   * @type {string}
   * @memberof DynamicFormFieldDatepicker
   */
  placeholderStart?: string;

  /**
   * The end placeholder text to be shown up. (Multi)
   *
   * @type {string}
   * @memberof DynamicFormFieldDatepicker
   */
  placeholderEnd?: string;

  /**
   * A callback after clicking into the datepicker input field.
   *
   * @param {*} value
   * @memberof DynamicFormFieldDatepicker
   */
  onClick?(value: any): void;
}
