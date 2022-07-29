import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ntx-social-avatar-bubble',
  templateUrl: './social-avatar-bubble.component.html',
  styleUrls: ['./social-avatar-bubble.component.scss']
})
export class SocialAvatarBubbleComponent implements OnInit {
  
  @Input() label:string | undefined;
  @Input() src:string | undefined;

  private _active: boolean;
	get active(): boolean {
		return this._active;
	} 
	@Input()
	set active(value: boolean) {
		this._active = coerceBooleanProperty(value);
	}

  constructor() { }

  ngOnInit(): void {
    this.label = this.label || 'user name';
  }

}
