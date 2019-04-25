import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
	avatar: string;
	evaluated: boolean;
	receiver: string;
	job: string;
	alertMsg: string;
	superiors: string;
	pairs: string;
	subordinates: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
	{ avatar: 'assets/images/perfil.jpg', evaluated: false, receiver: 'Amanda Matterson Cooper Amanda Matterson Cooper', job: 'Web developer', alertMsg: '', superiors: '2', pairs: '10', subordinates: '3'},
	{ avatar: 'assets/images/perfil.jpg', evaluated: true, receiver: 'Amanda Matterson Cooper', job: 'Marketing assistant', alertMsg: '2', superiors: '2', pairs: '10', subordinates: '3'},
	{ avatar: 'assets/images/perfil.jpg', evaluated: false, receiver: 'Angeline Kerber', job: 'Web developer', alertMsg: '3', superiors: '2', pairs: '10', subordinates: '3'},
	{ avatar: 'assets/images/perfil.jpg', evaluated: true, receiver: 'Amanda Matterson', job: 'UX designer', alertMsg: '', superiors: '1', pairs: '5', subordinates: '3'},
	{ avatar: 'assets/images/perfil.jpg', evaluated: true, receiver: 'Amanda Matterson', job: 'Database administrator', alertMsg: '2', superiors: '2', pairs: '2', subordinates: '3'},
	{ avatar: 'assets/images/perfil.jpg', evaluated: false, receiver: 'Amanda Matterson', job: 'Web developer', alertMsg: '1', superiors: '2', pairs: '3', subordinates: '4'},
	{ avatar: 'assets/images/perfil.jpg', evaluated: true, receiver: 'Amanda Matterson', job: 'Graphic designer', alertMsg: '5', superiors: '1', pairs: '2', subordinates: '2'},
	{ avatar: 'assets/images/perfil.jpg', evaluated: false, receiver: 'Angeline Kerber', job: 'Web designer', alertMsg: '1', superiors: '2', pairs: '1', subordinates: '1'},
	{ avatar: 'assets/images/perfil.jpg', evaluated: true, receiver: 'Amanda Matterson', job: 'Web designer', alertMsg: '3', superiors: '1', pairs: '2', subordinates: '4'},
	{ avatar: 'assets/images/perfil.jpg', evaluated: true, receiver: 'Amanda Matterson', job: 'Web designer', alertMsg: '3', superiors: '1', pairs: '2', subordinates: '4'}
];

@Component({
	selector: 'ntx-evaluation-table',
	templateUrl: './evaluation-table.component.html',
	styleUrls: ['./evaluation-table.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class EvaluationTableComponent implements OnInit, AfterViewInit {

	displayedColumns: string[] = ['receivers', 'superiors', 'pairs', 'subordinates'];
	dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
	selection = new SelectionModel<PeriodicElement>(true, []);

	selectionHeaderStyle: object;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild('tableContainer') tableContainer: ElementRef;

	itemPluralMapping = {
		'=0': '0 items',
		'=1': '1 item' ,
		'other': '# items'
	};

	alertPluralMapping = {
		'=1': '1 alert' ,
		'other': '# alerts'
	};

	constructor() { }

	ngOnInit() {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	ngAfterViewInit() {
		const flexBasis = this.tableContainer.nativeElement.offsetWidth - 16;
		this.selectionHeaderStyle = {
			'flex':  '0 0 ' + flexBasis + 'px',
			'left': 0,
			'position': 'sticky'
		};
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

	onRowCheckboxChange($event, row) {
		return $event ? this.selection.toggle(row) : null;
	}

	onHeaderCheckboxChange($event) {
		return $event ? this.masterToggle() : null;
	}

}
