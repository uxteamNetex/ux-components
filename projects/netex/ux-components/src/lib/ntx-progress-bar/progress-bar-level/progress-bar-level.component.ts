import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ntx-progress-bar-level',
	templateUrl: './progress-bar-level.component.html',
	styleUrls: ['./progress-bar-level.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ProgressBarLevelComponent implements OnInit {

	@Input() color: string;
	@Input() value: number;
	@Input() requiredValue: number;
	@Input() mode: 'determinate' | 'indeterminate' | 'buffer' | 'query' = 'determinate';

	constructor() { }

	ngOnInit() {
	}
}
