import {
  BaseField,
  DynamicFormFieldAutocomplete,
  DynamicFormFieldButton,
  DynamicFormFieldCheckbox,
  DynamicFormFieldContainer,
  DynamicFormFieldDatepicker,
  DynamicFormFieldHTML,
  DynamicFormFieldInput,
  DynamicFormFieldMultiAutocomplete,
  DynamicFormFieldMultiCheckbox,
  DynamicFormFieldMultiRow,
  DynamicFormFieldRadioButton,
  DynamicFormFieldSelect,
  DynamicFormFieldSlider,
  DynamicFormFieldSlideToggle,
} from '../interfaces/form-fields';

export type FormFieldType =
  | 'autocomplete'
  | 'button'
  | 'checkbox'
  | 'container'
  | 'datepicker'
  | 'datepicker-range'
  | 'html'
  | 'input'
  | 'multi-autocomplete'
  | 'multi-checkbox'
  | 'multi-row'
  | 'radio-button'
  | 'select'
  | 'slide-toggle'
  | 'slider-range'
  | 'slider'
  | 'textarea';

export type FormField =
  | BaseField
  | DynamicFormFieldAutocomplete
  | DynamicFormFieldButton
  | DynamicFormFieldCheckbox
  | DynamicFormFieldContainer
  | DynamicFormFieldDatepicker
  | DynamicFormFieldHTML
  | DynamicFormFieldInput
  | DynamicFormFieldMultiAutocomplete
  | DynamicFormFieldMultiCheckbox
  | DynamicFormFieldMultiRow
  | DynamicFormFieldRadioButton
  | DynamicFormFieldSelect
  | DynamicFormFieldSlider
  | DynamicFormFieldSlideToggle;
