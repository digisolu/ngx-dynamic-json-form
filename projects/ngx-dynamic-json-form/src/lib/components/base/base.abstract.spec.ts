import { FormControl, FormGroup } from '@angular/forms';
import { ReplaySubject } from 'rxjs';

import { BaseField } from '../../interfaces/form-fields';
import { Stub, Utils } from '../../utils';
import { AbstractFormFieldComponent } from './base.abstract';

describe('AbstractFormFieldComponent', () => {
  let component: AbstractFormFieldComponent<BaseField>;

  class Test extends AbstractFormFieldComponent<BaseField> {}

  beforeEach(() => {
    component = new Test(Stub.getNgxDynamicJsonFormService());
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`form has default value`, () => {
    expect(component.form instanceof FormGroup).toBeTrue();
  });

  it(`className has default value`, () => {
    expect(component.className).toBe('');
  });

  it(`destroyed$ has default value`, () => {
    expect(component['destroyed$'] instanceof ReplaySubject).toEqual(true);
  });

  it(`isFormRequired has default value`, () => {
    expect(component['isFormRequired']).toEqual(true);
  });

  it(`requiredParams has default value`, () => {
    expect(component['requiredParams']).toEqual([`key`, `type`]);
  });

  describe('ngOnDestroy', () => {
    it(`makes expected calls`, () => {
      // preparation
      spyOn(component['destroyed$'], 'next');
      spyOn(component['destroyed$'], 'complete');

      // call
      component.ngOnDestroy();

      // test
      expect(component['destroyed$'].next).toHaveBeenCalledWith(true);
      expect(component['destroyed$'].complete).toHaveBeenCalled();
    });
  });

  describe('getFieldKey', () => {
    [{ key: 1, result: '1' }, { key: '1', result: '1' }, { result: 'anyKey' }].forEach((data) => {
      it(`returns correct values for: ${data?.key || data.result}`, () => {
        component.field = { key: 'anyKey', type: 'input' };
        expect(component.getFieldKey(data?.key as any)).toBe(`${data.result}`);
      });
    });
  });

  describe('ngOnInit', () => {
    it(`throws error, if no field`, () => {
      component.field = undefined;

      expect(() => component.ngOnInit()).toThrowError();
    });

    it(`throws error, if no form`, () => {
      component.field = { key: 'anyKey', type: 'input' };
      component['isFormRequired'] = true;
      component.form = undefined as any;

      expect(() => component.ngOnInit()).toThrowError();
    });

    it(`sets correct className`, () => {
      component.className = 'test';
      component.field = { key: 'anyKey', type: 'input' };
      component.form = new FormGroup({ anyKey: new FormControl() });

      component.ngOnInit();

      expect(component.className).toEqual('ndf-input test');
    });

    it(`throws error, if no FormControl`, () => {
      component.field = { key: 'anyKey', type: 'input' };

      expect(() => component.ngOnInit()).toThrowError();
    });

    it(`throws error, if no FormControl for range controls`, () => {
      component.field = { key: 'anyKey', type: 'slider-range' };

      expect(() => component.ngOnInit()).toThrowError();
    });

    it(`throws error, if not all requiredParams were set`, () => {
      component['requiredParams'] = ['foo'];
      component.field = { key: 'anyKey', type: 'input' };
      component.form = new FormGroup({ anyKey: new FormControl() });

      expect(() => component.ngOnInit()).toThrowError();
    });
  });

  describe('getFormControl', () => {
    it(`returns correct form control with a given key`, () => {
      component.form = new FormGroup({ anyKey: new FormControl() });
      expect(component.getFormControl('anyKey') instanceof FormControl).toBeTrue();
    });

    it(`returns correct form control without a given key`, () => {
      component.form = new FormGroup({ anyKey: new FormControl() });
      component.field = { key: 'anyKey', type: 'input' };
      expect(component.getFormControl() instanceof FormControl).toBeTrue();
    });
  });

  describe('getErrors', () => {
    it(`makes expected calls with a given key`, () => {
      // preparation
      spyOn(Utils, 'getErrors');

      // call
      component.getErrors('anyKey');

      // test
      expect(Utils.getErrors).toHaveBeenCalledWith('anyKey', component.form);
    });

    it(`returns correct form control without a given key`, () => {
      // preparation
      spyOn(Utils, 'getErrors');
      component.field = { key: 'anyKey', type: 'input' };

      // call
      component.getErrors();

      // test
      expect(Utils.getErrors).toHaveBeenCalledWith('anyKey', component.form);
    });
  });

  describe('onBlur', () => {
    it(`makes expected calls`, () => {
      // preparation
      component.field = { key: 'anyKey', type: 'input', onBlur: () => {} } as any;
      spyOn(component.field as any, 'onBlur');

      // call
      component.onBlur({ target: { value: '123' } });

      // test
      expect((component.field as any).onBlur).toHaveBeenCalledWith('123');
    });
  });

  describe('onFocus', () => {
    it(`makes expected calls`, () => {
      // preparation
      component.field = { key: 'anyKey', type: 'input', onFocus: () => {} } as any;
      spyOn(component.field as any, 'onFocus');

      // call
      component.onFocus({ target: { value: '123' } });

      // test
      expect((component.field as any).onFocus).toHaveBeenCalledWith('123');
    });
  });

  describe('onChange', () => {
    it(`makes expected calls`, () => {
      // preparation
      component.field = { key: 'anyKey', type: 'input', onChange: () => {} } as any;
      spyOn(component.field as any, 'onChange');

      // call
      component.onChange({ target: { value: '123' } });

      // test
      expect((component.field as any).onChange).toHaveBeenCalledWith('123');
    });
  });

  describe('getDefaultValue', () => {
    it(`returns the correct data if no key was found`, () => {
      // preparation
      component.field = { key: 'anyKey', type: 'input' } as any;

      // test
      expect(component.getDefaultValue('anyKey')).toBe(null);
    });

    it(`returns the correct data if key is in field`, () => {
      // preparation
      component.field = { key: 'anyKey', type: 'input', className: 'bar' } as any;

      // test
      expect(component.getDefaultValue('className')).toBe('bar');
    });

    it(`returns the correct data if key is in global`, () => {
      // preparation
      component.field = { key: 'anyKey', type: 'input' } as any;

      // test
      expect(component.getDefaultValue('className')).toBe('foo');
    });
  });
});
