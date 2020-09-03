import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

export class IActionsMenuLinkComponent {
	icon?: string;
	title: string;
	click: Function;
}

export interface Item {
	label: string;
	checked: boolean;
	actions: IActionsMenuLinkComponent[];
}

@Component({
	selector: 'ntx-list4',
	templateUrl: './list4.component.html',
	styleUrls: ['./list4.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class List4Component implements OnInit {

	checkedListItemsCounter: string;

	@Input() listTitle: string;
	@Input() actionLabel: string;
	@Input() actionIcon: string;
	@Input() actionRouterLink: string;
	@Input() items: Item[];

	@Output() checkboxChange = new EventEmitter<MatCheckboxChange>();
	@Output() labelClick = new EventEmitter();
	@Output() actionClick = new EventEmitter();

	constructor() { }

	ngOnInit() { 
		this.checkedListItemsCounter = this.updateCheckedListItemsCounter(this.items);
	}

	onClickLabel() {
		this.labelClick.emit();
	}

	onActionClick() {
		this.actionClick.emit();
	}

	onChangeCheckbox(event: MatCheckboxChange, item: Item) {
		item.checked = event.checked;
		this.checkedListItemsCounter = this.updateCheckedListItemsCounter(this.items);
		this.checkboxChange.emit(event);
	}

	updateCheckedListItemsCounter(items: Item[]): string {
		return (items.filter((element) => element.checked)).length + '/' + this.items.length;
	}

}
