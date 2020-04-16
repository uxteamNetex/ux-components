import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Item {
	label: string;
	avatar: string;
	color: string;
}

export interface Item1 {
	label: string;
	avatar: string;
	color: string;
	progress: {
		value: number;
		level: string;
	};
}

@Component({
	selector: 'app-lists-examples',
	templateUrl: './lists-examples.component.html',
	styleUrls: ['./lists-examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ListsExamplesComponent implements OnInit {

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

	list1: Item1[] = [
		{
			label: 'Customer oriented',
			avatar: undefined,
			color: '#E7575B',
			progress: {
				value: 40,
				level: '3/5'
			}
		},
		{
			label: 'Leadership',
			avatar: 'assets/images/app-catalogue.png',
			color: '#5cce88',
			progress: {
				value: 80,
				level: '4/7'
			}
		},
		{
			label: 'Organisation',
			avatar: 'assets/images/app-community.png',
			color: '#EE9A37',
			progress: {
				value: 75,
				level: '3/7'
			}
		},
		{
			label: 'Verbal communication',
			avatar: undefined,
			color: '#5cce88',
			progress: {
				value: 68,
				level: '4/9'
			}
		},
		{
			label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			avatar: undefined,
			color: '#41545D',
			progress: {
				value: 33,
				level: '2/5'
			}
		},
		{
			label: 'Critical thinking & problem solving',
			avatar: 'assets/images/background-profile-header.jpg',
			color: '#1D5D93',
			progress: {
				value: 88,
				level: '5/8'
			}
		}
	];

	constructor() { }

	ngOnInit() {
	}

}
