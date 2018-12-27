import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-form-input-no-label',
  templateUrl: './form-input-no-label.component.html',
  styleUrls: ['./form-input-no-label.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormInputNoLabelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
