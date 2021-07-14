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

	card22: any[] = [
		{
			image: '',
			title: '',
			subtitle: '',
		},
		{
			image: '',
			title: '',
			subtitle: '',
		}
	];

	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {
		setTimeout(() => {

			this.card22 = [
				{
					image: 'assets/images/writting.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: '13 contenidos',
				},
				{
					image: 'assets/images/background-profile-header.jpg',
					title: 'Project name',
					subtitle: '13 contenidos con texto muy largo',
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
