import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxDynamicJsonFormService } from '@ngx-dynamic-json-form/core';
import { FormField } from '@ngx-dynamic-json-form/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [NgxDynamicJsonFormService],
})
export class RegistrationComponent implements OnInit {
  public form: FormGroup = new FormGroup({});

  public fields: FormField[] = [
    {
      type: 'input',
      key: 'fullName',
      label: 'Full Name',
      required: true,
      containerClassName: 'col-4',
    },
    {
      type: 'input',
      inputType: 'email',
      key: 'email',
      label: 'Email Address',
      required: true,
      containerClassName: 'col-4',
    },
    {
      type: 'input',
      inputType: 'tel',
      key: 'phone',
      label: 'Phone Number',
      containerClassName: 'col-4',
    },
    {
      type: 'input',
      key: 'country',
      label: 'Country',
      options: [
        { label: 'Country 1', value: '1' },
        { label: 'Country 2', value: '2' },
        { label: 'Country 3', value: '3' },
      ],
      showSearch: true,
      showEmptyOption: true,
      containerClassName: 'col-4',
    },
    {
      type: 'select',
      key: 'language',
      label: 'Languages',
      options: [
        { label: 'Language 1', value: '1' },
        { label: 'Language 2', value: '2' },
        { label: 'Language 3', value: '3' },
      ],
      showSearch: true,
      multiple: true,
      containerClassName: 'col-4',
    },

    {
      type: 'html',
      content: '<h2 class="push-top-xl">Company informations</h2>',
      containerClassName: 'col-12',
    },
    {
      type: 'input',
      key: 'companyName',
      label: 'Company Name',
      required: true,
      containerClassName: 'col-4',
    },
    {
      type: 'input',
      key: 'companyWebsite',
      label: 'Email Address',
      required: true,
      containerClassName: 'col-4',
    },
    {
      type: 'html',
      content: '<h3 class="push-top-lg">Company Addresses</h3>',
      containerClassName: 'col-12',
    },
    {
      type: 'multi-row',
      key: 'companyAddresses',
      rowWrapperClassName: 'ndf-fx-row-wrap gap',
      containerClassName: 'col-12',
      addButtonOnlyLast: true,
      deleteButtonRow: true,
      fields: [
        {
          key: 'type',
          type: 'select',
          label: 'Type',
          containerClassName: 'col-2 no-grid',
          options: [
            { label: 'Private', value: '1' },
            { label: 'Business', value: '2' },
          ],
          showEmptyOption: true,
        },
        {
          key: 'streetNo',
          type: 'input',
          label: 'Street, No.',
          containerClassName: 'auto no-grid',
        },
        {
          key: 'zipCode',
          type: 'input',
          label: 'ZIP',
          containerClassName: 'col-2   no-grid',
        },
        {
          key: 'country',
          type: 'input',
          label: 'City',
          containerClassName: 'col-3 no-grid',
        },
      ],
    },
    {
      type: 'html',
      content: '<h2 class="push-top-xl">Change Password</h2>',
      containerClassName: 'col-12',
    },
    {
      type: 'input',
      key: 'passwordOld',
      inputType: 'password',
      label: 'Old Password',
      required: true,
      containerClassName: 'col-4',
      placeholder: '**********',
    },
    {
      type: 'input',
      key: 'passwordNew',
      inputType: 'password',
      label: 'New Password',
      required: true,
      containerClassName: 'col-4',
      placeholder: '**********',
    },
    {
      type: 'input',
      key: 'passwordConfirm',
      inputType: 'password',
      label: 'Confirm Password',
      required: true,
      containerClassName: 'col-4',
      placeholder: '**********',
    },
  ];

  public initialValues: {} = { companyAddresses: [{}] };

  public constructor(private _ngxDynamicFormService: NgxDynamicJsonFormService) {}

  public ngOnInit(): void {
    this._ngxDynamicFormService.overrideLayoutOptions({
      default: {
        appearance: 'outline',
        floatLabel: 'always',
      },
      select: {
        showSearch: false,
      },
    });
  }

  public setForm(form: FormGroup): void {
    this.form = form;
  }

  public submit(): void {
    alert(JSON.stringify(this.form.getRawValue()));
  }

  /** EXCLUDE-START */ public files: Array<{ path: string; content?: string }> = [
    { path: 'examples/registration/registration.component.ts' },
    { path: 'examples/registration/registration.component.html' },
    { path: 'examples/registration/registration.component.scss' },
  ]; /** EXCLUDE-END */
}
