import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ntx-card25',
  templateUrl: './card25.component.html',
  styleUrls: ['./card25.component.scss']
})
export class Card25Component implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }

}
