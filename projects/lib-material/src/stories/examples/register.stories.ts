import { importProvidersFrom } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { NgxDynamicJsonFormModule } from 'ngx-dynamic-json-form-core';
import {
  NgxDynamicJsonFormMaterialComponent,
  NgxDynamicJsonFormMaterialModule,
} from 'ngx-dynamic-json-form-material';

import { Utils } from '../helpers/utils';

import type { DynamicFormFieldHTML } from 'ngx-dynamic-json-form-core';
import type { Meta, StoryObj } from '@storybook/angular';

type Story = StoryObj<NgxDynamicJsonFormMaterialComponent>;

/////////////////////////////////////////////////////////////////////////////////////////
// Config Meta and Auto Args - Start
/////////////////////////////////////////////////

const title: string = 'Examples and Guides/Register';
let code: any = ``;

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
        provideAnimations(),
        importProvidersFrom(
          NgxDynamicJsonFormMaterialModule.forRoot({
            layoutOptions: {
              default: {
                appearance: 'outline',
                floatLabel: 'always',
              },
              select: {
                showSearch: false,
              },
            },
          })
        ),
        importProvidersFrom(MatNativeDateModule),
      ],
    }),
    moduleMetadata({ imports: [NgxDynamicJsonFormModule] }),
  ],
  // tags: ['autodocs'],
  // excludeStories: ['one'],
  // argTypes,
  // render: (args) => Utils.getUpdatedArgs(args, model, ''),
};

/////////////////////////////////////////////////////////////////////////////////////////
// Define Stories - Start
/////////////////////////////////////////////////

// Story
code = [
  {
    type: 'input',
    key: 'fullName',
    label: 'Full Name',
    required: true,
    containerClassName: 'col-4',
  },
  {
    type: 'input',
    inputType: 'email',
    key: 'email',
    label: 'Email Address',
    required: true,
    containerClassName: 'col-4',
  },
  {
    type: 'input',
    inputType: 'tel',
    key: 'phone',
    label: 'Phone Number',
    containerClassName: 'col-4',
  },
  {
    type: 'input',
    key: 'country',
    label: 'Country',
    options: [
      { label: 'Country 1', value: '1' },
      { label: 'Country 2', value: '2' },
      { label: 'Country 3', value: '3' },
    ],
    showSearch: true,
    showEmptyOption: true,
    containerClassName: 'col-4',
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
    showSearch: true,
    multiple: true,
    containerClassName: 'col-4',
  },

  {
    type: 'html',
    content: '<h2 class="push-top-xl">Company information</h2>',
    containerClassName: 'col-12',
  },
  {
    type: 'input',
    key: 'companyName',
    label: 'Company Name',
    required: true,
    containerClassName: 'col-4',
  },
  {
    type: 'input',
    key: 'companyWebsite',
    label: 'Email Address',
    required: true,
    containerClassName: 'col-4',
  },
  {
    type: 'html',
    content: '<h3 class="push-top-lg">Company Addresses</h3>',
    containerClassName: 'col-12',
  },
  {
    type: 'multi-row',
    key: 'companyAddresses',
    rowWrapperClassName: 'ndf-fx-row-wrap gap',
    containerClassName: 'col-12',
    addButtonOnlyLast: true,
    deleteButtonRow: true,
    fields: [
      {
        key: 'type',
        type: 'select',
        label: 'Type',
        containerClassName: 'col-2 no-grid',
        options: [
          { label: 'Private', value: '1' },
          { label: 'Business', value: '2' },
        ],
        showEmptyOption: true,
      },
      {
        key: 'streetNo',
        type: 'input',
        label: 'Street, No.',
        containerClassName: 'auto no-grid',
      },
      {
        key: 'zipCode',
        type: 'input',
        label: 'ZIP',
        containerClassName: 'col-2   no-grid',
      },
      {
        key: 'country',
        type: 'input',
        label: 'City',
        containerClassName: 'col-3 no-grid',
      },
    ],
  },
  {
    type: 'html',
    content: '<h2 class="push-top-xl">Change Password</h2>',
    containerClassName: 'col-12',
  },
  {
    type: 'input',
    key: 'passwordOld',
    inputType: 'password',
    label: 'Old Password',
    required: true,
    containerClassName: 'col-4',
    placeholder: '**********',
  },
  {
    type: 'input',
    key: 'passwordNew',
    inputType: 'password',
    label: 'New Password',
    required: true,
    containerClassName: 'col-4',
    placeholder: '**********',
  },
  {
    type: 'input',
    key: 'passwordConfirm',
    inputType: 'password',
    label: 'Confirm Password',
    required: true,
    containerClassName: 'col-4',
    placeholder: '**********',
  },
];
export const one: Story = {
  name: 'Standard',
  args: { fields: code as DynamicFormFieldHTML[] },
  parameters: {
    docs: {
      source: {
        language: 'jsx',
        code: `<div class="ndf-container push-top-xl form-container">
<div class="ndf-container-row">
  <div class="ndf-form-field col-10">
    <h1>Account Settings</h1>
    <p><small>Some very nice placeholder</small></p>
  </div>

  <div class="ndf-form-field col-2 align-right">
    <button (click)="submit()" color="primary" mat-raised-button>Save</button>
  </div>
</div>

<div class="push-top-xl">
  <ngx-dynamic-json-form
    [fields]='${Utils.format(code)}'
  ></ngx-dynamic-json-form>
</div>

</div>`,
      },
    },
  },
};

/////////////////////////////////////////////////
// Define Stories - End
/////////////////////////////////////////////////////////////////////////////////////////

export default meta;
