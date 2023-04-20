import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'div[basic-callbacks]',
  templateUrl: './basic-callbacks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCallbacksComponent {}
