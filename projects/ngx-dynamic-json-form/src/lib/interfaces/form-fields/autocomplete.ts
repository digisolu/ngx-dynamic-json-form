import { Observable } from 'rxjs';

import { BasicCallbacks, BasicOption, FormFieldBasics, GroupOption } from './base';

/**
 * The DynamicFormFieldAutocomplete Interface.
 *
 * @export
 * @interface DynamicFormFieldAutocomplete
 * @extends {FormFieldBasics}
 * @extends {BasicCallbacks}
 */
export interface DynamicFormFieldAutocomplete extends FormFieldBasics, BasicCallbacks {
  /**
   * @override
   * @inheritdoc
   */
  type: 'autocomplete' | 'multi-autocomplete';

  /**
   * Shall a empty option be inserted?
   *
   * @type {boolean}
   * @memberof DynamicFormFieldAutocomplete
   */
  showEmptyOption?: boolean;

  /**
   * The visible text used as option.
   *
   * @type {string}
   * @memberof DynamicFormFieldAutocomplete
   */
  showEmptyOptionText?: string;

  /**
   * Is the field read only?
   *
   * @type {boolean}
   * @memberof DynamicFormFieldAutocomplete
   */
  readonly?: boolean;

  /**
   * The placeholder text to be shown up.
   *
   * @type {boolean}
   * @memberof DynamicFormFieldAutocomplete
   */
  placeholder?: string;

  /**
   * The options array.
   *
   * @type {(GroupOption[] | BasicOption[])}
   * @memberof DynamicFormFieldAutocomplete
   */
  options?: GroupOption[] | BasicOption[];

  /**
   * A callback function to override the default filter method.
   *
   * @param {string} searchTerm
   * @return {Observable<GroupOption[]>}
   * @memberof DynamicFormFieldAutocomplete
   */
  onFilter$?(searchTerm: string): Observable<GroupOption[]>;
}
