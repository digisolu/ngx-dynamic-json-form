import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

import { NgxDynamicJsonFormMaterialModule } from '../../ngx-dynamic-json-form-material.module';
import { Stub } from '../../utils';
import { NdfMatFormFieldComponent } from './ndf-mat-form-field.component';
import { Utils } from '@ngx-dynamic-json-form/core';

describe('NdfMatFormFieldComponent', () => {
  let component: NdfMatFormFieldComponent;
  let fixture: ComponentFixture<NdfMatFormFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NgxDynamicJsonFormMaterialModule],
    });
    fixture = TestBed.createComponent(NdfMatFormFieldComponent);
    component = fixture.componentInstance;

    component.dynamicJsonFormService = Stub.getNgxDynamicJsonFormService();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`replaceInput has default value`, () => {
    expect(component.replaceInput).toEqual(true);
  });

  it(`isFormRequired has default value`, () => {
    expect(component['destroyed$'] instanceof ReplaySubject).toEqual(true);
  });

  it(`isBeforeViewInit$ has default value`, (done) => {
    expect(component['isBeforeViewInit$'] instanceof BehaviorSubject).toEqual(true);

    component.isBeforeViewInit$.subscribe((value) => {
      expect(value).toBeTrue();
      done();
    });
  });

  describe(`get isRange`, () => {
    it(`returns the correct value: true`, () => {
      component.field = { type: 'slider-range' };
      expect(component.isRange).toBeTrue();
    });

    it(`returns the correct value: false`, () => {
      component.field = { type: 'input' };
      expect(component.isRange).toBeFalse();
    });
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

  describe('ngAfterViewInit', () => {
    it(`makes expected calls for non ranges`, () => {
      const spy1 = spyOn(component as any, '_repairFormField');
      const spy2 = spyOn(component as any, '_enableRangeChangeDetection');
      spyOnProperty(component, 'isRange').and.returnValue(false);

      component.ngAfterViewInit();

      expect(spy1).toHaveBeenCalled();
      expect(spy2).not.toHaveBeenCalled();
    });

    it(`makes expected calls for ranges`, () => {
      const spy1 = spyOn(component as any, '_repairFormField');
      const spy2 = spyOn(component as any, '_enableRangeChangeDetection');
      spyOnProperty(component, 'isRange').and.returnValue(true);

      component.ngAfterViewInit();

      expect(spy1).toHaveBeenCalled();
      expect(spy2).toHaveBeenCalled();
    });
  });

  describe(`onPrefixClick`, () => {
    it(`calls onPrefixClick if existing in field`, () => {
      component.field = {
        type: 'input',
        key: 'anyKey',
        onPrefixClick(event: any) {},
      };

      spyOn(component.field as any, 'onPrefixClick');

      component.onPrefixClick({ target: 'test' } as any);

      expect(component.field?.onPrefixClick).toHaveBeenCalledWith({ target: 'test' } as any);
    });
  });

  describe(`onSuffixClick`, () => {
    it(`calls onSuffixClick if existing in field`, () => {
      component.field = {
        type: 'input',
        key: 'anyKey',
        onSuffixClick(event: any) {},
      };

      spyOn(component.field as any, 'onSuffixClick');

      component.onSuffixClick({ target: 'test' } as any);

      expect(component.field?.onSuffixClick).toHaveBeenCalledWith({ target: 'test' } as any);
    });
  });

  describe(`getErrors`, () => {
    ['anyKey', '', undefined, null].forEach((test) => {
      it(`returns the correct error message for ranges with key: "${test}"`, () => {
        spyOnProperty(component, 'isRange').and.returnValue(true);
        const spy1 = spyOn(component as any, '_getRangeErrors');

        component.getErrors(test as any);

        expect(spy1).toHaveBeenCalledWith(test || '');
      });
    });

    ['anyKey', '', undefined, null].forEach((test, index) => {
      it(`returns the correct error message for non ranges with key: "${test}"`, () => {
        spyOnProperty(component, 'isRange').and.returnValue(false);
        component.form = new FormGroup({ anyKey: new FormControl() });

        const spy1 = spyOn(component as any, '_getRangeErrors').and.callThrough();
        const spy2 = spyOn(component.form, 'get').and.callThrough();
        const spy3 = spyOn(Utils, 'getErrors').and.callThrough();

        index === 1
          ? component.form.get(test as any)?.markAsTouched()
          : component.form.get(test as any)?.markAsDirty();

        !!test ? component.getErrors(test) : expect(component.getErrors(test as any)).toEqual([]);

        expect(spy1).not.toHaveBeenCalled();
        expect(spy2).toHaveBeenCalledWith(test as any);

        !!test
          ? expect(spy3).toHaveBeenCalledWith(test as any, component.form)
          : expect(spy3).not.toHaveBeenCalledWith(test as any, component.form);
      });
    });
  });

  describe(`clearInput`, () => {
    it(`to patch the correct value for single values`, () => {
      component.field = {
        type: 'input',
        key: 'anyKey',
      };
      component.form = new FormGroup({ anyKey: new FormControl('1') });

      component.clearInput();

      expect(component.getFormControl()!.value).toEqual('');
    });

    it(`to patch the correct value for array values`, () => {
      component.field = {
        type: 'input',
        key: 'anyKey',
      };
      component.form = new FormGroup({ anyKey: new FormControl(['1']) });

      component.clearInput();

      expect(component.getFormControl()!.value).toEqual([]);
    });
  });

  describe(`_repairFormField`, () => {
    it(`makes expected calls and not replaces the input fake field`, fakeAsync(() => {
      component['_matFormField'] = {
        _control: {},
        ngAfterContentInit() {},
        ngAfterContentChecked() {},
        ngAfterViewInit() {},
      } as any;

      component.replaceInput = false;

      const spy0 = spyOn(component.isBeforeViewInit$, 'next');
      const spy1 = spyOn(component['_matFormField'], 'ngAfterContentInit');
      const spy2 = spyOn(component['_matFormField'], 'ngAfterContentChecked');
      const spy3 = spyOn(component['_matFormField'], 'ngAfterViewInit');

      component['_repairFormField']();

      tick(10);

      expect(spy0).not.toHaveBeenCalled();
      expect(spy1).toHaveBeenCalled();
      expect(spy2).toHaveBeenCalled();
      expect(spy3).toHaveBeenCalled();
    }));

    it(`makes expected calls and replaces the input fake field`, fakeAsync(() => {
      component['_matFormField'] = {
        _control: {},
        ngAfterContentInit() {},
        ngAfterContentChecked() {},
        ngAfterViewInit() {},
      } as any;

      component.replaceInput = true;

      const spy0 = spyOn(component.isBeforeViewInit$, 'next');
      const spy1 = spyOn(component['_matFormField'], 'ngAfterContentInit');
      const spy2 = spyOn(component['_matFormField'], 'ngAfterContentChecked');
      const spy3 = spyOn(component['_matFormField'], 'ngAfterViewInit');

      component['_repairFormField']();

      tick(10);

      expect(spy0).toHaveBeenCalledWith(false);
      expect(spy1).toHaveBeenCalled();
      expect(spy2).toHaveBeenCalled();
      expect(spy3).toHaveBeenCalled();
    }));
  });

  describe(`_enableRangeChangeDetection`, () => {
    it(`makes expected calls and not replaces the input fake field`, fakeAsync(() => {
      component.field = {
        type: 'slider-range',
        key: 'anyKey',
      };
      component.form = new FormGroup({
        anyKeyStart: new FormControl(null),
        anyKeyEnd: new FormControl('99'),
      });

      const spy1 = spyOn(component.form, 'get').and.callThrough();
      const spy2 = spyOn(Utils, 'addEnding').and.callThrough();
      const spy3 = spyOn(component['_cd'], 'detectChanges');

      component['_enableRangeChangeDetection']();

      component.form.get('anyKeyStart')?.patchValue('2');
      component.form.get('anyKeyStart')?.patchValue('98');
      tick(300);

      expect(spy1).toHaveBeenCalledWith('anyKeyStart');
      expect(spy1).toHaveBeenCalledWith('anyKeyEnd');
      expect(spy2).toHaveBeenCalledWith('anyKey', 'Start');
      expect(spy2).toHaveBeenCalledWith('anyKey', 'End');
      expect(spy3).toHaveBeenCalledTimes(2);
    }));
  });

  describe(`_getRangeErrors`, () => {
    it(`Returns the correct error of a range field.`, () => {
      component.form = new FormGroup({
        anyKeyStart: new FormControl(null, [Validators.required]),
        anyKeyEnd: new FormControl(null, [Validators.required]),
      });

      const spy1 = spyOn(component.form, 'get').and.callThrough();
      const spy2 = spyOn(Utils, 'addEnding').and.callThrough();
      const spy3 = spyOn(Utils, 'getErrors').and.callThrough();

      component.form.get('anyKeyStart')?.markAsTouched();
      component.form.get('anyKeyEnd')?.markAsDirty();

      expect(component['_getRangeErrors']('anyKey')).toEqual(['required']);

      expect(spy1).toHaveBeenCalledWith('anyKeyStart');
      expect(spy1).toHaveBeenCalledWith('anyKeyEnd');
      expect(spy2).toHaveBeenCalledWith('anyKey', 'Start');
      expect(spy2).toHaveBeenCalledWith('anyKey', 'End');
      expect(spy3).toHaveBeenCalledTimes(2);
    });

    it(`Returns the correct error of a range field with unknown form fields.`, () => {
      component.form = new FormGroup({});

      const spy1 = spyOn(component.form, 'get').and.callThrough();
      const spy2 = spyOn(Utils, 'addEnding').and.callThrough();
      const spy3 = spyOn(Utils, 'getErrors').and.callThrough();

      expect(component['_getRangeErrors']('aKey')).toEqual([]);

      expect(spy1).toHaveBeenCalledWith('aKeyStart');
      expect(spy1).toHaveBeenCalledWith('aKeyEnd');
      expect(spy2).toHaveBeenCalledWith('aKey', 'Start');
      expect(spy2).toHaveBeenCalledWith('aKey', 'End');
      expect(spy3).toHaveBeenCalledTimes(2);
    });
  });
});
