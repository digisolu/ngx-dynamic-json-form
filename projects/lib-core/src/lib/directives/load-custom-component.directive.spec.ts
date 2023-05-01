import { Component, DebugElement, TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoadCustomComponentDirective } from './load-custom-component.directive';

@Component({
  template: `
    <div>Without Directive</div>
    <ng-template ndfLoadCustomComponent>Default</ng-template>
  `,
})
class TestComponent {}

describe('LoadCustomComponentDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateRef],
      declarations: [LoadCustomComponentDirective, TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAll(
      By.directive(LoadCustomComponentDirective)
    );
    bareElement = fixture.debugElement.query(By.css(':not([ndfLoadCustomComponent])'));
  });

  it('should have bare element', () => {
    expect(bareElement).toBeTruthy();
  });
});
