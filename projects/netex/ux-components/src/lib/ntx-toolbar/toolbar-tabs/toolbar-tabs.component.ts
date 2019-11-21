import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-toolbar-tabs',
  templateUrl: './toolbar-tabs.component.html',
  styleUrls: ['./toolbar-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarTabsComponent implements OnInit {

  @Input() apps: any[];

  constructor() { }

  ngOnInit() {
  }

}
