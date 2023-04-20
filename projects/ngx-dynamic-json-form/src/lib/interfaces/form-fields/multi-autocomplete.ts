import { DynamicFormFieldAutocomplete } from './autocomplete';

/**
 * The DynamicFormFieldMultiAutocomplete Interface.
 *
 * @export
 * @interface DynamicFormFieldMultiAutocomplete
 * @extends {DynamicFormFieldAutocomplete}
 */
export interface DynamicFormFieldMultiAutocomplete extends DynamicFormFieldAutocomplete {
  /**
   * @override
   * @inheritdoc
   */
  type: 'multi-autocomplete';
}
