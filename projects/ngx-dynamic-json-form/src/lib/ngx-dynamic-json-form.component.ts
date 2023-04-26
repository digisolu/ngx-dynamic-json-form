import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { NgxDynamicJsonFormService } from './services';
import { FormField } from './types';
import { Utils } from './utils';

/**
 * The main Component of NgxDynamicJsonForm.
 *
 * @export
 * @abstract
 * @class NgxDynamicJsonFormComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {AfterViewInit}
 */
@Component({
  selector: 'ngx-dynamic-json-form-core',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export abstract class NgxDynamicJsonFormComponent implements OnInit, OnDestroy, AfterViewInit {
  /**
   * The FormGroup Instance of the dynamic form.
   *
   * @type {FormGroup<any>}
   * @memberof NgxDynamicJsonFormComponent
   */
  public form: FormGroup<any> = new FormGroup({});

  /**
   * The class name for the form.
   *
   * @type {string}
   * @memberof NgxDynamicJsonFormComponent
   */
  @Input() public formClassName: string = '';

  /**
   * The dynamic form field json configuration.
   *
   * @type {FormField[]}
   * @memberof NgxDynamicJsonFormComponent
   */
  @Input() public fields: FormField[] = [];

  /**
   * The initial values of the form.
   *
   * @type {({
   *     [key: string]: string | number | string[] | number[] | null | undefined;
   *   })}
   * @memberof NgxDynamicJsonFormComponent
   */
  @Input() public initial: {
    [key: string]: string | number | string[] | number[] | null | undefined;
  } = {};

  /**
   * This EventEmitter can be used to get the instance of the FormGroup.
   *
   * @type {EventEmitter<FormGroup>}
   * @memberof NgxDynamicJsonFormComponent
   */
  @Output() public getForm: EventEmitter<FormGroup> = new EventEmitter();

  /**
   * Is the form currently loading?
   *
   * @type {boolean}
   * @memberof NgxDynamicJsonFormComponent
   */
  public isLoading: boolean = true;

  /**
   * Creates an instance of NgxDynamicJsonFormComponent.
   *
   * @param {NgxDynamicJsonFormService} dynamicJsonFormService
   * @memberof NgxDynamicJsonFormComponent
   */
  public constructor(
    protected dynamicJsonFormService: NgxDynamicJsonFormService,
    protected changeDetectorRef: ChangeDetectorRef
  ) {}

  /**
   * This method is used to trigger the generation of the form.
   *
   * @inheritdoc
   */
  public ngOnInit(): void {
    this.isLoading = true;

    this._generateForm(this.fields);
  }

  /**
   * This method patches the initial values to the form and emits the getForm EventEmitter.
   *
   * @inheritdoc
   */
  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoading = false;

      this.form.patchValue(this.initial);

      this.getForm.emit(this.form);

      this.changeDetectorRef.detectChanges();
    });
  }

  /**
   * This method destroys the FormGroup, creates a new FormGroup and emits the getForm EventEmitter.
   *
   * @inheritdoc
   */
  public ngOnDestroy(): void {
    this.form = new FormGroup({});
    this.initial = {};
    this.getForm.emit(this.form);
  }

  /**
   * This method checks, if the given type is an allowed and registered form field.
   *
   * @param {(string | undefined)} type
   * @return
   * @memberof NgxDynamicJsonFormComponent
   */
  public isFormField(type: string | undefined) {
    return !!type && !!this.dynamicJsonFormService.components?.[type];
  }

  /**
   * Returns the result of a merged object of all global properties to a given key.
   *
   * @param {string} key
   * @return {*}
   * @memberof NgxDynamicJsonFormComponent
   */
  public getDefaultValue(key: string): any {
    return this.dynamicJsonFormService.getLayoutOption('default')[key] || null;
  }

  /**
   * This method generates a new FormGroup instance of the given FormField configuration.
   *
   * @private
   * @param {FormField[]} fields
   * @memberof NgxDynamicJsonFormComponent
   */
  private _generateForm(fields: FormField[]): void {
    fields.forEach((field: FormField) => {
      switch (field.type) {
        case 'html':
        case 'button':
          break;

        case 'multi-row':
          this._addMultiRow(field);
          break;

        case 'datepicker-range':
        case 'slider-range':
          this._addRangeControls(field);
          break;

        case 'container':
          'fields' in field && this._generateForm(field.fields);
          break;

        default:
          Utils.addControl(field, this.form);
          break;
      }
    });
  }

  /**
   * This method adds 2 range controls and add the range ending to a given key to the FormGroup.
   *
   * @private
   * @param {FormField} field
   * @memberof NgxDynamicJsonFormComponent
   */
  private _addRangeControls(field: FormField): void {
    this.dynamicJsonFormService.rangeEndings.forEach((ending: string) => {
      Utils.addControl(
        {
          ...field,
          key: Utils.addEnding(field.key, ending),
          validators: (field as any)?.validators || [],
          asyncValidators: (field as any)?.asyncValidators || [],
        } as any,
        this.form
      );
    });
  }

  /**
   * This method adds a MultiRow to the FormGroup.
   *
   * @private
   * @param {FormField} field
   * @memberof NgxDynamicJsonFormComponent
   */
  private _addMultiRow(field: FormField): void {
    const formGroups: FormGroup[] = Utils.getMultiRow(
      field,
      !!field.key && !!this.initial[field.key] ? this.initial[field.key] : []
    );

    if (!!field.key) {
      // add the form array.
      this.form.addControl(field.key, new FormArray(formGroups));

      // check, if we need to disable the array
      'disabled' in field && field.disabled && this.form.get(field.key)?.disable();
    }
  }
}
