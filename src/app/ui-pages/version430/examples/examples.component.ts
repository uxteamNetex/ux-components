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

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {

	item = ITEM;
	chip = CHIP;

	constructor() { }

	ngOnInit() {
	}

}
