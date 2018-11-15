import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-form-radiobutton',
  templateUrl: './form-radiobutton.component.html',
  styleUrls: ['./form-radiobutton.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormRadiobuttonComponent implements OnInit {

  radiobuttons: string[] = ['Im a radio button', 'Im not a radio button'];

  @Input() color: string;
  @Input() checked: string;
  @Input() disabled: string;

  constructor() { }

  ngOnInit() {
  }

}
