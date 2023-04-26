import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HtmlComponent } from './html.component';

describe('HtmlComponent', () => {
  let component: HtmlComponent;
  let fixture: ComponentFixture<HtmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HtmlComponent],
    });
    fixture = TestBed.createComponent(HtmlComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`key has default value`, () => {
    expect(HtmlComponent.key).toEqual(`html`);
  });

  it(`isFormRequired has default value`, () => {
    expect(component['isFormRequired']).toEqual(false);
  });

  it(`requiredParams has default value`, () => {
    expect(component['requiredParams']).toEqual([`type`, `content`]);
  });
});
