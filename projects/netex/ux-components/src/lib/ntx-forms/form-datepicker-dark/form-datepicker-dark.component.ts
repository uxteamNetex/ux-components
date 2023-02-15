import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-form-datepicker-dark',
  templateUrl: './form-datepicker-dark.component.html',
  styleUrls: ['./form-datepicker-dark.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormDatepickerDarkComponent implements OnInit {

  @Input() label: string;
  @Input() placeholder: string;

  constructor() { }

  ngOnInit() {
  }

}
