import { Component, OnInit, Input } from '@angular/core';

export interface Item {
	label: string;
	avatar: string;
	color: string;
	progress: {
		value: number,
		level: string
	};
}

@Component({
	selector: 'ntx-list1',
	templateUrl: './list1.component.html',
	styleUrls: ['./list1.component.scss'],
})

export class List1Component implements OnInit {

	@Input() data: Item[];

	constructor() { }

	ngOnInit() { }

}
