import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-form-checkbox-circle',
  templateUrl: './form-checkbox-circle.component.html',
  styleUrls: ['./form-checkbox-circle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormCheckboxCircleComponent implements OnInit {

  @Input() color: string;
  @Input() checked: string;
  @Input() disabled: string;
  @Input() hidden: string;

  constructor() { }

  ngOnInit() {
  }

}
