import {
  FloatLabelType,
  MatFormFieldAppearance,
  SubscriptSizing,
} from '@angular/material/form-field';

/**
 * The MatFormField Interface to extend all Material Components with Material Design specific properties.
 *
 * @export
 * @interface MatFormField
 */
export interface MatFormField {
  /**
   * The material form field appearance style.
   * Possible values are: 'fill' | 'outline'
   *
   * @type {MatFormFieldAppearance}
   * @memberof MatFormField
   */
  appearance?: MatFormFieldAppearance;

  /**
   * Add a clear button to the form field.
   *
   * @type {boolean}
   * @memberof MatFormField
   */
  clearButton?: boolean;

  /**
   * Material type for the available floatLabel values.
   * Possible values are: 'always' | 'auto'
   *
   * @type {FloatLabelType}
   * @memberof MatFormField
   */
  floatLabel?: FloatLabelType;

  /**
   * Hide the border? Needed for some fields with appearance outline.
   *
   * @type {boolean}
   * @memberof MatFormField
   */
  hideBorder?: boolean;

  /**
   * Shall the label be hidden?
   *
   * @type {boolean}
   * @memberof MatFormField
   */
  hideLabel?: boolean;

  /**
   * Shall the required marker (*) be hidden?
   *
   * @type {boolean}
   * @memberof MatFormField
   */
  hideRequiredMarker?: boolean;

  /**
   * The alignment for hints.
   * Possible values are: 'start' | 'end'
   *
   * @type {('start' | 'end')}
   * @memberof MatFormField
   */
  hintAlign?: 'start' | 'end';

  /**
   * Shall a special hint for counting the letters be available?
   *
   * @type {boolean}
   * @memberof MatFormField
   */
  hintCount?: boolean;

  /**
   * The alignment for the special count hint.
   * Possible values are: 'start' | 'end'
   *
   * @type {('start' | 'end')}
   * @memberof MatFormField
   */
  hintCountAlign?: 'start' | 'end';

  /**
   * A special hint text for labels.
   *
   * @type {string}
   * @memberof MatFormField
   */
  hintLabel?: string;

  /**
   * A hint text.
   *
   * @type {string}
   * @memberof MatFormField
   */
  hintText?: string;

  /**
   * A text for labels.
   *
   * @type {string}
   * @memberof MatFormField
   */
  label?: string;

  /**
   * A class name for the material form field.
   *
   * @type {string}
   * @memberof MatFormField
   */
  matFormFieldClassName?: string;

  /**
   * A class name for the prefix of a form field.
   *
   * @type {string}
   * @memberof MatFormField
   */
  prefixClassName?: string;

  /**
   * An icon for the prefix of a form field.
   *
   * @type {string}
   * @memberof MatFormField
   */
  prefixIcon?: string;

  /**
   * The text for the prefix of a form field.
   *
   * @type {string}
   * @memberof MatFormField
   */
  prefixText?: string;

  /**
   * Behaviors for how the material form field height is set.
   * Possible values are: 'fixed' | 'dynamic'
   *
   * @type {SubscriptSizing}
   * @memberof MatFormField
   */
  subscriptSizing?: SubscriptSizing;

  /**
   * A class name for the suffix of a form field.
   *
   * @type {string}
   * @memberof MatFormField
   */
  suffixClassName?: string;

  /**
   * An icon for the suffix of a form field.
   *
   * @type {string}
   * @memberof MatFormField
   */
  suffixIcon?: string;

  /**
   * The text for the suffix of a form field.
   *
   * @type {string}
   * @memberof MatFormField
   */
  suffixText?: string;

  /**
   * A callback after clicking the prefix of a form field.
   *
   * @param {(PointerEvent | MouseEvent)} $event
   * @memberof MatFormField
   */
  onPrefixClick?($event: PointerEvent | MouseEvent): void;

  /**
   * A callback after clicking the suffix of a form field.
   *
   * @param {(PointerEvent | MouseEvent)} $event
   * @memberof MatFormField
   */
  onSuffixClick?($event: PointerEvent | MouseEvent): void;
}
