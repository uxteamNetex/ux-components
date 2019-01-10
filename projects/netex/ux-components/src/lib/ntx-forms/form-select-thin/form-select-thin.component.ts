import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Option {
  value: string;
  viewValue: string;
  disabled: boolean;
  option: string;
}

@Component({
  selector: 'ntx-form-select-thin',
  templateUrl: './form-select-thin.component.html',
  styleUrls: ['./form-select-thin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormSelectThinComponent implements OnInit {

  disableSelect = new FormControl(false);

  selected = 'option-0';

  constructor() { }

  ngOnInit() {
  }

}
