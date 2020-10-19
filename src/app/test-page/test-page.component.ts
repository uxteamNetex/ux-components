import { Component, OnInit } from '@angular/core';

const ITEM3 = {
	actions: [
		{
			label: 'Acción',
			state: 'primary',
			active: '',
			disabled: ''
		},
		{
			label: 'Acción',
			state: 'primary',
			active: '',
			disabled: 'disabled'
		},
		{
			label: 'Acción',
			state: 'accent',
			active: '',
			disabled: ''
		},
		{
			label: 'Acción active',
			state: 'accent',
			active: 'active',
			disabled: ''
		},
		{
			label: 'Acción',
			state: 'accent',
			active: '',
			disabled: 'disabled'
		},
		{
			label: 'Acción',
			state: 'white',
			active: '',
			disabled: ''
		},
		{
			label: 'Acción',
			state: 'white',
			active: '',
			disabled: 'disabled'
		}
	]
};

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

	list1 = [
		{
			labelPrincipal: 'Web designer',
			labelSecondary: '25%',
			labelRouterLink: '/home'
		},
		{
			labelPrincipal: 'Graphic designer / illustrator',
			labelSecondary: '65%',
			labelRouterLink: '/home'
		},
		{
			labelPrincipal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			labelSecondary: '24%',
			labelRouterLink: '/home'
		}
	];

	list2 = [
		{
			labelPrincipal: 'Customer oriented',
			labelSecondary: '80',
			labelRouterLink: undefined
		},
		{
			labelPrincipal: 'Graphic designer / illustrator',
			labelSecondary: '78',
			labelRouterLink: undefined
		},
		{
			labelPrincipal: 'Organisation lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			labelSecondary: '67',
			labelRouterLink: undefined
		}
	];

	list3 = [
		{
			labelPrincipal: 'Customer oriented',
			labelSecondary: undefined,
			labelRouterLink: undefined
		},
		{
			labelPrincipal: 'Graphic designer / illustrator',
			labelSecondary: undefined,
			labelRouterLink: undefined
		},
		{
			labelPrincipal: 'Organisation lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			labelSecondary: undefined,
			labelRouterLink: undefined
		}
	];

	item3 = ITEM3;

  constructor() { }

  ngOnInit() { }

}
