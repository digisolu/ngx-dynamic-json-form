import { ConfigDefaults } from 'ngx-dynamic-json-form-material';
import { action } from '@storybook/addon-actions';

import {
  classes as ClassesMaterial,
  interfaces as InterfacesMaterial,
} from '../../../../../docs/lib-material/documentation.json';
import {
  classes as ClassesCore,
  interfaces as InterfacesCore,
} from '../../../../../docs/lib-core/documentation.json';

import type {
  BasicCallbacks,
  ButtonVariant,
  FormFieldBasics,
  GroupOption,
  MatButton,
} from 'ngx-dynamic-json-form-material';
import type { ThemePalette } from '@angular/material/core';

const allInterfaces: any[] = [...InterfacesCore, ...InterfacesMaterial];
const allClasses: any[] = [...ClassesCore, ...ClassesMaterial];

export class Utils {
  public static getOptions(): GroupOption[] {
    return [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
      {
        label: 'Group Example',
        group: [
          { value: '11', label: 'Child 1' },
          { value: '12', label: 'Child 2' },
          { value: '13', label: 'Deactivated Option', disabled: true },
        ],
      },
      { value: '17', label: 'Option 17' },
      { value: '18', label: 'Option 18' },
      { value: '19', label: 'Option 19' },
    ];
  }

  public static getFormFieldBasicsDefaults(): FormFieldBasics {
    return {
      required: true,
      validators: [],
      asyncValidators: [],
      disabled: false,
      tabIndex: 0,
    } as any;
  }

  public static getBasicCallbacksDefaults(): BasicCallbacks {
    return {
      onBlur: action('onBlur'),
      onFocus: action('onFocus'),
      onChange: action('onChange'),
    } as any;
  }

  public static geMatFormFieldCallbacksDefaults(): BasicCallbacks {
    return {
      onPrefixClick: action('onPrefixClick'),
      onSuffixClick: action('onSuffixClick'),
    } as any;
  }

  public static getButton({
    variant,
    buttonText,
    buttonIcon,
    buttonColor,
  }: {
    variant: ButtonVariant;
    buttonText?: string;
    buttonIcon?: string;
    buttonColor?: ThemePalette;
  }): MatButton {
    return {
      type: 'button',
      variant,
      buttonText,
      buttonIcon,
      buttonColor,
      onClick: action(variant),
    };
  }

  public static getArgTypesDefault(): any {
    return {
      fields: { table: { disable: true } },
      className: { table: { disable: true } },
      initial: { table: { disable: true } },
      getForm: { table: { disable: true } },
    };
  }

  public static getArgTypes(
    interfaceName: string,
    componentName: string,
    model: any,
    prefix: string = 'field'
  ): any {
    const argTypes: any = {};

    [
      ...Object.keys(model), // include all properties
      ...Utils.getAllFuncs(model), // include all methods
    ].forEach(
      (key) =>
        (argTypes[`${prefix ? `${prefix}.` : ''}${key}`] = {
          ...Utils.getControlData(interfaceName, componentName, key),
        })
    );

    return argTypes;
  }

  public static getAllFuncs(toCheck: any): string[] {
    const props = [];
    let obj = toCheck;

    do {
      props.push(...Object.getOwnPropertyNames(obj));
    } while ((obj = Object.getPrototypeOf(obj)));

    return props
      .sort()
      .filter(
        (e: any, i: any, arr: any) =>
          e != arr[i + 1] &&
          typeof toCheck[e] === 'function' &&
          (!e.indexOf('on') || !e.indexOf('compareWith') || !e.indexOf('displayWith'))
      );
  }

  public static getArgTypeControl(type: any): any {
    switch (type) {
      case '_disable_':
      case 'ValidatorFn[]':
        return { control: false };

      case 'ThemePalette':
        return {
          control: 'select',
          options: ['primary', 'accent', 'warn', null],
        };

      case 'ButtonType':
        return {
          control: 'select',
          options: ['submit', 'menu', 'button', 'reset'],
        };

      case 'FloatLabelType':
        return {
          control: 'select',
          options: ['always', 'auto'],
        };

      case '"start" | "end"':
        return {
          control: 'select',
          options: ['start', 'end'],
        };

      case 'SubscriptSizing':
        return {
          control: 'select',
          options: ['fixed', 'dynamic'],
        };

      case 'MatFormFieldAppearance':
        return {
          control: 'select',
          options: ['fill', 'outline'],
        };

      case 'boolean':
        return {
          control: 'boolean',
        };

      case 'number':
        return { control: { type: 'number' } };

      case 'ButtonVariant':
        return {
          control: 'select',
          options: [
            'mat-button',
            'mat-raised-button',
            'mat-flat-button',
            'mat-stroked-button',
            'mat-icon-button',
            'mat-fab',
            'mat-fab-extended',
            'mat-mini-fab',
          ],
        };

      case '"submit" | "menu" | "button" | "reset"':
        return {
          control: 'select',
          options: ['submit', 'menu', 'button', 'reset'],
        };

      case '"change" | "blur" | "submit"':
        return {
          control: 'select',
          options: ['change', 'blur', 'submit'],
        };

      case '"color" | "date" | "datetime-local" | "email" | "month" | "number" | "password" | "search" | "tel" | "text" | "time" | "url" | "week"':
        return {
          control: 'select',
          options: [
            'number',
            'text',
            'color',
            'date',
            'datetime-local',
            'email',
            'month',
            'password',
            'search',
            'tel',
            'time',
            'url',
            'week',
          ],
        };

      case '"before" | "after"':
        return {
          control: 'select',
          options: ['before', 'after'],
        };

      case 'GroupOption[] | BasicOption[]':
      case 'BasicOption[]':
      case 'GroupOption[]':
      case 'FormField[]':
      case 'literal type':
        return { control: { type: 'object' } };

      default:
        return { control: { type: 'text' } };
    }
  }

