import { FormField } from '../../types';
import { BaseField } from './base';

/**
 * The DynamicFormFieldContainer Interface.
 *
 * @export
 * @interface DynamicFormFieldContainer
 * @extends {BaseField}
 */
export interface DynamicFormFieldContainer extends BaseField {
  /**
   * @override
   * @inheritdoc
   */
  type: 'container';

  /**
   * The FormField to get wrapped into.
   *
   * @type {FormField[]}
   * @memberof DynamicFormFieldContainer
   */
  fields: FormField[];

  /**
   * An optional class name for every row.
   *
   * @type {string}
   * @memberof DynamicFormFieldContainer
   */
  rowWrapperClassName?: string;
}
