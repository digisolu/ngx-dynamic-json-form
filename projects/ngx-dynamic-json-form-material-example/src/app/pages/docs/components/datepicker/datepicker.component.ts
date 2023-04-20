import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDatepicker } from '@ngx-dynamic-json-form/material';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './datepicker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent {
  public fields: MatDatepicker[] = [
    {
      key: 'anyDate',
      type: 'datepicker',
      label: 'Choose a date',
    },
    {
      key: 'anyDate2',
      type: 'datepicker',
      label: 'Choose a date 2',
      appearance: 'outline',
    },
    {
      key: 'anyDateRange',
      type: 'datepicker-range',
      label: 'Choose a date',
      placeholderStart: 'Start',
      placeholderEnd: 'End',
      required: true,
    },
    {
      key: 'anyDateRange2',
      type: 'datepicker-range',
      label: 'Choose a date 2',
      appearance: 'outline',
      required: true,
    },
  ];

  public form: FormGroup = new FormGroup({});

  public setForm(form: FormGroup): void {
    this.form = form;
  }
}
