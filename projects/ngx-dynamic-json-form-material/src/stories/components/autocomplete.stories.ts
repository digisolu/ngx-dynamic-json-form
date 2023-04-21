import { importProvidersFrom } from '@angular/core';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {
  FloatLabelType,
  MatFormFieldAppearance,
  SubscriptSizing,
} from '@angular/material/form-field';
import { BasicOption, GroupOption, NgxDynamicJsonFormModule } from '@ngx-dynamic-json-form/core';
import {
  MatAutocomplete,
  NgxDynamicJsonFormMaterialComponent,
  NgxDynamicJsonFormMaterialModule,
} from '@ngx-dynamic-json-form/material';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { Observable } from 'rxjs';

import { Utils } from '../helpers/utils';

// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import type { Meta, StoryObj } from '@storybook/angular';
type Story = StoryObj<NgxDynamicJsonFormMaterialComponent>;

/////////////////////////////////////////////////////////////////////////////////////////
// Config Meta and Auto Args - Start
/////////////////////////////////////////////////

const title: string = 'Components/Autocomplete';
const interfaceName: string = 'MatAutocomplete';
const componentName: string = 'autocomplete';
const defaultKey: string = `${componentName}Key`;
let code: any = `{
  "key": '${defaultKey}',
  "type": '${componentName}',
  "options": [/* any options */],
}`;

class Model implements MatAutocomplete {
  type: 'autocomplete' = 'autocomplete';
  showEmptyOption?: boolean = true;
  showEmptyOptionText?: string = '';
  readonly?: boolean = true;
  placeholder?: string = '';
  options?: GroupOption[] | BasicOption[] = [];

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
  ...Utils.getBaseStory<MatAutocomplete>(defaultKey, componentName, code, {
    label: 'Option Selection',
    options: [...Utils.getOptions()],
    showEmptyOption: true,
    showEmptyOptionText: 'Please choose',
    placeholder: 'Select please',
    required: true,

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
];
export const one: Story = {
  name: 'Standard',
  args: { fields: code as MatAutocomplete[] },
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
  args: { fields: code as MatAutocomplete[] },
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
    fields: code as MatAutocomplete[],
    initial: { [defaultKey]: '2', [`${defaultKey}Outline`]: '2' },
  },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

/////////////////////////////////////////////////
// Define Stories - End
/////////////////////////////////////////////////////////////////////////////////////////

export default meta;
