import { Component, OnInit, Input } from '@angular/core';

export interface Item {
	title: string;
}

@Component({
	selector: 'ntx-images-slider',
	templateUrl: './images-slider.component.html',
	styleUrls: ['./images-slider.component.scss']
})

export class ImagesSliderComponent implements OnInit {

	@Input() items: Item[];

	public highlightItem(event) {
		if (! event.target.classList.contains('highlighted')) {
			event.target.classList.add('highlighted');
		} else {
			event.target.classList.remove('highlighted');
		}
	}

	// https://www.w3schools.com/howto/howto_js_slideshow.asp

	constructor() {}

	ngOnInit() {
	}

	myFunc() {
		alert('funciona');
	}

	onClick(event) {
		const target = event.target;
		const pElement = target.parentElement.parentElement.parentElement;
		const pclassAttr = pElement.attributes.class;

		const doc = document.getElementsByClassName('slideshow-container');

		// console.log(pclassAttr);
		console.log(doc);
		// pElement.className  = 'slideshow-container pruebaaa';
	}

}
