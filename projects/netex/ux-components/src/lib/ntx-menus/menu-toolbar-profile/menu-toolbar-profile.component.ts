import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

export interface IUser {
	avatar: string,
	fullname: string,
	username: string,
	companyLogo: string,
	companyName: string,
	badge?: number,
	link: string,
	linkLabel: string
}

export interface IOption {
	label: string,
	badge?: number
}

export interface IMainOption {
	label: string,
	img: string
}

@Component({
	selector: 'ntx-menu-toolbar-profile',
	templateUrl: './menu-toolbar-profile.component.html',
	styleUrls: ['./menu-toolbar-profile.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class MenuToolbarProfileComponent implements OnInit {

	@Input() user!: IUser;
	@Input() mainOption!: IMainOption;
	@Input() options!: IOption[];
	@Input() isLoaded!: boolean;
	@Input() isLoading!: boolean;

	constructor() { }

	ngOnInit() { }

}
