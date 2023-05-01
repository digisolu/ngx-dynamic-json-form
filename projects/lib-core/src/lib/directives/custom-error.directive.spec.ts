import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Stub } from '../utils';
import { CustomErrorDirective } from './custom-error.directive';

@Component({
  template: `
    <div>Without Directive</div>
    <div ndfCustomError>Default</div>
  `,
})
class TestComponent {}

describe('CustomErrorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;
  let directive: CustomErrorDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomErrorDirective, TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAll(By.directive(CustomErrorDirective));
    bareElement = fixture.debugElement.query(By.css(':not([ndfCustomError])'));

    directive = new CustomErrorDirective(
      { nativeElement: { innerHTML: '' } } as any,
      Stub.getNgxDynamicJsonFormService({
        messages: { testError: 'foo' },
      })
    );
  });

  it('should have bare element', () => {
    expect(bareElement).toBeTruthy();
  });

  it('should have 1 element(s) with directive', () => {
    expect(elementsWithDirective.length).toBe(1);
  });

  describe('ngOnInit', () => {
    it('find message in field', () => {
      directive.errorKey = 'testError';
      directive.field = {
        messages: {
          testError: 'testErrorMessage',
        },
      } as any;
      directive.replace = {};

      directive.ngOnInit();

      expect(directive['_elementRef'].nativeElement.innerHTML).toBe('testErrorMessage');
    });

    it('find message in global', () => {
      directive.errorKey = 'testError';
      directive.field = { messages: {} } as any;
      directive.replace = {};

      directive.ngOnInit();

      expect(directive['_elementRef'].nativeElement.innerHTML).toBe('foo');
    });

    it('replace placeholders in messages', () => {
      directive.errorKey = 'testError';
      directive.field = {
        messages: {
          testError: 'Param: "{{KEY_OR_TYPE}}" found!',
        },
      } as any;
      directive.replace = {
        KEY_OR_TYPE: 'Foo',
      };

      directive.ngOnInit();

      expect(directive['_elementRef'].nativeElement.innerHTML).toBe('Param: "Foo" found!');
    });
  });
});
