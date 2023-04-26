import { ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { debounceTime, distinctUntilChanged, startWith, switchMap, takeUntil, tap } from 'rxjs';

import { MatMultiAutocomplete } from '../../interfaces';
import { FormFieldType } from '../../types';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';

/**
 * The Material Design Specific MultiAutocomplete Component.
 *
 * @export
 * @class MultiAutocompleteComponent
 * @extends {AutocompleteComponent<MatMultiAutocomplete>}
 */
@Component({
  selector: 'ndf-mat-multi-autocomplete',
  templateUrl: './multi-autocomplete.component.html',
  styleUrls: [
    './../autocomplete/autocomplete.component.scss',
    './multi-autocomplete.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,
      useValue: {
        autoActiveFirstOption: true,
        overlayPanelClass: 'ndf-multi-autocomplete-overlay',
      },
    },
  ],
})
export class MultiAutocompleteComponent extends AutocompleteComponent<MatMultiAutocomplete> {
  /**
   * @override
   * @inheritdoc
   */
  public static override key: FormFieldType = 'multi-autocomplete';

  /**
   * the search field form control.
   *
   * @type {FormControl}
   * @memberof MultiAutocompleteComponent
   */
  public searchControl: FormControl = new FormControl();

  /**
   * These keys are used to accept a new input as a value.
   *
   * @type {number[]}
   * @memberof MultiAutocompleteComponent
   */
  public separatorKeys: number[] = [ENTER];

  /**
   * The ElementRef of the input, where all chips will be inserted.
   *
   * @private
   * @type {ElementRef<HTMLInputElement>}
   * @memberof MultiAutocompleteComponent
   */
  @ViewChild('input') private _input!: ElementRef<HTMLInputElement>;

  /**
   * The instance of the MatAutocompleteTrigger.
   *
   * @private
   * @type {MatAutocompleteTrigger}
   * @memberof MultiAutocompleteComponent
   */
  @ViewChild('autocompleteTrigger')
  private _matTrigger!: MatAutocompleteTrigger;

  /**
   * A getter to return the current value of the component.
   *
   * @readonly
   * @private
   * @type {any[]}
   * @memberof MultiAutocompleteComponent
   */
  private get _values(): any[] {
    return this.getFormControl()?.value || [];
  }

  /**
   * The current inserted search string.
   *
   * @private
   * @type {string}
   * @memberof MultiAutocompleteComponent
   */
  private _searchString: string = '';

  /**
   * This method is used to filter the options after a search string was entered.
   *
   * @override
   * @inheritdoc
   */
  public override ngOnInit(): void {
    super.ngOnInit(false);

    this.visibleOptions$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(250),
      distinctUntilChanged(),
      tap((value: string) => (this._searchString = value)),
      switchMap((value: string) => this.onFilter$(value || '')),
      takeUntil(this.destroyed$)
    );

    !!this.field?.disabled ? this.searchControl.disable() : this.searchControl.enable();
  }

  /**
   * Remove the clicked chip / value.
   *
   * @param {string} value
   * @memberof MultiAutocompleteComponent
   */
  public remove(value: string): void {
    this.getFormControl()!.patchValue([
      ...this.getFormControl()!.value.filter((formValue: any) => formValue !== value),
    ]);

    // Update the panel position to avoid whitespace.
    this._updatePanelPosition();
  }

  /**
   * The "callback" method triggered after a selection has changed.
   *
   * @param {*} value
   * @memberof MultiAutocompleteComponent
   */
  public selected(value: any): void {
    // reset the field with the current search otherwise the input would be the selected value instead.
    this._input.nativeElement.value = this._searchString;
    this.searchControl.setValue(this._searchString);

    // add / remove a selection in the form
    this._values.includes(value) ? this.remove(value) : this._add(value);

    // we need to reopen the panel, otherwise the panel isn't working anymore
    requestAnimationFrame(() => {
      this._input.nativeElement.blur();
      this._input.nativeElement.focus();
    });
  }

  /**
   * This method returns, if the given value is already selected or not.
   *
   * @param {*} value
   * @return {boolean}
   * @memberof MultiAutocompleteComponent
   */
  public isChecked(value: any): boolean {
    return this.getFormControl()!.value.includes(value);
  }

  /**
   * This method triggers the updatePosition method of the MatAutocompleteTrigger.
   *
   * @private
   * @memberof MultiAutocompleteComponent
   */
  private _updatePanelPosition(): void {
    requestAnimationFrame(() => this._matTrigger.updatePosition());
  }

  /**
   * Add a chip / value.
   *
   * @private
   * @param {string} value
   * @memberof MultiAutocompleteComponent
   */
  private _add(value: string): void {
    this.getFormControl()!.patchValue([...this.getFormControl()!.value, value]);

    // Update the panel position to avoid whitespace.
    this._updatePanelPosition();
  }
}
