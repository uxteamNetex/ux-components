import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'ntx-card10',
	templateUrl: './card10.component.html',
	styleUrls: ['./card10.component.scss']
})
export class Card10Component implements OnInit {

	@Output() close = new EventEmitter();
	
	constructor() { }

	ngOnInit() {}

	public onClose() {
		this.close.emit();
	}

}
