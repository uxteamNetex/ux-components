import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'project', 'location', 'modification', 'state', 'options'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  project: string;
  location: string;
  modification: string;
  state: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // tslint:disable-next-line:max-line-length
  {name: 'Element name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium', project: 'Project name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium', location: 'Element location', modification: '08/01/2019', state: 'state'},
  {name: 'A element name', project: 'Project name', location: 'Element location', modification: '08/01/2019', state: 'state'},
  {name: 'Element name', project: 'A Project name', location: 'Element location', modification: '08/01/2019', state: 'state'},
  {name: 'Element name', project: 'Project name', location: 'A Element location', modification: '08/01/2019', state: 'state'},
  {name: 'Element name', project: 'Project name', location: 'Element location', modification: '07/01/2019', state: 'state'},
  {name: 'Element name', project: 'Project name', location: 'Element location', modification: '08/01/2019', state: 'a state'},
  {name: 'Element name', project: 'Project name', location: 'Element location', modification: '08/01/2019', state: 'state'},
  {name: 'Element name', project: 'Project name', location: 'Element location', modification: '08/01/2019', state: 'state'},
  {name: 'Element name', project: 'Project name', location: 'Element location', modification: '08/01/2019', state: 'state'},
  {name: 'Element name', project: 'Project name', location: 'Element location', modification: '08/01/2019', state: 'state'},
  {name: 'Element name', project: 'Project name', location: 'Element location', modification: '08/01/2019', state: 'state'},
  {name: 'Element name', project: 'Project name', location: 'Element location', modification: '08/01/2019', state: 'state'},
  {name: 'Element name', project: 'Project name', location: 'Element location', modification: '08/01/2019', state: 'state'},
  {name: 'Element name', project: 'Project name', location: 'Element location', modification: '08/01/2019', state: 'state'},
  {name: 'Element name', project: 'Project name', location: 'Element location', modification: '08/01/2019', state: 'state'},
];
