import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div app-content [links]="links"></div>`,
})
export class ComponentsComponent {
  public links: Array<{ url: string; isActive?: boolean; name: string }> = [
    {
      url: '/components/autocomplete',
      name: 'Autocomplete',
    },
    {
      url: '/components/button',
      name: 'Button',
    },
    {
      url: '/components/datepicker',
      name: 'Datepicker',
    },
    {
      url: '/components/checkbox',
      name: 'Checkbox',
    },
    {
      url: '/components/container',
      name: 'Container',
    },
    {
      url: '/components/multi-checkbox',
      name: 'Multi-Checkboxes',
    },
    {
      url: '/components/input',
      name: 'Input',
    },
    {
      url: '/components/select',
      name: 'Select',
    },
  ];
}
