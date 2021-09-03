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

	card22: any[] = [];

	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {

		this.card22 = [
			{
				image: '',
				title: '',
				subtitle: '',
				icon: '',
				iconName: '',
			},
			{
				image: 'assets/images/writting.jpg',
				title: 'Disabled state: Card name that could be longer than just one line and will be shown with three dots',
				subtitle: '13 contenidos',
				icon: 'Card bloqueada',
				iconName: 'icon-lock',
				disabled: true
			},
			{
				image: 'assets/images/background-profile-header.jpg',
				title: 'Card name',
				subtitle: '13 contenidos con texto muy largo',
				icon: 'Card destacada',
				iconName: 'icon-star'
			},
			{
				image: 'assets/images/bengal.jpg',
				title: 'Card name that could be longer than just one line and will be shown with three dots',
				subtitle: '13 contenidos',
				icon: '',
				iconName: ''
			},
			{
				image: 'assets/images/bg-01.png',
				title: 'Card name',
				subtitle: '13 contenidos con texto muy largo',
				icon: '',
				iconName: ''
			},
			{
				image: 'assets/images/bg-02.png',
				title: 'Card name that could be longer than just one line and will be shown with three dots',
				subtitle: '',
				icon: 'Card destacada',
				iconName: 'icon-star-solid'
			},
			{
				image: 'assets/images/bg-03.png',
				title: 'Card name',
				subtitle: '',
				icon: 'Card bloqueada',
				iconName: 'icon-lock'
			},
			{
				image: 'assets/images/coffee.jpg',
				title: 'Card name that could be longer than just one line and will be shown with three dots',
				subtitle: '',
				icon: '',
				iconName: ''
			},
			{
				image: 'assets/images/background-profile-header.jpg',
				title: 'Card name',
				subtitle: '',
				icon: '',
				iconName: ''
			}
		];

	}

	// tslint:disable-next-line:use-life-cycle-interface
	ngAfterContentInit() {
		this.observableMedia.asObservable().subscribe((change: MediaChange) => {
			this.grid.cols = this.gridByBreakpoint[change.mqAlias];
		});
	}

}
