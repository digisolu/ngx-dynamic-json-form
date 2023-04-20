import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-dynamic-json-form/material';
// ...

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class RegistrationComponent {
  public form: FormGroup = new FormGroup({});

  public fields: FormField[] = [
    {
      type: 'container', // TODO: Remove
      // TODO: Remove
      rowWrapperClassName: '', // TODO: Remove
      // TODO: Remove
      fields: [
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
          // options: [],
          containerClassName: 'col-4',
        },
        {
          type: 'input',
          key: 'language',
          label: 'Language',
          // options: [],
          containerClassName: 'col-4',
        },
        // {
        //   type: 'select',
        //   key: 'country',
        //   label: 'Country',
        //   options: [],
        // },
        // {
        //   type: 'select',
        //   key: 'language',
        //   label: 'Language',
        //   options: [],
        // },

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
              type: 'input',
              label: 'Type',
              containerClassName: 'col-2 no-grid',
            },
            // {
            //   key: 'type',
            //   type: 'select',
            //   label: 'Address Type',
            //   containerClassName: '',
            // },
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
      ], // TODO: Remove
    }, // TODO: Remove
  ];

  public initialValues: {} = { companyAddresses: [{}] };

  public setForm(form: FormGroup): void {
    this.form = form;
  }

  public submit(): void {
    alert(JSON.stringify(this.form.getRawValue()));
  }

  // ...
}
