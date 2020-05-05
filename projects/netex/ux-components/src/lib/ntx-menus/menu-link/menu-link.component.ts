import { Component, OnInit, Input } from '@angular/core';

export class IActionsMenuLinkComponent {
	icon?: string;
	title: string;
	click: Function;
}

@Component({
	selector: 'ntx-menu-link',
	templateUrl: './menu-link.component.html',
	styleUrls: ['./menu-link.component.scss']
})
export class MenuLinkComponent implements OnInit {

	@Input() title: string;
	@Input() icon: string;
	@Input() actions: IActionsMenuLinkComponent[];

	constructor() { }

	ngOnInit() {
	}

}
