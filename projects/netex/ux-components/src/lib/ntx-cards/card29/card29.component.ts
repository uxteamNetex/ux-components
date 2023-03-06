import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ntx-card29',
  templateUrl: './card29.component.html',
  styleUrls: ['./card29.component.scss']
})
export class Card29Component implements OnInit {

  @Input() bgColor: string;
  @Input() score: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
