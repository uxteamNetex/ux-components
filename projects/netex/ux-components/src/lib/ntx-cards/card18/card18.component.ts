import { Component, OnInit, Input } from '@angular/core';

export interface ntxCard18Data {
	avatar: string;
	color: string;
	title: string;
	subtitle: string;
	progress?: {
		value: number,
		requiredValue: number,
		level?: string
	};
	checked?: boolean
}

@Component({
	selector: 'ntx-card18',
	templateUrl: './card18.component.html',
	styleUrls: ['./card18.component.scss']
})
export class Card18Component implements OnInit {

	@Input() data: ntxCard18Data;

	constructor() { }

	ngOnInit() {
	}

}