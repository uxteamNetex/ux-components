import { Component, OnInit, Input } from '@angular/core';

export interface Item {
	title: string;
	titleColor: string;
	subtitle: string;
}

@Component({
	selector: 'ntx-list9',
	templateUrl: './list9.component.html',
	styleUrls: ['./list9.component.scss']
})
export class List9Component implements OnInit {

	@Input() items: Item[];

	constructor() { }

	ngOnInit() {
	}

}
