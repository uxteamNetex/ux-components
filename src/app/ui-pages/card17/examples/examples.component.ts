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

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

	data1: Object;
	data2: Object;
	data3: Object;
	data4: Object;

	constructor() {
		this.data1 = DATA1;
		this.data2 = DATA2;
		this.data3 = DATA3;
		this.data4 = DATA4;
	}

	ngOnInit() {
	}

}
