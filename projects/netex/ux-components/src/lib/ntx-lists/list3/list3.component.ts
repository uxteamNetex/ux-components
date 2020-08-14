import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

export interface Item {
	label: string;
	icon: string;
}

@Component({
	selector: 'ntx-list3',
	templateUrl: './list3.component.html',
	styleUrls: ['./list3.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class List3Component implements OnInit {

	@Input() data: Item[];

	constructor() { }

	ngOnInit() {
	}

}
