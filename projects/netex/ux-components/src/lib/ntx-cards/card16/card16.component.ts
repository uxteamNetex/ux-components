import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ntx-card16',
	templateUrl: './card16.component.html',
	styleUrls: ['./card16.component.scss']
})
export class Card16Component implements OnInit {

	@Input() data: any;

	constructor() { }

	ngOnInit() {}

}
