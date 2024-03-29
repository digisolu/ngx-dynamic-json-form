import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractMultiRowComponent } from 'ngx-dynamic-json-form-core';

import { MatButton, MatMultiRow } from '../../interfaces';
import { ButtonType, ButtonVariant, FormFieldType } from '../../types';

/**
 * The Material Design Specific MultiRow Component.
 *
 * @export
 * @class MultiRowComponent
 * @extends {AbstractMultiRowComponent<MatMultiRow>}
 */
@Component({
  selector: 'ndf-mat-multi-row',
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
   * @param {('add' | 'delete')} type
   * @return {MatButton}
   * @memberof MultiRowComponent
   */
  public getButtonField(type: 'add' | 'delete'): MatButton {
    const classes: string[] = ['ndf-mat-multi-row-button', `ndf-${type}-button`];
    !!this.getDefaultValue(`${type}ButtonClassName`) &&
      classes.push(String(this.getDefaultValue(`${type}ButtonClassName`)));

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
