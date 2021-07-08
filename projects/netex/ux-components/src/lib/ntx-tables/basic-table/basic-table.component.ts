import { Component, OnInit, ViewChild, Input, ViewEncapsulation, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { MatPaginator, MatSort, MatSortable, MatTableDataSource } from '@angular/material';

@Component({
	selector: 'ntx-basic-table',
	templateUrl: './basic-table.component.html',
	styleUrls: ['./basic-table.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class BasicTableComponent implements OnInit, AfterViewInit {

	displayedColumns: string[] = ['name', 'surname', 'username', 'date', 'state', 'options'];
	dataSource: MatTableDataSource<any>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild('tableWrapper') tableWrapper: ElementRef;

	@Input() style: string;
	@Input() tableData: any[];

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

	constructor(
		private renderer: Renderer2
	) { }

	ngOnInit() {
		this.dataSource = new MatTableDataSource(this.tableData)
		this.sort.sort(({ id: 'name', start: 'asc'}) as MatSortable);
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.style == 'flat'? null : this.paginator;

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

	ngAfterViewInit() {
		this.checkTableWrapperWidth();
	}

	ngDoCheck() { 
		this.checkTableWrapperWidth();
	}
	/**
	 * A basic function to show sticky columns border when table content overflow table wrapper.
	 * Something like a 'container-querie'.
	 */
	checkTableWrapperWidth() {
		if (this.tableWrapper) {
			var tableWrapperWidth = this.tableWrapper.nativeElement.offsetWidth;
			var tableWidth = this.tableWrapper.nativeElement.children[0].offsetWidth;
			if (tableWidth > tableWrapperWidth) {
				this.renderer.addClass(this.tableWrapper.nativeElement, "table-container__table--sticky");
			} else {
				this.renderer.removeClass(this.tableWrapper.nativeElement, "table-container__table--sticky");
			}
		}
	}

}
