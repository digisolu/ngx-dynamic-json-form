import { AbstractFormFieldComponent } from '../components/base/base.abstract';
import { BaseField } from './form-fields';

export interface Components<T extends BaseField> {
  [key: string]: typeof AbstractFormFieldComponent<T>;
}
