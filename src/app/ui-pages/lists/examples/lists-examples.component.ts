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

export interface Item2 {
	label: string;
	avatar: string;
	color: string;
	progress: {
		value: number;
		requiredValue: number;
		edited: boolean
	};
	checked: boolean
}

const USER = {
	actions: [
		{
			label: 'Recibidas',
			state: 'active',
			icon: 'icon-inbox-solid',
			link: '#',
			showBadge: true
		},
		{
			label: 'Papelera',
			state: '',
			icon: 'icon-archive-solid',
			link: '#',
			showBadge: false
		}
	]
};

@Component({
	selector: 'app-lists-examples',
	templateUrl: './lists-examples.component.html',
	styleUrls: ['./lists-examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ListsExamplesComponent implements OnInit {

	user = USER;

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
	list2: Item2[] = [
		{
			label: 'Customer oriented',
			avatar: undefined,
			color: '#E7575B',
			progress: {
				value: 40,
				requiredValue: 80,
				edited: true
			},
			checked: true
		},
		{
			label: 'Leadership',
			avatar: 'assets/images/app-catalogue.png',
			color: '#5cce88',
			progress: {
				value: 80,
				requiredValue: 30,
				edited: false
			},
			checked: false
		},
		{
			label: 'Organisation',
			avatar: 'assets/images/app-community.png',
			color: '#EE9A37',
			progress: {
				value: 75,
				requiredValue: 55,
				edited: false
			},
			checked: true
		},
		{
			label: 'Tidyness',
			avatar: undefined,
			color: '#5cce88',
			progress: {
				value: 32,
				requiredValue: 39,
				edited: true
			},
			checked: true
		},
		{
			label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			avatar: undefined,
			color: '#41545D',
			progress: {
				value: 33,
				requiredValue: 52,
				edited: false
			},
			checked: false
		},
		{
			label: 'Adobe XD',
			avatar: 'assets/images/background-profile-header.jpg',
			color: '#1D5D93',
			progress: {
				value: 88,
				requiredValue: 78,
				edited: false
			},
			checked: false
		},
		{
			label: 'Adobe Photoshop',
			avatar: undefined,
			color: '#7D5D55',
			progress: {
				value: 65,
				requiredValue: 78,
				edited: true
			},
			checked: true
		}
	];

	constructor() { }

	ngOnInit() {
	}

}
