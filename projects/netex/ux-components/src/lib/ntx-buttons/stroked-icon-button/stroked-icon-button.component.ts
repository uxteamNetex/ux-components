import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'ntx-stroked-icon-button',
  templateUrl: './stroked-icon-button.component.html',
  styleUrls: ['./stroked-icon-button.component.scss']
})
export class StrokedIconButtonComponent implements OnInit {

  @Input() color: string;
  @Input() disabled: string;

  constructor() { }

  ngOnInit() {
  }

}
