import { importProvidersFrom } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { NgxDynamicJsonFormModule } from 'ngx-dynamic-json-form-core';
import {
  NgxDynamicJsonFormMaterialComponent,
  NgxDynamicJsonFormMaterialModule,
} from 'ngx-dynamic-json-form-material';
import { delay, of as ObservableOf } from 'rxjs';

import { Utils } from '../helpers/utils';

import type { MatInput } from 'ngx-dynamic-json-form-material';
import type { Meta } from '@storybook/angular';

/////////////////////////////////////////////////////////////////////////////////////////
// Config Meta and Auto Args - Start
/////////////////////////////////////////////////

const title: string = 'Examples and Guides/Change';
const form: {
  change: FormGroup<any>;
  click: FormGroup<any>;
  loadData: FormGroup<any>;
  loadData2: FormGroup<any>;
} = {
  change: new FormGroup({}),
  click: new FormGroup({}),
  loadData: new FormGroup({}),
  loadData2: new FormGroup({}),
};
function setForm(instance: any, type: 'change' | 'click' | 'loadData' | 'loadData2'): void {
  form[type] = instance;
}

/////////////////////////////////////////////////
// Config Meta and Auto Args - End
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
// DON'T CHANGE ANYTHING BELOW
/////////////////////////////////////////////////

const meta: Meta<NgxDynamicJsonFormMaterialComponent> = {
  title,
  component: NgxDynamicJsonFormMaterialComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(NgxDynamicJsonFormMaterialModule.forRoot()),
        importProvidersFrom(MatNativeDateModule),
      ],
    }),
    moduleMetadata({ imports: [NgxDynamicJsonFormModule] }),
  ],
};

/////////////////////////////////////////////////////////////////////////////////////////
// Define Stories - Start
/////////////////////////////////////////////////

// Story 1
export const Change: any = (args: any) => {
  args.setForm = setForm;
  args.fields = [
    {
      type: 'select',
      key: 'type',
      label: 'Type',
      showEmptyOption: true,
      showEmptyOptionText: 'Please choose',
      options: [
        { label: 'Language', value: '1' },
        { label: 'Food', value: '2' },
        { label: 'Fruit', value: '3' },
      ],
      showSearch: false,
      onChange() {
        if (form.change?.get('type')?.value === '1') {
          form.change?.get('language')?.enable();
        } else {
          form.change?.get('language')?.disable();
        }
      },
    },
    {
      type: 'select',
      key: 'language',
      label: 'Languages',
      options: [
        { label: 'Language 1', value: '1' },
        { label: 'Language 2', value: '2' },
        { label: 'Language 3', value: '3' },
      ],
      disabled: true,
    },
  ];
  args.formClassName = 'ndf-fx-row ndf-fx-gap-16';

  return {
    props: args,
    template: `<ngx-dynamic-json-form [fields]="fields" [formClassName]="formClassName" (getForm)="setForm($event, 'change')"></ngx-dynamic-json-form>`,
  };
};

// Story 2
export const Click: any = (args: any) => {
  args.setForm = setForm;
  args.fields = [
    {
      type: 'select',
      key: 'language2',
      label: 'Languages',
      options: [
        { label: 'Language 1', value: '1' },
        { label: 'Language 2', value: '2' },
        { label: 'Language 3', value: '3' },
      ],
    },
    {
      type: 'button',
      variant: 'mat-raised-button',
      buttonText: 'Submit',
      buttonColor: 'primary',
      onClick() {
        alert(Utils.format(form.click.getRawValue()));
      },
    },
  ];
  args.formClassName = 'ndf-fx-row ndf-fx-gap-16';

  return {
    props: args,
    template: `<ngx-dynamic-json-form [fields]="fields" [formClassName]="formClassName" (getForm)="setForm($event, 'click')"></ngx-dynamic-json-form>`,
  };
};

