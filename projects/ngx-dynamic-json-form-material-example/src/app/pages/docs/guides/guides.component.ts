import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div app-content [links]="links"></div>`,
})
export class GuidesComponent {
  public links: Array<{ url: string; isActive?: boolean; name: string }> = [];
}
