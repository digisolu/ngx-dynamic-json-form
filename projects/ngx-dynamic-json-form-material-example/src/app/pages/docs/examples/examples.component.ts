import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplesComponent {
  public links: Array<{ url: string; isActive?: boolean; name: string }> = [
    {
      url: '/examples/registration',
      name: 'Registration Form',
    },
  ];
}
