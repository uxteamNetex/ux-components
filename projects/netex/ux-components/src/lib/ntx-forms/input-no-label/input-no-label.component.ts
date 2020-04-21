import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ntx-input-no-label',
	templateUrl: './input-no-label.component.html',
	styleUrls: ['./input-no-label.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class InputNoLabelComponent implements OnInit {

	@Input() placeholder: string;

	constructor() { }

	ngOnInit() {
	}

}
