import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-form-searchbox-dark',
  templateUrl: './form-searchbox-dark.component.html',
  styleUrls: ['./form-searchbox-dark.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormSearchboxDarkComponent implements OnInit {

  @Input() tooltipButtonSearch: string;
  @Input() placeholder: string;
  @Input() tooltipButtonClear: string;

  value = '';

  constructor() { }

  ngOnInit() {
  }

}
