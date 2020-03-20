import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ntx-toolbar-back-tabs',
	templateUrl: './toolbar-back-tabs.component.html',
	styleUrls: ['./toolbar-back-tabs.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ToolbarBackTabsComponent implements OnInit {

	@Input() apps: any[];
	@Input() action: ('launch' | 'finish');
	@Output() buttonClick = new EventEmitter();

	constructor() { }

	ngOnInit() { }

	onClickButton() {
		this.buttonClick.emit();
	}

}
