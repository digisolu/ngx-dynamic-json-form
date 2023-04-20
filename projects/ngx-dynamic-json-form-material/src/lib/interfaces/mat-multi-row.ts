import { ThemePalette } from '@angular/material/core';
import { DynamicFormFieldMultiRow } from '@ngx-dynamic-json-form/core';

import { ButtonType, ButtonVariant, FormField } from '../types';

/**
 * The MatMultiRow Interface to extend the Default Interface with Material Design specific properties.
 *
 * @export
 * @interface MatMultiRow
 * @extends {DynamicFormFieldMultiRow}
 */
export interface MatMultiRow extends DynamicFormFieldMultiRow {
  /**
   * @override
   * @inheritdoc
   */
  fields: FormField[];

  /**
   * A class name added to the button container for every row.
   *
   * @type {string}
   * @memberof MatMultiRow
   */
  rowButtonContainerClassName?: string;

  /**
   * Shall the add button only being visible, if there is now row available?
   *
   * @type {boolean}
   * @memberof MatMultiRow
   */
  addButtonOnlyLast?: boolean;

  /**
   * Shall there be a button for adding a new row?
   *
   * @type {boolean}
   * @memberof MatMultiRow
   */
  addButtonRow?: boolean;

  /**
   * A class name for the add button.
   *
   * @type {string}
   * @memberof MatMultiRow
   */
  addButtonClassName?: string;

  /**
   * A class name for the add button container element.
   *
   * @type {string}
   * @memberof MatMultiRow
   */
  addButtonContainerClassName?: string;

  /**
   * A button type for the add button.
   * Possible values are: 'submit' | 'menu' | 'button' | 'reset'
   *
   * @type {ButtonType}
   * @memberof MatMultiRow
   */
  addButtonType?: ButtonType;

  /**
   * A button variant for the add button.
   * Possible Values are: 'mat-button' | 'mat-raised-button' | 'mat-flat-button' | 'mat-stroked-button' | 'mat-icon-button' | 'mat-fab' | 'mat-fab-extended' | 'mat-mini-fab'
   *
   * @type {ButtonVariant}
   * @memberof MatMultiRow
   */
  addButtonVariant?: ButtonVariant;

  /**
   * The material color palette value for the add button.
   * Possible color palette values are: 'primary' | 'accent' | 'warn' | undefined
   *
   * @type {ThemePalette}
   * @memberof MatMultiRow
   */
  addButtonColor?: ThemePalette;

  /**
   * The material icon code, used for icon add buttons only.
   *
   * @type {string}
   * @memberof MatMultiRow
   */
  addButtonIcon?: string;

  /**
   * The add button text.
   *
   * @type {string}
   * @memberof MatMultiRow
   */
  addButtonText?: string;

  /**
   * A Tooltip text shown up, if hovering above the add button.
   *
   * @type {string}
   * @memberof MatMultiRow
   */
  addButtonTooltip?: string;

  /**
   * Shall there be a button for deleting a row?
   *
   * @type {boolean}
   * @memberof MatMultiRow
   */
  deleteButtonRow?: boolean;

  /**
   * A class name for the delete button.
   *
   * @type {string}
   * @memberof MatMultiRow
   */
  deleteButtonClassName?: string;

  /**
   * A class name for the delete button container element.
   *
   * @type {string}
   * @memberof MatMultiRow
   */
  deleteButtonContainerClassName?: string;

  /**
   * A button type for the delete button.
   * Possible values are: 'submit' | 'menu' | 'button' | 'reset'
   *
   * @type {ButtonType}
   * @memberof MatMultiRow
   */
  deleteButtonType?: ButtonType;

  /**
   * A button variant for the delete button.
   * Possible Values are: 'mat-button' | 'mat-raised-button' | 'mat-flat-button' | 'mat-stroked-button' | 'mat-icon-button' | 'mat-fab' | 'mat-fab-extended' | 'mat-mini-fab'
   *
   * @type {ButtonVariant}
   * @memberof MatMultiRow
   */
  deleteButtonVariant?: ButtonVariant;

  /**
   * The material color palette value for the delete button.
   * Possible color palette values are: 'primary' | 'accent' | 'warn' | undefined
   *
   * @type {ThemePalette}
   * @memberof MatMultiRow
   */
  deleteButtonColor?: ThemePalette;

  /**
   * The material icon code, used for icon delete buttons only.
   *
   * @type {string}
   * @memberof MatMultiRow
   */
  deleteButtonIcon?: string;

  /**
   * The delete button text.
   *
   * @type {string}
   * @memberof MatMultiRow
   */
  deleteButtonText?: string;

  /**
   * A Tooltip text shown up, if hovering above the delete button.
   *
   * @type {string}
   * @memberof MatMultiRow
   */
  deleteButtonTooltip?: string;
}
