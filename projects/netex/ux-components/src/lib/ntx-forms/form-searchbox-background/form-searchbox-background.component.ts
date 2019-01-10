import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-form-searchbox-background',
  templateUrl: './form-searchbox-background.component.html',
  styleUrls: ['./form-searchbox-background.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormSearchboxBackgroundComponent implements OnInit {

  value = '';

  constructor() { }

  ngOnInit() {
  }

}
