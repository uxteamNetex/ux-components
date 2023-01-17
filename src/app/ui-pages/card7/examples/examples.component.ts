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
		'ntx.xl': 4,
		'ntx.lg': 3,
		'ntx.md': 2,
		'ntx.sm': 2,
		'ntx.xs': 1
	};

	card7: any[] = [];

	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {

		this.card7 = [
			{
				title: '',
				subtitle: '',
				options: '',
			},
			{
				title: 'Disabled state: Card title that could not be longer than just one line and will be shown with three dots',
				subtitle: 'Subtitle with a very long text in two lines and three dots to see how it looks like in the card',
				options: '',
				disabled: true
			},
			{
				title: 'Card title that could not be longer than just one line and will be shown with three dots',
				subtitle: 'Subtitle',
				options: '',
			},
			{
				title: 'Card title that could not be longer than just one line and will be shown with three dots',
				subtitle: 'Subtitle',
				options: 'true',
			},
			{
				title: 'Card title',
				subtitle: 'Subtitle',
				options: 'true',
			},
			{
				title: 'Card title that could not be longer than just one line and will be shown with three dots',
				subtitle: 'Subtitle',
				options: '',
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

}
