import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdfMatFormFieldComponent } from './ndf-mat-form-field.component';

describe('NdfMatFormFieldComponent', () => {
  let component: NdfMatFormFieldComponent;
  let fixture: ComponentFixture<NdfMatFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NdfMatFormFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NdfMatFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
