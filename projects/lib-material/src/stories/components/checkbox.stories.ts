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
import type { MatCheckbox } from 'ngx-dynamic-json-form-material';
import type { Meta, StoryObj } from '@storybook/angular';
import type { ThemePalette } from '@angular/material/core';

type Story = StoryObj<NgxDynamicJsonFormMaterialComponent>;

/////////////////////////////////////////////////////////////////////////////////////////
// Config Meta and Auto Args - Start
/////////////////////////////////////////////////

const title: string = 'Components/Checkbox';
const interfaceName: string = 'MatCheckbox';
const componentName: string = 'checkbox';
const defaultKey: string = `${componentName}Key`;
let code: any = `{
  "key": '${defaultKey}',
  "type": '${componentName}',
  "label": 'Any Label text',
}`;

class Model implements MatCheckbox {
  vertical?: boolean | undefined = true;
  color?: ThemePalette = 'primary';
  labelPosition?: 'before' | 'after' | undefined = 'after';
  type = 'checkbox' as const;
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
  ...Utils.getArgTypes(interfaceName, componentName, model),
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
  render: (args) => Utils.getUpdatedArgs(args, model),
};

/////////////////////////////////////////////////////////////////////////////////////////
// Define Stories - Start
/////////////////////////////////////////////////
export const base: Story = {
  name: 'BaseComponent',
  ...Utils.getBaseStory<MatCheckbox>(defaultKey, componentName, code, {
    label: 'Agree to Terms and Conditions',
    hideBorder: true,
    hideLabel: true,
    appearance: 'outline',

    ...Utils.getBasicCallbacksDefaults(),
    ...Utils.geMatFormFieldCallbacksDefaults(),
  }),
};

// Story 1
code = [
  {
    ...(base.args?.fields?.[0] || {}),
    key: 'termsAccepted',
    label: 'Agree to Terms and Conditions',
    appearance: 'fill',
    hideBorder: undefined,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    key: 'termsAcceptedOutline',
    label: 'Agree to Terms and Conditions',
    hideBorder: undefined,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    key: 'termsAcceptedPlain',
    label: 'Agree to Terms and Conditions',
    hideBorder: true,
  },
];
export const one: Story = {
  name: 'Standard',
  args: { fields: code as MatCheckbox[] },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story 2
code = [
  {
    ...(base.args?.fields?.[0] || {}),
    key: 'termsAccepted',
    label: 'Agree to Terms and Conditions',
    appearance: 'fill',
    hideBorder: undefined,
    disabled: true,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    key: 'termsAcceptedOutline',
    label: 'Agree to Terms and Conditions',
    hideBorder: undefined,
    disabled: true,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    key: 'termsAcceptedPlain',
    label: 'Agree to Terms and Conditions',
    hideBorder: true,
    disabled: true,
  },
];
export const two: Story = {
  name: 'Disabled',
  args: { fields: code as MatCheckbox[] },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story 3
code = [
  {
    ...(base.args?.fields?.[0] || {}),
    key: 'termsAccepted',
    label: 'Agree to Terms and Conditions',
    appearance: 'fill',
    hideBorder: undefined,
    required: true,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    key: 'termsAcceptedOutline',
    label: 'Agree to Terms and Conditions',
    hideBorder: undefined,
    required: true,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    key: 'termsAcceptedPlain',
    label: 'Agree to Terms and Conditions',
    hideBorder: true,
    required: true,
  },
];
export const three: Story = {
  name: 'Required',
  args: { fields: code as MatCheckbox[] },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story 4
code = [
  {
    type: 'container',
    rowWrapperClassName: 'ndf-fx-column ndf-fx-space',
    fields: [
      {
        ...(base.args?.fields?.[0] || {}),
        key: 'termsAccepted',
        vertical: true,
        label: 'Agree to Terms and Conditions',
        required: true,
        appearance: 'fill',
      },
      {
        ...(base.args?.fields?.[0] || {}),
        key: 'privacyPolicyAccepted',
        vertical: true,
        label: 'Agree to Privacy Policy',
        required: true,
        appearance: 'fill',
      },
    ],
  },
  {
    type: 'container',
    rowWrapperClassName: 'ndf-fx-column ndf-fx-space',
    fields: [
      {
        ...(base.args?.fields?.[0] || {}),
        key: 'termsAcceptedOutline',
        vertical: true,
        label: 'Agree to Terms and Conditions',
        required: true,
        hideBorder: undefined,
      },
      {
        ...(base.args?.fields?.[0] || {}),
        key: 'privacyPolicyAcceptedOutline',
        vertical: true,
        label: 'Agree to Privacy Policy',
        required: true,
        hideBorder: undefined,
      },
    ],
  },
  {
    type: 'container',
    rowWrapperClassName: 'ndf-fx-column ndf-fx-space',
    fields: [
      {
        ...(base.args?.fields?.[0] || {}),
        key: 'termsAcceptedPlain',
        vertical: true,
        label: 'Agree to Terms and Conditions',
        required: true,
        subscriptSizing: 'dynamic',
      },
      {
        ...(base.args?.fields?.[0] || {}),
        key: 'privacyPolicyAcceptedPlain',
        vertical: true,
        label: 'Agree to Privacy Policy',
        required: true,
        subscriptSizing: 'dynamic',
      },
    ],
  },
];
export const four: Story = {
  name: 'Groups',
  args: { fields: code as MatCheckbox[] },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

/////////////////////////////////////////////////
// Define Stories - End
/////////////////////////////////////////////////////////////////////////////////////////

export default meta;
