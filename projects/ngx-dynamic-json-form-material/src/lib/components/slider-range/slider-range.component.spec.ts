import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractFormFieldComponent, Utils } from '@ngx-dynamic-json-form/core';

import { Stub } from '../../utils';
import { SliderRangeComponent } from './slider-range.component';

describe('SliderRangeComponent', () => {
  let component: SliderRangeComponent;
  let fixture: ComponentFixture<SliderRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SliderRangeComponent],
    });
    fixture = TestBed.createComponent(SliderRangeComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`key has default value`, () => {
    expect(SliderRangeComponent.key).toEqual(`slider-range`);
  });

  describe(``, () => {
    it(`makes expected calls and not replaces the input fake field`, () => {
      component.dynamicJsonFormService = Stub.getNgxDynamicJsonFormService();

      component.field = {
        type: 'slider-range',
        key: 'anyKey',
      };
      component.form = new FormGroup({
        anyKeyStart: new FormControl('1'),
        anyKeyEnd: new FormControl('99'),
      });

      spyOn(AbstractFormFieldComponent.prototype, 'onChange');

      const spy1 = spyOn(component, 'getFormControl').and.callThrough();
      const spy2 = spyOn(Utils, 'addEnding').and.callThrough();

      component.onChange(null);

      expect(spy1).toHaveBeenCalledWith('anyKeyStart');
      expect(spy1).toHaveBeenCalledWith('anyKeyEnd');
      expect(spy2).toHaveBeenCalledWith('anyKey', 'Start');
      expect(spy2).toHaveBeenCalledWith('anyKey', 'End');

      expect(AbstractFormFieldComponent.prototype.onChange).toHaveBeenCalledWith({
        target: {
          value: {
            anyKeyStart: '1',
            anyKeyEnd: '99',
          },
        },
      });
    });
  });
});
