import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * A HelperDirective to easier get access to the ViewContainerRef and the TemplateRef.
 *
 * @export
 * @class LoadCustomComponentDirective
 */
@Directive({ selector: '[ndfLoadCustomComponent]' })
export class LoadCustomComponentDirective {
  /**
   * Creates an instance of LoadCustomComponentDirective.
   *
   * @param {ViewContainerRef} viewContainerRef The instance of the ViewContainer.
   * @param {TemplateRef<any>} templateRef The instance of the Template.
   * @memberof LoadCustomComponentDirective
   */
  public constructor(
    public viewContainerRef: ViewContainerRef,
    public templateRef: TemplateRef<any>
  ) {}
}
