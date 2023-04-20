import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DynamicFormFieldContainer } from '../../interfaces/form-fields';
import { FormFieldType } from '../../types';
import { AbstractFormFieldComponent } from '../base/base.abstract';

/**
 * The container form field.
 * A Container can be used to bundle, wrap or style elements.
 *
 * @export
 * @class ContainerComponent
 * @extends {AbstractFormFieldComponent<DynamicFormFieldContainer>}
 */
@Component({
  selector: 'ndf-container',
  templateUrl: './container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent extends AbstractFormFieldComponent<DynamicFormFieldContainer> {
  /**
   * The form field type to identify the element.
   *
   * @static
   * @type {FormFieldType}
   * @memberof ContainerComponent
   */
  public static key: FormFieldType = 'container';

  /**
   * @override
   * @inheritdoc
   */
  protected override requiredParams: string[] = ['type'];

  /**
   * Is the given FormFieldType an allowed/existing form field?
   *
   * @param {(string | undefined)} type
   * @return {boolean}
   * @memberof ContainerComponent
   */
  public isFormField(type: string | undefined): boolean {
    return !!type && !!this.dynamicFormService.components?.[type];
  }
}
