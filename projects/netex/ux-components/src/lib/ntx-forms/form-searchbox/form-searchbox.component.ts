import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatInput } from '@angular/material';

@Component({
  selector: 'ntx-form-searchbox',
  templateUrl: './form-searchbox.component.html',
  styleUrls: ['./form-searchbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormSearchboxComponent implements OnInit {

  searchTerm: string;
  active: boolean;

  constructor() { }

  ngOnInit() { }

}
