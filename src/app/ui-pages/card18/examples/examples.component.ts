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
			buffer: 40,
			color: '#E7575B',
			title: 'Customer oriented' ,
			subtitle: 'Europe division > 2019 competencies'
	};
	data2: any = {
		avatar: 'assets/images/app-catalogue.png',
		buffer: 90,
		color: '#5cce88',
		title: 'Leadership' ,
		subtitle: 'Europe division > 2019 competencies'
	};
	data3: any = {
		avatar: 'assets/images/background-profile-header.jpg',
		buffer: 60,
		color: '#1D5D93',
		title: 'Critical thinking & problem solving' ,
		subtitle: 'Europe division > 2019 competencies'
	};
	data4: any = {
		avatar: undefined,
		buffer: 20,
		color: '#5cce88',
		title: 'Verbal communication' ,
		subtitle: 'Europe division > 2019 competencies'
	};

	constructor() {
	}

	ngOnInit() {
	}

}
