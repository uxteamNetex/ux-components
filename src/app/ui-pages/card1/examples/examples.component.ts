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
		'ntx.xl': 3,
		'ntx.lg': 2,
		'ntx.md': 2,
		'ntx.sm': 2,
		'ntx.xs': 1
	};

	card1: any[] = [
		{
			image: '',
			initials: '',
			title: '',
			subtitle: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			title: '',
			subtitle: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			title: '',
			subtitle: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			title: '',
			subtitle: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			title: '',
			subtitle: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			title: '',
			subtitle: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			title: '',
			subtitle: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			title: '',
			subtitle: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			title: '',
			subtitle: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			title: '',
			subtitle: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			title: '',
			subtitle: '',
			options: '',
		}
	];


	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {

		setTimeout(() => {

			this.card1 = [
				{
					image: 'assets/images/writting.jpg',
					initials: '',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle with a very long text in one line and three dots',
					options: 'true',
				},
				{
					image: '',
					initials: 'PN',
					title: 'Project name',
					subtitle: 'Subtitle',
					options: '',
				},
				{
					image: 'assets/images/bg-01.png',
					initials: '',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle with a very long text in one line and three dots',
					options: 'true',
				},
				{
					image: 'assets/images/bg-02.png',
					initials: '',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle with a very long text in one line and three dots',
					options: '',
				},
				{
					image: 'assets/images/bg-03.png',
					initials: '',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle with a very long text in one line and three dots',
					options: 'true',
				},
				{
					image: 'assets/images/writting.jpg',
					initials: '',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle with a very long text in one line and three dots',
					options: 'true',
				},
				{
					image: 'assets/images/writting.jpg',
					initials: '',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle with a very long text in one line and three dots',
					options: '',
				},
				{
					image: 'assets/images/bg-01.png',
					initials: '',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle with a very long text in one line and three dots',
					options: 'true',
				},
				{
					image: 'assets/images/bg-02.png',
					initials: '',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle with a very long text in one line and three dots',
					options: 'true',
				},
				{
					image: 'assets/images/bg-03.png',
					initials: '',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle with a very long text in one line and three dots',
					options: 'true',
				},
				{
					image: 'assets/images/writting.jpg',
					initials: '',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle with a very long text in one line and three dots',
					options: 'true',
				}
			];

		}, 5000);

	}

	ngAfterContentInit() {
		this.observableMedia.asObservable().subscribe((change: MediaChange) => {
			this.grid.cols = this.gridByBreakpoint[change.mqAlias];
		});
	}

}
