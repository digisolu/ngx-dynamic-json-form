import { DynamicFormFieldSelect, GroupOption } from '@ngx-dynamic-json-form/core';
import { Observable } from 'rxjs';

import { MatFormField } from './mat-form-field';

/**
 * The MatSelect Interface to extend the Default Interface with Material Design specific properties.
 *
 * @export
 * @interface MatSelect
 * @extends {DynamicFormFieldSelect}
 * @extends {MatFormField}
 */
export interface MatSelect extends DynamicFormFieldSelect, MatFormField {
  /**
   * Whether to center the active material option over the trigger.
   *
   * @type {boolean}
   * @memberof MatSelect
   */
  disableOptionCentering?: boolean;

  /**
   * A class / classes to be passed to the material select panel.
   *
   * @type {(string | string[])}
   * @memberof MatSelect
   */
  panelClass?: string | string[];

  /**
   * Material default time to wait in milliseconds after the last keystroke before moving the focus to an item.
   *
   * @type {number}
   * @memberof MatSelect
   */
  typeaheadDebounceInterval?: number;

  /**
   * Shall a select all option being available?
   *
   * @type {boolean}
   * @memberof MatSelect
   */
  showSelectAll?: boolean;

  /**
   * The text for the select all option.
   *
   * @type {string}
   * @memberof MatSelect
   */
  showSelectAllText?: string;

  /**
   * Shall a search field being available above the options?
   *
   * @type {boolean}
   * @memberof MatSelect
   */
  showSearch?: boolean;

  /**
   * The text, if no entries were found.
   *
   * @type {string}
   * @memberof MatSelect
   */
  showSearchNoEntriesText?: string;

  /**
   * The text for the search field.
   *
   * @type {string}
   * @memberof MatSelect
   */
  showSearchText?: string;

  /**
   * This methods can be used to override the original behaviors for filtering the options.
   *
   * @param {string} searchTerm
   * @return {Observable<GroupOption[]>}
   * @memberof MatSelect
   */
  onFilter$?(searchTerm: string): Observable<GroupOption[]>;

  /**
   * This methods can be used to override the original behaviors for comparing the elements.
   *
   * @param {*} object1
   * @param {*} object2
   * @return {boolean}
   * @memberof MatSelect
   */
  compareWith?(object1: any, object2: any): boolean;
}
