import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractFormFieldComponent } from '@ngx-dynamic-json-form/core';

import { MatInput } from '../../interfaces';
import { FormFieldType } from '../../types';

/**
 * The Material Design Specific Input Component.
 *
 * @export
 * @class InputComponent
 * @extends {AbstractFormFieldComponent<MatInput>}
 */
@Component({
  selector: 'ndf-input',
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent extends AbstractFormFieldComponent<MatInput> {
  /**
   * The form field type to identify the element.
   *
   * @static
   * @type {FormFieldType}
   * @memberof InputComponent
   */
  public static key: FormFieldType = 'input';
}
