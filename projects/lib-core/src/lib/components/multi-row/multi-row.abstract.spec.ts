import { FormArray, FormGroup } from '@angular/forms';

import { DynamicFormFieldMultiRow } from '../../interfaces/form-fields';
import { Stub, Utils } from '../../utils';
import { AbstractMultiRowComponent } from './multi-row.abstract';

describe('AbstractMultiRowComponent', () => {
  let component: AbstractMultiRowComponent<DynamicFormFieldMultiRow>;

  class Test extends AbstractMultiRowComponent<DynamicFormFieldMultiRow> {}

  beforeEach(() => {
    component = new Test(
      Stub.getNgxDynamicJsonFormService({
        components: { html: true as any },
        layoutOptions: { ...Stub.LAYOUT_OPTIONS },
        rangeEndings: { ...Stub.RANGE_ENDINGS },
        messages: { ...Stub.MESSAGES },
        ignoreFormControlCheck: [...Stub.IGNORE_FORM_CONTROLS],
        rangeFormControls: [...Stub.RANGE_CONTROLS],
      })
    );
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`requiredParams has default value`, () => {
    expect(component['requiredParams']).toEqual([`type`, `key`, `fields`]);
  });

  describe('getFormGroup', () => {
    it(`returns the correct value`, () => {
      expect(component.getFormGroup() instanceof FormGroup).toBeTrue();
    });
  });

  describe('getFormArrayControls', () => {
    it(`returns the correct value`, () => {
      spyOn(component as any, 'getFormArray').and.returnValue({ controls: [] });
      expect(component.getFormArrayControls()).toEqual([]);
    });
  });

  describe('isFormField', () => {
    it(`returns the correct value, if type exists`, () => {
      expect(component.isFormField('html')).toBeTrue();
    });

    it(`returns the correct value, if type not exists`, () => {
      expect(component.isFormField('html5')).toBeFalse();
    });
  });

  describe('addRow', () => {
    it(`Stops the action, if disabled`, () => {
      spyOn(component as any, 'getFormArray').and.returnValue({ disabled: true });
      spyOn(Utils, 'getMultiRow');

      component.addRow(0);

      expect(Utils.getMultiRow).not.toHaveBeenCalled();
    });

    it(`throws error, if row is empty`, () => {
      spyOn(component as any, 'getFormArray');
      spyOn(Utils, 'getMultiRow').and.returnValue([]);

      expect(() => component.addRow(0)).toThrowError();
    });

    it(`insert a new row, if everything is correct`, () => {
      const value: any = { insert: () => ({}) };
      spyOn(value, 'insert');
      spyOn(component as any, 'getFormArray').and.returnValue(value);
      spyOn(Utils, 'getMultiRow').and.returnValue([{} as any]);

      component.addRow(0);

      expect(value.insert).toHaveBeenCalledWith(0, {});
    });
  });

  describe('removeRow', () => {
    it(`Stops the action, if disabled`, () => {
      spyOn(component as any, 'getFormArray').and.returnValue({ disabled: true });
      spyOn(Utils, 'getMultiRow');

      component.removeRow(0);

      expect(Utils.getMultiRow).not.toHaveBeenCalled();
    });

    it(`removes a new row, if everything is correct`, () => {
      const value: any = { removeAt: () => ({}) };
      spyOn(value, 'removeAt');
      spyOn(component as any, 'getFormArray').and.returnValue(value);

      component.removeRow(0);

      expect(value.removeAt).toHaveBeenCalledWith(0);
    });
  });

  describe('getFormArray', () => {
    it(`Stops the action, if disabled`, () => {
      component.field = { key: 'anyKey', type: 'multi-row', fields: [] };
      component.form = new FormGroup({
        anyKey: new FormArray([]),
      });

      expect(component['getFormArray']() instanceof FormArray).toBeTrue();
    });
  });

  describe('trackById', () => {
    [
      {
        id: '123',
        type: 'multi-row',
        key: 'foo',
      },
    ].forEach((test) => {
      it(`returns correct value (positive Tests)`, () => {
        // call
        component.trackById('', test as any);

        // test
        expect(component.trackById('', test as any)).toBe('123');
      });
    });

    [
      {
        type: 'multi-row',
        key: 'foo',
      },
    ].forEach((test) => {
      it(`returns correct value (negative Tests)`, () => {
        // call
        component.trackById('', test as any);

        // test
        expect(component.trackById('', test as any)).toBe('');
      });
    });
  });
});
