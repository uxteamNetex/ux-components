import { Component, Input, OnInit } from '@angular/core';

export interface Label {
	text: string;
	color: string;
	textcolor: string;
}

@Component({
	selector: 'ntx-label-round',
	templateUrl: './label-round.component.html',
	styleUrls: ['./label-round.component.scss']
})
export class LabelRoundComponent implements OnInit {

	@Input() labels: Label[];
	@Input() text: string;
	@Input() color: string;
	@Input() textcolor: string;

	constructor() { }

	ngOnInit() {
	}

}
