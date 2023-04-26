import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { LoadCustomComponentDirective } from '../../directives/load-custom-component.directive';
import { FormField } from '../../types';
import { AbstractFormFieldComponent } from '../base/base.abstract';

/**
 * This is component creates a new generic form-field.
 *
 * @export
 * @class FormFieldComponent
 * @extends {AbstractFormFieldComponent<FormField>}
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: '[ndf-form-field]',
  template: `<ng-template ndfLoadCustomComponent></ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent
  extends AbstractFormFieldComponent<FormField>
  implements OnInit, OnDestroy
{
  /**
   * The instance of the custom component directive to build a container.
   *
   * @private
   * @type {LoadCustomComponentDirective}
   * @memberof FormFieldComponent
   */
  @ViewChild(LoadCustomComponentDirective, { static: true })
  private _customComponent!: LoadCustomComponentDirective;

  /**
   * This is the instance of the current generic custom component.
   *
   * @private
   * @type {(ComponentRef<AbstractFormFieldComponent<FormField>>
   *     | undefined)}
   * @memberof FormFieldComponent
   */
  private _componentRef: ComponentRef<AbstractFormFieldComponent<FormField>> | undefined;

  /**
   * This method is used to trigger the creation of the custom component and to call ngOnInit on it, if exists.
   *
   * @inheritdoc
   */
  public override ngOnInit(): void {
    this._load();

    this._componentRef?.instance?.ngOnInit();
  }

  /**
   * This method is used to destroy the instance of the generic custom component and to call the parents ngOnDestroy.
   *
   * @inheritdoc
   */
  public override ngOnDestroy(): void {
    this._componentRef?.destroy();
    super.ngOnDestroy();
  }

  /**
   * This method is used to:
   * - create the instance of the custom component
   * - insert the component in the template
   * - to pass form, field and the class names to the instance.
   *
   * @private
   * @memberof FormFieldComponent
   */
  private _load(): void {
    const viewContainerRef: ViewContainerRef = this._customComponent.viewContainerRef;
    viewContainerRef.clear();

    if (!!this.field?.type && !!this.dynamicJsonFormService.components?.[this.field?.type]) {
      this._componentRef = viewContainerRef.createComponent<AbstractFormFieldComponent<FormField>>(
        this.dynamicJsonFormService.components?.[this.field?.type] as any
      );

      this._componentRef.instance.form = this.form;
      this._componentRef.instance.field = this.field;
      this._componentRef.instance.className = [
        this._componentRef.instance.className,
        this.field?.formFieldClassName,
      ].join(' ');
    }
  }
}
