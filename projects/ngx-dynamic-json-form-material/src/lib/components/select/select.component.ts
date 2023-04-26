import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AbstractFormFieldComponent, GroupOption, Utils } from '@ngx-dynamic-json-form/core';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  startWith,
  switchMap,
  takeUntil,
} from 'rxjs';

import { MatSelect } from '../../interfaces';
import { FormFieldType } from '../../types';
import { MatUtils } from '../../utils';
import { MatOption } from '@angular/material/core';

/**
 * The Material Design Specific Select Component.
 *
 * @export
 * @class SelectComponent
 * @extends {AbstractFormFieldComponent<MatSelect>}
 */
@Component({
  selector: 'ndf-mat-select',
  styleUrls: ['./select.component.scss'],
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent extends AbstractFormFieldComponent<MatSelect> {
  /**
   * The form field type to identify the element.
   *
   * @static
   * @type {FormFieldType}
   * @memberof SelectComponent
   */
  public static key: FormFieldType = 'select';

  /**
   * These are the filtered options to be rendered.
   *
   * @type {Observable<GroupOption[]>}
   * @memberof SelectComponent
   */
  public visibleOptions$!: Observable<GroupOption[]>;

  /**
   * Control for the Search Filter.
   *
   * @type {(FormControl<string | null>)}
   * @memberof SelectComponent
   */
  public searchFilter: FormControl<string | null> = new FormControl<string | null>('');

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
   * @memberof SelectComponent
   */
  private get _options(): any[] {
    return Utils.toFlatArray(this.field?.options)
      ?.filter((item: GroupOption) => !item.disabled)
      .map((item: GroupOption) => item.value);
  }

  /**
   * A getter to return the current value of the component.
   *
   * @readonly
   * @private
   * @type {(any[] | undefined)}
   * @memberof SelectComponent
   */
  private get _values(): any[] | undefined {
    const values: any[] = this.getFormControl()?.value || [];

    return values[0] === undefined ? values.shift() : values;
  }

  /**
   * This method is used to filter the options after a search string was entered.
   *
   * @override
   * @inheritdoc
   */
  public override ngOnInit(): void {
    super.ngOnInit();

    this.visibleOptions$ = this.searchFilter.valueChanges.pipe(
      startWith(''),
      debounceTime(250),
      map((value) => (!!value ? String(value) : '')),
      distinctUntilChanged(),
      switchMap((value: string) => this.onFilter$(value || '')),
      takeUntil(this.destroyed$)
    );
  }

  /**
   * A custom onFilter callback will be used, if it was passed in the form field config.
   *
   * @protected
   * @param {string} value
   * @return {Observable<GroupOption[]>}
   * @memberof SelectComponent
   */
  protected onFilter$(value: string): Observable<GroupOption[]> {
    return !!this.field && 'onFilter$' in this.field && typeof this.field.onFilter$ === 'function'
      ? this.field.onFilter$(value)
      : MatUtils.filterEntries$(value, this.field?.options ?? []);
  }

  /**
   * This method checks, if all other checkboxes are checked.
   *
   * @return {boolean}
   * @memberof SelectComponent
   */
  public isChecked(): boolean {
    return !!this._values && !!this._options.length && this._values.length === this._options.length;
  }

  /**
   * This method checks, if only some other checkboxes are checked instead of all.
   *
   * @return {boolean}
   * @memberof SelectComponent
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
   * @param {boolean} checked
   * @memberof SelectComponent
   */
  public toggleSelection(checked: boolean): void {
    this.getFormControl()?.setValue(checked ? this._options : []);
  }

  /**
   * A custom compareWith callback will be used, if it was passed in the form field config.
   *
   * @param {*} object1
   * @param {*} object2
   * @return {boolean}
   * @memberof SelectComponent
   */
  public compareWith(object1: any, object2: any): boolean {
    return !!this.field &&
      'compareWith' in this.field &&
      typeof this.field.compareWith === 'function'
      ? this.field.compareWith(object1, object2)
      : Utils.isObject(object1) &&
        Utils.isObject(object2) &&
        !(object1 instanceof MatOption || object2 instanceof MatOption)
      ? JSON.stringify({ ...Utils.sortObject(object1) }) ===
        JSON.stringify({ ...Utils.sortObject(object2) })
      : object1 === object2;
  }

  /**
   * This method returns the panel classes.
   *
   * @return {string[]}
   * @memberof SelectComponent
   */
  public getPanelClass(): string[] {
    const classes: string[] = [
      ...(Array.isArray(this.getDefaultValue('panelClass'))
        ? this.getDefaultValue('panelClass')
        : [this.getDefaultValue('panelClass')]),
    ];

    classes.push(this.field?.multiple === true ? 'ndf-panel-multiple' : 'ndf-panel-single');

    return classes;
  }
}
