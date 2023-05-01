import { DynamicFormFieldInput } from 'ngx-dynamic-json-form-core';

import { MatFormField } from './mat-form-field';

/**
 * The MatInput Interface to extend the Default Interface with Material Design specific properties.
 *
 * @export
 * @interface MatInput
 * @extends {DynamicFormFieldInput}
 * @extends {MatFormField}
 */
export interface MatInput extends DynamicFormFieldInput, MatFormField {}
