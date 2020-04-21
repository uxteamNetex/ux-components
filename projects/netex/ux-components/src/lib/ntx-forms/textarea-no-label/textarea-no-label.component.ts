import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ntx-textarea-no-label',
	templateUrl: './textarea-no-label.component.html',
	styleUrls: ['./textarea-no-label.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class TextareaNoLabelComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
