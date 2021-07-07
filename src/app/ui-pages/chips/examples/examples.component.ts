import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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

export interface Chip {
	label: string;
	name: string;
	removable?: boolean;
}

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {

	constructor() { }

	item = ITEM;
	chip = CHIP;

	chips3: any[] = [
		{
			avatar: '',
			icon: '',
			label: 'Mary Joe Wright',
			name: 'UX',
			removable: '',
			color: 'primary',
			disabled: false
		},
		{
			avatar: '',
			icon: 'icon-paperclip',
			label: 'Laura Casariego',
			name: 'UX',
			removable: '',
			color: 'primary',
			disabled: true
		},
		{
			avatar: 'assets/images/perfil.jpg',
			icon: '',
			label: 'John Doe',
			name: 'UX',
			removable: 'true',
			color: 'accent',
			disabled: false
		},
		{
			avatar: 'assets/images/user_female_01.jpg',
			icon: '',
			label: 'Job',
			name: 'Example chip with a very long text',
			removable: 'true',
			color: 'accent',
			disabled: true
		}
	];

	chips2: any[] = [
		{
			label: 'Department',
			name: 'UX',
			removable: '',
			color: 'primary',
			disabled: false
		},
		{
			label: 'Department',
			name: 'UX',
			removable: '',
			color: 'primary',
			disabled: true
		},
		{
			label: 'Department',
			name: 'UX',
			removable: 'true',
			color: 'primary',
			disabled: true
		},
		{
			label: 'Job',
			name: 'Designer',
			removable: '',
			color: 'accent',
			disabled: false
		},
		{
			label: 'Job',
			name: 'Designer',
			removable: '',
			color: 'accent',
			disabled: true
		},
		{
			label: 'Department',
			name: 'Example chip with a very long name',
			removable: 'true',
			color: 'accent',
			disabled: false
		},
	];

	chips: any[] = [
		{
			label: 'Mary Joe Wright',
			avatar: ''
		},
		{
			label: 'John Doe',
			avatar: 'assets/images/perfil.jpg'
		},
		{
			label: 'Example chip with a very long name',
			avatar: 'assets/images/user_female_01.jpg'
		}
	];


	ngOnInit() {
	}

}
