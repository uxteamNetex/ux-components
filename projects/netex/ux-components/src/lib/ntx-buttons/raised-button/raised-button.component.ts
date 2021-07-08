import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ntx-raised-button',
	templateUrl: './raised-button.component.html',
	styleUrls: ['./raised-button.component.scss']
})
export class RaisedButtonComponent implements OnInit {

	@Input() color: string;
	@Input() disabled: string;

	constructor() { }

	ngOnInit() {}

}
