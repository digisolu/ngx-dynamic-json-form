import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { AbstractFormFieldComponent, BasicOption } from '@ngx-dynamic-json-form/core';

import { MatMultiCheckbox, MaterialOptions } from '../../interfaces';
import { FormFieldType } from '../../types';

/**
 * The Material Design Specific MultiCheckbox Component.
 *
 * @export
 * @class MultiCheckboxComponent
 * @extends {AbstractFormFieldComponent<MatMultiCheckbox>}
 */
@Component({
  selector: 'ndf-mat-multi-checkbox',
  templateUrl: './multi-checkbox.component.html',
  styleUrls: ['./multi-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MultiCheckboxComponent extends AbstractFormFieldComponent<MatMultiCheckbox> {
  /**
   * The form field type to identify the element.
   *
   * @static
   * @type {FormFieldType}
   * @memberof MultiCheckboxComponent
   */
  public static key: FormFieldType = 'multi-checkbox';

  /**
   * @override
   * @inheritdoc
   */
  protected override requiredParams: string[] = ['key', 'type', 'options'];

  /**
   * A getter to return all non disabled options.
   *
   * @readonly
   * @private
   * @type {any[]}
   * @memberof MultiCheckboxComponent
   */
  private get _options(): any[] {
    return (
      this.field?.options
        ?.filter((item: BasicOption) => !item.disabled)
        .map((item: BasicOption) => item.value) || []
    );
  }

  /**
   * A getter to return the current value of the component.
   *
   * @readonly
   * @private
   * @type {any[]}
   * @memberof MultiCheckboxComponent
   */
  private get _values(): any[] {
    return this.getFormControl()?.value || [];
  }

  /**
   * This method checks, if all other checkboxes are checked.
   *
   * @return {boolean}
   * @memberof MultiCheckboxComponent
   */
  public isChecked(): boolean {
    return !!this._values && !!this._options.length && this._values.length === this._options.length;
  }

  /**
   * This method checks, if only some other checkboxes are checked instead of all.
   *
   * @return {boolean}
   * @memberof MultiCheckboxComponent
   */
  public isIndeterminate(): boolean {
    return (
      !!this._values &&
      !!this._options.length &&
      !!this._values.length &&
      this._values.length < this._options.length
    );
  }

  /**
   * The callback method triggers after the selection of the header checkbox was changed.
   *
   * @param {(MatCheckboxChange | any)} change
   * @memberof MultiCheckboxComponent
   */
  public toggleSelection(change: MatCheckboxChange | any): void {
    this.getFormControl()?.setValue(change.checked ? this._options : []);
  }
}
