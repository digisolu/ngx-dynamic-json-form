import { FormField } from '../../types';
import { BaseField } from './base';

/**
 * The DynamicFormFieldMultiRow Interface.
 *
 * @export
 * @interface DynamicFormFieldMultiRow
 * @extends {BaseField}
 */
export interface DynamicFormFieldMultiRow extends BaseField {
  /**
   * @override
   * @inheritdoc
   */
  type: 'multi-row';

  /**
   * The FormField to get wrapped into.
   *
   * @type {FormField[]}
   * @memberof DynamicFormFieldMultiRow
   */
  fields: FormField[];

  /**
   * @override
   * @inheritdoc
   */
  key: string;

  /**
   * An optional class name for every row.
   *
   * @type {string}
   * @memberof DynamicFormFieldMultiRow
   */
  rowWrapperClassName?: string;
}
