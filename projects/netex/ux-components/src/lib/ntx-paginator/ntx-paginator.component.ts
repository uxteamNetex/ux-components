import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
	selector: 'ntx-paginator',
	templateUrl: './ntx-paginator.component.html',
	styleUrls: ['./ntx-paginator.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class NtxPaginatorComponent implements OnInit {

	// Inputs
	@Input() length: number;
	@Input() pageSize: number;
	@Input() pageSizeOptions: number[];
	@Input() position: ('left' | 'center' | 'right');

	// Output
	pageEvent: PageEvent;

	constructor() { }

	ngOnInit() {
	}

}
