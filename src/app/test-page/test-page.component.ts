import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';

@Component({
	selector: 'app-test-page',
	templateUrl: './test-page.component.html',
	styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

	constructor() {}

	ngOnInit() {}

	src_1 = 'assets/images/user_female_01.jpg';
	src_2 = 'assets/images/user_male_01.png';
	src_3 = 'assets/images/user_female_02.jpg';
}