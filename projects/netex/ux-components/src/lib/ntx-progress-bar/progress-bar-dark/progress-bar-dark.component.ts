import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-progress-bar-dark',
  templateUrl: './progress-bar-dark.component.html',
  styleUrls: ['./progress-bar-dark.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressBarDarkComponent implements OnInit {

  @Input() color!: 'primary' | 'success' | 'error' | 'green-lime';
  @Input() value: number;
  @Input() requiredValue: number;

  constructor() { }

  ngOnInit() {
  }

  getClasses() {
		var color = this.color || '';
		return [color , 'ntx-progress-bar-dark'];
	}

}
