import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ntx-icon-chip',
	templateUrl: './icon-chip.component.html',
	styleUrls: ['./icon-chip.component.scss']
})
export class IconChipComponent implements OnInit {

	@Input() item: any;
	@Input() showIcon: boolean;

	constructor() { }

	ngOnInit() {
	}

}
