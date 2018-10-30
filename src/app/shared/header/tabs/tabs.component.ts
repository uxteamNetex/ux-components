import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  public path: string;
  public tabs: Tab[] = TABS;

  constructor(
    private router: Router,
    private tabsHeaderService: TabsHeaderService
  ) {}

  ngOnInit() {
    this.tabsHeaderService.getPath().subscribe((val: string) => {
      this.path = val;
    });
    console.log('init tabs');
  }

  // ngOnDestroy() {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   console.log('on destroy tabs');
  // }

}
