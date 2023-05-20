# `ngx-dynamic-json-form-material`

The easy way to generate JSON based forms with angular.

- Demo: [here](https://digisolu.github.io/ngx-dynamic-json-form/?path=/docs/examples-and-guides-registration-form--documentation)
- Docs: [here](https://digisolu.github.io/ngx-dynamic-json-form/)

## Quick Start

This is the UI material package for `ngx-dynamic-json-form`.

Without `ngx-dynamic-json-form-core` this library is not usable. So please take care to install it too.

## Versions

<table width="100%">
  <thead>
    <tr>
      <th align="left">Angular</th>
      <th align="left">Angular Material</th>
      <th align="left">ngx-dynamic-json-form-core</th>
      <th align="left">ngx-dynamic-json-form-material</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>< 15</td>
      <td>< 15</td>
      <td>not tested, if it is working, please report it via GitHub.</td>
      <td>not tested, if it is working, please report it via GitHub.</td>
    </tr>
    <tr>
      <td>15.x.x</td>
      <td>15.x.x</td>
      <td>1.x.x</td>
      <td>1.x.x</td>
    </tr>
    <tr>
      <td>16.x.x</td>
      <td>16.x.x</td>
      <td>1.x.x</td>
      <td>1.x.x</td>
    </tr>
    <tr>
      <td>17.x.x</td>
      <td>17.x.x</td>
      <td>not tested yet</td>
      <td>not tested yet</td>
    </tr>
  </tbody>
</table>

## Install and Usage

This is a step by step instruction to install and use `ngx-dynamic-json-form-material`.

### 1. Install all packages:

```sh
npm i ngx-dynamic-json-form-core ngx-dynamic-json-form-material ngx-mat-select-search --save
```

Please make sure, that `@angular/forms` and `"@angular/material` are already installed.

### 2. Add `ngx-dynamic-json-form-material` to your `AppModule`

```typescript

import { AppComponent } from './app.component';
import { NgxDynamicJsonFormMaterialModule } from 'ngx-dynamic-json-form-material';

@NgModule({
  imports: [
    BrowserModule
    NgxDynamicJsonFormMaterialModule.forRoot()
  ],
  ...
})
export class AppModule {}
```

The `forRoot()` method call is required on root level.

This method is used to override default configurations and is needed to register custom components.

More information can be found in the [global configuration section](https://digisolu.github.io/ngx-dynamic-json-form/?path=/docs/examples-and-guides-global-configurations--documentation) in the docs.

### 3. Configure the form in the component TS

```typescript
@Component({
  // ...
  changeDetection: ChangeDetectionStrategy.OnPush, // <- Recommended
})
export class MyComponent implements OnInit {
  public form: FormGroup = new FormGroup({}); // <- The form instance

  // The form fields
  public fields: FormField[] = [
    {
      type: "select",
      key: "language",
      label: "Language",
      options: [
        { label: "Language 1", value: "1" },
        // ...
      ],
    },
  ];

  // The callback method to get the instance of the form
  public setForm(form: FormGroup): void {
    this.form = form;
  }
}
```

### 4. Use `ngx-dynamic-json-form` in the component HTML

```html
<ngx-dynamic-json-form [fields]="fields" (getForm)="setForm($event)" [initial]="initialValues" formClassName="my-form-class"></ngx-dynamic-json-form>
```

<table width="100%">
  <thead>
    <tr>
      <th align="left">Input</th>
      <th align="left">Description</th>
      <th align="left">Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`fields`</td>
      <td>This is the configuration of all form fields.</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>`getForm`</td>
      <td>A callback to get the instance of the `FormGroup`.</td>
      <td>No</td>
    </tr>
    <tr>
      <td>`initial`</td>
      <td>An object with the initial values of the form.</td>
      <td>No</td>
    </tr>
    <tr>
      <td>`formClassName`</td>
      <td>Add a class name to the form.</td>
      <td>No</td>
    </tr>
  </tbody>
</table>
