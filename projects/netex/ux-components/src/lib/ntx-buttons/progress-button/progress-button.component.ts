import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ntx-progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.scss']
})
export class ProgressButtonComponent implements OnInit {

  degProgress=0; 
  
  @Input() progress=0;
  @Input() background='#000000';

  @Output() clickButton = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.degProgress= 3.6 * this.progress; // to convert percentage in angle degree
  }

  onClickButton(event: any) {
		this.clickButton.emit(event);
	}

}
