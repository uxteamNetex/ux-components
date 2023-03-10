import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'ntx-raised-round-button',
	templateUrl: './raised-round-button.component.html',
	styleUrls: ['./raised-round-button.component.scss']
})
export class RaisedRoundButtonComponent implements OnInit {

	@Input() color!: 'accent' | 'green' | 'primary' | 'violet' | 'black' | 'white';
	@Input() disabled = false;
	@Input() icon!: string;
	@Input() iconLeft!: string;
	@Input() iconRight!: string;
	@Input() text!: string;
	@Input() loading = false;

	@Output() clickButton = new EventEmitter<any>();


	constructor() { }

	ngOnInit() { }
	
	onClickButton(el) {
		this.clickButton.emit(el);
	}

	getClasses() {	
		var icon = this.icon ? '-icon' : '';
		var text = this.text ? '-text' : '';
		var color = this.color || '';
		return [color , 'ntx-raised-round-button', 'ntx-raised-round-button' + icon + text ];
	}

}
