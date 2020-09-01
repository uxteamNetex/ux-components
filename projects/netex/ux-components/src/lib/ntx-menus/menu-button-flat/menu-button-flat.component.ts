import { Component, OnInit, Input } from '@angular/core';

export class IActionsMenuButtonFlatComponent {
	icon?: string;
	title: string;
	click: Function;
}

@Component({
	selector: 'ntx-menu-button-flat',
	templateUrl: './menu-button-flat.component.html',
	styleUrls: ['./menu-button-flat.component.scss']
})
export class MenuButtonFlatComponent implements OnInit {

	@Input() actions: IActionsMenuButtonFlatComponent[];
	@Input() icon: string;
	@Input() title: string;

	constructor() { }

	ngOnInit() { }

}