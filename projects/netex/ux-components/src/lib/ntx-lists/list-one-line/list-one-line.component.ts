import { Component, OnInit, Input } from '@angular/core';

export interface Item {
	label: string;
	avatar: string;
	color: string;
}

@Component({
	selector: 'ntx-list-one-line',
	templateUrl: './list-one-line.component.html',
	styleUrls: ['./list-one-line.component.scss'],
})

export class ListOneLineComponent implements OnInit {

	list: Item[] = [
		{
			label: 'Customer oriented',
			avatar: undefined,
			color: '#E7575B'
		},
		{
			label: 'Leadership',
			avatar: 'assets/images/app-catalogue.png',
			color: '#5cce88'
		},
		{
			label: 'Organisation',
			avatar: 'assets/images/app-community.png',
			color: '#EE9A37'
		},
		{
			label: 'Verbal communication',
			avatar: undefined,
			color: '#5cce88'
		},
		{
			label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			avatar: undefined,
			color: '#41545D'
		},
		{
			label: 'Critical thinking & problem solving',
			avatar: 'assets/images/background-profile-header.jpg',
			color: '#1D5D93'
		}
	];

	constructor() { }

	ngOnInit() { }

}
