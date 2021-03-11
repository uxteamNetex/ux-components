import { Component, OnInit } from '@angular/core';

const EMPTYPAGES = {
	actions: [
		{
			icon: 'icon-users',
			title: 'Here is the title of the issue',
			description: 'Here is the description of the issue that cant have more than 2 lines of text.',
		}
	]
};

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

	emptyPages = EMPTYPAGES;

	constructor() { }

	ngOnInit() {
	}

}
