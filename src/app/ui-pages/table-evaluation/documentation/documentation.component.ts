import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code1 = `
  ...

  <mat-table 
    matSort 
    matSortActive="receivers"
    matSortDisableClear 
    [dataSource]="dataSource" 
    class="table-selectable__table mat-elevation-z8"> 
  
    ...

  `;

}
