import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  constructor() { }
  code1 = `
  <mat-checkbox
      class="checkbox-circle"
      [color]="color"
      [checked]="checked"
      [disabled]="disabled"
      (change)="onChangeCheckbox($event)">
    <span [hidden]="hidden">I'm a circle checkbox</span>
  </mat-checkbox>`;

  code2 = `
  @Component({ ... })
  export class FormCheckboxCircleComponent implements OnInit {
    ...
    @Input() color: string;
    ...
    @Output() checkboxChange = new EventEmitter<MatCheckboxChange>();
    ...
    onChangeCheckbox(event: MatCheckboxChange) {
      this.checkboxChange.emit(event);
    }
  }`;

  code3 = `
  <mat-checkbox
      [color]="color"
      [checked]="checked"
      [disabled]="disabled">
    <span [hidden]="hidden">I'm a circle checkbox</span>
  </mat-checkbox>`;

  code4 = `
  @Component({ ... })
  export class FormCheckboxComponent implements OnInit {
    ...
    @Input() color: string;
    ...
    @Output() checkboxChange = new EventEmitter<MatCheckboxChange>();
    ...
    onChangeCheckbox(event: MatCheckboxChange) {
      this.checkboxChange.emit(event);
    }
  }`;

  code5 = `
  $block: "form-container";
  .#{$block}{
    ...
    .#{$block}__form{
      .cdk-overlay-pane{
        ...
      }
    }
    ...
  }`;

  code6 = `
  <mat-form-field class="form-select-thin"
                [ngClass]="{'selected': selected.value}">
    <mat-select [formControl]="selected"
                (selectionChange)="onSelectChange($event)">
      <mat-option class="form-select-thin__option" 
                  [value]="firstOption.value">
        <mat-radio-button class="form-select-thin__option--radio-button" 
                          color="primary">
          {{ firstOption.label }}
        </mat-radio-button>
      </mat-option>
      <mat-divider></mat-divider> 
      <mat-option class="form-select-thin__option" 
                  *ngFor="let option of options | slice:1" 
                  [value]="option.value">
        <mat-radio-button class="form-select-thin__option--radio-button" 
                          color="primary">
          {{ option.label }}
        </mat-radio-button>
      </mat-option>
    </mat-select>
  </mat-form-field>
  `;

  code7 = `
  export interface Option {
    value: number;
    label: string;
  }
  @Component({ ... })
  export class FormSelectThinComponent implements OnInit {
    ...
    options: Option[] = [
      {label: 'No level assigned', value: 0},
      {label: 'Does not apply', value: 1},
      {label: 'Bad', value: 2},
      {label: 'Good', value: 3},
      {label: 'Excellent', value: 4},
    ];
    firstOption: Option = this.options[0];
    selected = new FormControl(this.firstOption.value);
    ...
    }`;

  ngOnInit() {
  }


}
