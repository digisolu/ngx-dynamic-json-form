import { ENTER } from '@angular/cdk/keycodes';
import { fakeAsync, tick } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';

import { Stub } from '../../utils';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { MultiAutocompleteComponent } from './multi-autocomplete.component';

describe('MultiAutocompleteComponent', () => {
  let component: MultiAutocompleteComponent;

  beforeEach(() => {
    component = new MultiAutocompleteComponent(Stub.getNgxDynamicJsonFormService());
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`key has default value`, () => {
    expect(MultiAutocompleteComponent.key).toEqual(`multi-autocomplete`);
  });

  it(`separatorKeys has default value`, () => {
    expect(component.separatorKeys).toEqual([ENTER]);
  });

  describe('get _values', () => {
    it('returns correct value, if no FormControl', () => {
      expect(component['_values']).toEqual([]);
    });

    it('returns correct value, if FormControl exists', () => {
      component.form = new FormGroup({ anyKey: new FormControl(['123']) });
      component.field = { key: 'anyKey', type: 'multi-autocomplete' };
      expect(component['_values']).toEqual(['123']);
    });
  });

  describe('ngOnInit', () => {
    it('makes expected calls without search', () => {
      spyOn(AutocompleteComponent.prototype, 'ngOnInit');
      component.ngOnInit();
      expect(AutocompleteComponent.prototype.ngOnInit).toHaveBeenCalled();
    });

    it('makes expected calls disabling', () => {
      component.searchControl = new FormControl('');
      spyOn(component.searchControl, 'disable');

      component.field = {
        type: 'multi-autocomplete',
        key: 'anyKey',
        options: [],
        disabled: true,
      };
      component.form = new FormGroup({ anyKey: new FormControl(['123']) });

      component.ngOnInit();

      expect(component.searchControl.disable).toHaveBeenCalled();
    });

    it('makes expected calls enabling', () => {
      component.searchControl = new FormControl('');
      spyOn(component.searchControl, 'enable');

      component.field = {
        type: 'multi-autocomplete',
        key: 'anyKey',
        options: [],
        disabled: false,
      };
      component.form = new FormGroup({ anyKey: new FormControl(['123']) });

      component.ngOnInit();

      expect(component.searchControl.enable).toHaveBeenCalled();
    });

    it(`makes expected calls, with no given parameter (true)`, fakeAsync(() => {
      component.field = {
        type: 'multi-autocomplete',
        key: 'anyKey',
        options: [],
      };
      component.searchControl = new FormControl('');

      spyOn(component as any, 'onFilter$').and.callThrough();
      component.form = new FormGroup({ anyKey: new FormControl(['123']) });

      component.ngOnInit();
      component.visibleOptions$.subscribe();

      component.searchControl.patchValue('123');
      tick(300);

      expect(component['onFilter$']).toHaveBeenCalledWith('123');
    }));

    it(`makes expected calls, with true as given parameter and no value`, fakeAsync(() => {
      component.field = {
        type: 'multi-autocomplete',
        key: 'anyKey',
        options: [],
      };
      component.searchControl = new FormControl('');

      spyOn(component as any, 'onFilter$').and.callThrough();
      component.form = new FormGroup({ anyKey: new FormControl(['123']) });

      component.ngOnInit();
      component.visibleOptions$.subscribe();

      // Set null
      component.searchControl?.patchValue(null);
      tick(300);

      // Set 665
      component.searchControl?.patchValue('123');
      tick(300);

      expect(component['onFilter$']).toHaveBeenCalledWith('123');
    }));
  });

  describe('remove', () => {
    it('makes expected calls', () => {
      component.field = {
        type: 'multi-autocomplete',
        key: 'anyKey',
        options: [],
      };
      component.form = new FormGroup({ anyKey: new FormControl(['1', '2']) });
      spyOn(component as any, '_updatePanelPosition');

      component.remove('1');

      expect(component['_updatePanelPosition']).toHaveBeenCalled();

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      expect(component.getFormControl()!.value).toEqual(['2']);
    });
  });

  describe('selected', () => {
    it('makes expected calls: remove existing entry', fakeAsync(() => {
      component['_searchString'] = 'foo';
      component.searchControl = new FormControl('');

      component['_input'] = {
        nativeElement: {
          value: '',
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          blur() {},
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          focus() {},
        },
      } as any;

      component.field = {
        type: 'multi-autocomplete',
        key: 'anyKey',
        options: [],
      };
      component.form = new FormGroup({ anyKey: new FormControl(['1', '2']) });

      const spy1 = spyOn(component['_input'].nativeElement, 'blur');
      const spy2 = spyOn(component['_input'].nativeElement, 'focus');
      const spy3 = spyOn(component, 'remove').and.callThrough();
      const spy4 = spyOn(component as any, '_add');
      const spy5 = spyOn(component.searchControl, 'setValue');
      spyOn(component as any, '_updatePanelPosition');

      component.selected('1');

      tick(100);

      expect(spy1).toHaveBeenCalled();
      expect(spy2).toHaveBeenCalled();

      expect(spy3).toHaveBeenCalledWith('1');
      expect(component['_values']).toEqual(['2']);

      expect(spy4).not.toHaveBeenCalled();

      expect(spy5).toHaveBeenCalledWith('foo');
      expect(component['_input'].nativeElement.value).toBe('foo');
    }));

    it('makes expected calls: add entry', fakeAsync(() => {
      component['_searchString'] = 'foo';
      component.searchControl = new FormControl('');

      component['_input'] = {
        nativeElement: {
          value: '',
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          blur() {},
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          focus() {},
        },
      } as any;

      component.field = {
        type: 'multi-autocomplete',
        key: 'anyKey',
        options: [],
      };
      component.form = new FormGroup({ anyKey: new FormControl(['2']) });

      const spy1 = spyOn(component['_input'].nativeElement, 'blur');
      const spy2 = spyOn(component['_input'].nativeElement, 'focus');
      const spy3 = spyOn(component, 'remove').and.callThrough();
      const spy4 = spyOn(component as any, '_add').and.callThrough();
      const spy5 = spyOn(component.searchControl, 'setValue');
      spyOn(component as any, '_updatePanelPosition');

      component.selected('1');

      tick(100);

      expect(spy1).toHaveBeenCalled();
      expect(spy2).toHaveBeenCalled();

      expect(spy3).not.toHaveBeenCalled();

      expect(spy4).toHaveBeenCalledWith('1');
      expect(component['_values']).toEqual(['2', '1']);

      expect(spy5).toHaveBeenCalledWith('foo');
      expect(component['_input'].nativeElement.value).toBe('foo');
    }));
  });

  describe('isChecked', () => {
    ['1', '2'].forEach((test) => {
      it(`returns the correct value: true for value "${test}"`, () => {
        component.field = {
          type: 'multi-autocomplete',
          key: 'anyKey',
          options: [],
        };
        component.form = new FormGroup({ anyKey: new FormControl(['1', '2']) });

        expect(component.isChecked(test)).toBeTrue();
      });
    });

    ['0', '3', '4', null, undefined].forEach((test) => {
      it(`returns the correct value: false for value "${test}"`, () => {
        component.field = {
          type: 'multi-autocomplete',
          key: 'anyKey',
          options: [],
        };
        component.form = new FormGroup({ anyKey: new FormControl(['1', '2']) });

        expect(component.isChecked(test)).toBeFalse();
      });
    });
  });

  describe('_updatePanelPosition', () => {
    it('makes expected calls', fakeAsync(() => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      component['_matTrigger'] = { updatePosition() {} } as any;

      const spy1 = spyOn(component['_matTrigger'], 'updatePosition');

      component['_updatePanelPosition']();

      tick(100);

      expect(spy1).toHaveBeenCalled();
    }));
  });

  describe('_add', () => {
    it('makes expected calls', () => {
      component.field = {
        type: 'multi-autocomplete',
        key: 'anyKey',
        options: [],
      };
      const formControl = new FormControl(['1']);
      component.form = new FormGroup({ anyKey: formControl });

      const spy1 = spyOn(formControl, 'patchValue').and.callThrough();
      const spy2 = spyOn(component as any, '_updatePanelPosition');

      component['_add']('2');

      expect(spy1).toHaveBeenCalledWith(['1', '2']);
      expect(spy2).toHaveBeenCalled();

      expect(formControl.value).toEqual(['1', '2']);
    });
  });
});
