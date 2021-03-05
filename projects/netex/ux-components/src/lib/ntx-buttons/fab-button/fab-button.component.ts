import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ntx-fab-button',
	templateUrl: './fab-button.component.html',
	styleUrls: ['./fab-button.component.scss']
})
export class FabButtonComponent implements OnInit {

	@Input() color: string;
	@Input() disabled: string;
	@Input() iconName: string;
	@Input() text: string;

	constructor() { }

	ngOnInit() {
	}

}
