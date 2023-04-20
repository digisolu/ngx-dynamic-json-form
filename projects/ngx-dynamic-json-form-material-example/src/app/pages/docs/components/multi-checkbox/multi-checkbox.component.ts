import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-dynamic-json-form/material';

import { Utils } from '../../utils';

@Component({
  selector: 'app-multi-checkbox',
  templateUrl: './multi-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiCheckboxComponent implements OnInit {
  public fields: FormField[][] = [
    [
      {
        key: 'clothes1',
        type: 'multi-checkbox',
        required: true,
        label: 'Clothes',
        floatLabel: 'always',
        options: [
          {
            value: '1',
            label: 'Boots',
          },
          {
            value: '2',
            label: 'Clogs',
          },
          {
            value: '3',
            disabled: true,
            label: 'Loafers',
          },
          {
            value: '4',
            label: 'Moccasins',
          },
          {
            value: '5',
            label: 'Sneakers',
          },
        ],
      },
    ],
    [
      {
        key: 'clothes2',
        type: 'multi-checkbox',
        required: true,
        label: 'Clothes',
        subscriptSizing: 'dynamic',
        showSelectAll: true,
        appearance: 'outline',
        floatLabel: 'always',
        options: [
          {
            value: '1',
            label: 'Boots',
          },
          {
            value: '2',
            label: 'Clogs',
          },
          {
            value: '3',
            disabled: true,
            label: 'Loafers',
          },
          {
            value: '4',
            label: 'Moccasins',
          },
          {
            value: '5',
            label: 'Sneakers',
          },
        ],
      },
    ],
    [
      {
        key: 'clothes3',
        type: 'multi-checkbox',
        required: true,
        hideBorder: true,
        hideLabel: true,
        subscriptSizing: 'dynamic',
        showSelectAll: true,
        appearance: 'outline',
        options: [
          {
            value: '1',
            label: 'Boots',
          },
          {
            value: '2',
            label: 'Clogs',
          },
          {
            value: '3',
            disabled: true,
            label: 'Loafers',
          },
          {
            value: '4',
            label: 'Moccasins',
          },
          {
            value: '5',
            label: 'Sneakers',
          },
        ],
      },
    ],
  ];

  public files: Array<{ path: string; content?: string }> = [
    { path: 'components/multi-checkbox/multi-checkbox.component.html' },
  ];

  public ngOnInit(): void {
    for (let i = 0; i < this.fields.length; i++) {
      this.codes.push([
        {
          name: 'TS',
          content: Utils.getDefaultComponentTs(this.fields[i]),
        },
      ]);

      this.form.push(new FormGroup({}));
    }
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
