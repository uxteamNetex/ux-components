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
		'ntx.lg': 3,
		'ntx.md': 3,
		'ntx.sm': 2,
		'ntx.xs': 1
	};

	card5: any[] = [];

	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {

		this.card5 = [
			{
				title: '',
				number: '',
				options: '',
			},
			{
				title: 'Disabled state: Project name that could be longer than just one line and will be shown with three dots',
				number: '(18)',
				options: '',
				disabled: true
			},
			{
				title: 'Project name that could be longer than just one line and will be shown with three dots',
				number: '(4)',
				options: ''
			},
			{
				title: 'Project name that could be longer than just one line and will be shown with three dots',
				number: '',
				options: 'true'
			},
			{
				title: 'Project',
				number: '(64)',
				options: 'true'
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
