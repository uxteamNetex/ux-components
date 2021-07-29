import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'ntx-card21',
	templateUrl: './card21.component.html',
	styleUrls: ['./card21.component.scss']
})
export class Card21Component implements OnInit {

	@Input() image: string;
	@Input() title: string;
	@Input() bar: boolean;
	@Input() barColor: string;
	@Input() selected: boolean;

	@Output() clickCard21Event = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	public onClickEvent(_$event: any) {
        this.clickCard21Event.emit(_$event);
    }
}
