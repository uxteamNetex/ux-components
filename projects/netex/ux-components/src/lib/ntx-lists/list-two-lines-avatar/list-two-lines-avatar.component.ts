import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'ntx-list-two-lines-avatar',
	templateUrl: './list-two-lines-avatar.component.html',
	styleUrls: ['./list-two-lines-avatar.component.scss']
})

export class ListTwoLinesAvatarComponent implements OnInit {

	@Input() data: any;
	@Input() showLink: boolean;
	@Input() showIcon: boolean;

	constructor() { }

	ngOnInit() {
	}

}
