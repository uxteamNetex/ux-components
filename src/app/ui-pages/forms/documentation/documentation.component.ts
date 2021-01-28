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

  code11= `
  <div class="searchbox-filter-panel" #container>
  <div class="searchbox-filter-panel__searchbox">
    <mat-icon class="icon-netex icon-search utils--margin-right-24"></mat-icon>
    <!-- <ntx-input-no-label [placeholder]="'Buscar notificación'"></ntx-input-no-label> -->
    <input type="text" placeholder="Buscar notificaci&oacute;n" class="searchbox-filter-panel__input utils--text-16 utils--text-grey-600">
    <button
      mat-button
      mat-icon-button
      (click)="togglePanel()">
      <mat-icon class="icon-netex icon-funnel-solid utils--text-grey-600"></mat-icon>
    </button>
  </div>
  <div *ngIf="show" class="searchbox-filter-panel__panel utils--margin-top-4">
    <button
      mat-button
      mat-icon-button
      (click)="togglePanel()"
      class="searchbox-filter-panel__panel--closeButton">
        <mat-icon class="icon-netex icon-cross utils--text-grey-600"></mat-icon>
    </button>
    <div class="searchbox-filter-panel__panel--content utils--margin-top-4">
      <div #contentPanelRef>
        <ng-content></ng-content>
      </div>
      <div *ngIf="!contentPanelRef.innerHTML.trim()" class="placeholder utils--align-center-text utils--basic-text">
        /** area for specific search form of the consuming app **/
      </div>
    </div>
  </div>
</div>`;
  code12= `
  import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'ntx-searchbox-filter-panel',
  templateUrl: './searchbox-filter-panel.component.html',
  styleUrls: ['./searchbox-filter-panel.component.scss']
})
export class SearchboxFilterPanelComponent implements OnInit {

  constructor() { }

  show: boolean = false;

  ngOnInit() {
  }

  togglePanel(): void {
    this.show = !this.show;
  }

}
`;
  code13= `
  @import "././projects/netex/ux-components/src/styles/app/utils";

:host {
    display: block;
}

$block: "searchbox-filter-panel";

.#{$block} {
    position: relative;
    .#{$block}__searchbox {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        border-radius: 26px;
        border: 1px solid $color-grey-300;
        color: $color-grey-600;
        padding: 4px 18px;
        align-items: center;
        ntx-input-no-label, input{
            flex-grow: 1;
        }
        .#{$block}__input {
            font-family: Lato;
            border-style: none;
            background-color: transparent;
            &:hover,&:focus {
                outline: none;
            }
        }
    }
    .#{$block}__panel {
        position: absolute;
        width: 100%;
        background-color: white;
        border-radius: 4px;
        box-sizing: border-box;
        box-shadow: 0 0 8px 0 rgba(0,0,0,.16);
        z-index: 1;
        display: flex;
        flex-direction: column;
        padding: 8px;
        &--closeButton {
            align-self: flex-end;
        }
        &--content {
            flex-grow: 1;
            .placeholder {
                border: 1px dashed $color-grey-300;
                font-style: italic;
                border-radius: 2px;
            }
        }
    }
}
`;

  code14 = `
    <mat-form-field floatLabel="never" class="input-no-label">
      <mat-label>{{placeholder}}</mat-label>
      <input matInput class="utils--text-16">
    </mat-form-field>
  `;
  code15 = `
    import { Component, OnInit, Input } from '@angular/core';
    import { ViewEncapsulation } from '@angular/core';

    @Component({
      selector: 'ntx-input-no-label',
      templateUrl: './input-no-label.component.html',
      styleUrls: ['./input-no-label.component.scss'],
      encapsulation: ViewEncapsulation.None
    })
    export class InputNoLabelComponent implements OnInit {

      @Input() placeholder: string;

      constructor() { }

      ngOnInit() {
      }
    }
  `;
  code16 = `
  @import "././projects/netex/ux-components/src/styles/app/utils";

  $block: "input-no-label";

  mat-form-field.#{$block} {
      display: block;
      .mat-form-field-wrapper {
        padding-bottom: 0;
      }
      .mat-form-field-infix {
        padding: 0;
        border-top: 0;
      }
      .mat-form-field-underline {
        position: absolute;
        bottom: 0;
        background-color: transparent;
        height: 0;
      }
      .mat-input-element {
        height: 28px;
      }
  }
`;

  code17 = `
    <div class="form-datepicker-range">
    <mat-form-field class="form-datepicker-range__date utils--margin-right-24">
      <input
        matInput
        [matDatepicker]="pickerFrom"
        placeholder="Fecha"
        readonly>
      <mat-datepicker-toggle matSuffix [for]="pickerFrom">
        <mat-icon class="icon-netex icon-calendar" matDatepickerToggleIcon></mat-icon>
      </mat-datepicker-toggle>
      <mat-datepicker #pickerFrom></mat-datepicker>
    </mat-form-field>
    <mat-form-field class="form-datepicker-range__hour utils--margin-right-24">
      <mat-select placeholder="Hora">
        <mat-option *ngFor="let hour of hours" [value]="hour.value">
          {{hour.viewValue}}
        </mat-option>
      </mat-select>
    </mat-form-field>
    <div class="form-datepicker-range__separator utils--margin-right-24">
      <span>a</span>
    </div>
    <mat-form-field class="form-datepicker-range__hour utils--margin-right-24">
      <mat-select placeholder="Hora">
        <mat-option *ngFor="let hour of hours" [value]="hour.value">
          {{hour.viewValue}}
        </mat-option>
      </mat-select>
    </mat-form-field>
    <mat-form-field class="form-datepicker-range__date">
      <input
        matInput
        [matDatepicker]="pickerTo"
        placeholder="Fecha"
        readonly>
      <mat-datepicker-toggle matSuffix [for]="pickerTo">
        <mat-icon class="icon-netex icon-calendar" matDatepickerToggleIcon></mat-icon>
      </mat-datepicker-toggle>
      <mat-datepicker #pickerTo></mat-datepicker>
    </mat-form-field>
  </div>
  `;
  code18 = `
    import { Component, OnInit } from '@angular/core';
    import { ViewEncapsulation } from '@angular/core';
    import { MatDatepickerInputEvent, NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material';

    const monthNamesAlias = ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

    export class AppDateAdapter extends NativeDateAdapter {
      format(date: Date, displayFormat: Object): string {
        let day: string = date.getDate().toString();
        let month: string = monthNamesAlias[date.getMonth()];
        let year = date.getFullYear();
        return 'day' + ' de ' + 'month' + ' de ' + ¡year';
      }
    }

    export interface Option {
      value: string;
      viewValue: string;
    }

    @Component({
      selector: 'ntx-form-datepicker-range',
      templateUrl: './form-datepicker-range.component.html',
      styleUrls: ['./form-datepicker-range.component.scss'],
      providers: [
        {provide: DateAdapter, useClass: AppDateAdapter}
      ],
      encapsulation: ViewEncapsulation.None
    })
    export class FormDatepickerRangeComponent implements OnInit {

      hours: Option[];

      constructor() { }

      ngOnInit() {
        let minFragment: string, hourFragment: string, value: string, viewValue : string;
        for (var i = 0; i < 24; i++) {
          value = ((i<10) ? '0' + i.toString() : i.toString()) + ':00';
          if (i < 12 ) {
            viewValue = value + ' am';
          } else {
            viewValue = value + ' pm';
          }
          this.hours.push(
            {
              value: value,
              viewValue: viewValue
            }
          )
        }
      }
    }
  `;
  code19 = `
    @import "././projects/netex/ux-components/src/styles/app/utils";

    $block: "form-datepicker-range";

    .#{$block} {

    mat-icon.icon-calendar, .mat-select-arrow:after {
        font-size: 16px !important;
        font-weight: bold;
        position: relative;
    }

    &__date {
        width: 152px !important;
        mat-icon.icon-calendar {
            top: -2px;
        }
    }

    &__hour {
        width: 88px !important;
        .mat-select-arrow {
            border: none;
            height: 12px;
            &::after {
                font-family: 'netex';
                content: '\e92f';
                left: -14px;
                top: -4px;
            }
        }
    }

    &__separator {
        display: inline-block;
    }

    }
  `;
	code20 = `
  .mat-icon{
    font-size: $font-size-24;
    height: 24px;
    width: 24px;
  }

  `;

  ngOnInit() {
  }

}
