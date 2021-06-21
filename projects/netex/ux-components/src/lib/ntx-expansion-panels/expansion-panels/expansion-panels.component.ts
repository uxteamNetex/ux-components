import { Component, OnInit, ViewEncapsulation, Input,
TemplateRef, ContentChild, AfterContentInit } from '@angular/core';

@Component({
	selector: 'ntx-expansion-panels',
	templateUrl: './expansion-panels.component.html',
	styleUrls: ['./expansion-panels.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExpansionPanelsComponent implements OnInit, AfterContentInit {

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
