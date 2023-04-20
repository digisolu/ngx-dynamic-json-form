import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { AbstractFormFieldComponent } from '@ngx-dynamic-json-form/core';

import { MatSlideToggle } from '../../interfaces';
import { FormFieldType } from '../../types';

/**
 * The Material Design Specific Slide Toggle Component.
 *
 * @export
 * @class SlideToggleComponent
 * @extends {AbstractFormFieldComponent<MatSlideToggle>}
 */
@Component({
  selector: 'ndf-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SlideToggleComponent extends AbstractFormFieldComponent<MatSlideToggle> {
  /**
   * The form field type to identify the element.
   *
   * @static
   * @type {FormFieldType}
   * @memberof SlideToggleComponent
   */
  public static key: FormFieldType = 'slide-toggle';

  /**
   * @override
   * @inheritdoc
   */
  protected override requiredParams: string[] = ['key', 'type', 'label'];

  /**
   * This method is just used for casting the type.
   *
   * @override
   * @inheritdoc
   */
  public override onChange($event: MatSlideToggleChange): void {
    super.onChange($event);
  }
}
