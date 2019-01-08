import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';

export interface PeriodicElement {
  receivers: string;
  job: string;
  superiors: string;
  pairs: string;
  subordinates: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {receivers: 'Amanda Matterson Cooper', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Amanda Matterson Cooper', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'}
];


@Component({
  selector: 'ntx-evaluation-table',
  templateUrl: './evaluation-table.component.html',
  styleUrls: ['./evaluation-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EvaluationTableComponent implements OnInit {

  show = false;
  checkboxValue: boolean;

  @Input() color: string;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['select', 'receivers', 'job', 'superiors', 'pairs', 'subordinates'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  showMultiselecToolbar() {
    if (!this.checkboxValue) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

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
    this.dataSource.sort = this.sort;
  }

}
