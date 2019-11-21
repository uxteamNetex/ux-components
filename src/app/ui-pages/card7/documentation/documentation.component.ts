import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  code1 = `
  <mat-card class="card7">
    <mat-card-header class="card7__header">
      <mat-card-title class="card7__title">
        <span class="utils--truncate1" [matTooltip]="data.title">{{ data.title }}</span>
      </mat-card-title>
      <ntx-menu-options></ntx-menu-options>
    </mat-card-header>
    <mat-card-content class="card7__content">
      <mat-card-subtitle class="card7__subtitle">
        <span class="utils--truncate2" [matTooltip]="data.description">{{ data.description }}</span>
      </mat-card-subtitle>
    </mat-card-content>
  </mat-card>
  `;
  code2 = `
  @Component({
    ...
  })
  export class Card7Component implements OnInit {

    data: any = {
      title: 'Competency title with a very long text',
      description: 'Description in a few words that could be one or two lines maximum and then three dots'
    };

    selected: boolean;
    ...
  }`;

  constructor() { }

  ngOnInit() {
  }

}
