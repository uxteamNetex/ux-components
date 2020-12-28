import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

export interface ToolbarType {
	label: string;
	selector: string;
}

@Component({
	selector: 'app-toolbars-examples',
	templateUrl: './toolbars-examples.component.html',
	styleUrls: ['./toolbars-examples.component.scss']
})
export class ToolbarsExamplesComponent implements OnInit {

	toolbarTypes: ToolbarType[] = [
		{
			label: "back toolbar",
			selector: "<ntx-toolbar-back>"
		},
		{
			label: "toolbar with tabs",
			selector: "<ntx-toolbar-tabs>"
		},
		{
			label: "toolbar back tabs without action button",
			selector: "<ntx-toolbar-back-tabs>"
		},
		{
			label: "toolbar back tabs with action button",
			selector: "<ntx-toolbar-back-tabs action='launch'>"
		},
		{
			label: "toolbar back tabs with another action button",
			selector: "<ntx-toolbar-back-tabs action='finish'>"
		}];

	constructor(private dashboardService: DashboardService) { }

	apps: any[];
	menuAvatarOptions: any[];

	ngOnInit() {
		this.apps = this.dashboardService.getDashboardApps();
		this.menuAvatarOptions=[
			{
			  id: 1,
			  label: 'Suzanne Axtens',
			  src:'assets/images/user_female_01.jpg',
			  active: false
			},
			{
			  id: 2,
			  label: 'Sara Dyhouse',
			  src:'assets/images/user_female_02.jpg',
			  active: true
			},
		  ];
	}
	

}
