import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ntx-list-sidemenu',
	templateUrl: './list-sidemenu.component.html',
	styleUrls: ['./list-sidemenu.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ListSidemenuComponent implements OnInit {

	@Input() user: any;
	@Input() showBadge: boolean;
	@Input() showIcon: boolean;

	constructor() { }

	ngOnInit() {
	}

}
