import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
	@ViewChild('grid') grid: MatGridList;
	@ViewChild('grid2') grid2: MatGridList;

	gridByBreakpoint = {
		'ntx.xl': 5,
		'ntx.lg': 4,
		'ntx.md': 3,
		'ntx.sm': 2,
		'ntx.xs': 1
	};

	card21Group_1: any[] = [];
	card21Group_2: any[] = [];

	selectedCardIndex: number;

	checkIfSelected(i: number) {
		return this.selectedCardIndex === i;
	}

	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {

			this.card21Group_1 = [
				{
					bar: '',
					barColor: '',
					image: '',
					title: '',
				},
				{
					bar: true,
					barColor: '',
					image: 'assets/images/writting.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					disabled: true
				},
				{
					bar: '',
					barColor: '',
					image: 'assets/images/bengal.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
				},
				{
					bar: '',
					barColor: '',
					image: 'assets/images/bg-02.png',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
				}
			];

			this.card21Group_2 = [
				{
					bar: '',
					barColor: '',
					image: '',
					title: '',
				},
				{
					bar: '',
					barColor: '',
					image: 'assets/images/coffee.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					disabled: true
				},
				{
					bar: true,
					barColor: '#5cce88',
					image: 'assets/images/bg-01.png',
					title: 'Project name'
				},
				{
					bar: '',
					barColor: '',
					image: 'assets/images/writting.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
				}
			];

	}

	handleCard21Click(i: number, item: any) {
		this.selectedCardIndex = i;
	}

}
