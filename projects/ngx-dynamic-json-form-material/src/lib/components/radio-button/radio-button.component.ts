import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbstractFormFieldComponent } from '@ngx-dynamic-json-form/core';

import { MatRadioButton } from '../../interfaces';
import { FormFieldType } from '../../types';

/**
 * The Material Design Specific Radio Buttons Component.
 *
 * @export
 * @class RadioButtonComponent
 * @extends {AbstractFormFieldComponent<MatRadioButton>}
 */
@Component({
  selector: 'ndf-mat-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class RadioButtonComponent extends AbstractFormFieldComponent<MatRadioButton> {
  /**
   * The form field type to identify the element.
   *
   * @static
   * @type {FormFieldType}
   * @memberof RadioButtonComponent
   */
  public static key: FormFieldType = 'radio-button';

  /**
   * @override
   * @inheritdoc
   */
  protected override requiredParams: string[] = ['key', 'type', 'options'];
}
