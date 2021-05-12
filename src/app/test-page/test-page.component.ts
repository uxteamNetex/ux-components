import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';

@Component({
	selector: 'app-test-page',
	templateUrl: './test-page.component.html',
	styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
	showAlert: boolean = true;

	@ViewChild('grid') grid: MatGridList;

	gridByBreakpoint = {
		'ntx.xl': 3,
		'ntx.lg': 2,
		'ntx.md': 2,
		'ntx.sm': 2,
		'ntx.xs': 1
	};

	constructor(private observableMedia: ObservableMedia) {}

	ngOnInit() {}

	toggleAlert(): void {
		this.showAlert = !this.showAlert;
	}

	ngAfterContentInit() {
		this.observableMedia.asObservable().subscribe((change: MediaChange) => {
			this.grid.cols = this.gridByBreakpoint[change.mqAlias];
		});
	}

}
