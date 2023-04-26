import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Input,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { NgxDynamicJsonFormService, Utils } from '@ngx-dynamic-json-form/core';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  Observable,
  ReplaySubject,
  startWith,
  takeUntil,
  tap,
} from 'rxjs';

/**
 * The Material Design Mat Form Field Wrapper Component.
 * This component is used in all material specific components to add most of the form field behaviors to all the elements.
 *
 * @export
 * @class NdfMatFormFieldComponent
 * @implements {OnDestroy}
 * @implements {AfterViewInit}
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[ndf-mat-form-field]',
  templateUrl: './ndf-mat-form-field.component.html',
  styleUrls: ['./ndf-mat-form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NdfMatFormFieldComponent implements OnDestroy, AfterViewInit {
  /**
   * The current form group instance.
   *
   * @type {FormGroup}
   * @memberof NdfMatFormFieldComponent
   */
  @Input() public form!: FormGroup;

  /**
   * The current form field config.
   *
   * @type {*}
   * @memberof NdfMatFormFieldComponent
   */
  @Input() public field!: any;

  /**
   * Shall the "helper" input element being deleted after initialization?
   * Disabling this flag is needed for example for checkboxes, radio-buttons, toggles etc.
   *
   * @type {boolean}
   * @memberof NdfMatFormFieldComponent
   */
  @Input() public replaceInput: boolean = true;

  /**
   * This subject is used to unsubscribe from all subscriptions.
   *
   * @protected
   * @type {ReplaySubject<boolean>}
   * @memberof NdfMatFormFieldComponent
   */
  protected destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  /**
   * The current state, if the AfterViewInit Lifecycle hook wasn't called yet.
   *
   * @type {BehaviorSubject<boolean>}
   * @memberof NdfMatFormFieldComponent
   */
  public isBeforeViewInit$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  /**
   * The instance of the MatFormFieldControl.
   *
   * @private
   * @type {MatFormFieldControl<unknown>}
   * @memberof NdfMatFormFieldComponent
   */
  @ContentChild(MatFormFieldControl)
  private _matFormControl!: MatFormFieldControl<unknown>;

  /**
   * The instance of the MatFormField.
   *
   * @private
   * @type {MatFormField}
   * @memberof NdfMatFormFieldComponent
   */
  @ViewChild(MatFormField) private _matFormField!: MatFormField;

  /**
   * The custom error state matcher.
   *
   * @type {ErrorStateMatcher}
   * @memberof NdfMatFormFieldComponent
   */
  public errorStateMatcher: ErrorStateMatcher = Utils.getErrorStateMatcher();

  /**
   * Is the current field a range field?
   *
   * @readonly
   * @type {boolean}
   * @memberof NdfMatFormFieldComponent
   */
  public get isRange(): boolean {
    //TODO: Move to config and service
    return ['datepicker-range', 'slider-range'].includes(this.field.type);
  }

  /**
   * Creates an instance of NdfMatFormFieldComponent.
   *
   * @param {NgxDynamicJsonFormService} dynamicJsonFormService
   * @param {ChangeDetectorRef} _cd
   * @memberof NdfMatFormFieldComponent
   */
  public constructor(
    public dynamicJsonFormService: NgxDynamicJsonFormService,
    private _cd: ChangeDetectorRef
  ) {}

  /**
   * @override
   * @inheritdoc
   */
  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  /**
   * Returns a object of all global properties to a given key.
   *
   * @param {string} key
   * @return {*}
   * @memberof NdfMatFormFieldComponent
   */
  public getDefaultValue(key: string): any {
    const options = {
      ...this.dynamicJsonFormService.getLayoutOption('default'),
      ...this.dynamicJsonFormService.getLayoutOption(Utils.camelCase(String(this.field?.type))),
    };

    return !!this.field && key in this.field ? (this.field as any)[key] : options[key] || null;
  }

  /**
   * Returns the AbstractControl to a given key, if exists otherwise null.
   *
   * @param {(string | undefined)} [key]
   * @return {(AbstractControl<any> | null)}
   * @memberof NdfMatFormFieldComponent
   */
  public getFormControl(key?: string | undefined): AbstractControl<any> | null {
    return this.form.get(String(key || this.field?.key));
  }

  /**
   * @override
   * @inheritdoc
   */
  public ngAfterViewInit(): void {
    this._repairFormField();

    if (this.isRange) {
      this._enableRangeChangeDetection();
    }
  }

  /**
   * A custom onPrefixClick callback will be used, if it was passed in the form field config.
   *
   * @param {(PointerEvent | MouseEvent)} $event
   * @memberof NdfMatFormFieldComponent
   */
  public onPrefixClick($event: PointerEvent | MouseEvent): void {
    !!this.field &&
      'onPrefixClick' in this.field &&
      typeof this.field.onPrefixClick === 'function' &&
      this.field.onPrefixClick($event);
  }

  /**
   * A custom onSuffixClick callback will be used, if it was passed in the form field config.
   *
   * @param {(PointerEvent | MouseEvent)} $event
   * @memberof NdfMatFormFieldComponent
   */
  public onSuffixClick($event: PointerEvent | MouseEvent): void {
    !!this.field &&
      'onSuffixClick' in this.field &&
      typeof this.field.onSuffixClick === 'function' &&
      this.field.onSuffixClick($event);
  }

  /**
   * Returns an array of all errors of an AbstractControl to a given key.
   *
   * @param {(string | undefined)} key
   * @return {string[]}
   * @memberof NdfMatFormFieldComponent
   */
  public getErrors(key: string | undefined): string[] {
    key = key ?? '';

    if (this.isRange) {
      return this._getRangeErrors(key);
    }

    const control: AbstractControl<any> | null = this.form.get(key);

    return control?.touched || control?.dirty ? Utils.getErrors(key, this.form) : [];
  }

  /**
   * This method clears the current form control.
   *
   * @memberof NdfMatFormFieldComponent
   */
  public clearInput(): void {
    const control: AbstractControl = this.getFormControl()!;
    control.patchValue(Array.isArray(control.value) ? [] : '');
  }

  /**
   * This method is used to repair the MatFormField.
   *
   * This is a hacky way to use a mat-form-field without a matInput.
   * @see: https://github.com/angular/components/issues/9411
   * @see: https://github.com/angular/angular/issues/37319
   *
   * @private
   * @memberof NdfMatFormFieldComponent
   */
  private _repairFormField(): void {
    this._matFormField._control = this._matFormControl;

    // This is a hacky way to use a mat-form-field for non matInputs, like Sliders, SlideToggles...
    if (this.replaceInput) {
      this.isBeforeViewInit$.next(false);
    }

    // it's a bit hacky, but we need to run these methods again
    setTimeout(() => {
      this._matFormField.ngAfterContentInit();
      this._matFormField.ngAfterContentChecked();
      this._matFormField.ngAfterViewInit();
    });
  }

  /**
   * This method enables the change detection for range form fields.
   *
   * @private
   * @memberof NdfMatFormFieldComponent
   */
  private _enableRangeChangeDetection(): void {
    combineLatest(
      this.dynamicJsonFormService.rangeEndings.map((ending: string): Observable<any> => {
        const control: AbstractControl | null = this.form.get(
          Utils.addEnding(this.field.key, ending)
        );

        return control!.valueChanges.pipe(
          startWith(control!.value || null),
          debounceTime(100),
          tap(() => this._cd.detectChanges()),
          takeUntil(this.destroyed$)
        );
      })
    )
      .pipe(takeUntil(this.destroyed$))
      .subscribe();
  }

  /**
   * Returns an array of all errors of an AbstractControl to a given key for range form fields.
   *
   * @private
   * @param {string} key
   * @return {string[]}
   * @memberof NdfMatFormFieldComponent
   */
  private _getRangeErrors(key: string): string[] {
    let isDirtyOrTouched: boolean = false;

    let errors: string[] = [];

    this.dynamicJsonFormService.rangeEndings.forEach((ending: string) => {
      const control: AbstractControl<any> | null = this.form.get(Utils.addEnding(key, ending));

      isDirtyOrTouched =
        isDirtyOrTouched || (control?.touched ?? false) || (control?.dirty ?? false);

      errors = [...errors, ...Utils.getErrors(key + ending, this.form)];
    });

    return isDirtyOrTouched ? [...new Set(errors)] : [];
  }
}
