import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
export interface Data {
	title: string;
	description: string;
}
@Component({
	selector: 'ntx-card13',
	templateUrl: './card13.component.html',
	styleUrls: ['./card13.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class Card13Component implements OnInit {

	data: Data = {
		title: 'Competency title with a very long text',
		description: 'Description in a few words that could be one or two lines maximum and then three dots'
	};

	selected: boolean;

	constructor() { }

	ngOnInit() {
	}

	onCardCheckboxChange(event: MatCheckboxChange) {
		this.selected = event.checked;
	}

}
