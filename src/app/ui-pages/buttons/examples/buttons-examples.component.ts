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

const RAISEDICONBUTTON = {
	actions: [
		{
			label: 'Link',
			color: '#D1F057',
			icon: 'icon-paperclip',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Next',
			color: 'primary',
			icon: 'icon-chevron-right',
			showIconLeft: false,
			showIconRight: true,
			disabled: 'disabled'
		},
		{
			label: 'Previous',
			color: 'accent',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Action',
			color: 'accent',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: 'disabled'
		}
	]
};
const STROKEDBUTTON = {
	actions: [
		{
			label: 'Link',
			state: 'primary',
			active: '',
			disabled: ''
		},
		{
			label: 'Button',
			state: 'primary',
			active: '',
			disabled: 'disabled'
		},
		{
			label: 'Action',
			state: 'accent',
			active: '',
			disabled: ''
		},
		{
			label: 'Active action',
			state: 'accent',
			active: 'active',
			disabled: ''
		},
		{
			label: 'Action',
			state: 'accent',
			active: '',
			disabled: 'disabled'
		},
		{
			label: 'Action',
			state: 'white',
			active: '',
			disabled: ''
		},
		{
			label: 'Action',
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
			label: 'Next',
			color: 'primary',
			icon: 'icon-chevron-right',
			showIconLeft: false,
			showIconRight: true,
			disabled: 'disabled'
		},
		{
			label: 'Previous',
			color: 'accent',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Action',
			color: 'accent',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: 'disabled'
		},
		{
			label: 'Action',
			color: 'white',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Action',
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
			label: 'Next',
			color: 'primary',
			icon: 'icon-chevron-right',
			showIconLeft: false,
			showIconRight: true,
			disabled: 'disabled'
		},
		{
			label: 'Previous',
			color: 'accent',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Action',
			color: 'accent',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: 'disabled'
		},
		{
			label: 'Action',
			color: 'white',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Action',
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
	raisedIconButton = RAISEDICONBUTTON;
	strokedButton = STROKEDBUTTON;
	strokedIconButton = STROKEDICONBUTTON;
	textIconButton = TEXTICONBUTTON;

	buttonTypes: ButtonType[];
	isLoading: boolean;

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
