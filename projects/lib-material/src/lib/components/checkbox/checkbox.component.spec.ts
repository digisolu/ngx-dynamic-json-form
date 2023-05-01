import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CheckboxComponent],
    });
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`key has default value`, () => {
    expect(CheckboxComponent.key).toEqual(`checkbox`);
  });

  it(`requiredParams has default value`, () => {
    expect(component['requiredParams']).toEqual([`key`, `type`, `label`]);
  });
});
