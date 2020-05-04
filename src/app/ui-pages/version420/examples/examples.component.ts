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

	list1: Item1[] = [
		{
			label: 'Customer oriented',
			avatar: undefined,
			color: '#E7575B',
			progress: {
				value: 40,
				level: '3/5'
			}
		},
		{
			label: 'Leadership',
			avatar: 'assets/images/app-catalogue.png',
			color: '#5cce88',
			progress: {
				value: 80,
				level: '4/7'
			}
		},
		{
			label: 'Organisation',
			avatar: 'assets/images/app-community.png',
			color: '#EE9A37',
			progress: {
				value: 75,
				level: '3/7'
			}
		},
		{
			label: 'Verbal communication',
			avatar: undefined,
			color: '#5cce88',
			progress: {
				value: 68,
				level: '4/9'
			}
		},
		{
			label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			avatar: undefined,
			color: '#41545D',
			progress: {
				value: 33,
				level: '2/5'
			}
		},
		{
			label: 'Critical thinking & problem solving',
			avatar: 'assets/images/background-profile-header.jpg',
			color: '#1D5D93',
			progress: {
				value: 88,
				level: '5/8'
			}
		}
	];

}
