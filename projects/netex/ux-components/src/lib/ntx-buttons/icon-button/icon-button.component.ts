import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'ntx-icon-button',
	templateUrl: './icon-button.component.html',
	styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

	@Input() color: string;
	@Input() disabled: string;
	@Input() iconName: string;
	@Input() text: string;

	private _showBorder: boolean;
	get showBorder(): boolean {
		return this._showBorder;
	} 
	@Input()
	set showBorder(value: boolean) {
		this._showBorder = coerceBooleanProperty(value);
	}

	constructor() { }

	ngOnInit() { }

}
