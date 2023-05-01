import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { AbstractFormFieldComponent } from 'ngx-dynamic-json-form-core';
import { SlideToggleComponent } from './slide-toggle.component';

describe('SlideToggleComponent', () => {
  let component: SlideToggleComponent;
  let fixture: ComponentFixture<SlideToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SlideToggleComponent],
    });
    fixture = TestBed.createComponent(SlideToggleComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`key has default value`, () => {
    expect(SlideToggleComponent.key).toEqual(`slide-toggle`);
  });

  it(`requiredParams has default value`, () => {
    expect(component['requiredParams']).toEqual([`key`, `type`, `label`]);
  });

  describe('onChange', () => {
    it('makes expected calls', () => {
      const matSlideToggleChangeStub: MatSlideToggleChange = <any>{};
      spyOn(AbstractFormFieldComponent.prototype, 'onChange');
      component.onChange(matSlideToggleChangeStub);
      expect(AbstractFormFieldComponent.prototype.onChange).toHaveBeenCalled();
    });
  });
});
