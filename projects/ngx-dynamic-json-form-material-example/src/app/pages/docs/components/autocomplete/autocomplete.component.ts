import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GroupOption, MatAutocomplete, MatMultiAutocomplete } from '@ngx-dynamic-json-form/material';

import { Utils } from '../../utils';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent {
  public options: GroupOption[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
    { value: '6', label: 'Option 6' },
    { value: '7', label: 'Option 7' },
    { value: '8', label: 'Option 8' },
    { value: '9', label: 'Option 9' },
    {
      label: 'Option Group Example',
      group: [
        { value: '11', label: 'Child Option 1' },
        { value: '12', label: 'Child Option 2' },
        { value: '13', label: 'Child Option 3', disabled: true },
        { value: '14', label: 'Child Option 4' },
        { value: '15', label: 'Child Option 5' },
        { value: '16', label: 'Child Option 6' },
      ],
    },
    { value: '17', label: 'Option 17' },
    { value: '18', label: 'Option 18' },
    { value: '19', label: 'Option 19' },
    { value: '20', label: 'Option 20' },
  ];

  public fields: { [key: string]: (MatAutocomplete | MatMultiAutocomplete)[] } = {
    single: [
      {
        key: 'someKey',
        type: 'autocomplete',
        label: 'My Autocompleter',
        required: true,
        showEmptyOption: true,
        showEmptyOptionText: 'Please choose',
        placeholder: 'Please choose',
        options: this.options,
        clearButton: true,
      },
    ],
    multi: [
      {
        key: 'otherKey',
        type: 'multi-autocomplete',
        label: 'My Multi-Autocompleter',
        required: true,
        showEmptyOption: true,
        showEmptyOptionText: '',
        removable: true,
        placeholder: 'Please choose',
        options: this.options,
        clearButton: true,
      },
    ],
    outlineSingle: [
      {
        key: 'someKey',
        type: 'autocomplete',
        label: 'My Autocompleter',
        required: true,
        showEmptyOption: true,
        showEmptyOptionText: 'Please choose',
        placeholder: 'Please choose',
        options: this.options,
        clearButton: true,
        appearance: 'outline',
        floatLabel: 'always',
      },
    ],
    outlineMulti: [
      {
        key: 'otherKey',
        type: 'multi-autocomplete',
        label: 'My Multi-Autocompleter',
        required: true,
        showEmptyOption: true,
        showEmptyOptionText: '',
        removable: true,
        placeholder: 'Please choose',
        options: this.options,
        clearButton: true,
        appearance: 'outline',
        floatLabel: 'always',
      },
    ],
  };

  public initialValues: { [key: string]: any } = {
    single: { autocomplete: '4' },
    multi: { multiAutocomplete: ['4', '5'] },
    outlineSingle: { autocomplete: '4' },
    outlineMulti: { multiAutocomplete: ['4', '5'] },
  };

  /** EXCLUDE-START */ public files: Array<{ path: string; content?: string }> = [
    { path: 'components/autocomplete/autocomplete.component.html' },
  ]; /** EXCLUDE-END */

  public codes: {
    [key: string]: {
      name: string;
      content: string;
    }[];
  } = {
    single: [
      {
        name: 'TS',
        content: Utils.getDefaultComponentTs(this.fields['single'], this.initialValues['single']),
      },
    ],
    multi: [
      {
        name: 'TS',
        content: Utils.getDefaultComponentTs(this.fields['multi'], this.initialValues['multi']),
      },
    ],
    outlineSingle: [
      {
        name: 'TS',
        content: Utils.getDefaultComponentTs(this.fields['single'], this.initialValues['single']),
      },
    ],
    outlineMulti: [
      {
        name: 'TS',
        content: Utils.getDefaultComponentTs(this.fields['multi'], this.initialValues['multi']),
      },
    ],
  };

  public form: { [key: string]: FormGroup } = {
    single: new FormGroup({}),
    multi: new FormGroup({}),
    outlineSingle: new FormGroup({}),
    outlineMulti: new FormGroup({}),
  };

  public setForm(form: FormGroup, type: string): void {
    this.form[type] = form;
  }
}
