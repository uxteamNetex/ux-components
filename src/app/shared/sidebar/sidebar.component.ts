import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { TabsHeaderService } from '../services/tabs-header.service';


const LINKS = [
  "buttons",
  "toolbars",
  "panels",
  "icons",
  "cards",
  "lists",
  "tabs",
  "menus"
];
const LINKSHELPERS = [
  "paddings"
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  links: string[] = LINKS;
  linkshelpers: string[] = LINKSHELPERS;

  constructor(
    private sidenavService: SidenavService,
    private tabsHeaderService: TabsHeaderService
  ) { }

  ngOnInit() {
  }

  setPath(value: string) {
    this.sidenavService.menu.close();
    this.tabsHeaderService.setPath(value);
  }

}
