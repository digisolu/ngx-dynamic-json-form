import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractMultiRowComponent } from '@ngx-dynamic-json-form/core';

import { MatButton, MatMultiRow } from '../../interfaces';
import { ButtonType, ButtonVariant, FormFieldType } from '../../types';
import { ThemePalette } from '@angular/material/core';

/**
 * The Material Design Specific MultiRow Component.
 *
 * @export
 * @class MultiRowComponent
 * @extends {AbstractMultiRowComponent<MatMultiRow>}
 */
@Component({
  selector: 'ndf-multi-row',
  templateUrl: './multi-row.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiRowComponent extends AbstractMultiRowComponent<MatMultiRow> {
  /**
   * The form field type to identify the element.
   *
   * @static
   * @type {FormFieldType}
   * @memberof MultiRowComponent
   */
  public static key: FormFieldType = 'multi-row';

  /**
   * This method returns the button config for the add / remove row buttons, based on the form field config.
   *
   * @param {(MatMultiRow | undefined)} field
   * @param {('add' | 'delete')} type
   * @return {MatButton}
   * @memberof MultiRowComponent
   */
  public getButtonField(field: MatMultiRow | undefined, type: 'add' | 'delete'): MatButton {
    const classes: string[] = ['ndf-multi-row-button', `ndf-${type}-button`];
    !!field?.[`${type}ButtonClassName`] && classes.push(String(field[`${type}ButtonClassName`]));

    return {
      buttonColor: this.getDefaultValue(`${type}ButtonColor`),
      buttonIcon: this.getDefaultValue(`${type}ButtonIcon`),
      buttonText: this.getDefaultValue(`${type}ButtonText`),
      buttonTooltip: this.getDefaultValue(`${type}ButtonTooltip`),
      buttonType: this.getDefaultValue(`${type}ButtonType`) as ButtonType,
      className: classes.join(' '),
      disabled: this.getFormArray()?.disabled,
      type: 'button',
      variant: this.getDefaultValue(`${type}ButtonVariant`) as ButtonVariant,
    };
  }
}
