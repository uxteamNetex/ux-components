import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-tabs-navigation',
  templateUrl: './tabs-navigation.component.html',
  styleUrls: ['./tabs-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsNavigationComponent implements OnInit {

  constructor() { }

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];

  ngOnInit() {
  }

}
