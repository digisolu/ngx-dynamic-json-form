import { importProvidersFrom } from '@angular/core';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { MatNativeDateModule, ThemePalette } from '@angular/material/core';
import {
  FloatLabelType,
  MatFormFieldAppearance,
  SubscriptSizing,
} from '@angular/material/form-field';
import { BasicOption, NgxDynamicJsonFormModule } from '@ngx-dynamic-json-form/core';
import {
  MatMultiCheckbox,
  NgxDynamicJsonFormMaterialComponent,
  NgxDynamicJsonFormMaterialModule,
} from '@ngx-dynamic-json-form/material';
import { applicationConfig, moduleMetadata } from '@storybook/angular';

import { Utils } from '../helpers/utils';

// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import type { Meta, StoryObj } from '@storybook/angular';
type Story = StoryObj<NgxDynamicJsonFormMaterialComponent>;

/////////////////////////////////////////////////////////////////////////////////////////
// Config Meta and Auto Args - Start
/////////////////////////////////////////////////

const title: string = 'Components/Multi Checkbox';
const interfaceName: string = 'MatMultiCheckbox';
const componentName: string = 'multi-checkbox';
const defaultKey: string = `multiCheckboxKey`;
let code: any = `{
  "key": '${defaultKey}',
  "type": '${componentName}',
  "options": [/* any options */],
}`;

class Model implements MatMultiCheckbox {
  showSelectAll?: boolean = true;
  showSelectAllText?: string = '';
  color?: ThemePalette = 'primary';
  togglePosition?: 'after' | 'before' | undefined = 'before';
  type: 'multi-checkbox' = 'multi-checkbox';
  options: BasicOption[] = [];

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

  onBlur?(value: any): void {
    throw new Error('Method not implemented.');
  }
  onFocus?(value: any): void {
    throw new Error('Method not implemented.');
  }
  onChange?(value: any): void {
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
  onPrefixClick?($event: PointerEvent | MouseEvent): void {
    throw new Error('Method not implemented.');
  }
  onSuffixClick?($event: PointerEvent | MouseEvent): void {
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
  ...Utils.getBaseStory<MatMultiCheckbox>(defaultKey, componentName, code, {
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
  },
  {
    ...(base.args?.fields?.[0] || {}),
    key: `${defaultKey}Plain`,
    appearance: 'outline',
    hideBorder: true,
    hideLabel: true,
    subscriptSizing: 'dynamic',
  },
];
export const one: Story = {
  name: 'Standard',
  args: { fields: code as MatMultiCheckbox[] },
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
  {
    ...(base.args?.fields?.[0] || {}),
    key: `${defaultKey}Plain`,
    appearance: 'outline',
    hideBorder: true,
    hideLabel: true,
    subscriptSizing: 'dynamic',
    disabled: true,
  },
];
export const two: Story = {
  name: 'Disabled',
  args: {
    fields: code as MatMultiCheckbox[],
    initial: {
      [defaultKey]: ['2'],
      [`${defaultKey}Outline`]: ['2'],
      [`${defaultKey}Plain`]: ['2'],
    },
  },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

/////////////////////////////////////////////////
// Define Stories - End
/////////////////////////////////////////////////////////////////////////////////////////

export default meta;
