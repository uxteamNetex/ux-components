import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';
import { MatPaginator, MatSort, MatSortable, MatTableDataSource, PageEvent } from '@angular/material';

export interface PeriodicElement {
	isSeen: boolean;
	avatar: string;
	name: string;
	icon: string;
	iconColor: string;
	project: string;
	type: string;
	modification: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
	{isSeen:false, avatar: 'assets/images/perfil.jpg', name: 'Element name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium', icon: 'icon-warning-solid', iconColor: 'utils--text-error', project: 'Project name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium',  type: 'type name', modification: '29/11/2018'},
	{isSeen:false, avatar: 'assets/images/perfil.jpg', name: 'Element name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium', icon: 'icon-warning-solid', iconColor: 'utils--text-error', project: 'Project name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium',  type: 'type name', modification: '29/11/2018'},
	{isSeen:false, avatar: 'assets/images/perfil.jpg', name: 'Element name', icon: 'icon-warning-solid', iconColor: 'utils--text-warning', project: 'Project name', type: 'type name', modification: '29/11/2018'},
	{isSeen:true, avatar: 'assets/images/perfil.jpg', name: 'Element name', icon: 'icon-warning-solid', iconColor: 'utils--text-warning', project: 'Project name', type: 'type name', modification: '29/11/2018'},
	{isSeen:true, avatar: 'assets/images/perfil.jpg', name: 'Element name', icon: 'icon-warning-solid', iconColor: 'utils--text-warning', project: 'Project name', type: 'long type name', modification: '29/11/2018'},
	{isSeen:true, avatar: 'assets/images/perfil.jpg', name: 'Element name', icon: 'icon-warning-solid', iconColor: 'utils--text-warning', project: 'Project name', type: 'type name', modification: '29/11/2018'},
	{isSeen:true, avatar: 'assets/images/perfil.jpg', name: 'Element name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium', icon: 'icon-warning-solid', iconColor: 'utils--text-warning', project: 'Project name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium',  type: 'type name', modification: '29/11/2018'},
	{isSeen:true, avatar: 'assets/images/perfil.jpg', name: 'Element name', icon: 'icon-warning-solid', iconColor: 'utils--text-warning', project: 'Project name', type: 'very long type name', modification: '29/11/2018'},
	{isSeen:true, avatar: 'assets/images/perfil.jpg', name: 'Element name', icon: 'icon-warning-solid', iconColor: 'utils--text-warning', project: 'Project name', type: 'type name', modification: '29/11/2018'},
	{isSeen:true, avatar: 'assets/images/perfil.jpg', name: 'Element name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium', icon: 'icon-warning-solid', iconColor: 'utils--text-warning', project: 'Project name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium',  type: 'type name', modification: '29/11/2018'},
	{isSeen:true, avatar: 'assets/images/perfil.jpg', name: 'Element name', icon: 'icon-warning-solid', iconColor: 'utils--text-warning', project: 'Project name', type: 'very long type name', modification: '29/11/2018'},
	{isSeen:true, avatar: 'assets/images/perfil.jpg', name: 'Element name', icon: 'icon-warning-solid', iconColor: 'utils--text-warning', project: 'Project name', type: 'type name', modification: '29/11/2018'},
	{isSeen:true, avatar: 'assets/images/perfil.jpg', name: 'Element name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium', icon: 'icon-warning-solid', iconColor: 'utils--text-warning', project: 'Project name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium',  type: 'type name', modification: '29/11/2018'},
];



@Component({
	selector: 'ntx-selectable-table',
	templateUrl: './selectable-table.component.html',
	styleUrls: ['./selectable-table.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SelectableTableComponent implements OnInit {

	@Input() style: string;
	@Input() showIcon: boolean;

	constructor() { }

	displayedColumns: string[] = ['select', 'name', 'project', 'type', 'modification', 'options'];
	dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
	selection = new SelectionModel<PeriodicElement>(true, []);

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	ngOnInit() {
		this.sort.sort(({ id: 'name', start: 'asc'}) as MatSortable);
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
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
