import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbstractFormFieldComponent } from 'ngx-dynamic-json-form-core';

import { MatCheckbox } from '../../interfaces';
import { FormFieldType } from '../../types';

/**
 * The Material Design Specific Checkbox Component.
 *
 * @export
 * @class CheckboxComponent
 * @extends {AbstractFormFieldComponent<MatCheckbox>}
 */
@Component({
  selector: 'ndf-mat-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxComponent extends AbstractFormFieldComponent<MatCheckbox> {
  /**
   * The form field type to identify the element.
   *
   * @static
   * @type {FormFieldType}
   * @memberof CheckboxComponent
   */
  public static key: FormFieldType = 'checkbox';

  /**
   * @override
   * @inheritdoc
   */
  protected override requiredParams: string[] = ['key', 'type', 'label'];
}
