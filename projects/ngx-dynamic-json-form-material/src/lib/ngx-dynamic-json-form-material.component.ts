import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxDynamicJsonFormComponent } from '@ngx-dynamic-json-form/core';

/**
 * The Main NgxDynamicJsonFormMaterialComponent.
 *
 * @export
 * @class NgxDynamicJsonFormMaterialComponent
 * @extends {NgxDynamicJsonFormComponent}
 */
@Component({
  selector: 'ngx-dynamic-json-form',
  styleUrls: ['./ngx-dynamic-json-form-material.component.scss'],
  template: `
    <form
      [formGroup]="form"
      *ngIf="!isLoading"
      [class.ndf-form]="true"
      [class]="formClassName || getDefaultValue('formClassName')"
    >
      <ng-container *ngFor="let field of fields">
        <div
          [class.ndf-form-field]="true"
          [class]="field?.containerClassName"
          [field]="field"
          [form]="form"
          *ngIf="isFormField(field?.type); else error"
          ndf-form-field
        ></div>

        <ng-template #error>
          <mat-error
            [errorKey]="'unsupportedKey'"
            [replace]="{ KEY_OR_TYPE: field?.key || field.type }"
            ndfCustomError
          ></mat-error>
        </ng-template>
      </ng-container>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxDynamicJsonFormMaterialComponent extends NgxDynamicJsonFormComponent {}
