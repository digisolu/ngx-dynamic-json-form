import { ChangeDetectorRef } from '@angular/core';
import {
  Components,
  DynamicFormConfig,
  NgxDynamicJsonFormService,
} from 'ngx-dynamic-json-form-core';

import { FormField, FormFieldType } from '../types';

export class Stub {
  /**
   * Stub components.
   *
   * @static
   * @type {Components<FormField>}
   * @memberof Stub
   */
  public static COMPONENTS: Components<FormField> = {} as any;

  /**
   * Stub range endings.
   *
   * @static
   * @type {{ start: string; end: string }}
   * @memberof Stub
   */
  public static RANGE_ENDINGS: { start: string; end: string } = {
    start: 'Start',
    end: 'End',
  };

  /**
   * Stub layout options.
   *
   * @static
   * @type {({ [key: string]: string | object })}
   * @memberof Stub
   */
  public static LAYOUT_OPTIONS: { [key: string]: string | object } = {
    default: { className: 'foo' },
  };

  /**
   * Stub messages.
   *
   * @static
   * @type {{ [key: string]: string }}
   * @memberof Stub
   */
  public static MESSAGES: { [key: string]: string } = {};

  /**
   * Stub ignore form control check.
   *
   * @static
   * @type {FormFieldType[]}
   * @memberof Stub
   */
  public static IGNORE_FORM_CONTROLS: FormFieldType[] = [
    'button',
    'container',
    'datepicker-range',
    'html',
    'slider-range',
  ];

  /**
   * Stub range form controls.
   *
   * @static
   * @type {FormFieldType[]}
   * @memberof Stub
   */
  public static RANGE_CONTROLS: FormFieldType[] = ['datepicker-range', 'slider-range'];

  /**
   * Returns a Stub / Instance of {@link NgxDynamicJsonFormService}.
   *
   * @static
   * @param {DynamicFormConfig} [config={
   *       components: { ...Stub.COMPONENTS },
   *       layoutOptions: { default: { className: 'foo' } },
   *     }]
   * @return {*}
   * @memberof Stub
   */
  public static getNgxDynamicJsonFormService(
    config: DynamicFormConfig = {
      components: { ...Stub.COMPONENTS },
      layoutOptions: { ...Stub.LAYOUT_OPTIONS },
      rangeEndings: { ...Stub.RANGE_ENDINGS },
      messages: { ...Stub.MESSAGES },
      ignoreFormControlCheck: [...Stub.IGNORE_FORM_CONTROLS],
      rangeFormControls: [...Stub.RANGE_CONTROLS],
    }
  ): any {
    return new NgxDynamicJsonFormService(config ?? {}) as any;
  }

  /**
   * Returns a Stub of {@link ChangeDetectorRef}.
   *
   * @static
   * @return {ChangeDetectorRef}
   * @memberof Stub
   */
  public static getChangeDetectorRef(): ChangeDetectorRef {
    return { detectChanges: () => ({}) } as any;
  }
}
