import { AfterContentInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatCardActions, MatGridList } from '@angular/material';

const USER1 = {
	background: 'assets/images/bg-01.png',
	avatar: 'assets/images/user_female_04.jpg',
	name : 'Bernice Greaves',
	mail : 'berni.graves@nydailynews.com',
};
const USER2 = {
	background: 'assets/images/bg-02.png',
	avatar: 'assets/images/user_male_01.png',
	name : 'Jerry Basile',
	mail : 'jerry.basile@netexlearning.com',
	phone : '+506 222 208 1399',
	location : 'Maleevsk'
};
const USER3 = {
	background: 'assets/images/bg-03.png',
	avatar: 'assets/images/user_female_01.jpg',
	name : 'Suzanne Axtens',
	mail : 'saxtens6@canalblog.com',
	phone : '+55 350 126 9913',
	location : 'Salanegara'
};
const ACTIONS1 = [
	{
		label: 'Profile',
		link: '#',
		active: true
	},
	{
		label: 'Evaluation',
		link: '#',
		active: false
	},
	{
		label: 'Another action',
		link: '#',
		active: false
	}
];
const ACTIONS2 = [
	{
		label: 'Profile',
		link: '#',
		active: true
	},
	{
		label: 'Evaluation',
		link: '#',
		active: false
	},
	{
		label: 'Another action',
		link: '#',
		active: false
	}
];
const ACTIONS3 = [
	{
		label: 'Profile',
		link: '#',
		active: true
	},
	{
		label: 'Evaluation',
		link: '#',
		active: false
	},
	{
		label: 'Another action',
		link: '#',
		active: false
	}
];

const BADGE1 = {
	bgColor: '#1FAE96',
	label: 'TBPi',
	value: '68',
};

const BADGE2 = {
	bgColor: '#d65292',
	label: 'XYZ',
	value: '29',
};

const BADGE3 = {
	bgColor: '#1FAE96',
	label: 'TBPi',
	value: '68',
};

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {

	user1 = USER1;
	actions1 = ACTIONS1;
	user2 = USER2;
	user3 = USER3;
	badge1 = BADGE1;
	badge2 = BADGE2;
	badge3 = BADGE3;
	actions2 = ACTIONS2;
	actions3 = ACTIONS3;

	constructor() { }

	ngOnInit() {
	}

}
