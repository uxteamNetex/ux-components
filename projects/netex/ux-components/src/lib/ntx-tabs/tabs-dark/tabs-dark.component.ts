import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-tabs-dark',
  templateUrl: './tabs-dark.component.html',
  styleUrls: ['./tabs-dark.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsDarkComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }

}
