import { Component, Input, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ntx-label-error',
	templateUrl: './label-error.component.html',
	styleUrls: ['./label-error.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class LabelErrorComponent implements OnInit {

	@Input() text: string;

	constructor() { }

	ngOnInit() {}

}
