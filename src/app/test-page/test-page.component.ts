import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';

@Component({
	selector: 'app-test-page',
	templateUrl: './test-page.component.html',
	styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

	// clickedElement : Renderer2;
	isLoading : boolean;

	constructor() {}

	ngOnInit() {}

	// onClickButton(element: Renderer2) {
	// 	this.clickedElement = element;
	// }
	
	// isClicked(element: Renderer2) {
	// 	// setTimeout(() => {
	// 	// 	this.clickedElement = undefined },8000
	// 	// );
	// 	return element === this.clickedElement;
	// }

}