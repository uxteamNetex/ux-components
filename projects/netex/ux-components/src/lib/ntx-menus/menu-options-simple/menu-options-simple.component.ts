import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ntx-menu-options-simple',
	templateUrl: './menu-options-simple.component.html',
	styleUrls: ['./menu-options-simple.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class MenuOptionsSimpleComponent implements OnInit {
	
	@Input() icon: string = 'icon-more-options';

	constructor() { }

	ngOnInit() {}

}
