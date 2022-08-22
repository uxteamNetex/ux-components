import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ntx-simple-avatar',
  templateUrl: './simple-avatar.component.html',
  styleUrls: ['./simple-avatar.component.scss']
})
export class SimpleAvatarComponent implements OnInit {

  @Input() label:string | undefined;
  @Input() src:string | undefined;

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
