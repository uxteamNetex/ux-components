import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ntx-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.scss']
})
export class Card3Component implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() subtitle2: string;
  @Input() subtitle3: string;
  @Input() subtitle3Color: string;
  @Input() image?: string;
  @Input() badgeColor?: string;

  private _showOptions: boolean;
	get showOptions(): boolean {
		return this._showOptions;
	} 
	@Input()
	set showOptions(value: boolean) {
		this._showOptions = coerceBooleanProperty(value);
	}

  constructor() { }

  ngOnInit() {
  }

}
