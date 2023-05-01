import {
  FloatLabelType,
  MatFormFieldAppearance,
  SubscriptSizing,
} from '@angular/material/form-field';

import { ButtonType, ButtonVariant } from '../types';

import type { ThemePalette } from '@angular/material/core';

/**
 * The MaterialOptions Interface.
 *
 * Used for the global default config settings.
 *
 * @export
 * @interface MaterialOptions
 */
export interface MaterialOptions {
  /**
   * Set the default values for the general form fields.
   *
   * @type {{
   *     appearance?: MatFormFieldAppearance;
   *     floatLabel?: FloatLabelType;
   *     formClassName?: string;
   *     hideBorder?: boolean;
   *     hideLabel?: boolean;
   *     hideRequiredMarker?: boolean;
   *     matFormFieldClassName?: string;
   *     subscriptSizing?: SubscriptSizing;
   *   }}
   * @memberof MaterialOptions
   */
  default?: {
    appearance?: MatFormFieldAppearance;
    floatLabel?: FloatLabelType;
    formClassName?: string;
    hideBorder?: boolean;
    hideLabel?: boolean;
    hideRequiredMarker?: boolean;
    matFormFieldClassName?: string;
    subscriptSizing?: SubscriptSizing;
  };

  /**
   * Set the default values for the autocomplete fields.
   *
   * @type {{
   *     className?: string;
   *     showEmptyOption?: boolean;
   *     showEmptyOptionText?: string;
   *   }}
   * @memberof MaterialOptions
   */
  autocomplete?: {
    className?: string;
    showEmptyOption?: boolean;
    showEmptyOptionText?: string;
  };

  /**
   * Set the default values for all material buttons.
   *
   * @type {{
   *     className?: string;
   *   }}
   * @memberof MaterialOptions
   */
  button?: {
    className?: string;
  };

  /**
   * Set the default values for the checkboxes.
   *
   * @type {({
   *     className?: string;
   *     color?: ThemePalette;
   *     labelPosition?: 'before' | 'after';
   *     vertical?: boolean;
   *   })}
   * @memberof MaterialOptions
   */
  checkbox?: {
    className?: string;
    color?: ThemePalette;
    labelPosition?: 'before' | 'after';
    vertical?: boolean;
  };

  /**
   * Set the default values for the container fields.
   *
   * @type {{
   *     rowWrapperClassName?: string;
   *   }}
   * @memberof MaterialOptions
   */
  container?: {
    rowWrapperClassName?: string;
  };

  /**
   * Set the default values for the datepicker fields.
   *
   * @type {{
   *     className?: string;
   *     openWhenActive?: boolean;
   *     clearButton?: boolean;
   *   }}
   * @memberof MaterialOptions
   */
  datepicker?: {
    className?: string;
    openWhenActive?: boolean;
    clearButton?: boolean;
  };

  /**
   * Set the default values for the datepicker ranges.
   *
   * @type {{
   *     className?: string;
   *     openWhenActive?: boolean;
   *     clearButton?: boolean;
   *   }}
   * @memberof MaterialOptions
   */
  datepickerRange?: {
    className?: string;
    openWhenActive?: boolean;
    clearButton?: boolean;
  };

  /**
   * Set the default values for the html fields.
   *
   * @type {{
   *     className?: string;
   *   }}
   * @memberof MaterialOptions
   */
  html?: {
    className?: string;
  };

  /**
   * Set the default values for the input fields.
   *
   * @type {{
   *     className?: string;
   *     inputType?: 'text';
   *     clearButton?: boolean;
   *   }}
   * @memberof MaterialOptions
   */
  input?: {
    className?: string;
    inputType?: 'text';
    clearButton?: boolean;
  };

  /**
   * Set the default values for the multi autocompletes.
   *
   * @type {{
   *     className?: string;
   *     color?: ThemePalette;
   *     removable?: boolean;
   *     clearButton?: boolean;
   *   }}
   * @memberof MaterialOptions
   */
  multiAutocomplete?: {
    className?: string;
    color?: ThemePalette;
    removable?: boolean;
    clearButton?: boolean;
  };

  /**
   * Set the default values for the multi checkboxes.
   *
   * @type {({
   *     showSelectAll?: boolean;
   *     className?: string;
   *     color?: ThemePalette;
   *     showSelectAllText?: string;
   *     togglePosition?: 'before' | 'after';
   *   })}
   * @memberof MaterialOptions
   */
  multiCheckbox?: {
    showSelectAll?: boolean;
    className?: string;
    color?: ThemePalette;
    showSelectAllText?: string;
    togglePosition?: 'before' | 'after';
  };

