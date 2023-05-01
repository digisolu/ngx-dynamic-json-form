import { BasicCallbacks, FormFieldBasics } from './base';

export interface DynamicFormFieldInput extends FormFieldBasics, BasicCallbacks {
  /**
   * @override
   * @inheritdoc
   */
  type: 'input';

  /**
   * The type of the input field.
   *
   * @type {('color'
   *     | 'date'
   *     | 'datetime-local'
   *     | 'email'
   *     | 'month'
   *     | 'number'
   *     | 'password'
   *     | 'search'
   *     | 'tel'
   *     | 'text'
   *     | 'time'
   *     | 'url'
   *     | 'week')}
   * @memberof DynamicFormFieldInput
   */
  inputType?:
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';

  /**
   * The max count of letters.
   *
   * @type {number}
   * @memberof DynamicFormFieldInput
   */
  maxLength?: number;

  /**
   * Is the input field readonly?
   *
   * @type {boolean}
   * @memberof DynamicFormFieldInput
   */
  readonly?: boolean;

  /**
   * The placeholder text to be shown up.
   *
   * @type {string}
   * @memberof DynamicFormFieldInput
   */
  placeholder?: string;
}
