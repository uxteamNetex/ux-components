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

	constructor() { }

	ngOnInit() {
	}

}
