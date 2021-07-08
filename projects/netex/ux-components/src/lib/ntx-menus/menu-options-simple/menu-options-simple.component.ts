import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

export class IActionsMenuLinkComponent {
	showIconOptions?: boolean;
	iconOptions: string;
	title: string;
	click: Function;
	disabled: boolean;
}

@Component({
	selector: 'ntx-menu-options-simple',
	templateUrl: './menu-options-simple.component.html',
	styleUrls: ['./menu-options-simple.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class MenuOptionsSimpleComponent implements OnInit {

	@Input() icon: string;
	@Input() disabled: boolean;
	@Input() title: string;
	@Input() iconOptions: string;
	@Input() actions: IActionsMenuLinkComponent[];

	constructor() { }

	ngOnInit() {}

}
