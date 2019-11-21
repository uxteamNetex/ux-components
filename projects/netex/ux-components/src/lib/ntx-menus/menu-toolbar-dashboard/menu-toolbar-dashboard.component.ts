import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-menu-toolbar-dashboard',
  templateUrl: './menu-toolbar-dashboard.component.html',
  styleUrls: ['./menu-toolbar-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MenuToolbarDashboardComponent implements OnInit {

  @Input() apps: any[];

  constructor() { }

  ngOnInit() {
  }

}
