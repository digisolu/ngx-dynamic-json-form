import { FormFieldBasics } from './base';

/**
 * The DynamicFormFieldSlideToggle Interface.
 *
 * @export
 * @interface DynamicFormFieldSlideToggle
 * @extends {FormFieldBasics}
 */
export interface DynamicFormFieldSlideToggle extends FormFieldBasics {
  /**
   * @override
   * @inheritdoc
   */
  type: 'slide-toggle';

  /**
   * A callback after the selection was changed.
   *
   * @param {*} value
   * @memberof DynamicFormFieldSlideToggle
   */
  onChange?(value: any): void;
}
