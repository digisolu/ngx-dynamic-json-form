import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SliderComponent],
    });
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`key has default value`, () => {
    expect(SliderComponent.key).toEqual(`slider`);
  });

  describe(`getLabel`, () => {
    it(`returns the correct value with a given callback`, () => {
      component.field = {
        type: 'slider',
        key: 'anyKey',
        displayWith(value: any) {},
      } as any;

      spyOn(component.field as any, 'displayWith');

      component.getLabel(5);

      expect(component.field?.displayWith).toHaveBeenCalledWith(5);
    });

    it(`returns the correct value without a callback`, () => {
      component.field = {
        type: 'slider',
        key: 'anyKey',
      } as any;

      expect(component.getLabel(5)).toBe('5');
    });
  });
});
