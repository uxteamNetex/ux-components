import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  code1 = `
    <div [className]="'label'" matTooltip="Label">{{ text }}</div>
  `;

  code2 = `
    @Component({
      ...
    })
    export class LabelComponent implements OnInit {
      ...
      @Input() text: string;
      ...
    }
  `;

  code3 = `
    <div [className]="'label-error'" matTooltip="Label error">
      <mat-icon class="icon-netex icon-warning utils--margin-right-4"></mat-icon>
      {{ text }}
    </div>
  `;

  code4 = `
    @Component({
      ...
    })
    export class LabelErrorComponent implements OnInit {
      ...
      @Input() text: string;
      ...
    }
  `;

  code5 = `
    <div [className]="'label-error'" matTooltip="Label error">
      <mat-icon class="icon-netex icon-warning utils--margin-right-4"></mat-icon>
      <label class="label-error--label">{{ text }}</label>
    </div>
  `;

  constructor() { }

  ngOnInit() {
  }

}
