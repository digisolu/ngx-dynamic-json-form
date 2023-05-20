import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { DynamicFormFieldMultiRow } from '../../interfaces/form-fields';
import { FormField } from '../../types';
import { Utils } from '../../utils';
import { AbstractFormFieldComponent } from '../base/base.abstract';

/**
 * The Abstract class for the multi-row form field.
 * A MultiRow can be used to bundle, wrap or style elements and to use it to duplicate rows.
 *
 * @export
 * @abstract
 * @class AbstractMultiRowComponent
 * @extends {AbstractFormFieldComponent<T>}
 * @template T
 */
@Component({
  selector: 'ndf-mat-multi-row-core',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export abstract class AbstractMultiRowComponent<
  T extends DynamicFormFieldMultiRow
> extends AbstractFormFieldComponent<T> {
  /**
   * @override
   * @inheritdoc
   */
  protected override requiredParams: string[] = ['type', 'key', 'fields'];

  /**
   * Returns the current form group.
   * This method is used to cast the form.
   *
   * @return {FormGroup<any>}
   * @memberof AbstractMultiRowComponent
   */
  public getFormGroup(): FormGroup<any> {
    return this.form;
  }

  /**
   * This method returns all controls of the current form group.
   *
   * @return {FormGroup<any>[]}
   * @memberof AbstractMultiRowComponent
   */
  public getFormArrayControls(): FormGroup<any>[] {
    return this.getFormArray()?.controls as FormGroup<any>[];
  }

  /**
   * This method checks, if the given type is an allowed and registered form field.
   *
   * @param {(string | undefined)} type
   * @return
   * @memberof AbstractMultiRowComponent
   */
  public isFormField(type: string | undefined) {
    return !!type && !!this.dynamicJsonFormService.components?.[type];
  }

  /**
   * This methods generates a new row and inserts it to a given row position.
   *
   * @param {number} rowIndex
   * @memberof AbstractMultiRowComponent
   */
  public addRow(rowIndex: number): void {
    if (this.getFormArray()?.disabled) {
      return;
    }

    const row: FormGroup[] = Utils.getMultiRow(this.field as FormField, [1]);

    if (row.length === 0) {
      throw new Error('[ngx-dynamic-json-form] MultiRow was not generated correctly.');
    }

    this.getFormArray().insert(rowIndex, row[0]);
  }

  /**
   * This methods deletes a row to a given row position.
   *
   * @param {number} rowIndex
   * @memberof AbstractMultiRowComponent
   */
  public removeRow(rowIndex: number): void {
    if (this.getFormArray()?.disabled) {
      return;
    }

    this.getFormArray().removeAt(rowIndex);
  }

  /**
   * This method returns the form array.
   *
   * @protected
   * @return {FormArray}
   * @memberof AbstractMultiRowComponent
   */
  protected getFormArray(): FormArray {
    return this.form.controls[this.getFieldKey()] as FormArray;
  }

  /**
   * @override
   * @inheritdoc
   */
  public override trackById(_: any, field: FormField): string {
    return field?.id || '';
  }
}
