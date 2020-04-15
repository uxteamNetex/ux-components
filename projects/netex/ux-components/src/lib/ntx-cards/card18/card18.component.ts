import { Component, OnInit, Input } from '@angular/core';

export interface Data {
	avatar: string;
	progress: {
		value: number,
		requiredValue: number
	};
	color: string;
	title: string;
	subtitle: string;
}

@Component({
	selector: 'ntx-card18',
	templateUrl: './card18.component.html',
	styleUrls: ['./card18.component.scss']
})
export class Card18Component implements OnInit {

	@Input() data: Data;

	constructor() { }

	ngOnInit() {
	}

}
