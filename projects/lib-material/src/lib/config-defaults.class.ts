import {
  Components,
  ContainerComponent,
  FormField,
  FormFieldType,
  HtmlComponent,
} from 'ngx-dynamic-json-form-core';

import {
  AutocompleteComponent,
  ButtonComponent,
  CheckboxComponent,
  DatepickerComponent,
  DatepickerRangeComponent,
  InputComponent,
  MultiAutocompleteComponent,
  MultiCheckboxComponent,
  MultiRowComponent,
  RadioButtonComponent,
  SelectComponent,
  SliderComponent,
  SliderRangeComponent,
  SlideToggleComponent,
  TextareaComponent,
} from './components';
import { MaterialOptions } from './interfaces';

/**
 * The Global Config Defaults.
 *
 * @export
 * @class ConfigDefaults
 */
export class ConfigDefaults {
  /**
   * The default MaterialOptions.
   *
   * @static
   * @type {MaterialOptions}
   * @memberof ConfigDefaults
   */
  public static MATERIAL_OPTIONS: MaterialOptions = {
    default: {
      appearance: 'fill',
      floatLabel: 'auto',
      formClassName: '',
      hideBorder: false,
      hideLabel: false,
      hideRequiredMarker: false,
      matFormFieldClassName: 'ndf-full-width',
      subscriptSizing: 'fixed',
    },

    autocomplete: {
      className: '',
      showEmptyOption: false,
      showEmptyOptionText: 'Please choose',
    },

    button: {
      className: '',
    },

    checkbox: {
      className: '',
      vertical: false,
      color: 'primary',
      labelPosition: 'after',
    },

    container: {
      rowWrapperClassName: '',
    },

    datepicker: {
      className: '',
      openWhenActive: true,
      clearButton: true,
    },

    datepickerRange: {
      className: '',
      openWhenActive: true,
      clearButton: true,
    },

    html: {
      className: '',
    },

    input: {
      className: '',
      inputType: 'text',
      clearButton: true,
    },

    multiAutocomplete: {
      className: '',
      removable: true,
      color: 'primary',
      clearButton: true,
    },

    multiCheckbox: {
      className: '',
      color: 'primary',
      showSelectAll: true,
      showSelectAllText: 'Select All',
      togglePosition: 'before',
    },

    multiRow: {
      rowWrapperClassName: '',
      rowButtonContainerClassName: '',

      addButtonClassName: '',
      addButtonColor: 'primary',
      addButtonContainerClassName: '',
      addButtonIcon: 'add',
      addButtonOnlyLast: true,
      addButtonRow: true,
      addButtonText: '',
      addButtonTooltip: '',
      addButtonType: 'button',
      addButtonVariant: 'mat-mini-fab',

      deleteButtonClassName: '',
      deleteButtonColor: 'warn',
      deleteButtonContainerClassName: '',
      deleteButtonIcon: 'delete',
      deleteButtonRow: true,
      deleteButtonText: '',
      deleteButtonTooltip: '',
      deleteButtonType: 'button',
      deleteButtonVariant: 'mat-mini-fab',
    },

    radioButton: {
      className: '',
      color: 'primary',
      labelPosition: 'after',
      vertical: false,
    },

    select: {
      className: '',
      disableOptionCentering: true,
      panelClass: ['ndf-panel'],
      showEmptyOption: false,
      showEmptyOptionText: 'Please choose',
      showSearch: true,
      showSearchNoEntriesText: 'No entries found.',
      showSearchText: 'Search',
      showSelectAll: true,
      showSelectAllText: '',
      typeaheadDebounceInterval: 50,
    },

    slider: {
      className: '',
      color: 'primary',
      discrete: false,
      showTickMarks: false,
    },

    sliderRange: {
      className: '',
      color: 'primary',
      discrete: false,
      showTickMarks: false,
    },

    slideToggle: {
      className: '',
      color: 'primary',
    },

    textarea: {
      className: '',
      autosizeMaxRows: undefined,
      autosizeMinRows: undefined,
      autosize: false,
      cols: undefined,
      rows: undefined,
      hintCount: false,
      clearButton: true,
    },
  };

  /**
   * Default Messages.
   *
   * @static
   * @type {{ [key: string]: string }}
   * @memberof ConfigDefaults
   */
  public static MESSAGES: { [key: string]: string } = {
    unsupportedKey:
      'No corresponding type for "{{KEY_OR_TYPE}}" found!<br>Did you missed to add it as a custom form element?',
    required: '* Mandatory Field',
  };

  /**
   * Default Range Ending Names.
   *
   * @static
   * @type {{ start: string; end: string }}
   * @memberof ConfigDefaults
   */
  public static RANGE_ENDINGS: { start: string; end: string } = {
    start: 'Start',
    end: 'End',
  };

  /**
   * All Components used for this library.
   *
   * @static
   * @type {Components<FormField>}
   * @memberof ConfigDefaults
   */
  public static COMPONENTS: Components<FormField> = {
    [AutocompleteComponent.key]: AutocompleteComponent,
    [ButtonComponent.key]: ButtonComponent,
    [CheckboxComponent.key]: CheckboxComponent,
    [ContainerComponent.key]: ContainerComponent,
    [DatepickerComponent.key]: DatepickerComponent,
    [DatepickerRangeComponent.key]: DatepickerRangeComponent,
    [HtmlComponent.key]: HtmlComponent,
    [InputComponent.key]: InputComponent,
    [MultiAutocompleteComponent.key]: MultiAutocompleteComponent,
    [MultiCheckboxComponent.key]: MultiCheckboxComponent,
    [MultiRowComponent.key]: MultiRowComponent,
    [RadioButtonComponent.key]: RadioButtonComponent,
    [SelectComponent.key]: SelectComponent,
    [SliderComponent.key]: SliderComponent,
    [SliderRangeComponent.key]: SliderRangeComponent,
    [SlideToggleComponent.key]: SlideToggleComponent,
    [TextareaComponent.key]: TextareaComponent,
  };

  /**
   * Default ignore form control checks.
   *
   * @static
   * @type {FormFieldType[]}
   * @memberof ConfigDefaults
   */
  public static IGNORE_CONTROL_CHECK: FormFieldType[] = [
    ButtonComponent.key,
    ContainerComponent.key,
    DatepickerRangeComponent.key,
    HtmlComponent.key,
    SliderRangeComponent.key,
  ];

  /**
   * Default range controls.
   *
   * @static
   * @type {FormFieldType[]}
   * @memberof ConfigDefaults
   */
  public static RANGE_CONTROLS: FormFieldType[] = [
    DatepickerRangeComponent.key,
    SliderRangeComponent.key,
  ];
}
