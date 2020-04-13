import { Component, OnInit, Input } from '@angular/core';

export interface Item {
	label: string;
	avatar: string;
	color: string;
}

@Component({
	selector: 'ntx-list-one-line',
	templateUrl: './list-one-line.component.html',
	styleUrls: ['./list-one-line.component.scss'],
})

export class ListOneLineComponent implements OnInit {

	@Input() data: Item[];

	constructor() { }

	ngOnInit() { }

}
