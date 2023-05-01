import { ValidatorFn } from '@angular/forms';

import { FormFieldType } from '../../types';
import { AsyncValidatorFn } from '@angular/forms';

/**
 * The BaseField Interface.
 *
 * @export
 * @interface BaseField
 */
export interface BaseField {
  /**
   * The form field type to identify the form field.
   *
   * @type {FormFieldType}
   * @memberof BaseField
   */
  type: FormFieldType;

  /**
   * The object key to set / read the current value of the form field.
   * Not available for:
   * - buttons
   * - html
   * - container
   *
   * @type {string}
   * @memberof BaseField
   */
  key?: string;

  /**
   * An additional class name for the form-field input, select etc.
   *
   * @type {string}
   * @memberof BaseField
   */
  className?: string;

  /**
   * An additional class name for the form-field container wrapper.
   *
   * @type {string}
   * @memberof BaseField
   */
  containerClassName?: string;

  /**
   * An additional class name for the form-field itself.
   *
   * @type {string}
   * @memberof BaseField
   */
  formFieldClassName?: string;

  /**
   * An object to pass messages for errors / hints etc.
   *
   * @type {{ [key: string]: string }}
   * @memberof BaseField
   */
  messages?: { [key: string]: string };
}

/**
 * The FormFieldBasics Interface.
 *
 * @export
 * @interface FormFieldBasics
 * @extends {BaseField}
 */
export interface FormFieldBasics extends BaseField {
  /**
   * Is the form field required?
   *
   * @type {boolean}
   * @memberof FormFieldBasics
   */
  required?: boolean;

  /**
   * If this property is false or not set, the default value of a FormControl is null.
   * When a FormControl is reset without a value, the value will be set to its default value.
   *
   * @type {boolean}
   * @memberof FormFieldBasics
   */
  nonNullable?: boolean;

  /**
   * An array to pass Validators.
   *
   * @type {ValidatorFn[]}
   * @memberof FormFieldBasics
   */
  validators?: ValidatorFn[];

  /**
   * An array to pass AsyncValidatorFn.
   *
   * @type {AsyncValidatorFn[]}
   * @memberof FormFieldBasics
   */
  asyncValidators?: AsyncValidatorFn[];

  /**
   * When will be the FormControl gets updated?
   * Possible values are: 'change' | 'blur' | 'submit'
   *
   * @type {('change' | 'blur' | 'submit')}
   * @memberof FormFieldBasics
   */
  updateOn?: 'change' | 'blur' | 'submit';

  /**
   * Is the form field disabled?
   *
   * @type {boolean}
   * @memberof FormFieldBasics
   */
  disabled?: boolean;

  /**
   * The tab index of the form field.
   *
   * @type {number}
   * @memberof FormFieldBasics
   */
  tabIndex?: number;

  /**
   * The label text.
   *
   * @type {string}
   * @memberof FormFieldBasics
   */
  label?: string;
}

/**
 * The BasicCallbacks Interface.
 *
 * @export
 * @interface BasicCallbacks
 */
export interface BasicCallbacks {
  /**
   * A callback for on blur.
   * Not available for:
   * - checkboxes
   * - radio buttons
   * - slide toggle
   *
   * @param {*} value
   * @memberof BasicCallbacks
   */
  onBlur?(value: any): void;

  /**
   * A callback for on focus.
   * Not available for:
   * - checkboxes
   * - radio buttons
   * - slide toggle
   *
   * @param {*} value
   * @memberof BasicCallbacks
   */
  onFocus?(value: any): void;

  /**
   * A callback for on change.
   *
   * @param {*} value
   * @memberof BasicCallbacks
   */
  onChange?(value: any): void;
}

/**
 * The BasicOption Interface.
 *
 * @export
 * @interface BasicOption
 */
export interface BasicOption {
  /**
   * The value of the option.
   *
   * @type {*}
   * @memberof BasicOption
   */
  value?: any;

  /**
   * The visible text of the option.
   *
   * @type {string}
   * @memberof BasicOption
   */
  label: string;

  /**
   * Is the option disabled?
   *
   * @type {boolean}
   * @memberof BasicOption
   */
  disabled?: boolean;
}

/**
 * The GroupOption Interface.
 *
 * @export
 * @interface GroupOption
 * @extends {BasicOption}
 */
export interface GroupOption extends BasicOption {
  /**
   * An array of BasicOptions.
   *
   * @type {BasicOption[]}
   * @memberof GroupOption
   */
  group?: BasicOption[];
}
