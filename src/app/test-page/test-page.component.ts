import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
	selector: 'app-test-page',
	templateUrl: './test-page.component.html',
	styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

	data: any[];

	apps: any[];

	constructor(private dashboardService: DashboardService) {}

	ngOnInit() {
		this.apps = this.dashboardService.getDashboardApps();
		this.data = [{
			title: '',
			description: 'La pregunta no es pertinente / NS /NC / No posee esta competencia.',
			value: '0'
		},
		{
			title: '1. Leader in results',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			value: '1'
		},
		{
			title: '2. Results oriented',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			value: '2'
		},
		{
			title: '3. Not very good with results',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
			value: '3'
		}];
	}

}