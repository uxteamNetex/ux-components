import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ntx-form-select-multiple',
  templateUrl: './form-select-multiple.component.html',
  styleUrls: ['./form-select-multiple.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormSelectMultipleComponent implements OnInit {

  @Input() label!: string;
  @Input() options!: any[];

  constructor() { }

  ngOnInit(): void { }

  counter(i: number) {
    return new Array(i);
  }

  select = new FormControl();

}
