import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-form-searchbox',
  templateUrl: './form-searchbox.component.html',
  styleUrls: ['./form-searchbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormSearchboxComponent implements OnInit {

  value = '';

  constructor() { }

  ngOnInit() {
  }

}
