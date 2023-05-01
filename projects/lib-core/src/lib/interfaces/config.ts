import { FormField, FormFieldType } from '../types';
import { Components } from './custom-components';

/**
 * The DynamicFormConfig Interface.
 *
 * @export
 * @interface DynamicFormConfig
 */
export interface DynamicFormConfig {
  /**
   * The components to register.
   *
   * @type {Components<FormField>}
   * @memberof DynamicFormConfig
   */
  components?: Components<FormField>;

  /**
   * The default layout options.
   *
   * @type {{ [key: string]: any }}
   * @memberof DynamicFormConfig
   */
  layoutOptions?: { [key: string]: any };

  /**
   * The global defined messages.
   *
   * @type {{ [key: string]: string }}
   * @memberof DynamicFormConfig
   */
  messages?: { [key: string]: string };

  /**
   * The global defined start / end names for range form fields.
   *
   * @type {{ start: string; end: string }}
   * @memberof DynamicFormConfig
   */
  rangeEndings?: { start: string; end: string };

  /**
   * Disable the form control check, for these form field types.
   *
   * @type {FormFieldType[]}
   * @memberof DynamicFormConfig
   */
  ignoreFormControlCheck?: FormFieldType[];

  /**
   * These form field types are range form controls.
   *
   * @type {FormFieldType[]}
   * @memberof DynamicFormConfig
   */
  rangeFormControls?: FormFieldType[];
}
