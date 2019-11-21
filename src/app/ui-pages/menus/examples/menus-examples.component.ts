import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-menus-examples',
  templateUrl: './menus-examples.component.html',
  styleUrls: ['./menus-examples.component.scss']
})
export class MenusExamplesComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  apps: any[];

  ngOnInit() {
    this.apps = this.dashboardService.getDashboardApps();
  }

}
