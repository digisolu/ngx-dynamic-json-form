import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxDynamicJsonFormMaterialComponent } from './ngx-dynamic-json-form-material.component';

describe('NgxDynamicJsonFormMaterialComponent', () => {
  let component: NgxDynamicJsonFormMaterialComponent;
  let fixture: ComponentFixture<NgxDynamicJsonFormMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [NgxDynamicJsonFormMaterialComponent],
    });
    fixture = TestBed.createComponent(NgxDynamicJsonFormMaterialComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
