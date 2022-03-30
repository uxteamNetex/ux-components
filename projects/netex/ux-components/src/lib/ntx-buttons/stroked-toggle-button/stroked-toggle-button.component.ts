import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ntx-stroked-toggle-button',
	templateUrl: './stroked-toggle-button.component.html',
	styleUrls: ['./stroked-toggle-button.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class StrokedToggleButtonComponent implements OnInit {

	@Input() color: string;
	@Input() disabled: string;
	@Input() iconLeft: string;
	@Input() iconRight: string;

	constructor() { }

	ngOnInit() {
	}

}
