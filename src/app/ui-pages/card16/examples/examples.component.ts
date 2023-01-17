import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';
import { Observable } from 'rxjs';

const DATA = [
	{
		checked: false,
		description: '',
		state: 'completed'
	},
	{
		checked: true,
		description: 'Add a competency framework and at least one competency',
		state: 'completed'
	},
	{
		check: true,
		description: 'Create a job role and assign it to several people',
		state: 'current',
		link: 'link'
	},
	{
		check: true,
		description: 'Another step to realize',
		state: 'next'
	}
];

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

	data: any[];

	constructor() {
		this.data = DATA;
	 }

	ngOnInit() {
	}

}
