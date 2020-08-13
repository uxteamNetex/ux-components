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

@Component({
	selector: 'app-buttons-examples',
	templateUrl: './buttons-examples.component.html',
	styleUrls: ['./buttons-examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ButtonsExamplesComponent implements OnInit {

	item2 = ITEM2;

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
