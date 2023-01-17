import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ntx-zoom-signin-button',
  templateUrl: './zoom-signin-button.component.html',
  styleUrls: ['./zoom-signin-button.component.scss']
})
export class ZoomSigninButtonComponent implements OnInit {
  
  @Output() clickLink = new EventEmitter();
  @Input() selected: boolean;

  constructor() { }

  ngOnInit() {
  }

}
