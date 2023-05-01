import { BasicCallbacks, BasicOption, FormFieldBasics } from './base';

/**
 * The DynamicFormFieldMultiCheckbox Interface.
 *
 * @export
 * @interface DynamicFormFieldMultiCheckbox
 * @extends {FormFieldBasics}
 * @extends {BasicCallbacks}
 */
export interface DynamicFormFieldMultiCheckbox extends FormFieldBasics, BasicCallbacks {
  /**
   * @override
   * @inheritdoc
   */
  type: 'multi-checkbox';

  /**
   * The options array.
   *
   * @type {(GroupOption[] | BasicOption[])}
   * @memberof DynamicFormFieldAutocomplete
   */
  options: BasicOption[];
}
