import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'ntx-rectangular-button',
  templateUrl: './rectangular-button.component.html',
  styleUrls: ['./rectangular-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RectangularButtonComponent implements OnInit {

  @Input() disabled = false;
  @Input() icon: string;
  @Input() text: string;

  @Output() clickButton = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onClickButton() {
		this.clickButton.emit(Event);
	}

}
