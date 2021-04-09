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

	card3: any[] = [
		{
			image: '',
			initials: '',
			badgeColor: '',
			title: '',
			subtitle: '',
			subtitle2: '',
			subtitle3: '',
			subtitle3Color: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			badgeColor: '',
			title: '',
			subtitle: '',
			subtitle2: '',
			subtitle3: '',
			subtitle3Color: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			badgeColor: '',
			title: '',
			subtitle: '',
			subtitle2: '',
			subtitle3: '',
			subtitle3Color: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			badgeColor: '',
			title: '',
			subtitle: '',
			subtitle2: '',
			subtitle3: '',
			subtitle3Color: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			badgeColor: '',
			title: '',
			subtitle: '',
			subtitle2: '',
			subtitle3: '',
			subtitle3Color: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			badgeColor: '',
			title: '',
			subtitle: '',
			subtitle2: '',
			subtitle3: '',
			subtitle3Color: '',
			options: '',
		}
	];

	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {
		setTimeout(() => {

			this.card3 = [
				{
					image: '',
					initials: ' ',
					badgeColor: 'orange',
					title: 'Evaluation A',
					subtitle: '20/12/2020',
					subtitle2: '9/22 Users',
					subtitle3: 'Closed',
					subtitle3Color: '#f05060',
					options: '',
				},
				{
					image: 'assets/images/bg-01.png',
					initials: '',
					badgeColor: '',
					title: 'Evaluation name that could be longer than just one line and will be shown with three dots',
					subtitle: '28/12/2020',
					subtitle2: '10/22 Users',
					subtitle3: 'Open',
					subtitle3Color: '#5cce88',
					options: 'true',
				},
				{
					image: '',
					initials: ' ',
					badgeColor: 'black',
					title: 'Another evaluation',
					subtitle: '28/12/2020',
					subtitle2: '10/22 Users',
					subtitle3: ' ',
					subtitle3Color: '',
					options: 'true',
				},
				{
					image: '',
					initials: ' ',
					badgeColor: '#B182A6',
					title: 'UX Evaluation',
					subtitle: '10/10/2019',
					subtitle2: '06/9 Users',
					subtitle3: ' ',
					subtitle3Color: '',
					options: '',
				},
				{
					image: 'assets/images/bg-02.png',
					initials: '',
					badgeColor: '',
					title: 'Agile Team Evaluation',
					subtitle: '28/12/2020',
					subtitle2: '10/22 Users',
					subtitle3: 'Closed',
					subtitle3Color: '#f05060',
					options: '',
				},
				{
					image: 'assets/images/bg-03.png',
					initials: '',
					badgeColor: '',
					title: 'Evaluation name that could be longer than just one line and will be shown with three dots',
					subtitle: '28/12/2020',
					subtitle2: '10/22 Users',
					subtitle3: 'Open',
					subtitle3Color: '#5cce88',
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

}
