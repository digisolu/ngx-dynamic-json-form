import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Utils } from 'ngx-dynamic-json-form-core';

import { FormFieldType } from '../../types';
import { SliderComponent } from '../slider/slider.component';

/**
 * The Material Design Specific Slider Range Component.
 *
 * @export
 * @class SliderRangeComponent
 * @extends {SliderComponent}
 * @implements {OnInit}
 */
@Component({
  selector: 'ndf-mat-slider-range',
  templateUrl: './slider-range.component.html',
  styleUrls: ['./../slider/slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SliderRangeComponent extends SliderComponent implements OnInit {
  /**
   * @override
   * @inheritdoc
   */
  public static override key: FormFieldType = 'slider-range';

  /**
   * This method is used to add the range endings first.
   *
   * @override
   * @inheritdoc
   */
  public override onChange(): void {
    const value: any = {};
    this.dynamicJsonFormService.rangeEndings.forEach((ending: string) => {
      const key: string = Utils.addEnding(this.field?.key, ending);
      value[key] = this.getFormControl(key)?.value;
    });

    super.onChange({ target: { value } });
  }
}
