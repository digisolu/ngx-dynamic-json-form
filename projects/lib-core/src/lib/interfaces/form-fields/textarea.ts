import { BasicCallbacks, FormFieldBasics } from './base';

/**
 * The DynamicFormFieldTextarea Interface.
 *
 * @export
 * @interface DynamicFormFieldTextarea
 * @extends {FormFieldBasics}
 * @extends {BasicCallbacks}
 */
export interface DynamicFormFieldTextarea extends FormFieldBasics, BasicCallbacks {
  /**
   * @override
   * @inheritdoc
   */
  type: 'textarea';

  /**
   * The number of visible cols.
   *
   * @type {number}
   * @memberof DynamicFormFieldTextarea
   */
  cols?: number;

  /**
   * The number of visible rows.
   *
   * @type {number}
   * @memberof DynamicFormFieldTextarea
   */
  rows?: number;

  /**
   * The number of max letters.
   *
   * @type {number}
   * @memberof DynamicFormFieldTextarea
   */
  maxLength?: number;

  /**
   * Is the textarea readonly?
   *
   * @type {boolean}
   * @memberof DynamicFormFieldTextarea
   */
  readonly?: boolean;

  /**
   * The placeholder text to be shown up.
   *
   * @type {string}
   * @memberof DynamicFormFieldTextarea
   */
  placeholder?: string;
}
