import { TestBed } from '@angular/core/testing';
import { NgxDynamicJsonFormModule } from './ngx-dynamic-json-form.module';

describe('NgxDynamicJsonFormModule', () => {
  let module: NgxDynamicJsonFormModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [NgxDynamicJsonFormModule] });
    module = TestBed.inject(NgxDynamicJsonFormModule);
  });

  it('can load instance', () => {
    expect(module).toBeTruthy();
  });
});
