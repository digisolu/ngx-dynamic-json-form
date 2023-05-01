import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TextareaComponent } from './textarea.component';
import { BehaviorSubject } from 'rxjs';
import { Stub } from '../../utils';

describe('TextareaComponent', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TextareaComponent],
    });
    fixture = TestBed.createComponent(TextareaComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`key has default value`, () => {
    expect(TextareaComponent.key).toEqual(`textarea`);
  });

  it(`autosize$ has default value`, (done) => {
    expect(component['autosize$'] instanceof BehaviorSubject).toEqual(true);

    component.autosize$.subscribe((value) => {
      expect(value).toBeFalse();
      done();
    });
  });

  describe('ngAfterViewInit', () => {
    it(`makes expected calls if no parameter and global false`, () => {
      const spy = spyOn(component.autosize$, 'next');

      component.ngAfterViewInit();

      expect(spy).not.toHaveBeenCalled();
    });

    it(`makes expected calls if parameter and global false`, () => {
      component.field = {
        type: 'textarea',
        key: 'anyKey',
        autosize: true,
      } as any;
      const spy = spyOn(component.autosize$, 'next');

      component.ngAfterViewInit();

      expect(spy).toHaveBeenCalled();
    });

    it(`makes expected calls if no parameter and global true`, () => {
      component.dynamicJsonFormService = Stub.getNgxDynamicJsonFormService({
        layoutOptions: {
          default: {},
          textarea: { autosize: true },
        },
      });
      component.field = {
        type: 'textarea',
        key: 'anyKey',
      } as any;
      const spy = spyOn(component.autosize$, 'next');

      component.ngAfterViewInit();

      expect(spy).toHaveBeenCalled();
    });
  });
});
