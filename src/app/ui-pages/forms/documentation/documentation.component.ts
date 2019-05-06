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

  code8 = `
  <mat-form-field class="form-searchbox"
                  floatLabel="never"
                  [ngClass]="{'active': active }">
    <button mat-icon-button
            (click)="active = true">
      <mat-icon matPrefix
                class="icon-netex icon-search"></mat-icon>
    </button>
    <input matInput [(ngModel)]="searchTerm">
    <button mat-icon-button
            *ngIf="searchTerm"
            (click) = "active = false; searchTerm = ''">
      <mat-icon matSuffix
                class="icon-netex icon-cross"></mat-icon>
    </button>
  </mat-form-field>` ;
  code9 = `

  @Component({ ... })
  export class FormSearchboxComponent implements OnInit {

    searchTerm: string;
    active: boolean;

    constructor() { }

    ngOnInit() { }

  }` ;

  code10 = `
  @import "././projects/netex/ux-components/src/styles/app/utils";

  $block: "form-searchbox";

  .#{$block}.mat-form-field {
    width: 48px;
    .mat-form-field-underline{
      visibility: hidden;
    }
    .mat-form-field-infix {
      display: flex;
      padding-bottom: 0;
      .mat-input-element {
        visibility: hidden;
      }
      .mat-icon-button:hover {
        background: $icon-button-hover;
      }
    }
    &.active.mat-form-field {
      width: 100%;
      .mat-form-field-infix {
        visibility: visible;
        .mat-input-element {
          visibility: visible;
        }
        .mat-icon-button:first-of-type:hover {
          background: none;
        }
      }
      .mat-form-field-underline{
        visibility: visible;
        height: 0;
        -webkit-transition: height .6s;
        transition: height .6s;
      }
    }
  }`;

  ngOnInit() {
  }


}
