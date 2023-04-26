import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractFormFieldComponent } from '@ngx-dynamic-json-form/core';

import { FormFieldType } from '../../types';
import { MatButton } from './../../interfaces';

/**
 * The Material Design Specific Button Component.
 *
 * @export
 * @class ButtonComponent
 * @extends {AbstractFormFieldComponent<MatButton>}
 * @implements {OnInit}
 */
@Component({
  selector: 'ndf-mat-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends AbstractFormFieldComponent<MatButton> implements OnInit {
  /**
   * The form field type to identify the element.
   *
   * @static
   * @type {FormFieldType}
   * @memberof ButtonComponent
   */
  public static key: FormFieldType = 'button';

  /**
   * @override
   * @inheritdoc
   */
  protected override requiredParams: string[] = ['variant'];

  /**
   * A custom onClick callback will be used, if it was passed in the form field config.
   *
   * @param {(PointerEvent | MouseEvent)} $event
   * @memberof ButtonComponent
   */
  public onClick($event: PointerEvent | MouseEvent): void {
    !!this.field &&
      'onClick' in this.field &&
      typeof this.field.onClick === 'function' &&
      this.field.onClick($event);
  }
}
