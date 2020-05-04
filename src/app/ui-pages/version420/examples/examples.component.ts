import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { TabsHeaderService } from 'src/app/shared/services/tabs-header.service';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

const USER = {
	actions: [
		{
			label: 'Recibidas',
			state: 'active',
			icon: 'icon-inbox-solid',
			link: '#',
			showBadge: true
		},
		{
			label: 'Papelera',
			state: '',
			icon: 'icon-archive-solid',
			link: '#',
			showBadge: false
		}
	]
};

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {

	user = USER;
	menulinkData: { title: string; icon: string; actions: { icon: string; title: string; click: () => void; }[]; };
	apps: any[];

	constructor(
		private dashboardService: DashboardService,
		private tabsHeaderService: TabsHeaderService
	) { }

	ngOnInit() {
		this.apps = this.dashboardService.getDashboardApps();
		this.menulinkData = {
			title: 'Click me!',
			icon: 'icon-plus-circle',
			actions: [
				{
					icon: 'icon-plus-circle',
					title: 'Create from scratch',
					click: function() { alert('You\'ve clicked in \'Create from scratch\' option'); }
				},
				{
					icon: 'icon-upload',
					title: 'Upload CSV',
					click: function() { alert('You\'ve clicked in \'Upload CSV\' option'); }
				}
			]
		};
	}

	setPath(value: string) {
		this.tabsHeaderService.setPath(value);
	}

}
