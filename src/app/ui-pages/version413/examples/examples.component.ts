import { Component, OnInit, ViewEncapsulation, ComponentFactoryResolver, Injector, ComponentRef } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { TabsHeaderService } from 'src/app/shared/services/tabs-header.service';
import { PanelService } from '../../../shared/services/panel.service';
import { ComponentPortal } from '@angular/cdk/portal';
import { EntityDetailPanelComponent } from '../../detail-panel/entity-detail-panel/entity-detail-panel.component';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

const USER = {
	background: 'assets/images/background-profile-header.jpg',
	avatar: 'assets/images/perfil.jpg',
	name : 'Bernice Greaves',
	mail : 'berni.graves@netexlearning.com',
	phone : '+34 765432190',
	location : 'A Coruña',
	actions: [
		{
			label: 'Profile',
			link: '#'
		},
		{
			label: 'Evaluation',
			link: '#'
		},
		{
			label: 'Another action',
			link: '#'
		}
	]
};

const DATA = [
	{
		description: 'Add a competency framework and at least one competency',
		state: 'completed'
	},
	{
		description: 'Create a job role and assign it to several people',
		state: 'current'
	},
	{
		description: 'Another step to realize',
		state: 'next'
	}
];

const DATA1 = {
	title: 'Título del panel 1',
	icon: 'icon-plus-circle'
};

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {

	user = USER;
	data = DATA;
	data1 = DATA1;

	constructor(
		private tabsHeaderService: TabsHeaderService,
	) { }

	ngOnInit() {
	}

	setPath(value: string) {
		this.tabsHeaderService.setPath(value);
	}


}
