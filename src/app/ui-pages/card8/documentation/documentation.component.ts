import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  code1 = `
  <mat-card class="card8"
          [ngClass]="{'card-selected': selected}">
  <mat-card-header class="card8__header">
    <mat-card-title class="card8__title">
      <span class="utils--truncate1" [matTooltip]="data.title">{{ data.title }}</span>
    </mat-card-title>
    <ntx-form-checkbox-circle class="card8__header--check" 
          [color]="'primary'"
          (checkboxChange)="onCardCheckboxChange($event)"
          [hidden]="'true'"></ntx-form-checkbox-circle>
  </mat-card-header>
  <mat-card-content class="card8__content">
    <mat-card-subtitle class="card8__subtitle">
      <span class="utils--truncate2" [matTooltip]="data.description">{{ data.description }}</span>
    </mat-card-subtitle>
    </mat-card-content>
  </mat-card>
  `;
  code2 = `
  @Component({
    ...
  })
  export class Card8Component implements OnInit {

    data: any = {
      title: 'Competency title with a very long text',
      description: 'Description in a few words that could be one or two lines maximum and then three dots'
    };

    selected: boolean;
    ...

    onCardCheckboxChange(event: MatCheckboxChange) {
      this.selected = event.checked;
    }

  }`;

  constructor() { }

  ngOnInit() {
  }

}
