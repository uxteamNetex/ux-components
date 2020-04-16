import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
	selector: 'app-menus-examples',
	templateUrl: './menus-examples.component.html',
	styleUrls: ['./menus-examples.component.scss']
})
export class MenusExamplesComponent implements OnInit {

	menulinkData: { title: string; icon: string; actions: { icon: string; title: string; click: () => void; }[]; };

	constructor(private dashboardService: DashboardService) { }

	apps: any[];

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
}
