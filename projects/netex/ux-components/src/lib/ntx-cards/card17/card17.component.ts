import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ntx-card17',
	templateUrl: './card17.component.html',
	styleUrls: ['./card17.component.scss']
})
export class Card17Component implements OnInit {

	@Input() data: any;
	@Input() showLink: boolean;
	@Input() showSubtitle: boolean;
	@Input() disabled: boolean;

	constructor() { }

	ngOnInit() { }

}
