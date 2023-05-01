import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { NgxDynamicJsonFormService } from '../services';
import { FormField } from '../types';

/**
 * This directive inserts translated error messages.
 *
 * @export
 * @class CustomErrorDirective
 * @implements {OnInit}
 */
@Directive({ selector: '[ndfCustomError]' })
export class CustomErrorDirective implements OnInit {
  /**
   * The error key, used for translation.
   *
   * @type {(string | undefined)}
   * @memberof CustomErrorDirective
   */
  @Input() public errorKey: string | undefined;

  /**
   * The form field configuration.
   *
   * @type {(FormField | undefined)}
   * @memberof CustomErrorDirective
   */
  @Input() public field: FormField | undefined;

  /**
   * If we need to replace parts of the error message, we need to pass the object here.
   *
   * @type {(object | undefined)}
   * @memberof CustomErrorDirective
   */
  @Input() public replace: object | undefined;

  /**
   * Creates an instance of CustomErrorDirective.
   *
   * @param {ElementRef} _elementRef
   * @param {NgxDynamicJsonFormService} _dynamicJsonFormService
   * @memberof CustomErrorDirective
   */
  public constructor(
    private _elementRef: ElementRef,
    private _dynamicJsonFormService: NgxDynamicJsonFormService
  ) {}

  /**
   * This method is used to translate and replace error messages.
   *
   * @inheritdoc
   */
  public ngOnInit(): void {
    if (!this.errorKey) {
      return;
    }

    let errorMessage: string = '';

    // 1. Check, if there are messages in the field
    !!this.field?.messages &&
      !!this.field.messages[this.errorKey] &&
      (errorMessage = this.field.messages[this.errorKey]);

    // 2. Check, if there are global messages
    !errorMessage &&
      !!this._dynamicJsonFormService.messages[this.errorKey] &&
      (errorMessage = this._dynamicJsonFormService.messages[this.errorKey]);

    // 3. if there is something to replace, do it
    if (!!this.replace && !!errorMessage) {
      for (const [key, value] of Object.entries(this.replace)) {
        errorMessage = errorMessage.replace(`{{${key}}}`, value);
      }
    }

    // insert the translated and replaced error message into the native DOM-Element.
    this._elementRef.nativeElement.innerHTML = errorMessage;
  }
}
