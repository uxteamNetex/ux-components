import { Component, OnInit, Input } from '@angular/core';

export interface Item {
	positionClass: string;
	firstLabel: string;
	firstLabelBgColor: string;
	firstLabelColor: string;
	secondLabel: string;
	thirdLabel: string;
	badgeBgColor: string;
	fourthLabel: string;
}

@Component({
	selector: 'ntx-list8',
	templateUrl: './list8.component.html',
	styleUrls: ['./list8.component.scss']
})
export class List8Component implements OnInit {

	@Input() items: Item[];

	constructor() { }

	ngOnInit() {
	}

}
