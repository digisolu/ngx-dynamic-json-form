export class Utils {
  public static getDefaultComponentTs(
    fields: any[] = [],
    initial: any = {},
    decorator: string = ''
  ): string {
    return `@Component({
  //...
  changeDetection: ChangeDetectionStrategy.OnPush,${decorator ? '\n  ' + decorator : ''}
})
export class FormComponent {
  public form: FormGroup;

  public initialValues: any =
${Utils.formatJSON(initial)}

  public fields: FormField[] =
${Utils.formatJSON(fields)};

  public setForm(form: FormGroup): void {
    this.form = form;
  }
}
`;
  }

  public static formatJSON(input: any): string {
    return JSON.stringify(input, undefined, 2);
  }
}
