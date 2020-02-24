import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ntx-card15',
  templateUrl: './card15.component.html',
  styleUrls: ['./card15.component.scss']
})
export class Card15Component implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }

}
