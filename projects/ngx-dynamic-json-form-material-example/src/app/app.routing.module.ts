import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutocompleteComponent } from './pages/docs/components/autocomplete/autocomplete.component';
import { ButtonComponent } from './pages/docs/components/button/button.component';
import { CheckboxComponent } from './pages/docs/components/checkbox/checkbox.component';
import { ComponentsComponent } from './pages/docs/components/components.component';
import { ContainerComponent } from './pages/docs/components/container/container.component';
import { DatepickerComponent } from './pages/docs/components/datepicker/datepicker.component';
import { InputComponent } from './pages/docs/components/input/input.component';
import { MultiCheckboxComponent } from './pages/docs/components/multi-checkbox/multi-checkbox.component';
import { SelectComponent } from './pages/docs/components/select/select.component';
import { ExamplesComponent } from './pages/docs/examples/examples.component';
import { RegistrationComponent } from './pages/docs/examples/registration/registration.component';
import { GuidesComponent } from './pages/docs/guides/guides.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  //
  { path: '', component: HomeComponent },
  {
    path: 'examples',
    component: ExamplesComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: '', redirectTo: 'registration', pathMatch: 'full' },
    ],
  },
  {
    path: 'components',
    component: ComponentsComponent,
    children: [
      { path: 'autocomplete', component: AutocompleteComponent },
      { path: 'button', component: ButtonComponent },
      { path: 'checkbox', component: CheckboxComponent },
      { path: 'datepicker', component: DatepickerComponent },
      { path: 'container', component: ContainerComponent },
      { path: 'multi-checkbox', component: MultiCheckboxComponent },
      { path: 'input', component: InputComponent },
      { path: 'select', component: SelectComponent },
      { path: '', redirectTo: 'autocomplete', pathMatch: 'full' },
    ],
  },
  {
    path: 'guides',
    component: GuidesComponent,
    children: [],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