  /**
   * Set the default values for the multi rows.
   *
   * @type {{
   *     rowWrapperClassName?: string;
   *     rowButtonContainerClassName?: string;
   *     addButtonOnlyLast?: boolean;
   *     addButtonRow?: boolean;
   *     addButtonClassName?: string;
   *     addButtonContainerClassName?: string;
   *     addButtonType?: ButtonType;
   *     addButtonVariant?: ButtonVariant;
   *     addButtonColor?: ThemePalette;
   *     addButtonIcon?: string;
   *     addButtonText?: string;
   *     addButtonTooltip?: string;
   *     deleteButtonRow?: boolean;
   *     deleteButtonClassName?: string;
   *     deleteButtonContainerClassName?: string;
   *     deleteButtonType?: ButtonType;
   *     deleteButtonVariant?: ButtonVariant;
   *     deleteButtonColor?: ThemePalette;
   *     deleteButtonIcon?: string;
   *     deleteButtonText?: string;
   *     deleteButtonTooltip?: string;
   *   }}
   * @memberof MaterialOptions
   */
  multiRow?: {
    rowWrapperClassName?: string;
    rowButtonContainerClassName?: string;
    addButtonOnlyLast?: boolean;
    addButtonRow?: boolean;
    addButtonClassName?: string;
    addButtonContainerClassName?: string;
    addButtonType?: ButtonType;
    addButtonVariant?: ButtonVariant;
    addButtonColor?: ThemePalette;
    addButtonIcon?: string;
    addButtonText?: string;
    addButtonTooltip?: string;
    deleteButtonRow?: boolean;
    deleteButtonClassName?: string;
    deleteButtonContainerClassName?: string;
    deleteButtonType?: ButtonType;
    deleteButtonVariant?: ButtonVariant;
    deleteButtonColor?: ThemePalette;
    deleteButtonIcon?: string;
    deleteButtonText?: string;
    deleteButtonTooltip?: string;
  };

  /**
   * Set the default values for the radio buttons.
   *
   * @type {({
   *     className?: string;
   *     color?: ThemePalette;
   *     labelPosition?: 'before' | 'after';
   *     vertical?: boolean;
   *   })}
   * @memberof MaterialOptions
   */
  radioButton?: {
    className?: string;
    color?: ThemePalette;
    labelPosition?: 'before' | 'after';
    vertical?: boolean;
  };

  /**
   * Set the default values for the select fields.
   *
   * @type {({
   *     className?: string;
   *     disableOptionCentering?: boolean;
   *     panelClass?: string | string[];
   *     showEmptyOption?: boolean;
   *     showEmptyOptionText?: string;
   *     showSearch?: boolean;
   *     showSearchNoEntriesText?: string;
   *     showSearchText?: string;
   *     showSelectAll?: boolean;
   *     showSelectAllText?: string;
   *     typeaheadDebounceInterval?: number;
   *   })}
   * @memberof MaterialOptions
   */
  select?: {
    className?: string;
    disableOptionCentering?: boolean;
    panelClass?: string | string[];
    showEmptyOption?: boolean;
    showEmptyOptionText?: string;
    showSearch?: boolean;
    showSearchNoEntriesText?: string;
    showSearchText?: string;
    showSelectAll?: boolean;
    showSelectAllText?: string;
    typeaheadDebounceInterval?: number;
  };

  /**
   * Set the default values for the sliders.
   *
   * @type {{
   *     className?: string;
   *     color?: ThemePalette;
   *     discrete?: boolean;
   *     showTickMarks?: boolean;
   *   }}
   * @memberof MaterialOptions
   */
  slider?: {
    className?: string;
    color?: ThemePalette;
    discrete?: boolean;
    showTickMarks?: boolean;
  };

  /**
   * Set the default values for the slide ranges.
   *
   * @type {{
   *     className?: string;
   *     color?: ThemePalette;
   *     discrete?: boolean;
   *     showTickMarks?: boolean;
   *   }}
   * @memberof MaterialOptions
   */
  sliderRange?: {
    className?: string;
    color?: ThemePalette;
    discrete?: boolean;
    showTickMarks?: boolean;
  };

  /**
   * Set the default values for the slide toggles.
   *
   * @type {{
   *     className?: string;
   *     color?: ThemePalette;
   *   }}
   * @memberof MaterialOptions
   */
  slideToggle?: {
    className?: string;
    color?: ThemePalette;
  };

  /**
   * Set the default values for the text areas.
   *
   * @type {{
   *     autosize?: boolean;
   *     autosizeMaxRows?: undefined;
   *     autosizeMinRows?: undefined;
   *     className?: string;
   *     cols?: undefined;
   *     hintCount?: boolean;
   *     rows?: undefined;
   *     clearButton?: boolean;
   *   }}
   * @memberof MaterialOptions
   */
  textarea?: {
    autosize?: boolean;
    autosizeMaxRows?: undefined;
    autosizeMinRows?: undefined;
    className?: string;
    cols?: undefined;
    hintCount?: boolean;
    rows?: undefined;
    clearButton?: boolean;
  };
}
