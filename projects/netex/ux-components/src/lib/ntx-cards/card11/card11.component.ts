import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';
import { MatRadioChange } from '@angular/material';

@Component({
	selector: 'ntx-card11',
	templateUrl: './card11.component.html',
	styleUrls: ['./card11.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class Card11Component implements OnInit {

	data: any = {
		title: 'Card title lorem ipsum dolor sit amet consectetuer adipiscing',
		description: 'Card subtitle lorem ipsum dolor sit amet consectetuer lorem ipsum dolor sit amet consectetuer',
		rank: '6'
	};

	@Input() color: string;
	@Input() value: number;
	@Input() selected: boolean;

	@Output() radiobuttonChange = new EventEmitter<MatRadioChange>();

	constructor() { }

	ngOnInit() {
	}

	onChangeRadiobutton(event: MatRadioChange) {
		this.radiobuttonChange.emit(event);
	}

}
