import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

export interface ntxRadioButtonData {
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  label?: string;
  name?: string;
  value: any;
}

@Component({
  selector: 'ntx-form-radiobutton',
  templateUrl: './form-radiobutton.component.html',
  styleUrls: ['./form-radiobutton.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormRadiobuttonComponent implements OnInit {

  @Input() color: 'grey' | 'blue' | 'lightblue' | 'orange' | 'red' | 'themeDark' ;
  @Input() data: ntxRadioButtonData[];
  @Input() id: string;
  @Input() labelPosition: 'before' | 'after';
  @Input() radioGroupName: string;
  @Input() value: any;
  @Input() radioGroupdisabled: boolean;
  @Input() checked: boolean;

  constructor() {}

  ngOnInit() { }

  getClasses() {
    return this.color ? 'ntx-radiobutton-group ntx-radiobutton-group-'+ this.color : 'ntx-radiobutton-group';
	}

}
