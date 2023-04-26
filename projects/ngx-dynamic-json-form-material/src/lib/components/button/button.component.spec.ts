import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ButtonComponent],
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`key has default value`, () => {
    expect(ButtonComponent.key).toEqual(`button`);
  });

  describe(`onClick`, () => {
    it(`calls onClick if existing in field`, () => {
      component.field = {
        type: 'button',
        variant: 'mat-button',
        onClick(event: any) {},
      };

      spyOn(component.field as any, 'onClick');

      component.onClick({ target: 'test' } as any);

      expect(component.field?.onClick).toHaveBeenCalledWith({ target: 'test' } as any);
    });
  });
});
