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

	gridByBreakpoint = {
		'ntx.xl': 5,
		'ntx.lg': 4,
		'ntx.md': 3,
		'ntx.sm': 2,
		'ntx.xs': 1
	};

	card21: any[] = [
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		},
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		},
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		},
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		},
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		},
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		},
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		},
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		},
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		},
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		},
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		},
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		},
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		},
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		}
	];

	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {

		setTimeout(() => {

			this.card21 = [
				{
					bar: true,
					barColor: '',
					image: 'assets/images/writting.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
				},
				{
					bar: true,
					barColor: '#9B2761',
					image: 'assets/images/background-profile-header.jpg',
					title: 'Project name',
				},
				{
					bar: true,
					barColor: '#5cce88',
					image: 'assets/images/bg-01.png',
					title: 'Project name',
				},
				{
					bar: '',
					barColor: '',
					image: 'assets/images/bg-02.png',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
				},
				{
					bar: '',
					barColor: '',
					image: 'assets/images/bg-03.png',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
				},
				{
					bar: '',
					barColor: '',
					image: 'assets/images/coffee.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
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
					image: 'assets/images/writting.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
				},
				{
					bar: '',
					barColor: '',
					image: 'assets/images/background-profile-header.jpg',
					title: 'Project name',
				},
				{
					bar: '',
					barColor: '',
					image: 'assets/images/bg-01.png',
					title: 'Project name',
				},
				{
					bar: '',
					barColor: '',
					image: 'assets/images/bg-02.png',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
				},
				{
					bar: '',
					barColor: '',
					image: 'assets/images/bg-03.png',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
				},
				{
					bar: '',
					barColor: '',
					image: 'assets/images/coffee.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
				},
				{
					bar: '',
					barColor: '',
					image: 'assets/images/bengal.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
				}
			];

		}, 5000);

	}

	// tslint:disable-next-line:use-life-cycle-interface
	ngAfterContentInit() {
		this.observableMedia.asObservable().subscribe((change: MediaChange) => {
			this.grid.cols = this.gridByBreakpoint[change.mqAlias];
		});
	}

}
