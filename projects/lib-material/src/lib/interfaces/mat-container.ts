import { DynamicFormFieldContainer } from 'ngx-dynamic-json-form-core';

import { FormField } from '../types';

/**
 * The MatContainer Interface to extend the Default Interface with Material Design specific properties.
 *
 * @export
 * @interface MatContainer
 * @extends {DynamicFormFieldContainer}
 */
export interface MatContainer extends DynamicFormFieldContainer {
  /**
   * This property is overridden, to map to the FormField of Material instead of Core.
   *
   * @override
   * @inheritdoc
   */
  fields: FormField[];
}
