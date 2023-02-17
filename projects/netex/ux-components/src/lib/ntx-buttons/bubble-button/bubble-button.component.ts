import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ntx-bubble-button',
  templateUrl: './bubble-button.component.html',
  styleUrls: ['./bubble-button.component.scss']
})
export class BubbleButtonComponent implements OnInit {

  @Input() count=0;
  constructor() { }

  ngOnInit() {
  }

}
