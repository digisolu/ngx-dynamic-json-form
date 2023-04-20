import { ThemePalette } from '@angular/material/core';
import { DynamicFormFieldButton } from '@ngx-dynamic-json-form/core';

import { ButtonVariant } from '../types';

/**
 * The MatButton Interface to extend the Default Interface with Material Design specific properties.
 *
 * @export
 * @interface MatButton
 * @extends {DynamicFormFieldButton}
 */
export interface MatButton extends DynamicFormFieldButton {
  /**
   * The material button variant.
   * Possible Values: 'mat-button' | 'mat-raised-button' | 'mat-flat-button' | 'mat-stroked-button' | 'mat-icon-button' | 'mat-fab' | 'mat-fab-extended' | 'mat-mini-fab'
   *
   * @type {ButtonVariant}
   * @memberof MatButton
   */
  variant: ButtonVariant;

  /**
   * The material color palette value.
   * Possible color palette values are: 'primary' | 'accent' | 'warn' | undefined
   *
   * @type {ThemePalette}
   * @memberof MatButton
   */
  buttonColor?: ThemePalette;

  /**
   * The material icon code, used for icon buttons only.
   *
   * @type {string}
   * @memberof MatButton
   */
  buttonIcon?: string;

  /**
   * A Tooltip text shown up, if hovering above the button.
   *
   * @type {string}
   * @memberof MatButton
   */
  buttonTooltip?: string;
}
