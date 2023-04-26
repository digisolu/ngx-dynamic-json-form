import { FormGroup, Validators } from '@angular/forms';

import { Utils } from './utils.class';

describe('Utils', () => {
  describe('getMultiRow', () => {
    it('generate no multi-row, if there is no initial', () => {
      expect(
        Utils.getMultiRow(
          {
            type: 'multi-row',
            key: 'anyKey',
            fields: [
              {
                key: 'innerKey',
                type: 'input',
              },
            ],
          },
          []
        )
      ).toEqual([]);
    });

    it('generate a multi-row, if there is initial', () => {
      const rows = Utils.getMultiRow(
        {
          type: 'multi-row',
          key: 'anyKey',
          fields: [
            {
              key: 'innerKey',
              type: 'input',
            },
          ],
        },
        [1]
      );

      expect(rows.length).toBe(1);
      expect(!!rows[0]?.get('innerKey')).toBe(true);
    });
  });

  it('generate a multi-row, but skips wrong type', () => {
    spyOn(Utils, 'addControl').and.callThrough();
    const rows = Utils.getMultiRow(
      {
        type: 'multi-row',
        key: 'anyKey',
        fields: [
          {
            key: 'innerKey',
            type: 'input',
          },
          {
            key: 'innerKey2',
            type: 'container',
            fields: [],
          },
          {
            type: 'html',
            content: 'test',
          },
        ],
      },
      [1]
    );

    expect(rows.length).toBe(1);
    expect(!!rows[0]?.get('innerKey')).toBe(true);
    expect(!!rows[0]?.get('innerKey2')).toBe(false);
    expect(Object.keys(rows[0].controls).length).toBe(1);
    expect(Utils.addControl).toHaveBeenCalledTimes(1);
  });

  describe('addControl', () => {
    it('add control, if there is a key in the field', () => {
      const formGroup = new FormGroup({});
      const field = {
        key: 'anyKey',
        type: 'input',
      } as any;
      spyOn(formGroup, 'addControl');

      Utils.addControl(field, formGroup);

      expect(formGroup.addControl).toHaveBeenCalled();
    });

    it('add no control, if there is no key in the field', () => {
      const formGroup = new FormGroup({});
      const field = {
        content: '',
        type: 'html',
      } as any;
      spyOn(formGroup, 'addControl');

      Utils.addControl(field, formGroup);

      expect(formGroup.addControl).not.toHaveBeenCalled();
    });
  });

  describe('getFormControl', () => {
    it('return a form control with given field', () => {
      const field = {
        key: 'anyKey',
        type: 'input',
        disabled: true,
      } as any;

      const formControl = Utils.getFormControl(field);

      expect(formControl.disabled).toBeTrue();
      expect(formControl.value).toEqual(null);
      expect(formControl.updateOn).toBe('change');
    });
  });

  it('sets array as default, if it is a multi selection field', () => {
    const field = {
      key: 'anyKey',
      type: 'multi-autocomplete',
      updateOn: 'blur',
    } as any;

    const formControl = Utils.getFormControl(field);

    expect(formControl.disabled).toBeFalse();
    expect(formControl.value).toEqual([]);
    expect(formControl.updateOn).toBe('blur');
  });

  describe('isMultiSelection', () => {
    Utils.multiSelections.forEach((type) => {
      it(`returns true, if the key is type of multi selection. Given type: "${type}"`, () => {
        const field = { key: 'anyKey', type } as any;

        expect(Utils.isMultiSelection(field)).toBeTrue();
      });
    });
  });

  ['html', 'input', 'select'].forEach((type) => {
    it(`returns false, if the key is not type of multi selection. Given type: "${type}"`, () => {
      const field = { key: 'anyKey', type } as any;

      expect(Utils.isMultiSelection(field)).toBeFalse();
    });
  });

  describe('getValidators', () => {
    it(`Add the required validator if the field is required.`, () => {
      const field = { key: 'anyKey', type: 'input', required: true } as any;

      expect(Utils.getValidators(field).length).toBe(1);
    });

    it(`Adds validators if they are passed in the field.`, () => {
      const field = { key: 'anyKey', type: 'input', validators: [Validators.email] } as any;

      expect(Utils.getValidators(field).length).toBe(1);
    });
  });

  describe('getAsyncValidators', () => {
    it(`Adds asyncValidators if they are passed in the field.`, () => {
      const field = { key: 'anyKey', type: 'input', asyncValidators: [Validators.email] } as any;

      expect(Utils.getAsyncValidators(field).length).toBe(1);
    });

    it(`Adds no asyncValidators if they are no validators passed in the field.`, () => {
      const field = { key: 'anyKey', type: 'input' } as any;

      expect(Utils.getAsyncValidators(field).length).toBe(0);
    });
  });

  describe('getErrors', () => {
    it(`Returns the correct error of a field.`, () => {
      const formGroup: FormGroup = new FormGroup({});
      const field = { key: 'anyKey', type: 'input', required: true } as any;
      Utils.addControl(field, formGroup);

      formGroup.get(field.key)?.markAsTouched();

      expect(Utils.getErrors(field.key, formGroup).length).toBe(1);
      expect(Utils.getErrors(field.key, formGroup)[0]).toBe('required');
    });

    it(`Returns no error of a field, if the field does not exist.`, () => {
      const formGroup: FormGroup = new FormGroup({});
      const field = { key: 'anyKey', type: 'input', required: true } as any;
      Utils.addControl(field, formGroup);

      formGroup.get(field.key)?.markAsTouched();

      expect(Utils.getErrors('wrongKey', formGroup).length).toBe(0);
      expect(Utils.getErrors('wrongKey', formGroup)[0]).not.toBe('required');
    });
  });

  describe('getErrorStateMatcher', () => {
    it(`Returns the correct ErrorStateMatcher: submitted.`, () => {
      const formGroup: FormGroup = new FormGroup({});
      const field = { key: 'anyKey', type: 'input', required: true } as any;
      Utils.addControl(field, formGroup);
      const formControl = formGroup.get(field.key);
      const errorStateMatcher = Utils.getErrorStateMatcher();

      // Check submitted
      expect(errorStateMatcher.isErrorState(formControl, { submitted: true } as any)).toBeTrue();
    });

    it(`Returns the correct ErrorStateMatcher: invalid and dirty.`, () => {
      const formGroup: FormGroup = new FormGroup({});
      const field = { key: 'anyKey', type: 'input', required: true } as any;
      Utils.addControl(field, formGroup);
      const formControl = formGroup.get(field.key);
      const errorStateMatcher = Utils.getErrorStateMatcher();

      // Check invalid and dirty
      formControl?.markAsDirty();
      expect(errorStateMatcher.isErrorState(formControl, { submitted: false } as any)).toBeTrue();
    });
  });

  it(`Returns the correct ErrorStateMatcher: invalid and touched.`, () => {
    const formGroup: FormGroup = new FormGroup({});
    const field = { key: 'anyKey', type: 'input', required: true } as any;
    Utils.addControl(field, formGroup);
    const formControl = formGroup.get(field.key);
    const errorStateMatcher = Utils.getErrorStateMatcher();

    // Check invalid and touched
    formControl?.markAsTouched();
    expect(errorStateMatcher.isErrorState(formControl, { submitted: false } as any)).toBeTrue();
  });

  describe('addEnding', () => {
    it(`Returns the correct ending, if a key and the ending was passed correctly.`, () => {
      expect(Utils.addEnding('myKey', 'Start')).toBe('myKeyStart');
      expect(Utils.addEnding('myKey', 'End')).toBe('myKeyEnd');
      expect(Utils.addEnding('myKey', '')).toBe('myKey');
      expect(Utils.addEnding('myKey', undefined as any)).toBe('myKey');
      expect(Utils.addEnding('myKey', null as any)).toBe('myKey');

      expect(Utils.addEnding('', 'Start')).toBe('Start');
      expect(Utils.addEnding(undefined, 'Start')).toBe('Start');
      expect(Utils.addEnding(null as any, 'Start')).toBe('Start');
    });
  });

  describe('toFlatArray', () => {
    it(`flat an array correctly.`, () => {
      expect(
        Utils.toFlatArray([
          {
            label: 'label1',
            value: '1',
            group: [
              { label: 'groupedLabel1', value: 'grouped1' },
              { label: 'groupedLabel2', value: 'grouped2' },
            ],
          },
        ])
      ).toEqual([
        { label: 'groupedLabel1', value: 'grouped1' },
        { label: 'groupedLabel2', value: 'grouped2' },
      ]);

      expect(Utils.toFlatArray(undefined)).toEqual([]);
      expect(Utils.toFlatArray(null as any)).toEqual([]);
    });
  });

  describe('camelCase', () => {
    it(`returns a camel cased string correctly.`, () => {
      expect(Utils.camelCase(undefined as any)).toBe('undefined');
      expect(Utils.camelCase(null as any)).toBe('null');
      expect(Utils.camelCase('this-is-a-test')).toBe('thisIsATest');
      expect(Utils.camelCase('this_is_a_test')).toBe('thisIsATest');
      expect(Utils.camelCase('thIs-is-a-tEst')).toBe('thIsIsATEst');
    });
  });

  describe('isObject', () => {
    it(`returns the correct value.`, () => {
      expect(Utils.isObject(undefined)).toBeFalse();
      expect(Utils.isObject(null)).toBeFalse();
      expect(Utils.isObject([])).toBeFalse();
      expect(Utils.isObject('')).toBeFalse();

      expect(Utils.isObject({})).toBeTrue();
    });
  });

  describe('deepMerge', () => {
    it(`deepMerge for objects (no array) works correctly`, () => {
      expect(Utils.deepMerge({ foo: 'bar' }, { bar: 'baz' })).toEqual({ foo: 'bar', bar: 'baz' });
      expect(
        Utils.deepMerge({ foo: 'bar', test: 'foo' }, { foo: 'baz', test: 'fooo', baz: 'bar' })
      ).toEqual({
        foo: 'baz',
        test: 'fooo',
        baz: 'bar',
      });
      expect(Utils.deepMerge({}, { foo: 'baz', test: 'fooo', baz: 'bar' })).toEqual({
        foo: 'baz',
        test: 'fooo',
        baz: 'bar',
      });
      expect(Utils.deepMerge({ foo: 'bar', test: 'foo' }, { a: { b: 'c' } })).toEqual({
        foo: 'bar',
        test: 'foo',
        a: { b: 'c' },
      });
    });

    it(`deepMerge calls mergeArray if it is an array.`, () => {
      spyOn(Utils, 'mergeArray');

      Utils.deepMerge([1], [2]);

      expect(Utils.mergeArray).toHaveBeenCalledWith([1], [2]);
    });
  });

  describe('mergeArray', () => {
    it(`mergeArray returns correct value.`, () => {
      expect(Utils.mergeArray([1], [2])).toEqual([1, 2]);
      expect(Utils.mergeArray([2], [1])).toEqual([2, 1]);

      expect(Utils.mergeArray([1], [1])).toEqual([1]);
    });
  });

  describe('sortObject', () => {
    it(`sortObject (by keys) returns correct value.`, () => {
      expect(
        Utils.sortObject({
          a: 'a',
          c: 'c',
          b: 'b',
        })
      ).toEqual({
        a: 'a',
        b: 'b',
        c: 'c',
      });

      expect(Utils.sortObject(['a', 'c', 'b'])).toEqual({});
    });
  });
});
