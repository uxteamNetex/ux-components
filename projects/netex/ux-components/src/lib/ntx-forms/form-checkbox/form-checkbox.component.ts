import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormCheckboxComponent implements OnInit {

  @Input() color: string;
  @Input() checked: string;
  @Input() disabled: string;

  constructor() { }

  ngOnInit() {
  }

}
