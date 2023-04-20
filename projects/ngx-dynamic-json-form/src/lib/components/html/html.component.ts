import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DynamicFormFieldHTML } from '../../interfaces/form-fields';
import { FormFieldType } from '../../types';
import { AbstractFormFieldComponent } from '../base/base.abstract';

/**
 * The HTML form field.
 * This class is used to pass custom HTML to the form.
 *
 * @export
 * @class HtmlComponent
 * @extends {AbstractFormFieldComponent<DynamicFormFieldHTML>}
 */
@Component({
  selector: 'ndf-html',
  template: `<div
    [class]="getDefaultValue('className')"
    [outerHTML]="field?.content"
  ></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtmlComponent extends AbstractFormFieldComponent<DynamicFormFieldHTML> {
  /**
   * The form field type to identify the element.
   *
   * @static
   * @type {FormFieldType}
   * @memberof HtmlComponent
   */
  public static key: FormFieldType = 'html';

  /**
   * @override
   * @inheritdoc
   */
  protected override isFormRequired: boolean = false;

  /**
   * @override
   * @inheritdoc
   */
  protected override requiredParams: string[] = ['type', 'content'];
}
