import { Component, OnInit } from '@angular/core';

export interface LabelRound {
	text: string;
	color: string;
	textcolor: string;
}

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

	labelRound: LabelRound[] = [
		{
			text: '6',
			color: 'utils--bc-grey-200',
			textcolor: 'utils--text-grey-700',
		},
		{
			text: '26',
			color: 'utils--bc-content',
			textcolor: 'utils--text-white',
		},
		{
			text: '126',
			color: 'utils--bc-primary',
			textcolor: 'utils--text-white',
		},
		{
			text: 'Ejemplo de label con texto muy largo',
			color: 'utils--bc-warning',
			textcolor: 'utils--text-white',
		}
	];

	constructor() { }

	ngOnInit() {
	}

}
