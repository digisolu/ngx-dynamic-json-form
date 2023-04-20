import { importProvidersFrom } from '@angular/core';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {
  FloatLabelType,
  MatFormFieldAppearance,
  SubscriptSizing,
} from '@angular/material/form-field';
import { GroupOption, NgxDynamicJsonFormModule } from '@ngx-dynamic-json-form/core';
import {
  MatSelect,
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

const title: string = 'Components/Select';
const interfaceName: string = 'MatSelect';
const componentName: string = 'select';
const defaultKey: string = `${componentName}Key`;
let code: any = `{
  "key": '${defaultKey}',
  "type": '${componentName}',
  "options": [/* any options */],
}`;

class Model implements MatSelect {
  disableOptionCentering?: boolean | undefined = true;
  panelClass?: string | string[] | undefined = '';
  typeaheadDebounceInterval?: number | undefined = 0;
  showSelectAll?: boolean | undefined = true;
  showSelectAllText?: string | undefined = '';
  showSearch?: boolean | undefined = true;
  showSearchNoEntriesText?: string | undefined = '';
  showSearchText?: string | undefined = '';
  onFilter$?(searchTerm: string): Observable<GroupOption[]> {
    throw new Error('Method not implemented.');
  }
  compareWith?(object1: any, object2: any): boolean {
    throw new Error('Method not implemented.');
  }

  type: 'select' = 'select';
  options: GroupOption[] = [];
  showEmptyOption?: boolean | undefined = true;
  showEmptyOptionText?: string | undefined = '';
  multiple?: boolean | undefined = true;
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
  subscriptSizing?: SubscriptSizing | undefined = 'dynamic';
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
    applicationConfig({ providers: [importProvidersFrom(NgxDynamicJsonFormMaterialModule.forRoot())] }),
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
  ...Utils.getBaseStory<MatSelect>(defaultKey, componentName, code, {
    label: 'Option Selection',
    required: true,
    showEmptyOption: true,
    showEmptyOptionText: 'Please choose',
    placeholder: 'Please choose',
    options: [...Utils.getOptions()],
    showSearch: false,

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
  args: { fields: code as MatSelect[] },
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
  args: { fields: code as MatSelect[] },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story 3
code = [
  {
    ...(base.args?.fields?.[0] || {}),
    showSearch: true,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    key: `${defaultKey}Outline`,
    appearance: 'outline',
    showSearch: true,
  },
];
export const three: Story = {
  name: 'With Searchfield',
  args: {
    fields: code as MatSelect[],
    initial: { [defaultKey]: '2', [`${defaultKey}Outline`]: '2' },
  },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story 4
code = [
  {
    ...(base.args?.fields?.[0] || {}),
    showSearch: true,
    multiple: false,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    key: `${defaultKey}Outline`,
    appearance: 'outline',
    showSearch: true,
    multiple: false,
  },
];
export const four: Story = {
  name: 'Multiselect',
  args: {
    fields: code as MatSelect[],
  },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story 5
code = [
  {
    ...(base.args?.fields?.[0] || {}),
    showSearch: true,
    showSelectAll: true,
    multiple: true,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    key: `${defaultKey}Outline`,
    appearance: 'outline',
    showSearch: true,
    showSelectAll: true,
    multiple: true,
  },
];
export const five: Story = {
  name: 'Toggle All',
  args: {
    fields: code as MatSelect[],
  },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

/////////////////////////////////////////////////
// Define Stories - End
/////////////////////////////////////////////////////////////////////////////////////////

export default meta;
