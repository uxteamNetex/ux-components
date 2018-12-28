import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'ntx-card11',
  templateUrl: './card11.component.html',
  styleUrls: ['./card11.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Card11Component implements OnInit {

  status = false;

  @Input() color: string;

  onChange() {
    this.status = !this.status;
  }

  constructor() { }

  ngOnInit() {
  }

}
