import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

@Component({
	selector: 'ntx-card13',
	templateUrl: './card13.component.html',
	styleUrls: ['./card13.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class Card13Component implements OnInit {

	@Input() title: string;
	@Input() subtitle: string;
	@Input() checkbox: boolean;
	@Input() select: boolean;
	@Input() disabled: boolean;
	@Input() selected: boolean;

	constructor() { }

	ngOnInit() {
	}

	onCardCheckboxChange(event: MatCheckboxChange) {
		this.selected = event.checked;
	}

}
