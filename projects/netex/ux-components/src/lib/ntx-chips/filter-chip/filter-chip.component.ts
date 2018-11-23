import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-filter-chip',
  templateUrl: './filter-chip.component.html',
  styleUrls: ['./filter-chip.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilterChipComponent implements OnInit {

  constructor() { }

  radiobuttons: string[] = [
    'One',
    'Two',
    'Three',
    'Four'
  ];

  ngOnInit() {
  }

}
