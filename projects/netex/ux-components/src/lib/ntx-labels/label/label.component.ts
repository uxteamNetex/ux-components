import { getLocaleEraNames } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'ntx-label',
	templateUrl: './label.component.html',
	styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

	@Input() text: string;
	@Input() color: string ;

	constructor() { }

	ngOnInit() { }

}