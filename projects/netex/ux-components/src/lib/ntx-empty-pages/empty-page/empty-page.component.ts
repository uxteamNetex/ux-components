import { Component, OnInit, Input } from '@angular/core';

const RAISEDICONBUTTON = {
	actions: [
		{
			label: 'Añadir usuarios',
			color: 'primary',
			icon: 'icon-plus',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		}
	]
};

@Component({
	selector: 'ntx-empty-page',
	templateUrl: './empty-page.component.html',
	styleUrls: ['./empty-page.component.scss']
})
export class EmptyPageComponent implements OnInit {

	raisedIconButton = RAISEDICONBUTTON;

	@Input() item: any;
	@Input() showIconLeft: boolean;
	@Input() showIconRight: boolean;


	constructor() { }

	ngOnInit() {
	}

}
