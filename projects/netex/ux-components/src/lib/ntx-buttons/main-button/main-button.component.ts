import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainButtonComponent implements OnInit {

	@Input() title: string;
  @Input() tooltip: string;
  @Input() type: string;
  @Input() state: boolean;
  @Input() icon: string;
  @Input() size: string;

  constructor() { }

  ngOnInit() {
  }

}
