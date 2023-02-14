import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ntx-form-select-dark',
  templateUrl: './form-select-dark.component.html',
  styleUrls: ['./form-select-dark.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormSelectDarkComponent implements OnInit {

  @Input() options!: any[];

  selected = '0';

  disableSelect = new FormControl(false);

  constructor() { }

  ngOnInit() {
  }

}
