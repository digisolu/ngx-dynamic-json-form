import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'div[minimal]',
  templateUrl: './minimal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalComponent {
  @Input() public data: any;
}
