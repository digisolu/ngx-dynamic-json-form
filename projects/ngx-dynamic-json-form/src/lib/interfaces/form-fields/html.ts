import { BaseField } from './base';

/**
 * The DynamicFormFieldHTML Interface.
 *
 * @export
 * @interface DynamicFormFieldHTML
 * @extends {BaseField}
 */
export interface DynamicFormFieldHTML extends BaseField {
  /**
   * @override
   * @inheritdoc
   */
  type: 'html';

  /**
   * The HTML to get rendered.
   *
   * @type {string}
   * @memberof DynamicFormFieldHTML
   */
  content: string;
}
