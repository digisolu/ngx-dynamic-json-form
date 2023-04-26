import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RadioButtonComponent } from './radio-button.component';

describe('RadioButtonComponent', () => {
  let component: RadioButtonComponent;
  let fixture: ComponentFixture<RadioButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RadioButtonComponent],
    });
    fixture = TestBed.createComponent(RadioButtonComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`key has default value`, () => {
    expect(RadioButtonComponent.key).toEqual(`radio-button`);
  });

  it(`requiredParams has default value`, () => {
    expect(component['requiredParams']).toEqual([`key`, `type`, `options`]);
  });
});
