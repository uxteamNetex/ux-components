import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'ntx-square-button',
  templateUrl: './square-button.component.html',
  styleUrls: ['./square-button.component.scss']
})
export class SquareButtonComponent implements OnInit {

  @Input() disabled: string;


  public isSelected = false;

  clickEvent() {
    this.isSelected = !this.isSelected;
  }


  constructor() { }

  ngOnInit() {
  }

}
