import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

export interface ntxRadioButtonData {
  checked?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  id?: string;
  label?: string;
  name?: string;
  value: any;
}

@Component({
  selector: 'ntx-form-radiobutton-dark',
  templateUrl: './form-radiobutton-dark.component.html',
  styleUrls: ['./form-radiobutton-dark.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormRadiobuttonDarkComponent implements OnInit {

  @Input() data: ntxRadioButtonData[];
  @Input() id: string;
  @Input() labelPosition: 'before' | 'after';
  @Input() radioGroupName: string;
  @Input() value: any;
  @Input() radioGroupdisabled: boolean;
  @Input() checked: boolean;
  @Input() hidden: boolean;

  constructor() { }

  ngOnInit() {
  }

}
