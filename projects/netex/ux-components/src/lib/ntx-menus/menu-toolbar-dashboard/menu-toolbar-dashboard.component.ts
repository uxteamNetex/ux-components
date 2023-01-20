import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ntx-menu-toolbar-dashboard',
	templateUrl: './menu-toolbar-dashboard.component.html',
	styleUrls: ['./menu-toolbar-dashboard.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class MenuToolbarDashboardComponent implements OnInit {

	@Input() apps: any[] = [];
	@Input() isLoading: boolean;
	@Input() isLoaded: boolean;
	@Input() failback: boolean;
	@Input() theme: string;

	failbackMsg = `For some reason you don´t have access to this resource.
                  Please try again later, and if the problem persists contact the
                  administrator.`;

	constructor() { }

	ngOnInit() {

	}

}
