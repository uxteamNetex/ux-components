import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'ntx-card15',
	templateUrl: './card15.component.html',
	styleUrls: ['./card15.component.scss']
})
export class Card15Component implements OnInit {

	@Input() user: any;
	@Input() badge: any;
	@Input() actions: any[];

	@Output() clickEvent = new EventEmitter();

	selectedIndex: number;

	constructor() { }

	ngOnInit() {
		this.selectedIndex = this.actions ? this.actions.findIndex(action => action.active ) : undefined;
	}

	public onClickEvent(i) {
		this.clickEvent.emit();
		this.selectedIndex = i;
	}

}
