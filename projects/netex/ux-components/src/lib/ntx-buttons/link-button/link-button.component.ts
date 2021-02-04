import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'ntx-link-button',
	templateUrl: './link-button.component.html',
	styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent implements OnInit {

	@Input() rLink: string;
	@Input() iconLeft: string;
	@Input() iconRight: string;
	@Output() clickLink = new EventEmitter();

	constructor() { }

	ngOnInit() { }

	onClickLink() {
		this.clickLink.emit();
	}
}
