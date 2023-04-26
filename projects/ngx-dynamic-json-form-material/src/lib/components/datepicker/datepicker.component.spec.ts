import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DatepickerComponent } from './datepicker.component';
import { Stub } from '../../utils';
import { AbstractFormFieldComponent } from '@ngx-dynamic-json-form/core';

describe('DatepickerComponent', () => {
  let component: DatepickerComponent;
  let fixture: ComponentFixture<DatepickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DatepickerComponent],
    });
    fixture = TestBed.createComponent(DatepickerComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`key has default value`, () => {
    expect(DatepickerComponent.key).toEqual(`datepicker`);
  });

  describe(`get fieldExtended()`, () => {
    it(`returns the correct data, with no given or default value`, () => {
      component.field = {
        type: 'datepicker',
        key: 'anyKey',
      };

      expect(component.fieldExtended).toEqual({
        type: 'datepicker',
        key: 'anyKey',
        matFormFieldClassName: 'mat-mdc-form-field-has-icon-suffix',
      });
    });

    it(`returns the correct data, with given, but or default value`, () => {
      component.field = {
        type: 'datepicker',
        key: 'anyKey',
        matFormFieldClassName: 'my-class',
      };

      expect(component.fieldExtended).toEqual({
        type: 'datepicker',
        key: 'anyKey',
        matFormFieldClassName: 'my-class mat-mdc-form-field-has-icon-suffix',
      });
    });

    it(`returns the correct data, with no given, but with default value`, () => {
      component.field = {
        type: 'datepicker',
        key: 'anyKey',
      };

      component.dynamicJsonFormService = Stub.getNgxDynamicJsonFormService({
        layoutOptions: { default: { matFormFieldClassName: 'my-default-class' } },
      });

      expect(component.fieldExtended).toEqual({
        type: 'datepicker',
        key: 'anyKey',
        matFormFieldClassName: 'my-default-class mat-mdc-form-field-has-icon-suffix',
      });
    });
  });

  describe(`onClick`, () => {
    it(`calls onClick if existing in field`, () => {
      component.field = {
        type: 'datepicker',
        key: 'anyKey',
        onClick(event: any) {},
      };

      spyOn(component.field as any, 'onClick');
      spyOn(component as any, '_openDatepicker');

      component.onClick({ target: 'test' } as any, { foo: 'bar' } as any);

      expect(component.field?.onClick).toHaveBeenCalledWith({ target: 'test' } as any);
      expect(component['_openDatepicker']).toHaveBeenCalledWith({ foo: 'bar' } as any);
    });
  });

  describe(`onFocus`, () => {
    it(`makes expected calls`, () => {
      component.field = {
        type: 'datepicker',
        key: 'anyKey',
      };

      spyOn(component as any, '_openDatepicker');
      spyOn(AbstractFormFieldComponent.prototype, 'onFocus');

      component.onFocus({ target: 'test' } as any, { foo: 'bar' } as any);

      expect(component['_openDatepicker']).toHaveBeenCalledWith({ foo: 'bar' } as any);
      expect(AbstractFormFieldComponent.prototype.onFocus).toHaveBeenCalled();
    });
  });

  describe(`_openDatepicker`, () => {
    it(`makes expected calls, if { openWhenActive: true, readonly: false, disabled: false }`, () => {
      component.field = {
        type: 'datepicker',
        key: 'anyKey',
        openWhenActive: true,
        readonly: false,
        disabled: false,
      };

      const datepickerInstance = { open() {} };
      spyOn(datepickerInstance, 'open');

      component['_openDatepicker'](datepickerInstance as any);

      expect(datepickerInstance['open']).toHaveBeenCalled();
    });

    it(`makes expected calls (do not open), if { openWhenActive: true, readonly: true, disabled: false }`, () => {
      component.field = {
        type: 'datepicker',
        key: 'anyKey',
        openWhenActive: true,
        readonly: true,
        disabled: false,
      };

      const datepickerInstance = { open() {} };
      spyOn(datepickerInstance, 'open');

      component['_openDatepicker'](datepickerInstance as any);

      expect(datepickerInstance['open']).not.toHaveBeenCalled();
    });

    it(`makes expected calls (do not open), if { openWhenActive: true, readonly: false, disabled: true }`, () => {
      component.field = {
        type: 'datepicker',
        key: 'anyKey',
        openWhenActive: true,
        readonly: false,
        disabled: true,
      };

      const datepickerInstance = { open() {} };
      spyOn(datepickerInstance, 'open');

      component['_openDatepicker'](datepickerInstance as any);

      expect(datepickerInstance['open']).not.toHaveBeenCalled();
    });

    it(`makes expected calls (do not open), if { openWhenActive: false, readonly: true, disabled: true }`, () => {
      component.field = {
        type: 'datepicker',
        key: 'anyKey',
        openWhenActive: false,
        readonly: true,
        disabled: true,
      };

      const datepickerInstance = { open() {} };
      spyOn(datepickerInstance, 'open');

      component['_openDatepicker'](datepickerInstance as any);

      expect(datepickerInstance['open']).not.toHaveBeenCalled();
    });

    it(`makes expected calls, if global is true and { readonly: false, disabled: false }`, () => {
      component.field = {
        type: 'datepicker',
        key: 'anyKey',
        readonly: false,
        disabled: false,
      };

      component.dynamicJsonFormService = Stub.getNgxDynamicJsonFormService({
        layoutOptions: { datepicker: { openWhenActive: true } },
      });

      const datepickerInstance = { open() {} };
      spyOn(datepickerInstance, 'open');

      component['_openDatepicker'](datepickerInstance as any);

      expect(datepickerInstance['open']).toHaveBeenCalled();
    });

    it(`makes expected calls (do not open), if global is true and { readonly: true, disabled: false }`, () => {
      component.field = {
        type: 'datepicker',
        key: 'anyKey',
        readonly: true,
        disabled: false,
      };

      component.dynamicJsonFormService = Stub.getNgxDynamicJsonFormService({
        layoutOptions: { datepicker: { openWhenActive: true } },
      });

      const datepickerInstance = { open() {} };
      spyOn(datepickerInstance, 'open');

      component['_openDatepicker'](datepickerInstance as any);

      expect(datepickerInstance['open']).not.toHaveBeenCalled();
    });

    it(`makes expected calls (do not open), if global is true and { readonly: false, disabled: true }`, () => {
      component.field = {
        type: 'datepicker',
        key: 'anyKey',
        readonly: false,
        disabled: true,
      };

      component.dynamicJsonFormService = Stub.getNgxDynamicJsonFormService({
        layoutOptions: { datepicker: { openWhenActive: true } },
      });

      const datepickerInstance = { open() {} };
      spyOn(datepickerInstance, 'open');

      component['_openDatepicker'](datepickerInstance as any);

      expect(datepickerInstance['open']).not.toHaveBeenCalled();
    });

    it(`makes expected calls (do not open), if global is false and { readonly: true, disabled: true }`, () => {
      component.field = {
        type: 'datepicker',
        key: 'anyKey',
        readonly: true,
        disabled: true,
      };

      component.dynamicJsonFormService = Stub.getNgxDynamicJsonFormService({
        layoutOptions: { datepicker: { openWhenActive: false } },
      });

      const datepickerInstance = { open() {} };
      spyOn(datepickerInstance, 'open');

      component['_openDatepicker'](datepickerInstance as any);

      expect(datepickerInstance['open']).not.toHaveBeenCalled();
    });
  });
});
