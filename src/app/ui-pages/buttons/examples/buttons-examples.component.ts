import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ButtonTypesService } from '../buttonTypes.service';
import { ButtonType } from '../buttonType.interface';

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
const STROKEDBUTTON = {
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
const STROKEDICONBUTTON = {
	actions: [
		{
			label: 'Link',
			color: 'primary',
			icon: 'icon-paperclip',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Siguiente',
			color: 'primary',
			icon: 'icon-chevron-right',
			showIconLeft: false,
			showIconRight: true,
			disabled: 'disabled'
		},
		{
			label: 'Anterior',
			color: 'accent',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Acción',
			color: 'accent',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: 'disabled'
		},
		{
			label: 'Acción',
			color: 'white',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Acción',
			color: 'white',
			icon: 'icon-chevron-right',
			showIconLeft: false,
			showIconRight: true,
			disabled: 'disabled'
		}
	]
};
const TEXTICONBUTTON = {
	actions: [
		{
			label: 'Link',
			color: 'primary',
			icon: 'icon-paperclip',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Siguiente',
			color: 'primary',
			icon: 'icon-chevron-right',
			showIconLeft: false,
			showIconRight: true,
			disabled: 'disabled'
		},
		{
			label: 'Anterior',
			color: 'accent',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Acción',
			color: 'accent',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: 'disabled'
		},
		{
			label: 'Acción',
			color: 'white',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Acción',
			color: 'white',
			icon: 'icon-chevron-right',
			showIconLeft: false,
			showIconRight: true,
			disabled: 'disabled'
		}
	]
};

@Component({
	selector: 'app-buttons-examples',
	templateUrl: './buttons-examples.component.html',
	styleUrls: ['./buttons-examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ButtonsExamplesComponent implements OnInit {

	item2 = ITEM2;
	strokedButton = STROKEDBUTTON;
	strokedIconButton = STROKEDICONBUTTON;
	textIconButton = TEXTICONBUTTON;

	buttonTypes: ButtonType[];

	constructor(
		private buttonTypesService: ButtonTypesService
	) { }

	ngOnInit() {
		this.getButtonTypes();
	}

	getButtonTypes(): void {
		this.buttonTypesService.getButtonTypes().subscribe(
			result => {
				this.buttonTypes = result;
			}
		);
	}
}
