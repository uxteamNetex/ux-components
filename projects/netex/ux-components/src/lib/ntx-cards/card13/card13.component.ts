import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-card13',
  templateUrl: './card13.component.html',
  styleUrls: ['./card13.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Card13Component implements OnInit {


  @Input() hidden: string;

  status = false;

  clickEvent() {
      this.status = !this.status;
  }

  constructor() { }

  ngOnInit() {
  }

}
