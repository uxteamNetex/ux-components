import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { TabsHeaderService } from '../services/tabs-header.service';

const LINKS = [
	'buttons',
	'chips',
	'detail-panel',
	'dialogs',
	'drag-and-drop',
	'empty-pages',
	'form-controls',
	'icons',
	'labels',
	'lists',
	'menus',
	'organisation-chart',
	'tabs',
	'toolbars',
	'user-profile-panel'
];

const CARDS = [
	'card1',
	'card2',
	'card3',
	'card4',
	'card5',
	'card7',
	'card8',
	'card9',
	'card10',
	'card11',
	'card12',
	'card13',
	'card14',
	'cards'
];

const ERROR_PAGES = [
	'error-page-401',
	'error-page-403',
	'error-page-404',
	'error-page-500',
	'error-page-503'
];

const LINKSHELPERS = [
	'colours',
	'headings-and-texts',
	'margins',
	'paddings'
];

const PANELS =  [
	'panels',
	'panel-tabs'
];

const PROGRESS = [
	'progress-bar',
	'progress-spinner'
];

const SIDENAVS = [
	'sidenavs',
	'sidenav-filters'
];

const TABLES = [
	'table',
	'table-evaluation',
	'table-selectable'
];

const TREE = [
	'tree',
	'tree-check'
];

const WHATSNEWS = [
	{
		linkName: 'version401',
		label: 'version 4.0.1'
	},
	{
		linkName: 'version410',
		label: 'version 4.1.0'
	},
	{
		linkName: 'version411',
		label: 'version 4.1.1'
	},
	{
		linkName: 'version412',
		label: 'version 4.1.2'
	}
];

const CATEGORIES = {
	cards: { title: 'cards', links: CARDS },
	error_pages: { title: 'error pages', links: ERROR_PAGES },
	panels: { title: 'panels', links: PANELS},
	progress: { title: 'progress', links: PROGRESS },
	sidenavs: { title: 'sidenavs', links: SIDENAVS },
	table: { title: 'table', links: TABLES },
	tree: { title: 'tree', links: TREE }
};

export interface Category {
	title: string;
	links: string[];
}

@Component({
		selector: 'app-sidebar',
		templateUrl: './sidebar.component.html',
		styleUrls: ['./sidebar.component.scss'],
		encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

	categories = CATEGORIES;
	links: string[] = LINKS;
	linkshelpers: string[] = LINKSHELPERS;
	whatsnews: any[] = WHATSNEWS;

	constructor(
		private sidenavService: SidenavService,
		private tabsHeaderService: TabsHeaderService
	) { }

	ngOnInit() {
	}

	setPath(value: string) {
		this.sidenavService.menu.close();
		this.tabsHeaderService.setPath(value);
	}

}
