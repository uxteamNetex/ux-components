import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressCircleComponent implements OnInit {

  @Input() color: string;
  @Input() diameter: number;
  @Input() strokeWidth: number;
  @Input() value: number;
  @Input() color2: string;
  @Input() value2: number;
  @Input() innerValueColor: string;
  @Input() innerValueFontSize: string;

  constructor() { }

  ngOnInit() {
  }

  private _showInnerValue: boolean;
	get showInnerValue(): boolean {
		return this._showInnerValue;
	} 
	@Input()
	set showInnerValue(value: boolean) {
		this._showInnerValue = coerceBooleanProperty(value);
	}

}
