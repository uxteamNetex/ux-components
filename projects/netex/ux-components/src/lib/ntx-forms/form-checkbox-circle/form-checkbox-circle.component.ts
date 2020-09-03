import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'ntx-form-checkbox-circle',
  templateUrl: './form-checkbox-circle.component.html',
  styleUrls: ['./form-checkbox-circle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormCheckboxCircleComponent implements OnInit {

  @Input() color: string;
  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Input() hidden: boolean;

  @Output() checkboxChange = new EventEmitter<MatCheckboxChange>();


  constructor() { }

  ngOnInit() {
  }

  onChangeCheckbox(event: MatCheckboxChange) {
    this.checkboxChange.emit(event);
  }
}
