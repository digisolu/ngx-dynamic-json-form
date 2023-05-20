import { importProvidersFrom } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxDynamicJsonFormModule } from 'ngx-dynamic-json-form-core';
import {
  NgxDynamicJsonFormMaterialComponent,
  NgxDynamicJsonFormMaterialModule,
} from 'ngx-dynamic-json-form-material';
import { applicationConfig, moduleMetadata } from '@storybook/angular';

import { Utils } from '../helpers/utils';

import type { ButtonVariant, MatButton } from 'ngx-dynamic-json-form-material';
import type { Meta, StoryObj } from '@storybook/angular';
import type { ThemePalette } from '@angular/material/core';

type Story = StoryObj<NgxDynamicJsonFormMaterialComponent>;

/////////////////////////////////////////////////////////////////////////////////////////
// Config Meta and Auto Args - Start
/////////////////////////////////////////////////

const title: string = 'Components/Buttons';
const interfaceName: string = 'MatButton';
const componentName: string = 'button';
let code: any = `{
  "type": '${componentName}',
  "variant": "mat-raised-button",
  /** buttonText and / or buttonIcon */
}`;

class Model implements MatButton {
  variant: ButtonVariant = 'mat-raised-button';
  buttonColor?: ThemePalette = 'primary';
  buttonIcon?: string | undefined = '';
  buttonTooltip?: string | undefined = '';
  id?: string | undefined = '';
  type = 'button' as const;
  buttonType?: 'button' | 'submit' | 'menu' | 'reset' | undefined = 'button';
  disabled?: boolean | undefined = false;
  tabIndex?: number | undefined = 0;
  buttonText?: string | undefined = 'test';
  onClick?(): void {
    throw new Error('Method not implemented.');
  }
  key?: string | undefined = undefined;
  className?: string | undefined = '';
  containerClassName?: string | undefined = '';
  formFieldClassName?: string | undefined = '';
  messages?: { [key: string]: string } | undefined = {};
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
  ...Utils.getBaseStory<MatButton>('', componentName, code, {
    ...Utils.getButton({
      variant: 'mat-raised-button',
      buttonText: 'Raised Button',
      buttonColor: 'primary',
    }),
  }),
};

// Story 1
code = [
  {
    ...(base.args?.fields?.[0] || {}),
    variant: 'mat-button',
    buttonText: 'Basic Button',
    buttonColor: 'primary',
  },
  {
    ...(base.args?.fields?.[0] || {}),
    variant: 'mat-raised-button',
    buttonText: 'Raised Button',
    buttonColor: 'accent',
  },
  {
    ...(base.args?.fields?.[0] || {}),
    variant: 'mat-stroked-button',
    buttonText: 'Stroked Button',
    buttonColor: 'warn',
  },
  {
    ...(base.args?.fields?.[0] || {}),
    variant: 'mat-flat-button',
    buttonText: 'Flat Button',
    buttonColor: undefined,
  },
];
export const one: Story = {
  name: 'Basic, Raised, Stroked, Flat Button',
  args: {
    fields: code as MatButton[],
    formClassName: 'ndf-fx-row ndf-fx-center ndf-fx-space ndf-fx-gap-16 ndf-fit-content',
  },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story 2
code = [
  {
    ...(base.args?.fields?.[0] || {}),
    variant: 'mat-icon-button',
    buttonIcon: 'favorite',
    buttonColor: 'primary',
    buttonText: undefined,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    variant: 'mat-fab',
    buttonIcon: 'favorite',
    buttonColor: 'accent',
    buttonText: undefined,
  },
  {
    ...(base.args?.fields?.[0] || {}),
    variant: 'mat-mini-fab',
    buttonIcon: 'favorite',
    buttonColor: 'warn',
    buttonText: undefined,
  },
];
export const two: Story = {
  name: 'Icon Button',
  args: {
    fields: code as MatButton[],
    formClassName: 'ndf-fx-row ndf-fx-center ndf-fx-space ndf-fx-gap-16 ndf-fit-content',
  },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story 3
code = [
  {
    ...(base.args?.fields?.[0] || {}),
    variant: 'mat-fab-extended',
    buttonText: 'Like',
    buttonIcon: 'favorite',
    buttonColor: 'primary',
  },
  {
    ...(base.args?.fields?.[0] || {}),
    variant: 'mat-button',
    buttonText: 'Like',
    buttonIcon: 'favorite',
    buttonColor: 'primary',
  },
  {
    ...(base.args?.fields?.[0] || {}),
    variant: 'mat-raised-button',
    buttonText: 'Like',
    buttonIcon: 'favorite',
    buttonColor: 'accent',
  },
  {
    ...(base.args?.fields?.[0] || {}),
    variant: 'mat-stroked-button',
    buttonText: 'Like',
    buttonIcon: 'favorite',
    buttonColor: 'warn',
  },
  {
    ...(base.args?.fields?.[0] || {}),
    variant: 'mat-flat-button',
    buttonText: 'Like',
    buttonIcon: 'favorite',
    buttonColor: undefined,
  },
];
export const three: Story = {
  name: 'Icon with Text Button',
  args: {
    fields: code as MatButton[],
    formClassName: 'ndf-fx-row ndf-fx-center ndf-fx-space ndf-fx-gap-16 ndf-fit-content',
  },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story 4
export const four: Story = {
  name: 'Button with Action',
  args: {
    fields: [
      {
        type: 'button',
        variant: 'mat-raised-button',
        buttonText: 'Click me',
        buttonColor: 'primary',
        onClick: () => alert('This Button was clicked'),
      },
    ] as MatButton[],
  },
};

// Story 5
code = {
  ...(base.args?.fields?.[0] || {}),
  buttonText: 'Hover me',
  buttonTooltip: 'Click to do something.',
};
export const five: Story = {
  name: 'Button with Tooltip',
  args: { fields: [code] as MatButton[] },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

// Story 6
code = {
  ...(base.args?.fields?.[0] || {}),
  buttonText: 'Like it',
  buttonIcon: 'favorite',
  disabled: true,
};
export const six: Story = {
  name: 'Disabled',
  args: { fields: [code] as MatButton[] },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

/////////////////////////////////////////////////
// Define Stories - End
/////////////////////////////////////////////////////////////////////////////////////////

export default meta;
