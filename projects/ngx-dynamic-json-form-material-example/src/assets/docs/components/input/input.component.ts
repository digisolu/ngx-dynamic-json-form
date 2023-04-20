import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatInput } from '@ngx-dynamic-json-form/material';

// import { Utils } from '../../utils';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit {
  public fields: MatInput[][] = [
    [
      {
        key: 'age',
        type: 'input',
        inputType: 'number',
        label: 'Age',
      },
      {
        key: 'lastname',
        type: 'input',
        label: 'Lastname',
        required: true,
        appearance: 'outline',
      },
    ],
    [
      {
        key: 'amount',
        type: 'input',
        inputType: 'number',
        label: 'Amount',
        matFormFieldClassName: 'amount-label',
        className: 'amount-field',
        placeholder: '0',
        prefixText: '$',
        prefixClassName: 'pad-right-small',
        suffixText: '.00',
        floatLabel: 'always',
      },
      {
        key: 'amount2',
        type: 'input',
        inputType: 'number',
        label: 'Amount',
        matFormFieldClassName: 'amount-label',
        className: 'amount-field',
        placeholder: '0',
        prefixText: '$',
        prefixClassName: 'pad-right-small',
        suffixText: '.00',
        floatLabel: 'always',
        appearance: 'outline',
      },
    ],
    [
      {
        key: 'count',
        type: 'input',
        inputType: 'number',
        label: '',
        placeholder: '0',
        prefixIcon: 'add',
        matFormFieldClassName: 'count',
        className: 'count-field',
        prefixClassName: 'green',
        suffixIcon: 'remove',
        suffixClassName: 'red',
        floatLabel: 'always',
      },
      {
        key: 'count2',
        type: 'input',
        inputType: 'number',
        label: '',
        placeholder: '0',
        prefixIcon: 'add',
        matFormFieldClassName: 'count',
        className: 'count-field',
        prefixClassName: 'green',
        suffixIcon: 'remove',
        suffixClassName: 'red',
        floatLabel: 'always',
        appearance: 'outline',
      },
    ],
  ];

  public files: Array<{ path: string; content?: string }> = [
    { path: 'components/input/input.component.html' },
  ];

  public ngOnInit(): void {
    // for (let i = 0; i < this.fields.length; i++) {
    //   this.codes.push([
    //     {
    //       name: 'TS',
    //       content: Utils.getDefaultComponentTs(this.fields[i]),
    //     },
    //   ]);

    //   this.form.push(new FormGroup({}));
    // }
  }

  public codes: {
    name: string;
    content: string;
  }[][] = [];

  public form: FormGroup[] = [];

  public setForm(form: FormGroup, index: number): void {
    this.form[index] = form;
  }
}
