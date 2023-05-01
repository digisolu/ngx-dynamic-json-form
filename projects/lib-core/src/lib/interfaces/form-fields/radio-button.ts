import { BasicCallbacks, BasicOption, FormFieldBasics } from './base';

/**
 * The DynamicFormFieldRadioButton Interface.
 *
 * @export
 * @interface DynamicFormFieldRadioButton
 * @extends {FormFieldBasics}
 * @extends {BasicCallbacks}
 */
export interface DynamicFormFieldRadioButton extends FormFieldBasics, BasicCallbacks {
  /**
   * @override
   * @inheritdoc
   */
  type: 'radio-button';

  /**
   * The radio button group name.
   *
   * @type {string}
   * @memberof DynamicFormFieldRadioButton
   */
  name?: string;

  /**
   * The options array.
   *
   * @type {BasicOption[]}
   * @memberof DynamicFormFieldRadioButton
   */
  options: BasicOption[];
}
