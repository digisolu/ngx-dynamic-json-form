import { action } from '@storybook/addon-actions';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { importProvidersFrom } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxDynamicJsonFormModule } from '@ngx-dynamic-json-form/core';
import {
  FormField,
  MatContainer,
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

const title: string = 'Components/Container';
const interfaceName: string = 'MatContainer';
const componentName: string = 'container';
let code: any = `{
  "type": '${componentName}',
  "fields": [/* any other form fields */],
}`;

class Model implements MatContainer {
  type: 'container' = 'container';
  fields: FormField[] = [];
  rowWrapperClassName?: string | undefined = '';

  key?: string | undefined = '';
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
  // render: (args) => Utils.getUpdatedArgs(args, model, ''),
};

/////////////////////////////////////////////////////////////////////////////////////////
// Define Stories - Start
/////////////////////////////////////////////////
export const base: Story = {
  name: 'BaseComponent',
  ...Utils.getBaseStory<MatContainer>('', componentName, code, {
    containerClassName: 'wrapper',
    fields: [
      {
        type: 'html',
        content:
          '<h2>Element inside a container</h2><p>The background color is changed for this container.<br>There is also a button inside</p>',
      },
      {
        type: 'button',
        variant: 'mat-raised-button',
        buttonText: 'Send',
        buttonColor: 'primary',
        onClick: action('onClick'),
      },
      {
        type: 'html',
        content: '<br>',
      },
      {
        type: 'container',
        rowWrapperClassName: 'wrapper-2',
        fields: [
          {
            type: 'html',
            content: '<p>Another Element inside a container with another background.</p>',
          },
          {
            type: 'button',
            variant: 'mat-raised-button',
            buttonText: 'Click',
            buttonColor: 'primary',
            onClick: action('onClick'),
          },
        ],
      },
    ],
  }),
};

// // Story 1
code = {
  rowWrapperClassName: 'newsletter',
  ...(base.args?.fields?.[0] || {}),
  fields: [
    {
      type: 'html',
      content: '<h2>Register to Newsletter</h2>',
    },
    {
      type: 'container',
      rowWrapperClassName: 'ndf-fx-row ndf-fit-content',
      fields: [
        {
          key: 'mail',
          type: 'input',
          label: 'Mail',
          ...Utils.getBasicCallbacksDefaults(),
        },
        {
          type: 'button',
          variant: 'mat-raised-button',
          buttonText: 'Send',
          buttonColor: 'primary',
          onClick: action('onClick'),
        },
      ],
    },
  ],
};
export const one: Story = {
  name: 'Standard',
  args: { fields: [code] as MatContainer[] },
  parameters: { docs: { source: { code: Utils.format(code) } } },
};

/////////////////////////////////////////////////
// Define Stories - End
/////////////////////////////////////////////////////////////////////////////////////////

export default meta;
