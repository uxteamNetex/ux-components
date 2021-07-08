import { Component, OnInit, Input } from '@angular/core';

export interface Item {
	icon: string;
	iconColor: string;
}

@Component({
	selector: 'ntx-list10',
	templateUrl: './list10.component.html',
	styleUrls: ['./list10.component.scss']
})
export class List10Component implements OnInit {

	@Input() title: string;

	@Input() items: Item[];

	constructor() { }

	ngOnInit() {
	}

}
