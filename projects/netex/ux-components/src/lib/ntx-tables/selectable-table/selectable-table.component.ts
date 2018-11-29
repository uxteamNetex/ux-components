import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';


export interface PeriodicElement {
  name: string;
  project: string;
  type: string;
  modification: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // tslint:disable-next-line:max-line-length
  {name: 'Element name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium', project: 'Project name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium', type: 'No editable', modification: '29/11/2018'},
  // tslint:disable-next-line:max-line-length
  {name: 'Element name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium', project: 'Project name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'},
  {name: 'Element name', project: 'Project name', type: 'No editable', modification: '29/11/2018'}
];


@Component({
  selector: 'ntx-selectable-table',
  templateUrl: './selectable-table.component.html',
  styleUrls: ['./selectable-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectableTableComponent implements OnInit {

  @Input() color: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['select', 'name', 'project', 'type', 'modification', 'options'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
