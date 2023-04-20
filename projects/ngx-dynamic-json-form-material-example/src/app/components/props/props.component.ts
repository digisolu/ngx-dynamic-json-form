import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'div[props]',
  templateUrl: './props.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropsComponent {
  @Input() public headline: string = '';

  @Input() public data: {
    name: string;
    description: string;
    default: any;
    global?: boolean;
  }[] = [];
}
