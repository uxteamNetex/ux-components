import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

export interface Item {
	labelPrincipal: string;
	labelSecondary: string;
	labelRouterLink: string;
}

@Component({
	selector: 'ntx-list5',
	templateUrl: './list5.component.html',
	styleUrls: ['./list5.component.scss'],
})
export class List5Component implements OnInit {

	@Input() items: Item[];
	@Input() bulletType: 'badge' | 'icon';
	@Input() badgeColor: string; 
	@Input() iconColor: string; 
	@Input() iconName: string;

	private _showBullet: boolean;
	get showBullet(): boolean {
		return this._showBullet;
	} 
	@Input()
	set showBullet(value: boolean) {
		this._showBullet = coerceBooleanProperty(value);
	}

	private _showDivider: boolean;
	get showDivider(): boolean {
		return this._showDivider;
	} 
	@Input()
	set showDivider(value: boolean) {
		this._showDivider = coerceBooleanProperty(value);
	}

	@Output() labelClick = new EventEmitter();

	constructor() { }

	ngOnInit() { }

	onLabelClick() {
		this.labelClick.emit();
	}

}