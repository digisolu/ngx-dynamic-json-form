import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'div[form-field-basics]',
  templateUrl: './form-field-basics.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldBasicsComponent {}
