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
		'ntx.xl': 2,
		'ntx.lg': 1,
		'ntx.md': 1,
		'ntx.sm': 1,
		'ntx.xs': 1
	};

	card10: any[] = [];

	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {

		this.card10 = [
			{
				number: '10',
				title: 'Disabled state: Enter a title...',
				description: 'Enter a description...',
				progress: '87',
				disabled: true
			},
			{
				number: '7',
				title: 'Enter a title...',
				description: 'Enter a description...',
				progress: '12'
			},
			{
				number: '32',
				title: 'Enter a title...',
				description: 'Enter a description...',
				progress: '56'
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
