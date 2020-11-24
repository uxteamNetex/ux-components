import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatSortable, MatTableDataSource } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'ntx-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'surname', 'username', 'date', 'state', 'options'];
  dataSource: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  @Input() style: string;
  @Input() tableData: any[];
  
  constructor() { }
  
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableData)
    this.sort.sort(({ id: 'name', start: 'asc'}) as MatSortable);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.style == 'flat'? null : this.paginator;
  }

}
