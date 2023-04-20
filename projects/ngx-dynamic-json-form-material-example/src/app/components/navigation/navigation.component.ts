import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: '[app-navigation]',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  @Input()
  public links: Array<{ url: string; isActive?: boolean; name: string }> = [];
}
