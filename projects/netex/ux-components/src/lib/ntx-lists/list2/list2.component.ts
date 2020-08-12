import { Component, OnInit, Input } from '@angular/core';

export interface Item {
	label: string;
	avatar: string;
	color: string;
	progress: {
		value: number,
		requiredValue: number,
		edited: boolean
	};
	checked: boolean
}

@Component({
	selector: 'ntx-list2',
	templateUrl: './list2.component.html',
	styleUrls: ['./list2.component.scss'],
})

export class List2Component implements OnInit {

	@Input() data: Item[];

	constructor() { }

	ngOnInit() { }

}
