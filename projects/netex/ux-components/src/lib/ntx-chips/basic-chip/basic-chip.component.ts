import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';

export interface Chip {
	label: string;
	avatar: string;
	icon: string;
	removable?: boolean;
	color: string;
	disabled: boolean;
}

@Component({
	selector: 'ntx-basic-chip',
	templateUrl: './basic-chip.component.html',
	styleUrls: ['./basic-chip.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class BasicChipComponent implements OnInit {

	@Input() color: string;
	@Input() disabled: boolean;
	@Input() chips: Chip[];

	remove(chip: Chip): void {
		const index = this.chips.indexOf(chip);

		if (index >= 0) {
			this.chips.splice(index, 1);
		}
	}

	constructor() { }

	ngOnInit() {
	}

}
