import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-dynamic-json-form/material';

import { Utils } from '../../utils';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent implements OnInit {
  public fields: FormField[][] = [
    [
      {
        type: 'container',
        rowWrapperClassName: 'newsletter',
        containerClassName: 'wrapper',
        fields: [
          {
            type: 'html',
            content: '<h2>Register to Newsletter</h2>',
          },
          {
            type: 'container',
            rowWrapperClassName: 'ndf-fx-row ndf-fit-content',
            fields: [
              {
                key: 'mail',
                type: 'input',
                label: 'Mail',
              },
              {
                type: 'button',
                variant: 'mat-raised-button',
                buttonText: 'Send',
                buttonColor: 'primary',
              },
            ],
          },
        ],
      },
    ],
  ];

  public files: Array<{ path: string; content?: string }> = [
    { path: 'components/container/container.component.html' },
    { path: 'components/container/container.component.scss' },
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
