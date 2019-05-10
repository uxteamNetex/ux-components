import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  code1 = `
    <mat-toolbar [ngClass]="{'selected': itemsSelected }" class="multi-select-header">

      <div class="multi-select-header__total-items">
        <span>{{ numSelectedItems | i18nPlural: itemPluralMapping }} selected</span>
      </div>

      <span class="multi-select-header__spacer"></span>

      <div class="multi-select-header__options" *ngIf="itemsSelected">
        <ntx-text-button [color]="'white'"></ntx-text-button>
        <ntx-text-button [color]="'white'"></ntx-text-button>
        <ntx-text-button [color]="'white'"></ntx-text-button>
        <ntx-menu-options></ntx-menu-options>
      </div>

    </mat-toolbar>
  `;

  constructor() { }

  ngOnInit() {
  }

}