  public static camelCase(input: string): string {
    return String(input).replace(/[_.-](\w|$)/g, function (_, character) {
      return character.toUpperCase();
    });
  }

  public static getControlData(
    interfaceName: string,
    componentName: string,
    key: string
  ): {
    name?: string;
    description?: string;
    defaultValue?: any;
    type?: any;
    table?: {
      type?: any;
      defaultValue?: any;
    };
    control?: any;
    options?: any;
  } {
    let foundInterface: any = Utils.getInterface(interfaceName);
    let property: any = foundInterface?.properties.find((data2: any) => data2.name === key);

    let defaultValue: any =
      (ConfigDefaults.MATERIAL_OPTIONS as any)?.[Utils.camelCase(componentName)]?.[key] ||
      (ConfigDefaults.MATERIAL_OPTIONS as any).default?.[key];

    if (key === 'type') {
      const { property, foundInterface } = Utils.getPropertyOf('BaseField', key);
      defaultValue = componentName;

      return !!foundInterface && !!property
        ? {
            description: property.rawdescription,
            type: { name: property.type, required: !property.optional, raw: property.type },
            table: {
              category: foundInterface.name,
              type: { summary: property.type },
              defaultValue: { summary: defaultValue },
            },
            defaultValue,
            ...Utils.getArgTypeControl('_disable_'),
          }
        : {};
    } else if (key === 'tabIndex') {
      defaultValue = 0;
    } else if (key === 'messages') {
      const { property, foundInterface } = Utils.getPropertyOf('BaseField', key);
      defaultValue = JSON.stringify(ConfigDefaults.MESSAGES);

      const type = 'object';

      return !!foundInterface && !!property
        ? {
            description: property.rawdescription,
            type: { name: type, required: !property.optional, raw: type },
            table: {
              category: foundInterface.name,
              type: { summary: type },
              defaultValue: { summary: defaultValue },
            },
            defaultValue,
            ...Utils.getArgTypeControl(property.type),
          }
        : {};
    }

    [
      foundInterface.extends,
      'DynamicFormFieldAutocomplete',
      'FormFieldBasics',
      'BaseField',
      'BasicCallbacks',
      'BasicOption',
      'GroupOption',
      'MatFormField',
      key,
    ].forEach((interfaceName) => {
      if (!property) {
        const propertyOf = Utils.getPropertyOf(interfaceName || '', key);
        foundInterface = propertyOf.foundInterface;
        property = propertyOf.property;
      }
    });

    if (!key.indexOf('on') || !key.indexOf('compareWith') || !key.indexOf('displayWith')) {
      defaultValue = 'undefined';
      const type = 'function';
      return !!foundInterface && !!property
        ? {
            description: property.rawdescription,
            type: { name: type, required: !property.optional, raw: type },
            table: {
              category: foundInterface.name,
              type: { summary: type },
              defaultValue: { summary: defaultValue },
            },
            defaultValue,
            ...Utils.getArgTypeControl('_disable_'),
          }
        : {};
    }

    defaultValue =
      typeof defaultValue === 'undefined'
        ? 'undefined'
        : defaultValue === null
        ? 'null'
        : defaultValue === ''
        ? '""'
        : defaultValue;

    return !!foundInterface && !!property
      ? {
          description: property.rawdescription,
          type: { name: property.type, required: !property.optional, raw: property.type },
          table: {
            category: foundInterface.name,
            type: { summary: property.type },
            defaultValue: { summary: defaultValue },
          },
          defaultValue,
          ...Utils.getArgTypeControl(key === 'key' ? '_disabled_' : property.type),
        }
      : {};
  }

  public static getInterface(interfaceName: string): string {
    return allInterfaces.find((data: any) => data.name === interfaceName);
  }

  public static getClass(className: string): any {
    return allClasses.find((data: any) => data.name === className);
  }

  public static getClassProperty(className: string, key: string): string {
    return Utils.getClass(className)?.properties.find((data: any) => data.name === key);
  }

  public static getPropertyOf(interfaceName: string, key: string): any {
    const foundInterface: any = Utils.getInterface(interfaceName);

    let property = foundInterface?.properties.find((data: any) => data.name === key);
    property = !!property
      ? property
      : foundInterface?.methods.find((data: any) => data.name === key);

    return { foundInterface, property };
  }

  public static getUpdatedArgs(args: any, model: any, prefix: string = 'field'): any {
    const updatedArgs = args;

    Object.keys(model).forEach((key: string) => {
      const fieldKey: string = `${prefix ? `${prefix}.` : ''}${key}`;
      updatedArgs.fields.forEach(
        (field: MatButton) => fieldKey in args && ((field as any)[key] = args[fieldKey] ?? '')
      );
    });

    return { props: { ...updatedArgs } };
  }

  public static getBaseStory<T = any>(
    defaultKey: string,
    componentName: string,
    code: string,
    settings: object = {}
  ): any {
    const config: any = {};
    !!defaultKey && (config.key = `${defaultKey}`);

    return {
      args: {
        fields: [
          {
            ...config,
            type: `${componentName}`,
            ...settings,
          },
        ] as T[],
      },
      parameters: { docs: { source: { code } } },
    };
  }

  public static format(code: any): any {
    return JSON.stringify(code, null, 2);
  }
}
