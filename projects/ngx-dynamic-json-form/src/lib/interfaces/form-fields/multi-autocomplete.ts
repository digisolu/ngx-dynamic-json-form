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
   * The parent interface DynamicFormFieldAutocomplete allows to types, so we need to use the correct one here.
   *
   * @override
   * @inheritdoc
   */
  type: 'multi-autocomplete';
}
