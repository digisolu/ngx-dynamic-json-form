import { importProvidersFrom } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxDynamicJsonFormModule } from 'ngx-dynamic-json-form-core';
import {
  NgxDynamicJsonFormMaterialComponent,
  NgxDynamicJsonFormMaterialModule,
} from 'ngx-dynamic-json-form-material';
import { applicationConfig, moduleMetadata } from '@storybook/angular';

import { Utils } from '../helpers/utils';

import type { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import type {
  FloatLabelType,
  MatFormFieldAppearance,
  SubscriptSizing,
} from '@angular/material/form-field';
import type { MatSlideToggle } from 'ngx-dynamic-json-form-material';
import type { Meta, StoryObj } from '@storybook/angular';
import type { ThemePalette } from '@angular/material/core';

type Story = StoryObj<NgxDynamicJsonFormMaterialComponent>;

/////////////////////////////////////////////////////////////////////////////////////////
// Config Meta and Auto Args - Start
/////////////////////////////////////////////////

const title: string = 'Components/SlideToggle';
const interfaceName: string = 'MatSlideToggle';
const componentName: string = 'slide-toggle';
const defaultKey: string = `slideToggleKey`;
let code: any = `{
  "key": '${defaultKey}',
  "type": '${componentName}',
  "label": 'Any label',
}`;

class Model implements MatSlideToggle {
  color?: ThemePalette = 'primary';

  id?: string | undefined = '';
  type = 'slide-toggle' as const;
  onChange?(): void {
    throw new Error('Method not implemented.');
  }

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
  subscriptSizing?: SubscriptSizing | undefined = 'dynamic';
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
  ...Utils.getBaseStory<MatSlideToggle>(defaultKey, componentName, code, {
    key: 'active',
    label: 'Active',
    type: 'slide-toggle',
    containerClassName: 'ndf-full-width',
    required: true,
    hideLabel: true,

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
  },
];
export const one: Story = {
  name: 'Standard',
  args: { fields: code as MatSlideToggle[] },
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
    disabled: true,
  },
];
export const two: Story = {
  name: 'Disabled',
  args: { fields: code as MatSlideToggle[] },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

/////////////////////////////////////////////////
// Define Stories - End
/////////////////////////////////////////////////////////////////////////////////////////

export default meta;
