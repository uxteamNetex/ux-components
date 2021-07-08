import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ntx-square-button',
	templateUrl: './square-button.component.html',
	styleUrls: ['./square-button.component.scss']
})
export class SquareButtonComponent implements OnInit {

	@Input() disabled: string;
	@Input() iconName: string;
	@Input() text: string;

	public isSelected = false;

	clickEvent() {
		this.isSelected = !this.isSelected;
	}

	constructor() { }

	ngOnInit() {
	}

}
