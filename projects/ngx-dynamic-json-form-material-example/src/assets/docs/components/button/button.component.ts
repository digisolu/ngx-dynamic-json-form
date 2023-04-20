import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-dynamic-json-form/material';

// import { Utils } from '../../utils';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  public fields: FormField[][] = [
    [
      {
        type: 'container',
        rowWrapperClassName: 'ndf-fx-row ndf-fx-center ndf-fx-space ndf-fx-gap-16 ndf-fit-content',
        fields: [
          {
            type: 'button',
            variant: 'mat-button',
            buttonText: 'Basic Button',
            buttonColor: 'primary',
          },
          {
            type: 'button',
            variant: 'mat-raised-button',
            buttonText: 'Raised Button',
            buttonColor: 'accent',
          },
          {
            type: 'button',
            variant: 'mat-stroked-button',
            buttonText: 'Stroked Button',
            buttonColor: 'warn',
          },
          {
            type: 'button',
            variant: 'mat-flat-button',
            buttonText: 'Flat Button',
          },
        ],
      },
    ],
    [
      {
        type: 'container',
        rowWrapperClassName: 'ndf-fx-row ndf-fx-center ndf-fx-space ndf-fx-gap-16 ndf-fit-content',
        fields: [
          {
            type: 'button',
            variant: 'mat-icon-button',
            buttonIcon: 'favorite',
            buttonColor: 'primary',
          },
          {
            type: 'button',
            variant: 'mat-fab',
            buttonIcon: 'favorite',
            buttonColor: 'accent',
          },
          {
            type: 'button',
            variant: 'mat-mini-fab',
            buttonIcon: 'favorite',
            buttonColor: 'warn',
          },
        ],
      },
    ],
    [
      {
        type: 'container',
        rowWrapperClassName: 'ndf-fx-row ndf-fx-center ndf-fx-space ndf-fx-gap-16 ndf-fit-content',
        fields: [
          {
            type: 'button',
            variant: 'mat-fab-extended',
            buttonText: 'add',
            buttonIcon: 'favorite',
            buttonColor: 'primary',
          },
          {
            type: 'button',
            variant: 'mat-button',
            buttonText: 'add',
            buttonIcon: 'favorite',
            buttonColor: 'primary',
          },
          {
            type: 'button',
            variant: 'mat-raised-button',
            buttonText: 'add',
            buttonIcon: 'favorite',
            buttonColor: 'accent',
          },
          {
            type: 'button',
            variant: 'mat-stroked-button',
            buttonText: 'add',
            buttonIcon: 'favorite',
            buttonColor: 'warn',
          },
          {
            type: 'button',
            variant: 'mat-flat-button',
            buttonText: 'add',
            buttonIcon: 'favorite',
          },
        ],
      },
    ],
  ];

  public files: Array<{ path: string; content?: string }> = [
    { path: 'components/button/button.component.html' },
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

  public getOptions(options: string[]): string {
    return options.map((value) => `<option value="${value}">${value}</option>`).join('');
  }
}
