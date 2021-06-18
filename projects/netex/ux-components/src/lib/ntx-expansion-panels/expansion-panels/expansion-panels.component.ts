import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: 'ntx-expansion-panels',
	templateUrl: './expansion-panels.component.html',
	styleUrls: ['./expansion-panels.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExpansionPanelsComponent implements OnInit {

	@Input() iconArrow: string;

	constructor() { }

	ngOnInit() {
	}

}
