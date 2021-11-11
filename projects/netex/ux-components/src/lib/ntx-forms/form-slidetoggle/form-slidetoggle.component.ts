import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'ntx-form-slidetoggle',
	templateUrl: './form-slidetoggle.component.html',
	styleUrls: ['./form-slidetoggle.component.scss']
})
export class FormSlidetoggleComponent implements OnInit {

	@Input() color: string;
	@Input() checked: string;
	@Input() disabled: string;
	@Input() showText: boolean;

	constructor() { }

	ngOnInit() {
	}

}
