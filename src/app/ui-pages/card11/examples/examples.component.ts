import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material';

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

	selectedCardIndex: number;

	constructor() { }

	ngOnInit() {
	}

	counter(i: number) {
		return new Array(i);
	}

	onRadiobuttonChange(event: MatRadioChange) {
		this.selectedCardIndex = event.value;
	}

	checkIfSelected(i: number) {
		return this.selectedCardIndex === i;
	}

}
