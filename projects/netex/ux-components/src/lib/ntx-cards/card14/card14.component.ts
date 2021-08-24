import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

@Component({
	selector: 'ntx-card14',
	templateUrl: './card14.component.html',
	styleUrls: ['./card14.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class Card14Component implements OnInit {

	@Input() title: string;
	@Input() subtitle: string;
	@Input() state: boolean;
	@Input() stateIcon: boolean;
	@Input() stateText: boolean;

	constructor() { }

	ngOnInit() {
	}

}
