import {
  FormField as FormFieldOriginal,
  FormFieldType as FormFieldTypeOriginal,
} from 'ngx-dynamic-json-form-core';

import {
  MatAutocomplete,
  MatButton,
  MatCheckbox,
  MatContainer,
  MatDatepicker,
  MatInput,
  MatMultiAutocomplete,
  MatMultiCheckbox,
  MatMultiRow,
  MatRadioButton,
  MatSelect,
  MatSlider,
  MatSlideToggle,
  MatTextarea,
} from '../interfaces';

export type FormFieldType = FormFieldTypeOriginal;

export type FormField =
  | FormFieldOriginal
  | MatAutocomplete
  | MatButton
  | MatCheckbox
  | MatContainer
  | MatDatepicker
  | MatInput
  | MatMultiAutocomplete
  | MatMultiCheckbox
  | MatMultiRow
  | MatRadioButton
  | MatSelect
  | MatSlider
  | MatSlideToggle
  | MatTextarea;
