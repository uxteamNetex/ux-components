import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ntx-basic-image-chip',
	templateUrl: './basic-image-chip.component.html',
  styleUrls: ['./basic-image-chip.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BasicImageChipComponent implements OnInit {

	@Input() chip: any;

	constructor() { }

	ngOnInit() {
	}

}
