import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ReplaySubject } from 'rxjs';

import { BaseField, BasicCallbacks } from '../../interfaces/form-fields';
import { NgxDynamicJsonFormService } from '../../services';
import { FormField, FormFieldType, HTMLElementEvent } from '../../types';
import { Utils } from '../../utils';

/**
 * The AbstractFormFieldComponent used by all form fields.
 *
 * @export
 * @abstract
 * @class AbstractFormFieldComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @template T
 */
@Component({
  selector: 'ndf-base',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export abstract class AbstractFormFieldComponent<T extends BaseField> implements OnInit, OnDestroy {
  /**
   * The current form group used by the instance of NgxDynamicJsonForm.
   *
   * @type {FormGroup}
   * @memberof AbstractFormFieldComponent
   */
  @Input() public form: FormGroup = new FormGroup({});

  /**
   * The current field data / config used inside the form field.
   *
   * @type {(T | undefined)}
   * @memberof AbstractFormFieldComponent
   */
  @Input() public field: T | undefined;

  /**
   * This HostBinding is used to add additional classes to the host element.
   *
   * @type {string}
   * @memberof AbstractFormFieldComponent
   */
  @HostBinding('class') public className: string = '';

  /**
   * A custom error state matcher used in all form fields.
   *
   * @type {ErrorStateMatcher}
   * @memberof AbstractFormFieldComponent
   */
  public errorStateMatcher: ErrorStateMatcher = Utils.getErrorStateMatcher();

  /**
   * This subject is used to unsubscribe from all subscriptions.
   *
   * @protected
   * @type {ReplaySubject<boolean>}
   * @memberof AbstractFormFieldComponent
   */
  protected destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  /**
   * If a component doesn't need a instance of form, we can override it with false.
   * E.g. HTMLComponent
   *
   * @protected
   * @type {boolean}
   * @memberof AbstractFormFieldComponent
   */
  protected isFormRequired: boolean = true;

  /**
   * These are the required parameters for the current form field.
   *
   * @protected
   * @type {string[]}
   * @memberof AbstractFormFieldComponent
   */
  protected requiredParams: string[] = ['key', 'type'];

  /**
   * Creates an instance of AbstractFormFieldComponent.
   *
   * @param {NgxDynamicJsonFormService} dynamicJsonFormService
   * @memberof AbstractFormFieldComponent
   */
  public constructor(public dynamicJsonFormService: NgxDynamicJsonFormService) {}

  /**
   * This method is used to unsubscribe from all subscriptions.
   *
   * @inheritdoc
   *
   */
  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  /**
   * This method returns the field key of a field configuration.
   *
   * @param {(string | undefined)} [key]
   * @return {string}
   * @memberof AbstractFormFieldComponent
   */
  public getFieldKey(key?: string | undefined): string {
    return String(key || this.field?.key);
  }

  /**
   * This method is used to check all mandatory parameters in a field.
   *
   * @inheritdoc
   */
  public ngOnInit(): void {
    if (!this.field) {
      throw new Error('[ngx-dynamic-json-form] Missing input parameter: "field"');
    }

    this.className = [`ndf-${this.field?.type}`, this.className].join(' ');

    if (this.isFormRequired && !this.form) {
      throw new Error('[ngx-dynamic-json-form] Missing input parameter: "form"');
    }

    if (
      !this.form.get(this.getFieldKey()) &&
      !this.dynamicJsonFormService.ignoreFormControlCheck.includes(this.field.type)
    ) {
      throw new Error(`[ngx-dynamic-json-form] Missing form control: "${this.field.type}"`);
    }

    this.dynamicJsonFormService.rangeEndings.forEach((ending: string) => {
      if (
        !this.form.get(Utils.addEnding(this.getFieldKey(), ending)) &&
        this.dynamicJsonFormService.rangeFormControls.includes(this.field?.type as FormFieldType)
      ) {
        throw new Error(
          `[ngx-dynamic-json-form] Missing range form control: "${Utils.addEnding(
            this.getFieldKey(),
            ending
          )}"`
        );
      }
    });

    this.requiredParams.forEach((property: string) => {
      if (!this?.field?.[property as keyof T]) {
        throw new Error(
          `[ngx-dynamic-json-form] Missing mandatory property "${property}" for input parameter: "field"`
        );
      }
    });
  }

  /**
   * Returns the AbstractControl to a given key, if exists otherwise null.
   *
   * @param {(string | undefined)} [key]
   * @return {(AbstractControl<any> | null)}
   * @memberof AbstractFormFieldComponent
   */
  public getFormControl(key?: string | undefined): AbstractControl<any> | null {
    return this.form.get(this.getFieldKey(key));
  }

  /**
   * Returns an array of all errors of an AbstractControl to a given key.
   *
   * @param {(string | undefined)} [key]
   * @return {string[]}
   * @memberof AbstractFormFieldComponent
   */
  public getErrors(key?: string | undefined): string[] {
    return Utils.getErrors(this.getFieldKey(key), this.form);
  }

  /**
   * This methods calls the 'onBlur' callback, if exists in the form field config.
   *
   * @param {(HTMLElementEvent<HTMLInputElement | any> | any)} $event
   * @memberof AbstractFormFieldComponent
   */
  public onBlur($event: HTMLElementEvent<HTMLInputElement | any> | any): void {
    const field: BasicCallbacks = this.field as BasicCallbacks;
    !!field &&
      'onBlur' in field &&
      typeof field.onBlur === 'function' &&
      field.onBlur($event?.target?.value);
  }

  /**
   * This methods calls the 'onFocus' callback, if exists in the form field config.
   *
   * @param {(HTMLElementEvent<HTMLInputElement | any> | any)} $event
   * @memberof AbstractFormFieldComponent
   */
  public onFocus($event: HTMLElementEvent<HTMLInputElement | any> | any): void {
    const field: BasicCallbacks = this.field as BasicCallbacks;
    !!field &&
      'onFocus' in field &&
      typeof field.onFocus === 'function' &&
      field.onFocus($event?.target?.value);
  }

  /**
   * This methods calls the 'onChange' callback, if exists in the form field config.
   *
   * @param {(HTMLElementEvent<HTMLInputElement | any> | any)} $event
   * @memberof AbstractFormFieldComponent
   */
  public onChange($event: HTMLElementEvent<HTMLInputElement | any> | any): void {
    const field: BasicCallbacks = this.field as BasicCallbacks;
    !!field &&
      'onChange' in field &&
      typeof field.onChange === 'function' &&
      field.onChange($event?.target?.value);
  }

  /**
   * Returns the result of a merged object of all global properties to a given key.
   *
   * @param {string} key
   * @return {*}
   * @memberof AbstractFormFieldComponent
   */
  public getDefaultValue(key: string): any {
    const options = {
      ...this.dynamicJsonFormService.getLayoutOption('default'),
      ...this.dynamicJsonFormService.getLayoutOption(Utils.camelCase(String(this.field?.type))),
    };

    return !!this.field && key in this.field ? (this.field as any)[key] : options[key] || null;
  }

  /**
   * This method is used for ngForTrackBy.
   *
   * @param {*} _
   * @param {FormField} field
   * @return {string}
   * @memberof AbstractFormFieldComponent
   */
  public trackById(_: any, field: FormField): string {
    return field?.id || '';
  }
}
