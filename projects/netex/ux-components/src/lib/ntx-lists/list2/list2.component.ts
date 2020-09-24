import { Component, OnInit, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

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
	@Input() bulletIconName: string;
	@Input() bulletIconColor: string;
	private _showGenericBullet: boolean;
	get showGenericBullet(): boolean {
		return this._showGenericBullet;
	} 
	@Input()
	set showGenericBullet(value: boolean) {
		this._showGenericBullet = coerceBooleanProperty(value);
	}

	constructor() { }

	ngOnInit() { }

}
