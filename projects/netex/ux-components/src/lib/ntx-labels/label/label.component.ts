import { Component, Input, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ntx-label',
	templateUrl: './label.component.html',
	styleUrls: ['./label.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class LabelComponent implements OnInit {

	@Input() text: string;

	constructor() { }

	ngOnInit() {
	}

}
