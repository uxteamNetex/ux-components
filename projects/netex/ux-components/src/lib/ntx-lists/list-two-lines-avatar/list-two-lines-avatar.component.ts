import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

export interface Section {
	title: string;
	subtitle: string;
	link: string;
	icon: string;
	iconColor: string;
}

@Component({
	selector: 'ntx-list-two-lines-avatar',
	templateUrl: './list-two-lines-avatar.component.html',
	styleUrls: ['./list-two-lines-avatar.component.scss']
})

export class ListTwoLinesAvatarComponent implements OnInit {

	@Input() showLink: boolean;
	@Input() showIcon: boolean;

	constructor() { }

	texts: Section[] = [
		{
			title: 'Carolina López',
			subtitle: 'carolina.lopez',
			link: 'Go to learningCloud',
			icon: 'icon-warning-solid',
			iconColor: 'utils--text-warning'
		}
	];

	ngOnInit() {
	}

}
