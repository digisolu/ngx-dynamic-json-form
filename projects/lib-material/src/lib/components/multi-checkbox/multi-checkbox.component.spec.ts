import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MultiCheckboxComponent } from './multi-checkbox.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('MultiCheckboxComponent', () => {
  let component: MultiCheckboxComponent;
  let fixture: ComponentFixture<MultiCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MultiCheckboxComponent],
    });
    fixture = TestBed.createComponent(MultiCheckboxComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`key has default value`, () => {
    expect(MultiCheckboxComponent.key).toEqual(`multi-checkbox`);
  });

  it(`requiredParams has default value`, () => {
    expect(component['requiredParams']).toEqual([`key`, `type`, `options`]);
  });

  describe(`get _options`, () => {
    it(`return correct options with disabled = true / false / undefined`, () => {
      component.field = {
        key: 'anyKey',
        type: 'multi-checkbox',
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
        type: 'multi-checkbox',
      } as any;

      expect(component['_options']).toEqual([]);
    });
  });

  describe(`get _values`, () => {
    it(`return correct values from form field`, () => {
      component.field = {
        key: 'anyKey',
        type: 'multi-checkbox',
        options: [
          { label: 'label 1', value: '1' },
          { label: 'label 2', value: '2' },
        ],
      };
      component.form = new FormGroup({ anyKey: new FormControl(['1', '2']) });

      expect(component['_values']).toEqual(['1', '2']);
    });

    it(`return empty array if no form control is available`, () => {
      component.field = {
        key: 'anyKey',
        type: 'multi-checkbox',
        options: [
          { label: 'label 1', value: '1' },
          { label: 'label 2', value: '2' },
        ],
      };
      component.form = new FormGroup({});

      expect(component['_values']).toEqual([]);
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
      //
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
          type: 'multi-checkbox',
          options: [
            { label: 'label 1', value: '1' },
            { label: 'label 2', value: '2' },
            { label: 'label 3', value: '3' },
            { label: 'label 4', value: '4', disabled: true },
          ],
        };
        component.form = new FormGroup({ anyKey: new FormControl(test.initial) });

        component.toggleSelection({ checked: test.checked });

        expect(component['_values']).toEqual(test.result);
      });
    });
  });
});
