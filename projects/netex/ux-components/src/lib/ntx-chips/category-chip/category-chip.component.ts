import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';

export interface Chip {
	label: string;
	name: string;
	removable?: boolean;
	color: string;
	disabled: boolean;
}

@Component({
	selector: 'ntx-category-chip',
	templateUrl: './category-chip.component.html',
	styleUrls: ['./category-chip.component.scss']
})
export class CategoryChipComponent implements OnInit {

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
