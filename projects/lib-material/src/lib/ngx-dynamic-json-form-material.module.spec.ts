import { TestBed } from '@angular/core/testing';

import { NgxDynamicJsonFormMaterialModule } from './ngx-dynamic-json-form-material.module';

describe('NgxDynamicJsonFormMaterialModule', () => {
  let module: NgxDynamicJsonFormMaterialModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxDynamicJsonFormMaterialModule.forRoot()],
    });
    module = TestBed.inject(NgxDynamicJsonFormMaterialModule);
  });

  it('can load instance', () => {
    expect(module).toBeTruthy();
  });

  describe('constructor', () => {
    it('throws no error, if not same module', () => {
      expect(() => new NgxDynamicJsonFormMaterialModule()).not.toThrowError();
    });
  });
});
