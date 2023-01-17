import { Component, OnInit, ViewEncapsulation, Input,
	TemplateRef, ContentChild, AfterContentInit } from '@angular/core';

@Component({
	selector: 'ntx-expansion-panel2',
	templateUrl: './expansion-panel2.component.html',
	styleUrls: ['./expansion-panel2.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExpansionPanel2Component implements OnInit, AfterContentInit {

	@Input() data: any;
	@Input() iconArrow: string;

	constructor() { }
	@ContentChild('header') headerTemplateRef: TemplateRef<any>;
	@ContentChild('body') bodyTemplateRef: TemplateRef<any>;

	ngOnInit() {
	}
	ngAfterContentInit() {
	}

}
