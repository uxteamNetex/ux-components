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
    matSortActive="name"
    matSortDisableClear
    [dataSource]="dataSource"
    class="table-selectable__table mat-elevation-z8">

    ...

  `;

  code2 = `
  <ng-container matColumnDef="name" sticky>
    <th mat-header-cell *matHeaderCellDef mat-sort-header>First name</th>
    ...
  </ng-container>

  ...

  <ng-container matColumnDef="options" stickyEnd>
    <th class="utils--w-48" mat-header-cell *matHeaderCellDef></th>
    <td class="utils--w-48" mat-cell *matCellDef="let element">
      <ntx-menu-options></ntx-menu-options>
    </td>
  </ng-container>

  `;

}
