import {
  BasicCallbacks,
  BasicOption,
  FormFieldBasics,
  GroupOption,
} from '@ngx-dynamic-json-form/material';
import { Observable } from 'rxjs';

export interface DynamicFormFieldAutocomplete extends FormFieldBasics, BasicCallbacks {
  type: 'autocomplete' | 'multi-autocomplete';
  showEmptyOption?: boolean;
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
  options?: GroupOption[] | BasicOption[];
  onFilter$?(searchTerm: string): Observable<GroupOption[]>;
}
