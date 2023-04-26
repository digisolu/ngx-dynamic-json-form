import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MultiRowComponent } from './multi-row.component';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Stub } from '../../utils';

describe('MultiRowComponent', () => {
  let component: MultiRowComponent;
  let fixture: ComponentFixture<MultiRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MultiRowComponent],
    });
    fixture = TestBed.createComponent(MultiRowComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`key has default value`, () => {
    expect(MultiRowComponent.key).toEqual(`multi-row`);
  });

  describe(`getButtonField`, () => {
    [
      {
        variant: 1,
        type: 'add',
        field: {},
        result: {
          buttonColor: null,
          buttonIcon: null,
          buttonText: null,
          buttonTooltip: null,
          buttonType: null,
          className: 'ndf-multi-row-button ndf-add-button',
          disabled: false,
          type: 'button',
          variant: null,
        },
        default: {},
      },
      {
        variant: 2,
        type: 'add',
        field: {
          addButtonClassName: 'my-class',
          addButtonColor: 'primary',
          addButtonIcon: 'add',
          addButtonText: 'Add',
          addButtonTooltip: 'My Tooltip',
          addButtonType: 'submit',
          addButtonVariant: 'mat-raised-button',
          disabled: true,
        },
        result: {
          buttonColor: 'primary',
          buttonIcon: 'add',
          buttonText: 'Add',
          buttonTooltip: 'My Tooltip',
          buttonType: 'submit',
          className: 'ndf-multi-row-button ndf-add-button my-class',
          disabled: true,
          type: 'button',
          variant: 'mat-raised-button',
        },
        default: {},
      },
      {
        variant: 3,
        type: 'add',
        field: {
          disabled: true,
        },
        result: {
          buttonColor: 'primary',
          buttonIcon: 'add',
          buttonText: 'Add',
          buttonTooltip: 'My Tooltip',
          buttonType: 'submit',
          className: 'ndf-multi-row-button ndf-add-button my-class-default',
          disabled: true,
          type: 'button',
          variant: 'mat-raised-button',
        },
        default: {
          addButtonClassName: 'my-class-default',
          addButtonColor: 'primary',
          addButtonIcon: 'add',
          addButtonText: 'Add',
          addButtonTooltip: 'My Tooltip',
          addButtonType: 'submit',
          addButtonVariant: 'mat-raised-button',
        },
      },
      {
        variant: 4,
        type: 'add',
        field: {
          addButtonClassName: 'my-class',
        },
        result: {
          buttonColor: null,
          buttonIcon: null,
          buttonText: null,
          buttonTooltip: null,
          buttonType: null,
          className: 'ndf-multi-row-button ndf-add-button my-class',
          disabled: false,
          type: 'button',
          variant: null,
        },
        default: {
          addButtonClassName: 'my-class-default',
        },
      },
    ].forEach((test) => {
      it(`returns correct add / delete Button for variant ${test.variant}`, () => {
        // set defaults
        Object.keys(test.default).length > 0 &&
          (component.dynamicJsonFormService = Stub.getNgxDynamicJsonFormService({
            layoutOptions: {
              default: {},
              multiRow: { ...test.default },
            },
          }));

        // set field
        component.field = {
          key: 'anyFormRowKey',
          type: 'multi-row',
          fields: [
            {
              type: 'input',
              key: 'anyInnerKey',
            },
          ],
          ...(test.field as any),
          disabled: (test.field as any)?.disabled,
        };

        // set form
        component.form = new FormGroup({
          anyFormRowKey: new FormArray([new FormControl('123')]),
        });

        // set form disabled or not
        'disabled' in test.field &&
          (test.field as any) &&
          component.form.get('anyFormRowKey')?.disable();

        // test
        expect(component.getButtonField(test.type as any)).toEqual(test.result as any);
      });
    });
  });
});
