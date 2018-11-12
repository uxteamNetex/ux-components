import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'ntx-image-chip',
  templateUrl: './image-chip.component.html',
  styleUrls: ['./image-chip.component.scss']
})
export class ImageChipComponent implements OnInit {

  Arr = Array;
  num:number = 3;

  removable = true;
  @Input() color: string;
  @Input() disabled: string;

  constructor() { }

  ngOnInit() {
  }

}
