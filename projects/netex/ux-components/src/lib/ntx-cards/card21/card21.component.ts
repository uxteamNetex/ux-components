import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ntx-card21',
	templateUrl: './card21.component.html',
	styleUrls: ['./card21.component.scss']
})
export class Card21Component implements OnInit {

	@Input() image: string;
	@Input() title: string;

	constructor() { }

	ngOnInit() {
	}

}
