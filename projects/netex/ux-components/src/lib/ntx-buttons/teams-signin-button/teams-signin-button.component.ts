import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ntx-teams-signin-button',
  templateUrl: './teams-signin-button.component.html',
  styleUrls: ['./teams-signin-button.component.scss']
})
export class TeamsSigninButtonComponent implements OnInit {

  @Output() clickLink = new EventEmitter();
  @Input() selected: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
