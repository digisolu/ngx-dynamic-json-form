import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractFormFieldComponent, Utils } from '@ngx-dynamic-json-form/core';
import { of } from 'rxjs';

import { MatUtils, Stub } from '../../utils';
import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SelectComponent],
    });
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`key has default value`, () => {
    expect(SelectComponent.key).toEqual(`select`);
  });

  it(`requiredParams has default value`, () => {
    expect(component['requiredParams']).toEqual([`key`, `type`, `options`]);
  });

  describe(`get _options`, () => {
    it(`return correct options with disabled = true / false / undefined`, () => {
      component.field = {
        key: 'anyKey',
        type: 'select',
        options: [
          { label: 'label 1', value: '1' }, // <= true
          { label: 'label 2', value: '2', disabled: true }, // <= true
          { label: 'label 3', value: '3', disabled: null } as any, // <= true
          { label: 'label 4', value: '4', disabled: false },
        ],
      };

      expect(component['_options']).toEqual(['1', '3', '4']);
    });

    it(`return empty options array, if no options were passed`, () => {
      component.field = {
        key: 'anyKey',
        type: 'select',
      } as any;

      expect(component['_options']).toEqual([]);
    });
  });

  describe(`get _values`, () => {
    it(`return correct values`, () => {
      component.field = {
        key: 'anyKey',
        type: 'select',
        options: [],
      };
      component.form = new FormGroup({ anyKey: new FormControl(['1', '2', '3']) });

      expect(component['_values']).toEqual(['1', '2', '3']);
    });

    it(`return correct values for empty value`, () => {
      component.field = {
        key: 'anyKey',
        type: 'select',
        options: [],
      };
      component.form = new FormGroup({ anyKey: new FormControl() });

      expect(component['_values']).toEqual(undefined);
    });
  });

  describe(`ngOnInit`, () => {
    it(`makes expected calls, with no given parameter`, fakeAsync(() => {
      component.field = {
        type: 'select',
        key: 'anyKey',
        options: [],
      };

      spyOn(AbstractFormFieldComponent.prototype, 'ngOnInit');
      spyOn(component as any, 'onFilter$').and.callThrough();
      component.searchFilter = new FormControl('14');

      component.ngOnInit();
      component.visibleOptions$.subscribe();

      component.searchFilter.patchValue('665');
      tick(300);

      expect(AbstractFormFieldComponent.prototype.ngOnInit).toHaveBeenCalled();
      expect(component['onFilter$']).toHaveBeenCalledWith('665');
    }));

    it(`makes expected calls, with true as given parameter and no value`, fakeAsync(() => {
      component.field = {
        type: 'select',
        key: 'anyKey',
        options: [],
      };

      spyOn(AbstractFormFieldComponent.prototype, 'ngOnInit');
      spyOn(component as any, 'onFilter$').and.callThrough();
      component.searchFilter = new FormControl(null);

      component.ngOnInit();
      component.visibleOptions$.subscribe();

      // Set null
      component.searchFilter.patchValue(null);
      tick(300);

      // Set 665
      component.searchFilter.patchValue('665');
      tick(300);

      expect(AbstractFormFieldComponent.prototype.ngOnInit).toHaveBeenCalled();
      expect(component['onFilter$']).toHaveBeenCalledWith('665');
    }));
  });

  describe(`onFilter$`, () => {
    it(`returns correct values with no custom onFilter callback`, (done) => {
      const spy1 = spyOn(MatUtils, 'filterEntries$').and.callThrough();
      component.field = {
        type: 'select',
        key: 'anyKey',
        options: [
          {
            label: 'anyLabel4',
            value: '4',
          },
          {
            label: 'anyLabel5',
            value: '5',
          },
        ],
      };

      component['onFilter$']('5').subscribe(() => {
        expect(spy1).toHaveBeenCalledWith('5', [
          {
            label: 'anyLabel4',
            value: '4',
          },
          {
            label: 'anyLabel5',
            value: '5',
          },
        ]);
        done();
      });
    });

    it(`returns correct values with a custom onFilter callback`, (done) => {
      component.field = {
        type: 'select',
        key: 'anyKey',
        options: [
          {
            label: 'anyLabel4',
            value: '4',
          },
          {
            label: 'anyLabel5',
            value: '5',
          },
        ],
        onFilter$() {
          return of([
            {
              label: 'anyLabel4',
              value: '4',
            },
          ]);
        },
      };

      component['onFilter$']('4').subscribe((values) => {
        expect(values).toEqual([
          {
            label: 'anyLabel4',
            value: '4',
          },
        ]);
        done();
      });
    });

    it(`returns correct values with no custom onFilter callback but no options`, (done) => {
      spyOn(MatUtils, 'filterEntries$').and.callThrough();
      component.field = {
        type: 'select',
        key: 'anyKey',
      } as any;

      component['onFilter$']('4').subscribe((values) => {
        expect(values).toEqual([]);
        expect(MatUtils.filterEntries$).toHaveBeenCalledWith('4', []);
        done();
      });
    });
  });

  describe(`isChecked`, () => {
    [
      { _values: false, _options: [] },
      { _values: null, _options: [] },
      { _values: undefined, _options: [] },
      { _values: [], _options: [] },
      { _values: ['1', '2'], _options: ['1'] },
      { _values: ['1'], _options: ['1', '2'] },
    ].forEach((test, index) => {
      it(`return correct value: false with value, variant "${index + 1}"`, () => {
        spyOnProperty(component as any, '_values').and.returnValue(test._values);
        spyOnProperty(component as any, '_options').and.returnValue(test._options);

        expect(component.isChecked()).toBeFalse();
      });
    });

    [
      { _values: ['1', '2'], _options: ['1', '2'] },
      { _values: [null, '2'], _options: [null, '2'] },
      { _values: ['', '2'], _options: ['', '2'] },
    ].forEach((test, index) => {
      it(`return correct value: true with value, variant "${index + 1}"`, () => {
        spyOnProperty(component as any, '_values').and.returnValue(test._values);
        spyOnProperty(component as any, '_options').and.returnValue(test._options);

        expect(component.isChecked()).toBeTrue();
      });
    });
  });

  describe(`isIndeterminate`, () => {
    [
      { _values: false, _options: [] },
      { _values: null, _options: [] },
      { _values: undefined, _options: [] },
      { _values: [], _options: [] },
      { _values: ['1', '2'], _options: ['1'] },
      { _values: ['', '2'], _options: ['', '2'] },
      { _values: [null, '2'], _options: [null, '2'] },
      { _values: ['1', '2'], _options: ['1', '2'] },
    ].forEach((test, index) => {
      it(`return correct value: false with value, variant "${index + 1}"`, () => {
        spyOnProperty(component as any, '_values').and.returnValue(test._values);
        spyOnProperty(component as any, '_options').and.returnValue(test._options);

        expect(component.isIndeterminate()).toBeFalse();
      });
    });

    [{ _values: ['1'], _options: ['1', '2'] }].forEach((test, index) => {
      it(`return correct value: true with value, variant "${index + 1}"`, () => {
        spyOnProperty(component as any, '_values').and.returnValue(test._values);
        spyOnProperty(component as any, '_options').and.returnValue(test._options);

        expect(component.isIndeterminate()).toBeTrue();
      });
    });
  });

  describe(`toggleSelection`, () => {
    [
      { checked: true, initial: [], result: ['1', '2', '3'] },
      { checked: true, initial: ['1'], result: ['1', '2', '3'] },
      { checked: true, initial: ['1', '2', '3'], result: ['1', '2', '3'] },

      { checked: false, initial: ['1', '2', '3'], result: [] },
      { checked: false, initial: ['1'], result: [] },
      { checked: false, initial: [], result: [] },
    ].forEach((test, index) => {
      it(`check all options: variant ${index + 1}`, () => {
        component.field = {
          key: 'anyKey',
          type: 'select',
          options: [
            { label: 'label 1', value: '1' },
            { label: 'label 2', value: '2' },
            { label: 'label 3', value: '3' },
            { label: 'label 4', value: '4', disabled: true },
          ],
        };
        component.form = new FormGroup({ anyKey: new FormControl(test.initial) });

        component.toggleSelection(test.checked);

        expect(component.getFormControl()?.value).toEqual(test.result);
      });
    });
  });

  describe('compareWith', () => {
    it(`makes expected calls with a given callback`, () => {
      // preparation
      component.field = { key: 'anyKey', type: 'select', compareWith: () => ({}) } as any;
      spyOn(component.field as any, 'compareWith');

      // call
      component.compareWith({ foo: 'bar' }, { bar: 'baz' });

      // test
      expect((component.field as any).compareWith).toHaveBeenCalledWith(
        { foo: 'bar' },
        { bar: 'baz' }
      );
    });

    it(`makes expected calls without a callback and objects and expect false`, () => {
      // preparation
      component.field = { key: 'anyKey', type: 'select' } as any;
      const spy1 = spyOn(Utils, 'isObject').and.callThrough();

      // call
      expect(component.compareWith({ foo: 'bar' }, { bar: 'baz' })).toBeFalse();

      // test
      expect(spy1).toHaveBeenCalledWith({ foo: 'bar' });
      expect(spy1).toHaveBeenCalledWith({ bar: 'baz' });
    });

    it(`makes expected calls without a callback and objects and expect true`, () => {
      // preparation
      component.field = { key: 'anyKey', type: 'select' } as any;
      const spy1 = spyOn(Utils, 'isObject').and.callThrough();

      // call
      expect(component.compareWith({ foo: 'bar' }, { foo: 'bar' })).toBeTrue();

      // test
      expect(spy1).toHaveBeenCalledWith({ foo: 'bar' });
    });

    it(`makes expected calls without a callback and strings and expect true`, () => {
      // preparation
      component.field = { key: 'anyKey', type: 'select' } as any;

      // call
      expect(component.compareWith('2', '2')).toBeTrue();
    });

    it(`makes expected calls without a callback and strings and expect false`, () => {
      // preparation
      component.field = { key: 'anyKey', type: 'select' } as any;

      // call
      expect(component.compareWith('2', '3')).toBeFalse();
      expect(component.compareWith('2', 2)).toBeFalse();
    });
  });

  describe(`getPanelClass`, () => {
    it(`adds correct classes to the panel: global + single selection`, () => {
      component.dynamicJsonFormService = Stub.getNgxDynamicJsonFormService({
        layoutOptions: {
          default: {},
          select: { panelClass: 'my-global-class' },
        },
      });

      component.field = { key: 'anyKey', type: 'select', options: [] };

      expect(component.getPanelClass()).toEqual(['my-global-class', 'ndf-panel-single']);
    });

    it(`adds correct classes to the panel: global + multi selection`, () => {
      component.dynamicJsonFormService = Stub.getNgxDynamicJsonFormService({
        layoutOptions: {
          default: {},
          select: { panelClass: ['my-global-class'] },
        },
      });

      component.field = { key: 'anyKey', type: 'select', options: [], multiple: true };

      expect(component.getPanelClass()).toEqual(['my-global-class', 'ndf-panel-multiple']);
    });

    it(`adds correct classes to the panel: field + single selection`, () => {
      component.field = {
        key: 'anyKey',
        type: 'select',
        options: [],
        panelClass: 'my-global-class',
      };

      expect(component.getPanelClass()).toEqual(['my-global-class', 'ndf-panel-single']);
    });

    it(`adds correct classes to the panel: field + multi selection`, () => {
      component.field = {
        key: 'anyKey',
        type: 'select',
        options: [],
        multiple: true,
        panelClass: ['my-global-class'],
      };

      expect(component.getPanelClass()).toEqual(['my-global-class', 'ndf-panel-multiple']);
    });
  });
});
