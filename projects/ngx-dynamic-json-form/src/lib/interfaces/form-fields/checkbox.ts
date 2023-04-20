import { BasicCallbacks, FormFieldBasics } from './base';

/**
 * The DynamicFormFieldCheckbox Interface.
 *
 * @export
 * @interface DynamicFormFieldCheckbox
 * @extends {FormFieldBasics}
 * @extends {BasicCallbacks}
 */
export interface DynamicFormFieldCheckbox extends FormFieldBasics, BasicCallbacks {
  /**
   * @override
   * @inheritdoc
   */
  type: 'checkbox';
}
