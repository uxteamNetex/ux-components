import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ntx-social-avatar',
  templateUrl: './social-avatar.component.html',
  styleUrls: ['./social-avatar.component.scss']
})
export class SocialAvatarComponent implements OnInit {

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

  private _square: boolean;
	get square(): boolean {
		return this._square;
	} 
	@Input()
	set square(value: boolean) {
		this._square = coerceBooleanProperty(value);
	}

  constructor() { }

  ngOnInit(): void {
    this.label = this.label || 'user name';
  }
}
