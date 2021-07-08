import { Component, OnInit, Input } from '@angular/core';

export interface ToolbarAlert {
	bgColor: string;
	title: string;
	showLink: boolean;
	link: string;
}

@Component({
	selector: 'ntx-toolbar-alert',
	templateUrl: './toolbar-alert.component.html',
	styleUrls: ['./toolbar-alert.component.scss']
})
export class ToolbarAlertComponent implements OnInit {
	showAlert: boolean = true;

	@Input() bgColor: string;
	@Input() title: string;
	@Input() showLink: boolean;
	@Input() link: string;
	@Input() items: ToolbarAlert[];

	constructor() { }

	ngOnInit() {
	}

	toggleAlert(): void {
		this.showAlert = !this.showAlert;
	}

}
