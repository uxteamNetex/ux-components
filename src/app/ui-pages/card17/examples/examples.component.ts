import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';
import { Observable } from 'rxjs';

const DATA1 = {
	title: 'Título del panel 1',
	showLink: true,
	icon: 'icon-plus-circle',
};
const DATA2 = {
	title: 'Título del panel 2',
	showLink: true,
	icon: 'icon-pencil'
};
const DATA3 = {
	title: 'Título del panel 3',
	iconTitle: 'icon-calendar',
	iconTitleColor: 'utils--text-grey-700',
};
const DATA4 = {
	title: 'Título del panel 4',
	iconTitle: 'icon-reports',
	iconTitleColor: 'utils--text-grey-700',
	showSubtitle: true,
	subtitle: 'Subtítulo',
};
const DATA5 = {
	title: '',
	showSubtitle: true,
	subtitle: '',
};
const DATA6 = {
	title: 'Título del panel 1',
	showLink: true,
	icon: 'icon-plus-circle',
	disabled: true,
};

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
	@ViewChild('grid') grid: MatGridList;

	gridByBreakpoint = {
		'ntx.xl': 1,
		'ntx.lg': 1,
		'ntx.md': 1,
		'ntx.sm': 1,
		'ntx.xs': 1
	};

	data1: Object;
	data2: Object;
	data3: Object;
	data4: Object;
	data5: Object;
	data6: Object;

	constructor(private observableMedia: ObservableMedia) {
		this.data1 = DATA1;
		this.data2 = DATA2;
		this.data3 = DATA3;
		this.data4 = DATA4;
		this.data5 = DATA5;
		this.data6 = DATA6;
	}

	ngOnInit() {
	}

	// tslint:disable-next-line:use-life-cycle-interface
	ngAfterContentInit() {
		this.observableMedia.asObservable().subscribe((change: MediaChange) => {
			this.grid.cols = this.gridByBreakpoint[change.mqAlias];
		});
	}

}
