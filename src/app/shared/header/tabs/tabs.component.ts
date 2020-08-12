import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TabsHeaderService } from '../../services/tabs-header.service';

interface Tab {
  label: string;
  pathSegment: string;
}

const TABS = [
  {
    label: 'examples',
    pathSegment: '/examples'
  },
  {
    label: 'documentation',
    pathSegment: '/documentation'
  }
];

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {

  public path: string;
  public tabs: Tab[] = TABS;

  constructor(
    public router: Router,
    private tabsHeaderService: TabsHeaderService
  ) {}

  ngOnInit() {
    this.tabsHeaderService.getPath().subscribe((val: string) => {
      this.path = val;
    });
  }

}
