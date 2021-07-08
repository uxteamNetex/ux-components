import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
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

	card2: any[] = [
		{
			image: '',
			title: '',
			options: '',
		},
		{
			image: '',
			title: '',
			options: '',
		},
		{
			image: '',
			title: '',
			options: '',
		},
		{
			image: '',
			title: '',
			options: '',
		},
		{
			image: '',
			title: '',
			options: '',
		},
		{
			image: '',
			title: '',
			options: '',
		},
		{
			image: '',
			title: '',
			options: '',
		},
		{
			image: '',
			title: '',
			options: '',
		},
		{
			image: '',
			title: '',
			options: '',
		},
		{
			image: '',
			title: '',
			options: '',
    },
    {
			image: '',
			title: '',
			options: '',
		},
		{
			image: '',
			title: '',
			options: '',
		},
		{
			image: '',
			title: '',
			options: '',
		},
		{
			image: '',
			title: '',
			options: '',
		},
		{
			image: '',
			title: '',
			options: '',
		},
		{
			image: '',
			title: '',
			options: '',
		},
		{
			image: '',
			title: '',
			options: '',
		}
	];

	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {

		setTimeout(() => {

			this.card2 = [
				{
					image: 'assets/images/writting.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					options: 'true',
				},
				{
					image: 'assets/images/bg-01.png',
					title: 'Project name',
					options: 'true',
				},
				{
					image: 'assets/images/bg-02.png',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					options: 'true',
				},
				{
					image: 'assets/images/bg-03.png',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					options: 'true',
				},
				{
					image: 'assets/images/background-profile-header.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					options: 'true',
				},
				{
					image: 'assets/images/bg-01.png',
					title: 'Project name',
					options: 'true',
				},
				{
					image: 'assets/images/background-profile-header.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					options: 'true',
				},
				{
					image: 'assets/images/writting.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					options: 'true',
				},
				{
					image: 'assets/images/bg-02.png',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					options: 'true',
				},
				{
					image: 'assets/images/bg-03.png',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					options: 'true',
				},
				{
					image: 'assets/images/writting.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					options: 'true',
				},
				{
					image: 'assets/images/bg-03.png',
					title: 'Project name',
					options: 'true',
				},
				{
					image: 'assets/images/bg-02.png',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					options: 'true',
				},
				{
					image: 'assets/images/background-profile-header.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					options: 'true',
				},
				{
					image: 'assets/images/writting.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					options: 'true',
				},
				{
					image: 'assets/images/bg-01.png',
					title: 'Project name',
					options: 'true',
				},
				{
					image: 'assets/images/background-profile-header.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					options: 'true',
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

/* 	counter(i: number) {
		return new Array(i);
	} */

}
