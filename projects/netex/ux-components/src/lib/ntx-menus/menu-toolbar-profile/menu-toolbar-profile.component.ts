import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

export interface IActionsMenuLinkComponent {
	showUserInfo?: boolean;
	logo: string;
	logoName: string;
	title: string;
	subtitle: string;
	url: string;
	link: string;
	image: string;
	click: Function;
	showButton?: boolean;
	titleButton: string;
	imageButton: string;
	showMenuOption?: boolean;
	menuOptionText: string;
	showMenuOptionBadge?: boolean;
	showDivider?: boolean;
}

@Component({
	selector: 'ntx-menu-toolbar-profile',
	templateUrl: './menu-toolbar-profile.component.html',
	styleUrls: ['./menu-toolbar-profile.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class MenuToolbarProfileComponent implements OnInit {

	@Input() showUserInfo: any;
	@Input() logo: string;
	@Input() logoName: string;
	@Input() title: string;
	@Input() subtitle: string;
	@Input() url: string;
	@Input() link: string;
	@Input() image: string;
	@Input() showBadge: boolean;
	@Input() userImage: string;
	@Input() userName: string;
	@Input() actions: IActionsMenuLinkComponent[];
	@Input() showButton: any;
	@Input() titleButton: string;
	@Input() imageButton: string;
	@Input() showMenuOption: any;
	@Input() menuOptionText: string;
	@Input() showMenuOptionBadge: any;
	@Input() showDivider: any;

	constructor() { }

	ngOnInit() {
	}

}
