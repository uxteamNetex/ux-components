import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

const ITEM = {
	actions: [
		{
			label: 'Chip',
			state: 'primary',
			icon: 'icon-archive-solid',
			showIcon: false
		},
		{
			label: 'Chip',
			state: 'accent',
			icon: 'icon-archive-solid',
			showIcon: false
		},
		{
			label: 'Chip',
			state: 'yellow',
			icon: 'icon-archive-solid',
			showIcon: false
		},
		{
			label: 'Chip',
			state: 'green',
			icon: 'icon-archive-solid',
			showIcon: false
		},
		{
			label: 'Completado',
			state: 'green',
			icon: 'icon-check',
			showIcon: true
		},
		{
			label: 'No completado',
			state: 'red',
			icon: 'icon-cross',
			showIcon: true
		}
	]
};

const CHIP = {
	actions: [
		{
			state: 'primary',
			image: 'assets/images/perfil.jpg',
			label: 'Laura Lopez'
		},
		{
			state: 'accent',
			image: 'assets/images/perfil.jpg',
			label: 'Carlota Ruiz Corredera'
		}
	]
};

const ITEM2 = {
	actions: [
		{
			label: 'Acción',
			state: 'primary',
			icon: 'icon-pencil',
			showIcon: true,
			disabled: ''
		},
		{
			label: 'Acción',
			state: 'primary',
			icon: 'icon-pencil',
			showIcon: true,
			disabled: 'disabled'
		},
		{
			label: 'Acción',
			state: 'violet',
			icon: 'icon-plus',
			showIcon: true,
			disabled: ''
		},
		{
			label: 'Acción',
			state: 'violet',
			icon: 'icon-plus',
			showIcon: true,
			disabled: 'disabled'
		},
		{
			label: 'Acción',
			state: 'accent',
			icon: 'icon-pencil',
			showIcon: false,
			disabled: ''
		},
		{
			label: 'Acción',
			state: 'accent',
			icon: 'icon-pencil',
			showIcon: false,
			disabled: 'disabled'
		}
	]
};

const ITEM3 = {
	actions: [
		{
			label: 'Acción',
			state: 'primary',
			active: '',
			disabled: ''
		},
		{
			label: 'Acción',
			state: 'primary',
			active: '',
			disabled: 'disabled'
		},
		{
			label: 'Acción',
			state: 'accent',
			active: '',
			disabled: ''
		},
		{
			label: 'Acción active',
			state: 'accent',
			active: 'active',
			disabled: ''
		},
		{
			label: 'Acción',
			state: 'accent',
			active: '',
			disabled: 'disabled'
		},
		{
			label: 'Acción',
			state: 'white',
			active: '',
			disabled: ''
		},
		{
			label: 'Acción',
			state: 'white',
			active: '',
			disabled: 'disabled'
		}
	]
};

const LIST2ITEM = [
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

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {

	item = ITEM;
	chip = CHIP;
	item2 = ITEM2;

	item3 = ITEM3;
	list2Item = LIST2ITEM;

	constructor() { }

	ngOnInit() {
	}

}
