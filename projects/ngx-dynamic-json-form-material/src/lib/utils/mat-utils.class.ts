import { GroupOption } from '@ngx-dynamic-json-form/core';
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
   * @param {string} value
   * @param {GroupOption[]} options
   * @return {Observable<GroupOption[]>}
   * @memberof MatUtils
   */
  public static filterEntries$(value: string, options: GroupOption[]): Observable<GroupOption[]> {
    return of(
      !!value
        ? options
            .map(
              (option: GroupOption): GroupOption => ({
                value: option.value,
                label: option?.label,
                disabled: option?.disabled || false,
                group:
                  'group' in option && option?.group
                    ? MatUtils.filterGroup(option.group, value)
                    : undefined,
              })
            )
            .filter((option: GroupOption): boolean => {
              if (!option?.group) {
                return MatUtils.filterEntry(option, value);
              }

              return option.group.length > 0;
            })
        : options
    );
  }

  /**
   * This method is used to filter GroupOption / BaseOptions - Array by a given value.
   *
   * @static
   * @param {GroupOption[]} options
   * @param {string} value
   * @return {GroupOption[]}
   * @memberof MatUtils
   */
  public static filterGroup(options: GroupOption[], value: string): GroupOption[] {
    return options.filter((option: GroupOption) => MatUtils.filterEntry(option, value));
  }

  /**
   * This method is used to filter GroupOption / BaseOptions by a given value.
   *
   * @static
   * @param {GroupOption} option
   * @param {string} value
   * @return {boolean}
   * @memberof MatUtils
   */
  public static filterEntry(option: GroupOption, value: string): boolean {
    return (option.label || '').toLowerCase().includes(value.toLowerCase());
  }
}
