import { FormGroup } from '@angular/forms';

import { Stub } from '../../utils';
import { AbstractFormFieldComponent } from '../base/base.abstract';
import { FormFieldComponent } from './form-field.component';

describe('FormFieldComponent', () => {
  let component: FormFieldComponent;

  beforeEach(() => {
    component = new FormFieldComponent(
      Stub.getNgxDynamicJsonFormService({
        components: { html: true as any },
        layoutOptions: { ...Stub.LAYOUT_OPTIONS },
        rangeEndings: { ...Stub.RANGE_ENDINGS },
        messages: { ...Stub.MESSAGES },
        ignoreFormControlCheck: [...Stub.IGNORE_FORM_CONTROLS],
        rangeFormControls: [...Stub.RANGE_CONTROLS],
      })
    );
    component['_componentRef'] = {
      instance: {
        form: new FormGroup({}),
        field: {} as any,
        className: '',
        ngOnInit: () => ({}),
      } as any,
      destroy: () => ({}),
    } as any;
    component['_customComponent'] = {
      viewContainerRef: {
        clear: () => ({}),
        createComponent: () => {
          return component['_componentRef'];
        },
      },
    } as any;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component as any, '_load');
      spyOn(component['_componentRef']?.instance as any, 'ngOnInit');

      component.ngOnInit();

      expect(component['_load']).toHaveBeenCalled();
      expect(component['_componentRef']?.instance?.ngOnInit).toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', () => {
    it('makes expected calls', () => {
      spyOn(AbstractFormFieldComponent.prototype, 'ngOnDestroy');
      component.ngOnDestroy();
      expect(AbstractFormFieldComponent.prototype.ngOnDestroy).toHaveBeenCalled();
    });
  });

  describe('_load', () => {
    it('makes expected calls', () => {
      component.field = { content: '', type: 'html', formFieldClassName: 'test-class' } as any;
      spyOn(component['_customComponent'].viewContainerRef, 'clear');
      spyOn(component['_customComponent'].viewContainerRef, 'createComponent').and.returnValue({
        instance: {
          form: new FormGroup({}),
          field: {} as any,
          className: 'ndf-html',
          ngOnInit: () => ({}),
        } as any,
        destroy: () => ({}),
      } as any);

      component['_load']();

      expect(component['_customComponent'].viewContainerRef.clear).toHaveBeenCalled();
      expect(component['_customComponent'].viewContainerRef.createComponent).toHaveBeenCalled();
      expect(component['_componentRef']?.instance?.className).toBe('ndf-html test-class');
      expect(component['_componentRef']?.instance?.field).toEqual(component.field);
    });
  });
});
