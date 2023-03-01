import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { elementAt } from 'rxjs/operators';

export interface radioButtonElement {
  title?: string;
  description?: string;
  value: any;
}

@Component({
  selector: 'ntx-form-radio-button-group-simple',
  templateUrl: './form-radio-button-group-simple.component.html',
  styleUrls: ['./form-radio-button-group-simple.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormRadioButtonGroupSimpleComponent implements OnInit {

  @Input() data: radioButtonElement[];
  private _hideRadioButtons: boolean;
	get hideRadioButtons(): boolean {
		return this._hideRadioButtons;
	} 
	@Input()
	set hideRadioButtons(value: boolean) {
		this._hideRadioButtons = coerceBooleanProperty(value);
	}

  @Output() radioButtonChange = new EventEmitter<MatRadioChange>();

  selectedElement: radioButtonElement;

  constructor() { }

  ngOnInit() {
  }

  onChangeRadioButton(event: MatRadioChange, element) {
    this.selectedElement = element;
		this.radioButtonChange.emit(event);
	}

}
