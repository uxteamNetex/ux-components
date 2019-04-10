import { AfterContentInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements AfterContentInit {
	@ViewChild('grid') grid: MatGridList;

	gridByBreakpoint = {
		xl: 5,
		lg: 4,
		md: 3,
		sm: 2,
		xs: 1
	};

	constructor(private observableMedia: ObservableMedia) { }

	// tslint:disable-next-line:use-life-cycle-interface
	ngOnInit() {}

	ngAfterContentInit() {
		this.observableMedia.asObservable().subscribe((change: MediaChange) => {
			this.grid.cols = this.gridByBreakpoint[change.mqAlias];
		});
	}

	counter(i: number) {
		return new Array(i);
	}

}
