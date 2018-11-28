import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Option {
  value: string;
  viewValue: string;
  disabled: boolean;
}


@Component({
  selector: 'ntx-form-select-no-border',
  templateUrl: './form-select-no-border.component.html',
  styleUrls: ['./form-select-no-border.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormSelectNoBorderComponent implements OnInit {

  options: Option[] = [
    {value: 'option-0', viewValue: 'Option 1', disabled: false},
    {value: 'option-1', viewValue: 'Disabled option Lorem ipsum dolor sit amet consectetur', disabled: true},
    {value: 'option-2', viewValue: 'Option 3 with long text', disabled: false}
  ];

  selected = 'option-0';

  disableSelect = new FormControl(false);

  constructor() { }

  ngOnInit() {
  }

}
