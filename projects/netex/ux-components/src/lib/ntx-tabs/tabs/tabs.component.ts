import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {

  constructor() { }

  links = ['First', 'Second', 'Third', 'Fourth'];
  selectedIndex : number = 0;

  ngOnInit() {
  }

}
