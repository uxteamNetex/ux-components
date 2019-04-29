import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material';
export interface Option {
	value: number;
	label: string;
}
@Component({
	selector: 'ntx-form-select-thin',
	templateUrl: './form-select-thin.component.html',
	styleUrls: ['./form-select-thin.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FormSelectThinComponent implements OnInit {

	options: Option[] = [
		{label: 'No level assigned', value: 0},
		{label: 'Does not apply', value: 1},
		{label: 'Bad', value: 2},
		{label: 'Good', value: 3},
		{label: 'Excellent', value: 4},
	];

	firstOption: Option = this.options[0];

	selected = new FormControl(this.firstOption.value);

	constructor() { }

	ngOnInit() {}

}
