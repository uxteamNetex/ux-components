import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

	data1: any = {
			avatar: undefined,
			progress: {
				value: 80,
				requiredValue: 50,
				level: '4/5'
			},
			color: '#E7575B',
			title: 'Customer oriented' ,
			subtitle: 'Europe division > 2019 competencies'
	};
	data2: any = {
		avatar: 'assets/images/app-catalogue.png',
		progress: {
			value: 42,
			requiredValue: 65,
			level: undefined
		},
		color: '#5cce88',
		title: 'Leadership' ,
		subtitle: 'Europe division > 2019 competencies'
	};
	data3: any = {
		avatar: 'assets/images/background-profile-header.jpg',
		progress: {
			value: 85,
			requiredValue: 65,
			level: '3/7'
		},
		color: '#1D5D93',
		title: 'Critical thinking & problem solving' ,
		subtitle: 'Europe division > 2019 competencies'
	};
	data4: any = {
		avatar: undefined,
		progress: {
			value: 77,
			requiredValue: 90,
			level: undefined
		},
		color: '#5cce88',
		title: 'Verbal communication' ,
		subtitle: 'Europe division > 2019 competencies'
	};

	constructor() {
	}

	ngOnInit() {
	}

}
