import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleComponent implements OnInit {
  @Input() public file: string = '';

  public constructor(private _http: HttpClient) {}

  public ngOnInit(): void {
    console.log(this.file);
  }
}
