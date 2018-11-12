import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'ntx-category-chip',
  templateUrl: './category-chip.component.html',
  styleUrls: ['./category-chip.component.scss']
})
export class CategoryChipComponent implements OnInit {

  Arr = Array;
  num:number = 3;

  removable = true;
  @Input() color: string;
  @Input() disabled: string;

  constructor() { }

  ngOnInit() {
  }

}
