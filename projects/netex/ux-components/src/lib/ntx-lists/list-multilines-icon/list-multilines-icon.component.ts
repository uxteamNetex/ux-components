import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

export interface Section {
	title: string;
	icon: string;
	links?: SectionLink[];
}
  
export interface SectionLink {
	title: string;
	link: any;
}
  
@Component({
	selector: 'ntx-list-multilines-icon',
	templateUrl: './list-multilines-icon.component.html',
	styleUrls: ['./list-multilines-icon.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ListMultilinesIconComponent implements OnInit {

	@Input() data: Section[];
	@Output() clickEvent = new EventEmitter();

	constructor() { }

	ngOnInit() {}

	public onClickEvent(link: any) {
		console.log('Click: list-multilines-icon component: ' + link);
		this.clickEvent.emit(link);
	}

}
