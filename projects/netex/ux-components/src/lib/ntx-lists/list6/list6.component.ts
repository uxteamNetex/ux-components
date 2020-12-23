import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

export interface Item {
	avatar: string;
	lblPrincipal: string;
	lblSecondary: {
		text?: string;
		value?: string;
		requiredValue?: string;
	}
}

@Component({
	selector: 'ntx-list6',
	templateUrl: './list6.component.html',
	styleUrls: ['./list6.component.scss'],
})
export class List6Component implements OnInit {

	@Input() items: Item[];

	constructor() { }

	ngOnInit() { }

}