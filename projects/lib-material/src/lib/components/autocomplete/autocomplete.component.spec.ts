import { fakeAsync, tick } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractFormFieldComponent } from 'ngx-dynamic-json-form-core';
import { of } from 'rxjs';

import { MatAutocomplete } from '../../interfaces';
import { MatUtils, Stub } from '../../utils';
import { AutocompleteComponent } from './autocomplete.component';

describe('AutocompleteComponent', () => {
  let component: AutocompleteComponent<MatAutocomplete>;

  beforeEach(() => {
    component = new AutocompleteComponent(Stub.getNgxDynamicJsonFormService());
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`key has default value`, () => {
    expect(AutocompleteComponent.key).toEqual(`autocomplete`);
  });

  it(`requiredParams has default value`, () => {
    expect(component['requiredParams']).toEqual([`key`, `type`, `options`]);
  });

  describe(`getLabel `, () => {
    it(`returns correct values`, () => {
      component.field = {
        type: 'autocomplete',
        key: 'anyKey',
        options: [
          {
            label: 'anyLabel4',
            value: '4',
          },
          {
            label: 'anyLabel5',
            value: '5',
          },
        ],
      };

      expect(component.getLabel('4')).toBe('anyLabel4');
      expect(component.getLabel('5')).toBe('anyLabel5');
      expect(component.getLabel('6')).toBe('6');
    });
  });

  describe(`ngOnInit `, () => {
    it(`makes expected calls, with false as given parameter`, () => {
      spyOn(AbstractFormFieldComponent.prototype, 'ngOnInit');
      spyOn(component, 'getFormControl');

      component.ngOnInit(false);

      expect(AbstractFormFieldComponent.prototype.ngOnInit).toHaveBeenCalled();
      expect(component.getFormControl).not.toHaveBeenCalled();
    });

    it(`makes expected calls, with no given parameter (true)`, fakeAsync(() => {
      component.field = {
        type: 'autocomplete',
        key: 'anyKey',
        options: [],
      };

      spyOn(AbstractFormFieldComponent.prototype, 'ngOnInit');
      spyOn(component, 'getFormControl').and.callThrough();
      spyOn(component as any, 'onFilter$').and.callThrough();
      component.form = new FormGroup({ anyKey: new FormControl('14') });

      component.ngOnInit();
      component.visibleOptions$.subscribe();

      component.getFormControl()?.patchValue('665');
      tick(300);

      expect(AbstractFormFieldComponent.prototype.ngOnInit).toHaveBeenCalled();
      expect(component.getFormControl).toHaveBeenCalled();
      expect(component['onFilter$']).toHaveBeenCalledWith('665');
    }));

    it(`makes expected calls, with true as given parameter and no value`, fakeAsync(() => {
      component.field = {
        type: 'autocomplete',
        key: 'anyKey',
        options: [],
      };

      spyOn(AbstractFormFieldComponent.prototype, 'ngOnInit');
      spyOn(component, 'getFormControl').and.callThrough();
      spyOn(component as any, 'onFilter$').and.callThrough();
      component.form = new FormGroup({ anyKey: new FormControl(null) });

      component.ngOnInit(true);
      component.visibleOptions$.subscribe();

      // Set null
      component.getFormControl()?.patchValue(null);
      tick(300);

      // Set 665
      component.getFormControl()?.patchValue('665');
      tick(300);

      expect(AbstractFormFieldComponent.prototype.ngOnInit).toHaveBeenCalled();
      expect(component.getFormControl).toHaveBeenCalled();
      expect(component['onFilter$']).toHaveBeenCalledWith('665');
    }));
  });

  describe(`onFilter$`, () => {
    it(`returns correct values with no custom onFilter callback`, (done) => {
      spyOn(MatUtils, 'filterEntries$').and.callThrough();
      component.field = {
        type: 'autocomplete',
        key: 'anyKey',
        options: [
          {
            label: 'anyLabel4',
            value: '4',
          },
          {
            label: 'anyLabel5',
            value: '5',
          },
        ],
      };

      component['onFilter$']('5').subscribe(() => {
        expect(MatUtils.filterEntries$).toHaveBeenCalledWith('anyLabel5', [
          {
            label: 'anyLabel4',
            value: '4',
          },
          {
            label: 'anyLabel5',
            value: '5',
          },
        ]);
        done();
      });
    });

    it(`returns correct values with a custom onFilter callback`, (done) => {
      component.field = {
        type: 'autocomplete',
        key: 'anyKey',
        options: [
          {
            label: 'anyLabel4',
            value: '4',
          },
          {
            label: 'anyLabel5',
            value: '5',
          },
        ],
        onFilter$() {
          return of([
            {
              label: 'anyLabel4',
              value: '4',
            },
          ]);
        },
      };

      component['onFilter$']('4').subscribe((values) => {
        expect(values).toEqual([
          {
            label: 'anyLabel4',
            value: '4',
          },
        ]);
        done();
      });
    });

    it(`returns correct values with no custom onFilter callback but no options`, (done) => {
      spyOn(MatUtils, 'filterEntries$').and.callThrough();
      component.field = {
        type: 'autocomplete',
        key: 'anyKey',
      };

      component['onFilter$']('4').subscribe((values) => {
        expect(values).toEqual([]);
        expect(MatUtils.filterEntries$).toHaveBeenCalledWith('4', []);
        done();
      });
    });
  });
});
