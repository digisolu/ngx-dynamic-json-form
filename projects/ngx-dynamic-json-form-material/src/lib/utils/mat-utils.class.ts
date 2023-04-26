import { BasicOption, GroupOption } from '@ngx-dynamic-json-form/core';
import { Observable, of } from 'rxjs';

/**
 * The Material Design Specific Utils.
 *
 * @export
 * @class MatUtils
 */
export class MatUtils {
  /**
   * This method is used to filter GroupOption / BaseOptions - Array by a given value.
   *
   * @static
   * @param {string} search
   * @param {GroupOption[]} options
   * @return {Observable<GroupOption[]>}
   * @memberof MatUtils
   */
  public static filterEntries$(search: string, options: GroupOption[]): Observable<GroupOption[]> {
    return of(
      !!search
        ? options
            .map((option: GroupOption): GroupOption => {
              const filtered: GroupOption = MatUtils.toNormalizedEntry(option);

              if ('group' in option && option?.group) {
                filtered.group = option.group.map((option) => MatUtils.toNormalizedEntry(option));
                filtered.group = MatUtils.filterGroup(filtered.group, search);
              }

              return filtered;
            })
            .filter((option: GroupOption): boolean => {
              if (!option?.group) {
                return MatUtils.filterEntry(option, search);
              }

              return option.group.length > 0;
            })
        : options
    );
  }

  /**
   * Returns a normalized GroupOption | BasicOption.
   *
   * @static
   * @param {(GroupOption | BasicOption)} option
   * @return {(GroupOption | BasicOption)}
   * @memberof MatUtils
   */
  public static toNormalizedEntry(option: GroupOption | BasicOption): GroupOption | BasicOption {
    return {
      value: option.value,
      label: option?.label,
      disabled: option?.disabled || false,
    };
  }

  /**
   * This method is used to filter GroupOption / BaseOptions - Array by a given search string.
   *
   * @static
   * @param {GroupOption[]} options
   * @param {string} search
   * @return {GroupOption[]}
   * @memberof MatUtils
   */
  public static filterGroup(options: GroupOption[], search: string): GroupOption[] {
    return options.filter((option: GroupOption) => MatUtils.filterEntry(option, search));
  }

  /**
   * This method is used to filter GroupOption / BaseOptions by a given search.
   *
   * @static
   * @param {GroupOption} option
   * @param {string} search
   * @return {boolean}
   * @memberof MatUtils
   */
  public static filterEntry(option: GroupOption, search: string): boolean {
    return (option.label || '').toLowerCase().includes(search.toLowerCase());
  }
}
