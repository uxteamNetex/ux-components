import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ntx-multi-select-options',
	templateUrl: './multi-select-options.component.html',
	styleUrls: ['./multi-select-options.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class MultiSelectOptionsComponent implements OnInit, OnChanges {

	itemsSelected: boolean;
	@Input() numSelectedItems: number;

	itemPluralMapping = {
		'=0': '0 items',
		'=1': '1 item' ,
		'other': '# items'
	};

	constructor() { }

	ngOnInit() { }

	ngOnChanges(changes: SimpleChanges) {
		this.itemsSelected = changes.numSelectedItems.currentValue;
	}

}
