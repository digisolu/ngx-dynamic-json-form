import { TestBed } from '@angular/core/testing';

import { Stub } from '../utils';
import { NgxDynamicJsonFormService } from './ngx-dynamic-json-form.service';

describe('NgxDynamicJsonFormService', () => {
  let service: NgxDynamicJsonFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxDynamicJsonFormService],
    });
    service = new NgxDynamicJsonFormService({
      components: { ...(Stub.COMPONENTS as any) },
      layoutOptions: { ...Stub.LAYOUT_OPTIONS },
      rangeEndings: { ...Stub.RANGE_ENDINGS },
      messages: { ...Stub.MESSAGES },
      ignoreFormControlCheck: [...Stub.IGNORE_FORM_CONTROLS],
      rangeFormControls: [...Stub.RANGE_CONTROLS],
    });
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('returns correct values for ignoreFormControlCheck', () => {
    expect(service.ignoreFormControlCheck).toEqual(Stub.IGNORE_FORM_CONTROLS);
  });

  it('returns correct values for rangeFormControls', () => {
    expect(service.rangeFormControls).toEqual(Stub.RANGE_CONTROLS);
  });

  it('returns correct values for components', () => {
    expect(service.components).toEqual(Stub.COMPONENTS);
  });

  it('returns correct values for messages', () => {
    expect(service.messages).toEqual(Stub.MESSAGES);
  });

  it('returns correct values for rangeEndings', () => {
    expect(service.rangeEndings).toEqual([Stub.RANGE_ENDINGS.start, Stub.RANGE_ENDINGS.end]);
  });

  describe('getLayoutOption', () => {
    it('returns correct values for non existing key', () => {
      expect(service.getLayoutOption('a')).toEqual(null);
    });

    it('returns correct values for existing key', () => {
      expect(service.getLayoutOption('default')?.className).toEqual('foo');
    });
  });

  describe('overrideLayoutOptions', () => {
    it('merges to options correct together', () => {
      service.overrideLayoutOptions({ default: { className2: 'bar' }, foo: 'bar' });

      expect(service.getLayoutOption('default')?.className).toEqual('foo');
      expect(service.getLayoutOption('default')?.className2).toEqual('bar');
      expect(service.getLayoutOption('foo')).toEqual('bar');
    });
  });
});
