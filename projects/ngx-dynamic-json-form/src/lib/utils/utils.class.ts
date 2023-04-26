import {
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { FormFieldBasics, GroupOption } from '../interfaces/form-fields';
import { FormField, FormFieldType } from '../types';

/**
 * A static helper class to avoid duplicate code.
 *
 * @export
 * @class Utils
 */
export class Utils {
  /**
   * These form field types are multi selections.
   *
   * //TODO: Move to config and service
   *
   * @static
   * @type {FormFieldType[]}
   * @memberof Utils
   */
  public static multiSelections: FormFieldType[] = ['multi-autocomplete', 'multi-checkbox'];

  /**
   * This method generates a MultiRow FormGroup.
   *
   * @static
   * @param {FormField} field
   * @param {*} initial
   * @return {FormGroup[]}
   * @memberof Utils
   */
  public static getMultiRow(field: FormField, initial: any): FormGroup[] {
    const formGroups: FormGroup[] = [];

    if (!!initial && Array.isArray(initial)) {
      initial.forEach(() => {
        const formGroup: FormGroup = new FormGroup({});

        'fields' in field &&
          Array.isArray(field.fields) &&
          field.fields
            ?.filter(
              (innerField: FormField) =>
                //TODO: ? Move to config and service ?
                !['button', 'container', 'html', 'multi-row'].includes(innerField.type)
            )
            .forEach((innerField: FormField) =>
              Utils.addControl(innerField as FormField, formGroup)
            );

        formGroups.push(formGroup);
      });
    }

    return formGroups;
  }

  /**
   * This method adds a new FormControl to a given FormGroup.
   *
   * @static
   * @param {FormField} field
   * @param {FormGroup} formGroup
   * @memberof Utils
   */
  public static addControl(field: FormField, formGroup: FormGroup): void {
    !!field.key && formGroup.addControl(field.key, Utils.getFormControl(field));
  }

  /**
   * This generates a new FormControl.
   *
   * @static
   * @param {FormFieldBasics} field
   * @return {FormControl}
   * @memberof Utils
   */
  public static getFormControl(field: FormFieldBasics): FormControl {
    const formControl: FormControl = new FormControl(
      {
        value: Utils.isMultiSelection(field) ? [] : null,
        disabled: 'disabled' in field ? !!field.disabled : false,
      },
      {
        validators: Utils.getValidators(field),
        nonNullable: field?.nonNullable || false,
        asyncValidators: Utils.getAsyncValidators(field),
        updateOn: field?.updateOn || 'change',
      }
    );

    return formControl;
  }

  /**
   * This method checks, if a FormField is a MultiSelections FormField or not.
   *
   * @static
   * @param {FormField} field
   * @return {boolean}
   * @memberof Utils
   */
  public static isMultiSelection(field: FormField): boolean {
    return Utils.multiSelections.includes(field.type);
  }

  /**
   * This method returns a ValidatorFn array.
   *
   * @static
   * @param {FormFieldBasics} field
   * @return {ValidatorFn[]}
   * @memberof Utils
   */
  public static getValidators(field: FormFieldBasics): ValidatorFn[] {
    const validators: ValidatorFn[] = field?.validators || [];

    if (field.required === true) {
      validators.push(Validators.required);
    }

    return validators;
  }

  /**
   * This method returns a AsyncValidatorFn array.
   *
   * @static
   * @param {FormFieldBasics} field
   * @return {AsyncValidatorFn[]}
   * @memberof Utils
   */
  public static getAsyncValidators(field: FormFieldBasics): AsyncValidatorFn[] {
    const validators: AsyncValidatorFn[] = field?.asyncValidators || [];

    return validators;
  }

  /**
   * This method returns an array of all errors of a given key in a FormGroup.
   *
   * @static
   * @param {string} key
   * @param {FormGroup} formGroup
   * @return {string[]}
   * @memberof Utils
   */
  public static getErrors(key: string, formGroup: FormGroup): string[] {
    return Object.keys(formGroup.get(key)?.errors ?? {});
  }

  /**
   * This method returns a custom error state matcher.
   *
   * @static
   * @return {ErrorStateMatcher}
   * @memberof Utils
   */
  public static getErrorStateMatcher(): ErrorStateMatcher {
    return {
      isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;

        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
      },
    };
  }

  /**
   * This method adds the ending name to a range FormControl.
   *
   * @static
   * @param {(string | undefined)} key
   * @param {string} ending
   * @return {string}
   * @memberof Utils
   */
  public static addEnding(key: string | undefined, ending: string): string {
    return `${key || ''}${ending || ''}`;
  }

  /**
   * This method flatters all GroupOptions to a 1 dimensional array of GroupOptions.
   *
   * @static
   * @param {(GroupOption[] | undefined)} [dynamicFormOptions=[]]
   * @return {GroupOption[]}
   * @memberof Utils
   */
  public static toFlatArray(dynamicFormOptions: GroupOption[] | undefined = []): GroupOption[] {
    let options: GroupOption[] = [];

    return (dynamicFormOptions ?? [])
      .map((option: GroupOption) => {
        if (option?.group && option.group.length) {
          options = [...options, ...option.group];
        }

        return option;
      })
      .concat(options.length ? Utils.toFlatArray(options) : options)
      .filter((item: GroupOption) => typeof item.group === 'undefined');
  }

  /**
   * This method returns a camel cased string.
   *
   * @static
   * @param {string} input
   * @return {string}
   * @memberof Utils
   */
  public static camelCase(input: string): string {
    return String(input).replace(/[_.-](\w|$)/g, function (_, character) {
      return character.toUpperCase();
    });
  }

  /**
   * This method checks, if a given item is an object and no array.
   *
   * @static
   * @param {*} item
   * @return {boolean}
   * @memberof Utils
   */
  public static isObject(item: any): boolean {
    return !!(item && typeof item === 'object' && !Array.isArray(item));
  }

  /**
   * This method deep merges objects or arrays.
   *
   * @static
   * @param {*} target
   * @param {*} source
   * @return {*}
   * @memberof Utils
   */
  public static deepMerge(target: any, source: any): any {
    if (Array.isArray(target) && Array.isArray(source)) {
      return Utils.mergeArray(target, source);
    }

    const output = Object.assign({}, target);

    if (Utils.isObject(target) && Utils.isObject(source)) {
      Object.keys(source).forEach((key) =>
        Utils.isObject(source[key])
          ? !(key in target)
            ? Object.assign(output, { [key]: source[key] })
            : (output[key] = Utils.deepMerge(target[key], source[key]))
          : Object.assign(output, { [key]: source[key] })
      );
    }

    return output;
  }

  /**
   * This method merges two arrays without duplicates.
   *
   * @static
   * @param {any[]} array1
   * @param {any[]} array2
   * @return {*}
   * @memberof Utils
   */
  public static mergeArray(array1: any[], array2: any[]): any {
    return [...new Set([...array1, ...array2])];
  }

  /**
   * This method sorts all keys of an array.
   *
   * @static
   * @param {*} object
   * @return {*}
   * @memberof Utils
   */
  public static sortObject(object: any): any {
    return Utils.isObject(object)
      ? Object.keys(object)
          .sort()
          .reduce((result: any, key: string): any => {
            result[key] = object[key];
            return result;
          }, {})
      : {};
  }
}
