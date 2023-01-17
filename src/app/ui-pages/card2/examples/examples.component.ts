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

	cards: any[];

	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {

			this.cards = [
				{
					image: undefined,
					title: undefined,
					subtitle: undefined
				},
				{
					image: '',
					backgroundColor: '#E53B78',
					icon: 'icon-palette-color-solid',
					title: 'No hoverable card project name that could be longer than just one line and will be shown with three dots',
					options: 'true'
				},
				{
					image: 'assets/images/bg-01.png',
					backgroundColor: '#E53B78',
					icon: 'icon-palette-color-solid',
					title: 'P',
					subtitle: 'S',
					options: 'true',
					hoverable: true
				},
				{
					image: 'assets/images/bg-02.png',
					backgroundColor: '#E53B78',
					icon: 'icon-palette-color-solid',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle',
					disabled: true
				},
				{
					image: 'assets/images/background-profile-header.jpg',
					backgroundColor: '#E53B78',
					icon: 'icon-palette-color-solid',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					selected: true
				}
			];

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
