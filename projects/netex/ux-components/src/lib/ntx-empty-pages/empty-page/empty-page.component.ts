import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ntx-empty-page',
	templateUrl: './empty-page.component.html',
	styleUrls: ['./empty-page.component.scss']
})
export class EmptyPageComponent implements OnInit {

	@Input() item: any;


	constructor() { }

	ngOnInit() {
	}

}
