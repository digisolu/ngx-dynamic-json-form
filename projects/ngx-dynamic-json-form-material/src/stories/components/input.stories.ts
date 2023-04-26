import { importProvidersFrom } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxDynamicJsonFormModule } from '@ngx-dynamic-json-form/core';
import {
  NgxDynamicJsonFormMaterialComponent,
  NgxDynamicJsonFormMaterialModule,
} from '@ngx-dynamic-json-form/material';
import { applicationConfig, moduleMetadata } from '@storybook/angular';

import { Utils } from '../helpers/utils';

import type { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import type {
  FloatLabelType,
  MatFormFieldAppearance,
  SubscriptSizing,
} from '@angular/material/form-field';
import type { MatInput } from '@ngx-dynamic-json-form/material';
import type { Meta, StoryObj } from '@storybook/angular';

type Story = StoryObj<NgxDynamicJsonFormMaterialComponent>;

/////////////////////////////////////////////////////////////////////////////////////////
// Config Meta and Auto Args - Start
/////////////////////////////////////////////////

const title: string = 'Components/Input';
const interfaceName: string = 'MatInput';
const componentName: string = 'input';
const defaultKey: string = `${componentName}Key`;
let code: any = `{
  "key": '${defaultKey}',
  "type": '${componentName}',
}`;

class Model implements MatInput {
  type = 'input' as const;
  inputType?:
    | 'number'
    | 'text'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'password'
    | 'search'
    | 'tel'
    | 'time'
    | 'url'
    | 'week'
    | undefined = 'text';
  maxLength?: number | undefined = 0;
  readonly?: boolean | undefined = true;
  placeholder?: string | undefined = '';

  required?: boolean | undefined = true;
  validators?: ValidatorFn[] | undefined = [];
  nonNullable?: boolean = false;
  asyncValidators?: AsyncValidatorFn[] = [];
  updateOn?: 'change' | 'blur' | 'submit' = 'change';
  disabled?: boolean | undefined = true;
  tabIndex?: number | undefined = 0;
  label?: string | undefined = '';
  key?: string | undefined = '';
  className?: string | undefined = '';
  containerClassName?: string | undefined = '';
  formFieldClassName?: string | undefined = '';
  messages?: { [key: string]: string } | undefined = {};

  onBlur?(): void {
    throw new Error('Method not implemented.');
  }
  onFocus?(): void {
    throw new Error('Method not implemented.');
  }
  onChange?(): void {
    throw new Error('Method not implemented.');
  }

  appearance?: MatFormFieldAppearance | undefined = 'fill';
  clearButton?: boolean | undefined = true;
  floatLabel?: FloatLabelType | undefined = 'always';
  hideBorder?: boolean | undefined = true;
  hideLabel?: boolean | undefined = true;
  hideRequiredMarker?: boolean | undefined = true;
  hintAlign?: 'start' | 'end' | undefined = 'start';
  hintCount?: boolean | undefined = true;
  hintCountAlign?: 'start' | 'end' | undefined = 'start';
  hintLabel?: string | undefined = '';
  hintText?: string | undefined = '';
  matFormFieldClassName?: string | undefined = '';
  prefixClassName?: string | undefined = '';
  prefixIcon?: string | undefined = '';
  prefixText?: string | undefined = '';
  subscriptSizing?: SubscriptSizing | undefined = 'fixed';
  suffixClassName?: string | undefined = '';
  suffixIcon?: string | undefined = '';
  suffixText?: string | undefined = '';
  onPrefixClick?(): void {
    throw new Error('Method not implemented.');
  }
  onSuffixClick?(): void {
    throw new Error('Method not implemented.');
  }
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
  ...Utils.getArgTypes(interfaceName, componentName, model, ''),
};

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
  tags: ['autodocs'],
  argTypes,
  render: (args) => Utils.getUpdatedArgs(args, model, ''),
};

/////////////////////////////////////////////////////////////////////////////////////////
// Define Stories - Start
/////////////////////////////////////////////////
export const base: Story = {
  name: 'BaseComponent',
  ...Utils.getBaseStory<MatInput>(defaultKey, componentName, code, {
    label: 'Name',
    required: true,

    ...Utils.getBasicCallbacksDefaults(),
    ...Utils.geMatFormFieldCallbacksDefaults(),
  }),
};

// Story 1
code = [
  {
    ...(base.args?.fields?.[0] || {}),
  },
  {
    ...(base.args?.fields?.[0] || {}),
    key: `${defaultKey}Outline`,
    appearance: 'outline',
  },
];
export const one: Story = {
  name: 'Standard',
  args: { fields: code as MatInput[] },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story 2
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
  },
];
export const two: Story = {
  name: 'Disabled',
  args: {
    fields: code as MatInput[],
    initial: { [defaultKey]: 'Lorem Ipsum', [`${defaultKey}Outline`]: 'Lorem Ipsum' },
  },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story 3
code = [
  {
    ...(base.args?.fields?.[0] || {}),
    readonly: true,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    key: `${defaultKey}Outline`,
    appearance: 'outline',
    readonly: true,
  },
];
export const three: Story = {
  name: 'Readonly',
  args: {
    fields: code as MatInput[],
    initial: { [defaultKey]: 'Lorem Ipsum', [`${defaultKey}Outline`]: 'Lorem Ipsum' },
  },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story x
code = [
  {
    ...(base.args?.fields?.[0] || {}),
    inputType: 'number',
    label: 'Amount',
    matFormFieldClassName: 'amount-label',
    className: 'amount-field',
    placeholder: '0',
    prefixText: '$',
    prefixClassName: 'pad-right-small',
    suffixText: '.00',
    floatLabel: 'always',
    clearButton: false,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    key: `${defaultKey}Outline`,
    appearance: 'outline',
    inputType: 'number',
    label: 'Amount',
    matFormFieldClassName: 'amount-label',
    className: 'amount-field',
    placeholder: '0',
    prefixText: '$',
    prefixClassName: 'pad-right-small',
    suffixText: '.00',
    floatLabel: 'always',
    clearButton: false,
  },
  {
    ...(base.args?.fields?.[0] || {}),
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
    clearButton: false,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    key: `${defaultKey}Outline`,
    appearance: 'outline',
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
    clearButton: false,
  },
];
export const x: Story = {
  name: 'Advanced Examples',
  args: { fields: code as MatInput[] },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

/////////////////////////////////////////////////
// Define Stories - End
/////////////////////////////////////////////////////////////////////////////////////////

export default meta;
