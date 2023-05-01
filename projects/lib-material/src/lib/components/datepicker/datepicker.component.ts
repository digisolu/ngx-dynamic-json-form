import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDatepicker as MatDatepickerInstance } from '@angular/material/datepicker';
import { AbstractFormFieldComponent, HTMLElementEvent } from 'ngx-dynamic-json-form-core';

import { MatDatepicker } from '../../interfaces';
import { FormFieldType } from '../../types';

/**
 * The Material Design Specific Datepicker Component.
 *
 * @export
 * @class DatepickerComponent
 * @extends {AbstractFormFieldComponent<MatDatepicker>}
 */
@Component({
  selector: 'ndf-mat-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent extends AbstractFormFieldComponent<MatDatepicker> {
  /**
   * The form field type to identify the element.
   *
   * @static
   * @type {FormFieldType}
   * @memberof DatepickerComponent
   */
  public static key: FormFieldType = 'datepicker';

  /**
   * A getter to extend the form field config. Used to add matFormFieldClassName to the config.
   *
   * @readonly
   * @type {MatDatepicker}
   * @memberof DatepickerComponent
   */
  public get fieldExtended(): MatDatepicker {
    const existingClass: string =
      this.field?.matFormFieldClassName || this.getDefaultValue('matFormFieldClassName');

    return {
      ...this.field,
      matFormFieldClassName:
        (!!existingClass ? existingClass + ' ' : '') + 'mat-mdc-form-field-has-icon-suffix',
    } as MatDatepicker;
  }

  /**
   * A custom onClick callback will be used, if it was passed in the form field config.
   *
   * @param {(PointerEvent | MouseEvent)} $event
   * @param {MatDatepickerInstance<any>} datepicker
   * @memberof DatepickerComponent
   */
  public onClick($event: PointerEvent | MouseEvent, datepicker: MatDatepickerInstance<any>): void {
    this._openDatepicker(datepicker);

    !!this.field &&
      'onClick' in this.field &&
      typeof this.field.onClick === 'function' &&
      this.field.onClick($event);
  }

  /**
   * A custom onFocus callback will be used, if it was passed in the form field config.
   *
   * @memberof DatepickerComponent
   */
  public override onFocus(
    $event: HTMLElementEvent<HTMLInputElement | any> | any,
    datepicker?: MatDatepickerInstance<any>
  ): void {
    this._openDatepicker(datepicker);
    super.onFocus($event);
  }

  /**
   * Activate, that the datepicker opens automatically after focusing in the input field.
   *
   * @private
   * @param {MatDatepickerInstance<any>} [datepicker]
   * @memberof DatepickerComponent
   */
  private _openDatepicker(datepicker?: MatDatepickerInstance<any>): void {
    if (
      // If openWhenActive is in the field and true
      (!!this.field && 'openWhenActive' in this.field && this.field.openWhenActive === true) ||
      // If openWhenActive is NOT in the field, than we use the default
      (!!this.field &&
        !('openWhenActive' in this.field) &&
        !!this.getDefaultValue('openWhenActive'))
    ) {
      !this.field?.readonly && !this.field?.disabled && datepicker?.open();
    }
  }
}
