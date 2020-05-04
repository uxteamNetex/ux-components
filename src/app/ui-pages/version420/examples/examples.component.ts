import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { TabsHeaderService } from 'src/app/shared/services/tabs-header.service';

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

	constructor(
		private tabsHeaderService: TabsHeaderService
	) { }

	ngOnInit() {
	}

	setPath(value: string) {
		this.tabsHeaderService.setPath(value);
	}

}
