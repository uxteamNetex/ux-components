import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor( public sidenavService: SidenavService) { }

  ngOnInit() {}

  toggleMenu() {
    this.sidenavService.menu.toggle();
  }

}
