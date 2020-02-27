import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';
import { Observable } from 'rxjs';

const DATA = [
	{
		description: 'Add a competency framework and at least one competency',
		state: 'current'
	},
	{
		description: 'Create a job role and assign it to several people',
		state: 'completed'
	},
	{
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
