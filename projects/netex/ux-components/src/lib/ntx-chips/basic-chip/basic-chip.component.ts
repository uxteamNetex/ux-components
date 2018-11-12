import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'ntx-basic-chip',
  templateUrl: './basic-chip.component.html',
  styleUrls: ['./basic-chip.component.scss']
})
export class BasicChipComponent implements OnInit {

  Arr = Array;
  num: number = 3;

  removable = true;
  @Input() color: string;
  @Input() disabled: string;

  constructor() { }

  ngOnInit() {
  }

}
