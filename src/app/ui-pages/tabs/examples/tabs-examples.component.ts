import { Component, OnInit } from '@angular/core';

const TABSDARK = {
	actions: [
		{
			title: 'First tab',
		},
    {
			title: 'Second tab',
			state: 'selected',
		},
    {
			title: 'Third tab',
			state: 'disabled',
		}
	]
};

@Component({
  selector: 'app-tabs-examples',
  templateUrl: './tabs-examples.component.html',
  styleUrls: ['./tabs-examples.component.scss']
})
export class TabsExamplesComponent implements OnInit {

  tabsDark = TABSDARK;

  constructor() { }

  ngOnInit() {
  }

}
