import { AbstractFormFieldComponent } from '../components/base/base.abstract';
import { BaseField } from './form-fields';

/**
 * This interface represents all registered and allowed components.
 * It's also used to register custom components.
 *
 * @export
 * @interface Components
 * @template T
 */
export interface Components<T extends BaseField> {
  /**
   * Key is the FormFieldType and value is the component itself.
   *
   * @type {{ [key: string]: typeof AbstractFormFieldComponent<T> }}
   * @memberof Components
   */
  [key: string]: typeof AbstractFormFieldComponent<T>;
}
