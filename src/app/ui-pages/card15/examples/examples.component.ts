import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';

const USER = {
	background: 'assets/images/background-profile-header.jpg',
	avatar: 'assets/images/perfil.jpg',
	name : 'Bernice Greaves',
	mail : 'berni.graves@netexlearning.com',
	phone : '+34 765432190',
	location : 'A Coruña',
	actions: [
		{
			label: 'Profile',
			link: '#'
		},
		{
			label: 'Evaluation',
			link: '#'
		},
		{
			label: 'Another action',
			link: '#'
		}
	]
};

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

	user = USER;

	constructor() { }

	ngOnInit() {
	}

}
