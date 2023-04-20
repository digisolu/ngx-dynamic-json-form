import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractFormFieldComponent } from '@ngx-dynamic-json-form/core';

import { FormFieldType } from '../../types';
import { MatSlider } from './../../interfaces';

/**
 * The Material Design Specific Slider Component.
 *
 * @export
 * @class SliderComponent
 * @extends {AbstractFormFieldComponent<MatSlider>}
 * @implements {OnInit}
 */
@Component({
  selector: 'ndf-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent extends AbstractFormFieldComponent<MatSlider> implements OnInit {
  /**
   * The form field type to identify the element.
   *
   * @static
   * @type {FormFieldType}
   * @memberof SliderComponent
   */
  public static key: FormFieldType = 'slider';

  /**
   * This method returns the label of the current slider value.
   * A custom displayWith callback will be used, if it was passed in the form field config.
   *
   * @param {number} value
   * @return {string}
   */
  public getLabel = (value: number): string => {
    return String(
      !!this.field && 'displayWith' in this.field && typeof this.field.displayWith === 'function'
        ? this.field.displayWith(value)
        : value
    );
  };
}
