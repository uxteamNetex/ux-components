import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ntx-text-icon-button',
	templateUrl: './text-icon-button.component.html',
	styleUrls: ['./text-icon-button.component.scss']
})
export class TextIconButtonComponent implements OnInit {

	@Input() item: any;
	@Input() showIconLeft: boolean;
	@Input() showIconRight: boolean;

	constructor() { }

	ngOnInit() {
	}

}
