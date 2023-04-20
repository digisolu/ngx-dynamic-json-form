import { action } from '@storybook/addon-actions';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { importProvidersFrom } from '@angular/core';
import { MatNativeDateModule, ThemePalette } from '@angular/material/core';
import { NgxDynamicJsonFormModule } from '@ngx-dynamic-json-form/core';
import {
  ButtonType,
  ButtonVariant,
  FormField,
  MatMultiRow,
  NgxDynamicJsonFormMaterialComponent,
  NgxDynamicJsonFormMaterialModule,
} from '@ngx-dynamic-json-form/material';
import { applicationConfig, moduleMetadata } from '@storybook/angular';

import type { Meta, StoryObj } from '@storybook/angular';
import { Utils } from '../helpers/utils';

type Story = StoryObj<NgxDynamicJsonFormMaterialComponent>;

/////////////////////////////////////////////////////////////////////////////////////////
// Config Meta and Auto Args - Start
/////////////////////////////////////////////////

const title: string = 'Components/Multi Row';
const interfaceName: string = 'MatMultiRow';
const componentName: string = 'multi-row';
const defaultKey: string = `multiCheckboxKey`;
let code: any = `{
  "key": '${defaultKey}',
  "type": '${componentName}',
  "fields": [/* any other form fields */],
}`;

class Model implements MatMultiRow {
  fields: FormField[] = [];
  addButtonOnlyLast?: boolean = true;
  addButtonRow?: boolean = true;
  addButtonClassName?: string = '';
  addButtonContainerClassName?: string = '';
  addButtonType?: ButtonType = 'button';
  addButtonVariant?: ButtonVariant = 'mat-button';
  addButtonColor?: ThemePalette = 'primary';
  addButtonIcon?: string = '';
  addButtonText?: string = '';
  addButtonTooltip?: string = '';
  deleteButtonRow?: boolean = true;
  deleteButtonClassName?: string = '';
  deleteButtonContainerClassName?: string = '';
  deleteButtonType?: ButtonType = 'button';
  deleteButtonVariant?: ButtonVariant = 'mat-button';
  deleteButtonColor?: ThemePalette = 'primary';
  deleteButtonIcon?: string = '';
  deleteButtonText?: string = '';
  deleteButtonTooltip?: string = '';

  type: 'multi-row' = 'multi-row';
  key: string = '';
  rowWrapperClassName?: string = '';
  className?: string = '';
  containerClassName?: string = '';
  formFieldClassName?: string = '';
  messages?: { [key: string]: string } = {};
}

/////////////////////////////////////////////////
// Config Meta and Auto Args - End
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
// DON'T CHANGE ANYTHING BELOW
/////////////////////////////////////////////////

const model: Model = new Model();
const argTypes: any = {
  ...Utils.getArgTypesDefault(),
  ...Utils.getArgTypes(interfaceName, componentName, model, 'f'),
};

const meta: Meta<NgxDynamicJsonFormMaterialComponent> = {
  title,
  component: NgxDynamicJsonFormMaterialComponent,
  decorators: [
    applicationConfig({ providers: [importProvidersFrom(NgxDynamicJsonFormMaterialModule.forRoot())] }),
    moduleMetadata({ imports: [NgxDynamicJsonFormModule, MatNativeDateModule] }),
  ],
  tags: ['autodocs'],
  argTypes,
  render: (args) => Utils.getUpdatedArgs(args, model, 'f'),
};

/////////////////////////////////////////////////////////////////////////////////////////
// Define Stories - Start
/////////////////////////////////////////////////
export const base: Story = {
  name: 'BaseComponent',
  ...Utils.getBaseStory<MatMultiRow>(defaultKey, componentName, code, {
    rowWrapperClassName: 'ndf-fx-row ndf-fx-gap-16',
    rowButtonContainerClassName: 'ndf-fx-row ndf-fx-gap-8 push-down',
    addButtonRow: true,
    deleteButtonRow: true,
    fields: [
      {
        key: 'street',
        type: 'input',
        label: 'Street',
        containerClassName: 'street',

        ...Utils.getBasicCallbacksDefaults(),
        ...Utils.geMatFormFieldCallbacksDefaults(),
      },
      {
        key: 'streetNo',
        type: 'input',
        label: 'Number',
        containerClassName: 'streetnumber',

        ...Utils.getBasicCallbacksDefaults(),
        ...Utils.geMatFormFieldCallbacksDefaults(),
      },
    ],

    ...Utils.getBasicCallbacksDefaults(),
    ...Utils.geMatFormFieldCallbacksDefaults(),
  }),
};

// Story 1
code = [
  { ...(base.args?.fields?.[0] || {}) },
  {
    ...(base.args?.fields?.[0] || {}),
    key: `${defaultKey}Outline`,
    appearance: 'outline',
    fields: [
      ...[...(base.args?.fields?.[0] as any)?.fields].map((field: any) => {
        field = { ...field };
        field.key = `${field.key}Outline`;
        field.appearance = 'outline';

        return field;
      }),
    ],
  },
];
export const one: Story = {
  name: 'Standard',
  args: {
    formClassName: 'ndf-fx-baseline ndf-fx-gap-16 ndf-fx-column',
    initial: {
      [defaultKey]: [{} as any],
      [`${defaultKey}Outline`]: [{}],
    },
    fields: code as MatMultiRow[],
  },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story 2
code = [
  {
    ...(base.args?.fields?.[0] || {}),
    addButtonOnlyLast: true,
    addButtonRow: false,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    key: `${defaultKey}Outline`,
    appearance: 'outline',
    addButtonOnlyLast: true,
    addButtonRow: false,
    fields: [
      ...[...(base.args?.fields?.[0] as any)?.fields].map((field: any) => {
        field = { ...field };
        field.key = `${field.key}Outline`;
        field.appearance = 'outline';

        return field;
      }),
    ],
  },
];
export const two: Story = {
  name: 'Add Button only Last Row',
  args: {
    formClassName: 'ndf-fx-baseline ndf-fx-gap-16 ndf-fx-column',
    initial: {
      [defaultKey]: [{} as any],
      [`${defaultKey}Outline`]: [{}],
    },
    fields: code as MatMultiRow[],
  },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story 3
code = [
  {
    ...(base.args?.fields?.[0] || {}),
    disabled: true,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    key: `${defaultKey}Outline`,
    appearance: 'outline',
    disabled: true,
    fields: [
      ...[...(base.args?.fields?.[0] as any)?.fields].map((field: any) => {
        field = { ...field };
        field.key = `${field.key}Outline`;
        field.appearance = 'outline';

        return field;
      }),
    ],
  },
];
export const three: Story = {
  name: 'Disabled',
  args: {
    formClassName: 'ndf-fx-baseline ndf-fx-gap-16 ndf-fx-column',
    initial: {
      [defaultKey]: [{} as any],
      [`${defaultKey}Outline`]: [{}],
    },
    fields: code as MatMultiRow[],
  },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

/////////////////////////////////////////////////
// Define Stories - End
/////////////////////////////////////////////////////////////////////////////////////////

export default meta;
