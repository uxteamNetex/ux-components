import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

export interface Item {
	textLabel: string;
	badgeValue: number;
	labelRouterLink: string;
}

@Component({
	selector: 'ntx-list5',
	templateUrl: './list5.component.html',
	styleUrls: ['./list5.component.scss'],
})
export class List5Component implements OnInit {

	@Input() items: Item[];

	@Output() labelClick = new EventEmitter();

	constructor() { }

	ngOnInit() { }

	onLabelClick() {
		this.labelClick.emit();
	}

}