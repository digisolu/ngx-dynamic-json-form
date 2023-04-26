import { EventEmitter } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';

import { NgxDynamicJsonFormComponent } from './ngx-dynamic-json-form.component';
import { FormField } from './types';
import { Stub, Utils } from './utils';

describe('NgxDynamicJsonFormComponent', () => {
  let component: NgxDynamicJsonFormComponent;

  class Test extends NgxDynamicJsonFormComponent {}

  beforeEach(() => {
    component = new Test(
      Stub.getNgxDynamicJsonFormService({
        components: { html: true as any },
        layoutOptions: { ...Stub.LAYOUT_OPTIONS },
        rangeEndings: { ...Stub.RANGE_ENDINGS },
        messages: { ...Stub.MESSAGES },
        ignoreFormControlCheck: [...Stub.IGNORE_FORM_CONTROLS],
        rangeFormControls: [...Stub.RANGE_CONTROLS],
      }),
      Stub.getChangeDetectorRef()
    );
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`form has default value`, () => {
    expect(component.form instanceof FormGroup).toBeTrue();
  });

  it(`formClassName has default value`, () => {
    expect(component.formClassName).toEqual('');
  });

  it(`fields has default value`, () => {
    expect(component.fields).toEqual([]);
  });

  it(`initial has default value`, () => {
    expect(component.initial).toEqual({});
  });

  it(`getForm has default value`, () => {
    expect(component.getForm instanceof EventEmitter).toBeTrue();
  });

  it(`isLoading has default value`, () => {
    expect(component.isLoading).toEqual(true);
  });

  describe('ngOnInit', () => {
    it(`makes expected calls`, () => {
      // preparation
      const spy = spyOn(component as any, '_generateForm');
      const fields: FormField[] = [
        {
          type: 'html',
          content: '<h1>Test</h1>',
        },
      ];
      component.fields = [...fields];

      // call
      component.ngOnInit();

      // test
      expect(spy).toHaveBeenCalledWith([...fields]);
      expect(component.isLoading).toBeTrue();
    });
  });

  describe('ngAfterViewInit', () => {
    it(`makes expected calls`, fakeAsync(() => {
      // preparation
      const spy = spyOn(component['changeDetectorRef'], 'detectChanges');
      const spy2 = spyOn(component.form, 'patchValue');
      const spy3 = spyOn(component['getForm'], 'emit');
      component.fields = [
        {
          type: 'html',
          content: '<h1>Test</h1>',
        },
      ];
      const initial = { foo: 'bar' };
      component.initial = initial;

      // preparation call
      component.ngOnInit();

      // call
      component.ngAfterViewInit();
      tick();

      // test
      expect(spy).toHaveBeenCalled();
      expect(spy2).toHaveBeenCalledWith(initial);
      expect(spy3).toHaveBeenCalledWith(component.form);
      expect(component.isLoading).toBeFalse();
    }));
  });

  describe('ngOnDestroy', () => {
    it(`makes expected calls`, () => {
      // preparation
      const spy = spyOn(component['getForm'], 'emit');
      component.form = new FormGroup({ test: new FormControl() });
      component.initial = { foo: 'bar' };

      // call
      component.ngOnDestroy();

      // test
      expect(spy).toHaveBeenCalledWith(component.form);
      expect(component.initial).toEqual({});
      expect(Object.keys(component.form.controls).length).toBe(0);
    });
  });

  describe('isFormField', () => {
    it(`Positive Test`, () => {
      expect(component.isFormField('html')).toBeTrue();
    });

    ['non-existing-type', undefined, null].forEach((data) => {
      it(`Negative Test with: '${typeof data !== 'string' ? typeof data : data}'`, () => {
        expect(component.isFormField(data as any)).toBeFalse();
      });
    });
  });

  describe('getDefaultValue', () => {
    it(`Positive Test`, () => {
      expect(component.getDefaultValue('className')).toBe('foo');
    });

    ['non-existing-entry', undefined, null].forEach((data) => {
      it(`Negative Test with: '${typeof data !== 'string' ? typeof data : data}'`, () => {
        expect(component.getDefaultValue(data as any)).toBe(null);
      });
    });
  });

  describe('_generateForm', () => {
    [
      { field: { type: 'html' }, result: 'nothing' },
      { field: { type: 'button' }, result: 'nothing' },
      { field: { type: 'container', fields: [] }, result: 'nothing' },
      {
        field: { type: 'multi-row' },
        result: () => expect(component['_addMultiRow']).toHaveBeenCalledWith({ type: 'multi-row' }),
      },
      {
        field: { type: 'datepicker-range' },
        result: () =>
          expect(component['_addRangeControls']).toHaveBeenCalledWith({ type: 'datepicker-range' }),
      },
      {
        field: { type: 'slider-range' },
        result: () =>
          expect(component['_addRangeControls']).toHaveBeenCalledWith({ type: 'slider-range' }),
      },
      {
        field: { type: 'input' },
        result: () =>
          expect(Utils.addControl).toHaveBeenCalledWith({ type: 'input' }, component.form),
      },
    ].forEach((testCase: { field: any; result: any }) => {
      it(`makes expected calls (positive Tests)`, () => {
        // preparation
        spyOn(component as any, '_addMultiRow');
        spyOn(component as any, '_addRangeControls');
        spyOn(Utils, 'addControl');

        // call
        component['_generateForm']([testCase.field]);

        // test
        if (typeof testCase.result === 'string') {
          expect(Object.keys(component.form.controls).length).toBe(0);
        } else {
          testCase.result();
        }
      });
    });
  });

  describe('_addRangeControls', () => {
    it(`makes expected calls`, () => {
      // preparation
      spyOn(Utils, 'addControl');
      const field = { type: 'input', key: 'foo' };

      // call
      component['_addRangeControls'](field as any);

      // test
      component['dynamicJsonFormService'].rangeEndings.forEach((ending: string) =>
        expect(Utils.addControl).toHaveBeenCalledWith(
          {
            ...field,
            key: 'foo' + ending,
            validators: [],
            asyncValidators: [],
          } as any,
          component.form
        )
      );
    });
  });

  describe('_addMultiRow', () => {
    [
      {
        field: {
          type: 'multi-row',
          key: 'foo',
          disabled: true,
        },
        initial: {
          foo: 'bar',
        },
      },
      {
        field: {
          type: 'multi-row',
          key: 'foo',
          disabled: true,
        },
        initial: {},
      },
    ].forEach((test) => {
      it(`makes expected calls`, () => {
        // preparation
        component.initial = test.initial;
        const formGroups: FormGroup[] = [new FormGroup({})];
        const spy1 = spyOn(Utils, 'getMultiRow').and.returnValue(formGroups);
        const spy2 = spyOn(component.form, 'addControl');
        const spy3 = spyOn(component.form, 'get').and.callFake(
          () =>
            ({
              disable: () => {},
            } as any)
        );

        // call
        component['_addMultiRow'](test.field as any);

        // test
        expect(spy1).toHaveBeenCalledWith(test.field as any, test.initial?.foo || []);
        expect(spy2).toHaveBeenCalled();
      });
    });
  });
});
