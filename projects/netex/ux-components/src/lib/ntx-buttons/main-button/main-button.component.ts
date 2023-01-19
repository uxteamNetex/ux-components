import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ntx-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss']
})
export class MainButtonComponent implements OnInit {

  @Input() color: string;
	@Input() disabled: string;
	@Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
