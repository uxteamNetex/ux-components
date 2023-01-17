import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

@Component({
	selector: 'ntx-card8',
	templateUrl: './card8.component.html',
	styleUrls: ['./card8.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class Card8Component implements OnInit {

	@Input() title: string;
	@Input() subtitle: string;
	@Input() checkbox: boolean;
	@Input() disabled: boolean;
	@Input() selected: boolean;

	constructor() { }

	ngOnInit() { }

	onCardCheckboxChange(event: MatCheckboxChange) {
		this.selected = event.checked;
	}

}
