import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';
import { Observable } from 'rxjs';

const DATA1 = {
	title: 'Título del panel 1',
	icon: 'icon-plus-circle'
};
const DATA2 = {
	title: 'Título del panel 2',
	icon: 'icon-pencil'
};

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

	data1: Object;
	data2: Object;

	constructor() {
		this.data1 = DATA1;
		this.data2 = DATA2;
	}

	ngOnInit() {
	}

}
