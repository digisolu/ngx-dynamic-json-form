import { BaseField } from './base';

/**
 * The DynamicFormFieldButton Interface.
 *
 * @export
 * @interface DynamicFormFieldButton
 * @extends {BaseField}
 */
export interface DynamicFormFieldButton extends BaseField {
  /**
   * @override
   * @inheritdoc
   */
  type: 'button';

  /**
   * What is the type of the button.
   *
   * @type {('submit' | 'menu' | 'button' | 'reset')}
   * @memberof DynamicFormFieldButton
   */
  buttonType?: 'submit' | 'menu' | 'button' | 'reset';

  /**
   * Is the button disabled?
   *
   * @type {boolean}
   * @memberof DynamicFormFieldButton
   */
  disabled?: boolean;

  /**
   * The tab index of the button.
   *
   * @type {number}
   * @memberof DynamicFormFieldButton
   */
  tabIndex?: number;

  /**
   * The visible text of the button.
   *
   * @type {string}
   * @memberof DynamicFormFieldButton
   */
  buttonText?: string;

  /**
   * A callback after clicking the button.
   *
   * @param {(PointerEvent | MouseEvent)} $event
   * @memberof DynamicFormFieldButton
   */
  onClick?($event: PointerEvent | MouseEvent): void;
}
