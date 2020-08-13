import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ntx-raised-round-button',
	templateUrl: './raised-round-button.component.html',
	styleUrls: ['./raised-round-button.component.scss']
})
export class RaisedRoundButtonComponent implements OnInit {

	@Input() item2: any;
	@Input() showIcon: boolean;

	constructor() { }

	ngOnInit() {
	}

}
