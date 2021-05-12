import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ntx-card20',
	templateUrl: './card20.component.html',
	styleUrls: ['./card20.component.scss']
})
export class Card20Component implements OnInit {

	@Input() showLink: boolean;
	@Input() link: string;
	@Input() image: string;
	@Input() title: string;
	@Input() subtitle: string;

	constructor() { }

	ngOnInit() {
	}

}
