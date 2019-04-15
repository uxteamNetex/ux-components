import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
export interface Data {
	title: string;
	description: string;
}
@Component({
	selector: 'ntx-card14',
	templateUrl: './card14.component.html',
	styleUrls: ['./card14.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class Card14Component implements OnInit {

	data: Data = {
		title: 'Competency title',
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
