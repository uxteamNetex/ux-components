import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ntx-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor() { }

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];

  ngOnInit() {
  }

}
