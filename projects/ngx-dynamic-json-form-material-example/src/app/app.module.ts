import { ClipboardModule } from '@angular/cdk/clipboard';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDynamicJsonFormMaterialModule } from '@ngx-dynamic-json-form/material';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BaseFieldComponent } from './components/base-field/base-field.component';
import { BasicCallbacksComponent } from './components/basic-callbacks/basic-callbacks.component';
import { CodeComponent } from './components/code/code.component';
import { ContentComponent } from './components/content/content.component';
import { ExampleComponent } from './components/example/example.component';
import { FormFieldBasicsComponent } from './components/form-field-basics/form-field-basics.component';
import { MatFormFieldComponent } from './components/mat-form-field/mat-form-field.component';
import { MinimalComponent } from './components/minimal/minimal.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PropsComponent } from './components/props/props.component';
import { MyCustomFormFieldComponent } from './my-custom-form-field/my-custom-form-field.component';
import { AutocompleteComponent } from './pages/docs/components/autocomplete/autocomplete.component';
import { ButtonComponent } from './pages/docs/components/button/button.component';
import { CheckboxComponent } from './pages/docs/components/checkbox/checkbox.component';
import { ComponentsComponent } from './pages/docs/components/components.component';
import { ContainerComponent } from './pages/docs/components/container/container.component';
import { InputComponent } from './pages/docs/components/input/input.component';
import { MultiCheckboxComponent } from './pages/docs/components/multi-checkbox/multi-checkbox.component';
import { SelectComponent } from './pages/docs/components/select/select.component';
import { ExamplesComponent } from './pages/docs/examples/examples.component';
import { RegistrationComponent } from './pages/docs/examples/registration/registration.component';
import { GuidesComponent } from './pages/docs/guides/guides.component';
import { HomeComponent } from './pages/home/home.component';
import { DatepickerComponent } from './pages/docs/components/datepicker/datepicker.component';

const MATERIAL: any = [
  ClipboardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [
    AppComponent,
    MyCustomFormFieldComponent,
    RegistrationComponent,
    NavigationComponent,
    HomeComponent,
    ExamplesComponent,
    ComponentsComponent,
    ContentComponent,
    AutocompleteComponent,
    CodeComponent,
    GuidesComponent,
    PropsComponent,
    MinimalComponent,
    FormFieldBasicsComponent,
    BasicCallbacksComponent,
    BaseFieldComponent,
    MatFormFieldComponent,
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    ContainerComponent,
    MultiCheckboxComponent,
    ExampleComponent,
    SelectComponent,
    DatepickerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ...MATERIAL,
    NgxDynamicJsonFormMaterialModule
      .forRoot
      //   {
      //   components: {
      //     'my-custom-form-field': MyCustomFormFieldComponent,
      //   },
      // }
      (),
    MatNativeDateModule,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          // html: () => import('highlight.js/lib/languages/html'),
          json: () => import('highlight.js/lib/languages/json'),
          xml: () => import('highlight.js/lib/languages/xml'),

          css: () => import('highlight.js/lib/languages/css'),
          scss: () => import('highlight.js/lib/languages/scss'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
