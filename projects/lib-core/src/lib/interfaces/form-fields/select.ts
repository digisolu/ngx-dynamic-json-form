import { BasicCallbacks, FormFieldBasics, GroupOption } from './base';

/**
 * The DynamicFormFieldSelect Interface.
 *
 * @export
 * @interface DynamicFormFieldSelect
 * @extends {FormFieldBasics}
 * @extends {BasicCallbacks}
 */
export interface DynamicFormFieldSelect extends FormFieldBasics, BasicCallbacks {
  /**
   * @override
   * @inheritdoc
   */
  type: 'select';

  /**
   * Shall a empty option be inserted?
   *
   * @type {GroupOption[]}
   * @memberof DynamicFormFieldSelect
   */
  options: GroupOption[];

  /**
   * The visible text used as option.
   *
   * @type {boolean}
   * @memberof DynamicFormFieldSelect
   */
  showEmptyOption?: boolean;

  /**
   * The visible text used as option.
   *
   * @type {string}
   * @memberof DynamicFormFieldSelect
   */
  showEmptyOptionText?: string;

  /**
   * Is the select field a multiple select field?
   *
   * @type {boolean}
   * @memberof DynamicFormFieldSelect
   */
  multiple?: boolean;

  /**
   * The placeholder text to be shown up.
   *
   * @type {boolean}
   * @memberof DynamicFormFieldAutocomplete
   */
  placeholder?: string;
}
