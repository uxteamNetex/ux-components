import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

@Component({
	// tslint:disable-next-line:indent
	selector: 'ntx-card8',
	templateUrl: './card8.component.html',
	styleUrls: ['./card8.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class Card8Component implements OnInit {

	data: any = {
		title: 'Competency title with a very long text',
		description: 'Description in a few words that could be one or two lines maximum and then three dots'
	};

	selected: boolean;

	constructor() { }

	ngOnInit() { }

	onCardCheckboxChange(event: MatCheckboxChange) {
		this.selected = event.checked;
	}

}
