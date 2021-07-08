import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'ntx-raised-icon-button',
	templateUrl: './raised-icon-button.component.html',
	styleUrls: ['./raised-icon-button.component.scss']
})
export class RaisedIconButtonComponent implements OnInit {

	@Input() item: any;
	@Input() showIconLeft: boolean;
	@Input() showIconRight: boolean;

	constructor() { }

	ngOnInit() {
	}

}
