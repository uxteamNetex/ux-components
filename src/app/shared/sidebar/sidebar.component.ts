import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { TabsHeaderService } from '../services/tabs-header.service';


const LINKS = [
	'buttons',
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
	'cards',
  'chips',
  'detail-panel',
  'dialogs',
  'drag-and-drop',
  'empty-pages',
	'error-page-403',
	'error-page-404',
	'error-page-500',
	'error-page-503',
	'form-controls',
	'icons',
	'labels',
	'lists',
	'menus',
	'organisation-chart',
	'panels',
	'panel-tabs',
	'progress-bar',
	'progress-spinner',
	'sidenavs',
	'sidenav-filters',
	'table',
	'table-evaluation',
	'table-selectable',
	'tabs',
	'toolbars',
	'tree',
	'tree-check',
	'user-profile-panel'
];
const LINKSHELPERS = [
	'colours',
	'headings-and-texts',
	'margins',
  'paddings'
];
const WHATSNEWS = [
  'version401',
  'versionxxx'
];

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	links: string[] = LINKS;
  linkshelpers: string[] = LINKSHELPERS;
  whatsnews: string[] = WHATSNEWS;

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
