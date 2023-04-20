import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'div[base-fields]',
  templateUrl: './base-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseFieldComponent {}
