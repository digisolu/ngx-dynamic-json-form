import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerRangeComponent } from './datepicker-range.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { AbstractFormFieldComponent } from '@ngx-dynamic-json-form/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Stub } from '../../utils';

describe('DatepickerRangeComponent', () => {
  let component: DatepickerRangeComponent;
  let fixture: ComponentFixture<DatepickerRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DatepickerRangeComponent],
    });
    fixture = TestBed.createComponent(DatepickerRangeComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`key has default value`, () => {
    expect(DatepickerRangeComponent.key).toEqual(`datepicker-range`);
  });

  describe(`onChange`, () => {
    it(`makes expected calls`, () => {
      component.field = {
        type: 'datepicker-range',
        key: 'anyKey',
      };

      component.dynamicJsonFormService = Stub.getNgxDynamicJsonFormService({
        rangeEndings: { ...Stub.RANGE_ENDINGS },
      });

      component.form = new FormGroup({
        anyKeyStart: new FormControl('2'),
        anyKeyEnd: new FormControl('123'),
      });

      spyOn(AbstractFormFieldComponent.prototype, 'onChange');

      component.onChange({} as any);

      expect(AbstractFormFieldComponent.prototype.onChange).toHaveBeenCalledWith({
        target: {
          value: {
            anyKeyStart: '2',
            anyKeyEnd: '123',
          },
        },
      });
    });
  });
});
