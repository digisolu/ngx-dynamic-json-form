import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

import { Components, DynamicFormConfig } from '../interfaces';
import { FormField, FormFieldType } from '../types';
import { Utils } from '../utils';

/** @type {InjectionToken<DynamicFormConfig>} */
export const NDF_CONFIG: InjectionToken<DynamicFormConfig> = new InjectionToken<DynamicFormConfig>(
  'NDF_CONFIG'
);

/**
 * The NgxDynamicJsonForm Service.
 *
 * @export
 * @class NgxDynamicJsonFormService
 */
@Injectable({ providedIn: 'root' })
export class NgxDynamicJsonFormService {
  /**
   * All allowed / registered components.
   *
   * @private
   * @type {Components<FormField>}
   * @memberof NgxDynamicJsonFormService
   */
  private _components: Components<FormField> = {};

  /**
   * The default layout options.
   *
   * @private
   * @type {({ [key: string]: string | object })}
   * @memberof NgxDynamicJsonFormService
   */
  private _layoutOptions: { [key: string]: string | object } = {};

  /**
   * The default messages used for translations and errors.
   *
   * @private
   * @type {{ [key: string]: string }}
   * @memberof NgxDynamicJsonFormService
   */
  private _messages: { [key: string]: string } = {};

  /**
   * The range endings used for range components.
   *
   * @private
   * @type {{ start: string; end: string }}
   * @memberof NgxDynamicJsonFormService
   */
  private _rangeEndings: { start: string; end: string } = {
    start: '',
    end: '',
  };

  /**
   * Some form fields doesn't have a form control.
   *
   * @private
   * @type {FormFieldType[]}
   * @memberof NgxDynamicJsonFormService
   */
  private _ignoreFormControlCheck: FormFieldType[] = [];

  /**
   * These are the form fields which are using a range (2 form controls).
   *
   * @private
   * @type {FormFieldType[]}
   * @memberof NgxDynamicJsonFormService
   */
  private _rangeFormControls: FormFieldType[] = [];

  /**
   * Creates an instance of NgxDynamicJsonFormService.
   *
   * @param {DynamicFormConfig} _config
   * @memberof NgxDynamicJsonFormService
   */
  public constructor(@Optional() @Inject(NDF_CONFIG) private _config: DynamicFormConfig) {
    // set the initial data
    this._setData();
  }

  /**
   * The getter to return the ignoreFormControlCheck array.
   *
   * @readonly
   * @type {FormFieldType[]}
   * @memberof NgxDynamicJsonFormService
   */
  public get ignoreFormControlCheck(): FormFieldType[] {
    return this._ignoreFormControlCheck;
  }

  /**
   * The getter to return the rangeFormControls array.
   *
   * @readonly
   * @type {FormFieldType[]}
   * @memberof NgxDynamicJsonFormService
   */
  public get rangeFormControls(): FormFieldType[] {
    return this._rangeFormControls;
  }

  /**
   * The getter to return the global registered components array.
   *
   * @readonly
   * @type {Components<FormField>}
   * @memberof NgxDynamicJsonFormService
   */
  public get components(): Components<FormField> {
    return this._components;
  }

  /**
   * The getter to return the global messages array.
   *
   * @readonly
   * @type {{ [key: string]: string }}
   * @memberof NgxDynamicJsonFormService
   */
  public get messages(): { [key: string]: string } {
    return this._messages;
  }

  /**
   * The getter to return the global range ending names array.
   *
   * @readonly
   * @type {string[]}
   * @memberof NgxDynamicJsonFormService
   */
  public get rangeEndings(): string[] {
    return [this._rangeEndings.start, this._rangeEndings.end];
  }

  /**
   * The getter to return the global layout options to a given key.
   *
   * @param {string} key
   * @return {*}
   * @memberof NgxDynamicJsonFormService
   */
  public getLayoutOption(key: string): any {
    return this._layoutOptions[key] || null;
  }

  /**
   * A method to override the global layout options.
   *
   * @param {{ [key: string]: any }} config
   * @memberof NgxDynamicJsonFormService
   */
  public overrideLayoutOptions(config: { [key: string]: any }): void {
    this._layoutOptions = Utils.deepMerge(this._layoutOptions, config);
  }

  /**
   * This method calls all methods to initialize the service.
   *
   * @private
   * @memberof NgxDynamicJsonFormService
   */
  private _setData(): void {
    this._setComponents();
    this._setLayoutOptions();
    this._setMessages();
    this._setRangeEndings();
    this._setIgnoreFormControlChecks();
    this._setRangeFormControls();
  }

  /**
   * Set the registered components.
   *
   * @private
   * @memberof NgxDynamicJsonFormService
   */
  private _setComponents(): void {
    !!this._config?.components &&
      (this._components = {
        ...this._config.components,
      });
  }

  /**
   * Set the default layout options.
   *
   * @private
   * @memberof NgxDynamicJsonFormService
   */
  private _setLayoutOptions(): void {
    !!this._config?.layoutOptions &&
      (this._layoutOptions = {
        ...this._config.layoutOptions,
      });
  }

  /**
   * Set the default messages / translations.
   *
   * @private
   * @memberof NgxDynamicJsonFormService
   */
  private _setMessages(): void {
    !!this._config?.messages &&
      (this._messages = {
        ...this._config.messages,
      });
  }

  /**
   * Set the default range start / ending names.
   *
   * @private
   * @memberof NgxDynamicJsonFormService
   */
  private _setRangeEndings(): void {
    !!this._config?.rangeEndings &&
      (this._rangeEndings = {
        ...this._config.rangeEndings,
      });
  }

  /**
   * Set / Extend the ignore form control checks.
   *
   * @private
   * @memberof NgxDynamicJsonFormService
   */
  private _setIgnoreFormControlChecks(): void {
    !!this._config?.ignoreFormControlCheck &&
      (this._ignoreFormControlCheck = [...this._config.ignoreFormControlCheck]);
  }

  /**
   * Set / Extend the default range form controls.
   *
   * @private
   * @memberof NgxDynamicJsonFormService
   */
  private _setRangeFormControls(): void {
    !!this._config?.rangeFormControls &&
      (this._rangeFormControls = [...this._config.rangeFormControls]);
  }
}
