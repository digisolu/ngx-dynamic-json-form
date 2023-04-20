import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GroupOption } from '@ngx-dynamic-json-form/material';
import { FormField, FormFieldType } from '@ngx-dynamic-json-form/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public links: Array<{ url: string; isActive?: boolean; name: string }> = [
    {
      url: '/components',
      name: 'Components',
    },
    {
      url: '/guides',
      name: 'Guides',
    },
    {
      url: '/examples',
      name: 'Examples',
    },
  ];

  public form: FormGroup = new FormGroup({});

  public exampleOptions: GroupOption[] = [
    {
      value: '1',
      label: 'Option 1',
    },
    {
      value: '2',
      label: 'Option 2',
    },
    {
      value: '2.1',
      label: 'Option 3',
    },
    {
      value: '2.2',
      label: 'Option 4',
    },
    {
      value: '2.3',
      label: 'Option 5',
    },
    {
      value: '2.4',
      label: 'Option 6',
    },
    {
      value: '2.5',
      label: 'Option 7',
    },
    {
      value: '2.6',
      label: 'Option 8',
    },
    {
      value: '2.7',
      label: 'Option 9',
    },
    {
      value: '3',
      disabled: true,
      label: 'Option Group Example',
      group: [
        {
          value: '4',
          label: 'Child Option 1',
        },
        {
          value: '5',
          label: 'Child Option 2',
        },
        {
          value: '6',
          disabled: true,
          label: 'Child Option 3',
        },
        {
          value: '7',
          label: 'Child Option 4',
        },
        {
          value: '8',
          label: 'Child Option 5',
        },
        {
          value: '9',
          label: 'Child Option 6',
        },
      ],
    },
    {
      value: '10',
      label: 'Option 10',
    },
    {
      value: '11',
      label: 'Option 11',
    },
    {
      value: '12',
      label: 'Option 12',
    },
    {
      value: '13',
      label: 'Option 13',
    },
  ];

  public fields: FormField[] = [
    {
      type: 'html',
      content: '<h3>Datepicker</h3>',
    },
    {
      key: 'anyDate',
      type: 'datepicker',
      label: 'Choose a date',
    },
    {
      type: 'html',
      content: '<h3>Default Inputs</h3>',
    },
    {
      type: 'container',
      rowWrapperClassName: 'ndf-fx-row ndf-fx-space ndf-fx-gap-16',
      fields: [
        {
          key: 'firstname',
          type: 'input',
          label: 'Firstname',
          containerClassName: 'ndf-full-width',
        },
        {
          key: 'lastname',
          type: 'input',
          label: 'Lastname',
          required: true,
          appearance: 'outline',
          containerClassName: 'ndf-full-width',
        },
        {
          key: 'age',
          type: 'input',
          inputType: 'number',
          label: 'Age',
          containerClassName: 'ndf-full-width',
        },
      ],
    },
    {
      type: 'html',
      content: '<h3>Textarea</h3>',
    },
    {
      key: 'comment',
      type: 'textarea',
      label: 'Comment',
      containerClassName: 'ndf-full-width',
      required: true,
      hintCount: true,
      maxLength: 1000,
      autosize: true,
      rows: 3,
      hintText: 'Dies ist ein Test',
    },
    {
      type: 'html',
      content: '<h3>Radio Buttons</h3><h4>normal</h4>',
    },
    {
      key: 'colorCode',
      type: 'radio-button',
      required: true,
      label: 'Choose color',
      hideBorder: true,
      hideLabel: true,
      subscriptSizing: 'dynamic',
      name: 'colorGroup',
      options: [
        {
          value: '1',
          disabled: false,
          label: 'Red',
        },
        {
          value: '2',
          disabled: false,
          label: 'White',
        },
        {
          value: '3',
          disabled: true,
          label: 'Green',
        },
        {
          value: '4',
          disabled: false,
          label: 'Blue',
        },
      ],
    },
    {
      type: 'html',
      content: '<h4>outline</h4>',
    },
    {
      key: 'colorCodeOutline',
      type: 'radio-button',
      required: true,
      label: 'Choose color',
      name: 'colorGroup2',
      appearance: 'outline',
      floatLabel: 'always',
      options: [
        {
          value: '1',
          disabled: false,
          label: 'Red',
        },
        {
          value: '2',
          disabled: false,
          label: 'White',
        },
        {
          value: '3',
          disabled: true,
          label: 'Green',
        },
        {
          value: '4',
          disabled: false,
          label: 'Blue',
        },
      ],
    },
    {
      type: 'html',
      content: '<h4>Slide Toggle</h4><h5>normal</h5>',
    },
    {
      key: 'active',
      type: 'slide-toggle',
      label: 'Active',
      containerClassName: 'ndf-full-width',
      required: true,
      hintText: 'Dies ist ein Test',
      hintCount: true,
      maxLength: 5,
    },
    {
      type: 'html',
      content: '<h4>Slide Toggle</h4><h5>outline</h5>',
    },
    {
      key: 'activeOutline',
      type: 'slide-toggle',
      label: 'Active',
      containerClassName: 'ndf-full-width',
      required: true,
      hintText: 'Dies ist ein Test',
      hintCount: true,
      maxLength: 5,
      appearance: 'outline',
      floatLabel: 'always',
    },
    {
      type: 'html',
      content: '<h4>Checkboxes</h4>',
    },
    {
      type: 'container',
      rowWrapperClassName: 'ndf-fx-column ndf-fx-space',
      fields: [
        {
          type: 'html',
          content: '<h5>normal</h5>',
        },
        {
          key: 'termsAccepted',
          type: 'checkbox',
          vertical: true,
          label: 'Agree to Terms and Conditions',
          hideBorder: true,
          hideLabel: true,
          required: true,
          subscriptSizing: 'dynamic',
        },
        {
          key: 'privacyPolicyAccepted',
          type: 'checkbox',
          vertical: true,
          label: 'Agree to Privacy Policy',
          hideBorder: true,
          hideLabel: true,
          required: true,
          subscriptSizing: 'dynamic',
        },
      ],
    },
    {
      type: 'container',
      rowWrapperClassName: 'ndf-fx-column ndf-fx-space ndf-fx-gap-16',
      fields: [
        {
          type: 'html',
          content: '<h5>outline</h5>',
        },
        {
          key: 'termsAcceptedOutline',
          type: 'checkbox',
          vertical: true,
          label: 'Agree to Terms and Conditions',
          hideLabel: true,
          required: true,
          subscriptSizing: 'dynamic',
          appearance: 'outline',
          floatLabel: 'always',
        },
        {
          key: 'privacyPolicyAcceptedOutline',
          type: 'checkbox',
          vertical: true,
          label: 'Agree to Privacy Policy',
          hideLabel: true,
          required: true,
          subscriptSizing: 'dynamic',
          appearance: 'outline',
          floatLabel: 'always',
        },
      ],
    },
    {
      type: 'html',
      content: '<h5>multi normal</h5>',
    },
    {
      key: 'clothes2',
      type: 'multi-checkbox',
      required: true,
      label: 'Clothes',
      options: [
        {
          value: '1',
          label: 'Boots',
        },
        {
          value: '2',
          label: 'Clogs',
        },
        {
          value: '3',
          disabled: true,
          label: 'Loafers',
        },
        {
          value: '4',
          label: 'Moccasins',
        },
        {
          value: '5',
          label: 'Sneakers',
        },
      ],
    },
    {
      type: 'html',
      content: '<h5>multi outline</h5>',
    },
    {
      key: 'clothes',
      type: 'multi-checkbox',
      required: true,
      label: 'Clothes',
      hideBorder: true,
      hideLabel: true,
      subscriptSizing: 'dynamic',
      showSelectAll: true,
      appearance: 'outline',
      floatLabel: 'always',
      options: [
        {
          value: '1',
          label: 'Boots',
        },
        {
          value: '2',
          label: 'Clogs',
        },
        {
          value: '3',
          disabled: true,
          label: 'Loafers',
        },
        {
          value: '4',
          label: 'Moccasins',
        },
        {
          value: '5',
          label: 'Sneakers',
        },
      ],
    },
    {
      type: 'html',
      content: '<h5>Slider</h5>',
    },
    {
      key: 'percentage',
      type: 'slider',
      label: 'Percentage',
      discrete: true,
      max: 100,
      min: 0,
      showTickMarks: true,
      step: 1,
      required: true,
      displayWith: (value: number) => `${value}%`,
    },
    {
      key: 'range',
      type: 'slider-range',
      label: 'Percentage',
      discrete: true,
      max: 100,
      min: 0,
      showTickMarks: true,
      step: 1,
      required: true,
      displayWith: (value: number) => `${value}%`,
      hideBorder: true,
    },
    {
      type: 'html',
      content: '<h3>Multi-Row Example</h3>',
    },
    {
      type: 'multi-row',
      key: 'addresses',
      rowWrapperClassName: 'ndf-fx-row ndf-fx-baseline ndf-fx-gap-16',
      addButtonRow: true,
      deleteButtonRow: true,
      fields: [
        {
          key: 'street',
          type: 'input',
          label: 'Street',
          containerClassName: 'street',
        },
        {
          key: 'streetNo',
          type: 'input',
          label: 'Number',
          containerClassName: 'streetnumber',
        },
      ],
    },
    {
      type: 'html',
      content: '<h3>Custom Form Field</h3>',
    },
    {
      // Custom Form Field
      key: 'customFormField',
      type: 'my-custom-form-field' as FormFieldType,
    },

    {
      type: 'html',
      content: '<div class="custom-html"><h3>Error Message for Unsupported Type</h3></div>',
    },

    {
      // Show an error
      key: 'anyError',
      type: 'unknownType' as FormFieldType,
    },
  ];

  public initialValues: {} = {
    autocomplete: '4',
    multiAutocomplete: ['4'],
    firstname: 'Max',
    lastname: '',
    age: 1,
    active: true,
    rangeStart: 0,
    rangeEnd: 100,
    addresses: [
      {
        street: 'Main Street',
        streetNo: '9',
      },
      {
        street: 'Another Street',
        streetNo: '11',
      },
    ],
    colorCode: '2',
  };

  public setForm(form: FormGroup): void {
    this.form = form;
  }
}
