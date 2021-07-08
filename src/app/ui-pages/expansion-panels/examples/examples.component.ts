import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

	panelEmpty = [
		{
			'header': 'This is the panel header',
			'body': 'This is the panel body',
		},
		{
			'header': 'This is the panel header 2',
			'body': 'This is the panel body 2',
		},
		{
			'header': 'This is the panel header 3',
			'body': 'This is the panel body 3',
		}
	];

	panel = [
		{
			'name': 'Historia y ciencias sociales',
			'image': 'assets/images/app-catalogue.png',
			'note': '7,5',
			'noteNumber': '75',
			'color': 'success',
			'noteAverage': '3,5',
			'noteAverageNumber': '35',
			'colorAverage': 'error',
			'imageBody': 'assets/images/app-community.png',
			'nameBody': 'Ciencias',
			'noteBody': '5,5',
			'noteAverageBody': '9'
		},
		{
			'name': 'Matemáticas avanzadas',
			'image': 'assets/images/bg-01.png',
			'note': '5',
			'noteNumber': '50',
			'color': 'success',
			'noteAverage': '8,5',
			'noteAverageNumber': '85',
			'colorAverage': 'success',
			'imageBody': 'assets/images/bg-02.png',
			'nameBody': 'Caligrafía',
			'noteBody': '2,5',
			'noteAverageBody': '6'
		}
	];


	constructor() { }

	ngOnInit() {
	}

}
