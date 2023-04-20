import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-dynamic-json-form/material';

import { Utils } from '../../utils';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent implements OnInit {
  public fields: FormField[][] = [
    [
      {
        type: 'container',
        rowWrapperClassName: 'ndf-fx-column ndf-fx-space',
        fields: [
          {
            key: 'termsAccepted',
            type: 'checkbox',
            vertical: true,
            label: 'Agree to Terms and Conditions',
            hideBorder: true,
            hideLabel: true,
            required: true,
            subscriptSizing: 'dynamic',
          },
          {
            key: 'privacyPolicyAccepted',
            type: 'checkbox',
            vertical: true,
            label: 'Agree to Privacy Policy',
            hideBorder: true,
            hideLabel: true,
            required: true,
            subscriptSizing: 'dynamic',
          },
        ],
      },
    ],
    [
      {
        type: 'container',
        rowWrapperClassName: 'ndf-fx-column ndf-fx-space ndf-fx-gap-16',
        fields: [
          {
            key: 'termsAcceptedOutline',
            type: 'checkbox',
            vertical: true,
            label: 'Agree to Terms and Conditions',
            hideLabel: true,
            required: true,
            subscriptSizing: 'dynamic',
            appearance: 'outline',
            floatLabel: 'always',
          },
          {
            key: 'privacyPolicyAcceptedOutline',
            type: 'checkbox',
            vertical: true,
            label: 'Agree to Privacy Policy',
            hideLabel: true,
            required: true,
            subscriptSizing: 'dynamic',
            appearance: 'outline',
            floatLabel: 'always',
          },
        ],
      },
    ],
    [
      {
        type: 'container',
        rowWrapperClassName: 'ndf-fx-column ndf-fx-space',
        fields: [
          {
            key: 'termsAcceptePlain',
            type: 'checkbox',
            vertical: true,
            label: 'Agree to Terms and Conditions',
            hideLabel: true,
            hideBorder: true,
            required: true,
            subscriptSizing: 'dynamic',
            appearance: 'outline',
            floatLabel: 'always',
          },
          {
            key: 'privacyPolicyAcceptePlain',
            type: 'checkbox',
            vertical: true,
            label: 'Agree to Privacy Policy',
            hideLabel: true,
            hideBorder: true,
            required: true,
            subscriptSizing: 'dynamic',
            appearance: 'outline',
            floatLabel: 'always',
          },
        ],
      },
    ],
  ];

  public files: Array<{ path: string; content?: string }> = [
    { path: 'components/checkbox/checkbox.component.html' },
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