// Story 3
export const LoadData: any = (args: any) => {
  args.setForm = setForm;
  args.fields = [
    {
      type: 'select',
      key: 'type3',
      label: 'Type',
      showEmptyOption: true,
      showEmptyOptionText: 'Please choose',
      options: [
        { label: 'Language', value: '1' },
        { label: 'Food', value: '2' },
        { label: 'Fruit', value: '3' },
      ],
      showSearch: false,
      onChange() {
        let options: any[] = [];
        let label: string = 'Choose type first';
        form.loadData?.get('anyKey')?.disable();
        form.loadData?.get('anyKey')?.patchValue(null);

        switch (form.loadData?.get('type3')?.value) {
          case '1':
            label = 'Language';
            options = [
              { label: 'Language 1', value: '1' },
              { label: 'Language 2', value: '2' },
              { label: 'Language 3', value: '3' },
              { label: 'Language 4', value: '3' },
            ];
            break;
          case '2':
            label = 'Food';
            options = [
              { label: 'Food 1', value: '1' },
              { label: 'Food 2', value: '2' },
              { label: 'Food 3', value: '3' },
              { label: 'Food 4', value: '3' },
            ];
            break;
          case '3':
            label = 'Fruit';
            options = [
              { label: 'Fruit 1', value: '1' },
              { label: 'Fruit 2', value: '2' },
              { label: 'Fruit 3', value: '3' },
              { label: 'Fruit 4', value: '3' },
            ];
            break;

          default:
            args.fields[1] = {
              ...args.fields[1],
              label,
              options,
            };
            return;
        }

        ObservableOf(options)
          .pipe(delay(500))
          .subscribe((options) => {
            args.fields[1] = {
              ...args.fields[1],
              label,
              options,
            };
            form.loadData?.get('anyKey')?.enable();
          });
      },
    },
    {
      type: 'select',
      key: 'anyKey',
      label: 'Choose type first',
      options: [],
      disabled: true,
    },
  ];
  args.formClassName = 'ndf-fx-row ndf-fx-gap-16';

  return {
    props: args,
    template: `<ngx-dynamic-json-form [fields]="fields" [formClassName]="formClassName" (getForm)="setForm($event, 'loadData')"></ngx-dynamic-json-form>`,
  };
};

// Story 4
export const LoadDataBefore: any = (args: any) => {
  args.fields = ObservableOf([
    {
      type: 'select',
      key: 'language4',
      label: 'Languages',
      options: [
        { label: 'Language 1', value: '1' },
        { label: 'Language 2', value: '2' },
        { label: 'Language 3', value: '3' },
      ],
    },
  ]).pipe(delay(2000));
  args.formClassName = 'ndf-fx-row ndf-fx-gap-16';

  return {
    props: args,
    template: `<ng-container *ngIf="fields | async as data; else loading">
  <ngx-dynamic-json-form [fields]="data" [formClassName]="formClassName"></ngx-dynamic-json-form>
</ng-container>
<ng-template #loading>loading data...</ng-template>`,
  };
};

// Story 5
export const PasswordToggle: any = (args: any) => {
  let hidePasswordDefault = true;
  args.fields = [
    {
      type: 'input',
      key: 'passwordNew',
      inputType: 'password',
      label: 'New Password',
      required: true,
      containerClassName: 'col-4',
      placeholder: '**********',
      suffixIcon: 'visibility_off',
      onSuffixClick: () => {
        hidePasswordDefault = !hidePasswordDefault;

        const field: MatInput = args.fields[0] as MatInput;

        if (!!field) {
          field.suffixIcon = `visibility${hidePasswordDefault ? '_off' : ''}`;
          field.inputType = `${hidePasswordDefault ? 'password' : 'text'}`;
        }
      },
      clearButton: false,
    },
  ];

  return {
    props: args,
    template: `<ngx-dynamic-json-form [fields]="fields"></ngx-dynamic-json-form>`,
  };
};
/////////////////////////////////////////////////
// Define Stories - End
/////////////////////////////////////////////////////////////////////////////////////////

export default meta;
