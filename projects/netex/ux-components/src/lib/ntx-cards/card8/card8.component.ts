import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'ntx-card8',
  templateUrl: './card8.component.html',
  styleUrls: ['./card8.component.scss']
})
export class Card8Component implements OnInit {


  @Input() hidden: string;

  status = false;

  clickEvent() {
      this.status = !this.status;
  }

  constructor() { }

  ngOnInit() {
  }

}
