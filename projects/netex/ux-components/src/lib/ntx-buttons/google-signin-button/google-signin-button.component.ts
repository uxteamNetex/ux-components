import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ntx-google-signin-button',
  templateUrl: './google-signin-button.component.html',
  styleUrls: ['./google-signin-button.component.scss']
})
export class GoogleSigninButtonComponent implements OnInit {

  @Output() clickLink = new EventEmitter();
  @Input() selected: boolean;
  
  constructor() { }

  ngOnInit() { }
 
  onClickLink() {
		this.clickLink.emit();
	}

}
