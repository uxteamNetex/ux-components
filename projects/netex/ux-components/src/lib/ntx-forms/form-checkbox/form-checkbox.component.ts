import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'ntx-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormCheckboxComponent implements OnInit {

  @Input() color: string;
  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Input() hidden: boolean;

  @Output() checkboxChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  change(event: MatCheckboxChange) {
      this.checkboxChange.emit(event.checked);
  }

}
