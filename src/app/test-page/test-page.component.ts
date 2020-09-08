import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  list5Items = [
	{
		textLabel: 'Web designer',
		badgeValue: 75,
		labelRouterLink: undefined
	},
	{
		textLabel: 'Graphic designer / illustrator',
		badgeValue: 67,
		labelRouterLink: undefined
	},
	{
		textLabel: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
		badgeValue: 45,
		labelRouterLink: undefined
	}
];

  constructor() { }

  ngOnInit() { }

}
