import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

export class IActionsMenuLinkComponent {
	showmenuOptions?: boolean;
	showIconOptions?: boolean;
	showDivider?: boolean;
	showButtons?: boolean;
	iconOptions: string;
	title: string;
	buttonText: string;
	click: Function;
	disabled: boolean;
}

@Component({
	selector: 'ntx-menu-options',
	templateUrl: './menu-options.component.html',
	styleUrls: ['./menu-options.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class MenuOptionsComponent implements OnInit {

	@Input() showmenuOptions: any;
	@Input() showIconOptions: any;
	@Input() showDivider: any;
	@Input() showButtons: any;
	@Input() icon: string;
	@Input() disabled: boolean;
	@Input() title: string;
	@Input() buttonText: string;
	@Input() iconOptions: string;
	@Input() actions: IActionsMenuLinkComponent[];

	constructor() { }

	ngOnInit() {}

}
