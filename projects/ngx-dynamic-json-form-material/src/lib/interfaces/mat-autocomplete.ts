import { DynamicFormFieldAutocomplete } from '@ngx-dynamic-json-form/core';

import { MatFormField } from './mat-form-field';

/**
 * The MatAutocomplete Interface to extend the Default Interface with Material Design specific properties.
 *
 * @export
 * @interface MatAutocomplete
 * @extends {DynamicFormFieldAutocomplete}
 * @extends {MatFormField}
 */
export interface MatAutocomplete extends DynamicFormFieldAutocomplete, MatFormField {}
