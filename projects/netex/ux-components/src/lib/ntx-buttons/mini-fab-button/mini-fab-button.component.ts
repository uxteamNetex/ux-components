import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ntx-mini-fab-button',
	templateUrl: './mini-fab-button.component.html',
	styleUrls: ['./mini-fab-button.component.scss']
})
export class MiniFabButtonComponent implements OnInit {

	@Input() color: string;
	@Input() bgColor: string;
	@Input() disabled: string;
	@Input() iconName: string;
	@Input() text: string;

	constructor() { }

	ngOnInit() {
	}

}
