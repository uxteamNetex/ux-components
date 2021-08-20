import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit, AfterContentInit {
	@ViewChild('grid') grid: MatGridList;

	gridByBreakpoint = {
		'ntx.xl': 4,
		'ntx.lg': 3,
		'ntx.md': 2,
		'ntx.sm': 2,
		'ntx.xs': 1
	};

	card8: any[] = [];

	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {

		this.card8 = [
			{
				title: '',
				subtitle: '',
				checkbox: '',
			},
			{
				title: 'Disabled state: Card title that could not be longer than just one line and will be shown with three dots',
				subtitle: 'Subtitle with a very long text in two lines and three dots to see how it looks like in the card',
				checkbox: '',
				disabled: true
			},
			{
				title: 'Card title that could not be longer than just one line and will be shown with three dots',
				subtitle: 'Subtitle',
				checkbox: ''
			},
			{
				title: 'Card title that could not be longer than just one line and will be shown with three dots',
				subtitle: 'Subtitle with a very long text in two lines and three dots to see how it looks like in the card',
				checkbox: 'true'
			},
			{
				title: 'Card title',
				subtitle: 'Subtitle',
				checkbox: 'true'
			},
			{
				title: 'Card title that could not be longer than just one line and will be shown with three dots',
				subtitle: 'Subtitle',
				checkbox: 'true'
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
