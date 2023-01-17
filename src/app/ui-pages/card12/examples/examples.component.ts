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
		'ntx.xl': 4,
		'ntx.lg': 3,
		'ntx.md': 2,
		'ntx.sm': 2,
		'ntx.xs': 1
	};

	card12: any[] = [];

	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {

		this.card12 = [
			{
				title: '',
				buttons: ''
			},
			{
				title: 'Disabled state: Card title that could be longer than just two lines and will be shown with three dots',
				backgroundColor: '#279ED6',
				options: '',
				icon1: 'icon-users',
				text1: '24',
				icon2: '',
				text2: '',
				buttons: '',
				disabled: true
			},
			{
				title: 'Card title',
				backgroundColor: '#9B2761',
				options: '',
				icon1: 'icon-archive',
				text1: '8',
				icon2: 'icon-chat-bubble',
				text2: '56',
				buttons: 'true',
				disabled: ''
			},
			{
				title: 'Card without hover buttons',
				backgroundColor: '#B182A6',
				options: '',
				icon1: 'icon-archive',
				text1: '10',
				icon2: 'icon-chat-bubble',
				text2: '230',
				buttons: '',
				disabled: ''
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
