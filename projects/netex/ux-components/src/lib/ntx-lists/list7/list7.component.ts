import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

export interface Item {
	labelPrincipal: string;
	labelSecondary: string;
	labelTertiary: string;
	badgeBgColor: string;
}

@Component({
	selector: 'ntx-list7',
	templateUrl: './list7.component.html',
	styleUrls: ['./list7.component.scss'],
})
export class List7Component implements OnInit {

	@Input() items: Item[];
	
	constructor() { }

	ngOnInit() { }

}