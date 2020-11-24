import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatSortable, MatTableDataSource } from '@angular/material';
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
  // tslint:disable-next-line:max-line-length
  {receivers: 'Amanda Matterson Cooper Amanda Matterson Cooper', job: 'Web developer Web developer Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson Cooper', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson Cooper', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson Cooper', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson Cooper', job: 'Web developer Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson Cooper', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson Cooper', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson Cooper', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson Cooper', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson Cooper', job: 'Web developer Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson Cooper', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson Cooper', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'},
  {receivers: 'Amanda Matterson Cooper', job: 'Web developer', superiors: '2', pairs: '10', subordinates: '3'},
  {receivers: 'Angeline Kerber Peterson', job: 'Marketing assistant', superiors: '1', pairs: '23', subordinates: '14'}
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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['select', 'receivers', 'superiors', 'pairs', 'subordinates'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  showMultiselecToolbarEvaluation() {
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
    this.sort.sort(({ id: 'receivers', start: 'asc'}) as MatSortable);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
