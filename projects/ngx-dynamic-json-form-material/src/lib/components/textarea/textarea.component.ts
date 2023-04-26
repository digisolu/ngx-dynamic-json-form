import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractFormFieldComponent } from '@ngx-dynamic-json-form/core';
import { BehaviorSubject } from 'rxjs';

import { MatTextarea } from '../../interfaces';
import { FormFieldType } from '../../types';

/**
 * The Material Design Specific Textarea Component.
 *
 * @export
 * @class TextareaComponent
 * @extends {AbstractFormFieldComponent<MatTextarea>}
 * @implements {AfterViewInit}
 */
@Component({
  selector: 'ndf-textarea',
  templateUrl: './textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent
  extends AbstractFormFieldComponent<MatTextarea>
  implements AfterViewInit
{
  /**
   * The form field type to identify the element.
   *
   * @static
   * @type {FormFieldType}
   * @memberof TextareaComponent
   */
  public static key: FormFieldType = 'textarea';

  /**
   * This property is used to enable autosize. It's needed to do it this way, because of our MatFormField Wrapper Component.
   *
   * @type {BehaviorSubject<boolean>}
   * @memberof TextareaComponent
   */
  public autosize$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  /**
   * @override
   * @inheritdoc
   */
  public ngAfterViewInit(): void {
    // if the autosize$ property is true, we need to set this after the view was initialized,
    // otherwise the component is not in the DOM.
    if (this.getDefaultValue('autosize') === true) {
      this.autosize$.next(true);
    }
  }
}
