import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'div[mat-form-field]',
  templateUrl: './mat-form-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatFormFieldComponent {}
