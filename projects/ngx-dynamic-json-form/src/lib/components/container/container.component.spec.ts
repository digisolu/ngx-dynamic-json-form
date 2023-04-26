import { Stub } from '../../utils';
import { ContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: ContainerComponent;

  beforeEach(() => {
    component = new ContainerComponent(
      Stub.getNgxDynamicJsonFormService({
        components: { html: true as any },
        layoutOptions: { ...Stub.LAYOUT_OPTIONS },
        rangeEndings: { ...Stub.RANGE_ENDINGS },
        messages: { ...Stub.MESSAGES },
        ignoreFormControlCheck: [...Stub.IGNORE_FORM_CONTROLS],
        rangeFormControls: [...Stub.RANGE_CONTROLS],
      })
    );
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`key has default value`, () => {
    expect(ContainerComponent.key).toEqual(`container`);
  });

  it(`requiredParams has default value`, () => {
    expect(component['requiredParams']).toEqual([`type`]);
  });

  describe('isFormField', () => {
    it(`returns the correct value, if type exists`, () => {
      expect(component.isFormField('html')).toBeTrue();
    });

    it(`returns the correct value, if type not exists`, () => {
      expect(component.isFormField('html5')).toBeFalse();
    });
  });
});
