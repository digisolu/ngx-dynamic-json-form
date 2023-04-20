import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractFormFieldComponent, DynamicFormFieldInput } from '@ngx-dynamic-json-form/core';

@Component({
  selector: 'app-my-custom-form-field',
  templateUrl: './my-custom-form-field.component.html',
  styleUrls: ['./my-custom-form-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyCustomFormFieldComponent extends AbstractFormFieldComponent<DynamicFormFieldInput> {}
