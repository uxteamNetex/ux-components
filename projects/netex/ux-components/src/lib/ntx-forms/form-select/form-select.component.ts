import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Option {
  value: string;
  viewValue: string;
  disabled: boolean;
}


@Component({
  selector: 'ntx-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormSelectComponent implements OnInit {

  options: Option[] = [
    {value: 'option-0', viewValue: 'Option 1', disabled: false},
    {value: 'option-1', viewValue: 'Option 2', disabled: true},
    {value: 'option-2', viewValue: 'Option 3', disabled: false}
  ];

  disableSelect = new FormControl(false);

  constructor() { }

  ngOnInit() {
  }

}
