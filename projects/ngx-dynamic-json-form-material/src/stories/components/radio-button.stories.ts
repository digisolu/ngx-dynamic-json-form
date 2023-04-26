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
import type { GroupOption } from '@ngx-dynamic-json-form/core';
import type { BasicOption, MatRadioButton } from '@ngx-dynamic-json-form/material';
import type { Observable } from 'rxjs';

import type { Meta, StoryObj } from '@storybook/angular';
import type { ThemePalette } from '@angular/material/core';

type Story = StoryObj<NgxDynamicJsonFormMaterialComponent>;

/////////////////////////////////////////////////////////////////////////////////////////
// Config Meta and Auto Args - Start
/////////////////////////////////////////////////

const title: string = 'Components/Radio Button';
const interfaceName: string = 'MatRadioButton';
const componentName: string = 'radio-button';
const defaultKey: string = `radioButtonKey`;
let code: any = `{
  "key": '${defaultKey}',
  "type": '${componentName}',
  "options": [/* any options */],
}`;

class Model implements MatRadioButton {
  type = 'radio-button' as const;
  options: Array<
    BasicOption & {
      color?: ThemePalette;
      labelPosition?: 'before' | 'after';
    }
  > = [];
  vertical?: boolean = true;
  readonly?: boolean = true;
  required?: boolean | undefined = false;
  validators?: ValidatorFn[] | undefined = [];
  nonNullable?: boolean = false;
  asyncValidators?: AsyncValidatorFn[] = [];
  updateOn?: 'change' | 'blur' | 'submit' = 'change';
  disabled?: boolean | undefined = false;
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
  onFilter$?(searchTerm: string): Observable<GroupOption[]>;

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
      providers: [importProvidersFrom(NgxDynamicJsonFormMaterialModule.forRoot())],
    }),
    moduleMetadata({ imports: [NgxDynamicJsonFormModule, MatNativeDateModule] }),
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
  ...Utils.getBaseStory<MatRadioButton>(defaultKey, componentName, code, {
    required: true,
    label: 'Choose color',
    name: 'colorGroup',
    floatLabel: 'always',
    options: [
      {
        value: '1',
        disabled: false,
        label: 'Red',
      },
      {
        value: '2',
        disabled: false,
        label: 'White',
      },
      {
        value: '3',
        disabled: true,
        label: 'Green',
      },
      {
        value: '4',
        disabled: false,
        label: 'Blue',
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
    name: 'colorGroupOutline',
    key: `${defaultKey}Outline`,
    appearance: 'outline',
  },
  {
    ...(base.args?.fields?.[0] || {}),
    name: 'colorGroupPlain',
    key: `${defaultKey}Plain`,
    appearance: 'outline',
    hideBorder: true,
    subscriptSizing: 'dynamic',
  },
];
export const one: Story = {
  name: 'Standard',
  args: { fields: code as MatRadioButton[] },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story 2
code = [
  { ...(base.args?.fields?.[0] || {}), hideLabel: true },
  {
    ...(base.args?.fields?.[0] || {}),
    name: 'colorGroupOutline',
    key: `${defaultKey}Plain`,
    appearance: 'outline',
    hideLabel: true,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    name: 'colorGroupPlain',
    key: `${defaultKey}Plain`,
    appearance: 'outline',
    hideBorder: true,
    hideLabel: true,
    subscriptSizing: 'dynamic',
  },
];
export const two: Story = {
  name: 'Compact',
  args: { fields: code as MatRadioButton[] },
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
    name: 'colorGroupOutline',
    key: `${defaultKey}Outline`,
    appearance: 'outline',
    disabled: true,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    name: 'colorGroupPlain',
    key: `${defaultKey}Plain`,
    appearance: 'outline',
    hideBorder: true,
    disabled: true,
    subscriptSizing: 'dynamic',
  },
];
export const three: Story = {
  name: 'Disabled',
  args: {
    fields: code as MatRadioButton[],
    initial: {
      [defaultKey]: '2',
      [`${defaultKey}Outline`]: '2',
      [`${defaultKey}Plain`]: '2',
    },
  },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story 4
code = [
  {
    ...(base.args?.fields?.[0] || {}),
    readonly: true,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    name: 'colorGroupOutline',
    key: `${defaultKey}Outline`,
    appearance: 'outline',
    readonly: true,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    name: 'colorGroupPlain',
    key: `${defaultKey}Plain`,
    appearance: 'outline',
    hideBorder: true,
    readonly: true,
    subscriptSizing: 'dynamic',
  },
];
export const four: Story = {
  name: 'Readonly',
  args: {
    fields: code as MatRadioButton[],
    initial: {
      [defaultKey]: '2',
      [`${defaultKey}Outline`]: '2',
      [`${defaultKey}Plain`]: '2',
    },
  },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story 5
code = [
  {
    ...(base.args?.fields?.[0] || {}),
    vertical: true,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    name: 'colorGroupOutline',
    key: `${defaultKey}Outline`,
    appearance: 'outline',
    vertical: true,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    name: 'colorGroupPlain',
    key: `${defaultKey}Plain`,
    appearance: 'outline',
    hideBorder: true,
    vertical: true,
    subscriptSizing: 'dynamic',
  },
];
export const five: Story = {
  name: 'Vertical',
  args: {
    fields: code as MatRadioButton[],
    initial: {
      [defaultKey]: '2',
      [`${defaultKey}Outline`]: '2',
      [`${defaultKey}Plain`]: '2',
    },
  },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

/////////////////////////////////////////////////
// Define Stories - End
/////////////////////////////////////////////////////////////////////////////////////////

export default meta;
