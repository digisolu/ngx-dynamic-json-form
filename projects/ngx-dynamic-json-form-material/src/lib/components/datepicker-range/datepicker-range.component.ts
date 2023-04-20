import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Utils } from '@ngx-dynamic-json-form/core';

import { FormFieldType } from '../../types';
import { DatepickerComponent } from '../datepicker/datepicker.component';

/**
 * The Material Design Specific Datepicker Range Component.
 *
 * @export
 * @class DatepickerRangeComponent
 * @extends {DatepickerComponent}
 */
@Component({
  selector: 'ndf-datepicker-range',
  templateUrl: './datepicker-range.component.html',
  styleUrls: ['./../datepicker/datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerRangeComponent extends DatepickerComponent {
  /**
   * @override
   * @inheritdoc
   */
  public static override key: FormFieldType = 'datepicker-range';

  /**
   * @override
   * @inheritdoc
   */
  public override onChange(_: any): void {
    const value: any = {};
    this.dynamicFormService.rangeEndings.forEach((ending: string) => {
      const key: string = Utils.addEnding(this.field?.key, ending);
      value[key] = this.getFormControl(key)?.value;
    });

    super.onChange({ target: { value } });
  }
}
