import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ntx-stroked-icon-button',
	templateUrl: './stroked-icon-button.component.html',
	styleUrls: ['./stroked-icon-button.component.scss']
})
export class StrokedIconButtonComponent implements OnInit {

	@Input() item: any;
	@Input() showIconLeft: boolean;
	@Input() showIconRight: boolean;

	constructor() { }

	ngOnInit() {
	}

}
