import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';

@Component({
  selector: 'div[code]',
  templateUrl: './code.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent implements OnInit {
  @Input() public headline: string = '';
  @Input() public description: string = '';

  @Input() public files: {
    path: string;
    content?: string;
  }[] = [];

  @Input() public codes: {
    name: string;
    content: string;
  }[] = [];

  public get fragments(): {
    path?: string;
    name?: string;
    content?: string;
  }[] {
    return [...this.codes, ...this.files];
  }

  public showCode: boolean = false;

  public constructor(private _http: HttpClient, private _snackBar: MatSnackBar) {}

  public ngOnInit(): void {
    if (this.files.length > 0) {
      this.files.forEach((file) => this._loadCode(file));
    }
  }

  public getLabel(file: { path?: string; content?: string }): string {
    return (file.path || '').split('.').slice(-1)[0].toLocaleUpperCase();
  }

  public getContent(content: string): string {
    return content;
  }

  public onCopied(success: boolean): void {
    this._snackBar.open(success ? 'Code copied' : 'Code not copied', undefined, {
      duration: 2500,
    });
  }

  private _loadCode(file: { path: string; content?: string }): void {
    this._http
      .get(`assets/docs/${file.path}`, { responseType: 'text' })
      .pipe(take(1))
      .subscribe((data) => (file.content = data));
  }
}
