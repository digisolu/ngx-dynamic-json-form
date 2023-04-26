import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractFormFieldComponent, GroupOption, Utils } from '@ngx-dynamic-json-form/core';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  startWith,
  switchMap,
  takeUntil,
} from 'rxjs';

import { MatAutocomplete } from '../../interfaces';
import { FormFieldType } from '../../types';
import { MatUtils } from '../../utils';

/**
 * The Material Design Specific Autocomplete Component.
 *
 * @export
 * @class AutocompleteComponent
 * @extends {AbstractFormFieldComponent<T>}
 * @template T
 */
@Component({
  selector: 'ndf-mat-autocomplete',
  styleUrls: ['./autocomplete.component.scss'],
  templateUrl: './autocomplete.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent<T extends MatAutocomplete>
  extends AbstractFormFieldComponent<T>
  implements OnInit
{
  /**
   * The form field type to identify the element.
   *
   * @static
   * @type {FormFieldType}
   * @memberof AutocompleteComponent
   */
  public static key: FormFieldType = 'autocomplete';

  /**
   * These are the filtered options to be rendered.
   *
   * @type {Observable<GroupOption[]>}
   * @memberof AutocompleteComponent
   */
  public visibleOptions$!: Observable<GroupOption[]>;

  /**
   * @override
   * @inheritdoc
   */
  protected override requiredParams: string[] = ['key', 'type', 'options'];

  /**
   * This method returns the label of an option.
   *
   * @param {*} value
   * @return {string}
   */
  public getLabel = (value: any): string => {
    const foundOption: GroupOption[] = Utils.toFlatArray(this.field?.options).filter(
      (option) => option.value === value
    );

    return (foundOption[0] ?? { label: value }).label;
  };

  /**
   * This method is used to filter the options after a search string was entered.
   *
   * @override
   * @inheritdoc
   */
  public override ngOnInit(init: boolean = true): void {
    super.ngOnInit();

    init === true &&
      (this.visibleOptions$ = this.getFormControl()!.valueChanges.pipe(
        startWith(this.getFormControl()!.value || ''),
        debounceTime(250),
        distinctUntilChanged(),
        switchMap((value: string) => this.onFilter$(value || '')),
        takeUntil(this.destroyed$)
      ));
  }

  /**
   * A custom onFilter callback will be used, if it was passed in the form field config.
   *
   * @protected
   * @param {string} value
   * @return {Observable<GroupOption[]>}
   * @memberof AutocompleteComponent
   */
  protected onFilter$(value: string): Observable<GroupOption[]> {
    return !!this.field && 'onFilter$' in this.field && typeof this.field.onFilter$ === 'function'
      ? this.field.onFilter$(value)
      : MatUtils.filterEntries$(this.getLabel(value), this.field?.options ?? []);
  }
}
