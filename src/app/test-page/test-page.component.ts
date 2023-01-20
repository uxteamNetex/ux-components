import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
	selector: 'app-test-page',
	templateUrl: './test-page.component.html',
	styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
	apps: any[];

	constructor(private dashboardService: DashboardService) {}

	ngOnInit() {
		this.apps = this.dashboardService.getDashboardApps()
	}

}