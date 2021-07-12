import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ntx-card22',
	templateUrl: './card22.component.html',
	styleUrls: ['./card22.component.scss']
})
export class Card22Component implements OnInit {

	@Input() image: string;
	@Input() title: string;
	@Input() subtitle: string;

	constructor() { }

	ngOnInit() {
	}

}
