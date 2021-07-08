import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';
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

	menuOptionsAdvanced: {
		icon: string;
		actions: {
			showmenuOptions: boolean;
			showIconOptions: boolean;
			showDivider: boolean;
			showButtons: boolean;
			iconOptions: string;
			title: string;
			buttonText: string;
			disabled: boolean;
			click: () => void;
		}[];
	};

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

		this.menuOptionsAdvanced = {
			icon: 'icon-more-options',
			actions: [
				{
					disabled: false,
					showmenuOptions: true,
					showIconOptions: false,
					showDivider: false,
					showButtons: false,
					iconOptions: '',
					title: 'Archive',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Archive\' option'); }
				},
				{
					disabled: false,
					showmenuOptions: true,
					showIconOptions: false,
					showDivider: false,
					showButtons: false,
					iconOptions: '',
					title: 'Notifications',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Notifications\' option'); }
				},
				{
					disabled: true,
					showmenuOptions: true,
					showIconOptions: false,
					showDivider: false,
					showButtons: false,
					iconOptions: '',
					title: 'Edit',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Edit\' option'); }
				},
				{
					disabled: true,
					showmenuOptions: false,
					showIconOptions: false,
					showDivider: true,
					showButtons: false,
					iconOptions: '',
					title: '',
					buttonText: '',
					click: function() {}
				},
				{
					disabled: false,
					showmenuOptions: true,
					showIconOptions: true,
					showDivider: false,
					showButtons: false,
					iconOptions: 'icon-trash',
					title: 'Delete',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Delete\' option'); }
				},
				{
					disabled: true,
					showmenuOptions: true,
					showIconOptions: true,
					showDivider: false,
					showButtons: false,
					iconOptions: 'icon-download',
					title: 'Download and option with a very long text',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Download\' option'); }
				},
				{
					disabled: true,
					showmenuOptions: false,
					showIconOptions: false,
					showDivider: true,
					showButtons: false,
					iconOptions: '',
					title: '',
					buttonText: '',
					click: function() {}
				},
				{
					disabled: false,
					showmenuOptions: false,
					showIconOptions: false,
					showDivider: false,
					showButtons: true,
					iconOptions: '',
					title: '',
					buttonText: 'Button',
					click: function() {}
				},
				{
					disabled: false,
					showmenuOptions: false,
					showIconOptions: false,
					showDivider: false,
					showButtons: true,
					iconOptions: '',
					title: '',
					buttonText: 'Button two',
					click: function() {}
				},
			]
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
