import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GroupOption, MatSelect } from '@ngx-dynamic-json-form/material';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
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

  public fields: MatSelect[] = [
    {
      key: 'someKey',
      type: 'select',
      label: 'My Select',
      required: true,
      showEmptyOption: true,
      showEmptyOptionText: 'Please choose',
      placeholder: 'Please choose',
      options: this.options,
    },
    {
      key: 'someKey2',
      type: 'select',
      label: 'My Select 2',
      required: true,
      showEmptyOption: true,
      showEmptyOptionText: 'Please choose',
      placeholder: 'Please choose',
      options: this.options,
      multiple: true,
      showSelectAll: true,
    },
  ];

  public form: FormGroup = new FormGroup({});

  public setForm(form: FormGroup): void {
    this.form = form;
  }
}
